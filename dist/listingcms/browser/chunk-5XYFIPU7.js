import {
  SharedModule
} from "./chunk-AVHCICF3.js";
import {
  AdditionalPermissionComponent,
  GridConfigStaticColComponent,
  WfEmailTemplateComponent
} from "./chunk-OS2A2RL6.js";
import {
  GridExportComponent,
  WorkflowBmAssociationComponent
} from "./chunk-C5NFJAYY.js";
import {
  CompanyAssociationComponent,
  FormViewApiService,
  GenerateXmlComponent,
  MatDialog
} from "./chunk-NIXK6VWY.js";
import {
  require_FileSaver_min
} from "./chunk-AZ2LSUZA.js";
import {
  WfconditionsComponent
} from "./chunk-RF35KVRW.js";
import "./chunk-FKDZX6HV.js";
import "./chunk-74OCJGBF.js";
import {
  GenericGridComponent
} from "./chunk-BQKXR4UC.js";
import {
  WfRoleGridComponent
} from "./chunk-NTG2Y36S.js";
import {
  LiveVersionComponent
} from "./chunk-ILK2XUKT.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  MessageService,
  UserDetail
} from "./chunk-43FCU5DY.js";
import {
  WFService
} from "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule,
  NgSelectOption,
  NgbActiveModal,
  NgbModal,
  NgbModule,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ToastrService,
  UntypedFormArray,
  UntypedFormBuilder,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/admin/wf/wf.component.ts
var import_file_saver = __toESM(require_FileSaver_min());

// src/app/admin/wf/components/workflow-save-update/workflow-save-update.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function WorkflowSaveUpdateComponent_form_0_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 26);
    \u0275\u0275text(1, "Create New Record");
    \u0275\u0275elementEnd();
  }
}
function WorkflowSaveUpdateComponent_form_0_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 26);
    \u0275\u0275text(1, "Update Record");
    \u0275\u0275elementEnd();
  }
}
function WorkflowSaveUpdateComponent_form_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "WF is in Publish Mode. No changes are allowed.");
    \u0275\u0275elementEnd();
  }
}
function WorkflowSaveUpdateComponent_form_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "label", 12);
    \u0275\u0275text(3, "Workflow Version");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "label", 14);
    \u0275\u0275text(7, "Workflow Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx_r1.submitted && (ctx_r1.f.Version.errors == null ? null : ctx_r1.f.Version.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("Version").value);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, ctx_r1.submitted && (ctx_r1.f.Mode.errors == null ? null : ctx_r1.f.Mode.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("Mode").value);
  }
}
function WorkflowSaveUpdateComponent_form_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 30)(2, "label", 12);
    \u0275\u0275text(3, "States");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "label", 14);
    \u0275\u0275text(6, "(%)");
    \u0275\u0275elementEnd()()();
  }
}
function WorkflowSaveUpdateComponent_form_0_div_46_ng_container_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function WorkflowSaveUpdateComponent_form_0_div_46_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 32)(3, "label", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "input", 33);
    \u0275\u0275listener("keyup", function WorkflowSaveUpdateComponent_form_0_div_46_ng_container_2_Template_input_keyup_6_listener($event) {
      const ctx_r3 = \u0275\u0275restoreView(_r3);
      const stgCtrl_r5 = ctx_r3.$implicit;
      const i_r6 = ctx_r3.index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ValidateStatgePercent(stgCtrl_r5, $event, i_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, WorkflowSaveUpdateComponent_form_0_div_46_ng_container_2_span_7_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stgCtrl_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(stgCtrl_r5.StateName);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "per_", i_r6, "");
    \u0275\u0275property("value", stgCtrl_r5.Percentage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error !== "" && ctx_r1.currState === i_r6);
  }
}
function WorkflowSaveUpdateComponent_form_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 21);
    \u0275\u0275template(2, WorkflowSaveUpdateComponent_form_0_div_46_ng_container_2_Template, 8, 5, "ng-container", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.WFSaveUpdateForm.controls.StatePercentage.value);
  }
}
function WorkflowSaveUpdateComponent_form_0_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function WorkflowSaveUpdateComponent_form_0_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(1, "Save");
    \u0275\u0275elementEnd();
  }
}
function WorkflowSaveUpdateComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1)(1, "div")(2, "div", 2);
    \u0275\u0275template(3, WorkflowSaveUpdateComponent_form_0_h4_3_Template, 2, 0, "h4", 3)(4, WorkflowSaveUpdateComponent_form_0_h4_4_Template, 2, 0, "h4", 3);
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function WorkflowSaveUpdateComponent_form_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275element(6, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
    \u0275\u0275template(10, WorkflowSaveUpdateComponent_form_0_span_10_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "label", 12);
    \u0275\u0275text(14, "Workflow Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "label", 14);
    \u0275\u0275text(18, "Workflow Friendly Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, WorkflowSaveUpdateComponent_form_0_div_20_Template, 9, 8, "div", 16);
    \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "label", 12);
    \u0275\u0275text(24, "Short Description*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 11)(27, "label", 14);
    \u0275\u0275text(28, "Certification Type*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "div", 11)(32, "label", 12);
    \u0275\u0275text(33, "Email From*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 11)(36, "label", 14);
    \u0275\u0275text(37, "OBE Email Subject Line");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 10)(40, "div", 21)(41, "label", 12);
    \u0275\u0275text(42, "Long Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 22);
    \u0275\u0275text(44, "          ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, WorkflowSaveUpdateComponent_form_0_div_45_Template, 7, 0, "div", 16)(46, WorkflowSaveUpdateComponent_form_0_div_46_Template, 3, 1, "div", 16);
    \u0275\u0275elementStart(47, "div", 23)(48, "button", 24);
    \u0275\u0275listener("click", function WorkflowSaveUpdateComponent_form_0_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, WorkflowSaveUpdateComponent_form_0_button_50_Template, 2, 0, "button", 25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.WFSaveUpdateForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEdit);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "Published");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, ctx_r1.submitted && ((ctx_r1.f.Name.errors == null ? null : ctx_r1.f.Name.errors.required) || (ctx_r1.f.Name.errors == null ? null : ctx_r1.f.Name.errors.pattern))))("value", ctx_r1.WFSaveUpdateForm.get("Name").value);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c0, ctx_r1.submitted && (ctx_r1.f.FriendlyName.errors == null ? null : ctx_r1.f.FriendlyName.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("FriendlyName").value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEdit);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c0, ctx_r1.submitted && (ctx_r1.f.ShortDesc.errors == null ? null : ctx_r1.f.ShortDesc.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("ShortDesc").value);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c0, ctx_r1.submitted && (ctx_r1.f.ProcessName.errors == null ? null : ctx_r1.f.ProcessName.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("ProcessName").value);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c0, ctx_r1.submitted && (ctx_r1.f.EmailFrom.errors == null ? null : ctx_r1.f.EmailFrom.errors.required) || ctx_r1.submitted && (ctx_r1.f.EmailFrom.errors == null ? null : ctx_r1.f.EmailFrom.errors.email) || ctx_r1.submitted && (ctx_r1.f.EmailFrom.errors == null ? null : ctx_r1.f.EmailFrom.errors.pattern)))("value", ctx_r1.WFSaveUpdateForm.get("EmailFrom").value);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c0, ctx_r1.submitted && (ctx_r1.f.OBEMailSublect.errors == null ? null : ctx_r1.f.OBEMailSublect.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("OBEMailSublect").value);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c0, ctx_r1.submitted && (ctx_r1.f.LongDesc.errors == null ? null : ctx_r1.f.LongDesc.errors.required)))("value", ctx_r1.WFSaveUpdateForm.get("LongDesc").value);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stageList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stageList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentMode !== "Published");
  }
}
var WorkflowSaveUpdateComponent = class _WorkflowSaveUpdateComponent {
  constructor(activeModal, fb, wfsrvc, msg) {
    this.activeModal = activeModal;
    this.fb = fb;
    this.wfsrvc = wfsrvc;
    this.msg = msg;
    this.submitted = false;
    this.isEdit = false;
    this.error = "";
  }
  ngOnInit() {
    this.processName = sessionStorage.getItem("AppName");
    this.WFSaveUpdateForm = this.fb.group({
      WFID: [0],
      Name: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9_]+$"), Validators.maxLength(25)]],
      FriendlyName: [null, Validators.required],
      ShortDesc: [null, Validators.required],
      ProcessName: [null, Validators.required],
      EmailFrom: [null, [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      OBEMailSublect: [null],
      LongDesc: [null],
      Version: [null],
      Mode: [null]
    });
    ["ProcessName", "Version", "Mode", ...this.isEdit ? ["Name"] : []].forEach((ctrl) => this.WFSaveUpdateForm.get(ctrl)?.disable());
    this.submitted = false;
    this.initState();
  }
  get f() {
    return this.WFSaveUpdateForm.controls;
  }
  initState() {
    if (this.isEdit === true) {
      this.WFSaveUpdateForm.get("WFID").patchValue(this.dataList?.WFID);
      this.WFSaveUpdateForm.get("Name").patchValue(this.dataList?.nam);
      this.WFSaveUpdateForm.get("Name").disable();
      this.WFSaveUpdateForm.get("FriendlyName").patchValue(this.dataList?.DISPNAME);
      this.WFSaveUpdateForm.get("ShortDesc").patchValue(this.dataList?.SHRTDES);
      this.WFSaveUpdateForm.get("ProcessName").patchValue(this.processName);
      this.WFSaveUpdateForm.get("EmailFrom").patchValue(this.dataList?.FromEmail);
      this.WFSaveUpdateForm.get("OBEMailSublect").patchValue(this.dataList?.OBEEmailSubject);
      this.WFSaveUpdateForm.get("LongDesc").patchValue(this.dataList?.LNGDES);
      this.WFSaveUpdateForm.get("Version").patchValue(this.dataList?.Ver);
      this.WFSaveUpdateForm.get("Mode").patchValue(this.dataList?.MOD);
      this.getStagePercentage(this.dataList?.WFID);
      this.currentMode = this.WFSaveUpdateForm.get("Mode").value;
    } else {
      this.WFSaveUpdateForm.get("ProcessName").setValue(this.processName);
      this.isEdit = false;
      this.WFSaveUpdateForm.get("Name").enable();
      this.WFSaveUpdateForm.get("WFID").patchValue(0);
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.WFSaveUpdateForm.invalid) {
      return;
    }
    this.wfsrvc.AddUpdateWorkflow(this.WFSaveUpdateForm.getRawValue()).subscribe((res) => {
      if (!this.isEdit && res === "Data Saved Succesfully" || res?.message === "Data Saved Succesfully") {
        this.activeModal.close(true);
        return true;
      }
      if (this.isEdit && res === "Data successfully updated." || res.message === "Data successfully updated.") {
        this.activeModal.close(true);
        return true;
      }
      if (typeof res === "string" || typeof res === "object")
        this.msg.showMessage("Warning", { body: res.message });
      this.submitted = false;
    }, (error) => {
      console.log(error);
    });
  }
  getStagePercentage(wfid) {
    this.WFSaveUpdateForm.addControl("StatePercentage", new UntypedFormArray([]));
    this.wfsrvc.GetWFStagePercentages(wfid).subscribe((res) => {
      if (!!res) {
        this.stageList = res.data;
        for (const item of this.stageList) {
          this.WFSaveUpdateForm.get("StatePercentage").push(this.fb.group({
            StateName: [item.StateName],
            WfosId: [item.WfosId],
            Percentage: [item.Percentage],
            IsEndState: [item.IsEndState],
            FriendlyName: [item.FriendlyName]
          }));
        }
      }
    }, (error) => {
      console.log(error);
    });
  }
  ValidateStatgePercent(item, event, index) {
    let specialKeys = ["Tab", "End", "Home", "Del", "Delete"];
    if (specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const control = this.WFSaveUpdateForm.get("StatePercentage");
    let val = event.target.value;
    const regex = "^[0-9]*$";
    if (!val.match(regex)) {
      event.preventDefault();
    }
    if (val > 100) {
      this.error = "Maximum percentage can be 100.";
      this.currState = index;
      event.preventDefault();
    } else {
      this.error = "";
      this.currState = -1;
    }
    const value = control.controls[index].value;
    control.removeAt(index);
    const newctrl = this.fb.group({
      StateName: [value.StateName],
      WfosId: [value.WfosId],
      Percentage: [this.error !== "" ? "0" : val],
      IsEndState: [value.IsEndState],
      FriendlyName: [value.FriendlyName]
    });
    control.insert(index, newctrl);
  }
  static {
    this.\u0275fac = function WorkflowSaveUpdateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WorkflowSaveUpdateComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkflowSaveUpdateComponent, selectors: [["app-workflow-save-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "modal-header", 2, "justify-content", "space-between"], ["class", "modal-titlewf", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close-button", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [2, "text-align", "center"], ["style", "text-align: center;color: red;", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-6"], ["for", "ex2", 1, "input-label"], ["id", "Name", "formControlName", "Name", "type", "text", 1, "form-control", 3, "ngClass", "value"], ["for", "ex3", 1, "input-label"], ["id", "FriendlyName", "formControlName", "FriendlyName", "type", "text", 1, "form-control", 3, "ngClass", "value"], ["class", "form-group row", 4, "ngIf"], ["id", "ShortDesc", "formControlName", "ShortDesc", "type", "text", 1, "form-control", 3, "ngClass", "value"], ["id", "ProcessName", "formControlName", "ProcessName", "type", "text", "disabled", "true", 1, "form-control", 3, "ngClass", "value"], ["id", "EmailFrom", "formControlName", "EmailFrom", "type", "email", 1, "form-control", 3, "ngClass", "value"], ["id", "OBEMailSublect", "formControlName", "OBEMailSublect", "type", "text", 1, "form-control", 3, "ngClass", "value"], [1, "col-sm-12"], ["formControlName", "LongDesc", "rows", "4", "id", "LongDesc", "placeholder", "", "name", "Description", 1, "form-control", 3, "ngClass", "value"], [1, "update_detail"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "modal-titlewf"], [2, "text-align", "center", "color", "red"], ["id", "Version", "formControlName", "Version", "type", "text", "disabled", "isEdit", 1, "form-control", 3, "ngClass", "value"], ["id", "Mode", "formControlName", "Mode", "type", "text", "disabled", "isEdit", 1, "form-control", 3, "ngClass", "value"], [1, "col-sm-3"], [4, "ngFor", "ngForOf"], [1, "col-sm-3", 2, "width", "25%"], ["type", "number", 1, "form-control", 3, "keyup", "id", "value"], ["style", "color: red;font-size: 10px;", 4, "ngIf"], [2, "color", "red", "font-size", "10px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function WorkflowSaveUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WorkflowSaveUpdateComponent_form_0_Template, 51, 36, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.WFSaveUpdateForm);
      }
    }, dependencies: [NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgForOf], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 100%;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  cursor: pointer;\n}\n.update_detail[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.update_detail[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  width: 140px;\n  height: 40px;\n  padding: 8px 0px 9px 0px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 8px;\n}\n.update_detail[_ngcontent-%COMP%]   button[type=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  border: 1px solid #CCC;\n  background: #F6F6F6;\n  display: flex;\n  width: 130px;\n  height: 40px;\n  padding: 4px 65px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.row[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=workflow-save-update.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkflowSaveUpdateComponent, { className: "WorkflowSaveUpdateComponent", filePath: "src\\app\\admin\\wf\\components\\workflow-save-update\\workflow-save-update.component.ts", lineNumber: 19 });
})();

// src/app/admin/wf/wf.component.ts
var _c02 = ["jsonFileInput"];
function WfComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "form", 6)(2, "div", 51)(3, "div", 52);
    \u0275\u0275text(4, "Version Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275listener("click", function WfComponent_div_42_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.CreateNewVersion();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 31);
    \u0275\u0275element(7, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "New Version");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53);
    \u0275\u0275listener("click", function WfComponent_div_42_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onPublishToEnvironment();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 55);
    \u0275\u0275element(12, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Publish To Environment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 51)(16, "div", 52);
    \u0275\u0275text(17, "Manage Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 53);
    \u0275\u0275listener("click", function WfComponent_div_42_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onCompanyAssociation();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 57);
    \u0275\u0275element(20, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Company Access");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 53);
    \u0275\u0275listener("click", function WfComponent_div_42_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.CreateWFRoles();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 59);
    \u0275\u0275element(25, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Roles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 51)(29, "div", 52);
    \u0275\u0275text(30, "Additional Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 53);
    \u0275\u0275listener("click", function WfComponent_div_42_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.CreateWFEmailTemplate();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 61);
    \u0275\u0275element(33, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Email Template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 51)(37, "div", 53);
    \u0275\u0275listener("click", function WfComponent_div_42_Template_div_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.showDeleteMessage();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 63);
    \u0275\u0275element(39, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span", 65);
    \u0275\u0275text(41, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r3.popupPosition.x, "px")("top", ctx_r3.popupPosition.y, "px");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.WFForm);
  }
}
function WfComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function WfComponent_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.CreateNewRecord(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 67);
    \u0275\u0275element(2, "path", 68);
    \u0275\u0275elementEnd()();
  }
}
function WfComponent_ng_template_73_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorMsg);
  }
}
function WfComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "h4", 70);
    \u0275\u0275text(2, "Upload Workflow File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function WfComponent_ng_template_73_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(modal_r7.dismiss("Cross click"));
    });
    \u0275\u0275element(4, "span", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73)(6, "form")(7, "div", 74)(8, "div", 75)(9, "input", 76);
    \u0275\u0275listener("change", function WfComponent_ng_template_73_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handleFileInput($event.target.files));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "label", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 78)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 78);
    \u0275\u0275template(15, WfComponent_ng_template_73_span_15_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 80)(17, "button", 81);
    \u0275\u0275listener("click", function WfComponent_ng_template_73_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadTemplate());
    });
    \u0275\u0275text(18, "Download Excel Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 82);
    \u0275\u0275listener("click", function WfComponent_ng_template_73_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.upload());
    });
    \u0275\u0275text(20, "Upload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r3.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.IsValidFile);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.IsValidFile);
  }
}
var WfComponent = class _WfComponent {
  constructor(wfsrvc, dialog, formView, userDetail, toastr, msg, fb, modalService, activatedRoute, router) {
    this.wfsrvc = wfsrvc;
    this.dialog = dialog;
    this.formView = formView;
    this.userDetail = userDetail;
    this.toastr = toastr;
    this.msg = msg;
    this.fb = fb;
    this.modalService = modalService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.file = null;
    this.IsValidFile = false;
    this.fileName = "";
    this.errorMsg = "";
    this.dataSource = [];
    this.popupPosition = { x: 0, y: 0 };
    this.showActionsPopup = false;
    this.boundOutsideClick = this.closeActionsPopupOnOutsideClick.bind(this);
    this.boundKeydown = this.handleKeyDown.bind(this);
    this.bodyData = {
      PageSize: 20,
      PageNumber: 1,
      SortColumn: "CRTDON",
      SortOrder: "desc",
      TimeZone: 0,
      GridFilters: []
    };
    this.HeaderMap = {
      config: {
        header: {
          columns: [
            {
              objectKey: "nam",
              dataType: "Link",
              displayName: "Workflow Name",
              width: "14%"
            },
            {
              objectKey: "DISPNAME",
              displayName: "Friendly Name",
              width: "14%"
            },
            {
              objectKey: "Ver",
              displayName: "Version",
              width: "8%"
            },
            {
              objectKey: "Status",
              displayName: "Mode",
              width: "9%"
            },
            {
              objectKey: "crtdon",
              displayName: "Date Added",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail?.TimeZone?.toString(),
              width: "15%"
            },
            {
              objectKey: "modfon",
              displayName: "Date Modified",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail?.TimeZone?.toString(),
              width: "15%"
            },
            // {
            //   objectKey: 'Stage',
            //   displayName: 'Stage',
            //   width: '5%'
            // },
            {
              objectKey: "StageBMCondtion",
              displayName: "Conditions",
              dataType: "Link",
              width: "8%"
            }
            // {
            //   objectKey: 'MOD',
            //   displayName: 'Mode',
            //   width: '12%'
            //  },
            //{
            //   objectKey: 'WFID',
            //   displayName: 'WFD',
            //   dataType: 'LinkWithSpecialChar',
            //   SpecialChar: 'WFD',
            //   width: '4%'
            // },{
            //   objectKey: 'Role',
            //   displayName: 'Roles',
            //   dataType: 'LinkWithSpecialChar',
            //   SpecialChar: 'Click Here',
            //   width: '7%'
            // },{
            //   objectKey: 'BM',
            //   displayName: 'BM',
            //   dataType: 'LinkWithSpecialChar',
            //   SpecialChar: 'Click Here',
            //   width: '7%'
            // },{
            //   objectKey: 'EmailTemplate',
            //   displayName: 'Email Template',
            //   dataType: 'LinkWithSpecialChar',
            //   SpecialChar: 'Click Here',
            //   width: '9%'
            // }
          ],
          action: {
            Checkbox: true,
            moreInfo: true,
            showGenerateJsonBtn: true,
            WFBM: true
          },
          columnFilter: false
        },
        paging: true
      }
    };
    this.alertMsgTxt = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.processName = params.get("pname");
      if (this.processName && this.processName.trim() !== "") {
        this.processName = params.get("pname");
        sessionStorage.setItem("AppName", this.processName);
      }
    });
    this.activatedRoute.queryParams.subscribe((qParams) => {
      this.initialize(qParams);
    });
  }
  initialize(queryParams) {
    const lowerKeyCase = [];
    Object.keys(queryParams).forEach((param) => {
      const lowerCaseParam = param.toLocaleLowerCase();
      lowerKeyCase.push({ key: lowerCaseParam, value: queryParams[param] });
    });
    const pName = lowerKeyCase.find((lk) => lk.key === "pname")?.value;
    const dname = lowerKeyCase.find((lk) => lk.key === "dname")?.value;
    if (pName && dname) {
      this.processName = pName;
      this.DisplayName = dname;
    } else {
      this.processName = sessionStorage.getItem("AppName");
      this.DisplayName = sessionStorage.getItem("DisplayName");
    }
    this.WFForm = this.fb.group({
      CangeStatus: ["-1"],
      ChangeMode: ["-1"]
    });
    this.LoadData();
  }
  onSearch() {
    if (this.searchText.trim()) {
      console.log("Searching for:", this.searchText);
      this.bodyData.GridFilters = [
        {
          GridConditions: [
            {
              Condition: "CONTAINS",
              ConditionValue: this.searchText
            }
          ],
          DataField: "dmoName",
          LogicalOperator: "Or",
          FilterType: "Global_Search"
        }
      ];
      this.LoadData();
    }
  }
  pageChange(event) {
    this.bodyData.PageNumber = event.currentPage;
    this.bodyData.PageSize = event.pageSize;
    this.LoadData();
  }
  actionClick(event) {
    switch (event.action) {
      case "Publish":
        this.generateXML(event.rowIndex);
        break;
      case "Excel":
        this.ExportWF(event.rowIndex);
        break;
      case "Edit":
        this.CreateNewRecord(event.rowIndex);
        break;
      case "Delete":
        this.showDeleteMessage();
        break;
      case "SpecialCharClick":
        if (event.ColumnFilterDropdown === "Role") {
          this.CreateWFRoles();
        } else if (event.ColumnFilterDropdown === "BM") {
          this.CreateWFBM(event.rowIndex);
        } else if (event.ColumnFilterDropdown === "EmailTemplate") {
          this.CreateWFEmailTemplate();
        } else {
          if (window.location.href.includes("wfadmin"))
            this.router.navigate(["wfadmin/admin/wf/wfd"], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID
              }
            });
          else
            this.router.navigate(["admin/wf/wfd"], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID
              }
            });
        }
        break;
      case "Link":
        if (event.ColumnFilterDropdown === "nam") {
          if (window.location.href.includes("wfadmin"))
            this.router.navigate(["wfadmin/admin/wf/wfd"], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID
              }
            });
          else
            this.router.navigate(["admin/wf/wfd"], {
              queryParams: {
                processName: this.processName,
                VerNo: this.dataSource[event.rowIndex].Ver,
                id: this.dataSource[event.rowIndex].WFID
              }
            });
        } else {
          const wfid = this.dataSource[event.rowIndex].WFID;
          const version = this.dataSource[event.rowIndex].Ver;
          sessionStorage.setItem("WFVersion", version);
          if (window.location.href.includes("wfadmin")) {
            this.router.navigate(["/wfadmin/admin/wf/wfcondition"], {
              queryParams: { id: wfid }
            });
          } else {
            this.router.navigate(["/admin/wf/wfcondition"], {
              queryParams: { id: wfid }
            });
          }
        }
        break;
    }
  }
  LoadData() {
    this.isLoading = true;
    this.wfsrvc.getWFGrid(this.processName, this.bodyData).subscribe((x) => {
      this.dataSource = x?.Data || [];
      this.itemsCount = x?.RecordsCount || 0;
      this.isLoading = false;
    }, (err) => {
      console.log(err);
      this.isLoading = false;
    });
  }
  ChangeStatus(event) {
    const selectedStatus = this.dataSource.filter((x) => x.selected === true).map((x) => x.WFID).join(",");
    if (event.target.value !== "-1" && !!selectedStatus) {
      this.wfsrvc.ChangeWfStatus(selectedStatus, event.target.value).subscribe((result) => {
        if (result) {
          this.LoadData();
          this.WFForm.get("CangeStatus").patchValue("-1");
          this.toastr.success("Status Changed successfully");
        }
      });
    } else {
      if (event.target.value !== "-1" && (selectedStatus === void 0 || selectedStatus === "")) {
        this.WFForm.get("CangeStatus").patchValue("-1");
        this.toastr.warning("Please select at least one record.");
      }
    }
  }
  generateXML(rowIndex) {
    this.formView.generateBMWFXMLGateway("wf", this.processName, this.dataSource[rowIndex].Ver).subscribe({
      next: (success) => {
        this.Version = this.dataSource[rowIndex].Ver;
        if (success) {
          this.alertMsgTxt = [];
          if (success.IsBMWFLinked === 0)
            this.alertMsgTxt.push("BM-WF is not linked.");
          if (success.IsLive === 0)
            this.alertMsgTxt.push("BM-WF is not live.");
          if (success.IsCmpnyGrpExists === 0)
            this.alertMsgTxt.push("Company Group is not exists.");
          if (success.IsCmpnyWFObjectLinked === 0)
            this.alertMsgTxt.push("Company-WF Objects are not linked.");
          if (this.alertMsgTxt.length > 0) {
            this.showErrorModal();
          } else {
            this.LoadData();
            this.toastr.success("JSON generated successfully");
          }
        }
      },
      error: () => {
        this.showErrorModal();
      }
    });
  }
  showErrorModal() {
    const dialogRef = this.dialog.open(GenerateXmlComponent, {
      width: "656px",
      disableClose: true,
      panelClass: "custom-dialog-container",
      data: {
        type: "wf",
        processName: this.processName,
        verNo: this.Version,
        alertMsgTxt: this.alertMsgTxt
      }
    });
    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }
  ChangeMode(event) {
    this.wfmode = event.target.value;
    const selectedStatus = this.dataSource.filter((x) => x.selected === true).map((x) => x.WFID).join(",");
    if (this.wfmode !== "-1" && !!selectedStatus) {
      this.wfsrvc.ChangeWfMode(selectedStatus, this.wfmode).subscribe((result) => {
        if (result) {
          this.LoadData();
          this.WFForm.get("ChangeMode").patchValue("-1");
          this.toastr.success("Mode Changed successfully");
        }
      });
    } else {
      if (this.wfmode !== "-1" && (selectedStatus === void 0 || selectedStatus === "")) {
        this.WFForm.get("ChangeMode").patchValue("-1");
        this.toastr.warning("Please select at least one record.");
      }
    }
  }
  OpenAdditionalPermission() {
    this.msg.showComponent(AdditionalPermissionComponent, {}, { size: "xl", centered: true });
  }
  onCompanyAssociation() {
    return __async(this, null, function* () {
      const obj = this.dataSource[this.selectedRowIndex];
      const modal = this.msg.showComponent(CompanyAssociationComponent, {
        displayWith: (item) => `${item.WFDISPNAME} > ${item.WFODISPNAME} > ${item.WFOSDISPNAME} > ${item.TRGDISPNAME}`,
        uniqueWith: (item) => `${item.WFNAM}${item.WFOGUID}${item.WFOSGUID}${item.TRGGUID}`,
        getAssociationsWith: (groupId) => this.formView.getWFObjectsForCompanyAssociation(groupId, obj.TypeID, obj.WFID),
        checkBy: "isAlreadySelected"
      }, { size: "lg", centered: true });
      const res = yield modal.result;
      if (res) {
        const success = (yield this.updateCompanyAssociatedRecords(obj, res)) === 1;
        if (success) {
          this.toastr.success("Data saved successfully");
          this.LoadData();
        }
      }
    });
  }
  updateCompanyAssociatedRecords(wf, res) {
    const stageGuids = /* @__PURE__ */ new Set(), stateGuids = /* @__PURE__ */ new Set(), triggerGuids = /* @__PURE__ */ new Set();
    const selectedItems = res?.selectedItems;
    if (Array.isArray(selectedItems)) {
      selectedItems.forEach((item) => {
        stageGuids.add(item.WFOGUID);
        stateGuids.add(item.WFOSGUID);
        triggerGuids.add(item.TRGGUID);
      });
    } else {
      console.warn("No selectedItems found for association update:", selectedItems);
    }
    const payload = {
      WFId: wf.WFID,
      ProcessId: wf.TypeID,
      CompanyId: res?.companyId ?? null,
      groupName: res?.groupName ?? "",
      WFOGUIDS: [...stageGuids].toString(),
      WFOSGUIDS: [...stateGuids].toString(),
      TrigGUIDS: [...triggerGuids].toString(),
      IsAllComp: res.IsAllComp
    };
    return this.formView.updateWFObjectsForCompanyAssociation(payload).toPromise();
  }
  CreateNewRecord(index) {
    const item = index !== null ? this.dataSource[index] : null;
    const modal = this.msg.showComponent(WorkflowSaveUpdateComponent, {
      isEdit: !!item,
      dataList: item,
      currentMode: item?.WorflowMode
    }, { size: "lg", centered: true });
    modal.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully");
        this.LoadData();
      }
    }));
  }
  CreateNewVersion() {
    const wfID = this.dataSource[this.selectedRowIndex];
    this.msg.showMessage("Warning", {
      header: "Create New Version",
      body: "Are you sure you want to create a new version of the selected item?",
      btnText: "Create",
      checkboxText: "Yes, create new version",
      isDelete: true,
      isNewDesign: true,
      callback: () => {
        this.wfsrvc.CreateWFVersion(wfID.WFID, 0).subscribe((result) => {
          const message = typeof result === "string" ? result : typeof result === "object" && result?.message ? result.message : "";
          if (message.startsWith("Version created successfully.")) {
            this.toastr.success("Version created successfully.");
            this.LoadData();
          }
        });
      },
      caller: this
    });
  }
  ExportWF(rowIndex) {
    console.log(this.dataSource[rowIndex]);
    const wfID = this.dataSource[rowIndex].WFID;
    const currVer = this.dataSource[rowIndex].Ver;
    const fileName = "WorkFlow_Check_" + currVer + ".xlsx";
    this.wfsrvc.ExportWFData(wfID).subscribe((data) => {
      (0, import_file_saver.saveAs)(data, fileName);
      this.LoadData();
    });
  }
  showDeleteMessage() {
    const item = this.dataSource[this.selectedRowIndex];
    if (item) {
      this.WFIDS = item.WFID;
      this.msg.showMessage("Warning", {
        header: "Delete Selected Item",
        body: "Do you want to delete selected item?",
        btnText: "Delete",
        checkboxText: "Yes, delete selected item",
        isDelete: true,
        isNewDesign: true,
        callback: this.deleteSelectedConfirmation,
        caller: this
      });
    } else {
      this.msg.showMessage("Warning", {
        body: "At least one record must be selected in order to delete"
      });
    }
  }
  deleteSelectedConfirmation(modelRef, Caller) {
    Caller.wfsrvc.DeleteWF(Caller.WFIDS).subscribe((result) => {
      if (result?.IsError) {
        Caller.msg.showMessage("Fail", { body: result.Message });
        return;
      }
      Caller.LoadData();
      modelRef.close();
    }, (error) => {
      if (!!error.error && error.error === "Record(s) Cannot Be Deleted") {
        Caller.toastr.warning("Record(s) Cannot Be Deleted");
      }
    });
  }
  openExportGridConfigurationPopup(ExportType) {
    this.msg.showComponent(
      GridExportComponent,
      {
        ProcessName: this.processName,
        objBaseGrid: this,
        ExportType: ExportType.toUpperCase(),
        WFIds: this.dataSource.filter((rec) => rec.selected).map((rec) => rec.WFID).join(),
        ExportUserData: (original) => {
          return __spreadProps(__spreadValues({}, original), {
            SortColumn: this.bodyData.SortColumn,
            SortOrder: this.bodyData.SortOrder,
            ProcessName: this.processName
          });
        }
      },
      { size: "lg", centered: true }
      // ✅ pass as third parameter
    );
  }
  openBulkUpload(bulkUpload) {
    this.file = null;
    this.fileName = "";
    this.modalService.open(bulkUpload, {
      ariaLabelledBy: "modal-basic-title",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
  }
  handleFileInput(files) {
    this.file = files.item(0);
    this.fileName = this.file ? this.file.name : "";
    this.errorMsg = "";
    this.IsValidFile = true;
    if (!this.file) {
      this.errorMsg = "No file selected.";
      return;
    }
    if (this.file.type === "application/vnd.ms-excel" || this.file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || this.file.name.endsWith(".xls") || this.file.name.endsWith(".xlsx")) {
      this.IsValidFile = false;
    } else if (this.file.type === "application/json" || this.file.name.endsWith(".json")) {
      this.IsValidFile = false;
    } else {
      this.errorMsg = "File not valid. Please upload a valid Excel or JSON file.";
      this.IsValidFile = true;
      this.file = null;
      this.fileName = "";
    }
  }
  upload() {
    if (!this.file) {
      this.IsValidFile = true;
      this.errorMsg = "Please select file";
      return;
    }
    if (this.file.type === "application/vnd.ms-excel" || this.file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || this.file.name.endsWith(".xls") || this.file.name.endsWith(".xlsx")) {
      this.IsValidFile = false;
      this.errorMsg = "";
      const formData = new FormData();
      formData.append("processName", this.processName);
      formData.append("uploadFile", this.file);
      this.wfsrvc.UploadFile(formData, this.processName).subscribe((Result) => {
        if (Result.status === "Success") {
          this.file = null;
          this.fileName = "";
          this.msg.dismissAll();
          this.msg.showMessage("Success", {
            header: "File uploaded successfully",
            body: Result.message
          });
          this.LoadData();
        } else {
          this.msg.dismissAll();
          this.msg.showMessage("Fail", { body: Result.message });
        }
      }, (error) => {
        console.log(error);
      });
    } else if (this.file.type === "application/json" || this.file.name.endsWith(".json")) {
      var WFID = this.dataSource.filter((x) => x.selected === true).map((x) => x.WFID);
      if (WFID.length >= 2) {
        this.toastr.error("Please select only one Datasource");
        return;
      }
      this.processName = sessionStorage.getItem("AppName");
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e?.target?.result;
          const parsedData = JSON.parse(result);
          this.wfsrvc.ImportJsonWF(this.processName, WFID, parsedData).subscribe({
            next: (response) => {
              this.toastr.success("WF generated successfully");
              this.file = null;
              this.fileName = "";
              this.msg.dismissAll();
              this.LoadData();
            },
            error: (err) => {
              this.toastr.error("Error generating WF");
            }
          });
          this.errorMsg = "";
        } catch (error) {
          this.errorMsg = "Error parsing JSON file.";
        }
      };
      reader.readAsText(this.file);
    }
  }
  downloadTemplate() {
    this.wfsrvc.DownloadWFTemp(this.processName).subscribe((result) => {
      this.SaveUploadLog(result);
    });
  }
  SaveUploadLog(FileData) {
    const curDate = /* @__PURE__ */ new Date();
    const fileName = this.processName.replace(" ", "_") + "_Template_" + (curDate.getMonth() + 1).toString() + "_" + curDate.getDate() + "_" + curDate.getFullYear() + "_" + curDate.getHours() + "_" + curDate.getMinutes() + "_" + curDate.getSeconds();
    (0, import_file_saver.saveAs)(FileData, fileName);
  }
  CreateWFRoles() {
    const item = this.dataSource[this.selectedRowIndex];
    const modal = this.msg.showComponent(WfRoleGridComponent, {
      WFID: item.WFID,
      WFName: item.nam
    }, { size: "lg", centered: true });
    modal.result.then((res) => {
      res && this.toastr.success("Data saved successfully.");
    });
  }
  CreateWFBM(index) {
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WorkflowBmAssociationComponent, {
      WFID: item.WFID,
      WFName: item.nam,
      Version: item.Ver
    }, { size: "lg", centered: true });
    modal.result.then((res) => res && this.toastr.success("Workflow BM saved successfully."));
  }
  CreateWFEmailTemplate() {
    const item = this.dataSource[this.selectedRowIndex];
    const modal = this.msg.showComponent(WfEmailTemplateComponent, {
      WFId: item.WFID,
      WFName: item.nam,
      Version: item.Ver
    }, { size: "lg", centered: true });
    modal.result.then((res) => res && this.toastr.success("Email Template saved successfully."));
  }
  OpenGridConfigStaticCol() {
    this.msg.showComponent(GridConfigStaticColComponent, { ProcessName: this.processName }, { size: "lg", centered: true });
  }
  goToVersionGrid() {
    const modalRef = this.modalService.open(LiveVersionComponent, {
      backdrop: "static",
      size: "lg",
      keyboard: false,
      centered: true
    });
    modalRef.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully");
      }
    }), (reason) => {
    });
  }
  onPublishToEnvironment() {
    const item = this.dataSource[this.selectedRowIndex];
    const sourceData = {
      FriendlyName: item.DISPNAME || "",
      ModifiedOn: item.modfon || "",
      ID: item.WFID || "",
      SourceObject: "wf"
    };
    this.router.navigate(["/publish"], {
      state: { dataObject: sourceData },
      queryParams: { publishid: item.WFID }
    });
  }
  openActionsPopupAt(pos) {
    const popupWidth = 200;
    const popupHeight = 600;
    let x = pos.x;
    let y = pos.y + 5;
    if (x + popupWidth > window.innerWidth)
      x = pos.x - popupWidth;
    if (y + popupHeight > window.innerHeight)
      y = pos.y;
    if (x < 10)
      x = 10;
    if (y < 10)
      y = 10;
    this.popupPosition = { x, y };
    this.showActionsPopup = true;
    setTimeout(() => {
      const popup = document.querySelector(".actions-popup");
      if (popup) {
        popup.classList.remove("arrow-left", "arrow-right", "arrow-left-top", "arrow-right-top");
      }
      document.addEventListener("click", this.boundOutsideClick, true);
      document.addEventListener("keydown", this.boundKeydown, true);
    }, 0);
  }
  closeActionsPopupOnOutsideClick(event) {
    const popup = document.querySelector(".actions-popup");
    if (popup && !popup.contains(event.target)) {
      this.closeActionsPopup();
    }
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.closeActionsPopup();
    }
  }
  closeActionsPopup() {
    this.showActionsPopup = false;
    document.removeEventListener("click", this.boundOutsideClick, true);
    document.removeEventListener("keydown", this.boundKeydown, true);
  }
  onActionsMenuOpen(event) {
    this.selectedRowIndex = event.rowIndex;
    this.openActionsPopupAt({ x: event.x, y: event.y });
  }
  static {
    this.\u0275fac = function WfComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfComponent)(\u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(UserDetail), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfComponent, selectors: [["app-wf"]], viewQuery: function WfComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jsonModalTemplate = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 8, consts: [["bulkUpload", ""], [1, "P-3"], [1, "d-flex", "justify-content-between", "flex-column", "flex-md-row", "align-items-center"], [1, "display-name"], [1, "p-1"], [1, "table-filters-group", "align-items-start", 2, "display", "none"], [1, "m-0", "p-0", 3, "formGroup"], [1, "button-group", "WFForm-Actions", 2, "padding", "3px 5px"], ["name", "ChangeStatus", "formControlName", "CangeStatus", 1, "btn", "btn-primary-special", "btn-small", 3, "change"], ["value", "-1"], ["value", "1"], ["value", "0"], ["type", "button", 1, "btn", "btn-primary-special", "btn-small", 3, "click"], ["name", "ChangeMode", "formControlName", "ChangeMode", 1, "btn", "btn-primary-special", "btn-small", 3, "change"], ["value", "Edit"], ["value", "Published"], [1, "export-btns-group", "mt-1", 2, "white-space", "nowrap"], ["type", "button", "title", "WF Upload", 1, "linklike", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", "title", "Excel", 1, "linklike", 3, "click"], ["role", "img", "aria-label", "Excel", 1, "far", "fa-file-excel"], ["class", "actions-popup", 3, "left", "top", 4, "ngIf"], [1, "Strip"], ["title", "Add Workflow", "class", "icon", 3, "click", 4, "ngIf"], ["title", "Export this grid", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "24", "viewBox", "0 0 19 24", "fill", "none"], ["d", "M10.6367 6.375V0H1.26172C0.638281 0 0.136719 0.501562 0.136719 1.125V22.875C0.136719 23.4984 0.638281 24 1.26172 24H17.0117C17.6352 24 18.1367 23.4984 18.1367 22.875V7.5H11.7617C11.143 7.5 10.6367 6.99375 10.6367 6.375ZM13.4539 11.3672L10.6367 15.75L13.4539 20.1328C13.693 20.5078 13.4258 21 12.9805 21H11.3445C11.1383 21 10.9461 20.8875 10.8477 20.7047C9.92891 19.0078 9.13672 17.4844 9.13672 17.4844C8.83672 18.1781 8.66797 18.4219 7.42109 20.7094C7.32266 20.8922 7.13516 21.0047 6.92891 21.0047H5.29297C4.84766 21.0047 4.58047 20.5125 4.81953 20.1375L7.64609 15.7547L4.81953 11.3719C4.57578 10.9969 4.84766 10.5047 5.29297 10.5047H6.92422C7.13047 10.5047 7.32266 10.6172 7.42109 10.8C8.64453 13.0875 8.35859 12.375 9.13672 14.0109C9.13672 14.0109 9.42266 13.4625 10.8523 10.8C10.9508 10.6172 11.143 10.5047 11.3492 10.5047H12.9805C13.4258 10.5 13.693 10.9922 13.4539 11.3672ZM18.1367 5.71406V6H12.1367V0H12.4227C12.7227 0 13.0086 0.117188 13.2195 0.328125L17.8086 4.92188C18.0195 5.13281 18.1367 5.41875 18.1367 5.71406Z", "fill", "white"], ["title", "Import Workflow", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "22", "viewBox", "0 0 19 22", "fill", "none"], ["d", "M0.699219 15.125C0.389844 15.125 0.136719 15.3781 0.136719 15.6875V16.8125C0.136719 17.1219 0.389844 17.375 0.699219 17.375H4.63672V15.125H0.699219ZM17.8906 4.19141L14.4488 0.746094C14.2906 0.587891 14.0762 0.5 13.8512 0.5H13.6367V5H18.1367V4.78555C18.1367 4.56406 18.0488 4.34961 17.8906 4.19141ZM12.5117 5.28125V0.5H5.48047C5.01289 0.5 4.63672 0.876172 4.63672 1.34375V15.125H9.13672V12.8328C9.13672 12.3301 9.74492 12.0805 10.1 12.4355L11.7805 14.1318L13.4609 15.8281C13.693 16.0637 13.693 16.4398 13.4609 16.6719L10.0965 20.0609C9.74141 20.416 9.1332 20.1664 9.1332 19.6637V17.375H4.63672V20.6562C4.63672 21.1238 5.01289 21.5 5.48047 21.5H17.293C17.7605 21.5 18.1367 21.1238 18.1367 20.6562V6.125H13.3555C12.8914 6.125 12.5117 5.74531 12.5117 5.28125Z", "fill", "white"], ["title", "Grid Static Columns", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M7 1V19M13 1V19M3 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1Z", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Role Permissions", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none"], ["d", "M6.30025 6.99983C8.28876 6.99983 9.90039 5.43307 9.90039 3.49992C9.90039 1.56676 8.28876 0 6.30025 0C4.31173 0 2.70011 1.56676 2.70011 3.49992C2.70011 5.43307 4.31173 6.99983 6.30025 6.99983ZM8.82034 7.87481H8.35064C7.72624 8.15371 7.03152 8.3123 6.30025 8.3123C5.56897 8.3123 4.87707 8.15371 4.24985 7.87481H3.78015C1.69319 7.87481 0 9.52087 0 11.5497V12.6872C0 13.4118 0.604711 13.9997 1.35005 13.9997H9.08192C9.01441 13.8137 8.98629 13.6169 9.00879 13.4173L9.20005 11.7521L9.2338 11.4486L9.45599 11.2325L11.6301 9.11892C10.9411 8.36152 9.94258 7.87481 8.82034 7.87481ZM10.0945 11.8478L9.9032 13.5157C9.87226 13.7946 10.1141 14.0297 10.3982 13.9969L12.1111 13.811L15.9897 10.0404L13.973 8.07989L10.0945 11.8478ZM17.8038 7.35256L16.7378 6.31626C16.4763 6.06197 16.0487 6.06197 15.7872 6.31626L14.724 7.34982L14.6087 7.46193L16.6281 9.42243L17.8038 8.27949C18.0654 8.02247 18.0654 7.60958 17.8038 7.35256Z", "fill", "white"], ["title", "Change Mode", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "16", "viewBox", "0 0 22 16", "fill", "none"], ["clip-path", "url(#clip0_11061_81599)"], ["d", "M11.9428 9.32366C11.7619 9.50674 11.5552 9.64405 11.3323 9.73559C11.1094 9.82713 10.8736 9.8729 10.6378 9.8729C10.4019 9.8729 10.1661 9.82713 9.94325 9.73559C9.72036 9.64405 9.51362 9.50674 9.33272 9.32366C9.15183 9.14058 9.01616 8.93134 8.92571 8.70576C8.83526 8.48018 8.79004 8.24152 8.79004 8.00286C8.79004 7.7642 8.83526 7.52554 8.92571 7.29996C9.01616 7.07437 9.15183 6.86514 9.33272 6.68206C9.51362 6.49898 9.72036 6.36166 9.94325 6.27012C10.1661 6.17858 10.4019 6.13281 10.6378 6.13281C10.8736 6.13281 11.1094 6.17858 11.3323 6.27012C11.5552 6.36166 11.7619 6.49898 11.9428 6.68206C12.1237 6.86514 12.2594 7.07437 12.3498 7.29996C12.4402 7.52554 12.4855 7.7642 12.4855 8.00286C12.4855 8.24152 12.4402 8.48018 12.3498 8.70576C12.2594 8.93134 12.1237 9.14058 11.9428 9.32366Z", "fill", "white"], ["d", "M12.6862 11.1445C12.6862 10.9778 12.7476 10.8111 12.8735 10.6836C13.2321 10.3207 13.5099 9.89892 13.6973 9.42814C13.8782 8.97371 13.9718 8.49312 13.9718 7.99945C13.9718 7.50579 13.8782 7.0252 13.6973 6.57076C13.5099 6.09998 13.2321 5.67824 12.8735 5.31535C12.6216 5.06034 12.6216 4.64841 12.8735 4.3934C13.1255 4.1384 13.5325 4.1384 13.7845 4.3934C14.2658 4.88053 14.6373 5.44612 14.8925 6.08037C15.138 6.69173 15.2607 7.33578 15.2607 7.99945C15.2607 8.66312 15.138 9.30718 14.8925 9.91854C14.6373 10.5528 14.2658 11.1184 13.7845 11.6055C13.5325 11.8605 13.1255 11.8605 12.8735 11.6055C12.7476 11.478 12.6862 11.3113 12.6862 11.1445Z", "fill", "white"], ["d", "M14.7663 13.2473C14.7663 13.0806 14.8276 12.9138 14.9536 12.7863C15.5932 12.139 16.0874 11.3871 16.4234 10.5468C16.7497 9.73606 16.9144 8.8795 16.9144 8.00005C16.9144 7.12061 16.7497 6.26405 16.4234 5.45326C16.0874 4.61305 15.5932 3.86111 14.9536 3.21379C14.7017 2.95878 14.7017 2.54685 14.9536 2.29184C15.2056 2.03683 15.6126 2.03683 15.8646 2.29184C16.6269 3.0634 17.2148 3.95919 17.6154 4.96287C18.003 5.93058 18.2 6.95061 18.2 8.00005C18.2 9.0495 18.003 10.0695 17.6154 11.0372C17.2148 12.0377 16.6237 12.9367 15.8646 13.7083C15.6126 13.9633 15.2056 13.9633 14.9536 13.7083C14.8276 13.5808 14.7663 13.414 14.7663 13.2473Z", "fill", "white"], ["d", "M16.8434 15.3491C16.8434 15.1824 16.9048 15.0156 17.0308 14.8881C17.9514 13.9564 18.6621 12.8742 19.1466 11.6646C19.615 10.4974 19.8508 9.2649 19.8508 7.99968C19.8508 6.73446 19.615 5.50193 19.1466 4.33479C18.6621 3.12514 17.9514 2.043 17.0308 1.11125C16.7788 0.856241 16.7788 0.444308 17.0308 0.189301C17.2827 -0.0657047 17.6897 -0.0657047 17.9417 0.189301C18.9819 1.24202 19.7894 2.47128 20.3386 3.84439C20.8683 5.16846 21.1364 6.56446 21.1364 7.99968C21.1364 9.43491 20.8683 10.8309 20.3386 12.155C19.7894 13.5248 18.9819 14.7541 17.9417 15.8101C17.6897 16.0651 17.2827 16.0651 17.0308 15.8101C16.9048 15.6826 16.8434 15.5158 16.8434 15.3491Z", "fill", "white"], ["d", "M8.58692 4.85438C8.58692 5.02111 8.52555 5.18785 8.39957 5.31535C8.04101 5.67824 7.7632 6.09998 7.57585 6.57076C7.39495 7.0252 7.30127 7.50579 7.30127 7.99945C7.30127 8.49312 7.39495 8.97371 7.57585 9.42814C7.7632 9.89892 8.04101 10.3207 8.39957 10.6836C8.65153 10.9386 8.65153 11.3505 8.39957 11.6055C8.1476 11.8605 7.74059 11.8605 7.48863 11.6055C7.00732 11.1184 6.63584 10.5528 6.38388 9.91854C6.13838 9.30718 6.01562 8.66312 6.01562 7.99945C6.01562 7.33578 6.13838 6.69173 6.38388 6.08037C6.63584 5.44612 7.01055 4.88053 7.48863 4.3934C7.74059 4.1384 8.1476 4.1384 8.39957 4.3934C8.52555 4.52091 8.58692 4.68764 8.58692 4.85438Z", "fill", "white"], ["d", "M6.50995 2.75281C6.50995 2.91955 6.44858 3.08628 6.3226 3.21379C5.683 3.86111 5.18877 4.61305 4.85282 5.45326C4.52656 6.26405 4.36182 7.12061 4.36182 8.00005C4.36182 8.8795 4.52656 9.73606 4.85282 10.5468C5.18877 11.3871 5.683 12.139 6.3226 12.7863C6.57456 13.0413 6.57456 13.4533 6.3226 13.7083C6.07063 13.9633 5.66362 13.9633 5.41166 13.7083C4.64931 12.9367 4.0614 12.0409 3.66085 11.0372C3.27322 10.0695 3.07617 9.0495 3.07617 8.00005C3.07617 6.95061 3.27322 5.93058 3.66085 4.96287C4.0614 3.96246 4.65254 3.0634 5.41166 2.29184C5.66362 2.03683 6.07063 2.03683 6.3226 2.29184C6.44858 2.41934 6.50995 2.58608 6.50995 2.75281Z", "fill", "white"], ["d", "M4.43268 0.650274C4.43268 0.817009 4.3713 0.983744 4.24532 1.11125C3.3247 2.043 2.61404 3.12514 2.1295 4.33479C1.66111 5.50193 1.4253 6.73446 1.4253 7.99968C1.4253 9.2649 1.66111 10.4974 2.1295 11.6646C2.61404 12.871 3.3247 13.9564 4.24532 14.8881C4.49728 15.1431 4.49728 15.5551 4.24532 15.8101C3.99336 16.0651 3.58635 16.0651 3.33439 15.8101C2.29424 14.7573 1.48667 13.5281 0.937526 12.155C0.407761 10.8309 0.139648 9.43491 0.139648 7.99968C0.139648 6.56445 0.407761 5.16846 0.937526 3.84439C1.48344 2.47455 2.29101 1.24529 3.33116 0.189301C3.58312 -0.0657047 3.99013 -0.0657047 4.24209 0.189301C4.36807 0.316805 4.42945 0.483539 4.42945 0.650274H4.43268Z", "fill", "white"], ["id", "clip0_11061_81599"], ["width", "21", "height", "16", "fill", "white", "transform", "translate(0.136719)"], [1, "grid"], [3, "actionClick", "actionsMenuOpen", "pageChange", "dataSource", "headerMap", "itemsCount", "sNo"], [1, "actions-popup"], [1, "popup-section"], [1, "section-title"], [1, "popup-button", 3, "click"], ["d", "M17.7143 8.07143H11.9286V2.28571C11.9286 1.57576 11.3528 1 10.6429 1H9.35714C8.64719 1 8.07143 1.57576 8.07143 2.28571V8.07143H2.28571C1.57576 8.07143 1 8.64719 1 9.35714V10.6429C1 11.3528 1.57576 11.9286 2.28571 11.9286H8.07143V17.7143C8.07143 18.4242 8.64719 19 9.35714 19H10.6429C11.3528 19 11.9286 18.4242 11.9286 17.7143V11.9286H17.7143C18.4242 11.9286 19 11.3528 19 10.6429V9.35714C19 8.64719 18.4242 8.07143 17.7143 8.07143Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "10", "viewBox", "0 0 20 10", "fill", "none"], ["d", "M14.7219 0C12.6562 0 11.0406 1.29063 10 2.45625C8.95938 1.29063 7.34375 0 5.27812 0C2.36875 0 0 2.24375 0 5C0 7.75625 2.36875 10 5.27812 10C7.34375 10 8.95938 8.70937 10 7.54375C11.0406 8.70937 12.6562 10 14.7219 10C17.6313 10 20 7.75625 20 5C20 2.24375 17.6313 0 14.7219 0ZM5.27812 7C4.02187 7 3 6.10313 3 5C3 3.89687 4.02187 3 5.27812 3C6.47187 3 7.57187 4.12813 8.21562 5C7.57812 5.8625 6.46875 7 5.27812 7ZM14.7219 7C13.5281 7 12.4281 5.87187 11.7844 5C12.4219 4.1375 13.5312 3 14.7219 3C15.9781 3 17 3.89687 17 5C17 6.10313 15.9781 7 14.7219 7Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "16", "viewBox", "0 0 14 16", "fill", "none"], ["d", "M13.625 15H13V0.75C13 0.335781 12.6642 0 12.25 0H1.75C1.33578 0 1 0.335781 1 0.75V15H0.375C0.167906 15 0 15.1679 0 15.375V16H14V15.375C14 15.1679 13.8321 15 13.625 15ZM4 2.375C4 2.16791 4.16791 2 4.375 2H5.625C5.83209 2 6 2.16791 6 2.375V3.625C6 3.83209 5.83209 4 5.625 4H4.375C4.16791 4 4 3.83209 4 3.625V2.375ZM4 5.375C4 5.16791 4.16791 5 4.375 5H5.625C5.83209 5 6 5.16791 6 5.375V6.625C6 6.83209 5.83209 7 5.625 7H4.375C4.16791 7 4 6.83209 4 6.625V5.375ZM5.625 10H4.375C4.16791 10 4 9.83209 4 9.625V8.375C4 8.16791 4.16791 8 4.375 8H5.625C5.83209 8 6 8.16791 6 8.375V9.625C6 9.83209 5.83209 10 5.625 10ZM8 15H6V12.375C6 12.1679 6.16791 12 6.375 12H7.625C7.83209 12 8 12.1679 8 12.375V15ZM10 9.625C10 9.83209 9.83209 10 9.625 10H8.375C8.16791 10 8 9.83209 8 9.625V8.375C8 8.16791 8.16791 8 8.375 8H9.625C9.83209 8 10 8.16791 10 8.375V9.625ZM10 6.625C10 6.83209 9.83209 7 9.625 7H8.375C8.16791 7 8 6.83209 8 6.625V5.375C8 5.16791 8.16791 5 8.375 5H9.625C9.83209 5 10 5.16791 10 5.375V6.625ZM10 3.625C10 3.83209 9.83209 4 9.625 4H8.375C8.16791 4 8 3.83209 8 3.625V2.375C8 2.16791 8.16791 2 8.375 2H9.625C9.83209 2 10 2.16791 10 2.375V3.625Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "14", "viewBox", "0 0 20 14", "fill", "none"], ["d", "M19.0801 9.66466C19.1614 9.22393 19.1614 8.77383 19.0801 8.33311L19.8865 7.86738C19.9802 7.81424 20.0209 7.70484 19.9896 7.6017C19.7802 6.92655 19.4208 6.31391 18.952 5.80755C18.8801 5.7294 18.7645 5.71065 18.6707 5.76379L17.8644 6.22952C17.5237 5.93883 17.1331 5.71378 16.7111 5.56374V4.63228C16.7111 4.52601 16.6361 4.43224 16.533 4.41036C15.836 4.25408 15.1266 4.26033 14.464 4.41036C14.3609 4.43224 14.2859 4.52601 14.2859 4.63228V5.56374C13.864 5.71378 13.4733 5.93883 13.1326 6.22952L12.3263 5.76379C12.2357 5.71065 12.1169 5.7294 12.045 5.80755C11.5762 6.31391 11.2168 6.92655 11.0074 7.6017C10.9762 7.70484 11.0199 7.81424 11.1105 7.86738L11.9169 8.33311C11.8356 8.77383 11.8356 9.22393 11.9169 9.66466L11.1105 10.1304C11.0168 10.1835 10.9762 10.2929 11.0074 10.3961C11.2168 11.0712 11.5762 11.6807 12.045 12.1902C12.1169 12.2684 12.2325 12.2871 12.3263 12.234L13.1326 11.7683C13.4733 12.0589 13.864 12.284 14.2859 12.434V13.3655C14.2859 13.4718 14.3609 13.5655 14.464 13.5874C15.161 13.7437 15.8704 13.7374 16.533 13.5874C16.6361 13.5655 16.7111 13.4718 16.7111 13.3655V12.434C17.1331 12.284 17.5237 12.0589 17.8644 11.7683L18.6707 12.234C18.7614 12.2871 18.8801 12.2684 18.952 12.1902C19.4208 11.6839 19.7802 11.0712 19.9896 10.3961C20.0209 10.2929 19.9771 10.1835 19.8865 10.1304L19.0801 9.66466ZM15.5016 10.5148C14.664 10.5148 13.9859 9.83344 13.9859 8.99888C13.9859 8.16432 14.6672 7.48292 15.5016 7.48292C16.3361 7.48292 17.0174 8.16432 17.0174 8.99888C17.0174 9.83344 16.3392 10.5148 15.5016 10.5148ZM3.00032 5.99821C4.10356 5.99821 5.00053 5.10114 5.00053 3.99777C5.00053 2.8944 4.10356 1.99732 3.00032 1.99732C1.89708 1.99732 1.00011 2.8944 1.00011 3.99777C1.00011 5.10114 1.89708 5.99821 3.00032 5.99821ZM10.0011 6.99844C10.0604 6.99844 10.1167 6.98281 10.1761 6.97968C10.4355 6.30141 10.8168 5.66376 11.3106 5.12927C11.5418 4.87921 11.87 4.73543 12.2138 4.73543C12.4294 4.73543 12.642 4.79169 12.8264 4.90109L13.0733 5.04488C13.0983 5.02925 13.1233 5.01675 13.1483 5.00112C13.367 4.54476 13.4983 4.0384 13.4983 3.50078C13.4983 1.56597 11.9325 0 9.99793 0C8.06335 0 6.50069 1.56285 6.50069 3.49766C6.50069 5.43246 8.06648 6.99844 10.0011 6.99844ZM13.2889 13.0779C13.217 13.0404 13.1451 12.9967 13.0764 12.956C12.8201 13.1061 12.5982 13.2623 12.2169 13.2623C11.8763 13.2623 11.5481 13.1186 11.3137 12.8685C10.7418 12.2496 10.3042 11.4963 10.0573 10.693C9.7229 9.61465 10.8355 9.13954 10.8636 9.12079C10.8605 9.03952 10.8605 8.95825 10.8636 8.87698L10.6167 8.7332C10.498 8.66443 10.398 8.57691 10.3105 8.48002C10.2073 8.48627 10.1073 8.49877 10.0042 8.49877C9.23535 8.49877 8.51652 8.31123 7.86333 7.99866H7.60393C5.61309 7.99866 4.00042 9.61152 4.00042 11.5995V12.4997C4.00042 13.328 4.67237 14 5.50058 14H13.4827C13.367 13.8125 13.2889 13.5999 13.2889 13.3655V13.0779ZM5.40995 7.57982C5.04741 7.22036 4.55048 6.99844 4.00042 6.99844H2.00021C0.89697 6.99844 0 7.89551 0 8.99888V9.99911C0 10.5524 0.446922 10.9993 1.00011 10.9993H3.0597C3.25659 9.51775 4.15044 8.2706 5.40995 7.57982Z", "fill", "#333333"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "17", "viewBox", "0 0 20 17", "fill", "none"], ["d", "M1.81818 17C1.31818 17 0.890303 16.8152 0.534545 16.4456C0.178788 16.076 0.000606061 15.6312 0 15.1111V3.30556H1.81818V15.1111H16.8182V17H1.81818ZM5.45455 13.2222C4.95455 13.2222 4.52667 13.0374 4.17091 12.6678C3.81515 12.2982 3.63697 11.8534 3.63636 11.3333V1.88889C3.63636 1.36944 3.81454 0.924926 4.17091 0.555333C4.52727 0.185741 4.95515 0.00062963 5.45455 0H18.1818C18.6818 0 19.11 0.185111 19.4664 0.555333C19.8227 0.925556 20.0006 1.37007 20 1.88889V11.3333C20 11.8528 19.8221 12.2976 19.4664 12.6678C19.1106 13.0381 18.6824 13.2229 18.1818 13.2222H5.45455ZM11.8182 8.78333L18.1818 4.17917V1.88889L11.8182 6.46944L5.45455 1.88889V4.17917L11.8182 8.78333Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "20", "viewBox", "0 0 18 20", "fill", "none"], ["d", "M1.71429 18.125C1.71429 18.6223 1.90619 19.0992 2.24777 19.4508C2.58935 19.8025 3.05264 20 3.53571 20H14.4643C14.9474 20 15.4106 19.8025 15.7522 19.4508C16.0938 19.0992 16.2857 18.6223 16.2857 18.125V5H1.71429V18.125ZM12.0357 8.125C12.0357 7.95924 12.0997 7.80027 12.2135 7.68306C12.3274 7.56585 12.4818 7.5 12.6429 7.5C12.8039 7.5 12.9583 7.56585 13.0722 7.68306C13.186 7.80027 13.25 7.95924 13.25 8.125V16.875C13.25 17.0408 13.186 17.1997 13.0722 17.3169C12.9583 17.4342 12.8039 17.5 12.6429 17.5C12.4818 17.5 12.3274 17.4342 12.2135 17.3169C12.0997 17.1997 12.0357 17.0408 12.0357 16.875V8.125ZM8.39286 8.125C8.39286 7.95924 8.45682 7.80027 8.57069 7.68306C8.68455 7.56585 8.83898 7.5 9 7.5C9.16103 7.5 9.31545 7.56585 9.42932 7.68306C9.54318 7.80027 9.60714 7.95924 9.60714 8.125V16.875C9.60714 17.0408 9.54318 17.1997 9.42932 17.3169C9.31545 17.4342 9.16103 17.5 9 17.5C8.83898 17.5 8.68455 17.4342 8.57069 17.3169C8.45682 17.1997 8.39286 17.0408 8.39286 16.875V8.125ZM4.75 8.125C4.75 7.95924 4.81397 7.80027 4.92783 7.68306C5.04169 7.56585 5.19612 7.5 5.35714 7.5C5.51817 7.5 5.6726 7.56585 5.78646 7.68306C5.90032 7.80027 5.96429 7.95924 5.96429 8.125V16.875C5.96429 17.0408 5.90032 17.1997 5.78646 17.3169C5.6726 17.4342 5.51817 17.5 5.35714 17.5C5.19612 17.5 5.04169 17.4342 4.92783 17.3169C4.81397 17.1997 4.75 17.0408 4.75 16.875V8.125ZM16.8929 1.25001H12.3393L11.9826 0.519538C11.907 0.363372 11.7906 0.232008 11.6465 0.140225C11.5024 0.0484421 11.3362 -0.00011828 11.1667 6.84872e-06H6.82946C6.66037 -0.000662313 6.49451 0.047717 6.35089 0.139602C6.20726 0.231487 6.09169 0.363161 6.01741 0.519538L5.66071 1.25001H1.10714C0.946119 1.25001 0.791689 1.31585 0.677828 1.43306C0.563967 1.55027 0.5 1.70925 0.5 1.87501L0.5 3.12501C0.5 3.29077 0.563967 3.44974 0.677828 3.56695C0.791689 3.68416 0.946119 3.75001 1.10714 3.75001H16.8929C17.0539 3.75001 17.2083 3.68416 17.3222 3.56695C17.436 3.44974 17.5 3.29077 17.5 3.12501V1.87501C17.5 1.70925 17.436 1.55027 17.3222 1.43306C17.2083 1.31585 17.0539 1.25001 16.8929 1.25001Z", "fill", "#EB583B"], [2, "color", "#EB583B"], ["title", "Add Workflow", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "18", "viewBox", "0 0 19 18", "fill", "none"], ["d", "M16.851 7.07143H11.0653V1.28571C11.0653 0.575759 10.4895 0 9.77958 0H8.49386C7.78391 0 7.20815 0.575759 7.20815 1.28571V7.07143H1.42243C0.712478 7.07143 0.136719 7.64719 0.136719 8.35714V9.64286C0.136719 10.3528 0.712478 10.9286 1.42243 10.9286H7.20815V16.7143C7.20815 17.4242 7.78391 18 8.49386 18H9.77958C10.4895 18 11.0653 17.4242 11.0653 16.7143V10.9286H16.851C17.561 10.9286 18.1367 10.3528 18.1367 9.64286V8.35714C18.1367 7.64719 17.561 7.07143 16.851 7.07143Z", "fill", "white"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "form-group"], [1, "custom-file"], ["type", "file", "id", "fileupload", "accept", ".json,application/json,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel", 1, "custom-file-input", 3, "change"], ["for", "fileupload", 1, "custom-file-label"], [1, "input-group"], ["style", "color: #dc3545;", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "click", "disabled"], [2, "color", "#dc3545"]], template: function WfComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "div")(5, "div", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "form", 6)(8, "div", 7)(9, "select", 8);
        \u0275\u0275listener("change", function WfComponent_Template_select_change_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ChangeStatus($event));
        });
        \u0275\u0275elementStart(10, "option", 9);
        \u0275\u0275text(11, "Change Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "option", 10);
        \u0275\u0275text(13, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "option", 11);
        \u0275\u0275text(15, "Inactive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 12);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.CreateNewVersion());
        });
        \u0275\u0275text(17, "New Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.OpenAdditionalPermission());
        });
        \u0275\u0275text(19, "Additional Permission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 12);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCompanyAssociation());
        });
        \u0275\u0275text(21, "Company Association");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 12);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.OpenGridConfigStaticCol());
        });
        \u0275\u0275text(23, "Grid Static Columns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 13);
        \u0275\u0275listener("change", function WfComponent_Template_select_change_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ChangeMode($event));
        });
        \u0275\u0275elementStart(25, "option", 9);
        \u0275\u0275text(26, "Change Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 14);
        \u0275\u0275text(28, "Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 15);
        \u0275\u0275text(30, "Published");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 12);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToVersionGrid());
        });
        \u0275\u0275text(32, "Live Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 12);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPublishToEnvironment());
        });
        \u0275\u0275text(34, "Publish To Environment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 16)(36, "button", 17);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          const bulkUpload_r2 = \u0275\u0275reference(74);
          return \u0275\u0275resetView(ctx.openBulkUpload(bulkUpload_r2));
        });
        \u0275\u0275element(37, "i", 18);
        \u0275\u0275text(38, "WF Upload Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 19);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openExportGridConfigurationPopup("Excel"));
        });
        \u0275\u0275element(40, "i", 20);
        \u0275\u0275text(41, "Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, WfComponent_div_42_Template, 42, 5, "div", 21);
        \u0275\u0275elementStart(43, "div", 22);
        \u0275\u0275template(44, WfComponent_button_44_Template, 3, 0, "button", 23);
        \u0275\u0275elementStart(45, "button", 24);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openExportGridConfigurationPopup("Excel"));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 25);
        \u0275\u0275element(47, "path", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "button", 27);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          const bulkUpload_r2 = \u0275\u0275reference(74);
          return \u0275\u0275resetView(ctx.openBulkUpload(bulkUpload_r2));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(49, "svg", 28);
        \u0275\u0275element(50, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "button", 30);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.OpenGridConfigStaticCol());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(52, "svg", 31);
        \u0275\u0275element(53, "path", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "button", 33);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.OpenAdditionalPermission());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 34);
        \u0275\u0275element(56, "path", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(57, "button", 36);
        \u0275\u0275listener("click", function WfComponent_Template_button_click_57_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToVersionGrid());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 37)(59, "g", 38);
        \u0275\u0275element(60, "path", 39)(61, "path", 40)(62, "path", 41)(63, "path", 42)(64, "path", 43)(65, "path", 44)(66, "path", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "defs")(68, "clipPath", 46);
        \u0275\u0275element(69, "rect", 47);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(70, "div", 4);
        \u0275\u0275elementStart(71, "div", 48)(72, "generic-grid", 49);
        \u0275\u0275listener("actionClick", function WfComponent_Template_generic_grid_actionClick_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.actionClick($event));
        })("actionsMenuOpen", function WfComponent_Template_generic_grid_actionsMenuOpen_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onActionsMenuOpen($event));
        })("pageChange", function WfComponent_Template_generic_grid_pageChange_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChange($event));
        })("actionsMenuOpen", function WfComponent_Template_generic_grid_actionsMenuOpen_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openActionsPopupAt($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(73, WfComponent_ng_template_73_Template, 21, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.DisplayName);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.WFForm);
        \u0275\u0275advance(35);
        \u0275\u0275property("ngIf", ctx.showActionsPopup);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isLoading && (!(ctx.dataSource == null ? null : ctx.dataSource.length) && (!(ctx.bodyData == null ? null : ctx.bodyData.GridFilters) || ctx.bodyData.GridFilters.length === 0)));
        \u0275\u0275advance(28);
        \u0275\u0275property("dataSource", ctx.dataSource)("headerMap", ctx.HeaderMap)("itemsCount", ctx.itemsCount)("sNo", false);
      }
    }, dependencies: [NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, GenericGridComponent, FormsModule, NgForm], styles: ['\n\n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n}\n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  background: #333 !important;\n  color: #fff !important;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]   .grid-pad[_ngcontent-%COMP%]   col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n.tableWrap[_ngcontent-%COMP%] {\n  overflow: visible;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0px;\n}\n.ColResize[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ColResize[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 5px;\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n  height: 100%;\n}\n.open-popup-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 25px;\n  min-width: fit-content;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 767.99px) {\n  .open-popup-btn[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 8px;\n  }\n}\n.config-icon[_ngcontent-%COMP%] {\n  line-height: 0;\n  padding: 7px;\n  color: #4d4d51;\n  font-size: 20px;\n  cursor: pointer;\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tags-list-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 12px;\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border-radius: 20px;\n  padding: 2px 5px 2px 10px;\n  margin: 3px;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #d0021b;\n  color: #fff;\n  border-radius: 50%;\n  margin-left: 5px;\n  font-size: 11px;\n  padding: 2px;\n  width: 20px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.resetFilter[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #eee;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n  margin: 5px;\n  text-align: center;\n  padding: 4px 10px 2px;\n  width: auto;\n  color: black;\n  border-bottom: 3px solid black;\n  text-decoration: none;\n  font-weight: bold;\n  letter-spacing: 0.43px;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #4c9d01;\n  color: #4c9d01;\n}\n.table-filters-group[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n  border-top: 1px solid #cbcbcb;\n  border-bottom: 1px solid #cbcbcb;\n  padding: 0px;\n}\n@media (max-width: 768px) {\n  .table-filters-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.export-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  width: 20%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  display: inline-block;\n  height: 34px;\n  padding: 5px;\n  margin-left: 10px;\n  line-height: 28px;\n  text-decoration: none;\n  color: #5a5a5a;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%] {\n  float: right;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f2f2f2;\n  border: 1px solid #cbcbcb;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  outline: none;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn.calendar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n.basicTable[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 126, 72, 0.1) !important;\n}\n.color-code[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: 0 2px 3px 0;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 30px;\n}\n.sListing2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-top: solid 1px #c3c3c3;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n@media (min-width: 992px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 1000px !important;\n  }\n}\n.checkboxMargin[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.drag-grip[_ngcontent-%COMP%] {\n  padding-right: 4px;\n  padding-top: 2px;\n  color: #ccc;\n  font-size: 12px;\n  cursor: move;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.btn-primary-special[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image:\n    linear-gradient(\n      to bottom,\n      #fff 0%,\n      #fff 100%);\n  border: 1px solid #ccc;\n  color: #333 !important;\n  border-radius: 5px;\n}\n.btn-small[_ngcontent-%COMP%] {\n  height: 26px;\n  padding: 0px 5px 0px 5px;\n  font-size: 1rem;\n  margin: 0px 0px 0px 10px;\n}\n.btnFltr[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  color: #fff;\n  background-color: #a6a6a6;\n  padding: 5px 10px;\n  margin: 0px 0px 10px 10px;\n  text-decoration: none !important;\n}\n.display-name[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 6px 10px;\n  width: 469.906px;\n  height: 36px;\n  background-color: #fff;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #666;\n  margin-right: 8px;\n  font-size: 14px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  background: transparent;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #007bff;\n  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);\n}\n.file-info-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #4D4D51;\n}\n.file-info-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-right: 4px;\n}\n.file-info-container[_ngcontent-%COMP%]   .formats[_ngcontent-%COMP%] {\n  color: #EB583B;\n  font-weight: 500;\n}\n.file-info-container[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.file-info-container[_ngcontent-%COMP%]   .max-size[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 12px;\n}\n.popup-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #EB583B;\n}\n.BMForm-Actions[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 20%;\n  overflow: auto;\n}\n.actions-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1050;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: max-content;\n  max-width: max-content;\n  overflow: auto;\n  height: 300px;\n  backdrop-filter: blur(10px);\n}\n.actions-popup[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -8px;\n  left: 20px;\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid white;\n  z-index: 1;\n}\n.actions-popup[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -9px;\n  left: 20px;\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ddd;\n  z-index: 0;\n}\n.actions-popup.arrow-right[_ngcontent-%COMP%]::before {\n  left: auto;\n  right: 20px;\n}\n.actions-popup.arrow-right[_ngcontent-%COMP%]::after {\n  left: auto;\n  right: 20px;\n}\n.actions-popup.arrow-left-top[_ngcontent-%COMP%]::before {\n  top: auto;\n  bottom: -8px;\n  border-bottom: none;\n  border-top: 8px solid white;\n}\n.actions-popup.arrow-left-top[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: -9px;\n  border-bottom: none;\n  border-top: 8px solid #ddd;\n}\n.actions-popup.arrow-right-top[_ngcontent-%COMP%]::before {\n  top: auto;\n  bottom: -8px;\n  left: auto;\n  right: 20px;\n  border-bottom: none;\n  border-top: 8px solid white;\n}\n.actions-popup.arrow-right-top[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: -9px;\n  left: auto;\n  right: 20px;\n  border-bottom: none;\n  border-top: 8px solid #ddd;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  background: #f8f9fa;\n  border-radius: 8px 8px 0 0;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #666;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .popup-strip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 40px;\n  top: 100%;\n  height: 34px;\n  background: #0d6efd;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  gap: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .strip-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  font-size: 12px;\n  padding: 4px 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.actions-popup[_ngcontent-%COMP%]   .linklike[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin-right: 12px;\n  color: #0d6efd;\n  cursor: pointer;\n}\n.actions-popup[_ngcontent-%COMP%]   .actions-popup[_ngcontent-%COMP%] {\n  padding-top: 36px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  padding: 8px 16px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #333;\n  border-radius: 4px;\n  margin: 0 8px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(2px);\n  color: #EB583B;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  margin-right: 12px;\n  font-size: 12px;\n  color: #666;\n  transition: color 0.2s ease;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  margin-left: 10px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 12px;\n  background: white;\n  transition: all 0.2s ease;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n}\n.actions-popup[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popupFadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_popupFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.btn-outline-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  .actions-popup[_ngcontent-%COMP%] {\n    min-width: 250px;\n    max-width: 280px;\n    overflow: auto;\n  }\n  .actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n  }\n  .actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.Strip[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 5px 5px 0 0;\n  background: #005996;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  margin: 8px 0;\n}\n.icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  background: none;\n  border: none;\n}\n.accordion[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 460px;\n  border-top: 1px solid #BDBDBD;\n  margin: 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n/*# sourceMappingURL=wf.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfComponent, { className: "WfComponent", filePath: "src\\app\\admin\\wf\\wf.component.ts", lineNumber: 43 });
})();

// src/app/admin/wf/wf-routing.module.ts
var routes = [
  { path: "", component: WfComponent },
  {
    path: "wfd",
    loadChildren: () => import("./chunk-THJXGG6S.js").then((m) => m.WfdModule)
  },
  {
    path: "wfcondition",
    loadChildren: () => import("./chunk-X7E74KNQ.js").then((m) => m.WfConditionsModule)
  },
  {
    path: "wfroleassociation",
    loadChildren: () => import("./chunk-C7JR2DAZ.js").then((m) => m.WfRoleGridComponentRoutingModule)
  }
];
var WfRoutingModule = class _WfRoutingModule {
  static {
    this.\u0275fac = function WfRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WfRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/wf/components/pages/save-stagestate-condition/save-stagestate-condition.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
function SaveStagestateConditionComponent_form_0_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 65);
    \u0275\u0275text(1, "Create New Record");
    \u0275\u0275elementEnd();
  }
}
function SaveStagestateConditionComponent_form_0_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 65);
    \u0275\u0275text(1, "Update Record");
    \u0275\u0275elementEnd();
  }
}
function SaveStagestateConditionComponent_form_0_ng_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bm_r3 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", bm_r3.BMID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bm_r3.BMNAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bmog_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", bmog_r4.BMOGNAME);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bmog_r4.BMOGNAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "span");
    \u0275\u0275text(3, "This field is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_3_li_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_section_64_div_3_li_5_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const stage_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.AddStageFilter(stage_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btnStageFilterText_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btnStageFilterText_r8, "");
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, SaveStagestateConditionComponent_form_0_section_64_div_3_li_5_a_4_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stage_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r7.WFOSNAM);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.GridStageFilter[stage_r7.GUID] == void 0 ? "Add" : "Added");
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_3_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_section_64_div_3_li_9_Template_a_click_4_listener() {
      const stage_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.DeleteStageFilter(stage_r10));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stage_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r10.WFOSNAM);
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "ul");
    \u0275\u0275template(5, SaveStagestateConditionComponent_form_0_section_64_div_3_li_5_Template, 5, 2, "li", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 77)(7, "div", 75)(8, "ul", 78);
    \u0275\u0275listener("cdkDropListDropped", function SaveStagestateConditionComponent_form_0_section_64_div_3_Template_ul_cdkDropListDropped_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dropColumn($event));
    });
    \u0275\u0275template(9, SaveStagestateConditionComponent_form_0_section_64_div_3_li_9_Template, 6, 1, "li", 79);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.StageList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.StageFilterList);
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_4_li_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_section_64_div_4_li_5_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const state_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.AddStateFilter(state_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btnStateFilterText_r14 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btnStateFilterText_r14, "");
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_4_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, SaveStagestateConditionComponent_form_0_section_64_div_4_li_5_a_4_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const state_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r13.States);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.GridStateFilter[state_r13.GUID] == void 0 ? "Add" : "Added");
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_4_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_section_64_div_4_li_9_Template_a_click_4_listener() {
      const state_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.DeleteStateFilter(state_r16));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const state_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r16.States);
  }
}
function SaveStagestateConditionComponent_form_0_section_64_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "ul");
    \u0275\u0275template(5, SaveStagestateConditionComponent_form_0_section_64_div_4_li_5_Template, 5, 2, "li", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 77)(7, "div", 75)(8, "ul", 78);
    \u0275\u0275listener("cdkDropListDropped", function SaveStagestateConditionComponent_form_0_section_64_div_4_Template_ul_cdkDropListDropped_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dropColumn($event));
    });
    \u0275\u0275template(9, SaveStagestateConditionComponent_form_0_section_64_div_4_li_9_Template, 6, 1, "li", 79);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.StateList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.StateFilterList);
  }
}
function SaveStagestateConditionComponent_form_0_section_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 68)(1, "div", 69)(2, "div", 70);
    \u0275\u0275template(3, SaveStagestateConditionComponent_form_0_section_64_div_3_Template, 10, 2, "div", 71)(4, SaveStagestateConditionComponent_form_0_section_64_div_4_Template, 10, 2, "div", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.stageState == "Stage");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stageState == "State");
  }
}
function SaveStagestateConditionComponent_form_0_ng_option_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dmo_r17 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", dmo_r17.NAME);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dmo_r17.NAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_110_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 83);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 43)(14, "a", 84);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_110_tr_1_Template_a_click_14_listener() {
      const filter_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.DeleteConditionFilter(filter_r19));
    });
    \u0275\u0275text(15, "Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const filter_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(filter_r19.DmoName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(filter_r19.ConditionExpression);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(filter_r19.ComparisonValue);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(filter_r19.Operator);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SaveStagestateConditionComponent_form_0_ng_container_110_tr_1_Template, 16, 4, "tr", 76);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.WFConditionFilter);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "span");
    \u0275\u0275text(3, "This field is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_133_li_9_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_133_li_9_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const bmo_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.AddBmoFilter(bmo_r22));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btnBmoFilterText_r23 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btnBmoFilterText_r23, "");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_133_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, SaveStagestateConditionComponent_form_0_ng_container_133_li_9_a_4_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bmo_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bmo_r22.BMONAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.GridBmoFilter[bmo_r22.GUID] == void 0 ? "Add" : "Added");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_133_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_133_li_13_Template_a_click_4_listener() {
      const bmo_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.DeleteBmoFilter(bmo_r25));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bmo_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bmo_r25.BMONAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 68)(2, "div", 69)(3, "div", 70)(4, "div", 72)(5, "div", 73)(6, "div", 74)(7, "div", 75)(8, "ul");
    \u0275\u0275template(9, SaveStagestateConditionComponent_form_0_ng_container_133_li_9_Template, 5, 2, "li", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 75)(12, "ul", 78);
    \u0275\u0275listener("cdkDropListDropped", function SaveStagestateConditionComponent_form_0_ng_container_133_Template_ul_cdkDropListDropped_12_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropColumn($event));
    });
    \u0275\u0275template(13, SaveStagestateConditionComponent_form_0_ng_container_133_li_13_Template, 6, 1, "li", 79);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.BmoList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.BmoFilterList);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_134_li_9_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_134_li_9_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const dmg_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.AddDmgFilter(dmg_r28));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btnDmgFilterText_r29 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btnDmgFilterText_r29, "");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_134_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, SaveStagestateConditionComponent_form_0_ng_container_134_li_9_a_4_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dmg_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dmg_r28.BMONAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.GridDmgFilter[dmg_r28.GUID] == void 0 ? "Add" : "Added");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_134_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_134_li_13_Template_a_click_4_listener() {
      const dmg_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.DeleteDmgFilter(dmg_r31));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dmg_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dmg_r31.BMONAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 68)(2, "div", 69)(3, "div", 70)(4, "div", 72)(5, "div", 73)(6, "div", 74)(7, "div", 75)(8, "ul");
    \u0275\u0275template(9, SaveStagestateConditionComponent_form_0_ng_container_134_li_9_Template, 5, 2, "li", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 75)(12, "ul", 78);
    \u0275\u0275listener("cdkDropListDropped", function SaveStagestateConditionComponent_form_0_ng_container_134_Template_ul_cdkDropListDropped_12_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropColumn($event));
    });
    \u0275\u0275template(13, SaveStagestateConditionComponent_form_0_ng_container_134_li_13_Template, 6, 1, "li", 79);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.DmgList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.DmgFilterList);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_135_li_9_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_135_li_9_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const dmo_r34 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.AddDmoFilter(dmo_r34));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btnDmoFilterText_r35 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btnDmoFilterText_r35, "");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_135_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, SaveStagestateConditionComponent_form_0_ng_container_135_li_9_a_4_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dmo_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dmo_r34.BMONAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.GridDmoFilter[dmo_r34.GUID] == void 0 ? "Add" : "Added");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_135_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_135_li_13_Template_a_click_4_listener() {
      const dmo_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.DeleteDmoFilter(dmo_r37));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dmo_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dmo_r37.BMONAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 68)(2, "div", 69)(3, "div", 70)(4, "div", 72)(5, "div", 73)(6, "div", 74)(7, "div", 75)(8, "ul");
    \u0275\u0275template(9, SaveStagestateConditionComponent_form_0_ng_container_135_li_9_Template, 5, 2, "li", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 75)(12, "ul", 78);
    \u0275\u0275listener("cdkDropListDropped", function SaveStagestateConditionComponent_form_0_ng_container_135_Template_ul_cdkDropListDropped_12_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropColumn($event));
    });
    \u0275\u0275template(13, SaveStagestateConditionComponent_form_0_ng_container_135_li_13_Template, 6, 1, "li", 79);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.CondAreaDmoList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.DmoFilterList);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_136_li_9_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_136_li_9_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const trigger_r40 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.AddTriggerFilter(trigger_r40));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btntriggerFilterText_r41 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btntriggerFilterText_r41, "");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_136_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, SaveStagestateConditionComponent_form_0_ng_container_136_li_9_a_4_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trigger_r40 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trigger_r40.WFONAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.GridTriggerFilter[trigger_r40.GUID] == void 0 ? "Add" : "Added");
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_136_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 81);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_ng_container_136_li_13_Template_a_click_4_listener() {
      const trigger_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.DeleteTriggerFilter(trigger_r43));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trigger_r43 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trigger_r43.WFONAME);
  }
}
function SaveStagestateConditionComponent_form_0_ng_container_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 68)(2, "div", 69)(3, "div", 70)(4, "div", 72)(5, "div", 73)(6, "div", 74)(7, "div", 75)(8, "ul");
    \u0275\u0275template(9, SaveStagestateConditionComponent_form_0_ng_container_136_li_9_Template, 5, 2, "li", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 75)(12, "ul", 78);
    \u0275\u0275listener("cdkDropListDropped", function SaveStagestateConditionComponent_form_0_ng_container_136_Template_ul_cdkDropListDropped_12_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dropColumn($event));
    });
    \u0275\u0275template(13, SaveStagestateConditionComponent_form_0_ng_container_136_li_13_Template, 6, 1, "li", 79);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.TriggerList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.TriggerFilterList);
  }
}
function SaveStagestateConditionComponent_form_0_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "This field is required");
    \u0275\u0275elementEnd()();
  }
}
function SaveStagestateConditionComponent_form_0_div_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "This field is required");
    \u0275\u0275elementEnd()();
  }
}
function SaveStagestateConditionComponent_form_0_div_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "This field is required");
    \u0275\u0275elementEnd()();
  }
}
function SaveStagestateConditionComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function SaveStagestateConditionComponent_form_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div")(2, "div", 2);
    \u0275\u0275template(3, SaveStagestateConditionComponent_form_0_h4_3_Template, 2, 0, "h4", 3)(4, SaveStagestateConditionComponent_form_0_h4_4_Template, 2, 0, "h4", 3);
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275element(6, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
    \u0275\u0275text(12, "Condition Name*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9)(15, "label", 12);
    \u0275\u0275text(16, "Version*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "label", 10);
    \u0275\u0275text(21, "Status*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ng-select", 14)(23, "ng-option", 15);
    \u0275\u0275text(24, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ng-option", 16);
    \u0275\u0275text(26, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ng-option", 17);
    \u0275\u0275text(28, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 9)(30, "label", 12);
    \u0275\u0275text(31, "Business Model*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(32);
    \u0275\u0275elementStart(33, "ng-select", 18);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_ng_select_change_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ChangeBM($event));
    });
    \u0275\u0275elementStart(34, "ng-option", 19);
    \u0275\u0275text(35, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, SaveStagestateConditionComponent_form_0_ng_option_36_Template, 2, 2, "ng-option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "label", 10);
    \u0275\u0275text(40, "Business Model Object Group*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ng-select", 21)(42, "ng-option", 19);
    \u0275\u0275text(43, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, SaveStagestateConditionComponent_form_0_ng_option_44_Template, 2, 2, "ng-option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 9)(46, "label", 10);
    \u0275\u0275text(47, "Long Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 22);
    \u0275\u0275text(49, "            ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 8)(51, "div", 23)(52, "label", 10);
    \u0275\u0275text(53, "Conditional Level*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 24)(55, "label", 25);
    \u0275\u0275text(56, " Stage ");
    \u0275\u0275elementStart(57, "input", 26);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_input_change_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ChangeStageState($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "label", 25);
    \u0275\u0275text(60, " State ");
    \u0275\u0275elementStart(61, "input", 28);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_input_change_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ChangeStageState($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, SaveStagestateConditionComponent_form_0_ng_container_63_Template, 4, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, SaveStagestateConditionComponent_form_0_section_64_Template, 5, 2, "section", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 8)(66, "div", 23)(67, "section")(68, "table", 31)(69, "thead")(70, "tr", 32)(71, "th")(72, "span");
    \u0275\u0275text(73, "Data Model Object name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "th", 33)(75, "span");
    \u0275\u0275text(76, "Condition Exp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "th")(78, "span");
    \u0275\u0275text(79, "Comparison Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "th", 33)(81, "span");
    \u0275\u0275text(82, "Logical Operator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "th", 34)(84, "span");
    \u0275\u0275text(85, "Actions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "tbody")(87, "tr", 32)(88, "td")(89, "ng-select", 35)(90, "ng-option", 15);
    \u0275\u0275text(91, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(92, SaveStagestateConditionComponent_form_0_ng_option_92_Template, 2, 2, "ng-option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "td", 33)(94, "ng-select", 36)(95, "ng-option", 37);
    \u0275\u0275text(96, "Equals to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "ng-option", 38);
    \u0275\u0275text(98, "Not equals to");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "td");
    \u0275\u0275element(100, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "td", 33)(102, "ng-select", 40)(103, "ng-option", 41);
    \u0275\u0275text(104, "AND");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "ng-option", 42);
    \u0275\u0275text(106, "OR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "td", 43)(108, "a", 44);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_Template_a_click_108_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.AddConditionFilter());
    });
    \u0275\u0275text(109, "Add ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(110, SaveStagestateConditionComponent_form_0_ng_container_110_Template, 2, 1, "ng-container", 29);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(111, "div", 8)(112, "div", 23)(113, "label", 10);
    \u0275\u0275text(114, "Please Select the Condition Area*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 24)(116, "label", 25);
    \u0275\u0275text(117, " Section ");
    \u0275\u0275elementStart(118, "input", 45);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_input_change_118_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ChangeBMO($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "label", 25);
    \u0275\u0275text(121, " Card ");
    \u0275\u0275elementStart(122, "input", 46);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_input_change_122_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ChangeDMG($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "label", 25);
    \u0275\u0275text(125, " Data Model Object ");
    \u0275\u0275elementStart(126, "input", 47);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_input_change_126_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.Changedmo($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(127, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "label", 25);
    \u0275\u0275text(129, " Trigger ");
    \u0275\u0275elementStart(130, "input", 48);
    \u0275\u0275listener("change", function SaveStagestateConditionComponent_form_0_Template_input_change_130_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ChangeTrigger($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(131, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(132, SaveStagestateConditionComponent_form_0_ng_container_132_Template, 4, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(133, SaveStagestateConditionComponent_form_0_ng_container_133_Template, 14, 2, "ng-container", 29)(134, SaveStagestateConditionComponent_form_0_ng_container_134_Template, 14, 2, "ng-container", 29)(135, SaveStagestateConditionComponent_form_0_ng_container_135_Template, 14, 2, "ng-container", 29)(136, SaveStagestateConditionComponent_form_0_ng_container_136_Template, 14, 2, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 8)(138, "div", 49)(139, "div", 50)(140, "label", 10);
    \u0275\u0275text(141, "Enabled?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 51)(143, "label", 25);
    \u0275\u0275text(144, " Yes ");
    \u0275\u0275element(145, "input", 52)(146, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "label", 25);
    \u0275\u0275text(148, " No ");
    \u0275\u0275element(149, "input", 53)(150, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "label", 25);
    \u0275\u0275text(152, " NA ");
    \u0275\u0275element(153, "input", 54)(154, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(155, SaveStagestateConditionComponent_form_0_div_155_Template, 3, 0, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 50)(157, "label", 10);
    \u0275\u0275text(158, "Mandatory?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "div", 51)(160, "label", 25);
    \u0275\u0275text(161, " Yes ");
    \u0275\u0275element(162, "input", 56)(163, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "label", 25);
    \u0275\u0275text(165, " No ");
    \u0275\u0275element(166, "input", 57)(167, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "label", 25);
    \u0275\u0275text(169, " NA ");
    \u0275\u0275element(170, "input", 58)(171, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(172, SaveStagestateConditionComponent_form_0_div_172_Template, 3, 0, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "div", 50)(174, "label", 10);
    \u0275\u0275text(175, "Visible?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div", 51)(177, "label", 25);
    \u0275\u0275text(178, " Yes ");
    \u0275\u0275element(179, "input", 59)(180, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "label", 25);
    \u0275\u0275text(182, " No ");
    \u0275\u0275element(183, "input", 60)(184, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "label", 25);
    \u0275\u0275text(186, " NA ");
    \u0275\u0275element(187, "input", 61)(188, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(189, SaveStagestateConditionComponent_form_0_div_189_Template, 3, 0, "div", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(190, "div", 62)(191, "button", 63);
    \u0275\u0275listener("click", function SaveStagestateConditionComponent_form_0_Template_button_click_191_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275text(192, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "button", 64);
    \u0275\u0275text(194, "Save");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.WFCondForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEdit);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c03, ctx_r1.submitted && (ctx_r1.f.Name.errors == null ? null : ctx_r1.f.Name.errors.required)));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c03, ctx_r1.submitted && (ctx_r1.f.Version.errors == null ? null : ctx_r1.f.Version.errors.required)));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c03, ctx_r1.submitted && ctx_r1.f.Status.value === "-1"));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c03, ctx_r1.submitted && ctx_r1.f.BMID.value === "-1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.WfBMList);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c03, ctx_r1.submitted && ctx_r1.f.BMOGNAM.value === "-1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.BMOGList);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.submitted && ((ctx_r1.f.ConditionLevel.errors == null ? null : ctx_r1.f.ConditionLevel.errors.required) || ctx_r1.stageState === "Stage" && ctx_r1.StageFilterList.length === 0 || ((ctx_r1.f.ConditionLevel.errors == null ? null : ctx_r1.f.ConditionLevel.errors.required) || ctx_r1.stageState === "State" && ctx_r1.StateFilterList.length === 0)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stageState == "Stage" || ctx_r1.stageState == "State");
    \u0275\u0275advance(25);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c03, ctx_r1.isFilterSubmit && ctx_r1.f.DmoName.value === "-1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.DmoList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c03, ctx_r1.isFilterSubmit && (ctx_r1.Condition.value === "" || ctx_r1.Condition.value === "undefined")));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(41, _c03, ctx_r1.isFilterSubmit && (ctx_r1.f.ComparisonValue.value === "" || ctx_r1.f.ComparisonValue.value === "undefined")));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(43, _c03, ctx_r1.isFilterSubmit && (ctx_r1.LogicalOperator.value === "" || ctx_r1.LogicalOperator.value === "undefined")));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.disableAdd);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.WFConditionFilter);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx_r1.submitted && ((ctx_r1.f.ConditionArea.errors == null ? null : ctx_r1.f.ConditionArea.errors.required) || ctx_r1.CondArea === "BusinessModelObject" && ctx_r1.BmoFilterList.length === 0 || ((ctx_r1.f.ConditionArea.errors == null ? null : ctx_r1.f.ConditionArea.errors.required) || ctx_r1.CondArea === "DataModelGroup" && ctx_r1.DmgFilterList.length === 0) || ((ctx_r1.f.ConditionArea.errors == null ? null : ctx_r1.f.ConditionArea.errors.required) || ctx_r1.CondArea === "DataModelObject" && ctx_r1.DmoFilterList.length === 0) || ((ctx_r1.f.ConditionArea.errors == null ? null : ctx_r1.f.ConditionArea.errors.required) || ctx_r1.CondArea === "Trigger" && ctx_r1.TriggerFilterList.length === 0)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.BmoList && ctx_r1.CondArea === "BusinessModelObject");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.DmgList && ctx_r1.CondArea === "DataModelGroup");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.CondAreaDmoList && ctx_r1.CondArea === "DataModelObject");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.TriggerList && ctx_r1.CondArea === "Trigger");
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.submitted && (ctx_r1.f.Enabled.errors == null ? null : ctx_r1.f.Enabled.errors.required));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r1.submitted && (ctx_r1.f.Mandatory.errors == null ? null : ctx_r1.f.Mandatory.errors.required));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r1.submitted && (ctx_r1.f.Visible.errors == null ? null : ctx_r1.f.Visible.errors.required));
  }
}
var SaveStagestateConditionComponent = class _SaveStagestateConditionComponent {
  constructor(formBuilder, toastr, http, router, activeModal, wfsrvc, route) {
    this.formBuilder = formBuilder;
    this.toastr = toastr;
    this.http = http;
    this.router = router;
    this.activeModal = activeModal;
    this.wfsrvc = wfsrvc;
    this.route = route;
    this.submitted = false;
    this.loading = false;
    this.BMList = [{ id: 1, Value: "select1" }, { id: 2, Value: "select2" }, { id: 3, Value: "select3" }];
    this.GridColumnList = [];
    this.GridStateFilter = {};
    this.GridStageFilter = {};
    this.GridBmoFilter = {};
    this.GridDmgFilter = {};
    this.GridDmoFilter = {};
    this.GridTriggerFilter = {};
    this.StateFilterList = [];
    this.StageFilterList = [];
    this.BmoFilterList = [];
    this.DmgFilterList = [];
    this.DmoFilterList = [];
    this.TriggerFilterList = [];
    this.CondArea = "";
    this.disableAdd = true;
    this.WFConditionFilter = [];
    this.isFilterSubmit = false;
    this.isEdit = false;
  }
  ngOnInit() {
    this.WFCondForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Version: ["", Validators.required],
      Description: [""],
      Status: ["-1", [Validators.required]],
      BMID: ["-1", [Validators.required]],
      BMOGNAM: ["-1", [Validators.required]],
      DmoName: ["-1"],
      Condition: ["Equals to"],
      ComparisonValue: [""],
      LogicalOperator: ["AND"],
      ConditionArea: ["", [Validators.required]],
      Visible: ["2"],
      Mandatory: ["0"],
      Enabled: ["1"],
      ConditionLevel: ["", [Validators.required]]
    });
    if (!!this.WFId) {
      this.getWFBM(this.WFId);
    }
    if (this.isEdit === false) {
      this.WFCondForm.get("Version").patchValue(this.Version);
    }
  }
  get f() {
    return this.WFCondForm.controls;
  }
  closeModal() {
    this.activeModal.close(true);
  }
  dropColumn(event) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }
  AddStageFilter(Stage) {
    if (this.GridStageFilter[Stage.GUID] === void 0) {
      this.GridStageFilter[Stage.GUID] = "1";
      this.StageFilterList.push(Stage);
    }
  }
  DeleteStageFilter(Stage) {
    const stageData = this.StageFilterList.indexOf(Stage);
    if (stageData > -1) {
      this.StageFilterList.splice(stageData, 1);
    }
    delete this.GridStageFilter[Stage.GUID];
  }
  AddStateFilter(State) {
    if (this.GridStateFilter[State.GUID] === void 0) {
      this.GridStateFilter[State.GUID] = "1";
      this.StateFilterList.push(State);
    }
  }
  DeleteStateFilter(State) {
    const txt = this.StateFilterList.indexOf(State);
    if (txt > -1) {
      this.StateFilterList.splice(txt, 1);
    }
    delete this.GridStateFilter[State.GUID];
  }
  AddBmoFilter(bmo) {
    if (this.GridBmoFilter[bmo.GUID] === void 0) {
      this.GridBmoFilter[bmo.GUID] = "1";
      this.BmoFilterList.push(bmo);
    }
  }
  DeleteBmoFilter(bmo) {
    const txt = this.BmoFilterList.indexOf(bmo);
    if (txt > -1) {
      this.BmoFilterList.splice(txt, 1);
    }
    delete this.GridBmoFilter[bmo.GUID];
  }
  AddDmgFilter(dmg) {
    if (this.GridDmgFilter[dmg.GUID] === void 0) {
      this.GridDmgFilter[dmg.GUID] = "1";
      this.DmgFilterList.push(dmg);
    }
  }
  DeleteDmgFilter(dmg) {
    const txt = this.DmgFilterList.indexOf(dmg);
    if (txt > -1) {
      this.DmgFilterList.splice(txt, 1);
    }
    delete this.GridDmgFilter[dmg.GUID];
  }
  AddDmoFilter(dmo) {
    if (this.GridDmoFilter[dmo.GUID] === void 0) {
      this.GridDmoFilter[dmo.GUID] = "1";
      this.DmoFilterList.push(dmo);
    }
  }
  DeleteDmoFilter(dmo) {
    const txt = this.DmoFilterList.indexOf(dmo);
    if (txt > -1) {
      this.DmoFilterList.splice(txt, 1);
    }
    delete this.GridDmoFilter[dmo.GUID];
  }
  AddTriggerFilter(trigger) {
    if (this.GridTriggerFilter[trigger.GUID] === void 0) {
      this.GridTriggerFilter[trigger.GUID] = "1";
      this.TriggerFilterList.push(trigger);
    }
  }
  DeleteTriggerFilter(trigger) {
    const txt = this.TriggerFilterList.indexOf(trigger);
    if (txt > -1) {
      this.TriggerFilterList.splice(txt, 1);
    }
    delete this.GridTriggerFilter[trigger.GUID];
  }
  getWFBM(wfid) {
    this.wfsrvc.getwfBM(wfid).subscribe((res) => {
      this.WfBMList = res.Data;
      if (this.isEdit) {
        this.getWFConditionDetail(this.ConditionID);
      }
    }, (error) => {
      console.log(error);
    });
  }
  ChangeBM(bmid) {
    this.wfsrvc.getBMOGList(bmid).subscribe((res) => {
      if (!!res) {
        this.BMOGList = res.Data;
        this.getDmoBasedOnBMId(bmid);
      }
    }, (error) => {
      console.log(error);
    });
  }
  ChangeStageState(event) {
    this.stageState = this.isEdit === true ? event : event.target.value;
    this.wfsrvc.GetStageStateByWFID(this.WFId, this.stageState).subscribe((res) => {
      if (!!res) {
        if (this.stageState === "Stage") {
          this.StageList = res.Data;
        } else {
          this.StateList = res.Data;
        }
        if (this.isEdit) {
          const condlevel = this.dataList.CondLevel;
          const stagestatefilter = condlevel.StageStateGuids.split(",");
          if (condlevel.ConditionLevel === "State" && this.StateList.length > 0) {
            this.StateList.forEach((element) => {
              stagestatefilter.forEach((e) => {
                if (element["GUID"] === e) {
                  this.StateFilterList.push(element);
                  if (this.GridStateFilter[element["GUID"]] === void 0) {
                    this.GridStateFilter[element["GUID"]] = "1";
                  }
                }
              });
            });
          }
          if (condlevel.ConditionLevel === "Stage" && this.StageList.length > 0) {
            this.StageList.forEach((element) => {
              stagestatefilter.forEach((e) => {
                if (element["GUID"] === e) {
                  this.StageFilterList.push(element);
                  if (this.GridStageFilter[element["GUID"]] === void 0) {
                    this.GridStageFilter[element["GUID"]] = "1";
                  }
                }
              });
            });
          }
        }
      }
    }, (error) => {
      console.log(error);
    });
  }
  getDmoBasedOnBMId(bmid) {
    this.wfsrvc.getDmoBasedOnBMId(bmid).subscribe((res) => {
      if (!!res) {
        this.DmoList = res.Data;
      }
    }, (error) => {
      console.log(error);
    });
  }
  ChangeBMO(event) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get("BMID").value;
    const bmogname = this.WFCondForm.get("BMOGNAM").value;
    if (!!bmid && bmid !== "-1" && !!bmogname && bmogname !== "-1") {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe((result) => {
        if (!!result) {
          this.BmoList = result.data;
          this.DmgList = [];
          this.CondAreaDmoList = [];
          this.TriggerList = [];
          if (this.isEdit && this.BmoList.length > 0) {
            const condarea = this.dataList.Area;
            const bmofilter = condarea.BmObjectGuids.split(",");
            if (this.BmoList.length > 0) {
              this.BmoList.forEach((element) => {
                bmofilter.forEach((e) => {
                  if (element["GUID"] === e) {
                    this.BmoFilterList.push(element);
                    if (this.GridBmoFilter[element["GUID"]] === void 0) {
                      this.GridBmoFilter[element["GUID"]] = "1";
                    }
                  }
                });
              });
            }
          }
        }
      }, (error) => {
      });
    } else {
      if (bmid === void 0 || bmid === "-1" || (bmogname === void 0 || bmogname === "-1"))
        this.toastr.warning("Plz Select Buisness Model & Business Model Object Group first.");
    }
  }
  ChangeDMG(event) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get("BMID").value;
    const bmogname = this.WFCondForm.get("BMOGNAM").value;
    if (!!bmid && bmid !== "-1" && !!bmogname && bmogname !== "-1") {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe((result) => {
        if (!!result) {
          this.DmgList = result.data;
          this.CondAreaDmoList = [];
          this.TriggerList = [];
          this.BmoList = [];
          if (this.isEdit && this.DmgList.length > 0) {
            const condarea = this.dataList.Area;
            const dmgfilter = condarea.BmObjectGuids.split(",");
            if (this.DmgList.length > 0) {
              this.DmgList.forEach((element) => {
                dmgfilter.forEach((e) => {
                  if (element["GUID"] === e) {
                    this.DmgFilterList.push(element);
                    if (this.GridDmgFilter[element["GUID"]] === void 0) {
                      this.GridDmgFilter[element["GUID"]] = "1";
                    }
                  }
                });
              });
            }
          }
        }
      }, (error) => {
      });
    } else {
      if (bmid === void 0 || bmid === "-1" || (bmogname === void 0 || bmogname === "-1"))
        this.toastr.warning("Plz Select Buisness Model & Business Model Object Group first.");
    }
  }
  Changedmo(event) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get("BMID").value;
    const bmogname = this.WFCondForm.get("BMOGNAM").value;
    if (!!bmid && bmid !== "-1" && !!bmogname && bmogname !== "-1") {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe((result) => {
        if (!!result) {
          this.CondAreaDmoList = result.data;
          this.TriggerList = [];
          this.BmoList = [];
          this.DmgList = [];
          if (this.isEdit && this.CondAreaDmoList.length > 0) {
            const condarea = this.dataList.Area;
            const dmofilter = condarea.BmObjectGuids.split(",");
            if (this.CondAreaDmoList.length > 0) {
              this.CondAreaDmoList.forEach((element) => {
                dmofilter.forEach((e) => {
                  if (element["GUID"] === e) {
                    this.DmoFilterList.push(element);
                    if (this.GridDmoFilter[element["GUID"]] === void 0) {
                      this.GridDmoFilter[element["GUID"]] = "1";
                    }
                  }
                });
              });
            }
          }
        }
      }, (error) => {
      });
    } else {
      if (bmid === void 0 || bmid === "-1" || (bmogname === void 0 || bmogname === "-1"))
        this.toastr.warning("Plz Select Buisness Model & Business Model Object Group first.");
    }
  }
  ChangeTrigger(event) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get("BMID").value;
    const bmogname = this.WFCondForm.get("BMOGNAM").value;
    if (!!bmid && bmid !== "-1" && !!bmogname && bmogname !== "-1") {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe((result) => {
        if (!!result) {
          this.TriggerList = result.data;
          this.BmoList = [];
          this.DmgList = [];
          this.CondAreaDmoList = [];
          if (this.isEdit && this.TriggerList.length > 0) {
            const condarea = this.dataList.Area;
            const triggerfilter = condarea.BmObjectGuids.split(",");
            if (this.TriggerList.length > 0) {
              this.TriggerList.forEach((element) => {
                triggerfilter.forEach((e) => {
                  if (element["GUID"] === e) {
                    this.TriggerFilterList.push(element);
                    if (this.GridTriggerFilter[element["GUID"]] === void 0) {
                      this.GridTriggerFilter[element["GUID"]] = "1";
                    }
                  }
                });
              });
            }
          }
        }
      }, (error) => {
      });
    } else {
      if (bmid === void 0 || bmid === "-1" || (bmogname === void 0 || bmogname === "-1"))
        this.toastr.warning("Plz Select Buisness Model & Business Model Object Group first.");
    }
  }
  AddConditionFilter() {
    const dmoname = this.WFCondForm.get("DmoName").value;
    const condition = this.WFCondForm.get("Condition").value;
    const comparisonval = this.WFCondForm.get("ComparisonValue").value;
    const logicopr = this.WFCondForm.get("LogicalOperator").value;
    if (!!dmoname && dmoname !== "-1" && !!condition && !!comparisonval && !!logicopr) {
      const dmoid = this.DmoList.filter((x) => x["NAME"] == dmoname)[0]["GlobalID"];
      this.isFilterSubmit = false;
      const filter = { DmoName: dmoname, DmoId: dmoid, Operator: logicopr, ComparisonValue: comparisonval, ConditionExpression: condition };
      if (this.WFConditionFilter.length > 0) {
        if (this.WFConditionFilter.find((x) => x.DmoName == dmoname && x.ConditionExpression == condition && x.ComparisonValue == comparisonval && x.Operator == logicopr)) {
          this.toastr.warning("Same condition is already added");
          return false;
        }
      }
      this.WFConditionFilter.push(filter);
      this.WFCondForm.get("DmoName").patchValue("-1");
      this.WFCondForm.get("ComparisonValue").patchValue("");
    } else {
      this.disableAdd = true;
      this.isFilterSubmit = true;
    }
  }
  DeleteConditionFilter(filter) {
    const filterData = this.WFConditionFilter.indexOf(filter);
    if (filterData > -1) {
      this.WFConditionFilter.splice(filterData, 1);
    }
  }
  getBodyData() {
    let ConditionLevel = "";
    let ConditionArea = "";
    if (this.stageState === "Stage") {
      this.StageFilterList.forEach((el) => {
        ConditionLevel = ConditionLevel + el.GUID + ",";
      });
    } else {
      this.StateFilterList.forEach((el) => {
        ConditionLevel = el.GUID + ",";
      });
    }
    ConditionLevel = ConditionLevel.slice(0, -1);
    if (this.CondArea === "BusinessModelObject") {
      this.BmoFilterList.forEach((el) => {
        ConditionArea = ConditionArea + el.GUID + ",";
      });
    } else if (this.CondArea === "DataModelGroup") {
      this.DmgFilterList.forEach((el) => {
        ConditionArea = ConditionArea + el.GUID + ",";
      });
    } else if (this.CondArea === "DataModelObject") {
      this.DmoFilterList.forEach((el) => {
        ConditionArea = ConditionArea + el.GUID + ",";
      });
    } else {
      this.TriggerFilterList.forEach((el) => {
        ConditionArea = ConditionArea + el.GUID + ",";
      });
    }
    ConditionArea = ConditionArea.substring(0, ConditionArea.length - 1);
    const bodyData = {
      CondID: this.isEdit === true ? this.ConditionID : "",
      Description: this.WFCondForm.get("Description").value,
      Name: this.WFCondForm.get("Name").value,
      Version: this.WFCondForm.get("Version").value,
      BMID: this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get("BMID").value,
      BMOGNAM: this.WFCondForm.get("BMOGNAM").value,
      WFID: this.WFId,
      Status: this.WFCondForm.get("Status").value,
      Area: { conditionArea: this.CondArea, bmObjectGuids: ConditionArea },
      Enabled: this.WFCondForm.get("Enabled").value,
      Mandatory: this.WFCondForm.get("Mandatory").value,
      Visible: this.WFCondForm.get("Visible").value,
      CondLevel: { conditionLevel: this.stageState, stageStateGuids: ConditionLevel },
      Filter: this.WFConditionFilter
    };
    return bodyData;
  }
  onSubmit() {
    this.submitted = true;
    if (this.WFCondForm.invalid) {
      return;
    }
    if (this.stageState === "Stage" && this.StageFilterList.length === 0 || this.stageState === "State" && this.StateFilterList.length === 0) {
      return;
    }
    if (this.CondArea === "BusinessModelObject" && this.BmoFilterList.length === 0 || this.CondArea === "DataModelGroup" && this.DmgFilterList.length === 0 || this.CondArea === "DataModelObject" && this.DmoFilterList.length === 0 || this.CondArea === "Trigger" && this.TriggerFilterList.length === 0) {
      return;
    }
    const bodyData = this.getBodyData();
    this.wfsrvc.SaveWFCondition(bodyData).subscribe((result) => {
      if (result === "Sucess." || result?.message === "Sucess.") {
        this.activeModal.close(true);
        return true;
      }
    }, (error) => {
      console.log(error);
    });
  }
  getWFConditionDetail(CondId) {
    this.wfsrvc.GetWFConditionDetail(CondId).subscribe((result) => {
      this.dataList = result;
      this.initState(this.dataList);
    }, (error) => {
      console.log(error);
    });
  }
  initState(dataList) {
    if (this.isEdit === true) {
      const bmid = this.WfBMList.filter((x) => x["BMID"] === dataList.BMID)[0]["BMNAME"];
      this.WFCondForm.get("BMID").patchValue(bmid);
      this.WFCondForm.get("BMID").disable();
      this.getDmoBasedOnBMId(dataList.BMID);
      this.WFCondForm.get("BMOGNAM").patchValue(dataList?.BMOGNAM);
      this.WFCondForm.get("Description").patchValue(dataList?.Description);
      this.WFCondForm.get("Name").patchValue(dataList?.Name);
      this.WFCondForm.get("Status").patchValue(dataList?.Status);
      this.WFCondForm.get("Version").patchValue(dataList?.Version);
      this.WFCondForm.get("Version").disable();
      this.WFCondForm.get("Enabled").patchValue(dataList?.Enabled);
      this.WFCondForm.get("Mandatory").patchValue(dataList?.Mandatory);
      this.WFCondForm.get("Visible").patchValue(dataList?.Visible);
      const condlevel = dataList.CondLevel;
      this.ChangeStageState(condlevel.ConditionLevel);
      this.WFCondForm.get("ConditionLevel").patchValue(condlevel.ConditionLevel);
      const ConditionArea = dataList.Area;
      this.WFCondForm.get("ConditionArea").patchValue(ConditionArea.ConditionArea);
      if (ConditionArea.ConditionArea === "BusinessModelObject") {
        this.ChangeBMO(ConditionArea.ConditionArea);
      }
      if (ConditionArea.ConditionArea === "DataModelGroup") {
        this.ChangeDMG(ConditionArea.ConditionArea);
      }
      if (ConditionArea.ConditionArea === "DataModelObject") {
        this.Changedmo(ConditionArea.ConditionArea);
      }
      if (ConditionArea.ConditionArea === "Trigger") {
        this.ChangeTrigger(ConditionArea.ConditionArea);
      }
      const WFConditionFilter = dataList.Filter;
      if (WFConditionFilter.length > 0) {
        WFConditionFilter.forEach((res) => {
          this.WFConditionFilter.push(res);
        });
      }
    }
  }
  static {
    this.\u0275fac = function SaveStagestateConditionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaveStagestateConditionComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaveStagestateConditionComponent, selectors: [["app-save-stagestate-condition"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "modal-header"], ["class", "modal-titlewf", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [1, "form-group", "row"], [1, "col-sm-6"], ["for", "ex2", 1, "input-label"], ["id", "Name", "type", "text", "formControlName", "Name", 1, "form-control", 3, "ngClass"], ["for", "ex3", 1, "input-label"], ["disabled", "", "id", "FriendlyName", "type", "text", "formControlName", "Version", 1, "form-control", 3, "ngClass"], ["formControlName", "Status", 1, "form-control", 3, "ngClass"], ["value", "-1"], ["value", "1"], ["value", "0"], ["formControlName", "BMID", 1, "form-control", 3, "change", "ngClass"], ["value", "-1", "selected", "true"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "BMOGNAM", 1, "form-control", 3, "ngClass"], ["formControlName", "Description", "id", "LongDesc", "placeholder", "", "name", "Description", 1, "form-control"], [1, "col-sm-12"], [1, "col-sm-12", "d-flex", "input-group"], [1, "radio-container", "ng-star-inserted"], ["id", "stage1", "type", "radio", "formControlName", "ConditionLevel", "name", "ConditionLevel", "value", "Stage", 1, "ng-dirty", "ng-valid", "ng-touched", 3, "change"], [1, "checkmark"], ["id", "state1", "formControlName", "ConditionLevel", "type", "radio", "name", "ConditionLevel", "value", "State", 1, "ng-dirty", "ng-valid", "ng-touched", 3, "change"], [4, "ngIf"], ["aria-label", "Modal heading text content", "class", "modal-body", "role", "document", 4, "ngIf"], [1, "basicTable", "stripped", 2, "border-top", "0", "border-right", "0", "border-left", "0"], [1, "span-row"], [2, "width", "134px"], [1, "text-center", 2, "width", "80px"], ["formControlName", "DmoName", 1, "form-control", 3, "ngClass"], ["formControlName", "Condition", 1, "form-control", 3, "ngClass"], ["value", "Equals to"], ["value", "Not equals to"], ["formControlName", "ComparisonValue", "id", "FriendlyName", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "LogicalOperator", 1, "form-control", 3, "ngClass"], ["value", "AND"], ["value", "OR"], [1, "d-flex", "align-items-center", "justify-content-around"], ["title", "Save", 1, "save-btn", 2, "color", "#4C9E00", "cursor", "pointer", 3, "click", "disabled"], ["formControlName", "ConditionArea", "id", "bmo1", "type", "radio", "name", "ConditionArea", "value", "BusinessModelObject", 1, "ng-dirty", "ng-valid", "ng-touched", 3, "change"], ["formControlName", "ConditionArea", "id", "dmg1", "type", "radio", "name", "ConditionArea", "value", "DataModelGroup", 1, "ng-dirty", "ng-valid", "ng-touched", 3, "change"], ["formControlName", "ConditionArea", "id", "dmo1", "type", "radio", "name", "ConditionArea", "value", "DataModelObject", 1, "ng-dirty", "ng-valid", "ng-touched", 3, "change"], ["formControlName", "ConditionArea", "id", "inlineRadio1", "type", "radio", "name", "ConditionArea", "value", "Trigger", 1, "ng-dirty", "ng-valid", "ng-touched", 3, "change"], [1, "col-sm-12", "row"], [1, "col-sm-4"], [1, "d-flex", "input-group"], ["id", "e1", "type", "radio", "formControlName", "Enabled", "name", "Enabled", "value", "1", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "e2", "type", "radio", "formControlName", "Enabled", "name", "Enabled", "value", "0", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "e3", "type", "radio", "formControlName", "Enabled", "name", "Enabled", "value", "2", 1, "ng-dirty", "ng-valid", "ng-touched"], ["class", "invalid-feedback1", 4, "ngIf"], ["id", "m1", "type", "radio", "formControlName", "Mandatory", "value", "1", "name", "Mandatory", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "m2", "type", "radio", "formControlName", "Mandatory", "name", "Mandatory", "value", "0", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "m3", "type", "radio", "formControlName", "Mandatory", "name", "Mandatory", "value", "2", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "v1", "type", "radio", "formControlName", "Visible", "name", "Visible", "value", "1", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "v2", "type", "radio", "formControlName", "Visible", "name", "Visible", "value", "0", 1, "ng-dirty", "ng-valid", "ng-touched"], ["id", "v3", "type", "radio", "formControlName", "Visible", "name", "Visible", "value", "2", 1, "ng-dirty", "ng-valid", "ng-touched"], [1, "update_detail"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "modal-titlewf"], [3, "value"], [1, "invalid-feedback1"], ["aria-label", "Modal heading text content", "role", "document", 1, "modal-body"], [1, "fWrap", "sections"], [1, "form-row", "nomar"], ["class", "drag_grid state-filter-wrap col-sm-12", 4, "ngIf"], [1, "drag_grid", "state-filter-wrap", "col-sm-12"], [1, "row"], [1, "left_cell"], [1, "scroll_wrap"], [4, "ngFor", "ngForOf"], [1, "right_cell"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["class", "pop", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["cdkDrag", "", 1, "pop"], [2, "padding-left", "10px"], ["title", "Delete", 1, "save-btn", 2, "color", "#4C9E00", "cursor", "pointer", 3, "click"]], template: function SaveStagestateConditionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SaveStagestateConditionComponent_form_0_Template, 195, 45, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.WFCondForm);
      }
    }, dependencies: [NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass, NgSelectComponent, NgOptionComponent, NgForOf, CdkDropList, CdkDrag], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.modal-body[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\n.update_detail[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n  padding: 40px 0 25px;\n  text-align: right;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 150px;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-color: #4C9E00;\n  background-color: #fff;\n  color: #4C9E00;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.drag_grid.state-filter-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: 0px !important;\n}\n.drag_grid[_ngcontent-%COMP%] {\n  border: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  text-align: left;\n  width: 50%;\n  padding: 20px 15px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: 600px;\n  margin: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%] {\n  width: auto;\n  height: 205px;\n  overflow: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  margin: 0px;\n  padding-left: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  border-bottom: 2px solid #dfdfdf;\n  cursor: default;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: left;\n  height: 26px;\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 50px;\n  text-align: right;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .left_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .right_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.selectFilter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: radio;\n  width: auto;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  border: 1px solid #56AF31;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  background: #56AF31;\n  border: 0.5px solid #56AF31;\n  width: 8px;\n  height: 8px;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  color: #fff;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n  background-color: #4C9E00;\n}\n/*# sourceMappingURL=save-stagestate-condition.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaveStagestateConditionComponent, { className: "SaveStagestateConditionComponent", filePath: "src\\app\\admin\\wf\\components\\pages\\save-stagestate-condition\\save-stagestate-condition.component.ts", lineNumber: 20 });
})();

// src/app/admin/wf/wf.module.ts
var WfModule = class _WfModule {
  static {
    this.\u0275fac = function WfModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WfModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      DragDropModule,
      WfRoutingModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      NgSelectModule,
      WfComponent,
      // GenericGridComponent,
      WfconditionsComponent,
      SaveStagestateConditionComponent,
      AdditionalPermissionComponent,
      WorkflowSaveUpdateComponent,
      WfRoleGridComponent,
      GridConfigStaticColComponent
    ] });
  }
};
export {
  WfModule
};
//# sourceMappingURL=chunk-5XYFIPU7.js.map
