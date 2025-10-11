import { Component, OnInit } from '@angular/core';
import { ListviewService, MessageService } from '@app/core';
import { ColumnFilterService } from '@app/admin/core/services/column-filter.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '@env/environment';
import { CommonModule, formatDate, NgFor, NgIf } from '@angular/common';
import { UserDetail } from '@app/core/models/user-detail';
import { saveAs } from 'file-saver';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { BmService } from '@app/admin/core/services/bm.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchColumnPipe } from '../../pipe/search-column.pipe';

@Component({
    selector: 'app-grid-export',
    templateUrl: './grid-export.component.html',
    styleUrls: ['./grid-export.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf, CdkDropList, CdkDrag, SearchColumnPipe,CommonModule]
})
export class GridExportComponent implements OnInit {
  constructor(
    private msg: MessageService,
    private wfsrvc: WFService,
    private listviewService: ListviewService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private columnFilter: ColumnFilterService,
    private userDetail: UserDetail,private bmService: BmService) { }
  ColumnList: any = [];
  WFIds:any;
  BMIds:any;
  GridColumnList = [];
  objBaseGrid: any;
  TimeZone: string;
  ProcessName: string;
  ErrorMessage: any = '';
  ExportType: string;
  ExternalCall = { FromURL: false, displayValue: 'DisplayName', GUID: 'GUID', DownloadFileURL: '' }
  ExportUserData = {
    SortColumn: '-1', SortOrder: '-1', ProcessName: '', TimeZone: 0, ColumnList: '', GridFilters: [], TransactionIDs: '', ParentTransactionID: '', UserIds: '', TransactionID: '',
    ViewName: '',
    columns: [],
    configFor: '',
    PageNumber:'-1',
    PageSize:'-1'
  };
  FileSetting = { IsChangeFileName: false, FileName: '' };
  FileExtension = { EXCEL: '.xlsx', PDF: 'pdf' };
  AllAddButton = false;
  columnName: string;
  ExportFrom:any = 'WF';
  ngOnInit() {
    this.ProcessName = sessionStorage.getItem('AppName');
    if(this.ExportFrom === 'WF'){
      this.getdmodata();
    }else{
      this.getbmdmodata();
    }

    this.TimeZone = this.userDetail.TimeZone.toString();
  }
  

  /*------------------- Get DMO Data -------------------*/
  getdmodata() {
    this.ColumnList = this.wfsrvc.getWFColumns();
  }
  getbmdmodata() {
    this.ColumnList = this.bmService.getBMColumns();
  }

  /*------------------- Add Grid Columns -------------------*/
  AddGridColumn(column) {    
    if (column.IsAdd === '0') {
      column.IsAdd = '1';
      this.GridColumnList.push(column);
    }
  }

  /*------------------- Add All Grid Columns -------------------*/
  AddALLGridColumn() {
    for (const objColumn of this.ColumnList) {
      if (objColumn.IsAdd === '0') {
        objColumn.IsAdd = '1';
        this.GridColumnList.push(objColumn);
        this.AllAddButton = true;
      }
    }

  }

  /*------------------- Remove Grid Columns -------------------*/
  DeleteGridColumn(column: any) {        
    const txt = this.GridColumnList.indexOf(column);
    if (txt > -1) {
      this.GridColumnList.splice(txt, 1);
      this.ColumnList.forEach(element => {
        if(element.Name === column.Name){
            element.IsAdd = '0';            
        }        
      });
    }
  }

  /*------------------- Remove All Grid Columns -------------------*/
  DeleteAllGridColumn(column: any) {        
    this.GridColumnList = [];
    for (const objColumn of column) {
      if (objColumn.IsAdd === '1') {
        objColumn.IsAdd = '0';
        this.ColumnList.push(objColumn);      
      }
    }
  }

  /*------------------- Drag & Drop -------------------*/
  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }

  IsEmptyObject(obj: any) {
    return Object.keys(obj).length > 0 ? false : true;

  }

  CallBackMethod(modelRef: NgbModalRef, Caller: GridExportComponent) {
    sessionStorage.removeItem('gridPage');
  }


  Export() {
    if (this.ExportType === 'EXCEL') {
      this.exportToFile();
    }
    else {
      this.msg.showMessage('Warning', { body: 'Export type is missing' });
      return false;
    }
  }

  exportToFile() {
      if (this.setSelectedColumn()) {
        if (this.ExportType === 'EXCEL') {
          if(this.ExportFrom === 'WF'){
            this.wfsrvc.ExportToExcel(this.ProcessName,this.ExportUserData,this.WFIds)
            .subscribe(
              (resultBlob: Blob) => {                
                this.SaveExportFile(resultBlob);
              }
            );
          } else{
            this.bmService.ExportToExcel(this.ProcessName,this.ExportUserData,this.BMIds)
            .subscribe(
              (resultBlob: Blob) => {                
                this.SaveExportFile(resultBlob);
              }
            );
          }        
        }
      }
  }

  setSelectedColumn(): boolean {     
    const selectedColumns = [];
    this.GridColumnList.filter((prop) => {
      selectedColumns.push(prop.Name);
    });

    if (selectedColumns.length === 0) {
      this.msg.showMessage('Warning', { body: 'Please select a column' });
      return false;
    }
    this.ExportUserData.ColumnList = selectedColumns.join(',');
    return true;
  }

  SaveExportFile(FileData: any) {    
    const curDate = new Date();
    let fileName = '';
    if (this.FileSetting.IsChangeFileName) {
      fileName = this.FileSetting.FileName +
        '_' + (curDate.getMonth() + 1).toString()
        + '_' + curDate.getDate()
        + '_' + curDate.getFullYear()
        + '_' + curDate.getHours()
        + '_' + curDate.getMinutes()
        + '_' + curDate.getSeconds()
        + this.FileExtension[this.ExportType];
    }
    else {
      fileName = this.ProcessName +
        '_' + (curDate.getMonth() + 1).toString()
        + '_' + curDate.getDate()
        + '_' + curDate.getFullYear()
        + '_' + curDate.getHours()
        + '_' + curDate.getMinutes()
        + '_' + curDate.getSeconds()
        + this.FileExtension[this.ExportType];
    }
    saveAs(FileData, fileName);
    this.activeModal.close(true);
  }

}
