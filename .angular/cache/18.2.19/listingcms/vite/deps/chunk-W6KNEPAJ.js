// node_modules/min-dom/dist/index.esm.js
function _mergeNamespaces(n, m) {
  m.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === void 0;
}
function isArray(obj) {
  return nativeToString.call(obj) === "[object Array]";
}
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}
function forEach(collection, iterator) {
  let val, result;
  if (isUndefined(collection)) {
    return;
  }
  const convertKey = isArray(collection) ? toNum : identity;
  for (let key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));
      if (result === false) {
        return val;
      }
    }
  }
}
function identity(arg) {
  return arg;
}
function toNum(arg) {
  return Number(arg);
}
function assign(element, ...styleSources) {
  const target = element.style;
  forEach(styleSources, function(style) {
    if (!style) {
      return;
    }
    forEach(style, function(value, key) {
      target[key] = value;
    });
  });
  return element;
}
function attr(el, name, val) {
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }
  if (val === null) {
    return el.removeAttribute(name);
  }
  el.setAttribute(name, val);
  return el;
}
var toString = Object.prototype.toString;
function classes(el) {
  return new ClassList(el);
}
function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error("A DOM element reference is required");
  }
  this.el = el;
  this.list = el.classList;
}
ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};
ClassList.prototype.remove = function(name) {
  if ("[object RegExp]" == toString.call(name)) {
    return this.removeMatching(name);
  }
  this.list.remove(name);
  return this;
};
ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};
ClassList.prototype.toggle = function(name, force) {
  if ("undefined" !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name);
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};
ClassList.prototype.array = function() {
  return Array.from(this.list);
};
ClassList.prototype.has = ClassList.prototype.contains = function(name) {
  return this.list.contains(name);
};
function clear(element) {
  var child;
  while (child = element.firstChild) {
    element.removeChild(child);
  }
  return element;
}
function closest(element, selector, checkYourSelf) {
  var actualElement = checkYourSelf ? element : element.parentNode;
  return actualElement && typeof actualElement.closest === "function" && actualElement.closest(selector) || null;
}
var componentEvent = {};
var bind$1;
var unbind$1;
var prefix;
function detect() {
  bind$1 = window.addEventListener ? "addEventListener" : "attachEvent";
  unbind$1 = window.removeEventListener ? "removeEventListener" : "detachEvent";
  prefix = bind$1 !== "addEventListener" ? "on" : "";
}
var bind_1 = componentEvent.bind = function(el, type, fn, capture) {
  if (!bind$1) detect();
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};
var unbind_1 = componentEvent.unbind = function(el, type, fn, capture) {
  if (!unbind$1) detect();
  el[unbind$1](prefix + type, fn, capture || false);
  return fn;
};
var event = _mergeNamespaces({
  __proto__: null,
  bind: bind_1,
  unbind: unbind_1,
  "default": componentEvent
}, [componentEvent]);
var forceCaptureEvents = ["focus", "blur"];
function bind(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }
  return event.bind(el, type, function(e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}
function unbind(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }
  return event.unbind(el, type, fn, capture);
}
var delegate = {
  bind,
  unbind
};
var domify = parse;
var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== "undefined") {
  bugTestDiv = document.createElement("div");
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  innerHTMLBug = !bugTestDiv.getElementsByTagName("link").length;
  bugTestDiv = void 0;
}
var map = {
  legend: [1, "<fieldset>", "</fieldset>"],
  tr: [2, "<table><tbody>", "</tbody></table>"],
  col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, "X<div>", "</div>"] : [0, "", ""]
};
map.td = map.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
map.option = map.optgroup = [1, '<select multiple="multiple">', "</select>"];
map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, "<table>", "</table>"];
map.polyline = map.ellipse = map.polygon = map.circle = map.text = map.line = map.path = map.rect = map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"];
function parse(html, doc) {
  if ("string" != typeof html) throw new TypeError("String expected");
  if (!doc) doc = document;
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);
  html = html.replace(/^\s+|\s+$/g, "");
  var tag = m[1];
  if (tag == "body") {
    var el = doc.createElement("html");
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }
  var wrap = Object.prototype.hasOwnProperty.call(map, tag) ? map[tag] : map._default;
  var depth = wrap[0];
  var prefix2 = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement("div");
  el.innerHTML = prefix2 + html + suffix;
  while (depth--) el = el.lastChild;
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }
  return fragment;
}
var domify$1 = domify;
function matches(element, selector) {
  return element && typeof element.matches === "function" && element.matches(selector) || false;
}
function query(selector, el) {
  el = el || document;
  return el.querySelector(selector);
}
function all(selector, el) {
  el = el || document;
  return el.querySelectorAll(selector);
}
function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}

export {
  assign,
  attr,
  classes,
  clear,
  closest,
  event,
  delegate,
  domify$1,
  matches,
  query,
  all,
  remove
};
//# sourceMappingURL=chunk-W6KNEPAJ.js.map
