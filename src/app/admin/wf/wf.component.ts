import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import {
  ICompanyAssociatedWFObject,
  MessageService,
  WFAssociatedCompaniesPayload,
} from '@app/core';
import { UserDetail } from '@app/core/models/user-detail';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { environment } from '@env/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { WFService } from '../core/services/wfservice.service';
import { CompanyAssociationComponent } from '../Shared/company-association/company-association.component';
import { GridExportComponent } from '../Shared/grid-export/grid-export.component';
import { WorkflowBmAssociationComponent } from '../Shared/workflow-bm-association/workflow-bm-association.component';
import { AdditionalPermissionComponent } from './components/additional-permission/additional-permission.component';
import { WorkflowSaveUpdateComponent } from './components/workflow-save-update/workflow-save-update.component';
import { IHeaderMap } from './wfd/models/wfGridInterface';
import { WfEmailTemplateComponent } from './wfemailtemplate/components/wf-email-template/wf-email-template.component';
import { WfRoleGridComponent } from './wfroles/components/wf-role-grid/wf-role-grid.component';
import { GridConfigStaticColComponent } from './components/grid-config-static-col/grid-config-static-col.component';
import { MatDialog } from '@angular/material/dialog';
import { GenerateXmlComponent } from './wfd/components/generatexml/generatexml.component';
import { LiveVersionComponent } from '@app/admin/LiveVersion/components/live-version/live-version.component';
import { NgIf } from '@angular/common';
import { GenericGridComponent } from '../Shared/generic-grid/generic-grid.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-wf',
  templateUrl: './wf.component.html',
  styleUrls: ['./wf.component.scss'],
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, GenericGridComponent, FormsModule],
})
export class WfComponent implements OnInit {
  @ViewChild('jsonFileInput', { static: false }) jsonModalTemplate!: ElementRef;

  file: File = null;
  IsValidFile = false;
  fileName = '';
  errorMsg = '';
  dataSource = [];
  itemsCount: number;
  popupPosition = { x: 0, y: 0 };
  showActionsPopup = false;
  private boundOutsideClick = this.closeActionsPopupOnOutsideClick.bind(this);
  private boundKeydown = this.handleKeyDown.bind(this);
  bodyData = {
    PageSize: 20,
    PageNumber: 1,
    SortColumn: 'CRTDON',
    SortOrder: 'desc',
    TimeZone: 0,
    GridFilters: [],
  };

  HeaderMap: IHeaderMap = {
    config: {
      header: {
        columns: [
          {
            objectKey: 'nam',
            dataType: 'Link',
            displayName: 'Workflow Name',
            width: '14%',
          },
          {
            objectKey: 'DISPNAME',
            displayName: 'Friendly Name',
            width: '14%',
          },
          {
            objectKey: 'Ver',
            displayName: 'Version',
            width: '8%',
          },
          {
            objectKey: 'Status',
            displayName: 'Mode',
            width: '9%',
          },
          {
            objectKey: 'crtdon',
            displayName: 'Date Added',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail?.TimeZone?.toString(),
            width: '15%',
          },
          {
            objectKey: 'modfon',
            displayName: 'Date Modified',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail?.TimeZone?.toString(),
            width: '15%',
          },
          // {
          //   objectKey: 'Stage',
          //   displayName: 'Stage',
          //   width: '5%'
          // },
          {
            objectKey: 'StageBMCondtion',
            displayName: 'Conditions',
            dataType: 'Link',
            width: '8%',
          },
          // {
          //   objectKey: 'MOD',
          //   displayName: 'Mode',
          //   width: '12%'
          //  },
          //{
          //   objectKey: 'WFID',
          //   displayName: 'WFD',
          //   dataType: 'LinkWithSpecialChar',
          //   SpecialChar: 'WFD',
          //   width: '4%'
          // },{
          //   objectKey: 'Role',
          //   displayName: 'Roles',
          //   dataType: 'LinkWithSpecialChar',
          //   SpecialChar: 'Click Here',
          //   width: '7%'
          // },{
          //   objectKey: 'BM',
          //   displayName: 'BM',
          //   dataType: 'LinkWithSpecialChar',
          //   SpecialChar: 'Click Here',
          //   width: '7%'
          // },{
          //   objectKey: 'EmailTemplate',
          //   displayName: 'Email Template',
          //   dataType: 'LinkWithSpecialChar',
          //   SpecialChar: 'Click Here',
          //   width: '9%'
          // }
        ],
        action: {
          Checkbox: true,
          moreInfo: true,
          showGenerateJsonBtn: true,
          WFBM: true,
        },
        columnFilter: false,
      },
      paging: true,
    },
  };
  processName: string;
  wfmode: any;
  WFIDS: any;
  DisplayName: any;
  Version: any;
  WFForm: UntypedFormGroup;
  alertMsgTxt: string[] = [];
  searchText: any;
  isLoading = true;
  selectedRowIndex: number;
  constructor(
    private wfsrvc: WFService,
    private dialog: MatDialog,
    private formView: FormViewApiService,
    private userDetail: UserDetail,
    private toastr: ToastrService,
    private msg: MessageService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.processName = params.get('pname');

      if (this.processName && this.processName.trim() !== '') {
        this.processName = params.get('pname');
        sessionStorage.setItem('AppName', this.processName);
      }
    });
    this.activatedRoute.queryParams.subscribe((qParams) => {
      this.initialize(qParams);
    });
  }

  initialize(queryParams) {
    const lowerKeyCase = [];
    Object.keys(queryParams).forEach((param) => {
      const lowerCaseParam = param.toLocaleLowerCase();
      lowerKeyCase.push({ key: lowerCaseParam, value: queryParams[param] });
    });

    const pName = lowerKeyCase.find((lk) => lk.key === 'pname')?.value;
    const dname = lowerKeyCase.find((lk) => lk.key === 'dname')?.value;

    if (pName && dname) {
      this.processName = pName;
      this.DisplayName = dname;
    } else {
      this.processName = sessionStorage.getItem('AppName');
      this.DisplayName = sessionStorage.getItem('DisplayName');
    }

    this.WFForm = this.fb.group({
      CangeStatus: ['-1'],
      ChangeMode: ['-1'],
    });

    this.LoadData();
  }

  onSearch() {
    if (this.searchText.trim()) {
      console.log('Searching for:', this.searchText);
      // 👉 Call API or emit event here
      this.bodyData.GridFilters = [
        {
          GridConditions: [
            {
              Condition: 'CONTAINS',
              ConditionValue: this.searchText,
            },
          ],
          DataField: 'dmoName',
          LogicalOperator: 'Or',
          FilterType: 'Global_Search',
        },
      ];
      this.LoadData();
    }
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
        this.ExportWF(event.rowIndex);
        break;
      case 'Edit':
        this.CreateNewRecord(event.rowIndex);
        break;
      case 'Delete':
        this.showDeleteMessage();
        break;
      case 'SpecialCharClick':
        if (event.ColumnFilterDropdown === 'Role') {
          this.CreateWFRoles();
        } else if (event.ColumnFilterDropdown === 'BM') {
          this.CreateWFBM(event.rowIndex);
        } else if (event.ColumnFilterDropdown === 'EmailTemplate') {
          this.CreateWFEmailTemplate();
        } else {
          if (window.location.href.includes('wfadmin'))
            this.router.navigate(['wfadmin/admin/wf/wfd'], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID,
              },
            });
          else
            this.router.navigate(['admin/wf/wfd'], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID,
              },
            });
        }
        break;
      case 'Link':
        if (event.ColumnFilterDropdown === 'nam') {
          if (window.location.href.includes('wfadmin'))
            this.router.navigate(['wfadmin/admin/wf/wfd'], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID,
              },
            });
          else
            this.router.navigate(['admin/wf/wfd'], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID,
              },
            });
        } else {
          const wfid = this.dataSource[event.rowIndex].WFID;
          const version = this.dataSource[event.rowIndex].Ver;
          sessionStorage.setItem('WFVersion', version);
          if (window.location.href.includes('wfadmin')) {
            this.router.navigate(['/wfadmin/admin/wf/wfcondition'], {
              queryParams: { id: wfid },
            });
          } else {
            this.router.navigate(['/admin/wf/wfcondition'], {
              queryParams: { id: wfid },
            });
          }
        }

        break;
    }
  }

  LoadData() {
    this.isLoading = true;
    this.wfsrvc.getWFGrid(this.processName, this.bodyData).subscribe(
      (x) => {
        this.dataSource = x?.Data || [];
        this.itemsCount = x?.RecordsCount || 0;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  ChangeStatus(event: any) {
    const selectedStatus = this.dataSource
      .filter((x) => x.selected === true)
      .map((x) => x.WFID)
      .join(',');
    if (event.target.value !== '-1' && !!selectedStatus) {
      this.wfsrvc
        .ChangeWfStatus(selectedStatus, event.target.value)
        .subscribe((result) => {
          if (result) {
            this.LoadData();
            this.WFForm.get('CangeStatus').patchValue('-1');
            this.toastr.success('Status Changed successfully');
          }
        });
    } else {
      if (
        event.target.value !== '-1' &&
        (selectedStatus === undefined || selectedStatus === '')
      ) {
        this.WFForm.get('CangeStatus').patchValue('-1');
        this.toastr.warning('Please select at least one record.');
      }
    }
  }
  generateXML(rowIndex: number) {
    this.formView
      .generateBMWFXMLGateway(
        'wf',
        this.processName,
        this.dataSource[rowIndex].Ver
      )
      .subscribe({
        next: (success) => {
          this.Version = this.dataSource[rowIndex].Ver;
          if (success) {
            this.alertMsgTxt = [];
            if (success.IsBMWFLinked === 0)
              this.alertMsgTxt.push('BM-WF is not linked.');

            if (success.IsLive === 0)
              this.alertMsgTxt.push('BM-WF is not live.');

            if (success.IsCmpnyGrpExists === 0)
              this.alertMsgTxt.push('Company Group is not exists.');

            if (success.IsCmpnyWFObjectLinked === 0)
              this.alertMsgTxt.push('Company-WF Objects are not linked.');

            if (this.alertMsgTxt.length > 0) {
              this.showErrorModal();
            } else {
              this.LoadData();
              this.toastr.success('JSON generated successfully');
            }
          }
        },
        error: () => {
          this.showErrorModal();
        },
      });
  }

  private showErrorModal(): void {
    const dialogRef = this.dialog.open(GenerateXmlComponent, {
      width: '656px',
      disableClose: true,
      panelClass: 'custom-dialog-container',
      data: {
        type: 'wf',
        processName: this.processName,
        verNo: this.Version,
        alertMsgTxt: this.alertMsgTxt,
      },
    });

    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }

  ChangeMode(event: any) {
    this.wfmode = event.target.value;
    const selectedStatus = this.dataSource
      .filter((x) => x.selected === true)
      .map((x) => x.WFID)
      .join(',');
    if (this.wfmode !== '-1' && !!selectedStatus) {
      this.wfsrvc
        .ChangeWfMode(selectedStatus, this.wfmode)
        .subscribe((result) => {
          if (result) {
            this.LoadData();
            this.WFForm.get('ChangeMode').patchValue('-1');
            this.toastr.success('Mode Changed successfully');
          }
        });
    } else {
      if (
        this.wfmode !== '-1' &&
        (selectedStatus === undefined || selectedStatus === '')
      ) {
        this.WFForm.get('ChangeMode').patchValue('-1');
        this.toastr.warning('Please select at least one record.');
      }
    }
  }
  OpenAdditionalPermission() {
    this.msg.showComponent(
      AdditionalPermissionComponent,
      {},
      { size: 'xl', centered: true }
    );
  }

  async onCompanyAssociation() {
    const obj = this.dataSource[this.selectedRowIndex];
    const modal = this.msg.showComponent(
      CompanyAssociationComponent,
      {
        displayWith: (item: ICompanyAssociatedWFObject) =>
          `${item.WFDISPNAME} > ${item.WFODISPNAME} > ${item.WFOSDISPNAME} > ${item.TRGDISPNAME}`,
        uniqueWith: (item: ICompanyAssociatedWFObject) =>
          `${item.WFNAM}${item.WFOGUID}${item.WFOSGUID}${item.TRGGUID}`,
        getAssociationsWith: (groupId: string) =>
          this.formView.getWFObjectsForCompanyAssociation(
            groupId,
            obj.TypeID,
            obj.WFID
          ),
        checkBy: 'isAlreadySelected',
      },
      { size: 'lg', centered: true }
    );
    const res = await modal.result;
    if (res) {
      const success =
        (await this.updateCompanyAssociatedRecords(obj, res)) === 1;
      if (success) {
        this.toastr.success('Data saved successfully');
        this.LoadData();
      }
    }
  }

  private updateCompanyAssociatedRecords(wf: any, res: any) {
    const stageGuids = new Set(),
      stateGuids = new Set(),
      triggerGuids = new Set();

    const selectedItems = res?.selectedItems;
    if (Array.isArray(selectedItems)) {
      (selectedItems as ICompanyAssociatedWFObject[]).forEach((item) => {
        stageGuids.add(item.WFOGUID);
        stateGuids.add(item.WFOSGUID);
        triggerGuids.add(item.TRGGUID);
      });
    } else {
      console.warn(
        'No selectedItems found for association update:',
        selectedItems
      );
    }

    const payload: WFAssociatedCompaniesPayload = {
      WFId: wf.WFID,
      ProcessId: wf.TypeID,
      CompanyId: res?.companyId ?? null,
      groupName: res?.groupName ?? '',
      WFOGUIDS: [...stageGuids].toString(),
      WFOSGUIDS: [...stateGuids].toString(),
      TrigGUIDS: [...triggerGuids].toString(),
      IsAllComp: res.IsAllComp,
    };

    return this.formView
      .updateWFObjectsForCompanyAssociation(payload)
      .toPromise();
  }

  CreateNewRecord(index) {
    const item = index !== null ? this.dataSource[index] : null;
    const modal = this.msg.showComponent(
      WorkflowSaveUpdateComponent,
      {
        isEdit: !!item,
        dataList: item,
        currentMode: item?.WorflowMode,
      },
      { size: 'lg', centered: true }
    );
    modal.result.then(async (result) => {
      if (result) {
        this.toastr.success('Data saved successfully');
        this.LoadData();
      }
    });
  }

  CreateNewVersion() {
    const wfID = this.dataSource[this.selectedRowIndex];

    this.msg.showMessage('Warning', {
      header: 'Create New Version',
      body: 'Are you sure you want to create a new version of the selected item?',
      btnText: 'Create',
      checkboxText: 'Yes, create new version',
      isDelete: true,
      isNewDesign: true,
      callback: () => {
        this.wfsrvc.CreateWFVersion(wfID.WFID, 0).subscribe((result) => {
          const message =
            typeof result === 'string'
              ? result
              : typeof result === 'object' && result?.message
              ? result.message
              : '';
          if (message.startsWith('Version created successfully.')) {
            this.toastr.success('Version created successfully.');
            this.LoadData();
          }
        });
      },
      caller: this,
    });
  }
  ExportWF(rowIndex: number) {
    console.log(this.dataSource[rowIndex]);
    const wfID = this.dataSource[rowIndex].WFID;
    const currVer = this.dataSource[rowIndex].Ver;
    const fileName = 'WorkFlow_Check_' + currVer + '.xlsx';
    this.wfsrvc.ExportWFData(wfID).subscribe((data) => {
      saveAs(data, fileName);
      this.LoadData();
    });
  }
  showDeleteMessage() {
    const item = this.dataSource[this.selectedRowIndex];
    if (item) {
      this.WFIDS = item.WFID;
      this.msg.showMessage('Warning', {
        header: 'Delete Selected Item',
        body: 'Do you want to delete selected item?',
        btnText: 'Delete',
        checkboxText: 'Yes, delete selected item',
        isDelete: true,
        isNewDesign: true,
        callback: this.deleteSelectedConfirmation,
        caller: this,
      });
    } else {
      this.msg.showMessage('Warning', {
        body: 'At least one record must be selected in order to delete',
      });
    }
  }
  deleteSelectedConfirmation(modelRef: NgbModalRef, Caller: WfComponent) {
    Caller.wfsrvc.DeleteWF(Caller.WFIDS).subscribe(
      (result) => {
        if (result?.IsError) {
          Caller.msg.showMessage('Fail', { body: result.Message });
          return;
        }
        Caller.LoadData();
        modelRef.close();
      },
      (error) => {
        if (!!error.error && error.error === 'Record(s) Cannot Be Deleted') {
          Caller.toastr.warning('Record(s) Cannot Be Deleted');
        }
      }
    );
  }

  openExportGridConfigurationPopup(ExportType: string) {
    this.msg.showComponent(
      GridExportComponent,
      {
        ProcessName: this.processName,
        objBaseGrid: this,
        ExportType: ExportType.toUpperCase(),
        WFIds: this.dataSource
          .filter((rec) => rec.selected)
          .map((rec) => rec.WFID)
          .join(),
        ExportUserData: (original) => {
          return {
            ...original,
            SortColumn: this.bodyData.SortColumn,
            SortOrder: this.bodyData.SortOrder,
            ProcessName: this.processName,
          };
        },
      },
      { size: 'lg', centered: true } // ✅ pass as third parameter
    );
  }

  openBulkUpload(bulkUpload) {
    this.file = null;
    this.fileName = '';
    this.modalService.open(bulkUpload, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
    this.fileName = this.file ? this.file.name : '';
    this.errorMsg = '';
    this.IsValidFile = true;
    if (!this.file) {
      this.errorMsg = 'No file selected.';
      return;
    }
    // Accept Excel or JSON
    if (
      this.file.type === 'application/vnd.ms-excel' ||
      this.file.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      this.file.name.endsWith('.xls') ||
      this.file.name.endsWith('.xlsx')
    ) {
      this.IsValidFile = false;
    } else if (
      this.file.type === 'application/json' ||
      this.file.name.endsWith('.json')
    ) {
      this.IsValidFile = false;
    } else {
      this.errorMsg =
        'File not valid. Please upload a valid Excel or JSON file.';
      this.IsValidFile = true;
      this.file = null;
      this.fileName = '';
    }
  }

  upload() {
    if (!this.file) {
      this.IsValidFile = true;
      this.errorMsg = 'Please select file';
      return;
    }
    // Excel
    if (
      this.file.type === 'application/vnd.ms-excel' ||
      this.file.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      this.file.name.endsWith('.xls') ||
      this.file.name.endsWith('.xlsx')
    ) {
      this.IsValidFile = false;
      this.errorMsg = '';
      const formData = new FormData();
      formData.append('processName', this.processName);
      formData.append('uploadFile', this.file);
      this.wfsrvc.UploadFile(formData, this.processName).subscribe(
        (Result) => {
          if (Result.status === 'Success') {
            this.file = null;
            this.fileName = '';
            this.msg.dismissAll();
            this.msg.showMessage('Success', {
              header: 'File uploaded successfully',
              body: Result.message,
            });
            this.LoadData();
          } else {
            this.msg.dismissAll();
            this.msg.showMessage('Fail', { body: Result.message });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    // JSON
    else if (
      this.file.type === 'application/json' ||
      this.file.name.endsWith('.json')
    ) {
      // Validate selection
      var WFID = this.dataSource
        .filter((x) => x.selected === true)
        .map((x) => x.WFID);
      if (WFID.length >= 2) {
        this.toastr.error('Please select only one Datasource');
        return;
      }
      this.processName = sessionStorage.getItem('AppName');
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          const result = e?.target?.result as string;
          const parsedData = JSON.parse(result);
          this.wfsrvc
            .ImportJsonWF(this.processName, WFID, parsedData)
            .subscribe({
              next: (response) => {
                this.toastr.success('WF generated successfully');
                this.file = null;
                this.fileName = '';
                this.msg.dismissAll();
                this.LoadData();
              },
              error: (err) => {
                this.toastr.error('Error generating WF');
              },
            });
          this.errorMsg = '';
        } catch (error) {
          this.errorMsg = 'Error parsing JSON file.';
        }
      };
      reader.readAsText(this.file);
    }
  }

  downloadTemplate() {
    this.wfsrvc.DownloadWFTemp(this.processName).subscribe((result) => {
      this.SaveUploadLog(result);
    });
  }
  SaveUploadLog(FileData: any) {
    const curDate = new Date();
    const fileName =
      this.processName.replace(' ', '_') +
      '_Template' +
      '_' +
      (curDate.getMonth() + 1).toString() +
      '_' +
      curDate.getDate() +
      '_' +
      curDate.getFullYear() +
      '_' +
      curDate.getHours() +
      '_' +
      curDate.getMinutes() +
      '_' +
      curDate.getSeconds();
    saveAs(FileData, fileName);
  }

  CreateWFRoles() {
    const item = this.dataSource[this.selectedRowIndex];
    const modal = this.msg.showComponent(
      WfRoleGridComponent,
      {
        WFID: item.WFID,
        WFName: item.nam,
      },
      { size: 'lg', centered: true }
    );
    modal.result.then((res) => {
      res && this.toastr.success('Data saved successfully.');
    });
  }

  CreateWFBM(index) {
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(
      WorkflowBmAssociationComponent,
      {
        WFID: item.WFID,
        WFName: item.nam,
        Version: item.Ver,
      },
      { size: 'lg', centered: true }
    );
    modal.result.then(
      (res) => res && this.toastr.success('Workflow BM saved successfully.')
    );
  }

  CreateWFEmailTemplate() {
    const item = this.dataSource[this.selectedRowIndex];
    const modal = this.msg.showComponent(
      WfEmailTemplateComponent,
      {
        WFId: item.WFID,
        WFName: item.nam,
        Version: item.Ver,
      },
      { size: 'lg', centered: true }
    );
    modal.result.then(
      (res) => res && this.toastr.success('Email Template saved successfully.')
    );
  }

  OpenGridConfigStaticCol() {
    this.msg.showComponent(
      GridConfigStaticColComponent,
      { ProcessName: this.processName },
      { size: 'lg', centered: true }
    );
  }

  goToVersionGrid() {
    const modalRef = this.modalService.open(LiveVersionComponent, {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
      centered: true,
    });
    modalRef.result.then(
      async (result) => {
        if (result) {
          this.toastr.success('Data saved successfully');
        }
      },
      (reason) => {}
    );
  }

  onPublishToEnvironment() {
    const item = this.dataSource[this.selectedRowIndex];
    const sourceData = {
      FriendlyName: item.DISPNAME || '',
      ModifiedOn: item.modfon || '',
      ID: item.WFID || '',
      SourceObject: 'wf',
    };

    this.router.navigate(['/publish'], {
      state: { dataObject: sourceData },
      queryParams: { publishid: item.WFID },
    });
  }

  openActionsPopupAt(pos: { x: number; y: number }) {
    // approximate popup size and clamp
    const popupWidth = 200;
    const popupHeight = 600;
    let x = pos.x;
    let y = pos.y + 5;

    if (x + popupWidth > window.innerWidth) x = pos.x - popupWidth;
    if (y + popupHeight > window.innerHeight) y = pos.y;
    if (x < 10) x = 10;
    if (y < 10) y = 10;

    this.popupPosition = { x, y };
    this.showActionsPopup = true;

    setTimeout(() => {
      const popup = document.querySelector('.actions-popup');
      if (popup) {
        popup.classList.remove(
          'arrow-left',
          'arrow-right',
          'arrow-left-top',
          'arrow-right-top'
        );
      }
      document.addEventListener('click', this.boundOutsideClick, true);
      document.addEventListener('keydown', this.boundKeydown, true);
    }, 0);
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
  closeActionsPopup(): void {
    this.showActionsPopup = false;
    document.removeEventListener('click', this.boundOutsideClick, true);
    document.removeEventListener('keydown', this.boundKeydown, true);
  }
  onActionsMenuOpen(event: { x: number; y: number; rowIndex: number }) {
    this.selectedRowIndex = event.rowIndex;
    this.openActionsPopupAt({ x: event.x, y: event.y });
  }
}
