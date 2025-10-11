import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModelerApiService } from '../../../services1/data-modeler-api.service1';
import { ToastrService } from 'ngx-toastr';
import { PanelMainContainer, PanelMainRow, SideNavModel } from '../../../models1';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '@app/core';
import { ServiceProviderService } from '../../../services1/service-provider.service';

@Component({
    selector: 'app-contier-parent-row-settings',
    templateUrl: './contier-parent-row-settings.component.html',
    styleUrls: ['./contier-parent-row-settings.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class ContierParentRowSettingsComponent implements OnInit {

  mainRow:PanelMainRow;
  @Input() sideNavModel:SideNavModel;
  panelMainContainer:PanelMainContainer;
  column:number=0;
  Existingcolumn:number=0;
  transformy;
  rowdmogId;
 
  constructor(
    private apiService:ApiService,
    private dataProvider: ServiceProviderService,
    private toster:ToastrService
  ){
   
  }
  formatLabel(value: number): string {
    
    return `${value} column`;
  }
 
  ngOnInit(): void {
    if (this.sideNavModel) {
      console.log(this.sideNavModel);
      if(this.sideNavModel.type=='ParentRow'){
        this.mainRow=this.sideNavModel.data;
        this.Existingcolumn=this.mainRow.columns.length;
        this.column=this.mainRow.columns.length;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
        this.panelMainContainer=this.sideNavModel.props;
        }
      }
  }
  ngOnChanges() {
    if (this.sideNavModel) {
     
      if(this.sideNavModel.type=='ParentRow'){
        this.mainRow=this.sideNavModel.data;
        this.column=this.mainRow.columns.length;
        this.Existingcolumn=this.mainRow.columns.length;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
   
      }
      
    }
  }
  onDragOver(event){
    event.preventDefault()
  
   }

  changeWidth(event){
    this.column=event.value;
  }
  SaveWidthWidth_old(event){
 
     if(this.column>12)
      this.column=12;
    else if (this.column<0){
      this.column=this.Existingcolumn;
    }
   
    if(this.sideNavModel.dmog && this.sideNavModel.dmog.DMOGProps){
    
      this.panelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
      if(this.panelMainContainer){
        if (this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0] && this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0].columns.length>0 ) {
          let currentRoWithCol=this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0];
          let column= currentRoWithCol.columns.length;
          for (let index = column+1; index <=this.column; index++) {
            this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0].columns.push({"colIndex":index,"dmoguid":[],"rows":[]});
            
          }
          //this.resetColumnWidth(currentRoWithCol[0].columns);
        }else{
          let currentRoWithCol=this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0];
          let column= currentRoWithCol.columns.length;
          for (let index = this.Existingcolumn; index < this.column; index++) {
            this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0].columns.push({"colIndex":index,"dmoguid":[],"rows":[]});
            
          }
        }
        let  index=0;
        let perClmwidth=99.5/this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0].columns.length;
        for(let c of this.panelMainContainer.rows.filter(a=>a.rowIndex==this.mainRow.rowIndex)[0].columns ){
           c.width =perClmwidth;
           c.colIndex=index;
           c.mw=false;
           index++;
    
        }
      
      }
    
      var model={};
    
       model={"DMOGID":this.sideNavModel.dmog.DMOGID,
               "DMOGProps":JSON.stringify(this.panelMainContainer)}
        
      
    
      const url = `wfapibm/DataModel/SaveDmogProps`;
      this.apiService.postgateway('',url,model).subscribe(r=>{
        this.sideNavModel.dmog.DMOGProps=JSON.stringify(this.panelMainContainer)
         this.dataProvider.setUpdateDmogSettings(model)
        
        
      },error=>{
        console.log(error)
      });
     
    
  }

  }

  SaveWidthWidth(event) {
    if (this.column > 12) this.column = 12;
    else if (this.column < 0) 
      this.column = this.Existingcolumn;

    if (this.sideNavModel.dmog && this.sideNavModel.dmog.DMOGProps) {
      this.panelMainContainer = JSON.parse(this.sideNavModel.dmog.DMOGProps);

      if (this.panelMainContainer) {
        let currentRow = this.panelMainContainer.rows.find(a => a.rowIndex === this.mainRow.rowIndex);
        if (!currentRow) return;

         //let existingColumnCount = currentRow.columns.length;

        // if (this.column === existingColumnCount) return;
        // if (this.column > existingColumnCount) {
        //   for (let index = existingColumnCount; index < this.column; index++) {
        //     currentRow.columns.push({ "colIndex": index, "dmoguid": [], "rows": [] });
        //   }
        // } else {
        //   currentRow.columns = [];
        //   for (let index = 0; index < this.column; index++) {
        //     currentRow.columns.push({ "colIndex": index, "dmoguid": [], "rows": [] });
        //   }

        // }

        if (this.column < currentRow.columns.length) {
          if (!this.canReduceColumns(currentRow, this.column)) {
              console.warn('Cannot reduce - would remove columns with dmoguids');
              this.toster.warning("Cannot reduce columns: one or more columns contain DMO items.", "Warning");
              return;
          }
      }
      this.adjustColumns(currentRow, this.column);

        // let perClmwidth = 99.5 / currentRow.columns.length;
        // currentRow.columns.forEach((col, index) => {
        //   col.width = perClmwidth;
        //   col.colIndex = index;
        //   col.mw = false;
        // });

        let model = {
          "DMOGID": this.sideNavModel.dmog.DMOGID,
          "DMOGProps": JSON.stringify(this.panelMainContainer)
        };

        const url = `wfapibm/DataModel/SaveDmogProps`;
        this.apiService.postgateway('',url, model).subscribe(
          response => {
            this.sideNavModel.dmog.DMOGProps = JSON.stringify(this.panelMainContainer);
            this.dataProvider.setUpdateDmogSettings(model);
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  }

canReduceColumns(currentRow: any, newColumnCount: number) {
  if (!currentRow?.columns) return false;
  const columnsWithData = currentRow.columns.filter(col => 
      col.dmoguid && col.dmoguid.length > 0
  ).length;
  return newColumnCount >= columnsWithData;
}

adjustColumns(currentRow: any, newColumnCount: number) {
  const existingColumns = [...currentRow.columns];
  if (newColumnCount > existingColumns.length) {
      for (let i = existingColumns.length; i < newColumnCount; i++) {
          existingColumns.push({ 
              colIndex: i, 
              dmoguid: [], 
              rows: [] 
          });
      }
  } 
  else if (newColumnCount < existingColumns.length) {
      const emptyColumns = existingColumns
          .map((col, index) => ({col, index}))
          .filter(item => 
              !item.col.dmoguid || 
              item.col.dmoguid.length === 0
          );
      const columnsToRemove = existingColumns.length - newColumnCount;
      const removableColumns = emptyColumns.slice(0, columnsToRemove);
      removableColumns
          .sort((a, b) => b.index - a.index)
          .forEach(item => {
              existingColumns.splice(item.index, 1);
          });
      existingColumns.forEach((col, index) => {
          col.colIndex = index;
      });
  }
  
  // Update widths
  const perColumnWidth = 99.5 / existingColumns.length;
  existingColumns.forEach(col => {
      col.width = perColumnWidth;
      col.mw = false;
  });
  
  currentRow.columns = existingColumns;
}

 
  

  
  


}
