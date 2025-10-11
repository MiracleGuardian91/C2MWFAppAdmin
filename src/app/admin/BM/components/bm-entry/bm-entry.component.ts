import { Component, OnInit } from '@angular/core';

import { Validators, ReactiveFormsModule } from '@angular/forms';

import { UntypedFormBuilder } from '@angular/forms';
import { UntypedFormGroup } from '@angular/forms';
import { BmService } from '@app/admin/core/services/bm.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-bm-entry',
    templateUrl: './bm-entry.component.html',
    styleUrls: ['./bm-entry.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, NgClass, NgFor, CdkDropList, CdkDrag]
})
export class BmEntryComponent implements OnInit {

  submitted: boolean = false;
  processName: string;
  dataList:any;
  bmid:any;
  isEdit:boolean=false;
  currentMode: any;
  error: string='';
  BMSaveUpdateForm: UntypedFormGroup;
  BMOGList: [];
  BMOGFilterList = [];
  GridBMOGFilter:any = {};


  constructor(
    readonly fb: UntypedFormBuilder,
    readonly bmService: BmService,
    readonly activeModal: NgbActiveModal,
    ) { }

    ngOnInit() {
      this.processName = sessionStorage.getItem('AppName');
      this.BMSaveUpdateForm = this.fb.group({
        workflowId: [0],
        name: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.maxLength(25)]],  
        displayName: [null, Validators.required],
        processName: [this.processName, Validators.required],
        description: [null],
        version: ['1.0'],
        mode: ['Edit'],
        IntegrateWorkspace: ['No'],
        Bmogs: ['0'],
        Status: [1]
      });
     
    ['processName', 'version', 'mode', ...(this.isEdit ? ['name'] : []) ]
    .forEach(ctrl => this.BMSaveUpdateForm.get(ctrl)?.disable());

      this.initState();
      this.submitted = false;
    }
    
    get f() {
      return this.BMSaveUpdateForm.controls;
    }

  onSubmit() {     
    let bmogSelected='';
    this.submitted = true;
    if (this.BMSaveUpdateForm.invalid) {
      return;
    }
    this.BMOGFilterList.forEach(el => {
      bmogSelected = bmogSelected + el.bmoGroupID + ',';
    });
    this.BMSaveUpdateForm.get('Bmogs').patchValue(bmogSelected);
    this.bmService.AddUpdateBM(this.BMSaveUpdateForm.getRawValue()).subscribe(res=>{
      if(res > 0){
        this.activeModal.close(true);
        return true;
      }
      this.submitted = false;      
    }, error => { console.log(error); });
  }

  initState(){    
    if(this.isEdit === true){            
      this.BMSaveUpdateForm.get('workflowId').patchValue('0');
      this.BMSaveUpdateForm.get('name').patchValue(this.dataList?.nam || this.dataList?.NAM);
      this.BMSaveUpdateForm.get('name').disable();
      this.BMSaveUpdateForm.get('displayName').patchValue(this.dataList?.DISPNAME);
      this.BMSaveUpdateForm.get('processName').patchValue(this.processName);
      this.BMSaveUpdateForm.get('description').patchValue(this.dataList?.des || this.dataList?.DES);
      this.BMSaveUpdateForm.get('version').patchValue(this.dataList?.Ver || this.dataList?.VER);
      this.BMSaveUpdateForm.get('mode').patchValue(this.dataList?.MOD);
      this.BMSaveUpdateForm.get('IntegrateWorkspace').patchValue(this.dataList?.PRNTID === ''?'No':'Yes' );
      let Bmid = this.dataList?.BMID;
      if (Number.isInteger(Bmid) || Bmid === null || Bmid === undefined) {
        Bmid = this.bmid;
      }
      this.getBmog(Bmid);
      this.currentMode = this.dataList?.MOD;
    }else{      
    this.BMSaveUpdateForm.get('processName').setValue(this.processName);
    this.isEdit = false;
    this.BMSaveUpdateForm.get('name').enable();
    this.BMSaveUpdateForm.get('workflowId').patchValue(0);
    }
  }
  getBmog(bmid: any) {
    this.bmService.GetBMService(bmid).subscribe({
      next: (res) => {
        if (res) {
          this.BMOGList = res.avilableBmog;
          this.BMOGFilterList = res.selectedBmog;
          this.BMOGFilterList.forEach(element => {
            this.BMOGList.forEach(el => {
              if (element.bmoGroupID === el['bmoGroupID']) {
                this.GridBMOGFilter[el['bmoGroupID']] = '1';
              }
            });
          });
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  AddBmogFilter(bmog) {
    if (this.GridBMOGFilter[bmog.bmoGroupID] === undefined) {
      this.GridBMOGFilter[bmog.bmoGroupID] = '1';
      this.BMOGFilterList.push(bmog);
    }
  }
  DeleteBmogFilter(bmog) {
    const bmogData = this.BMOGFilterList.indexOf(bmog);
    if (bmogData > -1) {
      this.BMOGFilterList.splice(bmogData, 1);
    }
    delete this.GridBMOGFilter[bmog.bmoGroupID];
  }
 
}
