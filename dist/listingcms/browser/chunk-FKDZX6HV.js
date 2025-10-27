import {
  CustomSelectComponent,
  QuillEditorComponent,
  QuillModule,
  require_lodash
} from "./chunk-BQKXR4UC.js";
import {
  CdkDrag,
  CdkDropList,
  moveItemInArray
} from "./chunk-WACMUXJB.js";
import {
  FocusMonitor,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  UniqueSelectionDispatcher,
  _MatInternalFormField
} from "./chunk-5GIB77BJ.js";
import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormArrayName,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  ɵNgNoValidate
} from "./chunk-L2L6ECIJ.js";
import {
  ANIMATION_MODULE_TYPE,
  AsyncPipe,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgZone,
  Optional,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  isObservable,
  numberAttribute,
  setClassMetadata,
  take,
  takeWhile,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
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
  ɵɵhostProperty,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";
import {
  __objRest,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/admin/CommonService/editor-config.service.ts
var EditorConfigService = class _EditorConfigService {
  constructor() {
    this.toolbarOptions = {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        // Text styles
        ["blockquote", "code-block"],
        // Block styles
        [{ "header": 1 }, { "header": 2 }],
        // Headers
        [{ "list": "ordered" }, { "list": "bullet" }],
        // Lists
        [{ "indent": "-1" }, { "indent": "+1" }],
        // Indent
        [{ "script": "sub" }, { "script": "super" }],
        // Scripts
        [{ "direction": "rtl" }],
        // Text direction
        [{ "size": ["small", false, "large", "huge"] }],
        // Font sizes
        [{ "header": [1, 2, 3, 4, 5, 6, false] }],
        // More headers
        [{ "color": [] }, { "background": [] }],
        // Colors
        [{ "font": [] }],
        // Font family
        [{ "align": [] }],
        // Text alignment
        ["link"],
        // Embeds -- 'image' , 'video'
        ["clean"]
        // Clear formatting
      ],
      placeholder: null
    };
  }
  /** Get the toolbar configuration */
  getToolbarOptions() {
    return this.toolbarOptions;
  }
  static {
    this.\u0275fac = function EditorConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditorConfigService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EditorConfigService, factory: _EditorConfigService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/lib/list/list-config.model.ts
var ListColumnType;
(function(ListColumnType2) {
  ListColumnType2["Text"] = "text";
  ListColumnType2["Number"] = "number";
  ListColumnType2["Date"] = "date";
  ListColumnType2["Dropdown"] = "dropdown";
  ListColumnType2["File"] = "file";
})(ListColumnType || (ListColumnType = {}));

// src/lib/reactive-prompt/reactive-prompt.ts
var ReactivePrompt = class {
  constructor(data) {
    this.data = data;
    this.prompt = new Subject();
    this.result$ = this.prompt.pipe(take(1));
  }
  confirm() {
    this.prompt.next(this.data);
  }
  cancel() {
    this.prompt.next(null);
  }
};

// src/app/admin/lib/list/list.component.ts
var import_lodash = __toESM(require_lodash());
function ListComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("click", function ListComponent_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteSelected());
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\xA0Delete");
    \u0275\u0275elementEnd()();
  }
}
function ListComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 16)(1, "label", 17);
    \u0275\u0275element(2, "input", 18)(3, "i", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r1.selectAll);
  }
}
function ListComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r3.displayValue, " ");
  }
}
function ListComponent_ng_container_10_td_2_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 17)(1, "input", 26);
    \u0275\u0275listener("change", function ListComponent_ng_container_10_td_2_label_1_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isAllSelected(i_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_container_10_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275template(1, ListComponent_ng_container_10_td_2_label_1_Template, 3, 0, "label", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.list.controls.at(i_r6).get("checked"));
  }
}
function ListComponent_ng_container_10_td_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ListComponent_ng_container_10_td_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ListComponent_ng_container_10_td_3_ng_template_4_i_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 31);
    \u0275\u0275listener("click", function ListComponent_ng_container_10_td_3_ng_template_4_i_0_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const i_r6 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit(i_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_container_10_td_3_ng_template_4_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 32);
    \u0275\u0275listener("click", function ListComponent_ng_container_10_td_3_ng_template_4_i_1_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r6 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete(i_r6, false));
    });
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_container_10_td_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListComponent_ng_container_10_td_3_ng_template_4_i_0_Template, 1, 0, "i", 29)(1, ListComponent_ng_container_10_td_3_ng_template_4_i_1_Template, 1, 0, "i", 30);
  }
  if (rf & 2) {
    const actions_r9 = \u0275\u0275nextContext().ngIf;
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", actions_r9.edit && ctx_r1.isReadonly(i_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", actions_r9.delete && ctx_r1.list.controls.at(i_r6).get("deletable"));
  }
}
function ListComponent_ng_container_10_td_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 33);
    \u0275\u0275listener("click", function ListComponent_ng_container_10_td_3_ng_template_6_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const i_r6 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdate(i_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "i", 34);
    \u0275\u0275listener("click", function ListComponent_ng_container_10_td_3_ng_template_6_Template_i_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const i_r6 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel(i_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function ListComponent_ng_container_10_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20)(1, "div", 27);
    \u0275\u0275template(2, ListComponent_ng_container_10_td_3_ng_container_2_Template, 1, 0, "ng-container", 28)(3, ListComponent_ng_container_10_td_3_ng_container_3_Template, 1, 0, "ng-container", 28)(4, ListComponent_ng_container_10_td_3_ng_template_4_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, ListComponent_ng_container_10_td_3_ng_template_6_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const actions_r9 = ctx.ngIf;
    const defActions_r11 = \u0275\u0275reference(5);
    const altActions_r12 = \u0275\u0275reference(7);
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", actions_r9.edit || actions_r9.delete)("ngIfThen", defActions_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", actions_r9.edit && !ctx_r1.isReadonly(i_r6))("ngIfThen", altActions_r12);
  }
}
function ListComponent_ng_container_10_td_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 38);
    \u0275\u0275listener("click", function ListComponent_ng_container_10_td_4_ng_container_2_Template_input_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const column_r14 = \u0275\u0275nextContext().$implicit;
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDownload(i_r6, column_r14.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext().$implicit;
    const control_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", control_r15 == null ? null : control_r15.value[column_r14.key])("formControlName", column_r14.key);
  }
}
function ListComponent_ng_container_10_td_4_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext(2).$implicit;
    const control_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", control_r15 == null ? null : control_r15.value[column_r14.key]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (control_r15 == null ? null : control_r15.value[column_r14.key] == null ? null : control_r15.value[column_r14.key].value) || (control_r15 == null ? null : control_r15.value[column_r14.key] == null ? null : control_r15.value[column_r14.key].key) || (control_r15 == null ? null : control_r15.value[column_r14.key]), " ");
  }
}
function ListComponent_ng_container_10_td_4_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-select", 41);
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r15 = \u0275\u0275nextContext();
    const control_r15 = ctx_r15.$implicit;
    const i_r6 = ctx_r15.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("parentForm", control_r15)("controlName", column_r14.key)("items", ctx_r1.defaultValues[column_r14.key])("readonly", ctx_r1.isReadonly(i_r6));
  }
}
function ListComponent_ng_container_10_td_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ListComponent_ng_container_10_td_4_ng_container_3_span_1_Template, 2, 2, "span", 39)(2, ListComponent_ng_container_10_td_4_ng_container_3_ng_template_2_Template, 1, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const showDropdown_r17 = \u0275\u0275reference(3);
    const i_r6 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isReadonly(i_r6))("ngIfElse", showDropdown_r17);
  }
}
function ListComponent_ng_container_10_td_4_ng_container_4_input_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 44);
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("formControlName", column_r14.key);
  }
}
function ListComponent_ng_container_10_td_4_ng_container_4_input_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 45);
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r15 = \u0275\u0275nextContext();
    const control_r15 = ctx_r15.$implicit;
    const i_r6 = ctx_r15.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", control_r15 == null ? null : control_r15.value[column_r14.key])("formControlName", column_r14.key)("readonly", ctx_r1.isReadonly(i_r6));
  }
}
function ListComponent_ng_container_10_td_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ListComponent_ng_container_10_td_4_ng_container_4_input_1_Template, 1, 1, "input", 42)(2, ListComponent_ng_container_10_td_4_ng_container_4_input_2_Template, 1, 3, "input", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r14.asControl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !column_r14.asControl);
  }
}
function ListComponent_ng_container_10_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275elementContainerStart(1, 35);
    \u0275\u0275template(2, ListComponent_ng_container_10_td_4_ng_container_2_Template, 2, 2, "ng-container", 36)(3, ListComponent_ng_container_10_td_4_ng_container_3_Template, 4, 2, "ng-container", 36)(4, ListComponent_ng_container_10_td_4_ng_container_4_Template, 3, 2, "ng-container", 37);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", column_r14.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "file");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "dropdown");
  }
}
function ListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 22);
    \u0275\u0275listener("cdkDragStarted", function ListComponent_ng_container_10_Template_tr_cdkDragStarted_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragStart($event));
    });
    \u0275\u0275template(2, ListComponent_ng_container_10_td_2_Template, 2, 1, "td", 23)(3, ListComponent_ng_container_10_td_3_Template, 8, 4, "td", 9)(4, ListComponent_ng_container_10_td_4_Template, 5, 3, "td", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroupName", i_r6)("cdkDragDisabled", ctx_r1.canDrag());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.checkbox);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.actions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.config.columns);
  }
}
function ListComponent_form_11_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 16)(1, "label", 17);
    \u0275\u0275element(2, "input", 51)(3, "i", 19);
    \u0275\u0275elementEnd()();
  }
}
function ListComponent_form_11_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_form_11_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r19.displayValue, " ");
  }
}
function ListComponent_form_11_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 24);
  }
}
function ListComponent_form_11_td_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 53);
    \u0275\u0275elementStart(2, "input", 54);
    \u0275\u0275listener("change", function ListComponent_form_11_td_13_ng_container_2_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r20);
      const column_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fileHandler($event.target.files, column_r21.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", column_r21.key);
  }
}
function ListComponent_form_11_td_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-select", 55);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("parentForm", ctx_r1.newItem)("controlName", column_r21.key)("items", ctx_r1.defaultValues[column_r21.key]);
  }
}
function ListComponent_form_11_td_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 56);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.newItem == null ? null : ctx_r1.newItem.value[column_r21.key])("formControlName", column_r21.key)("placeholder", column_r21.placeholder || "");
  }
}
function ListComponent_form_11_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275elementContainerStart(1, 35);
    \u0275\u0275template(2, ListComponent_form_11_td_13_ng_container_2_Template, 3, 1, "ng-container", 36)(3, ListComponent_form_11_td_13_ng_container_3_Template, 2, 3, "ng-container", 36)(4, ListComponent_form_11_td_13_ng_container_4_Template, 2, 3, "ng-container", 37);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", column_r21.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "file");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "dropdown");
  }
}
function ListComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 46);
    \u0275\u0275listener("ngSubmit", function ListComponent_form_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAdd());
    });
    \u0275\u0275elementStart(1, "table", 47)(2, "thead", 48)(3, "tr");
    \u0275\u0275template(4, ListComponent_form_11_td_4_Template, 4, 0, "td", 8)(5, ListComponent_form_11_td_5_Template, 2, 0, "td", 9)(6, ListComponent_form_11_td_6_Template, 2, 1, "td", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tbody")(8, "tr");
    \u0275\u0275template(9, ListComponent_form_11_td_9_Template, 1, 0, "td", 23);
    \u0275\u0275elementStart(10, "td", 20)(11, "div", 27)(12, "i", 49);
    \u0275\u0275listener("click", function ListComponent_form_11_Template_i_click_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAdd());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ListComponent_form_11_td_13_Template, 5, 3, "td", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.newItem);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.config.checkbox);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.actions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.config.columns);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.config.checkbox);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.config.columns);
  }
}
var ListComponent = class _ListComponent {
  constructor() {
    this.withPrompt = false;
    this.beforeDelete = new EventEmitter();
    this.itemDeleted = new EventEmitter();
    this.fileUpload = new EventEmitter();
    this.fileDownload = new EventEmitter();
    this.selectAll = new UntypedFormControl(false);
    this.valueBeforeEdit = {};
    this.controlsReadonly = [];
    this.checkedlst = [];
    this.componentActive = true;
    this.isEditMode = false;
    this.bodyElement = document.body;
    this.defaultValues = {};
  }
  get list() {
    return this.parentForm.get(this.controlName);
  }
  get someSelected() {
    return this.config?.checkbox ? this.list?.controls?.findIndex((group) => group.get("checked")?.value) : -1;
  }
  ngOnInit() {
    this.config.columns.forEach((col) => this.valueBeforeEdit[col.key] = null);
    this.controlsReadonly = this.list.controls.map((_) => true);
    this.newItem = this.toFormGroup();
    if (this.config.checkbox) {
      this.selectAll.valueChanges.pipe(takeWhile((_) => this.componentActive)).subscribe((selected) => this.list.controls.forEach((group) => group.get("checked")?.patchValue(selected)));
    }
    this.handleDefaultValues();
  }
  handleDefaultValues() {
    Object.entries(this.config.defaultValues || {}).forEach(([key, v]) => {
      this.defaultValues[key] = v;
      if (isObservable(v)) {
        const col = this.config.columns.find((c) => c.key === key);
        if (col.type === ListColumnType.Dropdown) {
          this.defaultValues[key] = [];
        }
        v.subscribe((res) => this.defaultValues[key] = res);
      }
    });
  }
  onAdd() {
    if (this.newItem.valid) {
      const value = (0, import_lodash.cloneDeep)(this.newItem.value);
      this.list.push(this.toFormGroup(value));
      this.controlsReadonly.push(true);
      this.newItem.reset();
    }
  }
  onEdit(index) {
    this.isEditMode = true;
    this.valueBeforeEdit = this.list.at(index).value;
    this.config.columns.forEach((col) => {
      if (col.type === ListColumnType.Dropdown) {
        const val = this.valueBeforeEdit[col.key];
        const controlVal = val;
        this.list.at(index).get(col.key).patchValue(controlVal);
      }
    });
    this.controlsReadonly[index] = false;
  }
  onCancel(index) {
    this.isEditMode = false;
    this.controlsReadonly[index] = true;
    this.list.at(index).patchValue(this.valueBeforeEdit);
  }
  onUpdate(index) {
    const group = this.list.at(index);
    if (group.valid) {
      this.controlsReadonly[index] = true;
    }
    this.isEditMode = false;
  }
  onDownload(index, controlName) {
    const filename = this.list.at(index).get(controlName).value;
    this.fileDownload.emit(filename);
  }
  fileHandler(files, controlName) {
    const file = files.item(0);
    this.newItem.get(controlName).patchValue(file.name, { emitEvent: true });
    this.fileUpload.emit(file);
  }
  isAllSelected() {
    this.checkedlst = [];
    for (let i = 0; i < this.list.controls.length; i++) {
      if (this.list.at(i).value["checked"]) {
        this.checkedlst.push(this.list.at(i).value);
      }
    }
    if (this.checkedlst.length === this.list.controls.length) {
      this.selectAll = new UntypedFormControl(true);
      this.newItem = this.toFormGroup();
      if (this.config.checkbox) {
        this.selectAll.valueChanges.pipe(takeWhile((_) => this.componentActive)).subscribe((selected) => this.list.controls.forEach((group) => group.get("checked")?.patchValue(selected)));
      }
    } else {
      this.selectAll = new UntypedFormControl(false);
      this.newItem = this.toFormGroup();
      if (this.config.checkbox) {
        this.selectAll.valueChanges.pipe(takeWhile((_) => this.componentActive)).subscribe((selected) => this.list.controls.forEach((group) => group.get("checked")?.patchValue(selected)));
      }
    }
  }
  onDelete(index, ignorePrompt = true) {
    const run = () => {
      let item = this.list.at(index).value;
      if (item.checked) {
        const _a = item, { checked } = _a, rest = __objRest(_a, ["checked"]);
        item = rest;
      }
      this.itemDeleted.emit(item);
      this.list.removeAt(index);
      this.controlsReadonly = this.controlsReadonly.filter((_, i) => i !== index);
      if (this.list.controls.length === 0) {
        this.selectAll.patchValue(false);
      }
    };
    if (this.withPrompt && !ignorePrompt) {
      const prompt = new ReactivePrompt(index);
      this.beforeDelete.emit(prompt);
      prompt.result$.subscribe((res) => res !== null && run());
    } else {
      run();
    }
  }
  onDeleteSelected() {
    const run = () => {
      while (this.someSelected !== -1) {
        this.onDelete(this.someSelected);
      }
    };
    if (this.withPrompt) {
      const prompt = new ReactivePrompt(this.someSelected);
      this.beforeDelete.emit(prompt);
      prompt.result$.subscribe((res) => res !== null && run());
    } else {
      run();
    }
  }
  isReadonly(index) {
    return this.controlsReadonly[index] ?? true;
  }
  toFormGroup(value) {
    const group = {};
    if (this.config.checkbox) {
      group["checked"] = new UntypedFormControl(this.selectAll.value);
    }
    if (this.config.actions?.delete) {
      group["deletable"] = new UntypedFormControl();
    }
    this.config.columns.forEach(({ key, validators }) => {
      group[key] = new UntypedFormControl(value && value[key] || "", validators ? validators : []);
    });
    return new UntypedFormGroup(group);
  }
  ngOnDestroy() {
    this.componentActive = false;
  }
  dragStart(event) {
    this.bodyElement.classList.add("inheritCursors");
    this.bodyElement.style.cursor = "move";
  }
  drop(event) {
    this.bodyElement.classList.remove("inheritCursors");
    this.bodyElement.style.cursor = "unset";
    moveItemInArray(this.list.controls, event.previousIndex, event.currentIndex);
    moveItemInArray(this.list.value, event.previousIndex, event.currentIndex);
  }
  canDrag() {
    return this.isEditMode;
  }
  static {
    this.\u0275fac = function ListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["app-list"]], inputs: { parentForm: "parentForm", controlName: "controlName", config: "config", withPrompt: "withPrompt" }, outputs: { beforeDelete: "beforeDelete", itemDeleted: "itemDeleted", fileUpload: "fileUpload", fileDownload: "fileDownload" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [["defActions", ""], ["altActions", ""], ["showDropdown", ""], [1, "actions", "deleteContainer", "d-flex", "justify-content-end", "mt-1", "mb-1"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "table", "table-bordered"], [1, "thead-light"], ["scope", "col", "class", "checkbox-cell", 4, "ngIf"], ["class", "actions-cell", 4, "ngIf"], ["scope", "col", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 3, "cdkDropListDropped", "formArrayName"], [4, "ngFor", "ngForOf"], ["class", "new", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["role", "img", "aria-label", "Delete", 1, "fas", "fa-trash-alt"], ["scope", "col", 1, "checkbox-cell"], [1, "wf-inline-checkbox", "ml-2"], ["type", "checkbox", 3, "formControl"], [1, "skin"], [1, "actions-cell"], ["scope", "col"], ["cdkDrag", "", 3, "cdkDragStarted", "formGroupName", "cdkDragDisabled"], ["class", "checkbox-cell", 4, "ngIf"], [1, "checkbox-cell"], ["class", "wf-inline-checkbox ml-2", 4, "ngIf"], ["type", "checkbox", "formControlName", "checked", 3, "change"], [1, "actions"], [4, "ngIf", "ngIfThen"], ["class", "fas fa-edit", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "fas fa-trash-alt", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete", 1, "fas", "fa-trash-alt", 3, "click"], ["title", "Update", 1, "fas", "fa-save", 3, "click"], ["title", "Cancel", 1, "fas", "fa-times", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["readonly", "", 1, "download", 3, "click", "title", "formControlName"], [3, "title", 4, "ngIf", "ngIfElse"], [3, "title"], [3, "parentForm", "controlName", "items", "readonly"], ["type", "text", "class", "form-control", 3, "formControlName", 4, "ngIf"], ["type", "text", "class", "form-control", 3, "title", "formControlName", "readonly", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControlName"], ["type", "text", 1, "form-control", 3, "title", "formControlName", "readonly"], [1, "new", 3, "ngSubmit", "formGroup"], [1, "table", 2, "margin-top", "10px"], [1, "thead-light", 2, "display", "none"], ["title", "Add", 1, "fas", "fa-plus", "ml-2", 3, "click"], ["style", "padding: 0", 4, "ngFor", "ngForOf"], ["type", "checkbox"], [2, "padding", "0"], ["type", "text", "hidden", "", 3, "formControlName"], ["type", "file", 3, "change"], [3, "parentForm", "controlName", "items"], ["type", "text", 1, "form-control", 3, "title", "formControlName", "placeholder"]], template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275template(1, ListComponent_a_1_Template, 4, 0, "a", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 5)(3, "table", 6)(4, "thead", 7)(5, "tr");
        \u0275\u0275template(6, ListComponent_td_6_Template, 4, 1, "td", 8)(7, ListComponent_td_7_Template, 2, 0, "td", 9)(8, ListComponent_td_8_Template, 2, 1, "td", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "tbody", 11);
        \u0275\u0275listener("cdkDropListDropped", function ListComponent_Template_tbody_cdkDropListDropped_9_listener($event) {
          return ctx.drop($event);
        });
        \u0275\u0275template(10, ListComponent_ng_container_10_Template, 5, 5, "ng-container", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, ListComponent_form_11_Template, 14, 6, "form", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.config.actions == null ? null : ctx.config.actions.delete) && ctx.someSelected > -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.parentForm);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.config.checkbox);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.config.actions);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.config.columns);
        \u0275\u0275advance();
        \u0275\u0275property("formArrayName", ctx.controlName);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.list.controls);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.config.actions == null ? null : ctx.config.actions.add);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName,
      NgForOf,
      CdkDropList,
      CdkDrag,
      NgSwitch,
      NgSwitchCase,
      CustomSelectComponent,
      NgSwitchDefault
    ], styles: ["\n\ntd[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 0 0.75rem;\n}\ninput[_ngcontent-%COMP%]:read-only {\n  background-color: transparent;\n  border-color: transparent;\n  outline-color: transparent;\n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 28px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.actions[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n.table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  margin-bottom: 0;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 10px;\n  font-weight: bold;\n  color: #4D4D51;\n  border-bottom-width: 0px;\n}\n.new[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.new[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.checkbox-cell[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.download[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.download[_ngcontent-%COMP%]:hover {\n  color: #226398;\n}\n.action[_ngcontent-%COMP%] {\n  width: 8%;\n}\n.deleteContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4d4d51;\n  text-decoration: none;\n}\n.deleteContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src\\app\\admin\\lib\\list\\list.component.ts", lineNumber: 28 });
})();

// node_modules/@angular/material/fesm2022/radio.mjs
var _c0 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var nextUniqueId = 0;
var MatRadioChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    this._value = null;
    this._name = `mat-radio-group-${nextUniqueId++}`;
    this._selected = null;
    this._isInitialized = false;
    this._labelPosition = "after";
    this._disabled = false;
    this._required = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this.onTouched = () => {
    };
    this.change = new EventEmitter();
    this._disabledInteractive = false;
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static {
    this.\u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioGroup)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRadioGroup,
      selectors: [["mat-radio-group"]],
      contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
        }
      },
      hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
      inputs: {
        color: "color",
        name: "name",
        labelPosition: "labelPosition",
        value: "value",
        selected: "selected",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: _MatRadioGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(radioGroup, _elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _defaultOptions, tabIndex) {
    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._defaultOptions = _defaultOptions;
    this._ngZone = inject(NgZone);
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    this.id = this._uniqueId;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.change = new EventEmitter();
    this._checked = false;
    this._value = null;
    this._removeUniqueSelectionListener = () => {
    };
    this._injector = inject(Injector);
    this._onInputClick = (event) => {
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._disabledInteractive = _defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._inputElement.nativeElement.addEventListener("click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._inputElement?.nativeElement.removeEventListener("click", this._onInputClick);
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static {
    this.\u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioButton)(\u0275\u0275directiveInject(MAT_RADIO_GROUP, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(UniqueSelectionDispatcher), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_RADIO_DEFAULT_OPTIONS, 8), \u0275\u0275injectAttribute("tabindex"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatRadioButton,
      selectors: [["mat-radio-button"]],
      viewQuery: function MatRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-radio-button"],
      hostVars: 19,
      hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
            return ctx._inputElement.nativeElement.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        id: "id",
        name: "name",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        checked: [2, "checked", "checked", booleanAttribute],
        value: "value",
        labelPosition: "labelPosition",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioButton"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c2,
      decls: 13,
      vars: 17,
      consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
      template: function MatRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
          \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTouchTargetClick($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "input", 5, 1);
          \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInputInteraction($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 6);
          \u0275\u0275element(7, "div", 7)(8, "div", 8);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "div", 9);
          \u0275\u0275element(10, "div", 10);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(11, "label", 11);
          \u0275\u0275projection(12);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          \u0275\u0275advance(5);
          \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
          \u0275\u0275advance(2);
          \u0275\u0275property("for", ctx.inputId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" #formField>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>
    <input #input class="mdc-radio__native-control" type="radio"
           [id]="inputId"
           [checked]="checked"
           [disabled]="disabled && !disabledInteractive"
           [attr.name]="name"
           [attr.value]="value"
           [required]="required"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
           (change)="_onInputInteraction($event)">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div mat-ripple class="mat-radio-ripple mat-mdc-focus-indicator"
         [matRippleTrigger]="_rippleTrigger.nativeElement"
         [matRippleDisabled]="_isRippleDisabled()"
         [matRippleCentered]="true">
      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>
    </div>
  </div>
  <label class="mdc-label" [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}']
    }]
  }], () => [{
    type: MatRadioGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_GROUP]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: UniqueSelectionDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static {
    this.\u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatRadioModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c02 = ["switch"];
var _c12 = ["*"];
function MatSlideToggle_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSlideToggle),
  multi: true
};
var MatSlideToggleChange = class {
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var nextUniqueId2 = 0;
var MatSlideToggle = class _MatSlideToggle {
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(_elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, animationMode) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this.defaults = defaults;
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._validatorOnChange = () => {
    };
    this._checked = false;
    this.name = null;
    this.labelPosition = "after";
    this.ariaLabel = null;
    this.ariaLabelledby = null;
    this.disabled = false;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.change = new EventEmitter();
    this.toggleChange = new EventEmitter();
    this.tabIndex = parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this._noopAnimations = animationMode === "NoopAnimations";
    this.id = this._uniqueId = `mat-mdc-slide-toggle-${++nextUniqueId2}`;
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static {
    this.\u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSlideToggle)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSlideToggle,
      selectors: [["mat-slide-toggle"]],
      viewQuery: function MatSlideToggle_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c02, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-slide-toggle"],
      hostVars: 13,
      hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
          \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
          \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        name: "name",
        id: "id",
        labelPosition: "labelPosition",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        required: [2, "required", "required", booleanAttribute],
        color: "color",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        checked: [2, "checked", "checked", booleanAttribute],
        hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change",
        toggleChange: "toggleChange"
      },
      exportAs: ["matSlideToggle"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: _MatSlideToggle,
        multi: true
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c12,
      decls: 13,
      vars: 27,
      consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
      template: function MatSlideToggle_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
          \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handleClick());
          });
          \u0275\u0275element(3, "span", 3);
          \u0275\u0275elementStart(4, "span", 4)(5, "span", 5)(6, "span", 6);
          \u0275\u0275element(7, "span", 7);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "span", 8);
          \u0275\u0275element(9, "span", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275template(10, MatSlideToggle_Conditional_10_Template, 5, 0, "span", 10);
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(11, "label", 11);
          \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_11_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView($event.stopPropagation());
          });
          \u0275\u0275projection(12);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          const switch_r2 = \u0275\u0275reference(2);
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance();
          \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
          \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
          \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          \u0275\u0275advance(8);
          \u0275\u0275property("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
          \u0275\u0275advance();
          \u0275\u0275conditional(!ctx.hideIcon ? 10 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("for", ctx.buttonId);
          \u0275\u0275attribute("id", ctx._labelId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height);border-radius:var(--mdc-switch-track-shape, var(--mat-app-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width);border-color:var(--mat-switch-track-outline-color, var(--mat-app-outline))}.cdk-high-contrast-active .mdc-switch__track::before,.cdk-high-contrast-active .mdc-switch__track::after{border-color:currentColor}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width);border-color:var(--mat-switch-selected-track-outline-color)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-app-on-surface))}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-app-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-app-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-app-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-app-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-app-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-app-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-app-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-app-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-app-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-app-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-app-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size);height:var(--mat-switch-unselected-handle-size);margin:var(--mat-switch-unselected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size);height:var(--mat-switch-selected-handle-size);margin:var(--mat-switch-selected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size);height:var(--mat-switch-with-icon-handle-size)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size);height:var(--mat-switch-pressed-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.cdk-high-contrast-active .mdc-switch__handle::before,.cdk-high-contrast-active .mdc-switch__handle::after{border-color:currentColor}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-app-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-app-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-app-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-app-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-app-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-app-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-app-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-app-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-app-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-app-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size);height:var(--mdc-switch-state-layer-size)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-app-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size);fill:var(--mdc-switch-unselected-icon-color, var(--mat-app-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-app-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size);fill:var(--mdc-switch-selected-icon-color, var(--mat-app-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-app-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-mdc-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height);border-radius:var(--mdc-switch-track-shape, var(--mat-app-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width);border-color:var(--mat-switch-track-outline-color, var(--mat-app-outline))}.cdk-high-contrast-active .mdc-switch__track::before,.cdk-high-contrast-active .mdc-switch__track::after{border-color:currentColor}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width);border-color:var(--mat-switch-selected-track-outline-color)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-app-on-surface))}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-app-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-app-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-app-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-app-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-app-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-app-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-app-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-app-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-app-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-app-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-app-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size);height:var(--mat-switch-unselected-handle-size);margin:var(--mat-switch-unselected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size);height:var(--mat-switch-selected-handle-size);margin:var(--mat-switch-selected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size);height:var(--mat-switch-with-icon-handle-size)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size);height:var(--mat-switch-pressed-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.cdk-high-contrast-active .mdc-switch__handle::before,.cdk-high-contrast-active .mdc-switch__handle::after{border-color:currentColor}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-app-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-app-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-app-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-app-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-app-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-app-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-app-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-app-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-app-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-app-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size);height:var(--mdc-switch-state-layer-size)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-app-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size);fill:var(--mdc-switch-unselected-icon-color, var(--mat-app-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-app-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size);fill:var(--mdc-switch-selected-icon-color, var(--mat-app-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-app-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatSlideToggleRequiredValidator),
  multi: true
};
var MatSlideToggleRequiredValidator = class _MatSlideToggleRequiredValidator extends CheckboxRequiredValidator {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatSlideToggleRequiredValidator_BaseFactory;
      return function MatSlideToggleRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275MatSlideToggleRequiredValidator_BaseFactory || (\u0275MatSlideToggleRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MatSlideToggleRequiredValidator)))(__ngFactoryType__ || _MatSlideToggleRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSlideToggleRequiredValidator,
      selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
      providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR],
      standalone: true
    }]
  }], null, null);
})();
var _MatSlideToggleRequiredValidatorModule = class __MatSlideToggleRequiredValidatorModule {
  static {
    this.\u0275fac = function _MatSlideToggleRequiredValidatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __MatSlideToggleRequiredValidatorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: __MatSlideToggleRequiredValidatorModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatSlideToggleRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggleRequiredValidator],
      exports: [MatSlideToggleRequiredValidator]
    }]
  }], null, null);
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static {
    this.\u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSlideToggleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatSlideToggleModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/admin/lib/object-control/object-control.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
var _c13 = (a0) => ({ "background-color": a0 });
var _c22 = (a0) => ({ toolbar: a0 });
function ObjectControlComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.config.hint);
  }
}
function ObjectControlComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ObjectControlComponent_ng_container_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 14);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r0.config.placeholder)("formControlName", ctx_r0.config.name)("readonly", ctx_r0.config.readonly)("ngClass", \u0275\u0275pureFunction1(6, _c03, ctx_r0.submitted && group_r2.controls[ctx_r0.config.name].errors || group_r2.controls[ctx_r0.config.name].errors && !group_r2.controls[ctx_r0.config.name].errors.required))("ngStyle", \u0275\u0275pureFunction1(8, _c13, ctx_r0.config.readonly ? "#e9ecef" : "white"));
    \u0275\u0275attribute("disabled", ctx_r0.config.readonly ? true : null);
  }
}
function ObjectControlComponent_ng_container_6_textarea_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "textarea", 15);
    \u0275\u0275text(1, "    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", ctx_r0.config.name)("ngClass", \u0275\u0275pureFunction1(2, _c03, ctx_r0.submitted && group_r2.controls[ctx_r0.config.name].errors || group_r2.controls[ctx_r0.config.name].errors && !group_r2.controls[ctx_r0.config.name].errors.required));
  }
}
function ObjectControlComponent_ng_container_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "quill-editor", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("modules", \u0275\u0275pureFunction1(2, _c22, ctx_r0.editorConfig.toolbar))("formControlName", ctx_r0.config.name);
  }
}
function ObjectControlComponent_ng_container_6_mat_radio_group_7_mat_radio_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", (option_r3 == null ? null : option_r3.key) || option_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((option_r3 == null ? null : option_r3.value) || option_r3);
  }
}
function ObjectControlComponent_ng_container_6_mat_radio_group_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 18);
    \u0275\u0275template(1, ObjectControlComponent_ng_container_6_mat_radio_group_7_mat_radio_button_1_Template, 3, 2, "mat-radio-button", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formControlName", ctx_r0.config.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx_r0.config.options));
  }
}
function ObjectControlComponent_ng_container_6_mat_slide_toggle_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slide-toggle", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formControlName", ctx_r0.config.name);
  }
}
function ObjectControlComponent_ng_container_6_ng_container_9_app_custom_select_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-select", 24);
  }
  if (rf & 2) {
    const options_r4 = ctx.ngIf;
    const group_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("parentForm", group_r2)("controlName", ctx_r0.config.name)("items", options_r4)("groupBy", ctx_r0.config.groupOptionsBy || "")("multiple", ctx_r0.config.multiple)("readonly", ctx_r0.config.readonly)("fixedHeight", !ctx_r0.config.multiple)("submitted", ctx_r0.submitted);
  }
}
function ObjectControlComponent_ng_container_6_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ObjectControlComponent_ng_container_6_ng_container_9_app_custom_select_1_Template, 1, 8, "app-custom-select", 23);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r0.config.options));
  }
}
function ObjectControlComponent_ng_container_6_app_list_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-list", 25);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("parentForm", group_r2)("controlName", ctx_r0.config.name)("config", ctx_r0.config.config);
  }
}
function ObjectControlComponent_ng_container_6_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const errors_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(errors_r5.message);
  }
}
function ObjectControlComponent_ng_container_6_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const errors_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("More than ", errors_r5.maxlength.requiredLength, " characters entered");
  }
}
function ObjectControlComponent_ng_container_6_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const errors_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Less than ", errors_r5.minlength.requiredLength, " characters entered");
  }
}
function ObjectControlComponent_ng_container_6_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Invalid characters entered ");
    \u0275\u0275elementEnd();
  }
}
function ObjectControlComponent_ng_container_6_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function ObjectControlComponent_ng_container_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, ObjectControlComponent_ng_container_6_div_11_div_1_Template, 2, 1, "div", 3)(2, ObjectControlComponent_ng_container_6_div_11_div_2_Template, 2, 1, "div", 3)(3, ObjectControlComponent_ng_container_6_div_11_div_3_Template, 2, 1, "div", 3)(4, ObjectControlComponent_ng_container_6_div_11_div_4_Template, 2, 0, "div", 3)(5, ObjectControlComponent_ng_container_6_div_11_div_5_Template, 2, 0, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const errors_r5 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", errors_r5.nameExists);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", errors_r5.maxlength);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", errors_r5.minlength);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", errors_r5.pattern);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitted && errors_r5.required);
  }
}
function ObjectControlComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275template(2, ObjectControlComponent_ng_container_6_input_2_Template, 1, 10, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 0);
    \u0275\u0275template(4, ObjectControlComponent_ng_container_6_textarea_4_Template, 2, 4, "textarea", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ObjectControlComponent_ng_container_6_div_5_Template, 2, 4, "div", 9);
    \u0275\u0275elementStart(6, "div", 0);
    \u0275\u0275template(7, ObjectControlComponent_ng_container_6_mat_radio_group_7_Template, 3, 4, "mat-radio-group", 10)(8, ObjectControlComponent_ng_container_6_mat_slide_toggle_8_Template, 1, 1, "mat-slide-toggle", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ObjectControlComponent_ng_container_6_ng_container_9_Template, 3, 3, "ng-container", 3)(10, ObjectControlComponent_ng_container_6_app_list_10_Template, 1, 3, "app-list", 12)(11, ObjectControlComponent_ng_container_6_div_11_Template, 6, 5, "div", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", group_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "text");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", group_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "rich" && ctx_r0.config.name);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", group_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "radio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "switch");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "dropdown");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.type === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r2.controls[ctx_r0.config.name].errors);
  }
}
var ObjectControlComponent = class _ObjectControlComponent {
  constructor(editorConfigService) {
    this.editorConfigService = editorConfigService;
    this.submitted = false;
  }
  ngOnInit() {
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
  static {
    this.\u0275fac = function ObjectControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObjectControlComponent)(\u0275\u0275directiveInject(EditorConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectControlComponent, selectors: [["app-object-control"]], hostVars: 2, hostBindings: function ObjectControlComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap((ctx.config == null ? null : ctx.config.class) || "span-6");
      }
    }, inputs: { config: "config", parentForm: "parentForm", submitted: "submitted" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["class", "fa fa-question-circle", 3, "title", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [4, "ngIf"], [1, "fa", "fa-question-circle", 3, "title"], [2, "color", "red"], [1, "form-group", 3, "formGroup"], ["class", "form-control", "type", "text", 3, "placeholder", "formControlName", "readonly", "ngClass", "ngStyle", 4, "ngIf"], ["class", "form-control", "rows", "5", 3, "formControlName", "ngClass", 4, "ngIf"], ["class", "Ql-container", 4, "ngIf"], ["class", "radio-group", 3, "formControlName", 4, "ngIf"], [3, "formControlName", 4, "ngIf"], [3, "parentForm", "controlName", "config", 4, "ngIf"], ["class", "invalid-feedback", "style", "display: block;", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "placeholder", "formControlName", "readonly", "ngClass", "ngStyle"], ["rows", "5", 1, "form-control", 3, "formControlName", "ngClass"], [1, "Ql-container"], [1, "Ql-InsideContainer", 3, "modules", "formControlName"], [1, "radio-group", 3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "font-size", "12px"], [3, "formControlName"], [3, "parentForm", "controlName", "items", "groupBy", "multiple", "readonly", "fixedHeight", "submitted", 4, "ngIf"], [3, "parentForm", "controlName", "items", "groupBy", "multiple", "readonly", "fixedHeight", "submitted"], [3, "parentForm", "controlName", "config"], [1, "invalid-feedback", 2, "display", "block"]], template: function ObjectControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "label");
        \u0275\u0275text(2);
        \u0275\u0275template(3, ObjectControlComponent_i_3_Template, 1, 1, "i", 1)(4, ObjectControlComponent_span_4_Template, 2, 0, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "br");
        \u0275\u0275template(6, ObjectControlComponent_ng_container_6_Template, 12, 11, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.parentForm);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.config.label || ctx.config.name, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.config.hint);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.config.required);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.config.group || ctx.parentForm);
      }
    }, dependencies: [
      QuillModule,
      QuillEditorComponent,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgIf,
      NgClass,
      NgStyle,
      MatRadioGroup,
      NgForOf,
      MatRadioButton,
      MatSlideToggle,
      CustomSelectComponent,
      ListComponent,
      AsyncPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  margin: 0 !important;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: -0.2rem;\n}\n/*# sourceMappingURL=object-control.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectControlComponent, { className: "ObjectControlComponent", filePath: "src\\app\\admin\\lib\\object-control\\object-control.component.ts", lineNumber: 38 });
})();

export {
  EditorConfigService,
  ListColumnType,
  ListComponent,
  MatRadioButton,
  MatRadioModule,
  MatSlideToggleModule,
  ObjectControlComponent
};
//# sourceMappingURL=chunk-FKDZX6HV.js.map
