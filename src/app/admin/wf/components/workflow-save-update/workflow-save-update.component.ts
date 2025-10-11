import { Component, OnInit } from '@angular/core';
import { RequiredValidator, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UntypedFormArray } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { UntypedFormGroup } from '@angular/forms';
import { MessageService } from '@app/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { values } from 'lodash';
import { WFService } from '../../../core/services/wfservice.service';
import { NgIf, NgClass, NgFor } from '@angular/common';
@Component({
    selector: 'app-workflow-save-update',
    templateUrl: './workflow-save-update.component.html',
    styleUrls: ['./workflow-save-update.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, NgClass, NgFor]
})
export class WorkflowSaveUpdateComponent implements OnInit {
  submitted: boolean = false;
  processName: string;
  dataList:any;
  isEdit:boolean=false;
  currentMode: any;
  stageList: any;
  private formBuilder: UntypedFormBuilder;
  error: string='';
  currState: any;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: UntypedFormBuilder,
    private wfsrvc: WFService,
    private msg: MessageService,
  ) { }
  WFSaveUpdateForm: UntypedFormGroup;
  ngOnInit() {
    this.processName = sessionStorage.getItem('AppName');
    this.WFSaveUpdateForm = this.fb.group({
      WFID: [0],
      Name: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$'), Validators.maxLength(25)]],  
      FriendlyName: [null, Validators.required],
      ShortDesc: [null, Validators.required],
      ProcessName: [null, Validators.required],
      EmailFrom: [null, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$')]],
      OBEMailSublect: [null],
      LongDesc: [null],
      Version: [null],
      Mode: [null]
    });
  
     ['ProcessName', 'Version', 'Mode', ...(this.isEdit ? ['Name'] : []) ]
     .forEach(ctrl => this.WFSaveUpdateForm.get(ctrl)?.disable());

    this.submitted = false;
    this.initState();
  }
  
  get f() {
    return this.WFSaveUpdateForm.controls;
  }  
  
  initState(){    
    if(this.isEdit === true){      
      this.WFSaveUpdateForm.get('WFID').patchValue(this.dataList?.WFID);
      this.WFSaveUpdateForm.get('Name').patchValue(this.dataList?.nam);
      this.WFSaveUpdateForm.get('Name').disable()
      this.WFSaveUpdateForm.get('FriendlyName').patchValue(this.dataList?.DISPNAME);
      this.WFSaveUpdateForm.get('ShortDesc').patchValue(this.dataList?.SHRTDES);
      this.WFSaveUpdateForm.get('ProcessName').patchValue(this.processName);
      this.WFSaveUpdateForm.get('EmailFrom').patchValue(this.dataList?.FromEmail);
      this.WFSaveUpdateForm.get('OBEMailSublect').patchValue(this.dataList?.OBEEmailSubject);
      this.WFSaveUpdateForm.get('LongDesc').patchValue(this.dataList?.LNGDES);
      this.WFSaveUpdateForm.get('Version').patchValue(this.dataList?.Ver);
      this.WFSaveUpdateForm.get('Mode').patchValue(this.dataList?.MOD);
      this.getStagePercentage(this.dataList?.WFID);
      this.currentMode = this.WFSaveUpdateForm.get('Mode').value;
    }else{      
    this.WFSaveUpdateForm.get('ProcessName').setValue(this.processName);
    this.isEdit = false;
    this.WFSaveUpdateForm.get('Name').enable();
    this.WFSaveUpdateForm.get('WFID').patchValue(0);
    }
  }

   onSubmit() {     
    this.submitted = true;
    if (this.WFSaveUpdateForm.invalid) {
      return;
    }
    this.wfsrvc.AddUpdateWorkflow(this.WFSaveUpdateForm.getRawValue()).subscribe(res=>{
      if(!this.isEdit && res === 'Data Saved Succesfully' || res?.message === 'Data Saved Succesfully'){
        this.activeModal.close(true);
        return true;
      }
      if(this.isEdit && res === 'Data successfully updated.' ||res.message === 'Data successfully updated.'){
        this.activeModal.close(true);
        return true;
      }
      if (typeof res === 'string' || typeof res === 'object')
      this.msg.showMessage('Warning', {body: res.message});
      this.submitted = false;      
    }, error => { console.log(error); });
  }

  getStagePercentage(wfid:any){
    this.WFSaveUpdateForm.addControl('StatePercentage', new UntypedFormArray([]));    
    this.wfsrvc.GetWFStagePercentages(wfid).subscribe(res=>{      
      if(!!res){
        this.stageList = res.data;
        for (const item of this.stageList) {
          (this.WFSaveUpdateForm.get('StatePercentage') as UntypedFormArray).push(this.fb.group({
            StateName: [item.StateName],
            WfosId: [item.WfosId],
            Percentage: [item.Percentage],
            IsEndState: [item.IsEndState],
            FriendlyName: [item.FriendlyName]
          }));
        }
      }    
    }, error => { console.log(error); });
  } 

  ValidateStatgePercent(item:any,event:any,index){            
    let specialKeys: Array<string> = ['Tab', 'End', 'Home', 'Del', 'Delete'];
    if (specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const control = this.WFSaveUpdateForm.get('StatePercentage') as UntypedFormArray;
    let val = event.target.value;
    const regex = '^[0-9]*$';
    if (!val.match(regex)) {
      event.preventDefault();
    } 
    if(val > 100){
      this.error='Maximum percentage can be 100.';
      this.currState = index;
      event.preventDefault();
    }else{
      this.error='';
      this.currState = -1;
    }   
    const value = control.controls[index].value ; 
    control.removeAt(index);    
    const newctrl = this.fb.group({
      StateName: [value.StateName],
      WfosId: [value.WfosId],
      Percentage: [this.error !== '' ? '0' : val],
      IsEndState: [value.IsEndState],
      FriendlyName: [value.FriendlyName]
    });
    control.insert(index,newctrl);
  }
}
