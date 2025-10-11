import {
    CdkDragDrop,
    CdkDragEnd,
    CdkDropList,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService, MessageService } from '@app/core';
import { intersectionBy } from 'lodash';
import { ComponentType, ToastrService } from 'ngx-toastr';
import { EMPTY, from, Observable, of, Subject } from 'rxjs';
import {
    catchError,
    filter,
    finalize,
    map,
    mergeAll,
    switchMap,
    takeWhile
} from 'rxjs/operators';
import { DMComponent, DMOG, FormDataComponentInfo } from '../../classes';
import { DMOS, DMOSLayout } from '../../const1';
import { DataModeler1Component } from '../../data-modeler1.component';
import {
    DMOUI,
    IConditionBody,
    IDMComponent,
    PanelMainRow,
    PanelMainContainer,
  SideNavModel,
  IDMOG,
  DMOGType
} from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { DmoConditionComponent } from '../dmo-condition/dmo-condition.component';
import { DmoDetailComponent } from '../dmo-detail/dmo-detail.component';
import { ServiceProviderService } from '../../services1/service-provider.service';
import * as classes from '../../classes';
import * as components from '../../components1';
import * as models from '../../models1';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { DmogContainerComponent } from '../dmog-new-design/dmog-container/dmog-container.component';
import { ResizableDirectiveDirective } from '../../directives/resizable-directive.directive';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

type ObjectClass = classes.ObjectClass;
@Component({
    selector: 'app-dmog-form-view',
    templateUrl: './dmog-form-view.component.html',
    styleUrls: ['./dmog-form-view.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        DmogContainerComponent,
        ResizableDirectiveDirective,
        NgStyle,
        NgbTooltip,
    ],
})
export class DmogFormViewComponent implements OnInit, OnDestroy {
    private scrolling = false;
    private scrollingInterval: any;
    private readonly SCROLL_THRESHOLD = 160; // pixels from edge to trigger scrolling
    private readonly SCROLL_SPEED = 3; // pixels per interval
    draggedItemId: string | null = null;
    targetItemId: string | null = null;
    isInnerDragging = false;
    dragStartPrntDmogIDs;
    isFromGroup;
    targetParentGroupId;

    IsDroppedOnEmptyArea = false;
    IsDroppedOnCard=  false;
    IsDropppedOnGroup = false;

    isChildDragging =  false;
    IsNotDraggingCradAndGroups =  false;
    isDraggingStart = false;
    @Output() DraggingStatus = new EventEmitter<any>();
    @Output() sideNavModelEmitter = new EventEmitter<any>();
    @Output() isDrawerOpenEmitter = new EventEmitter<any>();
    @Output() updatedbmo = new EventEmitter<any>();
    @Output() updatedbmEmitter = new EventEmitter<any>();
    @Input() SideNavModelData: any;
    SharedDmosList = [];
    isDrawerOpen = false;
    @Input() dmoMode: any;
    UpdatedData: any;
    UpdatedDataSideNavModel:any;
    private readonly saveDmog = new Subject<void>();
    private componentActive = true;
    private IsJsonStaticGridDmo: boolean = false;
    public stylecontainer;
    showContainer = true;
    dmoToAnotherdmog: any;
    sideNavModel: SideNavModel;
    UpdatededWith: any;
    tempWidthforpercent
    tempWidthforpix
    tempid
    //public bm: classes.BM;
    @Input()
    set dmog(dmog: DMOG) {
        this._dmog = dmog;
    }
    get dmog() {
        return this._dmog;
    }

    @Input()
    set readonly(readonly: boolean) {
        this._readonly = readonly;
    }
    get readonly() {
        return this._readonly;
    }
    readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    readonly panelControls = Object.values(DMOSLayout);
    private _dmog: DMOG;
    private _readonly = false;

    @Input() bmo;
    @Input() selectedBMO;
    @Input() bm;
    @Input() UpdatedDataFromSideNav: any;
    rows: PanelMainRow[] = [];
    panelMainContainer: PanelMainContainer;
    isResizing = false;
    resizingId: string | null = null;
    startX = 0;
    startWidth = 0;
    UpdatedDataForContainer: any;
    grabber: boolean = false;
    selectedItemFromchild: any;
    newlyCreatedConatiner: any;
    private scrollSpeed = 0;
     customorderDmogItem=[];
    private animationFrameId: number | null = null;
    constructor(
        private dmApi: DataModelerApiService,
        private msg: MessageService,
        private toast: ToastrService,
        private dm: DataModeler1Component,
        private dataProvider: ServiceProviderService,
        private readonly route: ActivatedRoute,
        private apiService: ApiService,
        private readonly cdref: ChangeDetectorRef    ) {

        this.dataProvider.getNewlyBmog().subscribe(data => {
            this.onDropLayout(data);
        })

        this.dataProvider.getreloadParent().subscribe(data => {
            this.reloadParent();
        })

        this.dataProvider.getSidebarclose().subscribe(data => {
            if (data) {
                this.isDrawerOpen = false;
            }
        });
        this.dataProvider.getOpenSidebarNav().subscribe(data => {
            console.log(data);
            this.sideNavModel = data;
            this.isDrawerOpen = true;
            this.isDrawerOpen = true;

        })
    }


    ngOnInit(): void {
        this.processChildren();
    }
    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedBMO?.currentValue && changes.selectedBMO.currentValue !== changes.selectedBMO.previousValue) {
           this.bm.selectedBMO.Children = changes.selectedBMO.currentValue.Children;
            this.bm._selectedBMO = changes.selectedBMO.currentValue;
            this.processChildren();
        }
        if (changes.sideNavModel && changes.sideNavModel.currentValue == null) {
            this.isDrawerOpen = false;
        }
        this.sideNavModelEmitter.emit(this.sideNavModel);
        this.isDrawerOpenEmitter.emit(this.isDrawerOpen);

        if (this.UpdatedDataFromSideNav) {
            this.UpdatedData = this.UpdatedDataFromSideNav;
        }
    }
    
      onKeyDown($event){
        return;
      }
      processChildren() {
        this.customorderDmogItem = [];
        const orderDmogItem: models.OrderDmogItems[] = [];
        const childrenKeys = this.bm?.selectedBMO?.Children || [];
        const childrenMap = this.bm?.selectedBMO?.childrenMap || {};
         
        // Collect and sort items
        for (const childKey of childrenKeys) {
            const dmog = childrenMap[childKey];
            if (dmog) {
                orderDmogItem.push({
                    lnkDmogId: dmog.LnkBmoDmogID,
                    Guids: dmog.GUID,
                    hasParent: !!dmog.PrntDmogIDs,
                    DisplayName: dmog.DisplayName
                });
            }
        }

        // Sort by parent status first, then by lnkDmogId
        orderDmogItem.sort((a, b) => {
            if (a.hasParent !== b.hasParent) {
                return a.hasParent ? 1 : -1;
            }
            return a.lnkDmogId - b.lnkDmogId;
        });

        // Directly map sorted GUIDs to customorderDmogItem
        this.customorderDmogItem = orderDmogItem.map(item => item.Guids);
        this.updatedbmEmitter.emit(this.bm);
    }
      onMouseOver(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target.closest('.child-card')) {
          this.hideAllPopups();
          const card = target.closest('.child-card');
          const cardPopup = card.querySelector('.default-popup');
          if (cardPopup) {
            (cardPopup as HTMLElement).style.display = 'block';
          }
          return;
        }
      
        if (target.closest('.show-group-popup')) {
          this.hideAllPopups();
          const group = target.closest('.show-group-popup');
          const groupPopup = group.querySelector('.group-popup');
          if (groupPopup) {
            (groupPopup as HTMLElement).style.display = 'block';
          }
        }


        if (target.closest('.show-default-popup')) {
            this.hideAllPopups();
            const group = target.closest('.show-default-popup');
            const groupPopup = group.querySelector('.default-popup');
            if (groupPopup) {
              (groupPopup as HTMLElement).style.display = 'block';
            }
          }
      }
      
      onMouseOut(event: MouseEvent): void {
        const relatedTarget = event.relatedTarget as HTMLElement;
        const currentTarget = event.currentTarget as HTMLElement;
        if (currentTarget.contains(relatedTarget)) {
          return;
        }
        if (currentTarget.classList.contains('show-group-popup') || currentTarget.classList.contains('child-card')) {
          this.hideAllPopups();
        }
      }
      
      hideAllPopups(): void {
        document.querySelectorAll('.group-popup, .default-popup').forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
      }
      
    drop(event: CdkDragDrop<string[]>) {
        this.cdref.detectChanges();
        console.log('Previous Index:', event.previousIndex);
        console.log('Current Index:', event.currentIndex);
        const items = this.bm.selectedBMO.Children;
        if (event.previousIndex === event.currentIndex) {
            return; // No change
        }

        moveItemInArray(items, event.previousIndex, event.currentIndex);
        this.bm.selectedBMO.Children = [...items];
        this.cdref.detectChanges();
       

    }

    dragEndedWithTarget(event: CdkDragEnd, targetDmogId: string) {
        const draggedDmogId = event.source.data;

        const items = [...this.bm.selectedBMO.Children];
        const draggedIndex = items.findIndex(id => id === draggedDmogId);
        const targetIndex = items.findIndex(id => id === targetDmogId);
        if (draggedIndex === -1 || targetIndex === -1) return;
        items.splice(draggedIndex, 1);
        items.splice(targetIndex, 0, draggedDmogId);
        this.bm.selectedBMO.Children = items;

        this.cdref.detectChanges();
    }
   
     

dragMoved(event: MouseEvent) {
  const scrollContainer = document.querySelector('.form-view');
  if (!(scrollContainer instanceof HTMLElement)) return;

  const containerRect = scrollContainer.getBoundingClientRect();
  const mouseY = event.clientY;
  const threshold = 100; // Reduced threshold for quicker response

  const distanceFromTop = mouseY - containerRect.top;
  const distanceFromBottom = containerRect.bottom - mouseY;

  let newScrollSpeed = 0;
  if (distanceFromTop < threshold) {
    newScrollSpeed = -Math.max(10, (threshold - distanceFromTop) / 2);
  } else if (distanceFromBottom < threshold) {
    newScrollSpeed = Math.max(10, (threshold - distanceFromBottom) / 2);
  }

  if (this.scrollSpeed !== newScrollSpeed) {
    this.stopScrolling();
    this.scrollSpeed = newScrollSpeed;
    if (this.scrollSpeed !== 0) {
      this.startScrolling(scrollContainer);
    }
  }
}

private startScrolling(container: HTMLElement, speed?: number) {
  const scroll = () => {
    container.scrollTop += this.scrollSpeed;
    this.animationFrameId = requestAnimationFrame(scroll);
  };
  this.animationFrameId = requestAnimationFrame(scroll);
}

private stopScrolling() {
  if (this.animationFrameId) {
    cancelAnimationFrame(this.animationFrameId);
    this.animationFrameId = null;
  }
  this.scrollSpeed = 0;
}
   

      onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        
        const scrollContainer = document.querySelector('.form-view');
        if (!(scrollContainer instanceof HTMLElement)) return;
    
        const containerRect = scrollContainer.getBoundingClientRect();
        const mouseY = event.clientY;
        const distanceFromTop = mouseY - containerRect.top;
        const distanceFromBottom = containerRect.bottom - mouseY;
        const threshold = 160;
    
        scrollContainer.classList.remove('scroll-top', 'scroll-bottom');
        this.stopScrolling();
    
        if (distanceFromTop < threshold) {
            scrollContainer.classList.add('scroll-top');
            this.startScrolling(scrollContainer, -8);
        } else if (distanceFromBottom < threshold) {
            scrollContainer.classList.add('scroll-bottom');
            this.startScrolling(scrollContainer, 8);
        }
    }
    

    OnDragStarted(event: any, dmog:any) {
        this.closeSideBarAndMenusWhileDragging();
        this.isDrawerOpen = false;
        this.isDraggingStart= true;
       
        this.DraggingStatus.emit(this.isDraggingStart);
        if (dmog.PrntDmogIDs) {
            event.preventDefault();
            return;
        }
        let model = {
            type: 'CardGroup',
            Guid: dmog.GUID, 
            PrntDmogIDs: dmog.PrntDmogIDs
          };
        event.dataTransfer.setData('cardGroupDmog',JSON.stringify(model));
        this.draggedItemId = dmog.GUID;
        event.stopPropagation();
    }

    OnChildDragStarted(event: any, dmog:any) {
        this.isDraggingStart= true;
        this.DraggingStatus.emit(this.isDraggingStart);
        if (this.readonly || this.dmoMode === 'Published') {
            event.preventDefault(); 
            return;
        }
        this.closeSideBarAndMenusWhileDragging();
        this.isDrawerOpen = false;
        if (!dmog.PrntDmogIDs) {
            event.preventDefault();
            return;
        }
        let model = {
            type: 'CardGroup',
            Guid: dmog.GUID, 
            PrntDmogIDs: dmog.PrntDmogIDs
          };
        event.dataTransfer.setData('cardGroupDmog',JSON.stringify(model));
        this.draggedItemId = dmog.GUID;
        event.stopPropagation();
    }

    handleContainerDrop(event: DragEvent) {
        event.preventDefault();
    }
    handleChildDrop(event: DragEvent) {
        event.preventDefault();
    }

    DraggingItemsModel(event:any){
        if(event){
           this.draggedItemId = event.model.Guid;
        }
    }
    closeSideBarAndMenusWhileDragging() {
        document.querySelectorAll('.popup-div').forEach(popup => {
          if (popup instanceof HTMLElement) {
            popup.style.display = 'none';
          }
        });
      
        document.querySelectorAll('.contextMenuContainer').forEach(popup => {
          if (popup instanceof HTMLElement) {
            popup.style.display = 'none';
          }
        });
      }
      

    
      dragEnded(event: any) {
        this.isDraggingStart = false;
        this.DraggingStatus.emit(this.isDraggingStart);
    
        const scrollContainer = document.querySelector('.form-view');
        if (scrollContainer instanceof HTMLElement) {
            scrollContainer.classList.remove('scroll-top', 'scroll-bottom');
        }
    
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const elementsAtPoint = document.elementsFromPoint(mouseX, mouseY);
    
        const droppedOnCard = elementsAtPoint.some(el => el.id?.startsWith('resizeableComponent_'));
        const droppedOnCardGroup = elementsAtPoint.some(el => el.classList.contains('card-group-inner-children'));
        const droppedOnEmptyArea = !droppedOnCard && !droppedOnCardGroup;
    
        const cardElement = elementsAtPoint.find(el => el.id?.startsWith('resizeableComponent_'));
    
        if (cardElement) {
            const dmogId = cardElement.id.replace('resizeableComponent_', '');
            console.log('Dropped on specific card with ID:', dmogId);
            const DmogType = this.bm.selectedBMO.childrenMap[dmogId].Type;
    
            if (DmogType === 'CardGroup') {
                this.IsDropppedOnGroup = true;
            } else if (DmogType === 'Normal') {
                this.IsDroppedOnCard = true;
            }
        }
    
        if (droppedOnEmptyArea) {
            this.IsDroppedOnEmptyArea = true;
        }
    
        if (this.draggedItemId && this.targetItemId) {
            const isMovingToGroup = !!this.targetParentGroupId;
            this.moveItem(this.draggedItemId, this.targetItemId, this.targetParentGroupId, isMovingToGroup);
        }
    
        event.dataTransfer.clearData('cardGroupDmog');
        this.draggedItemId = null;
        this.targetItemId = null;
        this.targetParentGroupId = null;
        this.dragStartPrntDmogIDs = null;
        this.IsDroppedOnCard = false;
        this.IsDropppedOnGroup = false;
        this.IsDroppedOnEmptyArea = false;
    
        this.stopScrolling();
    }
    

    OnChildDragEnded(event: DragEvent) {
        this.isDraggingStart= false;
        this.DraggingStatus.emit(this.isDraggingStart);
        const scrollContainer = document.querySelector('.form-view');
        if (scrollContainer) {
            scrollContainer.classList.remove('scroll-top', 'scroll-bottom');
        }
        this.isChildDragging = false;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const elementsAtPoint = document.elementsFromPoint(mouseX, mouseY);
        const droppedOnCard = elementsAtPoint.some(el => el.id?.startsWith('resizeableComponent_'));


        const droppedOnCardGroup = elementsAtPoint.some(el => el.classList.contains('card-group-inner-children'));
        const droppedOnEmptyArea = !droppedOnCard && !droppedOnCardGroup;
        const cardElement = elementsAtPoint.find(el => el.id?.startsWith('resizeableComponent_'));
       
        if (cardElement && cardElement !=undefined) {
            const dmogId = cardElement.id.replace('resizeableComponent_', '');
            console.log('Dropped on specific card with ID:', dmogId);
            const DmogType =  this.bm.selectedBMO.childrenMap[dmogId].Type;
            if (DmogType === 'CardGroup'){
                this.IsDropppedOnGroup = true;
            }
            if (DmogType ==='Normal'){
                this.IsDroppedOnCard = true;
            }
        }
        if (droppedOnEmptyArea) {
            this.IsDroppedOnEmptyArea= true;
        } 


        if (this.draggedItemId && this.targetItemId) {
            const isMovingToGroup = !!this.targetParentGroupId;
            this.moveItem(this.draggedItemId, this.targetItemId, this.targetParentGroupId, isMovingToGroup);
        }
        event.dataTransfer.clearData('cardGroupDmog');
        this.draggedItemId = null;
        this.targetItemId = null;
        this.targetParentGroupId = null;
        this.dragStartPrntDmogIDs = null;
        this.IsDroppedOnCard= false;
        this.IsDropppedOnGroup = false;
        this.IsDroppedOnEmptyArea = false;
        this.stopScrolling();
    }

    dragHover(dmogId: string, event: MouseEvent, parentGroupId?: string) {
        this.closeSideBarAndMenusWhileDragging();
        event.preventDefault();
        event.stopPropagation();
        if (this.draggedItemId && this.draggedItemId !== dmogId) {
            this.targetItemId = dmogId;
            this.targetParentGroupId = parentGroupId || null;
        }
        
        this.dragMoved(event);
    }
    
    OnChilddragHover(dmogId: string, event: MouseEvent, parentGroupId?: string) {
        this.closeSideBarAndMenusWhileDragging();
        event.preventDefault();
        event.stopPropagation();
        
        if (this.draggedItemId && this.draggedItemId !== dmogId) {
            this.targetItemId = dmogId;
            this.targetParentGroupId = parentGroupId || null;
        }
        
        this.applyHoverEffect(dmogId);
        this.dragMoved(event);
    }
    
    private applyHoverEffect(dmogId: string) {
        const element = document.getElementById(dmogId);
        if (element) {
            element.classList.add('hover-effect');
        }
    }
    

    globalMouse(event){
        event.stopPropagation();
       if(this.draggedItemId){
        let currentElement = event.srcElement as HTMLElement;
        console.log("globalMouseLeave",currentElement)
       }
    }
    OnDropMainPanel(event:any){
        if(event){
            if (this.draggedItemId && this.targetItemId) {
                const isMovingToGroup = !!this.targetParentGroupId;
                this.moveItem(this.draggedItemId, this.targetItemId, this.targetParentGroupId, isMovingToGroup);
              }
        }
       
    }
    OnDropOverMainPanel(event:any){
        event.preventDefault();
        event.stopPropagation();
    }
    moveItem(sourceId: string, targetId: string, targetParentGroupId: string, isMovingToGroup?: boolean) {
        const items = this.reorderItems(sourceId, targetId);
        this.bm.selectedBMO.Children = items;
    
        const dmogIds = this.collectDmogIds();
        const shared = this.createSharedData(dmogIds);
        this.processChildren();
        if (shared) {
            this.saveReorderDmogs(shared);
        }
    
        this.handleItemMove(sourceId, targetParentGroupId, isMovingToGroup);
    

        this.cdref.detectChanges();
    }
    
    private reorderItems(sourceId: string, targetId: string) {
        const items = [... this.customorderDmogItem];
        const sourceIndex = items.findIndex(id => id === sourceId);
        const targetIndex = items.findIndex(id => id === targetId);
    
        if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex) {
            return items;
        }
    
        const [movedItem] = items.splice(sourceIndex, 1);
        const insertIndex = targetIndex;
        items.splice(insertIndex, 0, movedItem);
        this.customorderDmogItem =items;
        return items;
    }
    
    private collectDmogIds() {
        const data = this.bm._selectedBMO as ObjectClass;
        const dmogIds: any[] = [];
        this.customorderDmogItem.forEach(element => {
            Object.values(data.childrenMap).forEach(bmog => {
                if (bmog.GUID === element) {
                    dmogIds.push(bmog.DMOGID);
                }
            });
        });
        return dmogIds;
    }
    
    private createSharedData(dmogIds: any[]) {
        return {
            bmoid: this.bm._selectedBMO.BMOID,
            dmogIds: dmogIds.join(',')
        };
    }
    
    private saveReorderDmogs(shared: { bmoid: string, dmogIds: string }) {
        this.dmApi.saveReorderDmogs(shared.bmoid.toString(), shared.dmogIds)
            .subscribe({
                next: (response) => {
                    if(response){
                        this.getBM();
                        this.cdref.detectChanges();
                    }
                   
                },
                error: (error) => {
                    console.error('Reorder HTTP Error:', error);
                }
            });
    }
    
    private handleItemMove(sourceId: string, targetParentGroupId: string, isMovingToGroup?: boolean) {
        if (sourceId && this.bm.selectedBMO.childrenMap[sourceId]) {
            const getdmogId = this.bm.selectedBMO.childrenMap[sourceId].DMOGID;
            const getdmogType = this.bm.selectedBMO.childrenMap[sourceId].Type;
    
            if (getdmogType !== 'CardGroup') {
                const dmog = this.bm.selectedBMO.childrenMap[targetParentGroupId];
                if (dmog && targetParentGroupId) {
                    this.moveLogic(getdmogId, isMovingToGroup, dmog, targetParentGroupId);
                }
            }
        }
    }
    
    private moveLogic(getdmogId: string, isMovingToGroup: boolean | undefined, dmog: any, targetParentGroupId: string) {
        if (this.IsDroppedOnCard || this.IsDropppedOnGroup) {
            if (dmog.Type === 'CardGroup') {
                isMovingToGroup = true;
                const movePayloadList = [{
                    dmogId: getdmogId,
                    prntDmogId: isMovingToGroup ? dmog.DMOGID.toString() : '123',
                    isAdded: true
                }];
                const model = this.createMoveModel(movePayloadList);
                this.UpdateGrouping(model, targetParentGroupId, getdmogId, dmog.DMOGID.toString());
            } else {
                const movePayloadList = [{
                    dmogId: getdmogId,
                    prntDmogId: '123',
                    isAdded: false
                }];
                const model = this.createMoveModel(movePayloadList);
                this.UpdateGrouping(model, targetParentGroupId, getdmogId, "");
            }
        } else {
            const movePayloadList = [{
                dmogId: getdmogId,
                prntDmogId: '123',
                isAdded: false
            }];
            const model = this.createMoveModel(movePayloadList);
            this.UpdateGrouping(model, targetParentGroupId, getdmogId, "");
        }
    }
    
    private createMoveModel(movePayloadList: any[]) {
        return {
            DmogIds: movePayloadList.map(item => item.dmogId).join(','),
            IsAdded: movePayloadList.map(item => item.isAdded ? 'true' : 'false').join(','),
            PrntDmogIds: movePayloadList.map(item => item.prntDmogId ?? 'NULL').join(','),
            Orders: "1"
        };
    }
    
    
   
    UpdateGrouping(model:any,dmogId,sourceId,pgId){
      let dmogP  =  this.bm.selectedBMO.childrenMap[sourceId];
      if(dmogP){
        this.bm.selectedBMO.childrenMap[sourceId].PrntDmogIDs = pgId.toString();
        this.cdref.detectChanges();
      }
       
        this.dmApi.saveupdatePrntDmogIDs(model)
        .subscribe({
            
            next: (response) => {
                if(response){
                    this.getBM();
                }
                this.cdref.detectChanges();
                console.log('Move Success:', response);
            },
            error: (error) => {
                console.error('Move HTTP Error:', error);
            }
        });
    }
    

    private startScrolling1(element: HTMLElement, direction: number) {
        if (this.scrolling) {
            return; // Prevent multiple scroll intervals
        }
        
        this.scrolling = true;
        this.scrollingInterval = setInterval(() => {
            if (element) {
                element.scrollTop += direction * this.SCROLL_SPEED;
            }
        }, 16); // ~60fps
    }

    private stopScrolling1() {
        if (this.scrollingInterval) {
            clearInterval(this.scrollingInterval);
            this.scrollingInterval = null;
        }
        this.scrolling = false;
    }

    private handleScrollIndicator(event: MouseEvent, scrollContainer: HTMLElement) {
        if (!scrollContainer) return;

        const containerRect = scrollContainer.getBoundingClientRect();
        const mouseY = event.clientY;
        const distanceFromTop = mouseY - containerRect.top;
        const distanceFromBottom = containerRect.bottom - mouseY;
        
        // Remove existing scroll indicators
        scrollContainer.classList.remove('scroll-top', 'scroll-bottom');
        
        if (distanceFromTop < this.SCROLL_THRESHOLD) {
            scrollContainer.classList.add('scroll-top');
            this.startScrolling(scrollContainer, -1);
        } else if (distanceFromBottom < this.SCROLL_THRESHOLD) {
            scrollContainer.classList.add('scroll-bottom');
            this.startScrolling(scrollContainer, 1);
        } else {
            this.stopScrolling();
        }
    }

    trackByDmogId(index: number, dmogId: string): string {
        return dmogId;
    }


    SelectdItem(event) {
        if (event.SelectdItem) {
            this.selectedItemFromchild = event.SelectdItem;
        }
    }

    setStyle(data) {

        if (data && data.DMOGProps) {
            let panelMainContainer = JSON.parse(data.DMOGProps);
            let width = panelMainContainer.width;
            if (!width) {
                width = 100 - 0.3 
            }
            return {
                width: `${width - 0.3}%`, 
            };
        }
        return {
            width: `${100 - 0.3}%`, 

        };
    }

    setResizeDiv(data) {
        if (data && data.DMOGProps) {
            let panelMainContainer = JSON.parse(data.DMOGProps);
            let width = panelMainContainer.width;
            if (!width) {
                width = 100
            }
            return {
                width: `${width}%`,
            };
        }
        return {
            width: `${100}%`,

        };
    }


    GetAvailableDmoToShare() {
        if (!this.bm?._selectedBMOG?.BMOGID || !this.bm?.BMId) {
            return; // Exit if required properties are missing
        }
        this.dmApi.GetAvailableDmoToShare(this.bm._selectedBMOG.BMOGID, this.bm.BMId).subscribe(x => {
            this.SharedDmosList = x.components;
        });

    }


    //Resizing Logic start 
    saveWidth(event, id) {
        const targetedElement = event.target as HTMLElement;
        if (targetedElement.classList.contains('resizableinnerdiv')) {

            if (this.tempid == id) {
                let looped = document.getElementById("resizeableComponent_" + id);
                if (!this.tempWidthforpix) {

                    this.tempWidthforpix = looped.clientWidth;
                    //  setTimeout(() => {
                    this.SaveWidthWidth(id, this.tempWidthforpercent);
                    // }, 200);
                }
                if (this.tempWidthforpix != looped.clientWidth) {
                    this.tempWidthforpix = looped.clientWidth;
                    //setTimeout(() => {
                    this.SaveWidthWidth(id, this.tempWidthforpercent);
                    //}, 200);
                }
            }
        }
    }
    getWidthInPercentage(event, id: any) {
        event.stopPropagation();
        let looped = document.getElementById("resizeableComponent_" + id);
        this.tempid = id;
        // let resizeableComponent_=document.getElementById("resizeableComponent_"+id);

        const parentWidth = looped.parentElement?.clientWidth || window.innerWidth; // Get parent width or window width
        const divWidth = looped.clientWidth; // Get div width
        let width = Math.floor((divWidth / parentWidth) * 100);
        if (!this.tempWidthforpercent) {
            this.tempWidthforpercent = width;
        }
        if (width != this.tempWidthforpercent) {
            // resizeableComponent_.style.width=looped.style.width;

            this.tempWidthforpercent = width;
        }

    }
    SaveWidthWidth(id: any, width) {
        console.log(width);
        if (width > 100 || width < 0)
            width = 100;
        if (this.bm.selectedBMO.childrenMap[id]) {
            const data = this.bm.selectedBMO.childrenMap[id];
            this.panelMainContainer = JSON.parse(data.DMOGProps);
            if (this.panelMainContainer) {
                this.panelMainContainer.width = width
            }
            var model = {};
            model = {
                "DMOGID": data.DMOGID,
                "DMOGProps": JSON.stringify(this.panelMainContainer)
            }
            const url = `wfapibm/DataModel/SaveDmogProps`;
            this.apiService.postgateway('',url, model).subscribe(r => {
                data.DMOGProps = JSON.stringify(this.panelMainContainer)
                setTimeout(() => {
                    this.setUpdatedWidth(width);
                    this.UpdatedData = data;
                }, 200);

            }, error => {
                console.log(error)
            });
        }
    }
    setUpdatedWidth(width) {
        this.dataProvider.setUpdatedContainerWidth(width)
    }
    //Resizing Logic End

    private onSaveDmog() {
        const message = "Don't close the window while saving";
        const title = 'Save in progress';
        this.saveDmog
            .pipe(
                takeWhile((_) => this.componentActive),
                switchMap((_) => {
                    let activeToast = this.toast.findDuplicate(
                        title,
                        message,
                        true,
                        false
                    );
                    if (activeToast) {
                        this.toast.remove(activeToast.toastId);
                    }
                    activeToast = this.toast.info(message, title, {
                        timeOut: 10000,
                        tapToDismiss: false,
                    });
                    return this.dmApi
                        .saveObject(this.dmog.unreference(), this.dmog.root, true)
                        .pipe(
                            catchError((_) => of(false)),
                            finalize(() => this.toast.remove(activeToast.toastId))
                        );
                })
            )
            .subscribe();
    }

    public async onDrop(e: CdkDragDrop<DMOUI[] | Partial<IDMComponent>[]>) {
        if (this.IsJsonStaticGridDmo) {
            this.toast.warning(
                'More than one json static grid not allowed.',
                'Warning'
            );
            return;
        }
        const from = e.previousContainer;
        const to = e.container as CdkDropList<IDMComponent[]>;
        const fromIdx = e.previousIndex;
        const toIdx = e.currentIndex;
        if (from.id === 'form-controls') {
            const uiData = from.data[fromIdx] as DMOUI;
            const res = await this.getDmoDetails(uiData);
            if (!res) {
                return;
            }
            transferArrayItem([res], to.data as Partial<IDMComponent>[], 0, toIdx);
            const dmoId = await this.saveDmoDetails(res);
            if (!dmoId) {
                to.data = to.data.filter((dmo) => dmo.dmoName !== res.dmoName);
            }
            res.dmoId = +dmoId;
            this.dmApi.reorderChildren(this.dmog).subscribe(() => this.dm.getBM());
            return;
        } else if (from.id !== to.id) {
            transferArrayItem(from.data as any[], to.data, fromIdx, toIdx);
        } else {
            if (from.id === to.id && fromIdx === toIdx) return;
            moveItemInArray(from.data as any[], fromIdx, toIdx);
        }
        this.dmApi.reorderChildren(this.dmog).subscribe();
        // this.saveDmog.next();
    }

    async OnBMOSave(data) {

        if (this.IsJsonStaticGridDmo) {
            this.toast.warning(
                'More than one json static grid not allowed.',
                'Warning'
            );
            return;
        }
        this._dmog = data.data;

        const uiData = data.type as DMOUI;
        const res = await this.getDmoDetails(uiData);
        if (!res) {
            return;
        }
        //this.bm.selectedDMOG=data.data;


        const dmoId = await this.saveDmoDetails(res, data);
        if (dmoId && dmoId != "false") {
            this.dataProvider.setDmoStates(dmoId);
            this.dm.getBM()

        }

        return;


    }
    dragDmoToAnotherdmog(data) {
        this.dmoToAnotherdmog = data;
        this.isInnerDragging = data.InnerDragging;
    }
    dropDmoToAnotherdmog(data) {
        if (this.dmoToAnotherdmog && this.dmoToAnotherdmog.dmogId != data.dmogId) {
            this.dataProvider.setMoveDmo({ "prevdmogId": this.dmoToAnotherdmog.dmogId, "dmogId": data.dmogId, "targetId": data.targetId, "dmoguid": this.dmoToAnotherdmog.dmoguid });
            // setTimeout(() => {
            //     window.location.reload();
            // }, 500);
        }
    }
    public async onDmoEdit(emitData) {

        let data = emitData.dmo as DMComponent

        let dmog = emitData.dmog
        const uiData = DMOS[data.type];
        const res = await this.getDmoDetails(uiData, data, dmog);
        if (res) {
            const dmoId = await this.saveDmoDetails(res, dmog, true);
            if (dmoId) {
                res.dmoId = +dmoId;
                //this.dmApi.reorderChildren(this.dmog).subscribe();

                this.toast.success('Data was saved successfully', 'Success');
                this.dm.getBM()
            } else {
                this.toast.warning('Data was not saved', 'Warning');
            }
        }
    }

    public async onDmoClone(emitData) {

        let data = emitData.dmo as DMComponent;
        let dmog = emitData.dmog

        this.dmog.findDmoAndThen(data.dmoName, async (info) => {
            // if (!info) return;
            // const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
            // const rows = this.dmog.formData.components;
            // let col = rows[r];
            const cloned = dmog.childrenMap[data.dmoName].clone();
            const newComponents = cloned.asObject() as IDMComponent
            // .slice(0, d + 1)
            // .concat(cloned.asObject() as IDMComponent, col.components.slice(d + 1));
            //  col = newComponents;
            //this.dmog.addChild(cloned);
            const uiData = DMOS[data.type];
            const res = await this.getDmoDetails(uiData, cloned, dmog);
            if (!res) {
                //  this.dmog.removeChild(cloned.dmoName);
                // col.components = newComponents.filter(
                //   (dmo) => dmo.dmoName !== cloned.dmoName
                // );
                return;
            }

            // const cloneInfo = { ...info, dmoIndex: info.dmoIndex + 1 };
            // this.replaceDmo(cloneInfo, res);

            const dmoId = await this.saveDmoDetails(res, dmog, null, true);
            if (dmoId) {
                res.dmoId = +dmoId;
                this.dataProvider.setDmoStates(dmoId);
                this.dm.getBM()
                // this.dmApi.reorderChildren(this.dmog).subscribe();
                this.toast.success('Data was saved successfully', 'Success');
                this.cdref.detectChanges();
            } else {
                this.toast.warning('Data was not saved', 'Warning');
            }
        });
    }

    public onDmoClone_new(event) {
        let data: IDMComponent;
        if (event) {
            data = event.dmo;
        }
        this.dmog.findDmoAndThen(data.dmoName, (info) => {
            if (!info) return;
            const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
            const rows = this.dmog.formData.components;
            const col = rows[r];
            const cloned = this.dmog.childrenMap[data.dmoName].clone();
            // const newComponents = col
            //   .slice(0, d + 1)
            //   .concat(cloned.asObject() as IDMComponent, col.slice(d + 1));
            // col.components = newComponents;
            this.dmog.addChild(cloned);
            //below two lins is Cnommented 
            //  this.dmApi.saveObject(cloned.asObject() as any, this.dmog.root).subscribe(success => success && this.dm.getBM())
            // this.saveDmog.next();
        });
    }

    public onDmoDelete(emitData) {
        let data = emitData.dmo as DMComponent
        let dmog = emitData.dmog
        let dmoguid = emitData.dmoguid;
        const modal = this.msg.showMessage('Warning', {
            header: 'Unshare DMO',
            body: `Are you sure you want to Unshare ${emitData?.dmo?.dmoName}?`,
            btnText: 'Unshare',
            checkboxText: 'Yes, Unshare this object',
            isDelete: true,
            undoable : true,
            isNewDesign: true,
            callback: () => {
                this.dmApi
                    .unshareDmo(data?.dmoId?.toString(),dmog.DMOGID?.toString())
                    .subscribe(
                        (success) => {
                            if (success) {
                                this.dataProvider.setDeleteDmo({ "dmogId": dmog?.GUID, "dmoguid": dmoguid });
                                setTimeout(() => {
                                    this.dm.getBM();
                                }, 200);
                                this.cdref.detectChanges();
                            }
                        }
                    );
            },
        });
    }
    
   

    private async getDmoDetails(uiData: DMOUI, data: Partial<DMComponent> = {}, currentDmog?:any) {
        const newObject = Object.keys(data).length === 0 || data.fromApi === false;
        const modal = this.msg.showComponent(DmoDetailComponent, {
            newObject,
            data: data as IDMComponent,
            uiData,
            parent: currentDmog ?? this._dmog,
            readonly: this.readonly,
        });

        return (await modal.result) as IDMComponent;
    }

    formClick() {
        this.dataProvider.setHideContextMenu(false);
    }


    private async saveDmoDetails(res: IDMComponent, selectedDmog?, isEdit?, iscloned?) {

        try {
            let url = `wfapibm/DataModel/saveDmoforNewDM`
            let data
            if (isEdit) {
                data = selectedDmog;
            } else {
                data = selectedDmog.data;
            }
            if (iscloned) {
                data = selectedDmog;
            }
            let dmog = {
                "DMOGProps": data!.DMOGProps,
                "id": data!.DMOGID,
                "ProcessName": data!.root!.ProcessName,
                "Version": data!.Version
            }


            let model = { "dmo": res, "dmog": dmog }
            return await this.apiService.postgateway('',url, model, null).toPromise();
        } catch (error) {
            console.log(error);
            // if (originalDmoData) {
            // this._dmog.findDmoAndThen(originalDmoData.dmo.dmoName, (info) =>
            //   this.replaceDmo(info, originalDmoData.dmo)
            // );
            //}
        }
        return false;
    }
    private replaceDmo(
        info: FormDataComponentInfo,
        replaceWith: IDMComponent | null
    ) {
        if (!info) return;
        const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
        const rows = this.dmog.formData.components;
        let newComponents = rows[r].columns[c].components.slice();
        if (replaceWith === null) {
            newComponents = newComponents.filter(
                (dmo) => dmo.dmoName !== info.dmo.dmoName
            );
            this.dmog.removeChild(info.dmo.dmoName);
        } else {
            newComponents[d] = replaceWith;
            this.dmog.addChild(new DMComponent(replaceWith, this.dmog));
        }
        rows[r].columns[c].components = newComponents;
    }

    async openConditionPopup(emitData,event) {
        if(event){
            event.preventDefault();
            event.stopPropagation();
        }
        let item = emitData.dmo as DMComponent
        this._dmog = emitData.dmog

        const uiData = this.formsControls.find((c) => c.type === item.type);
        const parent = this._dmog.childrenMap[item.dmoName];
        const modal = this.msg.showComponent(DmoConditionComponent, {
            uiData,
            parent,
            readonly: this.readonly,
            currentDmog: this._dmog
        });
        const res = await modal.result;
        if (!res) {
            return;
        }
        const { payload, deletedConditions } = res as {
            payload: any;
            deletedConditions: IConditionBody[];
        };
        this.dmApi.saveDmoCondition(payload).subscribe((success) => {
            if (success) {
                const deleteCondition = (id: string) =>
                    this.dmApi.deleteDmoCondition(id).pipe(
                        filter((success) => success),
                        map((_) => id)
                    );
                const actualDeletingConditions = intersectionBy(
                    parent.conditions,
                    deletedConditions,
                    'Id'
                );

                from(actualDeletingConditions.map((c) => deleteCondition(c.Id)))
                    .pipe(
                        mergeAll(),
                        finalize(
                            () =>
                            (parent.conditions =
                                payload.dmoCondition[parent.guid].Condition)
                        )
                    )
                    .subscribe();
            }
        });
    }


    ngOnDestroy(): void {
        this.componentActive = false;
    }

    // ****************Layout

    reloadParent() {
        this.getBM()
    }
    onRightClick(event: MouseEvent) {
        event.preventDefault();
        this.AddDmog();

    }
    handleKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.AddDmog();
        }
    }


    AddDmog(onAddAbove?) {

        this.rows = [];
        let column = [];
        column.push({ "colIndex": 0, "dmoguid": [], "width": 99.5, "rows": [] })
        let letNextRow = {
            rowIndex: 0,
            columns: column
        } as PanelMainRow
        this.rows.push(letNextRow);

        this.panelMainContainer = {
            width: 100,
            rows: this.rows
        }

        this.getObjectDetails(this.selectedBMO).then((res) => {

            if (res != null) {
                this.rows = [];
            }
        });

        return;

    }
    public async onDropLayout(e: CdkDragDrop<DMOUI[] | Partial<IDMComponent>[]>) {

        const from = e.previousContainer;
        const to = e.container as CdkDropList<IDMComponent[]>;
        const fromIdx = e.previousIndex;
        const toIdx = e.currentIndex;
        if (from.id === 'form-controls') {

            let column = [];
            column.push({ "colIndex": 0, "dmoguid": [], "width": 99.5, "rows": [] })
            let letNextRow = {
                rowIndex: 0,
                columns: column
            } as PanelMainRow
            this.rows.push(letNextRow);

            this.panelMainContainer = {
                width: 100,
                rows: this.rows
            }
            this.getObjectDetails(this.selectedBMO).then((res) => {

                if (res != null) {
                    this.rows = [];
                }
            });

            return;
        }
    }
    OnAddDmogInGroup(event) {
        this.rows = [];
        let column = [];
        column.push({"colIndex": 0, "dmoguid": [], "width": 99.5, "rows": []});
    
        let letNextRow = { rowIndex: 0, columns: column } as PanelMainRow;
        this.rows.push(letNextRow);
    
        this.panelMainContainer = {
            width: 100,
            rows: this.rows
        };
    
        this.getObjectDetails(this.selectedBMO, undefined, event.data.DMOGID).then((res) => {
            if (res != null) {
                this.rows = [];
            }
        });
    }
    
    AddDmogGroup(onAddAbove?) {
        this.panelMainContainer = {
            width: 100,
            rows: []
        };
    
        this.getObjectDetailsForGroup(this.selectedBMO).then((res) => {
            if (res != null) {
                this.rows = [];
            }
        });
    }
    
    public saveObjectDetails(
        parent: ObjectClass,
        obj: Partial<ObjectClass> = {},
        payload: models.ObjectType,
        finalize?: (id: string) => Observable<any>
    ) {
        const newObject = Object.keys(obj).length === 0;
        // Store data in case optimistic update fails
        const original = { ...obj };

        // Optimistic ui update
        if (newObject) {
            const { childClass } = this.determineClassAndComponent(parent);
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

        let existbm = this.bm as classes.BM;
        if (!existbm?._selectedBMO?.Children?.includes(payload.id)) {
            existbm?._selectedBMO?.Children?.push(payload.id);
        }
        this.dmApi
            .saveObject(payload, this.bm)
            .pipe(
                switchMap((id) => {
                    if (finalize) {
                        return finalize(id).pipe(map(() => id));
                    }
                    return of(id);
                })
            )
            .subscribe({
                next: (success) => {
                    if (!success) rollback();
                    else {
                        this.bm.cacheObjectId(payload);
                    }
                },
                error: (_) => rollback(),
                complete: () => this.getBM(),
            });

    }
    public getBM() {
        const { ProcessName, Name, Version } = this.route.snapshot.data
            ?.bm as models.IBM;
        this.dmApi
            .getData(ProcessName, Name, Version)
            .subscribe((bm) => {
                this.bm = bm;
               setTimeout(() => {
                this.processChildren();
               }, 300);
                
            });
    }
    private determineClassAndComponent(
        parent: ObjectClass,
        data: Partial<ObjectClass> = {}
    ) {
        let component: ComponentType<
            models.ObjectDetail<models.ObjectType, models.ObjectType>
        >;
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

    setPanelStyle(obj) {
        return {
            position: 'fixed',
            left: `${obj.left}px`,
            top: `${obj.top}px`,
            width: `${obj.width}px`,
            height: `${obj.height}px`,
        };
    }
    // Working for BMOG/BMO/DMOG in DataModeler1
    public onTabRemove(tab: any) {
        const obj = tab.data;
        let className = this.getClassName(obj);
        let message:string;
        switch (className) {
            case 'Card Group':
                message='Yes, delete this card group'
                break;
                case 'Card':
                    message='Yes, Unshare this card'
                    break;
            default:
                message='Yes, delete this object';
                break;
        }
        const isCard = className === 'Card';
        const name = (obj as any)?.DisplayName || obj.Name;
        const btnText = className === 'Card' ? 'Unshare' : 'Delete';
        this.msg.showMessage('Warning', {
            header: `${btnText} ${className}`,
            body: `Are you sure you want to ${btnText.toLowerCase()} ${name}?`,
            btnText: `${btnText}`,
            checkboxText: message,
            isNewDesign: true,
            isDelete : true,
            undoable : isCard,
            callback: () => this.deleteObject(obj),
        });
    }

    private getClassName(obj: any): string {
        if (obj instanceof classes.BM) {
            return 'BM';
        } else if (obj instanceof classes.BMOG) {
            return 'View';
        } else if (obj instanceof classes.BMO) {
            return 'Section';
        } else if (obj instanceof classes.DMOG) {
            return obj.Type =='CardGroup' ? 'Card Group': 'Card';
        }
        return '';
    }
    public onTabEdit(tab: any) {
        if(tab.data.DMOGProps){
            this.panelMainContainer  = JSON.parse(tab.data.DMOGProps);
        }
        this.openObjectDetails(tab.data);
       
    }

    public openObjectDetails(obj: ObjectClass) {
        this.getObjectDetails(obj.parent as ObjectClass, obj);
    }
    // keep it
private async getObjectDetails(parent: ObjectClass, data: Partial<ObjectClass> = {}, parentGroupId?) {
    const newObject = Object.keys(data).length === 0;
    const { component } = this.determineClassAndComponent(parent, data);

    const modal = this.msg.showComponent(component, { data: data as ObjectClass, parent, newObject });
    const res = await modal.result;
    if (!res) return;

    if (this.isCardGroupType(res)) return;

    if (this.isTopLevelBM(parent, data)) {
        this.saveBMDetails(res);
        return;
    }

    const payload = this.preparePayload(parent, res, parentGroupId);

    const saveShared = this.getSaveSharedFunction(parent, res, newObject);

    if (saveShared) {
        this.saveObjectDetails(parent, data, payload, saveShared);
        if (parent instanceof classes.BMO && res.payload?.GUID) {
            this.newlyCreatedConatiner = res.payload.GUID;
        }
    } else {
        this.saveObjectDetails(parent, data, res);
    }
}


private isCardGroupType(res: any): boolean {
    if (res.Type === 'CardGroup') {
        this.handleCardGroup(res);
        return true;
    }
    return false;
}

private isTopLevelBM(parent: ObjectClass, data: Partial<ObjectClass>): boolean {
    return parent === undefined && data instanceof classes.BM;
}

private preparePayload(parent: ObjectClass, res: any, parentGroupId?: any): any {
    const payload = res.payload ?? {};

    if (parent instanceof classes.BMO && this) {
        payload.DMOGProps = JSON.stringify(this.panelMainContainer);
        if (parentGroupId) {
            payload.PrntDmogIDs = parentGroupId;
        }
    }

    return payload;
}

private getSaveSharedFunction(parent: ObjectClass, res: any, newObject: boolean): ((id: string) => any) | null {
    if (parent instanceof classes.BM) {
        return (id: string) => {
            if (res.shared.bmoIds === '-1' && !newObject) return EMPTY;
            return this.dmApi.saveSharedBmos(res.shared.bmogId || id, res.shared.bmoIds);
        };
    }

    if (parent instanceof classes.BMOG) {
        return (id: string) => {
            if (res.shared.dmogIds === '-1' && !newObject) return EMPTY;
            return this.dmApi.saveSharedDmogs(res.shared.bmoId || id, res.shared.dmogIds);
        };
    }

    if (parent instanceof classes.BMO) {
        return (_: string) => {
            if (res.shared.leftDMOGuids === '-1' && res.shared.rightDMOGuids === '-1' && !newObject) return EMPTY;
            return this.dmApi.saveSharedDmos(res.shared);
        };
    }

    return null;
}





    private handleCardGroup(res) {
        const dmogP = this.bm.selectedBMO.childrenMap[res.model.Name];
        if (dmogP) {
            this.bm.selectedBMO.childrenMap[res.model.Name].DisplayName = res.model.DisplayName;
            this.cdref.detectChanges();
        }
        this.saveDmogGrouping(res.model);
    }
    
saveDmogGrouping(model:any){
    this.dmApi.saveupdatePrntDmogIDs(model).subscribe(response => {
         if(response){
            this.getBM();
         }
      });
}


shouldShowAsMainCard(dmog: any): boolean {
  if (!dmog) return false;
  
  // If it's a CardGroup, always show it as a main card
//   if (dmog.Type === 'CardGroup') {
//     return true;
//   }
  
  // For Normal type, it's a main card if it has no parent
  return !dmog.PrntDmogIDs || dmog.PrntDmogIDs === '' || typeof dmog.PrntDmogIDs === 'undefined';
}

// Get all children for a CardGroup
getChildrenForCardGroup(parentDmogId: string | number): string[] {
  if (!parentDmogId) return [];
  
  const parentIdStr = parentDmogId.toString();
  const children: string[] = [];
  
  this.bm.selectedBMO.Children.forEach(dmogId => {
    const dmog = this.bm.selectedBMO.childrenMap[dmogId];
    if (!dmog) return;
    
    if (dmog.PrntDmogIDs) {
      const parentIds = dmog.PrntDmogIDs.toString().split(',').map(id => id.trim());
      if (parentIds.includes(parentIdStr)) {
        children.push(dmogId);
      }
    }
  });
  
  return children;
}

// Set  styling for child cards
setChildStyle(dmog: any): any {
  const baseStyle = this.setStyle(dmog);
  
  return {
    ...baseStyle,
    marginLeft: '20px',
    borderLeft: '3px solid #e0e0e0',
    paddingLeft: '10px'
  };
}


loadgroupChild(Children,groupId){
 let filter=Children.filter(a=>a.PrntDmogIDs.includes(groupId.toString()))
 return filter;
}

removeGroupChild(Children){
let filter=Children.filter(a=>a.PrntDmogIDs==null || a.PrntDmogIDs==undefined)
 return filter; 
}


private isGroupNameExists(name: string): boolean {
    if (!this.bm?.childrenMap) {
        return false;
    }
    
    const normalizedName = name.trim().toLowerCase();
    
    return this.bm.selectedBMO.Children.some(dmogId => {
        const dmog = this.bm.selectedBMO.childrenMap[dmogId];
        if (!dmog?.Type || !dmog?.DisplayName) return false;
        
        const existingName = dmog.DisplayName.trim().toLowerCase();
        return dmog.Type === 'CardGroup' && existingName === normalizedName;
    });
}

private getUniqueGroupName(): string {
    const baseName = "Card Group";
    let count = 1;
    const existingNames = new Set<string>();

    if (this.bm?.Children && this.bm?.childrenMap) {
        this.bm.Children.forEach(childId => {
            const child = this.bm.childrenMap[childId];
            this.collectCardGroupNamesRecursive(child, existingNames);
        });
    }

    let groupName = `${baseName} ${count}`;
    while (existingNames.has(groupName.toLowerCase())) {
        count++;
        groupName = `${baseName} ${count}`;
    }

    return groupName;
}

private collectCardGroupNamesRecursive(node: any, nameSet: Set<string>): void {
    if (!node || typeof node !== 'object') return;

    if (node.Type === 'CardGroup' && typeof node.DisplayName === 'string') {
        nameSet.add(node.DisplayName.trim().toLowerCase());
    }

    if (Array.isArray(node.Children) && node.childrenMap) {
        node.Children.forEach(childId => {
            const childNode = node.childrenMap[childId];
            this.collectCardGroupNamesRecursive(childNode, nameSet);
        });
    }
}

private async getObjectDetailsForGroup(parent: ObjectClass, data: Partial<ObjectClass> = {}) {
    const groupName = this.getUniqueGroupName();
    const uniqueGUID = `group${Date.now().toString(36)}`;
    let payload: IDMOG = {
        Parent: parent.id.toString(),
        DMOGID: undefined,
        id: uniqueGUID,
        GUID: uniqueGUID,
        LnkBmoDmogID: null,
        Type: DMOGType.CardGroup,
        Status: '1',
        DefCollapsed: "0",
        IsCollapsed: "0",
        IsHidden: "0",
        showHelp: "0",
        Roles: [],
        Share: [],
        Children: [],
        DisplayName: groupName,
        LongDesc: DMOGType.CardGroup,
        Name: uniqueGUID,
        Version: parent.Version,
        DMOGProps: undefined,
        PrntDmogIDs: undefined
    };
        
        if (parent instanceof classes.BMO) {
            if(this){
            payload.DMOGProps=JSON.stringify(this.panelMainContainer);
            }
            this.saveObjectDetails(parent, data, payload);
            //
            if(payload.GUID){
                 this.newlyCreatedConatiner =  payload.GUID
            }
         } 


}
  private saveBMDetails(payload: models.IBM) {
    this.dmApi.saveBM(payload).subscribe((success) => {
      if (success) {
        this.bm.update(payload);
      }
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
    toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }
    getSideNavModel(data) {
        this.sideNavModel = data;
        this.isDrawerOpen = true;
        this.sideNavModelEmitter.emit(this.sideNavModel);
        this.isDrawerOpenEmitter.emit(this.isDrawerOpen);
    }
    GetUpdatedDataForSidepanle(event) {
        if (event) {
            this.UpdatedData = event
        }
    }

    // Add this method to handle drag movement
    @HostListener('document:dragend', ['$event'])
    onGlobalDragEnd(event: DragEvent) {
        const scrollContainer = document.querySelector('.form-view');
        if (scrollContainer) {
            scrollContainer.classList.remove('scroll-top', 'scroll-bottom');
        }
        this.stopScrolling();
    }
    
    onResizeDmog(width: string,selectedDmog : any) {
    const newWidth =  Number(Math.max(0, Math.min(100, parseFloat(width ?? '0'))).toFixed(2));
    if (!selectedDmog?.DMOGProps) return;
  
    this.panelMainContainer = JSON.parse(selectedDmog.DMOGProps) || {};
    this.panelMainContainer.width = newWidth;
  
    const model = {
      DMOGID: selectedDmog.DMOGID,
      DMOGProps: JSON.stringify(this.panelMainContainer),
    };
  
    this.apiService.postgateway('',`wfapibm/DataModel/SaveDmogProps`, model).subscribe(() => {
      let model:SideNavModel={
        type:'dmog',
        dmog:selectedDmog,
        data:this.panelMainContainer
       };
        this.sideNavModel=model;
        this.sideNavModelEmitter.emit(this.sideNavModel);
        this.isDrawerOpenEmitter.emit(this.isDrawerOpen);
        this.UpdatedDataSideNavModel = model;
        this.cdref.detectChanges();
    });
  }

 
}
