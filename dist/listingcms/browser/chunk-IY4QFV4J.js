import {
  SharedModule
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import {
  ImageCropperModule
} from "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  AuthGuard
} from "./chunk-43FCU5DY.js";
import {
  ReactiveFormsModule
} from "./chunk-L2L6ECIJ.js";
import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-ZQT4GMOS.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/users/users-routing.module.ts
var routes = [
  {
    path: "",
    redirectTo: "grid",
    pathMatch: "full"
  },
  {
    path: "",
    canActivateChild: [AuthGuard],
    children: []
  }
];
var UsersRoutingModule = class _UsersRoutingModule {
  static {
    this.\u0275fac = function UsersRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/users/users.module.ts
var UsersModule = class _UsersModule {
  static {
    this.\u0275fac = function UsersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      SharedModule,
      UsersRoutingModule,
      ReactiveFormsModule,
      ImageCropperModule
    ] });
  }
};
export {
  UsersModule
};
//# sourceMappingURL=chunk-IY4QFV4J.js.map
