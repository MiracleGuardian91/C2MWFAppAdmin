import {
  WFService
} from "./chunk-U3QHRRQH.js";
import {
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgOptionComponent,
  NgSelectComponent,
  NgbActiveModal,
  ReactiveFormsModule,
  ToastrService,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-L2L6ECIJ.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZQT4GMOS.js";

// src/app/admin/LiveVersion/components/live-version/live-version.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
var _c1 = (a0) => ({ "addcss": a0 });
var _c2 = (a0, a1) => ({ "d-flex align-items-center justify-content-around": a0, "alignLiveAlignment": a1 });
function LiveVersionComponent_form_0_ng_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wf_r3 = ctx.$implicit;
    \u0275\u0275property("value", wf_r3.WorkflowId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", wf_r3.Workflowname, " ");
  }
}
function LiveVersionComponent_form_0_ng_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bm_r4 = ctx.$implicit;
    \u0275\u0275property("value", bm_r4.BmId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bm_r4.BmName, " ");
  }
}
function LiveVersionComponent_form_0_ng_container_44_tr_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 38);
    \u0275\u0275listener("click", function LiveVersionComponent_form_0_ng_container_44_tr_1_span_21_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const wflst_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteAssociation(wflst_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40);
    \u0275\u0275elementEnd()()();
  }
}
function LiveVersionComponent_form_0_ng_container_44_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td")(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 29)(14, "span")(15, "a", 32);
    \u0275\u0275listener("click", function LiveVersionComponent_form_0_ng_container_44_tr_1_Template_a_click_15_listener() {
      const wflst_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ChangeZone(wflst_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 33);
    \u0275\u0275element(17, "path", 34)(18, "path", 35)(19, "path", 36)(20, "path", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, LiveVersionComponent_form_0_ng_container_44_tr_1_span_21_Template, 4, 0, "span", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wflst_r6 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, wflst_r6.Status === "Live"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(wflst_r6.Workflowname);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(wflst_r6.BmName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(wflst_r6.DateCreated);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(wflst_r6.Status);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c2, wflst_r6.Status === "Live", wflst_r6.Status !== "Live"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", wflst_r6.Status !== "Live");
  }
}
function LiveVersionComponent_form_0_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LiveVersionComponent_form_0_ng_container_44_tr_1_Template, 22, 12, "tr", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.associatedWFList);
  }
}
function LiveVersionComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1)(1, "div")(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function LiveVersionComponent_form_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275element(6, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "section")(12, "table", 10)(13, "thead")(14, "tr", 11)(15, "th", 12)(16, "span");
    \u0275\u0275text(17, "Workflow");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "th", 12)(19, "span");
    \u0275\u0275text(20, "Business Model");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 13)(22, "span");
    \u0275\u0275text(23, "Date Created");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "th", 14)(25, "span");
    \u0275\u0275text(26, "Mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "th", 15)(28, "span");
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "tbody")(31, "tr", 11)(32, "td")(33, "ng-select", 16);
    \u0275\u0275template(34, LiveVersionComponent_form_0_ng_option_34_Template, 2, 2, "ng-option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td")(36, "ng-select", 18);
    \u0275\u0275template(37, LiveVersionComponent_form_0_ng_option_37_Template, 2, 2, "ng-option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "td", 19)(39, "td", 19);
    \u0275\u0275elementStart(40, "td", 20)(41, "a", 21);
    \u0275\u0275listener("click", function LiveVersionComponent_form_0_Template_a_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.AddWfBMPair());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 22);
    \u0275\u0275element(43, "path", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, LiveVersionComponent_form_0_ng_container_44_Template, 2, 1, "ng-container", 24);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div", 25)(46, "button", 26);
    \u0275\u0275listener("click", function LiveVersionComponent_form_0_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.WFBMForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Live Version (", ctx_r1.processName, ")");
    \u0275\u0275advance(29);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx_r1.isWFBMSubmit && !ctx_r1.f.Workflow.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableWFList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx_r1.isWFBMSubmit && !ctx_r1.f.BM.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.BMList);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.associatedWFList);
  }
}
var LiveVersionComponent = class _LiveVersionComponent {
  constructor(formBuilder, activeModal, wfsrvc, toster) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.wfsrvc = wfsrvc;
    this.toster = toster;
    this.isWFBMSubmit = false;
    this.isEdit = false;
    this.isDeleted = false;
  }
  get f() {
    return this.WFBMForm.controls;
  }
  ngOnInit() {
    this.WFBMForm = this.formBuilder.group({
      Workflow: ["", Validators.required],
      BM: ["", Validators.required]
    });
    this.processName = sessionStorage.getItem("AppName");
    this.GetLiveEnvironmentWF();
  }
  AddWfBMPair() {
    this.isWFBMSubmit = true;
    if (this.WFBMForm.invalid) {
      return;
    }
    this.isDeleted = false;
    const wfid = this.WFBMForm.get("Workflow").value;
    const bmid = this.WFBMForm.get("BM").value;
    if (wfid === "" || bmid === "") {
      this.isWFBMSubmit = true;
      return;
    }
    this.wfsrvc.AddWfBMPair(wfid, bmid).subscribe({
      next: (result) => {
        if (result === "Action successfully executed." || result.message === "Action successfully executed.") {
          this.WFBMForm.get("Workflow")?.patchValue("");
          this.WFBMForm.get("BM")?.patchValue("");
          this.GetLiveEnvironmentWF();
          this.isWFBMSubmit = false;
        }
      },
      error: (error) => {
        this.toster.warning("Association already exists");
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
  GetLiveEnvironmentBM(event) {
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
  ChangeZone(role) {
    this.wfsrvc.ChangeWfBMZone(role.AssociatedId, this.processName).subscribe((res) => {
      if (!!res && res === "Action successfully executed." || res.message === "Action successfully executed.") {
        this.isDeleted = true;
        this.GetLiveEnvironmentWF();
      }
    }, (error) => {
      console.log(error);
    });
  }
  deleteAssociation(wflst) {
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
  static {
    this.\u0275fac = function LiveVersionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveVersionComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveVersionComponent, selectors: [["app-live-version"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "modal-header"], [1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [1, "form-group", "row"], [1, "col-sm-12"], [1, "basicTable", "stripped", 2, "border-top", "0", "border-right", "0", "border-left", "0"], [1, "span-row"], [2, "width", "80px", "font-weight", "500", "font-size", "14px"], [2, "width", "54px", "font-weight", "500", "font-size", "14px"], [2, "width", "25px", "font-weight", "500", "font-size", "14px"], [1, "text-center", 2, "width", "37px", "font-weight", "500", "font-size", "14px"], ["formControlName", "Workflow", "placeholder", "Select...", 1, "form-control", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "BM", "placeholder", "Select...", 1, "form-control", 3, "ngClass"], [2, "width", "134px"], [1, "d-flex", "align-items-center", "justify-content-around"], ["href", "javascript:void(0)", "title", "Save", 2, "color", "#EB583B", "cursor", "pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 22 22", "fill", "none"], ["d", "M16.5556 21.2539V13.4761C16.5556 13.1814 16.4385 12.8988 16.2301 12.6905C16.0217 12.4821 15.7391 12.365 15.4444 12.365H6.55556C6.26087 12.365 5.97826 12.4821 5.76988 12.6905C5.56151 12.8988 5.44444 13.1814 5.44444 13.4761V21.2539M5.44444 1.25391V5.69835C5.44444 5.99304 5.56151 6.27565 5.76988 6.48402C5.97826 6.6924 6.26087 6.80946 6.55556 6.80946H14.3333M14.5556 1.25391C15.1417 1.26226 15.7008 1.50187 16.1111 1.92057L20.3333 6.1428C20.752 6.55309 20.9917 7.1122 21 7.69835V19.0317C21 19.6211 20.7659 20.1863 20.3491 20.603C19.9324 21.0198 19.3671 21.2539 18.7778 21.2539H3.22222C2.63285 21.2539 2.06762 21.0198 1.65087 20.603C1.23413 20.1863 1 19.6211 1 19.0317V3.47613C1 2.88676 1.23413 2.32153 1.65087 1.90478C2.06762 1.48803 2.63285 1.25391 3.22222 1.25391H14.5556Z", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "click"], [3, "value"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [2, "padding-left", "10px"], [2, "color", "#EB583B"], ["href", "javascript:void(0)", "title", "Change Zone", 2, "color", "#EB583B", "cursor", "pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "14", "viewBox", "0 0 22 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-left-right-icon", "lucide-arrow-left-right"], ["d", "M8 3 4 7l4 4"], ["d", "M4 7h16"], ["d", "m16 21 4-4-4-4"], ["d", "M20 17H4"], ["href", "javascript:void(0)", "title", "Remove", 2, "color", "#EB583B", "cursor", "pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "14", "viewBox", "0 0 22 24", "fill", "none"], ["d", "M8.77778 11.1539V17.7539M13.2222 11.1539V17.7539M18.7778 5.65391V21.0539C18.7778 21.6374 18.5437 22.197 18.1269 22.6095C17.7102 23.0221 17.1449 23.2539 16.5556 23.2539H5.44444C4.85507 23.2539 4.28984 23.0221 3.8731 22.6095C3.45635 22.197 3.22222 21.6374 3.22222 21.0539V5.65391M1 5.65391H21M6.55556 5.65391V3.45391C6.55556 2.87043 6.78968 2.31085 7.20643 1.89827C7.62318 1.48569 8.18841 1.25391 8.77778 1.25391H13.2222C13.8116 1.25391 14.3768 1.48569 14.7936 1.89827C15.2103 2.31085 15.4444 2.87043 15.4444 3.45391V5.65391", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function LiveVersionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LiveVersionComponent_form_0_Template, 48, 11, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.WFBMForm);
      }
    }, dependencies: [NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgForOf, NgClass, NgSelectComponent, NgOptionComponent], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.modal-body[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\n.update_detail[_ngcontent-%COMP%] {\n  padding: 40px 0 25px;\n  text-align: right;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 150px;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-color: #4C9E00;\n  background-color: #fff;\n  color: #4C9E00;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.drag_grid.state-filter-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: 0px !important;\n}\n.drag_grid[_ngcontent-%COMP%] {\n  border: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  text-align: left;\n  width: 50%;\n  padding: 20px 15px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: 600px;\n  margin: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%] {\n  width: auto;\n  height: 205px;\n  overflow: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  margin: 0px;\n  padding-left: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  border-bottom: 2px solid #dfdfdf;\n  cursor: default;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: left;\n  height: 26px;\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 50px;\n  text-align: right;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .left_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .right_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.selectFilter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: radio;\n  width: auto;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  border: 1px solid #56AF31;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  background: #56AF31;\n  border: 0.5px solid #56AF31;\n  width: 8px;\n  height: 8px;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  color: #fff;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n  background-color: #255992;\n}\ntable.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: none;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  color: #000000;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n  background-color: #FFFFFF;\n}\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\ntable.basicTable.stripped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F3F3F3;\n}\ntable.basicTable.stripped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FFFFFF;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.alignLiveAlignment[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=live-version.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveVersionComponent, { className: "LiveVersionComponent", filePath: "src\\app\\admin\\LiveVersion\\components\\live-version\\live-version.component.ts", lineNumber: 16 });
})();

export {
  LiveVersionComponent
};
//# sourceMappingURL=chunk-ILK2XUKT.js.map
