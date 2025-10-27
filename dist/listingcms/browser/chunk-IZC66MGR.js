import {
  Validators
} from "./chunk-L2L6ECIJ.js";

// src/lib/common/const/form.const.ts
var VALID_NAME_RE = /^[a-zA-Z0-9_]*$/;
var NAME_VALIDATORS = [
  Validators.required,
  Validators.pattern(VALID_NAME_RE),
  Validators.minLength(4),
  Validators.maxLength(25)
];

export {
  NAME_VALIDATORS
};
//# sourceMappingURL=chunk-IZC66MGR.js.map
