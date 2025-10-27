import {
  LiveVersionComponent
} from "./chunk-ILK2XUKT.js";
import {
  AuthGuard
} from "./chunk-43FCU5DY.js";
import "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import {
  FormsModule,
  NgSelectModule,
  ReactiveFormsModule
} from "./chunk-L2L6ECIJ.js";
import {
  CommonModule,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-ZQT4GMOS.js";
import "./chunk-N6ESDQJH.js";

// src/app/admin/admin.component.ts
var _c0 = () => ["wf"];
var AdminComponent = class _AdminComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[1, "link", 3, "routerLink"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1, "WF");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\admin\\admin.component.ts", lineNumber: 11 });
})();

// src/app/admin/admin-routing.module.ts
var routes = [
  { path: "", component: AdminComponent },
  {
    path: "wf",
    loadChildren: () => import("./chunk-5XYFIPU7.js").then((m) => m.WfModule)
  },
  {
    path: "wf-app-list",
    canActivate: [AuthGuard],
    loadChildren: () => import("./chunk-RC6NIL5Y.js").then((m) => m.WFAppListModule)
  },
  {
    path: "bm",
    loadChildren: () => import("./chunk-CKADC4DM.js").then((m) => m.BmModule)
  },
  {
    path: "ai-flow",
    loadChildren: () => import("./chunk-TADX7VJA.js").then((a) => a.routes)
  }
];
var AdminRoutingModule = class _AdminRoutingModule {
  static {
    this.\u0275fac = function AdminRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/admin.module.ts
var AdminModule = class _AdminModule {
  static {
    this.\u0275fac = function AdminModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AdminRoutingModule,
      NgSelectModule,
      FormsModule,
      ReactiveFormsModule,
      LiveVersionComponent
    ] });
  }
};
export {
  AdminModule
};
//# sourceMappingURL=chunk-FGPTXOXT.js.map
