import { ComponentType } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '@app/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { ToastrService } from 'ngx-toastr';
import { TabComponent } from '../Shared/tab/tab.component';
import { DataModelerApiService } from './services1/data-modeler-api.service1';
import * as classes from './classes';
import * as components from './components1';
import * as models from './models1';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { catchError, EMPTY, firstValueFrom, map, Observable, of, switchMap, tap } from 'rxjs';
import { ServiceProviderService } from './services1/service-provider.service';
import { DMOSLayout } from './const1';
import { BmService } from '../core/services/bm.service';
import { GenerateXmlComponent } from '../wf/wfd/components/generatexml/generatexml.component';
import { MatDialog } from '@angular/material/dialog';
import { NgIf, NgSwitch, NgStyle, NgClass, NgFor, NgSwitchCase } from '@angular/common';
import { DmHeaderComponent } from './components1/dm-header/dm-header.component';
import { UtilService } from '@app/shared/services/util.service';
import { DmMenuComponent } from './components1/dm-menu/dm-menu.component';
import { LeftSidePanelComponent } from './components1/dmog-new-design/left-side-panel/left-side-panel.component';
import { TabsComponent } from '../Shared/tabs/tabs.component';
import { DmogFormViewComponent } from './components1/dmog-form-view/dmog-form-view.component';

type ObjectClass = classes.ObjectClass;

@Component({
    selector: 'app-data-modeler1',
    templateUrl: './data-modeler1.component.html',
    styleUrls: ['./data-modeler1.component.scss'],
    standalone: true,
    imports: [NgIf, DmHeaderComponent, DmMenuComponent, NgSwitch, NgStyle, NgClass, LeftSidePanelComponent, TabsComponent, NgFor, TabComponent, NgSwitchCase, DmogFormViewComponent]
})
export class DataModeler1Component implements OnInit {
    UpdatedData: any;
    @Input() sideNavModel: any;
    @Input() selectedItemFromchild: any;
    isDrawerOpen = false;
    sidebarclose: boolean = false;
    public bm: classes.BM;
    alertMsgTxt: string[] = [];
    hideSidebar: false;
    selectedBMOGMap: { [key: string]: any } = {};
    private readonly encryptedBMId = this.route.snapshot.queryParams.BMID;
    @Output() AddDmog = new EventEmitter<any>();
    dmoMode: any;
    clickedTabData: any={};
    processDisplayName: any;
    proccessName: any;
    ProcessList: any;
    isDraggingStart:any;
    contactsImageUrl = UtilService.getUrlForImage('/assets/styles/images/contacts-bmo.jpg');
    attachmentsImageUrl = UtilService.getUrlForImage('/assets/styles/images/attachments-bmo.jpg');
    documentsImageUrl = UtilService.getUrlForImage('/assets/styles/images/documents-bmo.jpg');
    sharedChildProcessImageUrl = UtilService.getUrlForImage('/assets/styles/images/shared-child-process-bmo.jpg');
    leftDrawerIconUrl = UtilService.getUrlForImage('/assets/admin-assets/images/fi-rr-angle-small-left.png');
    rightDrawerIconUrl = UtilService.getUrlForImage('/assets/admin-assets/images/fi-rr-angle-small-right-black.png');
    backsImageUrl = UtilService.getUrlForImage('/assets/styles/images/back-icon-black.png');

    NewSelectedBm: any;
    NewSelecteddmogData: any;

    readonly panelControls = Object.values(DMOSLayout);
    get tabActions() {
        return { edit: true, delete: !this.bm.published };
    }

    get allowNewDMOG() {

        return (
            this.bm?.selectedBMOG?.Children?.length &&
            this.bm?.selectedBMO?.BmoType === 'Forms' &&
            !this.bm.selectedBMO?.shared &&
            !this.bm.published
        );
    }

    constructor(
        private bmService: BmService,
        private readonly route: ActivatedRoute,
        private readonly msg: MessageService,
        private readonly toast: ToastrService,
        private readonly dmApi: DataModelerApiService,
        private readonly formViewApi: FormViewApiService,
        private readonly dataProvider: ServiceProviderService,
        private readonly renderer: Renderer2,
        private readonly cdref: ChangeDetectorRef,
        readonly dialog: MatDialog
    ) {


        this.dataProvider.getOpenSidebarNav().subscribe(data => {

            this.sideNavModel = data;
            this.isDrawerOpen = true;
            this.isDrawerOpen = true;

        });
        this.dataProvider.getSidebarclose().subscribe(data => {
            if (data) {
                this.isDrawerOpen = false;

            }
        });

    }

    ngOnInit() {
        this.renderer.removeClass(document.body, 'no-scroll');

        const style = this.renderer.createElement('style');
        style.innerHTML = `
      body::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }
      body {
        -ms-overflow-style: none;
        overflow-y: scroll;
      }
    `;
        this.renderer.appendChild(document.head, style);

        this.getBM();
    }

    public getBM() {
        const { ProcessName, Name, Version } = this.route.snapshot.data?.bm as models.IBM;
        this.dmApi.getData(ProcessName, Name, Version).subscribe((bm) => {
            this.bm = bm;
	     if(this.bm){
                this.clickedTabData.DisplayName = this.bm.DisplayName;
                this.proccessName = ProcessName;
            }
            const tabId = this.route.snapshot.queryParams['tabId'] || localStorage.getItem(`lastTabId_${bm.BMId}`);
            if (tabId) {
                this.activateTabById(tabId);
            } else {
                this.activateFirstTab();
            }
        });
    }
     getBMsubscribe() {
      const { ProcessName, Name, Version } = this.route.snapshot.data?.bm as models.IBM;
     return this.dmApi.getData(ProcessName, Name, Version);
  }
    // Helper to activate tab by id
    activateTabById(tabId: string) {
        if (!this.bm) return;
        if (!this.bm.Children || !this.bm.childrenMap) {
            this.activateFirstTab();
            return;
        }
        if (this.tryActivateParentTab(tabId, this.bm.Children, this.bm.childrenMap)) {
            return;
        }
        this.activateFirstTab();
    }

    private tryActivateParentTab(tabId: string, children: string[], childrenMap: any): boolean {
        for (const bmogId of children) {
            const bmog = childrenMap[bmogId];
            if (!bmog) continue;
            if (bmog.id === tabId) {
                this.selectParentTab(bmog);
                this.onTabClick({ data: bmog, disabled: false } as any);
                return true;
            }
            if (bmog.Children && bmog.childrenMap) {
                if (this.tryActivateChildTab(tabId, bmog)) {
                    return true;
                }
            }
        }
        return false;
    }

    private tryActivateChildTab(tabId: string, parent: any): boolean {
        for (const bmoId of parent.Children) {
            const bmo = parent.childrenMap[bmoId];
            if (bmo.id === tabId.toLocaleLowerCase()) {
                this.selectParentTab(parent);
                this.selectChildTab(bmo);
                this.onTabClick({ data: bmo, disabled: false } as any);
                return true;
            }
        }
        return false;
    }

    // Activate first tab by default if nothing is found
    activateFirstTab() {
        if (this.bm?.Children && this.bm?.childrenMap) {
            const firstBmogId = this.bm.Children[0];
            const firstBmog = this.bm.childrenMap[firstBmogId];
            if (firstBmog) {
                this.selectParentTab(firstBmog);
                if (firstBmog.Children && firstBmog.childrenMap) {
                    const firstBmoId = firstBmog.Children[0];
                    const firstBmo = firstBmog.childrenMap[firstBmoId];
                    if (firstBmo) {
                        this.selectChildTab(firstBmo);
                        // Simulate tab click for child
                        this.onTabClick({ data: firstBmo, disabled: false } as any);
                    } else {
                        // Simulate tab click for parent
                        this.onTabClick({ data: firstBmog, disabled: false } as any);
                    }
                } else {
                    // Simulate tab click for parent
                    this.onTabClick({ data: firstBmog, disabled: false } as any);
                }
            }
        }
    }

    selectParentTab(bmog: any) {
        if (this.bm.selectedBMOG) {
            // Save last selected child for the current parent before switching
            this.selectedBMOGMap[this.bm.selectedBMOG.id] = this.bm.selectedBMO;
        }

        // Switch to new parent
        this.bm.selectedBMOG = bmog;

        // Restore the previously selected child for this parent, if exists
        this.bm.selectedBMO = this.selectedBMOGMap[bmog.id] || bmog.Children?.[0];
    }

    selectChildTab(bmo: any) {
        this.bm.selectedBMO = bmo;
    }


    public onTabClick(tab: TabComponent) {
        // Persist last selected tab id (using bm.BMId as context)
        if (this.bm?.BMId && tab?.data?.id) {
            localStorage.setItem(`lastTabId_${this.bm.BMId}`, tab.data.id);
        }
        if (tab?.disabled) {
            this.getObjectDetails(tab?.data);
            this.sidebarclose = true;
            this.dataProvider.setSidebarclose(this.sidebarclose);
        }
        if (tab?.data) {
            this.clickedTabData = tab.data;
            if (tab.data?.ChildProcessId) {
                this.getChildProcess(tab.data.ChildProcessId)
            }
            else if (tab.data?.SubProcessId) {
                this.getSubProcess(tab.data.SubProcessId)
            }
            else if(tab.data.BMOGID || tab.data.BMOID){
                this.proccessName = tab.data.Name;
                this.processDisplayName =  tab.data.DisplayName;
            }
            else {
                this.getBMOChildDetails(tab.data.parent?._selectedBMO)
            }
        }
    }


    getBMOChildDetails(selectedBMO: any) {
        let childId: string | null = null;
        let childName: string | null = null;

        if (!selectedBMO) {
            console.warn("No BMO selected!");
            return null;
        }

        if (selectedBMO.BmoType === "ChildProcess" && selectedBMO.ChildProcessId) {
            childId = selectedBMO.ChildProcessId;
            this.proccessName = selectedBMO.Name;
            this.clickedTabData.DisplayName = selectedBMO.DisplayName;
        } else if (selectedBMO.BmoType === "SubProcess" && selectedBMO.SubProcessId) {
            childId = selectedBMO.SubProcessId;
            this.proccessName = selectedBMO.Name;
            this.clickedTabData.DisplayName = selectedBMO.DisplayName;

        } else {
            console.warn("No valid ChildProcess or SubProcess found.");
        }
        return { childId, childName };
    };

    getChildProcess(ProcessId: any): void {
        const bmId = this.bm?.BMId != null ? this.bm.BMId.toString() : this.route.snapshot.data?.bm?.BMId?.toString();
        this.dmApi.getChildProcessList(bmId).subscribe(response => {
            this.ProcessList = response;

            if (this.ProcessList?.length) {
                const childProcess = this.ProcessList.find(a => a.Value === ProcessId);
                this.proccessName = childProcess?.Label;
                this.processDisplayName = childProcess?.Label;
            }
        });
    }

    getSubProcess(ProcessId: any): void {
        this.dmApi.getSubprocessList(this.bm.BMId.toString()).subscribe(response => {
            this.ProcessList = response;

            if (this.ProcessList?.length) {
                const subProcess = this.ProcessList.find(a => a.Value === ProcessId);
                this.proccessName = subProcess?.Label;
                this.processDisplayName = subProcess?.Label;
            }
        });
    }

    goToBMGrid() {
        if (!this.proccessName || !this.clickedTabData?.DisplayName) {
            console.error('Required data is missing');
            return;
        }
        try {
            const existingValues = { ...sessionStorage };
            
            sessionStorage.setItem('AppName', this.proccessName);
            sessionStorage.setItem('DisplayName', this.processDisplayName ? this.processDisplayName : this.clickedTabData.DisplayName);
            
            const storedAppName = sessionStorage.getItem('AppName');
            const storedDisplayName = sessionStorage.getItem('DisplayName');
            
            if (storedAppName === this.proccessName && 
                (storedDisplayName === this.clickedTabData.DisplayName || storedDisplayName ===  this.processDisplayName)) {
                window.open('/admin/bm', '_blank');
            } else {
                console.error('Failed to update session storage values');
                Object.entries(existingValues).forEach(([key, value]) => {
                    sessionStorage.setItem(key, value);
                });
            }
        } catch (error) {
            console.error('Error updating session storage:', error);
        }
    } 

    public onTabSelect(tab: TabComponent<ObjectClass>) {
        this.bm.updateSelectedObjects(tab.data);
        this.sidebarclose = true;
        this.dataProvider.setSidebarclose(this.sidebarclose);
        // this.selectParentTab(tab)
        // this.selectChildTab(tab)
    }

    public onTabEdit(tab: TabComponent<ObjectClass>) {

      if (tab.data instanceof classes.BMO) {

        this.getBMsubscribe().subscribe({
          next: (bm) => {
              this.bm = bm
               setTimeout(() => {
                this.openObjectDetails(tab.data);
              this.sidebarclose = true;
              this.dataProvider.setSidebarclose(this.sidebarclose);
               }, 10);
              
          },
          error: (_) => {
              // Handle error if needed
          }
      });
     
      }else{
        this.openObjectDetails(tab.data);
        this.sidebarclose = true;
        this.dataProvider.setSidebarclose(this.sidebarclose);
      }
     
      
      
      
    }

    public openObjectDetails(obj: ObjectClass) {
        this.getObjectDetails(obj.parent as ObjectClass, obj);
    }

    public onTabRemove(tab: TabComponent<ObjectClass>) {
        const obj = tab.data;
        let className = '';
        if (obj instanceof classes.BM) {
            className = 'BM';
        } else if (obj instanceof classes.BMOG) {
            className = 'View';
        } else if (obj instanceof classes.BMO) {
            className = 'Section';
        } else if (obj instanceof classes.DMOG) {
            className = 'Card';
        }
      
        const name = (obj as any)?.DisplayName || obj.Name;
        const isSection = className === 'Section';
        const btnText = isSection ? 'Unshare' : 'Delete';
        const checkboxText = `Yes, ${btnText.toLowerCase()} this object`;
        this.msg.showMessage('Warning', {
            header: `${btnText} ${className}`,
            body: `Are you sure you want to ${btnText.toLowerCase()} ${name}?`,
            btnText: `${btnText}`,
            checkboxText: checkboxText,
            isDelete: true,
            undoable: isSection,
            isNewDesign: true,
            callback: () => this.deleteObject(obj),
        });
    }

    private deleteObject(obj: ObjectClass) {
        const parent = obj.parent;

        // Store obj index in case optimistic update fails
        const idx = parent.Children.findIndex((id) => id === obj.id);

        // Optimistic ui update
        parent.removeChild(obj.id);

        // Rollback optimistic update if something goes wrong
        const rollback = () => parent.addChildAt(obj as any, idx);

        this.dmApi.deleteObject(obj, this.bm).subscribe({
            next: (success) => (!success ? rollback() : this.getBM()),
            error: (_) => rollback(),
        });
    }


    public onNewVersion() {
        this.msg.showMessage('Warning', {
            header: 'New Version',
            body: 'Are you sure you want to create new version?',
            callback: () => {
                this.dmApi.createBMVersion(this.encryptedBMId).subscribe((message) => {
                    this.toast.success(message);
                });
            },
            btnText: 'Create New Version',
            isConfirmation: true,
        });
    }

    dropped(e: { from: number, to: number }, parent: ObjectClass) {
        // if ('BMID' in parent) return;
        moveItemInArray(parent.Children, e.from, e.to);
        this.dmApi.reorderChildren(parent)
            .subscribe({
                next: (_) => this.getBM(),
                error: (_) => moveItemInArray(parent.Children, e.to, e.from),
            });
    }

    public onGenerateXML() {
        this.bmService.generateXML1(this.bm.ProcessName, this.bm.Version).pipe(
                  tap(response => {
                    // build your alerts array
                    this.alertMsgTxt = [];
                    if (!response) {
                      throw new Error('No response from generateXML1');
                    }
                    if (response.IsBMWFLinked === 0)         this.alertMsgTxt.push("BM-WF is not linked.");
                    if (response.IsLive === 0)               this.alertMsgTxt.push("BM-WF is not live.");
                    if (response.IsCmpnyGrpExists === 0)     this.alertMsgTxt.push("Company Group does not exist.");
                    if (response.IsCmpnyBMObjectLinked === 0)this.alertMsgTxt.push("Company-BM Objects are not linked.");
          
                    if (this.alertMsgTxt.length > 0) {
                      throw new Error('Validation errors');
                    }
                  }),switchMap(() => this.bmService.generateXML(this.bm.ProcessName, this.bm.Version)),
                            catchError(err => {
                              this.showErrorModal();
                              return of(false);
                            })
                          ).subscribe(success => {
                            if (success) {
                              this.toast.success('JSON generated successfully');
                            }
                          });
    }
private showErrorModal(): void {
  // Code to open the modal
  const dialogRef = this.dialog.open(GenerateXmlComponent, {
    width: '656px',
    disableClose: true,
    panelClass: 'custom-dialog-container',
    data: {
      type: 'bm',
      processName: this.bm.ProcessName,
      verNo: this.bm.Version,
      alertMsgTxt: this.alertMsgTxt
    }
  });

  dialogRef.componentInstance.closeModal.subscribe(() => {
    dialogRef.close();
  });
}
    public changeMode(mode: models.BMMode) {
        this.dmoMode = mode;
        if (mode === this.bm.Mode) return;
        this.dmApi.changeMode(this.bm.BMId, mode).subscribe((success) => {
            if (success) {
                this.bm.update({ Mode: mode });
            }
        });
    }
    private async getObjectDetails(parent: ObjectClass, data: Partial<ObjectClass> = {}) {
        const newObject = Object.keys(data).length === 0;
        const { component } = this.determineClassAndComponent(parent, data);

        const modal = this.msg.showComponent(component, { data: data as ObjectClass, parent, newObject });
        const res = await modal.result;
        if (!res) return;

        if (parent === undefined && data instanceof classes.BM) {
            this.saveBMDetails(res);
            return;
        }
  
       if (res.removedItems) {
            const processName = sessionStorage.getItem("AppName");

            if (parent instanceof classes.BMOG && res.removedItems.domgNames !== "-1") {
                await firstValueFrom(
                this.dmApi.deleteDmog(processName, res.removedItems.domgNames)
                );
            } else if (parent instanceof classes.BM && res.removedItems.bmoNames !== "-1") {
                await firstValueFrom(
                this.dmApi.deleteBmo(processName, res.removedItems.bmoNames, this.bm.Version)
                );
            }
            }
        const saveSharedDmogs = (id: string) => {
            if (parent instanceof classes.BM) {
                if (res.shared.bmoIds === '-1' && !newObject) {
                    return EMPTY;
                }

                res.shared.bmogId = id || res.shared.bmogId;
                return this.dmApi.saveSharedBmos(res.shared.bmogId, res.shared.bmoIds);
            }
            else if (parent instanceof classes.BMOG) {
                if (res.shared.dmogIds === '-1' && !newObject) {
                    return EMPTY;
                }

                res.shared.bmoId = id || res.shared.bmoId;
                return this.dmApi.saveSharedDmogs(res.shared.bmoId, res.shared.dmogIds);
            }
            else if (parent instanceof classes.BMO) {
                if (res.shared.leftDMOGuids === '-1' && res.shared.rightDMOGuids === '-1' && !newObject) {
                    return EMPTY;
                }
                return this.dmApi.saveSharedDmos(res.shared);
            }
        };

 
       
        this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs );
    }



    private saveBMDetails(payload: models.IBM) {
        this.dmApi.saveBM(payload).subscribe((success) => {
            if (success) {
                this.bm.update(payload);
            }
        });
    }

    public saveObjectDetails(parent: ObjectClass, obj: Partial<ObjectClass> = {}, payload: models.ObjectType, finalize?: (id: string) => Observable<any>) {
        const newObject = Object.keys(obj).length === 0;
        // Store data in case optimistic update fails
        const original = { ...obj };
        let newChild: any;

        // Optimistic ui update
        if (newObject) {
            const { childClass } = this.determineClassAndComponent(parent);
            newChild = new childClass(payload, parent);
            parent.addChild(newChild); // This adds the child to the parent
        } else {
            obj.update(payload);
        }

        // Rollback optimistic update if something goes wrong
        const rollback = () => {
            if (newObject) {
                parent.removeChild(payload.id);
            } else {
                obj.update(original);
            }
        };

        this.dmApi.saveObject(payload, this.bm)
            .pipe(
                switchMap(id => {
                    if (finalize) {
                        return finalize(id).pipe(map(() => id));
                    }
                    return of(id)
                })
            )
            .subscribe({
                next: (success) => {
                    if (!success) rollback();
                    else {
                        this.bm.cacheObjectId(payload);
                        
                        // Activate the newly created tab after successful save
                        if (newObject && newChild) {
                            // If it's a BMOG (parent tab)
                            if (newChild instanceof classes.BMOG) {
                                this.selectParentTab(newChild);
                                // Store this tab as the last active for this BM
                                localStorage.setItem(`lastTabId_${this.bm.BMId}`, newChild.id);
                            } 
                            // If it's a BMO (child tab)
                            else if (newChild instanceof classes.BMO) {
                                // First select the parent if needed
                                if (this.bm.selectedBMOG !== parent) {
                                    this.selectParentTab(parent);
                                }
                                this.selectChildTab(newChild);
                                // Store this tab as the last active for this BM
                                localStorage.setItem(`lastTabId_${this.bm.BMId}`, newChild.id);
                            }
                            // If it's a DMOG 
                            else if (newChild instanceof classes.DMOG && parent instanceof classes.BMO) {
                                // Handle selecting the correct hierarchy
                                if (this.bm.selectedBMO !== parent) {
                                    this.selectChildTab(parent);
                                }
                            }
                        }
                    }
                },
                error: (_) => rollback(),
                complete: () => this.getBM(),
            });
    }

    private determineClassAndComponent(parent: ObjectClass, data: Partial<ObjectClass> = {}) {
        let component: ComponentType<models.ObjectDetail<models.ObjectType, models.ObjectType>>;
        let childClass: any;
        if (parent instanceof classes.BM) {
            component = components.BmogDetailComponent;
            childClass = classes.BMOG;
        } else if (parent instanceof classes.BMOG) {
            component = components.BmoDetailComponent;
            childClass = classes.BMO;
        } else if (parent instanceof classes.BMO) {
            component = components.DmogDetailComponent;
            childClass = classes.DMOG;
        } else if (parent === undefined && data instanceof classes.BM) {
            component = components.BmDetailComponent;
            childClass = undefined;
        }
        return { component, childClass };
    }

    public async onDropLayout(event: CdkDragDrop<any, any>) {
        this.dataProvider.setNewlyBmog(event)

    }

    toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }
    GetUpdatedDataForSidepanle(event) {
        if (event) {
            this.UpdatedData = event
        }
    }
    sideNavModelEmitter(event) {
        if (event) {
            this.sideNavModel = event;
        }
    }
    isDrawerOpenEmitter(event) {
        if (event) {
            this.isDrawerOpen = event;
        }
    }

    sideNavModelemit(event) {
        if (event) {

        }
    }
    updatedbmo(event) {
        this.bm = event;
        this.Save_reOrder(this.bm._selectedBMOG, this.bm._selectedBMO, this.bm._selectedBMO)

    }

    private async Save_reOrder(parent: any, payload, data: Partial<ObjectClass> = {}) {

        let dmogIds = [];
        for (const element of data.Children) {
            for (const bmog of Object.values(data.childrenMap)) {
                if (bmog.GUID === element) {
                    dmogIds.push(bmog.DMOGID);
                }
            }
        }
        
        const shared = {
            bmoid: this.bm._selectedBMO.BMOID,
            dmogIds: dmogIds.join(',')
        };
        return this.dmApi.saveReorderDmogs(shared.bmoid.toString(), shared.dmogIds);

    }
    DraggingStatus(event:any){
            this.isDraggingStart = event;
           if(this.isDraggingStart && this.isDrawerOpen){
                this.isDrawerOpen=false
            }
            this.cdref.detectChanges();
    }

    updatedbmEmitter(event:any){
        if(event){
            this.bm = event;
        }
    }

    public routeBack() {
        window.history.back();
    }

}
