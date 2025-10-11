import {
  getBBox
} from "./chunk-A3Q7264O.js";
import {
  CommandInterceptor
} from "./chunk-JI54U5I4.js";
import {
  asBounds,
  asTRBL
} from "./chunk-4OHDVAG5.js";
import {
  e
} from "./chunk-4FMKAPTB.js";
import {
  assign,
  find,
  flatten,
  forEach,
  groupBy,
  isArray,
  matchPattern,
  pick,
  values
} from "./chunk-26FIRWZU.js";

// node_modules/diagram-js/lib/features/auto-resize/AutoResize.js
function AutoResize(eventBus, elementRegistry, modeling, rules) {
  CommandInterceptor.call(this, eventBus);
  this._elementRegistry = elementRegistry;
  this._modeling = modeling;
  this._rules = rules;
  var self = this;
  this.postExecuted(["shape.create"], function(event) {
    var context = event.context, hints = context.hints || {}, shape = context.shape, parent = context.parent || context.newParent;
    if (hints.autoResize === false) {
      return;
    }
    self._expand([shape], parent);
  });
  this.postExecuted(["elements.move"], function(event) {
    var context = event.context, elements = flatten(values(context.closure.topLevel)), hints = context.hints;
    var autoResize = hints ? hints.autoResize : true;
    if (autoResize === false) {
      return;
    }
    var expandings = groupBy(elements, function(element) {
      return element.parent.id;
    });
    forEach(expandings, function(elements2, parentId) {
      if (isArray(autoResize)) {
        elements2 = elements2.filter(function(element) {
          return find(autoResize, matchPattern({
            id: element.id
          }));
        });
      }
      self._expand(elements2, parentId);
    });
  });
  this.postExecuted(["shape.toggleCollapse"], function(event) {
    var context = event.context, hints = context.hints, shape = context.shape;
    if (hints && hints.autoResize === false) {
      return;
    }
    if (shape.collapsed) {
      return;
    }
    self._expand(shape.children || [], shape);
  });
  this.postExecuted(["shape.resize"], function(event) {
    var context = event.context, hints = context.hints, shape = context.shape, parent = shape.parent;
    if (hints && hints.autoResize === false) {
      return;
    }
    if (parent) {
      self._expand([shape], parent);
    }
  });
}
AutoResize.$inject = ["eventBus", "elementRegistry", "modeling", "rules"];
e(AutoResize, CommandInterceptor);
AutoResize.prototype._getOptimalBounds = function(elements, target) {
  var offset = this.getOffset(target), padding = this.getPadding(target);
  var elementsTrbl = asTRBL(getBBox(elements)), targetTrbl = asTRBL(target);
  var newTrbl = {};
  if (elementsTrbl.top - targetTrbl.top < padding.top) {
    newTrbl.top = elementsTrbl.top - offset.top;
  }
  if (elementsTrbl.left - targetTrbl.left < padding.left) {
    newTrbl.left = elementsTrbl.left - offset.left;
  }
  if (targetTrbl.right - elementsTrbl.right < padding.right) {
    newTrbl.right = elementsTrbl.right + offset.right;
  }
  if (targetTrbl.bottom - elementsTrbl.bottom < padding.bottom) {
    newTrbl.bottom = elementsTrbl.bottom + offset.bottom;
  }
  return asBounds(assign({}, targetTrbl, newTrbl));
};
AutoResize.prototype._expand = function(elements, target) {
  if (typeof target === "string") {
    target = this._elementRegistry.get(target);
  }
  var allowed = this._rules.allowed("element.autoResize", {
    elements,
    target
  });
  if (!allowed) {
    return;
  }
  var newBounds = this._getOptimalBounds(elements, target);
  if (!boundsChanged(newBounds, target)) {
    return;
  }
  var resizeDirections = getResizeDirections(pick(target, ["x", "y", "width", "height"]), newBounds);
  this.resize(target, newBounds, {
    autoResize: resizeDirections
  });
  var parent = target.parent;
  if (parent) {
    this._expand([target], parent);
  }
};
AutoResize.prototype.getOffset = function(shape) {
  return {
    top: 60,
    bottom: 60,
    left: 100,
    right: 100
  };
};
AutoResize.prototype.getPadding = function(shape) {
  return {
    top: 2,
    bottom: 2,
    left: 15,
    right: 15
  };
};
AutoResize.prototype.resize = function(shape, newBounds, hints) {
  this._modeling.resizeShape(shape, newBounds, null, hints);
};
function boundsChanged(newBounds, oldBounds) {
  return newBounds.x !== oldBounds.x || newBounds.y !== oldBounds.y || newBounds.width !== oldBounds.width || newBounds.height !== oldBounds.height;
}
function getResizeDirections(oldBounds, newBounds) {
  var directions = "";
  oldBounds = asTRBL(oldBounds);
  newBounds = asTRBL(newBounds);
  if (oldBounds.top > newBounds.top) {
    directions = directions.concat("n");
  }
  if (oldBounds.right < newBounds.right) {
    directions = directions.concat("w");
  }
  if (oldBounds.bottom < newBounds.bottom) {
    directions = directions.concat("s");
  }
  if (oldBounds.left > newBounds.left) {
    directions = directions.concat("e");
  }
  return directions;
}

export {
  AutoResize
};
//# sourceMappingURL=chunk-NSOGAJ2U.js.map
