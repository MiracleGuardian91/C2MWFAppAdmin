import {
  createTransform,
  transform
} from "./chunk-VKE2OUF7.js";

// node_modules/diagram-js/lib/util/SvgTransformUtil.js
function transform2(gfx, x, y, angle, amount) {
  var translate2 = createTransform();
  translate2.setTranslate(x, y);
  var rotate2 = createTransform();
  rotate2.setRotate(angle || 0, 0, 0);
  var scale2 = createTransform();
  scale2.setScale(amount || 1, amount || 1);
  transform(gfx, [translate2, rotate2, scale2]);
}
function translate(gfx, x, y) {
  var translate2 = createTransform();
  translate2.setTranslate(x, y);
  transform(gfx, translate2);
}
function rotate(gfx, angle) {
  var rotate2 = createTransform();
  rotate2.setRotate(angle, 0, 0);
  transform(gfx, rotate2);
}
function scale(gfx, amount) {
  var scale2 = createTransform();
  scale2.setScale(amount, amount);
  transform(gfx, scale2);
}

export {
  transform2 as transform,
  translate,
  rotate,
  scale
};
//# sourceMappingURL=chunk-CE5VFLYH.js.map
