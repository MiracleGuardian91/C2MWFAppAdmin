import {
  DataModelerApiService
} from "./chunk-BB5KTJXW.js";
import {
  BmEntryComponent
} from "./chunk-F52WDQUI.js";
import {
  SharedModule
} from "./chunk-AVHCICF3.js";
import {
  BmService,
  GridExportComponent
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
import "./chunk-74OCJGBF.js";
import {
  AssociationComponent,
  BaseHttpService,
  ColumnFilterService,
  GenericGridComponent
} from "./chunk-BQKXR4UC.js";
import {
  GridViewMasterConfigurationComponent
} from "./chunk-Y5HOE45L.js";
import {
  LiveVersionComponent
} from "./chunk-ILK2XUKT.js";
import "./chunk-FRU5HPWK.js";
import {
  CdkDrag,
  CdkDropList,
  moveItemInArray
} from "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  ListviewService,
  MessageService,
  UserDetail
} from "./chunk-43FCU5DY.js";
import "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgOptionComponent,
  NgSelectComponent,
  NgSelectOption,
  NgbActiveModal,
  NgbModal,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ToastrService,
  UntypedFormBuilder,
  UtilService,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Router,
  RouterModule,
  catchError,
  forkJoin,
  lastValueFrom,
  map,
  of,
  retry,
  switchMap,
  tap,
  throwError,
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
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/admin/BM/components/bm-grid/bm-grid.component.ts
var import_file_saver = __toESM(require_FileSaver_min());

// src/app/admin/BM/components/batch-update/batch-update.component.ts
function BatchUpdateComponent_app_association_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-association", 9);
    \u0275\u0275listener("select", function BatchUpdateComponent_app_association_8_Template_app_association_select_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("displayWith", ctx_r1.displayWith)("uniqueWith", ctx_r1.uniqueWith)("items", items_r3[0])("associatedItems", items_r3[1]);
  }
}
var BatchUpdateComponent = class _BatchUpdateComponent {
  constructor(formViewApi, ref) {
    this.formViewApi = formViewApi;
    this.ref = ref;
    this.onSelect = (items) => this.selectedItems = items;
    this.displayWith = (item) => `${item.bmoNameArea} > ${item.dmogNameArea} > ${item.dmoNameArea}`;
    this.uniqueWith = (item) => item.dmoid;
  }
  ngOnInit() {
    this.associations$ = this.getBatchUpdateDmos(this.bmId);
  }
  getBatchUpdateDmos(bmId) {
    return forkJoin([
      this.formViewApi.getDmosByBMId(bmId),
      this.formViewApi.getSelectedDmosForBatchUpdate(bmId).pipe(map((res) => res.Table))
    ]).pipe(map(([all, selected]) => {
      const updatedSelected = [];
      selected.forEach((item) => {
        const found = all.find((rec) => +rec.dmoid === item.dmoid);
        if (found) {
          found["selected"] = true;
          updatedSelected.push(found);
        }
      });
      return [all, updatedSelected];
    }));
  }
  onSubmit() {
    const ids = this.selectedItems.map((item) => item.dmoid).toString();
    this.formViewApi.saveBatchUpdateDmos(this.bmId, this.processId, ids).subscribe((res) => this.ref.close(res));
  }
  static {
    this.\u0275fac = function BatchUpdateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BatchUpdateComponent)(\u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatchUpdateComponent, selectors: [["app-batch-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [1, "double-column"], ["class", "span-12", "checkBy", "selected", 3, "displayWith", "uniqueWith", "items", "associatedItems", "select", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["checkBy", "selected", 1, "span-12", 3, "select", "displayWith", "uniqueWith", "items", "associatedItems"]], template: function BatchUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Batch Update");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 2)(5, "i", 3);
        \u0275\u0275listener("click", function BatchUpdateComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, BatchUpdateComponent_app_association_8_Template, 1, 4, "app-association", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function BatchUpdateComponent_Template_button_click_11_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275text(12, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function BatchUpdateComponent_Template_button_click_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(14, "Save");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 2, ctx.associations$));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.selectedItems);
      }
    }, dependencies: [
      NgIf,
      AssociationComponent,
      AsyncPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchUpdateComponent, { className: "BatchUpdateComponent", filePath: "src\\app\\admin\\BM\\components\\batch-update\\batch-update.component.ts", lineNumber: 21 });
})();

// src/app/admin/BM/components/bulk-trigger/bulk-trigger.component.ts
function BulkTriggerComponent_app_association_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-association", 9);
    \u0275\u0275listener("select", function BulkTriggerComponent_app_association_8_Template_app_association_select_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("displayWith", ctx_r1.displayWith)("uniqueWith", ctx_r1.uniqueWith)("items", items_r3[0])("associatedItems", items_r3[1]);
  }
}
var BulkTriggerComponent = class _BulkTriggerComponent {
  constructor(formViewApi, ref) {
    this.formViewApi = formViewApi;
    this.ref = ref;
    this.onSelect = (items) => this.selectedItems = items;
    this.displayWith = (item) => `${item.bmoNameArea} > ${item.dmogNameArea} > ${item.dmoNameArea}`;
    this.uniqueWith = (item) => item.dmoid;
  }
  ngOnInit() {
    this.associations$ = this.getBatchUpdateDmos(this.bmId);
  }
  getBatchUpdateDmos(bmId) {
    return forkJoin([
      this.formViewApi.getDmosByBMId(bmId),
      this.formViewApi.getSelectedDmosForBulkTrigger(bmId).pipe(map((res) => res.Table))
    ]).pipe(map(([all, selected]) => {
      const updatedSelected = [];
      selected.forEach((item) => {
        const found = all.find((rec) => +rec.dmoid === item.dmoid);
        found["selected"] = true;
        updatedSelected.push(found);
      });
      return [all, updatedSelected];
    }));
  }
  onSubmit() {
    const ids = this.selectedItems.map((item) => item.dmoid).toString();
    this.formViewApi.saveBulkTriggerDmos(this.bmId, this.processId, ids).subscribe((res) => this.ref.close(res));
  }
  static {
    this.\u0275fac = function BulkTriggerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkTriggerComponent)(\u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkTriggerComponent, selectors: [["app-bulk-trigger"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [1, "double-column"], ["class", "span-12", "checkBy", "selected", 3, "displayWith", "uniqueWith", "items", "associatedItems", "select", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["checkBy", "selected", 1, "span-12", 3, "select", "displayWith", "uniqueWith", "items", "associatedItems"]], template: function BulkTriggerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Bulk Trigger");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 2)(5, "i", 3);
        \u0275\u0275listener("click", function BulkTriggerComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, BulkTriggerComponent_app_association_8_Template, 1, 4, "app-association", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function BulkTriggerComponent_Template_button_click_11_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275text(12, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function BulkTriggerComponent_Template_button_click_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(14, "Save");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 2, ctx.associations$));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.selectedItems);
      }
    }, dependencies: [
      NgIf,
      AssociationComponent,
      AsyncPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkTriggerComponent, { className: "BulkTriggerComponent", filePath: "src\\app\\admin\\BM\\components\\bulk-trigger\\bulk-trigger.component.ts", lineNumber: 23 });
})();

// src/app/admin/core/services/bm-api.service.ts
var BmApiService = class _BmApiService extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/bm`;
    this.GatewayAPIUrl = `${environment.Setting.GatewayAPIUrl}/wfapibm/DataModel`;
  }
  getUniqueDmos(bmId) {
    const url = `${this.GatewayAPIUrl}/getBmUniqueDmo`;
    return this.get(url, { bmId });
  }
  saveUniqueDmos(bmId, dmoGuids) {
    const url = `${this.GatewayAPIUrl}/saveUniqueDmo`;
    return this.post(url, { bmId, dmoGuids });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BmApiService_BaseFactory;
      return function BmApiService_Factory(__ngFactoryType__) {
        return (\u0275BmApiService_BaseFactory || (\u0275BmApiService_BaseFactory = \u0275\u0275getInheritedFactory(_BmApiService)))(__ngFactoryType__ || _BmApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BmApiService, factory: _BmApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/BM/components/unique-constraint/unique-constraint.component.ts
function UniqueConstraintComponent_app_association_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-association", 9);
    \u0275\u0275listener("select", function UniqueConstraintComponent_app_association_8_Template_app_association_select_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("displayWith", ctx_r1.displayWith)("uniqueWith", ctx_r1.uniqueWith)("items", items_r3[0])("associatedItems", items_r3[1]);
  }
}
var UniqueConstraintComponent = class _UniqueConstraintComponent {
  constructor(bmApi, ref) {
    this.bmApi = bmApi;
    this.ref = ref;
    this.getUniqueDmos = () => {
      return this.bmApi.getUniqueDmos(this.bmId).pipe(map(({ AvaialableDmo, SelectedDmo }) => {
        const updatedSelected = [];
        SelectedDmo.forEach((dmo) => {
          const found = AvaialableDmo.find((item) => item.DmoId === dmo.DmoId);
          found["selected"] = true;
          updatedSelected.push(found);
        });
        return [AvaialableDmo, updatedSelected];
      }));
    };
    this.onSelect = (items) => this.selectedItems = items;
    this.displayWith = (item) => `${item.DisplayName}`;
    this.uniqueWith = (item) => `${item.DmoId}`;
  }
  ngOnInit() {
    this.associations$ = this.getUniqueDmos();
  }
  onSubmit() {
    const ids = this.selectedItems.map((item) => item.DmoGuid).toString();
    this.bmApi.saveUniqueDmos(this.bmId, ids).subscribe((res) => this.ref.close(res));
  }
  static {
    this.\u0275fac = function UniqueConstraintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UniqueConstraintComponent)(\u0275\u0275directiveInject(BmApiService), \u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UniqueConstraintComponent, selectors: [["app-unique-constraint"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [1, "double-column"], ["class", "span-12", "checkBy", "selected", 3, "displayWith", "uniqueWith", "items", "associatedItems", "select", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["checkBy", "selected", 1, "span-12", 3, "select", "displayWith", "uniqueWith", "items", "associatedItems"]], template: function UniqueConstraintComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Unique Constraint");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 2)(5, "i", 3);
        \u0275\u0275listener("click", function UniqueConstraintComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, UniqueConstraintComponent_app_association_8_Template, 1, 4, "app-association", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function UniqueConstraintComponent_Template_button_click_11_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275text(12, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function UniqueConstraintComponent_Template_button_click_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(14, "Save");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 2, ctx.associations$));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.selectedItems);
      }
    }, dependencies: [
      NgIf,
      AssociationComponent,
      AsyncPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UniqueConstraintComponent, { className: "UniqueConstraintComponent", filePath: "src\\app\\admin\\BM\\components\\unique-constraint\\unique-constraint.component.ts", lineNumber: 22 });
})();

// src/app/admin/BM/components/bm-wf-association/bm-wf-association.component.ts
function BmWfAssociationComponent_li_19_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function BmWfAssociationComponent_li_19_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const bm_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.AddBMFilter(bm_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btnbmFilterText_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", btnbmFilterText_r4, "");
  }
}
function BmWfAssociationComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275template(4, BmWfAssociationComponent_li_19_a_4_Template, 2, 1, "a", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bm_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bm_r2.WorkFlowName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.GridBMFilter[bm_r2.WorkFlowId] == void 0 ? "Add" : "Added");
  }
}
function BmWfAssociationComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 23);
    \u0275\u0275listener("click", function BmWfAssociationComponent_li_23_Template_a_click_4_listener() {
      const bm_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.DeleteBmFilter(bm_r6));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bm_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bm_r6.WorkFlowName);
  }
}
var BmWfAssociationComponent = class _BmWfAssociationComponent {
  constructor(formBuilder, activeModal, bmsrvc, toastr) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.bmsrvc = bmsrvc;
    this.toastr = toastr;
    this.AvailableBMList = [];
    this.AssociatedBMList = [];
    this.GridBMFilter = {};
    this.GridColumnList = [];
    this.errorMsg = "";
  }
  ngOnInit() {
    this.GetBmAssociatedWf();
  }
  GetBmAssociatedWf() {
    this.bmsrvc.GetBmAssociatedWf(this.BMID).subscribe({
      next: (data) => {
        if (!!data) {
          this.AvailableBMList = data.AvailableWF;
          this.AssociatedBMList = data.AssociatedWF;
          if (!!this.AssociatedBMList && this.AssociatedBMList.length > 0) {
            for (let i = 0; i < this.AssociatedBMList.length; i++) {
              this.AvailableBMList.push(this.AssociatedBMList[i]);
              this.GridBMFilter[this.AssociatedBMList[i].WorkFlowId] = "1";
            }
          }
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  AddBMFilter(bm) {
    if (this.GridBMFilter[bm.WorkFlowId] === void 0) {
      this.GridBMFilter[bm.WorkFlowId] = "1";
      this.AssociatedBMList.push(bm);
    }
  }
  DeleteBmFilter(bm) {
    const txt = this.AssociatedBMList.indexOf(bm);
    if (txt > -1) {
      this.AssociatedBMList.splice(txt, 1);
    }
    delete this.GridBMFilter[bm.WorkFlowId];
  }
  dropColumn(event) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }
  SaveWorkflowBMAssociation() {
    if (this.AssociatedBMList.length > 0) {
      let wfIds = "";
      this.AssociatedBMList.forEach((el) => {
        wfIds = wfIds + el.WorkFlowId + ",";
      });
      wfIds = wfIds.substring(0, wfIds.length - 1);
      this.bmsrvc.SaveBMAssociatedWF(wfIds, this.BMID).subscribe({
        next: (result) => {
          if (!!result && result === "Data saved successfully.") {
            this.activeModal.close(true);
            return true;
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      this.toastr.warning("Add at least one Business Model to associate.");
    }
  }
  static {
    this.\u0275fac = function BmWfAssociationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmWfAssociationComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(BmService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BmWfAssociationComponent, selectors: [["app-bm-wf-association"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 4, consts: [[1, "modal-header"], [1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [1, "form-group", "row"], [1, "col-sm-12"], ["aria-label", "Modal heading text content", "role", "document", 1, "modal-body"], [1, "fWrap", "sections"], [1, "form-row", "nomar"], [1, "drag_grid", "state-filter-wrap", "col-sm-12"], [1, "row"], [1, "left_cell"], [1, "scroll_wrap"], [4, "ngFor", "ngForOf"], [1, "right_cell"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["class", "pop", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["cdkDrag", "", 1, "pop"]], template: function BmWfAssociationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form")(1, "div")(2, "div", 0)(3, "h4", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275listener("click", function BmWfAssociationComponent_Template_button_click_5_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275element(6, "span", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "section", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "ul");
        \u0275\u0275template(19, BmWfAssociationComponent_li_19_Template, 5, 2, "li", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 16)(21, "div", 14)(22, "ul", 17);
        \u0275\u0275listener("cdkDropListDropped", function BmWfAssociationComponent_Template_ul_cdkDropListDropped_22_listener($event) {
          return ctx.dropColumn($event);
        });
        \u0275\u0275template(23, BmWfAssociationComponent_li_23_Template, 6, 1, "li", 18);
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275elementStart(24, "div", 19)(25, "button", 20);
        \u0275\u0275listener("click", function BmWfAssociationComponent_Template_button_click_25_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275text(26, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 21);
        \u0275\u0275listener("click", function BmWfAssociationComponent_Template_button_click_27_listener() {
          return ctx.SaveWorkflowBMAssociation();
        });
        \u0275\u0275text(28, "Submit");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("Business Model & Workflow association (", ctx.BMName, " ", ctx.Version, ")");
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.AvailableBMList);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.AssociatedBMList);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormsModule, NgForm, NgForOf, NgIf, CdkDropList, CdkDrag], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.modal-body[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\n.update_detail[_ngcontent-%COMP%] {\n  padding: 40px 0 25px;\n  text-align: right;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 150px;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-color: #4C9E00;\n  background-color: #fff;\n  color: #4C9E00;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.drag_grid.state-filter-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: 0px !important;\n}\n.drag_grid[_ngcontent-%COMP%] {\n  border: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  text-align: left;\n  width: 50%;\n  padding: 20px 15px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: 600px;\n  margin: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%] {\n  width: auto;\n  height: 205px;\n  overflow: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  margin: 0px;\n  padding-left: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  border-bottom: 2px solid #dfdfdf;\n  cursor: default;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: left;\n  height: 26px;\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 50px;\n  text-align: right;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .left_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .right_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.selectFilter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: radio;\n  width: auto;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  border: 1px solid #EB583B;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  background: #EB583B;\n  border: 0.5px solid #EB583B;\n  width: 8px;\n  height: 8px;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  color: #fff;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n  background-color: #4C9E00;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary.btn-sm[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 8px;\n  padding: 6px 12px;\n  gap: 10px;\n  height: 40px;\n  width: 130px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary.btn-sm[type=submit][_ngcontent-%COMP%] {\n  background-color: #EB583B;\n  color: white;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary.btn-sm[type=button][_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  color: #333;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary.btn-sm[type=submit][_ngcontent-%COMP%]:hover, \n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary.btn-sm[type=button][_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.modal-header[_ngcontent-%COMP%]   button.fas.fa-times-circle.fa-fw[_ngcontent-%COMP%] {\n  content: "\\f00d";\n  font-weight: 900;\n  font-size: 20px;\n  color: #333;\n}\n/*# sourceMappingURL=bm-wf-association.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BmWfAssociationComponent, { className: "BmWfAssociationComponent", filePath: "src\\app\\admin\\BM\\components\\bm-wf-association\\bm-wf-association.component.ts", lineNumber: 17 });
})();

// src/app/admin/BM/components/top-corner-detail/top-corner-detail.component.ts
function TopCornerDetailComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objBmog_r2 = ctx.$implicit;
    \u0275\u0275property("value", objBmog_r2.BMOGID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(objBmog_r2.BMOGNAME);
  }
}
function TopCornerDetailComponent_app_association_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-association", 16);
    \u0275\u0275listener("select", function TopCornerDetailComponent_app_association_14_Template_app_association_select_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r5 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("displayWith", ctx_r3.displayWith)("uniqueWith", ctx_r3.uniqueWith)("items", items_r5[0])("associatedItems", items_r5[1]);
  }
}
var TopCornerDetailComponent = class _TopCornerDetailComponent {
  constructor(formViewApi, ref) {
    this.formViewApi = formViewApi;
    this.ref = ref;
    this.bmogId = "-1";
    this.allBMOGs = [];
    this.BMOGInfo = [];
    this.onSelect = (items) => this.selectedItems = items;
    this.displayWith = (item) => `${item.BMONAME} > ${item.DMOGNAME} > ${item.DMONAME}`;
    this.uniqueWith = (item) => `${item.bmoid}${item.dmogid}${item.dmoid}`;
  }
  ngOnInit() {
    this.formViewApi.getBMOGS(this.bmId).subscribe((x) => {
      this.bmogId = x.Data?.[0].BMOGID;
      this.BMOGInfo = x.Data;
      this.associations$ = this.getBatchUpdateDmos(this.bmId, this.bmogId);
    });
  }
  getBatchUpdateDmos(bmId, bmogId) {
    return forkJoin([
      this.formViewApi.getTopCornerDmos(bmId, bmogId, "all").pipe(map((res) => res.Table)),
      this.formViewApi.getTopCornerDmos(bmId, bmogId, "selected").pipe(map((res) => res.Table))
    ]).pipe(map(([all, selected]) => {
      const updatedSelected = [];
      selected.forEach((item) => {
        const found = all.find((rec) => rec.dmoid === item.dmoid);
        if (found) {
          found["selected"] = true;
          updatedSelected.push(found);
        }
      });
      return [all, updatedSelected];
    }));
  }
  onSubmit() {
    const ids = this.selectedItems.map((item) => item.dmoid);
    this.formViewApi.saveTopCornerDmos(this.bmId, this.bmogId, ids).subscribe((res) => this.ref.close(res));
  }
  ReloadDMOS(valBMOGID) {
    this.bmogId = valBMOGID;
    this.associations$ = this.getBatchUpdateDmos(this.bmId, this.bmogId);
  }
  static {
    this.\u0275fac = function TopCornerDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopCornerDetailComponent)(\u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopCornerDetailComponent, selectors: [["app-top-corner-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 5, consts: [["ddlBMOG", ""], [1, "popup"], [1, "popup__header"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [2, "position", "relative", "display", "inline-block", "width", "200px"], ["name", "ddlBMOG", 1, "form-control", 2, "width", "100%", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [2, "position", "absolute", "right", "10px", "top", "50%", "transform", "translateY(-50%)", "pointer-events", "none", "color", "#888"], [1, "fas", "fa-chevron-down"], [1, "double-column"], ["class", "span-12", "checkBy", "selected", 3, "displayWith", "uniqueWith", "items", "associatedItems", "select", 4, "ngIf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [3, "value"], ["checkBy", "selected", 1, "span-12", 3, "select", "displayWith", "uniqueWith", "items", "associatedItems"]], template: function TopCornerDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
        \u0275\u0275text(3, "Top Corner Detail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function TopCornerDetailComponent_Template_i_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ref.close());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(6, "hr");
        \u0275\u0275elementStart(7, "div", 5)(8, "select", 6, 0);
        \u0275\u0275listener("change", function TopCornerDetailComponent_Template_select_change_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ReloadDMOS($event.target.value));
        });
        \u0275\u0275template(10, TopCornerDetailComponent_option_10_Template, 2, 2, "option", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275element(12, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275template(14, TopCornerDetailComponent_app_association_14_Template, 1, 4, "app-association", 11);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
        \u0275\u0275listener("click", function TopCornerDetailComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ref.close());
        });
        \u0275\u0275text(18, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 14);
        \u0275\u0275listener("click", function TopCornerDetailComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275text(20, "Save");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.BMOGInfo);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(15, 3, ctx.associations$));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.selectedItems || ctx.bmogId == "-1");
      }
    }, dependencies: [
      ReactiveFormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      NgForOf,
      NgIf,
      AssociationComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopCornerDetailComponent, { className: "TopCornerDetailComponent", filePath: "src\\app\\admin\\BM\\components\\top-corner-detail\\top-corner-detail.component.ts", lineNumber: 28 });
})();

// src/app/core/services/card-wall-view-configuration.service.ts
var CardWallViewConfigurationServices = class _CardWallViewConfigurationServices extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseurl = environment.Setting.GatewayAPIUrl;
  }
  getCvCard(cardId) {
    const url = `${this.baseurl}/wfapibm/compare/GetWfCvCards?ID=${cardId}`;
    return this.get(url);
  }
  getWfCvCardDmoMapByCardID(cardId, processName) {
    const url = `${this.baseurl}/wfapibm/compare/GetWfCvCardsDmoMapByCardId?cardId=${cardId} &processName=${processName}`;
    return this.get(url);
  }
  getWfCvPrcessCarByProcessName(processName) {
    const url = `${this.baseurl}/wfapibm/compare/GetWfCvProcessCardsByProcessName?processName=${processName}`;
    return this.get(url);
  }
  AddWfCvCard(CvCard) {
    const url = `${this.baseurl}/wfapibm/compare/BulkSaveWfCvCardDmoMap`;
    return this.post(url, CvCard);
  }
  ActivatetWfCvCardByCardIDAndProcessName(cardId, processName) {
    const url = `${this.baseurl}/wfapibm/compare/WfCvActivateProcessCards?cardId=${cardId} &processName=${processName}`;
    return this.get(url);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CardWallViewConfigurationServices_BaseFactory;
      return function CardWallViewConfigurationServices_Factory(__ngFactoryType__) {
        return (\u0275CardWallViewConfigurationServices_BaseFactory || (\u0275CardWallViewConfigurationServices_BaseFactory = \u0275\u0275getInheritedFactory(_CardWallViewConfigurationServices)))(__ngFactoryType__ || _CardWallViewConfigurationServices);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CardWallViewConfigurationServices, factory: _CardWallViewConfigurationServices.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/BM/components/Cardwalls/card-placeholder-dmo-mapping/card-placeholder-dmo-mapping.component.ts
function CardPlaceholderDmoMappingComponent_div_6_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dmo_r4 = ctx.$implicit;
    \u0275\u0275property("value", dmo_r4.GUID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", dmo_r4 == null ? null : dmo_r4.DataModelObjectGroup == null ? null : dmo_r4.DataModelObjectGroup.Name, " > ", dmo_r4.DisplayName, " ");
  }
}
function CardPlaceholderDmoMappingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "select", 15);
    \u0275\u0275listener("change", function CardPlaceholderDmoMappingComponent_div_6_Template_select_change_8_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updadatedmouid(item_r2, $event));
    });
    \u0275\u0275elementStart(9, "option");
    \u0275\u0275text(10, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CardPlaceholderDmoMappingComponent_div_6_option_11_Template, 2, 3, "option", 16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.PlaceholderId);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.dmoList);
  }
}
var CardPlaceholderDmoMappingComponent = class _CardPlaceholderDmoMappingComponent {
  constructor(CardWallViewService, elRef, activeModal, sanitizer, router, toster, route) {
    this.CardWallViewService = CardWallViewService;
    this.elRef = elRef;
    this.activeModal = activeModal;
    this.sanitizer = sanitizer;
    this.router = router;
    this.toster = toster;
    this.route = route;
    this.Toggle = {};
  }
  ngOnInit() {
  }
  loadData(cardId, CardWallConfigurArray, dmoList) {
    this.cardId = cardId;
    this.CardWallConfigurArray = CardWallConfigurArray;
    this.dmoList = dmoList;
  }
  DefaultSelected(item, dmog) {
    console.log(item, dmog);
    if (item.DmoGuid == dmog) {
      return dmog;
    }
    return "";
  }
  // Toggle Grid & Filters
  clickEvent(SectionKey) {
    if (this.Toggle[SectionKey] === void 0) {
      this.Toggle[SectionKey] = false;
    } else {
      this.Toggle[SectionKey] = !this.Toggle[SectionKey];
    }
  }
  getToggle(SectionKey) {
    if (this.Toggle[SectionKey] === void 0) {
      this.Toggle[SectionKey] = false;
    }
    return this.Toggle[SectionKey];
  }
  updadatedmouid(item, event) {
    const value = event.target.value;
    if (value) {
      for (let index = 0; index < this.CardWallConfigurArray.length; index++) {
        let element = this.CardWallConfigurArray[index];
        if (item) {
          if (element.PlaceholderId == item.PlaceholderId) {
            element.DmoGuid = value;
          }
        }
      }
    }
  }
  Save() {
    this.CardWallViewService.AddWfCvCard(this.CardWallConfigurArray).subscribe((data) => {
      this.activeModal.close();
      this.toster.success("Configurations added successfully", "");
    });
  }
  static {
    this.\u0275fac = function CardPlaceholderDmoMappingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardPlaceholderDmoMappingComponent)(\u0275\u0275directiveInject(CardWallViewConfigurationServices), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardPlaceholderDmoMappingComponent, selectors: [["app-card-placeholder-dmo-mapping"]], inputs: { CardWallConfigurArray: "CardWallConfigurArray", dmoList: "dmoList" }, decls: 12, vars: 2, consts: [[1, "fWrap", "sections"], [1, "heading", "FR22", 3, "ngClass"], ["href", "JavaScript:void(0);", "title", "Show Hide", 3, "click"], [1, "showHide"], [1, "custom_wrap"], ["class", "drag_grid", 4, "ngFor", "ngForOf"], [1, "cta-button-group"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning", "btn-sm", "text-white", 3, "click"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-clear", "btn-small", 3, "click"], [1, "drag_grid"], [1, "row"], [1, "left_cell"], [1, "text-right", "paddingTop-xs"], ["_ngcontent-ygv-c469", "", 1, "right_cell"], [1, ""], [1, "Dropdwon-cstm", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CardPlaceholderDmoMappingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2, "Add Configurations ");
        \u0275\u0275elementStart(3, "a", 2);
        \u0275\u0275listener("click", function CardPlaceholderDmoMappingComponent_Template_a_click_3_listener() {
          return ctx.clickEvent("SectionGridColumn");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
        \u0275\u0275template(6, CardPlaceholderDmoMappingComponent_div_6_Template, 12, 2, "div", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275listener("click", function CardPlaceholderDmoMappingComponent_Template_button_click_8_listener() {
          return ctx.Save();
        });
        \u0275\u0275text(9, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 8);
        \u0275\u0275listener("click", function CardPlaceholderDmoMappingComponent_Template_button_click_10_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275text(11, "Cancel");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.getToggle("SectionGridColumn") ? "Hide" : "");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.CardWallConfigurArray);
      }
    }, dependencies: [NgClass, NgForOf, NgSelectOption, \u0275NgSelectMultipleOption], styles: ['@charset "UTF-8";\n\n\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0px auto -webkit-focus-ring-color;\n}\na[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black;\n}\n.gridcinfig_wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  border: solid 1px #000;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  min-height: 20px;\n  border: 0;\n  padding: 20px;\n}\n.clone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0568ae;\n}\n.view_name[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.view_txt[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.view_txt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 24px;\n  padding: 6px 7px 6px 10px;\n  border-radius: 6px;\n}\n.selectListing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 120px;\n  margin: 0px;\n}\n.selectView[_ngcontent-%COMP%] {\n  display: inline-block;\n}\ntextarea[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  border: 1px solid #C3BBB1;\n  transition: border 0.3s linear 0s;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:not(:disabled)    + .skin[_ngcontent-%COMP%] {\n  background-color: #fbf9f9;\n  border-color: #999;\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  display: inline-block;\n  height: 16px;\n  left: 0;\n  position: absolute;\n  margin-right: 10px;\n  top: 0;\n  width: 16px;\n  float: left;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  height: 19px;\n  width: 19px;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  line-height: 14px;\n  color: #4C9E00;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  content: "\\f00c";\n}\n.close[_ngcontent-%COMP%]:before, \n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after, \n.checkbox[_ngcontent-%COMP%]   input.indeterminate[_ngcontent-%COMP%]    + .skin[_ngcontent-%COMP%]:after {\n  display: inline-block;\n  font-family: "Font Awesome 5 Free" !important;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 900;\n  font-variant: normal;\n  height: 0.3em;\n  margin-right: 7px;\n  text-transform: none;\n  line-height: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n  position: relative;\n  speak: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  width: 1.2em;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\ninput[_ngcontent-%COMP%]:not(.btn) {\n  height: 25px;\n  padding: 0px 8px 0px 8px;\n  font-size: 14px;\n  border-radius: 3px;\n  width: 62%;\n}\n.field-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.form-row-new[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  align-items: center;\n  min-height: 60px;\n  overflow: hidden;\n  padding: 26px 42px 22px;\n  position: relative;\n  border: none;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 300;\n  color: black;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 9px;\n  margin-right: 18px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  padding: 2px 4px;\n  text-decoration: none;\n  margin-left: 5px;\n  color: #4C9E00;\n  font-size: 12px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%]   a.delete-view[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%] {\n  border-color: #fff #fff transparent transparent;\n  border-style: solid;\n  border-width: 24px;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  float: none;\n  height: 48px;\n  margin: 0;\n  position: absolute;\n  right: -23px;\n  top: -25px;\n  width: 48px;\n  font-size: 2.3rem;\n  font-weight: 600;\n  line-height: 0px;\n  color: #939393;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]::before {\n  color: #001d11;\n  display: block;\n  font-size: 20px;\n  height: auto;\n  right: 10px;\n  top: 0px;\n  width: auto;\n  font-style: normal;\n  font-weight: 900;\n  font-variant: normal;\n  margin-right: 7px;\n  text-transform: none;\n  line-height: 1;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0px 42px 20px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4A90E2;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 12px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%] {\n  padding: 8px 5px;\n  padding-bottom: 7px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row.nomar[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  display: block;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #36424F;\n  line-height: 12px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  margin-left: -20px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.btn), \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\n  color: #787878;\n  display: inline-block;\n  font-size: 14px;\n  margin: 0;\n  padding: 0 8px 0 8px;\n  vertical-align: middle;\n  border-radius: 3px;\n  font-weight: 400;\n  font-family: inherit;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .span12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 24px;\n  margin-bottom: 10px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: 2rem;\n  margin-bottom: 10px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]::after, \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]::before {\n  content: "";\n  display: table;\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]::after {\n  clear: both;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 50%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 25%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 25%;\n}\n@media (min-width: 769px) {\n  .configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-3[_ngcontent-%COMP%]   .df-sorting[_ngcontent-%COMP%] {\n    width: 39.35%;\n  }\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-3[_ngcontent-%COMP%]   .df-sorting[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .custom_wrap[_ngcontent-%COMP%]   .paddingBottom-xxs[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-size: 13px;\n  color: #36424F;\n  padding-top: 4px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid.state-filter-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: 0px !important;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%] {\n  border: 1px solid #C3BBB1;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid #C3BBB1;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  text-align: left;\n  width: 50%;\n  padding: 20px 15px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: 600px;\n  margin: auto;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%] {\n  width: auto;\n  height: 205px;\n  overflow: auto;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  margin: 0px;\n  padding-left: 0px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  border-bottom: 2px solid #dfdfdf;\n  cursor: default;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.cdk-drag[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.cdk-drag[_ngcontent-%COMP%] {\n  background-image: url(/assets/styles/images/drag-bg.png);\n  text-align: left;\n  background-size: 18px;\n  background-position: 0px 50%;\n  background-repeat: no-repeat;\n  padding-left: 25px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: left;\n  height: 26px;\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 50px;\n  text-align: right;\n}\n.btn-primary-special[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n  color: #ffffff;\n  border-radius: 3px;\n  padding: 0px !important;\n  color: #4A90E2;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n}\n.btn-primary-special[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 5px 19px 5px 18px;\n}\n.span12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .custm_filter[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-row.midmar[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n.configurePop[_ngcontent-%COMP%]   .custm_filter[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  margin-left: -20px;\n}\n.configurePop[_ngcontent-%COMP%]   .custm_filter[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n.cFilterGrid[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  margin: 20px 0px 0px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%] {\n  width: 85%;\n  padding: 20px 15px;\n  position: relative;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: flow-root;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid-s[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 25px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid-s[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterRight[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  width: 15%;\n}\n.addLanRowWrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  float: left;\n  width: 75%;\n}\n.addLanRowWrap[_ngcontent-%COMP%]   .editDeleteWrap[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 10px;\n}\n.cta-button-group[_ngcontent-%COMP%] {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\fffd%20x2%3D%22100%25%22%20stroke-dasharray%3D%221%2C%203%22%2F%3E%3C%2Fsvg%3E) !important;\n  align-items: baseline;\n  background-position: 0 -1px;\n  background-repeat: repeat-x;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  padding: 20px 0 10px;\n  width: 100%;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%] {\n  color: #36424F;\n  font-size: 13px;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0;\n  background-color: #4C9E00;\n  padding: 7px 26px;\n  border: none;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 0px 19px 0px 18px;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  background-image:\n    linear-gradient(\n      to bottom,\n      #f2f2f2 0%,\n      #f2f2f2 100%);\n  color: #4C9E00;\n  border-radius: 3px;\n  border-color: #bebebe;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%] {\n  background-image: none !important;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4A90E2;\n  background: transparent;\n  padding: 0 20px;\n  border-radius: 0px;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-left: solid 1px #C3BBB1;\n  padding-right: 0px;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px !important;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.err_message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  display: inline-block;\n}\n.tableWrap[_ngcontent-%COMP%] {\n  overflow: inherit;\n}\n.padding-xxs[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.selectListing.fullWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%], \n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropup[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], \n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border: solid 1px #ccc !important;\n  display: block;\n  outline: none;\n  width: 100%;\n  height: 25px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  text-align: left;\n  white-space: nowrap;\n  line-height: 24px;\n  font-size: 13px;\n  color: #666666;\n  font-weight: normal;\n  text-decoration: none;\n  border-radius: 3px;\n  padding: 0px 8px;\n}\n.selectListing[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.Hide[_ngcontent-%COMP%]    + .showHide[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-row[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: 2rem;\n  margin-bottom: 10px;\n}\n.created-filter[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.created-filter[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: #36424F;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border: solid 1px #C3BBB1;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 18px 25px !important;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #36424F;\n  font-size: 12px;\n  padding: 0 18px;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  color: #D0021B;\n  border-left: solid 1px #C3BBB1;\n}\n.basicTable[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n  margin: 10px 0;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px !important;\n  font-size: 13px;\n  font-weight: 400;\n  color: #727272;\n  border-top: none;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #D0021B;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%] {\n  margin: -5px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 5px;\n  color: #636363;\n  font-size: 18px;\n}\n.globalSearchWrap[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.globalSearchWrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0px 25px 0px 8px;\n  font-size: 14px;\n  border-radius: 2px;\n  width: 100%;\n}\n.globalSearchWrap[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  color: #79797e;\n}\n.wfMainGSearch[_ngcontent-%COMP%] {\n  width: 68%;\n  float: left;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .left_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .right_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.editDeleteWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 14px;\n}\n.editDeleteWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1px 4px;\n  font-size: 11px;\n  color: #848484;\n}\n.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 769px) {\n  .cFilterGrid[_ngcontent-%COMP%] {\n    display: table;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: top;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterRight[_ngcontent-%COMP%] {\n    width: 250px;\n    border-top: 0px;\n    border-left: 1px solid #ccc;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterRight[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    height: 35px;\n    padding: 3px 8px 2px 8px;\n  }\n  .break-grid-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 33.33%;\n  }\n}\n.selectFilter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: radio;\n  width: auto;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #f0f8ff;\n  border: 2px solid #007bff;\n}\n.Dropdwon-cstm[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 32px !important;\n}\n/*# sourceMappingURL=card-placeholder-dmo-mapping.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardPlaceholderDmoMappingComponent, { className: "CardPlaceholderDmoMappingComponent", filePath: "src\\app\\admin\\BM\\components\\Cardwalls\\card-placeholder-dmo-mapping\\card-placeholder-dmo-mapping.component.ts", lineNumber: 16 });
})();

// src/app/admin/BM/components/Cardwalls/card-wall-view-configuration/card-wall-view-configuration.component.ts
function CardWallViewConfigurationComponent_div_10_ng_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dmo_r4 = ctx.$implicit;
    \u0275\u0275property("value", dmo_r4.GUID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", dmo_r4 == null ? null : dmo_r4.DataModelObjectGroup == null ? null : dmo_r4.DataModelObjectGroup.Name, " > ", dmo_r4.DisplayName, " ");
  }
}
function CardWallViewConfigurationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 12)(8, "ng-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function CardWallViewConfigurationComponent_div_10_Template_ng_select_ngModelChange_8_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.DmoGuid, $event) || (item_r2.DmoGuid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CardWallViewConfigurationComponent_div_10_Template_ng_select_change_8_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updadatedmouid(item_r2, $event));
    });
    \u0275\u0275template(9, CardWallViewConfigurationComponent_div_10_ng_option_9_Template, 2, 3, "ng-option", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.PlaceholderId);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r2.showSearch(item_r2.DmoGuid));
    \u0275\u0275property("clearable", false);
    \u0275\u0275twoWayProperty("ngModel", item_r2.DmoGuid);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.loadforUser(item_r2.PlaceholderId));
  }
}
var CardWallViewConfigurationComponent = class _CardWallViewConfigurationComponent {
  constructor(CardWallViewService, listviewService, elRef, sanitizer, router, route, modalService, activeModal, toster, formBuilder) {
    this.CardWallViewService = CardWallViewService;
    this.listviewService = listviewService;
    this.elRef = elRef;
    this.sanitizer = sanitizer;
    this.router = router;
    this.route = route;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.toster = toster;
    this.formBuilder = formBuilder;
    this.cardDmoMapByCard = [];
    this.dmoList = [];
    this.IsCardClicked = false;
    this.cardWallConfigurationsArray = [];
    this.backToPrevious = new EventEmitter();
  }
  ngOnInit() {
  }
  loadData(ProcessName, selectedCard) {
    this.cardId = selectedCard.cardId;
    this.processName = ProcessName;
    this.selectedCard = selectedCard;
    this.getCardsView(selectedCard);
    this.getWFCardDmoMapByCardId(this.cardId);
    this.getDmoList();
  }
  clickEvent(SectionKey) {
    if (this.Toggle[SectionKey] === void 0) {
      this.Toggle[SectionKey] = false;
    } else {
      this.Toggle[SectionKey] = !this.Toggle[SectionKey];
    }
  }
  getToggle(SectionKey) {
    if (this.Toggle[SectionKey] === void 0) {
      this.Toggle[SectionKey] = false;
    }
    return this.Toggle[SectionKey];
  }
  getCardsView(data) {
    let processedHtml = UtilService.processImageUrlsForDynamicHtmls(data.cardhtml);
    this.CardHtml = this.sanitizer.bypassSecurityTrustHtml(processedHtml);
    setTimeout(() => {
      this.getWFCardDmoMapByCardId(data.cardId);
      this.nevigateToCardWallDmoMapping();
    }, 100);
  }
  showSearch(dmo) {
    if (dmo && dmo != "")
      return "";
    else
      return "Select...";
  }
  getDmoList() {
    this.listviewService.dmoList(this.processName).subscribe((res) => {
      this.dmoList = res;
    });
  }
  //CreateForm
  SetInitValue() {
    this.placeHolderFormGroup = this.formBuilder.group({
      parentGroup: this.formBuilder.group({
        PlaceholderId: [""],
        DmoGuid: [""]
      })
    });
  }
  BindForm() {
    this.placeHolderForm = this.formBuilder.array([]);
    if (this.placeHolderForm) {
      this.placeHolderForm.clear();
    }
    for (let index = 0; index < this.cardWallConfigurationsArray.length; index++) {
      const element = this.cardWallConfigurationsArray[index];
      let row = this.formBuilder.group({
        PlaceholderId: new FormControl(),
        //,element.PlaceholderId,
        DmoGuid: new FormControl()
        //element.DmoGuid
      });
      this.placeHolderForm.push(row);
    }
  }
  loadMappedDmog() {
    this.CardWallViewService.getWfCvCardDmoMapByCardID(this.cardId, this.processName).subscribe((res) => {
      if (res != null) {
        this.cardDmoMapByCard = res;
      }
    });
  }
  getWFCardDmoMapByCardId(cardId) {
    setTimeout(() => {
      this.CardWallViewService.getWfCvCardDmoMapByCardID(this.cardId, this.processName).subscribe((res) => {
        if (res != null) {
          this.cardDmoMapByCard = res;
          this.cardWallConfigurationsArray = [];
          this.nevigateToCardWallDmoMapping();
        }
      });
    }, 150);
  }
  getGuidByPlaceholder(PlaceholderId) {
    if (this.cardDmoMapByCard && this.cardDmoMapByCard.length > 0) {
      let guid = this.cardDmoMapByCard.filter((a) => a.PlaceholderId == PlaceholderId);
      if (guid.length > 0) {
        return guid[0].DmoGuid;
      }
    }
    return "";
  }
  DisplayName(GUID) {
    if (this.dmoList && this.dmoList.length > 0) {
      let exist = this.dmoList.filter((a) => a.GUID == GUID);
      if (exist.length > 0) {
        return exist[0].DisplayName;
      }
    }
    return "";
  }
  AddPlaceholder() {
    let placeholdersArray = [];
    let Placeholders = document.getElementsByClassName("Placeholder");
    if (Placeholders) {
      for (let index = 0; index < Placeholders.length; index++) {
        const doc = Placeholders[index];
        this.cardWallConfigurationsArray.push({
          PlaceholderId: doc.id,
          DmoGuid: this.getGuidByPlaceholder(doc.id),
          cardId: this.cardId,
          ProcessName: this.processName
        });
      }
    }
    this.BindForm();
  }
  CardWallplaceholderDmoMapping(placeholdersArrays) {
    const modalRef = this.modalService.open(CardPlaceholderDmoMappingComponent, {
      windowClass: "grid-config-view-modal",
      backdrop: "static",
      keyboard: false
    });
    const modalInstance = modalRef.componentInstance;
    modalInstance.CardWallConfigurArray = placeholdersArrays;
    modalInstance.dmoList = this.dmoList;
    modalRef.result.then((data) => {
      this.getWFCardDmoMapByCardId(this.cardId);
      this.getDmoList();
    }, (error) => {
    });
  }
  EnableSelectedDmoCard() {
    if (this.IsCardClicked) {
      return {
        display: "block"
      };
    } else {
      return {
        display: "none"
      };
    }
  }
  nevigateToCardWallDmoMapping() {
    let Placeholders = document.getElementsByClassName("Placeholder");
    if (Placeholders) {
      for (let index = 0; index < Placeholders.length; index++) {
        const doc = Placeholders[index];
        this.cardWallConfigurationsArray.push({
          PlaceholderId: doc.id,
          DmoGuid: this.getGuidByPlaceholder(doc.id),
          cardId: this.cardId,
          ProcessName: this.processName
        });
      }
      this.BindForm();
    }
  }
  updadatedmouid(item, event) {
    const value = event;
    if (value) {
      for (let index = 0; index < this.cardWallConfigurationsArray.length; index++) {
        let element = this.cardWallConfigurationsArray[index];
        if (item) {
          if (element.PlaceholderId == item.PlaceholderId) {
            element.DmoGuid = value;
          }
        }
      }
    }
  }
  Save() {
    this.CardWallViewService.AddWfCvCard(this.cardWallConfigurationsArray).subscribe((data) => {
      this.getWFCardDmoMapByCardId(this.cardId);
      this.toster.success("Configurations added successfully", "");
      this.activeModal.close();
    });
  }
  loadforUser(PlaceholderId) {
    let Placeholder = document.getElementById(PlaceholderId);
    if (Placeholder) {
      if (Placeholder.classList.contains("cardUserImage")) {
        return this.dmoList.filter((a) => a.GUID == "MODFBY" || a.GUID == "CRTDBY");
      }
    }
    return this.dmoList;
  }
  onBack() {
    this.backToPrevious.emit();
  }
  static {
    this.\u0275fac = function CardWallViewConfigurationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardWallViewConfigurationComponent)(\u0275\u0275directiveInject(CardWallViewConfigurationServices), \u0275\u0275directiveInject(ListviewService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardWallViewConfigurationComponent, selectors: [["app-card-wall-view-configuration"]], outputs: { backToPrevious: "backToPrevious" }, decls: 18, vars: 2, consts: [[1, "row", "card-body"], [1, "col-md-6", "card-preview"], [1, "dmo-val-div"], [1, "card-box", "card-container"], [3, "innerHTML"], [1, "col-md-6", "card-dropdwons"], [1, "card-dmos"], ["class", "drag_grid", 4, "ngFor", "ngForOf"], [1, "cta-button-group", "cstm-btn"], ["data-dismiss", "modal", "type", "button", 1, "btn-sm", "text-white", "cstm-btn-save", 3, "click"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-clear", "btn-small", "cstm-btn", 3, "click"], [1, "drag_grid"], [1, ""], [1, "left_cell"], [1, "text-right", "paddingTop-xs"], ["_ngcontent-ygv-c469", "", 1, "right_cell"], [1, "card-dmo-dropdwon", 3, "ngModelChange", "change", "clearable", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CardWallViewConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "Card Preview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "div", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 2);
        \u0275\u0275text(8, "Dmo Mapping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275template(10, CardWallViewConfigurationComponent_div_10_Template, 10, 5, "div", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
        \u0275\u0275listener("click", function CardWallViewConfigurationComponent_Template_button_click_12_listener() {
          return ctx.Save();
        });
        \u0275\u0275text(13, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 10);
        \u0275\u0275listener("click", function CardWallViewConfigurationComponent_Template_button_click_14_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275text(15, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function CardWallViewConfigurationComponent_Template_button_click_16_listener() {
          return ctx.onBack();
        });
        \u0275\u0275text(17, "Back");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("innerHTML", ctx.CardHtml, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.cardWallConfigurationsArray);
      }
    }, dependencies: [NgForOf, NgControlStatus, NgModel, NgSelectComponent, NgOptionComponent], styles: ["\n\n.card-custom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  margin-bottom: 10px !important;\n  margin-right: 10px !important;\n  background: #EAECEF;\n  word-wrap: break-word;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  border-radius: 0.25rem;\n}\n.left-column[_ngcontent-%COMP%] {\n  flex: 8;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.right-column[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.left-column[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.right-column[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.h-50[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.user-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n}\n.date-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n}\n.date-info[_ngcontent-%COMP%] {\n  margin-left: 44px;\n  font-size: 16px;\n  font-weight: 300;\n  position: absolute;\n  top: -18px;\n  text-align: left;\n  color: rgb(128, 128, 128);\n}\n.card-box[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.cstm-card-container[_ngcontent-%COMP%] {\n  background-color: #F5F5F5 !important;\n  width: 100%;\n  max-width: 360px !important;\n  border-radius: 10px;\n  border: 1.5px solid gray;\n  box-shadow: 0px 1.5px 2px gray;\n}\n.cstm-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n.cstm-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n}\n.cstm-title-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 18px;\n  height: 18px;\n}\n.msg-heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n}\n.msg-sub-heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 250;\n  color: rgb(51, 51, 51);\n}\n.pic-cont[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.user-info-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n}\n.user-info-sub-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgb(128, 128, 128);\n  margin-left: 5px;\n}\n.date-info-box[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 16px;\n  font-weight: 300;\n}\n.card-text-cont[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.micro-dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 10px;\n}\n.micro-dropdown-checkbox[_ngcontent-%COMP%] {\n  display: none;\n}\n.micro-menu-trigger[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.micro-dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 0;\n  background: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  display: none;\n  flex-direction: column;\n  min-width: 150px;\n  z-index: 1000;\n}\n.micro-dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  text-decoration: none;\n  color: rgb(51, 51, 51);\n  font-size: 14px;\n  font-weight: 400;\n  transition: background-color 0.3s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.micro-dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.micro-dropdown-item[_ngcontent-%COMP%]:hover {\n  color: rgb(255, 255, 255);\n  background-color: rgb(76, 158, 0);\n  font-size: 14px;\n  font-weight: 400;\n}\n.micro-dropdown-checkbox[_ngcontent-%COMP%]:checked    ~ .micro-dropdown-menu[_ngcontent-%COMP%] {\n  display: flex;\n  top: 45px;\n}\n.box-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.box-sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #929090;\n  font-weight: 300;\n}\n.card-dmos[_ngcontent-%COMP%] {\n  line-height: 20px;\n  color: grey;\n  font-size: 14px;\n  font-weight: 300;\n}\n.card-dmo-dropdwon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 34px;\n  border-radius: 3px 3px 3px 3px;\n  border-color: rgba(172, 172, 172, 0.631372549);\n  color: #3d3737;\n  margin-bottom: 8px;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 !important;\n  border-block: 1.5px solid rgba(0, 0, 0, 0.27);\n  margin-bottom: 25px;\n}\n.card-preview[_ngcontent-%COMP%] {\n  border-right: 1px solid #ddd;\n  padding: 30px 50px;\n  background-color: #FAFAFA;\n}\n.card-dropdwons[_ngcontent-%COMP%] {\n  width: 45%;\n  padding: 30px 40px;\n  background-color: #FAFAFA;\n}\n.dmo-val-div[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n.card-dmo-dropdwon[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.cstm-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.cstm-btn-save[_ngcontent-%COMP%] {\n  background-color: #EB583B;\n  width: 110px !important;\n  border: none;\n  padding: 7px 22px;\n  height: 35px;\n  font-size: 13px;\n  margin-right: 5px;\n  border-radius: 5px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border: 1px solid #CCC !important;\n  background: #F6F6F6 !important;\n  margin-right: 5px;\n  padding: 7px 22px;\n  height: 35px;\n  font-size: 13px;\n  margin-right: 2px;\n}\n.card-container[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=card-wall-view-configuration.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardWallViewConfigurationComponent, { className: "CardWallViewConfigurationComponent", filePath: "src\\app\\admin\\BM\\components\\Cardwalls\\card-wall-view-configuration\\card-wall-view-configuration.component.ts", lineNumber: 31 });
})();

// src/app/admin/BM/components/Cardwalls/card-wall-configuration-selection/card-wall-configuration-selection.component.ts
function CardWallConfigurationSelectionComponent_section_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function CardWallConfigurationSelectionComponent_section_9_div_9_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cardWallSelected(item_r4));
    });
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.bindHtml(item_r4), \u0275\u0275sanitizeHtml)("ngClass", ctx_r1.selectedCard == item_r4.cardId ? "selected" : "card-container");
  }
}
function CardWallConfigurationSelectionComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3, " Select Template ");
    \u0275\u0275elementStart(4, "a", 15);
    \u0275\u0275listener("click", function CardWallConfigurationSelectionComponent_section_9_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickEvent("SectionGridColumn"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16)(6, "div", 17)(7, "div", 18)(8, "div", 19);
    \u0275\u0275template(9, CardWallConfigurationSelectionComponent_section_9_div_9_Template, 2, 2, "div", 20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "button", 23);
    \u0275\u0275listener("click", function CardWallConfigurationSelectionComponent_section_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeModal.close(false));
    });
    \u0275\u0275text(13, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function CardWallConfigurationSelectionComponent_section_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nevigateToCardWall());
    });
    \u0275\u0275text(15, " Next ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "button", 26);
    \u0275\u0275listener("click", function CardWallConfigurationSelectionComponent_section_9_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ActivateCard());
    });
    \u0275\u0275text(18, " Change Template ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getToggle("SectionGridColumn") ? "Hide" : "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.data);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.enableActivate);
  }
}
var CardWallConfigurationSelectionComponent = class _CardWallConfigurationSelectionComponent {
  constructor(CardWallViewService, elRef, activeModal, sanitizer, router, modalService, toster) {
    this.CardWallViewService = CardWallViewService;
    this.elRef = elRef;
    this.activeModal = activeModal;
    this.sanitizer = sanitizer;
    this.router = router;
    this.modalService = modalService;
    this.toster = toster;
    this.PopupTitle = "Configure Card Wall";
    this.Toggle = {};
    this.data = [];
    this.isNextClicked = false;
    this.IsCardClick = false;
    this.enableActivate = false;
  }
  ngOnInit() {
    this.getProcessCardbyProcessName();
  }
  getProcessCardbyProcessName() {
    setTimeout(() => {
      this.CardWallViewService.getWfCvPrcessCarByProcessName(this.ProcessName).subscribe((data) => {
        if (data && data.length > 0) {
          this.data = data;
          this.processCardid = data[0].processid;
          const activeCard = data.filter((a) => a.status == 1);
          if (activeCard.length > 0) {
            this.selectedCard = activeCard[0].cardId;
            this.cardWallSelected(activeCard[0]);
          }
        }
      });
    }, 150);
  }
  ActivateCard() {
    setTimeout(() => {
      this.CardWallViewService.ActivatetWfCvCardByCardIDAndProcessName(this.selectedCard, this.ProcessName).subscribe((data) => {
        if (data) {
          this.getProcessCardbyProcessName();
          this.toster.success("Card  Activated successfully", "");
        }
      });
    }, 150);
  }
  // Toggle Grid & Filters
  clickEvent(SectionKey) {
    if (this.Toggle[SectionKey] === void 0) {
      this.Toggle[SectionKey] = false;
    } else {
      this.Toggle[SectionKey] = !this.Toggle[SectionKey];
    }
  }
  bindHtml(item) {
    let processedHtml = UtilService.processImageUrlsForDynamicHtmls(item.cardhtml);
    return this.sanitizer.bypassSecurityTrustHtml(processedHtml);
  }
  getToggle(SectionKey) {
    if (this.Toggle[SectionKey] === void 0) {
      this.Toggle[SectionKey] = false;
    }
    return this.Toggle[SectionKey];
  }
  AddPlaceholder(data) {
  }
  EnableSelect() {
    if (this.isNextClicked) {
      return {
        "display": "block"
      };
    } else {
      return {
        "display": "none"
      };
    }
  }
  cardWallSelected(item) {
    this.selectedCard = item.cardId;
    const card = this.data.filter((a) => a.cardId == item.cardId);
    if (card.length > 0 && card[0].AlreadyMapped === "1" && card[0].status === "0") {
      this.enableActivate = true;
    } else {
      this.enableActivate = false;
    }
  }
  getSelectedCard() {
    let exists = this.data.filter((a) => a.cardId == this.selectedCard);
    if (exists) {
      return exists[0];
    }
    return null;
  }
  nevigateToCardWall() {
    const selectedCardItem = this.getSelectedCard();
    if (selectedCardItem) {
      this.isNextClicked = true;
      if (this.cardWallViewConfiguration) {
        this.PopupTitle = "Configure Card Wall";
        this.cardWallViewConfiguration.loadData(this.ProcessName, selectedCardItem);
      }
    } else {
      this.toster.warning("Please select card first!", "");
    }
  }
  CardWallViewPopup() {
    this.nevigateToCardWall();
    return;
    this.activeModal.close();
    const modalRef = this.modalService.open(CardWallViewConfigurationComponent, { windowClass: "grid-config-view-modal", backdrop: "static", keyboard: false });
    const modalInstance = modalRef.componentInstance;
    modalInstance.cardId = this.selectedCard;
  }
  onBackFromChild() {
    this.isNextClicked = false;
    this.PopupTitle = "Configure Card Wall";
  }
  static {
    this.\u0275fac = function CardWallConfigurationSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardWallConfigurationSelectionComponent)(\u0275\u0275directiveInject(CardWallViewConfigurationServices), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardWallConfigurationSelectionComponent, selectors: [["app-card-wall-configuration-selection"]], viewQuery: function CardWallConfigurationSelectionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CardWallViewConfigurationComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cardWallViewConfiguration = _t.first);
      }
    }, decls: 13, vars: 3, consts: [[1, "configurePop"], [1, "pop_box", "largePop"], [1, "modal-header"], [1, "FR22", "padding-0"], [1, "corner-button"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["aria-hidden", "true", 1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw"], ["aria-label", "Modal heading text content", "class", "modal-body", "role", "document", 4, "ngIf"], [3, "ngStyle"], ["aria-label", "Modal heading text content", "role", "document", 1, "modal-body", "modal-body-cardwall"], [3, "backToPrevious"], ["aria-label", "Modal heading text content", "role", "document", 1, "modal-body"], [1, "fWrap", "sections"], [1, "heading", "FR22", 3, "ngClass"], ["href", "JavaScript:void(0);", "title", "Show Hide", 3, "click"], [1, "showHide"], [1, "custom_wrap"], [1, "drag_grid", "trans-border"], [1, "row", "trans-border", "d-flex"], ["class", "col-md-6 pad-10", 3, "click", 4, "ngFor", "ngForOf"], [1, "cta-button-group", "d-flex", "d-flex-justify"], [1, "right-buttons"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-clear", "btn-small", "btn-cancel", 3, "click"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning", "btn-sm", "text-white", 3, "click"], [1, "left-buttons"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning", "btn-sm", "text-white", 3, "click", "disabled"], [1, "col-md-6", "pad-10", 3, "click"], [3, "innerHTML", "ngClass"]], template: function CardWallConfigurationSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "section", 2)(3, "h3", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275listener("click", function CardWallConfigurationSelectionComponent_Template_button_click_6_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275element(8, "i", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(9, CardWallConfigurationSelectionComponent_section_9_Template, 19, 3, "section", 8);
        \u0275\u0275elementStart(10, "div", 9)(11, "section", 10)(12, "app-card-wall-view-configuration", 11);
        \u0275\u0275listener("backToPrevious", function CardWallConfigurationSelectionComponent_Template_app_card_wall_view_configuration_backToPrevious_12_listener() {
          return ctx.onBackFromChild();
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.PopupTitle);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.isNextClicked);
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", ctx.EnableSelect());
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgStyle, CardWallViewConfigurationComponent], styles: ['@charset "UTF-8";\n\n\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\na[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black;\n}\n.gridcinfig_wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  border: solid 1px #000;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  min-height: 20px;\n  border: 0;\n  padding: 20px;\n}\n.clone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0568ae;\n}\n.view_name[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.view_txt[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.view_txt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 24px;\n  padding: 6px 7px 6px 10px;\n  border-radius: 6px;\n}\n.selectListing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 120px;\n  margin: 0px;\n}\n.selectView[_ngcontent-%COMP%] {\n  display: inline-block;\n}\ntextarea[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  border: 1px solid #C3BBB1;\n  transition: border 0.3s linear 0s;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:not(:disabled)    + .skin[_ngcontent-%COMP%] {\n  background-color: #fbf9f9;\n  border-color: #999;\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  display: inline-block;\n  height: 16px;\n  left: 0;\n  position: absolute;\n  margin-right: 10px;\n  top: 0;\n  width: 16px;\n  float: left;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  height: 19px;\n  width: 19px;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  line-height: 14px;\n  color: #4C9E00;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  content: "\\f00c";\n}\n.close[_ngcontent-%COMP%]:before, \n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after, \n.checkbox[_ngcontent-%COMP%]   input.indeterminate[_ngcontent-%COMP%]    + .skin[_ngcontent-%COMP%]:after {\n  display: inline-block;\n  font-family: "Font Awesome 5 Free" !important;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 900;\n  font-variant: normal;\n  height: 0.3em;\n  margin-right: 7px;\n  text-transform: none;\n  line-height: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n  position: relative;\n  speak: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  width: 1.2em;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\ninput[_ngcontent-%COMP%]:not(.btn) {\n  height: 25px;\n  padding: 0px 8px 0px 8px;\n  font-size: 14px;\n  border-radius: 10px !important;\n  width: 62%;\n}\n.field-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.form-row-new[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  align-items: center;\n  min-height: 60px;\n  overflow: hidden;\n  padding: 26px 42px 22px;\n  position: relative;\n  border: none;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 300;\n  color: black;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 9px;\n  margin-right: 18px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  padding: 2px 4px;\n  text-decoration: none;\n  margin-left: 5px;\n  color: #4C9E00;\n  font-size: 12px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .configPopTlinks[_ngcontent-%COMP%]   a.delete-view[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%] {\n  border-color: #fff #fff transparent transparent;\n  border-style: solid;\n  border-width: 24px;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  float: none;\n  height: 48px;\n  margin: 0;\n  position: absolute;\n  right: -23px;\n  top: -25px;\n  width: 48px;\n  font-size: 2.3rem;\n  font-weight: 600;\n  line-height: 0px;\n  color: #939393;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]::before {\n  color: #001d11;\n  display: block;\n  font-size: 20px;\n  height: auto;\n  right: 10px;\n  top: 0px;\n  width: auto;\n  font-style: normal;\n  font-weight: 900;\n  font-variant: normal;\n  margin-right: 7px;\n  text-transform: none;\n  line-height: 1;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0px 42px 20px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4A90E2;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 12px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: none !important;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n  font-weight: 400 !important;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%] {\n  padding: 8px 5px;\n  padding-bottom: 7px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row.nomar[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  display: block;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #36424F;\n  line-height: 12px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  margin-left: -20px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.btn), \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\n  color: #787878;\n  display: inline-block;\n  font-size: 14px;\n  margin: 0;\n  padding: 0 8px 0 8px;\n  vertical-align: middle;\n  border-radius: 3px;\n  font-weight: 400;\n  font-family: inherit;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .span12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 24px;\n  margin-bottom: 10px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: 2rem;\n  margin-bottom: 10px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]::after, \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]::before {\n  content: "";\n  display: table;\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]::after {\n  clear: both;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 50%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 25%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 25%;\n}\n@media (min-width: 769px) {\n  .configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-3[_ngcontent-%COMP%]   .df-sorting[_ngcontent-%COMP%] {\n    width: 39.35%;\n  }\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .break-grid-3[_ngcontent-%COMP%]   .df-sorting[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .custom_wrap[_ngcontent-%COMP%]   .paddingBottom-xxs[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-size: 13px;\n  color: #36424F;\n  padding-top: 4px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid.state-filter-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: 0px !important;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%] {\n  border: 1px solid #C3BBB1;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid #C3BBB1;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  text-align: left;\n  width: 50%;\n  padding: 20px 15px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: 600px;\n  margin: auto;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%] {\n  width: auto;\n  height: 205px;\n  overflow: auto;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  margin: 0px;\n  padding-left: 0px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  border-bottom: 2px solid #dfdfdf;\n  cursor: default;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.cdk-drag[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.cdk-drag[_ngcontent-%COMP%] {\n  background-image: url(/assets/styles/images/drag-bg.png);\n  text-align: left;\n  background-size: 18px;\n  background-position: 0px 50%;\n  background-repeat: no-repeat;\n  padding-left: 25px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: left;\n  height: 26px;\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.configurePop[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fWrap[_ngcontent-%COMP%]   .showHide[_ngcontent-%COMP%]   .drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 50px;\n  text-align: right;\n}\n.btn-primary-special[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n  color: #ffffff;\n  border-radius: 3px;\n  padding: 0px !important;\n  color: #4A90E2;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n}\n.btn-primary-special[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 5px 19px 5px 18px;\n}\n.span12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.configurePop[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.configurePop[_ngcontent-%COMP%]   .custm_filter[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .form-row.midmar[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n.configurePop[_ngcontent-%COMP%]   .custm_filter[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  margin-left: -20px;\n}\n.configurePop[_ngcontent-%COMP%]   .custm_filter[_ngcontent-%COMP%]   .grid-m[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n.cFilterGrid[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  margin: 20px 0px 0px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%] {\n  width: 85%;\n  padding: 20px 15px;\n  position: relative;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: flow-root;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid-s[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 25px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%]   .grid-s[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   .cFilterRight[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  width: 15%;\n}\n.addLanRowWrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  float: left;\n  width: 75%;\n}\n.addLanRowWrap[_ngcontent-%COMP%]   .editDeleteWrap[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 10px;\n}\n.cta-button-group[_ngcontent-%COMP%] {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\fffd%20x2%3D%22100%25%22%20stroke-dasharray%3D%221%2C%203%22%2F%3E%3C%2Fsvg%3E) !important;\n  align-items: baseline;\n  background-position: 0 -1px;\n  background-repeat: repeat-x;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  padding: 20px 0 10px;\n  width: 100%;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%] {\n  color: #36424F;\n  font-size: 13px;\n  border: 1px solid #CCC;\n  background: #F6F6F6;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0;\n  background-color: #EB583B;\n  padding: 7px 26px;\n  border: none;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 0px 19px 0px 18px;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  border: 1px solid #CCC !important;\n  background: #F6F6F6 !important;\n  margin-right: 5px;\n  padding: 5px 20px;\n  padding: 7px 22px;\n  height: 35px;\n  font-size: 13px;\n  margin-right: 5px;\n}\n.cta-button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  background-image:\n    linear-gradient(\n      to bottom,\n      #f2f2f2 0%,\n      #f2f2f2 100%);\n  color: #EB583B;\n  border-radius: 3px;\n  border-color: #bebebe;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%] {\n  background-image: none !important;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4A90E2;\n  background: transparent;\n  padding: 0 20px;\n  border-radius: 0px;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-left: solid 1px #C3BBB1;\n  padding-right: 0px;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px !important;\n}\n.cta-button-group.nodots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.err_message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  display: inline-block;\n}\n.tableWrap[_ngcontent-%COMP%] {\n  overflow: inherit;\n}\n.padding-xxs[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.selectListing.fullWidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%], \n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropup[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%], \n.selectListing.fullWidth[_ngcontent-%COMP%]   .dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border: solid 1px #ccc !important;\n  display: block;\n  outline: none;\n  width: 100%;\n  height: 25px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  text-align: left;\n  white-space: nowrap;\n  line-height: 24px;\n  font-size: 13px;\n  color: #666666;\n  font-weight: normal;\n  text-decoration: none;\n  border-radius: 3px;\n  padding: 0px 8px;\n}\n.selectListing[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.Hide[_ngcontent-%COMP%]    + .showHide[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-row[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: 2rem;\n  margin-bottom: 10px;\n}\n.created-filter[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.created-filter[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  color: #36424F;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border: solid 1px #C3BBB1;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 18px 25px !important;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #36424F;\n  font-size: 12px;\n  padding: 0 18px;\n}\n.created-filter[_ngcontent-%COMP%]   .tableWrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  color: #D0021B;\n  border-left: solid 1px #C3BBB1;\n}\n.basicTable[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n  margin: 10px 0;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px !important;\n  font-size: 13px;\n  font-weight: 400;\n  color: #727272;\n  border-top: none;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #D0021B;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%] {\n  margin: -5px;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n}\n.cFilterGrid[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.crtdFilter[_ngcontent-%COMP%]   table.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .editDelWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 5px;\n  color: #636363;\n  font-size: 18px;\n}\n.globalSearchWrap[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.globalSearchWrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0px 25px 0px 8px;\n  font-size: 14px;\n  border-radius: 2px;\n  width: 100%;\n}\n.globalSearchWrap[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  color: #79797e;\n}\n.wfMainGSearch[_ngcontent-%COMP%] {\n  width: 68%;\n  float: left;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .left_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .right_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.editDeleteWrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 14px;\n}\n.editDeleteWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1px 4px;\n  font-size: 11px;\n  color: #848484;\n}\n.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 769px) {\n  .cFilterGrid[_ngcontent-%COMP%] {\n    display: table;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterLeft[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: top;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterRight[_ngcontent-%COMP%] {\n    width: 250px;\n    border-top: 0px;\n    border-left: 1px solid #ccc;\n  }\n  .cFilterGrid[_ngcontent-%COMP%]   .cFilterRight[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    height: 35px;\n    padding: 3px 8px 2px 8px;\n  }\n  .break-grid-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 33.33%;\n  }\n}\n.selectFilter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: radio;\n  width: auto;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #ffe8e8 !important;\n  border: 2px solid #EB583B !important;\n  border-radius: 6px;\n  position: relative;\n  z-index: 9999999999;\n}\n.pad-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.cstm-width-400[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  background-color: #fafafa !important;\n  border: 2px solid #dfdfdf;\n  border-bottom: 2px solid #dfdfdf;\n  border-radius: 6px;\n  height: 170px;\n  margin-left: 0px !important;\n}\n.trans-border[_ngcontent-%COMP%] {\n  border: 1px solid transparent !important;\n}\n.list-item-with-image[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n.placeholder-image[_ngcontent-%COMP%] {\n  height: 88px;\n  width: 88px;\n  background: rgb(242, 242, 242);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n}\n.align-gap[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.flex-direction-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.aling-gap-5[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 94%;\n  background-color: #dfdfdf;\n  margin-bottom: 13px;\n}\n.main-divide[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-jusstify[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 14px;\n  width: 93%;\n}\n.display-jusstify[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%], \n.display-jusstify[_ngcontent-%COMP%]   .box-sub-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.d-flex-justify[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cstm-title-mt[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n.cstm-title-checkbox-radio[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 35px;\n}\n.cstm-title-checkbox-radio-input[_ngcontent-%COMP%] {\n  border-radius: 17px !important;\n}\n.cstm-card-header-continer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background: rgba(242, 242, 242, 0.6);\n  padding: 10px;\n  position: relative;\n}\n.cstm-card-header-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: end;\n}\n.cstm-card3-width-400[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  background-color: rgb(255, 255, 255) !important;\n  border: 2px solid #dfdfdf;\n  border-bottom: 2px solid #dfdfdf;\n  border-radius: 6px;\n  height: auto;\n}\n.placeholder-image-card3[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  background: rgb(222, 222, 222) !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 24px;\n}\n.cstm-list-item-card3-upper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 25px 25px 3px 25px;\n}\n.cstm-list-item-card3-lower[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 25px 3px 4px;\n}\n.cstm-card4-width-400[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  background-color: rgb(255, 255, 255) !important;\n  border: 2px solid #dfdfdf;\n  border-bottom: 2px solid #dfdfdf;\n  border-radius: 6px;\n  height: 325px;\n  padding: 20px;\n}\n.cstm-list-item-card4-upper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 25px 3px 15px;\n}\n.cstm-list-item-card4-lower[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 2px 15px 3px 15px;\n}\n.mr-16[_ngcontent-%COMP%] {\n  margin-right: 18px;\n}\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.highlighted[_ngcontent-%COMP%] {\n  background-color: #f0f8ff;\n  border: 2px solid #4c9e00;\n  border-radius: 6px;\n}\n.info-box-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.d-flex-space[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.margin-top-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.footer-content-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.lower-content-info[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n  padding: 5px 8px 3px 4px !important;\n}\n.left-buttons[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.btn-close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.btn-close[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n  opacity: none;\n}\n/*# sourceMappingURL=card-wall-configuration-selection.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardWallConfigurationSelectionComponent, { className: "CardWallConfigurationSelectionComponent", filePath: "src\\app\\admin\\BM\\components\\Cardwalls\\card-wall-configuration-selection\\card-wall-configuration-selection.component.ts", lineNumber: 20 });
})();

// src/app/admin/BM/components/bm-grid/bm-grid.component.ts
var _c0 = ["jsonFileInput"];
function BmGridComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function BmGridComponent_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.CreateNewRecord(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd()();
  }
}
function BmGridComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "form", 8)(2, "div", 51)(3, "div", 52);
    \u0275\u0275text(4, "Version Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.CreateNewVersion();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 54);
    \u0275\u0275element(7, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "New Version");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onPublishToEnvironment();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 56);
    \u0275\u0275element(12, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Publish To Environment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.GenerateDMOGPROPS();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 58);
    \u0275\u0275element(17, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Migrate to New Modeler");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 51)(21, "div", 52);
    \u0275\u0275text(22, "Manage Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onCompanyAssociation();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 60);
    \u0275\u0275element(25, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Company Access");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 51)(29, "div", 52);
    \u0275\u0275text(30, "Bulk Operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.BatchUpdate();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 62);
    \u0275\u0275element(33, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Batch Changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.BulkTrigger();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 64);
    \u0275\u0275element(38, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Trigger Input on Fields");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 51)(42, "div", 52);
    \u0275\u0275text(43, "Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_44_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onTopCornerDetail();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 66);
    \u0275\u0275element(46, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Record Header");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_49_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.GridViewMasterConfig("", "");
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 68);
    \u0275\u0275element(51, "path", 69)(52, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Grid Master Config");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.UniqueConstraint();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 64);
    \u0275\u0275element(57, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "Require Unique Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 51)(61, "div", 53);
    \u0275\u0275listener("click", function BmGridComponent_div_49_Template_div_click_61_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.showDeleteMessage();
      return \u0275\u0275resetView(ctx_r3.closeActionsPopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 72);
    \u0275\u0275element(63, "path", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "span", 74);
    \u0275\u0275text(65, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r3.popupPosition.x, "px")("top", ctx_r3.popupPosition.y, "px");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.BMForm);
  }
}
function BmGridComponent_ng_template_54_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorMsg);
  }
}
function BmGridComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "h4", 76);
    \u0275\u0275text(2, "Upload BM File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function BmGridComponent_ng_template_54_Template_button_click_3_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.dismiss("Cross click"));
    });
    \u0275\u0275element(4, "span", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 79)(6, "form")(7, "div", 80)(8, "div", 81)(9, "input", 82);
    \u0275\u0275listener("change", function BmGridComponent_ng_template_54_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      const bulkUpload_r2 = \u0275\u0275reference(55);
      const jsonModalTemplate_r5 = \u0275\u0275reference(57);
      return \u0275\u0275resetView(ctx_r3.handleAnyFileInput($event, bulkUpload_r2, jsonModalTemplate_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 83)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 83);
    \u0275\u0275template(14, BmGridComponent_ng_template_54_span_14_Template, 2, 1, "span", 84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 85)(16, "button", 86);
    \u0275\u0275listener("click", function BmGridComponent_ng_template_54_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadTemplate());
    });
    \u0275\u0275text(17, "Download Excel Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 87);
    \u0275\u0275listener("click", function BmGridComponent_ng_template_54_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.upload());
    });
    \u0275\u0275text(19, "Upload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.IsValidFile);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.IsValidFile);
  }
}
function BmGridComponent_ng_template_56_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorMsg);
  }
}
function BmGridComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "h4", 76);
    \u0275\u0275text(2, "Upload BMJson File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function BmGridComponent_ng_template_56_Template_button_click_3_listener() {
      const modal_r10 = \u0275\u0275restoreView(_r9).$implicit;
      return \u0275\u0275resetView(modal_r10.dismiss("Cross click"));
    });
    \u0275\u0275element(4, "span", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "div", 89);
    \u0275\u0275elementStart(6, "div", 79)(7, "form")(8, "div", 80)(9, "div", 81)(10, "input", 90);
    \u0275\u0275listener("change", function BmGridComponent_ng_template_56_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.validateJsonFile($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "label", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 83)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 83);
    \u0275\u0275template(16, BmGridComponent_ng_template_56_span_16_Template, 2, 1, "span", 84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 85)(18, "button", 87);
    \u0275\u0275listener("click", function BmGridComponent_ng_template_56_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.ImportJsonBM());
    });
    \u0275\u0275text(19, "Upload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r3.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.IsValidFile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.IsValidFile);
  }
}
var BmGridComponent = class _BmGridComponent {
  constructor(dialog, userDetail, columnFilter, toastr, bmService, msg, modalService, fb, formView, dmApi, activatedRoute, router) {
    this.dialog = dialog;
    this.userDetail = userDetail;
    this.columnFilter = columnFilter;
    this.toastr = toastr;
    this.bmService = bmService;
    this.msg = msg;
    this.modalService = modalService;
    this.fb = fb;
    this.formView = formView;
    this.dmApi = dmApi;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.file = null;
    this.IsValidFile = false;
    this.fileName = "";
    this.errorMsg = "";
    this.isNewDM = "";
    this.dataSource = [];
    this.filters = {};
    this.searchText = "";
    this.showActionsPopup = false;
    this.popupPosition = { x: 0, y: 0 };
    this.boundOutsideClick = this.closeActionsPopupOnOutsideClick.bind(this);
    this.boundKeydown = this.handleKeyDown.bind(this);
    this.bodyData = {
      PageSize: 20,
      PageNumber: 1,
      SortColumn: "CRTDON",
      SortOrder: "desc",
      TimeZone: "0",
      GridFilters: []
    };
    this.pageNum = -1;
    this.filterValue1 = "";
    this.filterValue2 = "";
    this.ConditionOpt1 = "";
    this.ConditionOpt2 = "";
    this.logicalOpt = "OR";
    this.HeaderMap = {
      config: {
        header: {
          columns: [
            {
              objectKey: "nam",
              displayName: "Business Model Name",
              width: "17%",
              dataType: "Link"
            },
            {
              objectKey: "DISPNAME",
              displayName: "Friendly Name",
              width: "17%"
            },
            {
              objectKey: "Ver",
              displayName: "Version",
              width: "8%"
            },
            {
              objectKey: "Status",
              displayName: "Mode",
              width: "10%"
            },
            // {
            //   objectKey: 'bmog',
            //   displayName: 'BMOG',
            //   width: '8%'
            // },
            // {
            //   objectKey: 'workflow',
            //   displayName: 'Workflow',
            //   dataType: 'LinkWithSpecialChar',
            //   SpecialChar: 'Click here',
            //   width: '8%'
            // },
            {
              objectKey: "crtdon",
              displayName: "Date Created",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail.TimeZone?.toString() || "0",
              width: "16%"
            },
            {
              objectKey: "modfon",
              displayName: "Date Modified",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail.TimeZone?.toString() || "0",
              width: "16%"
            }
            // {
            //   objectKey: 'MOD',
            //   displayName: 'Mode',
            //   width: '8%'
            // },
            // {
            //   objectKey: 'DM',
            //   displayName: 'Data Modeler',
            //   dataType: 'LinkWithSpecialChar',
            //   SpecialChar: 'Click here',
            //   width: '8%'
            // }
          ],
          action: {
            moreInfo: true,
            Checkbox: true,
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
    this.BMForm = this.fb.group({
      ChangeStatus: ["-1"],
      ChangeMode: ["-1"]
    });
    this.LoadData();
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
        this.ExportBM(event.rowIndex);
        break;
      case "Filter_Header":
        this.bindColumnFilterDdl(event);
        break;
      case "Edit":
        this.CreateNewRecord(event.rowIndex);
        break;
      case "Link":
        if (event.ColumnFilterDropdown === "nam") {
          if (this.dataSource[event.rowIndex].isNewDM == "1") {
            if (window.location.href.includes("wfadmin"))
              this.router.navigate(["wfadmin/admin/bm/data-modeler1"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            else {
              this.router.navigate(["admin/bm/data-modeler1"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            }
          } else {
            if (window.location.href.includes("wfadmin"))
              this.router.navigate(["wfadmin/admin/bm/data-modeler"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            else {
              this.router.navigate(["admin/bm/data-modeler"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
            }
          }
        }
        break;
      case "Filter_Click":
        if (!this.validate(event)) {
          break;
        }
        this.bodyData.PageNumber = 1;
        let filter = {};
        filter = {
          GridConditions: [],
          DataField: event.colData.objectKey,
          LogicalOperator: event.filterData.logicalOpt.Value === "Select..." ? "" : event.filterData.logicalOpt.Value,
          FilterType: "Column_Filter"
        };
        if (event.filterData.filterValue1 && event.filterData.filterValue1 !== "") {
          filter.GridConditions.push({
            Condition: event.filterData.ConditionOpt1.Value,
            ConditionValue: event.filterData.filterValue1
          });
        }
        if (event.filterData.filterValue2 && event.filterData.filterValue2 !== "") {
          filter.GridConditions.push({
            Condition: event.filterData.ConditionOpt2.Value,
            ConditionValue: event.filterData.filterValue2
          });
        }
        if (filter && Object.keys(filter).length !== 0) {
          this.filters["Column_Filter~$~" + event.colData.objectKey] = filter;
        }
        this.generateFilter();
        event.ColumnFilterDropdown.close();
        break;
      case "Remove Sort":
        this.bodyData.SortColumn = "-1";
        this.bodyData.SortOrder = "desc";
        sessionStorage.setItem("grid_filter", JSON.stringify(this.bodyData));
        this.LoadData();
        break;
      case "SpecialCharClick":
        if (event.ColumnFilterDropdown === "workflow") {
          this.WorkFlowAssociation(event.rowIndex);
        } else if (this.dataSource[event.rowIndex].isNewDM == "1") {
          if (window.location.href.includes("wfadmin"))
            this.router.navigate(["wfadmin/admin/bm/data-modeler1"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
          else {
            this.router.navigate(["admin/bm/data-modeler1"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
          }
        } else {
          if (window.location.href.includes("wfadmin"))
            this.router.navigate(["wfadmin/admin/bm/data-modeler"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
          else {
            this.router.navigate(["admin/bm/data-modeler"], { queryParams: { BMID: this.dataSource[event.rowIndex].BMID, TypeID: this.dataSource[event.rowIndex].TypeID } });
          }
        }
        break;
      case "FilterClear_Click":
        delete this.filters["Column_Filter~$~" + event.colData.objectKey];
        sessionStorage.removeItem("grid_filter");
        this.generateFilter();
        event.ColumnFilterDropdown.close();
        break;
    }
  }
  LoadData() {
    this.isLoading = true;
    this.bmService.getWFGrid(this.processName, this.bodyData).subscribe({
      next: (x) => {
        this.dataSource = x?.Data || [];
        this.itemsCount = x?.RecordsCount || 0;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }
  bindColumnFilterDdl(item) {
    let type = "";
    if (item.colData.dataType === "Date") {
      type = "DateEditBox";
    }
    const FilterData = this.columnFilter.GetFilterByDataType(type);
    if (FilterData.length === 0) {
    } else {
      const key = Object.keys(item.colData)[0];
      this.HeaderMap.config.header.columnFilter["colData_" + item.colIndex] = FilterData;
      this.ConditionOpt1 = item.ConditionOpt1;
      this.ConditionOpt2 = item.ConditionOpt2;
    }
  }
  generateFilter() {
    sessionStorage.removeItem("grid_filter");
    this.bodyData.GridFilters = [];
    this.bodyData.PageNumber = 1;
    Object.keys(this.filters).forEach((key) => {
      this.bodyData.GridFilters.push(this.filters[key]);
    });
    sessionStorage.setItem("grid_filter", JSON.stringify(this.bodyData));
    this.LoadData();
  }
  validate(event) {
    if (event.filterData.ConditionOpt1 && (event.filterData.ConditionOpt1.Value === "" || event.filterData.ConditionOpt1.Value === "Select...")) {
      return false;
    } else if (event.filterData.filterValue1 && event.filterData.filterValue1.Value === "") {
      return false;
    } else {
      return true;
    }
  }
  removeFilter(txtGlobal) {
    this.filters = [];
    txtGlobal.value = "";
    this.pageNum = 1;
    this.generateFilter();
  }
  OnRowClick(event) {
  }
  globalSearch(value) {
    this.pageNum = 1;
    let filter = {};
    if (value === "") {
      delete this.filters["Global_Search~$~dmoName"];
    } else {
      filter = {
        GridConditions: [
          {
            Condition: "CONTAINS",
            ConditionValue: value
          }
        ],
        DataField: "dmoName",
        LogicalOperator: "Or",
        FilterType: "Global_Search"
      };
    }
    if (filter && Object.keys(filter).length !== 0) {
      this.filters["Global_Search~$~dmoName"] = filter;
    }
    this.generateFilter();
  }
  generateXML(rowIndex) {
    const selectedItems = this.dataSource[rowIndex];
    this.Version = this.dataSource[rowIndex].Ver;
    if (this.dataSource[0]?.isNewDM === "1") {
      this.bmService.generateXML1(this.processName, this.Version).pipe(
        tap((response) => {
          this.alertMsgTxt = [];
          if (!response) {
            throw new Error("No response from generateXML1");
          }
          if (response.IsBMWFLinked === 0)
            this.alertMsgTxt.push("BM-WF is not linked.");
          if (response.IsLive === 0)
            this.alertMsgTxt.push("BM-WF is not live.");
          if (response.IsCmpnyGrpExists === 0)
            this.alertMsgTxt.push("Company Group does not exist.");
          if (response.IsCmpnyBMObjectLinked === 0)
            this.alertMsgTxt.push("Company-BM Objects are not linked.");
          if (this.alertMsgTxt.length > 0) {
            throw new Error("Validation errors");
          }
        }),
        // only if generateXML1 passed with zero alerts
        switchMap(() => this.bmService.generateXML(this.processName, this.Version)),
        catchError((err) => {
          this.showErrorModal();
          return of(false);
        })
      ).subscribe((success) => {
        if (success) {
          this.toastr.success("JSON generated successfully");
          this.LoadData();
        }
      });
    } else {
      this.bmService.generateXML(this.processName, this.Version).pipe(catchError((err) => {
        this.alertMsgTxt = ["Error generating JSON"];
        this.showErrorModal();
        return of(false);
      })).subscribe((success) => {
        if (success) {
          this.toastr.success("JSON generated successfully");
          this.LoadData();
        }
      });
    }
  }
  showErrorModal() {
    const dialogRef = this.dialog.open(GenerateXmlComponent, {
      width: "656px",
      disableClose: true,
      panelClass: "custom-dialog-container",
      data: {
        type: "bm",
        processName: this.processName,
        verNo: this.Version,
        alertMsgTxt: this.alertMsgTxt
      }
    });
    dialogRef.componentInstance.closeModal.subscribe(() => dialogRef.close());
  }
  openBulkUpload(bulkUpload) {
    this.file = null;
    this.fileName = "";
    this.modalService.open(bulkUpload, { ariaLabelledBy: "modal-basic-title", backdrop: "static", keyboard: false, centered: true });
  }
  handleFileInput(files) {
    this.file = files.item(0);
    if (this.file) {
      if (this.file.type === "application/vnd.ms-excel" || this.file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        this.IsValidFile = false;
        this.fileName = this.file.name;
      } else {
        this.fileName = "";
        this.errorMsg = "File not valid";
        this.IsValidFile = true;
      }
    }
  }
  upload() {
    if (this.file === null) {
      this.IsValidFile = true;
      this.errorMsg = "Please select file";
      return;
    }
    const fileName = this.file.name.toLowerCase();
    const isExcel = fileName.endsWith(".xls") || fileName.endsWith(".xlsx");
    const isJson = fileName.endsWith(".json");
    if (isExcel) {
      this.IsValidFile = false;
      this.errorMsg = "";
      const formData = new FormData();
      formData.append("processName", this.processName);
      formData.append("uploadFile", this.file);
      this.bmService.UploadFile(formData, this.processName).subscribe((Result) => {
        if (Result.status === "Success") {
          this.file = null;
          this.fileName = "";
          this.modalService.dismissAll();
          this.msg.showMessage("Success", {
            header: "File uploaded successfully",
            body: Result.message
          });
          this.LoadData();
        } else {
          this.errorMsg = Result.message || "Upload failed.";
          this.IsValidFile = true;
        }
      }, (error) => {
        this.errorMsg = "Upload failed.";
        this.IsValidFile = true;
      });
    } else if (isJson) {
      this.IsValidFile = false;
      this.errorMsg = "";
      var BMID = this.dataSource.filter((x) => x.selected === true).map((x) => x.BMID);
      if (BMID.length >= 2) {
        this.errorMsg = "Please select only one Datasource";
        this.IsValidFile = true;
        return;
      }
      const BMIDValue = BMID.length === 1 ? BMID[0] : "";
      this.processName = sessionStorage.getItem("AppName");
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e?.target?.result;
          const parsedData = JSON.parse(result);
          this.bmService.ImportJsonBM(this.processName, BMIDValue, parsedData).subscribe({
            next: (response) => {
              this.toastr.success("BM generated successfully");
              this.file = null;
              this.fileName = "";
              this.modalService.dismissAll();
              this.LoadData();
            },
            error: (err) => {
              this.errorMsg = "Error generating BM";
              this.IsValidFile = true;
            }
          });
        } catch (error) {
          this.errorMsg = "Error parsing JSON file.";
          this.IsValidFile = true;
        }
      };
      reader.readAsText(this.file);
    } else {
      this.IsValidFile = true;
      this.errorMsg = "Only Excel or JSON files can be uploaded here.";
      return;
    }
  }
  downloadTemplate() {
    this.bmService.DownloadWFTemp(this.processName).subscribe((result) => {
      this.SaveUploadLog(result);
    });
  }
  SaveUploadLog(FileData) {
    const curDate = /* @__PURE__ */ new Date();
    const fileName = this.processName.replace(" ", "_") + "_Template_" + (curDate.getMonth() + 1).toString() + "_" + curDate.getDate() + "_" + curDate.getFullYear() + "_" + curDate.getHours() + "_" + curDate.getMinutes() + "_" + curDate.getSeconds();
    (0, import_file_saver.saveAs)(FileData, fileName);
  }
  onTopCornerDetail() {
    return __async(this, null, function* () {
      const selected = this.dataSource[this.selectedRowIndex];
      const bmId = selected.BMID;
      const modal = this.msg.showComponent(TopCornerDetailComponent, { bmId }, { size: "lg", centered: true });
      const res = yield modal.result;
      if (res) {
        this.toastr.success("Data saved successfully");
        this.LoadData();
      }
    });
  }
  onCompanyAssociation() {
    return __async(this, null, function* () {
      const obj = this.dataSource[this.selectedRowIndex];
      const modal = this.msg.showComponent(CompanyAssociationComponent, {
        displayWith: (item) => `${item.BMODISPNAME} > ${item.DMOGDISPNAME} > ${item.DMODISPNAME}`,
        uniqueWith: (item) => `${item.BMOID}${item.DMOGID}${item.DMOID}`,
        getAssociationsWith: (groupId) => this.formView.getBMObjectsForCompanyAssociation(groupId, obj.TypeID, obj.BMID),
        checkBy: "ISDMOSELECTED"
      }, { size: "lg", centered: true });
      const res = yield modal.result;
      if (res) {
        const success = (yield this.updateCompanyAssociatedRecords(obj, res)) === 1;
        if (success) {
          this.toastr.success("Success");
          this.LoadData();
        }
      }
    });
  }
  updateCompanyAssociatedRecords(bm, res) {
    const bmoGuids = /* @__PURE__ */ new Set(), dmogGuids = /* @__PURE__ */ new Set(), dmoGuids = /* @__PURE__ */ new Set();
    const selectedItems = Array.isArray(res.selectedItems) ? res.selectedItems : [];
    selectedItems.forEach((item) => {
      bmoGuids.add(item.BMOGUID);
      dmogGuids.add(item.DMOGGUID);
      dmoGuids.add(item.DMOGUID);
    });
    const payload = {
      BMId: bm.BMID,
      ProcessId: bm.TypeID,
      CompanyId: res.companyId,
      groupName: res.groupName,
      BMOGUIDS: [...bmoGuids].toString(),
      DMOGGUIDS: [...dmogGuids].toString(),
      DMOGUIDS: [...dmoGuids].toString(),
      IsAllComp: res.IsAllComp
    };
    return lastValueFrom(this.formView.updatetBMObjectsForCompanyAssociation(payload));
  }
  CreateNewRecord(index) {
    const modalRef = this.modalService.open(BmEntryComponent, { backdrop: "static", size: "lg", keyboard: false });
    const modalInstance = modalRef.componentInstance;
    if (index !== null) {
      const item = this.dataSource[index];
      modalInstance.dataList = item;
      modalInstance.isEdit = true;
      modalInstance.currentMode = item?.MOD;
    } else {
      modalInstance.isEdit = false;
    }
    modalRef.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully.");
        this.LoadData();
      }
    }), (reason) => {
    });
  }
  ChangeStatus(event) {
    const selectedStatusbmId = this.dataSource.filter((x) => x.selected === true).map((x) => x.BMID).join(",");
    if (event.target.value !== "-1" && !!selectedStatusbmId) {
      this.bmService.ChangeBMStatus(selectedStatusbmId, event.target.value).subscribe((result) => {
        if (result) {
          this.LoadData();
          this.BMForm.get("ChangeStatus").patchValue("-1");
          this.toastr.success("Status Changed successfully");
        }
      });
    } else {
      if (event.target.value !== "-1" && (selectedStatusbmId === void 0 || selectedStatusbmId === "")) {
        this.BMForm.get("ChangeStatus").patchValue("-1");
        this.toastr.warning("Please select at least one record.");
      }
    }
  }
  ChangeMode(event) {
    const bmmode = event.target.value;
    const selectedStatusbmids = this.dataSource.filter((x) => x.selected === true);
    if (bmmode !== "-1" && !!selectedStatusbmids && selectedStatusbmids.length === 1) {
      this.bmService.ChangeBMMode(selectedStatusbmids[0].BMID, bmmode).subscribe((result) => {
        if (result) {
          this.LoadData();
          this.BMForm.get("ChangeMode").patchValue("-1");
          this.toastr.success("Mode Changed successfully");
        }
      });
    } else {
      if (bmmode !== "-1" && (!!selectedStatusbmids && (selectedStatusbmids.length > 1 || selectedStatusbmids.length === 0))) {
        this.BMForm.get("ChangeMode").patchValue("-1");
        this.toastr.warning("Please select one record only.");
      }
    }
  }
  showDeleteMessage() {
    if (this.selectedRowIndex > -1) {
      this.BMID = this.dataSource[this.selectedRowIndex].BMID;
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
    Caller.bmService.DeleteBM(Caller.BMID).subscribe({
      next: (result) => {
        if (result === true) {
          Caller.LoadData();
          modelRef.close();
        } else {
          Caller.toastr.warning("Record(s) Cannot Be Deleted");
        }
      },
      error: (error) => {
        if (!!error.error && error.error === "Record(s) Cannot Be Deleted") {
          Caller.toastr.warning("Record(s) Cannot Be Deleted");
        }
      }
    });
  }
  CreateNewVersion(index) {
    if (index !== -1 && this.dataSource[this.selectedRowIndex]) {
      const bmId = this.dataSource[this.selectedRowIndex].BMID;
      this.msg.showMessage("Warning", {
        header: "Create New Version",
        body: "Are you sure you want to create a new version of the selected item?",
        btnText: "Create",
        checkboxText: "Yes, create new version",
        isDelete: true,
        isNewDesign: true,
        callback: () => {
          this.bmService.CreateBMVersion(bmId, this.userDetail.TimeZone.toString()).subscribe((result) => {
            if (result.includes("Version created successfully.")) {
              this.toastr.success("Version created successfully.");
              this.LoadData();
            }
          });
        },
        caller: this
      });
    }
  }
  ExportBM(rowIndex) {
    const bm = this.dataSource[rowIndex];
    if (bm) {
      const fileName = bm.nam + "_" + bm.Ver + ".xlsx";
      this.bmService.ExportBMData(bm.BMID, this.userDetail.TimeZone.toString()).subscribe((data) => {
        (0, import_file_saver.saveAs)(data, fileName);
        this.LoadData();
      });
    }
  }
  openExportGridConfigurationPopup(poptype, viewName, ExportType) {
    const modalRef = this.modalService.open(GridExportComponent, { windowClass: "grid-config-view-modal", backdrop: "static", keyboard: false, centered: true });
    const modalInstance = modalRef.componentInstance;
    modalInstance.ProcessName = this.processName;
    modalInstance.objBaseGrid = this;
    modalInstance.ExportType = ExportType.toUpperCase();
    modalInstance.ExportUserData.SortColumn = this.bodyData.SortColumn;
    modalInstance.ExportUserData.SortOrder = this.bodyData.SortOrder;
    modalInstance.ExportUserData.ProcessName = this.processName;
    modalInstance.ExportUserData.GridFilters = this.bodyData.GridFilters;
    modalInstance.ExportFrom = "BM";
    modalInstance.BMIds = this.dataSource.filter((x) => x.selected === true).map((x) => x.BMID).join(",");
  }
  BatchUpdate() {
    return __async(this, null, function* () {
      const selected = this.dataSource[this.selectedRowIndex];
      const bmId = selected.BMID;
      const processId = selected.TypeID;
      try {
        const modal = this.msg.showComponent(BatchUpdateComponent, { bmId, processId }, { size: "lg", centered: true });
        const res = yield modal.result;
        if (res) {
          this.toastr.success("Data saved successfully");
          this.LoadData();
        }
      } catch (err) {
        this.toastr.error("Failed to decrypt record id");
      }
    });
  }
  BulkTrigger() {
    return __async(this, null, function* () {
      const selected = this.dataSource[this.selectedRowIndex];
      const bmId = selected.BMID;
      const processId = selected.TypeID;
      try {
        const modal = this.msg.showComponent(BulkTriggerComponent, { bmId, processId }, { size: "lg", centered: true });
        const res = yield modal.result;
        if (res) {
          this.toastr.success("Data saved successfully");
          this.LoadData();
        }
      } catch (err) {
        this.toastr.error("Failed to decrypt record id");
      }
    });
  }
  UniqueConstraint() {
    const bm = this.dataSource[this.selectedRowIndex];
    if (bm) {
      const modalRef = this.modalService.open(UniqueConstraintComponent, { windowClass: "grid-config-view-modal", backdrop: "static", keyboard: false, size: "lg", centered: true });
      const modalInstance = modalRef.componentInstance;
      modalInstance.bmId = bm.BMID;
      modalRef.result.then((result) => __async(this, null, function* () {
        if (result) {
          this.toastr.success("Unique Constraint saved successfully.");
          this.LoadData();
        }
      }), (reason) => {
      });
    }
  }
  WorkFlowAssociation(index) {
    const modalRef = this.modalService.open(BmWfAssociationComponent, { backdrop: "static", size: "lg", keyboard: false, centered: true });
    const modalInstance = modalRef.componentInstance;
    modalInstance.BMName = this.dataSource[index].nam;
    modalInstance.Version = this.dataSource[index].Ver;
    modalInstance.BMID = this.dataSource[index].BMID;
    if (index !== null) {
      const item = this.dataSource[index];
    }
    modalRef.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Workflow BM saved successfully.");
      }
    }), (reason) => {
    });
  }
  GridViewMasterConfig(poptype, viewName) {
    const modalRef = this.modalService.open(GridViewMasterConfigurationComponent, { windowClass: "grid-config-view-modal", backdrop: "static", keyboard: false, size: "lg", centered: true });
    const modalInstance = modalRef.componentInstance;
    modalInstance.gridConfigJson.ViewName = viewName;
    modalInstance.ProcessName = this.processName;
    modalInstance.OldViewName = viewName;
  }
  openJsonImportModal(jsonModalTemplate) {
    this.resetFileDetails();
    const modalRef = this.modalService.open(jsonModalTemplate, {
      ariaLabelledBy: "modal-basic-title",
      backdrop: "static",
      keyboard: false,
      centered: true
    });
  }
  resetFileDetails() {
    this.fileName = "";
    this.errorMsg = "";
    this.IsValidFile = true;
    this.file = null;
  }
  validateJsonFile(event) {
    const input = event?.target;
    if (input?.files?.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;
      this.errorMsg = "";
      this.IsValidFile = false;
      if (!this.file.name.toLowerCase().endsWith(".json")) {
        this.errorMsg = "Please select a valid JSON file";
        this.IsValidFile = true;
        return;
      }
    }
  }
  ImportJsonBM() {
    if (!this.file) {
      this.errorMsg = "No file selected.";
      return;
    }
    if (this.file?.type !== "application/json") {
      this.errorMsg = "Invalid file type. Please upload a valid JSON file.";
      return;
    }
    var BMID = null;
    BMID = this.dataSource.filter((x) => x.selected === true).map((x) => x.BMID);
    if (BMID.length >= 2) {
      this.toastr.error("Please select only one Datasource");
      return;
    }
    this.processName = sessionStorage.getItem("AppName");
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e?.target?.result;
        const parsedData = JSON.parse(result);
        this.ImportBMJsonToDB(this.processName, BMID, parsedData);
        this.errorMsg = "";
      } catch (error) {
        this.errorMsg = "Error parsing JSON file.";
      }
    };
    reader.readAsText(this.file);
  }
  ImportBMJsonToDB(processName, BMID, parsedData) {
    this.bmService.ImportJsonBM(processName, BMID, parsedData).subscribe({
      next: (response) => {
        this.toastr.success("BM generated successfully");
      },
      error: (err) => {
        this.toastr.error("Error generating BM");
      }
    });
  }
  GenerateDMOGPROPS() {
    var BMID = this.dataSource[this.selectedRowIndex]?.BMID;
    this.msg.showMessage("Warning", {
      header: "Migrate to New Model",
      body: "Are you sure you want to migrate to the new model?",
      btnText: "Migrate",
      checkboxText: "Yes, migrate",
      isDelete: true,
      isNewDesign: true,
      callback: () => {
        this.bmService.GenerateDMOGPROPS(BMID).subscribe({
          next: () => {
            this.LoadData();
            this.toastr.success("DMOGPROPS Inserted successfully");
          },
          error: () => {
            this.toastr.error("Error Inserting DMOGPROPS");
          }
        });
      },
      caller: this
    });
  }
  goToVersionGrid() {
    const modalRef = this.modalService.open(LiveVersionComponent, { backdrop: "static", size: "lg", keyboard: false, centered: true });
    modalRef.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully.");
      }
    }), (reason) => {
    });
  }
  onSearch() {
    if (this.searchText.trim()) {
      console.log("Searching for:", this.searchText);
      this.bodyData.GridFilters = [
        {
          "GridConditions": [
            {
              "Condition": "CONTAINS",
              "ConditionValue": this.searchText
            }
          ],
          "DataField": "dmoName",
          "LogicalOperator": "Or",
          "FilterType": "Global_Search"
        }
      ];
      this.LoadData();
    }
  }
  onPublishToEnvironment() {
    const item = this.dataSource[this.selectedRowIndex];
    const sourceData = {
      FriendlyName: item.DISPNAME || "",
      ModifiedOn: item.modfon || "",
      ID: item.BMID || "",
      SourceObject: "bm"
    };
    this.router.navigate(["/publish"], {
      state: { dataObject: sourceData },
      queryParams: { publishid: item.BMID }
    });
  }
  // Popup menu methods
  openActionsPopup(event) {
    event.preventDefault();
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const popupWidth = 250;
    const popupHeight = 300;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    let x = rect.left + window.scrollX;
    let y;
    let openAbove = false;
    if (spaceBelow < popupHeight && spaceAbove > popupHeight) {
      y = rect.top + window.scrollY - popupHeight;
      openAbove = true;
    } else {
      y = rect.bottom + window.scrollY;
    }
    if (x + popupWidth > window.innerWidth) {
      x = window.innerWidth - popupWidth - 10;
    }
    if (x < 10)
      x = 10;
    if (y < 10)
      y = 10;
    this.popupPosition = { x, y };
    this.showActionsPopup = true;
    setTimeout(() => {
      document.addEventListener("click", this.boundOutsideClick, true);
      document.addEventListener("keydown", this.boundKeydown, true);
    }, 0);
  }
  onActionsMenuOpen(event) {
    this.selectedRowIndex = event.rowIndex;
    this.openActionsPopupAt({ x: event.x, y: event.y });
  }
  openActionsPopupAt(pos) {
    const popupWidth = 200;
    const popupHeight = 600;
    let x = pos.x;
    let y = pos.y + 5;
    console.log("Popup position:", { x, y });
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
  closeActionsPopup() {
    this.showActionsPopup = false;
    document.removeEventListener("click", this.boundOutsideClick, true);
    document.removeEventListener("keydown", this.boundKeydown, true);
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
  CardWallTemplateConfig(poptype) {
    const modalRef = this.modalService.open(CardWallConfigurationSelectionComponent, { windowClass: "grid-config-view-modal", backdrop: "static", keyboard: false });
    const modalInstance = modalRef.componentInstance;
    modalInstance.ProcessName = this.processName;
  }
  // private boundScroll = this.handleScroll.bind(this);
  // private handleScroll(event: Event): void {
  // this.closeActionsPopup();
  // }
  handleAnyFileInput(event, bulkUpload, jsonModalTemplate) {
    const files = event.target.files;
    if (!files || files.length === 0)
      return;
    this.file = files[0];
    this.fileName = this.file.name;
    this.errorMsg = "";
    this.IsValidFile = false;
    const fileName = this.file.name.toLowerCase();
    const isExcel = fileName.endsWith(".xls") || fileName.endsWith(".xlsx");
    const isJson = fileName.endsWith(".json");
    if (isExcel) {
      if (this.file.type === "application/vnd.ms-excel" || this.file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || fileName.endsWith(".xls") || fileName.endsWith(".xlsx")) {
        this.IsValidFile = false;
        this.fileName = this.file.name;
      } else {
        this.fileName = "";
        this.errorMsg = "File not valid";
        this.IsValidFile = true;
      }
    } else if (isJson) {
      if (!fileName.endsWith(".json")) {
        this.fileName = "";
        this.errorMsg = "File not valid";
        this.IsValidFile = true;
      } else {
        this.IsValidFile = false;
        this.fileName = this.file.name;
      }
    } else {
      this.fileName = "";
      this.errorMsg = "Unsupported file type. Please upload an Excel or JSON file.";
      this.IsValidFile = true;
    }
  }
  // Directly handle JSON import without opening a modal
  importJsonFileDirectly(file) {
    if (!file) {
      this.toastr.error("No file selected.");
      return;
    }
    if (!file.name.toLowerCase().endsWith(".json")) {
      this.toastr.error("Invalid file type. Please upload a valid JSON file.");
      return;
    }
    var BMID = this.dataSource.filter((x) => x.selected === true).map((x) => x.BMID);
    if (BMID.length >= 2) {
      this.toastr.error("Please select only one Datasource");
      return;
    }
    const BMIDValue = BMID.length === 1 ? BMID[0] : "";
    this.processName = sessionStorage.getItem("AppName");
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e?.target?.result;
        const parsedData = JSON.parse(result);
        this.ImportBMJsonToDB(this.processName, BMIDValue, parsedData);
        this.errorMsg = "";
      } catch (error) {
        this.toastr.error("Error parsing JSON file.");
      }
    };
    reader.readAsText(file);
  }
  static {
    this.\u0275fac = function BmGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmGridComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserDetail), \u0275\u0275directiveInject(ColumnFilterService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(BmService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(FormViewApiService), \u0275\u0275directiveInject(DataModelerApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BmGridComponent, selectors: [["app-bm-grid"]], viewQuery: function BmGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jsonFileInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 9, consts: [["genericgridcomponent", ""], ["bulkUpload", ""], ["jsonModalTemplate", ""], [1, ""], [1, "d-flex", "justify-content-between", "flex-column", "flex-md-row", "align-items-center"], [1, "display-name"], [1, "p-1"], [1, "table-filters-group", "align-items-start", 2, "display", "none"], [1, "m-0", "p-0", 3, "formGroup"], [1, "button-group", "BMForm-Actions", 2, "padding", "3px 5px"], ["name", "ChangeStatus", "formControlName", "ChangeStatus", 1, "btn", "btn-primary-special", "btn-small", 3, "change"], ["value", "-1"], ["value", "Active"], ["value", "Inactive"], [1, "export-btns-group", "mt-1", 2, "white-space", "nowrap"], ["type", "button", "title", "BM Upload", 1, "linklike", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", "title", "Excel", 1, "linklike", 3, "click"], ["role", "img", "aria-label", "Excel", 1, "far", "fa-file-excel"], [1, "Strip"], ["title", "Add Data Model", "class", "icon", 3, "click", 4, "ngIf"], ["title", "Add Card Designer", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "25", "viewBox", "0 0 24 24", "fill", "none"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "3", "ry", "3", "stroke", "white", "stroke-width", "2", "fill", "none"], ["x", "2", "y", "7", "width", "20", "height", "2.5", "fill", "white"], ["x1", "6", "y1", "15", "x2", "12", "y2", "15", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round"], ["title", "Export this Grid", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "24", "viewBox", "0 0 19 24", "fill", "none"], ["d", "M10.6367 6.375V0H1.26172C0.638281 0 0.136719 0.501562 0.136719 1.125V22.875C0.136719 23.4984 0.638281 24 1.26172 24H17.0117C17.6352 24 18.1367 23.4984 18.1367 22.875V7.5H11.7617C11.143 7.5 10.6367 6.99375 10.6367 6.375ZM13.4539 11.3672L10.6367 15.75L13.4539 20.1328C13.693 20.5078 13.4258 21 12.9805 21H11.3445C11.1383 21 10.9461 20.8875 10.8477 20.7047C9.92891 19.0078 9.13672 17.4844 9.13672 17.4844C8.83672 18.1781 8.66797 18.4219 7.42109 20.7094C7.32266 20.8922 7.13516 21.0047 6.92891 21.0047H5.29297C4.84766 21.0047 4.58047 20.5125 4.81953 20.1375L7.64609 15.7547L4.81953 11.3719C4.57578 10.9969 4.84766 10.5047 5.29297 10.5047H6.92422C7.13047 10.5047 7.32266 10.6172 7.42109 10.8C8.64453 13.0875 8.35859 12.375 9.13672 14.0109C9.13672 14.0109 9.42266 13.4625 10.8523 10.8C10.9508 10.6172 11.143 10.5047 11.3492 10.5047H12.9805C13.4258 10.5 13.693 10.9922 13.4539 11.3672ZM18.1367 5.71406V6H12.1367V0H12.4227C12.7227 0 13.0086 0.117188 13.2195 0.328125L17.8086 4.92188C18.0195 5.13281 18.1367 5.41875 18.1367 5.71406Z", "fill", "white"], ["title", "Import BM", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "22", "viewBox", "0 0 19 22", "fill", "none"], ["d", "M0.699219 15.125C0.389844 15.125 0.136719 15.3781 0.136719 15.6875V16.8125C0.136719 17.1219 0.389844 17.375 0.699219 17.375H4.63672V15.125H0.699219ZM17.8906 4.19141L14.4488 0.746094C14.2906 0.587891 14.0762 0.5 13.8512 0.5H13.6367V5H18.1367V4.78555C18.1367 4.56406 18.0488 4.34961 17.8906 4.19141ZM12.5117 5.28125V0.5H5.48047C5.01289 0.5 4.63672 0.876172 4.63672 1.34375V15.125H9.13672V12.8328C9.13672 12.3301 9.74492 12.0805 10.1 12.4355L11.7805 14.1318L13.4609 15.8281C13.693 16.0637 13.693 16.4398 13.4609 16.6719L10.0965 20.0609C9.74141 20.416 9.1332 20.1664 9.1332 19.6637V17.375H4.63672V20.6562C4.63672 21.1238 5.01289 21.5 5.48047 21.5H17.293C17.7605 21.5 18.1367 21.1238 18.1367 20.6562V6.125H13.3555C12.8914 6.125 12.5117 5.74531 12.5117 5.28125Z", "fill", "white"], ["title", "Change Mode", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "16", "viewBox", "0 0 22 16", "fill", "none"], ["clip-path", "url(#clip0_11061_81599)"], ["d", "M11.9428 9.32366C11.7619 9.50674 11.5552 9.64405 11.3323 9.73559C11.1094 9.82713 10.8736 9.8729 10.6378 9.8729C10.4019 9.8729 10.1661 9.82713 9.94325 9.73559C9.72036 9.64405 9.51362 9.50674 9.33272 9.32366C9.15183 9.14058 9.01616 8.93134 8.92571 8.70576C8.83526 8.48018 8.79004 8.24152 8.79004 8.00286C8.79004 7.7642 8.83526 7.52554 8.92571 7.29996C9.01616 7.07437 9.15183 6.86514 9.33272 6.68206C9.51362 6.49898 9.72036 6.36166 9.94325 6.27012C10.1661 6.17858 10.4019 6.13281 10.6378 6.13281C10.8736 6.13281 11.1094 6.17858 11.3323 6.27012C11.5552 6.36166 11.7619 6.49898 11.9428 6.68206C12.1237 6.86514 12.2594 7.07437 12.3498 7.29996C12.4402 7.52554 12.4855 7.7642 12.4855 8.00286C12.4855 8.24152 12.4402 8.48018 12.3498 8.70576C12.2594 8.93134 12.1237 9.14058 11.9428 9.32366Z", "fill", "white"], ["d", "M12.6862 11.1445C12.6862 10.9778 12.7476 10.8111 12.8735 10.6836C13.2321 10.3207 13.5099 9.89892 13.6973 9.42814C13.8782 8.97371 13.9718 8.49312 13.9718 7.99945C13.9718 7.50579 13.8782 7.0252 13.6973 6.57076C13.5099 6.09998 13.2321 5.67824 12.8735 5.31535C12.6216 5.06034 12.6216 4.64841 12.8735 4.3934C13.1255 4.1384 13.5325 4.1384 13.7845 4.3934C14.2658 4.88053 14.6373 5.44612 14.8925 6.08037C15.138 6.69173 15.2607 7.33578 15.2607 7.99945C15.2607 8.66312 15.138 9.30718 14.8925 9.91854C14.6373 10.5528 14.2658 11.1184 13.7845 11.6055C13.5325 11.8605 13.1255 11.8605 12.8735 11.6055C12.7476 11.478 12.6862 11.3113 12.6862 11.1445Z", "fill", "white"], ["d", "M14.7663 13.2473C14.7663 13.0806 14.8276 12.9138 14.9536 12.7863C15.5932 12.139 16.0874 11.3871 16.4234 10.5468C16.7497 9.73606 16.9144 8.8795 16.9144 8.00005C16.9144 7.12061 16.7497 6.26405 16.4234 5.45326C16.0874 4.61305 15.5932 3.86111 14.9536 3.21379C14.7017 2.95878 14.7017 2.54685 14.9536 2.29184C15.2056 2.03683 15.6126 2.03683 15.8646 2.29184C16.6269 3.0634 17.2148 3.95919 17.6154 4.96287C18.003 5.93058 18.2 6.95061 18.2 8.00005C18.2 9.0495 18.003 10.0695 17.6154 11.0372C17.2148 12.0377 16.6237 12.9367 15.8646 13.7083C15.6126 13.9633 15.2056 13.9633 14.9536 13.7083C14.8276 13.5808 14.7663 13.414 14.7663 13.2473Z", "fill", "white"], ["d", "M16.8434 15.3491C16.8434 15.1824 16.9048 15.0156 17.0308 14.8881C17.9514 13.9564 18.6621 12.8742 19.1466 11.6646C19.615 10.4974 19.8508 9.2649 19.8508 7.99968C19.8508 6.73446 19.615 5.50193 19.1466 4.33479C18.6621 3.12514 17.9514 2.043 17.0308 1.11125C16.7788 0.856241 16.7788 0.444308 17.0308 0.189301C17.2827 -0.0657047 17.6897 -0.0657047 17.9417 0.189301C18.9819 1.24202 19.7894 2.47128 20.3386 3.84439C20.8683 5.16846 21.1364 6.56446 21.1364 7.99968C21.1364 9.43491 20.8683 10.8309 20.3386 12.155C19.7894 13.5248 18.9819 14.7541 17.9417 15.8101C17.6897 16.0651 17.2827 16.0651 17.0308 15.8101C16.9048 15.6826 16.8434 15.5158 16.8434 15.3491Z", "fill", "white"], ["d", "M8.58692 4.85438C8.58692 5.02111 8.52555 5.18785 8.39957 5.31535C8.04101 5.67824 7.7632 6.09998 7.57585 6.57076C7.39495 7.0252 7.30127 7.50579 7.30127 7.99945C7.30127 8.49312 7.39495 8.97371 7.57585 9.42814C7.7632 9.89892 8.04101 10.3207 8.39957 10.6836C8.65153 10.9386 8.65153 11.3505 8.39957 11.6055C8.1476 11.8605 7.74059 11.8605 7.48863 11.6055C7.00732 11.1184 6.63584 10.5528 6.38388 9.91854C6.13838 9.30718 6.01562 8.66312 6.01562 7.99945C6.01562 7.33578 6.13838 6.69173 6.38388 6.08037C6.63584 5.44612 7.01055 4.88053 7.48863 4.3934C7.74059 4.1384 8.1476 4.1384 8.39957 4.3934C8.52555 4.52091 8.58692 4.68764 8.58692 4.85438Z", "fill", "white"], ["d", "M6.50995 2.75281C6.50995 2.91955 6.44858 3.08628 6.3226 3.21379C5.683 3.86111 5.18877 4.61305 4.85282 5.45326C4.52656 6.26405 4.36182 7.12061 4.36182 8.00005C4.36182 8.8795 4.52656 9.73606 4.85282 10.5468C5.18877 11.3871 5.683 12.139 6.3226 12.7863C6.57456 13.0413 6.57456 13.4533 6.3226 13.7083C6.07063 13.9633 5.66362 13.9633 5.41166 13.7083C4.64931 12.9367 4.0614 12.0409 3.66085 11.0372C3.27322 10.0695 3.07617 9.0495 3.07617 8.00005C3.07617 6.95061 3.27322 5.93058 3.66085 4.96287C4.0614 3.96246 4.65254 3.0634 5.41166 2.29184C5.66362 2.03683 6.07063 2.03683 6.3226 2.29184C6.44858 2.41934 6.50995 2.58608 6.50995 2.75281Z", "fill", "white"], ["d", "M4.43268 0.650274C4.43268 0.817009 4.3713 0.983744 4.24532 1.11125C3.3247 2.043 2.61404 3.12514 2.1295 4.33479C1.66111 5.50193 1.4253 6.73446 1.4253 7.99968C1.4253 9.2649 1.66111 10.4974 2.1295 11.6646C2.61404 12.871 3.3247 13.9564 4.24532 14.8881C4.49728 15.1431 4.49728 15.5551 4.24532 15.8101C3.99336 16.0651 3.58635 16.0651 3.33439 15.8101C2.29424 14.7573 1.48667 13.5281 0.937526 12.155C0.407761 10.8309 0.139648 9.43491 0.139648 7.99968C0.139648 6.56445 0.407761 5.16846 0.937526 3.84439C1.48344 2.47455 2.29101 1.24529 3.33116 0.189301C3.58312 -0.0657047 3.99013 -0.0657047 4.24209 0.189301C4.36807 0.316805 4.42945 0.483539 4.42945 0.650274H4.43268Z", "fill", "white"], ["id", "clip0_11061_81599"], ["width", "21", "height", "16", "fill", "white", "transform", "translate(0.136719)"], ["class", "actions-popup", 3, "left", "top", 4, "ngIf"], [1, "grid"], [3, "pageChange", "rowClick", "actionClick", "actionsMenuOpen", "dataSource", "headerMap", "itemsCount", "sNo", "pageNum"], ["title", "Add Data Model", 1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "18", "viewBox", "0 0 19 18", "fill", "none"], ["d", "M16.851 7.07143H11.0653V1.28571C11.0653 0.575759 10.4895 0 9.77958 0H8.49386C7.78391 0 7.20815 0.575759 7.20815 1.28571V7.07143H1.42243C0.712478 7.07143 0.136719 7.64719 0.136719 8.35714V9.64286C0.136719 10.3528 0.712478 10.9286 1.42243 10.9286H7.20815V16.7143C7.20815 17.4242 7.78391 18 8.49386 18H9.77958C10.4895 18 11.0653 17.4242 11.0653 16.7143V10.9286H16.851C17.561 10.9286 18.1367 10.3528 18.1367 9.64286V8.35714C18.1367 7.64719 17.561 7.07143 16.851 7.07143Z", "fill", "white"], [1, "actions-popup"], [1, "popup-section"], [1, "section-title"], [1, "popup-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["d", "M16.7143 7.07143H10.9286V1.28571C10.9286 0.575759 10.3528 0 9.64286 0H8.35714C7.64719 0 7.07143 0.575759 7.07143 1.28571V7.07143H1.28571C0.575759 7.07143 0 7.64719 0 8.35714V9.64286C0 10.3528 0.575759 10.9286 1.28571 10.9286H7.07143V16.7143C7.07143 17.4242 7.64719 18 8.35714 18H9.64286C10.3528 18 10.9286 17.4242 10.9286 16.7143V10.9286H16.7143C17.4242 10.9286 18 10.3528 18 9.64286V8.35714C18 7.64719 17.4242 7.07143 16.7143 7.07143Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "10", "viewBox", "0 0 20 10", "fill", "none"], ["d", "M14.7219 0C12.6562 0 11.0406 1.29063 10 2.45625C8.95938 1.29063 7.34375 0 5.27812 0C2.36875 0 0 2.24375 0 5C0 7.75625 2.36875 10 5.27812 10C7.34375 10 8.95938 8.70937 10 7.54375C11.0406 8.70937 12.6562 10 14.7219 10C17.6313 10 20 7.75625 20 5C20 2.24375 17.6313 0 14.7219 0ZM5.27812 7C4.02187 7 3 6.10313 3 5C3 3.89687 4.02187 3 5.27812 3C6.47187 3 7.57187 4.12813 8.21562 5C7.57812 5.8625 6.46875 7 5.27812 7ZM14.7219 7C13.5281 7 12.4281 5.87187 11.7844 5C12.4219 4.1375 13.5312 3 14.7219 3C15.9781 3 17 3.89687 17 5C17 6.10313 15.9781 7 14.7219 7Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "13", "height", "16", "viewBox", "0 0 13 16", "fill", "none"], ["d", "M1.3 16L0 14.7556L4.48036 10.4444C4.83631 10.1037 5.10714 9.71852 5.29286 9.28889C5.47857 8.85926 5.57143 8.40741 5.57143 7.93333V3.4L4.08571 4.8L2.78571 3.55556L6.5 0L10.2143 3.55556L8.91429 4.8L7.42857 3.4V7.93333C7.42857 8.40741 7.52143 8.85926 7.70714 9.28889C7.89286 9.71852 8.16369 10.1037 8.51964 10.4444L13 14.7556L11.7 16L6.5 11.0222L1.3 16Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M17.5714 17.875H16.8571V1.84375C16.8571 1.37775 16.4734 1 16 1H4C3.52661 1 3.14286 1.37775 3.14286 1.84375V17.875H2.42857C2.19189 17.875 2 18.0639 2 18.2969V19H18V18.2969C18 18.0639 17.8081 17.875 17.5714 17.875ZM6.57143 3.67188C6.57143 3.43889 6.76332 3.25 7 3.25H8.42857C8.66525 3.25 8.85714 3.43889 8.85714 3.67188V5.07812C8.85714 5.31111 8.66525 5.5 8.42857 5.5H7C6.76332 5.5 6.57143 5.31111 6.57143 5.07812V3.67188ZM6.57143 7.04688C6.57143 6.81389 6.76332 6.625 7 6.625H8.42857C8.66525 6.625 8.85714 6.81389 8.85714 7.04688V8.45312C8.85714 8.68611 8.66525 8.875 8.42857 8.875H7C6.76332 8.875 6.57143 8.68611 6.57143 8.45312V7.04688ZM8.42857 12.25H7C6.76332 12.25 6.57143 12.0611 6.57143 11.8281V10.4219C6.57143 10.1889 6.76332 10 7 10H8.42857C8.66525 10 8.85714 10.1889 8.85714 10.4219V11.8281C8.85714 12.0611 8.66525 12.25 8.42857 12.25ZM11.1429 17.875H8.85714V14.9219C8.85714 14.6889 9.04904 14.5 9.28571 14.5H10.7143C10.951 14.5 11.1429 14.6889 11.1429 14.9219V17.875ZM13.4286 11.8281C13.4286 12.0611 13.2367 12.25 13 12.25H11.5714C11.3348 12.25 11.1429 12.0611 11.1429 11.8281V10.4219C11.1429 10.1889 11.3348 10 11.5714 10H13C13.2367 10 13.4286 10.1889 13.4286 10.4219V11.8281ZM13.4286 8.45312C13.4286 8.68611 13.2367 8.875 13 8.875H11.5714C11.3348 8.875 11.1429 8.68611 11.1429 8.45312V7.04688C11.1429 6.81389 11.3348 6.625 11.5714 6.625H13C13.2367 6.625 13.4286 6.81389 13.4286 7.04688V8.45312ZM13.4286 5.07812C13.4286 5.31111 13.2367 5.5 13 5.5H11.5714C11.3348 5.5 11.1429 5.31111 11.1429 5.07812V3.67188C11.1429 3.43889 11.3348 3.25 11.5714 3.25H13C13.2367 3.25 13.4286 3.43889 13.4286 3.67188V5.07812Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", 1, "svg-icon"], ["d", "M8.56 7.35999L7.4 6.22C7.25333 6.07333 7.07013 6 6.8504 6C6.63067 6 6.44053 6.08 6.28 6.24C6.13333 6.38666 6.06 6.57333 6.06 6.8C6.06 7.02666 6.13333 7.21333 6.28 7.35999L8 9.07999C8.16 9.23999 8.34667 9.31999 8.56 9.31999C8.77333 9.31999 8.96 9.23999 9.12 9.07999L12.52 5.68C12.68 5.52 12.7568 5.33333 12.7504 5.12C12.744 4.90666 12.6672 4.72 12.52 4.56C12.36 4.4 12.1701 4.3168 11.9504 4.3104C11.7307 4.304 11.5405 4.38053 11.38 4.54L8.56 7.35999ZM4.8 12.8C4.36 12.8 3.98347 12.6435 3.6704 12.3304C3.35733 12.0173 3.20053 11.6405 3.2 11.2V1.6C3.2 1.16 3.3568 0.783466 3.6704 0.4704C3.984 0.157333 4.36053 0.000533333 4.8 0H14.4C14.84 0 15.2168 0.1568 15.5304 0.4704C15.844 0.784 16.0005 1.16053 16 1.6V11.2C16 11.64 15.8435 12.0168 15.5304 12.3304C15.2173 12.644 14.8405 12.8005 14.4 12.8H4.8ZM1.6 16C1.16 16 0.783467 15.8435 0.4704 15.5304C0.157333 15.2173 0.000533333 14.8405 0 14.4V4C0 3.77333 0.0768001 3.58346 0.2304 3.4304C0.384 3.27733 0.573867 3.20053 0.8 3.2C1.02613 3.19946 1.21627 3.27626 1.3704 3.4304C1.52453 3.58453 1.60107 3.7744 1.6 4V14.4H12C12.2267 14.4 12.4168 14.4768 12.5704 14.6304C12.724 14.784 12.8005 14.9739 12.8 15.2C12.7995 15.4261 12.7227 15.6163 12.5696 15.7704C12.4165 15.9245 12.2267 16.0011 12 16H1.6Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", 1, "svg-icon"], ["d", "M8.44953 10.8517L3.59096 15.6845C3.35664 15.9176 2.97674 15.9176 2.74244 15.6845L2.17574 15.1209C1.94181 14.8882 1.94136 14.5111 2.17474 14.2778L6.02528 10.4297L2.17476 6.58152C1.94139 6.34829 1.94184 5.97117 2.17576 5.73849L2.74244 5.17481C2.97676 4.94173 3.35666 4.94173 3.59096 5.17481L8.44953 10.0077C8.68386 10.2407 8.68386 10.6186 8.44953 10.8517ZM18 15.4032V14.6074C18 14.2778 17.7314 14.0106 17.4 14.0106H9.80001C9.46863 14.0106 9.20001 14.2778 9.20001 14.6074V15.4032C9.20001 15.7328 9.46863 16 9.80001 16H17.4C17.7314 16 18 15.7328 18 15.4032Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "16", "viewBox", "0 0 18 16", "fill", "none", 1, "svg-icon"], ["d", "M16.3125 0H1.6875C0.755859 0 0 0.767857 0 1.71429V14.2857C0 15.2321 0.755859 16 1.6875 16H16.3125C17.2441 16 18 15.2321 18 14.2857V1.71429C18 0.767857 17.2441 0 16.3125 0ZM15.75 5.71429H2.25V2.71429C2.25 2.47857 2.43984 2.28571 2.67188 2.28571H15.3281C15.5602 2.28571 15.75 2.47857 15.75 2.71429V5.71429Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none", 1, "svg-icon"], ["d", "M11.0812 0.00012169H1.51875C0.679957 0.00012169 0 0.671684 0 1.50012V12.5001C0 13.3286 0.679957 14.0001 1.51875 14.0001H11.0812C11.92 14.0001 12.6 13.3286 12.6 12.5001V1.50012C12.6 0.671684 11.92 0.00012169 11.0812 0.00012169ZM5.2875 12.0001H2.025V4.00012H5.2875V12.0001ZM10.575 12.0001H7.3125V4.00012H10.575V12.0001Z", "fill", "black"], ["d", "M16.3687 0H6.80625C5.96746 0 5.2875 0.671563 5.2875 1.5V12.5C5.2875 13.3284 5.96746 14 6.80625 14H16.3687C17.2075 14 17.8875 13.3284 17.8875 12.5V1.5C17.8875 0.671563 17.2075 0 16.3687 0ZM10.575 12.0001H7.3125V4.00012H10.575V12.0001ZM15.8625 12H12.6V4H15.8625V12Z", "fill", "black"], ["d", "M11.6071 17.8527L6.14286 16.338V8.74344H7.51429C7.61429 8.74344 7.71429 8.7541 7.81429 8.77541C7.91429 8.79673 8.01429 8.82114 8.11429 8.84863L14.05 11.0155C14.25 11.0856 14.4109 11.2119 14.5326 11.3942C14.6543 11.5765 14.7149 11.7658 14.7143 11.9622C14.7143 12.2567 14.6106 12.4951 14.4031 12.6775C14.1957 12.8598 13.9566 12.951 13.6857 12.951H11.4357C11.3643 12.951 11.3109 12.9476 11.2754 12.9409C11.24 12.9341 11.1934 12.9165 11.1357 12.8879L10.1714 12.5302C10.0571 12.4881 9.94286 12.4951 9.82857 12.5512C9.71429 12.6074 9.64286 12.6845 9.61429 12.7827C9.58571 12.8949 9.59286 13.0001 9.63571 13.0982C9.67857 13.1964 9.75714 13.2665 9.87143 13.3086L11.1357 13.7504C11.1643 13.7644 11.2071 13.7751 11.2643 13.7824C11.3214 13.7897 11.3714 13.793 11.4143 13.7925H17.2857C17.7429 13.7925 18.1429 13.9538 18.4857 14.2763C18.8286 14.5989 19 14.9986 19 15.4755L12.6786 17.8107C12.5357 17.8668 12.3609 17.8985 12.154 17.9058C11.9471 17.913 11.7649 17.8954 11.6071 17.8527ZM1 16.317V10.4264C1 9.96362 1.168 9.56755 1.504 9.23824C1.84 8.90893 2.24343 8.744 2.71429 8.74344C3.18514 8.74288 3.58886 8.90781 3.92543 9.23824C4.262 9.56867 4.42971 9.96474 4.42857 10.4264V16.317C4.42857 16.7798 4.26086 17.1762 3.92543 17.506C3.59 17.8359 3.18629 18.0006 2.71429 18C2.24229 17.9994 1.83886 17.8348 1.504 17.506C1.16914 17.1773 1.00114 16.7809 1 16.317ZM11.2214 6.40826L15.4857 2.24281C15.6429 2.08853 15.8394 2.00775 16.0754 2.00045C16.3114 1.99316 16.5149 2.07394 16.6857 2.24281C16.8429 2.39708 16.9214 2.59343 16.9214 2.83186C16.9214 3.07029 16.8429 3.26664 16.6857 3.42091L11.8214 8.19646C11.65 8.36476 11.45 8.44891 11.2214 8.44891C10.9929 8.44891 10.7929 8.36476 10.6214 8.19646L8.17857 5.79817C8.00714 5.62987 7.92486 5.43352 7.93171 5.20911C7.93857 4.98471 8.028 4.78836 8.2 4.62006C8.37143 4.46578 8.57143 4.385 8.8 4.37771C9.02857 4.37041 9.22857 4.4512 9.4 4.62006L11.2214 6.40826Z", "fill", "black"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "20", "viewBox", "0 0 18 20", "fill", "none", 1, "svg-icon"], ["d", "M1.71429 18.125C1.71429 18.6223 1.90619 19.0992 2.24777 19.4508C2.58935 19.8025 3.05264 20 3.53571 20H14.4643C14.9474 20 15.4106 19.8025 15.7522 19.4508C16.0938 19.0992 16.2857 18.6223 16.2857 18.125V5H1.71429V18.125ZM12.0357 8.125C12.0357 7.95924 12.0997 7.80027 12.2135 7.68306C12.3274 7.56585 12.4818 7.5 12.6429 7.5C12.8039 7.5 12.9583 7.56585 13.0722 7.68306C13.186 7.80027 13.25 7.95924 13.25 8.125V16.875C13.25 17.0408 13.186 17.1997 13.0722 17.3169C12.9583 17.4342 12.8039 17.5 12.6429 17.5C12.4818 17.5 12.3274 17.4342 12.2135 17.3169C12.0997 17.1997 12.0357 17.0408 12.0357 16.875V8.125ZM8.39286 8.125C8.39286 7.95924 8.45682 7.80027 8.57069 7.68306C8.68455 7.56585 8.83898 7.5 9 7.5C9.16103 7.5 9.31545 7.56585 9.42932 7.68306C9.54318 7.80027 9.60714 7.95924 9.60714 8.125V16.875C9.60714 17.0408 9.54318 17.1997 9.42932 17.3169C9.31545 17.4342 9.16103 17.5 9 17.5C8.83898 17.5 8.68455 17.4342 8.57069 17.3169C8.45682 17.1997 8.39286 17.0408 8.39286 16.875V8.125ZM4.75 8.125C4.75 7.95924 4.81397 7.80027 4.92783 7.68306C5.04169 7.56585 5.19612 7.5 5.35714 7.5C5.51817 7.5 5.6726 7.56585 5.78646 7.68306C5.90032 7.80027 5.96429 7.95924 5.96429 8.125V16.875C5.96429 17.0408 5.90032 17.1997 5.78646 17.3169C5.6726 17.4342 5.51817 17.5 5.35714 17.5C5.19612 17.5 5.04169 17.4342 4.92783 17.3169C4.81397 17.1997 4.75 17.0408 4.75 16.875V8.125ZM16.8929 1.25001H12.3393L11.9826 0.519538C11.907 0.363372 11.7906 0.232008 11.6465 0.140225C11.5024 0.0484421 11.3362 -0.00011828 11.1667 6.84872e-06H6.82946C6.66037 -0.000662313 6.49451 0.047717 6.35089 0.139602C6.20726 0.231487 6.09169 0.363161 6.01741 0.519538L5.66071 1.25001H1.10714C0.946119 1.25001 0.791689 1.31585 0.677828 1.43306C0.563967 1.55027 0.5 1.70925 0.5 1.87501L0.5 3.12501C0.5 3.29077 0.563967 3.44974 0.677828 3.56695C0.791689 3.68416 0.946119 3.75001 1.10714 3.75001H16.8929C17.0539 3.75001 17.2083 3.68416 17.3222 3.56695C17.436 3.44974 17.5 3.29077 17.5 3.12501V1.87501C17.5 1.70925 17.436 1.55027 17.3222 1.43306C17.2083 1.31585 17.0539 1.25001 16.8929 1.25001Z", "fill", "#EB583B"], [2, "color", "#EB583B"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "form-group"], [1, "custom-file"], ["type", "file", "id", "fileupload", "accept", ".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/json", 1, "form-control", 3, "change"], [1, "input-group"], ["style", "color: #dc3545;", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "color", "white", 3, "click", "disabled"], [2, "color", "#dc3545"], [1, "accordion"], ["type", "file", "id", "fileupload", "accept", "application/json", 1, "form-control", 3, "change"], ["for", "fileupload", 1, "custom-file-label"]], template: function BmGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(4, "div")(5, "div", 6);
        \u0275\u0275elementStart(6, "div", 7)(7, "form", 8)(8, "div", 9)(9, "select", 10);
        \u0275\u0275listener("change", function BmGridComponent_Template_select_change_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ChangeStatus($event));
        });
        \u0275\u0275elementStart(10, "option", 11);
        \u0275\u0275text(11, "Change Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "option", 12);
        \u0275\u0275text(13, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "option", 13);
        \u0275\u0275text(15, "Inactive");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
        \u0275\u0275listener("click", function BmGridComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          const bulkUpload_r2 = \u0275\u0275reference(55);
          return \u0275\u0275resetView(ctx.openBulkUpload(bulkUpload_r2));
        });
        \u0275\u0275element(18, "i", 16);
        \u0275\u0275text(19, "BM Upload Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function BmGridComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openExportGridConfigurationPopup("GridConfiguration", "View1", "Excel"));
        });
        \u0275\u0275element(21, "i", 18);
        \u0275\u0275text(22, "Excel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 19);
        \u0275\u0275template(24, BmGridComponent_button_24_Template, 3, 0, "button", 20);
        \u0275\u0275elementStart(25, "button", 21);
        \u0275\u0275listener("click", function BmGridComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.CardWallTemplateConfig(""));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 22);
        \u0275\u0275element(27, "rect", 23)(28, "rect", 24)(29, "line", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "button", 26);
        \u0275\u0275listener("click", function BmGridComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openExportGridConfigurationPopup("GridConfiguration", "View1", "Excel"));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 27);
        \u0275\u0275element(32, "path", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "button", 29);
        \u0275\u0275listener("click", function BmGridComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          const jsonModalTemplate_r5 = \u0275\u0275reference(57);
          ctx.openJsonImportModal(jsonModalTemplate_r5);
          return \u0275\u0275resetView(ctx.closeActionsPopup());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(34, "svg", 30);
        \u0275\u0275element(35, "path", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "button", 32);
        \u0275\u0275listener("click", function BmGridComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          ctx.goToVersionGrid();
          return \u0275\u0275resetView(ctx.closeActionsPopup());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 33)(38, "g", 34);
        \u0275\u0275element(39, "path", 35)(40, "path", 36)(41, "path", 37)(42, "path", 38)(43, "path", 39)(44, "path", 40)(45, "path", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "defs")(47, "clipPath", 42);
        \u0275\u0275element(48, "rect", 43);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(49, BmGridComponent_div_49_Template, 66, 5, "div", 44);
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(50, "div", 6);
        \u0275\u0275elementStart(51, "div", 45)(52, "generic-grid", 46, 0);
        \u0275\u0275listener("pageChange", function BmGridComponent_Template_generic_grid_pageChange_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChange($event));
        })("rowClick", function BmGridComponent_Template_generic_grid_rowClick_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.OnRowClick($event));
        })("actionClick", function BmGridComponent_Template_generic_grid_actionClick_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.actionClick($event));
        })("actionsMenuOpen", function BmGridComponent_Template_generic_grid_actionsMenuOpen_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onActionsMenuOpen($event));
        })("actionsMenuOpen", function BmGridComponent_Template_generic_grid_actionsMenuOpen_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openActionsPopupAt($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(54, BmGridComponent_ng_template_54_Template, 20, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(56, BmGridComponent_ng_template_56_Template, 20, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.DisplayName);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.BMForm);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", !ctx.isLoading && (!(ctx.dataSource == null ? null : ctx.dataSource.length) && (!(ctx.bodyData == null ? null : ctx.bodyData.GridFilters) || ctx.bodyData.GridFilters.length === 0)));
        \u0275\u0275advance(25);
        \u0275\u0275property("ngIf", ctx.showActionsPopup);
        \u0275\u0275advance(3);
        \u0275\u0275property("dataSource", ctx.dataSource)("headerMap", ctx.HeaderMap)("itemsCount", ctx.itemsCount)("sNo", false)("pageNum", ctx.pageNum);
      }
    }, dependencies: [NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, GenericGridComponent, FormsModule, NgForm], styles: ['\n\n.table-filters-group[_ngcontent-%COMP%]   .BMForm-Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.table-filters-group[_ngcontent-%COMP%]   .BMForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.table-filters-group[_ngcontent-%COMP%]   .BMForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n}\n.table-filters-group[_ngcontent-%COMP%]   .BMForm-Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.table-filters-group[_ngcontent-%COMP%]   .BMForm-Actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  background: #333 !important;\n  color: #fff !important;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]   .grid-pad[_ngcontent-%COMP%]   col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n.tableWrap[_ngcontent-%COMP%] {\n  overflow: visible;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0px;\n}\n.ColResize[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ColResize[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 5px;\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n  height: 100%;\n}\n.open-popup-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 25px;\n  min-width: fit-content;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 767.99px) {\n  .open-popup-btn[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 8px;\n  }\n}\n.config-icon[_ngcontent-%COMP%] {\n  line-height: 0;\n  padding: 7px;\n  color: #4d4d51;\n  font-size: 20px;\n  cursor: pointer;\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tags-list-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 12px;\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border-radius: 20px;\n  padding: 2px 5px 2px 10px;\n  margin: 3px;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #d0021b;\n  color: #fff;\n  border-radius: 50%;\n  margin-left: 5px;\n  font-size: 11px;\n  padding: 2px;\n  width: 20px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.resetFilter[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #eee;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n  margin: 5px;\n  text-align: center;\n  padding: 4px 10px 2px;\n  width: auto;\n  color: black;\n  border-bottom: 3px solid black;\n  text-decoration: none;\n  font-weight: bold;\n  letter-spacing: 0.43px;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #4c9d01;\n  color: #4c9d01;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: none !important;\n}\n.table-filters-group[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n  border-top: 1px solid #cbcbcb;\n  border-bottom: 1px solid #cbcbcb;\n  gap: 15px;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .table-filters-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.export-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  flex: 1;\n  margin-right: 5px;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  gap: 5px;\n  font-size: 10px;\n  text-decoration: none;\n  color: #5a5a5a;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%] {\n  float: right;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f2f2f2;\n  border: 1px solid #cbcbcb;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  outline: none;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn.calendar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n.basicTable[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 126, 72, 0.1) !important;\n}\n.color-code[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: 0 2px 3px 0;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 30px;\n}\n.sListing2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-top: solid 1px #c3c3c3;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n@media (min-width: 992px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 1000px !important;\n  }\n}\n.checkboxMargin[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.drag-grip[_ngcontent-%COMP%] {\n  padding-right: 4px;\n  padding-top: 2px;\n  color: #ccc;\n  font-size: 12px;\n  cursor: move;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.btn-primary-special[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image:\n    linear-gradient(\n      to bottom,\n      #fff 0%,\n      #fff 100%);\n  border: 1px solid #ccc;\n  color: #333 !important;\n  border-radius: 5px;\n}\n.btn-small[_ngcontent-%COMP%] {\n  height: 26px;\n  padding: 0px 5px 0px 5px;\n  font-size: 1rem;\n}\n.btnFltr[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  color: #fff;\n  background-color: #a6a6a6;\n  padding: 5px 10px;\n  margin: 0px 0px 10px 10px;\n  text-decoration: none !important;\n}\n.display-name[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 6px 10px;\n  width: 469.906px;\n  height: 36px;\n  background-color: #fff;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #666;\n  margin-right: 8px;\n  font-size: 14px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  background: transparent;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #007bff;\n  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);\n}\n.file-info-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #4D4D51;\n}\n.file-info-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-right: 4px;\n}\n.file-info-container[_ngcontent-%COMP%]   .formats[_ngcontent-%COMP%] {\n  color: #EB583B;\n  font-weight: 500;\n}\n.file-info-container[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.file-info-container[_ngcontent-%COMP%]   .max-size[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 12px;\n}\n.BMForm-Actions[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 20%;\n  overflow: auto;\n}\n.actions-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1050;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: max-content;\n  max-width: max-content;\n  overflow: auto;\n  height: 300px;\n  backdrop-filter: blur(10px);\n}\n.actions-popup[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -8px;\n  left: 20px;\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid white;\n  z-index: 1;\n}\n.actions-popup[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -9px;\n  left: 20px;\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid #ddd;\n  z-index: 0;\n}\n.actions-popup.arrow-right[_ngcontent-%COMP%]::before {\n  left: auto;\n  right: 20px;\n}\n.actions-popup.arrow-right[_ngcontent-%COMP%]::after {\n  left: auto;\n  right: 20px;\n}\n.actions-popup.arrow-left-top[_ngcontent-%COMP%]::before {\n  top: auto;\n  bottom: -8px;\n  border-bottom: none;\n  border-top: 8px solid white;\n}\n.actions-popup.arrow-left-top[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: -9px;\n  border-bottom: none;\n  border-top: 8px solid #ddd;\n}\n.actions-popup.arrow-right-top[_ngcontent-%COMP%]::before {\n  top: auto;\n  bottom: -8px;\n  left: auto;\n  right: 20px;\n  border-bottom: none;\n  border-top: 8px solid white;\n}\n.actions-popup.arrow-right-top[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: -9px;\n  left: auto;\n  right: 20px;\n  border-bottom: none;\n  border-top: 8px solid #ddd;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  background: #f8f9fa;\n  border-radius: 8px 8px 0 0;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #666;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .popup-strip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 40px;\n  top: 100%;\n  height: 34px;\n  background: #0d6efd;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  gap: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .strip-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  font-size: 12px;\n  padding: 4px 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.actions-popup[_ngcontent-%COMP%]   .linklike[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin-right: 12px;\n  color: #0d6efd;\n  cursor: pointer;\n}\n.actions-popup[_ngcontent-%COMP%]   .actions-popup[_ngcontent-%COMP%] {\n  padding-top: 36px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  padding: 8px 16px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #828282;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #333;\n  border-radius: 4px;\n  margin: 0 8px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(2px);\n  color: #EB583B;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  margin-right: 12px;\n  font-size: 12px;\n  color: #666;\n  transition: color 0.2s ease;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  margin-left: 10px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 12px;\n  background: white;\n  transition: all 0.2s ease;\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-control[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n}\n.actions-popup[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popupFadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_popupFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.btn-outline-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.popup-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #EB583B;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.accordion[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 460px;\n  border-top: 1px solid #BDBDBD;\n  margin: 20px;\n}\n@media (max-width: 768px) {\n  .actions-popup[_ngcontent-%COMP%] {\n    min-width: 250px;\n    max-width: 280px;\n    overflow: auto;\n  }\n  .actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n  }\n  .actions-popup[_ngcontent-%COMP%]   .popup-section[_ngcontent-%COMP%]   .popup-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.Strip[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 5px 5px 0 0;\n  background: #005996;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  margin: 8px 0;\n}\n.icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  background: none;\n  border: none;\n}\n/*# sourceMappingURL=bm-grid.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BmGridComponent, { className: "BmGridComponent", filePath: "src\\app\\admin\\BM\\components\\bm-grid\\bm-grid.component.ts", lineNumber: 39 });
})();

// src/app/admin/BM/resolvers/bm.resolver.ts
var BMResolver = class _BMResolver {
  constructor(bpService, router) {
    this.bpService = bpService;
    this.router = router;
  }
  resolve(route) {
    const params = Object.entries(route.queryParams).reduce((acc, [k, v]) => {
      acc[k.toLowerCase()] = v;
      return acc;
    }, {});
    const id = params.bmid;
    if (id) {
      return this.bpService.GetBusinessModel(id).pipe(retry(3), catchError((e) => {
        this.goBack();
        return throwError(() => new Error(e));
      }));
    }
    this.goBack();
    return of(null);
  }
  goBack() {
    this.router.navigate([".."]);
  }
  static {
    this.\u0275fac = function BMResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BMResolver)(\u0275\u0275inject(BmService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BMResolver, factory: _BMResolver.\u0275fac });
  }
};

// src/app/admin/BM/bm-routing.module.ts
var routes = [
  { path: "", component: BmGridComponent },
  {
    path: "data-modeler",
    // component: DataModelerComponent,
    loadChildren: () => import("./chunk-RLQITBFO.js").then((m) => m.DataModelerModule),
    resolve: { bm: BMResolver }
  },
  {
    path: "data-modeler1",
    loadChildren: () => import("./chunk-NQAMO545.js").then((m) => m.DataModeler1Module),
    resolve: { bm: BMResolver }
  }
  // {
  //   path: 'bm',
  //   loadChildren: () => import('./bm-routing.module').then((m) => m.BmRoutingModule),
  // }
];
var BmRoutingModule = class _BmRoutingModule {
  static {
    this.\u0275fac = function BmRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BmRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [BMResolver], imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/BM/bm.module.ts
var BmModule = class _BmModule {
  static {
    this.\u0275fac = function BmModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BmModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      BmRoutingModule,
      SharedModule,
      BmGridComponent,
      BmEntryComponent,
      BmWfAssociationComponent,
      TopCornerDetailComponent
    ] });
  }
};
export {
  BmModule
};
//# sourceMappingURL=chunk-CKADC4DM.js.map
