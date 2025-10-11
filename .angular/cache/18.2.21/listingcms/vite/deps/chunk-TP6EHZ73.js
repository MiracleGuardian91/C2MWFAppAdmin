import {
  e
} from "./chunk-4FMKAPTB.js";
import {
  isExpanded
} from "./chunk-YEYSLSPF.js";
import {
  DEFAULT_LABEL_SIZE
} from "./chunk-KRA2BNKR.js";
import {
  getBusinessObject,
  getDi,
  is,
  isAny
} from "./chunk-6CMT5M6M.js";
import {
  assign,
  forEach,
  has,
  isDefined,
  isObject,
  omit
} from "./chunk-26FIRWZU.js";

// node_modules/object-refs/dist/index.js
function extend(collection, refs, property, target) {
  var inverseProperty = property.inverse;
  Object.defineProperty(collection, "remove", {
    value: function(element) {
      var idx = this.indexOf(element);
      if (idx !== -1) {
        this.splice(idx, 1);
        refs.unset(element, inverseProperty, target);
      }
      return element;
    }
  });
  Object.defineProperty(collection, "contains", {
    value: function(element) {
      return this.indexOf(element) !== -1;
    }
  });
  Object.defineProperty(collection, "add", {
    value: function(element, idx) {
      var currentIdx = this.indexOf(element);
      if (typeof idx === "undefined") {
        if (currentIdx !== -1) {
          return;
        }
        idx = this.length;
      }
      if (currentIdx !== -1) {
        this.splice(currentIdx, 1);
      }
      this.splice(idx, 0, element);
      if (currentIdx === -1) {
        refs.set(element, inverseProperty, target);
      }
    }
  });
  Object.defineProperty(collection, "__refs_collection", {
    value: true
  });
  return collection;
}
function isExtended(collection) {
  return collection.__refs_collection === true;
}
function hasOwnProperty(e2, property) {
  return Object.prototype.hasOwnProperty.call(e2, property.name || property);
}
function defineCollectionProperty(ref, property, target) {
  var collection = extend(target[property.name] || [], ref, property, target);
  Object.defineProperty(target, property.name, {
    enumerable: property.enumerable,
    value: collection
  });
  if (collection.length) {
    collection.forEach(function(o) {
      ref.set(o, property.inverse, target);
    });
  }
}
function defineProperty(ref, property, target) {
  var inverseProperty = property.inverse;
  var _value = target[property.name];
  Object.defineProperty(target, property.name, {
    configurable: property.configurable,
    enumerable: property.enumerable,
    get: function() {
      return _value;
    },
    set: function(value) {
      if (value === _value) {
        return;
      }
      var old = _value;
      _value = null;
      if (old) {
        ref.unset(old, inverseProperty, target);
      }
      _value = value;
      ref.set(_value, inverseProperty, target);
    }
  });
}
function Refs(a, b) {
  if (!(this instanceof Refs)) {
    return new Refs(a, b);
  }
  a.inverse = b;
  b.inverse = a;
  this.props = {};
  this.props[a.name] = a;
  this.props[b.name] = b;
}
Refs.prototype.bind = function(target, property) {
  if (typeof property === "string") {
    if (!this.props[property]) {
      throw new Error("no property <" + property + "> in ref");
    }
    property = this.props[property];
  }
  if (property.collection) {
    defineCollectionProperty(this, property, target);
  } else {
    defineProperty(this, property, target);
  }
};
Refs.prototype.ensureRefsCollection = function(target, property) {
  var collection = target[property.name];
  if (!isExtended(collection)) {
    defineCollectionProperty(this, property, target);
  }
  return collection;
};
Refs.prototype.ensureBound = function(target, property) {
  if (!hasOwnProperty(target, property)) {
    this.bind(target, property);
  }
};
Refs.prototype.unset = function(target, property, value) {
  if (target) {
    this.ensureBound(target, property);
    if (property.collection) {
      this.ensureRefsCollection(target, property).remove(value);
    } else {
      target[property.name] = void 0;
    }
  }
};
Refs.prototype.set = function(target, property, value) {
  if (target) {
    this.ensureBound(target, property);
    if (property.collection) {
      this.ensureRefsCollection(target, property).add(value);
    } else {
      target[property.name] = value;
    }
  }
};

// node_modules/diagram-js/lib/model/index.js
var parentRefs = new Refs({
  name: "children",
  enumerable: true,
  collection: true
}, {
  name: "parent"
});
var labelRefs = new Refs({
  name: "labels",
  enumerable: true,
  collection: true
}, {
  name: "labelTarget"
});
var attacherRefs = new Refs({
  name: "attachers",
  collection: true
}, {
  name: "host"
});
var outgoingRefs = new Refs({
  name: "outgoing",
  collection: true
}, {
  name: "source"
});
var incomingRefs = new Refs({
  name: "incoming",
  collection: true
}, {
  name: "target"
});
function ElementImpl() {
  Object.defineProperty(this, "businessObject", {
    writable: true
  });
  Object.defineProperty(this, "label", {
    get: function() {
      return this.labels[0];
    },
    set: function(newLabel) {
      var label = this.label, labels = this.labels;
      if (!newLabel && label) {
        labels.remove(label);
      } else {
        labels.add(newLabel, 0);
      }
    }
  });
  parentRefs.bind(this, "parent");
  labelRefs.bind(this, "labels");
  outgoingRefs.bind(this, "outgoing");
  incomingRefs.bind(this, "incoming");
}
function ShapeImpl() {
  ElementImpl.call(this);
  parentRefs.bind(this, "children");
  attacherRefs.bind(this, "host");
  attacherRefs.bind(this, "attachers");
}
e(ShapeImpl, ElementImpl);
function RootImpl() {
  ElementImpl.call(this);
  parentRefs.bind(this, "children");
}
e(RootImpl, ShapeImpl);
function LabelImpl() {
  ShapeImpl.call(this);
  labelRefs.bind(this, "labelTarget");
}
e(LabelImpl, ShapeImpl);
function ConnectionImpl() {
  ElementImpl.call(this);
  outgoingRefs.bind(this, "source");
  incomingRefs.bind(this, "target");
}
e(ConnectionImpl, ElementImpl);
var types = {
  connection: ConnectionImpl,
  shape: ShapeImpl,
  label: LabelImpl,
  root: RootImpl
};
function create(type, attrs) {
  var Type = types[type];
  if (!Type) {
    throw new Error("unknown type: <" + type + ">");
  }
  return assign(new Type(), attrs);
}
function isModelElement(obj) {
  return obj instanceof ElementImpl;
}

// node_modules/diagram-js/lib/core/ElementFactory.js
function ElementFactory() {
  this._uid = 12;
}
ElementFactory.prototype.createRoot = function(attrs) {
  return this.create("root", attrs);
};
ElementFactory.prototype.createLabel = function(attrs) {
  return this.create("label", attrs);
};
ElementFactory.prototype.createShape = function(attrs) {
  return this.create("shape", attrs);
};
ElementFactory.prototype.createConnection = function(attrs) {
  return this.create("connection", attrs);
};
ElementFactory.prototype.create = function(type, attrs) {
  attrs = assign({}, attrs || {});
  if (!attrs.id) {
    attrs.id = type + "_" + this._uid++;
  }
  return create(type, attrs);
};

// node_modules/bpmn-js/lib/util/CompatibilityUtil.js
var DI_ERROR_MESSAGE = "Tried to access di from the businessObject. The di is available through the diagram element only. For more information, see https://github.com/bpmn-io/bpmn-js/issues/1472";
function ensureCompatDiRef(businessObject) {
  if (!has(businessObject, "di")) {
    Object.defineProperty(businessObject, "di", {
      enumerable: false,
      get: function() {
        throw new Error(DI_ERROR_MESSAGE);
      }
    });
  }
}

// node_modules/bpmn-js/lib/features/modeling/ElementFactory.js
function ElementFactory2(bpmnFactory, moddle) {
  ElementFactory.call(this);
  this._bpmnFactory = bpmnFactory;
  this._moddle = moddle;
}
e(ElementFactory2, ElementFactory);
ElementFactory2.$inject = ["bpmnFactory", "moddle"];
ElementFactory2.prototype._baseCreate = ElementFactory.prototype.create;
ElementFactory2.prototype.create = function(elementType, attrs) {
  if (elementType === "label") {
    var di = attrs.di || this._bpmnFactory.createDiLabel();
    return this._baseCreate(elementType, assign({
      type: "label",
      di
    }, DEFAULT_LABEL_SIZE, attrs));
  }
  return this.createElement(elementType, attrs);
};
ElementFactory2.prototype.createElement = function(elementType, attrs) {
  attrs = assign({}, attrs || {});
  var size;
  var businessObject = attrs.businessObject, di = attrs.di;
  if (!businessObject) {
    if (!attrs.type) {
      throw new Error("no shape type specified");
    }
    businessObject = this._bpmnFactory.create(attrs.type);
    ensureCompatDiRef(businessObject);
  }
  if (!isModdleDi(di)) {
    var diAttrs = assign({}, di || {}, {
      id: businessObject.id + "_di"
    });
    if (elementType === "root") {
      di = this._bpmnFactory.createDiPlane(businessObject, diAttrs);
    } else if (elementType === "connection") {
      di = this._bpmnFactory.createDiEdge(businessObject, diAttrs);
    } else {
      di = this._bpmnFactory.createDiShape(businessObject, diAttrs);
    }
  }
  if (is(businessObject, "bpmn:Group")) {
    attrs = assign({
      isFrame: true
    }, attrs);
  }
  attrs = applyAttributes(businessObject, attrs, ["processRef", "isInterrupting", "associationDirection", "isForCompensation"]);
  if (attrs.isExpanded) {
    attrs = applyAttribute(di, attrs, "isExpanded");
  }
  if (isAny(businessObject, ["bpmn:Lane", "bpmn:Participant"])) {
    attrs = applyAttribute(di, attrs, "isHorizontal");
  }
  if (is(businessObject, "bpmn:SubProcess")) {
    attrs.collapsed = !isExpanded(businessObject, di);
  }
  if (is(businessObject, "bpmn:ExclusiveGateway")) {
    if (has(di, "isMarkerVisible")) {
      if (di.isMarkerVisible === void 0) {
        di.isMarkerVisible = false;
      }
    } else {
      di.isMarkerVisible = true;
    }
  }
  if (isDefined(attrs.triggeredByEvent)) {
    businessObject.triggeredByEvent = attrs.triggeredByEvent;
    delete attrs.triggeredByEvent;
  }
  if (isDefined(attrs.cancelActivity)) {
    businessObject.cancelActivity = attrs.cancelActivity;
    delete attrs.cancelActivity;
  }
  var eventDefinitions, newEventDefinition;
  if (attrs.eventDefinitionType) {
    eventDefinitions = businessObject.get("eventDefinitions") || [];
    newEventDefinition = this._bpmnFactory.create(attrs.eventDefinitionType, attrs.eventDefinitionAttrs);
    if (attrs.eventDefinitionType === "bpmn:ConditionalEventDefinition") {
      newEventDefinition.condition = this._bpmnFactory.create("bpmn:FormalExpression");
    }
    eventDefinitions.push(newEventDefinition);
    newEventDefinition.$parent = businessObject;
    businessObject.eventDefinitions = eventDefinitions;
    delete attrs.eventDefinitionType;
  }
  size = this.getDefaultSize(businessObject, di);
  attrs = assign({
    id: businessObject.id
  }, size, attrs, {
    businessObject,
    di
  });
  return this._baseCreate(elementType, attrs);
};
ElementFactory2.prototype.getDefaultSize = function(element, di) {
  var bo = getBusinessObject(element);
  di = di || getDi(element);
  if (is(bo, "bpmn:SubProcess")) {
    if (isExpanded(bo, di)) {
      return {
        width: 350,
        height: 200
      };
    } else {
      return {
        width: 100,
        height: 80
      };
    }
  }
  if (is(bo, "bpmn:Task")) {
    return {
      width: 100,
      height: 80
    };
  }
  if (is(bo, "bpmn:Gateway")) {
    return {
      width: 50,
      height: 50
    };
  }
  if (is(bo, "bpmn:Event")) {
    return {
      width: 36,
      height: 36
    };
  }
  if (is(bo, "bpmn:Participant")) {
    var isHorizontalPool = di.isHorizontal === void 0 || di.isHorizontal === true;
    if (isExpanded(bo, di)) {
      if (isHorizontalPool) {
        return {
          width: 600,
          height: 250
        };
      }
      return {
        width: 250,
        height: 600
      };
    } else {
      if (isHorizontalPool) {
        return {
          width: 400,
          height: 60
        };
      }
      return {
        width: 60,
        height: 400
      };
    }
  }
  if (is(bo, "bpmn:Lane")) {
    return {
      width: 400,
      height: 100
    };
  }
  if (is(bo, "bpmn:DataObjectReference")) {
    return {
      width: 36,
      height: 50
    };
  }
  if (is(bo, "bpmn:DataStoreReference")) {
    return {
      width: 50,
      height: 50
    };
  }
  if (is(bo, "bpmn:TextAnnotation")) {
    return {
      width: 100,
      height: 30
    };
  }
  if (is(bo, "bpmn:Group")) {
    return {
      width: 300,
      height: 300
    };
  }
  return {
    width: 100,
    height: 80
  };
};
ElementFactory2.prototype.createParticipantShape = function(attrs) {
  if (!isObject(attrs)) {
    attrs = {
      isExpanded: attrs
    };
  }
  attrs = assign({
    type: "bpmn:Participant"
  }, attrs || {});
  if (attrs.isExpanded !== false) {
    attrs.processRef = this._bpmnFactory.create("bpmn:Process");
  }
  return this.createShape(attrs);
};
function applyAttributes(element, attrs, attributeNames) {
  forEach(attributeNames, function(property) {
    attrs = applyAttribute(element, attrs, property);
  });
  return attrs;
}
function applyAttribute(element, attrs, attributeName) {
  if (attrs[attributeName] === void 0) {
    return attrs;
  }
  element[attributeName] = attrs[attributeName];
  return omit(attrs, [attributeName]);
}
function isModdleDi(element) {
  return isAny(element, ["bpmndi:BPMNShape", "bpmndi:BPMNEdge", "bpmndi:BPMNDiagram", "bpmndi:BPMNPlane"]);
}

export {
  isModelElement,
  ElementFactory,
  ensureCompatDiRef,
  ElementFactory2
};
//# sourceMappingURL=chunk-TP6EHZ73.js.map
