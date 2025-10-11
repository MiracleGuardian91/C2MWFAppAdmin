import { Component,Renderer2, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModelerApiService } from '../../../services1/data-modeler-api.service1';
import { ToastrService } from 'ngx-toastr';
import { PanelMainContainer, PanelMainRow, SideNavModel } from '../../../models1';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '@app/core';
import { ServiceProviderService } from '../../../services1/service-provider.service';
import { DmogSharedDmoComponent } from '../dmog-shared-dmo/dmog-shared-dmo.component';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { DMOControlsComponent } from '../dmocontrols/dmocontrols.component';


@Component({
    selector: 'app-dmog-sub-column-settings',
    templateUrl: './dmog-sub-column-settings.component.html',
    styleUrls: ['./dmog-sub-column-settings.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, MatTabGroup, MatTab, DMOControlsComponent, DmogSharedDmoComponent]
})
export class DmogSubColumnSettingsComponent implements OnInit {

  panelMainContainer:PanelMainContainer;
  @Input() sideNavModel:SideNavModel;
  @Input() draggingStatus:any;
  @ViewChild(DmogSharedDmoComponent)
  dmogSharedDmo: DmogSharedDmoComponent;
  
  width:number=0;
  transformy;
  rowdmogId;
  hideDmoAndSharedDmo:boolean=true;
  colwidth:number=0;
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
   
        this.panelMainContainer=this.sideNavModel.data;
        this.width=this.panelMainContainer.width;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
        this.colwidth =this.getSelectedColumnWith();
      }
  }
  ngOnChanges() {
    if (this.sideNavModel) {
      console.log(this.sideNavModel);
      if(this.sideNavModel.type=='columnRow'){
        this.panelMainContainer=this.sideNavModel.data;
        this.colwidth =this.getSelectedColumnWith();
      }
      
    }
  }




  ngAfterViewInit(){
    setTimeout(() => {
    this.SetDefultTabsettings();
  }, 300);
  }



  getSelectedColumnWith() {
    if (this.sideNavModel.type == 'columnRow') {
      let selectedRow = this.sideNavModel.data.r;
      let rowColIndex = this.sideNavModel.data.colRowcolumnIndex;
      for (let index = 0; index < selectedRow.columns.length; index++) {
        const column = selectedRow.columns[index];
  
        if (column.rows.length) { 
          for (let rc = 0; rc < column.rows.length; rc++) {
            let innerRow = column.rows[rc];
  
            if (innerRow.columns.length) {
             
              let InnerColumn = innerRow.columns[rowColIndex];
              if (InnerColumn && rowColIndex == InnerColumn.index) {
                return Math.floor(InnerColumn.width);
                break;  
                
              }
            }
          }
        }
      }
    }
    return 0;
  }
  

 
  onDragOver(event){
    event.preventDefault()
  
   }
   dragRow(event){
    var model={"selectedItem":this.sideNavModel.data,'DMOGID':this.sideNavModel.dmog.DMOGID}
 
    event.dataTransfer.setData('SubColumnDmo',JSON.stringify(model));


   }
 


   changeWidth(event){
    this.width=event.value;
  }
 
  SaveWidthWidth(event){
    if(this.sideNavModel && this.sideNavModel.type=='columnRow') 
      { 
        this.resizeInnerColumn();
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
  if (this.sideNavModel.type == 'columnRow') {
    let selectedRow = this.sideNavModel.data.r;
    let rowColIndex = this.sideNavModel.data.colRowcolumnIndex;
    for (let index = 0; index < selectedRow.columns.length; index++) {
      const column = selectedRow.columns[index];

      if (column.rows.length) { 
        for (let rc = 0; rc < column.rows.length; rc++) {
          let innerRow = column.rows[rc];

          if (innerRow.columns.length) {
           
            let InnerColumn = innerRow.columns[rowColIndex];
            if (rowColIndex == InnerColumn.index) {
              InnerColumn.width=this.colwidth;
            }
          }
        }
      }
    }
  }




}

resizeInnerColumn() {
  if (this.sideNavModel.type === 'columnRow') {
    this.panelMainContainer = JSON.parse(this.sideNavModel.dmog.DMOGProps);

    let currentRowIndex = this.sideNavModel.data.r.rowIndex;
    let currentColIndex = this.sideNavModel.data.c.colIndex;
    let currentChildRowIndex = this.sideNavModel.data.colRowIndex;
    let currentChildColIndex = this.sideNavModel.data.colRowcolumnIndex;

    let filteredColumn = this.panelMainContainer.rows.filter(a => a.rowIndex === currentRowIndex)[0]?.columns;
    let filteredChildColumn = filteredColumn.filter(a => a.colIndex === currentColIndex)[0]?.rows;

    if (filteredChildColumn && filteredChildColumn.length > 0) {
      // We will now only focus on the selected column instead of all columns
      let selectedColumn = filteredChildColumn[currentChildRowIndex]?.columns[currentChildColIndex];

      // If the selected column exists
      if (selectedColumn) {
        let totalMWWidth = 0; // Reset total MW width
        let nonMWCount = 0;
        let previousWidth = 0;

        // First, update the selected column and calculate the MW width
        previousWidth = selectedColumn.width || 0;
        selectedColumn.mw = true; // Mark as resizable
        selectedColumn.width = Math.floor(this.colwidth); // Apply new width to the selected column

        // Loop through all columns in the child row (but focus on resizing logic for selected column only)
        filteredChildColumn[currentChildRowIndex].columns.forEach(col => {
          if (col.width) {
            totalMWWidth += col.width || 0; // Add MW column widths
          } else {
            nonMWCount++; // Count non-MW columns
          }
        });

        // Prevent resizing if the total width exceeds 100%
        if (totalMWWidth > 100) {
          this.toster.warning('Width exceeds 100%. Resizing is not allowed');
          selectedColumn.width = previousWidth; // Revert to previous width
          return;
        }

        let remainingWidth = 99.5 - totalMWWidth;

        // Ensure remaining width is properly distributed
        if (remainingWidth > 0) {
          let distributedWidth = nonMWCount > 0 ? remainingWidth / nonMWCount : remainingWidth;

          // Apply the distributed width to non-mw columns
          filteredChildColumn[currentChildRowIndex].columns.forEach(col => {
            if (!col.mw || col.width < 5) {
              col.width = Math.max(distributedWidth, 5);
            }
          });
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
    const tabIndex = event.index; // Get the index of the selected tab
    

    const inkBarElement = document.querySelector('.mat-ink-bar') as HTMLElement;
    if (inkBarElement && tabIndex == 0) {
      this.renderer.setStyle(inkBarElement, 'left', `0px`);
    }
    else{
      this.renderer.setStyle(inkBarElement, 'left', `152px`);
    }
  }

  searchControls(key: string) :void
  {
    this.Searchtrem =  key;
  }
  

}
