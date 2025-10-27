import {
  SharedModule
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import {
  LiveVersionComponent
} from "./chunk-ILK2XUKT.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import "./chunk-43FCU5DY.js";
import {
  WFService
} from "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import {
  NgbModal,
  ToastrService
} from "./chunk-L2L6ECIJ.js";
import {
  AsyncPipe,
  NgForOf,
  Router,
  RouterModule,
  Title,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/admin/AppList/wf-app-list/wf-app-list.component.ts
function WfAppListComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 4);
    \u0275\u0275listener("click", function WfAppListComponent_tr_8_Template_a_click_2_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToBMGrid(item_r2));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 4);
    \u0275\u0275listener("click", function WfAppListComponent_tr_8_Template_a_click_5_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToWFGrid(item_r2));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.DisplayName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.DisplayName);
  }
}
var WfAppListComponent = class _WfAppListComponent {
  constructor(wfsrvc, toastr, modalService, title, router) {
    this.wfsrvc = wfsrvc;
    this.toastr = toastr;
    this.modalService = modalService;
    this.title = title;
    this.router = router;
  }
  ngOnInit() {
    this.list$ = this.wfsrvc.GetWFAppList();
    this.title.setTitle("Dashboard");
  }
  goToBMGrid(item) {
    this.updateSessionStorage(item);
    if (item.Name.toLowerCase() == "businessmodelcomparison") {
      this.navigateToCompare("BM");
    } else if (item.Name.toLowerCase() == "workflowcomparison") {
      this.navigateToCompare("WF");
    } else {
      window.open("/admin/bm", "_blank");
    }
  }
  navigateToCompare(type) {
    const typeMap = { BM: 1, WF: 2 };
    if (typeMap[type]) {
      const url = this.router.serializeUrl(this.router.createUrlTree(["/bmwfcompare/user-verification"], {
        queryParams: { type: typeMap[type] }
      }));
      window.open(url, "_blank");
    }
  }
  goToWFGrid(item) {
    this.updateSessionStorage(item);
    if (item.Name.toLowerCase() == "businessmodelcomparison") {
      this.navigateToCompare("BM");
    } else if (item.Name.toLowerCase() == "workflowcomparison") {
      this.navigateToCompare("WF");
    } else {
      window.open("/admin/wf", "_blank");
    }
  }
  goToVersionGrid(item) {
    this.updateSessionStorage(item);
    const modalRef = this.modalService.open(LiveVersionComponent, {
      backdrop: "static",
      size: "lg",
      keyboard: false
    });
    modalRef.result.then((result) => __async(this, null, function* () {
      if (result) {
        this.toastr.success("Data saved successfully.");
      }
    }), (reason) => {
    });
  }
  goToApplicationGrid(item) {
    this.OpenApp(item);
  }
  updateSessionStorage(item) {
    sessionStorage.setItem("AppName", item.Name);
    sessionStorage.setItem("DisplayName", item.DisplayName);
  }
  OpenApp(item) {
    const copy = __spreadValues({}, item);
    this.updateSessionStorage(copy);
    if (copy.Name === "BusinessModelComparison") {
      window.open("/bmwfcompare/user-verification?type=1", "_blank");
    } else if (copy.Name === "workflowcomparison") {
      window.open("/bmwfcompare/user-verification?type=2", "_blank");
    } else {
      window.open(`/process_control/${copy.Name}`, "_blank");
    }
  }
  static {
    this.\u0275fac = function WfAppListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfAppListComponent)(\u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfAppListComponent, selectors: [["app-wf-app-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[2, "height", "auto", "padding", "20px"], [1, "basicTable", "stripped", 2, "border-top", "0", "border-right", "0", "border-left", "0"], [1, "colHead"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click"]], template: function WfAppListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "th", 2);
        \u0275\u0275text(4, "List BM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "th", 2);
        \u0275\u0275text(6, "List WF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "tbody");
        \u0275\u0275template(8, WfAppListComponent_tr_8_Template, 7, 2, "tr", 3);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 1, ctx.list$));
      }
    }, dependencies: [NgForOf, AsyncPipe], styles: ['\n\n.not-active[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n  color: black;\n}\n.grid-filter-wrap[_ngcontent-%COMP%] {\n  float: right;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f2f2f2;\n  border: 1px solid #cbcbcb;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  outline: none;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn.calendar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.basicTable[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 126, 72, 0.1) !important;\n}\n.wf-inline-checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]:after {\n  top: 1px;\n}\n.moreDots[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  background: none !important;\n  border: none !important;\n  box-shadow: none !important;\n  font-family: "Font Awesome 5 Free";\n  font-weight: 900;\n  color: #000;\n  line-height: 10px !important;\n}\n.moreDots[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:after {\n  display: none !important;\n}\n.moreDots[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:before {\n  content: "\\f141" !important;\n}\n.moreDots[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0px 0px 0px 10px;\n  font-size: 12px;\n}\n.header[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center right;\n  cursor: pointer;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.action-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4D4D51;\n}\n.wf-inline-checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  top: 3px;\n}\n.export-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  height: 30px;\n  padding: 5px;\n  margin-left: 10px;\n  line-height: 28px;\n  text-decoration: none;\n  color: #4d4d51;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n  float: right;\n}\n.table-filters-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #f2f2f2;\n  border-top: 1px solid #cbcbcb;\n  border-bottom: 1px solid #cbcbcb;\n  padding: 0px 10px;\n}\n@media (max-width: 768px) {\n  .table-filters-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.table-filters-group[_ngcontent-%COMP%]   .add-new-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-size: 11px;\n  letter-spacing: 0.3px;\n  text-align: center;\n  height: 20px;\n  background-color: #226398;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  line-height: 14px;\n}\n.change-log-table[_ngcontent-%COMP%]   .nxt_prvWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px;\n  cursor: pointer;\n}\n.change-log-table[_ngcontent-%COMP%]   .nxt_prvWrap[_ngcontent-%COMP%]   a#previous[_ngcontent-%COMP%], \n.change-log-table[_ngcontent-%COMP%]   .nxt_prvWrap[_ngcontent-%COMP%]   a#next[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: black;\n}\n.nochange[_ngcontent-%COMP%] {\n  color: #eae5e5;\n  font-style: italic;\n}\n.table-row.success[_ngcontent-%COMP%] {\n  background: #88D600 !important;\n}\n.table-row.fail[_ngcontent-%COMP%] {\n  background: var(--danger) !important;\n}\n.column-td[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.wordwrap[_ngcontent-%COMP%] {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}\n.basicTable[_ngcontent-%COMP%] {\n  word-break: normal;\n}\n.texthover[_ngcontent-%COMP%] {\n  cursor: default;\n  text-decoration: none;\n}\n.textwithouthover[_ngcontent-%COMP%] {\n  cursor: default;\n  text-decoration: none;\n  font-weight: 300;\n  font-size: 12px;\n  color: #4D4D51;\n  letter-spacing: 0.36px;\n  line-height: 1.9;\n}\nth[_ngcontent-%COMP%]   .colHead[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0px 15px 0px 8px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 12px;\n}\n/*# sourceMappingURL=wf-app-list.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfAppListComponent, { className: "WfAppListComponent", filePath: "src\\app\\admin\\AppList\\wf-app-list\\wf-app-list.component.ts", lineNumber: 20 });
})();

// src/app/admin/AppList/wf-app-list/wf-app-list-routing.module.ts
var routes = [
  {
    path: "",
    component: WfAppListComponent
  }
];
var WFAppListRoutingModule = class _WFAppListRoutingModule {
  static {
    this.\u0275fac = function WFAppListRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WFAppListRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WFAppListRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/AppList/wf-app-list/wf-app-list.module.ts
var WFAppListModule = class _WFAppListModule {
  static {
    this.\u0275fac = function WFAppListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WFAppListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WFAppListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, WFAppListRoutingModule] });
  }
};
export {
  WFAppListModule
};
//# sourceMappingURL=chunk-RC6NIL5Y.js.map
