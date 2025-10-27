import {
  SharedModule,
  require_crypto_js
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  AuthenticationService,
  MessageService,
  UserDetail
} from "./chunk-43FCU5DY.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgbModal,
  ReactiveFormsModule,
  ToastrService,
  UntypedFormBuilder,
  Validators,
  environment,
  ɵNgNoValidate
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  BehaviorSubject,
  DOCUMENT,
  HttpClient,
  HttpHeaders,
  NgClass,
  NgIf,
  Router,
  RouterModule,
  Title,
  provideHttpClient,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/modules/auth/pages/login/login.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function LoginComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Invalid username format");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, LoginComponent_div_9_div_1_Template, 2, 0, "div", 11)(2, LoginComponent_div_9_div_2_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.username.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.username.errors.pattern);
  }
}
function LoginComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password must be at least 8 characters long");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 11)(2, LoginComponent_div_14_div_2_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.minlength);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(formBuilder, route, router, authenticationService, titleService, activeModal, toastr) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.titleService = titleService;
    this.activeModal = activeModal;
    this.toastr = toastr;
    this.loading = false;
    this.submitted = false;
    if (localStorage.getItem("AccessToken")) {
      this.authenticationService.logout();
    }
  }
  ngOnInit() {
    this.setDocTitle("");
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return false;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe((data) => {
      if (data === true) {
        if (this.returnUrl !== "/") {
          const arr = this.returnUrl.split("/");
          switch (arr[1]) {
            case "process_control":
              switch (arr[2]) {
                case "LMKESaleyardListings":
                case "LMKCRMEContractsRecords":
                  sessionStorage.AppName = "LMKOpportunities";
                  break;
                default:
                  sessionStorage.AppName = arr[2];
              }
              break;
            case "sales":
              sessionStorage.AppName = "LMKLivestockSales";
              break;
            case "announcement":
              sessionStorage.AppName = "Announcement";
              break;
            case "e-saleyard":
              sessionStorage.AppName = "LMKESaleyardUsers";
              break;
            case "content_manager":
              sessionStorage.AppName = "LMKESaleyardContentManager";
              break;
          }
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.router.navigate(["/admin/wf-app-list"]);
        }
        this.loading = false;
      } else {
        this.loading = false;
      }
    }, (error) => {
      console.log(error);
      this.loading = false;
      throw error;
    });
  }
  setDocTitle(title) {
    this.titleService.setTitle("C2M IoT Cloud Login- Fully Managed IoT Services from C2M");
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 10, consts: [[1, "container", "mt-3"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["id", "username", "type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback password-error", 4, "ngIf"], [1, "btn", "btn-primary", "text-white", "login-btn", 3, "disabled"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "password-error"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "hr");
        \u0275\u0275elementStart(4, "form", 1);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(5, "div", 2)(6, "label", 3);
        \u0275\u0275text(7, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275template(9, LoginComponent_div_9_Template, 3, 2, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 2)(11, "label", 6);
        \u0275\u0275text(12, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, LoginComponent_div_14_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 2)(16, "button", 9);
        \u0275\u0275text(17, "Login");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, ctx.submitted && ctx.f.username.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f.username.errors);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, ctx.submitted && ctx.f.password.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f.password.errors);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgIf], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 5% auto !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #D96347;\n  border-color: #D96347;\n}\n.password[_ngcontent-%COMP%] {\n  color: #D96347;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\modules\\auth\\pages\\login\\login.component.ts", lineNumber: 18 });
})();

// src/app/modules/auth/pages/reset-pwd/reset-pwd.component.ts
var CryptoJS = __toESM(require_crypto_js());

// src/app/core/services/email.service.ts
var EmailService = class _EmailService {
  //private _urlmailpwd = `${environment.Setting.lmkwebrooturl}/user/mailLogNotification`;
  constructor(http, document) {
    this.http = http;
    this.document = document;
    this._url = "";
  }
  sendEmail(type, user, data) {
    let TradingName = "";
    let MailKey;
    if (type === "Account Suspended") {
      MailKey = "Account_Suspended";
    } else if (type === "Account Reactivated") {
      MailKey = "Account_Activated";
    } else if (type === "Nutrien Buyer Account Approved") {
      MailKey = "Account_Approved";
      TradingName = data.sapNumber + "~" + data.tradingName;
    } else if (type === "Password Updated") {
      MailKey = "Update_Password";
    }
    const email = {
      MailSubject: "",
      MailBody: "",
      MailFrom: "",
      MailTo: user.EmailAddress,
      MailKey,
      TradingName
    };
    if (type === "Password Updated") {
      const emailNuterien = {
        MailSubject: "",
        MailBody: "",
        MailFrom: "no-reply@email.plasmacomp.com",
        // MailFrom: 'E-Saleyard@landmark.com.au',
        MailTo: user.EmailAddress,
        MailKey,
        TradingName
      };
      return this.http.post(this._url, emailNuterien, this._setHeadersforpwd());
    }
    return this.http.post(this._url, email, this._setHeaders());
  }
  _setHeaders() {
    const accessToken = localStorage.getItem("AccessToken");
    return {
      headers: new HttpHeaders({ accessToken })
    };
  }
  _setHeadersforpwd() {
    let accessToken = "";
    if (!accessToken)
      accessToken = environment.Setting.AdminViewAccessToken;
    return {
      headers: new HttpHeaders({ accessToken })
    };
  }
  static {
    this.\u0275fac = function EmailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailService, factory: _EmailService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/auth/pages/reset-pwd/reset-pwd.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
function ResetPwdComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Reset code is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPwdComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ResetPwdComponent_div_15_div_1_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.resetCode.errors.required);
  }
}
function ResetPwdComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPwdComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Password should be at least 6 characters length ");
    \u0275\u0275elementEnd();
  }
}
function ResetPwdComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ResetPwdComponent_div_20_div_1_Template, 2, 0, "div", 19)(2, ResetPwdComponent_div_20_div_2_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.password.errors.minlength);
  }
}
function ResetPwdComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Confirm password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPwdComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function ResetPwdComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ResetPwdComponent_div_25_div_1_Template, 2, 0, "div", 19)(2, ResetPwdComponent_div_25_div_2_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.confirmPassword.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.confirmPassword.errors.passwordsNotMatch);
  }
}
var ResetPwdComponent = class _ResetPwdComponent {
  constructor(formBuilder, auth, msg, emailService, router_activate, router) {
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.msg = msg;
    this.emailService = emailService;
    this.router_activate = router_activate;
    this.router = router;
    this.submitted = false;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      resetCode: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, confirmPassword]]
    });
    this.isLinkExpire();
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  isLinkExpire() {
    try {
      if (!this.router_activate.snapshot.queryParamMap.get("ids")) {
        this.msg.showMessage("Warning", { body: `Can't complete this request` });
        this.router.navigateByUrl("/auth/login");
        return true;
      }
      var decrypted = CryptoJS.AES.decrypt(decodeURIComponent(this.router_activate.snapshot.queryParamMap.get("ids")), environment.Setting.secretCode);
      const minutes = diff_minutes((/* @__PURE__ */ new Date()).toUTCString(), decrypted.toString(CryptoJS.enc.Utf8));
      if (!(minutes <= 10)) {
        this.msg.showMessage("Warning", { body: `Your activation link has been expired.` });
        this.router.navigateByUrl("/auth/login");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      this.msg.showMessage("Warning", { body: `Can't complete this request ` });
      this.router.navigateByUrl("/auth/login");
      return true;
    }
  }
  resetPassword() {
    return __async(this, null, function* () {
      this.submitted = true;
      return;
    });
  }
  static {
    this.\u0275fac = function ResetPwdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPwdComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(EmailService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPwdComponent, selectors: [["app-reset-pwd"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 13, consts: [["role", "main", 1, "container", "mt-3"], [1, "whiteBgSection", 2, "margin", "0px"], [1, "smallCenteredContainer"], [1, "FR25"], [3, "ngSubmit", "formGroup"], [1, "whiteBgSection"], [1, "padding-m"], [1, "p-large"], [1, "form-group"], ["for", ""], ["formControlName", "resetCode", "id", "", "placeholder", "", "type", "text", "autocomplete", "new-code", 1, "span12", "form-control", "col-sm-8", 3, "ngClass"], ["class", "invalid-feedback password-error", 4, "ngIf"], ["formControlName", "password", "id", "", "placeholder", "", "type", "password", "autocomplete", "new-password", 1, "span12", "form-control", "col-sm-8", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "confirmPassword", "id", "", "placeholder", "", "type", "password", "autocomplete", "new-password", 1, "span12", "form-control", "col-sm-8", 3, "ngClass"], [1, "padding-xxs"], ["type", "submit", 1, "btn", "btn-primary", "login-btn"], ["type", "button", "onClick", "window.location.href='javascript:history.back()'", 1, "btn", "btn-clear", "btn-large"], [1, "invalid-feedback", "password-error"], [4, "ngIf"], [1, "invalid-feedback"]], template: function ResetPwdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        \u0275\u0275text(4, "Reset Password");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "form", 4);
        \u0275\u0275listener("ngSubmit", function ResetPwdComponent_Template_form_ngSubmit_5_listener() {
          return ctx.resetPassword();
        });
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 2);
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, " Please enter the reset code you received and select a new password. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
        \u0275\u0275text(13, "Reset Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275template(15, ResetPwdComponent_div_15_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
        \u0275\u0275text(18, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 12);
        \u0275\u0275template(20, ResetPwdComponent_div_20_Template, 3, 2, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8)(22, "label", 9);
        \u0275\u0275text(23, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 14);
        \u0275\u0275template(25, ResetPwdComponent_div_25_Template, 3, 2, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "div", 15);
        \u0275\u0275elementStart(27, "div", 8)(28, "button", 16);
        \u0275\u0275text(29, "Continue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 17);
        \u0275\u0275text(31, " Cancel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(32, "div", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx.submitted && ctx.f.resetCode.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f.resetCode.errors);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c02, ctx.submitted && ctx.f.password.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f.password.errors);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c02, ctx.submitted && ctx.f.confirmPassword.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgIf], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: 5% auto !important;\n}\n/*# sourceMappingURL=reset-pwd.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPwdComponent, { className: "ResetPwdComponent", filePath: "src\\app\\modules\\auth\\pages\\reset-pwd\\reset-pwd.component.ts", lineNumber: 18 });
})();
function diff_minutes(dt2, dt1) {
  dt2 = new Date(dt2);
  dt1 = new Date(dt1);
  var diff = (dt2.getTime() - dt1.getTime()) / 1e3;
  diff /= 60;
  return Math.abs(Math.round(diff));
}
function confirmPassword(control) {
  if (!control.parent || !control) {
    return;
  }
  const password = control.parent.get("password");
  const passwordConfirm = control.parent.get("confirmPassword");
  if (!password || !passwordConfirm) {
    return;
  }
  if (passwordConfirm.value === "") {
    return;
  }
  if (password.value !== passwordConfirm.value) {
    return {
      passwordsNotMatch: true
    };
  }
}

// src/app/gateway-page/gateway-page.component.ts
var GatewayPageComponent = class _GatewayPageComponent {
  constructor(routes2, route) {
    this.routes = routes2;
    this.route = route;
    const AccessToken = localStorage.getItem("AccessToken");
    if (AccessToken) {
      const aToken = AccessToken.split(".");
      const userDetail = atob(aToken[1]);
      this.currentUserSubject = new BehaviorSubject(JSON.parse(userDetail));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var samlId = this.route.snapshot.queryParamMap.get("samlid");
    });
  }
  goToLogin() {
    this.routes.navigate(["/auth/login"]);
  }
  gotoUnAuthorize() {
    this.routes.navigate(["/unauthorized"]);
  }
  getSamlResponse(data) {
    if (data == true) {
      this.routes.navigate(["/app_list"]);
    } else {
      this.gotoUnAuthorize();
      localStorage.clear();
      sessionStorage.clear();
    }
  }
  static {
    this.\u0275fac = function GatewayPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GatewayPageComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GatewayPageComponent, selectors: [["app-gateway-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "img-container"], ["src", "../../assets/styles/images/giphy.gif"]], template: function GatewayPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Loading... ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 1);
        \u0275\u0275elementEnd();
      }
    }, styles: ["\n\n.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin: 100px 10px 100px 10px;\n}\n/*# sourceMappingURL=gateway-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GatewayPageComponent, { className: "GatewayPageComponent", filePath: "src\\app\\gateway-page\\gateway-page.component.ts", lineNumber: 14 });
})();

// src/app/modules/auth/pages/error/error.component.ts
var ErrorComponent = class _ErrorComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorComponent, selectors: [["app-error"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "not-found"], [1, "p-sm-5", "p-2"], [1, "text-stroke", "text-transparent"]], template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "401");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h4");
        \u0275\u0275text(5, "Unauthorized Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "You have attempted to access a page for which you are not authorized.");
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.not-found[_ngcontent-%COMP%] {\n  height: calc(100vh - 170px);\n  background-image: url(/assets/styles/images/bg1.jpg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=error.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorComponent, { className: "ErrorComponent", filePath: "src\\app\\modules\\auth\\pages\\error\\error.component.ts", lineNumber: 9 });
})();

// src/app/modules/auth/pages/activate-account/activate-account.component.ts
var ActivateAccountComponent = class _ActivateAccountComponent {
  constructor(router_activate, registeruser, toastr, router) {
    this.router_activate = router_activate;
    this.registeruser = registeruser;
    this.toastr = toastr;
    this.router = router;
  }
  ngOnInit() {
    if (this.router_activate.snapshot.queryParamMap.get("email") && this.router_activate.snapshot.queryParamMap.get("unlockcode")) {
      const email = this.router_activate.snapshot.queryParamMap.get("email");
      const code = this.router_activate.snapshot.queryParamMap.get("unlockcode");
      const URL = "/User/UnlockAccount?username=" + email + "&unlockcode=" + code;
    } else {
      this.gotologin();
    }
  }
  gotologin() {
    this.router.navigateByUrl("/auth/login");
  }
  static {
    this.\u0275fac = function ActivateAccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivateAccountComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivateAccountComponent, selectors: [["app-activate-account"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "img-container"], ["src", "../../../../../assets/styles/images/giphy.gif"]], template: function ActivateAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Loading... ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 1);
        \u0275\u0275elementEnd();
      }
    }, styles: ["\n\n.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin: 100px 10px 100px 10px;\n}\n/*# sourceMappingURL=activate-account.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivateAccountComponent, { className: "ActivateAccountComponent", filePath: "src\\app\\modules\\auth\\pages\\activate-account\\activate-account.component.ts", lineNumber: 12 });
})();

// src/app/modules/auth/pages/gate-way/gate-way.component.ts
var GateWayComponent = class _GateWayComponent {
  constructor(route, authService, user, router, msg) {
    this.route = route;
    this.authService = authService;
    this.user = user;
    this.router = router;
    this.msg = msg;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.getwayId = params.returnId;
      this.GetGatewayLogData(this.getwayId);
    });
  }
  GetGatewayLogData(Id) {
    this.authService.getGetwayDetails(Id).subscribe((data) => {
      if (data && data.accessToken) {
        const aToken = data.accessToken.split(".");
        const userDetail = JSON.parse(atob(aToken[1]));
        const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
        const currentUser = JSON.parse(userDetail.User);
        currentUser.TimeZone = offset;
        userDetail.User = JSON.stringify(currentUser);
        localStorage.setItem("AccessToken", data.accessToken);
        localStorage.setItem("loginType", "normalUser");
        sessionStorage.setItem("processName", data.Result.AppName);
        sessionStorage.setItem("AppName", data.Result.AppName);
        sessionStorage.setItem("DisplayName", data.Result.DisplayName);
        switch (data.Result.AppName) {
          case "Announcement":
            this.router.navigate(["/announcement"]);
            break;
          case "QuickMind":
            this.router.navigate(["/quickmindlist"]);
            break;
          default:
            if (data.Result.Type === "bm") {
              this.router.navigate(["/admin/bm"]);
            } else {
              this.router.navigate(["/admin/wf"]);
            }
        }
      }
    }, (error) => {
      this.router.navigate(["/auth/login"]);
    });
  }
  static {
    this.\u0275fac = function GateWayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GateWayComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(UserDetail), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GateWayComponent, selectors: [["app-gate-way"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 0, vars: 0, template: function GateWayComponent_Template(rf, ctx) {
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GateWayComponent, { className: "GateWayComponent", filePath: "src\\app\\modules\\auth\\pages\\gate-way\\gate-way.component.ts", lineNumber: 12 });
})();

// src/app/modules/auth/auth-routing.module.ts
var routes = [
  //{ path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "reset-password", component: ResetPwdComponent },
  { path: "gateway", component: GatewayPageComponent, pathMatch: "full" },
  { path: "error", component: ErrorComponent },
  { path: "activate-account", component: ActivateAccountComponent },
  { path: "Gateway", component: GateWayComponent, pathMatch: "full" }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [provideHttpClient(withInterceptorsFromDi())], imports: [
      SharedModule,
      AuthRoutingModule,
      LoginComponent,
      ResetPwdComponent
    ] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-ZU5PYMGR.js.map
