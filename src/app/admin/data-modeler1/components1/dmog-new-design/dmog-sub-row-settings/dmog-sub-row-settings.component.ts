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
    selector: 'app-dmog-sub-row-settings',
    templateUrl: './dmog-sub-row-settings.component.html',
    styleUrls: ['./dmog-sub-row-settings.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class DmogSubRowSettingsComponent implements OnInit {

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
      if(this.sideNavModel.type=='NestedcolumnRow'){
        var data=this.sideNavModel.data;
        let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex}
         this.getExistingColumn(item);
        }
      }
  }
  ngOnChanges() {
    if (this.sideNavModel) {
     
      if(this.sideNavModel.type=='NestedcolumnRow'){
        var data=this.sideNavModel.data;
        let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex}
       this.getExistingColumn(item);
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
   
      }
      
    }
  }
getExistingColumn(item){
  
  this.panelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
  if(this.panelMainContainer){
  let rowIndex: number=item.rowIndex
  let colIndex: number=item.colIndex;
   let currentRoWithCol=this.panelMainContainer.rows.filter(a=>a.rowIndex == rowIndex);
   if(currentRoWithCol.length>0){
    let column= currentRoWithCol[0].columns[colIndex];
    if (column) {
      let rColumn=column.rows[item.ColumnRowIndex]
      if(rColumn){
      this.column=rColumn.columns.length;
      this.Existingcolumn=rColumn.columns.length
      }
    }
  }
}
}
  onAddRowChildColumn(){



    var data=this.sideNavModel.data;
    let item={'rowIndex':data.rowIndex,"colIndex":data.colIndex,'ColumnRowIndex':data.colRowIndex}

    this.panelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
    if(this.panelMainContainer){
    let rowIndex: number=item.rowIndex
    let colIndex: number=item.colIndex;
     let currentRoWithCol=this.panelMainContainer.rows.filter(a=>a.rowIndex == rowIndex);
     if(currentRoWithCol.length>0){
      let excolumn= currentRoWithCol[0].columns[colIndex];
      if (excolumn) {
        let existingColumn=excolumn.rows[item.ColumnRowIndex]
        let exColLength=existingColumn.columns.length;
        for (let index = exColLength+1; index <=this.column; index++) {
          existingColumn.columns.push({"index":index,"width":100,"dmoguid":[]});
        
         }
       
        this.resetColumnWidthForRowInColumn(excolumn.rows)
     }
    }
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
         index++;
      }
    }
  
    }
  onDragOver(event){
    event.preventDefault()
  
   }

  changeWidth(event){
    this.column=event.value;
  }
  SaveWidthWidth1(event){

    
     if(this.column>12)
      this.column=12;
    else if (this.column<0){
      this.column=this.Existingcolumn;
    }

    this.onAddRowChildColumn()
    
      var model={};
       model={"DMOGID":this.sideNavModel.dmog.DMOGID,
               "DMOGProps":JSON.stringify(this.panelMainContainer)}
        
      
    
      const url = `wfapibm/DataModel/SaveDmogProps`;
      this.apiService.postgateway('',url,model,false).subscribe(r=>{
        this.sideNavModel.dmog.DMOGProps=JSON.stringify(this.panelMainContainer)
         this.dataProvider.setUpdateDmogSettings(model)
        
        
      },error=>{
        console.log(error)
      });
     
  }



SaveWidthWidth(event) {
    if (this.column > 12) {
        this.column = 12;
    } else if (this.column < 0) {
        this.column = this.Existingcolumn;
    }

    this.onAddRowChildColumn1();  

    let model = {
        "DMOGID": this.sideNavModel.dmog.DMOGID,
        "DMOGProps": JSON.stringify(this.panelMainContainer)
    };

    const url = `wfapibm/DataModel/SaveDmogProps`;
    this.apiService.postgateway('',url, model, false).subscribe(
        response => {
            this.sideNavModel.dmog.DMOGProps = JSON.stringify(this.panelMainContainer);
            this.dataProvider.setUpdateDmogSettings(model);
        },
        error => console.error("Error updating DMOG Props:", error) 
    );
}

onAddRowChildColumn11() {
  let data = this.sideNavModel.data;
  let item = {
      'rowIndex': data.rowIndex,
      "colIndex": data.colIndex,
      'ColumnRowIndex': data.colRowIndex
  };

  this.panelMainContainer = JSON.parse(this.sideNavModel.dmog.DMOGProps);
  

  let rowIndex = item.rowIndex;
  let colIndex = item.colIndex;

  let currentRow = this.panelMainContainer.rows.find(a => a.rowIndex === rowIndex);
  if (!currentRow) return; 

  let existingColumn = currentRow.columns[colIndex];
  if (!existingColumn) return; 

  let columnRow = existingColumn.rows[item.ColumnRowIndex];
  if (!columnRow) return;

  let existingColumns = columnRow.columns.length;
  let hasData = columnRow.columns.some(col => col.dmoguid.length > 0);
  if (hasData) {
    this.toster.warning("Cannot change inner column: Data exists in one or more columns.");
    this.Existingcolumn = this.Existingcolumn;
    return;
  }

  if (this.column < existingColumns) {
      for (let index = existingColumns - 1; index >= this.column; index--) {
          columnRow.columns.splice(index, 1);
      }
  } else {
     
      for (let index = existingColumns; index < this.column; index++) {
          columnRow.columns.push({ "index": index, "width": 100, "dmoguid": [] });
      }
  }

  this.resetColumnWidthForRowInColumn(existingColumn.rows); 
}
onAddRowChildColumn1() {
  let data = this.sideNavModel.data;
  let item = {
      'rowIndex': data.rowIndex,
      "colIndex": data.colIndex,
      'ColumnRowIndex': data.colRowIndex
  };

  this.panelMainContainer = JSON.parse(this.sideNavModel.dmog.DMOGProps);
  
  let rowIndex = item.rowIndex;
  let colIndex = item.colIndex;

  let currentRow = this.panelMainContainer.rows.find(a => a.rowIndex === rowIndex);
  if (!currentRow) return; 

  let existingColumn = currentRow.columns[colIndex];
  if (!existingColumn) return; 

  let columnRow = existingColumn.rows[item.ColumnRowIndex];
  if (!columnRow) return;

  if (this.column < columnRow.columns.length) {
      if (!this.canReduceSubColumns(columnRow.columns, this.column)) {
          this.toster.warning("Cannot reduce columns - would remove columns containing data");
          return;
      }
  }
  
  this.adjustSubColumns(columnRow, this.column);

  this.resetColumnWidthForRowInColumn(existingColumn.rows);
  
}

canReduceSubColumns(columns: any[], newCount: number) {
  if (!columns) return false;
  const columnsWithData = columns.filter(col => 
      col.dmoguid && col.dmoguid.length > 0
  ).length;
  return newCount >= columnsWithData;
}

adjustSubColumns(columnRow: any, newCount: number) {
  const existingColumns = [...columnRow.columns];
  
  if (newCount > existingColumns.length) {
      for (let i = existingColumns.length; i < newCount; i++) {
          existingColumns.push({ 
              index: i, 
              width: 100, 
              dmoguid: [] 
          });
      }
  } 
  else if (newCount < existingColumns.length) {
      const emptyColumns = existingColumns
          .map((col, index) => ({col, index}))
          .filter(item => !item.col.dmoguid || item.col.dmoguid.length === 0);
      
      const columnsToRemove = existingColumns.length - newCount;
      const removableColumns = emptyColumns.slice(0, columnsToRemove);
      
      removableColumns
          .sort((a, b) => b.index - a.index)
          .forEach(item => existingColumns.splice(item.index, 1));
      
      existingColumns.forEach((col, index) => col.index = index);
  }
  
  columnRow.columns = existingColumns;
}





}
