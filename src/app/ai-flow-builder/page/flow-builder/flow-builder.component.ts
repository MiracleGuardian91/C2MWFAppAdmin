import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { GenericGridComponent } from '@app/admin/Shared/generic-grid/generic-grid.component';
import { GridExportComponent } from '@app/admin/Shared/grid-export/grid-export.component';
import { WorkflowBmAssociationComponent } from '@app/admin/Shared/workflow-bm-association/workflow-bm-association.component';
import { AdditionalPermissionComponent } from '@app/admin/wf/components/additional-permission/additional-permission.component';
import { GridConfigStaticColComponent } from '@app/admin/wf/components/grid-config-static-col/grid-config-static-col.component';
import { WfEmailTemplateComponent } from '@app/admin/wf/wfemailtemplate/components/wf-email-template/wf-email-template.component';
import { WfRoleGridComponent } from '@app/admin/wf/wfroles/components/wf-role-grid/wf-role-grid.component';
import { FlowSaveUpdateComponent } from '@app/ai-flow-builder/components/flow-save-update/flow-save-update.component';
import { AiFlow } from '@app/ai-flow-builder/models/ai-flow.model';
import { AIFlowBuilderService } from '@app/ai-flow-builder/services/aiflow-builder.service';
import { IHeaderMap, MessageService } from '@app/core';
import { UserDetail } from '@app/core/models/user-detail';
import { environment } from '@env/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { WebhookConfigComponent } from '../webhook-config/webhook-config.component';

@Component({
  selector: 'app-flow-builder',
  standalone: true,
    imports: [
          NgIf,
          ReactiveFormsModule,
          GenericGridComponent,
          FormsModule,
      ],
  templateUrl: './flow-builder.component.html',
  styleUrl: './flow-builder.component.scss'
})
export class FlowBuilderComponent implements OnInit {
  @ViewChild('jsonFileInput', { static: false }) jsonModalTemplate!: ElementRef;
  
  file: File = null;
  IsValidFile = false;
  fileName = '';
  errorMsg = '';
  dataSource: AiFlow[] = [];
  itemsCount: number;
  bodyData = {
    PageSize: 10,
    PageNumber: 1,
    SortColumn: 'CRTDON',
    SortOrder: 'desc',
    TimeZone: 0,
    GridFilters: []    
  };  

  HeaderMap: IHeaderMap = {
    config: {
      header: {
        columns: [
          {
            objectKey: 'FlowName',
            displayName: 'Flow Name',
            width: '18%'
          },
          {
            objectKey: 'FlowDescription',
            displayName: 'Flow Description',
            width: '19%'
          },
          {
            objectKey: 'CrtdOn',
            displayName: 'Date Added',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail?.TimeZone?.toString(),
            width: '23%'
          },{
            objectKey: 'ModfOn',
            displayName: 'Date Modified',
            dataType: 'Date',
            format: environment.Setting.dateTimeFormatNoSeconds,
            timeZone: this.userDetail?.TimeZone?.toString(),
            width: '23%'
          },
          {
            objectKey: 'ID',
            displayName: 'Designer',
            dataType: 'LinkWithSpecialChar',
            SpecialChar: 'Click here',
            width: '15%'
          }
        ],
        action: {
          Edit: true,
          Delete: true,
          aiSetting: true,
          Checkbox: true
        },
        columnFilter: false,
      },
      paging: false,
    }
  };
  processName: string;
  wfmode: any;
  ID: any;
  DisplayName:any;
  Version:any;
  WFForm: UntypedFormGroup;
  alertMsgTxt: string[] = [];

  constructor(
    private wfsrvc: WFService,
    private dialog: MatDialog,
    private userDetail: UserDetail,
    private toastr: ToastrService,
    private msg: MessageService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private aiFlowBuilderService: AIFlowBuilderService

  ) {}

  ngOnInit() {    
  this.activatedRoute.queryParams.subscribe(qParams =>{
      this.initialize(qParams)
    });
    
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

    this.WFForm = this.fb.group({  
      CangeStatus: ['-1'],
      ChangeMode: ['-1']
    });

    this.LoadData();
  }

  actionClick(event) {    
    switch (event.action) {
      case 'Edit':
        this.CreateNewRecord(event.rowIndex);
        break;
      case 'Delete':
        this.showDeleteMessage(event.rowIndex);
        break;   
      case 'aiSetting':
       this.openWebhook(event.rowIndex);
        break;   
      case 'SpecialCharClick':        
        if (event.ColumnFilterDropdown === 'Role') {
          this.CreateWFRoles(event.rowIndex);
        }
        else if (event.ColumnFilterDropdown === 'BM') {
          this.CreateWFBM(event.rowIndex);
        }
        else if (event.ColumnFilterDropdown === 'EmailTemplate') {
          this.CreateWFEmailTemplate(event.rowIndex);
        } else {
          if(window.location.href.includes('wfadmin')){
            this.router.navigate(['wfadmin/admin/ai-flow/builder-entity'], { queryParams: { flowName: this.processName, id: this.dataSource[event.rowIndex].ID } });
          }
          else{
            this.router.navigate(['admin/ai-flow/builder-entity'], { queryParams: { flowName: this.dataSource[event.rowIndex].FlowName, id: this.dataSource[event.rowIndex].ID } });
          }
        }
        break;
        // case 'Link':
        //   const wfid = this.dataSource[event.rowIndex].WFID;
        //   const version = this.dataSource[event.rowIndex].Ver;
        //   sessionStorage.setItem('WFVersion',version);          
        //     window.open('/admin/wf/wfcondition?id='+wfid,'_blank');                   
        //   break;
    }
  }
  
  LoadData() {        
    this.aiFlowBuilderService.getAiFlows().subscribe(aiFlows => {      
      this.dataSource = aiFlows || [];
  })
  }

  ChangeStatus(event:any){                  
    // const selectedStatus = this.dataSource.filter(x => x.selected === true).map(x => x.WFID).join(',');
    // if(event.target.value !== "-1" && !!selectedStatus){
    //   this.wfsrvc.ChangeWfStatus(selectedStatus,event.target.value).subscribe(
    //     result => {
    //       if (result) {
    //         this.LoadData();
    //         this.WFForm.get('CangeStatus').patchValue('-1');
    //         this.toastr.success('Status Changed successfully');
    //       }
    //     });
    // } else{  
    //   if(event.target.value !== "-1" && (selectedStatus === undefined || selectedStatus === '')){
    //     this.WFForm.get('CangeStatus').patchValue('-1');
    //     this.toastr.warning('Please select at least one record.');
    //   }         
    // } 
  }

  ChangeMode(event:any){
    // this.wfmode = event.target.value;
    // const selectedStatus = this.dataSource.filter(x => x.selected === true).map(x => x.WFID).join(',');
    // if(this.wfmode !== "-1" && !!selectedStatus){
    //   this.wfsrvc.ChangeWfMode(selectedStatus,this.wfmode).subscribe(
    //     result => {
    //       if (result) {
    //         this.LoadData();
    //         this.WFForm.get('ChangeMode').patchValue('-1');
    //         this.toastr.success('Mode Changed successfully');
    //       }
    //     });
    // } else{  
    //   if(this.wfmode !== "-1" && (selectedStatus === undefined || selectedStatus === '')){
    //     this.WFForm.get('ChangeMode').patchValue('-1');
    //     this.toastr.warning('Please select at least one record.');
    //   }         
    // }
  }
  OpenAdditionalPermission(){    
    this.msg.showComponent(AdditionalPermissionComponent, {}, {size: 'xl'});   
  }

  CreateNewRecord(index){
    const item = index !== null ? this.dataSource[index] : null;
    const modal = this.msg.showComponent(FlowSaveUpdateComponent, {
      id: item ? item.ID: null,
      dataList: item,
      // currentMode: item?.WorflowMode,
    });
    modal.result.then(async (result) => {      
      if (result) {
        this.toastr.success('Data saved successfully');
        this.LoadData();
      }
    });
  }

   openWebhook(index){
    const item = index !== null ? this.dataSource[index] : null;
    const modal = this.msg.showComponent(WebhookConfigComponent, {
      id: item ? item.ID: null,
      FlowName: item ? item.FlowName: null,
      // dataList: item,
      // currentMode: item?.WorflowMode,
    },{ size: 'lg' });
    modal.result.then(async (result) => {      
      if (result) {
        this.toastr.success('Data saved successfully');
        this.LoadData();
      }
    });
  }

   showDeleteMessage(Index:any) {    
    if (Index > -1) {
      this.ID = this.dataSource[Index].ID;
      this.msg.showMessage('Warning', {
        header: 'Delete Selected Item',
        body: 'Do you want to delete selected item?',
        btnText: 'Delete',
        checkboxText: 'Yes, delete selected item',
        isDelete: true,
        isNewDesign : true,
        callback: this.deleteSelectedConfirmation,
        caller: this,
      })
    } else {
      this.msg.showMessage('Warning', { body: 'At least one record must be selected in order to delete' });     
    }
  }
  deleteSelectedConfirmation(modelRef: NgbModalRef, Caller: FlowBuilderComponent) {    
      Caller.aiFlowBuilderService.deleteAIFlow(Caller.ID).subscribe(
        (result: any) => {     
          Caller.LoadData();           
          modelRef.close();
        }, error => {      
          Caller.msg.showMessage('Fail', {body: error.error });    
        });
  }


  openExportGridConfigurationPopup(ExportType: string) {
    this.msg.showComponent(GridExportComponent, {
      ProcessName: this.processName,
      objBaseGrid: this,
      ExportType: ExportType.toUpperCase(),
      WFIds: this.dataSource.filter((rec: any) => rec.selected).map(rec => rec.ID).join(),
      ExportUserData: (original) => {
        return {
          ...original,
          SortColumn: this.bodyData.SortColumn,
          SortOrder: this.bodyData.SortOrder,
          ProcessName: this.processName,
        }
      }
    });
  }

    CreateWFRoles(index){    
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WfRoleGridComponent, {
      WFID: item.ID,
      WFName: item.FlowName,
    });
    modal.result.then(res => {
      res &&  this.toastr.success('Data saved successfully.');
    })
  }

  CreateWFBM(index){      
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WorkflowBmAssociationComponent, {
      WFID: item.ID,
      WFName: item.FlowName,
      // Version: item.Ver,
    });
    modal.result.then(res => res && this.toastr.success('Workflow BM saved successfully.'));
  }

  CreateWFEmailTemplate(index){    
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WfEmailTemplateComponent, {
      WFId: item.ID,
      WFName: item.FlowName,
      // Version: item.Ver,
    });
    modal.result.then(res => res && this.toastr.success('Email Template saved successfully.'));
  }
  
  OpenGridConfigStaticCol(){    
    this.msg.showComponent(GridConfigStaticColComponent, {ProcessName:this.processName}, {size: 'lg'});   
  }

openJsonImportModal(jsonModalTemplate: any): void {
  this.resetFileDetails();
  const modalRef = this.modalService?.open(jsonModalTemplate, { 
    ariaLabelledBy: 'modal-basic-title', 
    backdrop: 'static', 
    keyboard: false 
  });

  if (modalRef) {
    modalRef.result?.then((result) => {
    }, (reason) => {
    });
  } else {
  }
}

resetFileDetails(): void {
  this.fileName = '';
  this.errorMsg = '';
  this.IsValidFile = true;
  this.file = null;  
}

}

