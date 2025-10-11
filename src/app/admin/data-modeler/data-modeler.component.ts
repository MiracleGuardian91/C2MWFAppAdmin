import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { UtilService } from '@app/shared/services/util.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '@app/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { ToastrService } from 'ngx-toastr';
import { TabComponent } from '../Shared/tab/tab.component';
import { DataModelerApiService } from './services/data-modeler-api.service';
import * as classes from './classes';
import * as components from './components';
import * as models from './models';
import { ObjectType } from './models';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { catchError, EMPTY, map, Observable, of, retry, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GenerateXmlComponent } from '../wf/wfd/components/generatexml/generatexml.component';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { DmHeaderComponent } from './components/dm-header/dm-header.component';
import { DmMenuComponent } from './components/dm-menu/dm-menu.component';
import { DmBreadcrumbsComponent } from './components/dm-breadcrumbs/dm-breadcrumbs.component';
import { TabsComponent } from '../Shared/tabs/tabs.component';
import { DmogFormViewComponent } from './components/dmog-form-view/dmog-form-view.component';

type ObjectClass = classes.ObjectClass;

@Component({
    selector: 'app-data-modeler',
    templateUrl: './data-modeler.component.html',
    standalone: true,
    imports: [
        NgIf,
        DmHeaderComponent,
        DmMenuComponent,
        DmBreadcrumbsComponent,
        TabsComponent,
        NgFor,
        TabComponent,
        NgSwitch,
        NgSwitchCase,
        DmogFormViewComponent,
    ],
})
export class DataModelerComponent implements OnInit {
  public bm: classes.BM;
  private readonly encryptedBMId = this.route.snapshot.queryParams.BMID;

  contactsImageUrl = UtilService.getUrlForImage('/assets/styles/images/contacts-bmo.jpg');
  attachmentsImageUrl = UtilService.getUrlForImage('/assets/styles/images/attachments-bmo.jpg');
  documentsImageUrl = UtilService.getUrlForImage('/assets/styles/images/documents-bmo.jpg');
  subprocessImageUrl = UtilService.getUrlForImage('/assets/styles/images/subprocess-bmo.jpg');
  childprocessImageUrl = UtilService.getUrlForImage('/assets/styles/images/childprocess-bmo.jpg');
  sharedChildProcessImageUrl = UtilService.getUrlForImage('/assets/styles/images/shared-child-process-bmo.jpg');
  backsImageUrl = UtilService.getUrlForImage('/assets/styles/images/back-icon-black.png');

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
    private dialog: MatDialog,
    private readonly route: ActivatedRoute,
    private readonly msg: MessageService,
    private readonly toast: ToastrService,
    private readonly dmApi: DataModelerApiService,
    private readonly formViewApi: FormViewApiService
  ) {}
    
  ngOnInit() {  
    this.getBM();
  }

  public getBM() {
    const { ProcessName, Name, Version } = this.route.snapshot.data?.bm as models.IBM;
    this.dmApi.getData(ProcessName, Name, Version).subscribe((bm) => (this.bm = bm));
  }

  public onTabClick(tab: TabComponent) {
    if (tab.disabled) {
      this.getObjectDetails(tab.data);
    }
  }

  public onTabSelect(tab: TabComponent<ObjectClass>) {
    this.bm.updateSelectedObjects(tab.data);
  }

  public onTabEdit(tab: TabComponent<ObjectClass>) {
    this.openObjectDetails(tab.data);
  }

  public openObjectDetails(obj: ObjectClass) {
    this.getObjectDetails(obj.parent as ObjectClass, obj);  
  }

  public onTabRemove(tab: TabComponent<ObjectClass>) {
    const obj = tab.data;
     // Determine the class of the object dynamically
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
    this.msg.showMessage('Warning', {
      header: `Delete ${className}`,
      body: `Are you sure you want to delete ${name}?`,
      btnText: 'Delete',
      checkboxText: 'Yes, delete this object',
      isDelete: true,
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

  dropped(e: {from: number, to: number}, parent: ObjectClass) {
    // if ('BMID' in parent) return;
    moveItemInArray(parent.Children, e.from, e.to);
    this.dmApi.reorderChildren(parent)
      .subscribe({
        next: (_) => this.getBM(),
        error: (_) => moveItemInArray(parent.Children, e.to, e.from),
      });
  }

  public onGenerateXML() {
    this.formViewApi.generateXML('bm', this.bm.ProcessName, this.bm.Version).subscribe((success) => {
      success && this.msg.showMessage('Success', { body: 'JSON generated successfully.' });
    },
    (error)=>{
    this.showErrorModal()     
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
      verNo: this.bm.Version
    }
  });

  dialogRef.componentInstance.closeModal.subscribe(() => {
    dialogRef.close();
  });
}

  public changeMode(mode: models.BMMode) {
    if (mode === this.bm.Mode) return;
    this.dmApi.changeMode(this.bm.BMId, mode).subscribe((success) => {
      if (success) {
        this.bm.update({ Mode: mode });
      }
    });
  }

  private async getObjectDetails(parent: ObjectClass, data: Partial<ObjectClass> = {}) {
    const newObject = Object.keys(data).length === 0;
    const {component} = this.determineClassAndComponent(parent, data);

    const modal = this.msg.showComponent(component, {data: data as ObjectClass, parent, newObject});
    const res = await modal.result;
    if (!res) return;

    if (parent === undefined && data instanceof classes.BM) {
      this.saveBMDetails(res);
      return;
    }
    if (parent instanceof classes.BM) {
      const saveSharedDmogs = (id: string) => {
        if (res.shared.bmoIds === '-1' && !newObject) {
          return EMPTY;
        }
        const bmogIdToSend = res.shared.bmogId === "-1" ? id : res.shared.bmogId;
        return this.dmApi.saveSharedBmos(bmogIdToSend, res.shared.bmoIds);
      }
      this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs)
    }
   
    else if (parent instanceof classes.BMOG) {
      const saveSharedDmogs = (id: string) => {
        if (res.shared.dmogIds === '-1' && !newObject) {
          return EMPTY;
        }
        
        const bmoIdToSend = res.shared.bmoid === "-1" ? id : res.shared.bmoid;
        return this.dmApi.saveSharedDmogs(bmoIdToSend, res.shared.dmogIds);
      }
      this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs)
    }
    else if (parent instanceof classes.BMO) {
      const saveSharedDmos = (id: string) => {
        if (res.shared.leftDMOGuids === '-1' && res.shared.rightDMOGuids === '-1' && !newObject) {
          return EMPTY;
        }
        return this.dmApi.saveSharedDmos(res.shared);
      }
      this.saveObjectDetails(parent, data, res.payload, saveSharedDmos)
    } else {
      this.saveObjectDetails(parent, data, res);
    }


  }

  public routeBack() {
    window.history.back();
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
    const original = {...obj};

    // Optimistic ui update
    if (newObject) {
      const {childClass} = this.determineClassAndComponent(parent);
      const child = new childClass(payload, parent);
      parent.addChild(child);
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
          // this.getBM();
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
    return {component, childClass};
  }

}
