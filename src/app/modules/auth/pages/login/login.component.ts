import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {  AuthenticationService } from '@app/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPwdComponent } from '@app/shared/components/forgot-pwd/forgot-pwd.component';
import { ToastrService } from 'ngx-toastr';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgClass, NgIf]
})
export class LoginComponent implements OnInit {
    loginForm: UntypedFormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private titleService: Title,
        public activeModal: NgbModal,
        private toastr: ToastrService
    ) {
        if (localStorage.getItem('AccessToken')) {
             this.authenticationService.logout();
        }
    }

    ngOnInit() {
        this.setDocTitle('');
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return false;
        }

        this.loading = true;
        // this.authenticationService.isSamlUser(this.f.username.value).toPromise()
        //     .then(res => {
        //        if (res) {
        //             const currentUser = res.User;
        //             if (currentUser.IsGlobalUser) {
        //                 this.toastr.warning('Redirecting to SSO', '', {
        //                     timeOut: 4000, positionClass: 'toast-top-center'
        //                 });
        //                 setTimeout(() => {
        //                     this.router.navigate(['']);
        //                 }, 5000);
        //             }
                  //  else {
                        this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(
                            data => {
                                if (data === true) {
                                    if (this.returnUrl !== '/') {
                                        const arr = this.returnUrl.split('/');
                                        switch (arr[1]) {
                                            case 'process_control':
                                                switch (arr[2]) {
                                                    case 'LMKESaleyardListings':
                                                    case 'LMKCRMEContractsRecords':
                                                        sessionStorage.AppName = 'LMKOpportunities';
                                                        break;
                                                    default:
                                                        sessionStorage.AppName = arr[2];
                                                }
                                                break;
                                            case 'sales':
                                                sessionStorage.AppName = 'LMKLivestockSales';
                                                break;
                                            case 'announcement':
                                                sessionStorage.AppName = 'Announcement';
                                                break;
                                            case 'e-saleyard':
                                                sessionStorage.AppName = 'LMKESaleyardUsers';
                                                break;
                                            case 'content_manager':
                                                sessionStorage.AppName = 'LMKESaleyardContentManager';
                                                break;
                                        }
                                        this.router.navigateByUrl(this.returnUrl);
                                    } else {
                                        //this.router.navigate(['/app_list']);
                                        this.router.navigate(['/admin/wf-app-list']);
                                    }
                                    this.loading = false;
                                } else {
                                    this.loading = false;
                                }
                            },
                            error => {
                                console.log(error);
                                this.loading = false;
                                throw error;
                            });

                   // }
              // }
          // })

    }
    setDocTitle(title: string) {
        this.titleService.setTitle('C2M IoT Cloud Login- Fully Managed IoT Services from C2M');
     }


}
