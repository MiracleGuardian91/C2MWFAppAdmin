import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { WFService } from '../../../core/services/wfservice.service';
import { toFormGroup } from '../../wfd/util/helpers';
import { NgFor, NgIf, SlicePipe } from '@angular/common';

@Component({
    selector: 'app-additional-permission',
    templateUrl: './additional-permission.component.html',
    styleUrls: ['./additional-permission.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, ReactiveFormsModule, SlicePipe]
})
export class AdditionalPermissionComponent implements OnInit {
  private readonly processName = sessionStorage.getItem('AppName');
  public dataSource: PermissionsData[];
  public forms: UntypedFormGroup[];
  public readonly columns = [{
      objectKey: 'DISPNAME',
      displayName: 'Role',
      width: '17%'
    },{
      objectKey: 'DELETEAPPLICATION',
      displayName: 'Delete',
      width: '8%'
    },{
      objectKey: 'BulkUploadPermission',
      displayName: 'Bulk Upload',
      width: '11%'
    },{
      objectKey: 'BulkUpdatePermission',
      displayName: 'Bulk Update',
      width: '10%'
    },{
      objectKey: 'BulkTriggerPermission',
      displayName: 'Bulk Trigger',
      width: '10%'
    },{
      objectKey: 'CopyRecordPermission',
      displayName: 'Copy Record',
      width: '11%'
    },{
      objectKey: 'NewEntryPermission',
      displayName: 'New Entry',
      width: '10%'
    // },{
    //   objectKey: 'ExcelPermission',
    //   displayName: 'Excel',
    //   width: '8%'
    // },{
    //   objectKey: 'PDFPermission',
    //   displayName: 'PDF',
    //   width: '8%'
    },{
      objectKey: 'NotesPermission',
      displayName: 'Notes',
      width: '8%'
    },{
      objectKey: 'NotificationPermission',
      displayName: 'Notification',
      width: '10%'
    },{
      objectKey: 'ActivityLogPermission',
      displayName: 'Activity Log',
      width: '10%'
    },{
      objectKey: 'ChangeLogPermission',
      displayName: 'Change Log',
      width: '10%'
    // },{
    //   objectKey: 'InLnEditPermission',
    //   displayName: 'Inline Edit',
    //   width: '10%'
    },
    {
      objectKey: 'ManageDDLPermission',
      displayName: 'Manage DDL',
      width: '11%'
    }
    
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private wfsrvc: WFService, 
    private toastr: ToastrService
  ) { }
  
  ngOnInit(): void {    
    this.GetAdditionalPermission();
  }

  GetAdditionalPermission(){    
    this.wfsrvc.GetAdditionalPermission(this.processName).subscribe(data => {                 
      this.dataSource = data;
      this.forms = data.map(item => toFormGroup(item));
    },
      err => {
        console.log(err);
      });
  }
  onSubmit(index: number){
    let value = this.forms[index].value as PermissionsData;
    const payload: Partial<WFRolePermission> = {
      ...value,
      RoleName: value.DISPNAME,
      DelApp: value.DELETEAPPLICATION,
      InlineEditPermission: false,
    };
    this.wfsrvc.AddUpdateAdditionalPermission(this.processName, payload).subscribe(res=>{
      if(res=='Success.'|| res?.message === 'Success.'){
        this.forms[index].markAsPristine({onlySelf: true});
      }     
    },  
    err => {
      console.log(err);
    });
  }

}

interface WFRolePermission extends BasePermissions{
  RoleName: string;
  DelApp: PermissionValue;
  InlineEditPermission: PermissionValue;
}

interface PermissionsData extends BasePermissions {
  ROLEID: number;
  DISPNAME: string;
  DELETEAPPLICATION: PermissionValue;
  InLnEditPermission: 0;
}

interface BasePermissions {
  BulkUploadPermission: PermissionValue;
  BulkUpdatePermission: PermissionValue;
  BulkTriggerPermission: PermissionValue;
  CopyRecordPermission: PermissionValue;
  NewEntryPermission: PermissionValue;
  ExcelPermission: 1;
  PDFPermission: PermissionValue;
  NotesPermission: PermissionValue;
  NotificationPermission: PermissionValue;
  ActivityLogPermission: PermissionValue;
  ChangeLogPermission: PermissionValue;
  ManageDDLPermission:PermissionValue;
}

type PermissionValue = 0 | 1 | boolean;