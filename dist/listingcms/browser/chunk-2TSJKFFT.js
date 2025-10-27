import {
  CommonModule,
  Router,
  RouterModule,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-ZQT4GMOS.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/gateway/gateway.resolver.ts
var GatewayResolver = class _GatewayResolver {
  constructor(router) {
    this.router = router;
  }
  resolve(route) {
    const appName = sessionStorage.getItem("AppName") || route.queryParamMap.get("AppName");
    appName && this.router.navigate(["/process_control", appName]);
  }
  static {
    this.\u0275fac = function GatewayResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GatewayResolver)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GatewayResolver, factory: _GatewayResolver.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/gateway/gateway-routing.module.ts
var routes = [{ path: "", resolve: { res: GatewayResolver } }];
var GatewayRoutingModule = class _GatewayRoutingModule {
  static {
    this.\u0275fac = function GatewayRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GatewayRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GatewayRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/gateway/gateway.module.ts
var GatewayModule = class _GatewayModule {
  static {
    this.\u0275fac = function GatewayModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GatewayModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GatewayModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      GatewayRoutingModule
    ] });
  }
};
export {
  GatewayModule
};
//# sourceMappingURL=chunk-2TSJKFFT.js.map
