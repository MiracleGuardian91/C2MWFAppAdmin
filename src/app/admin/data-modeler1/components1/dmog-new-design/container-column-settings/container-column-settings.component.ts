import { Component,Renderer2, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModelerApiService } from '../../../services1/data-modeler-api.service1';
import { ToastrService } from 'ngx-toastr';
import { PanelMainContainer, SideNavModel } from '../../../models1';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '@app/core';
import { ServiceProviderService } from '../../../services1/service-provider.service';
import { algo } from 'crypto-js';
import { DmogSharedDmoComponent } from '../dmog-shared-dmo/dmog-shared-dmo.component';
import { NgIf } from '@angular/common';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { DMOControlsComponent } from '../dmocontrols/dmocontrols.component';
@Component({
    selector: 'app-container-column-settings',
    templateUrl: './container-column-settings.component.html',
    styleUrls: ['./container-column-settings.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, NgIf, MatTabGroup, MatTab, DMOControlsComponent, DmogSharedDmoComponent]
})
export class ContainerColumnSettingsComponent implements OnInit {

  panelMainContainer:PanelMainContainer;
  @Input() sideNavModel:SideNavModel;
  @Input()  selectedItems:any;
  @Input() DraggingStatus:any;
  @ViewChild(DmogSharedDmoComponent)
  dmogSharedDmo: DmogSharedDmoComponent;
  hideDmoAndSharedDmo=false;
  hideDropAbleRow=false;
  width:number=0;
  colwidth:number=0;
  transformy;
  rowdmogId;
  Searchtrem:string;
 
  constructor(
    private apiService:ApiService,
    private dataProvider: ServiceProviderService,
    private renderer: Renderer2,
    private toster:ToastrService
  ){
    
  
  }
  formatLabel(value: number): string {
    return `${value} width`;
  }
 
  ngOnInit(): void {
    if (this.sideNavModel) {
      if(this.sideNavModel.type=='Column'){
        this.panelMainContainer=this.sideNavModel.data;
        this.width= this.panelMainContainer.width;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
        this.colwidth =this.getSelectedColumnWith();
      }
      }
  }
 
  ngOnChanges() {
    if (this.sideNavModel) {
      if(this.sideNavModel.type=='Column'){
        this.panelMainContainer=this.sideNavModel.data;
        this.width= this.panelMainContainer.width;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
        this.colwidth =this.getSelectedColumnWith();
        this.hideDmoAndSharedDmo = this.EnableControlsDmog(this.panelMainContainer);
        this.hideDropAbleRow=this.hideRow(this.panelMainContainer)
      
  
      }
      
    }
  }
  getSelectedColumnWith(){
    if(this.sideNavModel.type=='Column'){
    
      let selectedRow=this.sideNavModel.data.r;
      let colIndex=this.sideNavModel.data.colIndex
      for (let index = 0; index < selectedRow.columns.length; index++) {
        const element = selectedRow.columns[index];
        if(index == colIndex){
          return Math.floor(element.width)
          break;
        }
        
      }
  
    }
  return 0;
  }
EnableControlsDmog(item)
{
  try {
    
  
  let tpanelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
  let rowIndex: number=item.rowIndex
  let colIndex: number=item.colIndex;
   let currentRoWithCol=tpanelMainContainer.rows.filter(a=>a.rowIndex == rowIndex);
   if(currentRoWithCol.length>0){
    let excolumn= currentRoWithCol[0].columns[colIndex];
    if (excolumn) {
      let existingColumn=excolumn.rows;
      let exColLength=existingColumn.length;
      if(exColLength>0){
        return true;
      }
   }

  }
} catch (error) {
  return false;
}
  return false;
}

hideRow(item)
{
  try {
    
  
  let tpanelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
  let rowIndex: number=item.rowIndex
  let colIndex: number=item.colIndex;
   let currentRoWithCol=tpanelMainContainer.rows.filter(a=>a.rowIndex == rowIndex);
   if(currentRoWithCol.length>0){
    let excolumn= currentRoWithCol[0].columns[colIndex];
    if (excolumn) {
      if(excolumn.dmoguid!=null && excolumn.dmoguid.length>0 ){
        return true;
      }
   }

  }
} catch (error) {
  return false;
}
  return false;
}
  onDragOver(event){
    event.preventDefault()
  
   }
   dragRow(event){
    var model={"selectedItem":this.sideNavModel.data,'DMOGID':this.sideNavModel.dmog.DMOGID}
 
    event.dataTransfer.setData('ColumnDmogRows',JSON.stringify(model));


   }
  changeWidth(event){
    this.width=event.value;
  }
 
  SaveWidthWidth(event){
    if(this.sideNavModel && this.sideNavModel.type=='Column') 
      { let currentwidth = this.sideNavModel.data.c.width;
        let cuurentRowIndex= this.sideNavModel.data.r.rowIndex;
        let currentColIndex = this.sideNavModel.data.c.colIndex;
        this.resizeColumn();
      var model={};
    
       model={"DMOGID":this.sideNavModel.dmog.DMOGID,
               "DMOGProps":JSON.stringify(this.panelMainContainer)}
        
     
      const url = `wfapibm/DataModel/SaveDmogProps`;
     this.apiService.postgateway('',url,model).subscribe(r=>{
        this.sideNavModel.dmog.DMOGProps=JSON.stringify(this.panelMainContainer)
        this.updateDataValue();
        this.dataProvider.setUpdatedColumnData(model);
        setTimeout(() => {
          this.dataProvider.setOpenSidebarNav(this.sideNavModel);
        }, 20);
      
      },error=>{
        console.log(error)
      });
     
    
  }

}

updateDataValue(){
  if(this.sideNavModel.type=='Column'){
    let selectedRow=this.sideNavModel.data.r;
    let colIndex=this.sideNavModel.data.colIndex
    for (let index = 0; index < selectedRow.columns.length; index++) {
      const element = selectedRow.columns[index];
      if(index == colIndex){
         element.width=this.colwidth
        
      }
    }
  }

}

 resizeColumn()
{
    if(this.sideNavModel.type=='Column'){
    
      this.panelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
      let cuurentRowIndex= this.sideNavModel.data.r.rowIndex;
      let filteredColumn=this.panelMainContainer.rows.filter(a=>a.rowIndex==cuurentRowIndex)[0].columns;
      if (filteredColumn.length>0 ) {
        let colIndex=this.sideNavModel.data.colIndex
        let  totalMWWidth = 0;
        let  nonMWCount = 0 ;
        let previouseWidth=0;
        for (let index = 0; index < filteredColumn.length; index++) {
        const element = filteredColumn[index];
        if(index == colIndex){
          previouseWidth =  filteredColumn[index].width || 0;
          filteredColumn[index].mw=true;
          filteredColumn[index].width=Math.floor(this.colwidth);
        }
        if(filteredColumn[index].mw){
          totalMWWidth += filteredColumn[index].width || 0;
        }
        else{
          nonMWCount++;
        }
       
       
      }
      if(totalMWWidth > 100.5){  //Previously  == 99.5
        this.toster.warning('Width exceeds from 100%. Resizing is not allowed');
        filteredColumn[colIndex].width  =  previouseWidth;
        return;
      }
      
      let remainingWidth = 99.5 - totalMWWidth;
      let distrinutedWidth = nonMWCount >0 ? remainingWidth / nonMWCount: 0;
      for (let index = 0; index < filteredColumn.length; index++) {
        let col = filteredColumn[index];
        if(!col.mw || col.width <5){
          col.width = Math.max(distrinutedWidth, 5);
        }
      }
 
   
  

      }
     
  
    }
 
  
}





selectedTab($event){
 if(this.dmogSharedDmo && $event.index==1)
  this.dmogSharedDmo.reload();
  this.onTabChange($event);
}
SetDefultTabsettings()
  {
    const tabIndex=0;
    const inkBarElement = document.querySelector('.mat-ink-bar') as HTMLElement;
    if (inkBarElement && tabIndex == 0) {
      this.renderer.setStyle(inkBarElement, 'left', `0px`);
    }
  }


  onTabChange(event: any): void {
     const tabIndex = event.index; 
     const inkBarElement = document.querySelector('.mat-ink-bar') as HTMLElement;

      if (inkBarElement) {
        const left = tabIndex === 0 ? '0px' : '152px';
        this.renderer.setStyle(inkBarElement, 'left', left);
      }
   
  }

  searchControls(key: string) :void
  {
    this.Searchtrem =  key;
  }
  
}
