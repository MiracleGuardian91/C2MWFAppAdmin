import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { NgSelectComponent, NgOptionComponent } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-live-version',
    templateUrl: './live-version.component.html',
    styleUrls: ['./live-version.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, NgFor, NgClass, NgSelectComponent, NgOptionComponent]
})
export class LiveVersionComponent implements OnInit {
  WFBMForm: UntypedFormGroup;
  isWFBMSubmit = false;
  isEdit = false;
  WFID:any;
  WFName:any;
  processName: string;
  availableWFList:any;
  associatedWFList:any;
  BMList:any;
  isDeleted: boolean=false;
  constructor(private formBuilder: UntypedFormBuilder,
    public activeModal: NgbActiveModal, private wfsrvc: WFService,readonly toster: ToastrService) { }

    get f() {
      return this.WFBMForm.controls;
    }

  ngOnInit() {
    this.WFBMForm = this.formBuilder.group({
      Workflow: ['', Validators.required],
      BM: ['', Validators.required]
    });
    this.processName = sessionStorage.getItem('AppName');   
    this.GetLiveEnvironmentWF();
  }
  AddWfBMPair(){        
    this.isWFBMSubmit = true;
    if (this.WFBMForm.invalid) {
      return;
    }
    this.isDeleted = false;
    const wfid = this.WFBMForm.get('Workflow').value;
    const bmid = this.WFBMForm.get('BM').value;
    if(wfid === '' || bmid === ''){
      this.isWFBMSubmit = true;
      return;
    }
    this.wfsrvc.AddWfBMPair(wfid, bmid).subscribe({
      next: (result) => {
        if (result === 'Action successfully executed.'|| result.message === 'Action successfully executed.') {
          this.WFBMForm.get('Workflow')?.patchValue('');
          this.WFBMForm.get('BM')?.patchValue('');
          this.GetLiveEnvironmentWF(); 
          this.isWFBMSubmit = false;         
        }
      },
      error: (error) => {
        this.toster.warning('Association already exists');
      }
    });

  }

  GetLiveEnvironmentWF() {            
    this.wfsrvc.GetLiveEnvironmentWF(this.processName).subscribe({
      next: (res) => {
        if (!!res) {                
          this.availableWFList = res.AvaialableWF;        
          this.associatedWFList = res.AssociatedWF;
          this.BMList = res.AllBm;                   
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

GetLiveEnvironmentBM(event: any) {       
  const wfid = event;   
  if (!!wfid) {
    this.wfsrvc.GetLiveEnvirmentBM(this.processName, wfid).subscribe({
      next: (res) => {
        if (!!res) {                  
          this.BMList = res;                           
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }      
}

  ChangeZone(role:any){    
    this.wfsrvc.ChangeWfBMZone(role.AssociatedId,this.processName).subscribe(res => {
      if (!!res && res==='Action successfully executed.' || res.message === 'Action successfully executed.') {  
        this.isDeleted = true;
        this.GetLiveEnvironmentWF();
      }
    },error=>{console.log(error)});
  }


  deleteAssociation(wflst: any) {
  this.wfsrvc.DeleteBmWfAssociation(wflst.AssociatedId).subscribe({
    next: (res) => {
      if (res) {
        this.isDeleted = true;
        this.GetLiveEnvironmentWF();
      }
    },
    error: (err) => {
      console.error(err);
    }
  });
}


}

