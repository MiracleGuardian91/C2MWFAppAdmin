import {
  MatRadioModule,
  MatSlideToggleModule,
  ObjectControlComponent
} from "./chunk-FKDZX6HV.js";
import {
  QuillModule
} from "./chunk-BQKXR4UC.js";
import {
  SharedModule
} from "./chunk-B4CPBYGG.js";
import {
  ReactiveFormsModule
} from "./chunk-L2L6ECIJ.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-ZQT4GMOS.js";

// src/app/admin/lib/object-control/object-control.module.ts
var ObjectControlModule = class _ObjectControlModule {
  static {
    this.\u0275fac = function ObjectControlModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObjectControlModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ObjectControlModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      SharedModule,
      MatSlideToggleModule,
      ReactiveFormsModule,
      MatRadioModule,
      QuillModule.forRoot(),
      ObjectControlComponent
    ] });
  }
};

export {
  ObjectControlModule
};
//# sourceMappingURL=chunk-XJNJIFSZ.js.map
