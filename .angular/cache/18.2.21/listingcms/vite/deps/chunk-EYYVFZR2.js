import {
  has,
  isObject
} from "./chunk-26FIRWZU.js";

// node_modules/diagram-js/lib/util/ModelUtil.js
function isConnection(value) {
  return isObject(value) && has(value, "waypoints");
}
function isLabel(value) {
  return isObject(value) && has(value, "labelTarget");
}

export {
  isConnection,
  isLabel
};
//# sourceMappingURL=chunk-EYYVFZR2.js.map
