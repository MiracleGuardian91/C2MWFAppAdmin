import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BmcompareService } from '@app/admin/core/services/bm-compare-service';
import { MessageService } from '@app/core';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss']
})
export class UserVerificationComponent implements OnInit {

  userForm: FormGroup;
  userCodeForm: FormGroup;
  submitted: any;
  isuserCodesubmitted: any;
  queryParams: any;
  constructor(private formBuilder: FormBuilder,
    private service: BmcompareService,
    private toastr: ToastrService,
    private msg: MessageService,
    private readonly router: Router, private readonly titleService: Title, private readonly route: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$')]]
    });

    this.userCodeForm = this.formBuilder.group({
      userCode: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`C2M | User Verification`);
    this.queryParams = this.route.snapshot.queryParams;
  }
  getUserCode() {
    this.submitted=true;
  
    if (this.userForm.valid) {
      this.service.getUserCode(this.userForm.controls['email'].value).subscribe(res=>{
        if(res && res!=null){
          this.msg.showMessage('Success', {body: res.message});
        //  this.toastr.success(res.message);
        }
      },err=>{
        console.log(err);
      })
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  GoToCompare(){
    this.isuserCodesubmitted=true;
    if (this.userCodeForm.valid) {
      this.service.validateUserCode(this.userCodeForm.controls['userCode'].value).subscribe(res => {
        if (!res) {
          this.msg.showMessage('Warning', { body: 'Incorrect user code, please enter a valid user code.' });
          //  this.toastr.warning("Incorrect user code, please enter a valid user code.");
        } else {

          sessionStorage.setItem("UserAuthenticationCode", this.userCodeForm.controls['userCode'].value);
          if (this.queryParams['type'] == 1)
            this.router.navigate(['/bmwfcompare/bmcompare']);
          else
            this.router.navigate(['/bmwfcompare/wfcompare']);
        }
      }, err => {
        console.log(err);
      })  
    } else {
      this.userCodeForm.markAllAsTouched();
    }
  }

}
