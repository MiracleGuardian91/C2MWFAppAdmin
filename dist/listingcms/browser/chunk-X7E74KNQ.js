import {
  ObjectControlModule
} from "./chunk-XJNJIFSZ.js";
import {
  WfConditionDetailComponent,
  WfconditionsComponent
} from "./chunk-RF35KVRW.js";
import "./chunk-FKDZX6HV.js";
import "./chunk-74OCJGBF.js";
import "./chunk-BQKXR4UC.js";
import {
  SharedModule
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import "./chunk-43FCU5DY.js";
import "./chunk-U3QHRRQH.js";
import "./chunk-WGZX6A37.js";
import "./chunk-L2L6ECIJ.js";
import {
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-ZQT4GMOS.js";
import "./chunk-N6ESDQJH.js";

// src/app/admin/wf/components/wfconditions/wfconditions-routing.module.ts
var routes = [{ path: "", component: WfconditionsComponent }];
var WfConditionsRoutingModule = class _WfConditionsRoutingModule {
  static {
    this.\u0275fac = function WfConditionsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfConditionsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WfConditionsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/wf/components/wfconditions/wfconditions.module.ts
var WfConditionsModule = class _WfConditionsModule {
  static {
    this.\u0275fac = function WfConditionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfConditionsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WfConditionsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      WfConditionsRoutingModule,
      SharedModule,
      ObjectControlModule,
      WfConditionDetailComponent
    ] });
  }
};
export {
  WfConditionsModule
};
//# sourceMappingURL=chunk-X7E74KNQ.js.map
