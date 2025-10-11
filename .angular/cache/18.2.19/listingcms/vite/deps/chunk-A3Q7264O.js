import {
  assign,
  filter,
  find,
  forEach,
  groupBy,
  isArray,
  isNumber,
  isObject,
  isUndefined
} from "./chunk-26FIRWZU.js";

// node_modules/diagram-js/lib/util/Elements.js
function getParents(elements) {
  return filter(elements, function(element) {
    return !find(elements, function(e) {
      return e !== element && getParent(element, e);
    });
  });
}
function getParent(element, parent) {
  if (!parent) {
    return;
  }
  if (element === parent) {
    return parent;
  }
  if (!element.parent) {
    return;
  }
  return getParent(element.parent, parent);
}
function add(elements, element, unique) {
  var canAdd = !unique || elements.indexOf(element) === -1;
  if (canAdd) {
    elements.push(element);
  }
  return canAdd;
}
function eachElement(elements, fn, depth) {
  depth = depth || 0;
  if (!isArray(elements)) {
    elements = [elements];
  }
  forEach(elements, function(s, i) {
    var filter2 = fn(s, i, depth);
    if (isArray(filter2) && filter2.length) {
      eachElement(filter2, fn, depth + 1);
    }
  });
}
function selfAndChildren(elements, unique, maxDepth) {
  var result = [], processedChildren = [];
  eachElement(elements, function(element, i, depth) {
    add(result, element, unique);
    var children = element.children;
    if (maxDepth === -1 || depth < maxDepth) {
      if (children && add(processedChildren, children, unique)) {
        return children;
      }
    }
  });
  return result;
}
function selfAndDirectChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, 1);
}
function selfAndAllChildren(elements, allowDuplicates) {
  return selfAndChildren(elements, !allowDuplicates, -1);
}
function getClosure(elements, isTopLevel, closure) {
  if (isUndefined(isTopLevel)) {
    isTopLevel = true;
  }
  if (isObject(isTopLevel)) {
    closure = isTopLevel;
    isTopLevel = true;
  }
  closure = closure || {};
  var allShapes = copyObject(closure.allShapes), allConnections = copyObject(closure.allConnections), enclosedElements = copyObject(closure.enclosedElements), enclosedConnections = copyObject(closure.enclosedConnections);
  var topLevel = copyObject(closure.topLevel, isTopLevel && groupBy(elements, function(e) {
    return e.id;
  }));
  function handleConnection(c) {
    if (topLevel[c.source.id] && topLevel[c.target.id]) {
      topLevel[c.id] = [c];
    }
    if (allShapes[c.source.id] && allShapes[c.target.id]) {
      enclosedConnections[c.id] = enclosedElements[c.id] = c;
    }
    allConnections[c.id] = c;
  }
  function handleElement(element) {
    enclosedElements[element.id] = element;
    if (element.waypoints) {
      enclosedConnections[element.id] = allConnections[element.id] = element;
    } else {
      allShapes[element.id] = element;
      forEach(element.incoming, handleConnection);
      forEach(element.outgoing, handleConnection);
      return element.children;
    }
  }
  eachElement(elements, handleElement);
  return {
    allShapes,
    allConnections,
    topLevel,
    enclosedConnections,
    enclosedElements
  };
}
function getBBox(elements, stopRecursion) {
  stopRecursion = !!stopRecursion;
  if (!isArray(elements)) {
    elements = [elements];
  }
  var minX, minY, maxX, maxY;
  forEach(elements, function(element) {
    var bbox = element;
    if (element.waypoints && !stopRecursion) {
      bbox = getBBox(element.waypoints, true);
    }
    var x = bbox.x, y = bbox.y, height = bbox.height || 0, width = bbox.width || 0;
    if (x < minX || minX === void 0) {
      minX = x;
    }
    if (y < minY || minY === void 0) {
      minY = y;
    }
    if (x + width > maxX || maxX === void 0) {
      maxX = x + width;
    }
    if (y + height > maxY || maxY === void 0) {
      maxY = y + height;
    }
  });
  return {
    x: minX,
    y: minY,
    height: maxY - minY,
    width: maxX - minX
  };
}
function getEnclosedElements(elements, bbox) {
  var filteredElements = {};
  forEach(elements, function(element) {
    var e = element;
    if (e.waypoints) {
      e = getBBox(e);
    }
    if (!isNumber(bbox.y) && e.x > bbox.x) {
      filteredElements[element.id] = element;
    }
    if (!isNumber(bbox.x) && e.y > bbox.y) {
      filteredElements[element.id] = element;
    }
    if (e.x > bbox.x && e.y > bbox.y) {
      if (isNumber(bbox.width) && isNumber(bbox.height) && e.width + e.x < bbox.width + bbox.x && e.height + e.y < bbox.height + bbox.y) {
        filteredElements[element.id] = element;
      } else if (!isNumber(bbox.width) || !isNumber(bbox.height)) {
        filteredElements[element.id] = element;
      }
    }
  });
  return filteredElements;
}
function getType(element) {
  if ("waypoints" in element) {
    return "connection";
  }
  if ("x" in element) {
    return "shape";
  }
  return "root";
}
function isFrameElement(element) {
  return !!(element && element.isFrame);
}
function copyObject(src1, src2) {
  return assign({}, src1 || {}, src2 || {});
}

export {
  getParents,
  add,
  eachElement,
  selfAndChildren,
  selfAndDirectChildren,
  selfAndAllChildren,
  getClosure,
  getBBox,
  getEnclosedElements,
  getType,
  isFrameElement
};
//# sourceMappingURL=chunk-A3Q7264O.js.map
