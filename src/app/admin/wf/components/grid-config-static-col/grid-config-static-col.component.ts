import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-grid-config-static-col',
    templateUrl: './grid-config-static-col.component.html',
    styleUrls: ['./grid-config-static-col.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, ReactiveFormsModule, FormsModule]
})
export class GridConfigStaticColComponent implements OnInit {
  isRoleSubmit = false;
  isEdit = false;
  ProcessName:any;
  availableColList = [];
  associatedColList:any;

  gridColList = [];
  IsDisabled=true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    public activeModal: NgbActiveModal, 
    private wfsrvc: WFService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    this.GetGridConfigStaticCol();

  }

  GetGridConfigStaticCol(){      
    this.wfsrvc.GetGridConfigStaticCol(this.ProcessName).subscribe(res => {
      if (!!res) {    
        //console.log("here is result", res)    
        this.gridColList = [];       
        this.gridColList = res;       
       }
    },error=>{
      console.log(error);
      this.toastr.warning(error.error || 'Unknown error');
    });
  }

  SaveGridConfigStaticCol(){ 

    // let selectedColNames =  this.gridColList.filter(x=>x.IsSelected==true).map(s => s.ColName).toString();

    this.wfsrvc.SaveGridConfigStaticCol(this.ProcessName,this.gridColList).subscribe(result => {    
       if (result === 'Success'|| result.message === 'Success') {
        this.toastr.success('Saved successfully.'); 
      }
    }, error => { console.log(error) });
  }

  CheckValidation(){
    let arrEmpty =  this.gridColList.filter(x=>x.DisplayName.trim()=='');

    if(arrEmpty.length>0){
      this.IsDisabled=true;
    }
    else
    {
      this.IsDisabled=false;
    }
    return this.IsDisabled
  }

}
