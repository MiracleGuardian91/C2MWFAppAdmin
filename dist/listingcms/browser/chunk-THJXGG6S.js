import {
  BpmnService,
  DetailService,
  DiagramService,
  ElementDetail,
  StateSpecificationType,
  TriggerActionType,
  TriggerType,
  WorkflowDetailComponent,
  getTriggerType,
  require_guid
} from "./chunk-QNS63SVX.js";
import {
  NAME_VALIDATORS
} from "./chunk-IZC66MGR.js";
import {
  MatExpansionPanel,
  MatExpansionPanelHeader
} from "./chunk-LNAQ2UNQ.js";
import {
  CompanyAssociationComponent,
  FormViewApiService,
  GenerateXmlComponent,
  MatDialog
} from "./chunk-NIXK6VWY.js";
import "./chunk-AZ2LSUZA.js";
import {
  ElementType,
  EventDef,
  WorkflowApiService,
  getEventDef,
  isStateType
} from "./chunk-RF35KVRW.js";
import {
  EditorConfigService,
  ListColumnType,
  ListComponent
} from "./chunk-FKDZX6HV.js";
import {
  Status
} from "./chunk-74OCJGBF.js";
import {
  CustomSelectComponent,
  QuillEditorComponent,
  QuillModule,
  TreeListComponent,
  arrayToList,
  constructId,
  keyValueListToKeyList,
  objToList,
  primitiveArrayToList,
  toFormArray,
  toFormGroup
} from "./chunk-BQKXR4UC.js";
import {
  SharedModule
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import "./chunk-ILK2XUKT.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  MessageService
} from "./chunk-43FCU5DY.js";
import "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NgbActiveModal,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ToastrService,
  UntypedFormBuilder,
  UntypedFormControl,
  UtilService,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  EventEmitter,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Router,
  RouterModule,
  Subject,
  Title,
  firstValueFrom,
  map,
  of,
  switchMap,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/admin/wf/wfd/components/stage-detail/stage-detail.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
var _c1 = (a0) => ({ toolbar: a0 });
function StageDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "New Stage");
    \u0275\u0275elementEnd();
  }
}
function StageDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Stage Details");
    \u0275\u0275elementEnd();
  }
}
function StageDetailComponent_form_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " Duplicate name ");
    \u0275\u0275elementEnd();
  }
}
function StageDetailComponent_form_7_button_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function StageDetailComponent_form_7_button_44_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function StageDetailComponent_form_7_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function StageDetailComponent_form_7_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, StageDetailComponent_form_7_button_44_ng_container_1_Template, 2, 0, "ng-container", 2)(2, StageDetailComponent_form_7_button_44_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newElement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newElement);
  }
}
function StageDetailComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "div", 8)(3, "label");
    \u0275\u0275text(4, "Workflow Stage Name ");
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275listener("blur", function StageDetailComponent_form_7_Template_input_blur_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CheckValidationWF());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StageDetailComponent_form_7_div_9_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Friendly Name ");
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "br")(16, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8)(18, "label");
    \u0275\u0275text(19, "Status ");
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "select", 13)(24, "option", 14);
    \u0275\u0275text(25, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 15);
    \u0275\u0275text(27, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "Short Description ");
    \u0275\u0275elementStart(31, "span", 9);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "br")(34, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17)(36, "label");
    \u0275\u0275text(37, "Long Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "br");
    \u0275\u0275elementStart(39, "div", 18);
    \u0275\u0275element(40, "quill-editor", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 20)(42, "button", 21);
    \u0275\u0275listener("click", function StageDetailComponent_form_7_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(43, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, StageDetailComponent_form_7_button_44_Template, 3, 2, "button", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("background-color", !ctx_r1.newElement ? "#e9ecef" : "white");
    \u0275\u0275property("readonly", !ctx_r1.newElement)("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx_r1.submitted && ctx_r1.f.name.errors || ctx_r1.f.name.errors && !ctx_r1.f.name.errors.required || (ctx_r1.f.name.errors == null ? null : ctx_r1.f.name.errors.duplicate)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.name == null ? null : ctx_r1.f.name.errors == null ? null : ctx_r1.f.name.errors.duplicate);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, ctx_r1.submitted && ctx_r1.f.friendlyName.errors || ctx_r1.f.friendlyName.errors && !ctx_r1.f.friendlyName.errors.required));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, ctx_r1.submitted && ctx_r1.f.status.errors || ctx_r1.f.status.errors && !ctx_r1.f.status.errors.required));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c0, ctx_r1.submitted && ctx_r1.f.shortDescription.errors || ctx_r1.f.shortDescription.errors && !ctx_r1.f.shortDescription.errors.required));
    \u0275\u0275advance(6);
    \u0275\u0275property("modules", \u0275\u0275pureFunction1(19, _c1, ctx_r1.editorConfig.toolbar));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.published);
  }
}
var StageDetailComponent = class _StageDetailComponent extends ElementDetail {
  constructor(route, fb, ref, msg, wfapi, detailService, editorConfigService) {
    super(fb, ref, msg);
    this.route = route;
    this.wfapi = wfapi;
    this.detailService = detailService;
    this.editorConfigService = editorConfigService;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.processName = params["processName"];
      this.verNo = params["VerNo"];
      this.id = params["id"];
    });
    this.form = this.fb.group({
      name: [this.data.StageName, NAME_VALIDATORS],
      friendlyName: [this.data.DisplayName, Validators.required],
      status: [
        this.newElement ? Status.Active : this.data.Status,
        Validators.required
      ],
      shortDescription: [this.data.ShortDescription, Validators.required],
      longDescription: [this.data.LongDescription]
    });
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const payload = __spreadProps(__spreadValues({}, this.form.value), {
        accessToken: localStorage.getItem("AccessToken"),
        wfoId: this.data.WfoId || "",
        workFlowId: this.workflow.WFID
      });
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
  CheckValidationWF() {
    if (this.newElement === false || !this.form.controls["name"].value) {
      return;
    }
    const processName = this.processName;
    const type = "stage";
    const wfId = this.id;
    const name = this.form.controls["name"].value;
    const version = this.verNo;
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate) => {
        this.detailService.handleValidationResult(isDuplicate, this.form.controls["name"]);
      },
      error: (error) => {
        this.detailService.handleValidationError(error);
      }
    });
  }
  static {
    this.\u0275fac = function StageDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StageDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(DetailService), \u0275\u0275directiveInject(EditorConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StageDetailComponent, selectors: [["app-stage-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "double-column"], [1, "form-group", "span-6"], [2, "color", "red"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "blur", "readonly", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "friendlyName", 1, "form-control", 3, "ngClass"], ["formControlName", "status", 1, "form-control", 3, "ngClass"], ["value", "1"], ["value", "0"], ["type", "text", "formControlName", "shortDescription", 1, "form-control", 3, "ngClass"], [1, "form-group", "span-6", "span-12"], [1, "Ql-container"], ["formControlName", "longDescription", 1, "Ql-InsideContainer", 3, "modules"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function StageDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, StageDetailComponent_h2_2_Template, 2, 0, "h2", 2)(3, StageDetailComponent_h2_3_Template, 2, 0, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function StageDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275template(7, StageDetailComponent_form_7_Template, 45, 21, "form", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newElement);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newElement);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgClass,
      QuillModule,
      QuillEditorComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StageDetailComponent, { className: "StageDetailComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\stage-detail\\stage-detail.component.ts", lineNumber: 30 });
})();

// src/app/admin/wf/wfd/components/state-detail/state-detail.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
var _c12 = (a0) => ({ toolbar: a0 });
function StateDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "New State");
    \u0275\u0275elementEnd();
  }
}
function StateDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "State Details");
    \u0275\u0275elementEnd();
  }
}
function StateDetailComponent_form_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Duplicate name ");
    \u0275\u0275elementEnd();
  }
}
function StateDetailComponent_form_7_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2, "State Specification");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br")(4, "app-custom-select", 28);
    \u0275\u0275pipe(5, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(5, 4, ctx_r1.data.StateSpecification == null ? null : ctx_r1.data.StateSpecification.AvailableStateSpecification))("readonly", true)("submitted", ctx_r1.submitted);
  }
}
function StateDetailComponent_form_7_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "label");
    \u0275\u0275text(3, "Subprocess ");
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "br")(7, "app-custom-select", 29);
    \u0275\u0275pipe(8, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "label");
    \u0275\u0275text(11, "Subprocess End State ");
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "br")(15, "app-custom-select", 30);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(8, 7, ctx_r1.data.SubProcess == null ? null : ctx_r1.data.SubProcess.AvailableSubProcess))("submitted", ctx_r1.submitted);
    \u0275\u0275advance(8);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(16, 9, ctx_r1.endStateList$))("multiple", true)("submitted", ctx_r1.submitted);
  }
}
function StateDetailComponent_form_7_button_64_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function StateDetailComponent_form_7_button_64_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function StateDetailComponent_form_7_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function StateDetailComponent_form_7_button_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, StateDetailComponent_form_7_button_64_ng_container_1_Template, 2, 0, "ng-container", 2)(2, StateDetailComponent_form_7_button_64_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newElement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newElement);
  }
}
function StateDetailComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "div", 8)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275listener("blur", function StateDetailComponent_form_7_Template_input_blur_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CheckValidationWF());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StateDetailComponent_form_7_div_9_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Friendly Name ");
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "br")(16, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8)(18, "label");
    \u0275\u0275text(19, "Status ");
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "select", 13)(24, "option", 14);
    \u0275\u0275text(25, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 15);
    \u0275\u0275text(27, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "Short Description ");
    \u0275\u0275elementStart(31, "span", 9);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "br")(34, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17)(36, "label");
    \u0275\u0275text(37, "Long Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "br");
    \u0275\u0275elementStart(39, "div", 18);
    \u0275\u0275element(40, "quill-editor", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, StateDetailComponent_form_7_div_41_Template, 6, 6, "div", 20);
    \u0275\u0275elementStart(42, "div", 8)(43, "label");
    \u0275\u0275text(44, "Role Available ");
    \u0275\u0275elementStart(45, "span", 9);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(47, "br")(48, "app-custom-select", 21);
    \u0275\u0275pipe(49, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 8)(51, "label");
    \u0275\u0275text(52, "Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "br")(54, "app-list", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 8)(56, "label");
    \u0275\u0275text(57, "Trigger List");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "br")(59, "app-tree-list", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, StateDetailComponent_form_7_ng_container_60_Template, 17, 11, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 24)(62, "button", 25);
    \u0275\u0275listener("click", function StateDetailComponent_form_7_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(63, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, StateDetailComponent_form_7_button_64_Template, 3, 2, "button", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.name, " Name ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", !ctx_r1.newElement ? "#e9ecef" : "white");
    \u0275\u0275property("readonly", !ctx_r1.newElement)("ngClass", \u0275\u0275pureFunction1(25, _c02, ctx_r1.submitted && ctx_r1.f.name.errors || ctx_r1.f.name.errors && !ctx_r1.f.name.errors.required || (ctx_r1.f.name.errors == null ? null : ctx_r1.f.name.errors.duplicate)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.name == null ? null : ctx_r1.f.name.errors == null ? null : ctx_r1.f.name.errors.duplicate);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c02, ctx_r1.submitted && ctx_r1.f.friendlyName.errors || ctx_r1.f.friendlyName.errors && !ctx_r1.f.friendlyName.errors.required));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c02, ctx_r1.submitted && ctx_r1.f.status.errors || ctx_r1.f.status.errors && !ctx_r1.f.status.errors.required));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c02, ctx_r1.submitted && ctx_r1.f.shortDescription.errors || ctx_r1.f.shortDescription.errors && !ctx_r1.f.shortDescription.errors.required));
    \u0275\u0275advance(6);
    \u0275\u0275property("modules", \u0275\u0275pureFunction1(33, _c12, ctx_r1.editorConfig.toolbar));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubProcess);
    \u0275\u0275advance(7);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(49, 23, ctx_r1.data.StateRole == null ? null : ctx_r1.data.StateRole.AvailableRoles))("multiple", true)("submitted", ctx_r1.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275property("parentForm", ctx_r1.form)("config", ctx_r1.checkList);
    \u0275\u0275advance(5);
    \u0275\u0275property("items", ctx_r1.data.TriggerList)("displayWith", ctx_r1.displayTrigger)("dragDrop", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubProcess);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.published);
  }
}
var t = ElementType;
var StateDetailComponent = class _StateDetailComponent extends ElementDetail {
  constructor(wfapi, route, detail, fb, ref, msg, editorConfigService) {
    super(fb, ref, msg);
    this.wfapi = wfapi;
    this.route = route;
    this.detail = detail;
    this.editorConfigService = editorConfigService;
    this.displayTrigger = (t4) => t4.TRGDISPNAME;
  }
  get isSubProcess() {
    return this.element.type === t.SubProcess;
  }
  get name() {
    return this.isSubProcess ? "Subprocess" : "State";
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.processName = params["processName"];
      this.verNo = params["VerNo"];
      this.id = params["id"];
    });
    this.endStateList$ = of(this.newElement ? [] : objToList(this.data.SubProcessEndStates.AvailableSubProcessEndState));
    if (this.isSubProcess) {
      this.formActions = [
        {
          controlName: "subProcessID",
          handler: (id) => this.endStateListHandler(typeof id === "string" ? id : id.key)
        }
      ];
    }
    this.checkList = {
      columns: [
        {
          key: "Description",
          displayValue: "Description",
          placeholder: "Enter checklist name",
          validators: [Validators.required]
        }
      ],
      checkbox: true,
      actions: { add: true, delete: true, edit: true }
    };
    this.form = this.fb.group({
      name: [this.newElement ? "" : this.data.Name, NAME_VALIDATORS],
      friendlyName: [this.newElement ? "" : this.data.FriendlyName, Validators.required],
      status: [this.newElement ? Status.Active : this.data.Status, Validators.required],
      shortDescription: [this.newElement ? "" : this.data.ShortDescription, Validators.required],
      longDescription: [this.newElement ? "" : this.data.LongDescription],
      stateRole: [this.newElement ? "" : objToList(this.data.StateRole.SelectedRoles), [Validators.required]],
      stateSpecification: [this._setStateSpec(), [Validators.required]],
      subProcessID: [
        this.isSubProcess ? objToList(this.data?.SubProcess?.SelectedSubProcess)[0] || "" : "",
        this.isSubProcess ? [Validators.required] : []
      ],
      subProcessEndStateIds: [
        objToList(this.data.SubProcessEndStates?.SelectedSubProcessEndState),
        this.isSubProcess ? [Validators.required] : []
      ],
      checkList: toFormArray(this.data.CheckList, { addCheckbox: this.checkList.checkbox })
    });
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
  CheckValidationWF() {
    if (this.newElement === false || !this.form.controls["name"].value) {
      return;
    }
    const processName = this.processName;
    const type = "state";
    const wfId = this.id;
    const name = this.form.controls["name"].value;
    const version = this.verNo;
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate) => {
        this.detail.handleValidationResult(isDuplicate, this.form.controls["name"]);
      },
      error: (error) => {
        this.detail.handleValidationError(error);
      }
    });
  }
  endStateListHandler(processId) {
    if (processId) {
      this.endStateList$ = this.detail.getEndStatesByApp(processId).pipe(map((res) => arrayToList(res, "WfoSId", "StateDisplayName")));
    }
    this.form.get("subProcessEndStateIds").reset();
  }
  _setStateSpec() {
    const spec = StateSpecificationType;
    let key;
    switch (this.element.type) {
      case t.StartState:
        key = spec.Start;
        break;
      case t.EndState:
        key = spec.End;
        break;
      default:
        key = spec.Task;
        break;
    }
    return { key, value: this.data.StateSpecification.AvailableStateSpecification[key] || "State" };
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const v = this.form.value;
      const payload = __spreadProps(__spreadValues({}, v), {
        wfoId: this.element.parent?.props?.WfoId,
        wfosId: this.newElement ? "" : this.element.props.WfosId,
        workFlowId: this.workflow.WFID,
        stateRole: keyValueListToKeyList(v.stateRole).toString(),
        stateSpecification: v.stateSpecification.key ?? v.stateSpecification,
        subProcessID: v.subProcessID.key || v.subProcessID,
        subProcessEndStateIds: keyValueListToKeyList(v.subProcessEndStateIds).toString(),
        checkList: v.checkList.map((check) => {
          return __spreadProps(__spreadValues({}, check), {
            ChecklistId: check.ChecklistId ?? 0,
            WfosId: this.newElement ? "" : this.element.props.WfosId
          });
        }),
        TriggerList: this.data.TriggerList
      });
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
  static {
    this.\u0275fac = function StateDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StateDetailComponent)(\u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DetailService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(EditorConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateDetailComponent, selectors: [["app-state-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "double-column"], [1, "form-group", "span-6"], [2, "color", "red"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "blur", "readonly", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "friendlyName", 1, "form-control", 3, "ngClass"], ["formControlName", "status", 1, "form-control", 3, "ngClass"], ["value", "1"], ["value", "0"], ["type", "text", "formControlName", "shortDescription", 1, "form-control", 3, "ngClass"], [1, "form-group", "span-6", "span-12"], [1, "Ql-container"], ["formControlName", "longDescription", 1, "Ql-InsideContainer", 3, "modules"], ["class", "form-group span-6", 4, "ngIf"], ["controlName", "stateRole", 3, "parentForm", "items", "multiple", "submitted"], ["controlName", "checkList", 3, "parentForm", "config"], ["height", "auto", 3, "items", "displayWith", "dragDrop"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], ["controlName", "stateSpecification", 3, "parentForm", "items", "readonly", "submitted"], ["controlName", "subProcessID", 3, "parentForm", "items", "submitted"], ["controlName", "subProcessEndStateIds", 3, "parentForm", "items", "multiple", "submitted"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function StateDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, StateDetailComponent_h2_2_Template, 2, 0, "h2", 2)(3, StateDetailComponent_h2_3_Template, 2, 0, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function StateDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275template(7, StateDetailComponent_form_7_Template, 65, 35, "form", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newElement);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newElement);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgClass,
      CustomSelectComponent,
      ListComponent,
      TreeListComponent,
      AsyncPipe,
      KeyValuePipe,
      QuillModule,
      QuillEditorComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateDetailComponent, { className: "StateDetailComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\state-detail\\state-detail.component.ts", lineNumber: 46 });
})();

// src/app/admin/wf/wfd/pipes/filesize.pipe.ts
var B = 1024;
var KB = B * B;
var MB = KB * B;
var FileSizePipe = class _FileSizePipe {
  transform(value) {
    const size = +value;
    if (size < B)
      return `${size} B`;
    if (size < KB)
      return `${(size / B).toFixed(2)} KB`;
    if (size < MB)
      return `${(size / KB).toFixed(2)} MB`;
  }
  static {
    this.\u0275fac = function FileSizePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileSizePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filesize", type: _FileSizePipe, pure: true, standalone: true });
  }
};

// src/app/admin/wf/wfd/directives/dropzone.directive.ts
var DropzoneDirective = class _DropzoneDirective {
  constructor() {
    this.dropped = new EventEmitter();
    this.hovered = new EventEmitter();
  }
  onDrop(event) {
    event.preventDefault();
    this.dropped.emit(event.dataTransfer.files);
    this.hovered.emit(false);
  }
  onDragOver(event) {
    event.preventDefault();
    this.hovered.emit(true);
  }
  onDragLeave(event) {
    event.preventDefault();
    this.hovered.emit(false);
  }
  static {
    this.\u0275fac = function DropzoneDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DropzoneDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DropzoneDirective, selectors: [["", "appDropzone", ""]], hostBindings: function DropzoneDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("drop", function DropzoneDirective_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        })("dragover", function DropzoneDirective_dragover_HostBindingHandler($event) {
          return ctx.onDragOver($event);
        })("dragleave", function DropzoneDirective_dragleave_HostBindingHandler($event) {
          return ctx.onDragLeave($event);
        });
      }
    }, outputs: { dropped: "dropped", hovered: "hovered" }, standalone: true });
  }
};

// src/app/admin/wf/wfd/components/file-uploader/file-uploader.component.ts
function FileUploaderComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUploaderComponent_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUploaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("hovered", function FileUploaderComponent_div_0_Template_div_hovered_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHover($event));
    })("dropped", function FileUploaderComponent_div_0_Template_div_dropped_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.disabled && ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, "Drag and drop ");
    \u0275\u0275template(3, FileUploaderComponent_div_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function FileUploaderComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const filePicker_r3 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(filePicker_r3.click());
    });
    \u0275\u0275text(5, " or choose ");
    \u0275\u0275template(6, FileUploaderComponent_div_0_ng_container_6_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 7, 1);
    \u0275\u0275listener("input", function FileUploaderComponent_div_0_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r1);
      const filePicker_r3 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.disabled && ctx_r1.onDrop(filePicker_r3.files));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const multipleTemplate_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("hovering", ctx_r1.isHovering && !ctx_r1.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", multipleTemplate_r4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", multipleTemplate_r4);
  }
}
function FileUploaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " Uploading...\n");
    \u0275\u0275elementEnd();
  }
}
function FileUploaderComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "files");
    \u0275\u0275elementContainerEnd();
  }
}
function FileUploaderComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "a file");
    \u0275\u0275elementContainerEnd();
  }
}
function FileUploaderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUploaderComponent_ng_template_2_ng_container_0_Template, 2, 0, "ng-container", 9)(1, FileUploaderComponent_ng_template_2_ng_container_1_Template, 2, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.multiple);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.multiple);
  }
}
var FileUploaderComponent = class _FileUploaderComponent {
  constructor() {
    this.uploading = false;
    this.multiple = false;
    this.disabled = false;
    this.files = new EventEmitter();
    this.ignored = new EventEmitter();
  }
  set allowedExtensions(extensions) {
    this.extensions = new Set(extensions);
  }
  toggleHover(event) {
    this.isHovering = event;
  }
  onDrop(fileList) {
    if (!this.multiple && fileList.length > 1) {
      return;
    }
    const files = [];
    const ignored = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      const ext = file.name.split(".").pop();
      if (this.extensions && !this.extensions.has(ext)) {
        ignored.push(file);
      } else {
        files.push(file);
      }
    }
    if (files.length)
      this.files.emit(files);
    if (ignored.length)
      this.ignored.emit(ignored);
  }
  static {
    this.\u0275fac = function FileUploaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileUploaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploaderComponent, selectors: [["app-file-uploader"]], inputs: { allowedExtensions: "allowedExtensions", uploading: "uploading", multiple: "multiple", disabled: "disabled" }, outputs: { files: "files", ignored: "ignored" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["multipleTemplate", ""], ["filePicker", ""], ["class", "dropzone", "appDropzone", "", 3, "hovering", "hovered", "dropped", 4, "ngIf"], ["class", "dropzone", 4, "ngIf"], ["appDropzone", "", 1, "dropzone", 3, "hovered", "dropped"], [4, "ngTemplateOutlet"], [1, "btn", "btn-sm", "btn-secondary", 3, "click", "disabled"], ["type", "file", "multiple", "", "hidden", "", 3, "input"], [1, "dropzone"], [4, "ngIf"]], template: function FileUploaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileUploaderComponent_div_0_Template, 9, 5, "div", 2)(1, FileUploaderComponent_div_1_Template, 2, 0, "div", 3)(2, FileUploaderComponent_ng_template_2_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.uploading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.uploading);
      }
    }, dependencies: [
      NgIf,
      DropzoneDirective,
      NgTemplateOutlet
    ], styles: ["\n\n.dropzone[_ngcontent-%COMP%] {\n  --stroke-color: #ccc;\n  --white-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: 200;\n  height: 90px;\n  border: 2px dashed var(--stroke-color);\n  border-radius: 5px;\n  background: var(--white-color);\n  margin-bottom: 10px;\n}\n.dropzone.hovering[_ngcontent-%COMP%] {\n  --stroke-color: #3cf1244a;\n  border: 2px solid var(--stroke-color);\n  color: #dadada !important;\n}\n.dropzone.hovering.allowed[_ngcontent-%COMP%] {\n  background:\n    repeating-radial-gradient(\n      circle,\n      var(--white-color),\n      var(--stroke-color),\n      var(--white-color) 2px,\n      var(--white-color) 10px);\n}\n.dropzone.hovering.not-allowed[_ngcontent-%COMP%] {\n  --stroke-color: #e710104a;\n  background:\n    repeating-radial-gradient(\n      circle,\n      var(--white-color),\n      var(--stroke-color),\n      var(--white-color) 2px,\n      var(--white-color) 10px);\n}\n.dropzone[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\nprogress[_ngcontent-%COMP%]::-webkit-progress-value {\n  transition: width 0.1s ease;\n}\n/*# sourceMappingURL=file-uploader.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploaderComponent, { className: "FileUploaderComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\file-uploader\\file-uploader.component.ts", lineNumber: 17 });
})();

// src/app/admin/wf/wfd/components/trigger-detail/trigger-detail.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
var _c13 = () => ["LegalOnline", "LegalOffline"];
var _c2 = () => [];
var _c3 = (a0) => ({ toolbar: a0 });
var _c4 = () => ({ standalone: true });
function TriggerDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "New Trigger");
    \u0275\u0275elementEnd();
  }
}
function TriggerDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Trigger Details");
    \u0275\u0275elementEnd();
  }
}
function TriggerDetailComponent_form_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Duplicate name ");
    \u0275\u0275elementEnd();
  }
}
function TriggerDetailComponent_form_7_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Notification option is required. ");
    \u0275\u0275elementEnd();
  }
}
function TriggerDetailComponent_form_7_div_70_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Legal Process is required. ");
    \u0275\u0275elementEnd();
  }
}
function TriggerDetailComponent_form_7_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 44);
    \u0275\u0275text(2, "Legal Process ");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-custom-select", 45);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275text(7, ' [submitted]="submitted"> ');
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TriggerDetailComponent_form_7_div_70_div_8_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(6, 3, ctx_r1.itemProcess$));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.f.LegalProcess.errors);
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_tr_12_ng_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", item_r6.GUID)("disabled", ctx_r1.shouldOptionBeDisabled(item_r6.GUID));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.DISPNAME, " ");
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "ng-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_tr_12_Template_ng_select_ngModelChange_5_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(item_r5.selectedParent, $event) || (item_r5.selectedParent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_tr_12_ng_option_6_Template, 2, 3, "ng-option", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.DISPNAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("searchable", true)("bindLabel", "DISPNAME")("bindValue", "GUID");
    \u0275\u0275twoWayProperty("ngModel", item_r5.selectedParent);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parentProcessDmos);
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 48)(2, "table", 49)(3, "thead", 50)(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_tr_12_Template, 7, 8, "tr", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r1.LegalProcessName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, ctx_r1.ParentProcessName));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.legalProcessDmos);
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_tr_12_ng_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.GUID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r9.DISPNAME, " ");
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "ng-select", 55);
    \u0275\u0275twoWayListener("ngModelChange", function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_tr_12_Template_ng_select_ngModelChange_5_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(item_r8.selectedParent, $event) || (item_r8.selectedParent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_tr_12_ng_option_6_Template, 2, 2, "ng-option", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.DISPNAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.parentProcessTrgrs)("searchable", true)("bindLabel", "DISPNAME")("bindValue", "GUID");
    \u0275\u0275twoWayProperty("ngModel", item_r8.selectedParent);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parentProcessTrgrs);
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 48)(2, "table", 49)(3, "thead", 50)(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_tr_12_Template, 7, 9, "tr", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r1.LegalProcessName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, ctx_r1.ParentProcessName));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.legalProcessTrgrs);
  }
}
function TriggerDetailComponent_form_7_mat_expansion_panel_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-expansion-panel", 25)(1, "mat-expansion-panel-header", 26);
    \u0275\u0275text(2, " Legal Trigger Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 46)(5, "button", 47);
    \u0275\u0275listener("click", function TriggerDetailComponent_form_7_mat_expansion_panel_116_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("dmo"));
    });
    \u0275\u0275text(6, " DMO Mapping ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 47);
    \u0275\u0275listener("click", function TriggerDetailComponent_form_7_mat_expansion_panel_116_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("trigger"));
    });
    \u0275\u0275text(8, " Trigger Mapping ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, TriggerDetailComponent_form_7_mat_expansion_panel_116_div_9_Template, 13, 7, "div", 2)(10, TriggerDetailComponent_form_7_mat_expansion_panel_116_div_10_Template, 13, 7, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("expanded", false);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "dmo");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "trigger");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "dmo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "trigger");
  }
}
function TriggerDetailComponent_form_7_button_121_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function TriggerDetailComponent_form_7_button_121_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function TriggerDetailComponent_form_7_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function TriggerDetailComponent_form_7_button_121_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, TriggerDetailComponent_form_7_button_121_ng_container_1_Template, 2, 0, "ng-container", 2)(2, TriggerDetailComponent_form_7_button_121_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newElement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newElement);
  }
}
function TriggerDetailComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "div", 8)(3, "label");
    \u0275\u0275text(4, "Trigger Name ");
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275listener("blur", function TriggerDetailComponent_form_7_Template_input_blur_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CheckValidationWF());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TriggerDetailComponent_form_7_div_9_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Friendly Name ");
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "br")(16, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8)(18, "label");
    \u0275\u0275text(19, "Status ");
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "select", 13)(24, "option", 14);
    \u0275\u0275text(25, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 15);
    \u0275\u0275text(27, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "Type ");
    \u0275\u0275elementStart(31, "span", 9);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "br")(34, "app-custom-select", 16);
    \u0275\u0275pipe(35, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 8)(37, "label");
    \u0275\u0275text(38, "Action ");
    \u0275\u0275elementStart(39, "span", 9);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "br")(42, "app-custom-select", 17);
    \u0275\u0275pipe(43, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 8)(45, "label");
    \u0275\u0275text(46, "Confirmation Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "br")(48, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 8)(50, "label");
    \u0275\u0275text(51, "Trigger Role ");
    \u0275\u0275elementStart(52, "span", 9);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "br")(55, "app-custom-select", 19);
    \u0275\u0275pipe(56, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 8)(58, "label", 20);
    \u0275\u0275text(59, "Notification Option ");
    \u0275\u0275elementStart(60, "span", 9);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(62, "app-custom-select", 21);
    \u0275\u0275template(63, TriggerDetailComponent_form_7_div_63_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 8)(65, "label");
    \u0275\u0275text(66, "Share On States");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "br")(68, "app-custom-select", 23);
    \u0275\u0275pipe(69, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, TriggerDetailComponent_form_7_div_70_Template, 9, 5, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "mat-expansion-panel", 25)(72, "mat-expansion-panel-header", 26);
    \u0275\u0275text(73, " Notification Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 27)(75, "div", 8)(76, "label");
    \u0275\u0275text(77, "Trigger Email Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "br")(79, "app-custom-select", 28);
    \u0275\u0275pipe(80, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 8)(82, "label");
    \u0275\u0275text(83, "Trigger CC Email Role");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "br")(85, "app-custom-select", 29);
    \u0275\u0275pipe(86, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 8)(88, "label");
    \u0275\u0275text(89, "Additional To List");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "br")(91, "app-custom-select", 30);
    \u0275\u0275pipe(92, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 8)(94, "label");
    \u0275\u0275text(95, "Additional CC List");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "br")(97, "app-custom-select", 31);
    \u0275\u0275pipe(98, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 8)(100, "label");
    \u0275\u0275text(101, "Email Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "br")(103, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 33)(105, "label");
    \u0275\u0275text(106, "Notify");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "br");
    \u0275\u0275elementStart(108, "div", 34);
    \u0275\u0275element(109, "quill-editor", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 33)(111, "label");
    \u0275\u0275text(112, "Files");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "br");
    \u0275\u0275elementStart(114, "app-file-uploader", 36);
    \u0275\u0275listener("files", function TriggerDetailComponent_form_7_Template_app_file_uploader_files_114_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilesUpload($event));
    })("ignored", function TriggerDetailComponent_form_7_Template_app_file_uploader_ignored_114_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIgnoredFiles($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "app-list", 37);
    \u0275\u0275listener("beforeDelete", function TriggerDetailComponent_form_7_Template_app_list_beforeDelete_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.beforeItemDelete($event));
    })("itemDeleted", function TriggerDetailComponent_form_7_Template_app_list_itemDeleted_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileDelete($event));
    })("fileDownload", function TriggerDetailComponent_form_7_Template_app_list_fileDownload_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileDownload($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(116, TriggerDetailComponent_form_7_mat_expansion_panel_116_Template, 11, 7, "mat-expansion-panel", 38);
    \u0275\u0275element(117, "br");
    \u0275\u0275elementStart(118, "div", 39)(119, "button", 40);
    \u0275\u0275listener("click", function TriggerDetailComponent_form_7_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(120, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(121, TriggerDetailComponent_form_7_button_121_Template, 3, 2, "button", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_27_0;
    let tmp_54_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("background-color", !ctx_r1.newElement ? "#e9ecef" : "white");
    \u0275\u0275property("readonly", !ctx_r1.newElement)("ngClass", \u0275\u0275pureFunction1(72, _c03, ctx_r1.submitted && ctx_r1.f.name.errors || ctx_r1.f.name.errors && !ctx_r1.f.name.errors.required || (ctx_r1.f.name.errors == null ? null : ctx_r1.f.name.errors.duplicate)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.name == null ? null : ctx_r1.f.name.errors == null ? null : ctx_r1.f.name.errors.duplicate);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(74, _c03, ctx_r1.submitted && ctx_r1.f.friendlyName.errors || ctx_r1.f.friendlyName.errors && !ctx_r1.f.friendlyName.errors.required));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(76, _c03, ctx_r1.submitted && ctx_r1.f.status.errors || ctx_r1.f.status.errors && !ctx_r1.f.status.errors.required));
    \u0275\u0275advance(11);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(35, 56, ctx_r1.data.TriggerType == null ? null : ctx_r1.data.TriggerType.AvailableTriggerType))("submitted", ctx_r1.submitted);
    \u0275\u0275advance(8);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(43, 58, ctx_r1.data.TriggerAction == null ? null : ctx_r1.data.TriggerAction.AvailableTriggerAction))("submitted", ctx_r1.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(78, _c03, ctx_r1.submitted && ctx_r1.f.triggerConfirmMsg.errors || ctx_r1.f.triggerConfirmMsg.errors && !ctx_r1.f.triggerConfirmMsg.errors.required));
    \u0275\u0275advance(7);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(56, 60, ctx_r1.data.TriggerRole == null ? null : ctx_r1.data.TriggerRole.AvailableTriggerRole))("submitted", ctx_r1.submitted)("multiple", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", ctx_r1.notificationOptions)("submitted", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.f.NotificationOption.errors);
    \u0275\u0275advance(5);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(69, 62, ctx_r1.data.SharedTrgList == null ? null : ctx_r1.data.SharedTrgList.AvailableSharedStates))("submitted", ctx_r1.submitted)("multiple", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(80, _c13).includes((tmp_27_0 = ctx_r1.form.get("triggerType")) == null ? null : tmp_27_0.value == null ? null : tmp_27_0.value.value));
    \u0275\u0275advance();
    \u0275\u0275property("expanded", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(80, 64, ctx_r1.data.TriggerEmailRole == null ? null : ctx_r1.data.TriggerEmailRole.AvailableTriggerEmailRole))("submitted", ctx_r1.submitted)("multiple", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(86, 66, ctx_r1.data.CCTriggerEmailRole == null ? null : ctx_r1.data.CCTriggerEmailRole.AvailableCCEmailTrgrRole))("submitted", ctx_r1.submitted)("multiple", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(92, 68, ctx_r1.data.AdditionalToList == null ? null : ctx_r1.data.AdditionalToList.AvailableAdditionalToRole))("submitted", ctx_r1.submitted)("multiple", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", (ctx_r1.data == null ? null : ctx_r1.data.AdditionalCcList == null ? null : ctx_r1.data.AdditionalCcList.AvailableAdditionalCcRole) ? \u0275\u0275pipeBind1(98, 70, ctx_r1.data.AdditionalCcList.AvailableAdditionalCcRole) : \u0275\u0275pureFunction0(81, _c2))("submitted", ctx_r1.submitted)("multiple", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(82, _c03, ctx_r1.submitted && ctx_r1.f.emailSubject.errors || ctx_r1.f.emailSubject.errors && !ctx_r1.f.emailSubject.errors.required));
    \u0275\u0275advance(6);
    \u0275\u0275property("modules", \u0275\u0275pureFunction1(84, _c3, ctx_r1.editorConfig.toolbar));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.published)("uploading", ctx_r1.filesUploading)("allowedExtensions", ctx_r1.allowedExtensions)("multiple", true);
    \u0275\u0275advance();
    \u0275\u0275property("parentForm", ctx_r1.form)("config", ctx_r1.filesConfig)("withPrompt", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(86, _c13).includes((tmp_54_0 = ctx_r1.form.get("triggerType")) == null ? null : tmp_54_0.value == null ? null : tmp_54_0.value.value));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.published);
  }
}
var t2 = ElementType;
var TriggerDetailComponent = class _TriggerDetailComponent extends ElementDetail {
  constructor(fb, ref, msg, detail, route, wfapi, editorConfigService) {
    super(fb, ref, msg);
    this.detail = detail;
    this.route = route;
    this.wfapi = wfapi;
    this.editorConfigService = editorConfigService;
    this.fileSizePipe = new FileSizePipe();
    this.allowedExtensions = ["docx", "doc", "csv", "mp3", "wmv", "jpg", "jpeg", "pdf", "xls", "xlsx", "sql", "zip", "bin", "mov", "mp4", "bmp", "gif", "txt", "png", "ppt", "pptx"];
    this.filesUploading = false;
    this.isTimer = false;
    this.notificationOptions = [
      { key: "0", value: "None" },
      { key: "1", value: "Custom Notification" }
    ];
    this.formActions = [
      {
        controlName: "files",
        handler: (files) => this.fileListHandler(files)
      }
    ];
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.processName = params["processName"];
      this.verNo = params["VerNo"];
      this.id = params["id"];
    });
    this.uploadLocation = this.isTimer ? this.element.incoming[0].props.TriggerId : this.element.id;
    this.filesConfig = {
      columns: [
        { key: "FileName", displayValue: "File Name", type: ListColumnType.File },
        { key: "FileSize", displayValue: "Size", type: ListColumnType.File }
      ],
      actions: { delete: true, download: true },
      checkbox: true
    };
    this.form = this.fb.group({
      name: [this.data.Name, NAME_VALIDATORS],
      friendlyName: [this.data.FriendlyName, Validators.required],
      triggerType: [this.newElement ? "" : objToList(this.data.TriggerType.SelectedTriggerType)[0] || "", [Validators.required]],
      status: [this.newElement ? Status.Active : this.data.Status, [Validators.required]],
      triggerAction: [this.newElement ? "" : objToList(this.data.TriggerAction.SelectedTriggerAction)[0] || "", [Validators.required]],
      triggerConfirmMsg: [this.data.TrigggerConfirmMsg],
      notificationOption: [
        this.newElement ? this.getNotificationOption("0") : this.getNotificationOption(this.data.NotificationOption),
        Validators.required
      ],
      fileNames: toFormArray(this.data.Files, {
        addCheckbox: this.filesConfig.checkbox
      }),
      deletedUploadedFiles: [[]],
      files: [[]],
      triggerRoleGuid: [this.newElement ? [] : objToList(this.data.TriggerRole.SelectedTriggerRole), [Validators.required]],
      triggerEmailRoleGuid: [this.newElement ? [] : objToList(this.data.TriggerEmailRole.SelectedTriggerEmailRole)],
      ccEmailTrgrRolelist: [this.newElement ? [] : objToList(this.data.CCTriggerEmailRole.SelectedCCEmailTrgrRole)],
      emailSubject: [this.data.EmailSubject],
      notify: [this.data.Notify],
      sharedTrgList: [this.newElement ? [] : objToList(this.data.SharedTrgList.SelectedSharedStates)],
      periodStart: [this.data.PeriodStart],
      periodFrequency: [this.data.PeriodFrequency],
      periodEnd: [this.data.PeriodEnd],
      freq: [this.data?.Freq || "One Time"],
      recurrenceStart: [this.data?.RecurrenceStart || "Hours"],
      recurrenceFrequency: [this.data?.RecurrenceFrequency || "Hours"],
      NotificationOption: [
        this.newElement ? this.getNotificationOption("0") : this.getNotificationOption(this.data.NotificationOption),
        Validators.required
      ],
      toAdditionalList: [this.newElement ? [] : objToList(this.data.AdditionalToList?.SelectedAdditionalToRole)],
      ccAdditionalList: [this.newElement ? [] : objToList(this.data?.AdditionalCcList?.SelectedAdditionalCcRole)]
    });
    if (this.newElement) {
      this.setInitValues();
    }
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
  // helper to find the matching object
  getNotificationOption(key) {
    return this.notificationOptions.find((opt) => opt.key === String(key)) ?? null;
  }
  CheckValidationWF() {
    if (this.newElement === false || !this.form.controls["name"].value) {
      return;
    }
    const processName = this.processName;
    const type = "trigger";
    const wfId = this.id;
    const name = this.form.controls["name"].value;
    const version = this.verNo;
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate) => {
        this.detail.handleValidationResult(isDuplicate, this.form.controls["name"]);
      },
      error: (error) => {
        this.detail.handleValidationError(error);
      }
    });
  }
  setInitValues() {
    const el = this.isTimer ? this.element : this.element.target;
    const type = el.type;
    let triggerTypeValue = null;
    if (type === t2.TriggerExtension) {
      const triggerType = getTriggerType(el.incoming[0]);
      triggerTypeValue = objToList(this.data.TriggerType.AvailableTriggerType).find((t4) => +t4.key === triggerType);
      const triggerAction = objToList(this.data.TriggerAction.AvailableTriggerAction).find((t4) => +t4.key === TriggerActionType.SubmitValidationNA);
      this.form.get("triggerAction").patchValue(triggerAction);
    } else if (isStateType(el) || type === t2.Gateway) {
      triggerTypeValue = objToList(this.data.TriggerType.AvailableTriggerType).find((t4) => +t4.key === TriggerType.Action);
    }
    this.form.get("triggerType").patchValue(triggerTypeValue);
  }
  onFilesUpload(files) {
    this.form.get("files").patchValue(files);
  }
  fileListHandler(files) {
    const fileList = this.form.get("fileNames");
    const unique = [];
    files.forEach((file) => {
      if (!fileList.controls.some((group) => group.get("FileName").value === file.name)) {
        unique.push(file);
      }
    });
    this.filesUploading = true;
    this.detail.uploadFiles(unique, this.workflow.WFID, this.uploadLocation).subscribe((file) => {
      const wfFile = {
        FileName: file.name,
        FileSize: this.fileSizePipe.transform(file.size.toString())
      };
      fileList.push(toFormGroup(wfFile, { addCheckbox: this.filesConfig.checkbox }));
    }, () => null, () => this.filesUploading = false);
  }
  onIgnoredFiles(files) {
    this.msg.showMessage("Warning", {
      body: `The following files are not allowed to be uploaded: 

            ${files.map((file) => `<br>${file.name}`).join("")}`
    });
  }
  onFileDelete(file) {
    const control = this.form.get("deletedUploadedFiles");
    const values = control.value;
    values.push(file.FileName);
    control.patchValue(values);
  }
  onFileDownload(filename) {
    const uploadedAndSaved = (this.data.Files || []).some((f) => f.FileName === filename);
    this.detail.downloadFile(this.workflow.ProcessName, filename, this.workflow.WFID, this.data.Name || "", "trigger", uploadedAndSaved ? "" : this.uploadLocation).subscribe();
  }
  onSubmit() {
    this.submitted = true;
    const rawFormValue = this.form.value;
    if (this.form.valid) {
      const el = this.isTimer ? this.element.incoming[0] : this.element;
      const props = el.props;
      const state = el.source.props;
      const payload = __spreadProps(__spreadValues({}, this.form.value), {
        triggerAction: this.form.value.triggerAction.key || this.form.value.triggerAction,
        triggerType: this.form.value.triggerType.key || this.form.value.triggerType,
        sharedTrgList: keyValueListToKeyList(this.form.value.sharedTrgList).toString(),
        triggerRoleGuid: keyValueListToKeyList(this.form.value.triggerRoleGuid),
        triggerEmailRoleGuid: keyValueListToKeyList(this.form.value.triggerEmailRoleGuid),
        ccEmailTrgrRolelist: keyValueListToKeyList(this.form.value.ccEmailTrgrRolelist),
        toAdditionalList: keyValueListToKeyList(this.form.value.toAdditionalList || []),
        ccAdditionalList: keyValueListToKeyList(this.form.value.ccAdditionalList || []),
        startWfoid: state.WfoId,
        startWfosid: state.WfosId,
        triggerId: props?.TriggerId,
        triggerGuid: props?.Guid,
        fileNames: this.form.value.fileNames.map(({ FileName }) => FileName).toString(),
        // ????
        deletedUploadedFiles: this.form.value.deletedUploadedFiles.toString(),
        fileUploadLoc: this.uploadLocation,
        workFlowId: this.workflow.WFID,
        processName: this.workflow.ProcessName,
        TrigggerConfirmMsg: this.form.value.triggerConfirmMsg,
        periodEnd: this.form.get("periodEnd").disabled ? -1 : this.form.get("periodEnd").value,
        freq: this.form.get("freq").value,
        NotificationOption: +rawFormValue.NotificationOption?.key,
        notificationOption: +rawFormValue.NotificationOption?.key
      });
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
  static {
    this.\u0275fac = function TriggerDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TriggerDetailComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(DetailService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(EditorConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerDetailComponent, selectors: [["app-trigger-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "double-column"], [1, "form-group", "span-6"], [2, "color", "red"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "blur", "readonly", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "friendlyName", 1, "form-control", 3, "ngClass"], ["formControlName", "status", 1, "form-control", 3, "ngClass"], ["value", "1"], ["value", "0"], ["controlName", "triggerType", 3, "parentForm", "items", "submitted"], ["controlName", "triggerAction", 3, "parentForm", "items", "submitted"], ["type", "text", "formControlName", "triggerConfirmMsg", 1, "form-control", 3, "ngClass"], ["controlName", "triggerRoleGuid", 3, "parentForm", "items", "submitted", "multiple"], ["for", "notificationOption"], ["id", "notificationOption", "controlName", "NotificationOption", 3, "parentForm", "items", "submitted"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["controlName", "sharedTrgList", 3, "parentForm", "items", "submitted", "multiple"], ["class", "form-group span-6", 4, "ngIf"], [3, "expanded"], [1, "disable_ripple"], [1, "double-column", "mt-2"], ["controlName", "triggerEmailRoleGuid", 3, "parentForm", "items", "submitted", "multiple"], ["controlName", "ccEmailTrgrRolelist", 3, "parentForm", "items", "submitted", "multiple"], ["controlName", "toAdditionalList", 3, "parentForm", "items", "submitted", "multiple"], ["controlName", "ccAdditionalList", 3, "parentForm", "items", "submitted", "multiple"], ["type", "text", "formControlName", "emailSubject", 1, "form-control", 3, "ngClass"], [1, "form-group", "span-12"], [1, "Ql-container"], ["formControlName", "notify", 1, "Ql-InsideContainer", 3, "modules"], [3, "files", "ignored", "disabled", "uploading", "allowedExtensions", "multiple"], ["controlName", "fileNames", 3, "beforeDelete", "itemDeleted", "fileDownload", "parentForm", "config", "withPrompt"], [3, "expanded", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], [1, "invalid-feedback", "d-block"], ["for", "legalProcess"], ["id", "legalProcess", "controlName", "LegalProcess", 3, "parentForm", "items"], [1, "tab-buttons"], ["type", "button", 3, "click"], [1, "col-lg-12"], [1, "table", "table-bordered"], [1, "thead-light"], [4, "ngFor", "ngForOf"], ["placeholder", "Select...", 3, "ngModelChange", "searchable", "bindLabel", "bindValue", "ngModel", "ngModelOptions"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["placeholder", "Select...", 3, "ngModelChange", "items", "searchable", "bindLabel", "bindValue", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function TriggerDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, TriggerDetailComponent_h2_2_Template, 2, 0, "h2", 2)(3, TriggerDetailComponent_h2_3_Template, 2, 0, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function TriggerDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275template(7, TriggerDetailComponent_form_7_Template, 122, 87, "form", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newElement);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newElement);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgClass,
      CustomSelectComponent,
      MatExpansionPanel,
      MatExpansionPanelHeader,
      FileUploaderComponent,
      ListComponent,
      KeyValuePipe,
      QuillModule,
      QuillEditorComponent
    ], styles: ['\n\nmat-accordion[_ngcontent-%COMP%], \nmat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: unset;\n  background: none;\n  border-radius: 0;\n  margin-bottom: 2rem;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 35px;\n}\n  .mat-expansion-panel-content > .mat-expansion-panel-body {\n  padding: 0px;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-bottom: 1px solid #ccc;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.disable_ripple[_ngcontent-%COMP%]:hover {\n  background-color: white !important;\n}\n.bm-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-family: Arial, sans-serif;\n}\n.tab-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  background-color: white;\n  color: #0077c8;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 12px;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background-color: #0077c8;\n  color: white;\n}\n.mapping-table-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.mapping-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mapping-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #a9cbd8;\n}\n.mapping-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.mapping-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  vertical-align: top;\n}\n.mapping-table[_ngcontent-%COMP%]   td.required[_ngcontent-%COMP%]::before {\n  content: "* ";\n  color: red;\n}\n.mapping-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f0fafd;\n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px 20px;\n  background-color: #0077c8;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n.invalid-field[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.tab-header[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #ccc;\n  margin-bottom: 1rem;\n}\n.tab-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  cursor: pointer;\n  background: #f0f0f0;\n  border: none;\n  font-weight: bold;\n}\n.tab-header[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 2px solid blue;\n}\n.tab-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border: 1px solid #ccc;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-align: center;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.column[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n}\n.column[_ngcontent-%COMP%]   select.invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.9rem;\n}\n.template-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.template-container[_ngcontent-%COMP%]   .template-sidebar[_ngcontent-%COMP%] {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.template-container[_ngcontent-%COMP%]   .template-sidebar[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n.template-container[_ngcontent-%COMP%]   .template-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  padding: 5px;\n}\n.template-container[_ngcontent-%COMP%]   .template-editor[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #aaa;\n  padding: 10px;\n  background: #f9f9f9;\n}\n.tab-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 1rem;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.tab-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background-color: transparent;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  color: #444;\n}\n.tab-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #EB583B;\n  color: #EB583B;\n  font-weight: 600;\n  background-color: #f5faff;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\nselect.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc3545;\n  margin-top: 5px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0.2;\n    transform: translateY(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dmo-container[_ngcontent-%COMP%] {\n  border: 1px solid #574c9c;\n  padding: 1rem;\n  max-width: 500px;\n}\n.dmo-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.dmo-selectors[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.dmo-selectors[_ngcontent-%COMP%]   .dmo-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.dmo-selectors[_ngcontent-%COMP%]   .dmo-column[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 4px;\n  border: 1px solid #574c9c;\n  border-radius: 4px;\n  background: #e6f0ff;\n}\n.dmo-selectors[_ngcontent-%COMP%]   .dmo-column[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.dmo-selectors[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 2px solid #574c9c;\n  font-size: 20px;\n  line-height: 0;\n  color: #574c9c;\n  cursor: pointer;\n}\n.dmo-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.dmo-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.dmo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #574c9c;\n  text-align: center;\n  padding: 0.5rem;\n}\n.dmo-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.dmo-mapping-container[_ngcontent-%COMP%] {\n  border: 1px solid #4b49ac;\n  padding: 10px;\n  font-family: Arial, sans-serif;\n}\n.dmo-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n  border-bottom: 1px solid #4b49ac;\n  padding-bottom: 5px;\n}\n.dmo-selection-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin: 15px 0;\n}\n.dmo-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dmo-label[_ngcontent-%COMP%] {\n  border: 1px solid #4b49ac;\n  padding: 5px;\n  font-size: 13px;\n  text-align: center;\n}\n.dmo-select[_ngcontent-%COMP%] {\n  border: 1px solid #4b49ac;\n  border-radius: 6px;\n  padding: 5px;\n  font-size: 14px;\n  background: #e6f0fc;\n}\n.dmo-add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.add-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 24px;\n  color: #4b49ac;\n  cursor: pointer;\n  padding-bottom: 4px;\n}\n.dmo-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #4b49ac;\n  margin-top: 10px;\n  text-align: center;\n}\n.dmo-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.dmo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #4b49ac;\n  padding: 8px;\n}\n.mapping-wrapper[_ngcontent-%COMP%] {\n  border: 1.5px solid #4b49ac;\n  padding: 10px;\n  font-family: Arial, sans-serif;\n}\n.mapping-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  border-bottom: 1.5px solid #4b49ac;\n  padding: 5px 0;\n  font-size: 16px;\n}\n.mapping-select-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 20px;\n  margin-top: 15px;\n}\n.mapping-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.box-label[_ngcontent-%COMP%] {\n  border: 1.5px solid #4b49ac;\n  text-align: center;\n  padding: 5px 15px;\n  font-size: 14px;\n  margin-bottom: 6px;\n}\n.styled-select[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 12px;\n  border: 1.5px solid #4b49ac;\n  background:\n    linear-gradient(\n      to right,\n      #ffffff,\n      #e0f0ff);\n  color: #555;\n  appearance: none;\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%227%22%20viewBox%3D%220%200%2010%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%23333%22/%3E%3C/svg%3E);\n  background-repeat: no-repeat;\n  background-position: right 10px center;\n  background-size: 12px;\n}\n.plus-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.plus-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #4b49ac;\n  font-size: 22px;\n  color: #4b49ac;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.mapping-table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  border-collapse: collapse;\n  text-align: center;\n  font-size: 15px;\n}\n.mapping-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.mapping-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1.5px solid #4b49ac;\n  padding: 8px 20px;\n  word-break: break-word;\n  vertical-align: middle;\n}\n.mapping-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background-color: #f0f0f9;\n  color: #333;\n}\n.mapping-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n.mapping-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #e6f7ff;\n}\n.mapping-table[_ngcontent-%COMP%]   .disabled-option[_ngcontent-%COMP%] {\n  color: #b0b0b0 !important;\n  background-color: #f4f4f4 !important;\n  cursor: not-allowed;\n}\n.dmo-mapping-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 12px;\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1.5px solid #4b49ac;\n}\n.dmo-mapping-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #4b49ac;\n  color: #fff;\n  text-align: left;\n}\n.dmo-mapping-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.dmo-mapping-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 14px;\n  border-bottom: 1px solid #4b49ac;\n}\n.dmo-mapping-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #f6f6fc;\n}\n.dmo-mapping-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #eaeaff;\n  transition: background-color 0.2s ease;\n}\n.dmo-mapping-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2fa;\n}\n.disabled-option[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  background-color: #f0f0f0;\n}\n.invalid-select[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n.template-editor-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  border: 1px solid #ccc;\n  padding: 20px;\n  background: #f8f8ff;\n}\n.artifact-panel[_ngcontent-%COMP%] {\n  width: 120px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.artifact[_ngcontent-%COMP%] {\n  background: #dedcff;\n  border: 1px solid #6c63ff;\n  padding: 6px 10px;\n  text-align: center;\n  font-weight: bold;\n  cursor: grab;\n  border-radius: 4px;\n}\n.editor-panel[_ngcontent-%COMP%] {\n  flex: 1;\n}\n  .ng-select.ng-select-single .ng-select-container {\n  height: 24px !important;\n}\ntd[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 0 0.75rem;\n}\ninput[_ngcontent-%COMP%]:read-only {\n  background-color: transparent;\n  border-color: transparent;\n  outline-color: transparent;\n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 28px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.actions[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n.table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #4D4D51;\n  text-align: left;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4D4D51;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 10px;\n  font-weight: bold;\n  color: #4D4D51;\n  border-bottom-width: 0px;\n  padding-left: 20px;\n}\n.new[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.new[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.checkbox-cell[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.download[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.download[_ngcontent-%COMP%]:hover {\n  color: #226398;\n}\n.action[_ngcontent-%COMP%] {\n  width: 8%;\n}\n.deleteContainer[_ngcontent-%COMP%] {\n  height: 20px;\n}\n.deleteContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4d4d51;\n  text-decoration: none;\n}\n.deleteContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.col-lg-2-5[_ngcontent-%COMP%] {\n  width: 22.833333%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.drag-drop-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.draggable-fields[_ngcontent-%COMP%] {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  cursor: grab;\n  text-align: center;\n  border-radius: 4px;\n}\n.preview-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 300px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: justify;\n}\n.drop-target[_ngcontent-%COMP%] {\n  min-width: 100px;\n  display: inline-block;\n  padding: 4px 8px;\n  margin: 4px;\n  border: 1px dashed #aaa;\n  text-align: center;\n  vertical-align: middle;\n  background-color: #f8f9fa;\n  cursor: pointer;\n}\n.drop-target.dropped[_ngcontent-%COMP%] {\n  border: 1px solid #007bff;\n  background-color: #e7f1ff;\n}\n.drop-target[data-empty=true][_ngcontent-%COMP%] {\n  color: #999;\n}\n.drop-target[data-empty=false][_ngcontent-%COMP%] {\n  color: #000;\n}\n/*# sourceMappingURL=trigger-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerDetailComponent, { className: "TriggerDetailComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\trigger-detail\\trigger-detail.component.ts", lineNumber: 51 });
})();

// src/app/admin/wf/wfd/components/timer-detail/timer-detail.component.ts
var _c04 = (a0) => ({ "is-invalid": a0 });
function TimerDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "New Timer");
    \u0275\u0275elementEnd();
  }
}
function TimerDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Timer Details");
    \u0275\u0275elementEnd();
  }
}
function TimerDetailComponent_form_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2, "Delay");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275element(5, "input", 17);
    \u0275\u0275elementStart(6, "select", 18)(7, "option", 19);
    \u0275\u0275text(8, "Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 20);
    \u0275\u0275text(10, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 21);
    \u0275\u0275text(12, "Weeks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 22);
    \u0275\u0275text(14, "Months");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c04, ctx_r1.submitted && ctx_r1.f.periodFrequency.errors || ctx_r1.f.periodFrequency.errors && !ctx_r1.f.periodFrequency.errors.required));
  }
}
function TimerDetailComponent_form_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275element(5, "input", 23);
    \u0275\u0275elementStart(6, "select", 24)(7, "option", 19);
    \u0275\u0275text(8, "Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 20);
    \u0275\u0275text(10, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 21);
    \u0275\u0275text(12, "Weeks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 22);
    \u0275\u0275text(14, "Months");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c04, ctx_r1.submitted && ctx_r1.f.periodStart.errors || ctx_r1.f.periodStart.errors && !ctx_r1.f.periodStart.errors.required));
  }
}
function TimerDetailComponent_form_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 25);
    \u0275\u0275text(2, "Period of inactivity (In Days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 26)(4, "br");
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275element(6, "input", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c04, ctx_r1.submitted && ctx_r1.f.periodEnd.errors || ctx_r1.f.periodEnd.errors && !ctx_r1.f.periodEnd.errors.required));
  }
}
function TimerDetailComponent_form_7_button_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function TimerDetailComponent_form_7_button_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function TimerDetailComponent_form_7_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function TimerDetailComponent_form_7_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, TimerDetailComponent_form_7_button_18_ng_container_1_Template, 2, 0, "ng-container", 2)(2, TimerDetailComponent_form_7_button_18_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newElement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newElement);
  }
}
function TimerDetailComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "div", 8)(3, "input", 9);
    \u0275\u0275listener("change", function TimerDetailComponent_form_7_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRadioChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 10);
    \u0275\u0275elementStart(5, "label", 11);
    \u0275\u0275text(6, "One Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 12);
    \u0275\u0275listener("change", function TimerDetailComponent_form_7_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRadioChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275elementStart(9, "label", 11);
    \u0275\u0275text(10, "Recurring");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TimerDetailComponent_form_7_div_12_Template, 16, 3, "div", 13)(13, TimerDetailComponent_form_7_div_13_Template, 15, 3, "div", 13)(14, TimerDetailComponent_form_7_div_14_Template, 7, 3, "div", 13);
    \u0275\u0275elementStart(15, "div", 14)(16, "button", 15);
    \u0275\u0275listener("click", function TimerDetailComponent_form_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(17, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, TimerDetailComponent_form_7_button_18_Template, 3, 2, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", !ctx_r1.isrec);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isrec);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isrec);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.published);
  }
}
var TimerDetailComponent = class _TimerDetailComponent extends TriggerDetailComponent {
  constructor(fb, ref, msg, detail, route, wfapi, editorConfigService, toastr) {
    super(fb, ref, msg, detail, route, wfapi, editorConfigService);
    this.editorConfigService = editorConfigService;
    this.toastr = toastr;
    this.isTimer = true;
    this.isrec = false;
  }
  afterFormInit() {
    setTimeout((_) => {
      if (this.form.get("freq").value === "Recurring") {
        this.isrec = true;
      }
    });
  }
  onRadioChange(event) {
    if (event.target.value === "One Time") {
      this.isrec = false;
    } else {
      this.isrec = true;
    }
  }
  static {
    this.\u0275fac = function TimerDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimerDetailComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(DetailService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(EditorConfigService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimerDetailComponent, selectors: [["app-timer-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], [1, "form-group", "flex"], ["formControlName", "freq", "type", "radio", "value", "One Time", 1, "radio-container", 3, "change"], [1, "skin"], ["for", ""], ["formControlName", "freq", "type", "radio", "value", "Recurring", 1, "radio-container", 3, "change"], ["class", "form-group", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], ["type", "number", "formControlName", "periodFrequency", 1, "form-control", 3, "ngClass"], ["formControlName", "recurrenceFrequency", 1, "form-control"], ["value", "Hours"], ["value", "Days"], ["value", "Weeks"], ["value", "Months"], ["type", "number", "formControlName", "periodStart", 1, "form-control", 3, "ngClass"], ["formControlName", "recurrenceStart", 1, "form-control"], ["for", "", 1, "mt-3"], ["_ngcontent-ioh-c500", "", "title", "No end date if select zero for period of inactivity", 1, "fa", "fa-question-circle"], ["type", "number", "formControlName", "periodEnd", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function TimerDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, TimerDetailComponent_h2_2_Template, 2, 0, "h2", 2)(3, TimerDetailComponent_h2_3_Template, 2, 0, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function TimerDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275template(7, TimerDetailComponent_form_7_Template, 19, 5, "form", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newElement);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newElement);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgClass
    ], styles: ['@charset "UTF-8";\n\n\n\n.form-group.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.form-group.flex[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.form-group.flex[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.wf-inline-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: inherit;\n  height: inherit;\n  width: inherit;\n}\ninput[_ngcontent-%COMP%] {\n  appearance: auto;\n  -webkit-appearance: auto;\n  -moz-appearance: auto;\n}\n/*# sourceMappingURL=timer-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimerDetailComponent, { className: "TimerDetailComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\timer-detail\\timer-detail.component.ts", lineNumber: 26 });
})();

// src/app/admin/wf/wfd/components/trigger-condition-detail/trigger-condition-detail.component.ts
var _c05 = (a0) => ({ "is-invalid": a0 });
var _c14 = () => [];
var _c22 = (a0) => ({ toolbar: a0 });
function TriggerConditionDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "New Trigger Condition");
    \u0275\u0275elementEnd();
  }
}
function TriggerConditionDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Trigger Condition Details");
    \u0275\u0275elementEnd();
  }
}
function TriggerConditionDetailComponent_form_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Duplicate name ");
    \u0275\u0275elementEnd();
  }
}
function TriggerConditionDetailComponent_form_7_button_79_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function TriggerConditionDetailComponent_form_7_button_79_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function TriggerConditionDetailComponent_form_7_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TriggerConditionDetailComponent_form_7_button_79_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, TriggerConditionDetailComponent_form_7_button_79_ng_container_1_Template, 2, 0, "ng-container", 2)(2, TriggerConditionDetailComponent_form_7_button_79_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newElement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newElement);
  }
}
function TriggerConditionDetailComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "div", 8)(3, "label");
    \u0275\u0275text(4, "Name ");
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275listener("blur", function TriggerConditionDetailComponent_form_7_Template_input_blur_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CheckValidationWF());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TriggerConditionDetailComponent_form_7_div_9_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Description ");
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "br")(16, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8)(18, "label");
    \u0275\u0275text(19, "Status ");
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "select", 13)(24, "option", 14);
    \u0275\u0275text(25, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 15);
    \u0275\u0275text(27, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "End Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "br")(32, "app-custom-select", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 8)(34, "label");
    \u0275\u0275text(35, "End State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "br")(37, "app-custom-select", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 18)(39, "label");
    \u0275\u0275text(40, "Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "br")(42, "app-list", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-expansion-panel", 20)(44, "mat-expansion-panel-header", 21);
    \u0275\u0275text(45, " Notification Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 22)(47, "div", 8)(48, "label");
    \u0275\u0275text(49, "Email Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "br")(51, "app-custom-select", 23);
    \u0275\u0275pipe(52, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 8)(54, "label");
    \u0275\u0275text(55, "CC Email Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "br")(57, "app-custom-select", 24);
    \u0275\u0275pipe(58, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 18)(60, "label");
    \u0275\u0275text(61, "Email Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "br")(63, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 18)(65, "label");
    \u0275\u0275text(66, "Notify");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "br");
    \u0275\u0275elementStart(68, "div", 26);
    \u0275\u0275element(69, "quill-editor", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 18)(71, "label");
    \u0275\u0275text(72, "Files");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "br");
    \u0275\u0275elementStart(74, "app-file-uploader", 28);
    \u0275\u0275listener("files", function TriggerConditionDetailComponent_form_7_Template_app_file_uploader_files_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilesUpload($event));
    })("ignored", function TriggerConditionDetailComponent_form_7_Template_app_file_uploader_ignored_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIgnoredFiles($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "app-list", 29);
    \u0275\u0275listener("itemDeleted", function TriggerConditionDetailComponent_form_7_Template_app_list_itemDeleted_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileDelete($event));
    })("fileDownload", function TriggerConditionDetailComponent_form_7_Template_app_list_fileDownload_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileDownload($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 30)(77, "button", 31);
    \u0275\u0275listener("click", function TriggerConditionDetailComponent_form_7_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(78, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, TriggerConditionDetailComponent_form_7_button_79_Template, 3, 2, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("background-color", !ctx_r1.newElement ? "#e9ecef" : "white");
    \u0275\u0275property("readonly", !ctx_r1.newElement)("ngClass", \u0275\u0275pureFunction1(40, _c05, ctx_r1.submitted && ctx_r1.f.conditionName.errors || ctx_r1.f.conditionName.errors && !ctx_r1.f.conditionName.errors.required || (ctx_r1.f.conditionName.errors == null ? null : ctx_r1.f.conditionName.errors.duplicate)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.conditionName == null ? null : ctx_r1.f.conditionName.errors == null ? null : ctx_r1.f.conditionName.errors.duplicate);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(42, _c05, ctx_r1.submitted && ctx_r1.f.conditionDescription.errors || ctx_r1.f.conditionDescription.errors && !ctx_r1.f.conditionDescription.errors.required));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c05, ctx_r1.submitted && ctx_r1.f.status.errors || ctx_r1.f.status.errors && !ctx_r1.f.status.errors.required));
    \u0275\u0275advance(9);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pureFunction0(46, _c14))("submitted", ctx_r1.submitted)("readonly", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pureFunction0(47, _c14))("submitted", ctx_r1.submitted)("readonly", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("parentForm", ctx_r1.form)("config", ctx_r1.filters);
    \u0275\u0275advance();
    \u0275\u0275property("expanded", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(52, 36, ctx_r1.data.EmailRole == null ? null : ctx_r1.data.EmailRole.AvailableTriggerEmailRole))("multiple", true)("submitted", ctx_r1.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275property("parentForm", ctx_r1.form)("items", \u0275\u0275pipeBind1(58, 38, ctx_r1.data.CcEmailRole == null ? null : ctx_r1.data.CcEmailRole.AvailableCCEmailTrgrRole))("multiple", true)("submitted", ctx_r1.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(48, _c05, ctx_r1.submitted && ctx_r1.f.emailSubject.errors || ctx_r1.f.emailSubject.errors && !ctx_r1.f.emailSubject.errors.required));
    \u0275\u0275advance(6);
    \u0275\u0275property("modules", \u0275\u0275pureFunction1(50, _c22, ctx_r1.editorConfig.toolbar));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.published)("uploading", ctx_r1.filesUploading)("allowedExtensions", ctx_r1.allowedExtensions)("multiple", true);
    \u0275\u0275advance();
    \u0275\u0275property("parentForm", ctx_r1.form)("config", ctx_r1.filesConfig);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.published);
  }
}
var TriggerConditionDetailComponent = class _TriggerConditionDetailComponent extends ElementDetail {
  constructor(fb, ref, msg, detail, wfapi, editorConfigService, route) {
    super(fb, ref, msg);
    this.detail = detail;
    this.wfapi = wfapi;
    this.editorConfigService = editorConfigService;
    this.route = route;
    this.fileSizePipe = new FileSizePipe();
    this.allowedExtensions = [
      "docx",
      "doc",
      "csv",
      "mp3",
      "wmv",
      "jpg",
      "jpeg",
      "pdf",
      "xls",
      "xlsx",
      "sql",
      "zip",
      "bin",
      "mov",
      "mp4",
      "bmp",
      "gif",
      "txt",
      "png",
      "ppt",
      "pptx"
    ];
    this.filesUploading = false;
    this.formActions = [
      {
        controlName: "files",
        handler: (files) => this.fileListHandler(files)
      }
    ];
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.processName = params["processName"];
      this.verNo = params["VerNo"];
      this.id = params["id"];
    });
    this.filesConfig = {
      columns: [
        {
          key: "FileName",
          displayValue: "File Name",
          type: ListColumnType.File
        },
        { key: "FileSize", displayValue: "Size", type: ListColumnType.File }
      ],
      actions: { delete: true, download: true },
      checkbox: true
    };
    this.configureFilters();
    const stageState = this.getStateStageInformation();
    this.form = this.fb.group({
      conditionName: [
        this.newElement ? "" : this.data.ConditionName,
        NAME_VALIDATORS
      ],
      conditionDescription: [
        this.newElement ? "" : this.data.ConditionDescription,
        [Validators.required, Validators.maxLength(100)]
      ],
      status: [
        this.newElement ? Status.Active : this.data.Status,
        [Validators.required]
      ],
      endWfoId: [stageState.endStage, [Validators.required]],
      endWfosId: [stageState.endState, [Validators.required]],
      notify: [this.data.Notify],
      roleGuid: [
        this.newElement ? [] : objToList(this.data.EmailRole.SelectedTriggerEmailRole)
      ],
      filter: toFormArray(this.data.Filter, {
        addCheckbox: this.filters.checkbox
      }),
      fileNames: toFormArray(this.data.Files, {
        addCheckbox: this.filesConfig.checkbox
      }),
      deletedUploadedFiles: [[]],
      files: [[]],
      emailSubject: [this.newElement ? "" : this.data.EmailSubject],
      ccMAilRoleGuids: [
        this.newElement ? [] : objToList(this.data.CcEmailRole.SelectedCCEmailTrgrRole)
      ]
    });
    if (this.newElement) {
      this.addTriggerControl();
    }
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
  CheckValidationWF() {
    if (this.newElement === false || !this.form.controls["conditionName"].value) {
      return;
    }
    const processName = this.processName;
    const type = "trgcond";
    const wfId = this.id;
    const name = this.form.controls["conditionName"].value;
    const version = this.verNo;
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate) => {
        this.detail.handleValidationResult(isDuplicate, this.form.controls["conditionName"]);
      },
      error: (error) => {
        this.detail.handleValidationError(error);
      }
    });
  }
  onFilesUpload(files) {
    this.form.get("files").patchValue(files);
  }
  fileListHandler(files) {
    const fileList = this.form.get("fileNames");
    const unique = [];
    files.forEach((file) => {
      if (!fileList.controls.some((group) => group.get("FileName").value === file.name)) {
        unique.push(file);
      }
    });
    this.filesUploading = true;
    this.detail.uploadFiles(unique, this.workflow.WFID, this.element.id).subscribe((file) => {
      const wfFile = {
        FileName: file.name,
        FileSize: this.fileSizePipe.transform(file.size.toString())
      };
      fileList.push(toFormGroup(wfFile, { addCheckbox: this.filesConfig.checkbox }));
    }, () => null, () => this.filesUploading = false);
  }
  onIgnoredFiles(files) {
    this.msg.showMessage("Warning", {
      body: `The following files are not allowed to be uploaded: 

            ${files.map((file) => `<br>${file.name}`).join("")}`
    });
  }
  onFileDelete(file) {
    const control = this.form.get("deletedUploadedFiles");
    const values = control.value;
    values.push(file.FileName);
    control.patchValue(values);
  }
  onFileDownload(filename) {
    const uploadedAndSaved = (this.data.Files || []).some((f) => f.FileName === filename);
    this.detail.downloadFile(this.workflow.ProcessName, filename, this.workflow.WFID, this.data.ConditionName || "", "triggercondition", uploadedAndSaved ? "" : this.element.id).subscribe();
  }
  configureFilters() {
    const bools = ["AND", "OR"];
    const operators = [
      "LT",
      "LE",
      "GT",
      "GE",
      "EQ",
      "NOT EQ",
      "LIKE",
      "NOT IN",
      "IN"
    ];
    const trigger = this.element?.source?.incoming?.[0];
    if (!trigger) {
      this.filters = {
        columns: [
          {
            key: "DmoName",
            displayValue: "Dmo Name",
            type: ListColumnType.Dropdown,
            validators: [Validators.required]
          },
          {
            key: "Operator",
            displayValue: "Operator",
            type: ListColumnType.Dropdown,
            validators: [Validators.required]
          },
          {
            key: "Value",
            displayValue: "Value",
            validators: [Validators.required]
          },
          {
            key: "BooleanExpression",
            displayValue: "Boolean Expression",
            type: ListColumnType.Dropdown,
            validators: [Validators.required]
          }
        ],
        defaultValues: {
          BooleanExpression: primitiveArrayToList(bools),
          Operator: primitiveArrayToList(operators),
          DmoName: []
        },
        actions: { add: true, delete: true, edit: true },
        checkbox: true
      };
      return;
    }
    this.filters = {
      columns: [
        {
          key: "DmoName",
          displayValue: "Dmo Name",
          type: ListColumnType.Dropdown,
          validators: [Validators.required]
        },
        {
          key: "Operator",
          displayValue: "Operator",
          type: ListColumnType.Dropdown,
          validators: [Validators.required]
        },
        {
          key: "Value",
          displayValue: "Value",
          validators: [Validators.required]
        },
        {
          key: "BooleanExpression",
          displayValue: "Boolean Expression",
          type: ListColumnType.Dropdown,
          validators: [Validators.required]
        }
      ],
      defaultValues: {
        BooleanExpression: primitiveArrayToList(bools),
        Operator: primitiveArrayToList(operators),
        DmoName: this.detail.getDmos(trigger.props.TriggerId, this.newElement ? "" : this.element.props.ConditionId)
      },
      actions: { add: true, delete: true, edit: true },
      checkbox: true
    };
  }
  getStateStageInformation() {
    if (!this.element?.target) {
      return { endState: null, endStage: null };
    }
    const { target } = this.element;
    if (isStateType(target)) {
      const endState = {
        key: target.props.WfosId,
        value: target.businessObject.name
      };
      const parent = target.parent;
      if (parent.type === ElementType.Stage) {
        const endStage = {
          key: parent.props.WfoId,
          value: parent.businessObject.name
        };
        return { endState, endStage };
      }
    }
    return { endState: null, endStage: null };
  }
  addTriggerControl() {
    this.parentTriggers = this._getParentTriggers().map((flow) => {
      return {
        key: flow.props.TriggerId,
        value: flow.businessObject.name
      };
    });
    const value = this.parentTriggers.length === 1 ? this.parentTriggers[0] : [];
    this.form.addControl("triggerId", new UntypedFormControl(value, [Validators.required]));
    this.form.updateValueAndValidity();
  }
  _getParentTriggers() {
    return this.element.source.incoming;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const props = this.element?.props;
      const payload = __spreadProps(__spreadValues({}, this.form.value), {
        conditionId: this.newElement ? "" : props.ConditionId,
        triggerId: this.newElement ? this.form.value.triggerId.key : props.TriggerId,
        roleGuid: keyValueListToKeyList(this.form.value.roleGuid),
        ccMAilRoleGuids: keyValueListToKeyList(this.form.value.ccMAilRoleGuids),
        endWfoId: this.form.value.endWfoId.key,
        endWfosId: this.form.value.endWfosId.key,
        wfId: this.workflow.WFID,
        fileNames: this.form.value.fileNames.map(({ FileName }) => FileName).toString(),
        // ????
        deletedUploadedFiles: this.form.value.deletedUploadedFiles.toString(),
        fileUploadLoc: this.element.id,
        status: this.form.value.status?.toString(),
        filter: this.form.value.filter.map((f) => __spreadProps(__spreadValues({}, f), {
          FilterId: f.FilterId || null,
          BooleanExpression: f.BooleanExpression.key || f.BooleanExpression,
          DmoName: f.DmoName?.key || f.DmoName,
          Operator: f.Operator?.key || f.Operator,
          Value: f.Value?.key || f.Value
        }))
      });
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
  static {
    this.\u0275fac = function TriggerConditionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TriggerConditionDetailComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(DetailService), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(EditorConfigService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerConditionDetailComponent, selectors: [["app-trigger-condition-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "double-column"], [1, "form-group", "span-6"], [2, "color", "red"], ["type", "text", "formControlName", "conditionName", 1, "form-control", 3, "blur", "readonly", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "conditionDescription", "maxlength", "100", 1, "form-control", 3, "ngClass"], ["formControlName", "status", 1, "form-control", 3, "ngClass"], ["value", "1"], ["value", "0"], ["controlName", "endWfoId", 3, "parentForm", "items", "submitted", "readonly"], ["controlName", "endWfosId", 3, "parentForm", "items", "submitted", "readonly"], [1, "form-group", "span-12"], ["controlName", "filter", 3, "parentForm", "config"], [3, "expanded"], [1, "disable_ripple"], [1, "double-column", "mt-2"], ["controlName", "roleGuid", 3, "parentForm", "items", "multiple", "submitted"], ["controlName", "ccMAilRoleGuids", 3, "parentForm", "items", "multiple", "submitted"], ["type", "text", "formControlName", "emailSubject", 1, "form-control", 3, "ngClass"], [1, "Ql-container"], ["formControlName", "notify", 1, "Ql-InsideContainer", 3, "modules"], [3, "files", "ignored", "disabled", "uploading", "allowedExtensions", "multiple"], ["controlName", "fileNames", 3, "itemDeleted", "fileDownload", "parentForm", "config"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function TriggerConditionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, TriggerConditionDetailComponent_h2_2_Template, 2, 0, "h2", 2)(3, TriggerConditionDetailComponent_h2_3_Template, 2, 0, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function TriggerConditionDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275template(7, TriggerConditionDetailComponent_form_7_Template, 80, 52, "form", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newElement);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newElement);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      NgClass,
      CustomSelectComponent,
      ListComponent,
      MatExpansionPanel,
      MatExpansionPanelHeader,
      FileUploaderComponent,
      KeyValuePipe,
      QuillModule,
      QuillEditorComponent
    ], styles: ["\n\nmat-accordion[_ngcontent-%COMP%], \nmat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: unset;\n  background: none;\n  border-radius: 0;\n  margin-bottom: 2rem;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 35px;\n}\n  .mat-expansion-panel-content > .mat-expansion-panel-body {\n  padding: 0px;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-bottom: 1px solid #ccc;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.disable_ripple[_ngcontent-%COMP%]:hover {\n  background-color: white !important;\n}\n/*# sourceMappingURL=trigger-condition-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerConditionDetailComponent, { className: "TriggerConditionDetailComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\trigger-condition-detail\\trigger-condition-detail.component.ts", lineNumber: 71 });
})();

// src/app/admin/wf/wfd/components/diagram/diagram.component.ts
var import_guid_typescript = __toESM(require_guid());

// src/app/admin/wf/wfd/services/diagram-storage.service.ts
var DiagramStorageService = class _DiagramStorageService {
  constructor() {
    this.STORAGE_KEY = "bpmn_diagram_changes";
    this.WORKFLOW_PREFIX = "workflow_";
    this.hasUnsavedChangesSubject = new BehaviorSubject(false);
    this.hasUnsavedChanges$ = this.hasUnsavedChangesSubject.asObservable();
  }
  /**
   * Store diagram changes temporarily in localStorage
   */
  storeChanges(workflowId, change) {
    const key = this.getStorageKey(workflowId);
    const existingChanges = this.getStoredChanges(workflowId);
    existingChanges.push(change);
    localStorage.setItem(key, JSON.stringify(existingChanges));
    this.hasUnsavedChangesSubject.next(true);
  }
  /**
   * Get all stored changes for a workflow
   */
  getStoredChanges(workflowId) {
    const key = this.getStorageKey(workflowId);
    const stored = localStorage.getItem(key);
    if (!stored) {
      return [];
    }
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error parsing stored diagram changes:", error);
      return [];
    }
  }
  /**
   * Clear all stored changes for a workflow
   */
  clearChanges(workflowId) {
    const key = this.getStorageKey(workflowId);
    localStorage.removeItem(key);
    this.hasUnsavedChangesSubject.next(false);
  }
  /**
   * Get the latest change for a workflow
   */
  getLatestChange(workflowId) {
    const changes = this.getStoredChanges(workflowId);
    return changes.length > 0 ? changes[changes.length - 1] : null;
  }
  /**
   * Check if there are unsaved changes for a workflow
   */
  hasUnsavedChanges(workflowId) {
    const changes = this.getStoredChanges(workflowId);
    return changes.length > 0;
  }
  /**
   * Get storage key for a specific workflow
   */
  getStorageKey(workflowId) {
    return `${this.STORAGE_KEY}_${this.WORKFLOW_PREFIX}${workflowId}`;
  }
  /**
   * Clear all diagram changes from localStorage (cleanup)
   */
  clearAllChanges() {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(this.STORAGE_KEY)) {
        localStorage.removeItem(key);
      }
    });
    this.hasUnsavedChangesSubject.next(false);
  }
  /**
   * Get storage size for debugging
   */
  getStorageSize(workflowId) {
    const key = this.getStorageKey(workflowId);
    const stored = localStorage.getItem(key);
    return stored ? stored.length : 0;
  }
  static {
    this.\u0275fac = function DiagramStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DiagramStorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DiagramStorageService, factory: _DiagramStorageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/wf/wfd/components/diagram/diagram.component.ts
var _c06 = ["ref"];
var _c15 = () => ["Edit", "Published"];
function DiagramComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementEnd();
  }
}
function DiagramComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function DiagramComponent_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.canUndo ? ctx_r2.localUndo() : null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5, "Undo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canUndo)("title", ctx_r2.canUndo ? "Undo local changes" : "No changes to undo");
  }
}
function DiagramComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 37);
    \u0275\u0275listener("click", function DiagramComponent_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.canRedo ? ctx_r2.localRedo() : null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5, "Redo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canRedo)("title", ctx_r2.canRedo ? "Redo local changes" : "No changes to redo");
  }
}
function DiagramComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 39);
    \u0275\u0275listener("click", function DiagramComponent_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.alignStatesInSwimlane("top"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 40)(4, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6, "Top");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedSwimlane);
  }
}
function DiagramComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 42);
    \u0275\u0275listener("click", function DiagramComponent_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.alignStatesInSwimlane("middle"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 40)(4, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6, "Middle");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedSwimlane);
  }
}
function DiagramComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 44);
    \u0275\u0275listener("click", function DiagramComponent_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.alignStatesInSwimlane("bottom"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 40)(4, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6, "Bottom");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedSwimlane);
  }
}
function DiagramComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "label", 48);
    \u0275\u0275text(3, "Font Family:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function DiagramComponent_div_18_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFontFamily, $event) || (ctx_r2.selectedFontFamily = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DiagramComponent_div_18_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFontFamily());
    });
    \u0275\u0275elementStart(5, "option", 50);
    \u0275\u0275text(6, "Arial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 51);
    \u0275\u0275text(8, "Museo Sans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 52);
    \u0275\u0275text(10, "Helvetica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 53);
    \u0275\u0275text(12, "Times New Roman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 54);
    \u0275\u0275text(14, "Georgia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 55);
    \u0275\u0275text(16, "Verdana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 56);
    \u0275\u0275text(18, "Courier New");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 57);
    \u0275\u0275text(20, "Comic Sans MS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 58);
    \u0275\u0275text(22, "Impact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 59);
    \u0275\u0275text(24, "Trebuchet MS");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFontFamily);
  }
}
function DiagramComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "label", 48);
    \u0275\u0275text(3, "Font Size:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function DiagramComponent_div_19_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFontSize, $event) || (ctx_r2.selectedFontSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DiagramComponent_div_19_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFontSize());
    });
    \u0275\u0275elementStart(5, "option", 61);
    \u0275\u0275text(6, "8px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 62);
    \u0275\u0275text(8, "10px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 63);
    \u0275\u0275text(10, "12px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 64);
    \u0275\u0275text(12, "13px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 65);
    \u0275\u0275text(14, "14px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 66);
    \u0275\u0275text(16, "16px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 67);
    \u0275\u0275text(18, "18px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 68);
    \u0275\u0275text(20, "20px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 69);
    \u0275\u0275text(22, "24px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 70);
    \u0275\u0275text(24, "28px");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 71);
    \u0275\u0275text(26, "32px");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFontSize);
  }
}
function DiagramComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "label", 48);
    \u0275\u0275text(3, "Font Color:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function DiagramComponent_div_20_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFontColor, $event) || (ctx_r2.selectedFontColor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DiagramComponent_div_20_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFontColor());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFontColor);
  }
}
function DiagramComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "label", 48);
    \u0275\u0275text(3, "Fill Color:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function DiagramComponent_div_21_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFillColor, $event) || (ctx_r2.selectedFillColor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DiagramComponent_div_21_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFillColor());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFillColor);
  }
}
function DiagramComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 74)(3, "button", 75);
    \u0275\u0275listener("click", function DiagramComponent_div_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFontBold());
    });
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 76);
    \u0275\u0275listener("click", function DiagramComponent_div_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFontItalic());
    });
    \u0275\u0275elementStart(7, "em");
    \u0275\u0275text(8, "I");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 77);
    \u0275\u0275listener("click", function DiagramComponent_div_22_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFontUnderline());
    });
    \u0275\u0275elementStart(10, "u");
    \u0275\u0275text(11, "U");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.selectedFontBold);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.selectedFontItalic);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.selectedFontUnderline);
    \u0275\u0275property("disabled", !ctx_r2.selectedState);
  }
}
function DiagramComponent_i_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
}
function DiagramComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 79);
  }
}
function DiagramComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save");
    \u0275\u0275elementEnd();
  }
}
function DiagramComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function DiagramComponent_i_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17)(2, "g", 80);
    \u0275\u0275element(3, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "defs")(5, "clipPath", 82);
    \u0275\u0275element(6, "rect", 83);
    \u0275\u0275elementEnd()()()();
  }
}
function DiagramComponent_i_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 84);
  }
}
function DiagramComponent_li_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 85);
    \u0275\u0275listener("click", function DiagramComponent_li_45_Template_li_click_0_listener() {
      const mode_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeMode(mode_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r14, " ");
  }
}
function DiagramComponent_ng_template_46_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 90);
  }
}
function DiagramComponent_ng_template_46_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 84);
  }
}
function DiagramComponent_ng_template_46_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 85);
    \u0275\u0275listener("click", function DiagramComponent_ng_template_46_li_7_Template_li_click_0_listener() {
      const mode_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeMode(mode_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r16, " ");
  }
}
function DiagramComponent_ng_template_46_ng_container_8_ng_container_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 98);
  }
}
function DiagramComponent_ng_template_46_ng_container_8_ng_container_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 99);
  }
}
function DiagramComponent_ng_template_46_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 91);
    \u0275\u0275listener("click", function DiagramComponent_ng_template_46_ng_container_8_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.service.togglePalette());
    });
    \u0275\u0275template(2, DiagramComponent_ng_template_46_ng_container_8_ng_container_1_i_2_Template, 1, 0, "i", 92)(3, DiagramComponent_ng_template_46_ng_container_8_ng_container_1_i_3_Template, 1, 0, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 94);
    \u0275\u0275listener("click", function DiagramComponent_ng_template_46_ng_container_8_ng_container_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.generateXML());
    });
    \u0275\u0275element(5, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 96);
    \u0275\u0275listener("click", function DiagramComponent_ng_template_46_ng_container_8_ng_container_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleActions());
    });
    \u0275\u0275element(7, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.service.paletteIsOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.service.paletteIsOpen);
  }
}
function DiagramComponent_ng_template_46_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 100);
    \u0275\u0275listener("click", function DiagramComponent_ng_template_46_ng_container_8_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleActions());
    });
    \u0275\u0275element(2, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function DiagramComponent_ng_template_46_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DiagramComponent_ng_template_46_ng_container_8_ng_container_1_Template, 8, 2, "ng-container", 24)(2, DiagramComponent_ng_template_46_ng_container_8_ng_container_2_Template, 3, 0, "ng-container", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.actionsVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.actionsVisible);
  }
}
function DiagramComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "button", 88);
    \u0275\u0275template(3, DiagramComponent_ng_template_46_i_3_Template, 1, 0, "i", 89)(4, DiagramComponent_ng_template_46_i_4_Template, 1, 0, "i", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 28);
    \u0275\u0275template(7, DiagramComponent_ng_template_46_li_7_Template, 2, 1, "li", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, DiagramComponent_ng_template_46_ng_container_8_Template, 3, 2, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.actionsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.actionsDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.metadata.Workflow.WorkflowMode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c15));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.actionsDisabled);
  }
}
var t3 = ElementType;
var DiagramComponent = class _DiagramComponent {
  constructor(dialog, service, wfapi, formViewApi, msg, cdr, route, bpmnService, storageService, toastr) {
    this.dialog = dialog;
    this.service = service;
    this.wfapi = wfapi;
    this.formViewApi = formViewApi;
    this.msg = msg;
    this.cdr = cdr;
    this.route = route;
    this.bpmnService = bpmnService;
    this.storageService = storageService;
    this.toastr = toastr;
    this.workflowDeleted = new EventEmitter();
    this.running = true;
    this.actionsVisible = true;
    this.actionsDisabled = false;
    this.showWfdOnly = false;
    this.destroy$ = new Subject();
    this.previousLength = 0;
    this.reloadData = false;
    this.EntityId = "";
    this.EntityType = "";
    this.ActionName = "";
    this.ActionGroupId = "";
    this.ActionDetails = "";
    this.clearDetail = false;
    this.keyColorArrayPrevious = [];
    this.alertMsgTxt = [];
    this.hasUnsavedChanges = false;
    this.isSaving = false;
    this.canUndo = false;
    this.canRedo = false;
    this.selectedSwimlane = null;
    this.trgConditionDetail = false;
    this.undoredoactive = false;
    this.selectedState = null;
    this.selectedFontFamily = "Museo Sans";
    this.selectedFontSize = "14px";
    this.selectedFontColor = "#000000";
    this.selectedFontBold = false;
    this.selectedFontItalic = false;
    this.selectedFontUnderline = false;
    this.selectedFillColor = "#ffffff";
    this.wfosIdToWfoIdMap = {};
    this.beforeUnloadHandler = (event) => {
      if (this.hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
        return "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    this.registerEventHandlers();
  }
  registerEventHandlers() {
    this.service.onUpdateElement.pipe(takeUntil(this.destroy$)).subscribe((el) => this.onUpdateElement(el));
    this.service.onCreateElement.pipe(takeUntil(this.destroy$)).subscribe((el) => this.onCreateElement(el));
    this.service.onDeleteElement.pipe(takeUntil(this.destroy$)).subscribe((res) => this.onDeleteElement(res));
    this.service.onDiagramChange.pipe(takeUntil(this.destroy$)).subscribe((coords) => {
      if (this.ActionName === "Delete" || !this.ActionName.trim()) {
        this.EntityId = " ";
        this.EntityType = " ";
        this.ActionName = " ";
        this.ActionGroupId = " ";
      }
      const currentCordsdetail = Object.keys(coords);
      const previousCordsdetail = this.coordinatesChangePoints ? Object.keys(this.coordinatesChangePoints) : [];
      const storedEvent = this.getStoredEvent();
      let isUndoRedo = false;
      if (storedEvent !== "ElementMoved" && this.totalComponentLenth > currentCordsdetail.length || this.undoredoactive) {
        if (this.undoredoactive) {
          isUndoRedo = true;
        }
        if (this.ActionName !== "Edit") {
          this.ActionName = "";
          this.undoredoactive = false;
        }
      } else if (!this.ActionName.trim() || this.ActionName === "FilledColor") {
        this.ActionName = "ElementMoved";
      }
      const newKeyColorArray = Object.entries(coords).map(([key, value]) => [key, value.color]).filter((entry) => !!entry[1] && entry[1] !== "none" && entry[1] !== "");
      const hasColorChanged = this.keyColorArrayPrevious.length !== newKeyColorArray.length || newKeyColorArray.some(([key, color]) => {
        const match = this.keyColorArrayPrevious.find(([prevKey]) => prevKey === key);
        return !match || match[1] !== color;
      });
      if (hasColorChanged) {
        this.keyColorArrayPrevious = newKeyColorArray;
        this.ActionName = "FilledColor";
      }
      if (isUndoRedo) {
        this.ActionName = "";
      }
      this.totalComponentLenth = currentCordsdetail.length;
      const removedGateway = previousCordsdetail.some((item) => item.includes("bpmn:ExclusiveGateway") && !currentCordsdetail.includes(item));
      const removedCondition = previousCordsdetail.some((item) => item.includes("Cond_") && !currentCordsdetail.includes(item));
      if (removedGateway && removedCondition) {
        this.EntityType = "diamond";
        this.ActionGroupId = import_guid_typescript.Guid.raw();
      } else if (removedGateway) {
        this.EntityType = "diamond";
        this.ActionGroupId = import_guid_typescript.Guid.raw();
      } else if (removedCondition) {
        this.EntityType = "TriggerCondition";
        this.ActionGroupId = import_guid_typescript.Guid.raw();
      }
      const currentLength = Object.keys(coords).length;
      this.coordinatesChangePoints = coords;
      this.previousLength = currentLength;
      this.persistWorkflowDataArray();
      this.storeChangesLocally(coords);
      if (this.clearDetail) {
        this.EntityId = " ";
        this.EntityType = " ";
        this.ActionName = " ";
        this.ActionGroupId = " ";
        this.ActionDetails = " ";
        this.clearDetail = false;
      }
      this.clearStoredEvent();
    });
    this.service.onReconnect.pipe(takeUntil(this.destroy$)).subscribe((context) => this.onConnectionReconnect(context));
    this.service.onRestoreElement.pipe(takeUntil(this.destroy$)).subscribe((element) => {
      this.wfapi.restoreElement(this.metadata.Workflow.WFID, element).subscribe();
    });
    this.service.onSelectionChanged.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      this.handleSelectionChange(event);
    });
  }
  changeUndoRedo(id, type, Action) {
    type = type.replace("bpmn:", "");
    this.EntityId = id;
    this.ActionName = Action;
    this.ActionGroupId = import_guid_typescript.Guid.raw();
    switch (type) {
      case "Task":
        this.EntityType = "State";
        break;
      case "Participant":
        this.EntityType = "Pool";
        break;
      case "Lane":
        this.EntityType = "Stage";
        break;
      case "StartEvent":
        this.EntityType = "StartState";
        break;
      case "EndEvent":
        this.EntityType = "EndState";
        break;
      case "ExclusiveGateway":
        this.EntityType = "Gateway";
        this.clearDetail = true;
        break;
      case "SequenceFlow":
        this.EntityType = "Trigger";
        break;
      case "IntermediateCatchEvent":
        this.EntityType = "TriggerExtension";
        this.clearDetail = true;
        break;
      case "TimerEventDefinition":
        this.EntityType = "Timer";
        this.clearDetail = true;
        break;
      case "Association":
        this.EntityType = "Association";
        break;
      case "TextAnnotation":
        this.EntityType = "Annotation";
        this.clearDetail = true;
        break;
      case "SubProcess":
        this.EntityType = "SubProcess";
        break;
      case "label":
        this.EntityType = "Label";
        break;
      default:
        this.EntityType = "";
        break;
    }
  }
  deleteWfCall(ids) {
    const deletedIds = {
      workflowIds: ids.workflowIds,
      stageIds: ids.stageIds,
      stateIds: ids.stateIds,
      triggerIds: ids.triggerIds,
      conditionIds: ids.conditionIds,
      PrevStageIds: []
    };
    const deletedIdsString = JSON.stringify(deletedIds);
    this.ActionName = "Delete";
    this.ActionGroupId = this.EntityType !== "diamond" && this.EntityType !== "TriggerCondition" ? import_guid_typescript.Guid.raw() : this.ActionGroupId;
    this.EntityType = this.EntityType === "diamond" || this.EntityType === "TriggerCondition" ? this.EntityType : ids.stageIds?.[0] ? "Stage" : ids.stateIds?.[0] ? "State" : ids.triggerIds?.[0] ? "Trigger" : "";
    this.persistWorkflowDataArray();
    this.wfapi.saveDiagramCoordinates(this.metadata.Workflow.WFID, this.coordinatesChangePoints, {
      EntityId: ids.stageIds[0] ?? ids.stateIds[0] ?? ids.triggerIds[0] ?? ids.conditionIds[0] ?? "",
      EntityType: this.EntityType,
      ActionName: this.ActionName,
      ActionGroupId: this.ActionGroupId,
      ActionDetails: deletedIdsString,
      SequenceNumber: this.getWorkflowValue(this.metadata.Workflow.WFID).toString()
    }).subscribe({
      next: (response) => {
        this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
        this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;
        this.resetValues();
      },
      error: (error) => {
        this.resetValues();
        console.error("Error saving diagram coordinates:", error);
      }
    });
  }
  // Helper method to reset values after API call
  resetValues() {
    this.EntityId = "";
    this.EntityType = "";
    this.ActionName = "";
    this.ActionGroupId = "";
    this.ActionDetails = "";
    this.clearDetail = false;
  }
  onCreateElement(el) {
    return __async(this, null, function* () {
      this.changeUndoRedo("", el.type, "Insert");
      try {
        const details = yield this.getDetails(el, true);
        if (details) {
          const ref = yield this.openDialog(__spreadValues({
            element: el,
            newElement: true
          }, details));
          if (ref) {
            const props = ref?.payload || ref;
            try {
              const res = yield firstValueFrom(this.saveDetails(el, props));
              if (res.statuscode === 200) {
                this.clearDetail = true;
                this.EntityId = res.result.ConditionId ?? res.result.TriggerId ?? res.result.WfoId ?? res.result.WfosId;
                this.ActionDetails = res.result.TriggerId ? JSON.stringify({
                  workflowIds: [],
                  stageIds: [],
                  stateIds: [],
                  PrevStageIds: [],
                  triggerIds: [res.result.TriggerId],
                  conditionIds: Object.keys(res.result.TrgConditions ?? []).filter((key) => key)
                }) : "";
                if (ref.legalDocsPayload && ref.legalDocsPayload != "-1") {
                  const Workflow = this.metadata.Workflow;
                  const triggerId = res.result?.TriggerId;
                  yield firstValueFrom(this.wfapi.insertlegaldmotrgmapping(ref.legalDocsPayload, Workflow.TypeID, triggerId));
                }
                this.handleSaveResponse(el, res, props);
              } else {
                if (this.reloadData) {
                  this.reloadData = false;
                }
                this.clearDetail = true;
                this.service.deleteElement(el);
              }
            } catch (_) {
              this.clearDetail = true;
              this.service.deleteElement(el);
            }
            this.clearDetail = true;
          } else {
            if (this.reloadData) {
              this.reloadData = false;
            }
            this.service.undo();
            this.clearDetail = true;
          }
        }
      } catch (error) {
        console.log(error);
        this.service.undo();
      }
    });
  }
  UndoRedo(functionality) {
    return __async(this, null, function* () {
      try {
        this.undoredoactive = true;
        if (functionality === "Undo") {
          if (this.metadata.Workflow) {
            this.wfapi.UndoWfdWorkflow(this.metadata.Workflow.WFID).pipe(switchMap(() => this.loadWfData())).subscribe((metadata) => {
              this.mappingData(metadata);
              this.refreshXML();
            });
          }
        } else if (functionality === "Redo") {
          this.wfapi.RedoWfdWorkflow(this.metadata.Workflow.WFID).pipe(switchMap(() => this.loadWfData())).subscribe((metadata) => {
            this.mappingData(metadata);
            this.refreshXML();
          });
        }
      } catch (error) {
        console.error(`Error during ${functionality} operation:`, error);
      }
    });
  }
  loadWfData() {
    var processName;
    var verNo;
    this.route.queryParams.subscribe((params) => {
      processName = params["processName"];
      verNo = params["VerNo"];
    });
    this.metadata$ = this.wfapi.getWorkflowDiagram(processName, verNo);
    return this.metadata$;
  }
  mappingData(metadata) {
    this.metadata = metadata;
    this.IsRedoAllowed = !!this.metadata.Workflow.IsRedoAllowed;
    this.IsUndoAllowed = !!this.metadata.Workflow.IsUndoAllowed;
  }
  onUpdateElement(el) {
    return __async(this, null, function* () {
      let isExclusiveGateway;
      if (el.type === "bpmn:SequenceFlow") {
        isExclusiveGateway = el.source.type === "bpmn:ExclusiveGateway";
      } else {
        isExclusiveGateway = false;
      }
      this.trgConditionDetail = isExclusiveGateway;
      let friendlyName = isExclusiveGateway ? el?.props?.Description ?? "" : el.type === "bpmn:SequenceFlow" ? el.friendlyName ?? "" : el?.props?.FriendlyName ?? "";
      if (el.type === "bpmn:IntermediateCatchEvent") {
        friendlyName = "";
      }
      const newElement = !el.props && el.type !== t3.TriggerExtension;
      const details = yield this.getDetails(el, newElement);
      if (!details)
        return;
      const ref = yield this.openDialog(__spreadValues({ element: el, newElement }, details));
      if (!ref)
        return this.trgConditionDetail = false;
      if (ref.legalDocsPayload && ref.legalDocsPayload != "-1") {
        const Workflow = this.metadata.Workflow;
        const triggerId = ref.payload?.triggerId;
        yield firstValueFrom(this.wfapi.insertlegaldmotrgmapping(ref.legalDocsPayload, Workflow.TypeID, triggerId));
      }
      const props = ref?.payload || ref;
      this.updateElementProperties(el, props, friendlyName);
      yield this.saveAndUpdateElement(el, props, newElement);
    });
  }
  updateElementProperties(el, props, prev) {
    const stateTypes = [
      "bpmn:Task",
      "bpmn:StartEvent",
      "bpmn:EndEvent",
      "bpmn:SubProcess"
    ];
    if (stateTypes.includes(el.type)) {
      this.changeUndoRedo(el.props.WfosId, el.type, "Edit");
    } else if (el.type === "bpmn:Lane") {
      this.changeUndoRedo(el.props.WfoId, el.type, "Edit");
    } else if (el.type === "bpmn:SequenceFlow") {
      if (this.trgConditionDetail) {
        this.EntityId = props.conditionId;
        this.ActionName = "Edit";
        this.ActionGroupId = import_guid_typescript.Guid.raw();
        this.EntityType = "TriggerCondition";
      } else {
        this.changeUndoRedo(el.props.TriggerId, el.type, "Edit");
      }
    } else if (el.def === "bpmn:TimerEventDefinition") {
      this.changeUndoRedo("", el.def, "Edit");
    } else if (el.type === "bpmn:Participant") {
      this.changeUndoRedo(props.wfId, el.type, "Edit");
    } else {
      this.changeUndoRedo(el.id, el.type, "Edit");
    }
    const UpdatedData = {
      workflowIds: [],
      stageIds: [],
      stateIds: [],
      PrevStageIds: [],
      triggerIds: [],
      conditionIds: [],
      PrevDispName: prev,
      CurrentDispName: this.trgConditionDetail ? props.conditionDescription : props.friendlyName
    };
    this.ActionDetails = JSON.stringify(UpdatedData);
    this.clearDetail = true;
    el.props = el.props || {};
    el.props.FriendlyName = props.friendlyName;
    if (el.type === "bpmn:SequenceFlow") {
      el.friendlyName = this.trgConditionDetail ? props.conditionDescription : props.friendlyName;
      this.trgConditionDetail = false;
    }
  }
  saveAndUpdateElement(el, props, newElement) {
    return __async(this, null, function* () {
      const saveResponse = yield this.saveDetails(el, props).toPromise();
      if (el.type === "bpmn:SubProcess") {
        el.props.SubProcessName = saveResponse.result.SubProcessName;
        el.props.SubProcessWFVersionNo = saveResponse.result.SubProcessWFVersionNo;
      }
      if (!newElement)
        return;
      if (saveResponse.statuscode === 200) {
        this.handleSaveResponse(el, saveResponse, props);
      } else {
        this.service.deleteElement(el);
      }
    });
  }
  onDeleteElement(ids) {
    return __async(this, null, function* () {
      const workflowId = this.metadata.Workflow.WFID;
      this.deleteWfCall(ids);
      try {
        yield this.wfapi.deleteElements(ids, workflowId).toPromise();
        if (ids.workflowIds.length > 0) {
          this.workflowDeleted.emit(true);
        }
      } catch (_) {
        this.service.undo();
      }
    });
  }
  onConnectionReconnect(ctx) {
    return __async(this, null, function* () {
      const { connection, hints: { docking } } = ctx;
      try {
        let res;
        let flow = connection;
        if (docking === "source") {
          res = yield this.getDetails(connection);
        } else {
          const condition = Object.values(connection.props.TrgConditions)[0];
          flow = {
            type: t3.Trigger,
            id: constructId("Cond_", condition.Name),
            props: condition,
            source: { type: t3.Gateway },
            target: connection.target
          };
          res = yield this.getDetails(flow);
        }
        if (res) {
          const { data, component } = res;
          const props = yield this.openDialog({ element: flow, data, component });
          if (props) {
            yield this.saveDetails(flow, props).toPromise();
          } else {
            this.service.undo();
          }
        }
      } catch (error) {
        this.service.undo();
      }
    });
  }
  onElementsMove(el) {
    return __async(this, null, function* () {
      const res = yield this.getDetails(el);
      if (res) {
        const props = yield this.openDialog(__spreadValues({ element: el }, res));
        if (props) {
          const res2 = yield this.saveDetails(el, props).toPromise();
          if (res2.statuscode === 200) {
            this.handleSaveResponse(el, res2, props);
          } else {
            this.service.deleteElement(el);
          }
        } else {
          this.service.undo();
        }
      }
    });
  }
  handleSaveResponse(el, res, payload) {
    const props = __spreadValues({}, res.result);
    let id = props.Guid;
    if (el.type === t3.Trigger && (el.source.type === t3.Gateway || el.source.type === t3.TriggerExtension)) {
      id = constructId("Cond_", payload.conditionName);
    }
    if (res.statuscode === 200) {
      if (el.type === t3.Trigger) {
        const flow = el;
        const { source, target } = flow;
        if (isStateType(source)) {
          props.WfosId = source.props.WfosId;
        } else if (source.type === t3.Gateway || source.type === t3.TriggerExtension) {
          props.TriggerId = payload.triggerId;
        }
        let targetId = null;
        if (target.type === t3.TriggerExtension) {
          const triggerType = getTriggerType(flow);
          targetId = constructId(triggerType, props.Guid);
        } else if (target.type === t3.Gateway) {
          targetId = constructId(t3.Gateway, props.Guid);
        }
        if (targetId) {
          this.service.updateElementProperties(target, { id: targetId });
        }
      } else if (el.type === t3.TriggerExtension) {
        return;
      } else if (isStateType(el)) {
        props.WfoId = payload.wfoId;
      } else if (el.type === t3.Stage) {
      }
      if (el.props) {
        el.props = __spreadValues(__spreadValues({}, el.props), props);
      } else {
        el.props = __spreadProps(__spreadValues({}, props), { Status: payload.status });
      }
      const updateId = id !== el.id ? { id } : {};
      this.service.updateElementProperties(el, __spreadProps(__spreadValues({}, updateId), { props }));
    }
  }
  toggleActions() {
    this.actionsVisible = !this.actionsVisible;
  }
  openDialog(config) {
    return __async(this, null, function* () {
      const ref = this.msg.showComponent(config.component, {
        workflow: this.metadata?.Workflow,
        config
      });
      return ref.result;
    });
  }
  getDetails(element, newElement) {
    return __async(this, null, function* () {
      const props = element.props || {};
      switch (element.type) {
        case t3.Pool:
          return this._getWorkflowDetails(props, newElement);
        case t3.Stage:
          return this._getStageDetails(props, newElement);
        case t3.StartState:
        case t3.State:
        case t3.EndState:
        case t3.SubProcess:
          return this._getStateDetails(element, newElement);
        case t3.TriggerExtension: {
          const def = element.businessObject.eventDefinitions[0];
          const flow2 = element.incoming[0];
          if (flow2 && def?.$type === EventDef.Timer) {
            return this._getTriggerDetails(flow2, true);
          }
          return null;
        }
        case t3.Trigger:
          const flow = element;
          if (flow.source.type === t3.Gateway || flow.source.type === t3.TriggerExtension && (getEventDef(flow.source) === EventDef.System || getEventDef(flow.source) === EventDef.Timer)) {
            return this._getTriggerConditionDetails(flow, newElement);
          } else {
            if (flow.target && (flow.target.type === "bpmn:IntermediateCatchEvent" || flow.target.type === "bpmn:ExclusiveGateway")) {
              this.reloadData = true;
            }
            return this._getTriggerDetails(flow);
          }
        default:
          return null;
      }
    });
  }
  _getWorkflowDetails(props, newElement) {
    return __async(this, null, function* () {
      const component = WorkflowDetailComponent;
      let data = {};
      if (!newElement) {
        [data] = yield this.wfapi.getWorkflowDetails(props.WFID).toPromise();
      }
      return { component, data };
    });
  }
  _getStageDetails(props, newElement) {
    return __async(this, null, function* () {
      const component = StageDetailComponent;
      let data = {};
      if (!newElement) {
        const { WfoId } = props;
        [data] = yield this.wfapi.getStageDetails(WfoId, this.metadata?.Workflow?.WFID).toPromise();
      }
      return { component, data };
    });
  }
  _getStateDetails(element, newElement) {
    return __async(this, null, function* () {
      const workflowId = this.metadata?.Workflow?.WFID;
      const component = StateDetailComponent;
      let data = {};
      if (newElement) {
        const { WfoId } = element.parent.props;
        data = yield this.wfapi.getStateDetails(null, WfoId, workflowId).toPromise();
      } else {
        const { WfosId, WfoId: stageId } = element.props;
        data = yield this.wfapi.getStateDetails(WfosId, stageId, workflowId).toPromise();
      }
      return { component, data };
    });
  }
  _getTriggerDetails(flow, isTimer) {
    return __async(this, null, function* () {
      const component = isTimer ? TimerDetailComponent : TriggerDetailComponent;
      const workflowId = this.metadata?.Workflow?.WFID;
      const state = flow.source.props;
      const data = yield this.wfapi.getTriggerDetails(flow.props?.TriggerId, state.WfosId, state.WfoId, workflowId).toPromise();
      return { component, data };
    });
  }
  _getTriggerConditionDetails(flow, newElement) {
    return __async(this, null, function* () {
      this.EntityType = "TriggerCondition";
      const workflowId = this.metadata?.Workflow?.WFID;
      let data = {};
      const component = TriggerConditionDetailComponent;
      if (!newElement) {
        const { ConditionId, TriggerId } = flow.props;
        data = yield this.wfapi.getTriggerConditionDetails(ConditionId, TriggerId, workflowId).toPromise();
      } else {
        const { WfoId } = flow.source.parent.props;
        const stateId = flow.target.props.WfosId;
        const res = yield this.wfapi.getTriggerDetails(null, stateId, WfoId, workflowId).toPromise();
        data = {
          CcEmailRole: {
            AvailableCCEmailTrgrRole: res.CCTriggerEmailRole.AvailableCCEmailTrgrRole,
            SelectedCCEmailTrgrRole: {}
          },
          EmailRole: {
            AvailableTriggerEmailRole: res.TriggerEmailRole.AvailableTriggerEmailRole,
            SelectedTriggerEmailRole: {}
          }
        };
      }
      return { component, data };
    });
  }
  saveDetails(element, props) {
    if (element.props && props.status) {
      element.props.Status = props.status;
    }
    if (element.type !== t3.Trigger) {
      this.service.updateElementProperties(element, {
        name: props.friendlyName
      });
    } else {
      this.service.updateElementProperties(element, {});
    }
    const { ProcessName, WFID } = this.metadata.Workflow;
    return this.wfapi.updateElement(element, props, ProcessName, WFID);
  }
  changeMode(mode) {
    this.wfapi.changeMode(this.metadata.Workflow.WFID, mode).subscribe((success) => {
      if (success && mode !== this.metadata.Workflow.WorkflowMode) {
        location.reload();
      }
    });
  }
  refreshXML() {
    this.service.toDiagram(this.metadata, this.el.nativeElement).subscribe();
  }
  generateXML() {
    this.formViewApi.generateBMWFXMLGateway("wf", this.metadata.Workflow.ProcessName, this.metadata.Workflow.Ver).subscribe({
      next: (success) => {
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
          this.toastr.success("JSON generated successfully");
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
        processName: this.metadata.Workflow.ProcessName,
        verNo: this.metadata.Workflow.Ver,
        alertMsgTxt: this.alertMsgTxt
      }
    });
    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }
  createWfosIdToWfoIdMap(data) {
    const stages = data.Workflow.Stages;
    for (const stageKey in stages) {
      const states = stages[stageKey].States;
      for (const stateKey in states) {
        const state = states[stateKey];
        this.wfosIdToWfoIdMap[state.WfosId] = state.WfoId;
      }
    }
    sessionStorage.setItem("StateJson", JSON.stringify(this.wfosIdToWfoIdMap));
    return this.wfosIdToWfoIdMap;
  }
  ngAfterContentInit() {
    if (this.metadata.Workflow) {
      this.previousLength = this.metadata.Coordinates ? Object.keys(this.metadata.Coordinates).length : 0;
      this.coordinatesChangePoints = this.metadata.Coordinates;
      this.totalComponentLenth = Object.keys(this.metadata.Coordinates).length;
      this.keyColorArrayPrevious = Object.entries(this.metadata.Coordinates).map(([key, value]) => {
        const color = "color" in value ? value.color : void 0;
        return [key, color];
      }).filter((entry) => !!entry[1] && entry[1] !== "none" && entry[1] !== "");
      this.IsRedoAllowed = !!this.metadata.Workflow.IsRedoAllowed;
      this.IsUndoAllowed = !!this.metadata.Workflow.IsUndoAllowed;
      this.actionsVisible = this.metadata.Workflow.WorkflowMode !== "Published";
      this.actionsDisabled = !this.actionsVisible;
      this.hasUnsavedChanges = this.storageService.hasUnsavedChanges(this.metadata.Workflow.WFID);
      this.updateUndoRedoState();
      this.addCommandStackListeners();
      this.addKeyboardShortcuts();
      this.addBeforeUnloadListener();
      this.createWfosIdToWfoIdMap(this.metadata);
      this.service.toDiagram(this.metadata, this.el.nativeElement).subscribe();
    } else {
      this.workflowDeleted.emit(true);
    }
  }
  persistWorkflowDataArray() {
    const storageKey = "workflowDataArray";
    const stored = sessionStorage.getItem(storageKey);
    this.workflowDataArray = stored ? JSON.parse(stored) : [];
    const wfid = this.metadata?.Workflow?.WFID;
    if (!wfid)
      return;
    const index = this.workflowDataArray.findIndex(([key]) => key === wfid);
    if (index !== -1) {
      this.workflowDataArray[index][1] += 1;
    } else {
      this.workflowDataArray.push([wfid, 1]);
    }
    sessionStorage.setItem(storageKey, JSON.stringify(this.workflowDataArray));
  }
  getWorkflowValue(wfid) {
    const stored = sessionStorage.getItem("workflowDataArray");
    const array = stored ? JSON.parse(stored) : [];
    const found = array.find(([key]) => key === wfid);
    return found ? found[1] : 0;
  }
  onCompanyAssociation() {
    return __async(this, null, function* () {
      const obj = this.metadata.Workflow;
      const modal = this.msg.showComponent(CompanyAssociationComponent, {
        displayWith: (item) => `${item.WFDISPNAME} > ${item.WFODISPNAME} > ${item.WFOSDISPNAME} > ${item.TRGDISPNAME}`,
        uniqueWith: (item) => `${item.WFNAM}${item.WFOGUID}${item.WFOSGUID}${item.TRGGUID}`,
        getAssociationsWith: (groupId) => this.formViewApi.getWFObjectsForCompanyAssociation(groupId, obj.TypeID, obj.WFID),
        checkBy: "isAlreadySelected"
      }, { size: "lg", centered: true });
      const res = yield modal.result;
      if (res) {
        const success = (yield this.updateCompanyAssociatedRecords(obj, res)) === 1;
        if (success) {
          this.toastr.success("Success");
        }
      }
    });
  }
  updateCompanyAssociatedRecords(wf, res) {
    const stageGuids = /* @__PURE__ */ new Set(), stateGuids = /* @__PURE__ */ new Set(), triggerGuids = /* @__PURE__ */ new Set();
    const selectedItems = Array.isArray(res?.selectedItems) ? res.selectedItems : res?.selectedItems ? [res.selectedItems] : [];
    selectedItems.forEach((item) => {
      stageGuids.add(item.WFOGUID);
      stateGuids.add(item.WFOSGUID);
      triggerGuids.add(item.TRGGUID);
    });
    const payload = {
      WFId: wf?.WFID ?? null,
      ProcessId: wf?.TypeID ?? null,
      CompanyId: res?.companyId ?? null,
      groupName: res?.groupName ?? "",
      WFOGUIDS: [...stageGuids].toString(),
      WFOSGUIDS: [...stateGuids].toString(),
      TrigGUIDS: [...triggerGuids].toString(),
      IsAllComp: res?.IsAllComp ?? false
    };
    return firstValueFrom(this.formViewApi.updateWFObjectsForCompanyAssociation(payload));
  }
  clearStoredEvent() {
    const key = "event";
    sessionStorage.removeItem(key);
  }
  getStoredEvent() {
    const key = "event";
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }
  ngOnDestroy() {
    this.service.destroy();
    this.removeBeforeUnloadListener();
    this.removeKeyboardShortcuts();
  }
  storeChangesLocally(coords) {
    const change = {
      coordinates: coords,
      entityId: this.EntityId,
      entityType: this.EntityType,
      actionName: this.ActionName,
      actionGroupId: this.ActionGroupId,
      actionDetails: this.ActionDetails,
      sequenceNumber: this.getWorkflowValue(this.metadata.Workflow.WFID).toString(),
      timestamp: Date.now()
    };
    this.storageService.storeChanges(this.metadata.Workflow.WFID, change);
    this.hasUnsavedChanges = true;
    setTimeout(() => this.updateUndoRedoState(), 100);
  }
  saveDiagram() {
    if (this.isSaving) {
      return;
    }
    const latestChange = this.storageService.getLatestChange(this.metadata.Workflow.WFID);
    if (!latestChange) {
      this.toastr.info("No changes to save");
      return;
    }
    this.isSaving = true;
    this.processPendingStageChanges().then(() => {
      this.wfapi.saveDiagramCoordinates(this.metadata.Workflow.WFID, latestChange.coordinates, {
        EntityId: latestChange.entityId,
        EntityType: latestChange.entityType,
        ActionName: latestChange.actionName,
        ActionGroupId: latestChange.actionGroupId,
        ActionDetails: latestChange.actionDetails,
        SequenceNumber: latestChange.sequenceNumber
      }).subscribe({
        next: (response) => {
          this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
          this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;
          this.storageService.clearChanges(this.metadata.Workflow.WFID);
          this.hasUnsavedChanges = false;
          this.isSaving = false;
          if (this.bpmnService && this.bpmnService.commandStack) {
            this.bpmnService.commandStack.clear();
          }
          this.updateUndoRedoState();
          this.toastr.success("Diagram saved successfully");
          this.coordinatesChangePoints = latestChange.coordinates;
        },
        error: (error) => {
          console.error("Error saving diagram coordinates:", error);
          this.isSaving = false;
          this.toastr.error("Failed to save diagram. Please try again.");
        }
      });
    }).catch((error) => {
      console.error("Error processing stage changes:", error);
      this.toastr.error("Failed to process stage changes");
      this.isSaving = false;
    });
  }
  processPendingStageChanges() {
    return __async(this, null, function* () {
      const storedChanges = this.getStoredStageChanges();
      if (storedChanges.length === 0) {
        return Promise.resolve();
      }
      const validChanges = storedChanges.filter((change) => {
        const isValid = change.stateID && change.stageID && change.ActionGroupId && change.PreviousStage;
        if (!isValid) {
          console.warn("Skipping invalid stage change:", change);
        }
        return isValid;
      });
      if (validChanges.length === 0) {
        console.log("No valid stage changes to process");
        this.clearStoredStageChanges();
        return Promise.resolve();
      }
      const promises = validChanges.map((change) => {
        return new Promise((resolve, reject) => {
          this.wfapi.callApiOnMoveLane(change.stateID, change.stageID, change.ActionGroupId, change.PreviousStage).subscribe({
            next: (response) => {
              console.log("Stage change API call successful:", response);
              resolve();
            },
            error: (error) => {
              console.error("Stage change API call error:", error);
              reject(error);
            }
          });
        });
      });
      try {
        yield Promise.all(promises);
        this.clearStoredStageChanges();
        console.log("All stage changes processed successfully");
      } catch (error) {
        console.error("Error processing stage changes:", error);
        throw error;
      }
    });
  }
  getStoredStageChanges() {
    try {
      const stored = sessionStorage.getItem("pendingStageChanges");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error parsing stored stage changes:", error);
      sessionStorage.removeItem("pendingStageChanges");
      return [];
    }
  }
  clearStoredStageChanges() {
    sessionStorage.removeItem("pendingStageChanges");
  }
  checkUnsavedChanges() {
    return this.storageService.hasUnsavedChanges(this.metadata.Workflow.WFID);
  }
  discardChanges() {
    this.storageService.clearChanges(this.metadata.Workflow.WFID);
    this.hasUnsavedChanges = false;
    if (this.bpmnService && this.bpmnService.commandStack) {
      this.bpmnService.commandStack.clear();
    }
    this.clearStoredStageChanges();
    this.updateUndoRedoState();
    this.toastr.info("Changes discarded");
  }
  getStorageStats() {
    const size = this.storageService.getStorageSize(this.metadata.Workflow.WFID);
    const changes = this.storageService.getStoredChanges(this.metadata.Workflow.WFID);
    console.log(`Storage size: ${size} bytes, Changes count: ${changes.length}`);
  }
  updateUndoRedoState() {
    if (this.bpmnService && this.bpmnService.commandStack) {
      this.canUndo = this.bpmnService.commandStack.canUndo();
      this.canRedo = this.bpmnService.commandStack.canRedo();
    } else {
      this.canUndo = false;
      this.canRedo = false;
    }
  }
  localUndo() {
    if (this.canUndo && this.bpmnService) {
      this.bpmnService.undo();
      this.updateUndoRedoState();
      this.updateElementPropertiesFromSelectedElement();
    }
  }
  localRedo() {
    if (this.canRedo && this.bpmnService) {
      this.bpmnService.redo();
      this.updateUndoRedoState();
      this.updateElementPropertiesFromSelectedElement();
    }
  }
  addCommandStackListeners() {
    if (this.bpmnService && this.bpmnService.eventBus) {
      this.bpmnService.eventBus.on("commandStack.changed", () => {
        this.updateUndoRedoState();
      });
      this.bpmnService.eventBus.on("commandStack.executed", () => {
        this.updateUndoRedoState();
        this.updateElementPropertiesFromSelectedElement();
      });
      this.bpmnService.eventBus.on("commandStack.reverted", () => {
        this.updateUndoRedoState();
        this.updateElementPropertiesFromSelectedElement();
      });
    }
  }
  addKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "z" && !event.shiftKey) {
        event.preventDefault();
        this.localUndo();
      } else if (event.ctrlKey && event.key === "y" || event.ctrlKey && event.shiftKey && event.key === "z") {
        event.preventDefault();
        this.localRedo();
      }
    });
  }
  addBeforeUnloadListener() {
    window.addEventListener("beforeunload", this.beforeUnloadHandler);
  }
  removeBeforeUnloadListener() {
    window.removeEventListener("beforeunload", this.beforeUnloadHandler);
  }
  removeKeyboardShortcuts() {
  }
  handleSelectionChange(event) {
    const selection = event?.newSelection || [];
    if (selection.length === 1) {
      const selectedElement = selection[0];
      if (selectedElement.type === "bpmn:Lane") {
        this.selectedSwimlane = selectedElement;
        this.selectedState = null;
      } else if ([
        "bpmn:Task",
        "bpmn:StartEvent",
        "bpmn:EndEvent",
        "bpmn:SubProcess"
      ].includes(selectedElement.type)) {
        this.selectedState = selectedElement;
        this.selectedSwimlane = null;
        this.loadStateFontProperties(selectedElement);
      } else {
        this.selectedSwimlane = null;
        this.selectedState = null;
      }
    } else {
      this.selectedSwimlane = null;
      this.selectedState = null;
    }
  }
  alignStatesInSwimlane(alignment) {
    if (!this.selectedSwimlane) {
      console.warn("No swimlane selected");
      this.toastr.warning("Please select a swimlane first");
      return;
    }
    console.log("Aligning states in swimlane:", this.selectedSwimlane.id, "to", alignment);
    this.service.alignStatesInSwimlane(this.selectedSwimlane, alignment);
    const alignmentText = alignment.charAt(0).toUpperCase() + alignment.slice(1);
    this.toastr.success(`States aligned to ${alignmentText}`);
  }
  loadStateFontProperties(element) {
    const currentFontFamily = this.getCurrentFontFamily(element);
    const currentFontSize = this.getCurrentFontSize(element);
    const currentFontColor = this.getCurrentFontColor(element);
    const currentFontBold = this.getCurrentFontBold(element);
    const currentFontItalic = this.getCurrentFontItalic(element);
    const currentFontUnderline = this.getCurrentFontUnderline(element);
    const currentFillColor = this.getCurrentFillColor(element);
    const bo = element.businessObject;
    const boFontFamily = bo?.fontFamily;
    const boFontSize = bo?.fontSize;
    const boFontColor = bo?.fontColor;
    const boFontBold = bo?.fontBold;
    const boFontItalic = bo?.fontItalic;
    const boFontUnderline = bo?.fontUnderline;
    const boFillColor = bo?.color;
    this.selectedFontFamily = this.processFontFamily(boFontFamily || element.fontFamily || element.props && element.props.fontFamily || currentFontFamily || "Museo Sans");
    this.selectedFontSize = this.processFontSize(boFontSize || element.fontSize || element.props && element.props.fontSize || currentFontSize || "13px");
    this.selectedFontColor = this.processFontColor(boFontColor || element.fontColor || element.props && element.props.fontColor || currentFontColor || "#000000");
    this.selectedFontBold = boFontBold !== void 0 ? boFontBold : element.fontBold !== void 0 ? element.fontBold : element.props && element.props.fontBold !== void 0 ? element.props.fontBold : currentFontBold || false;
    this.selectedFontItalic = boFontItalic !== void 0 ? boFontItalic : element.fontItalic !== void 0 ? element.fontItalic : element.props && element.props.fontItalic !== void 0 ? element.props.fontItalic : currentFontItalic || false;
    this.selectedFontUnderline = boFontUnderline !== void 0 ? boFontUnderline : element.fontUnderline !== void 0 ? element.fontUnderline : element.props && element.props.fontUnderline !== void 0 ? element.props.fontUnderline : currentFontUnderline || false;
    this.selectedFillColor = this.processFillColor(boFillColor || element.color || element.props && element.props.color || currentFillColor || "#ffffff");
    console.log("Processed values:", this.selectedFontFamily, this.selectedFontSize, this.selectedFontColor, this.selectedFontBold, this.selectedFontItalic, this.selectedFontUnderline);
    if (!currentFontFamily && !currentFontSize && !currentFontColor && !boFontFamily && !boFontSize && !boFontColor) {
      setTimeout(() => {
        this.loadStateFontPropertiesDelayed(element);
      }, 100);
    }
  }
  processFontFamily(fontFamily) {
    if (!fontFamily)
      return "Museo Sans";
    const cleaned = fontFamily.replace(/['"]/g, "").trim();
    const fontMap = {
      "Museo Sans": "Museo Sans",
      Arial: "Arial",
      Helvetica: "Helvetica",
      "Times New Roman": "Times New Roman",
      Georgia: "Georgia",
      Verdana: "Verdana",
      "Courier New": "Courier New",
      "Comic Sans MS": "Comic Sans MS",
      Impact: "Impact",
      "Trebuchet MS": "Trebuchet MS"
    };
    return fontMap[cleaned] || cleaned || "Museo Sans";
  }
  processFontSize(fontSize) {
    if (!fontSize)
      return "13px";
    const cleaned = fontSize.trim();
    const sizeMap = {
      "8px": "8px",
      "10px": "10px",
      "12px": "12px",
      "13px": "13px",
      "14px": "14px",
      "16px": "16px",
      "18px": "18px",
      "20px": "20px",
      "24px": "24px",
      "28px": "28px",
      "32px": "32px"
    };
    return sizeMap[cleaned] || cleaned || "13px";
  }
  processFontColor(fontColor) {
    if (!fontColor)
      return "#000000";
    const colorMap = {
      white: "#FFFFFF",
      black: "#000000",
      red: "#FF0000",
      green: "#008000",
      blue: "#0000FF",
      yellow: "#FFFF00",
      orange: "#FFA500",
      purple: "#800080",
      pink: "#FFC0CB",
      gray: "#808080",
      grey: "#808080"
    };
    const lowerColor = fontColor.toLowerCase().trim();
    if (colorMap[lowerColor]) {
      return colorMap[lowerColor];
    }
    if (fontColor.startsWith("#")) {
      return fontColor;
    }
    if (fontColor.startsWith("rgb")) {
      const matches = fontColor.match(/\d+/g);
      if (matches && matches.length >= 3) {
        const r = parseInt(matches[0]);
        const g = parseInt(matches[1]);
        const b = parseInt(matches[2]);
        return this.rgbToHex(r, g, b);
      }
    }
    return "#000000";
  }
  loadStateFontPropertiesDelayed(element) {
    console.log("Loading font properties (delayed) for element:", element);
    const currentFontFamily = this.getCurrentFontFamily(element);
    const currentFontSize = this.getCurrentFontSize(element);
    const currentFontColor = this.getCurrentFontColor(element);
    const currentFontBold = this.getCurrentFontBold(element);
    const currentFontItalic = this.getCurrentFontItalic(element);
    const currentFontUnderline = this.getCurrentFontUnderline(element);
    if (currentFontFamily) {
      this.selectedFontFamily = this.processFontFamily(currentFontFamily);
    }
    if (currentFontSize) {
      this.selectedFontSize = this.processFontSize(currentFontSize);
    }
    if (currentFontColor) {
      this.selectedFontColor = this.processFontColor(currentFontColor);
    }
    if (currentFontBold !== void 0) {
      this.selectedFontBold = currentFontBold;
    }
    if (currentFontItalic !== void 0) {
      this.selectedFontItalic = currentFontItalic;
    }
    if (currentFontUnderline !== void 0) {
      this.selectedFontUnderline = currentFontUnderline;
    }
    console.log("Updated font properties (delayed):", this.selectedFontFamily, this.selectedFontSize, this.selectedFontColor, this.selectedFontBold, this.selectedFontItalic, this.selectedFontUnderline);
  }
  getCurrentFontFamily(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector("text");
        if (textElement) {
          const fontFamily = textElement.getAttribute("font-family") || textElement.style.fontFamily || window.getComputedStyle(textElement).fontFamily;
          return fontFamily && fontFamily !== "inherit" ? fontFamily : null;
        }
      }
    } catch (error) {
      console.warn("Error getting font family:", error);
    }
    return null;
  }
  getCurrentFontSize(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector("text");
        if (textElement) {
          const fontSize = textElement.getAttribute("font-size") || textElement.style.fontSize || window.getComputedStyle(textElement).fontSize;
          return fontSize && fontSize !== "inherit" ? fontSize : null;
        }
      }
    } catch (error) {
      console.warn("Error getting font size:", error);
    }
    return null;
  }
  getCurrentFontColor(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector("text");
        if (textElement) {
          const fontColor = textElement.getAttribute("fill") || textElement.style.fill || window.getComputedStyle(textElement).fill;
          return fontColor && fontColor !== "inherit" && fontColor !== "currentColor" ? fontColor : null;
        }
      }
    } catch (error) {
      console.warn("Error getting font color:", error);
    }
    return null;
  }
  getCurrentFontBold(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector("text");
        if (textElement) {
          const fontWeight = textElement.getAttribute("font-weight") || textElement.style.fontWeight || window.getComputedStyle(textElement).fontWeight;
          return fontWeight === "bold" || fontWeight === "700" || fontWeight === "800" || fontWeight === "900";
        }
      }
    } catch (error) {
      console.warn("Error getting font bold:", error);
    }
    return false;
  }
  getCurrentFontItalic(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector("text");
        if (textElement) {
          const fontStyle = textElement.getAttribute("font-style") || textElement.style.fontStyle || window.getComputedStyle(textElement).fontStyle;
          return fontStyle === "italic" || fontStyle === "oblique";
        }
      }
    } catch (error) {
      console.warn("Error getting font italic:", error);
    }
    return false;
  }
  getCurrentFontUnderline(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector("text");
        if (textElement) {
          const textDecoration = textElement.getAttribute("text-decoration") || textElement.style.textDecoration || window.getComputedStyle(textElement).textDecoration;
          return textDecoration.includes("underline");
        }
      }
    } catch (error) {
      console.warn("Error getting font underline:", error);
    }
    return false;
  }
  getCurrentFillColor(element) {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const rectElements = gfx.querySelectorAll("rect");
        for (let i = 0; i < rectElements.length; i++) {
          const rectEl = rectElements[i];
          const fill = rectEl.getAttribute("fill");
          if (fill && fill !== "none" && fill !== "transparent") {
            return fill;
          }
        }
        const pathElements = gfx.querySelectorAll("path");
        for (let i = 0; i < pathElements.length; i++) {
          const pathEl = pathElements[i];
          const fill = pathEl.getAttribute("fill");
          if (fill && fill !== "none" && fill !== "transparent") {
            return fill;
          }
        }
      }
    } catch (error) {
      console.warn("Error getting fill color:", error);
    }
    return null;
  }
  processFillColor(fillColor) {
    if (!fillColor)
      return "#ffffff";
    if (fillColor.startsWith("#")) {
      return fillColor;
    }
    if (fillColor.startsWith("rgb")) {
      const matches = fillColor.match(/\d+/g);
      if (matches && matches.length >= 3) {
        const r = parseInt(matches[0]);
        const g = parseInt(matches[1]);
        const b = parseInt(matches[2]);
        return this.rgbToHex(r, g, b);
      }
    }
    return "#ffffff";
  }
  rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  }
  applyFontFamily() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.applyAllElementProperties();
  }
  applyFontColor() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.applyAllElementProperties();
  }
  applyFillColor() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.applyAllElementProperties();
  }
  applyFontSize() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.applyAllElementProperties();
  }
  toggleFontBold() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.selectedFontBold = !this.selectedFontBold;
    this.applyAllElementProperties();
  }
  toggleFontItalic() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.selectedFontItalic = !this.selectedFontItalic;
    this.applyAllElementProperties();
  }
  toggleFontUnderline() {
    if (!this.selectedState) {
      this.toastr.warning("Please select a state first");
      return;
    }
    this.selectedFontUnderline = !this.selectedFontUnderline;
    this.applyAllElementProperties();
  }
  applyAllElementProperties() {
    if (!this.selectedState)
      return;
    console.log("Applying all element properties:", {
      fontFamily: this.selectedFontFamily,
      fontSize: this.selectedFontSize,
      fontColor: this.selectedFontColor,
      fontBold: this.selectedFontBold,
      fontItalic: this.selectedFontItalic,
      fontUnderline: this.selectedFontUnderline,
      fillColor: this.selectedFillColor
    });
    this.service.applyAllElementProperties(this.selectedState, this.selectedFontFamily, this.selectedFontSize, this.selectedFontColor, this.selectedFontBold, this.selectedFontItalic, this.selectedFontUnderline, this.selectedFillColor);
  }
  // Helper method to check if element is a state type
  isStateType(element) {
    return element && [
      "bpmn:Task",
      "bpmn:StartEvent",
      "bpmn:EndEvent",
      "bpmn:SubProcess"
    ].includes(element.type);
  }
  updateElementPropertiesFromSelectedElement() {
    if (this.selectedState) {
      const bo = this.selectedState.businessObject;
      if (bo) {
        this.selectedFontFamily = bo.fontFamily || this.selectedState.fontFamily || "Museo Sans";
        this.selectedFontSize = bo.fontSize || this.selectedState.fontSize || "13px";
        this.selectedFontColor = bo.fontColor || this.selectedState.fontColor || "#000000";
        this.selectedFontBold = bo.fontBold || this.selectedState.fontBold || false;
        this.selectedFontItalic = bo.fontItalic || this.selectedState.fontItalic || false;
        this.selectedFontUnderline = bo.fontUnderline || this.selectedState.fontUnderline || false;
        this.selectedFillColor = bo.color || this.selectedState.color || "#ffffff";
      } else {
        this.selectedFontFamily = this.selectedState.fontFamily || "Museo Sans";
        this.selectedFontSize = this.selectedState.fontSize || "13px";
        this.selectedFontColor = this.selectedState.fontColor || "#000000";
        this.selectedFontBold = this.selectedState.fontBold || false;
        this.selectedFontItalic = this.selectedState.fontItalic || false;
        this.selectedFontUnderline = this.selectedState.fontUnderline || false;
        this.selectedFillColor = this.selectedState.color || "#ffffff";
      }
      this.cdr.detectChanges();
    }
  }
  static {
    this.\u0275fac = function DiagramComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DiagramComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DiagramService), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BpmnService), \u0275\u0275directiveInject(DiagramStorageService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiagramComponent, selectors: [["app-diagram"]], viewQuery: function DiagramComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.el = _t.first);
      }
    }, inputs: { metadata: "metadata" }, outputs: { workflowDeleted: "workflowDeleted" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 24, consts: [["ref", ""], ["actions", ""], [1, "diagram-container", 2, "position", "relative"], [1, "headerStying"], [1, "header", "W-100", "d-flex", 2, "height", "50px"], [1, "headerText"], ["class", "unsaved-indicator ml-2", "title", "You have unsaved changes", 4, "ngIf"], [1, "d-flex", "justify-content-between", "w-100", 2, "padding-right", "15px"], [1, "d-flex"], [1, "d-none"], [2, "border-left", "1px solid #e0e0e0", "border-right", "1px solid #e0e0e0"], ["width", "20", "height", "35", "viewBox", "0 0 20 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 7.54383V3.81576C18 2.58039 17.0486 1.57892 15.875 1.57892H12.3334M18 7.54383H12.3334M18 7.54383V13.5088M12.3334 1.57892V7.54383M12.3334 1.57892H6.66666M12.3334 7.54383H6.66666M12.3334 7.54383V13.5088M18 13.5088V17.2368C18 18.4722 17.0486 19.4737 15.875 19.4737H12.3334M18 13.5088H12.3334M1 7.54383V3.81576C1 2.58039 1.95139 1.57892 3.125 1.57892H6.66666M1 7.54383H6.66666M1 7.54383V13.5088M6.66666 1.57892V7.54383M6.66666 7.54383V13.5088M1 13.5088V17.2368C1 18.4722 1.95139 19.4737 3.125 19.4737H6.66666M1 13.5088H6.66666M12.3334 13.5088H6.66666M12.3334 13.5088V19.4737M6.66666 13.5088V19.4737M12.3334 19.4737H6.66666", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["style", "display: flex; align-items: center; padding-bottom: 5px", 4, "ngIf"], ["style", "display: flex; align-items: center", 4, "ngIf"], [1, "d-flex", "gap-2", "row", "mr-1"], ["title", "Generate JSON", 1, "btn", "btn-light", 2, "display", "flex", "align-items", "center", "gap", "5px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "18", "viewBox", "0 0 20 18", "fill", "none", 1, "svgDesign"], ["d", "M10.8497 0.358643L12.77 0.742704L9.14066 17.6414L7.22036 17.2573L10.8497 0.358643ZM17.2828 9.00002L13.8358 5.55307V2.83584L20 9.00002L13.8358 15.1546V12.4374L17.2828 9.00002ZM0 9.00002L6.15458 2.83584V5.55307L2.70763 9.00002L6.15458 12.4374V15.1546L0 9.00002Z", "fill", "white"], ["type", "button", 1, "btn", "btn-primary-special", "btn-small", 2, "display", "flex", "align-items", "center", "gap", "5px", "padding-left", "10px !important", "padding-right", "10px !important", 3, "click"], [1, "fa", "fa-link"], ["type", "button", 1, "btn", "btn-success", "btn-small", 2, "display", "flex", "align-items", "center", "gap", "5px", 3, "click", "disabled", "title"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], ["ngbDropdown", "", 1, "d-none"], ["ngbDropdownToggle", "", 1, "btn", "btn-light", "textStyle"], ["class", "fas fa-lock", 4, "ngIf"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["title", "You have unsaved changes", 1, "unsaved-indicator", "ml-2"], [1, "fa", "fa-circle", "text-warning"], [2, "display", "flex", "align-items", "center", "padding-bottom", "5px"], [2, "border-left", "1px solid #e0e0e0", "cursor", "pointer", 3, "click", "disabled", "title"], ["width", "20", "height", "14", "viewBox", "0 0 20 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 5.18422H13.375C16.4816 5.18422 19 7.83516 19 11.1053C19 14.3754 16.4816 17.0263 13.375 17.0263H5.50001M1 5.18422L4.375 1.63159M1 5.18422L4.375 8.73686", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "newBtnDesin"], [2, "border-right", "1px solid #e0e0e0", "cursor", "pointer", 3, "click", "disabled", "title"], ["d", "M19 5.18422H6.625C3.51843 5.18422 1 7.83516 1 11.1053C1 14.3754 3.51843 17.0263 6.625 17.0263H14.5M19 5.18422L15.625 1.63159M19 5.18422L15.625 8.73686", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Align states to top", 2, "border-left", "1px solid #e0e0e0", "cursor", "pointer", 3, "click", "disabled"], ["d", "M1 2H19M1 6H19M1 10H19M1 14H19", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M8 2L12 2L12 6L8 6L8 2Z", "fill", "#555555"], ["title", "Align states to middle", 2, "border-left", "1px solid #e0e0e0", "cursor", "pointer", 3, "click", "disabled"], ["d", "M8 6L12 6L12 10L8 10L8 6Z", "fill", "#555555"], ["title", "Align states to bottom", 2, "border-right", "1px solid #e0e0e0", "cursor", "pointer", 3, "click", "disabled"], ["d", "M8 10L12 10L12 14L8 14L8 10Z", "fill", "#555555"], [2, "display", "flex", "align-items", "center"], [1, "font-control-group"], [1, "font-control-label"], ["title", "Select font family", 1, "font-control-select", 3, "ngModelChange", "change", "disabled", "ngModel"], ["value", "Arial"], ["value", "Museo Sans"], ["value", "Helvetica"], ["value", "Times New Roman"], ["value", "Georgia"], ["value", "Verdana"], ["value", "Courier New"], ["value", "Comic Sans MS"], ["value", "Impact"], ["value", "Trebuchet MS"], ["title", "Select font size", 1, "font-control-select", 3, "ngModelChange", "change", "disabled", "ngModel"], ["value", "8px"], ["value", "10px"], ["value", "12px"], ["value", "13px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["value", "24px"], ["value", "28px"], ["value", "32px"], ["type", "color", "title", "Select font color", 1, "font-control-color", 3, "ngModelChange", "input", "disabled", "ngModel"], ["type", "color", "title", "Select fill color", 1, "font-control-color", 3, "ngModelChange", "input", "disabled", "ngModel"], [1, "font-style-buttons"], ["type", "button", "title", "Toggle Bold", 1, "font-style-btn", 3, "click", "disabled"], ["type", "button", "title", "Toggle Italic", 1, "font-style-btn", 3, "click", "disabled"], ["type", "button", "title", "Toggle Underline", 1, "font-style-btn", 3, "click", "disabled"], [1, "fa", "fa-save"], [1, "fa", "fa-spinner", "fa-spin"], ["clip-path", "url(#clip0_1401_16850)"], ["d", "M13.9688 11.9816L15.0799 10.8699C15.2535 10.6962 15.5556 10.8178 15.5556 11.0679V16.1191C15.5556 17.0396 14.809 17.7865 13.8889 17.7865H1.66667C0.746528 17.7865 0 17.0396 0 16.1191V3.89079C0 2.9702 0.746528 2.2233 1.66667 2.2233H11.1632C11.4097 2.2233 11.5347 2.52206 11.3611 2.69923L10.25 3.81089C10.1979 3.863 10.1285 3.89079 10.0521 3.89079H1.66667V16.1191H13.8889V12.1761C13.8889 12.1032 13.9167 12.0337 13.9688 11.9816ZM19.4063 4.97119L10.2882 14.0937L7.14931 14.4411C6.23958 14.5419 5.46528 13.7741 5.56597 12.857L5.91319 9.71659L15.0313 0.594024C15.8264 -0.201507 17.1111 -0.201507 17.9028 0.594024L19.4028 2.09477C20.1979 2.8903 20.1979 4.17913 19.4063 4.97119ZM15.9757 6.04463L13.9583 4.02627L7.50694 10.4843L7.25347 12.7528L9.52083 12.4992L15.9757 6.04463ZM18.2257 3.2759L16.7257 1.77516C16.5833 1.63273 16.3507 1.63273 16.2118 1.77516L15.1389 2.84861L17.1563 4.86697L18.2292 3.79352C18.3681 3.64762 18.3681 3.41834 18.2257 3.2759Z", "fill", "white"], ["id", "clip0_1401_16850"], ["width", "20", "height", "17.7866", "fill", "white"], [1, "fas", "fa-lock"], ["ngbDropdownItem", "", 3, "click"], [1, "actions"], ["ngbDropdown", "", 1, "mode"], ["ngbDropdownToggle", "", 1, "btn", "btn-light"], ["class", "fas fa-edit", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "btn", "btn-light", 3, "click"], ["class", "fas fa-toggle-on", "title", "Hide palette", 4, "ngIf"], ["class", "fas fa-toggle-off", "title", "Show palette", 4, "ngIf"], ["title", "Generate JSON", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-code"], ["title", "Hide actions", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-chevron-right"], ["title", "Hide palette", 1, "fas", "fa-toggle-on"], ["title", "Show palette", 1, "fas", "fa-toggle-off"], ["title", "Show actions", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-chevron-left"]], template: function DiagramComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275template(6, DiagramComponent_span_6_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "button", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 11);
        \u0275\u0275element(12, "path", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(13, DiagramComponent_div_13_Template, 6, 2, "div", 13)(14, DiagramComponent_div_14_Template, 6, 2, "div", 13)(15, DiagramComponent_div_15_Template, 7, 1, "div", 13)(16, DiagramComponent_div_16_Template, 7, 1, "div", 13)(17, DiagramComponent_div_17_Template, 7, 1, "div", 13)(18, DiagramComponent_div_18_Template, 25, 2, "div", 14)(19, DiagramComponent_div_19_Template, 27, 2, "div", 14)(20, DiagramComponent_div_20_Template, 5, 2, "div", 14)(21, DiagramComponent_div_21_Template, 5, 2, "div", 14)(22, DiagramComponent_div_22_Template, 12, 9, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "div", 8)(24, "div", 15)(25, "button", 16);
        \u0275\u0275listener("click", function DiagramComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.generateXML());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 17);
        \u0275\u0275element(27, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, " Generate JSON");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "button", 19);
        \u0275\u0275listener("click", function DiagramComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCompanyAssociation());
        });
        \u0275\u0275element(31, "i", 20);
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "Company Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 21);
        \u0275\u0275listener("click", function DiagramComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveDiagram());
        });
        \u0275\u0275template(35, DiagramComponent_i_35_Template, 1, 0, "i", 22)(36, DiagramComponent_i_36_Template, 1, 0, "i", 23)(37, DiagramComponent_span_37_Template, 2, 0, "span", 24)(38, DiagramComponent_span_38_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 25)(40, "button", 26);
        \u0275\u0275template(41, DiagramComponent_i_41_Template, 7, 0, "i", 24)(42, DiagramComponent_i_42_Template, 1, 0, "i", 27);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "ul", 28);
        \u0275\u0275template(45, DiagramComponent_li_45_Template, 2, 1, "li", 29);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275template(46, DiagramComponent_ng_template_46_Template, 9, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", ctx.metadata.Workflow.FriendlyName, " (", ctx.metadata.Workflow.Ver, ") ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasUnsavedChanges);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance(12);
        \u0275\u0275property("disabled", ctx.isSaving || !ctx.hasUnsavedChanges)("title", ctx.hasUnsavedChanges ? "Save changes to cloud" : "No changes to save");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.actionsDisabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.actionsDisabled);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.metadata.Workflow.WorkflowMode, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(23, _c15));
      }
    }, dependencies: [
      NgbDropdown,
      NgbDropdownToggle,
      NgIf,
      NgbDropdownMenu,
      NgForOf,
      NgbDropdownItem,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel
    ], styles: ['\n\n.diagram-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  top: 0;\n  right: 0;\n  position: absolute;\n  z-index: 1;\n}\n.custom-dialog-container[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.headerStying[_ngcontent-%COMP%] {\n  z-index: 1000;\n  left: 0;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  background: #f2f2f2;\n  height: 40px;\n}\n.header[_ngcontent-%COMP%]   .headerText[_ngcontent-%COMP%] {\n  width: 15%;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  color: #040404;\n  font-family: "Museo Sans";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 14px;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: none;\n  background: #f2f2f2;\n}\n.header[_ngcontent-%COMP%]   .IconContainerBox[_ngcontent-%COMP%] {\n  border-left: 1px solid #e0e0e0;\n  border-right: 1px solid #e0e0e0;\n  border-top: none;\n  border-bottom: none;\n}\n.header[_ngcontent-%COMP%]   .iconbutton[_ngcontent-%COMP%] {\n  width: 217px;\n  height: 38px;\n}\n.header[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%] {\n  width: 650px;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  color: white;\n  border-radius: 5px;\n  background: #005996;\n  color: #fff;\n  text-align: center;\n  font-family: "Museo Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: auto;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n.svgDesign[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 17.283px;\n}\n.enableDisable[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: #005996;\n}\n.enableDisable[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.newBtnDesin[_ngcontent-%COMP%] {\n  font-family: "Museo Sans";\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0%;\n}\n  .djs-element.djs-connection.selected .djs-visual path {\n  stroke: #214fb5 !important;\n}\n  .djs-element.djs-shape.selected .djs-outline {\n  display: none !important;\n}\n  .djs-element.djs-shape.selected .djs-selection-outline {\n  display: none !important;\n}\n.compAssocation[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: -2px;\n}\n.linkPadding[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n.unsaved-indicator[_ngcontent-%COMP%]   .fa-circle[_ngcontent-%COMP%] {\n  font-size: 8px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed !important;\n}\nbutton[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\nbutton[_ngcontent-%COMP%]:disabled   span[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n  .djs-element.djs-shape .djs-visual rect {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual circle {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual path {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual g rect {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual g circle {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual g path {\n  stroke: black !important;\n}\n.font-control-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  border-left: 1px solid #e0e0e0;\n  border-right: 1px solid #e0e0e0;\n  background: #f2f2f2;\n  min-width: 100px;\n}\n.font-control-label[_ngcontent-%COMP%] {\n  font-family: "Museo Sans";\n  font-size: 11px;\n  font-weight: 400;\n  color: #555555;\n  white-space: nowrap;\n  margin: 0;\n}\n.font-control-select[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 2px 4px;\n  font-family: "Museo Sans";\n  font-size: 11px;\n  background: white;\n  min-width: 80px;\n}\n.font-control-select[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  color: #999;\n  cursor: not-allowed;\n}\n.font-control-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #005996;\n  box-shadow: 0 0 0 1px #005996;\n}\n.font-control-color[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 24px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  cursor: pointer;\n  background: white;\n}\n.font-control-color[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.font-control-color[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #005996;\n  box-shadow: 0 0 0 1px #005996;\n}\n.font-style-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  align-items: center;\n}\n.font-style-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Museo Sans";\n  font-size: 15px;\n  font-weight: bold;\n  color: #555555;\n  transition: all 0.2s ease;\n}\n.font-style-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n.font-style-btn.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  border-color: #007bff;\n  text-decoration: underline;\n}\n.font-style-btn[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.font-style-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.font-style-btn[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.font-style-btn[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  font-style: normal;\n  text-decoration: none;\n  font-weight: bold;\n}\n/*# sourceMappingURL=diagram.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiagramComponent, { className: "DiagramComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\diagram\\diagram.component.ts", lineNumber: 100 });
})();

// src/app/admin/wf/wfd/wfd.component.ts
function WfdComponent_app_diagram_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-diagram", 6);
    \u0275\u0275listener("workflowDeleted", function WfdComponent_app_diagram_6_Template_app_diagram_workflowDeleted_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDelete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const metadata_r3 = ctx.ngIf;
    \u0275\u0275property("metadata", metadata_r3);
  }
}
var WfdComponent = class _WfdComponent {
  constructor(service, route, router, serviceBpmn, titleService) {
    this.service = service;
    this.route = route;
    this.router = router;
    this.serviceBpmn = serviceBpmn;
    this.titleService = titleService;
    this.processName = sessionStorage.getItem("AppName");
    this.backsImageUrl = UtilService.getUrlForImage("/assets/styles/images/back-icon-black.png");
  }
  ngOnInit() {
    this.metadata$ = this.route.queryParamMap.pipe(tap((params) => {
      this.processName = params.get("processName");
      sessionStorage.setItem("DisplayName", this.processName);
      sessionStorage.setItem("AppName", this.processName);
      this.updateDocumentTitle(this.processName);
    }), switchMap((params) => this.service.getWorkflowDiagram(this.processName, params.get("VerNo"))));
  }
  updateDocumentTitle(title) {
    this.titleService.setTitle(title);
  }
  handleDelete() {
    this.router.navigate(["admin/wf"]);
  }
  routeBack() {
    window.history.back();
  }
  static {
    this.\u0275fac = function WfdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfdComponent)(\u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DiagramService), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfdComponent, selectors: [["app-wfd"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "breadcrumbs", "p-1", "mb-1", 2, "background-color", "#fff", "height", "35px", "display", "flex", "align-items", "center", "margin-top", "0px"], [3, "click"], ["width", "20px", 2, "filter", "var(--plx-app-list-icon-filter)", 3, "src"], [1, "diagram-parent"], [3, "metadata", "workflowDeleted", 4, "ngIf"], [1, "modeler"], [3, "workflowDeleted", "metadata"]], template: function WfdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275listener("click", function WfdComponent_Template_a_click_1_listener() {
          return ctx.routeBack();
        });
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4, "Back");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, WfdComponent_app_diagram_6_Template, 1, 1, "app-diagram", 4);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.backsImageUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 2, ctx.metadata$));
      }
    }, dependencies: [NgIf, DiagramComponent, AsyncPipe], styles: ["\n\n.diagram-parent[_ngcontent-%COMP%] {\n  height: 100vh;\n  border: solid 3px #EEE;\n  position: relative;\n}\n.diagram-parent[_ngcontent-%COMP%]   .enableDisable[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: #005996;\n}\n.diagram-parent[_ngcontent-%COMP%]   .enableDisable[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.import-error[_ngcontent-%COMP%] {\n  color: red;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.diagram-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.diagram-parent[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.modeler[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: right;\n}\n.breadcrumbs[_ngcontent-%COMP%] {\n  margin-top: -18px;\n}\n/*# sourceMappingURL=wfd.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfdComponent, { className: "WfdComponent", filePath: "src\\app\\admin\\wf\\wfd\\wfd.component.ts", lineNumber: 21 });
})();

// src/app/admin/wf/wfd/wfd-routing.module.ts
var routes = [{ path: "", component: WfdComponent }];
var WfdRoutingModule = class _WfdRoutingModule {
  static {
    this.\u0275fac = function WfdRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfdRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WfdRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/wf/wfd/wfd.module.ts
var WfdModule = class _WfdModule {
  static {
    this.\u0275fac = function WfdModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfdModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WfdModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      WfdRoutingModule,
      SharedModule,
      WfdComponent,
      DiagramComponent,
      StageDetailComponent,
      StateDetailComponent,
      TriggerDetailComponent,
      TriggerConditionDetailComponent,
      TimerDetailComponent,
      WorkflowDetailComponent
    ] });
  }
};
export {
  WfdModule
};
//# sourceMappingURL=chunk-THJXGG6S.js.map
