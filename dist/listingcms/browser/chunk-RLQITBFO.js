import {
  DMOS,
  MatInput
} from "./chunk-W7MRP3RE.js";
import {
  DataModelerApiService
} from "./chunk-BB5KTJXW.js";
import {
  NAME_VALIDATORS
} from "./chunk-IZC66MGR.js";
import {
  MatExpansionPanel,
  MatExpansionPanelHeader
} from "./chunk-LNAQ2UNQ.js";
import {
  ObjectControlModule
} from "./chunk-XJNJIFSZ.js";
import {
  SharedModule,
  TabComponent,
  TabsComponent
} from "./chunk-AVHCICF3.js";
import "./chunk-C5NFJAYY.js";
import {
  FormViewApiService,
  GenerateXmlComponent,
  MatDialog
} from "./chunk-NIXK6VWY.js";
import "./chunk-AZ2LSUZA.js";
import {
  ListColumnType,
  MatRadioButton,
  ObjectControlComponent
} from "./chunk-FKDZX6HV.js";
import {
  ActionState,
  BM,
  BMO,
  BMOG,
  BMOType,
  CustomDataSource,
  DMComponent,
  DMOG,
  DMOGType,
  DMOStatus,
  DataSource,
  EnableTLCorner,
  FormBmoType,
  ObjectControl,
  ObjectDetail,
  RegExType,
  Status,
  StorageProvider,
  canvasType
} from "./chunk-74OCJGBF.js";
import {
  AssociationComponent,
  arrayToList,
  enumToList,
  listToTypeArray,
  primitiveArrayToList,
  require_lodash,
  toFormArray,
  toFormGroup
} from "./chunk-BQKXR4UC.js";
import {
  MatAutocomplete
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import "./chunk-ILK2XUKT.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  DmoImageControlService,
  MessageService,
  NgbDateFRParserFormatter
} from "./chunk-43FCU5DY.js";
import "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import {
  FormGroupDirective,
  NgControlStatusGroup,
  NgLabelTemplateDirective,
  NgOptionComponent,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectOption,
  NgbActiveModal,
  NgbDateParserFormatter,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbInputDatepicker,
  NgbProgressbar,
  NgbTooltip,
  ReactiveFormsModule,
  ToastrService,
  UntypedFormBuilder,
  UtilService,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  EMPTY,
  ElementRef,
  EventEmitter,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  RouterModule,
  SlicePipe,
  Subject,
  catchError,
  filter,
  finalize,
  from,
  map,
  mergeAll,
  of,
  startWith,
  switchMap,
  takeWhile,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/admin/data-modeler/components/bm-detail/bm-detail.component.ts
function BmDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("New ", ctx_r0.title, "");
  }
}
function BmDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.title, " Details");
  }
}
function BmDetailComponent_ng_container_9_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 12);
  }
  if (rf & 2) {
    const control_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(control_r2.class);
    \u0275\u0275property("config", control_r2)("parentForm", ctx_r0.form);
  }
}
function BmDetailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BmDetailComponent_ng_container_9_app_object_control_1_Template, 1, 4, "app-object-control", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r2.show));
  }
}
function BmDetailComponent_button_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function BmDetailComponent_button_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function BmDetailComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function BmDetailComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(1, BmDetailComponent_button_13_ng_container_1_Template, 2, 0, "ng-container", 2)(2, BmDetailComponent_button_13_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.newObject);
  }
}
var BmDetailComponent = class _BmDetailComponent extends ObjectDetail {
  constructor() {
    super(...arguments);
    this.title = "Business Model";
    this.status = enumToList(Status);
  }
  initForm() {
    this.form = this.fb.group({
      Name: [this.data.Name],
      DisplayName: [this.data.DisplayName, [Validators.required]],
      Version: [this.data.Version, [Validators.required]],
      ProcessName: [this.data.ProcessName],
      Status: [this.status.find((s) => s.key == this.data.Status), [Validators.required]],
      IntegrateWorkspace: [+this.data.IntegrateWorkspace],
      Description: [this.data.Description]
    });
    this.controls = [
      new ObjectControl({ name: "Name", readonly: true, required: true }),
      new ObjectControl({ name: "DisplayName", label: "Friendly Name", required: true }),
      new ObjectControl({ name: "Version", readonly: true }),
      new ObjectControl({ name: "ProcessName", label: "Process Name", readonly: true }),
      new ObjectControl({
        name: "Status",
        type: "dropdown",
        required: true,
        options: of(this.status)
      }),
      new ObjectControl({ name: "IntegrateWorkspace", label: "Integrate Workspace", type: "switch" }),
      new ObjectControl({ name: "Description", label: "Long Description", type: "rich", class: "span-12" })
    ];
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload = __spreadProps(__spreadValues(__spreadValues({}, this.data.unreferenceAll()), val), {
        Status: val.Status?.key || val.Status,
        IntegrateWorkspace: +val.IntegrateWorkspace
      });
      this.output.emit(payload);
      this.ref.close(payload);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BmDetailComponent_BaseFactory;
      return function BmDetailComponent_Factory(__ngFactoryType__) {
        return (\u0275BmDetailComponent_BaseFactory || (\u0275BmDetailComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BmDetailComponent)))(__ngFactoryType__ || _BmDetailComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BmDetailComponent, selectors: [["app-bm-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup"], [1, "double-column"], [4, "ngFor", "ngForOf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [3, "config", "parentForm", "class", 4, "ngIf"], [3, "config", "parentForm"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function BmDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, BmDetailComponent_h2_2_Template, 2, 1, "h2", 2)(3, BmDetailComponent_h2_3_Template, 2, 1, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function BmDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "form", 5)(8, "div", 6);
        \u0275\u0275template(9, BmDetailComponent_ng_container_9_Template, 3, 3, "ng-container", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
        \u0275\u0275listener("click", function BmDetailComponent_Template_button_click_11_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(12, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, BmDetailComponent_button_13_Template, 3, 2, "button", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newObject);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newObject);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.controls);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.data.published);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      NgForOf,
      ObjectControlComponent,
      AsyncPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BmDetailComponent, { className: "BmDetailComponent", filePath: "src\\app\\admin\\data-modeler\\components\\bm-detail\\bm-detail.component.ts", lineNumber: 23 });
})();

// src/app/admin/data-modeler/components/bmo-detail/bmo-detail.component.ts
function BmoDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("New ", ctx_r0.title, "");
  }
}
function BmoDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.title, " Details");
  }
}
function BmoDetailComponent_ng_container_9_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 13);
  }
  if (rf & 2) {
    const control_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(control_r2.class);
    \u0275\u0275property("config", control_r2)("parentForm", ctx_r0.form);
  }
}
function BmoDetailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BmoDetailComponent_ng_container_9_app_object_control_1_Template, 1, 4, "app-object-control", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r2.show));
  }
}
function BmoDetailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "label", 16);
    \u0275\u0275text(3, "Available DMOGs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 16);
    \u0275\u0275text(5, "Selected DMOGs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-association", 17);
    \u0275\u0275listener("add", function BmoDetailComponent_div_10_Template_app_association_add_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onShareAdd($event));
    })("remove", function BmoDetailComponent_div_10_Template_app_association_remove_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onShareRemove($event));
    })("reorder", function BmoDetailComponent_div_10_Template_app_association_reorder_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onShareReorder($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("items", ctx_r0.allDmogs)("associatedItems", ctx_r0.associatedSharedItems)("displayWith", ctx_r0.displayShare)("uniqueWith", ctx_r0.uniqueShare)("checkAll", false)("shouldAdd", ctx_r0.shouldAdd);
  }
}
function BmoDetailComponent_button_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function BmoDetailComponent_button_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function BmoDetailComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function BmoDetailComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(1, BmoDetailComponent_button_14_ng_container_1_Template, 2, 0, "ng-container", 2)(2, BmoDetailComponent_button_14_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.newObject);
  }
}
var BmoDetailComponent = class _BmoDetailComponent extends ObjectDetail {
  constructor(ref, fb, api, toastr) {
    super(ref, fb);
    this.api = api;
    this.toastr = toastr;
    this.dmogSharing = true;
    this.title = "Business Model Object";
    this.bmoTypeList = enumToList(BMOType);
    this.FormBmoType = enumToList(FormBmoType);
    this.status = enumToList(Status);
    this.availableDmogToShare = [];
    this.allDmogs = [];
    this.associatedSharedItems = [];
    this.sharedChanged = false;
    this.displayShare = (item) => item.value;
    this.uniqueShare = (item) => item.value;
    this.shouldAdd = (item) => this.api.checkDmogInBmo(item.dmogId.toString(), item.bmogId.toString()).pipe(tap((success) => {
      if (!success) {
        this.toastr.warning("This dmog cannot be shared");
      }
    }));
    this.onShareReorder = (items) => {
      this.associatedSharedItems = items;
      this.sharedChanged = true;
    };
    this.refreshAllDmogs = () => {
      this.allDmogs.forEach((dmog) => {
        const rightCheck = this.associatedSharedItems.some((item) => item.key === dmog.key);
        dmog.selected = rightCheck;
        dmog.disabled = rightCheck;
      });
      this.allDmogs = this.allDmogs;
    };
    this.formActions = [
      { controlName: "BmoType", handler: (type) => this.onBmoTypeChange(type) },
      { controlName: "ChildProcessId", handler: (processId) => this.onChildProcessIdChange(processId) }
    ];
  }
  beforeFormInit() {
    this.allDmogs = this.getSharedItems();
    this.associatedSharedItems = this.allDmogs.filter((item) => item.selected);
    this.subprocessList$ = this.api.getSubprocessList(this.parent.parent.BMId.toString()).pipe(this.handleApiResponse("SubProcessId"));
    this.childProcessList$ = this.api.getChildProcessList(this.parent.parent.BMId.toString()).pipe(this.handleApiResponse("ChildProcessId"));
    this.parentProcessDmos$ = this.api.getProcessDmos(this.parent.parent.ProcessId).pipe(this.handleApiResponse("ParentProcessDmoGuid"));
  }
  initForm() {
    const validators = [...NAME_VALIDATORS];
    if (this.newObject) {
      const allBmos = Object.values(this.parent.root.childrenMap).flatMap((bmog) => Object.values(bmog.childrenMap));
    }
    ;
    this.form = this.fb.group({
      Name: [this.data.Name, { validators, updateOn: "blur" }],
      DisplayName: [this.data.DisplayName, [Validators.required]],
      Version: [this.data.Version || this.parent.Version, [Validators.required]],
      BmoType: [this.bmoTypeList.find((t) => t.key === this.data.BmoType), [Validators.required]],
      Status: [this.status.find((s) => s.key == (this.data.Status || Status.Active)), [Validators.required]],
      ShortDesc: [this.data.ShortDesc, [Validators.required]],
      LongDesc: [this.data.LongDesc],
      SubProcessId: [this.data.SubProcessId],
      ChildProcessId: [this.data.ChildProcessId],
      ChildProcessDmoGuid: [this.data.ChildProcessDmoGuid],
      ParentProcessDmoGuid: [this.data.ParentProcessDmoGuid]
    });
    this.controls = [
      new ObjectControl({ name: "Name", readonly: !this.newObject, required: true }),
      new ObjectControl({ name: "DisplayName", label: "Friendly Name", required: true }),
      new ObjectControl({ name: "Version", readonly: true }),
      new ObjectControl({
        name: "BmoType",
        label: "Type",
        type: "dropdown",
        required: true,
        options: of(this.parent.CanvasType === "Form" ? this.FormBmoType : this.bmoTypeList)
      }),
      new ObjectControl({
        name: "Status",
        type: "dropdown",
        required: true,
        options: of(this.status)
      }),
      // new ObjectControl({
      //   name: 'Share', type: 'dropdown', options: of(this.sharedItems), multiple: true,
      //   show: this.show('BmoType', BMOType.Form), groupOptionsBy: 'parent',  
      // }),
      new ObjectControl({
        name: "SubProcessId",
        label: "Subprocess List",
        type: "dropdown",
        required: true,
        options: this.subprocessList$,
        show: this.show("BmoType", BMOType.SubProcess)
      }),
      new ObjectControl({
        name: "ChildProcessId",
        label: "Child Process List",
        type: "dropdown",
        required: true,
        options: this.childProcessList$,
        show: this.show("BmoType", BMOType.ChildProcess)
      }),
      new ObjectControl({
        name: "ParentProcessDmoGuid",
        label: "Parent Process DMOs",
        type: "dropdown",
        required: true,
        options: this.parentProcessDmos$,
        show: this.show("BmoType", BMOType.ChildProcess)
      }),
      new ObjectControl({
        name: "ChildProcessDmoGuid",
        label: "Child Process DMOs",
        type: "dropdown",
        required: true,
        options: of([]),
        show: this.show("BmoType", BMOType.ChildProcess)
      }),
      new ObjectControl({ name: "ShortDesc", label: "Short Description", required: true }),
      new ObjectControl({ name: "LongDesc", label: "Long Description", type: "rich", class: "span-12" })
    ];
    this.api.GetAvailableDmogToShare(this.parent.root.selectedBMOG.BMOGID, this.parent.root.BMId).subscribe((x) => {
      this.availableDmogToShare = x;
      const avDmogs = this.getAllDmog();
      this.allDmogs = avDmogs;
    });
    this.form.get("Name").valueChanges.subscribe((name) => {
      if (this.newObject && name && name.length >= 4 && !this.form.get("Name").hasError("maxlength") && !this.form.get("Name").hasError("pattern")) {
        this.api.checkNameValidity("bmo", 0, name, this.parent.root.Version, this.parent.root.ProcessName).subscribe((IsExits) => {
          if (IsExits) {
            const nameControl = this.form.get("Name");
            nameControl.setErrors({
              nameExists: true,
              message: "Duplicate name"
            });
          }
        });
      }
    });
  }
  getSharedItems() {
    let list = [];
    const share = this.data.Share || [];
    Object.values(this.parent.root.childrenMap).forEach((bmog) => {
      Object.values(bmog.childrenMap).filter((bmo) => !bmo.shared).forEach((bmo) => {
        Object.values(bmo.childrenMap).filter((dmog) => !dmog.shared).forEach((dmog) => {
          const selected = share.some((item2) => item2.value === dmog.id) || this.data?.Children?.some((guid) => guid === dmog.id);
          const item = {
            key: dmog.id,
            dmogId: dmog.DMOGID,
            value: `${dmog.DisplayName} (${dmog.Name})`,
            bmogId: this.parent.BMOGID,
            parent: `${bmog.Name} / ${bmo.DisplayName}`,
            parentId: bmo.id,
            selected,
            disabled: selected
          };
          list.push(item);
        });
      });
    });
    return list;
  }
  getAllDmog() {
    let list = [];
    const share = this.data.Share || [];
    this.availableDmogToShare.forEach((dmog, i) => {
      const check = share.some((item2) => item2.value === dmog.dmogGuid) || this.data?.Children?.some((guid) => guid === dmog.dmogGuid);
      const item = {
        key: dmog.dmogGuid,
        value: dmog.NAME,
        dmogId: dmog.DMOGID,
        bmogId: this.parent.BMOGID,
        parent: `${this.parent.Name} / ${this.parent.parent.selectedBMOG.Name}`,
        parentId: this.parent.parent.selectedBMOG.id,
        selected: check,
        disabled: check
      };
      list.push(item);
    });
    return list;
  }
  afterFormInit() {
    setTimeout(() => {
      const val = this.bmoTypeList.find(({ key }) => key === this.data.BmoType);
      this.f.BmoType.patchValue(val);
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload = __spreadProps(__spreadValues({}, val), {
        Parent: this.parent.id,
        BMOID: this.data.BMOID,
        BmoType: val.BmoType?.key || val.BmoType,
        Status: val.Status?.key || val.Status,
        Children: this.data?.Children || [],
        id: this.data?.id || val.Name,
        GUID: this.data?.GUID || val.Name,
        SubProcessId: val.SubProcessId?.key || val.SubProcessId,
        ChildProcessId: val.ChildProcessId?.key || val.ChildProcessId,
        ChildProcessDmoGuid: val.ChildProcessDmoGuid?.key || val.ChildProcessDmoGuid,
        ParentProcessDmoGuid: val.ParentProcessDmoGuid?.key || val.ParentProcessDmoGuid,
        ParentBMId: this.parent.root.BMId
      });
      const shared = {
        bmoid: this.data.BMOID,
        dmogIds: this.sharedChanged ? this.associatedSharedItems.map(({ dmogId }) => dmogId).toString() : "-1"
      };
      this.output.emit(payload);
      this.ref.close({ payload, shared });
    }
  }
  onBmoTypeChange(val) {
    val = val?.key || val;
    this.dmogSharing = false;
    if (val === BMOType.SubProcess) {
      this.f.SubProcessId.setValidators(Validators.required);
      this.f.ChildProcessId.clearValidators();
      this.f.ChildProcessDmoGuid.clearValidators();
      this.f.ParentProcessDmoGuid.clearValidators();
    } else if (val === BMOType.ChildProcess) {
      this.f.SubProcessId.clearValidators();
      this.f.ChildProcessId.setValidators(Validators.required);
      this.f.ChildProcessDmoGuid.setValidators(Validators.required);
      this.f.ParentProcessDmoGuid.setValidators(Validators.required);
    }
    if (val === BMOType.Form) {
      this.dmogSharing = true;
    }
    this.form.updateValueAndValidity();
  }
  onChildProcessIdChange(processId) {
    processId = processId?.key || processId;
    const control = this.controls.find((c) => c.name === "ChildProcessDmoGuid");
    control.options = this.api.getProcessDmos(processId).pipe(this.handleApiResponse("ChildProcessDmoGuid"));
    this.f.ChildProcessDmoGuid.reset();
  }
  handleApiResponse(control) {
    return (source) => {
      return source.pipe(map((list) => arrayToList(list, "Value", "Label")), tap((list) => {
        const val = list.find(({ key }) => key === this.data[control]);
        this.f[control].patchValue(val);
      }));
    };
  }
  show(controlName, compareTo) {
    return this.form.get(controlName).valueChanges.pipe(startWith(this.form.get(controlName).value), map((v) => v?.key || v), map((v) => v === compareTo));
  }
  onShareAdd(item) {
    this.associatedSharedItems = this.associatedSharedItems.concat(item);
    this.sharedChanged = true;
    this.refreshAllDmogs();
  }
  onShareRemove(item) {
    this.associatedSharedItems = this.associatedSharedItems.filter((dmog) => dmog.dmogId !== item.dmogId);
    this.sharedChanged = true;
    this.refreshAllDmogs();
  }
  static {
    this.\u0275fac = function BmoDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmoDetailComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BmoDetailComponent, selectors: [["app-bmo-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 15, vars: 6, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup"], [1, "double-column"], [4, "ngFor", "ngForOf"], ["class", "span-12", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [3, "config", "parentForm", "class", 4, "ngIf"], [3, "config", "parentForm"], [1, "span-12"], [1, "double-column", 2, "margin", "0"], ["for", "", 1, "span-6"], ["checkBy", "selected", "disableBy", "disabled", 3, "add", "remove", "reorder", "items", "associatedItems", "displayWith", "uniqueWith", "checkAll", "shouldAdd"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function BmoDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, BmoDetailComponent_h2_2_Template, 2, 1, "h2", 2)(3, BmoDetailComponent_h2_3_Template, 2, 1, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function BmoDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "form", 5)(8, "div", 6);
        \u0275\u0275template(9, BmoDetailComponent_ng_container_9_Template, 3, 3, "ng-container", 7)(10, BmoDetailComponent_div_10_Template, 7, 6, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
        \u0275\u0275listener("click", function BmoDetailComponent_Template_button_click_12_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(13, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, BmoDetailComponent_button_14_Template, 3, 2, "button", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newObject);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newObject);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.controls);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dmogSharing);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.parent.root.published);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      NgForOf,
      ObjectControlComponent,
      AssociationComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BmoDetailComponent, { className: "BmoDetailComponent", filePath: "src\\app\\admin\\data-modeler\\components\\bmo-detail\\bmo-detail.component.ts", lineNumber: 32 });
})();

// src/app/admin/data-modeler/components/bmog-detail/bmog-detail.component.ts
function BmogDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("New ", ctx_r0.title, "");
  }
}
function BmogDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.title, " Details");
  }
}
function BmogDetailComponent_ng_container_9_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 16);
  }
  if (rf & 2) {
    const control_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(control_r2.class);
    \u0275\u0275property("parentForm", ctx_r0.form)("config", control_r2);
  }
}
function BmogDetailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BmogDetailComponent_ng_container_9_app_object_control_1_Template, 1, 4, "app-object-control", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r2.show));
  }
}
function BmogDetailComponent_button_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function BmogDetailComponent_button_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function BmogDetailComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function BmogDetailComponent_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(1, BmogDetailComponent_button_20_ng_container_1_Template, 2, 0, "ng-container", 2)(2, BmogDetailComponent_button_20_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.newObject);
  }
}
var BmogDetailComponent = class _BmogDetailComponent extends ObjectDetail {
  constructor(ref, fb, api, toastr) {
    super(ref, fb);
    this.api = api;
    this.toastr = toastr;
    this.title = "Business Model Object Group";
    this.canvasTypeList = enumToList(canvasType);
    this.status = enumToList(Status);
    this.enableTLValues = enumToList(EnableTLCorner);
    this.availableBmoToShare = [];
    this.allBMOs = [];
    this.associatedSharedItems = [];
    this.sharedChanged = false;
    this.displayShare = (item) => item.value;
    this.uniqueShare = (item) => item.value + item.key;
    this.shouldAdd = (item) => {
      const val = this.form.value;
      if (val.CanvasType?.key == void 0) {
        this.toastr.warning("Please select canvas type before shared");
        return of(false);
      }
      if (val.CanvasType?.key === "Form" && item.type != "Forms") {
        this.toastr.warning("Only form type bmo can be shared in case of form type bmog");
        return of(false);
      }
      return this.api.checkBmoInBmog(item.key.toString(), (this.data.BMOGID || -1).toString()).pipe(tap((success) => {
        if (!success) {
          this.toastr.warning("This bmo cannot be shared");
        }
      }));
    };
    this.onShareReorder = (items) => {
      this.associatedSharedItems = items;
      this.sharedChanged = true;
      this.refreshAllBMOs();
    };
    this.refreshAllBMOs = () => {
      this.allBMOs.forEach((dmog) => {
        const rightCheck = this.associatedSharedItems.some((item) => item.GUID === dmog.GUID);
        dmog.selected = rightCheck;
        dmog.disabled = rightCheck;
      });
      this.allBMOs = this.allBMOs;
    };
  }
  beforeFormInit() {
    this.allBMOs = this.getSharedItems() || [];
    this.associatedSharedItems = this.allBMOs.filter((item) => item.selected);
  }
  initForm() {
    const validators = [...NAME_VALIDATORS];
    this.form = this.fb.group({
      Name: [this.data.Name, { validators, updateOn: "blur" }],
      Version: [this.data.Version || this.parent.Version, [Validators.required]],
      CanvasType: [this.canvasTypeList.find((t) => t.key === this.data.CanvasType), [Validators.required]],
      Status: [this.status.find((s) => s.key == this.data.Status), [Validators.required]],
      LongDesc: [this.data.LongDesc],
      EnableTLCorner: [this.enableTLValues?.find((s) => s?.key == this.data?.EnableTLCorner)?.key, [Validators.required]]
    });
    this.controls = [
      new ObjectControl({ name: "Name", label: "Name", readonly: !this.newObject, required: true }),
      new ObjectControl({ name: "Version", label: "Version", readonly: true }),
      new ObjectControl({
        name: "CanvasType",
        label: "Canvas Type",
        type: "dropdown",
        required: true,
        options: of(this.canvasTypeList)
      }),
      new ObjectControl({
        name: "Status",
        label: "Status",
        type: "dropdown",
        required: true,
        options: of(this.status)
      }),
      new ObjectControl({ name: "LongDesc", label: "Long Description", type: "rich", class: "span-12" }),
      new ObjectControl({
        name: "EnableTLCorner",
        label: "Enable Top Left Corner",
        type: "radio",
        required: true,
        options: of(this.enableTLValues)
      })
    ];
    this.api.GetAvailableBmoToShare(this.data.BMOGID, this.parent.BMId).subscribe((x) => {
      this.availableBmoToShare = x;
      const avBmos = this.getAllBmo();
      this.allBMOs = avBmos;
    });
    this.form.get("Name").valueChanges.subscribe((name) => {
      if (this.newObject && name && name.length >= 4 && !this.form.get("Name").hasError("maxlength") && !this.form.get("Name").hasError("pattern")) {
        this.api.checkNameValidity("bmog", 0, name, this.parent.root.Version, this.parent.root.ProcessName).subscribe((IsExits) => {
          if (IsExits) {
            const nameControl = this.form.get("Name");
            nameControl.setErrors({
              nameExists: true,
              message: "Duplicate name"
            });
          }
        });
      }
    });
    this.form.get("CanvasType").valueChanges.subscribe((CT) => {
      if (CT["key"].length > 0) {
        this.api.checkCanvasType(
          "bmog",
          this.data.BMOGID ?? 0,
          // Replaced ternary with nullish coalescing
          CT["key"],
          this.parent.root.Version,
          this.parent.root.ProcessName
        ).subscribe((IsExits) => {
          if (IsExits) {
            const nameControl = this.form.get("CanvasType");
            nameControl?.setErrors({
              nameExists: true,
              message: "Duplicate Canvas Type"
            });
          }
        });
      }
      if (CT?.key === "Form") {
        const nameControl = this.form.get("EnableTLCorner");
        nameControl.setErrors(null);
        nameControl.setValue(null);
        nameControl.disable();
      } else {
        const nameControl = this.form.get("EnableTLCorner");
        nameControl.enable();
      }
    });
    if (this.form.value.CanvasType != null) {
      if (this.form.value.CanvasType.key === "Form") {
        const nameControl = this.form.get("EnableTLCorner");
        nameControl.setErrors(null);
        nameControl.disable();
      }
    } else {
      const nameControl = this.form.get("EnableTLCorner");
      nameControl.setErrors(null);
      nameControl.disable();
    }
    this.form.get("CanvasType").valueChanges.subscribe((name) => {
      if (name?.key === "Form") {
        const nameControl = this.form.get("EnableTLCorner");
        nameControl.setErrors(null);
        nameControl.setValue(null);
        nameControl.disable();
      } else {
        const nameControl = this.form.get("EnableTLCorner");
        nameControl.enable();
      }
    });
  }
  getSharedItems() {
    let list = [];
    Object.values(this.parent.childrenMap).forEach((bmog) => {
      Object.values(bmog.childrenMap).filter((bmo) => !bmo.shared).forEach((bmo) => {
        const selected = this.data?.Share?.some((item2) => item2.value === bmo.GUID) || this.data?.Children?.some((guid) => bmo.GUID === guid);
        const item = {
          key: bmo.BMOID.toString(),
          selected,
          disabled: selected,
          GUID: bmo.GUID,
          type: bmo.BmoType,
          value: `${bmo.DisplayName} (${bmo.Name})`,
          parent: bmog.Name,
          parentId: bmog.id
        };
        list.push(item);
      });
    });
    return list;
  }
  getAllBmo() {
    let list = [];
    const share = this.data.Share || [];
    this.availableBmoToShare.forEach((bmo, i) => {
      const check = this.data?.Share?.some((item2) => item2.value === bmo.bmoGuid) || this.data?.Children?.some((guid) => bmo.bmoGuid === guid);
      const item = {
        key: bmo.bmoid,
        GUID: bmo.bmoGuid,
        value: bmo.NAME,
        parent: this.data.Name,
        parentId: this.data.id,
        selected: check,
        disabled: check,
        type: bmo.BMOTYP
      };
      list.push(item);
    });
    return list;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload = __spreadProps(__spreadValues({}, val), {
        Parent: this.parent.id,
        BMOGID: this.data.BMOGID,
        Children: this.data?.Children || [],
        id: this.data?.id || val.Name,
        CanvasType: val.CanvasType?.key || val.CanvasType,
        Status: val.Status?.key || val.Status,
        enableTLCorner: val.enableTLValues?.key
      });
      const shared = {
        bmogId: this.data.BMOGID || "-1",
        bmoIds: this.sharedChanged ? this.associatedSharedItems.map(({ key }) => key).toString() : "-1"
      };
      this.output.emit(payload);
      this.ref.close({ payload, shared });
    }
  }
  onShareAdd(item) {
    this.associatedSharedItems = this.associatedSharedItems.concat(item);
    this.sharedChanged = true;
    this.refreshAllBMOs();
  }
  onShareRemove(item) {
    this.associatedSharedItems = this.associatedSharedItems.filter((bmo) => bmo.key !== item.key.toString());
    this.sharedChanged = true;
    this.refreshAllBMOs();
  }
  static {
    this.\u0275fac = function BmogDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmogDetailComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BmogDetailComponent, selectors: [["app-bmog-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 21, vars: 11, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup"], [1, "double-column"], [4, "ngFor", "ngForOf"], [1, "span-12"], [1, "double-column", 2, "margin", "0"], ["for", "", 1, "span-6"], ["checkBy", "selected", "disableBy", "disabled", 3, "add", "remove", "reorder", "items", "associatedItems", "displayWith", "uniqueWith", "checkAll", "shouldAdd"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [3, "parentForm", "config", "class", 4, "ngIf"], [3, "parentForm", "config"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function BmogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, BmogDetailComponent_h2_2_Template, 2, 1, "h2", 2)(3, BmogDetailComponent_h2_3_Template, 2, 1, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function BmogDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "form", 5)(8, "div", 6);
        \u0275\u0275template(9, BmogDetailComponent_ng_container_9_Template, 3, 3, "ng-container", 7);
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "label", 10);
        \u0275\u0275text(13, "Available BMOs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "label", 10);
        \u0275\u0275text(15, "Selected BMOs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "app-association", 11);
        \u0275\u0275listener("add", function BmogDetailComponent_Template_app_association_add_16_listener($event) {
          return ctx.onShareAdd($event);
        })("remove", function BmogDetailComponent_Template_app_association_remove_16_listener($event) {
          return ctx.onShareRemove($event);
        })("reorder", function BmogDetailComponent_Template_app_association_reorder_16_listener($event) {
          return ctx.onShareReorder($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 12)(18, "button", 13);
        \u0275\u0275listener("click", function BmogDetailComponent_Template_button_click_18_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(19, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, BmogDetailComponent_button_20_Template, 3, 2, "button", 14);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newObject);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newObject);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.controls);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.allBMOs)("associatedItems", ctx.associatedSharedItems)("displayWith", ctx.displayShare)("uniqueWith", ctx.uniqueShare)("checkAll", false)("shouldAdd", ctx.shouldAdd);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.parent.published);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      NgForOf,
      ObjectControlComponent,
      AssociationComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BmogDetailComponent, { className: "BmogDetailComponent", filePath: "src\\app\\admin\\data-modeler\\components\\bmog-detail\\bmog-detail.component.ts", lineNumber: 31 });
})();

// src/app/admin/data-modeler/components/dm-breadcrumbs/dm-breadcrumbs.component.ts
var _c0 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function DmBreadcrumbsComponent_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275listener("click", function DmBreadcrumbsComponent_ng_container_2_li_1_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const obj_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select.emit(obj_r2));
    });
    \u0275\u0275elementStart(1, "a", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obj_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obj_r2.DisplayName || obj_r2.Name);
  }
}
function DmBreadcrumbsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DmBreadcrumbsComponent_ng_container_2_li_1_Template, 3, 1, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const obj_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", obj_r2);
  }
}
var DmBreadcrumbsComponent = class _DmBreadcrumbsComponent {
  constructor() {
    this.select = new EventEmitter();
  }
  set bm(bm) {
    this._bm = bm;
  }
  get bm() {
    return this._bm;
  }
  static {
    this.\u0275fac = function DmBreadcrumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmBreadcrumbsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmBreadcrumbsComponent, selectors: [["app-dm-breadcrumbs"]], inputs: { bm: "bm" }, outputs: { select: "select" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 6, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb", 2, "margin", "0", "padding-top", "0", "padding-bottom", "0", "font-size", "0.8rem", "gap", "10px"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 3, "click", 4, "ngIf"], [1, "breadcrumb-item", 3, "click"], [1, "link"]], template: function DmBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "ul", 1);
        \u0275\u0275template(2, DmBreadcrumbsComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(1, _c0, ctx.bm, ctx.bm.selectedBMOG, ctx.bm.selectedBMO, ctx.bm.selectedDMOG));
      }
    }, dependencies: [NgForOf, NgIf], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmBreadcrumbsComponent, { className: "DmBreadcrumbsComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dm-breadcrumbs\\dm-breadcrumbs.component.ts", lineNumber: 11 });
})();

// src/app/admin/data-modeler/components/dm-header/dm-header.component.ts
var DmHeaderComponent = class _DmHeaderComponent {
  constructor() {
    this.imgUrl = UtilService.getUrlForImage("/assets/styles/images/datamodeler-icon.png");
  }
  static {
    this.\u0275fac = function DmHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmHeaderComponent, selectors: [["app-dm-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [["alt", "C2M Logo", 2, "height", "45px", 3, "src"]], template: function DmHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header");
        \u0275\u0275element(1, "img", 0);
        \u0275\u0275elementStart(2, "span");
        \u0275\u0275text(3, "Data Modeler");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.imgUrl, \u0275\u0275sanitizeUrl);
      }
    }, styles: ["\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  background: #aaadaa;\n  text-transform: uppercase;\n  padding: 0.2rem 1rem;\n  display: none;\n}\n/*# sourceMappingURL=dm-header.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmHeaderComponent, { className: "DmHeaderComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dm-header\\dm-header.component.ts", lineNumber: 27 });
})();

// src/app/admin/data-modeler/components/dm-menu/dm-menu.component.ts
var _c02 = () => ["Edit", "Published"];
function DmMenuComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function DmMenuComponent_i_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DmMenuComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 12);
    \u0275\u0275listener("click", function DmMenuComponent_li_13_Template_li_click_0_listener() {
      const mode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.modeChange.emit(mode_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r2, " ");
  }
}
var DmMenuComponent = class _DmMenuComponent {
  constructor() {
    this.newVersion = new EventEmitter();
    this.generateXml = new EventEmitter();
    this.modeChange = new EventEmitter();
  }
  set mode(mode) {
    this._mode = mode;
  }
  get mode() {
    return this._mode;
  }
  static {
    this.\u0275fac = function DmMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmMenuComponent, selectors: [["app-dm-menu"]], inputs: { mode: "mode" }, outputs: { newVersion: "newVersion", generateXml: "generateXml", modeChange: "modeChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 7, consts: [[1, "header-row", "col-sm-12", "pt-2", "pb-2"], [1, "btn", "btn-outline-white", "btn-sm", 3, "click"], [1, "fas", "fa-code-branch"], [1, "fas", "fa-code"], ["ngbDropdown", "", 1, "mode"], ["ngbDropdownToggle", "", 1, "btn", "btn-sm"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-lock", 4, "ngIf"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "fas", "fa-edit"], [1, "fas", "fa-lock"], ["ngbDropdownItem", "", 3, "click"]], template: function DmMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function DmMenuComponent_Template_button_click_1_listener() {
          return ctx.newVersion.emit();
        });
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275text(3, " New Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 1);
        \u0275\u0275listener("click", function DmMenuComponent_Template_button_click_4_listener() {
          return ctx.generateXml.emit();
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275text(6, " Generate JSON");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275template(9, DmMenuComponent_i_9_Template, 1, 0, "i", 6)(10, DmMenuComponent_i_10_Template, 1, 0, "i", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "ul", 8);
        \u0275\u0275template(13, DmMenuComponent_li_13_Template, 2, 1, "li", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275classMap(ctx.mode === "Edit" ? "btn-outline-white" : "btn-primary");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "Edit");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "Published");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.mode, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c02));
      }
    }, dependencies: [NgbDropdown, NgbDropdownToggle, NgIf, NgbDropdownMenu, NgForOf, NgbDropdownItem], styles: ["\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background-color: #559000;\n}\n.header-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.btn-outline-white[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid white;\n  padding: 0.175rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n.btn-outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #343a40;\n}\n/*# sourceMappingURL=dm-menu.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmMenuComponent, { className: "DmMenuComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dm-menu\\dm-menu.component.ts", lineNumber: 15 });
})();

// src/app/admin/data-modeler/components/dmo-condition/dmo-condition.component.ts
var import_lodash = __toESM(require_lodash());
function DmoConditionComponent_tr_26_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275listener("click", function DmoConditionComponent_tr_26_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteCondition(i_r7));
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementEnd();
  }
}
function DmoConditionComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 20)(11, "a", 21);
    \u0275\u0275listener("click", function DmoConditionComponent_tr_26_Template_a_click_11_listener() {
      const condition_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      const formPanel_r5 = \u0275\u0275reference(28);
      ctx_r3.editCondition(condition_r3);
      return \u0275\u0275resetView(formPanel_r5.open());
    });
    \u0275\u0275element(12, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DmoConditionComponent_tr_26_a_13_Template, 2, 0, "a", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const condition_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(condition_r3.Name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(condition_r3.Status === "1" ? "Active" : "Inactive");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(condition_r3.ShortDesc);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r3.readonly);
  }
}
function DmoConditionComponent_ng_container_33_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 27);
  }
  if (rf & 2) {
    const control_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("parentForm", ctx_r3.form)("config", control_r8);
  }
}
function DmoConditionComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DmoConditionComponent_ng_container_33_app_object_control_1_Template, 1, 2, "app-object-control", 26);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r8.show));
  }
}
function DmoConditionComponent_button_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function DmoConditionComponent_button_37_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function DmoConditionComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DmoConditionComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateCondition());
    });
    \u0275\u0275template(1, DmoConditionComponent_button_37_ng_container_1_Template, 2, 0, "ng-container", 29)(2, DmoConditionComponent_button_37_ng_container_2_Template, 2, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.newObject);
  }
}
function DmoConditionComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DmoConditionComponent_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275text(1, "Save");
    \u0275\u0275elementEnd();
  }
}
var DmoConditionComponent = class _DmoConditionComponent extends ObjectDetail {
  #areas;
  constructor(ref, fb, api) {
    super(ref, fb);
    this.api = api;
    this.readonly = false;
    this.newObject = true;
    this.conditions = [];
    this.deletedConditions = [];
    this.dmoList = [];
    this.status = enumToList(Status);
    this.availableItems$ = new BehaviorSubject([]);
    this.allConditions = [];
    this.bmoConditionItems = [];
    this.dmogConditionItems = [];
    this.dmoConditionItems = [];
    this.#areas = [
      { key: "BusinessModelObject", value: "Section" },
      { key: "DataModelGroup", value: "Card" },
      { key: "DataModelObject", value: "Data Model Object" },
      { key: "Trigger", value: "Trigger" }
    ];
    this.sanitizeConditions = (body) => {
      return body.Conditions.map((c) => {
        return __spreadProps(__spreadValues({}, c), {
          Dmo: c.Dmo?.key || c.Dmo,
          Exp: c.Exp?.key || c.Exp,
          Logical: c.Logical?.key || c.Logical,
          Value: c.Dmo?.Value || c.Value
        });
      });
    };
  }
  beforeFormInit() {
    this.conditions = [...this.parent.conditions];
    this.dmoList = this.parent.dmoListByType().map((item) => __spreadProps(__spreadValues({}, item), { disabled: item.key === this.parent.guid }));
    this.createConditionsConfig();
    this.generateConditionAreaItems();
  }
  initForm() {
    const validators = [...NAME_VALIDATORS];
    this.form = this.fb.group({
      Name: ["", { validators, updateOn: "blur" }],
      Version: [this.parent.parent.Version, [Validators.required]],
      Status: [this.status[0]],
      ShortDesc: ["", [Validators.required]],
      ExecuteElse: [true],
      Conditions: toFormArray([], { addCheckbox: true }),
      ConditionArea: this.fb.group({
        key: [""],
        value: [[]]
      }),
      Action: this.fb.group({
        Enabled: "",
        Mandatory: "",
        Visible: []
      })
    });
    this.defaultCondition();
    this.controls = [
      new ObjectControl({ name: "Name", label: "Condition Name", required: true, readonly: !this.newObject }),
      new ObjectControl({ name: "Version", readonly: true, required: true }),
      new ObjectControl({ name: "Status", options: of(this.status), type: "dropdown" }),
      new ObjectControl({ name: "ShortDesc", label: "Short Description", required: true }),
      new ObjectControl({ name: "ExecuteElse", label: "Execute else?", type: "switch" }),
      new ObjectControl({ name: "Conditions", type: "list", config: this.conditionsConfig, class: "span-12" }),
      new ObjectControl({
        name: "key",
        label: "Condition Area",
        type: "radio",
        group: this.f.ConditionArea,
        options: of(this.#areas)
      }),
      new ObjectControl({
        name: "value",
        label: "Available Items",
        type: "dropdown",
        group: this.f.ConditionArea,
        options: this.availableItems$,
        multiple: true,
        groupOptionsBy: "parent"
      }),
      new ObjectControl({
        name: "Enabled",
        type: "radio",
        class: "span-4",
        options: of([ActionState[0], ActionState[2], ActionState[1]]),
        group: this.f.Action
      }),
      new ObjectControl({
        name: "Mandatory",
        type: "radio",
        class: "span-4",
        options: of([ActionState[0], ActionState[2], ActionState[1]]),
        group: this.f.Action
      }),
      new ObjectControl({
        name: "Visible",
        type: "radio",
        class: "span-4",
        options: of([ActionState[0], ActionState[2], ActionState[1]]),
        group: this.f.Action
      })
    ];
    this.form.get("Name").valueChanges.subscribe((name) => {
      if (this.newObject && name && name.length >= 4 && !this.form.get("Name").hasError("maxlength") && !this.form.get("Name").hasError("pattern")) {
        this.api.checkNameValidity("condition", 0, name, this.parent.parent.Version, this.parent.parent.root.ProcessName).subscribe((IsExits) => {
          if (IsExits) {
            const nameControl = this.form.get("Name");
            nameControl.setErrors({
              nameExists: true,
              message: "Duplicate name"
            });
          }
        });
      }
    });
  }
  afterFormInit() {
    this.f.ConditionArea.get("key").valueChanges.pipe(takeWhile((_) => this.componentActive)).subscribe((val) => this.conditionAreaHandler(val));
  }
  editCondition(condition) {
    this.editedCondition = condition;
    this.submitted = false;
    this.newObject = false;
    if (this.controls) {
      this.controls[0].readonly = !this.newObject;
    }
    const selfAdded = condition.Conditions.some((cond) => cond.Dmo === this.parent.guid);
    const dmo = this.dmoList.find((dmo2) => dmo2.key === this.parent.guid);
    dmo.disabled = selfAdded;
    const validators = [...NAME_VALIDATORS];
    this.f.Name.clearValidators();
    this.f.Name.setValidators(validators);
    this.form.patchValue(__spreadProps(__spreadValues({}, condition), {
      ConditionArea: __spreadProps(__spreadValues({}, condition.ConditionArea), {
        value: this.parseConditionArea(condition.ConditionArea)
      }),
      Status: this.status.find((s) => s.key == condition.Status),
      ExecuteElse: condition.ExecuteElse == "0" ? false : true,
      Action: {
        Enabled: ActionState[condition.Action[0].value || 2],
        Mandatory: ActionState[condition.Action[1].value || 2],
        Visible: ActionState[condition.Action[2].value || 2]
      }
    }));
    this.f.Conditions.clear();
    condition.Conditions.map((cond) => __spreadProps(__spreadValues({}, cond), { Dmo: { key: cond.Dmo, value: this.dmoList.find((dmo2) => dmo2.key === cond.Dmo).value } })).map((cond) => toFormGroup(cond, { addCheckbox: cond.Dmo.key !== this.parent.guid, deletable: cond.Dmo.key !== this.parent.guid })).forEach((group) => this.f.Conditions.push(group));
    if (!selfAdded) {
      this.defaultCondition();
    }
    this.form.updateValueAndValidity();
  }
  defaultCondition() {
    const first = {
      Dmo: { key: this.parent.guid, value: this.parent.label, parent: this.parent.parent.DisplayName },
      Exp: "equal",
      Logical: "AND",
      Label: this.parent.dmoName,
      Value: ""
    };
    this.f.Conditions.push(toFormGroup(first, { addCheckbox: false, deletable: false }));
  }
  deleteCondition(i) {
    this.deletedConditions.push(this.conditions[i]);
    this.conditions = this.conditions.filter((_, idx) => idx !== i);
  }
  updateCondition() {
    this.submitted = true;
    if (this.form.valid) {
      const f = this.form.value;
      const condition = __spreadProps(__spreadValues({}, f), {
        Action: Object.entries(f.Action).map(([key, v]) => ({ key, value: v ? ActionState[v].toString() : ActionState.NA })),
        Status: f.Status?.key || f.Status || 0,
        Conditions: this.f.Conditions.value.map((cond) => __spreadProps(__spreadValues({}, cond), { Dmo: cond.Dmo?.key || cond.Dmo })),
        ExecuteElse: +f.ExecuteElse,
        ConditionArea: {
          key: f.ConditionArea.key || "",
          value: this.sanitizeConditionArea(f.ConditionArea.value || [])
        }
      });
      const idx = this.conditions.findIndex((c) => c.Name === condition.Name);
      if (idx !== -1)
        this.conditions[idx] = condition;
      else
        this.conditions.push(condition);
      this.onReset();
    }
  }
  generateConditionAreaItems() {
    const bm = this.parent.parent.root;
    const { selectedBMO, selectedDMOG } = bm;
    Object.values(bm.childrenMap).forEach((bmog) => {
      Object.values(bmog.childrenMap).filter((bmo) => !bmo.shared).forEach((bmo) => {
        if (bmo.id !== selectedBMO.id) {
          const bmoItem = { key: bmo.id, value: bmo.DisplayName, parent: bmog.Name, parentId: bmog.id };
          this.bmoConditionItems.push(bmoItem);
        }
        Object.values(bmo.childrenMap).filter((dmog) => !dmog.shared).forEach((dmog) => {
          if (dmog.id !== selectedDMOG.id) {
            const dmogItem = { key: dmog.id, value: dmog.DisplayName, parent: `${bmog.Name} / ${bmo.DisplayName}`, parentId: bmo.id };
            this.dmogConditionItems.push(dmogItem);
          }
          Object.values(dmog.childrenMap).forEach((dmo) => {
            const dmoItem = {
              key: dmo.guid,
              value: dmo.label,
              parent: `${bmog.Name} / ${bmo.DisplayName} / ${dmog.DisplayName}`,
              parentId: dmog.id
            };
            this.dmoConditionItems.push(dmoItem);
            this.allConditions.push(...dmo.conditions);
          });
        });
      });
    });
  }
  conditionAreaHandler(val) {
    let list = [];
    this.f.ConditionArea.get("value").reset([]);
    if (val == "BusinessModelObject") {
      list = this.bmoConditionItems;
    } else if (val === "DataModelGroup") {
      list = this.dmogConditionItems;
    } else if (val === "DataModelObject") {
      list = this.dmoConditionItems;
    } else if (val === "Trigger") {
      if (!this.triggersConditionItems) {
        this.api.getTriggers(this.parent.parent.root.ProcessName).subscribe((res) => {
          this.triggersConditionItems = arrayToList(res, "Key", "Value");
          this.availableItems$.next(this.triggersConditionItems);
          this.f.ConditionArea.get("value").patchValue(this.parseConditionArea(this.editedCondition?.ConditionArea));
        });
      } else {
        this.availableItems$.next(this.triggersConditionItems);
      }
      return;
    }
    this.availableItems$.next(list);
  }
  onReset() {
    this.form.reset({ Version: this.parent.parent.Version });
    if (this.controls) {
      this.controls[0].readonly = false;
    }
    this.f.Conditions.clear();
    this.defaultCondition();
    this.newObject = true;
  }
  onSubmit() {
    const bm = this.parent.parent.root;
    const payload = {
      BMName: bm.Name,
      BMOGName: bm.selectedBMOG.Name,
      BMOName: bm.selectedBMO.Name,
      DMOGName: bm.selectedDMOG.Name,
      CanvasType: bm.selectedBMOG.CanvasType,
      ProcessName: bm.ProcessName,
      Version: bm.Version,
      dmo: bm.selectedDMOG.formData,
      dmoCondition: {
        [this.parent.guid]: {
          Condition: this.conditions.map((obj) => {
            return __spreadProps(__spreadValues({}, obj), {
              Conditions: this.sanitizeConditions(obj)
            });
          })
        }
      }
    };
    const res = { payload, deletedConditions: this.deletedConditions };
    this.output.emit(res);
    this.ref.close(res);
  }
  sanitizeConditionArea(items) {
    return items.map((area) => ({ Key: area.parentId, Value: area.key }));
  }
  parseConditionArea(area) {
    if (!area)
      return [];
    const selectedList = (list) => (0, import_lodash.intersectionWith)(list, area.value, (a, b) => a.key === b.Value);
    switch (area.key) {
      case "BusinessModelObject":
        return selectedList(this.bmoConditionItems);
      case "DataModelGroup":
        return selectedList(this.dmogConditionItems);
      case "DataModelObject":
        return selectedList(this.dmoConditionItems);
      case "Trigger":
        return selectedList(this.triggersConditionItems);
      default:
        return [];
    }
  }
  createConditionsConfig() {
    const operators = ["AND", "OR"];
    const expressions = ["equal", "not equal"];
    this.conditionsConfig = {
      columns: [
        { key: "Dmo", displayValue: "Data Model Object", type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: "Exp", displayValue: "Expression", type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: "Value", displayValue: "Value", validators: [Validators.required] },
        { key: "Logical", displayValue: "Operator", type: ListColumnType.Dropdown }
      ],
      defaultValues: {
        Exp: primitiveArrayToList(expressions),
        Logical: primitiveArrayToList(operators),
        Dmo: this.dmoList
      },
      actions: { add: true, edit: true, delete: true },
      checkbox: true
    };
  }
  static {
    this.\u0275fac = function DmoConditionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmoConditionComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DataModelerApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmoConditionComponent, selectors: [["app-dmo-condition"]], inputs: { uiData: "uiData", readonly: "readonly" }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 42, vars: 11, consts: [["formPanel", ""], [1, "popup"], [1, "popup__header"], [2, "margin-right", "5px"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "expanded"], [1, "basicTable", "stripped", "table-bordered"], [1, "span-row"], [2, "width", "100px"], [1, "text-center", 2, "width", "60px"], [4, "ngFor", "ngForOf"], [3, "hidden"], [3, "formGroup"], [1, "double-column"], [1, "actions"], [1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-around"], ["title", "Open", 1, "save-btn", 2, "color", "#4C9E00", "cursor", "pointer", 3, "click"], [1, "fas", "fa-pencil-alt"], ["title", "Delete", "class", "save-btn", "style", "color:#4C9E00;cursor: pointer;", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "save-btn", 2, "color", "#4C9E00", "cursor", "pointer", 3, "click"], [1, "far", "fa-trash-alt"], [3, "parentForm", "config", 4, "ngIf"], [3, "parentForm", "config"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [4, "ngIf"]], template: function DmoConditionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4)(6, "i", 5);
        \u0275\u0275listener("click", function DmoConditionComponent_Template_i_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ref.close());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "mat-expansion-panel", 6)(8, "mat-expansion-panel-header");
        \u0275\u0275text(9, " Conditions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "table", 7)(11, "thead")(12, "tr", 8)(13, "th")(14, "span");
        \u0275\u0275text(15, "Condition");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "th", 9)(17, "span");
        \u0275\u0275text(18, "Status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "th")(20, "span");
        \u0275\u0275text(21, "Sort Description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "th", 10)(23, "span");
        \u0275\u0275text(24, "Actions");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "tbody");
        \u0275\u0275template(26, DmoConditionComponent_tr_26_Template, 14, 4, "tr", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "mat-expansion-panel", 12, 0)(29, "mat-expansion-panel-header");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "form", 13)(32, "div", 14);
        \u0275\u0275template(33, DmoConditionComponent_ng_container_33_Template, 3, 3, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 15)(35, "button", 16);
        \u0275\u0275listener("click", function DmoConditionComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onReset());
        });
        \u0275\u0275text(36, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, DmoConditionComponent_button_37_Template, 3, 2, "button", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 18)(39, "button", 19);
        \u0275\u0275listener("click", function DmoConditionComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCancel());
        });
        \u0275\u0275text(40, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(41, DmoConditionComponent_button_41_Template, 2, 0, "button", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.uiData.class);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", ctx.uiData.name, " Conditions");
        \u0275\u0275advance(3);
        \u0275\u0275property("expanded", false);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.conditions);
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.conditions.length && ctx.readonly);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.readonly ? "Select Condition" : ctx.newObject ? "Create Condition" : "Update Condition", " ");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.controls);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.readonly);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.readonly);
      }
    }, dependencies: [
      MatExpansionPanel,
      MatExpansionPanelHeader,
      NgForOf,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      ObjectControlComponent,
      AsyncPipe
    ], styles: ["\n\n[_nghost-%COMP%]     .mat-radio-container {\n  height: 12px;\n  width: 12px;\n}\n[_nghost-%COMP%]     .mat-radio-outer-circle {\n  height: 12px;\n  width: 12px;\n  border-width: 1px;\n}\n[_nghost-%COMP%]     .mat-radio-inner-circle {\n  height: 12px;\n  width: 12px;\n}\n[_nghost-%COMP%]     .mat-radio-button .mat-radio-ripple {\n  visibility: hidden;\n}\n[_nghost-%COMP%]     .mat-radio-label {\n  font-size: 12px;\n}\nmat-accordion[_ngcontent-%COMP%], \nmat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: unset;\n  background: none;\n  border-radius: 0;\n  margin-bottom: 2rem;\n}\n  table thead tr {\n  height: 30px;\n  font-size: 10px;\n  font-weight: bold;\n}\n  table thead td {\n  border: 1px solid #dee2e6;\n  margin-bottom: 10px;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n  overflow: unset;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 30px;\n}\n  .mat-expansion-panel-content > .mat-expansion-panel-body {\n  padding: 0;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0px 1px;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000;\n  color: #000;\n  font-size: 10px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n}\n/*# sourceMappingURL=dmo-condition.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmoConditionComponent, { className: "DmoConditionComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dmo-condition\\dmo-condition.component.ts", lineNumber: 33 });
})();

// src/app/admin/data-modeler/components/dmo-detail/dmo-detail.component.ts
var _c03 = (a0) => ({ controls: a0 });
function DmoDetailComponent_ng_container_0_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.uiData.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("New ", ctx_r1.uiData.name, "");
  }
}
function DmoDetailComponent_ng_container_0_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.uiData.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.uiData.name, " Details");
  }
}
function DmoDetailComponent_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DmoDetailComponent_ng_container_0_app_tab_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DmoDetailComponent_ng_container_0_app_tab_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tab", 15);
    \u0275\u0275template(1, DmoDetailComponent_ng_container_0_app_tab_11_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const renderControls_r3 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", renderControls_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, ctx_r1.dataControls));
  }
}
function DmoDetailComponent_ng_container_0_app_tab_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DmoDetailComponent_ng_container_0_app_tab_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tab", 16);
    \u0275\u0275template(1, DmoDetailComponent_ng_container_0_app_tab_12_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const renderControls_r3 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", renderControls_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, ctx_r1.validationControls));
  }
}
function DmoDetailComponent_ng_container_0_button_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function DmoDetailComponent_ng_container_0_button_16_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function DmoDetailComponent_ng_container_0_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DmoDetailComponent_ng_container_0_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(1, DmoDetailComponent_ng_container_0_button_16_ng_container_1_Template, 2, 0, "ng-container", 1)(2, DmoDetailComponent_ng_container_0_button_16_ng_container_2_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newObject);
  }
}
function DmoDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, DmoDetailComponent_ng_container_0_h2_3_Template, 3, 3, "h2", 1)(4, DmoDetailComponent_ng_container_0_h2_4_Template, 3, 3, "h2", 1);
    \u0275\u0275elementStart(5, "span", 4)(6, "i", 5);
    \u0275\u0275listener("click", function DmoDetailComponent_ng_container_0_Template_i_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ref.close());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "form", 6)(8, "app-tabs")(9, "app-tab", 7);
    \u0275\u0275template(10, DmoDetailComponent_ng_container_0_ng_container_10_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DmoDetailComponent_ng_container_0_app_tab_11_Template, 2, 4, "app-tab", 9)(12, DmoDetailComponent_ng_container_0_app_tab_12_Template, 2, 4, "app-tab", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
    \u0275\u0275listener("click", function DmoDetailComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, DmoDetailComponent_ng_container_0_button_16_Template, 3, 2, "button", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const renderControls_r3 = \u0275\u0275reference(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newObject);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", renderControls_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c03, ctx_r1.displayControls));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uiData.hasData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uiData.validate);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.parent.root.published && !ctx_r1.readonly);
  }
}
function DmoDetailComponent_ng_template_1_ng_container_1_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 21);
  }
  if (rf & 2) {
    const control_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("submitted", ctx_r1.submitted)("parentForm", ctx_r1.form)("config", control_r5);
  }
}
function DmoDetailComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DmoDetailComponent_ng_template_1_ng_container_1_app_object_control_1_Template, 1, 3, "app-object-control", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r5.show));
  }
}
function DmoDetailComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, DmoDetailComponent_ng_template_1_ng_container_1_Template, 3, 3, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const controls_r6 = ctx.controls;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", controls_r6);
  }
}
var DmoDetailComponent = class _DmoDetailComponent extends ObjectDetail {
  constructor(ref, fb, api, toastr) {
    super(ref, fb);
    this.api = api;
    this.toastr = toastr;
    this.readonly = false;
    this.dataSources = enumToList(DataSource);
    this.customDataSources = enumToList(CustomDataSource);
    this.regexTypes = enumToList(RegExType);
    this.storageProviders = enumToList(StorageProvider);
    this.status = enumToList(DMOStatus);
    this.uploadLimit = primitiveArrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.dropDownTypeDMO = [];
    this.managedDDLTypedmo = [];
    this.keyValueConfig = {
      columns: [
        {
          key: "value",
          displayValue: "Value",
          validators: [Validators.required]
        }
      ],
      checkbox: true,
      actions: { add: true, edit: true, delete: true }
    };
    this.jsonConfig = {
      columns: [
        {
          key: "TextField",
          displayValue: "Text Field",
          validators: [Validators.required]
        },
        {
          key: "ValueField",
          displayValue: "Value Field",
          validators: [Validators.required]
        },
        {
          key: "ParentKey",
          displayValue: "Parent Key",
          validators: [Validators.required]
        }
      ],
      checkbox: true,
      actions: { add: true, edit: true, delete: true }
    };
    this.mappingConfig = {
      columns: [
        { key: "Name", displayValue: "Name", validators: [Validators.required] },
        { key: "GUID", displayValue: "GUID", validators: [Validators.required] }
      ],
      checkbox: true,
      actions: { add: true, edit: true, delete: true }
    };
    this.depConfig = {
      columns: [
        { key: "Name", displayValue: "Name", validators: [Validators.required] }
      ],
      checkbox: true,
      actions: { add: true, edit: true, delete: true }
    };
    this.validateControl = (config) => {
      const { trackedControl, addValidation, validatedControl, validators } = config;
      return trackedControl.valueChanges.pipe(takeWhile((_) => this.componentActive), startWith(trackedControl.value), tap((val) => {
        if (addValidation(val)) {
          validatedControl.setValidators(validators);
        } else {
          validatedControl.clearValidators();
        }
        validatedControl.updateValueAndValidity();
      }));
    };
  }
  get f_form() {
    return this.form.controls;
  }
  beforeFormInit() {
    this.dataClass = new DMComponent(this.data, this.parent);
    console.log(this.data, this.dataClass);
    this.dataClass.type = this.uiData.type;
    this.colorCodes$ = this.api.getColorCodes().pipe(map((list) => arrayToList(list, "value", "value")));
    const { ProcessName } = this.parent.root;
    this.roles$ = this.api.getRoles(ProcessName).pipe(map((list) => arrayToList(list, "value", "label")));
    this.parent?.formData?.components[0]?.columns.forEach((ele) => {
      ele.components.forEach((dmo) => {
        if (dmo.type === "select") {
          if (dmo.guid != this.dataClass.guid)
            this.dropDownTypeDMO.push({
              key: dmo.guid,
              dmoName: dmo.dmoName,
              value: dmo.label
            });
        }
        if (dmo.type === "manageddropdown") {
          if (dmo.guid != this.dataClass.guid)
            this.managedDDLTypedmo.push({
              key: dmo.guid,
              dmoName: dmo.dmoName,
              value: dmo.label
            });
        }
      });
    });
  }
  initForm() {
    this.form = this.toFormGroup();
    this.runDynamicValidation();
    this.displayControls = [
      new ObjectControl({
        name: "dmoName",
        label: "Data Model Object Name",
        required: true,
        hint: "25 characters max",
        readonly: !this.newObject
      }),
      new ObjectControl({
        name: "label",
        label: "Friendly Name",
        hint: "The label for this field that will appear next to it"
      }),
      new ObjectControl({
        name: "description",
        label: "Short Description",
        type: "text",
        hint: "The description is text that will appear below the input field"
      }),
      new ObjectControl({
        name: "defaultValue",
        label: "Default Value",
        hint: `The will be the value for this field, before user interaction. 
        Having a default value will override the placeholder text. 
        Current Date for Date With Calendar DMO use xxxCurrentDatexxx in Default Value`
      }),
      new ObjectControl({
        name: "tooltip",
        label: "Long Description",
        class: "span-12",
        type: "rich",
        hint: "The description is text that will appear below the input field"
      }),
      new ObjectControl({
        name: "searchField",
        label: "Parent Control",
        show: of(this.uiData.type === "keyvaluesearchbox")
      }),
      new ObjectControl({
        name: "customDefaultValue",
        label: "Child Control",
        show: of(this.uiData.type === "keyvaluesearchbox")
      }),
      new ObjectControl({
        name: "compareOprator",
        label: "Operator",
        type: "dropdown",
        options: of(["GT", "GE", "LT", "LE"].map((key) => ({ key, value: key }))),
        show: of(["datetime", "staticdatebox"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "comparatorSelect",
        label: "Comparator",
        type: "dropdown",
        options: of(this.dataClass.dmoListByType(this.uiData.type)),
        hint: "Allow to load data on the basis of comparator control",
        show: of(["datetime", "staticdatebox"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "RangeCal",
        label: "Range",
        placeholder: "_-_",
        hint: "Put range to allow date before and after from current date",
        show: of(["datetime", "staticdatebox"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "showtooltip",
        label: "Show Long Description as Help",
        type: "switch"
      }),
      new ObjectControl({
        name: "is24hourformat",
        label: "24 Hour Format",
        type: "switch",
        show: of(this.uiData.type === "datetimebox")
      }),
      new ObjectControl({
        name: "parentDmo",
        label: "Parent Control",
        type: "dropdown",
        options: of(this.dropDownTypeDMO),
        show: of(this.uiData.type === "select")
      }),
      new ObjectControl({
        name: "parentDmo",
        label: "Parent Control",
        type: "dropdown",
        options: of(this.managedDDLTypedmo),
        show: of(this.uiData.type === "manageddropdown")
      }),
      new ObjectControl({
        name: "status",
        label: "Status",
        type: "dropdown",
        options: of(this.status)
      })
    ];
    this.dataControls = [
      new ObjectControl({
        name: "values",
        label: "Options",
        type: "list",
        required: true,
        config: this.keyValueConfig,
        show: of(["selectboxes", "radio"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "values",
        label: "Options",
        type: "list",
        group: this.f.data,
        config: this.keyValueConfig,
        required: this.uiData.type === "list",
        show: of(["datetimezone", "list"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "dataSrc",
        label: "Data Source",
        type: "dropdown",
        options: of(enumToList(DataSource)),
        show: of(["select", "multiselect"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "values",
        label: "Options",
        type: "list",
        group: this.f.data,
        config: this.keyValueConfig,
        required: true,
        show: this.show(this.form, "dataSrc", DataSource.Values, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "json",
        label: "JSON Data",
        type: "list",
        group: this.f.data,
        config: this.jsonConfig,
        show: this.show(this.form, "dataSrc", DataSource.JSON, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "resource",
        label: "Options",
        type: "dropdown",
        options: of(enumToList(CustomDataSource)),
        group: this.f.data,
        required: true,
        show: this.show(this.form, "dataSrc", DataSource.Custom, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "apiurl",
        label: "API URL",
        group: this.f.data,
        hint: "API URL that returns data from the data source",
        show: this.show(this.form, "dataSrc", DataSource.C2MIceApi, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "apiparams",
        label: "API Response Parameter",
        group: this.f.data,
        show: this.show(this.form, "dataSrc", DataSource.C2MIceApi, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "fieldparams",
        label: "Response Parameter",
        group: this.f.data,
        show: this.show(this.form, "dataSrc", DataSource.WFApi, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "modelbody",
        label: "Model Body",
        type: "textarea",
        group: this.f.data,
        show: this.show(this.form, "dataSrc", DataSource.WFApi, [
          "select",
          "multiselect"
        ])
      }),
      new ObjectControl({
        name: "values",
        label: "Color Codes",
        type: "dropdown",
        group: this.f.data,
        multiple: true,
        options: this.colorCodes$,
        show: of(this.uiData.type === "colorpicker")
      }),
      new ObjectControl({
        name: "startwith",
        label: "Start With",
        show: of(this.uiData.type === "id")
      }),
      new ObjectControl({
        name: "minlength",
        label: "Number of digits/characters",
        show: of(this.uiData.type === "id"),
        required: true
      }),
      new ObjectControl({
        name: "israndom",
        label: "Random (incremental if unchecked)",
        type: "switch",
        show: of(this.uiData.type === "id")
      }),
      new ObjectControl({
        name: "isalphanumeric",
        label: "Alphanumeric (numeric if unchecked)",
        type: "switch",
        show: of(this.uiData.type === "id")
      }),
      new ObjectControl({
        name: "values",
        label: "Data Source",
        type: "dropdown",
        multiple: true,
        group: this.f.data,
        options: this.roles$,
        show: of(this.uiData.type === "roletype")
      }),
      new ObjectControl({
        name: "regxType",
        label: "Regular Expression",
        type: "dropdown",
        options: of(enumToList(RegExType)),
        show: of(["textarea", "textfield", "url", "rangebox"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "expression",
        label: "Expression",
        hint: "Create your own regular expression",
        show: this.show(this.form, "regxType", RegExType.Custom, [
          "textarea",
          "textfield",
          "url",
          "rangebox"
        ])
      }),
      new ObjectControl({
        name: "expressionMessage",
        label: "Validation Message",
        hint: "Write your custom validation message if expression fail",
        show: of(["textarea", "textfield", "url", "rangebox"].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "isEncrypt",
        label: "Encrypt",
        type: "switch",
        show: of([
          "textarea",
          "textfield",
          "file",
          "uploadimage",
          "url",
          "rangebox"
        ].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "conditionNA",
        label: "Condition NA",
        type: "switch",
        show: of(this.uiData.type === "file")
      }),
      new ObjectControl({
        name: "isautoCrop",
        label: "Auto Crop",
        type: "switch",
        show: of(this.uiData.type === "uploadimage")
      }),
      new ObjectControl({
        name: "uploadLimit",
        label: "Number of files to be uploaded",
        type: "dropdown",
        options: of(this.uploadLimit),
        show: of(this.uiData.type === "uploadimage"),
        required: true
      }),
      new ObjectControl({
        name: "datasource",
        label: "Data Source",
        required: true,
        group: this.f.data,
        show: of([
          "keyvaluesearchbox",
          "keyvaluedropdownlist",
          "autocompletesearchbox"
        ].includes(this.uiData.type)),
        hint: "LMKAPI/WFAPI/ICEAPI/MethodName"
      }),
      new ObjectControl({
        name: "fieldparams",
        label: "Response Parameter",
        group: this.f.data,
        required: true,
        show: of([
          "keyvaluesearchbox",
          "keyvaluedropdownlist",
          "autocompletesearchbox"
        ].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "modelbody",
        label: "Model Body",
        type: "textarea",
        required: true,
        group: this.f.data,
        show: of([
          "keyvaluesearchbox",
          "keyvaluedropdownlist",
          "autocompletesearchbox"
        ].includes(this.uiData.type))
      }),
      new ObjectControl({
        name: "resource",
        label: "Display Value",
        group: this.f.data,
        required: true,
        show: of(this.uiData.type === "autocompletesearchbox")
      }),
      new ObjectControl({
        name: "mappings",
        label: "Mappings",
        type: "list",
        group: this.f.data,
        config: this.mappingConfig,
        show: of(this.uiData.type === "autocompletesearchbox")
      }),
      new ObjectControl({
        name: "dependencydmos",
        label: "Dependency Dmos",
        type: "list",
        group: this.f.data,
        config: this.mappingConfig,
        show: of(this.uiData.type === "autocompletesearchbox")
      }),
      new ObjectControl({
        name: "dependentdmos",
        label: "Dependent Dmos",
        type: "list",
        group: this.f.data,
        config: this.depConfig,
        show: of(this.uiData.type === "autocompletesearchbox")
      }),
      new ObjectControl({
        name: "emitonstart",
        label: "Emit On Start",
        type: "switch",
        group: this.f.data,
        show: of(this.uiData.type === "autocompletesearchbox")
      })
    ];
    this.validationControls = [
      new ObjectControl({
        name: "required",
        label: "Required",
        type: "switch",
        hint: "A required field must be filled in before the form can be submitted",
        group: this.f.validate,
        show: of(!!this.uiData.validate)
      }),
      new ObjectControl({
        name: "disabled",
        label: "Read Only",
        type: "switch",
        group: this.f.validate,
        show: of(!!this.uiData.validate)
      }),
      new ObjectControl({
        name: "minLength",
        label: "Minimum Length",
        group: this.f.validate,
        hint: "The minimum length requirement this field must meet",
        show: of(this.uiData.validate?.minLength)
      }),
      new ObjectControl({
        name: "maxLength",
        label: "Maximum Length",
        group: this.f.validate,
        hint: "The maximum length requirement this field must meet",
        required: true,
        show: of(this.uiData.validate?.maxLength)
      })
    ];
    this.form.get("dmoName").valueChanges.subscribe((name) => {
      if (this.newObject && name && name.length >= 4 && !this.form.get("dmoName").hasError("maxlength") && !this.form.get("dmoName").hasError("pattern")) {
        this.api.checkNameValidity("dmo", 0, name, this.parent.root.Version, this.parent.root.ProcessName).subscribe((IsExits) => {
          if (IsExits) {
            const nameControl = this.form.get("dmoName");
            nameControl.setErrors({
              nameExists: true,
              message: "Duplicate name"
            });
          }
        });
      }
    });
    let cntrlRequired = this.form.controls["validate"]["controls"].required;
    let cntrlReadOnly = this.form.controls["validate"]["controls"].disabled;
    cntrlRequired.valueChanges.subscribe((val) => {
      if (val == true && cntrlReadOnly.value == true) {
        cntrlReadOnly.setValue(false);
      }
    });
    cntrlReadOnly.valueChanges.subscribe((val) => {
      if (val == true && cntrlRequired.value == true) {
        cntrlRequired.setValue(false);
      }
    });
  }
  show(group, name, compareTo, type) {
    return group.get(name).valueChanges.pipe(startWith(group.get(name).value), map((v) => v?.key || v), map((v) => {
      const types = Array.isArray(type) ? type : [type];
      return v === compareTo && types.includes(this.uiData.type);
    }));
  }
  toFormGroup() {
    const group = {};
    Object.entries(this.dataClass).forEach(([key, value]) => {
      if (key === "dataSrc") {
        value = this.dataSources.find(({ key: key2 }) => key2 === value);
      } else if (key === "regxType") {
        value = this.regexTypes.find(({ key: key2 }) => key2 === value);
      } else if (key === "uploadStorage") {
        value = this.storageProviders.find(({ key: key2 }) => key2 === value);
      }
      group[key] = this.fb.control(value);
    });
    const validators = [...NAME_VALIDATORS];
    if (this.newObject) {
      let allDmos = Object.values(this.parent.root.childrenMap).flatMap((bmog) => Object.values(bmog.childrenMap)).flatMap((bmo) => Object.values(bmo.childrenMap)).flatMap((dmog) => Object.values(dmog.childrenMap));
      if (!this.dataClass.fromApi) {
        allDmos = allDmos.filter((dmo) => dmo.dmoName !== this.data.dmoName);
      }
    }
    group.dmoName = this.fb.control(this.dataClass.dmoName, {
      validators,
      updateOn: "blur"
    });
    group.values = toFormArray(this.dataClass.values, { addCheckbox: true });
    group.status = this.fb.control(this.status.find((s) => s.key == this.dataClass.status));
    if (this.uiData.type === "uploadimage") {
      group.uploadLimit = this.fb.control(this.uploadLimit.find((limit) => limit.key === +this.dataClass.uploadLimit) || null, [Validators.required]);
    }
    const data = {};
    Object.entries(this.dataClass.data).forEach(([key, value]) => {
      if ([
        "apiurl",
        "apiparams",
        "fieldparams",
        "modelbody",
        "resource"
      ].includes(key)) {
        data[key] = this.fb.control(value);
        return;
      }
      if (key === "values") {
        if (this.uiData.type === "roletype") {
          value = arrayToList(value, "value", "label");
        } else {
          value = value.map(({ value: value2 }) => ({ key: value2, value: value2 }));
        }
        if (["datetimezone", "select", "list", "multiselect"].includes(this.uiData.type)) {
          data[key] = toFormArray(value, { addCheckbox: true });
          return;
        }
      } else if (key === "json") {
        data[key] = toFormArray(value, { addCheckbox: true });
        return;
      } else if (key === "resource" || this.uiData.type === "select") {
        value = this.customDataSources.find(({ key: key2 }) => key2 === value);
      } else if (["dependencydmos", "dependentdmos", "mappings"].includes(key)) {
        data[key] = toFormArray(value, { addCheckbox: true });
        return;
      }
      data[key] = this.fb.control(value);
    });
    group.data = this.fb.group(data);
    const validate = {};
    Object.entries(this.dataClass.validate).forEach(([key, value]) => {
      if (key === "maxLength" && this.uiData.validate?.maxLength) {
        validate[key] = this.fb.control(value, [Validators.required]);
      } else {
        validate[key] = this.fb.control(value);
      }
    });
    group.validate = this.fb.group(validate);
    return this.fb.group(group);
  }
  runDynamicValidation() {
    if (["select", "list", "multiselect"].includes(this.uiData.type)) {
      this.validateControl({
        trackedControl: this.f.dataSrc,
        addValidation: (src) => (src?.key || src) === DataSource.Values,
        validatedControl: this.f.data.get("values"),
        validators: Validators.required
      }).subscribe();
    }
    if (["selectboxes", "radio"].includes(this.uiData.type)) {
      this.validateControl({
        trackedControl: this.f.type,
        addValidation: (type) => type === this.uiData.type,
        validatedControl: this.f.values,
        validators: Validators.required
      }).subscribe();
    }
    if (["select", "multiselect"].includes(this.uiData.type)) {
      this.validateControl({
        trackedControl: this.f.dataSrc,
        addValidation: (src) => (src?.key || src) === DataSource.Custom,
        validatedControl: this.f.data.get("resource"),
        validators: Validators.required
      }).subscribe();
    }
    if (["autocompletesearchbox"].includes(this.uiData.type)) {
      const controlsToValidate = ["resource", "datasource", "fieldparams", "modelbody"];
      controlsToValidate.forEach((controlName) => {
        const control = this.f.data.get(controlName);
        if (control) {
          this.validateControl({
            trackedControl: this.f.type,
            addValidation: (type) => type === this.uiData.type,
            validatedControl: control,
            validators: Validators.required
          }).subscribe();
        }
      });
    }
  }
  onSubmit() {
    if (this.form?.value?.parent?.Type === "Grid" && (this.uiData.type === "uploadimage" || this.uiData.type === "file")) {
      this.toastr.warning("You can't create file upload and image upload type dmo for Grid type dmog", "Warning");
      return false;
    }
    this.submitted = true;
    if (this.form.valid) {
      const _a = this.form.value, { parent } = _a, f = __objRest(_a, ["parent"]);
      let dataValues = [];
      let dataResource = "";
      if (["roletype", "colorpicker"].includes(this.uiData.type)) {
        dataValues = listToTypeArray(f.data.values, "value", "label");
      } else {
        dataValues = f.data.values.map(({ value, key }) => ({
          label: value,
          value
        }));
        dataResource = f.data.resource?.key || f.data.resource || "";
      }
      const formValue = __spreadProps(__spreadValues({}, f), {
        type: this.uiData.type,
        default_Value: f.defaultValue,
        values: f.values.map(({ value }) => ({ label: value, value })),
        data: __spreadProps(__spreadValues({}, f.data), {
          values: dataValues,
          resource: dataResource,
          json: f.data.json?.key || f.data.json
        }),
        dataSrc: f.dataSrc?.key || f.dataSrc,
        regxType: f.regxType?.key || f.regxType,
        status: f.status?.key || f.status,
        uploadLimit: f.uploadLimit?.key || f.uploadLimit,
        parentGuid: f.parentDmo?.key
      });
      this.output.emit(formValue);
      this.ref.close(formValue);
    }
  }
  static {
    this.\u0275fac = function DmoDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmoDetailComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmoDetailComponent, selectors: [["app-dmo-detail"]], inputs: { uiData: "uiData", readonly: "readonly" }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["renderControls", ""], [4, "ngIf"], [1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup"], ["title", "Display"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["title", "Data", 4, "ngIf"], ["title", "Validation", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [2, "margin-right", "5px"], ["title", "Data"], ["title", "Validation"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "double-column", "mt-3", 3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "submitted", "parentForm", "config", 4, "ngIf"], [3, "submitted", "parentForm", "config"]], template: function DmoDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DmoDetailComponent_ng_container_0_Template, 17, 10, "ng-container", 1)(1, DmoDetailComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.dataClass);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      TabsComponent,
      TabComponent,
      NgTemplateOutlet,
      NgForOf,
      ObjectControlComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmoDetailComponent, { className: "DmoDetailComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dmo-detail\\dmo-detail.component.ts", lineNumber: 66 });
})();

// src/app/admin/data-modeler/components/dmo/dmo.component.ts
var _c04 = () => ["button", "roletypehidden"];
var _c1 = (a0) => ({ mask: a0 });
var _c2 = (a0, a1) => ({ mask: a0, keepCharPositions: true, pipe: a1 });
function DmoComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function DmoComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dmo.label);
  }
}
function DmoComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("placeholder", ctx_r0.dmo.placeholder)("maxlength", ctx_r0.dmo.Length == null || ctx_r0.dmo.Length === 0 ? null : ctx_r0.dmo.Length);
  }
}
function DmoComponent_ng_container_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    const label_r3 = ctx.label;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getColor(item_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(label_r3);
  }
}
function DmoComponent_ng_container_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getColor(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function DmoComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ng-select", 11);
    \u0275\u0275template(2, DmoComponent_ng_container_7_ng_template_2_Template, 3, 3, "ng-template", 12)(3, DmoComponent_ng_container_7_ng_template_3_Template, 3, 3, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.dmo == null ? null : ctx_r0.dmo.data == null ? null : ctx_r0.dmo.data.values)("searchable", true)("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_8_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r5 = ctx.$implicit;
    \u0275\u0275property("value", op_r5.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r5.label);
  }
}
function DmoComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ng-select", 16);
    \u0275\u0275template(2, DmoComponent_ng_container_8_ng_option_2_Template, 2, 2, "ng-option", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("searchable", true)("placeholder", "Select...")("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.dynamicOptions);
  }
}
function DmoComponent_ng_container_9_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r6 = ctx.$implicit;
    \u0275\u0275property("value", op_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r6.label);
  }
}
function DmoComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ng-select", 19);
    \u0275\u0275template(2, DmoComponent_ng_container_9_ng_option_2_Template, 2, 2, "ng-option", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("searchable", true)("virtualScroll", true)("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.dmo == null ? null : ctx_r0.dmo.data == null ? null : ctx_r0.dmo.data.values);
  }
}
function DmoComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ng-select", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("searchable", true)("virtualScroll", true)("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_11_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r7.value);
  }
}
function DmoComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 20);
    \u0275\u0275template(2, DmoComponent_ng_container_11_option_2_Template, 2, 1, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.dmo == null ? null : ctx_r0.dmo.data == null ? null : ctx_r0.dmo.data.values);
  }
}
function DmoComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275element(2, "ngb-progressbar", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("animated", true)("striped", true)("value", ctx_r0.dmo == null ? null : ctx_r0.dmo.defaultValue);
  }
}
function DmoComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ng-select", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.dmo == null ? null : ctx_r0.dmo.data == null ? null : ctx_r0.dmo.data.values)("multiple", ctx_r0.dmo.multiple)("closeOnSelect", false)("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_14_div_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span", 30);
    \u0275\u0275listener("click", function DmoComponent_ng_container_14_div_5_li_2_Template_span_click_1_listener() {
      const file_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DownloadFile(file_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275listener("click", function DmoComponent_ng_container_14_div_5_li_2_Template_a_click_3_listener() {
      const file_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DeleteFile(file_r10));
    });
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", file_r10.OldFileName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r10.OldFileName);
  }
}
function DmoComponent_ng_container_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "ul");
    \u0275\u0275template(2, DmoComponent_ng_container_14_div_5_li_2_Template, 5, 2, "li", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getFileList);
  }
}
function DmoComponent_ng_container_14_div_6_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span", 30);
    \u0275\u0275listener("click", function DmoComponent_ng_container_14_div_6_li_2_Template_span_click_1_listener() {
      const file_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DownloadFile(file_r12));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275listener("click", function DmoComponent_ng_container_14_div_6_li_2_Template_a_click_3_listener() {
      const file_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DeleteFile(file_r12));
    });
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", file_r12.OldFileName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r12.OldFileName);
  }
}
function DmoComponent_ng_container_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "ul");
    \u0275\u0275template(2, DmoComponent_ng_container_14_div_6_li_2_Template, 5, 2, "li", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.fileInfoList);
  }
}
function DmoComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "input", 25);
    \u0275\u0275listener("change", function DmoComponent_ng_container_14_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upload($event, ctx_r0.dmo.id, ctx_r0.dmo.dmoName));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 26)(4, "label", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DmoComponent_ng_container_14_div_5_Template, 3, 1, "div", 28)(6, DmoComponent_ng_container_14_div_6_Template, 3, 1, "div", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("for", "TextBox_" + ctx_r0.dmo.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fileList.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fileList.length === 0);
  }
}
function DmoComponent_ng_container_15_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span", 30);
    \u0275\u0275listener("click", function DmoComponent_ng_container_15_li_8_Template_span_click_1_listener() {
      const file_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.DownloadFile(file_r16));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275listener("click", function DmoComponent_ng_container_15_li_8_Template_a_click_3_listener() {
      const file_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.DeleteFile(file_r16));
    });
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", file_r16.OldFileName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r16.OldFileName);
  }
}
function DmoComponent_ng_container_15_div_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span", 30);
    \u0275\u0275listener("click", function DmoComponent_ng_container_15_div_9_li_2_Template_span_click_1_listener() {
      const file_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DownloadFile(file_r18));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275listener("click", function DmoComponent_ng_container_15_div_9_li_2_Template_a_click_3_listener() {
      const file_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.DeleteFile(file_r18));
    });
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", file_r18.OldFileName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r18.OldFileName);
  }
}
function DmoComponent_ng_container_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "ul");
    \u0275\u0275template(2, DmoComponent_ng_container_15_div_9_li_2_Template, 5, 2, "li", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.fileInfoList);
  }
}
function DmoComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "input", 33, 0);
    \u0275\u0275listener("click", function DmoComponent_ng_container_15_Template_input_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const fileInput_r14 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fileInput_r14.value = null);
    })("change", function DmoComponent_ng_container_15_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uploadImage($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 34)(5, "label", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29)(7, "ul");
    \u0275\u0275template(8, DmoComponent_ng_container_15_li_8_Template, 5, 2, "li", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DmoComponent_ng_container_15_div_9_Template, 3, 1, "div", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("for", "liUploadDiv_" + ctx_r0.dmo.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.fileList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fileList.length === 0);
  }
}
function DmoComponent_ng_container_16_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r19 = ctx.$implicit;
    \u0275\u0275property("value", op_r19.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r19.label);
  }
}
function DmoComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ng-select", 16);
    \u0275\u0275template(2, DmoComponent_ng_container_16_ng_option_2_Template, 2, 2, "ng-option", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("searchable", true)("placeholder", "Select...")("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.dynamicOptions);
  }
}
function DmoComponent_ng_container_17_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r20 = ctx.$implicit;
    \u0275\u0275property("value", op_r20.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r20.label);
  }
}
function DmoComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ng-select", 19);
    \u0275\u0275template(2, DmoComponent_ng_container_17_ng_option_2_Template, 2, 2, "ng-option", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("searchable", true)("virtualScroll", true)("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.dmo == null ? null : ctx_r0.dmo.data == null ? null : ctx_r0.dmo.data.values);
  }
}
function DmoComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "span", 35);
    \u0275\u0275element(3, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value);
  }
}
function DmoComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 37);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("textMask", \u0275\u0275pureFunction1(5, _c1, ctx_r0.mask))("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value)("maxlength", ctx_r0.dmo.Length == null ? null : ctx_r0.dmo.Length);
  }
}
function DmoComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("placeholder", ctx_r0.dmo.placeholder || "hidden");
  }
}
function DmoComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value)("maxlength", ctx_r0.dmo.validate.maxLength == null ? null : ctx_r0.dmo.validate.maxLength);
  }
}
function DmoComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value)("value", ctx_r0.dmo.default_Value)("maxlength", ctx_r0.dmo.validate.maxLength == null ? null : ctx_r0.dmo.validate.maxLength);
  }
}
function DmoComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value)("value", ctx_r0.dmo.default_Value)("maxlength", ctx_r0.dmo.Length == null ? null : ctx_r0.dmo.Length);
  }
}
function DmoComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "textarea", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value)("value", ctx_r0.dmo.default_Value)("maxlength", ctx_r0.dmo.Length == null || ctx_r0.dmo.Length === 0 ? null : ctx_r0.dmo.Length);
  }
}
function DmoComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("maxLength", ctx_r0.dmo.Length == null ? null : ctx_r0.dmo.Length);
  }
}
function DmoComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ng-select", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.dmo.data == null ? null : ctx_r0.dmo.data.values)("multiple", true)("closeOnSelect", false)("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_27_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "input", 46)(4, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", option_r21.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dmo.disabled)("value", option_r21.value)("id", ctx_r0.dmo.id + i_r22)("name", ctx_r0.dmo.dmoName);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.dmo.disabled ? "#e9ecef" : "transparent");
  }
}
function DmoComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275template(2, DmoComponent_ng_container_27_ng_container_2_Template, 5, 7, "ng-container", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.dmo == null ? null : ctx_r0.dmo.values);
  }
}
function DmoComponent_ng_container_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 48)(2, "input", 49);
    \u0275\u0275listener("change", function DmoComponent_ng_container_28_ng_container_2_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fun_click(ctx_r0.dmo));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 50);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r24 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", control_r24.value)("checked", control_r24.value === ctx_r0.dmo.default_Value)("id", ctx_r0.dmo.dmoName)("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", (ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled) ? "#e9ecef" : "transparent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(control_r24.value);
  }
}
function DmoComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275template(2, DmoComponent_ng_container_28_ng_container_2_Template, 6, 7, "ng-container", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.dmo == null ? null : ctx_r0.dmo.values);
  }
}
function DmoComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52)(3, "button", 53);
    \u0275\u0275listener("click", function DmoComponent_ng_container_29_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r25);
      const d_r26 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(d_r26.toggle());
    });
    \u0275\u0275element(4, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 55, 1);
    \u0275\u0275listener("keyup", function DmoComponent_ng_container_29_Template_input_keyup_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dateMasks($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", (ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled) ? "#e9ecef" : "transparent");
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate);
  }
}
function DmoComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 56);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("textMask", \u0275\u0275pureFunction2(3, _c2, ctx_r0.dateMask, ctx_r0.autoCorrectedDatePipe))("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52)(3, "button", 53);
    \u0275\u0275listener("click", function DmoComponent_ng_container_31_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const d_r28 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(d_r28.toggle());
    });
    \u0275\u0275element(4, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 57, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", (ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled) ? "#e9ecef" : "transparent");
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "div", 59)(3, "div", 52)(4, "button", 53);
    \u0275\u0275listener("click", function DmoComponent_ng_container_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r29);
      const d_r30 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(d_r30.toggle());
    });
    \u0275\u0275element(5, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 60, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "ng-select", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", (ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled) ? "#e9ecef" : "transparent");
    \u0275\u0275advance(3);
    \u0275\u0275property("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r0.timeOptions)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.gridViewImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DmoComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.gridViewImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DmoComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.dateFieldImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DmoComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275element(2, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value);
  }
}
function DmoComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value);
  }
}
function DmoComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 64)(2, "mat-autocomplete", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("disabled", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled)("value", ctx_r0.dmo.default_Value);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx_r0.displayWith);
  }
}
function DmoComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ng-select", 66);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.dmo.dmoName)("readonly", ctx_r0.dmo.validate == null ? null : ctx_r0.dmo.validate.disabled);
  }
}
function DmoComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "mat-radio-group")(3, "mat-radio-button", 67)(4, "span", 68);
    \u0275\u0275text(5, "On");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-radio-button", 69)(7, "span", 68);
    \u0275\u0275text(8, "Off");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
function DmoComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var DmoComponent = class _DmoComponent {
  get getFileList() {
    if (this.dmoimage.ImagesRemoveFileList.length > 0) {
      this.dmoimage.ImagesRemoveFileList.forEach((element) => {
        if (this.fileList.length > 0) {
          const index = this.fileList.findIndex((x) => x["FileName"] === element.FileName);
          if (index !== -1) {
            this.fileList.splice(index, 1);
          }
        } else {
          if (this.fileInfoList.length > 0 && element.imgId !== void 0) {
            const index = this.fileInfoList.findIndex((x) => x["FileName"] === element.FileName);
            if (index !== -1) {
              this.fileInfoList.splice(index, 1);
            }
          }
        }
      });
    }
    return this.fileList.length > 0 ? this.fileList : this.fileInfoList;
  }
  constructor(elRef, dmoimage, ngbDateParserFormatter) {
    this.elRef = elRef;
    this.dmoimage = dmoimage;
    this.ngbDateParserFormatter = ngbDateParserFormatter;
    this.fileList = [];
    this.gridViewImageUrl = UtilService.getUrlForImage("/assets/styles/images/gridView.jpg");
    this.dateFieldImageUrl = UtilService.getUrlForImage("/assets/styles/images/dateField.jpg");
    this.maxDate = { year: 2199, month: 12, day: 31 };
    this.minDate = { year: 1990, month: 1, day: 1 };
    this.fileInfoList = [];
    this.dateTimePickerConfig = {
      format: "DD/MM/YYYY HH:mm:ss",
      showTwentyFourHours: environment.Setting.dateTimeFormat24,
      showSeconds: true,
      disableKeypress: true
    };
    this.maxDate = { year: 2199, month: 12, day: 31 };
    this.minDate = { year: 1990, month: 1, day: 1 };
  }
  displayWith(lookup) {
    return lookup ? lookup.ddOptionValue + " (" + lookup.ddOptionKey + ")" : null;
  }
  getColor(color) {
    return color.label.toLowerCase();
  }
  mask(rawValue) {
    if (rawValue && rawValue.replace(/\D+/g, "").length > 11) {
      return ["+", /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    } else if (rawValue && rawValue.replace(/\D+/g, "").length > 10) {
      return ["+", /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    } else {
      return ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
    }
  }
  upload(UploadEvent, dmoGUID, dmoName, modal = void 0, cropedFile = void 0) {
    let fileName = "";
    this.dmoimage.index = this.dmoimage.index + 1;
    if (cropedFile) {
      fileName = cropedFile.ImgFileName;
      this.dmoimage.ImagesFileList.push({
        file: cropedFile.file,
        ImgFileName: cropedFile.ImgFileName,
        Guid: dmoGUID,
        imgId: this.dmoimage.index,
        dmoName
      });
    } else {
      fileName = UploadEvent.target.files[0].name;
      if (UploadEvent.currentTarget["files"].length === 0) {
        return;
      }
      if (UploadEvent.currentTarget["files"]["files"] != void 0) {
        this.dmoimage.ImagesFileList.push({
          file: { file: UploadEvent.currentTarget["files"]["files"][0] },
          ImgFileName: "",
          Guid: dmoGUID,
          imgId: this.dmoimage.index,
          dmoName
        });
      } else {
        this.dmoimage.ImagesFileList.push({
          file: { file: UploadEvent.currentTarget["files"][0] },
          ImgFileName: "",
          Guid: dmoGUID,
          imgId: this.dmoimage.index,
          dmoName
        });
      }
    }
    const img = {
      FileName: fileName,
      FileSize: "0 Kb",
      OldFileName: fileName,
      CreatedOn: null,
      CreatedBy: null,
      DISPNAME: null,
      UserFullName: null,
      IsEncrypted: false,
      Id: null,
      uId: this.dmoimage.index,
      dmoName
    };
    this.fileInfoList.push(img);
    this.fileList.push(img);
    if (modal) {
      modal.dismiss("Cross click");
    }
  }
  uploadImage(event) {
    if (+this.dmo.uploadLimit < this.fileList.length) {
      return;
    }
    const file = event.target.files.item(0);
    const ext = file.name.split(".").pop().toLowerCase();
    if (!["jpg", "jpeg", "png"].includes(ext)) {
      return;
    }
    this.upload(event, this.dmo.id, this.dmo.dmoName);
  }
  DeleteFile(objfile) {
    if (objfile.uId) {
      let ind = this.fileInfoList.findIndex((x) => x["uId"] === objfile.uId);
      if (ind > -1) {
        this.fileInfoList.splice(ind, 1);
      }
      ind = -1;
      ind = this.fileList.indexOf(objfile);
      if (ind > -1) {
        this.fileList.splice(ind, 1);
      }
      ind = -1;
      ind = this.dmoimage.ImagesFileList.findIndex((x) => x["imgId"] === objfile.uId);
      if (ind > -1) {
        this.dmoimage.ImagesFileList.splice(ind, 1);
      }
      return;
    }
    this.dmoimage.ImagesRemoveFileList.push(__spreadProps(__spreadValues({}, objfile), {
      IsPermanentFileDeletion: environment.Setting.IsPermanentFileDeletion.toString()
    }));
    const index = this.fileList.indexOf(objfile);
    const index1 = this.fileInfoList.indexOf(objfile);
    if (index > -1) {
      this.fileList.splice(index, 1);
      this.dmoimage.ImagesFileList.splice(index, 1);
    }
    if (index1 > -1) {
      this.fileInfoList.splice(index, 1);
    }
  }
  static {
    this.\u0275fac = function DmoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmoComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DmoImageControlService), \u0275\u0275directiveInject(NgbDateParserFormatter));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmoComponent, selectors: [["app-dmo"]], inputs: { dmo: "dmo" }, standalone: true, features: [\u0275\u0275ProvidersFeature([{ provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter }]), \u0275\u0275StandaloneFeature], decls: 43, vars: 44, consts: [["fileInput", ""], ["d", "ngbDatepicker"], [1, "form-group", 2, "min-width", "200px", "width", "100%", 3, "id"], [1, "input-label", 3, "id", "hidden"], ["style", "color: red", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [2, "color", "red"], [1, "btn", "btn-primary", "btn-sm"], ["type", "text", 1, "form-control", 3, "id", "readonly", "placeholder", "maxlength"], [1, "form-control", 3, "items", "searchable", "id", "readonly"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "color-code-option"], [1, "ml-1"], [1, "form-control", 3, "searchable", "placeholder", "id", "readonly"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "form-control", 3, "searchable", "virtualScroll", "id", "readonly"], ["multiple", "", 1, "form-control", 2, "height", "auto", 3, "id", "disabled"], [4, "ngFor", "ngForOf"], ["showValue", "true", "type", "success", 3, "id", "readonly", "animated", "striped", "value"], ["bindLabel", "label", "bindValue", "value", "placeholder", "Select...", 1, "form-control", 3, "items", "multiple", "closeOnSelect", "id", "readonly"], [1, "custom-file"], ["type", "file", 1, "custom-file-input", 3, "change", "disabled"], ["type", "hidden", "name", "fileHidden", 3, "id", "readonly"], [1, "custom-file-label", 3, "for"], ["class", "uploadList", 4, "ngIf"], [1, "uploadList"], [3, "click", "title"], ["href", "javascript:void(0)", "title", "Delete", 3, "click"], [1, "fas", "fa-trash-alt"], ["type", "file", 1, "custom-file-input", 3, "click", "change", "disabled"], ["type", "text", 2, "display", "none", 3, "id", "disabled"], [1, "range-control"], ["type", "text", "appRange", "", 1, "form-control", "range-control__input", 3, "id", "readonly", "value"], ["type", "tel", 1, "form-control", 3, "textMask", "id", "readonly", "value", "maxlength"], ["type", "text", "readonly", "", 1, "form-control", 2, "border", "2px dashed lightgrey", 3, "id", "placeholder"], ["type", "email", 1, "form-control", 3, "id", "readonly", "value", "maxlength"], ["type", "text", 1, "form-control", 3, "id", "readonly", "value", "maxlength"], ["type", "text", 1, "form-control", 3, "id", "disabled", "value", "maxlength"], [1, "form-control", "textareaHeight", 3, "id", "readonly", "value", "maxlength"], ["type", "text", "readonly", "", 1, "form-control", 3, "id", "maxLength"], [1, "d-flex", "input-group"], [1, "radio-container"], ["type", "radio", 3, "disabled", "value", "id", "name"], [1, "checkmark"], [1, "form-checkbox", "mr-2"], ["type", "checkbox", 3, "change", "value", "checked", "id", "disabled"], [1, "skin"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "disabled", "dmo.validate?.disabled", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-calendar-alt"], ["type", "text", "placeholder", "dd/mm/yyyy", "ngbDatepicker", "", 1, "form-control", 3, "keyup", "id", "readonly", "minDate", "maxDate"], ["type", "text", "pattern", "\\d{2}/\\d{2}/\\d{4}", 1, "form-control", 3, "textMask", "id", "readonly"], ["type", "text", "placeholder", "dd/mm/yyyy", "ngbDatepicker", "", 1, "form-control", 3, "id", "minDate", "maxDate", "readonly"], [1, "d-flex", "date-tz-picker", 3, "id", "readonly"], [1, "input-group", "flex-nowrap"], ["type", "text", "ngbDatepicker", "", 1, "form-control", "date-picker", 3, "readonly"], [1, "form-control", 3, "items", "readonly"], ["name", "dmo.dmoName", "type", "img", "lang", "en", "id", "dmo.dmoName", "disabled", "true", 1, "img-responsive", 2, "height", "30px", "width", "100%", 3, "src"], ["type", "text", "disabled", "", 1, "form-control", 3, "id", "readonly", "value"], ["type", "text", "matInput", "", 1, "form-control", 3, "id", "disabled", "value"], ["showPanel", "true", 3, "displayWith"], [1, "form-control", "input-group", 3, "id", "readonly"], ["value", "On"], [2, "font-size", "12px"], ["value", "Off"]], template: function DmoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "label", 3);
        \u0275\u0275text(2);
        \u0275\u0275template(3, DmoComponent_span_3_Template, 2, 0, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainerStart(4, 5);
        \u0275\u0275template(5, DmoComponent_ng_container_5_Template, 3, 1, "ng-container", 6)(6, DmoComponent_ng_container_6_Template, 2, 4, "ng-container", 6)(7, DmoComponent_ng_container_7_Template, 4, 4, "ng-container", 6)(8, DmoComponent_ng_container_8_Template, 3, 5, "ng-container", 6)(9, DmoComponent_ng_container_9_Template, 3, 5, "ng-container", 6)(10, DmoComponent_ng_container_10_Template, 2, 4, "ng-container", 6)(11, DmoComponent_ng_container_11_Template, 3, 3, "ng-container", 6)(12, DmoComponent_ng_container_12_Template, 3, 5, "ng-container", 6)(13, DmoComponent_ng_container_13_Template, 2, 5, "ng-container", 6)(14, DmoComponent_ng_container_14_Template, 7, 6, "ng-container", 6)(15, DmoComponent_ng_container_15_Template, 10, 6, "ng-container", 6)(16, DmoComponent_ng_container_16_Template, 3, 5, "ng-container", 6)(17, DmoComponent_ng_container_17_Template, 3, 5, "ng-container", 6)(18, DmoComponent_ng_container_18_Template, 4, 3, "ng-container", 6)(19, DmoComponent_ng_container_19_Template, 2, 7, "ng-container", 6)(20, DmoComponent_ng_container_20_Template, 2, 2, "ng-container", 6)(21, DmoComponent_ng_container_21_Template, 2, 4, "ng-container", 6)(22, DmoComponent_ng_container_22_Template, 2, 5, "ng-container", 6)(23, DmoComponent_ng_container_23_Template, 2, 5, "ng-container", 6)(24, DmoComponent_ng_container_24_Template, 2, 5, "ng-container", 6)(25, DmoComponent_ng_container_25_Template, 2, 2, "ng-container", 6)(26, DmoComponent_ng_container_26_Template, 2, 5, "ng-container", 6)(27, DmoComponent_ng_container_27_Template, 3, 1, "ng-container", 6)(28, DmoComponent_ng_container_28_Template, 3, 1, "ng-container", 6)(29, DmoComponent_ng_container_29_Template, 7, 6, "ng-container", 6)(30, DmoComponent_ng_container_30_Template, 2, 6, "ng-container", 6)(31, DmoComponent_ng_container_31_Template, 7, 6, "ng-container", 6)(32, DmoComponent_ng_container_32_Template, 9, 7, "ng-container", 6)(33, DmoComponent_ng_container_33_Template, 2, 1, "ng-container", 6)(34, DmoComponent_ng_container_34_Template, 2, 1, "ng-container", 6)(35, DmoComponent_ng_container_35_Template, 2, 1, "ng-container", 6)(36, DmoComponent_ng_container_36_Template, 3, 2, "ng-container", 6)(37, DmoComponent_ng_container_37_Template, 2, 3, "ng-container", 6)(38, DmoComponent_ng_container_38_Template, 2, 3, "ng-container", 6)(39, DmoComponent_ng_container_39_Template, 3, 4, "ng-container", 6)(40, DmoComponent_ng_container_40_Template, 2, 2, "ng-container", 6)(41, DmoComponent_ng_container_41_Template, 9, 0, "ng-container", 6)(42, DmoComponent_ng_container_42_Template, 1, 0, "ng-container", 7);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("id", "control_" + ctx.dmo.dmoName);
        \u0275\u0275advance();
        \u0275\u0275property("id", "label_" + ctx.dmo.dmoName)("hidden", \u0275\u0275pureFunction0(43, _c04).includes(ctx.dmo.type));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.dmo.label, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dmo.validate.required);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitch", ctx.dmo.type);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "button");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "textfield");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "colorpicker");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "countrylist");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "select");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "manageddropdown");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "progressbar");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "roletype");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "file");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "uploadimage");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "usstatelist");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "autocompletesearchbox");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "rangebox");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "phoneNumber");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "roletypehidden");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "email");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "usergroup");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "url");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "textarea");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "id");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "multiselect");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "radio");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "selectboxes");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "staticdatebox");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "day");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "datetime");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "datetimezone");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "datagrd");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "jsonstaticgrid");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "datetimebox");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "hidden");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "createdby");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "createddate");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "keyvaluesearchbox");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "keyvaluedropdownlist");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "notificationflag");
      }
    }, dependencies: [
      NgIf,
      NgSwitch,
      NgSwitchCase,
      NgSelectComponent,
      NgLabelTemplateDirective,
      NgOptionTemplateDirective,
      NgForOf,
      NgOptionComponent,
      ReactiveFormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      NgbProgressbar,
      NgbInputDatepicker,
      MatInput,
      MatAutocomplete,
      NgSwitchDefault,
      MatRadioButton
    ], styles: ['\n\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 100%;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\n.btn-xxs[_ngcontent-%COMP%], \n.btn-group-xxs[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], \n.component-btn-group[_ngcontent-%COMP%]   .component-settings-button[_ngcontent-%COMP%] {\n  padding: 2px 2px;\n  font-size: 11px;\n  line-height: 1.2em;\n  border-radius: 0;\n  width: 18px;\n  height: 18px;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n}\n.mr-2[_ngcontent-%COMP%], \n.mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.col-sm-12[_ngcontent-%COMP%], \n.col-sm-9[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.custom-file-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  overflow: hidden;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: "Browse";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #EB583B;\n  border-color: #EB583B;\n}\n/*# sourceMappingURL=dmo.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmoComponent, { className: "DmoComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dmo\\dmo.component.ts", lineNumber: 42 });
})();

// src/app/admin/data-modeler/components/dmog-detail/dmog-detail.component.ts
function DmogDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("New ", ctx_r0.title, "");
  }
}
function DmogDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.title, " Details");
  }
}
function DmogDetailComponent_ng_container_9_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 16);
  }
  if (rf & 2) {
    const control_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(control_r2.class);
    \u0275\u0275property("config", control_r2)("parentForm", ctx_r0.form);
  }
}
function DmogDetailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DmogDetailComponent_ng_container_9_app_object_control_1_Template, 1, 4, "app-object-control", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r2.show));
  }
}
function DmogDetailComponent_ng_container_25_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 16);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(control_r3.class);
    \u0275\u0275property("config", control_r3)("parentForm", ctx_r0.form);
  }
}
function DmogDetailComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DmogDetailComponent_ng_container_25_app_object_control_1_Template, 1, 4, "app-object-control", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r3.show));
  }
}
function DmogDetailComponent_button_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function DmogDetailComponent_button_30_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function DmogDetailComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DmogDetailComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(1, DmogDetailComponent_button_30_ng_container_1_Template, 2, 0, "ng-container", 2)(2, DmogDetailComponent_button_30_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newObject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.newObject);
  }
}
var DmogDetailComponent = class _DmogDetailComponent extends ObjectDetail {
  constructor(ref, fb, api, toastr, changeDetectorRef) {
    super(ref, fb);
    this.api = api;
    this.toastr = toastr;
    this.changeDetectorRef = changeDetectorRef;
    this.title = "Data Model Object Group";
    this.dmogTypeList = enumToList(DMOGType);
    this.status = enumToList(Status);
    this.availableDmoToShare = [];
    this.allDmos = [];
    this.leftSelectedSharedItems = [];
    this.rightSelectedSharedItems = [];
    this.leftSharedChanged = false;
    this.rightSharedChanged = false;
    this.displayShare = (item) => item.value;
    this.uniqueShare = (item) => item.value;
    this.shouldAdd = (item) => this.api.checkDmoInBmog(item.dmoId.toString(), item.bmogId.toString()).pipe(tap((success) => {
      if (!success) {
        this.toastr.warning("This dmo cannot be shared");
      }
    }));
    this.onLeftShareReorder = (items) => {
      this.leftSelectedSharedItems = items;
      this.leftSharedChanged = true;
    };
    this.onRightShareReorder = (items) => {
      this.rightSelectedSharedItems = items;
      this.rightSharedChanged = true;
    };
    this.refreshAllDmos = () => {
      this.allDmos.forEach((dmo) => {
        const rightCheck = this.rightSelectedSharedItems.some((item) => item.key === dmo.key);
        const leftCheck = this.leftSelectedSharedItems.some((item) => item.key === dmo.key);
        dmo.selected = rightCheck || leftCheck;
        dmo.disabled = rightCheck || leftCheck;
      });
      this.allDmos = this.allDmos.slice();
    };
    this.formActions = [{ controlName: "Type", handler: (type) => this.onDmogTypeChange(type) }];
  }
  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }
  beforeFormInit() {
    const { ProcessName } = this.parent.root;
    this.roles$ = this.api.getRoles(ProcessName).pipe(map((list) => arrayToList(list, "value", "label")));
  }
  initForm() {
    const validators = [...NAME_VALIDATORS];
    if (this.newObject) {
      const allDmogs = Object.values(this.parent.root.childrenMap).flatMap((bmog) => Object.values(bmog.childrenMap).flatMap((bmo) => Object.values(bmo.childrenMap)));
    }
    this.form = this.fb.group({
      Name: [this.data.Name, { validators, updateOn: "blur" }],
      DefCollapsed: [+this.data.DefCollapsed || 0],
      DisplayName: [this.data.DisplayName, [Validators.required]],
      IsCollapsed: [+this.data.IsCollapsed || 0],
      IsHidden: [+this.data.IsHidden || 0],
      LongDesc: [this.data.LongDesc],
      Roles: [arrayToList(this.data.Roles, "Value", "Key")],
      // Share: [this.selectedSharedItems()],
      Status: [this.status.find((s) => s.key == this.data.Status), [Validators.required]],
      Type: [this.dmogTypeList.find((t) => t.key === this.data.Type), [Validators.required]],
      Version: [this.data.Version || this.parent.Version, [Validators.required]],
      showHelp: [+this.data.showHelp || 0]
    });
    const map2 = this.getSharedItems();
    const left = map2.get(0) || [];
    const right = map2.get(1) || [];
    this.leftSelectedSharedItems = left.filter((item) => item.selected);
    this.rightSelectedSharedItems = right.filter((item) => item.selected);
    this.controls = [
      new ObjectControl({ name: "Name", label: "Name", readonly: !this.newObject, required: true }),
      new ObjectControl({ name: "DisplayName", label: "Friendly Name", required: true }),
      new ObjectControl({ name: "Version", label: "Version", readonly: true }),
      new ObjectControl({ name: "Status", label: "Status", type: "dropdown", required: true, options: of(this.status) }),
      new ObjectControl({ name: "Type", label: "Type", type: "dropdown", required: true, options: of(this.dmogTypeList) }),
      new ObjectControl({
        name: "Roles",
        label: "Roles",
        type: "dropdown",
        required: true,
        options: this.roles$,
        show: this.show("Type", DMOGType.Grid),
        multiple: true
      }),
      new ObjectControl({ name: "LongDesc", label: "Long Description", type: "rich", class: "span-12" }),
      new ObjectControl({ name: "showHelp", label: "Show Long Description as Help", type: "switch" }),
      new ObjectControl({ name: "IsCollapsed", label: "Is Collapsible", type: "switch" }),
      new ObjectControl({
        name: "DefCollapsed",
        label: "Is Collapsed",
        type: "switch",
        show: this.show("IsCollapsed", true)
      }),
      new ObjectControl({ name: "IsHidden", label: "Is Hidden", type: "switch" })
    ];
    this.api.GetAvailableDmoToShare(this.parent.root.selectedBMOG.BMOGID, this.parent.root.BMId).subscribe((x) => {
      this.availableDmoToShare = x;
      const avDmos = this.getAllDmos();
      this.allDmos = avDmos.get(0) || [];
    });
    this.form.get("Name").valueChanges.subscribe((name) => {
      if (this.newObject && name && name.length >= 4 && !this.form.get("Name").hasError("maxlength") && !this.form.get("Name").hasError("pattern")) {
        this.api.checkNameValidity("dmog", 0, name, this.parent.root.Version, this.parent.root.ProcessName).subscribe((IsExits) => {
          if (IsExits) {
            const nameControl = this.form.get("Name");
            nameControl.setErrors({
              nameExists: true,
              message: "Duplicate name"
            });
          }
        });
      }
    });
  }
  afterFormInit() {
    const val = this.dmogTypeList.find(({ key }) => this.data.Type === key);
    this.f.Type.patchValue(val);
  }
  getAllDmos() {
    const share = this.data.Share || [];
    const colMap = /* @__PURE__ */ new Map();
    this.availableDmoToShare.forEach((dmo, i) => {
      const check = share.some((item2) => item2.value === dmo.dmoGuid);
      const item = {
        key: dmo.dmoGuid,
        value: dmo.NAME,
        dmoId: dmo.dmoID,
        bmogId: this.parent.parent.BMOGID,
        selected: check,
        disabled: check
      };
      if (!colMap.get(0))
        colMap.set(0, []);
      const col = colMap.get(0);
      if (!col.find((d) => d.key === item.key)) {
        colMap.get(0).push(item);
      }
    });
    return colMap;
  }
  getSharedItems() {
    const share = this.data.Share || [];
    const colMap = /* @__PURE__ */ new Map();
    const collectShared = (dmog) => {
      dmog.formData.components.forEach((row) => {
        row.columns.forEach((col, i) => col.components.forEach((obj) => {
          const dmo = dmog.getChild(obj.dmoName);
          const check = share.some((item2) => item2.value === dmo.guid && item2.key === dmog.GUID);
          const item = {
            key: dmo.guid,
            //value: `${dmog.parent.DisplayName} > ${dmog.DisplayName} > ${dmo.label}`,
            value: `${dmo.label} (${dmo.dmoName})`,
            dmoId: dmo.dmoId,
            bmogId: this.parent.parent.BMOGID,
            selected: check,
            disabled: check
          };
          if (!colMap.get(i))
            colMap.set(i, []);
          const col2 = colMap.get(i);
          if (!col2.find((d) => d.key === item.key)) {
            colMap.get(i).push(item);
          }
        }));
      });
    };
    if (this.data.Children) {
      collectShared(this.data);
    }
    Object.values(this.parent.root.childrenMap).filter((bmog) => bmog.BMOGID !== this.parent.parent.BMOGID).forEach((bmog) => {
      Object.values(bmog.childrenMap).filter((bmo) => !bmo.shared && bmo.BMOID !== this.parent?.BMOID).forEach((bmo) => {
        Object.values(bmo.childrenMap).forEach((dmog) => {
          collectShared(dmog);
        });
      });
    });
    return colMap;
  }
  onLeftShareAdd(item) {
    this.leftSelectedSharedItems = this.leftSelectedSharedItems.concat(item);
    this.leftSharedChanged = true;
    this.refreshAllDmos();
  }
  onLeftShareRemove(item) {
    this.leftSelectedSharedItems = this.leftSelectedSharedItems.filter((dmo) => dmo.key !== item.key);
    this.leftSharedChanged = true;
    this.refreshAllDmos();
  }
  onRightShareAdd(item) {
    this.rightSelectedSharedItems = this.rightSelectedSharedItems.concat(item);
    this.rightSharedChanged = true;
    this.refreshAllDmos();
  }
  onRightShareRemove(item) {
    this.rightSelectedSharedItems = this.rightSelectedSharedItems.filter((dmo) => dmo.key !== item.key);
    this.rightSharedChanged = true;
    this.refreshAllDmos();
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload = __spreadProps(__spreadValues({}, val), {
        Parent: this.data.Parent || this.parent.id,
        DMOGID: this.data.DMOGID,
        id: this.data.id || val.Name,
        GUID: (this.data.GUID || val.Name).replace("`", ""),
        LnkBmoDmogID: this.data.LnkBmoDmogID,
        Type: val.Type?.key || val.Type,
        Status: val.Status?.key || val.Status,
        DefCollapsed: (+val.DefCollapsed).toString(),
        IsCollapsed: (+val.IsCollapsed).toString(),
        IsHidden: (+val.IsHidden).toString(),
        showHelp: (+val.showHelp).toString(),
        Roles: listToTypeArray(val.Roles, "value", "key")
      });
      const shared = {
        processName: this.parent.root.ProcessName,
        bmName: this.parent.root.Name,
        bmVersion: this.parent.root.Version,
        dmogName: val.Name,
        leftDMOGuids: this.leftSharedChanged ? this.leftSelectedSharedItems.map(({ key }) => key).toString() : "-1",
        rightDMOGuids: this.rightSharedChanged ? this.rightSelectedSharedItems.map(({ key }) => key).toString() : "-1"
      };
      this.output.emit(payload);
      this.ref.close({ payload, shared });
    }
  }
  onDmogTypeChange(val) {
    val = val?.key || val;
    if (val === DMOGType.Grid) {
      this.f.Roles.setValidators(Validators.required);
    } else {
      this.f.Roles.clearValidators();
    }
    this.f.Roles.updateValueAndValidity();
  }
  show(controlName, compareTo) {
    return this.form.get(controlName).valueChanges.pipe(startWith(this.form.get(controlName).value), map((v) => v?.key || v), map((v) => v === compareTo));
  }
  static {
    this.\u0275fac = function DmogDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmogDetailComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmogDetailComponent, selectors: [["app-dmog-detail"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 31, vars: 25, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup"], [1, "double-column"], [4, "ngFor", "ngForOf"], [1, "span-12"], [1, "double-column", 2, "margin", "0"], ["for", "", 1, "span-6"], ["checkBy", "selected", "disableBy", "disabled", 3, "add", "remove", "reorder", "items", "associatedItems", "displayWith", "uniqueWith", "checkAll", "shouldAdd"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", "type", "submit", 3, "click", 4, "ngIf"], [3, "config", "parentForm", "class", 4, "ngIf"], [3, "config", "parentForm"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function DmogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, DmogDetailComponent_h2_2_Template, 2, 1, "h2", 2)(3, DmogDetailComponent_h2_3_Template, 2, 1, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function DmogDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "form", 5)(8, "div", 6);
        \u0275\u0275template(9, DmogDetailComponent_ng_container_9_Template, 3, 3, "ng-container", 7);
        \u0275\u0275pipe(10, "slice");
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 10);
        \u0275\u0275text(14, "Available DMOs For Left Column");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 10);
        \u0275\u0275text(16, "Selected DMOs For Left Column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "app-association", 11);
        \u0275\u0275listener("add", function DmogDetailComponent_Template_app_association_add_17_listener($event) {
          return ctx.onLeftShareAdd($event);
        })("remove", function DmogDetailComponent_Template_app_association_remove_17_listener($event) {
          return ctx.onLeftShareRemove($event);
        })("reorder", function DmogDetailComponent_Template_app_association_reorder_17_listener($event) {
          return ctx.onLeftShareReorder($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "label", 10);
        \u0275\u0275text(21, "Available DMOs For Right Column");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "label", 10);
        \u0275\u0275text(23, "Selected DMOs For Right Column");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "app-association", 11);
        \u0275\u0275listener("add", function DmogDetailComponent_Template_app_association_add_24_listener($event) {
          return ctx.onRightShareAdd($event);
        })("remove", function DmogDetailComponent_Template_app_association_remove_24_listener($event) {
          return ctx.onRightShareRemove($event);
        })("reorder", function DmogDetailComponent_Template_app_association_reorder_24_listener($event) {
          return ctx.onRightShareReorder($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, DmogDetailComponent_ng_container_25_Template, 3, 3, "ng-container", 7);
        \u0275\u0275pipe(26, "slice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12)(28, "button", 13);
        \u0275\u0275listener("click", function DmogDetailComponent_Template_button_click_28_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(29, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, DmogDetailComponent_button_30_Template, 3, 2, "button", 14);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newObject);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.newObject);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(10, 18, ctx.controls, 0, 7));
        \u0275\u0275advance(8);
        \u0275\u0275property("items", ctx.allDmos)("associatedItems", ctx.leftSelectedSharedItems)("displayWith", ctx.displayShare)("uniqueWith", ctx.uniqueShare)("checkAll", false)("shouldAdd", ctx.shouldAdd);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.allDmos)("associatedItems", ctx.rightSelectedSharedItems)("displayWith", ctx.displayShare)("uniqueWith", ctx.uniqueShare)("checkAll", false)("shouldAdd", ctx.shouldAdd);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(26, 22, ctx.controls, 7));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.parent.root.published);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      NgForOf,
      ObjectControlComponent,
      AssociationComponent,
      AsyncPipe,
      SlicePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmogDetailComponent, { className: "DmogDetailComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dmog-detail\\dmog-detail.component.ts", lineNumber: 33 });
})();

// src/app/admin/data-modeler/components/dmog-form-view/dmog-form-view.component.ts
var import_lodash2 = __toESM(require_lodash());
var _c05 = (a0) => ({ item: a0 });
function DmogFormViewComponent_div_2_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkDragDisabled", ctx_r1.readonly || ctx_r1.checkIsStaticJsonGrid(item_r1));
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r1.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r1.name, " ");
  }
}
function DmogFormViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "label", 9);
    \u0275\u0275text(4, "Data Model Objects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11, 1);
    \u0275\u0275template(8, DmogFormViewComponent_div_2_li_8_Template, 3, 4, "li", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("cdkDropListData", ctx_r1.formsControls);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.formsControls);
  }
}
function DmogFormViewComponent_div_3_ng_container_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " Drag and Drop a form component ");
    \u0275\u0275elementEnd();
  }
}
function DmogFormViewComponent_div_3_ng_container_1_div_1_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DmogFormViewComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("mouseenter", function DmogFormViewComponent_div_3_ng_container_1_div_1_div_3_Template_div_mouseenter_0_listener() {
      const dmo_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(dmo_r7.display = true);
    })("mouseleave", function DmogFormViewComponent_div_3_ng_container_1_div_1_div_3_Template_div_mouseleave_0_listener() {
      const dmo_r7 = \u0275\u0275restoreView(_r6).$implicit;
      return \u0275\u0275resetView(dmo_r7.display = false);
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275template(2, DmogFormViewComponent_div_3_ng_container_1_div_1_div_3_ng_container_2_Template, 1, 0, "ng-container", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-dmo", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dmo_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    const itemActions_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", dmo_r7.display);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemActions_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c05, dmo_r7));
    \u0275\u0275advance();
    \u0275\u0275property("dmo", dmo_r7)("cdkDragDisabled", ctx_r1.readonly);
  }
}
function DmogFormViewComponent_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275listener("cdkDropListDropped", function DmogFormViewComponent_div_3_ng_container_1_div_1_Template_div_cdkDropListDropped_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275template(2, DmogFormViewComponent_div_3_ng_container_1_div_1_div_2_Template, 2, 0, "div", 20)(3, DmogFormViewComponent_div_3_ng_container_1_div_1_div_3_Template, 4, 8, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dmos_r9 = ctx.ngIf;
    const column_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("span-2", column_r10.width === 100);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", dmos_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dmos_r9.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", dmos_r9);
  }
}
function DmogFormViewComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DmogFormViewComponent_div_3_ng_container_1_div_1_Template, 4, 5, "div", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r10 == null ? null : column_r10.components);
  }
}
function DmogFormViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mouseenter", function DmogFormViewComponent_div_3_Template_div_mouseenter_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(row_r4.display = true);
    })("mouseleave", function DmogFormViewComponent_div_3_Template_div_mouseleave_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(row_r4.display = false);
    });
    \u0275\u0275template(1, DmogFormViewComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.readonly ? "col-sm-12" : "col-sm-9");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r4 == null ? null : row_r4.columns);
  }
}
function DmogFormViewComponent_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 32);
    \u0275\u0275listener("click", function DmogFormViewComponent_ng_template_4_ng_container_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const item_r13 = \u0275\u0275nextContext().item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDmoDelete(item_r13));
    });
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275listener("click", function DmogFormViewComponent_ng_template_4_ng_container_0_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const item_r13 = \u0275\u0275nextContext().item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDmoClone(item_r13));
    });
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function DmogFormViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, DmogFormViewComponent_ng_template_4_ng_container_0_Template, 5, 0, "ng-container", 27);
    \u0275\u0275elementStart(1, "a", 28);
    \u0275\u0275listener("click", function DmogFormViewComponent_ng_template_4_Template_a_click_1_listener() {
      const item_r13 = \u0275\u0275restoreView(_r11).item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openConditionPopup(item_r13));
    });
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 30);
    \u0275\u0275listener("click", function DmogFormViewComponent_ng_template_4_Template_a_click_3_listener() {
      const item_r13 = \u0275\u0275restoreView(_r11).item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDmoEdit(item_r13));
    });
    \u0275\u0275element(4, "i", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.readonly);
  }
}
var DmogFormViewComponent = class _DmogFormViewComponent {
  set dmog(dmog) {
    this._dmog = dmog;
  }
  get dmog() {
    return this._dmog;
  }
  set readonly(readonly) {
    this._readonly = readonly;
  }
  get readonly() {
    return this._readonly;
  }
  constructor(dmApi, msg, toast, dm) {
    this.dmApi = dmApi;
    this.msg = msg;
    this.toast = toast;
    this.dm = dm;
    this.saveDmog = new Subject();
    this.componentActive = true;
    this.IsJsonStaticGridDmo = false;
    this.formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    this._readonly = false;
  }
  ngOnInit() {
    this.onSaveDmog();
  }
  onSaveDmog() {
    const message = "Don't close the window while saving";
    const title = "Save in progress";
    this.saveDmog.pipe(takeWhile((_) => this.componentActive), switchMap((_) => {
      let activeToast = this.toast.findDuplicate(title, message, true, false);
      if (activeToast) {
        this.toast.remove(activeToast.toastId);
      }
      activeToast = this.toast.info(message, title, {
        timeOut: 1e4,
        tapToDismiss: false
      });
      return this.dmApi.saveObject(this.dmog.unreference(), this.dmog.root, true).pipe(catchError((_2) => of(false)), finalize(() => this.toast.remove(activeToast.toastId)));
    })).subscribe();
  }
  onDrop(e) {
    return __async(this, null, function* () {
      if (this.IsJsonStaticGridDmo) {
        this.toast.warning("More than one json static grid not allowed.", "Warning");
        return;
      }
      const from2 = e.previousContainer;
      const to = e.container;
      const fromIdx = e.previousIndex;
      const toIdx = e.currentIndex;
      if (from2.id === "form-controls") {
        const uiData = from2.data[fromIdx];
        const res = yield this.getDmoDetails(uiData);
        if (!res) {
          return;
        }
        transferArrayItem([res], to.data, 0, toIdx);
        const dmoId = yield this.saveDmoDetails(res);
        if (!dmoId) {
          to.data = to.data.filter((dmo) => dmo.dmoName !== res.dmoName);
        }
        res.dmoId = +dmoId;
        this.dmApi.reorderChildren(this.dmog).subscribe(() => this.dm.getBM());
        return;
      } else if (from2.id !== to.id) {
        transferArrayItem(from2.data, to.data, fromIdx, toIdx);
      } else {
        if (from2.id === to.id && fromIdx === toIdx)
          return;
        moveItemInArray(from2.data, fromIdx, toIdx);
      }
      this.dmApi.reorderChildren(this.dmog).subscribe();
    });
  }
  onDmoEdit(data) {
    return __async(this, null, function* () {
      const uiData = DMOS[data.type];
      const res = yield this.getDmoDetails(uiData, data);
      if (res) {
        const dmoId = yield this.saveDmoDetails(res);
        if (dmoId) {
          res.dmoId = +dmoId;
          this.dmApi.reorderChildren(this.dmog).subscribe();
          this.toast.success("Data was saved successfully", "Success");
        } else {
          this.toast.warning("Data was not saved", "Warning");
        }
      }
    });
  }
  onDmoClone(data) {
    this.dmog.findDmoAndThen(data.dmoName, (info) => __async(this, null, function* () {
      if (!info)
        return;
      const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
      const rows = this.dmog.formData.components;
      const col = rows[r].columns[c];
      const cloned = this.dmog.childrenMap[data.dmoName].clone();
      const newComponents = col.components.slice(0, d + 1).concat(cloned.asObject(), col.components.slice(d + 1));
      col.components = newComponents;
      this.dmog.addChild(cloned);
      const uiData = DMOS[data.type];
      const res = yield this.getDmoDetails(uiData, cloned);
      if (!res) {
        this.dmog.removeChild(cloned.dmoName);
        col.components = newComponents.filter((dmo) => dmo.dmoName !== cloned.dmoName);
        return;
      }
      const cloneInfo = __spreadProps(__spreadValues({}, info), { dmoIndex: info.dmoIndex + 1 });
      this.replaceDmo(cloneInfo, res);
      const dmoId = yield this.saveDmoDetails(res);
      if (dmoId) {
        res.dmoId = +dmoId;
        this.dmApi.reorderChildren(this.dmog).subscribe();
        this.toast.success("Data was saved successfully", "Success");
      } else {
        this.toast.warning("Data was not saved", "Warning");
      }
    }));
  }
  onDmoDelete(data) {
    const modal = this.msg.showMessage("Warning", {
      header: "Delete DMO",
      body: `Are you sure you want to delete DMO ${data.dmoName} ?`,
      btnText: "Delete",
      checkboxText: "Yes, delete this object",
      isDelete: true,
      isNewDesign: true,
      callback: () => {
        this.dmApi.deleteDmo(data.dmoId.toString(), this.dmog.root.BMId.toString()).subscribe((success) => success && this.dm.getBM());
      }
    });
  }
  getDmoDetails(_0) {
    return __async(this, arguments, function* (uiData, data = {}) {
      const newObject = Object.keys(data).length === 0 || data.fromApi === false;
      const modal = this.msg.showComponent(DmoDetailComponent, {
        newObject,
        data,
        uiData,
        parent: this._dmog,
        readonly: this.readonly
      });
      return yield modal.result;
    });
  }
  saveDmoDetails(res) {
    return __async(this, null, function* () {
      const originalDmoData = this._dmog.findDmoAndThen(res.dmoName, (info) => this.replaceDmo(info, res));
      try {
        return yield this.dmApi.saveObject(res, this.dmog.root).toPromise();
      } catch (error) {
        if (originalDmoData) {
          this._dmog.findDmoAndThen(originalDmoData.dmo.dmoName, (info) => this.replaceDmo(info, originalDmoData.dmo));
        }
      }
      return false;
    });
  }
  replaceDmo(info, replaceWith) {
    if (!info)
      return;
    const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
    const rows = this.dmog.formData.components;
    let newComponents = rows[r].columns[c].components.slice();
    if (replaceWith === null) {
      newComponents = newComponents.filter((dmo) => dmo.dmoName !== info.dmo.dmoName);
      this.dmog.removeChild(info.dmo.dmoName);
    } else {
      newComponents[d] = replaceWith;
      this.dmog.addChild(new DMComponent(replaceWith, this.dmog));
    }
    rows[r].columns[c].components = newComponents;
  }
  openConditionPopup(item) {
    return __async(this, null, function* () {
      const uiData = this.formsControls.find((c) => c.type === item.type);
      const parent = this._dmog.childrenMap[item.dmoName];
      const modal = this.msg.showComponent(DmoConditionComponent, {
        uiData,
        parent,
        readonly: this.readonly
      });
      const res = yield modal.result;
      if (!res) {
        return;
      }
      const { payload, deletedConditions } = res;
      this.dmApi.saveDmoCondition(payload).subscribe((success) => {
        if (success) {
          const deleteCondition = (id) => this.dmApi.deleteDmoCondition(id).pipe(filter((success2) => success2), map((_) => id));
          const actualDeletingConditions = (0, import_lodash2.intersectionBy)(parent.conditions, deletedConditions, "Id");
          from(actualDeletingConditions.map((c) => deleteCondition(c.Id))).pipe(mergeAll(), finalize(() => parent.conditions = payload.dmoCondition[parent.guid].Condition)).subscribe();
        }
      });
    });
  }
  checkIsStaticJsonGrid(item) {
    if (this.dmog) {
      if (this.dmog?.Children?.length > 0 && this.dmog?.Type == "JSONStaticGrid")
        this.IsJsonStaticGridDmo = true;
      else
        this.IsJsonStaticGridDmo = false;
      if (item.type != "jsonstaticgrid" && this.dmog.Type == "JSONStaticGrid")
        return true;
      else if (this.dmog?.Type != "JSONStaticGrid" && item.type == "jsonstaticgrid")
        return true;
    }
    return false;
  }
  ngOnDestroy() {
    this.componentActive = false;
  }
  static {
    this.\u0275fac = function DmogFormViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmogFormViewComponent)(\u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(DataModelerComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DmogFormViewComponent, selectors: [["app-dmog-form-view"]], inputs: { dmog: "dmog", readonly: "readonly" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [["itemActions", ""], ["controlList", "cdkDropList"], [1, "form-view", "row"], ["cdkDropListGroup", "", 1, "col-sm-12"], ["class", "col-sm-3 leftcol", 4, "ngIf"], ["class", "dmo-columns", 3, "class", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "leftcol"], [1, "leftlayoutdmotyp"], [1, "leftlayout1"], ["for", "ex2", 1, "input-label"], [1, "formcomponents"], ["id", "form-controls", "cdkDropList", "", 1, "list-group", "drag-list", 3, "cdkDropListData"], ["class", "list-group-item list-group-item-action list-group-item-success drag-list-item", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "list-group-item", "list-group-item-action", "list-group-item-success", "drag-list-item", 3, "cdkDragDisabled"], [2, "margin-right", "5px"], [1, "dmo-columns", 3, "mouseenter", "mouseleave"], [4, "ngFor", "ngForOf"], ["class", "drag-container", 3, "span-2", 4, "ngIf"], [1, "drag-container"], ["cdkDropList", "", 1, "col-sm-12", "list-group", "drag-list", 3, "cdkDropListDropped", "cdkDropListData"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["style", "position: relative;", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-info"], [2, "position", "relative", 3, "mouseenter", "mouseleave"], [1, "item-actions", "dmo-actions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkDrag", "", 1, "drag-list-item", 3, "dmo", "cdkDragDisabled"], [4, "ngIf"], ["ngbTooltip", "Conditions", 1, "item-action", 3, "click"], [1, "fa", "fa-cogs"], ["ngbTooltip", "Edit", 1, "item-action", 3, "click"], [1, "fa", "fa-wrench"], ["ngbTooltip", "Remove", 1, "item-action", 2, "color", "rgb(187, 53, 53)", 3, "click"], [1, "fa", "fa-trash-alt"], ["ngbTooltip", "Clone", 1, "item-action", 3, "click"], [1, "fa", "fa-copy"]], template: function DmogFormViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, DmogFormViewComponent_div_2_Template, 9, 2, "div", 4)(3, DmogFormViewComponent_div_3_Template, 2, 3, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, DmogFormViewComponent_ng_template_4_Template, 5, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.readonly);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.dmog == null ? null : ctx.dmog.formData == null ? null : ctx.dmog.formData.components);
      }
    }, dependencies: [
      CdkDropListGroup,
      NgIf,
      CdkDropList,
      NgForOf,
      CdkDrag,
      NgTemplateOutlet,
      DmoComponent,
      NgbTooltip
    ], styles: ["\n\n.form-view[_ngcontent-%COMP%] {\n  position: relative;\n}\n.leftlayout[_ngcontent-%COMP%] {\n  height: 30px;\n  border: 1px solid #ddd;\n  margin-left: 7px;\n  padding: 4px;\n  font-size: 13px;\n  margin-right: 7px;\n}\n.leftlayoutdmotyp[_ngcontent-%COMP%] {\n  height: 415px;\n  border: 1px solid #ddd;\n  margin-right: 5px;\n  padding: 6px;\n  font-size: 15px;\n}\n.leftlayout1[_ngcontent-%COMP%] {\n  height: 30px;\n  border-bottom: 1px solid #ddd;\n  font-size: 13px;\n}\n.formcomponents[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 358px;\n  overflow-x: hidden;\n}\ndiv.scroll-list[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 70vh;\n}\n.close[_ngcontent-%COMP%] {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close[_ngcontent-%COMP%]:hover, \n.close[_ngcontent-%COMP%]:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  background-color: transparent !important;\n  padding: 7px !important;\n  cursor: pointer;\n}\n.formarea[_ngcontent-%COMP%] {\n  visibility: visible;\n  position: relative;\n  min-height: 450px;\n  padding: 10px;\n  border: dotted 2px #e8e8e8;\n  float: right;\n}\n.col[_ngcontent-%COMP%] {\n  float: left;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  text-align: center;\n  font-size: 12px;\n}\n.alert-info[_ngcontent-%COMP%] {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  margin: 10px 20px;\n}\n.dmo-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5px;\n  margin-bottom: 5px;\n}\n.dmo-columns[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  align-self: self-start;\n}\n.dmo-columns[_ngcontent-%COMP%]   .span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.cdk-drop-list[_ngcontent-%COMP%]:not(#form-controls) {\n  border: 2px dotted #e8e8e8;\n  transform: translate3d(0, 0, 0);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n}\n.drag-list-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.drag-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: move;\n  background: white;\n  padding: 0 20px;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drop-list-receiving[_ngcontent-%COMP%]:not(#form-controls) {\n  border: #4c9e00 dotted 2px;\n}\n.item-actions[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  top: -22px;\n  display: none;\n}\n.item-actions.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.item-actions.dmo-actions[_ngcontent-%COMP%] {\n  top: 0;\n}\n.item-action[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 1001;\n  margin: 2px 2px 0 0;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 13px;\n  text-align: center;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: move;\n  background: white;\n  padding: 0 20px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.leftcol[_ngcontent-%COMP%] {\n  min-height: 550px;\n  float: left;\n  padding: 0;\n  position: sticky;\n  top: 0;\n}\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=dmog-form-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DmogFormViewComponent, { className: "DmogFormViewComponent", filePath: "src\\app\\admin\\data-modeler\\components\\dmog-form-view\\dmog-form-view.component.ts", lineNumber: 44 });
})();

// src/app/admin/data-modeler/data-modeler.component.ts
function DataModelerComponent_ng_container_0_ng_container_12_app_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tab", 17);
  }
  if (rf & 2) {
    const bmog_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", bmog_r3.Name)("data", bmog_r3)("active", bmog_r3.id === (ctx_r1.bm.selectedBMOG == null ? null : ctx_r1.bm.selectedBMOG.id))("shared", bmog_r3.shared);
  }
}
function DataModelerComponent_ng_container_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataModelerComponent_ng_container_0_ng_container_12_app_tab_1_Template, 1, 4, "app-tab", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bmogId_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bm.childrenMap[bmogId_r4]);
  }
}
function DataModelerComponent_ng_container_0_app_tab_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tab", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", true)("data", ctx_r1.bm);
  }
}
function DataModelerComponent_ng_container_0_ng_container_15_app_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tab", 17);
  }
  if (rf & 2) {
    const bmo_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", bmo_r5.DisplayName)("data", bmo_r5)("active", bmo_r5.id === (ctx_r1.bm.selectedBMO == null ? null : ctx_r1.bm.selectedBMO.id))("shared", bmo_r5.shared);
  }
}
function DataModelerComponent_ng_container_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataModelerComponent_ng_container_0_ng_container_15_app_tab_1_Template, 1, 4, "app-tab", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bmoId_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bm.selectedBMOG.childrenMap[bmoId_r6]);
  }
}
function DataModelerComponent_ng_container_0_app_tab_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tab", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", true)("data", ctx_r1.bm.selectedBMOG);
  }
}
function DataModelerComponent_ng_container_0_ng_container_18_app_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tab", 17);
  }
  if (rf & 2) {
    const dmog_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", dmog_r7.DisplayName)("data", dmog_r7)("active", dmog_r7.id === (ctx_r1.bm.selectedDMOG == null ? null : ctx_r1.bm.selectedDMOG.id))("shared", ctx_r1.bm.selectedBMO.shared || dmog_r7.shared);
  }
}
function DataModelerComponent_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataModelerComponent_ng_container_0_ng_container_18_app_tab_1_Template, 1, 4, "app-tab", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dmogId_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bm.selectedBMO.childrenMap[dmogId_r8]);
  }
}
function DataModelerComponent_ng_container_0_app_tab_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tab", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", true)("data", ctx_r1.bm.selectedBMO);
  }
}
function DataModelerComponent_ng_container_0_app_dmog_form_view_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-dmog-form-view", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("dmog", ctx_r1.bm.selectedDMOG)("readonly", ctx_r1.bm.published || (ctx_r1.bm.selectedDMOG == null ? null : ctx_r1.bm.selectedDMOG.shared) || (ctx_r1.bm.selectedBMO == null ? null : ctx_r1.bm.selectedBMO.shared));
  }
}
function DataModelerComponent_ng_container_0_img_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.contactsImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DataModelerComponent_ng_container_0_img_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.attachmentsImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DataModelerComponent_ng_container_0_img_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.documentsImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DataModelerComponent_ng_container_0_img_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.subprocessImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DataModelerComponent_ng_container_0_img_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.childprocessImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DataModelerComponent_ng_container_0_img_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.sharedChildProcessImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function DataModelerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "a", 2);
    \u0275\u0275listener("click", function DataModelerComponent_ng_container_0_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.routeBack());
    });
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Back");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(6, "app-dm-header");
    \u0275\u0275elementStart(7, "app-dm-menu", 4);
    \u0275\u0275listener("modeChange", function DataModelerComponent_ng_container_0_Template_app_dm_menu_modeChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMode($event));
    })("newVersion", function DataModelerComponent_ng_container_0_Template_app_dm_menu_newVersion_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNewVersion());
    })("generateXml", function DataModelerComponent_ng_container_0_Template_app_dm_menu_generateXml_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGenerateXML());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-dm-breadcrumbs", 5);
    \u0275\u0275listener("select", function DataModelerComponent_ng_container_0_Template_app_dm_breadcrumbs_select_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openObjectDetails($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "section")(10, "div", 6)(11, "app-tabs", 7);
    \u0275\u0275listener("tabSelected", function DataModelerComponent_ng_container_0_Template_app_tabs_tabSelected_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabSelect($event));
    })("tabClicked", function DataModelerComponent_ng_container_0_Template_app_tabs_tabClicked_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabClick($event));
    })("tabEdit", function DataModelerComponent_ng_container_0_Template_app_tabs_tabEdit_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabEdit($event));
    })("tabRemove", function DataModelerComponent_ng_container_0_Template_app_tabs_tabRemove_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabRemove($event));
    });
    \u0275\u0275template(12, DataModelerComponent_ng_container_0_ng_container_12_Template, 2, 1, "ng-container", 8)(13, DataModelerComponent_ng_container_0_app_tab_13_Template, 1, 2, "app-tab", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-tabs", 10);
    \u0275\u0275listener("tabSelected", function DataModelerComponent_ng_container_0_Template_app_tabs_tabSelected_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabSelect($event));
    })("tabClicked", function DataModelerComponent_ng_container_0_Template_app_tabs_tabClicked_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabClick($event));
    })("tabEdit", function DataModelerComponent_ng_container_0_Template_app_tabs_tabEdit_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabEdit($event));
    })("tabRemove", function DataModelerComponent_ng_container_0_Template_app_tabs_tabRemove_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabRemove($event));
    })("dropped", function DataModelerComponent_ng_container_0_Template_app_tabs_dropped_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dropped($event, ctx_r1.bm == null ? null : ctx_r1.bm.selectedBMOG));
    });
    \u0275\u0275template(15, DataModelerComponent_ng_container_0_ng_container_15_Template, 2, 1, "ng-container", 8)(16, DataModelerComponent_ng_container_0_app_tab_16_Template, 1, 2, "app-tab", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-tabs", 10);
    \u0275\u0275listener("tabSelected", function DataModelerComponent_ng_container_0_Template_app_tabs_tabSelected_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabSelect($event));
    })("tabClicked", function DataModelerComponent_ng_container_0_Template_app_tabs_tabClicked_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabClick($event));
    })("tabEdit", function DataModelerComponent_ng_container_0_Template_app_tabs_tabEdit_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabEdit($event));
    })("tabRemove", function DataModelerComponent_ng_container_0_Template_app_tabs_tabRemove_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabRemove($event));
    })("dropped", function DataModelerComponent_ng_container_0_Template_app_tabs_dropped_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dropped($event, ctx_r1.bm == null ? null : ctx_r1.bm.selectedBMO));
    });
    \u0275\u0275template(18, DataModelerComponent_ng_container_0_ng_container_18_Template, 2, 1, "ng-container", 8)(19, DataModelerComponent_ng_container_0_app_tab_19_Template, 1, 2, "app-tab", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "section", 13);
    \u0275\u0275template(21, DataModelerComponent_ng_container_0_app_dmog_form_view_21_Template, 1, 2, "app-dmog-form-view", 14)(22, DataModelerComponent_ng_container_0_img_22_Template, 1, 1, "img", 15)(23, DataModelerComponent_ng_container_0_img_23_Template, 1, 1, "img", 15)(24, DataModelerComponent_ng_container_0_img_24_Template, 1, 1, "img", 15)(25, DataModelerComponent_ng_container_0_img_25_Template, 1, 1, "img", 15)(26, DataModelerComponent_ng_container_0_img_26_Template, 1, 1, "img", 15)(27, DataModelerComponent_ng_container_0_img_27_Template, 1, 1, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.backsImageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("mode", ctx_r1.bm.Mode);
    \u0275\u0275advance();
    \u0275\u0275property("bm", ctx_r1.bm);
    \u0275\u0275advance(3);
    \u0275\u0275property("actions", ctx_r1.tabActions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bm == null ? null : ctx_r1.bm.Children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.bm.published);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r1.tabActions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bm == null ? null : ctx_r1.bm.selectedBMOG == null ? null : ctx_r1.bm.selectedBMOG.Children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.bm == null ? null : ctx_r1.bm.Children.length) > 0 && !ctx_r1.bm.published);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r1.tabActions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bm == null ? null : ctx_r1.bm.selectedBMO == null ? null : ctx_r1.bm.selectedBMO.Children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allowNewDMOG);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.bm.selectedBMO == null ? null : ctx_r1.bm.selectedBMO.BmoType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Forms");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Contacts");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Attachments");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Documents");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Subprocess");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "ChildProcess");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "SharedChildProcess");
  }
}
var DataModelerComponent = class _DataModelerComponent {
  get tabActions() {
    return { edit: true, delete: !this.bm.published };
  }
  get allowNewDMOG() {
    return this.bm?.selectedBMOG?.Children?.length && this.bm?.selectedBMO?.BmoType === "Forms" && !this.bm.selectedBMO?.shared && !this.bm.published;
  }
  constructor(dialog, route, msg, toast, dmApi, formViewApi) {
    this.dialog = dialog;
    this.route = route;
    this.msg = msg;
    this.toast = toast;
    this.dmApi = dmApi;
    this.formViewApi = formViewApi;
    this.encryptedBMId = this.route.snapshot.queryParams.BMID;
    this.contactsImageUrl = UtilService.getUrlForImage("/assets/styles/images/contacts-bmo.jpg");
    this.attachmentsImageUrl = UtilService.getUrlForImage("/assets/styles/images/attachments-bmo.jpg");
    this.documentsImageUrl = UtilService.getUrlForImage("/assets/styles/images/documents-bmo.jpg");
    this.subprocessImageUrl = UtilService.getUrlForImage("/assets/styles/images/subprocess-bmo.jpg");
    this.childprocessImageUrl = UtilService.getUrlForImage("/assets/styles/images/childprocess-bmo.jpg");
    this.sharedChildProcessImageUrl = UtilService.getUrlForImage("/assets/styles/images/shared-child-process-bmo.jpg");
    this.backsImageUrl = UtilService.getUrlForImage("/assets/styles/images/back-icon-black.png");
  }
  ngOnInit() {
    this.getBM();
  }
  getBM() {
    const { ProcessName, Name, Version } = this.route.snapshot.data?.bm;
    this.dmApi.getData(ProcessName, Name, Version).subscribe((bm) => this.bm = bm);
  }
  onTabClick(tab) {
    if (tab.disabled) {
      this.getObjectDetails(tab.data);
    }
  }
  onTabSelect(tab) {
    this.bm.updateSelectedObjects(tab.data);
  }
  onTabEdit(tab) {
    this.openObjectDetails(tab.data);
  }
  openObjectDetails(obj) {
    this.getObjectDetails(obj.parent, obj);
  }
  onTabRemove(tab) {
    const obj = tab.data;
    let className = "";
    if (obj instanceof BM) {
      className = "BM";
    } else if (obj instanceof BMOG) {
      className = "View";
    } else if (obj instanceof BMO) {
      className = "Section";
    } else if (obj instanceof DMOG) {
      className = "Card";
    }
    const name = obj?.DisplayName || obj.Name;
    this.msg.showMessage("Warning", {
      header: `Delete ${className}`,
      body: `Are you sure you want to delete ${name}?`,
      btnText: "Delete",
      checkboxText: "Yes, delete this object",
      isDelete: true,
      isNewDesign: true,
      callback: () => this.deleteObject(obj)
    });
  }
  deleteObject(obj) {
    const parent = obj.parent;
    const idx = parent.Children.findIndex((id) => id === obj.id);
    parent.removeChild(obj.id);
    const rollback = () => parent.addChildAt(obj, idx);
    this.dmApi.deleteObject(obj, this.bm).subscribe({
      next: (success) => !success ? rollback() : this.getBM(),
      error: (_) => rollback()
    });
  }
  onNewVersion() {
    this.msg.showMessage("Warning", {
      header: "New Version",
      body: "Are you sure you want to create new version?",
      callback: () => {
        this.dmApi.createBMVersion(this.encryptedBMId).subscribe((message) => {
          this.toast.success(message);
        });
      },
      btnText: "Create New Version",
      isConfirmation: true
    });
  }
  dropped(e, parent) {
    moveItemInArray(parent.Children, e.from, e.to);
    this.dmApi.reorderChildren(parent).subscribe({
      next: (_) => this.getBM(),
      error: (_) => moveItemInArray(parent.Children, e.to, e.from)
    });
  }
  onGenerateXML() {
    this.formViewApi.generateXML("bm", this.bm.ProcessName, this.bm.Version).subscribe((success) => {
      success && this.msg.showMessage("Success", { body: "JSON generated successfully." });
    }, (error) => {
      this.showErrorModal();
    });
  }
  showErrorModal() {
    const dialogRef = this.dialog.open(GenerateXmlComponent, {
      width: "656px",
      disableClose: true,
      panelClass: "custom-dialog-container",
      data: {
        type: "bm",
        processName: this.bm.ProcessName,
        verNo: this.bm.Version
      }
    });
    dialogRef.componentInstance.closeModal.subscribe(() => {
      dialogRef.close();
    });
  }
  changeMode(mode) {
    if (mode === this.bm.Mode)
      return;
    this.dmApi.changeMode(this.bm.BMId, mode).subscribe((success) => {
      if (success) {
        this.bm.update({ Mode: mode });
      }
    });
  }
  getObjectDetails(_0) {
    return __async(this, arguments, function* (parent, data = {}) {
      const newObject = Object.keys(data).length === 0;
      const { component } = this.determineClassAndComponent(parent, data);
      const modal = this.msg.showComponent(component, { data, parent, newObject });
      const res = yield modal.result;
      if (!res)
        return;
      if (parent === void 0 && data instanceof BM) {
        this.saveBMDetails(res);
        return;
      }
      if (parent instanceof BM) {
        const saveSharedDmogs = (id) => {
          if (res.shared.bmoIds === "-1" && !newObject) {
            return EMPTY;
          }
          const bmogIdToSend = res.shared.bmogId === "-1" ? id : res.shared.bmogId;
          return this.dmApi.saveSharedBmos(bmogIdToSend, res.shared.bmoIds);
        };
        this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs);
      } else if (parent instanceof BMOG) {
        const saveSharedDmogs = (id) => {
          if (res.shared.dmogIds === "-1" && !newObject) {
            return EMPTY;
          }
          const bmoIdToSend = res.shared.bmoid === "-1" ? id : res.shared.bmoid;
          return this.dmApi.saveSharedDmogs(bmoIdToSend, res.shared.dmogIds);
        };
        this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs);
      } else if (parent instanceof BMO) {
        const saveSharedDmos = (id) => {
          if (res.shared.leftDMOGuids === "-1" && res.shared.rightDMOGuids === "-1" && !newObject) {
            return EMPTY;
          }
          return this.dmApi.saveSharedDmos(res.shared);
        };
        this.saveObjectDetails(parent, data, res.payload, saveSharedDmos);
      } else {
        this.saveObjectDetails(parent, data, res);
      }
    });
  }
  routeBack() {
    window.history.back();
  }
  saveBMDetails(payload) {
    this.dmApi.saveBM(payload).subscribe((success) => {
      if (success) {
        this.bm.update(payload);
      }
    });
  }
  saveObjectDetails(parent, obj = {}, payload, finalize2) {
    const newObject = Object.keys(obj).length === 0;
    const original = __spreadValues({}, obj);
    if (newObject) {
      const { childClass } = this.determineClassAndComponent(parent);
      const child = new childClass(payload, parent);
      parent.addChild(child);
    } else {
      obj.update(payload);
    }
    const rollback = () => {
      if (newObject) {
        parent.removeChild(payload.id);
      } else {
        obj.update(original);
      }
    };
    this.dmApi.saveObject(payload, this.bm).pipe(switchMap((id) => {
      if (finalize2) {
        return finalize2(id).pipe(map(() => id));
      }
      return of(id);
    })).subscribe({
      next: (success) => {
        if (!success)
          rollback();
        else {
          this.bm.cacheObjectId(payload);
        }
      },
      error: (_) => rollback(),
      complete: () => this.getBM()
    });
  }
  determineClassAndComponent(parent, data = {}) {
    let component;
    let childClass;
    if (parent instanceof BM) {
      component = BmogDetailComponent;
      childClass = BMOG;
    } else if (parent instanceof BMOG) {
      component = BmoDetailComponent;
      childClass = BMO;
    } else if (parent instanceof BMO) {
      component = DmogDetailComponent;
      childClass = DMOG;
    } else if (parent === void 0 && data instanceof BM) {
      component = BmDetailComponent;
      childClass = void 0;
    }
    return { component, childClass };
  }
  static {
    this.\u0275fac = function DataModelerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataModelerComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(FormViewApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataModelerComponent, selectors: [["app-data-modeler"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "breadcrumbs", "p-1", "mb-1", 2, "background-color", "#fff"], [3, "click"], ["width", "20px", 2, "filter", "var(--plx-app-list-icon-filter)", 3, "src"], [3, "modeChange", "newVersion", "generateXml", "mode"], [3, "select", "bm"], [1, "col-sm-12"], [3, "tabSelected", "tabClicked", "tabEdit", "tabRemove", "actions"], [4, "ngFor", "ngForOf"], ["title", "Add BMOG", 3, "disabled", "data", 4, "ngIf"], [3, "tabSelected", "tabClicked", "tabEdit", "tabRemove", "dropped", "actions"], ["title", "Add BMO", 3, "disabled", "data", 4, "ngIf"], ["title", "Add DMOG", 3, "disabled", "data", 4, "ngIf"], ["aria-label", "Modal heading text content", "role", "document", 1, "modal-body", 3, "ngSwitch"], [3, "dmog", "readonly", 4, "ngSwitchCase"], ["width", "100%", "alt", "Contacts", 3, "src", 4, "ngSwitchCase"], [3, "title", "data", "active", "shared", 4, "ngIf"], [3, "title", "data", "active", "shared"], ["title", "Add BMOG", 3, "disabled", "data"], ["title", "Add BMO", 3, "disabled", "data"], ["title", "Add DMOG", 3, "disabled", "data"], [3, "dmog", "readonly"], ["width", "100%", "alt", "Contacts", 3, "src"]], template: function DataModelerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DataModelerComponent_ng_container_0_Template, 28, 20, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.bm);
      }
    }, dependencies: [
      NgIf,
      DmHeaderComponent,
      DmMenuComponent,
      DmBreadcrumbsComponent,
      TabsComponent,
      NgForOf,
      TabComponent,
      NgSwitch,
      NgSwitchCase,
      DmogFormViewComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataModelerComponent, { className: "DataModelerComponent", filePath: "src\\app\\admin\\data-modeler\\data-modeler.component.ts", lineNumber: 44 });
})();

// src/app/admin/data-modeler/data-modeler-routing.module.ts
var routes = [{ path: "", component: DataModelerComponent }];
var DataModelerRoutingModule = class _DataModelerRoutingModule {
  static {
    this.\u0275fac = function DataModelerRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataModelerRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DataModelerRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/data-modeler/data-modeler.module.ts
var DataModelerModule = class _DataModelerModule {
  static {
    this.\u0275fac = function DataModelerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataModelerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DataModelerModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      DataModelerRoutingModule,
      SharedModule,
      ObjectControlModule,
      DataModelerComponent,
      BmDetailComponent,
      DmoComponent,
      DmoDetailComponent,
      BmogDetailComponent,
      BmoDetailComponent,
      DmogDetailComponent,
      DmoConditionComponent,
      DmogFormViewComponent
    ] });
  }
};
export {
  DataModelerModule
};
//# sourceMappingURL=chunk-RLQITBFO.js.map
