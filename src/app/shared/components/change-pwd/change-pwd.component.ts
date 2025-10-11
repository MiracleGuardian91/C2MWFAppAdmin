import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@app/core';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '@app/core/services/message.service';
import { environment } from '@env/environment';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-change-pwd',
    templateUrl: './change-pwd.component.html',
    styleUrls: ['./change-pwd.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgClass, NgIf]
})
export class ChangePwdComponent implements OnInit {
  form: UntypedFormGroup;
  submitted = false;
  userFirstname:any;
  data:any;
  constructor(
    private formBuilder: UntypedFormBuilder,
    // private api: ApiService,
    private auth: AuthenticationService,
    private msg: MessageService,
    // private toastr: ToastrService,
    private router: Router,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldpwd: ['', [Validators.required,,Validators.minLength(8), Validators.pattern(environment.regex.password)]],
      newpwd:['',[Validators.required,Validators.minLength(8), Validators.pattern(environment.regex.password)]],
      confpwd:['',[Validators.required]],
    },
    {validators: MustMatch('newpwd', 'confpwd')}
    );
  }

  get formHasErrors() {
    return  (this.f.oldpwd.dirty && this.f.oldpwd.touched && this.f.oldpwd.errors) ||
            (this.f.newpwd.dirty && this.f.newpwd.touched && this.f.newpwd.errors) ||
            (this.f.confpwd.dirty && this.f.confpwd.touched && this.f.confpwd.errors) 
         
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  async changepassword() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    const emailforchangepwd =localStorage.getItem('emailforchangepwd');

    if (this.f.oldpwd.value!=this.f.newpwd.value) {
      this.activeModal.close(false);
      const passwordResponse = await this.auth.updatePassword(this.f.oldpwd.value,this.f.newpwd.value,emailforchangepwd);
      if (passwordResponse.status === 'SUCCESS') {
         
       // localStorage.removeItem('emailforchangepwd');
        this.msg.showMessage('Success', {body: passwordResponse.message});

      } else {
        this.msg.showMessage('Warning', {body: passwordResponse.message});
       // this.showAlert('warning', passwordResponse.message);
      }
    }
    
  }

}

function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: UntypedFormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }};
