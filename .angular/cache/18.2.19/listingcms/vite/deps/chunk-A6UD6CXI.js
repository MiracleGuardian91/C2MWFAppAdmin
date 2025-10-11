import {
  attr,
  create
} from "./chunk-VKE2OUF7.js";
import {
  isNumber
} from "./chunk-26FIRWZU.js";

// node_modules/diagram-js/lib/util/RenderUtil.js
function componentsToPath(elements) {
  return elements.flat().join(",").replace(/,?([A-Za-z]),?/g, "$1");
}
function toSVGPoints(points) {
  var result = "";
  for (var i = 0, p; p = points[i]; i++) {
    result += p.x + "," + p.y + " ";
  }
  return result;
}
function move(point) {
  return ["M", point.x, point.y];
}
function lineTo(point) {
  return ["L", point.x, point.y];
}
function curveTo(p1, p2, p3) {
  return ["C", p1.x, p1.y, p2.x, p2.y, p3.x, p3.y];
}
function drawPath(waypoints, cornerRadius) {
  const pointCount = waypoints.length;
  const path = [move(waypoints[0])];
  for (let i = 1; i < pointCount; i++) {
    const pointBefore = waypoints[i - 1];
    const point = waypoints[i];
    const pointAfter = waypoints[i + 1];
    if (!pointAfter || !cornerRadius) {
      path.push(lineTo(point));
      continue;
    }
    const effectiveRadius = Math.min(cornerRadius, vectorLength(point.x - pointBefore.x, point.y - pointBefore.y), vectorLength(pointAfter.x - point.x, pointAfter.y - point.y));
    if (!effectiveRadius) {
      path.push(lineTo(point));
      continue;
    }
    const beforePoint = getPointAtLength(point, pointBefore, effectiveRadius);
    const beforePoint2 = getPointAtLength(point, pointBefore, effectiveRadius * 0.5);
    const afterPoint = getPointAtLength(point, pointAfter, effectiveRadius);
    const afterPoint2 = getPointAtLength(point, pointAfter, effectiveRadius * 0.5);
    path.push(lineTo(beforePoint));
    path.push(curveTo(beforePoint2, afterPoint2, afterPoint));
  }
  return path;
}
function getPointAtLength(start, end, length) {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const totalLength = vectorLength(deltaX, deltaY);
  const percent = length / totalLength;
  return {
    x: start.x + deltaX * percent,
    y: start.y + deltaY * percent
  };
}
function vectorLength(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
function createLine(points, attrs, radius) {
  if (isNumber(attrs)) {
    radius = attrs;
    attrs = null;
  }
  if (!attrs) {
    attrs = {};
  }
  const line = create("path", attrs);
  if (isNumber(radius)) {
    line.dataset.cornerRadius = String(radius);
  }
  return updateLine(line, points);
}
function updateLine(gfx, points) {
  const cornerRadius = parseInt(gfx.dataset.cornerRadius, 10) || 0;
  attr(gfx, {
    d: componentsToPath(drawPath(points, cornerRadius))
  });
  return gfx;
}

export {
  componentsToPath,
  toSVGPoints,
  createLine,
  updateLine
};
//# sourceMappingURL=chunk-A6UD6CXI.js.map
