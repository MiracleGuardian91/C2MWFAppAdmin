import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@app/core';
// import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '@app/core/services/message.service';
import { environment } from '@env/environment';
import { EmailService } from '@app/core/services/email.service';
import * as CryptoJS from 'crypto-js';
import { NgClass, NgIf } from '@angular/common';
@Component({
    selector: 'app-reset-pwd',
    templateUrl: './reset-pwd.component.html',
    styleUrls: ['./reset-pwd.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgClass, NgIf]
})
export class ResetPwdComponent implements OnInit {
  form: UntypedFormGroup;
  submitted = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private auth: AuthenticationService,
    private msg: MessageService,
    private emailService: EmailService,
    private router_activate: ActivatedRoute,
    private router: Router,
    
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group({
      resetCode: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, confirmPassword]]
    });    
      this.isLinkExpire();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

 isLinkExpire(){
  try{
    if(!this.router_activate.snapshot.queryParamMap.get('ids')){
      this.msg.showMessage('Warning', {body: `Can't complete this request`})
      this.router.navigateByUrl('/auth/login');
     return true;
    }
   //this.router_activate.snapshot.queryParamMap.get('ids');
   var decrypted = CryptoJS.AES.decrypt(decodeURIComponent(this.router_activate.snapshot.queryParamMap.get('ids')), environment.Setting.secretCode);
   const minutes=diff_minutes(((new Date()).toUTCString()),(decrypted.toString(CryptoJS.enc.Utf8)))
   if(!(minutes<=10)){
    this.msg.showMessage('Warning', {body: `Your activation link has been expired.`})
    this.router.navigateByUrl('/auth/login');
    return true;
   }
  else{
    return false;
  }}
   catch(err){
    this.msg.showMessage('Warning', {body: `Can't complete this request `})
    this.router.navigateByUrl('/auth/login');
    return true;
   }
}
  async resetPassword() {
    
    this.submitted = true;
    return;
  }
  
}

function Encryption(text) {
    var key = CryptoJS.enc.Utf8.parse('lmkkeyasdfghjklq');
    var iv = CryptoJS.enc.Utf8.parse('lmkkeyasdfghjklq');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();
}

function diff_minutes(dt2, dt1) 
 {
  dt2=new Date(dt2);
  dt1=new Date(dt1);
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
 }

function confirmPassword(control: AbstractControl): any {
  if (!control.parent || !control) {
    return;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('confirmPassword');

  if (!password || !passwordConfirm) {
    return;
  }

  if (passwordConfirm.value === '') {
    return;
  }

  if (password.value !== passwordConfirm.value) {
    return {
      passwordsNotMatch: true
    };
  }
}
