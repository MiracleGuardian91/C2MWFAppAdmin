import {
  BaseHttpService
} from "./chunk-CDVZX7RG.js";
import {
  BpmnService,
  DiagramService,
  SharedData,
  WorkflowDetailComponent,
  getTriggerType,
  require_guid
} from "./chunk-I4JDELKK.js";
import "./chunk-IZC66MGR.js";
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
import "./chunk-AZ2LSUZA.js";
import {
  ElementType,
  EventDef,
  WorkflowApiService,
  getEventDef,
  isStateType
} from "./chunk-RF35KVRW.js";
import "./chunk-FKDZX6HV.js";
import "./chunk-74OCJGBF.js";
import {
  GenericGridComponent,
  QuillModule,
  constructId
} from "./chunk-BQKXR4UC.js";
import {
  WfRoleGridComponent
} from "./chunk-NTG2Y36S.js";
import "./chunk-ILK2XUKT.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import {
  Directionality,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  Platform,
  RippleState
} from "./chunk-5GIB77BJ.js";
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
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule,
  NgSelectOption,
  NgbActiveModal,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ToastrService,
  UntypedFormBuilder,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ANIMATION_MODULE_TYPE,
  ActivatedRoute,
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DecimalPipe,
  Directive,
  ElementRef,
  EventEmitter,
  HttpParams,
  Inject,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  Router,
  Subject,
  Title,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  firstValueFrom,
  forwardRef,
  inject,
  map,
  numberAttribute,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/ai-flow-builder/components/ai-diagram/ai-diagram.component.ts
var import_guid_typescript = __toESM(require_guid());

// node_modules/@angular/material/fesm2022/slider.mjs
var _c0 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275template(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  constructor(_cdr, _ngZone, _elementRef, _slider) {
    this._cdr = _cdr;
    this._ngZone = _ngZone;
    this._slider = _slider;
    this._isHovered = false;
    this._isActive = false;
    this._isValueIndicatorVisible = false;
    this._platform = inject(Platform);
    this._onPointerMove = (event) => {
      if (this._sliderInput._isFocused) {
        return;
      }
      const rect = this._hostElement.getBoundingClientRect();
      const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
      this._isHovered = isHovered;
      if (isHovered) {
        this._showHoverRipple();
      } else {
        this._hideRipple(this._hoverRippleRef);
      }
    };
    this._onMouseLeave = () => {
      this._isHovered = false;
      this._hideRipple(this._hoverRippleRef);
    };
    this._onFocus = () => {
      this._hideRipple(this._hoverRippleRef);
      this._showFocusRipple();
      this._hostElement.classList.add("mdc-slider__thumb--focused");
    };
    this._onBlur = () => {
      if (!this._isActive) {
        this._hideRipple(this._focusRippleRef);
      }
      if (this._isHovered) {
        this._showHoverRipple();
      }
      this._hostElement.classList.remove("mdc-slider__thumb--focused");
    };
    this._onDragStart = (event) => {
      if (event.button !== 0) {
        return;
      }
      this._isActive = true;
      this._showActiveRipple();
    };
    this._onDragEnd = () => {
      this._isActive = false;
      this._hideRipple(this._activeRippleRef);
      if (!this._sliderInput._isFocused) {
        this._hideRipple(this._focusRippleRef);
      }
      if (this._platform.SAFARI) {
        this._showHoverRipple();
      }
    };
    this._hostElement = _elementRef.nativeElement;
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input = this._sliderInputEl;
      input.addEventListener("pointermove", this._onPointerMove);
      input.addEventListener("pointerdown", this._onDragStart);
      input.addEventListener("pointerup", this._onDragEnd);
      input.addEventListener("pointerleave", this._onMouseLeave);
      input.addEventListener("focus", this._onFocus);
      input.addEventListener("blur", this._onBlur);
    });
  }
  ngOnDestroy() {
    const input = this._sliderInputEl;
    if (input) {
      input.removeEventListener("pointermove", this._onPointerMove);
      input.removeEventListener("pointerdown", this._onDragStart);
      input.removeEventListener("pointerup", this._onDragEnd);
      input.removeEventListener("pointerleave", this._onMouseLeave);
      input.removeEventListener("focus", this._onFocus);
      input.removeEventListener("blur", this._onBlur);
    }
  }
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static {
    this.\u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderVisualThumb)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MAT_SLIDER));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSliderVisualThumb,
      selectors: [["mat-slider-visual-thumb"]],
      viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(MatRipple, 5);
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
        }
      },
      hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
      inputs: {
        discrete: "discrete",
        thumbPosition: "thumbPosition",
        valueIndicatorText: "valueIndicatorText"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: _MatSliderVisualThumb
      }]), \u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 2,
      consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-mdc-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
      template: function MatSliderVisualThumb_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
          \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.discrete ? 0 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleDisabled", true);
        }
      },
      dependencies: [MatRipple],
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      standalone: true,
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-mdc-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDER]
    }]
  }], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  constructor(_ngZone, _cdr, _elementRef, _dir, _globalRippleOptions, animationMode) {
    this._ngZone = _ngZone;
    this._cdr = _cdr;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._globalRippleOptions = _globalRippleOptions;
    this._disabled = false;
    this._discrete = false;
    this.showTickMarks = false;
    this._min = 0;
    this.disableRipple = false;
    this._max = 100;
    this._step = 1;
    this.displayWith = (value) => `${value}`;
    this._rippleRadius = 24;
    this.startValueIndicatorText = "";
    this.endValueIndicatorText = "";
    this._isRange = false;
    this._isRtl = false;
    this._hasViewInitialized = false;
    this._tickMarkTrackWidth = 0;
    this._hasAnimation = false;
    this._resizeTimer = null;
    this._platform = inject(Platform);
    this._knobRadius = 8;
    this._thumbsOverlap = false;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
    this._isRtl = this._dir.value === "rtl";
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(_MatThumb.END);
    input._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    const translateX = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = this._cachedWidth * percentage - 6;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
    if (this._isRtl) {
      this._tickMarks.reverse();
    }
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0);
    let numInactive = Math.max(Math.round((this.max - value) / step), 0);
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static {
    this.\u0275fac = function MatSlider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSlider)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSlider,
      selectors: [["mat-slider"]],
      contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5);
          \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
        }
      },
      viewQuery: function MatSlider_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c2, 5);
          \u0275\u0275viewQuery(MAT_SLIDER_VISUAL_THUMB, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
        }
      },
      hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
      hostVars: 12,
      hostBindings: function MatSlider_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
          \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        disabled: [2, "disabled", "disabled", booleanAttribute],
        discrete: [2, "discrete", "discrete", booleanAttribute],
        showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
        min: [2, "min", "min", numberAttribute],
        color: "color",
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        max: [2, "max", "max", numberAttribute],
        step: [2, "step", "step", numberAttribute],
        displayWith: "displayWith"
      },
      exportAs: ["matSlider"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_SLIDER,
        useExisting: _MatSlider
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 5,
      consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
      template: function MatSlider_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
          \u0275\u0275elementStart(1, "div", 2);
          \u0275\u0275element(2, "div", 3);
          \u0275\u0275elementStart(3, "div", 4);
          \u0275\u0275element(4, "div", 5, 0);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275template(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
          \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
        }
        if (rf & 2) {
          \u0275\u0275advance(6);
          \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx._isRange ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
        }
      },
      dependencies: [MatSliderVisualThumb],
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mdc-slider-inactive-track-height)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mdc-slider-active-track-shape, var(--mat-app-corner-full));height:var(--mdc-slider-active-track-height);top:calc((var(--mdc-slider-inactive-track-height) - var(--mdc-slider-active-track-height))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mdc-slider-active-track-color, var(--mat-app-primary));border-top-width:var(--mdc-slider-active-track-height)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color, var(--mat-app-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mdc-slider-inactive-track-color, var(--mat-app-surface-variant));height:var(--mdc-slider-inactive-track-height);border-radius:var(--mdc-slider-inactive-track-shape, var(--mat-app-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color, var(--mat-app-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__track--inactive::before{border-color:CanvasText}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);transform:var(--mat-slider-value-indicator-container-transform)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;border-radius:4px;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom;opacity:1;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mdc-slider-label-container-color, var(--mat-app-primary));color:var(--mdc-slider-label-label-text-color, var(--mat-app-on-primary));width:var(--mat-slider-value-indicator-width);height:var(--mat-slider-value-indicator-height);padding:var(--mat-slider-value-indicator-padding);opacity:var(--mat-slider-value-indicator-opacity);border-radius:var(--mat-slider-value-indicator-border-radius)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display);border-top-color:var(--mdc-slider-label-container-color, var(--mat-app-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__value-indicator::after{border-color:CanvasText}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width);transform:var(--mat-slider-value-indicator-text-transform);font-family:var(--mdc-slider-label-label-text-font, var(--mat-app-label-medium-font));font-size:var(--mdc-slider-label-label-text-size, var(--mat-app-label-medium-size));font-weight:var(--mdc-slider-label-label-text-weight, var(--mat-app-label-medium-weight));line-height:var(--mdc-slider-label-label-text-line-height, var(--mat-app-label-medium-line-height));letter-spacing:var(--mdc-slider-label-label-text-tracking, var(--mat-app-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mdc-slider-handle-width);height:var(--mdc-slider-handle-height);border-width:calc(var(--mdc-slider-handle-height)/2) calc(var(--mdc-slider-handle-width)/2);box-shadow:var(--mdc-slider-handle-elevation, var(--mat-app-level1));background-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-radius:var(--mdc-slider-handle-shape, var(--mat-app-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface));border-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mdc-slider-with-overlap-handle-outline-color, var(--mat-app-on-primary));border-width:var(--mdc-slider-with-overlap-handle-outline-width)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mdc-slider-with-tick-marks-container-size);height:var(--mdc-slider-with-tick-marks-container-size);border-radius:var(--mdc-slider-with-tick-marks-container-shape, var(--mat-app-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-inactive-container-color, var(--mat-app-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-disabled-container-color, var(--mat-app-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mdc-slider-with-tick-marks-active-container-opacity);background-color:var(--mdc-slider-with-tick-marks-active-container-color, var(--mat-app-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-app-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color)}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-mdc-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-mdc-focus-indicator::before{content:""}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      standalone: true,
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mdc-slider-inactive-track-height)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mdc-slider-active-track-shape, var(--mat-app-corner-full));height:var(--mdc-slider-active-track-height);top:calc((var(--mdc-slider-inactive-track-height) - var(--mdc-slider-active-track-height))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mdc-slider-active-track-color, var(--mat-app-primary));border-top-width:var(--mdc-slider-active-track-height)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color, var(--mat-app-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mdc-slider-inactive-track-color, var(--mat-app-surface-variant));height:var(--mdc-slider-inactive-track-height);border-radius:var(--mdc-slider-inactive-track-shape, var(--mat-app-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color, var(--mat-app-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__track--inactive::before{border-color:CanvasText}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);transform:var(--mat-slider-value-indicator-container-transform)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;border-radius:4px;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom;opacity:1;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mdc-slider-label-container-color, var(--mat-app-primary));color:var(--mdc-slider-label-label-text-color, var(--mat-app-on-primary));width:var(--mat-slider-value-indicator-width);height:var(--mat-slider-value-indicator-height);padding:var(--mat-slider-value-indicator-padding);opacity:var(--mat-slider-value-indicator-opacity);border-radius:var(--mat-slider-value-indicator-border-radius)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display);border-top-color:var(--mdc-slider-label-container-color, var(--mat-app-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.cdk-high-contrast-active .mdc-slider__value-indicator::after{border-color:CanvasText}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width);transform:var(--mat-slider-value-indicator-text-transform);font-family:var(--mdc-slider-label-label-text-font, var(--mat-app-label-medium-font));font-size:var(--mdc-slider-label-label-text-size, var(--mat-app-label-medium-size));font-weight:var(--mdc-slider-label-label-text-weight, var(--mat-app-label-medium-weight));line-height:var(--mdc-slider-label-label-text-line-height, var(--mat-app-label-medium-line-height));letter-spacing:var(--mdc-slider-label-label-text-tracking, var(--mat-app-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mdc-slider-handle-width);height:var(--mdc-slider-handle-height);border-width:calc(var(--mdc-slider-handle-height)/2) calc(var(--mdc-slider-handle-width)/2);box-shadow:var(--mdc-slider-handle-elevation, var(--mat-app-level1));background-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-handle-color, var(--mat-app-primary));border-radius:var(--mdc-slider-handle-shape, var(--mat-app-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-hover-handle-color, var(--mat-app-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary));border-color:var(--mdc-slider-focus-handle-color, var(--mat-app-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface));border-color:var(--mdc-slider-disabled-handle-color, var(--mat-app-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mdc-slider-with-overlap-handle-outline-color, var(--mat-app-on-primary));border-width:var(--mdc-slider-with-overlap-handle-outline-width)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mdc-slider-with-tick-marks-container-size);height:var(--mdc-slider-with-tick-marks-container-size);border-radius:var(--mdc-slider-with-tick-marks-container-shape, var(--mat-app-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-inactive-container-color, var(--mat-app-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity);background-color:var(--mdc-slider-with-tick-marks-disabled-container-color, var(--mat-app-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mdc-slider-with-tick-marks-active-container-opacity);background-color:var(--mdc-slider-with-tick-marks-active-container-color, var(--mat-app-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-app-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color)}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color)}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-mdc-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
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
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  /**
   * Handles programmatic value setting. This has been split out to
   * allow the range thumb to override it and add additional necessary logic.
   */
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  /** @docs-private */
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  constructor(_ngZone, _elementRef, _cdr, _slider) {
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._cdr = _cdr;
    this._slider = _slider;
    this.valueChange = new EventEmitter();
    this.dragStart = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.thumbPosition = _MatThumb.END;
    this._valuetext = signal("");
    this._knobRadius = 8;
    this._tickMarkOffset = 3;
    this._isActive = false;
    this._isFocused = false;
    this._hasSetInitialValue = false;
    this._destroyed = new Subject();
    this._skipUIUpdate = false;
    this._onTouchedFn = () => {
    };
    this._isControlInitialized = false;
    this._platform = inject(Platform);
    this._hostElement = _elementRef.nativeElement;
    this._ngZone.runOutsideAngular(() => {
      this._hostElement.addEventListener("pointerdown", this._onPointerDown.bind(this));
      this._hostElement.addEventListener("pointermove", this._onPointerMove.bind(this));
      this._hostElement.addEventListener("pointerup", this._onPointerUp.bind(this));
    });
  }
  ngOnDestroy() {
    this._hostElement.removeEventListener("pointerdown", this._onPointerDown);
    this._hostElement.removeEventListener("pointermove", this._onPointerMove);
    this._hostElement.removeEventListener("pointerup", this._onPointerUp);
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static {
    this.\u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderThumb)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_SLIDER));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSliderThumb,
      selectors: [["input", "matSliderThumb", ""]],
      hostAttrs: ["type", "range", 1, "mdc-slider__input"],
      hostVars: 1,
      hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
            return ctx._onChange();
          })("input", function MatSliderThumb_input_HostBindingHandler() {
            return ctx._onInput();
          })("blur", function MatSliderThumb_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("focus", function MatSliderThumb_focus_HostBindingHandler() {
            return ctx._onFocus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
        }
      },
      inputs: {
        value: [2, "value", "value", numberAttribute]
      },
      outputs: {
        valueChange: "valueChange",
        dragStart: "dragStart",
        dragEnd: "dragEnd"
      },
      exportAs: ["matSliderThumb"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: _MatSliderThumb
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDER]
    }]
  }], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  constructor(_ngZone, _slider, _elementRef, _cdr) {
    super(_ngZone, _elementRef, _cdr, _slider);
    this._cdr = _cdr;
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static {
    this.\u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderRangeThumb)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MAT_SLIDER), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSliderRangeThumb,
      selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
      exportAs: ["matSliderRangeThumb"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: _MatSliderRangeThumb
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SLIDER]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var MatSliderModule = class _MatSliderModule {
  static {
    this.\u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSliderModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatSliderModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatRippleModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
    }]
  }], null, null);
})();

// src/app/ai-flow-builder/services/aiflow-builder.service.ts
var AIFlowBuilderService = class _AIFlowBuilderService extends BaseHttpService {
  #gatewayAPIUrl = `${environment.Setting.GatewayAPIUrl}/wfapiwf/aiflow`;
  #consoleApiUrl = environment.Setting.C2M_Console_API_URL;
  getAiFlows() {
    const url = `${this.#gatewayAPIUrl}/aiflows`;
    const headers = this.setHeaders();
    return this.get(url, null, headers);
  }
  getAIFlowEntityById(flowEntityId) {
    const url = `${this.#gatewayAPIUrl}/entities/${flowEntityId}`;
    const headers = this.setHeaders();
    return this.get(url, null, headers);
  }
  getAiFlowById(flowId) {
    const url = `${this.#gatewayAPIUrl}/aiflows/${flowId}`;
    const headers = this.setHeaders();
    return this.get(url, null, headers);
  }
  getAIFlowAttributeJsonByType(type) {
    const url = `${this.#gatewayAPIUrl}/aiflows/attributejson/${type}`;
    const headers = this.setHeaders();
    return this.get(url, null, headers);
  }
  createAiFlow(request) {
    const url = `${this.#gatewayAPIUrl}/aiflows/create`;
    const headers = this.setHeaders();
    return this.post(url, request, null, headers);
  }
  createAIFlowEntity(request) {
    const url = `${this.#gatewayAPIUrl}/entities`;
    const headers = this.setHeaders();
    return this.post(url, request, null, headers);
  }
  updateAiFlow(id, request) {
    const url = `${this.#gatewayAPIUrl}/aiflows/update/${id}`;
    const headers = this.setHeaders();
    return this.put(url, request, null, headers);
  }
  updateAIFlowEntity(request) {
    const url = `${this.#gatewayAPIUrl}/aiflow/entities/${request.FlowId}`;
    const headers = this.setHeaders();
    return this.put(url, request, null, headers);
  }
  deleteAIFlow(id) {
    const url = `${this.#gatewayAPIUrl}/flows/${id}`;
    const headers = this.setHeaders();
    return this.delete(url, null, headers);
  }
  deleteAIFlowEntity(id) {
    const url = `${this.#gatewayAPIUrl}/entities/${id}`;
    const headers = this.setHeaders();
    return this.delete(url, null, headers);
  }
  getAIFGeneratedJson(flowId) {
    const url = `${this.#gatewayAPIUrl}/aiflows/generateAFDjson/${flowId}`;
    const headers = this.setHeaders();
    return this.get(url, null, headers);
  }
  getMyThingsChannels() {
    const url = `${this.#consoleApiUrl}api/v1/apps/GetMyThingsChannels`;
    const tryRequest = {
      PageNumber: 1,
      PageSize: 200,
      sortBy: "",
      orderBy: "Most Recent",
      searchText: "",
      EncWorkspaceId: "MYoiubXv1tdVQ/QqJ1CJXg=="
    };
    const headers = this.setHeaders();
    return this.post(url, tryRequest, null, headers).pipe(map((result) => result.data), map((data) => data.root), map((root) => root.channel), map((channel) => {
      if (Array.isArray(channel)) {
        return channel.map((item) => {
          return {
            id: item.encChId,
            name: item.chName?.["#cdata-section"],
            type: item.chType
          };
        });
      } else if (channel && typeof channel === "object") {
        return [{
          id: channel.encChId,
          name: channel.chName?.["#cdata-section"],
          type: channel.chType
        }];
      }
    }));
  }
  getMoreChannelInstance(channelId) {
    const url = `${this.#consoleApiUrl}api/v1/apps/GetMoreChannelInstance`;
    const tryRequest = {
      channelID: channelId,
      channelInsIds: "",
      searchKey: "-1$-1",
      pageDetails: "1$10",
      EncWorkspaceId: "MYoiubXv1tdVQ/QqJ1CJXg=="
    };
    const headers = this.setHeaders();
    return this.post(url, tryRequest, null, headers).pipe(map((result) => result.data), map((data) => data.root), map((root) => root.channelIns), map((channel) => {
      return channel.map((item) => {
        return {
          id: item.encChInsId,
          name: item.chFName
        };
      });
    }));
  }
  saveWebhook(request) {
    const url = `${this.#gatewayAPIUrl}/aiflows/saveWebhook`;
    const headers = this.setHeaders();
    return this.post(url, request, null, headers);
  }
  GetWebhook(id, flowName) {
    const url = `${this.#gatewayAPIUrl}/aiflows/GetWebhook/${id}/${flowName}`;
    const headers = this.setHeaders();
    return this.get(url, null, headers);
  }
  setHeaders(parameters) {
    let processName = null;
    if (parameters?.ProcessName) {
      processName = parameters.ProcessName;
    } else {
      processName = sessionStorage.getItem("AppName");
    }
    const headers = {};
    const accessToken = localStorage.getItem("AccessToken");
    if (accessToken) {
      headers["AccessToken"] = accessToken;
    }
    if (processName) {
      headers["processName"] = processName;
    }
    return headers;
  }
  setParams(parameters) {
    let params = new HttpParams();
    if (parameters) {
      for (const i in parameters) {
        if (parameters[i] != null) {
          params = params.append(i, parameters[i]);
        }
      }
    }
    return params;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AIFlowBuilderService_BaseFactory;
      return function AIFlowBuilderService_Factory(__ngFactoryType__) {
        return (\u0275AIFlowBuilderService_BaseFactory || (\u0275AIFlowBuilderService_BaseFactory = \u0275\u0275getInheritedFactory(_AIFlowBuilderService)))(__ngFactoryType__ || _AIFlowBuilderService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIFlowBuilderService, factory: _AIFlowBuilderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/ai-flow-builder/components/entity-detail/entity-detail.component.ts
var _c02 = (a0) => ({ "is-invalid": a0 });
var _c12 = () => ({ header: "C2M Get process Data", description: "Retrieves comprehensive blah blah" });
var _c22 = () => ({ header: "C2MAR Get process Data", description: "Retrieves comprehensive blah blah" });
var _c32 = (a0, a1) => [a0, a1];
function EntityDetailComponent_div_12_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\xA0*");
    \u0275\u0275elementEnd();
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    \u0275\u0275styleProp("margin-top", -20, "px");
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This field is required ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("color", "red")("font-size", 12, "px");
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 17);
    \u0275\u0275template(1, EntityDetailComponent_div_12_ng_container_1_Conditional_7_span_1_Template, 2, 4, "span", 18);
  }
  if (rf & 2) {
    let tmp_7_0;
    const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r1.getControlName(attribute_r1))("formControlName", ctx_r1.getControlName(attribute_r1))("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx_r1.submitted && ctx_r1.formControls[ctx_r1.getControlName(attribute_r1)].errors));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ((tmp_7_0 = ctx_r1.formControls[ctx_r1.getControlName(attribute_r1)].errors) == null ? null : tmp_7_0.required));
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This field is required ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("color", "red")("font-size", 12, "px");
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "textarea", 19);
    \u0275\u0275text(1, "                     ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EntityDetailComponent_div_12_ng_container_1_Conditional_8_span_2_Template, 2, 4, "span", 18);
  }
  if (rf & 2) {
    let tmp_7_0;
    const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r1.getControlName(attribute_r1))("formControlName", ctx_r1.getControlName(attribute_r1))("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx_r1.submitted && ctx_r1.formControls[ctx_r1.getControlName(attribute_r1)].errors));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.submitted && ((tmp_7_0 = ctx_r1.formControls[ctx_r1.getControlName(attribute_r1)].errors) == null ? null : tmp_7_0.required));
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This field is required ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("color", "red")("font-size", 12, "px");
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ng-select", 20);
    \u0275\u0275listener("open", function EntityDetailComponent_div_12_ng_container_1_Conditional_9_Template_ng_select_open_0_listener() {
      \u0275\u0275restoreView(_r3);
      const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getAutomaticData(attribute_r1));
    })("change", function EntityDetailComponent_div_12_ng_container_1_Conditional_9_Template_ng_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectionChange($event, attribute_r1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, EntityDetailComponent_div_12_ng_container_1_Conditional_9_span_1_Template, 2, 4, "span", 18);
  }
  if (rf & 2) {
    let tmp_8_0;
    const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("items", attribute_r1.Options)("name", ctx_r1.getControlName(attribute_r1))("formControlName", ctx_r1.getControlName(attribute_r1))("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx_r1.submitted && ctx_r1.formControls[ctx_r1.getControlName(attribute_r1)].errors));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ((tmp_8_0 = ctx_r1.formControls[ctx_r1.getControlName(attribute_r1)].errors) == null ? null : tmp_8_0.required));
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-slider", 21);
    \u0275\u0275element(1, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("margin-left", 0, "px")("margin-top", -20, "px");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.getControlName(attribute_r1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("opacity", 0.4)("margin-top", -15, "px")("font-size", 12, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, attribute_r1.MinValue, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 16, attribute_r1.MaxValue, "1.1-1"));
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 24);
    \u0275\u0275element(2, "input", 25);
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4, "Yes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275element(6, "input", 27);
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8, "No");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attribute_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", ctx_r1.getControlName(attribute_r1));
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", ctx_r1.getControlName(attribute_r1));
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275textInterpolate1(" ", item_r4.header, " ");
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275styleProp("padding", 5, "px");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-weight", "bold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.header);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.description);
  }
}
function EntityDetailComponent_div_12_ng_container_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-select", 15);
    \u0275\u0275template(1, EntityDetailComponent_div_12_ng_container_1_Conditional_12_ng_template_1_Template, 1, 1, "ng-template", 28)(2, EntityDetailComponent_div_12_ng_container_1_Conditional_12_ng_template_2_Template, 5, 6, "ng-template", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("items", \u0275\u0275pureFunction2(4, _c32, \u0275\u0275pureFunction0(2, _c12), \u0275\u0275pureFunction0(3, _c22)))("clearable", true);
  }
}
function EntityDetailComponent_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 12)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EntityDetailComponent_div_12_ng_container_1_span_4_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275template(6, EntityDetailComponent_div_12_ng_container_1_Conditional_6_Template, 1, 2, "div", 14)(7, EntityDetailComponent_div_12_ng_container_1_Conditional_7_Template, 2, 6)(8, EntityDetailComponent_div_12_ng_container_1_Conditional_8_Template, 3, 6)(9, EntityDetailComponent_div_12_ng_container_1_Conditional_9_Template, 2, 7)(10, EntityDetailComponent_div_12_ng_container_1_Conditional_10_Template, 9, 19)(11, EntityDetailComponent_div_12_ng_container_1_Conditional_11_Template, 9, 2, "span")(12, EntityDetailComponent_div_12_ng_container_1_Conditional_12_Template, 3, 7, "ng-select", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const attribute_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(attribute_r1.Label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attribute_r1.Required);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(attribute_r1.ControlType === "label" ? 6 : attribute_r1.ControlType === "textbox" ? 7 : attribute_r1.ControlType === "textarea" ? 8 : attribute_r1.ControlType === "dropdownlist" ? 9 : attribute_r1.ControlType === "slider" ? 10 : attribute_r1.ControlType === "radio" ? 11 : attribute_r1.ControlType === "custom-dropdownlist" ? 12 : -1);
  }
}
function EntityDetailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, EntityDetailComponent_div_12_ng_container_1_Template, 13, 3, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getColClass(attribute_r1.Width));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showIfCondition(attribute_r1.Condition));
  }
}
var EntityDetailComponent = class _EntityDetailComponent {
  #ref;
  #aIFlowBuilderService;
  constructor() {
    this.newElement = false;
    this.form = new FormGroup({});
    this.submitted = false;
    this.#ref = inject(NgbActiveModal);
    this.#aIFlowBuilderService = inject(AIFlowBuilderService);
    this.populateDataMapper = {
      "GetMyThingsChannels": this.#aIFlowBuilderService.getMyThingsChannels.bind(this.#aIFlowBuilderService),
      "GetMoreChannelInstance": this.#aIFlowBuilderService.getMoreChannelInstance.bind(this.#aIFlowBuilderService)
    };
    this.fieldMapper = {};
  }
  ngOnInit() {
    this.fetchFormConfig(this.formConfig);
  }
  fetchFormConfig(response) {
    if (response && response.Attributes) {
      response.Attributes.forEach((attribute) => {
        const controlName = attribute.ControlName.toLowerCase();
        const controlType = attribute.ControlType.toLowerCase();
        if (!this.form.controls[controlName] && controlType !== "label") {
          const formControlValue = attribute.Value;
          const formControl = new FormControl(formControlValue);
          if (attribute.Required) {
            formControl.setValidators([Validators.required]);
          }
          this.form.addControl(controlName, formControl);
        }
      });
    }
    this.form.valueChanges.subscribe((values) => {
      this.updateFormConfig(values);
    });
  }
  updateFormConfig(values) {
    if (this.formConfig && this.formConfig.Attributes) {
      this.formConfig.Attributes.forEach((attribute) => {
        const controlName = this.getControlName(attribute);
        if (values[controlName] !== void 0) {
          const updatedAttribute = this.formConfig.Attributes.find((attr) => this.getControlName(attr) === controlName);
          if (updatedAttribute) {
            updatedAttribute.Value = values[controlName];
          }
        }
      });
    }
  }
  getColClass(width) {
    return width === "half" ? "col-6" : "col-12";
  }
  getAutomaticData(attribute) {
    if (!attribute.Api)
      return;
    const { Name, ParameterFromControl } = attribute.Api || {};
    const id = this.fieldMapper[ParameterFromControl]?.id;
    this.populateDataMapper[Name](id).subscribe((response) => {
      attribute.Options = response?.map((r) => r.name);
      this.fieldMapper = { [attribute.ControlName]: response };
    });
  }
  selectionChange(event, attribute) {
    if (!attribute.Api)
      return;
    this.fieldMapper[attribute.ControlName] = this.fieldMapper[attribute.ControlName].find((f) => f.name === event);
  }
  onSubmit() {
    const { WFID } = this.workflow;
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }
    const rawValues = this.form.getRawValue();
    const payload = {
      ID: this.entityID,
      FlowId: WFID,
      EntityName: rawValues?.entityname,
      EntityType: this.entityType,
      ParentEntityId: this.parentEntityId,
      EndParentEntityId: this.endParentEntityId,
      AttributeJson: this.formConfig
    };
    if (this.newElement) {
      this.#aIFlowBuilderService.createAIFlowEntity(payload).subscribe((_) => {
        const payload2 = __spreadProps(__spreadValues({}, this.form.value), {
          WfoId: !rawValues?.EntityType || rawValues?.EntityType === "Stage" ? _.id : WFID || "",
          WorkFlowId: this.workflow.WFID,
          WfosId: _.id,
          TriggerId: _.id
        });
        this.#ref.close(payload2);
      });
    } else {
      this.#aIFlowBuilderService.updateAIFlowEntity(payload).subscribe((_) => {
        this.#ref.close(payload);
      });
    }
  }
  onCancel() {
    this.#ref.close();
  }
  getControlName(attribute) {
    return attribute.ControlName;
  }
  showIfCondition(condition) {
    if (!condition)
      return true;
    const controlName = condition.ControlName;
    const value = condition.Value;
    return this.form.get(controlName).value === value?.toLowerCase();
  }
  get formControls() {
    return this.form.controls;
  }
  static {
    this.\u0275fac = function EntityDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntityDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntityDetailComponent, selectors: [["app-entity-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 4, consts: [[1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup"], [1, "row", "gy-4"], ["class", "form-group", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "popup__actions", "mt-4"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "form-group", 3, "ngClass"], [4, "ngIf"], [1, "d-flex"], ["style", "color: red", 4, "ngIf"], [3, "margin-top"], ["placeholder", "Select an option", 3, "items", "clearable"], [2, "color", "red"], ["type", "text", 1, "form-control", 3, "name", "formControlName", "ngClass"], [3, "color", "font-size", 4, "ngIf"], [1, "form-control", "custom-text-area", 3, "name", "formControlName", "ngClass"], ["bindLabel", "name", "bindValue", "id", 1, "select-control", 3, "open", "change", "items", "name", "formControlName", "ngClass"], ["thumbLabel", ""], ["matSliderThumb", "", 3, "formControlName"], [1, "d-flex", "justify-content-between"], [1, "me-2"], ["type", "radio", "value", "yes", 3, "formControlName"], [1, "ms-2"], ["type", "radio", "value", "no", 3, "formControlName"], ["ng-label-tmp", ""], ["ng-option-tmp", ""]], template: function EntityDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2")(3, "b");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "span", 2)(6, "i", 3);
        \u0275\u0275listener("click", function EntityDetailComponent_Template_i_click_6_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "hr");
        \u0275\u0275elementStart(10, "form", 4)(11, "div", 5);
        \u0275\u0275template(12, EntityDetailComponent_div_12_Template, 2, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7)(14, "button", 8);
        \u0275\u0275listener("click", function EntityDetailComponent_Template_button_click_14_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(15, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function EntityDetailComponent_Template_button_click_16_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(17, "Save");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.formConfig.Guid);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.formConfig.Description);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.formConfig == null ? null : ctx.formConfig.Attributes);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DecimalPipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      QuillModule,
      NgSelectModule,
      NgSelectComponent,
      NgOptionTemplateDirective,
      NgLabelTemplateDirective,
      MatSliderModule,
      MatSlider,
      MatSliderThumb
    ], styles: ["\n\n.custom-text-area[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  padding: 12px;\n  border-radius: 6px;\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  resize: vertical;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 6px;\n  font-size: 1rem;\n}\nmat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  --mdc-slider-handle-height: 12px;\n  --mdc-slider-handle-width: 12px;\n  --mdc-slider-handle-color: rgb(30, 30, 139);\n  --mdc-slider-focus-handle-color: rgb(30, 30, 139);\n  --mdc-slider-hover-handle-color: rgb(30, 30, 139);\n  --mdc-slider-active-track-color: #5970D5;\n  --mdc-slider-inactive-track-color: rgb(179, 174, 174);\n}\n.ng-select.ng-invalid.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  border-radius: 6px;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  accent-color: red;\n}\n/*# sourceMappingURL=entity-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntityDetailComponent, { className: "EntityDetailComponent", filePath: "src\\app\\ai-flow-builder\\components\\entity-detail\\entity-detail.component.ts", lineNumber: 33 });
})();

// src/app/ai-flow-builder/page/webhook-config/webhook-config.component.ts
var _c03 = (a0) => ({ "is-invalid": a0 });
function WebhookConfigComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function WebhookConfigComponent_button_8_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTopTab(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTopTab === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function WebhookConfigComponent_div_9_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275property("value", m_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5);
  }
}
function WebhookConfigComponent_div_9_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function WebhookConfigComponent_div_9_button_16_Template_button_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setSubTab(s_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeSubTab === s_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function WebhookConfigComponent_div_9_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "input", 27)(2, "input", 28);
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function WebhookConfigComponent_div_9_div_17_div_8_Template_button_click_3_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeParam(i_r10));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275property("formGroup", p_r11);
  }
}
function WebhookConfigComponent_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 10);
    \u0275\u0275text(4, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, WebhookConfigComponent_div_9_div_17_div_8_Template, 5, 1, "div", 23);
    \u0275\u0275elementStart(9, "div", 24)(10, "button", 25);
    \u0275\u0275listener("click", function WebhookConfigComponent_div_9_div_17_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addParam());
    });
    \u0275\u0275text(11, "+ Add");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.params.controls);
  }
}
function WebhookConfigComponent_div_9_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "input", 27)(2, "input", 28);
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function WebhookConfigComponent_div_9_div_18_div_8_Template_button_click_3_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeHeader(i_r14));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r15 = ctx.$implicit;
    \u0275\u0275property("formGroup", h_r15);
  }
}
function WebhookConfigComponent_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 10);
    \u0275\u0275text(4, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, WebhookConfigComponent_div_9_div_18_div_8_Template, 5, 1, "div", 23);
    \u0275\u0275elementStart(9, "div", 24)(10, "button", 25);
    \u0275\u0275listener("click", function WebhookConfigComponent_div_9_div_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addHeader());
    });
    \u0275\u0275text(11, "+ Add");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.headers.controls);
  }
}
function WebhookConfigComponent_div_9_div_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "textarea", 35);
    \u0275\u0275elementEnd();
  }
}
function WebhookConfigComponent_div_9_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "textarea", 36);
    \u0275\u0275elementEnd();
  }
}
function WebhookConfigComponent_div_9_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 30)(2, "label", 31);
    \u0275\u0275text(3, "Content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 32)(5, "option", 33);
    \u0275\u0275text(6, "JSON_SCHEMA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 34);
    \u0275\u0275text(8, "TEXT");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, WebhookConfigComponent_div_9_div_19_div_9_Template, 2, 0, "div", 7)(10, WebhookConfigComponent_div_9_div_19_div_10_Template, 2, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r2.form.get("bodyContentMode")) == null ? null : tmp_2_0.value) === "JSON_SCHEMA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.form.get("bodyContentMode")) == null ? null : tmp_3_0.value) === "TEXT");
  }
}
function WebhookConfigComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "div")(3, "label", 10);
    \u0275\u0275text(4, "Method");
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 12);
    \u0275\u0275template(8, WebhookConfigComponent_div_9_option_8_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 10);
    \u0275\u0275text(11, "URL");
    \u0275\u0275elementStart(12, "span", 11);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15);
    \u0275\u0275template(16, WebhookConfigComponent_div_9_button_16_Template, 2, 3, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, WebhookConfigComponent_div_9_div_17_Template, 12, 1, "div", 16)(18, WebhookConfigComponent_div_9_div_18_Template, 12, 1, "div", 16)(19, WebhookConfigComponent_div_9_div_19_Template, 11, 2, "div", 16);
    \u0275\u0275elementStart(20, "div", 17)(21, "button", 18);
    \u0275\u0275listener("click", function WebhookConfigComponent_div_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275text(22, "Save / Send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.methods);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c03, ((tmp_2_0 = ctx_r2.form.get("url")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.form.get("url")) == null ? null : tmp_2_0.touched)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.subTabs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeSubTab === "Params");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeSubTab === "Headers");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeSubTab === "Body");
  }
}
var WebhookConfigComponent = class _WebhookConfigComponent {
  constructor(fb, activeModal, aiFlowBuilderService) {
    this.fb = fb;
    this.activeModal = activeModal;
    this.aiFlowBuilderService = aiFlowBuilderService;
    this.id = null;
    this.FlowName = null;
    this.topTabs = ["Webhook", "Chat", "SMS", "Scheduler"];
    this.activeTopTab = "Webhook";
    this.subTabs = ["Params", "Headers", "Body"];
    this.activeSubTab = "Params";
    this.methods = ["POST", "GET", "PUT", "DELETE", "PATCH"];
    this.bodyContentMode = "JSON_SCHEMA";
    this.form = this.fb.group({
      method: ["POST", Validators.required],
      url: ["", Validators.required],
      bodyContentMode: ["JSON_SCHEMA"],
      params: this.fb.array([]),
      headers: this.fb.array([]),
      bodyText: [""],
      bodyJsonSchema: [""]
    });
  }
  ngOnInit() {
    this.aiFlowBuilderService.GetWebhook(this.id ?? "", this.FlowName ?? "").subscribe({
      next: (response) => {
        this.loadWebhookData(response);
      }
    });
    this.form.get("bodyContentMode")?.valueChanges.subscribe((value) => {
      this.bodyContentMode = value;
    });
  }
  loadWebhookData(data) {
    this.form.get("params").clear();
    this.form.get("headers").clear();
    this.form.patchValue({
      method: data.Method || "POST",
      url: data.Url || "",
      bodyContentMode: this.isJson(data.Body) ? "JSON_SCHEMA" : "TEXT",
      bodyJsonSchema: this.isJson(data.Body) ? data.Body : "",
      bodyText: !this.isJson(data.Body) ? data.Body : ""
    });
    if (data.Params) {
      Object.keys(data.Params).forEach((key) => {
        this.form.get("params").push(this.fb.group({
          key: [key],
          value: [data.Params[key]]
        }));
      });
    }
    if (data.Headers) {
      Object.keys(data.Headers).forEach((key) => {
        this.form.get("headers").push(this.fb.group({
          key: [key],
          value: [data.Headers[key]]
        }));
      });
    }
  }
  // Helper: check if body is valid JSON
  isJson(str) {
    try {
      JSON.parse(str);
      this.bodyContentMode = "JSON_SCHEMA";
      return true;
    } catch {
      this.bodyContentMode = "TEXT";
      return false;
    }
  }
  // helpers for form arrays
  get params() {
    return this.form.get("params");
  }
  get headers() {
    return this.form.get("headers");
  }
  createKeyValue(key = "", value = "") {
    return this.fb.group({
      key: [key],
      value: [value]
    });
  }
  addParam() {
    this.params.push(this.createKeyValue());
  }
  removeParam(index) {
    this.params.removeAt(index);
  }
  addHeader() {
    this.headers.push(this.createKeyValue());
  }
  removeHeader(index) {
    this.headers.removeAt(index);
  }
  setTopTab(tab) {
    this.activeTopTab = tab;
  }
  setSubTab(tab) {
    this.activeSubTab = tab;
  }
  toggleBodyMode() {
    const current = this.form.get("bodyContentMode")?.value;
    this.form.get("bodyContentMode")?.setValue(current === "JSON_SCHEMA" ? "TEXT" : "JSON_SCHEMA");
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.aiFlowBuilderService.saveWebhook({
      ID: this.id ?? "",
      FlowName: this.FlowName ?? "",
      webhookData: {
        method: this.form.value.method,
        url: this.form.value.url,
        params: this.form.value.params.reduce((acc, cur) => {
          if (cur.key?.trim() && cur.value?.toString().trim()) {
            acc[cur.key] = cur.value;
          }
          return acc;
        }, {}),
        headers: this.form.value.headers.reduce((acc, cur) => {
          if (cur.key?.trim() && cur.value?.toString().trim()) {
            acc[cur.key] = cur.value;
          }
          return acc;
        }, {}),
        body: this.bodyContentMode === "JSON_SCHEMA" ? this.form.value.bodyJsonSchema || "" : this.form.value.bodyText || ""
      }
    }).subscribe({
      next: (response) => {
        console.log("Webhook saved successfully", response);
      },
      error: (error) => {
        console.error("Error saving webhook", error);
      }
    });
  }
  static {
    this.\u0275fac = function WebhookConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhookConfigComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(AIFlowBuilderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhookConfigComponent, selectors: [["app-webhook-config"]], inputs: { id: "id", FlowName: "FlowName" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "p-4", 3, "formGroup"], [1, "modal-header", 2, "justify-content", "space-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close-button", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "top-tabs", "mt-3", 2, "border-bottom", "1px solid #f2f2f2"], [3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [1, "form-row", "mt-3", 2, "justify-content", "space-between"], [1, "input-label"], [1, "text-danger"], ["formControlName", "method", 2, "font-size", "12px", "height", "28px", "margin-left", "5px"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "url", 1, "input-24", 2, "margin-left", "5px", "width", "500px", 3, "ngClass"], [1, "sub-tabs", "mt-2", 2, "border-bottom", "1px solid #f2f2f2"], ["class", "sub-panel", 4, "ngIf"], [1, "form-actions", "d-flex", "justify-content-end"], [1, "btn-primary", 3, "click"], [3, "value"], [1, "sub-panel"], [1, "kv-table"], [1, "kv-row", "header"], ["class", "kv-row", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "kv-add", "d-flex", "justify-content-end"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "kv-row", 3, "formGroup"], ["formControlName", "key", "placeholder", "key", 1, "input-24"], ["formControlName", "value", "placeholder", "value", 1, "input-24"], ["type", "button", 1, "btn-remove", 3, "click"], [1, "body-controls", "mb-2"], ["for", "bodyMode", 1, "input-label"], ["formControlName", "bodyContentMode", 2, "font-size", "12px", "height", "28px", "margin-left", "5px"], ["value", "JSON_SCHEMA"], ["value", "TEXT"], ["formControlName", "bodyJsonSchema", "rows", "12", 1, "big-editor"], ["formControlName", "bodyText", "rows", "12", 1, "big-editor"]], template: function WebhookConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0)(1, "div")(2, "div", 1)(3, "h4", 2);
        \u0275\u0275text(4, "Webhook Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function WebhookConfigComponent_Template_button_click_5_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275element(6, "span", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, WebhookConfigComponent_button_8_Template, 2, 3, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, WebhookConfigComponent_div_9_Template, 23, 8, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.topTabs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTopTab === "Webhook");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgClass, NgForOf, NgIf, FormsModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 6px;\n  padding: 12px;\n  max-width: 920px;\n}\n.top-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.top-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px 4px 0 0;\n}\n.top-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: white;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom: 2px solid #EB583B;\n}\n.panel[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dcdcdc;\n  padding: 12px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.form-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-row[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.sub-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.sub-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: white;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border: 1px solid white;\n  padding: 6px 10px;\n}\n.sub-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: white;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom: 2px solid #EB583B;\n}\n.kv-table[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 8px;\n  border-radius: 4px;\n}\n.kv-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 32px;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.kv-row.header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #444;\n}\n.kv-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.kv-add[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.big-editor[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: monospace;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 4px;\n  color: white;\n  border: none;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #D96347;\n  border-color: #D96347;\n}\n.input-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n.input-24[_ngcontent-%COMP%] {\n  height: 24px;\n  font-size: 14px;\n  padding: 2px 6px;\n  margin-left: 5px;\n}\n.body-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.body-controls[_ngcontent-%COMP%]   .body-select[_ngcontent-%COMP%] {\n  height: 28px;\n  font-size: 14px;\n  padding: 2px 6px;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\n/*# sourceMappingURL=webhook-config.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhookConfigComponent, { className: "WebhookConfigComponent", filePath: "src\\app\\ai-flow-builder\\page\\webhook-config\\webhook-config.component.ts", lineNumber: 16 });
})();

// src/app/ai-flow-builder/components/ai-diagram/ai-diagram.component.ts
var _c04 = ["ref"];
var _c13 = () => ["Edit", "Published"];
function AiDiagramComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275listener("click", function AiDiagramComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.IsUndoAllowed ? ctx_r2.UndoRedo("Undo") : null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "Undo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.IsUndoAllowed ? "Undo" : "Undo not allowed");
  }
}
function AiDiagramComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 36);
    \u0275\u0275listener("click", function AiDiagramComponent_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.IsRedoAllowed ? ctx_r2.UndoRedo("Redo") : null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "Redo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.IsRedoAllowed ? "Redo" : "Redo not allowed");
  }
}
function AiDiagramComponent_ng_template_43_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 46);
  }
}
function AiDiagramComponent_ng_template_43_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function AiDiagramComponent_ng_template_43_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48);
    \u0275\u0275listener("click", function AiDiagramComponent_ng_template_43_li_7_Template_li_click_0_listener() {
      const mode_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeMode(mode_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r6, " ");
  }
}
function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 56);
  }
}
function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 57);
  }
}
function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 49);
    \u0275\u0275listener("click", function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.service.togglePalette());
    });
    \u0275\u0275template(2, AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_i_2_Template, 1, 0, "i", 50)(3, AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_i_3_Template, 1, 0, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.generateXML());
    });
    \u0275\u0275element(5, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275listener("click", function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleActions());
    });
    \u0275\u0275element(7, "i", 55);
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
function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 58);
    \u0275\u0275listener("click", function AiDiagramComponent_ng_template_43_ng_container_8_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleActions());
    });
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AiDiagramComponent_ng_template_43_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AiDiagramComponent_ng_template_43_ng_container_8_ng_container_1_Template, 8, 2, "ng-container", 45)(2, AiDiagramComponent_ng_template_43_ng_container_8_ng_container_2_Template, 3, 0, "ng-container", 45);
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
function AiDiagramComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "button", 40);
    \u0275\u0275template(3, AiDiagramComponent_ng_template_43_i_3_Template, 1, 0, "i", 41)(4, AiDiagramComponent_ng_template_43_i_4_Template, 1, 0, "i", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 43);
    \u0275\u0275template(7, AiDiagramComponent_ng_template_43_li_7_Template, 2, 1, "li", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AiDiagramComponent_ng_template_43_ng_container_8_Template, 3, 2, "ng-container", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.actionsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.actionsDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.metadata == null ? null : ctx_r2.metadata.Workflow == null ? null : ctx_r2.metadata.Workflow.WorkflowMode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.actionsDisabled);
  }
}
var t = ElementType;
var AiDiagramComponent = class _AiDiagramComponent {
  constructor(dialog, service, wfapi, formViewApi, msg, cdr, route, bpmnService, toastr, titleService, aiFlowBuilderService, sharedData) {
    this.dialog = dialog;
    this.service = service;
    this.wfapi = wfapi;
    this.formViewApi = formViewApi;
    this.msg = msg;
    this.cdr = cdr;
    this.route = route;
    this.bpmnService = bpmnService;
    this.toastr = toastr;
    this.titleService = titleService;
    this.aiFlowBuilderService = aiFlowBuilderService;
    this.sharedData = sharedData;
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
    this.trgConditionDetail = false;
    this.undoredoactive = false;
    this.wfosIdToWfoIdMap = {};
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
      this.aiFlowBuilderService.updateAiFlow(this.metadata.Workflow.WFID, {
        ID: this.metadata.Workflow.WFID,
        FlowName: this.metadata.Workflow.FriendlyName,
        FlowDescription: this.metadata.Workflow.FriendlyName,
        CoordJson: { Coordinates: coords }
      }).subscribe({
        next: (response) => {
          this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
          this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;
        },
        error: (error) => {
          console.error("Error saving diagram coordinates:", error);
        }
      });
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
          const props = yield this.openDialog(__spreadValues({
            element: el,
            newElement: true
          }, details));
          this.saveDetailsv2(el, props);
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
      const newElement = !el.props && el.type !== t.TriggerExtension;
      const details = yield this.getDetails(el, newElement);
      if (!details)
        return;
      const props = yield this.openDialog(__spreadValues({ element: el, newElement }, details));
      if (!props)
        return this.trgConditionDetail = false;
      const element = this.bpmnService.allElements;
      if (element.map((e) => e.id).includes(props.EntityName)) {
        this.service.updateElementProperties(el, {
          name: props.EntityName
        });
      } else {
        this.service.updateElementProperties(el, {
          id: props.EntityName,
          name: props.EntityName
        });
      }
    });
  }
  updateElementProperties(el, props, prev) {
    const stateTypes = ["bpmn:Task", "bpmn:StartEvent", "bpmn:EndEvent", "bpmn:SubProcess"];
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
  // private async saveAndUpdateElement(el: DiagramEl, props: any, newElement: boolean): Promise<void> {
  //   const saveResponse = await this.saveDetails(el, props).toPromise();
  //   if (el.type === "bpmn:SubProcess") {
  //     el.props.SubProcessName = saveResponse.result.SubProcessName;
  //     el.props.SubProcessWFVersionNo = saveResponse.result.SubProcessWFVersionNo;
  //   }
  //   if (!newElement) return;
  //   if (saveResponse.statuscode === 200) {
  //     this.handleSaveResponse(el, saveResponse, props);
  //   } else {
  //     this.service.deleteElement(el);
  //   }
  // }
  onDeleteElement(ids) {
    return __async(this, null, function* () {
      const workflowId = this.metadata.Workflow.WFID;
      const stateIds = ids?.stateIds ?? [];
      try {
        stateIds.forEach((id) => {
          firstValueFrom(this.aiFlowBuilderService.deleteAIFlowEntity(id));
        });
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
            type: t.Trigger,
            id: constructId("Cond_", condition.Name),
            props: condition,
            source: { type: t.Gateway },
            target: connection.target
          };
          res = yield this.getDetails(flow);
        }
        if (res) {
          const { data, component } = res;
          const props = yield this.openDialog({ element: flow, data, component });
          if (props) {
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
        } else {
          this.service.undo();
        }
      }
    });
  }
  /** THIS REQUIRES API CHANGES
   * SAVE RESPONSE MUST CONTAIN THE OBJECT CREATED
   */
  handleSaveResponse(el, res, payload) {
    const props = __spreadValues({}, res.result);
    let id = props.Guid;
    if (el.type === t.Trigger && (el.source.type === t.Gateway || el.source.type === t.TriggerExtension)) {
      id = constructId("Cond_", payload.conditionName);
    }
    if (res.statuscode === 200) {
      if (el.type === t.Trigger) {
        const flow = el;
        const { source, target } = flow;
        if (isStateType(source)) {
          props.WfosId = source.props.WfosId;
        } else if (source.type === t.Gateway || source.type === t.TriggerExtension) {
          props.TriggerId = payload.triggerId;
        }
        let targetId = null;
        if (target.type === t.TriggerExtension) {
          const triggerType = getTriggerType(flow);
          targetId = constructId(triggerType, props.Guid);
        } else if (target.type === t.Gateway) {
          targetId = constructId(t.Gateway, props.Guid);
        }
        if (targetId) {
          this.service.updateElementProperties(target, { id: targetId });
        }
      } else if (el.type === t.TriggerExtension) {
        return;
      } else if (isStateType(el)) {
        props.WfoId = payload.wfoId;
      } else if (el.type === t.Stage) {
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
      const ref = this.msg.showComponent(config.component, __spreadValues({
        workflow: this.metadata?.Workflow,
        config
      }, config.data));
      return ref.result;
    });
  }
  getDetails(element, newElement) {
    return __async(this, null, function* () {
      const props = element.props || {};
      this.sharedData.removeConnectionType();
      switch (element.type) {
        case t.Pool:
          return this._getWorkflowDetails(props, newElement);
        case t.Stage:
          return this._getStageDetails(props, newElement);
        case t.StartState:
        case t.State:
        case t.EndState:
        case t.SubProcess:
        case t.API:
        case t.DataSchema:
        case t.HumanInLoop:
        case t.LLM:
        case t.PromptVariable:
        case t.Scheduler:
        case t.SqlQuery:
        case t.Vector:
          return this._getStateDetails(element, newElement);
        case t.TriggerExtension: {
          const def = element.businessObject.eventDefinitions[0];
          const flow2 = element.incoming[0];
          if (flow2 && def?.$type === EventDef.Timer) {
            return this._getTriggerDetails(flow2, newElement, true);
          }
          return null;
        }
        case t.Trigger:
          const flow = element;
          if (flow.source.type === t.Gateway || flow.source.type === t.TriggerExtension && (getEventDef(flow.source) === EventDef.System || getEventDef(flow.source) === EventDef.Timer)) {
            return this._getTriggerConditionDetails(flow, newElement);
          } else {
            if (flow.target && (flow.target.type === "bpmn:IntermediateCatchEvent" || flow.target.type === "bpmn:ExclusiveGateway")) {
              this.reloadData = true;
            }
            return this._getTriggerDetails(flow, newElement);
          }
        case t.DottedFlow: {
          return this._getDottedTriggerDetails(element, newElement);
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
      const component = EntityDetailComponent;
      let data = {};
      if (newElement) {
        const initialData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType("Stage"));
        const { WfoId: stageId } = props;
        data = {
          entityType: "Stage",
          parentEntityId: stageId,
          newElement,
          formConfig: initialData
        };
      } else {
        const { WfoId: stageId } = props;
        const initaliData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowEntityById(stageId));
        data = {
          entityType: "Stage",
          parentEntityId: stageId,
          entityID: stageId,
          formConfig: initaliData.AttributeJson
        };
      }
      return { component, data };
    });
  }
  _getStateDetails(element, newElement) {
    return __async(this, null, function* () {
      const { WfoId: stageId } = element.parent.props;
      const component = EntityDetailComponent;
      let entityType;
      switch (element.type) {
        case t.StartState:
          entityType = "StartState";
          break;
        case t.EndState:
          entityType = "EndState";
          break;
        case t.API:
          entityType = "API";
          break;
        case t.DataSchema:
          entityType = "DataSchema";
          break;
        case t.HumanInLoop:
          entityType = "HumanInLoop";
          break;
        case t.LLM:
          entityType = "LLM";
          break;
        case t.PromptVariable:
          entityType = "PromptVariable";
          break;
        case t.Scheduler:
          entityType = "Scheduler";
          break;
        case t.SqlQuery:
          entityType = "SqlQuery";
          break;
        case t.Vector:
          entityType = "Vector";
          break;
        default:
          entityType = "Agent";
          break;
      }
      let data = {};
      if (newElement) {
        const initialData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType(entityType));
        data = {
          newElement,
          entityType,
          parentEntityId: stageId,
          formConfig: initialData
        };
      } else {
        const { WfosId } = element.props;
        const initaliData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowEntityById(WfosId));
        data = {
          entityType,
          parentEntityId: stageId,
          entityID: WfosId,
          formConfig: initaliData.AttributeJson
        };
      }
      return { component, data };
    });
  }
  _getTriggerConditionDetails(flow, newElement, isTimer) {
    return __async(this, null, function* () {
      const triggerId = this.bpmnService.allElements.find((alfa) => alfa?.target?.id == flow.source.id)?.props?.TriggerId;
      const { WfosId: endingStateId } = flow.target?.props || {};
      const component = EntityDetailComponent;
      let data = {};
      if (newElement) {
        const initialData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType("TriggerCondition"));
        data = {
          entityType: "TriggerCondition",
          parentEntityId: triggerId,
          endParentEntityId: endingStateId,
          newElement,
          formConfig: initialData
        };
      } else {
        const { ConditionId } = flow.props;
        const initaliData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowEntityById(ConditionId));
        data = {
          entityType: "TriggerCondition",
          parentEntityId: triggerId,
          entityID: ConditionId,
          newElement,
          formConfig: initaliData.AttributeJson
        };
      }
      return { component, data };
    });
  }
  _getDottedTriggerDetails(flow, newElement) {
    return __async(this, null, function* () {
      const { WfosId: stateId } = flow.source.props;
      const { WfosId: endingStateId } = flow.target.props;
      this.aiFlowBuilderService.createAIFlowEntity({
        FlowId: this.metadata?.Workflow?.WFID,
        EntityName: flow.id,
        EntityType: "DottedTrigger",
        ParentEntityId: stateId,
        EndParentEntityId: endingStateId
      }).subscribe();
      return null;
    });
  }
  _getTriggerDetails(flow, newElement, isTimer) {
    return __async(this, null, function* () {
      const { WfosId: stateId } = flow.source.props;
      const { WfosId: endingStateId } = flow.target?.props || {};
      const component = EntityDetailComponent;
      let data = {};
      if (newElement) {
        const initialData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType("Trigger"));
        data = {
          entityType: "Trigger",
          parentEntityId: stateId,
          endParentEntityId: endingStateId,
          newElement,
          formConfig: initialData
        };
      } else {
        const { TriggerId } = flow.props;
        const initaliData = yield firstValueFrom(this.aiFlowBuilderService.getAIFlowEntityById(TriggerId));
        data = {
          entityType: "Trigger",
          parentEntityId: stateId,
          entityID: TriggerId,
          newElement,
          formConfig: initaliData.AttributeJson
        };
      }
      return { component, data };
    });
  }
  // private saveDetails(element: DiagramEl, props: any) {
  //   debugger;
  //   if (element.props && props.status) {
  //     element.props.Status = props.status;
  //   }
  //   if (element.type !== t.Trigger) {
  //     this.service.updateElementProperties(element, {
  //       name: props.friendlyName,
  //     });
  //   } else {
  //     this.service.updateElementProperties(element, {});
  //   }
  //   const { ProcessName, WFID } = this.metadata.Workflow;
  //   return this.wfapi.updateElement(element, props, ProcessName, WFID);
  // }
  saveDetailsv2(element, props) {
    element.props = props;
    if (element.props && props.status) {
      element.props.Status = props.status;
    }
    if (element.source?.type === t.Gateway) {
      this.service.updateElementProperties(element, {
        id: constructId("Cond_", props.entityname)
      });
    }
    if (element.target?.type === t.Gateway) {
      this.service.updateElementProperties(element.target, {
        id: constructId(t.Gateway, props.entityname)
      });
    }
    if (element.type !== t.Trigger) {
      this.service.updateElementProperties(element, {
        id: props.entityname,
        name: props.entityname
      });
    } else {
      this.service.updateElementProperties(element, {
        id: props.entityname
      });
    }
    return;
  }
  changeMode(mode) {
    this.wfapi.changeMode(this.metadata.Workflow.WFID, mode).subscribe((success) => {
      if (success && mode !== this.metadata.Workflow.WorkflowMode) {
        location.reload();
      }
    });
  }
  refreshXML() {
    this.service.toDiagram(this.metadata, this.elDiagram.nativeElement).subscribe();
  }
  generateXML() {
    this.aiFlowBuilderService.getAIFGeneratedJson(this.metadata.Workflow.WFID).subscribe((_) => {
      console.log(_);
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
      this.previousLength = this.metadata?.Coordinates ? Object.keys(this.metadata.Coordinates).length : 0;
      this.coordinatesChangePoints = this.metadata?.Coordinates;
      this.totalComponentLenth = Object.keys(this.metadata?.Coordinates ?? {}).length;
      this.keyColorArrayPrevious = Object.entries(this.metadata?.Coordinates ?? {}).map(([key, value]) => {
        const color = "color" in value ? value.color : void 0;
        return [key, color];
      }).filter((entry) => !!entry[1] && entry[1] !== "none" && entry[1] !== "");
      this.IsRedoAllowed = !!this.metadata.Workflow.IsRedoAllowed;
      this.IsUndoAllowed = !!this.metadata.Workflow.IsUndoAllowed;
      this.actionsVisible = this.metadata.Workflow.WorkflowMode !== "Published";
      this.actionsDisabled = !this.actionsVisible;
      this.metadata.FlowType = "ai";
      this.createWfosIdToWfoIdMap(this.metadata);
      this.service.toDiagram(this.metadata, this.elDiagram.nativeElement).subscribe();
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
      });
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
  openWebhook() {
    const flowName = this.route.snapshot.queryParamMap.get("flowName") || "";
    const id = this.route.snapshot.queryParamMap.get("id") || "";
    console.log("Flow Name:", flowName);
    console.log("ID:", id);
    const modal = this.msg.showComponent(WebhookConfigComponent, {
      id,
      FlowName: flowName
    }, { size: "lg" });
    modal.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully");
      }
    }));
  }
  ngOnDestroy() {
    this.service.destroy();
  }
  static {
    this.\u0275fac = function AiDiagramComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiDiagramComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DiagramService), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BpmnService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(AIFlowBuilderService), \u0275\u0275directiveInject(SharedData));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiDiagramComponent, selectors: [["app-ai-diagram"]], viewQuery: function AiDiagramComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elDiagram = _t.first);
      }
    }, inputs: { metadata: "metadata" }, outputs: { workflowDeleted: "workflowDeleted" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 3, consts: [["ref", ""], ["actions", ""], [1, "diagram-container", 2, "position", "relative"], [1, "header", "W-100", "d-flex", "align-items-center"], [1, "headerText"], [1, "d-flex", "justify-content-between", "w-100"], [1, "d-flex"], [1, "d-none"], [2, "border-left", "1px solid #E0E0E0", "border-right", "1px solid #E0E0E0"], ["width", "20", "height", "35", "viewBox", "0 0 20 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 7.54383V3.81576C18 2.58039 17.0486 1.57892 15.875 1.57892H12.3334M18 7.54383H12.3334M18 7.54383V13.5088M12.3334 1.57892V7.54383M12.3334 1.57892H6.66666M12.3334 7.54383H6.66666M12.3334 7.54383V13.5088M18 13.5088V17.2368C18 18.4722 17.0486 19.4737 15.875 19.4737H12.3334M18 13.5088H12.3334M1 7.54383V3.81576C1 2.58039 1.95139 1.57892 3.125 1.57892H6.66666M1 7.54383H6.66666M1 7.54383V13.5088M6.66666 1.57892V7.54383M6.66666 7.54383V13.5088M1 13.5088V17.2368C1 18.4722 1.95139 19.4737 3.125 19.4737H6.66666M1 13.5088H6.66666M12.3334 13.5088H6.66666M12.3334 13.5088V19.4737M6.66666 13.5088V19.4737M12.3334 19.4737H6.66666", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "mt-1 d-none", 4, "ngIf"], ["width", "20", "height", "38", "viewBox", "0 0 21 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["y1", "0.881592", "x2", "16", "y2", "0.881592", "stroke", "#555555", "stroke-width", "1.5"], ["d", "M8.53033 2.99602C8.23744 2.70312 7.76256 2.70312 7.46967 2.99602L2.6967 7.76899C2.40381 8.06188 2.40381 8.53675 2.6967 8.82965C2.98959 9.12254 3.46447 9.12254 3.75736 8.82965L8 4.58701L12.2426 8.82965C12.5355 9.12254 13.0104 9.12254 13.3033 8.82965C13.5962 8.53675 13.5962 8.06188 13.3033 7.76899L8.53033 2.99602ZM8.75 20.579L8.75 3.52635L7.25 3.52635L7.25 20.579L8.75 20.579Z", "fill", "#555555"], ["y1", "-0.75", "x2", "14", "y2", "-0.75", "transform", "matrix(1 0 0 -1 0 11.1659)", "stroke", "#555555", "stroke-width", "1.5"], ["d", "M6.46967 9.2935C6.76256 9.58639 7.23744 9.58639 7.53033 9.2935L12.3033 4.52053C12.5962 4.22763 12.5962 3.75276 12.3033 3.45987C12.0104 3.16697 11.5355 3.16697 11.2426 3.45987L7 7.70251L2.75736 3.45987C2.46447 3.16697 1.98959 3.16697 1.6967 3.45987C1.40381 3.75276 1.40381 4.22763 1.6967 4.52053L6.46967 9.2935ZM6.25 0.473694L6.25 8.76317L7.75 8.76317L7.75 0.473694L6.25 0.473694Z", "fill", "#555555"], ["d", "M7.53033 14.6802C7.23744 14.3873 6.76256 14.3873 6.46967 14.6802L1.6967 19.4532C1.40381 19.7461 1.40381 20.2209 1.6967 20.5138C1.98959 20.8067 2.46447 20.8067 2.75736 20.5138L7 16.2712L11.2426 20.5138C11.5355 20.8067 12.0104 20.8067 12.3033 20.5138C12.5962 20.2209 12.5962 19.7461 12.3033 19.4532L7.53033 14.6802ZM7.75 23.5L7.75 15.2105L6.25 15.2105L6.25 23.5L7.75 23.5Z", "fill", "#555555"], [2, "border-right", "1px solid #E0E0E0"], ["y1", "-0.75", "x2", "16", "y2", "-0.75", "transform", "matrix(1 0 0 -1 0 19.4737)", "stroke", "#555555", "stroke-width", "1.5"], ["d", "M8.53033 18.1093C8.23744 18.4022 7.76256 18.4022 7.46967 18.1093L2.6967 13.3363C2.40381 13.0434 2.40381 12.5685 2.6967 12.2756C2.98959 11.9827 3.46447 11.9827 3.75736 12.2756L8 16.5183L12.2426 12.2756C12.5355 11.9827 13.0104 11.9827 13.3033 12.2756C13.5962 12.5685 13.5962 13.0434 13.3033 13.3363L8.53033 18.1093ZM8.75 0.526306L8.75 17.5789L7.25 17.5789L7.25 0.526306L8.75 0.526306Z", "fill", "#555555"], ["div", "d-flex"], [1, "row", "mr-1", 2, "margin-right", "7px"], ["title", "Generate JSON", 1, "btn", "btn-light", "me-4", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "18", "viewBox", "0 0 20 18", "fill", "none", 1, "svgDesign"], ["d", "M10.8497 0.358643L12.77 0.742704L9.14066 17.6414L7.22036 17.2573L10.8497 0.358643ZM17.2828 9.00002L13.8358 5.55307V2.83584L20 9.00002L13.8358 15.1546V12.4374L17.2828 9.00002ZM0 9.00002L6.15458 2.83584V5.55307L2.70763 9.00002L6.15458 12.4374V15.1546L0 9.00002Z", "fill", "white"], ["title", "Webhook Settings", "type", "button", 1, "btn", "btn-primary-special", "btn-small", "compAssocation", 3, "click"], [1, "linkPadding"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-settings-icon", "lucide-settings"], ["d", "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"], ["cx", "12", "cy", "12", "r", "3"], [1, "mt-1", "d-none"], [2, "border-left", "1px solid #E0E0E0", "cursor", "pointer", 3, "click", "title"], ["width", "20", "height", "14", "viewBox", "0 0 20 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 5.18422H13.375C16.4816 5.18422 19 7.83516 19 11.1053C19 14.3754 16.4816 17.0263 13.375 17.0263H5.50001M1 5.18422L4.375 1.63159M1 5.18422L4.375 8.73686", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "newBtnDesin"], [2, "border-right", "1px solid #E0E0E0", "cursor", "pointer", 3, "click", "title"], ["d", "M19 5.18422H6.625C3.51843 5.18422 1 7.83516 1 11.1053C1 14.3754 3.51843 17.0263 6.625 17.0263H14.5M19 5.18422L15.625 1.63159M19 5.18422L15.625 8.73686", "stroke", "#555555", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "actions"], ["ngbDropdown", "", 1, "mode"], ["ngbDropdownToggle", "", 1, "btn", "btn-light"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-lock", 4, "ngIf"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-lock"], ["ngbDropdownItem", "", 3, "click"], [1, "btn", "btn-light", 3, "click"], ["class", "fas fa-toggle-on", "title", "Hide palette", 4, "ngIf"], ["class", "fas fa-toggle-off", "title", "Show palette", 4, "ngIf"], ["title", "Generate JSON", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-code"], ["title", "Hide actions", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-chevron-right"], ["title", "Hide palette", 1, "fas", "fa-toggle-on"], ["title", "Show palette", 1, "fas", "fa-toggle-off"], ["title", "Show actions", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-chevron-left"]], template: function AiDiagramComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div")(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "button", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 9);
        \u0275\u0275element(11, "path", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AiDiagramComponent_div_12_Template, 6, 1, "div", 11)(13, AiDiagramComponent_div_13_Template, 6, 1, "div", 11);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 7)(15, "button");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 12);
        \u0275\u0275element(17, "line", 13)(18, "path", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "div", 7)(20, "button");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 12);
        \u0275\u0275element(22, "line", 15)(23, "path", 16)(24, "path", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "div", 7)(26, "button", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 12);
        \u0275\u0275element(28, "line", 19)(29, "path", 20);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "button", 23);
        \u0275\u0275listener("click", function AiDiagramComponent_Template_button_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.generateXML());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(33, "svg", 24);
        \u0275\u0275element(34, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36, " Generate JSON");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "button", 26);
        \u0275\u0275listener("click", function AiDiagramComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openWebhook());
        });
        \u0275\u0275elementStart(38, "i", 27);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 28);
        \u0275\u0275element(40, "path", 29)(41, "circle", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(42, "Webhook settings");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(43, AiDiagramComponent_ng_template_43_Template, 9, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate("Agentic Flow Designer (" + ctx.titleService.getTitle() + ")");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.service.paletteIsOpen);
      }
    }, dependencies: [
      NgbDropdown,
      NgbDropdownToggle,
      NgIf,
      NgbDropdownMenu,
      NgForOf,
      NgbDropdownItem
    ], styles: ['\n\n.diagram-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  top: 0;\n  right: 0;\n  position: absolute;\n  z-index: 1;\n}\n.custom-dialog-container[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.headerStying[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  border-top: 1px solid #E0E0E0;\n  border-bottom: 1px solid #E0E0E0;\n  background: #F2F2F2;\n  height: 40px;\n}\n.header[_ngcontent-%COMP%]   .headerText[_ngcontent-%COMP%] {\n  width: 35%;\n  padding-top: 12px;\n  padding-bottom: 14px;\n  padding-left: 21px;\n  color: #040404;\n  font-family: "Museo Sans";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 14px;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: none;\n  background: #F2F2F2;\n}\n.header[_ngcontent-%COMP%]   .IconContainerBox[_ngcontent-%COMP%] {\n  border-left: 1px solid #E0E0E0;\n  border-right: 1px solid #E0E0E0;\n  border-top: none;\n  border-bottom: none;\n}\n.header[_ngcontent-%COMP%]   .iconbutton[_ngcontent-%COMP%] {\n  width: 217px;\n  height: 38px;\n}\n.header[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%] {\n  width: 650px;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  color: white;\n  border-radius: 5px;\n  background: #005996;\n  color: #FFF;\n  text-align: center;\n  font-family: "Museo Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: auto;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n.svgDesign[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 17.283px;\n}\n.enableDisable[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: #005996;\n}\n.enableDisable[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.newBtnDesin[_ngcontent-%COMP%] {\n  font-family: "Museo Sans";\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0%;\n}\n  .djs-element.djs-connection.selected .djs-visual path {\n  stroke: #214fb5 !important;\n}\n.compAssocation[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: -2px;\n}\n.linkPadding[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n  .djs-element.djs-shape .djs-visual rect {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual circle {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual path {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual g rect {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual g circle {\n  stroke: black !important;\n}\n  .djs-element.djs-shape .djs-visual g path {\n  stroke: black !important;\n}\n  .entry.bpmn-icon-lane-insert-below, \n  .entry.bpmn-icon-lane-insert-above, \n  .entry.bpmn-icon-screw-wrench {\n  display: none !important;\n}\n/*# sourceMappingURL=ai-diagram.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiDiagramComponent, { className: "AiDiagramComponent", filePath: "src\\app\\ai-flow-builder\\components\\ai-diagram\\ai-diagram.component.ts", lineNumber: 51 });
})();

// src/app/ai-flow-builder/page/builder-entity/builder-entity.component.ts
function BuilderEntityComponent_app_ai_diagram_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ai-diagram", 3);
    \u0275\u0275listener("workflowDeleted", function BuilderEntityComponent_app_ai_diagram_1_Template_app_ai_diagram_workflowDeleted_0_listener() {
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
var BuilderEntityComponent = class _BuilderEntityComponent {
  constructor(service, route, router, serviceBpmn, titleService) {
    this.service = service;
    this.route = route;
    this.router = router;
    this.serviceBpmn = serviceBpmn;
    this.titleService = titleService;
  }
  ngOnInit() {
    this.metadata$ = this.route.queryParamMap.pipe(tap((params) => {
      const flowName = params.get("flowName");
      this.updateDocumentTitle(flowName);
    }), switchMap((params) => this.service.getAiFlowById(params.get("id")).pipe(map((flow) => flow.MetaData))));
  }
  updateDocumentTitle(title) {
    this.titleService.setTitle(title);
  }
  handleDelete() {
    this.router.navigate(["admin/wf"]);
  }
  static {
    this.\u0275fac = function BuilderEntityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuilderEntityComponent)(\u0275\u0275directiveInject(AIFlowBuilderService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DiagramService), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuilderEntityComponent, selectors: [["app-builder-entity"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "diagram-parent"], [3, "metadata", "workflowDeleted", 4, "ngIf"], [1, "modeler"], [3, "workflowDeleted", "metadata"]], template: function BuilderEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, BuilderEntityComponent_app_ai_diagram_1_Template, 1, 1, "app-ai-diagram", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx.metadata$));
      }
    }, dependencies: [
      NgIf,
      AiDiagramComponent,
      AsyncPipe
    ], styles: ["\n\n.diagram-parent[_ngcontent-%COMP%] {\n  height: 100vh;\n  border: solid 3px #EEE;\n  position: relative;\n}\n.diagram-parent[_ngcontent-%COMP%]   .enableDisable[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: #005996;\n}\n.diagram-parent[_ngcontent-%COMP%]   .enableDisable[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.import-error[_ngcontent-%COMP%] {\n  color: red;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.diagram-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.diagram-parent[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.modeler[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: right;\n}\n/*# sourceMappingURL=builder-entity.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuilderEntityComponent, { className: "BuilderEntityComponent", filePath: "src\\app\\ai-flow-builder\\page\\builder-entity\\builder-entity.component.ts", lineNumber: 22 });
})();

// src/app/ai-flow-builder/components/flow-save-update/flow-save-update.component.ts
var _c05 = (a0) => ({ "is-invalid": a0 });
function FlowSaveUpdateComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function FlowSaveUpdateComponent_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(1, "Save");
    \u0275\u0275elementEnd();
  }
}
var FlowSaveUpdateComponent = class _FlowSaveUpdateComponent {
  constructor(activeModal, fb, aIFlowBuilderService) {
    this.activeModal = activeModal;
    this.fb = fb;
    this.aIFlowBuilderService = aIFlowBuilderService;
    this.submitted = false;
    this.isEdit = false;
    this.error = "";
  }
  ngOnInit() {
    this.processName = sessionStorage.getItem("AppName");
    this.aiFlowForm = this.getFormGroup(this.dataList);
  }
  get f() {
    return this.aiFlowForm.controls;
  }
  getFormGroup(values) {
    return this.fb.group({
      ID: values?.ID,
      flowName: [values?.FlowName, [Validators.required, Validators.pattern("^[a-zA-Z0-9_]+$"), Validators.maxLength(25)]],
      flowDescription: [values?.FlowDescription, Validators.required]
    });
  }
  onSubmit() {
    const rawData = __spreadProps(__spreadValues({}, this.aiFlowForm.getRawValue()), { accessToken: localStorage.getItem("AccessToken") });
    if (this.aiFlowForm.invalid) {
      this.submitted = true;
      return;
    }
    this.isUpdate ? this.aIFlowBuilderService.updateAiFlow(rawData.ID, rawData).subscribe((_) => {
      this.activeModal.close(true);
    }) : this.aIFlowBuilderService.createAiFlow(rawData).subscribe((_) => {
      this.activeModal.close(true);
    });
  }
  get isUpdate() {
    return !!this.id;
  }
  static {
    this.\u0275fac = function FlowSaveUpdateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlowSaveUpdateComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(AIFlowBuilderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowSaveUpdateComponent, selectors: [["app-flow-save-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 14, consts: [[1, "p-4", 3, "formGroup"], [1, "modal-header", 2, "justify-content", "space-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close-button", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "row", "gy-4"], [1, "col-sm-12"], ["for", "ex2", 1, "input-label"], ["id", "flowName", "formControlName", "flowName", "type", "text", 1, "form-control", 3, "ngClass", "value"], ["for", "ex3", 1, "input-label"], ["id", "flowDescription", "formControlName", "flowDescription", "type", "text", 1, "form-control", "custom-text-area", 3, "ngClass", "value"], [1, "update_detail", "mt-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function FlowSaveUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0)(1, "div")(2, "div", 1)(3, "h4", 2);
        \u0275\u0275text(4, "Flow Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function FlowSaveUpdateComponent_Template_button_click_5_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275element(6, "span", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "hr");
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
        \u0275\u0275text(11, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "\xA0*");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 9);
        \u0275\u0275text(17, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19, "\xA0*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "textarea", 10);
        \u0275\u0275text(21, "          ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
        \u0275\u0275listener("click", function FlowSaveUpdateComponent_Template_button_click_23_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275text(24, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, FlowSaveUpdateComponent_button_25_Template, 2, 0, "button", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.aiFlowForm);
        \u0275\u0275advance(12);
        \u0275\u0275styleProp("color", "red");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c05, ctx.submitted && ((ctx.f.flowName.errors == null ? null : ctx.f.flowName.errors.required) || (ctx.f.flowName.errors == null ? null : ctx.f.flowName.errors.pattern))))("value", ctx.aiFlowForm.get("flowName").value);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("color", "red");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c05, ctx.submitted && (ctx.f.flowDescription.errors == null ? null : ctx.f.flowDescription.errors.required)))("value", ctx.aiFlowForm.get("flowDescription").value);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.currentMode !== "Published");
      }
    }, dependencies: [NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgClass], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 100%;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  cursor: pointer;\n}\n.update_detail[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.update_detail[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  width: 140px;\n  height: 40px;\n  padding: 8px 0px 9px 0px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 8px;\n}\n.update_detail[_ngcontent-%COMP%]   button[type=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  border: 1px solid #CCC;\n  background: #F6F6F6;\n  display: flex;\n  width: 130px;\n  height: 40px;\n  padding: 4px 65px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=flow-save-update.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowSaveUpdateComponent, { className: "FlowSaveUpdateComponent", filePath: "src\\app\\ai-flow-builder\\components\\flow-save-update\\flow-save-update.component.ts", lineNumber: 14 });
})();

// src/app/ai-flow-builder/page/flow-builder/flow-builder.component.ts
var _c06 = ["jsonFileInput"];
var FlowBuilderComponent = class _FlowBuilderComponent {
  constructor(wfsrvc, dialog, userDetail, toastr, msg, fb, modalService, activatedRoute, router, aiFlowBuilderService) {
    this.wfsrvc = wfsrvc;
    this.dialog = dialog;
    this.userDetail = userDetail;
    this.toastr = toastr;
    this.msg = msg;
    this.fb = fb;
    this.modalService = modalService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.aiFlowBuilderService = aiFlowBuilderService;
    this.file = null;
    this.IsValidFile = false;
    this.fileName = "";
    this.errorMsg = "";
    this.dataSource = [];
    this.bodyData = {
      PageSize: 10,
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
              objectKey: "FlowName",
              displayName: "Flow Name",
              width: "18%"
            },
            {
              objectKey: "FlowDescription",
              displayName: "Flow Description",
              width: "19%"
            },
            {
              objectKey: "CrtdOn",
              displayName: "Date Added",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail?.TimeZone?.toString(),
              width: "23%"
            },
            {
              objectKey: "ModfOn",
              displayName: "Date Modified",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail?.TimeZone?.toString(),
              width: "23%"
            },
            {
              objectKey: "ID",
              displayName: "Designer",
              dataType: "LinkWithSpecialChar",
              SpecialChar: "Click here",
              width: "15%"
            }
          ],
          action: {
            Edit: true,
            Delete: true,
            aiSetting: true,
            Checkbox: true
          },
          columnFilter: false
        },
        paging: false
      }
    };
    this.alertMsgTxt = [];
  }
  ngOnInit() {
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
  actionClick(event) {
    switch (event.action) {
      case "Edit":
        this.CreateNewRecord(event.rowIndex);
        break;
      case "Delete":
        this.showDeleteMessage(event.rowIndex);
        break;
      case "aiSetting":
        this.openWebhook(event.rowIndex);
        break;
      case "SpecialCharClick":
        if (event.ColumnFilterDropdown === "Role") {
          this.CreateWFRoles(event.rowIndex);
        } else if (event.ColumnFilterDropdown === "BM") {
          this.CreateWFBM(event.rowIndex);
        } else if (event.ColumnFilterDropdown === "EmailTemplate") {
          this.CreateWFEmailTemplate(event.rowIndex);
        } else {
          if (window.location.href.includes("wfadmin")) {
            this.router.navigate(["wfadmin/admin/ai-flow/builder-entity"], { queryParams: { flowName: this.processName, id: this.dataSource[event.rowIndex].ID } });
          } else {
            this.router.navigate(["admin/ai-flow/builder-entity"], { queryParams: { flowName: this.dataSource[event.rowIndex].FlowName, id: this.dataSource[event.rowIndex].ID } });
          }
        }
        break;
    }
  }
  LoadData() {
    this.aiFlowBuilderService.getAiFlows().subscribe((aiFlows) => {
      this.dataSource = aiFlows || [];
    });
  }
  ChangeStatus(event) {
  }
  ChangeMode(event) {
  }
  OpenAdditionalPermission() {
    this.msg.showComponent(AdditionalPermissionComponent, {}, { size: "xl" });
  }
  CreateNewRecord(index) {
    const item = index !== null ? this.dataSource[index] : null;
    const modal = this.msg.showComponent(FlowSaveUpdateComponent, {
      id: item ? item.ID : null,
      dataList: item
      // currentMode: item?.WorflowMode,
    });
    modal.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully");
        this.LoadData();
      }
    }));
  }
  openWebhook(index) {
    const item = index !== null ? this.dataSource[index] : null;
    const modal = this.msg.showComponent(WebhookConfigComponent, {
      id: item ? item.ID : null,
      FlowName: item ? item.FlowName : null
      // dataList: item,
      // currentMode: item?.WorflowMode,
    }, { size: "lg" });
    modal.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully");
        this.LoadData();
      }
    }));
  }
  showDeleteMessage(Index) {
    if (Index > -1) {
      this.ID = this.dataSource[Index].ID;
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
      this.msg.showMessage("Warning", { body: "At least one record must be selected in order to delete" });
    }
  }
  deleteSelectedConfirmation(modelRef, Caller) {
    Caller.aiFlowBuilderService.deleteAIFlow(Caller.ID).subscribe((result) => {
      Caller.LoadData();
      modelRef.close();
    }, (error) => {
      Caller.msg.showMessage("Fail", { body: error.error });
    });
  }
  openExportGridConfigurationPopup(ExportType) {
    this.msg.showComponent(GridExportComponent, {
      ProcessName: this.processName,
      objBaseGrid: this,
      ExportType: ExportType.toUpperCase(),
      WFIds: this.dataSource.filter((rec) => rec.selected).map((rec) => rec.ID).join(),
      ExportUserData: (original) => {
        return __spreadProps(__spreadValues({}, original), {
          SortColumn: this.bodyData.SortColumn,
          SortOrder: this.bodyData.SortOrder,
          ProcessName: this.processName
        });
      }
    });
  }
  CreateWFRoles(index) {
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WfRoleGridComponent, {
      WFID: item.ID,
      WFName: item.FlowName
    });
    modal.result.then((res) => {
      res && this.toastr.success("Data saved successfully.");
    });
  }
  CreateWFBM(index) {
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WorkflowBmAssociationComponent, {
      WFID: item.ID,
      WFName: item.FlowName
      // Version: item.Ver,
    });
    modal.result.then((res) => res && this.toastr.success("Workflow BM saved successfully."));
  }
  CreateWFEmailTemplate(index) {
    const item = this.dataSource[index];
    const modal = this.msg.showComponent(WfEmailTemplateComponent, {
      WFId: item.ID,
      WFName: item.FlowName
      // Version: item.Ver,
    });
    modal.result.then((res) => res && this.toastr.success("Email Template saved successfully."));
  }
  OpenGridConfigStaticCol() {
    this.msg.showComponent(GridConfigStaticColComponent, { ProcessName: this.processName }, { size: "lg" });
  }
  openJsonImportModal(jsonModalTemplate) {
    this.resetFileDetails();
    const modalRef = this.modalService?.open(jsonModalTemplate, {
      ariaLabelledBy: "modal-basic-title",
      backdrop: "static",
      keyboard: false
    });
    if (modalRef) {
      modalRef.result?.then((result) => {
      }, (reason) => {
      });
    } else {
    }
  }
  resetFileDetails() {
    this.fileName = "";
    this.errorMsg = "";
    this.IsValidFile = true;
    this.file = null;
  }
  static {
    this.\u0275fac = function FlowBuilderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlowBuilderComponent)(\u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserDetail), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AIFlowBuilderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowBuilderComponent, selectors: [["app-flow-builder"]], viewQuery: function FlowBuilderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jsonModalTemplate = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "p-3"], [1, "d-flex", "justify-content-between", "flex-column", "flex-md-row", "align-items-center"], [1, "display-name"], ["type", "button", 1, "btn", "btn-warning", "text-white", "open-popup-btn", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-plus"], [1, "p-2"], [1, "grid"], [3, "actionClick", "dataSource", "headerMap", "itemsCount", "sNo"]], template: function FlowBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "Ai Flow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function FlowBuilderComponent_Template_button_click_4_listener() {
          return ctx.CreateNewRecord(null);
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "generic-grid", 7);
        \u0275\u0275listener("actionClick", function FlowBuilderComponent_Template_generic_grid_actionClick_8_listener($event) {
          return ctx.actionClick($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("dataSource", ctx.dataSource)("headerMap", ctx.HeaderMap)("itemsCount", ctx.itemsCount)("sNo", false);
      }
    }, dependencies: [
      ReactiveFormsModule,
      GenericGridComponent,
      FormsModule
    ], styles: ["\n\n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n}\n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.table-filters-group[_ngcontent-%COMP%]   .WFForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  background: #333 !important;\n  color: #fff !important;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]   .grid-pad[_ngcontent-%COMP%]   col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n.tableWrap[_ngcontent-%COMP%] {\n  overflow: visible;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0px;\n}\n.ColResize[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ColResize[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 5px;\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n  height: 100%;\n}\n.open-popup-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 25px;\n  min-width: fit-content;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 767.99px) {\n  .open-popup-btn[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 8px;\n  }\n}\n.config-icon[_ngcontent-%COMP%] {\n  line-height: 0;\n  padding: 7px;\n  color: #4d4d51;\n  font-size: 20px;\n  cursor: pointer;\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tags-list-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 12px;\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border-radius: 20px;\n  padding: 2px 5px 2px 10px;\n  margin: 3px;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #d0021b;\n  color: #fff;\n  border-radius: 50%;\n  margin-left: 5px;\n  font-size: 11px;\n  padding: 2px;\n  width: 20px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.resetFilter[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #eee;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n  margin: 5px;\n  text-align: center;\n  padding: 4px 10px 2px;\n  width: auto;\n  color: black;\n  border-bottom: 3px solid black;\n  text-decoration: none;\n  font-weight: bold;\n  letter-spacing: 0.43px;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #4c9d01;\n  color: #4c9d01;\n}\n.table-filters-group[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n  border-top: 1px solid #cbcbcb;\n  border-bottom: 1px solid #cbcbcb;\n  padding: 0px;\n}\n@media (max-width: 768px) {\n  .table-filters-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.export-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  width: 20%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  display: inline-block;\n  height: 34px;\n  padding: 5px;\n  margin-left: 10px;\n  line-height: 28px;\n  text-decoration: none;\n  color: #5a5a5a;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%] {\n  float: right;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f2f2f2;\n  border: 1px solid #cbcbcb;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  outline: none;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn.calendar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n.basicTable[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 126, 72, 0.1) !important;\n}\n.color-code[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: 0 2px 3px 0;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 30px;\n}\n.sListing2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-top: solid 1px #c3c3c3;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n@media (min-width: 992px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 1000px !important;\n  }\n}\n.checkboxMargin[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.drag-grip[_ngcontent-%COMP%] {\n  padding-right: 4px;\n  padding-top: 2px;\n  color: #ccc;\n  font-size: 12px;\n  cursor: move;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.btn-primary-special[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image:\n    linear-gradient(\n      to bottom,\n      #fff 0%,\n      #fff 100%);\n  border: 1px solid #ccc;\n  color: #333 !important;\n  border-radius: 5px;\n}\n.btn-small[_ngcontent-%COMP%] {\n  height: 26px;\n  padding: 0px 5px 0px 5px;\n  font-size: 1rem;\n  margin: 0px 0px 0px 10px;\n}\n.btnFltr[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  color: #fff;\n  background-color: #a6a6a6;\n  padding: 5px 10px;\n  margin: 0px 0px 10px 10px;\n  text-decoration: none !important;\n}\n.display-name[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=flow-builder.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowBuilderComponent, { className: "FlowBuilderComponent", filePath: "src\\app\\ai-flow-builder\\page\\flow-builder\\flow-builder.component.ts", lineNumber: 36 });
})();

// src/app/ai-flow-builder/ai-flow-builder.routing.ts
var routes = [
  {
    path: "",
    component: FlowBuilderComponent
  },
  {
    path: "builder-entity",
    component: BuilderEntityComponent
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-2JONSAPG.js.map
