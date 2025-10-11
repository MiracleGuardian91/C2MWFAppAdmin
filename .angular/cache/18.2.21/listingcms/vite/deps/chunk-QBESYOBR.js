import {
  add,
  remove
} from "./chunk-UPPIJ347.js";

// node_modules/bpmn-js/lib/features/modeling/behavior/util/CategoryUtil.js
function createCategory(bpmnFactory) {
  return bpmnFactory.create("bpmn:Category");
}
function createCategoryValue(bpmnFactory) {
  return bpmnFactory.create("bpmn:CategoryValue");
}
function linkCategoryValue(categoryValue, category, definitions) {
  add(category.get("categoryValue"), categoryValue);
  categoryValue.$parent = category;
  add(definitions.get("rootElements"), category);
  category.$parent = definitions;
  return categoryValue;
}
function unlinkCategoryValue(categoryValue) {
  var category = categoryValue.$parent;
  if (category) {
    remove(category.get("categoryValue"), categoryValue);
    categoryValue.$parent = null;
  }
  return categoryValue;
}
function unlinkCategory(category) {
  var definitions = category.$parent;
  if (definitions) {
    remove(definitions.get("rootElements"), category);
    category.$parent = null;
  }
  return category;
}

export {
  createCategory,
  createCategoryValue,
  linkCategoryValue,
  unlinkCategoryValue,
  unlinkCategory
};
//# sourceMappingURL=chunk-QBESYOBR.js.map
