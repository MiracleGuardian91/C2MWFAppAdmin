import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from '@env/environment';
import { UserDetail } from '@app/core/models/user-detail';
import { IHeaderMap } from '@app/admin/wf/wfd/models/wfGridInterface';
import { ColumnFilterService } from '@app/admin/core/services/column-filter.service';
import { BmService } from '@app/admin/core/services/bm.service';
import { ToastrService } from 'ngx-toastr';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { BmEntryComponent } from '../bm-entry/bm-entry.component';
import { GridExportComponent } from '@app/admin/Shared/grid-export/grid-export.component';
import { BatchUpdateComponent } from '../batch-update/batch-update.component';
import { BulkTriggerComponent } from '../bulk-trigger/bulk-trigger.component';
import { UniqueConstraintComponent } from '../unique-constraint/unique-constraint.component';
import { BmWfAssociationComponent } from '../bm-wf-association/bm-wf-association.component';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { CompanyAssociationComponent } from '@app/admin/Shared/company-association/company-association.component';
import { BMAssociatedCompaniesPayload, ICompanyAssociatedBMObject, MessageService } from '@app/core';
import { DataModelerApiService } from '@app/admin/data-modeler/services/data-modeler-api.service';
import { TopCornerDetailComponent } from '../top-corner-detail/top-corner-detail.component';
import { GridViewMasterConfigurationComponent } from '@app/shared/components/grid-view-master-configuration/grid-view-master-configuration.component';
import { MatDialog } from '@angular/material/dialog';
import { GenerateXmlComponent } from '@app/admin/wf/wfd/components/generatexml/generatexml.component';
import { catchError, lastValueFrom, of, switchMap, tap } from 'rxjs';
import { LiveVersionComponent } from '@app/admin/LiveVersion/components/live-version/live-version.component';
import { NgIf } from '@angular/common';
import { GenericGridComponent } from '../../../Shared/generic-grid/generic-grid.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardWallConfigurationSelectionComponent } from '../Cardwalls/card-wall-configuration-selection/card-wall-configuration-selection.component';

@Component({
    selector: 'app-bm-grid',
    templateUrl: './bm-grid.component.html',
    styleUrls: ['./bm-grid.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, GenericGridComponent, FormsModule]
})
export class BmGridComponent implements OnInit {
  
  @ViewChild('jsonFileInput', { static: false }) jsonFileInput!: ElementRef;

  file: File = null;
  IsValidFile = false;
  fileName = '';
  errorMsg = '';
  isNewDM = '';
  processName: string;
  DisplayName: string;
  dataSource = [];
  Version:any;
  itemsCount: number;
  filters: any = {};
  searchText: string = '';
  BMForm: UntypedFormGroup;
    // Popup menu properties
  showActionsPopup = false;
  popupPosition = { x: 0, y: 0 };
  private boundOutsideClick = this.closeActionsPopupOnOutsideClick.bind(this);
  private boundKeydown = this.handleKeyDown.bind(this);
  BMID: any;
  bodyData = {
    PageSize: 20,
    PageNumber: 1,
    SortColumn: 'CRTDON',
    SortOrder: 'desc',
    TimeZone: '0',
    GridFilters: []
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
            objectKey: 'nam',
            displayName: 'Business Model Name',
            width: '17%',
            dataType: 'Link',
          },
          {
            objectKey: 'DISPNAME',
            displayName: 'Friendly Name',
            width: '17%',
          }, {
            objectKey: 'Ver',
            displayName: 'Version',
            width: '8%',      
          },
          {
            objectKey: 'Status',
            displayName: 'Mode',
            width: '10%'
          },
          // {
          //   objectKey: 'bmog',
          //   displayName: 'BMOG',
          //   width: '8%'
          // },
          // {
          //   objectKey: 'workflow',
          //   displayName: 'Workflow',
          //   dataType: 'LinkWithSpecialChar',
          //   SpecialChar: 'Click here',
          //   width: '8%'
          // },
          {
            objectKey: 'crtdon',
            displayName: 'Date Created',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail.TimeZone?.toString() || '0',
            width: '16%'
          },
          {
            objectKey: 'modfon',
            displayName: 'Date Modified',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail.TimeZone?.toString() || '0',
            width: '16%'
          },
          // {
          //   objectKey: 'MOD',
          //   displayName: 'Mode',
          //   width: '8%'
          // },
          // {
          //   objectKey: 'DM',
          //   displayName: 'Data Modeler',
          //   dataType: 'LinkWithSpecialChar',
          //   SpecialChar: 'Click here',
          //   width: '8%'
          // }
        ],
        action: {
          moreInfo:true,
          Checkbox: true,
          showGenerateJsonBtn:true,
          WFBM:true
        },
        columnFilter: false,
      },
      paging: true,
    }
  };
 
  alertMsgTxt: string[] = [];
 isLoading = true;
  selectedRowIndex: number;
  constructor(
    private dialog: MatDialog,
    readonly userDetail: UserDetail,
    readonly columnFilter: ColumnFilterService,
    readonly toastr: ToastrService,
    readonly bmService: BmService,
    readonly msg: MessageService,
    readonly modalService: NgbModal,
    readonly fb: UntypedFormBuilder,
    readonly formView: FormViewApiService,
    readonly dmApi: DataModelerApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.processName = params.get('pname');

      if (this.processName && this.processName.trim() !== '') {
        this.processName = params.get('pname');
        sessionStorage.setItem('AppName', this.processName)
      }
    });

    this.activatedRoute.queryParams.subscribe(qParams =>{
      this.initialize(qParams);
       
    })
   
  }

  initialize(queryParams){
    const lowerKeyCase = [];
    Object.keys(queryParams).forEach(param =>{
      const lowerCaseParam = param.toLocaleLowerCase();
      lowerKeyCase.push({ key: lowerCaseParam, value: queryParams[param] });
    })

    const pName = lowerKeyCase.find(lk => lk.key === 'pname')?.value;
    const dname = lowerKeyCase.find(lk => lk.key === 'dname')?.value;
    if(pName && dname){
      this.processName = pName
      this.DisplayName = dname;
    }else{
      this.processName = sessionStorage.getItem('AppName');
      this.DisplayName = sessionStorage.getItem('DisplayName');
    }

    this.BMForm = this.fb.group({
      ChangeStatus: ['-1'],
      ChangeMode: ['-1']
    });
    this.LoadData();
  }
  pageChange(event) {
    this.bodyData.PageNumber = event.currentPage;
    this.bodyData.PageSize = event.pageSize;
    this.LoadData();
  }
  actionClick(event) {
    switch (event.action) {
      case 'Publish':
      this.generateXML(event.rowIndex);
        break;
      case 'Excel':
      this.ExportBM(event.rowIndex);
        break;
      case 'Filter_Header':
        this.bindColumnFilterDdl(event);
        break;
      case 'Edit':
        this.CreateNewRecord(event.rowIndex);
        break;
      case 'Link':

        if (event.ColumnFilterDropdown === 'nam') {
          if (this.dataSource[event.rowIndex].isNewDM == "1") {
            if (window.location.href.includes('wfadmin'))
              this.router.navigate(['wfadmin/admin/bm/data-modeler1'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            else {
              this.router.navigate(['admin/bm/data-modeler1'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            }
          } else {
            if (window.location.href.includes('wfadmin'))
              this.router.navigate(['wfadmin/admin/bm/data-modeler'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            else {
              this.router.navigate(['admin/bm/data-modeler'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            }
          }
        }
        break;
      case 'Filter_Click':
        if (!this.validate(event)) {
          break;
        }
        this.bodyData.PageNumber = 1;
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

        if (filter && Object.keys(filter).length !== 0) {
          this.filters['Column_Filter~$~' + event.colData.objectKey] = filter;
        }
        this.generateFilter();
        event.ColumnFilterDropdown.close();
        break;
      case 'Remove Sort':
        this.bodyData.SortColumn = '-1';
        this.bodyData.SortOrder = 'desc';
        sessionStorage.setItem('grid_filter', JSON.stringify(this.bodyData));
        this.LoadData();
        break;
      case 'SpecialCharClick':
        if (event.ColumnFilterDropdown === 'workflow') {
          this.WorkFlowAssociation(event.rowIndex);
        } else if (this.dataSource[event.rowIndex].isNewDM == "1"){
          if(window.location.href.includes('wfadmin'))
              this.router.navigate(['wfadmin/admin/bm/data-modeler1'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
           else{
              this.router.navigate(['admin/bm/data-modeler1'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
           }
        }else{
         if(window.location.href.includes('wfadmin'))
              this.router.navigate(['wfadmin/admin/bm/data-modeler'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
           else{
              this.router.navigate(['admin/bm/data-modeler'], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
           }
        }
        break;
      case 'FilterClear_Click':
        delete this.filters['Column_Filter~$~' + event.colData.objectKey];
        sessionStorage.removeItem('grid_filter');
        this.generateFilter();
        event.ColumnFilterDropdown.close();
        break;
    }
  }
  LoadData() {
    this.isLoading = true;
    this.bmService.getWFGrid(this.processName, this.bodyData).subscribe({
      next: (x) => {

        this.dataSource = x?.Data || [];
        this.itemsCount = x?.RecordsCount || 0;
          this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
          this.isLoading = false;
      }
    });
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
  private generateFilter() {
    sessionStorage.removeItem('grid_filter');
    this.bodyData.GridFilters = [];
    this.bodyData.PageNumber = 1;
    Object.keys(this.filters).forEach(key => {
      this.bodyData.GridFilters.push(this.filters[key]);
    });
    sessionStorage.setItem('grid_filter', JSON.stringify(this.bodyData));
    this.LoadData();
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

  OnRowClick(event: any) {
  }
  globalSearch(value) {
    this.pageNum = 1;
    let filter: any = {};
    if (value === '') {
      delete this.filters['Global_Search~$~dmoName'];
    } else {
      filter = {
        GridConditions: [{
          Condition: 'CONTAINS',
          ConditionValue: value
        }
        ],
        DataField: 'dmoName',
        LogicalOperator: 'Or',
        FilterType: 'Global_Search'
      };
    }
    if (filter && Object.keys(filter).length !== 0) {
      this.filters['Global_Search~$~dmoName'] = filter;
    }
    this.generateFilter();
  }
  generateXML(rowIndex: number) {
    const selectedItems = this.dataSource[rowIndex];
      this.Version = this.dataSource[rowIndex].Ver;
  
      // Case: new DM -> need two calls, second only if first is clean
      if (this.dataSource[0]?.isNewDM === '1') {
        this.bmService.generateXML1(this.processName, this.Version).pipe(
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
  
            // if any alerts, bail out to the catchError below
            if (this.alertMsgTxt.length > 0) {
              throw new Error('Validation errors');
            }
          }),
          // only if generateXML1 passed with zero alerts
          switchMap(() => this.bmService.generateXML(this.processName, this.Version)),
          catchError(err => {
            // on ANY error—API failure or thrown above—we show modal
            this.showErrorModal();
            // swallow error so the outer subscribe complete handler doesn't run
            return of(false);
          })
        ).subscribe(success => {
          if (success) {
            this.toastr.success('JSON generated successfully');
            this.LoadData();
          }
        });
  
      // Case: old DM -> single call
      } else {
        this.bmService.generateXML(this.processName, this.Version).pipe(
          catchError(err => {
            this.alertMsgTxt = ['Error generating JSON'];
            this.showErrorModal();
            return of(false);
          })
        ).subscribe(success => {
          if (success) {
            this.toastr.success('JSON generated successfully');
            this.LoadData();
          }
        });
      }
  }
  
  private showErrorModal(): void {
    const dialogRef = this.dialog.open(GenerateXmlComponent, {
      width: '656px',
      disableClose: true,
      panelClass: 'custom-dialog-container',
      data: {
        type: 'bm',
        processName: this.processName,
        verNo: this.Version,
        alertMsgTxt: this.alertMsgTxt
      }
    });
  
    dialogRef.componentInstance.closeModal.subscribe(() => dialogRef.close());
  }
  
  openBulkUpload(bulkUpload) {
    this.file = null;
    this.fileName = '';
    this.modalService.open(bulkUpload, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static', keyboard: false, centered: true  });
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
    if (this.file) {
      if (this.file.type === 'application/vnd.ms-excel' ||
        this.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.IsValidFile = false;
        this.fileName = this.file.name;
      } else {
        this.fileName = '';
        this.errorMsg = 'File not valid';
        this.IsValidFile = true;
      }
    }

  }
  upload() {
    if (this.file === null) {
      this.IsValidFile = true;
      this.errorMsg = 'Please select file';
      return;
    }
    const fileName = this.file.name.toLowerCase();
    const isExcel = fileName.endsWith('.xls') || fileName.endsWith('.xlsx');
    const isJson = fileName.endsWith('.json');
    if (isExcel) {
      // Excel upload logic
      this.IsValidFile = false;
      this.errorMsg = '';
      const formData = new FormData();
      formData.append('processName', this.processName);
      formData.append('uploadFile', this.file);
      this.bmService.UploadFile(formData, this.processName).subscribe(Result => {
        if (Result.status === 'Success') {
          this.file = null;
          this.fileName = '';
          this.modalService.dismissAll();
          this.msg.showMessage('Success', {
            header: 'File uploaded successfully',
            body: Result.message,
          });
          this.LoadData();
        } else {
          this.errorMsg = Result.message || 'Upload failed.';
          this.IsValidFile = true;
        }
      }, error => { 
        this.errorMsg = 'Upload failed.';
        this.IsValidFile = true;
      });
    } else if (isJson) {
      // JSON upload logic
      this.IsValidFile = false;
      this.errorMsg = '';
      var BMID = this.dataSource.filter(x => x.selected === true).map(x => x.BMID);
      if (BMID.length >= 2) {
        this.errorMsg = 'Please select only one Datasource';
        this.IsValidFile = true;
        return;
      }
      const BMIDValue = BMID.length === 1 ? BMID[0] : '';
      this.processName = sessionStorage.getItem('AppName');
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          const result = e?.target?.result as string;
          const parsedData = JSON.parse(result);
          this.bmService.ImportJsonBM(this.processName, BMIDValue, parsedData).subscribe({
            next: (response) => {
              this.toastr.success('BM generated successfully');
              this.file = null;
              this.fileName = '';
              this.modalService.dismissAll();
              this.LoadData();
            },
            error: (err) => {
              this.errorMsg = 'Error generating BM';
              this.IsValidFile = true;
            }
          });
        } catch (error) {
          this.errorMsg = 'Error parsing JSON file.';
          this.IsValidFile = true;
        }
      };
      reader.readAsText(this.file);
    } else {
      this.IsValidFile = true;
      this.errorMsg = 'Only Excel or JSON files can be uploaded here.';
      return;
    }
  }

  downloadTemplate() {
    this.bmService.DownloadWFTemp(this.processName).subscribe(result => {
      this.SaveUploadLog(result);
    })
  }
  SaveUploadLog(FileData: any) {
    const curDate = new Date();
    const fileName = this.processName.replace(' ', '_') + '_Template' +
      "_" + (curDate.getMonth() + 1).toString()
      + "_" + curDate.getDate()
      + "_" + curDate.getFullYear()
      + "_" + curDate.getHours()
      + "_" + curDate.getMinutes()
      + "_" + curDate.getSeconds();
    saveAs(FileData, fileName);
  }

  async onTopCornerDetail() {
    const selected = this.dataSource[this.selectedRowIndex];
    const bmId = selected.BMID;
    const modal = this.msg.showComponent(TopCornerDetailComponent, {bmId},{size: 'lg',centered: true});
    const res = await modal.result;
    if (res) {
      this.toastr.success('Data saved successfully');
      this.LoadData();
    }
  }

  async onCompanyAssociation() {
      const obj = this.dataSource[this.selectedRowIndex];
      const modal = this.msg.showComponent(CompanyAssociationComponent, {
        displayWith: (item: ICompanyAssociatedBMObject) => `${item.BMODISPNAME} > ${item.DMOGDISPNAME} > ${item.DMODISPNAME}`,
        uniqueWith: (item: ICompanyAssociatedBMObject) => `${item.BMOID}${item.DMOGID}${item.DMOID}`,
        getAssociationsWith: (groupId: string) => this.formView.getBMObjectsForCompanyAssociation(groupId, obj.TypeID, obj.BMID), 
        checkBy: 'ISDMOSELECTED'
      },{size: 'lg',centered: true});
      const res = await modal.result;
      if (res) {
        const success = await this.updateCompanyAssociatedRecords(obj, res) === 1;
        if (success) {
          this.toastr.success('Success');
          this.LoadData();
        }
      }
  }

  private updateCompanyAssociatedRecords(bm: any, res: any) {
    const bmoGuids = new Set(), dmogGuids = new Set(), dmoGuids = new Set();
  
    const selectedItems = Array.isArray(res.selectedItems) ? res.selectedItems : [];
  
    selectedItems.forEach((item: ICompanyAssociatedBMObject) => {
      bmoGuids.add(item.BMOGUID);
      dmogGuids.add(item.DMOGGUID);
      dmoGuids.add(item.DMOGUID);
    });
  
    const payload: BMAssociatedCompaniesPayload = {
      BMId: bm.BMID,
      ProcessId: bm.TypeID,
      CompanyId: res.companyId,
      groupName: res.groupName,
      BMOGUIDS: [...bmoGuids].toString(),
      DMOGGUIDS: [...dmogGuids].toString(),
      DMOGUIDS: [...dmoGuids].toString(),
      IsAllComp: res.IsAllComp
    };
  
    return lastValueFrom(this.formView.updatetBMObjectsForCompanyAssociation(payload));
  }

  CreateNewRecord(index) {
    const modalRef = this.modalService.open(BmEntryComponent, { backdrop: 'static', size: 'lg', keyboard: false });
    const modalInstance: BmEntryComponent = modalRef.componentInstance;
    if (index !== null) {
      const item = this.dataSource[index];
      modalInstance.dataList = item;
      modalInstance.isEdit = true;
      modalInstance.currentMode = item?.MOD;
    } else {
      modalInstance.isEdit = false;
    }
    modalRef.result.then(async (result) => {
      if (result) {
        this.toastr.success('Data saved successfully.');
        this.LoadData();
      }
    }, (reason) => {
    }
    );
  }

  ChangeStatus(event: any) {
    const selectedStatusbmId = this.dataSource.filter(x => x.selected === true).map(x => x.BMID).join(',');
    if (event.target.value !== "-1" && !!selectedStatusbmId) {
      this.bmService.ChangeBMStatus(selectedStatusbmId, event.target.value).subscribe(
        result => {
          if (result) {
            this.LoadData();
            this.BMForm.get('ChangeStatus').patchValue('-1');
            this.toastr.success('Status Changed successfully');
          }
        });
    } else {
      if (event.target.value !== "-1" && (selectedStatusbmId === undefined || selectedStatusbmId === '')) {
        this.BMForm.get('ChangeStatus').patchValue('-1');
        this.toastr.warning('Please select at least one record.');
      }
    }
  }
  ChangeMode(event: any) {
    const bmmode = event.target.value;
    const selectedStatusbmids = this.dataSource.filter(x => x.selected === true);
    if (bmmode !== "-1" && !!selectedStatusbmids && selectedStatusbmids.length === 1) {
      this.bmService.ChangeBMMode(selectedStatusbmids[0].BMID, bmmode).subscribe(
        result => {
          if (result) {
            this.LoadData();
            this.BMForm.get('ChangeMode').patchValue('-1');
            this.toastr.success('Mode Changed successfully');
          }
        });
    } else {
      if (bmmode !== "-1" && (!!selectedStatusbmids && (selectedStatusbmids.length > 1 || selectedStatusbmids.length === 0))) {
        this.BMForm.get('ChangeMode').patchValue('-1');
        this.toastr.warning('Please select one record only.');
      }
    }
  }

  showDeleteMessage() {
    if (this.selectedRowIndex > -1) {
      this.BMID = this.dataSource[this.selectedRowIndex].BMID;
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
  deleteSelectedConfirmation(modelRef: NgbModalRef, Caller: BmGridComponent) {
    Caller.bmService.DeleteBM(Caller.BMID).subscribe({
      next: (result) => {
        if (result === true) {
          Caller.LoadData();
          modelRef.close();
        } else {
          Caller.toastr.warning('Record(s) Cannot Be Deleted');
        }
      },
      error: (error) => {
        if (!!error.error && error.error === 'Record(s) Cannot Be Deleted') {
          Caller.toastr.warning('Record(s) Cannot Be Deleted');
        }
      }
    });
  }
  CreateNewVersion(index: number) {
    if (index !== -1 && this.dataSource[this.selectedRowIndex]) {
      const bmId = this.dataSource[this.selectedRowIndex].BMID;
      this.msg.showMessage('Warning', {
        header: 'Create New Version',
        body: 'Are you sure you want to create a new version of the selected item?',
        btnText: 'Create',
        checkboxText: 'Yes, create new version',
        isDelete: true,
        isNewDesign: true,
        callback: () => {
          this.bmService.CreateBMVersion(bmId, this.userDetail.TimeZone.toString()).subscribe(
            result => {
              if (result.includes('Version created successfully.')) {
                this.toastr.success('Version created successfully.');
                this.LoadData();
              }
            }
          );
        },
        caller: this,
      });
    }
  }

  ExportBM(rowIndex:number) {
    const bm = this.dataSource[rowIndex];
    if (bm) {
      const fileName = bm.nam + '_' + bm.Ver + '.xlsx';
      this.bmService.ExportBMData(bm.BMID, this.userDetail.TimeZone.toString()).subscribe(
        data => {
          saveAs(data, fileName);
          this.LoadData();
        });
    }
  }

  openExportGridConfigurationPopup(poptype: string, viewName: string, ExportType: string) {
    const modalRef = this.modalService.open(GridExportComponent,
      { windowClass: 'grid-config-view-modal', backdrop: 'static', keyboard: false,centered: true}
    );
    const modalInstance: GridExportComponent = modalRef.componentInstance;
    modalInstance.ProcessName = this.processName;
    modalInstance.objBaseGrid = this;
    modalInstance.ExportType = ExportType.toUpperCase();
    modalInstance.ExportUserData.SortColumn = this.bodyData.SortColumn;
    modalInstance.ExportUserData.SortOrder = this.bodyData.SortOrder;
    modalInstance.ExportUserData.ProcessName = this.processName
    modalInstance.ExportUserData.GridFilters = this.bodyData.GridFilters;
    modalInstance.ExportFrom = 'BM';
    modalInstance.BMIds = this.dataSource.filter(x => x.selected === true).map(x => x.BMID).join(',');
  }

  async BatchUpdate() {
    const selected = this.dataSource[this.selectedRowIndex];
    const bmId = selected.BMID;
    const processId = selected.TypeID;
    try {
      const modal = this.msg.showComponent(BatchUpdateComponent, {bmId, processId},{size: 'lg',centered: true});
      const res = await modal.result;
      if (res) {
        this.toastr.success('Data saved successfully');
        this.LoadData();
      }
    } catch(err) {
      this.toastr.error('Failed to decrypt record id');
    }
  }

  async BulkTrigger() {
    const selected = this.dataSource[this.selectedRowIndex];
    const bmId = selected.BMID;
    const processId = selected.TypeID;
    try {
      const modal = this.msg.showComponent(BulkTriggerComponent, {bmId, processId},{size: 'lg',centered: true});
      const res = await modal.result;
      if (res) {
        this.toastr.success('Data saved successfully');
        this.LoadData();
      }
    } catch(err) {
      this.toastr.error('Failed to decrypt record id');
    }
  }
  UniqueConstraint() {
    const bm = this.dataSource[this.selectedRowIndex];
    if (bm) {
      const modalRef = this.modalService.open(UniqueConstraintComponent,
        { windowClass: 'grid-config-view-modal', backdrop: 'static', keyboard: false,size: 'lg',centered: true }
      );
      const modalInstance: UniqueConstraintComponent = modalRef.componentInstance;
      modalInstance.bmId = bm.BMID;
      modalRef.result.then(async (result) => {
        if (result) {
          this.toastr.success('Unique Constraint saved successfully.');
          this.LoadData();
        }
      }, (reason) => {
      }
      );
    }
  }

  WorkFlowAssociation(index: any) {
    const modalRef = this.modalService.open(BmWfAssociationComponent, { backdrop: 'static', size: 'lg', keyboard: false,centered: true });
    const modalInstance: BmWfAssociationComponent = modalRef.componentInstance;
    modalInstance.BMName = this.dataSource[index].nam;
    modalInstance.Version = this.dataSource[index].Ver;
    modalInstance.BMID = this.dataSource[index].BMID;
    if (index !== null) {
      const item = this.dataSource[index];
    }
    modalRef.result.then(async (result) => {
      if (result) {
        this.toastr.success('Workflow BM saved successfully.');
        //this.LoadData();
      }
    }, (reason) => {
    }
    );
  }

  GridViewMasterConfig(poptype: string, viewName: string) {
    const modalRef = this.modalService.open(GridViewMasterConfigurationComponent,
      { windowClass: 'grid-config-view-modal', backdrop: 'static', keyboard: false,size: 'lg',centered: true }
    );
    const modalInstance: GridViewMasterConfigurationComponent = modalRef.componentInstance;
    modalInstance.gridConfigJson.ViewName = viewName;
    modalInstance.ProcessName = this.processName;
    modalInstance.OldViewName = viewName;
    //modalInstance.objBaseGrid = this;
  }

  openJsonImportModal(jsonModalTemplate: any): void {
    this.resetFileDetails();
    const modalRef = this.modalService.open(jsonModalTemplate, { 
      ariaLabelledBy: 'modal-basic-title', 
      backdrop: 'static', 
      keyboard: false ,
      centered: true
    });
  }
  
  resetFileDetails(): void {
    this.fileName = '';
    this.errorMsg = '';
    this.IsValidFile = true;
    this.file = null;  
  }
  
  validateJsonFile(event: any): void {
    const input = event?.target as HTMLInputElement;

    if (input?.files?.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;
      this.errorMsg = '';
      this.IsValidFile = false;

      // Validate if it's a JSON file
      if (!this.file.name.toLowerCase().endsWith('.json')) {
        this.errorMsg = 'Please select a valid JSON file';
        this.IsValidFile = true;
        return;
      }
    }
  }
  
  ImportJsonBM(): void {
  
    if (!this.file) {
      this.errorMsg = 'No file selected.';
      return;
    }
  
    if (this.file?.type !== 'application/json') {
      this.errorMsg = 'Invalid file type. Please upload a valid JSON file.';
      return;
    }
    var BMID = null;
    BMID = this.dataSource.filter(x => x.selected === true).map(x => x.BMID);
    if (BMID.length >= 2) {
      this.toastr.error('Please select only one Datasource');
      return;
    }
  
    this.processName = sessionStorage.getItem('AppName');
    
    const reader = new FileReader();
  
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const result = e?.target?.result as string;
        const parsedData = JSON.parse(result); 
  
        this.ImportBMJsonToDB(this.processName, BMID, parsedData);
        this.errorMsg = ''; 
      } catch (error) {
        this.errorMsg = 'Error parsing JSON file.';
      }
    };
  
    reader.readAsText(this.file);
  }
  
  ImportBMJsonToDB(processName: string, BMID: string, parsedData: any): void {
   
    this.bmService.ImportJsonBM(processName, BMID, parsedData).subscribe({
      next: (response) => {
        this.toastr.success('BM generated successfully');
      },
      error: (err) => {
        this.toastr.error('Error generating BM');
      }
    });
  }
  GenerateDMOGPROPS(): void  {
   var BMID = this.dataSource[this.selectedRowIndex]?.BMID;
   
    this.msg.showMessage('Warning', {
      header: 'Migrate to New Model',
      body: 'Are you sure you want to migrate to the new model?',
      btnText: 'Migrate',
      checkboxText: 'Yes, migrate',
      isDelete: true,
      isNewDesign: true,
      callback: () => {
      this.bmService.GenerateDMOGPROPS(BMID).subscribe({
       next: () => {
      this.LoadData();
       this.toastr.success('DMOGPROPS Inserted successfully');
     },
     error: () => {
      this.toastr.error('Error Inserting DMOGPROPS');
    }
  });
      },
      caller: this,
    });
  }
  goToVersionGrid(){
    const modalRef = this.modalService.open(LiveVersionComponent, { backdrop: 'static', size:'lg',keyboard: false ,centered: true});
    modalRef.result.then(async (result) => {      
      if (result) {
        this.toastr.success('Data saved successfully.');      
      }
    }, (reason) => {
    }
    );
  }

  onSearch() {
    if (this.searchText.trim()) {
      console.log('Searching for:', this.searchText);
      // 👉 Call API or emit event here
      this.bodyData.GridFilters = [
        {
          "GridConditions": [
            {
              "Condition": "CONTAINS",
              "ConditionValue": this.searchText
            }
          ],
          "DataField": "dmoName",
          "LogicalOperator": "Or",
          "FilterType": "Global_Search"
        }
      ]
      this.LoadData();
    }
  }

  onPublishToEnvironment() {
      const item = this.dataSource[this.selectedRowIndex];

      const sourceData = {
        FriendlyName: item.DISPNAME || '',
        ModifiedOn: item.modfon || '',
        ID: item.BMID || '',
        SourceObject: 'bm'
      };

      this.router.navigate(['/publish'], {
        state: { dataObject: sourceData },
        queryParams: { publishid: item.BMID }
      });
}

// Popup menu methods
  openActionsPopup(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const popupWidth = 250;
    const popupHeight = 300; // Set your popup height here

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    let x = rect.left + window.scrollX;
    let y: number;
    let openAbove = false;

    // Decide position: open above if not enough space below
    if (spaceBelow < popupHeight && spaceAbove > popupHeight) {
      y = rect.top + window.scrollY - popupHeight;
      openAbove = true;
    } else {
      y = rect.bottom + window.scrollY;
    }

    // Clamp x if needed
    if (x + popupWidth > window.innerWidth) {
      x = window.innerWidth - popupWidth - 10;
    }
    if (x < 10) x = 10;
    if (y < 10) y = 10;

    this.popupPosition = { x, y };
    this.showActionsPopup = true;

    setTimeout(() => {
      document.addEventListener('click', this.boundOutsideClick, true);
      document.addEventListener('keydown', this.boundKeydown, true);
      // window.addEventListener('scroll', this.boundScroll, true); // Add scroll listener
    }, 0);
  }
onActionsMenuOpen(event: {x: number, y: number, rowIndex: number}) {
  this.selectedRowIndex = event.rowIndex;
  this.openActionsPopupAt({x: event.x, y: event.y});
}
  openActionsPopupAt(pos: {x:number,y:number}){
    // approximate popup size and clamp
    const popupWidth = 200;
    const popupHeight = 600;
    let x = pos.x;
    let y = pos.y + 5;
    console.log('Popup position:', { x, y });
    if (x + popupWidth > window.innerWidth) x = pos.x - popupWidth;
    if (y + popupHeight > window.innerHeight) y = pos.y;
    if (x < 10) x = 10;
    if (y < 10) y = 10;

    this.popupPosition = {x,y};
    this.showActionsPopup = true;

    setTimeout(() => {
      const popup = document.querySelector('.actions-popup');
      if (popup) {
        popup.classList.remove('arrow-left', 'arrow-right', 'arrow-left-top', 'arrow-right-top');
      }
      document.addEventListener('click', this.boundOutsideClick, true);
      document.addEventListener('keydown', this.boundKeydown, true);
      // window.addEventListener('scroll', this.boundScroll, true); // Add scroll listener
    }, 0);
  }

  closeActionsPopup(): void {
    this.showActionsPopup = false;
    document.removeEventListener('click', this.boundOutsideClick, true);
    document.removeEventListener('keydown', this.boundKeydown, true);
    // window.removeEventListener('scroll', this.boundScroll, true); // Remove scroll listener
  }

  private closeActionsPopupOnOutsideClick(event: MouseEvent): void {
    const popup = document.querySelector('.actions-popup');
    if (popup && !popup.contains(event.target as Node)) {
      this.closeActionsPopup();
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeActionsPopup();
    }
  }

    CardWallTemplateConfig(poptype: string) {
    const modalRef = this.modalService.open(CardWallConfigurationSelectionComponent,
      { windowClass: 'grid-config-view-modal', backdrop: 'static', keyboard: false }
    );
    const modalInstance: CardWallConfigurationSelectionComponent = modalRef.componentInstance;
    modalInstance.ProcessName = this.processName;
  }
  

  // private boundScroll = this.handleScroll.bind(this);

  // private handleScroll(event: Event): void {
  // this.closeActionsPopup();
  // }

  handleAnyFileInput(event: any, bulkUpload: any, jsonModalTemplate: any) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    this.file = files[0];
    this.fileName = this.file.name;
    this.errorMsg = '';
    this.IsValidFile = false;
    const fileName = this.file.name.toLowerCase();
    const isExcel = fileName.endsWith('.xls') || fileName.endsWith('.xlsx');
    const isJson = fileName.endsWith('.json');
    if (isExcel) {
      if (
        this.file.type === 'application/vnd.ms-excel' ||
        this.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        fileName.endsWith('.xls') || fileName.endsWith('.xlsx')
      ) {
        this.IsValidFile = false;
        this.fileName = this.file.name;
      } else {
        this.fileName = '';
        this.errorMsg = 'File not valid';
        this.IsValidFile = true;
      }
    } else if (isJson) {
      // Validate JSON extension only, do not close modal
      if (!fileName.endsWith('.json')) {
        this.fileName = '';
        this.errorMsg = 'File not valid';
        this.IsValidFile = true;
      } else {
        this.IsValidFile = false;
        this.fileName = this.file.name;
      }
    } else {
      this.fileName = '';
      this.errorMsg = 'Unsupported file type. Please upload an Excel or JSON file.';
      this.IsValidFile = true;
    }
  }

  // Directly handle JSON import without opening a modal
  importJsonFileDirectly(file: File): void {
    if (!file) {
      this.toastr.error('No file selected.');
      return;
    }
    if (!file.name.toLowerCase().endsWith('.json')) {
      this.toastr.error('Invalid file type. Please upload a valid JSON file.');
      return;
    }
    var BMID = this.dataSource.filter(x => x.selected === true).map(x => x.BMID);
    if (BMID.length >= 2) {
      this.toastr.error('Please select only one Datasource');
      return;
    }
    const BMIDValue = BMID.length === 1 ? BMID[0] : '';
    this.processName = sessionStorage.getItem('AppName');
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const result = e?.target?.result as string;
        const parsedData = JSON.parse(result);
        this.ImportBMJsonToDB(this.processName, BMIDValue, parsedData);
        this.errorMsg = '';
      } catch (error) {
        this.toastr.error('Error parsing JSON file.');
      }
    };
    reader.readAsText(file);
  }
}
