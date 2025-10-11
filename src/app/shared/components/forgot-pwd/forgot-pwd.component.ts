import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@app/core';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '@app/core/services/message.service';
import { environment } from '@env/environment';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import * as CryptoJS from 'crypto-js';

@Component({
    selector: 'app-forgot-pwd',
    templateUrl: './forgot-pwd.component.html',
    styleUrls: ['./forgot-pwd.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgClass, NgIf]
})
export class ForgotPwdComponent implements OnInit {
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
    @Inject(DOCUMENT) private document
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  async sendResetCode() {
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
