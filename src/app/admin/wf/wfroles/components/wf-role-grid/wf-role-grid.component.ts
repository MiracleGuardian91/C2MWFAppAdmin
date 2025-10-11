import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { NgSelectComponent, NgOptionComponent } from '@ng-select/ng-select';
import { UtilService } from '@app/shared/services/util.service';

@Component({
    selector: 'app-wf-role-grid',
    templateUrl: './wf-role-grid.component.html',
    styleUrls: ['./wf-role-grid.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, NgSelectComponent, NgClass, NgOptionComponent, NgFor]
})
export class WfRoleGridComponent implements OnInit {
  WFRoleForm: UntypedFormGroup;
  isRoleSubmit = false;
  isEdit = false;
  WFID:any;
  associatedDataList:any;
  WFName:any;
  processName: string;
  availableRoleList = [];
  associatedRoleList:any;
  isDeleted: boolean=false;
  saveImageUrl = UtilService.getUrlForImage('/assets/images/save.svg');
  constructor(
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal, private wfsrvc: WFService) { }

    get f() {
      return this.WFRoleForm.controls;
    }

  ngOnInit() {
    this.WFRoleForm = this.formBuilder.group({
      Role: ['-1', Validators.required],
      Workflow: ['', Validators.required]

    });
    this.processName = sessionStorage.getItem('AppName');
    this.WFRoleForm.get('Workflow').patchValue(this.WFName);
    this.WFRoleForm.get('Workflow').disable();
    this.getWFRole();
  }
  AddNewRole(){    
    this.isRoleSubmit = true;
    if (this.WFRoleForm.invalid) {
      return;
    }
    this.isDeleted = false;
    const associatedId = this.isEdit === false ? '0' :'';
    const roleguid = this.WFRoleForm.get('Role').value;
    if(roleguid === '-1'){
      this.isRoleSubmit = true;
      return;
    }
    this.wfsrvc.SaveWFRoleAssociation(roleguid,this.WFID,associatedId).subscribe(result => {
      if (result === 'Action successfully executed.' || result.message === 'Action successfully executed.') {
        this.WFRoleForm.get('Role').patchValue('-1');
          this.getWFRole(); 
          this.isRoleSubmit = false;         
      }
    }, error => { console.log(error) });

  }
  getWFRole(){      
    this.wfsrvc.GetWFRoles(this.WFID).subscribe(res => {
      if (!!res) {    
        console.log("here is result", res)    
        this.availableRoleList = [];
        this.associatedDataList = [];
        console.log("he", res.WorkflowRole.AvailableRoles)
        this.availableRoleList =  res.WorkflowRole.AvailableRoles.filter((o1: { RoleGuid: any; }) => !res.WorkflowRole?.AssociatedRoles?.some((o2: { RoleGuid: any; }) => o1.RoleGuid === o2.RoleGuid));
        this.associatedDataList = res.WorkflowRole.AssociatedRoles;
        console.log("assocd data", this.associatedDataList )
       }
    },error=>{
      console.log(error);
    });
  }
  
 
  DeleteWFRole(role:any){
    this.wfsrvc.DeleteWFRoles(role.AssociatedId).subscribe(res => {
      if (!!res && res==='Action successfully executed.'|| res.message === 'Action successfully executed') {  
        this.toastr.success(res.message);
        this.isDeleted = true;
        this.getWFRole();
      }
      else{
        this.toastr.error(res.message);
        return false;
      }
    });
  }
}
