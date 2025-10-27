import {
  AssociationComponent,
  BaseHttpService,
  CustomSelectComponent,
  arrayToList1
} from "./chunk-BQKXR4UC.js";
import {
  LiveVersionComponent
} from "./chunk-ILK2XUKT.js";
import {
  A11yModule,
  BasePortalOutlet,
  CdkPortalOutlet,
  CdkScrollable,
  ComponentPortal,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  Platform,
  PortalModule,
  TemplatePortal,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  hasModifierKey
} from "./chunk-5GIB77BJ.js";
import {
  DefaultValueAccessor,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgbActiveModal,
  NgbModal,
  ReactiveFormsModule,
  ToastrService,
  UntypedFormBuilder,
  animate,
  animateChild,
  environment,
  group,
  query,
  state,
  style,
  transition,
  trigger,
  ɵNgNoValidate
} from "./chunk-L2L6ECIJ.js";
import {
  ANIMATION_MODULE_TYPE,
  ActivatedRoute,
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Router,
  SkipSelf,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  defer,
  filter,
  inject,
  map,
  merge,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.closeOnNavigation = true;
    this.closeOnDestroy = true;
    this.closeOnOverlayDetachments = true;
  }
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _document, _config, _interactivityChecker, _ngZone, _overlayRef, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._overlayRef = _overlayRef;
    this._focusMonitor = _focusMonitor;
    this._platform = inject(Platform);
    this._focusTrap = null;
    this._elementFocusedBeforeDialogWasOpened = null;
    this._closeInteractionType = null;
    this._ariaLabelledByQueue = [];
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._isDestroyed = false;
    this.attachDomPortal = (portal) => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    this._document = _document;
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener("blur", callback);
          element.removeEventListener("mousedown", callback);
          element.removeAttribute("tabindex");
        };
        element.addEventListener("blur", callback);
        element.addEventListener("mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus();
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement();
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus);
          break;
      }
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static {
    this.\u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDialogContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(DialogConfig), \u0275\u0275directiveInject(InteractivityChecker), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayRef), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkDialogContainer,
      selectors: [["cdk-dialog-container"]],
      viewQuery: function CdkDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkPortalOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
      hostVars: 6,
      hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function CdkDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DialogConfig]
    }]
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: FocusMonitor
  }], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.closed = new Subject();
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var uniqueId = 0;
var Dialog = class _Dialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this._ariaHiddenElements = /* @__PURE__ */ new Map();
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._scrollStrategy = scrollStrategy;
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || `cdk-dialog-${uniqueId++}`;
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state2 = new OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state2.backdropClass = config.backdropClass;
    }
    return state2;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }), config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static {
    this.\u0275fac = function Dialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dialog)(\u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(DEFAULT_DIALOG_CONFIG, 8), \u0275\u0275inject(_Dialog, 12), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(DIALOG_SCROLL_STRATEGY));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Dialog,
      factory: _Dialog.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: DialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DEFAULT_DIALOG_CONFIG]
    }]
  }, {
    type: Dialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DIALOG_SCROLL_STRATEGY]
    }]
  }], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static {
    this.\u0275fac = function DialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _DialogModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [Dialog],
      imports: [
        OverlayModule,
        PortalModule,
        A11yModule,
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/dialog.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.delayFocusTrap = true;
    this.closeOnNavigation = true;
  }
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, _animationMode, focusMonitor) {
    super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, focusMonitor);
    this._animationMode = _animationMode;
    this._animationStateChanged = new EventEmitter();
    this._animationsEnabled = this._animationMode !== "NoopAnimations";
    this._actionSectionCount = 0;
    this._hostElement = this._elementRef.nativeElement;
    this._enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
    this._exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
    this._animationTimer = null;
    this._finishDialogOpen = () => {
      this._clearAnimationClasses();
      this._openAnimationDone(this._enterAnimationDuration);
    };
    this._finishDialogClose = () => {
      this._clearAnimationClasses();
      this._animationStateChanged.emit({
        state: "closed",
        totalTime: this._exitAnimationDuration
      });
    };
  }
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static {
    this.\u0275fac = function MatDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(MatDialogConfig), \u0275\u0275directiveInject(InteractivityChecker), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
      hostVars: 10,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx._config.id);
          \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
          \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 0,
      consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
          \u0275\u0275elementEnd()();
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: FocusMonitor
  }], null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  constructor(_ref, config, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    this._afterOpened = new Subject();
    this._beforeClosed = new Subject();
    this._state = MatDialogState.OPEN;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var uniqueId2 = 0;
var MatDialog = class _MatDialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  constructor(_overlay, injector, location, _defaultOptions, _scrollStrategy, _parentDialog, _overlayContainer, _animationMode) {
    this._overlay = _overlay;
    this._defaultOptions = _defaultOptions;
    this._scrollStrategy = _scrollStrategy;
    this._parentDialog = _parentDialog;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this.dialogConfigClass = MatDialogConfig;
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._dialog = injector.get(Dialog);
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || `mat-mdc-dialog-${uniqueId2++}`;
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static {
    this.\u0275fac = function MatDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialog)(\u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(Location, 8), \u0275\u0275inject(MAT_DIALOG_DEFAULT_OPTIONS, 8), \u0275\u0275inject(MAT_DIALOG_SCROLL_STRATEGY), \u0275\u0275inject(_MatDialog, 12), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatDialog,
      factory: _MatDialog.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var dialogElementUid = 0;
var MatDialogClose = class _MatDialogClose {
  constructor(dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.type = "button";
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static {
    this.\u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogClose)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
            return ctx._onButtonClick($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        type: "type",
        dialogResult: [0, "mat-dialog-close", "dialogResult"],
        _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      standalone: true,
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: MatDialog
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  constructor(_dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static {
    this.\u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogLayoutSection)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogLayoutSection,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: MatDialog
  }], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    this.id = `mat-mdc-dialog-title-${dialogElementUid++}`;
  }
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDialogTitle_BaseFactory;
      return function MatDialogTitle_Factory(__ngFactoryType__) {
        return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      standalone: true,
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static {
    this.\u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogContent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
      standalone: true,
      features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      standalone: true,
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDialogActions_BaseFactory;
      return function MatDialogActions_Factory(__ngFactoryType__) {
        return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
      hostVars: 6,
      hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      standalone: true,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static {
    this.\u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatDialogModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MatDialog],
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();
var _defaultParams = {
  params: {
    enterAnimationDuration: "150ms",
    exitAnimationDuration: "75ms"
  }
};
var matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: trigger("dialogContainer", [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    state("void, exit", style({
      opacity: 0,
      transform: "scale(0.7)"
    })),
    state("enter", style({
      transform: "none"
    })),
    transition("* => enter", group([animate("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)", style({
      transform: "none",
      opacity: 1
    })), query("@*", animateChild(), {
      optional: true
    })]), _defaultParams),
    transition("* => void, * => exit", group([animate("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)", style({
      opacity: 0
    })), query("@*", animateChild(), {
      optional: true
    })]), _defaultParams)
  ])
};

// src/app/core/services/form-view-api.service.ts
var FormViewApiService = class _FormViewApiService extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/formView`;
    this.GatewayAPIUrl = environment.Setting.GatewayAPIUrl;
  }
  getFormData(processName, canvasType, transactionId) {
    const url = `${this.baseUrl}/getBMWFJSON/${processName}/${canvasType}`;
    return this.get(url, { transactionId });
  }
  getCompanies() {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/getUniqueCompany`;
    return this.post(url, null);
  }
  getBMObjectsForCompanyAssociation(groupId, processId, bmId) {
    const payload = {
      //   CompanyId: companyId,
      ProcessId: processId,
      BMId: bmId,
      groupId
    };
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getBMOObjectListForCompAssociation`;
    return this.post(url, payload);
  }
  getWFObjectsForCompanyAssociation(groupId, processId, wfId) {
    const payload = {
      groupId,
      processId,
      wfId
    };
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/getWFObjectForCompanyAssociaton`;
    return this.post(url, payload);
  }
  updatetBMObjectsForCompanyAssociation(payload) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdateBMObjectAccToComp`;
    return this.post(url, payload);
  }
  updateWFObjectsForCompanyAssociation(payload) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/insertUpdateWFObjectAccToComp`;
    return this.post(url, payload);
  }
  getDmosByBMId(bmId) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getDmoFromBmId_ang`;
    return this.post(url, { bmId });
  }
  getSelectedDmosForBatchUpdate(bmId) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getBatchUpdateTopCornerDmos_ang`;
    return this.post(url, { bmId });
  }
  getSelectedDmosForBulkTrigger(bmId) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getBulkTriggerTopCornerDmos_ang`;
    return this.post(url, { bmId });
  }
  saveBatchUpdateDmos(bmId, processId, selectedItems) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdateBulkUpdateDmo_ang`;
    return this.post(url, { bmId, selectedItems, processId });
  }
  saveBulkTriggerDmos(bmId, processId, selectedItems) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdatebulkTriggerDMO_ang`;
    return this.post(url, { bmId, selectedItems, processId });
  }
  getTopCornerDmos(bmId, bmogId, type = "all") {
    let endpoint = "wfapibm/DataModel/getAvailableItemsOrder_Ang";
    if (type === "selected")
      endpoint = "wfapibm/DataModel/getTopCornerDmos_Ang";
    const url = `${this.GatewayAPIUrl}/${endpoint}`;
    return this.post(url, null, { BMID: bmId, bmogId });
  }
  saveTopCornerDmos(bmId, bmogId, dmoIds) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdateTopLeftCornerOrder_Ang`;
    return this.post(url, null, { bmId, dmoIds: dmoIds.toString(), bmogId });
  }
  generateXML(type, processName, version) {
    const url = `${this.baseUrl}/save${type}Json/${processName}`;
    return this.post(url, null, { Version: version });
  }
  getGroups(ProcessName) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/getUniqueGroup/${ProcessName}`;
    return this.post(url, null);
  }
  insertUpdateGroups(groupName, groupId) {
    const url = `${this.baseUrl}/InsertUpdateGroup/GroupId/0/GroupName/` + groupName;
    return this.post(url, null);
  }
  getCompaniesByGroupId(GroupId, ProcessName) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/GetCompanyByGroupId/GroupId/${GroupId}/ProcessName/${ProcessName}`;
    return this.post(url, null);
  }
  getBMOGS(bmId) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/GetBMOGListBasedOnBM`;
    return this.get(url, { bmId });
  }
  generateBMWFXML(type, processName, version) {
    const url = `${this.baseUrl}/save${type}Json/${processName}`;
    return this.post(url, null, { Version: version });
  }
  generateBMWFXMLGateway(type, processName, version) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/save${type}Json/${processName}`;
    return this.post(url, null, { Version: version });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275FormViewApiService_BaseFactory;
      return function FormViewApiService_Factory(__ngFactoryType__) {
        return (\u0275FormViewApiService_BaseFactory || (\u0275FormViewApiService_BaseFactory = \u0275\u0275getInheritedFactory(_FormViewApiService)))(__ngFactoryType__ || _FormViewApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormViewApiService, factory: _FormViewApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/wf/wfd/components/generatexml/generatexml.component.ts
function GenerateXmlComponent_ol_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol")(1, "li");
    \u0275\u0275text(2, "Go to the Live Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "li");
    \u0275\u0275text(4, "Select the Business Model and Workflow in the dropdowns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li");
    \u0275\u0275text(6, "Select Change Zone to set the Live Version to Live");
    \u0275\u0275elementEnd()();
  }
}
function GenerateXmlComponent_ol_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r1);
  }
}
function GenerateXmlComponent_ol_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol");
    \u0275\u0275template(1, GenerateXmlComponent_ol_13_li_1_Template, 2, 1, "li", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.alertMsgTxt);
  }
}
var GenerateXmlComponent = class _GenerateXmlComponent {
  constructor(data, modalService, route, router, formViewApi) {
    this.data = data;
    this.modalService = modalService;
    this.route = route;
    this.router = router;
    this.formViewApi = formViewApi;
    this.closeModal = new EventEmitter();
    this.type = "wf";
    this.processName = "";
    this.verNo = "";
    this.alertMsgTxt = [];
    this.type = data.type || this.type;
    this.processName = data.processName || this.processName;
    this.verNo = data.verNo || this.verNo;
    this.alertMsgTxt = data.alertMsgTxt || this.alertMsgTxt;
  }
  ngOnInit() {
  }
  goToLiveVersion() {
    console.log("Navigating to Live Version");
    this.closeModal.emit();
    const modalRef = this.modalService.open(LiveVersionComponent, { backdrop: "static", size: "lg", keyboard: false });
    modalRef.result.then((result) => __async(this, null, function* () {
      if (result) {
      }
    }), (reason) => {
    });
  }
  tryAgain() {
    console.log("Retrying Json Generation");
    this.formViewApi.generateXML(this.type === "wf" ? "wf" : "bm", this.processName, this.verNo).subscribe((success) => {
      this.closeModal.emit();
    }, (error) => {
    });
  }
  cancel() {
    this.closeModal.emit();
  }
  static {
    this.\u0275fac = function GenerateXmlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GenerateXmlComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormViewApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenerateXmlComponent, selectors: [["app-generatexml"]], inputs: { type: "type", processName: "processName", verNo: "verNo", alertMsgTxt: "alertMsgTxt" }, outputs: { closeModal: "closeModal" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 2, consts: [[1, "xml-dialog"], [1, "xml-dialog-header"], [2, "margin-top", "5px", "margin-bottom", "5px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "xml-dialog-body"], [4, "ngIf"], [2, "margin-top", "20px", "margin-bottom", "20px"], [1, "xml-dialog-footer"], [1, "btn", "btn-warning", 2, "margin", "10px", 3, "click"], [1, "btn", "btn-success", "invisible", 2, "margin-left", "10px", "margin-right", "265px", 3, "click"], [1, "btn", "btn-secondary", 2, "align-content", "right", 3, "click"], [4, "ngFor", "ngForOf"]], template: function GenerateXmlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3, "Unable to Generate JSON");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function GenerateXmlComponent_Template_button_click_4_listener() {
          return ctx.cancel();
        });
        \u0275\u0275element(5, "span", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "p");
        \u0275\u0275text(8, " We couldn't generate the JSON because the Business Model and Workflow are not yet associated in the Live Version. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p")(10, "strong");
        \u0275\u0275text(11, "To Resolve this :");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, GenerateXmlComponent_ol_12_Template, 7, 0, "ol", 6)(13, GenerateXmlComponent_ol_13_Template, 2, 1, "ol", 6);
        \u0275\u0275elementStart(14, "p", 7);
        \u0275\u0275text(15, "Once complete, retry generating the JSON.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
        \u0275\u0275listener("click", function GenerateXmlComponent_Template_button_click_17_listener() {
          return ctx.goToLiveVersion();
        });
        \u0275\u0275text(18, "Go to Live Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function GenerateXmlComponent_Template_button_click_19_listener() {
          return ctx.tryAgain();
        });
        \u0275\u0275text(20, "Try Again");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275listener("click", function GenerateXmlComponent_Template_button_click_21_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(22, "Cancel");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", !ctx.alertMsgTxt || ctx.alertMsgTxt.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.alertMsgTxt && ctx.alertMsgTxt.length);
      }
    }, dependencies: [NgIf, NgForOf], styles: ['\n\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px 20px 0px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #eb583b;\n  margin: 0;\n  width: 100%;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-body[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--Dark-Black, #000);\n  font-family: "Roboto", sans-serif;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .strong[_ngcontent-%COMP%] {\n  color: var(--Dark-Black, #000);\n  font-family: "Roboto", sans-serif;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 10px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  padding-left: 20px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--Dark-Black, #000);\n  font-family: "Roboto", sans-serif;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-footer[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex-shrink: 0;\n  border-radius: 0px 0px 10px 10px;\n  border-top: 1px solid var(--Dark, #d9d9d9);\n  background: #f6f6f6;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-footer[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: #fff;\n  display: inline-flex;\n  border-radius: 10px;\n  padding: 10px 18px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-footer[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: #fff;\n  display: inline-flex;\n  padding: 10px 18px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 10px;\n}\n.xml-dialog[_ngcontent-%COMP%]   .xml-dialog-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid var(--Gray-300, #d5d7da);\n  background: var(--Base-White, #fff);\n  color: var(--Dark-1, #4c4c4c);\n  font-family: "Roboto", sans-serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 24px;\n  box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);\n}\nbutton[_ngcontent-%COMP%] {\n  all: unset;\n  font-size: x-large;\n}\n/*# sourceMappingURL=generatexml.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenerateXmlComponent, { className: "GenerateXmlComponent", filePath: "src\\app\\admin\\wf\\wfd\\components\\generatexml\\generatexml.component.ts", lineNumber: 19 });
})();

// src/app/admin/pipe/search-column.pipe.ts
var SearchColumnPipe = class _SearchColumnPipe {
  transform(value, searchText, key) {
    if (searchText == null)
      return value;
    return value.filter((item) => {
      let txt = String(item[key]);
      return txt.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
  static {
    this.\u0275fac = function SearchColumnPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchColumnPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "searchColumn", type: _SearchColumnPipe, pure: true, standalone: true });
  }
};
var SearchDMOPipe = class _SearchDMOPipe {
  transform(value, searchText1, key) {
    if (searchText1 == null)
      return value;
    return value.filter((item) => {
      let txt = String(item[key]);
      return txt.toLowerCase().indexOf(searchText1.toLowerCase()) > -1;
    });
  }
  static {
    this.\u0275fac = function SearchDMOPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchDMOPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "searchDMO", type: _SearchDMOPipe, pure: true });
  }
};
var StripHtmlPipe = class _StripHtmlPipe {
  transform(value) {
    return value.replace(/<.*?>/g, "");
  }
  static {
    this.\u0275fac = function StripHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StripHtmlPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "striphtml", type: _StripHtmlPipe, pure: true });
  }
};
var SearchRowPipe = class _SearchRowPipe {
  transform(arr = [], filterString, key = "DataValue") {
    if (!arr || !filterString)
      return arr;
    const results = [];
    if (arr.length > 0) {
      for (let i = 0; i <= arr.length; i++) {
        if (filterString && arr[i][key].toString().toLowerCase().includes(filterString.toLowerCase()))
          results.push(arr[i]);
      }
    }
    return results;
  }
  static {
    this.\u0275fac = function SearchRowPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchRowPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "searchRow", type: _SearchRowPipe, pure: false });
  }
};
var ListFilterPipe = class _ListFilterPipe {
  transform(items, searchText, fieldName, fieldName1) {
    if (!items) {
      return [];
    }
    searchText = searchText.toLowerCase();
    return items.filter((DMOG) => DMOG.DMOGGUID.toLowerCase() === searchText);
  }
  static {
    this.\u0275fac = function ListFilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListFilterPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "myfilter", type: _ListFilterPipe, pure: true });
  }
};

// src/app/admin/Shared/company-association/company-association.component.ts
var _c0 = (a0, a1) => ({ "d-none": a0, "d-block": a1 });
function CompanyAssociationComponent_form_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-select", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const items_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("items", items_r2)("parentForm", ctx_r2.selectGroup);
  }
}
function CompanyAssociationComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 18)(1, "div", 10)(2, "label");
    \u0275\u0275text(3, "Groups");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CompanyAssociationComponent_form_9_ng_container_4_Template, 2, 2, "ng-container", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const addNew_r4 = \u0275\u0275reference(12);
    \u0275\u0275property("formGroup", ctx_r2.selectGroup);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.isAdd)("ngIfElse", addNew_r4);
  }
}
function CompanyAssociationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyAssociationComponent_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newGroupItem, $event) || (ctx_r2.newGroupItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newGroupItem);
  }
}
function CompanyAssociationComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 21);
    \u0275\u0275listener("click", function CompanyAssociationComponent_ng_container_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isAddAction());
    });
    \u0275\u0275text(2, "Add new group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CompanyAssociationComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CompanyAssociationComponent_ng_template_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isAdd = false);
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function CompanyAssociationComponent_div_18_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function CompanyAssociationComponent_div_18_div_7_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleSelected(true));
    });
    \u0275\u0275text(1, " Select all ");
    \u0275\u0275elementEnd();
  }
}
function CompanyAssociationComponent_div_18_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function CompanyAssociationComponent_div_18_div_7_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleSelected(false));
    });
    \u0275\u0275text(1, " Clear all ");
    \u0275\u0275elementEnd();
  }
}
function CompanyAssociationComponent_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyAssociationComponent_div_18_div_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.CompanyName, $event) || (ctx_r2.CompanyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275template(5, CompanyAssociationComponent_div_18_div_7_div_5_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "div", 32);
    \u0275\u0275template(8, CompanyAssociationComponent_div_18_div_7_div_8_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.CompanyName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2._allItems.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2._allItems.length > 0 && ctx_r2.selectedCompItems.length > 0);
  }
}
function CompanyAssociationComponent_div_18_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 43);
    \u0275\u0275listener("click", function CompanyAssociationComponent_div_18_div_8_div_3_Template_a_click_4_listener() {
      const item_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onAction(item_r13));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.CompanyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r13.isSelected ? "Added" : "Add", " ");
  }
}
function CompanyAssociationComponent_div_18_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 43);
    \u0275\u0275listener("click", function CompanyAssociationComponent_div_18_div_8_div_6_Template_a_click_4_listener() {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onAction(item_r15));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.CompanyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r15.isSelected ? "Remove" : "", " ");
  }
}
function CompanyAssociationComponent_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38);
    \u0275\u0275template(3, CompanyAssociationComponent_div_18_div_8_div_3_Template, 6, 2, "div", 39);
    \u0275\u0275pipe(4, "searchColumn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275template(6, CompanyAssociationComponent_div_18_div_8_div_6_Template, 6, 2, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 2, ctx_r2._allItems, ctx_r2.CompanyName, "CompanyName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.selectedCompItems);
  }
}
function CompanyAssociationComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 22)(2, "label", 23)(3, "input", 24);
    \u0275\u0275listener("change", function CompanyAssociationComponent_div_18_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAllCompanyAssociation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 25);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "All Companies");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CompanyAssociationComponent_div_18_div_7_Template, 9, 3, "div", 26)(8, CompanyAssociationComponent_div_18_div_8_Template, 7, 6, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r2.allAssociationCheck);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.allAssociationCheck);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2._allItems.length > 0 && !ctx_r2.allAssociationCheck);
  }
}
function CompanyAssociationComponent_app_association_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-association", 44);
    \u0275\u0275listener("select", function CompanyAssociationComponent_app_association_21_Template_app_association_select_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r17 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("displayWith", ctx_r2.displayWith)("uniqueWith", ctx_r2.uniqueWith)("items", items_r17[0])("associatedItems", items_r17[1])("checkBy", ctx_r2.checkBy);
  }
}
var CompanyAssociationComponent = class _CompanyAssociationComponent {
  addIsSelectedToItems(items, idKey, nameKey) {
    return items.map((item) => __spreadProps(__spreadValues({}, item), { isSelected: false }));
  }
  constructor(formView, fb, ref, toastr, cdr) {
    this.formView = formView;
    this.fb = fb;
    this.ref = ref;
    this.toastr = toastr;
    this.cdr = cdr;
    this.displayWith = (item) => String(item);
    this.uniqueWith = (item) => String(item);
    this.getAssociationsWith = (_companyId) => of([]);
    this.groupDisplayWith = (item) => String(item);
    this.groupUniqueWith = (item) => String(item);
    this.isAdd = false;
    this._allItems = [];
    this.selectedCompItems = [];
    this._allCompanyAssocationItems = [];
    this._isNewItemselected = false;
    this.allAvaliableGroups = [];
    this.allCompanyAssociatedWithProcess = [];
    this.newSelectedCompItems = true;
    this.allAssociationCheck = false;
    this.selectedItems = [];
    this.emptyField = false;
    this.selectGroup = this.fb.group({
      group: [null]
    });
    this.companies$ = this.formView.getCompanies().pipe(map((items) => items.slice(1).map((item) => __spreadProps(__spreadValues({}, item), {
      isSelected: this.selectedCompItems.some((selected) => selected.CompanyID === item.CompanyID)
    }))));
    this.associations$ = this.selectGroup.get("group").valueChanges.pipe(map((value) => value?.key ?? null), switchMap((id) => this.getAssociationsWith(id).pipe(map((items) => {
      let availableItems = items ?? [];
      let selectedItems = [];
      if (this.emptyField) {
        availableItems = availableItems.map((item) => __spreadProps(__spreadValues({}, item), {
          isAlreadySelected: 0
        }));
        selectedItems = [];
      } else {
        selectedItems = availableItems.length ? availableItems.filter((item) => item[this.checkBy]) : [];
      }
      this.selectedItems = selectedItems;
      return [availableItems, selectedItems];
    }))));
    this.grouplist$ = this.formView.getGroups(sessionStorage.getItem("AppName")).pipe(map((items) => arrayToList1(items.slice(1), "ID", "GROUPNAME", "IsAllComp")));
    this.checkWith = (item) => item[this.checkBy] ? "Added" : "Add";
    this.onSelect = (items) => this.selectedItems = items;
    this.onAction = (item) => __async(this, null, function* () {
      this._isNewItemselected = true;
      const original = this._allItems.find((rec) => item["CompanyID"] === rec.CompanyID);
      if (!original["isSelected"]) {
        const yes = this.allCompanyAssociatedWithProcess.find((comp) => comp.CompId == item["CompanyID"]);
        if (yes) {
          this.toastr.warning("This company is already associated with another group in this process.");
          return false;
        }
        original.isSelected = true;
        this.selectedCompItems.push(original);
        this.newSelectedCompItems = false;
      } else {
        const indexToRemove = this.selectedCompItems.findIndex((item2) => item2.CompanyID === original.CompanyID);
        if (indexToRemove !== -1) {
          const removedItem = this.selectedCompItems.splice(indexToRemove, 1)[0];
          this.newSelectedCompItems = false;
          const originalIndex = this._allItems.findIndex((rec) => removedItem.CompanyID === rec.CompanyID);
          if (originalIndex !== -1) {
            this._allItems[originalIndex].isSelected = false;
            const indexToRemove2 = this.allCompanyAssociatedWithProcess.findIndex((allItems) => allItems.CompId === item["CompanyID"] && allItems.groupId === this.selectedGroupsKey);
            if (indexToRemove2 !== -1)
              this.allCompanyAssociatedWithProcess.splice(indexToRemove2, 1);
          }
        }
      }
    });
    this.toggleSelected = (selected) => __async(this, null, function* () {
      if (selected) {
        this._allItems.forEach((item) => {
          const canAdd = this.selectedCompItems.find((rec) => rec.CompanyID === item.CompanyID);
          if (canAdd == void 0) {
            item.isSelected = true;
            this.selectedCompItems.push(item);
            this.newSelectedCompItems = false;
          }
        });
      } else {
        this._allItems.forEach((item) => {
          item.isSelected = false;
        });
        this.selectedCompItems = [];
        this.newSelectedCompItems = true;
      }
    });
  }
  ngOnInit() {
    this.grouplist$.subscribe((groups) => {
      this.allAvaliableGroups = groups;
      if (groups.length > 0)
        this.selectGroup.get("group")?.setValue(this.allAvaliableGroups[0]);
    });
    this.formView.getCompanies().pipe(map((items) => {
      return items.slice(1).map((item) => __spreadProps(__spreadValues({}, item), {
        isSelected: this.selectedCompItems.some((selected) => selected.CompanyID === item.CompanyID)
      }));
    })).subscribe({
      next: (res) => {
        this._allItems = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.selectGroup.get("group").valueChanges.subscribe((group2) => {
      if (group2?.objisCheck != null && group2.objisCheck == 1) {
        this.allAssociationCheck = true;
      } else {
        this.allAssociationCheck = false;
      }
      if (this.allAvaliableGroups.length > 0) {
        this.formView.getCompaniesByGroupId(group2?.key, sessionStorage.getItem("AppName")).subscribe((res) => {
          if (res !== null) {
            this.selectedGroupsKey = group2?.key;
            this.resetCompanylistItems();
            this.selectedCompItems = [];
            this.allCompanyAssociatedWithProcess = res["allAssociatedCompany"];
            if (res["isAllComp"] == 1) {
              this.allAssociationCheck = true;
            }
            this._allCompanyAssocationItems = res["AssociatedCompanyToGroup"];
            this._allCompanyAssocationItems.forEach((company) => {
              this.selectedCompItems.push(company);
              this.cdr.detectChanges();
            });
          }
        }, (err) => {
        });
      }
    });
    this.selectGroup.get("group")?.valueChanges.subscribe((selectedValue) => {
      console.log("Selected group changed:", selectedValue);
      this.onGroupChange(selectedValue);
    });
  }
  resetCompanylistItems() {
    this._allItems.forEach((ele) => {
      ele.isSelected = false;
    });
  }
  onSubmit() {
    const groupId = this.selectGroup.get("group").value;
    if (this.isAdd == true) {
      if (this.newGroupItem) {
        const canAdd = this.allAvaliableGroups.find((ele) => ele.value == this.newGroupItem);
        if (canAdd) {
          this.toastr.warning("Please select the diffrent group name.");
          return false;
        }
      } else {
        this.toastr.warning("Please insert group name.");
        return false;
      }
    }
    if (this.selectedCompItems.length == 0 && this.allAssociationCheck == false) {
      this.toastr.warning("Please select atleast one company for company assocation.");
      return false;
    }
    const payload = {
      groupName: groupId?.value || this.newGroupItem,
      companyId: this.allAssociationCheck == false ? this.selectedCompItems.map((company) => company.CompanyID).join(";") : "",
      selectedItems: this.allAssociationCheck == false ? this.selectedItems : "",
      IsAllComp: this.allAssociationCheck
    };
    this.allAvaliableGroups = [];
    this.ref.close(payload);
  }
  toggleAllCompanyAssociation() {
    if (this.allAssociationCheck) {
      this.allAssociationCheck = false;
    } else {
      this.allAssociationCheck = true;
    }
  }
  isAddAction() {
    this.isAdd = true;
    this.selectGroup.controls["group"].setValue(null);
    this.selectedCompItems = [];
    this.newSelectedCompItems = true;
  }
  onGroupChange(value) {
    if (!value?.value) {
      this.selectedCompItems = [];
      this.emptyField = true;
    } else {
      this.emptyField = false;
    }
    this.formView.getCompanies().pipe(map((items) => {
      return items.slice(1).map((item) => __spreadProps(__spreadValues({}, item), {
        isSelected: this.selectedCompItems.some((selected) => selected.CompanyID === item.CompanyID)
      }));
    })).subscribe({
      next: (res) => {
        this._allItems = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  static {
    this.\u0275fac = function CompanyAssociationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyAssociationComponent)(\u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyAssociationComponent, selectors: [["app-company-association"]], inputs: { displayWith: "displayWith", uniqueWith: "uniqueWith", getAssociationsWith: "getAssociationsWith", checkBy: "checkBy", groupDisplayWith: "groupDisplayWith", groupUniqueWith: "groupUniqueWith" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 15, consts: [["addNew", ""], ["addItem", ""], [1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [1, "row", "mb-4"], [1, "col-lg-3"], ["class", "span-6", 3, "formGroup", 4, "ngIf"], [1, "col-lg-4", "align-items-center", "mt-2"], [1, "form-group"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "mt-3", 3, "ngClass"], ["class", "row", 3, "displayWith", "uniqueWith", "items", "associatedItems", "checkBy", "select", 4, "ngIf"], [1, "popup__actions", "mt-4"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "span-6", 3, "formGroup"], ["controlName", "group", 3, "items", "parentForm"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-link", "mt-3", "btn-sm", 3, "click"], [1, "mb-1"], [1, "checkbox"], ["type", "checkbox", 3, "change", "checked"], [1, "skin"], ["class", "row mb-3", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "row", "mb-3"], [1, "col-lg-6", "d-flex", "justify-content-between"], [1, "search-container"], ["type", "text", "placeholder", "Search Company", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "actions"], ["class", "action-btn", 3, "click", 4, "ngIf"], [1, "col-lg-6"], [1, "action-btn", 3, "click"], [1, "container"], [1, "row"], [1, "col-lg-6", "scrollable-column", 2, "border", "1px solid #dfdfdf"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "scrollable-column"], [1, "item"], [1, "item__content"], ["href", "javascript:void(0)", 1, "action-btn", 3, "click"], [1, "row", 3, "select", "displayWith", "uniqueWith", "items", "associatedItems", "checkBy"]], template: function CompanyAssociationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2");
        \u0275\u0275text(3, "Company Association");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 4)(5, "i", 5);
        \u0275\u0275listener("click", function CompanyAssociationComponent_Template_i_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ref.close());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
        \u0275\u0275template(9, CompanyAssociationComponent_form_9_Template, 5, 3, "form", 8);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275template(11, CompanyAssociationComponent_ng_template_11_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
        \u0275\u0275template(15, CompanyAssociationComponent_ng_container_15_Template, 3, 0, "ng-container", 11)(16, CompanyAssociationComponent_ng_template_16_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(18, CompanyAssociationComponent_div_18_Template, 9, 3, "div", 12);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275template(21, CompanyAssociationComponent_app_association_21_Template, 1, 5, "app-association", 14);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
        \u0275\u0275listener("click", function CompanyAssociationComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ref.close());
        });
        \u0275\u0275text(25, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 17);
        \u0275\u0275listener("click", function CompanyAssociationComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275text(27, "Save");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const addItem_r18 = \u0275\u0275reference(17);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 6, ctx.grouplist$));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.isAdd)("ngIfElse", addItem_r18);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 8, ctx.associations$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c0, ctx.allAssociationCheck, !ctx.allAssociationCheck));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 10, ctx.associations$));
      }
    }, dependencies: [NgIf, CommonModule, NgClass, NgForOf, AsyncPipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, CustomSelectComponent, FormsModule, NgModel, AssociationComponent, SearchColumnPipe], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  width: auto;\n  overflow: hidden;\n  border: 1px solid #dfdfdf;\n}\n.item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 3px 0;\n  vertical-align: middle;\n  color: #4d4d4d;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #dfdfdf;\n}\n.item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.item__content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.item__action[_ngcontent-%COMP%] {\n  color: var(--primary);\n  cursor: pointer;\n  font-weight: 500;\n}\n.item__action.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  color: var(--secondary);\n  pointer-events: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  width: 64%;\n}\n.scrollable-column[_ngcontent-%COMP%] {\n  max-height: 210px;\n  min-height: 210px;\n  overflow-y: auto;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 0.8em;\n  padding: 0 1em;\n  color: var(--primary);\n  font-weight: 500;\n  cursor: pointer;\n}\n.action-btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.btn-link[_ngcontent-%COMP%] {\n  outline: none !important;\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:not(:disabled)    + .skin[_ngcontent-%COMP%] {\n  background-color: #EB583B;\n  border-color: #EB583B;\n  border-radius: 2px;\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  display: inline-block;\n  height: 16px;\n  left: 0;\n  position: absolute;\n  margin-right: 10px;\n  top: -2px;\n  width: 16px;\n  float: left;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  height: 19px;\n  width: 19px;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  line-height: 14px;\n  color: #fff;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  content: "\\f00c";\n}\n.close[_ngcontent-%COMP%]:before, \n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after, \n.checkbox[_ngcontent-%COMP%]   input.indeterminate[_ngcontent-%COMP%]    + .skin[_ngcontent-%COMP%]:after {\n  display: inline-block;\n  font-family: "Font Awesome 5 Free" !important;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 900;\n  font-variant: normal;\n  height: 0.3em;\n  margin-right: 0px;\n  text-transform: none;\n  line-height: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n  position: absolute;\n  speak: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  width: 1.2em;\n  top: 8px;\n  left: 0px;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 25px;\n  position: relative;\n  top: -3px;\n}\n/*# sourceMappingURL=company-association.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyAssociationComponent, { className: "CompanyAssociationComponent", filePath: "src\\app\\admin\\Shared\\company-association\\company-association.component.ts", lineNumber: 23 });
})();

export {
  SearchColumnPipe,
  FormViewApiService,
  CompanyAssociationComponent,
  MatDialog,
  GenerateXmlComponent
};
//# sourceMappingURL=chunk-NIXK6VWY.js.map
