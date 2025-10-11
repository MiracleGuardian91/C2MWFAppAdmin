import { Component, ElementRef, Input, NgModule, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnFilterService } from '@app/admin/core/services/column-filter.service';
import { MessageService } from '@app/core';
import { UserDetail } from '@app/core/models/user-detail';
import { environment } from '@env/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { WFService } from '../../../core/services/wfservice.service';
import { IHeaderMap } from '../../wfd/models/wfGridInterface';
import { WorkflowApiService } from '../../wfd/services/workflow-api.service';
import { SaveStagestateConditionComponent } from '../pages/save-stagestate-condition/save-stagestate-condition.component';
import { WfConditionDetailComponent } from './wf-condition-detail/wf-condition-detail.component';
import {BaseGrid, GridDataOptions} from './baseGrid'
import { HighlightSpanKind } from 'typescript';
import { Stage } from '../../wfd/models/wf.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor, KeyValuePipe } from '@angular/common';
import { GenericGridComponent } from '../../../Shared/generic-grid/generic-grid.component';
import { UtilService } from '@app/shared/services/util.service';
@Component({
    selector: 'app-wfconditions',
    templateUrl: './wfconditions.component.html',
    styleUrls: ['./wfconditions.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, ReactiveFormsModule, FormsModule, GenericGridComponent, KeyValuePipe]
})

export class WfconditionsComponent extends BaseGrid implements OnInit {
  
  setConfigData(gridConfig: any): void {
    throw new Error('Method not implemented.');
  }
  getGridData(opts?: GridDataOptions): void {
    this.LoadData(this.WFId);
  }
  BindDMODropDown(dmoGuid: any): void {
    throw new Error('Method not implemented.');
  }
  getGridConfigData(gridviewName?: any): void {
    throw new Error('Method not implemented.');
  }
  getDMOsMapping(): void {
    throw new Error('Method not implemented.');
  }
  saveGridConfig(): void {
    throw new Error('Method not implemented.');
  }
  openLinkFromUrl(): void {
    throw new Error('Method not implemented.');
  }
  public showSelectedFilters = true;
  conditionStatus='1';
  dataSource: any;
  itemsCount: number;
  filters: any = {}; 
  backsImageUrl = UtilService.getUrlForImage('/assets/styles/images/back-icon-black.png');
  _bodyData = {
    ProcessName: this.ProcessName,
    PageSize: this.PageSize,
    PageNumber: +this.PageNumber,
    SortColumn: this.SortColumn,
    SortOrder: this.SortOrder,
    TimeZone: this.TimeZone,
    ColumnList: this.ColumnList,
    GridFilters: this.LstGridFilter
  };
  pageNum = -1;
  filterValue1: string = "";
  filterValue2: string = "";
  ConditionOpt1: string = "";
  ConditionOpt2: string = "";
  logicalOpt: string = "OR";
  HeaderMap: IHeaderMap = {
    config: {
      header: {
        columns: [
          {
            objectKey: 'Condition_Name',
            displayName: 'Condition Name',
            width: '15%'
          },
          {
            objectKey: 'Version',
            displayName: 'Version',
            width: '15%'
          },{
            objectKey: 'Status',
            displayName: 'Status',
            width: '15%'
          },
          {
            objectKey: 'Description',
            displayName: 'Description',
            width: '15%'
          },{
            objectKey: 'Date_Created',
            displayName: 'Date Added',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail.TimeZone.toString(),
            width: '20%'
          },{
            objectKey: 'Date_Modifed',
            displayName: 'Date Modified',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail.TimeZone.toString(),
            width: '20%'
          }
        ],
        action: {
          Edit: true,
          Delete: true,
          Checkbox: true
        },
        columnFilter: []
      },
      paging: true
    }
  };

  processName: string;
  WFId: any;
  @Input() wfosId: string = null;
  @Input() wfoid: string = null;
  @Input() isComingStageandState: boolean = false;
  ConditionID: any;
  WFCondForm: UntypedFormGroup;
  public activeModal: NgbActiveModal;
  constructor(
    private modalService: NgbModal,
    private readonly wfApi: WorkflowApiService,
    private wfsrvc: WFService,  
    private userDetail: UserDetail,private router: Router,
    private columnFilter: ColumnFilterService,
    private route: ActivatedRoute,private toastr: ToastrService,
    private msg: MessageService,private fb: UntypedFormBuilder,
    public elRef: ElementRef,
   ) {
      super(elRef);
    }

  ngOnInit() { 
    this.processName = sessionStorage.getItem('AppName');
    if (this.route.snapshot.queryParams.id && this.wfosId && this.wfoid) {
      this.WFId = this.route.snapshot.queryParams.id;
      this.LoadData(this.WFId,this.wfosId,this.wfoid);
    }else{
      if(this.route.snapshot.queryParams.id){
        this.WFId = this.route.snapshot.queryParams.id;
       this.LoadData(this.WFId,this.wfosId,this.wfoid)
      }    
    }
    this.WFCondForm = this.fb.group({  
      ChangeStatus: ['-1']
    });
  }

  public showSelectedFilter(dmoGuid: string) {
    return !dmoGuid.endsWith('_KEY') && !dmoGuid.endsWith('_VAL');
}

 

  pageChange(event) {
    this._bodyData.PageNumber = event.currentPage;
    this._bodyData.PageSize = event.pageSize; 
    this.GetWFCondtionGrid(this.WFId,this._bodyData);   
  }

  onGlobalFilter(form, columnName, filterType, value, dataType = undefined)
  {
    if(form.globalSearch.value!=""){
        this.submitted = true;
        let filter: any = {};
        this.filters={};
        this._bodyData.PageNumber = 0;
        if (filterType === 'Global_Search') {
     
            if (form.globalSearch.value === '') {
                delete this.filters[filterType + '~$~' + columnName];
            } else {
                filter = {
                  GridConditions: [{
                    Condition: 'CONTAINS',
                    ConditionValue: form.globalSearch.value
                    }],
                    DataField: columnName,
                    LogicalOperator: 'Or',
                    FilterType: filterType
                };
            }
          //  columnName = columnName;
        } 
        this.generateFilter();
        this._bodyData.GridFilters.push(filter);
        this.GetWFCondtionGrid(this.WFId,this._bodyData);
        this.filters=this._bodyData.GridFilters;
       }
    }



  actionClick(event) {   
    switch (event.action) {
      case 'Filter_Header':
        this.bindColumnFilterDdl(event);
        break;
      case 'Edit':
        this.openNewFormViewPopup(event.rowIndex);
        break;
        case 'Filter_Click':
          if (!this.validate(event)) {
            break;
          }
          this._bodyData.PageNumber = 1;
          let filter: any = {};
          filter = {
            GridConditions: [
            ],
            DataField: event.colData.objectKey,          
            LogicalOperator: event.filterData.logicalOpt.Value === 'Select...' ? '' : event.filterData.logicalOpt.Value,
            FilterType: 'Column_Filter'
          };
          if (event.filterData.filterValue1 && event.filterData.filterValue1 !== '') {         
              filter.GridConditions.push({
                Condition: event.filterData.ConditionOpt1.Value,
                ConditionValue: event.filterData.filterValue1
              });          
          }
          if (event.filterData.filterValue2 && event.filterData.filterValue2 !== '') {  
              filter.GridConditions.push({
                Condition: event.filterData.ConditionOpt2.Value,
                ConditionValue: event.filterData.filterValue2
              });
            }
          
         
         this.generateFilter();
         this._bodyData.GridFilters.push(filter)
          sessionStorage.setItem('grid_filter', JSON.stringify(this._bodyData));
          event.ColumnFilterDropdown.close();
          if (filter && Object.keys(filter).length !== 0) {
            this.filters['Column_Filter' + event.colData.objectKey] = filter;
          }
          this.GetWFCondtionGrid(this.WFId,this._bodyData);
          break;
        case 'asc':
          this._bodyData.SortColumn = event.colData.objectKey;
          this._bodyData.SortOrder = 'asc';
          this.sortColumnName = event.colData.objectKey;
          sessionStorage.setItem('grid_filter', JSON.stringify(this._bodyData));
          //  this.LoadData(this.WFId); 
          this.GetWFCondtionGrid(this.WFId,this._bodyData);
          break;
        case 'desc':
          this._bodyData.SortColumn = event.colData.objectKey;
          this._bodyData.SortOrder = 'desc';
          this.sortColumnName = event.colData.objectKey;
          sessionStorage.setItem('grid_filter', JSON.stringify(this._bodyData));
         //    this.LoadData(this.WFId); 
          this.GetWFCondtionGrid(this.WFId,this._bodyData);
          break;
        case 'Remove Sort':
          this._bodyData.SortColumn = '-1';
          this._bodyData.SortOrder = 'desc';
          sessionStorage.setItem('grid_filter', JSON.stringify(this._bodyData));
          this.LoadData(this.WFId); 
          break;
      case 'Delete':
        this.showDeleteMessage(event.rowIndex);
        break;
      case 'FilterClear_Click':
        delete this.filters['Column_Filter~$~' + event.colData.objectKey];
        sessionStorage.removeItem('grid_filter');
        this.generateFilter();
        event.ColumnFilterDropdown.close();
        break;
      case 'SpecialCharClick':     
      window.open(`/admin/wf/wfd?processName =${this.processName}&VerNo=${this.dataSource[event.rowIndex].Ver}`, '_blank');
        break;
        case 'Link':
         this.router.navigate([`/admin/wf/wfcondition`,'lmk']);
          break;
    }
  }
  LoadData(id:string,state?:string,stage?:string) { 
    if(this.isComingStageandState){   
      this.wfsrvc.GetWFConditions(id,this.wfosId,this.wfoid).subscribe(x => {      
        this.dataSource = x.Data;
      },
        err => {
          console.log(err);
        });
    }else{
      this.wfsrvc.GetWFConditions(id).subscribe(x => {      
        this.dataSource = x.Data;
      },
        err => {
          console.log(err);
        });
    }  
  }

  GetWFCondtionGrid(id?:any,body?:any)
  {
    this.wfsrvc.GetWFCondtionGrid(id,body).subscribe(x => {      
      this.dataSource = x.Data;
    },
      err => {
        console.log(err);
      });
  }
  routeBack(){
    window.history.back();
  }

  bindColumnFilterDdl(item) {
    let type = '';
    if (item.colData.dataType === 'Date') {
      type = 'DateEditBox';
    }
    const FilterData = this.columnFilter.GetFilterByDataType(type); // Calling Function to get ColumnFilter Condition data
    if (FilterData.length === 0) { // Check if Array is empty then call API for options data
    } else {
      const key = Object.keys(item.colData)[0];
      this.HeaderMap.config.header.columnFilter['colData_' + item.colIndex] = FilterData;
      this.ConditionOpt1 = item.ConditionOpt1;
      this.ConditionOpt2 = item.ConditionOpt2;
    }
  }

  OnRowClick(event:any){ 
    return   ;
  }

  async openNewFormViewPopup(index:any) {
    const bmList = await this.wfApi.getBMList(this.WFId).toPromise();
    const condId = typeof index === 'number' ? this.dataSource[index].ConditionID : null;
    const data = condId ? await this.wfApi.getWFConditionDetail(condId).toPromise() : null;
    const modal = this.msg.showComponent(WfConditionDetailComponent, {
      wfId: this.WFId,
      bmList,
      data,
      version: sessionStorage.getItem('WFVersion'),
    });
    const res = await modal.result;
    if (res) {
      this.wfApi.upsertCondition(res).subscribe(_ => this.LoadData(this.WFId));
    }
  }
  showDeleteMessage(Index:any) {    
    if (Index > -1) {
      this.ConditionID = this.dataSource[Index].ConditionID;
      this.msg.showMessage('Warning', {
        header: 'Delete Selected Item',
        body: 'Do you want to delete selected item?',
        btnText: 'Delete',
        checkboxText: 'Yes, delete selected item',
        isDelete: true,
        isNewDesign:true,
        callback: this.deleteSelectedConfirmation,
        caller: this,
      })
    } else {
      this.msg.showMessage('Warning', { body: 'At least one record must be selected in order to delete' });     
    }
  }
  deleteSelectedConfirmation(modelRef: NgbModalRef, Caller: WfconditionsComponent) {    
      Caller.wfsrvc.DeleteWFCondition(Caller.ConditionID).subscribe(
        result => {          
          if (result === 'Record(s) Deleted successfully'||result.message === 'Record(s) Deleted successfully' ) {
            Caller.LoadData(Caller.WFId);  
            Caller.toastr.success(result.message);
            modelRef.close();
          }
        }, error => {          
          if(!!error.error  && error.error === 'Record(s) Cannot Be Deleted'){
            Caller.toastr.warning('Record(s) Cannot Be Deleted');
          }} );
  }

  ChangeStatus(event:any){              
    const ConditionID = this.dataSource.filter(x => x.selected === true).map(x => x.ConditionID).join(',');
    if(event.target.value !== "-1" && !!ConditionID){
      this.wfsrvc.ChangeWfConditionStatus(ConditionID,event.target.value).subscribe(
        result => {
          if (result) {
            this.LoadData(this.WFId);
            this.WFCondForm.get('ChangeStatus').patchValue('-1');
            this.toastr.success('Status Changed successfully');
          }
        });
    } else{  
      if(event.target.value !== "-1" && (ConditionID === undefined || ConditionID === '')){
        this.WFCondForm.get('ChangeStatus').patchValue('-1');
        this.toastr.warning('Please select at least one record.');
      }         
    } 
  }

  validate(event): boolean {

    if (event.filterData.ConditionOpt1 && (event.filterData.ConditionOpt1.Value === '' ||
      event.filterData.ConditionOpt1.Value === 'Select...')) {
      return false;
    } else if (event.filterData.filterValue1 && event.filterData.filterValue1.Value === '') {
      return false;
    } else {
      return true;
    }
  }
  removeFilter(txtGlobal) {
    this.filters = [];
    txtGlobal.value = '';
    this.pageNum = 1;
    this.generateFilter();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  private generateFilter() {
    sessionStorage.removeItem('grid_filter');
    this._bodyData.GridFilters = [];
    this._bodyData.PageNumber = 1;
    Object.keys(this.filters).forEach(key => {
      this._bodyData.GridFilters.push(this.filters[key]);
    });
    sessionStorage.setItem('grid_filter', JSON.stringify(this._bodyData));
   // this.LoadData(this.WFId);
  }


  onPaste(event: ClipboardEvent, inputElement: HTMLInputElement): void {
    event.preventDefault(); // Prevent default paste behavior
    const pastedText = (event.clipboardData?.getData('text') || '').replace(/\s+/g, '');
    const start = inputElement.selectionStart || 0;
    const end = inputElement.selectionEnd || 0;
    const currentValue = inputElement.value;
    
    inputElement.value = currentValue.slice(0, start) + pastedText + currentValue.slice(end);
    
    // Move cursor to the end of the inserted text
    const cursorPosition = start + pastedText.length;
    setTimeout(() => inputElement.setSelectionRange(cursorPosition, cursorPosition), 0);
  }
  
}
