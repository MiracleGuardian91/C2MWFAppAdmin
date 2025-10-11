import {
  componentsToPath
} from "./chunk-A6UD6CXI.js";
import {
  getDi
} from "./chunk-6CMT5M6M.js";
import {
  has,
  some
} from "./chunk-26FIRWZU.js";

// node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js
var black = "hsl(225, 10%, 15%)";
var white = "white";
function isTypedEvent(event, eventDefinitionType) {
  return some(event.eventDefinitions, function(definition) {
    return definition.$type === eventDefinitionType;
  });
}
function isThrowEvent(event) {
  return event.$type === "bpmn:IntermediateThrowEvent" || event.$type === "bpmn:EndEvent";
}
function isCollection(element) {
  var dataObject = element.dataObjectRef;
  return element.isCollection || dataObject && dataObject.isCollection;
}
function getFillColor(element, defaultColor, overrideColor) {
  var di = getDi(element);
  return overrideColor || di.get("color:background-color") || di.get("bioc:fill") || defaultColor || white;
}
function getStrokeColor(element, defaultColor, overrideColor) {
  var di = getDi(element);
  return overrideColor || di.get("color:border-color") || di.get("bioc:stroke") || defaultColor || black;
}
function getLabelColor(element, defaultColor, defaultStrokeColor, overrideColor) {
  var di = getDi(element), label = di.get("label");
  return overrideColor || label && label.get("color:color") || defaultColor || getStrokeColor(element, defaultStrokeColor);
}
function getCirclePath(shape) {
  var cx = shape.x + shape.width / 2, cy = shape.y + shape.height / 2, radius = shape.width / 2;
  var circlePath = [["M", cx, cy], ["m", 0, -radius], ["a", radius, radius, 0, 1, 1, 0, 2 * radius], ["a", radius, radius, 0, 1, 1, 0, -2 * radius], ["z"]];
  return componentsToPath(circlePath);
}
function getRoundRectPath(shape, borderRadius) {
  var x = shape.x, y = shape.y, width = shape.width, height = shape.height;
  var roundRectPath = [["M", x + borderRadius, y], ["l", width - borderRadius * 2, 0], ["a", borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius], ["l", 0, height - borderRadius * 2], ["a", borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius], ["l", borderRadius * 2 - width, 0], ["a", borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius], ["l", 0, borderRadius * 2 - height], ["a", borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius], ["z"]];
  return componentsToPath(roundRectPath);
}
function getDiamondPath(shape) {
  var width = shape.width, height = shape.height, x = shape.x, y = shape.y, halfWidth = width / 2, halfHeight = height / 2;
  var diamondPath = [["M", x + halfWidth, y], ["l", halfWidth, halfHeight], ["l", -halfWidth, halfHeight], ["l", -halfWidth, -halfHeight], ["z"]];
  return componentsToPath(diamondPath);
}
function getRectPath(shape) {
  var x = shape.x, y = shape.y, width = shape.width, height = shape.height;
  var rectPath = [["M", x, y], ["l", width, 0], ["l", 0, height], ["l", -width, 0], ["z"]];
  return componentsToPath(rectPath);
}
function getBounds(bounds, overrides = {}) {
  return {
    width: getWidth(bounds, overrides),
    height: getHeight(bounds, overrides)
  };
}
function getWidth(bounds, overrides = {}) {
  return has(overrides, "width") ? overrides.width : bounds.width;
}
function getHeight(bounds, overrides = {}) {
  return has(overrides, "height") ? overrides.height : bounds.height;
}

export {
  black,
  white,
  isTypedEvent,
  isThrowEvent,
  isCollection,
  getFillColor,
  getStrokeColor,
  getLabelColor,
  getCirclePath,
  getRoundRectPath,
  getDiamondPath,
  getRectPath,
  getBounds,
  getWidth,
  getHeight
};
//# sourceMappingURL=chunk-P3QVEKKQ.js.map
