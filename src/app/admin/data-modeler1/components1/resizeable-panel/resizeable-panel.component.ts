import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

import {  ResizeEvent } from 'angular-resizable-element';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';

import { MessageService } from '@app/core';
import { intersectionBy } from 'lodash';
import { ToastrService } from 'ngx-toastr';

import { ServiceProviderService } from '../../services1/service-provider.service';
import { DMOG } from '../../classes';
import { DMOS } from '../../const1';
import { ApiService } from '@app/admin/core/services/api.service';
import { environment } from '@env/environment';

import { DMOType, PanelMainContainer, PanelMainRow } from '../../models1';
import { MAT_MENU_DEFAULT_OPTIONS, MatMenuTrigger } from '@angular/material/menu';
import { ContextMenuPosition } from '../contextMenu/contextMenu.datatypes';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShareDmoComponent } from '../share-dmo/share-dmo.component';

import { DmogSettingsComponent } from '../dmog-settings/dmog-settings.component';
import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgStyle, NgTemplateOutlet, NgFor, NgIf } from '@angular/common';
import { DmoComponent } from '../dmo/dmo.component';
import { ContextMenuComponent } from '../contextMenu/contextMenu.component';
import { DmoFormControlsComponent } from '../dmo-form-controls/dmo-form-controls.component';
;
@Component({
    selector: 'app-resizeable-panel',
    templateUrl: './resizeable-panel.component.html',
    styleUrls: ['./resizeable-panel.component.scss'],
    providers: [
        {
            provide: MAT_MENU_DEFAULT_OPTIONS,
            useValue: { overlayPanelClass: 'custom-mat-Class' }
        }
    ],
    standalone: true,
    imports: [
        NgStyle,
        NgTemplateOutlet,
        NgFor,
        NgIf,
        DmoComponent,
        NgbTooltip,
        MatMenuTrigger,
        ContextMenuComponent,
        DmoFormControlsComponent,
        ShareDmoComponent,
    ],
})
export class ResizeablePanelComponent implements OnInit {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;
  // @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;
  shareDmo: MatDialogRef<ShareDmoComponent>;
  availableDmoToShare:any =[];
  constructor(
    private dmApi: DataModelerApiService,
    private apiService:ApiService,
    private msg: MessageService,
    private toast: ToastrService,
    private dataProvider: ServiceProviderService,
    private cdref: ChangeDetectorRef ,
    private elementRef: ElementRef,
    public matdialog: MatDialog,
    private modalService: NgbModal
  ) {

    this.dataProvider.getHideContextMenu().subscribe(result => {
      this.resetDivColour();
    });

    this.dataProvider.getDmoStates().subscribe(result => {
      this.updatePropBaseOfDMO(this.contextMenuData,result)
    });
    this.dataProvider.getDeleteDmo().subscribe(result => {
      if(result.dmogId==this.data.GUID){
        this.removeDmoToOthers(result.dmoguid)
        this.saveProps();
      }
    });
    this.dataProvider.getMoveDmo().subscribe(result => {
      if(result.dmogId==this.data.DMOGID){
        this.removeDmoToOthers(result.dmoguid)
        this.updatereOrdering(result.targetId,result.dmoguid)
        this.saveProps(null,result);
        // setTimeout(() => {
        //   this.reloadParent.emit(true);
        // }, 500);
      }
      if(result.prevdmogId==this.data.DMOGID){
        this.removeDmoToOthers(result.dmoguid)
        this.saveProps(null,result);
      }
     
    });

    this.dataProvider.setMoveDmo
  }
  @Input() title: string;
  @Input() active = false;
  @Input() hasInvalidForm = false;
  @Input() bmodisplay: boolean;
  @Input() trnsctnId: any;
  @Input() ChildProcessName: string;
  @Input() ParentDmoValue: any;
  @Input() ChildDmoGuid: any;
  @Input() ProcessType: any;
  @Input() data: any;

  dragdmoguid:any;
  @Input() left = 0;
  @Input() top = 0;
  @Input() readonly = false;
 
   currentRow;
   currentColumn
   type: DMOType;
  rows: PanelMainRow[] = [];

  panelMainContainer:PanelMainContainer

  dmo = { display: false };
  @Input() BMO;
  @Input() panel;
 
  @Output() tabRemove = new EventEmitter<ResizeablePanelComponent>();
  @Output() tabEdit = new EventEmitter<ResizeablePanelComponent>();
  @Output() OnBMOSave = new EventEmitter<ResizeablePanelComponent>();
  @Output() onDmoEdit = new EventEmitter<any>();
  @Output() onDmoDelete = new EventEmitter<any>();
  @Output() openConditionPopup = new EventEmitter<any>();
  @Output() openclonePopup = new EventEmitter<any>();
  @Output() reloadParent = new EventEmitter<any>();
 @Output() dragDmoToAnotherdmog  = new EventEmitter<any>();
 @Output() dropDmoToAnotherdmog  = new EventEmitter<any>();
  hoveredRowIndex: any;
  hoveredColumnIndex: any;
  hoveredColumnRowIndex: any;
  private _dmog: DMOG;
  contextMenuPosition: ContextMenuPosition = null;
  contextMenuFormPosition: ContextMenuPosition = null;
  contextMenuData:any = null;
  cdkDragDisabled=false
  showFormContextMenu =false;
  showSharedmoContextMenu=false;
  //public bm: classes.BM;
  @Input()
  set dmog(dmog: DMOG) {
    this._dmog = dmog;
  }
  get dmog() {
    return this._dmog;
  }
  private IsJsonStaticGridDmo: boolean = false;
  readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  ngOnInit(): void {
    this.style = {
      width: `100%`,
      height: `auto`,
    };
    if(this.data && this.data.DMOGProps){
    
      this.panelMainContainer=JSON.parse(this.data.DMOGProps);
      if(this.panelMainContainer){
        this.rows=this.panelMainContainer.rows
      }
      this.updateWidth();
     
    }

    
  }
  disableDrag(){
    this.cdkDragDisabled=true;

  }
  
  updateWidth(){
    if(this.panelMainContainer){
      let width = this.panelMainContainer.width;
       if(width==0){
        width=100
       }
    this.style = {
      width: `${100}%`,
      height: `auto`,
    };
  }
  }
  enableDrag(){
    this.cdkDragDisabled=false;
  }
  ngAfterContentChecked() {
    //this.cdref!.detectChanges();
 }
  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `auto`,
    };
  }

  onTabRemove(tab: ResizeablePanelComponent) {
    this.resetDivColour();
    this.tabRemove.emit(tab);
  }
  onEditDMOGRemove(tab: ResizeablePanelComponent) {
    this.resetDivColour();
    this.tabEdit.emit(tab);
  }
   ShowDmogSettings(){
   if(!this.panelMainContainer){
    let column=[];
      column.push({"colIndex":0,"dmoguid":[],"width":99.5,"rows":[]})
      let letNextRow={rowIndex:0,
        columns:column
      } as PanelMainRow
       this.rows.push(letNextRow);
    
       this.panelMainContainer={
        width:100,
        rows: this.rows
      }
    }

    let modal = this.matdialog.open(DmogSettingsComponent,  {
      data: {
        width: this.panelMainContainer.width,
        dmogName:this.title
      
      },
      // height: '300px',
      //  width: '300px',
    });

    modal.afterClosed().subscribe(result => {
      if(result && result.event == 'save'){
        this.panelMainContainer.width=result.data.width;
        this.saveProps(true);
        this.updateWidth();
       
        
   
      }
    });
  }
  onAddRow() {
   let nextIndex= this.rows.length;
   let column=[];
   column.push({"colIndex":0,"dmoguid":[],"width":99.5,"rows":[]})
   let letNextRow={rowIndex:nextIndex,columns:column} as PanelMainRow
    this.rows.push(letNextRow);
    this.resetDivColour();
    this.saveProps();
  }

  onAddColumn(rowIndex: number) {
    if (this.rows[rowIndex].columns.length < 12) {
      let currentRoWithCol=this.rows.filter(a=>a.rowIndex == rowIndex);
      let column= currentRoWithCol[0].columns.length;
      this.rows[rowIndex].columns.push({"colIndex":column+1,"dmoguid":[],"rows":[]});
      this.resetColumnWidth(currentRoWithCol[0].columns);
      this.saveProps()
    } else {
      alert('Maximum 12 columns allowed per row.');
    }

  }

  resetColumnWidth(currentRoWithCol,rowIndex?){
   
    if(rowIndex!=null){
      let currentRow=this.rows.filter(a=>a.rowIndex == rowIndex);
      if(currentRow.length==0)
        return
      currentRoWithCol= currentRow[0].columns;
    }
    let column= currentRoWithCol;
    let  index=0;
    let perClmwidth=99.5/currentRoWithCol.length;
    for(let c of column ){
       c.width =perClmwidth;
       c.colIndex=index;
       c.mw=false
       index++;

    }

  }

  resetColumnWidthForRowInColumn(currentRoWithCol){
    for(let r of currentRoWithCol ){
    let column= r.columns
    let perClmwidth=100/r.columns.length;
    let  index=0;
    for(let c of column ){
       c.width =perClmwidth;
       c.index=index;
       c.mw=false
       index++;
    }
  }

  }

  onAddRowInColumn(item){
   let rowIndex: number=item.rowIndex
   let colIndex: number=item.colIndex;
    let currentRoWithCol=this.rows.filter(a=>a.rowIndex == rowIndex);
    if(currentRoWithCol.length>0){
     let column= currentRoWithCol[0].columns[colIndex];
      if (column) {
        let childColum=[];
        childColum.push({"index":0,"width":100,"dmoguid":[]})
         column.rows.push({"columns":childColum})
         this.resetColumnWidthForRowInColumn(column.rows)
      }
    
    }
    this.saveProps();
  }
  ///dmo
  onAddRowChildColumnDmo(item,dmoguid){
    let rowIndex: number=item.rowIndex
    let colIndex: number=item.colIndex;
     let currentRoWithCol=this.rows.filter(a=>a.rowIndex == rowIndex);
     if(currentRoWithCol.length>0){
      let column= currentRoWithCol[0].columns[colIndex];
      if (column) {
        let existingColumn=column.rows[item.ColumnRowIndex]
        let ex=existingColumn.columns.length;
        for(let c of existingColumn.columns ){
          if(c.index==item.colRowcolumnIndex){
            if(!c.dmoguid){
              c.dmoguid=[];
            }
            c.dmoguid.push(dmoguid);
          }
         
        }
     
     }
     
     }
     this.saveProps();
  }
  //end
  onAddRowChildColumn(item){
    let rowIndex: number=item.rowIndex
    let colIndex: number=item.colIndex;
     let currentRoWithCol=this.rows.filter(a=>a.rowIndex == rowIndex);
     if(currentRoWithCol.length>0){
      let column= currentRoWithCol[0].columns[colIndex];
      if (column) {
        let existingColumn=column.rows[item.ColumnRowIndex]
        let ex=existingColumn.columns.length;
        existingColumn.columns.push({"index":ex+1,"width":100,"dmoguid":[]});
        this.resetColumnWidthForRowInColumn(column.rows)
     }
     
     }
     this.saveProps();
  }
  onRemoveRowChildColumn(item){
    let rowIndex: number=item.rowIndex
    let colIndex: number=item.colIndex;
     let currentRoWithCol=this.rows.filter(a=>a.rowIndex == rowIndex);
     if(currentRoWithCol.length>0){
      let column= currentRoWithCol[0].columns[colIndex];
      if (column) {
        let existingColumn=column.rows[item.ColumnRowIndex]
        let ex=existingColumn.columns.length;
        existingColumn.columns.splice(item.colRowcolumnIndex, 1);
        this.resetColumnWidthForRowInColumn(column.rows)
     }
     
     }
     this.saveProps();
  }
  onRemoveColumn(rowIndex: number, colIndex: number) {
    this.rows[rowIndex].columns.splice(colIndex, 1);
    this.resetColumnWidth(null,rowIndex);
    this.saveProps()
  }

  onRemoveRow(rowIndex: number) {
    this.rows.splice(rowIndex, 1);
    this.saveProps()
  }
  

  shareDmoSelect(dmo){
    this.updatePropBaseOfDMO(this.contextMenuData,dmo.guid)
  }
  FormControlSelect(type){
    this.type=type;
    this.OnBMOSave.emit(this);
  }
  GetSelectMenu(rowIndex,colIndex){
    this.currentRow=rowIndex;
    this.currentColumn=colIndex;

  }
  styleObject(column) {
    if (column){
        return {width: column.width+"%"}
    }
    return {}
}

styleObjectChild(column){
  if (column){
    const totalColumns = column?.columns?.length || 1;
    const paddingAdjustment = 1;
  const modifiedWidth =  column?.columns?.map((col:any)=>{
   return col?.width ? (col?.width - paddingAdjustment / totalColumns) : col?.width;
  })
    return {width: modifiedWidth+"%"}
}
return {}

}
  //prop 
  saveProps(isReload?,fromOneToAnotherDmo?){
   
    if(!this.panelMainContainer){
      this.panelMainContainer={
        width:100,
        rows:this.rows
      }
    }else{
      this.panelMainContainer.rows=this.rows
    }
    var model={};
  if(fromOneToAnotherDmo){
    model={"DMOGID":this.data.DMOGID,
        "prevdmogId":fromOneToAnotherDmo.prevdmogId,
         "newdmogId":fromOneToAnotherDmo.dmogId,
         "dmoguid":fromOneToAnotherDmo.dmoguid,
          "DMOGProps":JSON.stringify(this.panelMainContainer)
      }
  }else{
     model={"DMOGID":this.data.DMOGID,
             "DMOGProps":JSON.stringify(this.panelMainContainer)
      }
    }
  
    const url = `wfapibm/DataModel/SaveDmogProps`;
    this.apiService.postgateway('',url,model).subscribe(r=>{
      this.data.DMOGProps=JSON.stringify(this.panelMainContainer)
      if(isReload){
        this.reloadParent.emit(true)
      }
    },error=>{
      console.log(error)
    });
   
  }
  showContextMenu(event:any,clickedDiv){
    if(this.readonly)
      return
    event.stopPropagation();
    this.showFormContextMenu=false;
    this.showSharedmoContextMenu=false;
    this.resetDivColour();
    // let  bgc = 'rgb(178 211 236)';
    const div: HTMLDivElement = <HTMLDivElement>event.target;
    //div.style.backgroundColor=bgc;
    this.contextMenuPosition=new ContextMenuPosition()
    this.contextMenuData = clickedDiv;
    this.contextMenuPosition.rightClickMenuPositionX=event.currentTarget.getBoundingClientRect().right -120;
    this.contextMenuPosition.rightClickMenuPositionY=event.currentTarget.getBoundingClientRect().y;
    this.contextMenuFormPosition=new ContextMenuPosition()
    this.contextMenuFormPosition=this.contextMenuPosition;
  }
  resetDivColour(){
    return;
    const dom: HTMLElement = this.elementRef.nativeElement;
    const elements = dom.querySelectorAll('.colouredDiv');
    if(elements){
      elements.forEach((cdiv) => {
        const div: HTMLDivElement = <HTMLDivElement>cdiv;
       div.style.backgroundColor="#fff";

      })
    }
  }


updatePropBaseOfDMO(data,dmoguid){
      if(data==undefined || data==null)
        return
  switch (data.type) {
    case 'parentRow': {
      let currentRoWithCol=this.rows.filter(a=>a.rowIndex == data.rowIndex);
      let column= currentRoWithCol[0].columns.length;
      //this.rows[data.rowIndex].columns.push({"column":column+1,"dmoguid":null,"rows":[]});
      break;
    };
    case 'column': {
          let currentRoWithCol=this.rows.filter(a=>a.rowIndex == data.rowIndex);
          let column= currentRoWithCol[0].columns;
          for (let index = 0; index < column.length; index++) {
            if(index == data.colIndex){
              column[index].dmoguid.push(dmoguid);
              break;
            }
          }
          this.saveProps()
        
      break;
    };

    case 'columnRow': {
       let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex,"colRowcolumnIndex":data.colRowcolumnIndex}
       

        let currentRoWithCol=this.rows.filter(a=>a.rowIndex == data.rowIndex);
        if(currentRoWithCol.length>0){
         let column= currentRoWithCol[0].columns[data.colIndex];
         if (column) {
           let existingColumn=column.rows[data.colRowIndex]
           for (let index = 0; index < existingColumn.columns.length; index++) {
            if(index == data.colRowcolumnIndex){
              existingColumn.columns[index].dmoguid.push(dmoguid);
              break;
            }
          }
        }
      }
      this.saveProps()
      break;
    };

   
  }

}
updatereOrdering(targetId,dmoguid){
  if(targetId && targetId.length>0 && dmoguid){
    let ids=targetId.split('_');
    if(ids && ids.length>0){
      let _currentdmog=ids[0];
      let rowORCol=ids[1];
      if(rowORCol=="column"){
        let rowIndex=Number(ids[2]);
        let colIndex=Number(ids[3]);
        let data={'rowIndex':rowIndex,'colIndex':colIndex,'type':'column'}
        this.removeDmoToOthers(dmoguid);
        this.updatePropBaseOfDMO(data,dmoguid);
      }
      else if(rowORCol=="columnRow"){
        let rowIndex=Number(ids[2]);
        let colIndex=Number(ids[3]);
        let colRowIndex=Number(ids[4]);
        let  colRowcolumnIndex=Number(ids[5]);
        let data={'type':'columnRow','rowIndex':rowIndex,"colIndex":colIndex,'colRowIndex':colRowIndex,"colRowcolumnIndex":colRowcolumnIndex}
       

        this.removeDmoToOthers(dmoguid);
        this.updatePropBaseOfDMO(data,dmoguid);

      }

    }
  }
}
removeDmoToOthers(dmoguid){
  if(this.rows.length){
    for (let index = 0; index < this.rows.length; index++) {
      const r = this.rows[index];
      for (let c = 0; c < r.columns.length; c++) {
        const col = r.columns[c];
        if(col.dmoguid!=null){
          var existsIndex = col.dmoguid.indexOf(dmoguid);
              if (existsIndex > -1) {
                col.dmoguid.splice(existsIndex, 1);
              }
         
        }
          for (let cr = 0; cr < col.rows.length; cr++) {
            const crc = col.rows[cr];
            for (let icrc = 0; icrc < crc.columns.length; icrc++) {
              const cColumn = crc.columns[icrc];
              if(cColumn.dmoguid!=null){
                var existsIndex = cColumn.dmoguid.indexOf(dmoguid);
                if (existsIndex > -1) {
                  cColumn.dmoguid.splice(existsIndex, 1);
                }
                
                }
            }
        }
        
      }
      
    }
  }
}
 getCurrentDMO(dmoguid){
  // if(this.availableDmoToShare  && this.availableDmoToShare.components && this.availableDmoToShare.components.length>0 ){
  //   let dmo=this.availableDmoToShare.components.filter(a=>a.guid==dmoguid)
  //   if(dmo && dmo.length>0){
  //     return dmo[0];
  //   }
  // }else{
    if(this.data  && this.data.formData && this.data.formData.components){
      let dmo=this.data.formData.components.filter(a=>a.guid==dmoguid)
      if(dmo && dmo.length>0){
        return dmo[0];
      }
    } 
  //}
  return null;
  
 }
 dragdmo(event,dmoguid){
  this.dragdmoguid=dmoguid;
  this.dragDmoToAnotherdmog.emit({"dmogId":this.data.DMOGID,"dmoguid":dmoguid});
  console.log("dragdmo",event,dmoguid);
  
 }
 onDragOver(event){
  event.preventDefault()

 }
 dropdmo(event:any,dmoguid){
  if(this.readonly)
    return;
  event.stopPropagation();
  let targetId=event.currentTarget.id;
  this.showFormContextMenu=false;
  this.showSharedmoContextMenu=false;
  this.updatereOrdering(targetId,this.dragdmoguid)
  if(!dmoguid){
    if(targetId && targetId.length>0){
      let ids=targetId.split('_');
      if(ids && ids.length>0){
    this.dropDmoToAnotherdmog.emit({"dmogId":this.data.DMOGID,"targetId":targetId});
      }
    }
  }
   
 }
 
 CurrentDropItem(event,id){
  const div: HTMLDivElement = <HTMLDivElement>event.relatedTarget
  //console.log("CurrentDropItem","id",id);
 }
//  GetAvailableDmoToShare(){
  
 // this.dmApi.GetAvailableDmoToShare(this.data.DMOGID, this.data.root.BMId).subscribe(x=>{
//   this.availableDmoToShare= x;
  
// });
//  }
  OperateContextMenu($event) {
    var data=$event.showContextMenuFor;
    var option=$event.option;
    this.showFormContextMenu=false;
    if(option=="AddDMO"){
      this.contextMenuFormPosition=$event.position;
      this.showFormContextMenu=true;
     return;
    }
    else if(option=="shareDMO"){
      this.showSharedmoContextMenu=true;
      this.contextMenuFormPosition=$event.position;
    
     return;
     
    }
    if(option=="EditDMO" || option=="DeleteDMO" ||option =="ConditionsDMO" || option =="CloneDMO"){
      switch (data.type) {
        case 'column': {
          if(data.dmoguid){
              let dmowithDmog={"dmog":this.data,"dmo":this.getCurrentDMO(data.dmoguid),"dmoguid":data.dmoguid};
              if(option=="DeleteDMO"){
                this.onDmoDelete.emit(dmowithDmog);
              }else if(option=="EditDMO" ){
              this.onDmoEdit.emit(dmowithDmog);
              }
              else if(option=="ConditionsDMO" ){
                this.openConditionPopup.emit(dmowithDmog);
                }
                else if(option=="CloneDMO" ){
                  this.openclonePopup.emit(dmowithDmog);
                  }
              return;
            }
          
          let currentRoWithCol=this.rows.filter(a=>a.rowIndex == data.rowIndex);
           for (let index = 0; index < currentRoWithCol.length; index++) {
            for (let c = 0; c < currentRoWithCol[index].columns.length; c++) {
                if(c==data.colIndex){
                  const dmoguid=currentRoWithCol[index].columns[c].dmoguid[0]
                  if(dmoguid){
                    let dmowithDmog={"dmog":this.data,"dmo":this.getCurrentDMO(dmoguid),"dmoguid":dmoguid};
                    if(option=="DeleteDMO"){
                      this.onDmoDelete.emit(dmowithDmog);
                    }else if(option=="EditDMO" ){
                    this.onDmoEdit.emit(dmowithDmog);
                    }
                    else if(option=="ConditionsDMO" ){
                      this.openConditionPopup.emit(dmowithDmog);
                      }
                      else if(option=="CloneDMO" ){
                        this.openclonePopup.emit(dmowithDmog);
                        }
                    return;
                  }
                }
              
            }
           }
          break;
        };
  
        case 'columnRow': {
          let dmoguid="";
          if(data.dmoguid){
            dmoguid=data.dmoguid;
          }else{
          let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex}
          let currentRoWithCol=this.rows.filter(a=>a.rowIndex == data.rowIndex);
          
          for (let index = 0; index < currentRoWithCol.length; index++) {
            loop2:
           for (let c = 0; c < currentRoWithCol[index].columns.length; c++) {
               if(c==data.colIndex){
                
                 let column= currentRoWithCol[0].columns[c];
                 if (column) {
                   let existingColumn=column.rows[item.ColumnRowIndex]
                   
                   for (let crin = 0; crin < existingColumn.columns.length; crin++) {
                    
                    if(crin==data.colRowcolumnIndex){
                      const element = existingColumn.columns[crin];
                      dmoguid=element.dmoguid[0];
                      break loop2;
                      return;
                    }
                   }
                 }
               }
             
           }
          }
         }
          //
          let dmowithDmog={"dmog":this.data,"dmo":this.getCurrentDMO(dmoguid),"dmoguid":dmoguid};
          if(option=="DeleteDMO"){
            this.onDmoDelete.emit(dmowithDmog);
          }else if(option=="EditDMO" ){
          this.onDmoEdit.emit(dmowithDmog);
          }
          else if(option=="ConditionsDMO" ){
            this.openConditionPopup.emit(dmowithDmog);
            }
            else if(option=="CloneDMO" ){
              this.openclonePopup.emit(dmowithDmog);
              }
          break;
        };
  
       
  
      }
     return;
    }

    this.resetDivColour();
    switch (data.type) {
      case 'parentRow': {
        if(option=='AddColumn'){
         this.onAddColumn(data.rowIndex);
        }
       else if(option=='RemoveRow'){
          this.onRemoveRow(data.rowIndex);
         }
        
        break;
      };
      case 'column': {
        if(option=='AddColumn'){
          this.onAddColumn(data.rowIndex);
         }
        else if(option=='AddRow'){
           let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex}
           this.onAddRowInColumn(item);
          }
          else if(option=='RemoveColumn'){
            this.onRemoveColumn(data.rowIndex, data.colIndex)
           }
          
        break;
      };

      case 'columnRow': {
        if(option=='AddColumn'){
          let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex}
          this.onAddRowChildColumn(item);
         }
        else if(option=='RemoveColumn'){
          let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex,"colRowcolumnIndex":data.colRowcolumnIndex}
           this.onRemoveRowChildColumn(item);
          }
        break;
      };
      case 'NestedcolumnRow': {
        if(option=='AddColumn'){
          let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex}
          this.onAddRowChildColumn(item);
         }
        else if(option=='RemoveColumn'){
          let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex,"colRowcolumnIndex":data.colRowcolumnIndex}
           this.onRemoveRowChildColumn(item);
          }
        break;
      };
      

     

    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.resetDivColour()
  }
}



