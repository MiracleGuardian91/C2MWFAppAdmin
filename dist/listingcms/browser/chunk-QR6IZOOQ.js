import {
  BaseHttpService
} from "./chunk-CDVZX7RG.js";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader
} from "./chunk-LNAQ2UNQ.js";
import "./chunk-AZ2LSUZA.js";
import {
  A11yModule,
  AriaDescriber,
  CdkScrollableModule,
  ComponentPortal,
  Directionality,
  ESCAPE,
  FocusMonitor,
  MatCommonModule,
  Overlay,
  OverlayModule,
  Platform,
  ScrollDispatcher,
  coerceBooleanProperty,
  coerceNumberProperty,
  hasModifierKey,
  normalizePassiveListenerOptions
} from "./chunk-5GIB77BJ.js";
import {
  AuthGuard,
  MessageService,
  UserDetail
} from "./chunk-43FCU5DY.js";
import {
  ApiService
} from "./chunk-WGZX6A37.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule,
  NgbActiveModal,
  ReactiveFormsModule,
  SimpleLoaderService,
  ToastrService,
  Validators,
  animate,
  environment,
  state,
  style,
  transition,
  trigger,
  ɵNgNoValidate
} from "./chunk-L2L6ECIJ.js";
import {
  ANIMATION_MODULE_TYPE,
  ActivatedRoute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  HttpClient,
  Inject,
  InjectionToken,
  Injector,
  Input,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgZone,
  Optional,
  Router,
  RouterModule,
  Subject,
  Title,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  finalize,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";
import {
  __commonJS,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery2,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, {
            nonce: options && options.nonce
          }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery2.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
      jQuery2.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery2.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
          return elem.disabled === true && nodeName(elem, "fieldset");
        }, {
          dir: "parentNode",
          next: "legend"
        });
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery2.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery2.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery2.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery2.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery2.fn.uniqueSort = function() {
          return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery2.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: true
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: true
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
          radio: true,
          checkbox: true,
          file: true,
          password: true,
          image: true
        }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
          submit: true,
          reset: true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(
                  // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                  tokens.slice(0, i2 - 1).concat({
                    value: tokens[i2 - 2].type === " " ? "*" : ""
                  })
                ).replace(rtrimCSS, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery2.find = find;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.unique = jQuery2.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery2.escapeSelector;
        find.getText = jQuery2.text;
        find.isXML = jQuery2.isXMLDoc;
        find.selectors = jQuery2.expr;
        find.support = jQuery2.support;
        find.uniqueSort = jQuery2.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery2)
          );
        }
        return jQuery2.makeArray(selector, this);
      };
      init.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery2.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(jQuery2.uniqueSort(jQuery2.merge(this.get(), jQuery2(selector, context))));
        },
        addBack: function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            ["notify", "progress", jQuery2.Callbacks("memory"), jQuery2.Callbacks("memory"), 2],
            ["resolve", "done", jQuery2.Callbacks("once memory"), jQuery2.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", jQuery2.Callbacks("once memory"), jQuery2.Callbacks("once memory"), 1, "rejected"]
          ], state2 = "pending", promise = {
            state: function() {
              return state2;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                      } else {
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(e, process.error);
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery2.Deferred.getErrorHook) {
                      process.error = jQuery2.Deferred.getErrorHook();
                    } else if (jQuery2.Deferred.getStackHook) {
                      process.error = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state2 = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery2.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = {
        composed: true
      };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state2) {
          if (typeof state2 === "boolean") {
            return state2 ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                  });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({
              elem: cur,
              handlers: handlers.slice(delegateCount)
            });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery2.event.trigger(saved[0], saved.slice(1), this));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery2.event.addProp);
      jQuery2.each({
        focus: "focusin",
        blur: "focusout"
      }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery2.event.simulate(delegateType, nativeEvent.target, jQuery2.event.fix(nativeEvent));
          }
        }
        jQuery2.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery2.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery2.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery2(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style2 = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style2.width;
            minWidth = style2.minWidth;
            maxWidth = style2.maxWidth;
            style2.minWidth = style2.maxWidth = style2.width = ret;
            ret = computed.width;
            style2.width = width;
            style2.minWidth = minWidth;
            style2.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery2.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery2.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style2 = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style2[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style2.setProperty(name, value);
              } else {
                style2[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style2[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
          }, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
          height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style2 = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style2.overflow, style2.overflowX, style2.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style2.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style2.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style2.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style2.overflow = "hidden";
          anim.always(function() {
            style2.overflow = opts.overflow[0];
            style2.overflowX = opts.overflow[1];
            style2.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
              });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(jQuery2.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
            opacity: to
          }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery2(this).toggleClass(value.call(this, i2, getClass(this), stateVal), stateVal);
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery2(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery2.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location = window2.location;
      var nonce = {
        guid: Date.now()
      };
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(new jQuery2.Event(), event, {
            type,
            isSimulated: true
          });
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return {
                  name: elem.name,
                  value: val2.replace(rCRLF, "\r\n")
                };
              });
            }
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return {
          state: "success",
          data: response
        };
      }
      jQuery2.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery2.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery2.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery2(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                          binary: xhr.response
                        } : {
                          text: xhr.responseText
                        },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({
                charset: s.scriptCharset,
                src: s.url
              }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery2.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery2.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = {
            top: 0,
            left: 0
          };
          if (jQuery2.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
          }
        });
      });
      jQuery2.each({
        Height: "height",
        Width: "width"
      }, function(name, type) {
        jQuery2.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery2.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery2.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(_i, type) {
        jQuery2.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery2.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        jQuery2.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  }
});

// node_modules/jstree/dist/jstree.js
var require_jstree = __commonJS({
  "node_modules/jstree/dist/jstree.js"(exports, module) {
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = factory(require_jquery());
      } else {
        factory(jQuery);
      }
    })(function($3, undefined2) {
      "use strict";
      if ($3.jstree) {
        return;
      }
      var instance_counter = 0, ccp_node = false, ccp_mode = false, ccp_inst = false, themes_loaded = [], src = $3("script:last").attr("src"), document2 = window.document;
      var setImmediate = window.setImmediate;
      var Promise2 = window.Promise;
      if (!setImmediate && Promise2) {
        setImmediate = function(cb, arg) {
          Promise2.resolve(arg).then(cb);
        };
      }
      $3.jstree = {
        /**
         * specifies the jstree version in use
         * @name $.jstree.version
         */
        version: "3.3.17",
        /**
         * holds all the default options used when creating new instances
         * @name $.jstree.defaults
         */
        defaults: {
          /**
           * configure which plugins will be active on an instance. Should be an array of strings, where each element is a plugin name. The default is `[]`
           * @name $.jstree.defaults.plugins
           */
          plugins: []
        },
        /**
         * stores all loaded jstree plugins (used internally)
         * @name $.jstree.plugins
         */
        plugins: {},
        path: src && src.indexOf("/") !== -1 ? src.replace(/\/[^\/]+$/, "") : "",
        idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,
        root: "#"
      };
      $3.jstree.create = function(el, options) {
        var tmp = new $3.jstree.core(++instance_counter), opt = options;
        options = $3.extend(true, {}, $3.jstree.defaults, options);
        if (opt && opt.plugins) {
          options.plugins = opt.plugins;
        }
        $3.each(options.plugins, function(i, k) {
          if (i !== "core") {
            tmp = tmp.plugin(k, options[k]);
          }
        });
        $3(el).data("jstree", tmp);
        tmp.init(el, options);
        return tmp;
      };
      $3.jstree.destroy = function() {
        $3(".jstree:jstree").jstree("destroy");
        $3(document2).off(".jstree");
      };
      $3.jstree.core = function(id) {
        this._id = id;
        this._cnt = 0;
        this._wrk = null;
        this._data = {
          core: {
            themes: {
              name: false,
              dots: false,
              icons: false,
              ellipsis: false
            },
            selected: [],
            last_error: {},
            working: false,
            worker_queue: [],
            focused: null
          }
        };
      };
      $3.jstree.reference = function(needle) {
        var tmp = null, obj = null;
        if (needle && needle.id && (!needle.tagName || !needle.nodeType)) {
          needle = needle.id;
        }
        if (!obj || !obj.length) {
          try {
            obj = $3(needle);
          } catch (ignore) {
          }
        }
        if (!obj || !obj.length) {
          try {
            obj = $3("#" + needle.replace($3.jstree.idregex, "\\$&"));
          } catch (ignore) {
          }
        }
        if (obj && obj.length && (obj = obj.closest(".jstree")).length && (obj = obj.data("jstree"))) {
          tmp = obj;
        } else {
          $3(".jstree").each(function() {
            var inst = $3(this).data("jstree");
            if (inst && inst._model.data[needle]) {
              tmp = inst;
              return false;
            }
          });
        }
        return tmp;
      };
      $3.fn.jstree = function(arg) {
        var is_method = typeof arg === "string", args = Array.prototype.slice.call(arguments, 1), result = null;
        if (arg === true && !this.length) {
          return false;
        }
        this.each(function() {
          var instance = $3.jstree.reference(this), method = is_method && instance ? instance[arg] : null;
          result = is_method && method ? method.apply(instance, args) : null;
          if (!instance && !is_method && (arg === undefined2 || $3.isPlainObject(arg))) {
            $3.jstree.create(this, arg);
          }
          if (instance && !is_method || arg === true) {
            result = instance || false;
          }
          if (result !== null && result !== undefined2) {
            return false;
          }
        });
        return result !== null && result !== undefined2 ? result : this;
      };
      $3.expr.pseudos.jstree = $3.expr.createPseudo(function(search) {
        return function(a) {
          return $3(a).hasClass("jstree") && $3(a).data("jstree") !== undefined2;
        };
      });
      $3.jstree.defaults.core = {
        /**
         * data configuration
         *
         * If left as `false` the HTML inside the jstree container element is used to populate the tree (that should be an unordered list with list items).
         *
         * You can also pass in a HTML string or a JSON array here.
         *
         * It is possible to pass in a standard jQuery-like AJAX config and jstree will automatically determine if the response is JSON or HTML and use that to populate the tree.
         * In addition to the standard jQuery ajax options here you can supply functions for `data` and `url`, the functions will be run in the current instance's scope and a param will be passed indicating which node is being loaded, the return value of those functions will be used.
         *
         * The last option is to specify a function, that function will receive the node being loaded as argument and a second param which is a function which should be called with the result.
         *
         * __Examples__
         *
         *	// AJAX
         *	$('#tree').jstree({
         *		'core' : {
         *			'data' : {
         *				'url' : '/get/children/',
         *				'data' : function (node) {
         *					return { 'id' : node.id };
         *				}
         *			}
         *		});
         *
         *	// direct data
         *	$('#tree').jstree({
         *		'core' : {
         *			'data' : [
         *				'Simple root node',
         *				{
         *					'id' : 'node_2',
         *					'text' : 'Root node with options',
         *					'state' : { 'opened' : true, 'selected' : true },
         *					'children' : [ { 'text' : 'Child 1' }, 'Child 2']
         *				}
         *			]
         *		}
         *	});
         *
         *	// function
         *	$('#tree').jstree({
         *		'core' : {
         *			'data' : function (obj, callback) {
         *				callback.call(this, ['Root 1', 'Root 2']);
         *			}
         *		});
         *
         * @name $.jstree.defaults.core.data
         */
        data: false,
        /**
         * configure the various strings used throughout the tree
         *
         * You can use an object where the key is the string you need to replace and the value is your replacement.
         * Another option is to specify a function which will be called with an argument of the needed string and should return the replacement.
         * If left as `false` no replacement is made.
         *
         * __Examples__
         *
         *	$('#tree').jstree({
         *		'core' : {
         *			'strings' : {
         *				'Loading ...' : 'Please wait ...'
         *			}
         *		}
         *	});
         *
         * @name $.jstree.defaults.core.strings
         */
        strings: false,
        /**
         * determines what happens when a user tries to modify the structure of the tree
         * If left as `false` all operations like create, rename, delete, move or copy are prevented.
         * You can set this to `true` to allow all interactions or use a function to have better control.
         *
         * __Examples__
         *
         *	$('#tree').jstree({
         *		'core' : {
         *			'check_callback' : function (operation, node, node_parent, node_position, more) {
         *				// operation can be 'create_node', 'rename_node', 'delete_node', 'move_node', 'copy_node' or 'edit'
         *				// in case of 'rename_node' node_position is filled with the new node name
         *				return operation === 'rename_node' ? true : false;
         *			}
         *		}
         *	});
         *
         * @name $.jstree.defaults.core.check_callback
         */
        check_callback: false,
        /**
         * a callback called with a single object parameter in the instance's scope when something goes wrong (operation prevented, ajax failed, etc)
         * @name $.jstree.defaults.core.error
         */
        error: $3.noop,
        /**
         * the open / close animation duration in milliseconds - set this to `false` to disable the animation (default is `200`)
         * @name $.jstree.defaults.core.animation
         */
        animation: 200,
        /**
         * a boolean indicating if multiple nodes can be selected
         * @name $.jstree.defaults.core.multiple
         */
        multiple: true,
        /**
         * theme configuration object
         * @name $.jstree.defaults.core.themes
         */
        themes: {
          /**
           * the name of the theme to use (if left as `false` the default theme is used)
           * @name $.jstree.defaults.core.themes.name
           */
          name: false,
          /**
           * the URL of the theme's CSS file, leave this as `false` if you have manually included the theme CSS (recommended). You can set this to `true` too which will try to autoload the theme.
           * @name $.jstree.defaults.core.themes.url
           */
          url: false,
          /**
           * the location of all jstree themes - only used if `url` is set to `true`
           * @name $.jstree.defaults.core.themes.dir
           */
          dir: false,
          /**
           * a boolean indicating if connecting dots are shown
           * @name $.jstree.defaults.core.themes.dots
           */
          dots: true,
          /**
           * a boolean indicating if node icons are shown
           * @name $.jstree.defaults.core.themes.icons
           */
          icons: true,
          /**
           * a boolean indicating if node ellipsis should be shown - this only works with a fixed with on the container
           * @name $.jstree.defaults.core.themes.ellipsis
           */
          ellipsis: false,
          /**
           * a boolean indicating if the tree background is striped
           * @name $.jstree.defaults.core.themes.stripes
           */
          stripes: false,
          /**
           * a string (or boolean `false`) specifying the theme variant to use (if the theme supports variants)
           * @name $.jstree.defaults.core.themes.variant
           */
          variant: false,
          /**
           * a boolean specifying if a reponsive version of the theme should kick in on smaller screens (if the theme supports it). Defaults to `false`.
           * @name $.jstree.defaults.core.themes.responsive
           */
          responsive: false
        },
        /**
         * if left as `true` all parents of all selected nodes will be opened once the tree loads (so that all selected nodes are visible to the user)
         * @name $.jstree.defaults.core.expand_selected_onload
         */
        expand_selected_onload: true,
        /**
         * if left as `true` web workers will be used to parse incoming JSON data where possible, so that the UI will not be blocked by large requests. Workers are however about 30% slower. Defaults to `true`
         * @name $.jstree.defaults.core.worker
         */
        worker: true,
        /**
         * Force node text to plain text (and escape HTML). Defaults to `false`
         * @name $.jstree.defaults.core.force_text
         */
        force_text: false,
        /**
         * Should the node be toggled if the text is double clicked. Defaults to `true`
         * @name $.jstree.defaults.core.dblclick_toggle
         */
        dblclick_toggle: true,
        /**
         * Should the loaded nodes be part of the state. Defaults to `false`
         * @name $.jstree.defaults.core.loaded_state
         */
        loaded_state: false,
        /**
         * Should the last active node be focused when the tree container is blurred and the focused again. This helps working with screen readers. Defaults to `true`
         * @name $.jstree.defaults.core.restore_focus
         */
        restore_focus: true,
        /**
         * Force to compute and set "aria-setsize" and "aria-posinset" explicitly for each treeitem. 
         * Some browsers may compute incorrect elements position and produce wrong announcements for screen readers. Defaults to `false`
         * @name $.jstree.defaults.core.compute_elements_positions
         */
        compute_elements_positions: false,
        /**
         * Default keyboard shortcuts (an object where each key is the button name or combo - like 'enter', 'ctrl-space', 'p', etc and the value is the function to execute in the instance's scope)
         * @name $.jstree.defaults.core.keyboard
         */
        keyboard: {
          "ctrl-space": function(e) {
            e.type = "click";
            $3(e.currentTarget).trigger(e);
          },
          "enter": function(e) {
            e.type = "click";
            $3(e.currentTarget).trigger(e);
          },
          "left": function(e) {
            e.preventDefault();
            if (this.is_open(e.currentTarget)) {
              this.close_node(e.currentTarget);
            } else {
              var o = this.get_parent(e.currentTarget);
              if (o && o.id !== $3.jstree.root) {
                this.get_node(o, true).children(".jstree-anchor").trigger("focus");
              }
            }
          },
          "up": function(e) {
            e.preventDefault();
            var o = this.get_prev_dom(e.currentTarget);
            if (o && o.length) {
              o.children(".jstree-anchor").trigger("focus");
            }
          },
          "right": function(e) {
            e.preventDefault();
            if (this.is_closed(e.currentTarget)) {
              this.open_node(e.currentTarget, function(o2) {
                this.get_node(o2, true).children(".jstree-anchor").trigger("focus");
              });
            } else if (this.is_open(e.currentTarget)) {
              var o = this.get_node(e.currentTarget, true).children(".jstree-children")[0];
              if (o) {
                $3(this._firstChild(o)).children(".jstree-anchor").trigger("focus");
              }
            }
          },
          "down": function(e) {
            e.preventDefault();
            var o = this.get_next_dom(e.currentTarget);
            if (o && o.length) {
              o.children(".jstree-anchor").trigger("focus");
            }
          },
          "*": function(e) {
            this.open_all();
          },
          "home": function(e) {
            e.preventDefault();
            var o = this._firstChild(this.get_container_ul()[0]);
            if (o) {
              $3(o).children(".jstree-anchor").filter(":visible").trigger("focus");
            }
          },
          "end": function(e) {
            e.preventDefault();
            this.element.find(".jstree-anchor").filter(":visible").last().trigger("focus");
          },
          "f2": function(e) {
            e.preventDefault();
            this.edit(e.currentTarget);
          }
        },
        /**
        * Should reselecting an already selected node trigger the select and changed callbacks
        * @name $.jstree.defaults.core.allow_reselect
        */
        allow_reselect: false
      };
      $3.jstree.core.prototype = {
        /**
         * used to decorate an instance with a plugin. Used internally.
         * @private
         * @name plugin(deco [, opts])
         * @param  {String} deco the plugin to decorate with
         * @param  {Object} opts options for the plugin
         * @return {jsTree}
         */
        plugin: function(deco, opts) {
          var Child = $3.jstree.plugins[deco];
          if (Child) {
            this._data[deco] = {};
            Child.prototype = this;
            return new Child(opts, this);
          }
          return this;
        },
        /**
         * initialize the instance. Used internally.
         * @private
         * @name init(el, optons)
         * @param {DOMElement|jQuery|String} el the element we are transforming
         * @param {Object} options options for this instance
         * @trigger init.jstree, loading.jstree, loaded.jstree, ready.jstree, changed.jstree
         */
        init: function(el, options) {
          this._model = {
            data: {},
            changed: [],
            force_full_redraw: false,
            redraw_timeout: false,
            default_state: {
              loaded: true,
              opened: false,
              selected: false,
              disabled: false
            }
          };
          this._model.data[$3.jstree.root] = {
            id: $3.jstree.root,
            parent: null,
            parents: [],
            children: [],
            children_d: [],
            state: {
              loaded: false
            }
          };
          this.element = $3(el).addClass("jstree jstree-" + this._id);
          this.settings = options;
          this._data.core.ready = false;
          this._data.core.loaded = false;
          this._data.core.rtl = this.element.css("direction") === "rtl";
          this.element[this._data.core.rtl ? "addClass" : "removeClass"]("jstree-rtl");
          this.element.attr("role", "tree");
          if (this.settings.core.multiple) {
            this.element.attr("aria-multiselectable", true);
          }
          if (!this.element.attr("tabindex")) {
            this.element.attr("tabindex", "0");
          }
          this.bind();
          this.trigger("init");
          this._data.core.original_container_html = this.element.find(" > ul > li").clone(true);
          this._data.core.original_container_html.find("li").addBack().contents().filter(function() {
            return this.nodeType === 3 && (!this.nodeValue || /^\s+$/.test(this.nodeValue));
          }).remove();
          this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>");
          this.element.attr("aria-activedescendant", "j" + this._id + "_loading");
          this._data.core.li_height = this.get_container_ul().children("li").first().outerHeight() || 24;
          this._data.core.node = this._create_prototype_node();
          this.trigger("loading");
          this.load_node($3.jstree.root);
        },
        /**
         * destroy an instance
         * @name destroy()
         * @param  {Boolean} keep_html if not set to `true` the container will be emptied, otherwise the current DOM elements will be kept intact
         */
        destroy: function(keep_html) {
          this.trigger("destroy");
          if (this._wrk) {
            try {
              window.URL.revokeObjectURL(this._wrk);
              this._wrk = null;
            } catch (ignore) {
            }
          }
          if (!keep_html) {
            this.element.empty();
          }
          this.teardown();
        },
        /**
         * Create a prototype node
         * @name _create_prototype_node()
         * @return {DOMElement}
         */
        _create_prototype_node: function() {
          var _node = document2.createElement("LI"), _temp1, _temp2;
          _node.setAttribute("role", "none");
          _temp1 = document2.createElement("I");
          _temp1.className = "jstree-icon jstree-ocl";
          _temp1.setAttribute("role", "presentation");
          _node.appendChild(_temp1);
          _temp1 = document2.createElement("A");
          _temp1.className = "jstree-anchor";
          _temp1.setAttribute("href", "#");
          _temp1.setAttribute("tabindex", "-1");
          _temp1.setAttribute("role", "treeitem");
          _temp2 = document2.createElement("I");
          _temp2.className = "jstree-icon jstree-themeicon";
          _temp2.setAttribute("role", "presentation");
          _temp1.appendChild(_temp2);
          _node.appendChild(_temp1);
          _temp1 = _temp2 = null;
          return _node;
        },
        _kbevent_to_func: function(e) {
          var keys = {
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            19: "Pause",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "Print",
            45: "Insert",
            46: "Delete",
            96: "Numpad0",
            97: "Numpad1",
            98: "Numpad2",
            99: "Numpad3",
            100: "Numpad4",
            101: "Numpad5",
            102: "Numpad6",
            103: "Numpad7",
            104: "Numpad8",
            105: "Numpad9",
            "-13": "NumpadEnter",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "Numlock",
            145: "Scrolllock",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            61: "=",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            107: "+",
            109: "-",
            110: ".",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            111: "/",
            106: "*",
            173: "-"
          };
          var parts = [];
          if (e.ctrlKey) {
            parts.push("ctrl");
          }
          if (e.altKey) {
            parts.push("alt");
          }
          if (e.shiftKey) {
            parts.push("shift");
          }
          parts.push(keys[e.which] ? keys[e.which].toLowerCase() : e.which);
          parts = parts.sort().join("-").toLowerCase();
          if (parts === "shift-shift" || parts === "ctrl-ctrl" || parts === "alt-alt") {
            return null;
          }
          var kb = this.settings.core.keyboard, i, tmp;
          for (i in kb) {
            if (kb.hasOwnProperty(i)) {
              tmp = i;
              if (tmp !== "-" && tmp !== "+") {
                tmp = tmp.replace("--", "-MINUS").replace("+-", "-MINUS").replace("++", "-PLUS").replace("-+", "-PLUS");
                tmp = tmp.split(/-|\+/).sort().join("-").replace("MINUS", "-").replace("PLUS", "+").toLowerCase();
              }
              if (tmp === parts) {
                return kb[i];
              }
            }
          }
          return null;
        },
        /**
         * part of the destroying of an instance. Used internally.
         * @private
         * @name teardown()
         */
        teardown: function() {
          this.unbind();
          this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function() {
            return this.className.replace(/jstree[^ ]*|$/ig, "");
          });
          this.element = null;
        },
        /**
         * bind all events. Used internally.
         * @private
         * @name bind()
         */
        bind: function() {
          var word = "", tout = null, was_click = 0;
          this.element.on("dblclick.jstree", function(e) {
            if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
              return true;
            }
            if (document2.selection && document2.selection.empty) {
              document2.selection.empty();
            } else {
              if (window.getSelection) {
                var sel = window.getSelection();
                try {
                  sel.removeAllRanges();
                  sel.collapse();
                } catch (ignore) {
                }
              }
            }
          }).on("mousedown.jstree", function(e) {
            if (e.target === this.element[0]) {
              e.preventDefault();
              was_click = +/* @__PURE__ */ new Date();
            }
          }.bind(this)).on("mousedown.jstree", ".jstree-ocl", function(e) {
            e.preventDefault();
          }).on("click.jstree", ".jstree-ocl", function(e) {
            this.toggle_node(e.target);
          }.bind(this)).on("dblclick.jstree", ".jstree-anchor", function(e) {
            if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
              return true;
            }
            if (this.settings.core.dblclick_toggle) {
              this.toggle_node(e.target);
            }
          }.bind(this)).on("click.jstree", ".jstree-anchor", function(e) {
            e.preventDefault();
            if (e.currentTarget !== document2.activeElement) {
              $3(e.currentTarget).trigger("focus");
            }
            this.activate_node(e.currentTarget, e);
          }.bind(this)).on("keydown.jstree", ".jstree-anchor", function(e) {
            if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
              return true;
            }
            if (this._data.core.rtl) {
              if (e.which === 37) {
                e.which = 39;
              } else if (e.which === 39) {
                e.which = 37;
              }
            }
            var f = this._kbevent_to_func(e);
            if (f) {
              var r = f.call(this, e);
              if (r === false || r === true) {
                return r;
              }
            }
          }.bind(this)).on("load_node.jstree", function(e, data) {
            if (data.status) {
              if (data.node.id === $3.jstree.root && !this._data.core.loaded) {
                this._data.core.loaded = true;
                if (this._firstChild(this.get_container_ul()[0])) {
                  this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id);
                }
                this.trigger("loaded");
              }
              if (!this._data.core.ready) {
                setTimeout(function() {
                  if (this.element && !this.get_container_ul().find(".jstree-loading").length) {
                    this._data.core.ready = true;
                    if (this._data.core.selected.length) {
                      if (this.settings.core.expand_selected_onload) {
                        var tmp = [], i, j;
                        for (i = 0, j = this._data.core.selected.length; i < j; i++) {
                          tmp = tmp.concat(this._model.data[this._data.core.selected[i]].parents);
                        }
                        tmp = $3.vakata.array_unique(tmp);
                        for (i = 0, j = tmp.length; i < j; i++) {
                          this.open_node(tmp[i], false, 0);
                        }
                      }
                      this.trigger("changed", {
                        "action": "ready",
                        "selected": this._data.core.selected
                      });
                    }
                    this.trigger("ready");
                  }
                }.bind(this), 0);
              }
            }
          }.bind(this)).on("keypress.jstree", function(e) {
            if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
              return true;
            }
            if (tout) {
              clearTimeout(tout);
            }
            tout = setTimeout(function() {
              word = "";
            }, 500);
            var chr = String.fromCharCode(e.which).toLowerCase(), col = this.element.find(".jstree-anchor").filter(":visible"), ind = col.index(document2.activeElement) || 0, end = false;
            word += chr;
            if (word.length > 1) {
              col.slice(ind).each(function(i, v) {
                if ($3(v).text().toLowerCase().indexOf(word) === 0) {
                  $3(v).trigger("focus");
                  end = true;
                  return false;
                }
              }.bind(this));
              if (end) {
                return;
              }
              col.slice(0, ind).each(function(i, v) {
                if ($3(v).text().toLowerCase().indexOf(word) === 0) {
                  $3(v).trigger("focus");
                  end = true;
                  return false;
                }
              }.bind(this));
              if (end) {
                return;
              }
            }
            if (new RegExp("^" + chr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "+$").test(word)) {
              col.slice(ind + 1).each(function(i, v) {
                if ($3(v).text().toLowerCase().charAt(0) === chr) {
                  $3(v).trigger("focus");
                  end = true;
                  return false;
                }
              }.bind(this));
              if (end) {
                return;
              }
              col.slice(0, ind + 1).each(function(i, v) {
                if ($3(v).text().toLowerCase().charAt(0) === chr) {
                  $3(v).trigger("focus");
                  end = true;
                  return false;
                }
              }.bind(this));
              if (end) {
                return;
              }
            }
          }.bind(this)).on("init.jstree", function() {
            var s = this.settings.core.themes;
            this._data.core.themes.dots = s.dots;
            this._data.core.themes.stripes = s.stripes;
            this._data.core.themes.icons = s.icons;
            this._data.core.themes.ellipsis = s.ellipsis;
            this.set_theme(s.name || "default", s.url);
            this.set_theme_variant(s.variant);
          }.bind(this)).on("loading.jstree", function() {
            this[this._data.core.themes.dots ? "show_dots" : "hide_dots"]();
            this[this._data.core.themes.icons ? "show_icons" : "hide_icons"]();
            this[this._data.core.themes.stripes ? "show_stripes" : "hide_stripes"]();
            this[this._data.core.themes.ellipsis ? "show_ellipsis" : "hide_ellipsis"]();
          }.bind(this)).on("blur.jstree", ".jstree-anchor", function(e) {
            this._data.core.focused = null;
            $3(e.currentTarget).filter(".jstree-hovered").trigger("mouseleave");
            this.element.attr("tabindex", "0");
            $3(e.currentTarget).attr("tabindex", "-1");
          }.bind(this)).on("focus.jstree", ".jstree-anchor", function(e) {
            var tmp = this.get_node(e.currentTarget);
            if (tmp && (tmp.id || tmp.id === 0)) {
              this._data.core.focused = tmp.id;
            }
            this.element.find(".jstree-hovered").not(e.currentTarget).trigger("mouseleave");
            $3(e.currentTarget).trigger("mouseenter");
            this.element.attr("tabindex", "-1");
            $3(e.currentTarget).attr("tabindex", "0");
          }.bind(this)).on("focus.jstree", function() {
            if (+/* @__PURE__ */ new Date() - was_click > 500 && !this._data.core.focused && this.settings.core.restore_focus) {
              was_click = 0;
              var act = this.get_node(this.element.attr("aria-activedescendant"), true);
              if (act) {
                act.find("> .jstree-anchor").trigger("focus");
              }
            }
          }.bind(this)).on("mouseenter.jstree", ".jstree-anchor", function(e) {
            this.hover_node(e.currentTarget);
          }.bind(this)).on("mouseleave.jstree", ".jstree-anchor", function(e) {
            this.dehover_node(e.currentTarget);
          }.bind(this));
        },
        /**
         * part of the destroying of an instance. Used internally.
         * @private
         * @name unbind()
         */
        unbind: function() {
          this.element.off(".jstree");
          $3(document2).off(".jstree-" + this._id);
        },
        /**
         * trigger an event. Used internally.
         * @private
         * @name trigger(ev [, data])
         * @param  {String} ev the name of the event to trigger
         * @param  {Object} data additional data to pass with the event
         */
        trigger: function(ev, data) {
          if (!data) {
            data = {};
          }
          data.instance = this;
          this.element.triggerHandler(ev.replace(".jstree", "") + ".jstree", data);
        },
        /**
         * returns the jQuery extended instance container
         * @name get_container()
         * @return {jQuery}
         */
        get_container: function() {
          return this.element;
        },
        /**
         * returns the jQuery extended main UL node inside the instance container. Used internally.
         * @private
         * @name get_container_ul()
         * @return {jQuery}
         */
        get_container_ul: function() {
          return this.element.children(".jstree-children").first();
        },
        /**
         * gets string replacements (localization). Used internally.
         * @private
         * @name get_string(key)
         * @param  {String} key
         * @return {String}
         */
        get_string: function(key) {
          var a = this.settings.core.strings;
          if ($3.vakata.is_function(a)) {
            return a.call(this, key);
          }
          if (a && a[key]) {
            return a[key];
          }
          return key;
        },
        /**
         * gets the first child of a DOM node. Used internally.
         * @private
         * @name _firstChild(dom)
         * @param  {DOMElement} dom
         * @return {DOMElement}
         */
        _firstChild: function(dom) {
          dom = dom ? dom.firstChild : null;
          while (dom !== null && dom.nodeType !== 1) {
            dom = dom.nextSibling;
          }
          return dom;
        },
        /**
         * gets the next sibling of a DOM node. Used internally.
         * @private
         * @name _nextSibling(dom)
         * @param  {DOMElement} dom
         * @return {DOMElement}
         */
        _nextSibling: function(dom) {
          dom = dom ? dom.nextSibling : null;
          while (dom !== null && dom.nodeType !== 1) {
            dom = dom.nextSibling;
          }
          return dom;
        },
        /**
         * gets the previous sibling of a DOM node. Used internally.
         * @private
         * @name _previousSibling(dom)
         * @param  {DOMElement} dom
         * @return {DOMElement}
         */
        _previousSibling: function(dom) {
          dom = dom ? dom.previousSibling : null;
          while (dom !== null && dom.nodeType !== 1) {
            dom = dom.previousSibling;
          }
          return dom;
        },
        /**
         * get the JSON representation of a node (or the actual jQuery extended DOM node) by using any input (child DOM element, ID string, selector, etc)
         * @name get_node(obj [, as_dom])
         * @param  {mixed} obj
         * @param  {Boolean} as_dom
         * @return {Object|jQuery}
         */
        get_node: function(obj, as_dom) {
          if (obj && (obj.id || obj.id === 0)) {
            obj = obj.id;
          }
          if (obj instanceof $3 && obj.length && obj[0].id) {
            obj = obj[0].id;
          }
          var dom;
          try {
            if (this._model.data[obj]) {
              obj = this._model.data[obj];
            } else if (typeof obj === "string" && this._model.data[obj.replace(/^#/, "")]) {
              obj = this._model.data[obj.replace(/^#/, "")];
            } else if (typeof obj === "string" && (dom = $3("#" + obj.replace($3.jstree.idregex, "\\$&"), this.element)).length && this._model.data[dom.closest(".jstree-node").attr("id")]) {
              obj = this._model.data[dom.closest(".jstree-node").attr("id")];
            } else if ((dom = this.element.find(obj)).length && this._model.data[dom.closest(".jstree-node").attr("id")]) {
              obj = this._model.data[dom.closest(".jstree-node").attr("id")];
            } else if ((dom = this.element.find(obj)).length && dom.hasClass("jstree")) {
              obj = this._model.data[$3.jstree.root];
            } else {
              return false;
            }
            if (as_dom) {
              obj = obj.id === $3.jstree.root ? this.element : $3("#" + obj.id.replace($3.jstree.idregex, "\\$&"), this.element);
            }
            return obj;
          } catch (ex) {
            return false;
          }
        },
        /**
         * get the path to a node, either consisting of node texts, or of node IDs, optionally glued together (otherwise an array)
         * @name get_path(obj [, glue, ids])
         * @param  {mixed} obj the node
         * @param  {String} glue if you want the path as a string - pass the glue here (for example '/'), if a falsy value is supplied here, an array is returned
         * @param  {Boolean} ids if set to true build the path using ID, otherwise node text is used
         * @return {mixed}
         */
        get_path: function(obj, glue, ids) {
          obj = obj.parents ? obj : this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root || !obj.parents) {
            return false;
          }
          var i, j, p = [];
          p.push(ids ? obj.id : obj.text);
          for (i = 0, j = obj.parents.length; i < j; i++) {
            p.push(ids ? obj.parents[i] : this.get_text(obj.parents[i]));
          }
          p = p.reverse().slice(1);
          return glue ? p.join(glue) : p;
        },
        /**
         * get the next visible node that is below the `obj` node. If `strict` is set to `true` only sibling nodes are returned.
         * @name get_next_dom(obj [, strict])
         * @param  {mixed} obj
         * @param  {Boolean} strict
         * @return {jQuery}
         */
        get_next_dom: function(obj, strict) {
          var tmp;
          obj = this.get_node(obj, true);
          if (obj[0] === this.element[0]) {
            tmp = this._firstChild(this.get_container_ul()[0]);
            while (tmp && tmp.offsetHeight === 0) {
              tmp = this._nextSibling(tmp);
            }
            return tmp ? $3(tmp) : false;
          }
          if (!obj || !obj.length) {
            return false;
          }
          if (strict) {
            tmp = obj[0];
            do {
              tmp = this._nextSibling(tmp);
            } while (tmp && tmp.offsetHeight === 0);
            return tmp ? $3(tmp) : false;
          }
          if (obj.hasClass("jstree-open")) {
            tmp = this._firstChild(obj.children(".jstree-children")[0]);
            while (tmp && tmp.offsetHeight === 0) {
              tmp = this._nextSibling(tmp);
            }
            if (tmp !== null) {
              return $3(tmp);
            }
          }
          tmp = obj[0];
          do {
            tmp = this._nextSibling(tmp);
          } while (tmp && tmp.offsetHeight === 0);
          if (tmp !== null) {
            return $3(tmp);
          }
          return obj.parentsUntil(".jstree", ".jstree-node").nextAll(".jstree-node:visible").first();
        },
        /**
         * get the previous visible node that is above the `obj` node. If `strict` is set to `true` only sibling nodes are returned.
         * @name get_prev_dom(obj [, strict])
         * @param  {mixed} obj
         * @param  {Boolean} strict
         * @return {jQuery}
         */
        get_prev_dom: function(obj, strict) {
          var tmp;
          obj = this.get_node(obj, true);
          if (obj[0] === this.element[0]) {
            tmp = this.get_container_ul()[0].lastChild;
            while (tmp && tmp.offsetHeight === 0) {
              tmp = this._previousSibling(tmp);
            }
            return tmp ? $3(tmp) : false;
          }
          if (!obj || !obj.length) {
            return false;
          }
          if (strict) {
            tmp = obj[0];
            do {
              tmp = this._previousSibling(tmp);
            } while (tmp && tmp.offsetHeight === 0);
            return tmp ? $3(tmp) : false;
          }
          tmp = obj[0];
          do {
            tmp = this._previousSibling(tmp);
          } while (tmp && tmp.offsetHeight === 0);
          if (tmp !== null) {
            obj = $3(tmp);
            while (obj.hasClass("jstree-open")) {
              obj = obj.children(".jstree-children").first().children(".jstree-node:visible:last");
            }
            return obj;
          }
          tmp = obj[0].parentNode.parentNode;
          return tmp && tmp.className && tmp.className.indexOf("jstree-node") !== -1 ? $3(tmp) : false;
        },
        /**
         * get the parent ID of a node
         * @name get_parent(obj)
         * @param  {mixed} obj
         * @return {String}
         */
        get_parent: function(obj) {
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          return obj.parent;
        },
        /**
         * get a jQuery collection of all the children of a node (node must be rendered), returns false on error
         * @name get_children_dom(obj)
         * @param  {mixed} obj
         * @return {jQuery}
         */
        get_children_dom: function(obj) {
          obj = this.get_node(obj, true);
          if (obj[0] === this.element[0]) {
            return this.get_container_ul().children(".jstree-node");
          }
          if (!obj || !obj.length) {
            return false;
          }
          return obj.children(".jstree-children").children(".jstree-node");
        },
        /**
         * checks if a node has children
         * @name is_parent(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_parent: function(obj) {
          obj = this.get_node(obj);
          return obj && (obj.state.loaded === false || obj.children.length > 0);
        },
        /**
         * checks if a node is loaded (its children are available)
         * @name is_loaded(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_loaded: function(obj) {
          obj = this.get_node(obj);
          return obj && obj.state.loaded;
        },
        /**
         * check if a node is currently loading (fetching children)
         * @name is_loading(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_loading: function(obj) {
          obj = this.get_node(obj);
          return obj && obj.state && obj.state.loading;
        },
        /**
         * check if a node is opened
         * @name is_open(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_open: function(obj) {
          obj = this.get_node(obj);
          return obj && obj.state.opened;
        },
        /**
         * check if a node is in a closed state
         * @name is_closed(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_closed: function(obj) {
          obj = this.get_node(obj);
          return obj && this.is_parent(obj) && !obj.state.opened;
        },
        /**
         * check if a node has no children
         * @name is_leaf(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_leaf: function(obj) {
          return !this.is_parent(obj);
        },
        /**
         * loads a node (fetches its children using the `core.data` setting). Multiple nodes can be passed to by using an array.
         * @name load_node(obj [, callback])
         * @param  {mixed} obj
         * @param  {function} callback a function to be executed once loading is complete, the function is executed in the instance's scope and receives two arguments - the node and a boolean status
         * @return {Boolean}
         * @trigger load_node.jstree
         */
        load_node: function(obj, callback) {
          var dom = this.get_node(obj, true), k, l, i, j, c;
          if ($3.vakata.is_array(obj)) {
            this._load_nodes(obj.slice(), callback);
            return true;
          }
          obj = this.get_node(obj);
          if (!obj) {
            if (callback) {
              callback.call(this, obj, false);
            }
            return false;
          }
          if (obj.state.loaded) {
            obj.state.loaded = false;
            for (i = 0, j = obj.parents.length; i < j; i++) {
              this._model.data[obj.parents[i]].children_d = $3.vakata.array_filter(this._model.data[obj.parents[i]].children_d, function(v) {
                return $3.inArray(v, obj.children_d) === -1;
              });
            }
            for (k = 0, l = obj.children_d.length; k < l; k++) {
              if (this._model.data[obj.children_d[k]].state.selected) {
                c = true;
              }
              delete this._model.data[obj.children_d[k]];
            }
            if (c) {
              this._data.core.selected = $3.vakata.array_filter(this._data.core.selected, function(v) {
                return $3.inArray(v, obj.children_d) === -1;
              });
            }
            obj.children = [];
            obj.children_d = [];
            if (c) {
              this.trigger("changed", {
                "action": "load_node",
                "node": obj,
                "selected": this._data.core.selected
              });
            }
          }
          obj.state.failed = false;
          obj.state.loading = true;
          if (obj.id !== $3.jstree.root) {
            dom.children(".jstree-anchor").attr("aria-busy", true);
          } else {
            dom.attr("aria-busy", true);
          }
          dom.addClass("jstree-loading");
          this._load_node(obj, function(status) {
            obj = this._model.data[obj.id];
            obj.state.loading = false;
            obj.state.loaded = status;
            obj.state.failed = !obj.state.loaded;
            var dom2 = this.get_node(obj, true), i2 = 0, j2 = 0, m = this._model.data, has_children = false;
            for (i2 = 0, j2 = obj.children.length; i2 < j2; i2++) {
              if (m[obj.children[i2]] && !m[obj.children[i2]].state.hidden) {
                has_children = true;
                break;
              }
            }
            if (obj.state.loaded && dom2 && dom2.length) {
              dom2.removeClass("jstree-closed jstree-open jstree-leaf");
              if (!has_children) {
                dom2.addClass("jstree-leaf");
              } else {
                if (obj.id !== "#") {
                  dom2.addClass(obj.state.opened ? "jstree-open" : "jstree-closed");
                }
              }
            }
            if (obj.id !== $3.jstree.root) {
              dom2.children(".jstree-anchor").attr("aria-busy", false);
            } else {
              dom2.attr("aria-busy", false);
            }
            dom2.removeClass("jstree-loading");
            this.trigger("load_node", {
              "node": obj,
              "status": status
            });
            if (callback) {
              callback.call(this, obj, status);
            }
          }.bind(this));
          return true;
        },
        /**
         * load an array of nodes (will also load unavailable nodes as soon as they appear in the structure). Used internally.
         * @private
         * @name _load_nodes(nodes [, callback])
         * @param  {array} nodes
         * @param  {function} callback a function to be executed once loading is complete, the function is executed in the instance's scope and receives one argument - the array passed to _load_nodes
         */
        _load_nodes: function(nodes, callback, is_callback, force_reload) {
          var r = true, c = function() {
            this._load_nodes(nodes, callback, true);
          }, m = this._model.data, i, j, tmp = [];
          for (i = 0, j = nodes.length; i < j; i++) {
            if (m[nodes[i]] && (!m[nodes[i]].state.loaded && !m[nodes[i]].state.failed || !is_callback && force_reload)) {
              if (!this.is_loading(nodes[i])) {
                this.load_node(nodes[i], c);
              }
              r = false;
            }
          }
          if (r) {
            for (i = 0, j = nodes.length; i < j; i++) {
              if (m[nodes[i]] && m[nodes[i]].state.loaded) {
                tmp.push(nodes[i]);
              }
            }
            if (callback && !callback.done) {
              callback.call(this, tmp);
              callback.done = true;
            }
          }
        },
        /**
         * loads all unloaded nodes
         * @name load_all([obj, callback])
         * @param {mixed} obj the node to load recursively, omit to load all nodes in the tree
         * @param {function} callback a function to be executed once loading all the nodes is complete,
         * @trigger load_all.jstree
         */
        load_all: function(obj, callback) {
          if (!obj) {
            obj = $3.jstree.root;
          }
          obj = this.get_node(obj);
          if (!obj) {
            return false;
          }
          var to_load = [], m = this._model.data, c = m[obj.id].children_d, i, j;
          if (obj.state && !obj.state.loaded) {
            to_load.push(obj.id);
          }
          for (i = 0, j = c.length; i < j; i++) {
            if (m[c[i]] && m[c[i]].state && !m[c[i]].state.loaded) {
              to_load.push(c[i]);
            }
          }
          if (to_load.length) {
            this._load_nodes(to_load, function() {
              this.load_all(obj, callback);
            });
          } else {
            if (callback) {
              callback.call(this, obj);
            }
            this.trigger("load_all", {
              "node": obj
            });
          }
        },
        /**
         * handles the actual loading of a node. Used only internally.
         * @private
         * @name _load_node(obj [, callback])
         * @param  {mixed} obj
         * @param  {function} callback a function to be executed once loading is complete, the function is executed in the instance's scope and receives one argument - a boolean status
         * @return {Boolean}
         */
        _load_node: function(obj, callback) {
          var s = this.settings.core.data, t;
          var notTextOrCommentNode = function notTextOrCommentNode2() {
            return this.nodeType !== 3 && this.nodeType !== 8;
          };
          if (!s) {
            if (obj.id === $3.jstree.root) {
              return this._append_html_data(obj, this._data.core.original_container_html.clone(true), function(status) {
                callback.call(this, status);
              });
            } else {
              return callback.call(this, false);
            }
          }
          if ($3.vakata.is_function(s)) {
            return s.call(this, obj, function(d) {
              if (d === false) {
                callback.call(this, false);
              } else {
                this[typeof d === "string" ? "_append_html_data" : "_append_json_data"](obj, typeof d === "string" ? $3($3.parseHTML(d)).filter(notTextOrCommentNode) : d, function(status) {
                  callback.call(this, status);
                });
              }
            }.bind(this));
          }
          if (typeof s === "object") {
            if (s.url) {
              s = $3.extend(true, {}, s);
              if ($3.vakata.is_function(s.url)) {
                s.url = s.url.call(this, obj);
              }
              if ($3.vakata.is_function(s.data)) {
                s.data = s.data.call(this, obj);
              }
              return $3.ajax(s).done(function(d, t2, x) {
                var type = x.getResponseHeader("Content-Type");
                if (type && type.indexOf("json") !== -1 || typeof d === "object") {
                  return this._append_json_data(obj, d, function(status) {
                    callback.call(this, status);
                  });
                }
                if (type && type.indexOf("html") !== -1 || typeof d === "string") {
                  return this._append_html_data(obj, $3($3.parseHTML(d)).filter(notTextOrCommentNode), function(status) {
                    callback.call(this, status);
                  });
                }
                this._data.core.last_error = {
                  "error": "ajax",
                  "plugin": "core",
                  "id": "core_04",
                  "reason": "Could not load node",
                  "data": JSON.stringify({
                    "id": obj.id,
                    "xhr": x
                  })
                };
                this.settings.core.error.call(this, this._data.core.last_error);
                return callback.call(this, false);
              }.bind(this)).fail(function(f) {
                this._data.core.last_error = {
                  "error": "ajax",
                  "plugin": "core",
                  "id": "core_04",
                  "reason": "Could not load node",
                  "data": JSON.stringify({
                    "id": obj.id,
                    "xhr": f
                  })
                };
                callback.call(this, false);
                this.settings.core.error.call(this, this._data.core.last_error);
              }.bind(this));
            }
            if ($3.vakata.is_array(s)) {
              t = $3.extend(true, [], s);
            } else if ($3.isPlainObject(s)) {
              t = $3.extend(true, {}, s);
            } else {
              t = s;
            }
            if (obj.id === $3.jstree.root) {
              return this._append_json_data(obj, t, function(status) {
                callback.call(this, status);
              });
            } else {
              this._data.core.last_error = {
                "error": "nodata",
                "plugin": "core",
                "id": "core_05",
                "reason": "Could not load node",
                "data": JSON.stringify({
                  "id": obj.id
                })
              };
              this.settings.core.error.call(this, this._data.core.last_error);
              return callback.call(this, false);
            }
          }
          if (typeof s === "string") {
            if (obj.id === $3.jstree.root) {
              return this._append_html_data(obj, $3($3.parseHTML(s)).filter(notTextOrCommentNode), function(status) {
                callback.call(this, status);
              });
            } else {
              this._data.core.last_error = {
                "error": "nodata",
                "plugin": "core",
                "id": "core_06",
                "reason": "Could not load node",
                "data": JSON.stringify({
                  "id": obj.id
                })
              };
              this.settings.core.error.call(this, this._data.core.last_error);
              return callback.call(this, false);
            }
          }
          return callback.call(this, false);
        },
        /**
         * adds a node to the list of nodes to redraw. Used only internally.
         * @private
         * @name _node_changed(obj [, callback])
         * @param  {mixed} obj
         */
        _node_changed: function(obj) {
          obj = this.get_node(obj);
          if (obj && $3.inArray(obj.id, this._model.changed) === -1) {
            this._model.changed.push(obj.id);
          }
        },
        /**
         * appends HTML content to the tree. Used internally.
         * @private
         * @name _append_html_data(obj, data)
         * @param  {mixed} obj the node to append to
         * @param  {String} data the HTML string to parse and append
         * @trigger model.jstree, changed.jstree
         */
        _append_html_data: function(dom, data, cb) {
          dom = this.get_node(dom);
          dom.children = [];
          dom.children_d = [];
          var dat = data.is("ul") ? data.children() : data, par = dom.id, chd = [], dpc = [], m = this._model.data, p = m[par], s = this._data.core.selected.length, tmp, i, j;
          dat.each(function(i2, v) {
            tmp = this._parse_model_from_html($3(v), par, p.parents.concat());
            if (tmp) {
              chd.push(tmp);
              dpc.push(tmp);
              if (m[tmp].children_d.length) {
                dpc = dpc.concat(m[tmp].children_d);
              }
            }
          }.bind(this));
          p.children = chd;
          p.children_d = dpc;
          for (i = 0, j = p.parents.length; i < j; i++) {
            m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);
          }
          this.trigger("model", {
            "nodes": dpc,
            "parent": par
          });
          if (par !== $3.jstree.root) {
            this._node_changed(par);
            this.redraw();
          } else {
            this.get_container_ul().children(".jstree-initial-node").remove();
            this.redraw(true);
          }
          if (this._data.core.selected.length !== s) {
            this.trigger("changed", {
              "action": "model",
              "selected": this._data.core.selected
            });
          }
          cb.call(this, true);
        },
        /**
         * appends JSON content to the tree. Used internally.
         * @private
         * @name _append_json_data(obj, data)
         * @param  {mixed} obj the node to append to
         * @param  {String} data the JSON object to parse and append
         * @param  {Boolean} force_processing internal param - do not set
         * @trigger model.jstree, changed.jstree
         */
        _append_json_data: function(dom, data, cb, force_processing) {
          if (this.element === null) {
            return;
          }
          dom = this.get_node(dom);
          dom.children = [];
          dom.children_d = [];
          if (data.d) {
            data = data.d;
            if (typeof data === "string") {
              data = JSON.parse(data);
            }
          }
          if (!$3.vakata.is_array(data)) {
            data = [data];
          }
          var w = null, args = {
            "df": this._model.default_state,
            "dat": data,
            "par": dom.id,
            "m": this._model.data,
            "t_id": this._id,
            "t_cnt": this._cnt,
            "sel": this._data.core.selected
          }, inst = this, func = function(data2, undefined3) {
            if (data2.data) {
              data2 = data2.data;
            }
            var dat = data2.dat, par = data2.par, chd = [], dpc = [], add = [], df = data2.df, t_id = data2.t_id, t_cnt = data2.t_cnt, m = data2.m, p = m[par], sel = data2.sel, tmp, i, j, rslt2, parse_flat = function(d, p2, ps) {
              if (!ps) {
                ps = [];
              } else {
                ps = ps.concat();
              }
              if (p2) {
                ps.unshift(p2);
              }
              var tid = d.id.toString(), i2, j2, c, e, tmp2 = {
                id: tid,
                text: d.text || "",
                icon: d.icon !== undefined3 ? d.icon : true,
                parent: p2,
                parents: ps,
                children: d.children || [],
                children_d: d.children_d || [],
                data: d.data,
                state: {},
                li_attr: {
                  id: false
                },
                a_attr: {
                  href: "#"
                },
                original: false
              };
              for (i2 in df) {
                if (df.hasOwnProperty(i2)) {
                  tmp2.state[i2] = df[i2];
                }
              }
              if (d && d.data && d.data.jstree && d.data.jstree.icon) {
                tmp2.icon = d.data.jstree.icon;
              }
              if (tmp2.icon === undefined3 || tmp2.icon === null || tmp2.icon === "") {
                tmp2.icon = true;
              }
              if (d && d.data) {
                tmp2.data = d.data;
                if (d.data.jstree) {
                  for (i2 in d.data.jstree) {
                    if (d.data.jstree.hasOwnProperty(i2)) {
                      tmp2.state[i2] = d.data.jstree[i2];
                    }
                  }
                }
              }
              if (d && typeof d.state === "object") {
                for (i2 in d.state) {
                  if (d.state.hasOwnProperty(i2)) {
                    tmp2.state[i2] = d.state[i2];
                  }
                }
              }
              if (d && typeof d.li_attr === "object") {
                for (i2 in d.li_attr) {
                  if (d.li_attr.hasOwnProperty(i2)) {
                    tmp2.li_attr[i2] = d.li_attr[i2];
                  }
                }
              }
              if (!tmp2.li_attr.id) {
                tmp2.li_attr.id = tid;
              }
              if (d && typeof d.a_attr === "object") {
                for (i2 in d.a_attr) {
                  if (d.a_attr.hasOwnProperty(i2)) {
                    tmp2.a_attr[i2] = d.a_attr[i2];
                  }
                }
              }
              if (d && d.children && d.children === true) {
                tmp2.state.loaded = false;
                tmp2.children = [];
                tmp2.children_d = [];
              }
              m[tmp2.id] = tmp2;
              for (i2 = 0, j2 = tmp2.children.length; i2 < j2; i2++) {
                c = parse_flat(m[tmp2.children[i2]], tmp2.id, ps);
                e = m[c];
                tmp2.children_d.push(c);
                if (e.children_d.length) {
                  tmp2.children_d = tmp2.children_d.concat(e.children_d);
                }
              }
              delete d.data;
              delete d.children;
              m[tmp2.id].original = d;
              if (tmp2.state.selected) {
                add.push(tmp2.id);
              }
              return tmp2.id;
            }, parse_nest = function(d, p2, ps) {
              if (!ps) {
                ps = [];
              } else {
                ps = ps.concat();
              }
              if (p2) {
                ps.unshift(p2);
              }
              var tid = false, i2, j2, c, e, tmp2;
              do {
                tid = "j" + t_id + "_" + ++t_cnt;
              } while (m[tid]);
              tmp2 = {
                id: false,
                text: typeof d === "string" ? d : "",
                icon: typeof d === "object" && d.icon !== undefined3 ? d.icon : true,
                parent: p2,
                parents: ps,
                children: [],
                children_d: [],
                data: null,
                state: {},
                li_attr: {
                  id: false
                },
                a_attr: {
                  href: "#"
                },
                original: false
              };
              for (i2 in df) {
                if (df.hasOwnProperty(i2)) {
                  tmp2.state[i2] = df[i2];
                }
              }
              if (d && (d.id || d.id === 0)) {
                tmp2.id = d.id.toString();
              }
              if (d && d.text) {
                tmp2.text = d.text;
              }
              if (d && d.data && d.data.jstree && d.data.jstree.icon) {
                tmp2.icon = d.data.jstree.icon;
              }
              if (tmp2.icon === undefined3 || tmp2.icon === null || tmp2.icon === "") {
                tmp2.icon = true;
              }
              if (d && d.data) {
                tmp2.data = d.data;
                if (d.data.jstree) {
                  for (i2 in d.data.jstree) {
                    if (d.data.jstree.hasOwnProperty(i2)) {
                      tmp2.state[i2] = d.data.jstree[i2];
                    }
                  }
                }
              }
              if (d && typeof d.state === "object") {
                for (i2 in d.state) {
                  if (d.state.hasOwnProperty(i2)) {
                    tmp2.state[i2] = d.state[i2];
                  }
                }
              }
              if (d && typeof d.li_attr === "object") {
                for (i2 in d.li_attr) {
                  if (d.li_attr.hasOwnProperty(i2)) {
                    tmp2.li_attr[i2] = d.li_attr[i2];
                  }
                }
              }
              if (tmp2.li_attr.id && !(tmp2.id || tmp2.id === 0)) {
                tmp2.id = tmp2.li_attr.id.toString();
              }
              if (!(tmp2.id || tmp2.id === 0)) {
                tmp2.id = tid;
              }
              if (!tmp2.li_attr.id) {
                tmp2.li_attr.id = tmp2.id;
              }
              if (d && typeof d.a_attr === "object") {
                for (i2 in d.a_attr) {
                  if (d.a_attr.hasOwnProperty(i2)) {
                    tmp2.a_attr[i2] = d.a_attr[i2];
                  }
                }
              }
              if (d && d.children && d.children.length) {
                for (i2 = 0, j2 = d.children.length; i2 < j2; i2++) {
                  c = parse_nest(d.children[i2], tmp2.id, ps);
                  e = m[c];
                  tmp2.children.push(c);
                  if (e.children_d.length) {
                    tmp2.children_d = tmp2.children_d.concat(e.children_d);
                  }
                }
                tmp2.children_d = tmp2.children_d.concat(tmp2.children);
              }
              if (d && d.children && d.children === true) {
                tmp2.state.loaded = false;
                tmp2.children = [];
                tmp2.children_d = [];
              }
              delete d.data;
              delete d.children;
              tmp2.original = d;
              m[tmp2.id] = tmp2;
              if (tmp2.state.selected) {
                add.push(tmp2.id);
              }
              return tmp2.id;
            };
            if (dat.length && dat[0].id !== undefined3 && dat[0].parent !== undefined3) {
              for (i = 0, j = dat.length; i < j; i++) {
                if (!dat[i].children) {
                  dat[i].children = [];
                }
                if (!dat[i].state) {
                  dat[i].state = {};
                }
                m[dat[i].id.toString()] = dat[i];
              }
              for (i = 0, j = dat.length; i < j; i++) {
                if (!m[dat[i].parent.toString()]) {
                  if (typeof inst !== "undefined") {
                    inst._data.core.last_error = {
                      "error": "parse",
                      "plugin": "core",
                      "id": "core_07",
                      "reason": "Node with invalid parent",
                      "data": JSON.stringify({
                        "id": dat[i].id.toString(),
                        "parent": dat[i].parent.toString()
                      })
                    };
                    inst.settings.core.error.call(inst, inst._data.core.last_error);
                  }
                  continue;
                }
                m[dat[i].parent.toString()].children.push(dat[i].id.toString());
                p.children_d.push(dat[i].id.toString());
              }
              for (i = 0, j = p.children.length; i < j; i++) {
                tmp = parse_flat(m[p.children[i]], par, p.parents.concat());
                dpc.push(tmp);
                if (m[tmp].children_d.length) {
                  dpc = dpc.concat(m[tmp].children_d);
                }
              }
              for (i = 0, j = p.parents.length; i < j; i++) {
                m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);
              }
              rslt2 = {
                "cnt": t_cnt,
                "mod": m,
                "sel": sel,
                "par": par,
                "dpc": dpc,
                "add": add
              };
            } else {
              for (i = 0, j = dat.length; i < j; i++) {
                tmp = parse_nest(dat[i], par, p.parents.concat());
                if (tmp) {
                  chd.push(tmp);
                  dpc.push(tmp);
                  if (m[tmp].children_d.length) {
                    dpc = dpc.concat(m[tmp].children_d);
                  }
                }
              }
              p.children = chd;
              p.children_d = dpc;
              for (i = 0, j = p.parents.length; i < j; i++) {
                m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);
              }
              rslt2 = {
                "cnt": t_cnt,
                "mod": m,
                "sel": sel,
                "par": par,
                "dpc": dpc,
                "add": add
              };
            }
            if (typeof window === "undefined" || typeof window.document === "undefined") {
              postMessage(rslt2);
            } else {
              return rslt2;
            }
          }, rslt = function(rslt2, worker) {
            if (this.element === null) {
              return;
            }
            this._cnt = rslt2.cnt;
            var i, m = this._model.data;
            for (i in m) {
              if (m.hasOwnProperty(i) && m[i].state && m[i].state.loading && rslt2.mod[i]) {
                rslt2.mod[i].state.loading = true;
              }
            }
            this._model.data = rslt2.mod;
            if (worker) {
              var j, a = rslt2.add, r = rslt2.sel, s = this._data.core.selected.slice();
              m = this._model.data;
              if (r.length !== s.length || $3.vakata.array_unique(r.concat(s)).length !== r.length) {
                for (i = 0, j = r.length; i < j; i++) {
                  if ($3.inArray(r[i], a) === -1 && $3.inArray(r[i], s) === -1) {
                    m[r[i]].state.selected = false;
                  }
                }
                for (i = 0, j = s.length; i < j; i++) {
                  if ($3.inArray(s[i], r) === -1) {
                    m[s[i]].state.selected = true;
                  }
                }
              }
            }
            if (rslt2.add.length) {
              this._data.core.selected = this._data.core.selected.concat(rslt2.add);
            }
            this.trigger("model", {
              "nodes": rslt2.dpc,
              "parent": rslt2.par
            });
            if (rslt2.par !== $3.jstree.root) {
              this._node_changed(rslt2.par);
              this.redraw();
            } else {
              this.redraw(true);
            }
            if (rslt2.add.length) {
              this.trigger("changed", {
                "action": "model",
                "selected": this._data.core.selected
              });
            }
            if (!worker && setImmediate) {
              setImmediate(function() {
                cb.call(inst, true);
              });
            } else {
              cb.call(inst, true);
            }
          };
          if (this.settings.core.worker && window.Blob && window.URL && window.Worker) {
            try {
              if (this._wrk === null) {
                this._wrk = window.URL.createObjectURL(new window.Blob(["self.onmessage = " + func.toString()], {
                  type: "text/javascript"
                }));
              }
              if (!this._data.core.working || force_processing) {
                this._data.core.working = true;
                w = new window.Worker(this._wrk);
                w.onmessage = function(e) {
                  rslt.call(this, e.data, true);
                  try {
                    w.terminate();
                    w = null;
                  } catch (ignore) {
                  }
                  if (this._data.core.worker_queue.length) {
                    this._append_json_data.apply(this, this._data.core.worker_queue.shift());
                  } else {
                    this._data.core.working = false;
                  }
                }.bind(this);
                w.onerror = function(e) {
                  rslt.call(this, func(args), false);
                  if (this._data.core.worker_queue.length) {
                    this._append_json_data.apply(this, this._data.core.worker_queue.shift());
                  } else {
                    this._data.core.working = false;
                  }
                }.bind(this);
                if (!args.par) {
                  if (this._data.core.worker_queue.length) {
                    this._append_json_data.apply(this, this._data.core.worker_queue.shift());
                  } else {
                    this._data.core.working = false;
                  }
                } else {
                  w.postMessage(args);
                }
              } else {
                this._data.core.worker_queue.push([dom, data, cb, true]);
              }
            } catch (e) {
              rslt.call(this, func(args), false);
              if (this._data.core.worker_queue.length) {
                this._append_json_data.apply(this, this._data.core.worker_queue.shift());
              } else {
                this._data.core.working = false;
              }
            }
          } else {
            rslt.call(this, func(args), false);
          }
        },
        /**
         * parses a node from a jQuery object and appends them to the in memory tree model. Used internally.
         * @private
         * @name _parse_model_from_html(d [, p, ps])
         * @param  {jQuery} d the jQuery object to parse
         * @param  {String} p the parent ID
         * @param  {Array} ps list of all parents
         * @return {String} the ID of the object added to the model
         */
        _parse_model_from_html: function(d, p, ps) {
          if (!ps) {
            ps = [];
          } else {
            ps = [].concat(ps);
          }
          if (p) {
            ps.unshift(p);
          }
          var c, e, m = this._model.data, data = {
            id: false,
            text: false,
            icon: true,
            parent: p,
            parents: ps,
            children: [],
            children_d: [],
            data: null,
            state: {},
            li_attr: {
              id: false
            },
            a_attr: {
              href: "#"
            },
            original: false
          }, i, tmp, tid;
          for (i in this._model.default_state) {
            if (this._model.default_state.hasOwnProperty(i)) {
              data.state[i] = this._model.default_state[i];
            }
          }
          tmp = $3.vakata.attributes(d, true);
          $3.each(tmp, function(i2, v) {
            v = $3.vakata.trim(v);
            if (!v.length) {
              return true;
            }
            data.li_attr[i2] = v;
            if (i2 === "id") {
              data.id = v.toString();
            }
          });
          tmp = d.children("a").first();
          if (tmp.length) {
            tmp = $3.vakata.attributes(tmp, true);
            $3.each(tmp, function(i2, v) {
              v = $3.vakata.trim(v);
              if (v.length) {
                data.a_attr[i2] = v;
              }
            });
          }
          tmp = d.children("a").first().length ? d.children("a").first().clone() : d.clone();
          tmp.children("ins, i, ul").remove();
          tmp = tmp.html();
          tmp = $3("<div></div>").html(tmp);
          data.text = this.settings.core.force_text ? tmp.text() : tmp.html();
          tmp = d.data();
          data.data = tmp ? $3.extend(true, {}, tmp) : null;
          data.state.opened = d.hasClass("jstree-open");
          data.state.selected = d.children("a").hasClass("jstree-clicked");
          data.state.disabled = d.children("a").hasClass("jstree-disabled");
          if (data.data && data.data.jstree) {
            for (i in data.data.jstree) {
              if (data.data.jstree.hasOwnProperty(i)) {
                data.state[i] = data.data.jstree[i];
              }
            }
          }
          tmp = d.children("a").children(".jstree-themeicon");
          if (tmp.length) {
            data.icon = tmp.hasClass("jstree-themeicon-hidden") ? false : tmp.attr("rel");
          }
          if (data.state.icon !== undefined2) {
            data.icon = data.state.icon;
          }
          if (data.icon === undefined2 || data.icon === null || data.icon === "") {
            data.icon = true;
          }
          tmp = d.children("ul").children("li");
          do {
            tid = "j" + this._id + "_" + ++this._cnt;
          } while (m[tid]);
          data.id = data.li_attr.id ? data.li_attr.id.toString() : tid;
          if (tmp.length) {
            tmp.each(function(i2, v) {
              c = this._parse_model_from_html($3(v), data.id, ps);
              e = this._model.data[c];
              data.children.push(c);
              if (e.children_d.length) {
                data.children_d = data.children_d.concat(e.children_d);
              }
            }.bind(this));
            data.children_d = data.children_d.concat(data.children);
          } else {
            if (d.hasClass("jstree-closed")) {
              data.state.loaded = false;
            }
          }
          if (data.li_attr["class"]) {
            data.li_attr["class"] = data.li_attr["class"].replace("jstree-closed", "").replace("jstree-open", "");
          }
          if (data.a_attr["class"]) {
            data.a_attr["class"] = data.a_attr["class"].replace("jstree-clicked", "").replace("jstree-disabled", "");
          }
          m[data.id] = data;
          if (data.state.selected) {
            this._data.core.selected.push(data.id);
          }
          return data.id;
        },
        /**
         * parses a node from a JSON object (used when dealing with flat data, which has no nesting of children, but has id and parent properties) and appends it to the in memory tree model. Used internally.
         * @private
         * @name _parse_model_from_flat_json(d [, p, ps])
         * @param  {Object} d the JSON object to parse
         * @param  {String} p the parent ID
         * @param  {Array} ps list of all parents
         * @return {String} the ID of the object added to the model
         */
        _parse_model_from_flat_json: function(d, p, ps) {
          if (!ps) {
            ps = [];
          } else {
            ps = ps.concat();
          }
          if (p) {
            ps.unshift(p);
          }
          var tid = d.id.toString(), m = this._model.data, df = this._model.default_state, i, j, c, e, tmp = {
            id: tid,
            text: d.text || "",
            icon: d.icon !== undefined2 ? d.icon : true,
            parent: p,
            parents: ps,
            children: d.children || [],
            children_d: d.children_d || [],
            data: d.data,
            state: {},
            li_attr: {
              id: false
            },
            a_attr: {
              href: "#"
            },
            original: false
          };
          for (i in df) {
            if (df.hasOwnProperty(i)) {
              tmp.state[i] = df[i];
            }
          }
          if (d && d.data && d.data.jstree && d.data.jstree.icon) {
            tmp.icon = d.data.jstree.icon;
          }
          if (tmp.icon === undefined2 || tmp.icon === null || tmp.icon === "") {
            tmp.icon = true;
          }
          if (d && d.data) {
            tmp.data = d.data;
            if (d.data.jstree) {
              for (i in d.data.jstree) {
                if (d.data.jstree.hasOwnProperty(i)) {
                  tmp.state[i] = d.data.jstree[i];
                }
              }
            }
          }
          if (d && typeof d.state === "object") {
            for (i in d.state) {
              if (d.state.hasOwnProperty(i)) {
                tmp.state[i] = d.state[i];
              }
            }
          }
          if (d && typeof d.li_attr === "object") {
            for (i in d.li_attr) {
              if (d.li_attr.hasOwnProperty(i)) {
                tmp.li_attr[i] = d.li_attr[i];
              }
            }
          }
          if (!tmp.li_attr.id) {
            tmp.li_attr.id = tid;
          }
          if (d && typeof d.a_attr === "object") {
            for (i in d.a_attr) {
              if (d.a_attr.hasOwnProperty(i)) {
                tmp.a_attr[i] = d.a_attr[i];
              }
            }
          }
          if (d && d.children && d.children === true) {
            tmp.state.loaded = false;
            tmp.children = [];
            tmp.children_d = [];
          }
          m[tmp.id] = tmp;
          for (i = 0, j = tmp.children.length; i < j; i++) {
            c = this._parse_model_from_flat_json(m[tmp.children[i]], tmp.id, ps);
            e = m[c];
            tmp.children_d.push(c);
            if (e.children_d.length) {
              tmp.children_d = tmp.children_d.concat(e.children_d);
            }
          }
          delete d.data;
          delete d.children;
          m[tmp.id].original = d;
          if (tmp.state.selected) {
            this._data.core.selected.push(tmp.id);
          }
          return tmp.id;
        },
        /**
         * parses a node from a JSON object and appends it to the in memory tree model. Used internally.
         * @private
         * @name _parse_model_from_json(d [, p, ps])
         * @param  {Object} d the JSON object to parse
         * @param  {String} p the parent ID
         * @param  {Array} ps list of all parents
         * @return {String} the ID of the object added to the model
         */
        _parse_model_from_json: function(d, p, ps) {
          if (!ps) {
            ps = [];
          } else {
            ps = ps.concat();
          }
          if (p) {
            ps.unshift(p);
          }
          var tid = false, i, j, c, e, m = this._model.data, df = this._model.default_state, tmp;
          do {
            tid = "j" + this._id + "_" + ++this._cnt;
          } while (m[tid]);
          tmp = {
            id: false,
            text: typeof d === "string" ? d : "",
            icon: typeof d === "object" && d.icon !== undefined2 ? d.icon : true,
            parent: p,
            parents: ps,
            children: [],
            children_d: [],
            data: null,
            state: {},
            li_attr: {
              id: false
            },
            a_attr: {
              href: "#"
            },
            original: false
          };
          for (i in df) {
            if (df.hasOwnProperty(i)) {
              tmp.state[i] = df[i];
            }
          }
          if (d && (d.id || d.id === 0)) {
            tmp.id = d.id.toString();
          }
          if (d && d.text) {
            tmp.text = d.text;
          }
          if (d && d.data && d.data.jstree && d.data.jstree.icon) {
            tmp.icon = d.data.jstree.icon;
          }
          if (tmp.icon === undefined2 || tmp.icon === null || tmp.icon === "") {
            tmp.icon = true;
          }
          if (d && d.data) {
            tmp.data = d.data;
            if (d.data.jstree) {
              for (i in d.data.jstree) {
                if (d.data.jstree.hasOwnProperty(i)) {
                  tmp.state[i] = d.data.jstree[i];
                }
              }
            }
          }
          if (d && typeof d.state === "object") {
            for (i in d.state) {
              if (d.state.hasOwnProperty(i)) {
                tmp.state[i] = d.state[i];
              }
            }
          }
          if (d && typeof d.li_attr === "object") {
            for (i in d.li_attr) {
              if (d.li_attr.hasOwnProperty(i)) {
                tmp.li_attr[i] = d.li_attr[i];
              }
            }
          }
          if (tmp.li_attr.id && !(tmp.id || tmp.id === 0)) {
            tmp.id = tmp.li_attr.id.toString();
          }
          if (!(tmp.id || tmp.id === 0)) {
            tmp.id = tid;
          }
          if (!tmp.li_attr.id) {
            tmp.li_attr.id = tmp.id;
          }
          if (d && typeof d.a_attr === "object") {
            for (i in d.a_attr) {
              if (d.a_attr.hasOwnProperty(i)) {
                tmp.a_attr[i] = d.a_attr[i];
              }
            }
          }
          if (d && d.children && d.children.length) {
            for (i = 0, j = d.children.length; i < j; i++) {
              c = this._parse_model_from_json(d.children[i], tmp.id, ps);
              e = m[c];
              tmp.children.push(c);
              if (e.children_d.length) {
                tmp.children_d = tmp.children_d.concat(e.children_d);
              }
            }
            tmp.children_d = tmp.children.concat(tmp.children_d);
          }
          if (d && d.children && d.children === true) {
            tmp.state.loaded = false;
            tmp.children = [];
            tmp.children_d = [];
          }
          delete d.data;
          delete d.children;
          tmp.original = d;
          m[tmp.id] = tmp;
          if (tmp.state.selected) {
            this._data.core.selected.push(tmp.id);
          }
          return tmp.id;
        },
        /**
         * redraws all nodes that need to be redrawn. Used internally.
         * @private
         * @name _redraw()
         * @trigger redraw.jstree
         */
        _redraw: function() {
          var nodes = this._model.force_full_redraw ? this._model.data[$3.jstree.root].children.concat([]) : this._model.changed.concat([]), f = document2.createElement("UL"), tmp, i, j, fe = this._data.core.focused;
          for (i = 0, j = nodes.length; i < j; i++) {
            tmp = this.redraw_node(nodes[i], true, this._model.force_full_redraw);
            if (tmp && this._model.force_full_redraw) {
              f.appendChild(tmp);
            }
          }
          if (this._model.force_full_redraw) {
            f.className = this.get_container_ul()[0].className;
            f.setAttribute("role", "presentation");
            this.element.empty().append(f);
          }
          if (fe !== null && this.settings.core.restore_focus) {
            tmp = this.get_node(fe, true);
            if (tmp && tmp.length && tmp.children(".jstree-anchor")[0] !== document2.activeElement) {
              tmp.children(".jstree-anchor").trigger("focus");
            } else {
              this._data.core.focused = null;
            }
          }
          this._model.force_full_redraw = false;
          this._model.changed = [];
          this.trigger("redraw", {
            "nodes": nodes
          });
        },
        /**
         * redraws all nodes that need to be redrawn or optionally - the whole tree
         * @name redraw([full])
         * @param {Boolean} full if set to `true` all nodes are redrawn.
         */
        redraw: function(full) {
          if (full) {
            this._model.force_full_redraw = true;
          }
          this._redraw();
        },
        /**
         * redraws a single node's children. Used internally.
         * @private
         * @name draw_children(node)
         * @param {mixed} node the node whose children will be redrawn
         */
        draw_children: function(node) {
          var obj = this.get_node(node), i = false, j = false, k = false, d = document2;
          if (!obj) {
            return false;
          }
          if (obj.id === $3.jstree.root) {
            return this.redraw(true);
          }
          node = this.get_node(node, true);
          if (!node || !node.length) {
            return false;
          }
          node.children(".jstree-children").remove();
          node = node[0];
          if (obj.children.length && obj.state.loaded) {
            k = d.createElement("UL");
            k.setAttribute("role", "group");
            k.className = "jstree-children";
            for (i = 0, j = obj.children.length; i < j; i++) {
              k.appendChild(this.redraw_node(obj.children[i], true, true));
            }
            node.appendChild(k);
          }
        },
        /**
         * redraws a single node. Used internally.
         * @private
         * @name redraw_node(node, deep, is_callback, force_render)
         * @param {mixed} node the node to redraw
         * @param {Boolean} deep should child nodes be redrawn too
         * @param {Boolean} is_callback is this a recursion call
         * @param {Boolean} force_render should children of closed parents be drawn anyway
         */
        redraw_node: function(node, deep, is_callback, force_render) {
          var obj = this.get_node(node), par = false, ind = false, old = false, i = false, j = false, k = false, c = "", d = document2, m = this._model.data, f = false, s = false, tmp = null, t = 0, l = 0, has_children = false, last_sibling = false;
          if (!obj) {
            return false;
          }
          if (obj.id === $3.jstree.root) {
            return this.redraw(true);
          }
          deep = deep || obj.children.length === 0;
          node = !document2.querySelector ? document2.getElementById(obj.id) : this.element[0].querySelector("#" + ("0123456789".indexOf(obj.id[0]) !== -1 ? "\\3" + obj.id[0] + " " + obj.id.substr(1).replace($3.jstree.idregex, "\\$&") : obj.id.replace($3.jstree.idregex, "\\$&")));
          if (!node) {
            deep = true;
            if (!is_callback) {
              par = obj.parent !== $3.jstree.root ? $3("#" + obj.parent.replace($3.jstree.idregex, "\\$&"), this.element)[0] : null;
              if (par !== null && (!par || !m[obj.parent].state.opened)) {
                return false;
              }
              ind = $3.inArray(obj.id, par === null ? m[$3.jstree.root].children : m[obj.parent].children);
            }
          } else {
            node = $3(node);
            if (!is_callback) {
              par = node.parent().parent()[0];
              if (par === this.element[0]) {
                par = null;
              }
              ind = node.index();
            }
            if (!deep && obj.children.length && !node.children(".jstree-children").length) {
              deep = true;
            }
            if (!deep) {
              old = node.children(".jstree-children")[0];
            }
            f = node.children(".jstree-anchor")[0] === document2.activeElement;
            node.remove();
          }
          node = this._data.core.node.cloneNode(true);
          c = "jstree-node ";
          for (i in obj.li_attr) {
            if (obj.li_attr.hasOwnProperty(i)) {
              if (i === "id") {
                continue;
              }
              if (i !== "class") {
                node.setAttribute(i, obj.li_attr[i]);
              } else {
                c += obj.li_attr[i];
              }
            }
          }
          if (!obj.a_attr.id) {
            obj.a_attr.id = obj.id + "_anchor";
          }
          node.childNodes[1].setAttribute("aria-selected", !!obj.state.selected);
          node.childNodes[1].setAttribute("aria-level", obj.parents.length);
          if (this.settings.core.compute_elements_positions) {
            node.childNodes[1].setAttribute("aria-setsize", m[obj.parent].children.length);
            node.childNodes[1].setAttribute("aria-posinset", m[obj.parent].children.indexOf(obj.id) + 1);
          }
          if (obj.state.disabled) {
            node.childNodes[1].setAttribute("aria-disabled", true);
          }
          for (i = 0, j = obj.children.length; i < j; i++) {
            if (!m[obj.children[i]].state.hidden) {
              has_children = true;
              break;
            }
          }
          if (obj.parent !== null && m[obj.parent] && !obj.state.hidden) {
            i = $3.inArray(obj.id, m[obj.parent].children);
            last_sibling = obj.id;
            if (i !== -1) {
              i++;
              for (j = m[obj.parent].children.length; i < j; i++) {
                if (!m[m[obj.parent].children[i]].state.hidden) {
                  last_sibling = m[obj.parent].children[i];
                }
                if (last_sibling !== obj.id) {
                  break;
                }
              }
            }
          }
          if (obj.state.hidden) {
            c += " jstree-hidden";
          }
          if (obj.state.loading) {
            c += " jstree-loading";
          }
          if (obj.state.loaded && !has_children) {
            c += " jstree-leaf";
          } else {
            c += obj.state.opened && obj.state.loaded ? " jstree-open" : " jstree-closed";
            node.childNodes[1].setAttribute("aria-expanded", obj.state.opened && obj.state.loaded);
          }
          if (last_sibling === obj.id) {
            c += " jstree-last";
          }
          node.id = obj.id;
          node.className = c;
          c = (obj.state.selected ? " jstree-clicked" : "") + (obj.state.disabled ? " jstree-disabled" : "");
          for (j in obj.a_attr) {
            if (obj.a_attr.hasOwnProperty(j)) {
              if (j === "href" && obj.a_attr[j] === "#") {
                continue;
              }
              if (j !== "class") {
                node.childNodes[1].setAttribute(j, obj.a_attr[j]);
              } else {
                c += " " + obj.a_attr[j];
              }
            }
          }
          if (c.length) {
            node.childNodes[1].className = "jstree-anchor " + c;
          }
          if (obj.icon && obj.icon !== true || obj.icon === false) {
            if (obj.icon === false) {
              node.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden";
            } else if (obj.icon.indexOf("/") === -1 && obj.icon.indexOf(".") === -1) {
              node.childNodes[1].childNodes[0].className += " " + obj.icon + " jstree-themeicon-custom";
            } else {
              node.childNodes[1].childNodes[0].style.backgroundImage = 'url("' + obj.icon + '")';
              node.childNodes[1].childNodes[0].style.backgroundPosition = "center center";
              node.childNodes[1].childNodes[0].style.backgroundSize = "auto";
              node.childNodes[1].childNodes[0].className += " jstree-themeicon-custom";
            }
          }
          if (this.settings.core.force_text) {
            node.childNodes[1].appendChild(d.createTextNode(obj.text));
          } else {
            node.childNodes[1].innerHTML += obj.text;
          }
          if (deep && obj.children.length && (obj.state.opened || force_render) && obj.state.loaded) {
            k = d.createElement("UL");
            k.setAttribute("role", "group");
            k.className = "jstree-children";
            for (i = 0, j = obj.children.length; i < j; i++) {
              k.appendChild(this.redraw_node(obj.children[i], deep, true));
            }
            node.appendChild(k);
          }
          if (old) {
            node.appendChild(old);
          }
          if (!is_callback) {
            if (!par) {
              par = this.element[0];
            }
            for (i = 0, j = par.childNodes.length; i < j; i++) {
              if (par.childNodes[i] && par.childNodes[i].className && par.childNodes[i].className.indexOf("jstree-children") !== -1) {
                tmp = par.childNodes[i];
                break;
              }
            }
            if (!tmp) {
              tmp = d.createElement("UL");
              tmp.setAttribute("role", "group");
              tmp.className = "jstree-children";
              par.appendChild(tmp);
            }
            par = tmp;
            if (ind < par.childNodes.length) {
              par.insertBefore(node, par.childNodes[ind]);
            } else {
              par.appendChild(node);
            }
            if (f) {
              t = this.element[0].scrollTop;
              l = this.element[0].scrollLeft;
              node.childNodes[1].focus();
              this.element[0].scrollTop = t;
              this.element[0].scrollLeft = l;
            }
          }
          if (obj.state.opened && !obj.state.loaded) {
            obj.state.opened = false;
            setTimeout(function() {
              this.open_node(obj.id, false, 0);
            }.bind(this), 0);
          }
          return node;
        },
        /**
         * opens a node, revealing its children. If the node is not loaded it will be loaded and opened once ready.
         * @name open_node(obj [, callback, animation])
         * @param {mixed} obj the node to open
         * @param {Function} callback a function to execute once the node is opened
         * @param {Number} animation the animation duration in milliseconds when opening the node (overrides the `core.animation` setting). Use `false` for no animation.
         * @trigger open_node.jstree, after_open.jstree, before_open.jstree
         */
        open_node: function(obj, callback, animation) {
          var t1, t2, d, t;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.open_node(obj[t1], callback, animation);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          animation = animation === undefined2 ? this.settings.core.animation : animation;
          if (!this.is_closed(obj)) {
            if (callback) {
              callback.call(this, obj, false);
            }
            return false;
          }
          if (!this.is_loaded(obj)) {
            if (this.is_loading(obj)) {
              return setTimeout(function() {
                this.open_node(obj, callback, animation);
              }.bind(this), 500);
            }
            this.load_node(obj, function(o, ok) {
              return ok ? this.open_node(o, callback, animation) : callback ? callback.call(this, o, false) : false;
            });
          } else {
            d = this.get_node(obj, true);
            t = this;
            if (d.length) {
              if (animation && d.children(".jstree-children").length) {
                d.children(".jstree-children").stop(true, true);
              }
              if (obj.children.length && !this._firstChild(d.children(".jstree-children")[0])) {
                this.draw_children(obj);
              }
              if (!animation) {
                this.trigger("before_open", {
                  "node": obj
                });
                d[0].className = d[0].className.replace("jstree-closed", "jstree-open");
                d[0].childNodes[1].setAttribute("aria-expanded", true);
              } else {
                this.trigger("before_open", {
                  "node": obj
                });
                d.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded", true).end().children(".jstree-children").stop(true, true).slideDown(animation, function() {
                  this.style.display = "";
                  if (t.element) {
                    t.trigger("after_open", {
                      "node": obj
                    });
                  }
                });
              }
            }
            obj.state.opened = true;
            if (callback) {
              callback.call(this, obj, true);
            }
            if (!d.length) {
              this.trigger("before_open", {
                "node": obj
              });
            }
            this.trigger("open_node", {
              "node": obj
            });
            if (!animation || !d.length) {
              this.trigger("after_open", {
                "node": obj
              });
            }
            return true;
          }
        },
        /**
         * opens every parent of a node (node should be loaded)
         * @name _open_to(obj)
         * @param {mixed} obj the node to reveal
         * @private
         */
        _open_to: function(obj) {
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          var i, j, p = obj.parents;
          for (i = 0, j = p.length; i < j; i += 1) {
            if (i !== $3.jstree.root) {
              this.open_node(p[i], false, 0);
            }
          }
          return $3("#" + obj.id.replace($3.jstree.idregex, "\\$&"), this.element);
        },
        /**
         * closes a node, hiding its children
         * @name close_node(obj [, animation])
         * @param {mixed} obj the node to close
         * @param {Number} animation the animation duration in milliseconds when closing the node (overrides the `core.animation` setting). Use `false` for no animation.
         * @trigger close_node.jstree, after_close.jstree
         */
        close_node: function(obj, animation) {
          var t1, t2, t, d;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.close_node(obj[t1], animation);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          if (this.is_closed(obj)) {
            return false;
          }
          animation = animation === undefined2 ? this.settings.core.animation : animation;
          t = this;
          d = this.get_node(obj, true);
          obj.state.opened = false;
          this.trigger("close_node", {
            "node": obj
          });
          if (!d.length) {
            this.trigger("after_close", {
              "node": obj
            });
          } else {
            if (!animation) {
              d[0].className = d[0].className.replace("jstree-open", "jstree-closed");
              d.children(".jstree-anchor").attr("aria-expanded", false);
              d.children(".jstree-children").remove();
              this.trigger("after_close", {
                "node": obj
              });
            } else {
              d.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded", false).end().children(".jstree-children").stop(true, true).slideUp(animation, function() {
                this.style.display = "";
                d.children(".jstree-children").remove();
                if (t.element) {
                  t.trigger("after_close", {
                    "node": obj
                  });
                }
              });
            }
          }
        },
        /**
         * toggles a node - closing it if it is open, opening it if it is closed
         * @name toggle_node(obj)
         * @param {mixed} obj the node to toggle
         */
        toggle_node: function(obj) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.toggle_node(obj[t1]);
            }
            return true;
          }
          if (this.is_closed(obj)) {
            return this.open_node(obj);
          }
          if (this.is_open(obj)) {
            return this.close_node(obj);
          }
        },
        /**
         * opens all nodes within a node (or the tree), revealing their children. If the node is not loaded it will be loaded and opened once ready.
         * @name open_all([obj, animation, original_obj])
         * @param {mixed} obj the node to open recursively, omit to open all nodes in the tree
         * @param {Number} animation the animation duration in milliseconds when opening the nodes, the default is no animation
         * @param {jQuery} reference to the node that started the process (internal use)
         * @trigger open_all.jstree
         */
        open_all: function(obj, animation, original_obj) {
          if (!obj) {
            obj = $3.jstree.root;
          }
          obj = this.get_node(obj);
          if (!obj) {
            return false;
          }
          var dom = obj.id === $3.jstree.root ? this.get_container_ul() : this.get_node(obj, true), i, j, _this;
          if (!dom.length) {
            for (i = 0, j = obj.children_d.length; i < j; i++) {
              if (this.is_closed(this._model.data[obj.children_d[i]])) {
                this._model.data[obj.children_d[i]].state.opened = true;
              }
            }
            return this.trigger("open_all", {
              "node": obj
            });
          }
          original_obj = original_obj || dom;
          _this = this;
          dom = this.is_closed(obj) ? dom.find(".jstree-closed").addBack() : dom.find(".jstree-closed");
          dom.each(function() {
            _this.open_node(this, function(node, status) {
              if (status && this.is_parent(node)) {
                this.open_all(node, animation, original_obj);
              }
            }, animation || 0);
          });
          if (original_obj.find(".jstree-closed").length === 0) {
            this.trigger("open_all", {
              "node": this.get_node(original_obj)
            });
          }
        },
        /**
         * closes all nodes within a node (or the tree), revealing their children
         * @name close_all([obj, animation])
         * @param {mixed} obj the node to close recursively, omit to close all nodes in the tree
         * @param {Number} animation the animation duration in milliseconds when closing the nodes, the default is no animation
         * @trigger close_all.jstree
         */
        close_all: function(obj, animation) {
          if (!obj) {
            obj = $3.jstree.root;
          }
          obj = this.get_node(obj);
          if (!obj) {
            return false;
          }
          var dom = obj.id === $3.jstree.root ? this.get_container_ul() : this.get_node(obj, true), _this = this, i, j;
          if (dom.length) {
            dom = this.is_open(obj) ? dom.find(".jstree-open").addBack() : dom.find(".jstree-open");
            $3(dom.get().reverse()).each(function() {
              _this.close_node(this, animation || 0);
            });
          }
          for (i = 0, j = obj.children_d.length; i < j; i++) {
            this._model.data[obj.children_d[i]].state.opened = false;
          }
          this.trigger("close_all", {
            "node": obj
          });
        },
        /**
         * checks if a node is disabled (not selectable)
         * @name is_disabled(obj)
         * @param  {mixed} obj
         * @return {Boolean}
         */
        is_disabled: function(obj) {
          obj = this.get_node(obj);
          return obj && obj.state && obj.state.disabled;
        },
        /**
         * enables a node - so that it can be selected
         * @name enable_node(obj)
         * @param {mixed} obj the node to enable
         * @trigger enable_node.jstree
         */
        enable_node: function(obj) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.enable_node(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          obj.state.disabled = false;
          this.get_node(obj, true).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", false);
          this.trigger("enable_node", {
            "node": obj
          });
        },
        /**
         * disables a node - so that it can not be selected
         * @name disable_node(obj)
         * @param {mixed} obj the node to disable
         * @trigger disable_node.jstree
         */
        disable_node: function(obj) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.disable_node(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          obj.state.disabled = true;
          this.get_node(obj, true).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", true);
          this.trigger("disable_node", {
            "node": obj
          });
        },
        /**
         * determines if a node is hidden
         * @name is_hidden(obj)
         * @param {mixed} obj the node
         */
        is_hidden: function(obj) {
          obj = this.get_node(obj);
          return obj.state.hidden === true;
        },
        /**
         * hides a node - it is still in the structure but will not be visible
         * @name hide_node(obj)
         * @param {mixed} obj the node to hide
         * @param {Boolean} skip_redraw internal parameter controlling if redraw is called
         * @trigger hide_node.jstree
         */
        hide_node: function(obj, skip_redraw) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.hide_node(obj[t1], true);
            }
            if (!skip_redraw) {
              this.redraw();
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          if (!obj.state.hidden) {
            obj.state.hidden = true;
            this._node_changed(obj.parent);
            if (!skip_redraw) {
              this.redraw();
            }
            this.trigger("hide_node", {
              "node": obj
            });
          }
        },
        /**
         * shows a node
         * @name show_node(obj)
         * @param {mixed} obj the node to show
         * @param {Boolean} skip_redraw internal parameter controlling if redraw is called
         * @trigger show_node.jstree
         */
        show_node: function(obj, skip_redraw) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.show_node(obj[t1], true);
            }
            if (!skip_redraw) {
              this.redraw();
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          if (obj.state.hidden) {
            obj.state.hidden = false;
            this._node_changed(obj.parent);
            if (!skip_redraw) {
              this.redraw();
            }
            this.trigger("show_node", {
              "node": obj
            });
          }
        },
        /**
         * hides all nodes
         * @name hide_all()
         * @trigger hide_all.jstree
         */
        hide_all: function(skip_redraw) {
          var i, m = this._model.data, ids = [];
          for (i in m) {
            if (m.hasOwnProperty(i) && i !== $3.jstree.root && !m[i].state.hidden) {
              m[i].state.hidden = true;
              ids.push(i);
            }
          }
          this._model.force_full_redraw = true;
          if (!skip_redraw) {
            this.redraw();
          }
          this.trigger("hide_all", {
            "nodes": ids
          });
          return ids;
        },
        /**
         * shows all nodes
         * @name show_all()
         * @trigger show_all.jstree
         */
        show_all: function(skip_redraw) {
          var i, m = this._model.data, ids = [];
          for (i in m) {
            if (m.hasOwnProperty(i) && i !== $3.jstree.root && m[i].state.hidden) {
              m[i].state.hidden = false;
              ids.push(i);
            }
          }
          this._model.force_full_redraw = true;
          if (!skip_redraw) {
            this.redraw();
          }
          this.trigger("show_all", {
            "nodes": ids
          });
          return ids;
        },
        /**
         * called when a node is selected by the user. Used internally.
         * @private
         * @name activate_node(obj, e)
         * @param {mixed} obj the node
         * @param {Object} e the related event
         * @trigger activate_node.jstree, changed.jstree
         */
        activate_node: function(obj, e) {
          if (this.is_disabled(obj)) {
            return false;
          }
          if (!e || typeof e !== "object") {
            e = {};
          }
          this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== undefined2 ? this.get_node(this._data.core.last_clicked.id) : null;
          if (this._data.core.last_clicked && !this._data.core.last_clicked.state.selected) {
            this._data.core.last_clicked = null;
          }
          if (!this._data.core.last_clicked && this._data.core.selected.length) {
            this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1]);
          }
          if (!this.settings.core.multiple || !e.metaKey && !e.ctrlKey && !e.shiftKey || e.shiftKey && (!this._data.core.last_clicked || !this.get_parent(obj) || this.get_parent(obj) !== this._data.core.last_clicked.parent)) {
            if (!this.settings.core.multiple && (e.metaKey || e.ctrlKey || e.shiftKey) && this.is_selected(obj)) {
              this.deselect_node(obj, false, e);
            } else {
              if (this.settings.core.allow_reselect || !this.is_selected(obj) || this._data.core.selected.length !== 1) {
                this.deselect_all(true);
                this.select_node(obj, false, false, e);
              }
              this._data.core.last_clicked = this.get_node(obj);
            }
          } else {
            if (e.shiftKey) {
              var o = this.get_node(obj).id, l = this._data.core.last_clicked.id, p = this.get_node(this._data.core.last_clicked.parent).children, c = false, i, j;
              for (i = 0, j = p.length; i < j; i += 1) {
                if (p[i] === o) {
                  c = !c;
                }
                if (p[i] === l) {
                  c = !c;
                }
                if (!this.is_disabled(p[i]) && (c || p[i] === o || p[i] === l)) {
                  if (!this.is_hidden(p[i])) {
                    this.select_node(p[i], true, false, e);
                  }
                } else {
                  if (!e.ctrlKey) {
                    this.deselect_node(p[i], true, e);
                  }
                }
              }
              this.trigger("changed", {
                "action": "select_node",
                "node": this.get_node(obj),
                "selected": this._data.core.selected,
                "event": e
              });
            } else {
              if (!this.is_selected(obj)) {
                if (e.ctrlKey) {
                  this._data.core.last_clicked = this.get_node(obj);
                }
                this.select_node(obj, false, false, e);
              } else {
                this.deselect_node(obj, false, e);
              }
            }
          }
          this.trigger("activate_node", {
            "node": this.get_node(obj),
            "event": e
          });
        },
        /**
         * applies the hover state on a node, called when a node is hovered by the user. Used internally.
         * @private
         * @name hover_node(obj)
         * @param {mixed} obj
         * @trigger hover_node.jstree
         */
        hover_node: function(obj) {
          obj = this.get_node(obj, true);
          if (!obj || !obj.length || obj.children(".jstree-hovered").length) {
            return false;
          }
          var o = this.element.find(".jstree-hovered"), t = this.element;
          if (o && o.length) {
            this.dehover_node(o);
          }
          obj.children(".jstree-anchor").addClass("jstree-hovered");
          this.trigger("hover_node", {
            "node": this.get_node(obj)
          });
          setTimeout(function() {
            t.attr("aria-activedescendant", obj[0].id);
          }, 0);
        },
        /**
         * removes the hover state from a nodecalled when a node is no longer hovered by the user. Used internally.
         * @private
         * @name dehover_node(obj)
         * @param {mixed} obj
         * @trigger dehover_node.jstree
         */
        dehover_node: function(obj) {
          obj = this.get_node(obj, true);
          if (!obj || !obj.length || !obj.children(".jstree-hovered").length) {
            return false;
          }
          obj.children(".jstree-anchor").removeClass("jstree-hovered");
          this.trigger("dehover_node", {
            "node": this.get_node(obj)
          });
        },
        /**
         * select a node
         * @name select_node(obj [, supress_event, prevent_open])
         * @param {mixed} obj an array can be used to select multiple nodes
         * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
         * @param {Boolean} prevent_open if set to `true` parents of the selected node won't be opened
         * @trigger select_node.jstree, changed.jstree
         */
        select_node: function(obj, supress_event, prevent_open, e) {
          var dom, t1, t2, th;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.select_node(obj[t1], supress_event, prevent_open, e);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          if (!obj.state.selected) {
            obj.state.selected = true;
            this._data.core.selected.push(obj.id);
            if (!prevent_open) {
              dom = this._open_to(obj);
            }
            if (dom && dom.length) {
              dom.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected", true);
            }
            this.trigger("select_node", {
              "node": obj,
              "selected": this._data.core.selected,
              "event": e
            });
            if (!supress_event) {
              this.trigger("changed", {
                "action": "select_node",
                "node": obj,
                "selected": this._data.core.selected,
                "event": e
              });
            }
          }
        },
        /**
         * deselect a node
         * @name deselect_node(obj [, supress_event])
         * @param {mixed} obj an array can be used to deselect multiple nodes
         * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
         * @trigger deselect_node.jstree, changed.jstree
         */
        deselect_node: function(obj, supress_event, e) {
          var t1, t2, dom;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.deselect_node(obj[t1], supress_event, e);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          if (obj.state.selected) {
            obj.state.selected = false;
            this._data.core.selected = $3.vakata.array_remove_item(this._data.core.selected, obj.id);
            if (dom.length) {
              dom.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected", false);
            }
            this.trigger("deselect_node", {
              "node": obj,
              "selected": this._data.core.selected,
              "event": e
            });
            if (!supress_event) {
              this.trigger("changed", {
                "action": "deselect_node",
                "node": obj,
                "selected": this._data.core.selected,
                "event": e
              });
            }
          }
        },
        /**
         * select all nodes in the tree
         * @name select_all([supress_event])
         * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
         * @trigger select_all.jstree, changed.jstree
         */
        select_all: function(supress_event) {
          var tmp = this._data.core.selected.concat([]), i, j;
          this._data.core.selected = this._model.data[$3.jstree.root].children_d.concat();
          for (i = 0, j = this._data.core.selected.length; i < j; i++) {
            if (this._model.data[this._data.core.selected[i]]) {
              this._model.data[this._data.core.selected[i]].state.selected = true;
            }
          }
          this.redraw(true);
          this.trigger("select_all", {
            "selected": this._data.core.selected
          });
          if (!supress_event) {
            this.trigger("changed", {
              "action": "select_all",
              "selected": this._data.core.selected,
              "old_selection": tmp
            });
          }
        },
        /**
         * deselect all selected nodes
         * @name deselect_all([supress_event])
         * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
         * @trigger deselect_all.jstree, changed.jstree
         */
        deselect_all: function(supress_event) {
          var tmp = this._data.core.selected.concat([]), i, j;
          for (i = 0, j = this._data.core.selected.length; i < j; i++) {
            if (this._model.data[this._data.core.selected[i]]) {
              this._model.data[this._data.core.selected[i]].state.selected = false;
            }
          }
          this._data.core.selected = [];
          this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected", false);
          this.trigger("deselect_all", {
            "selected": this._data.core.selected,
            "node": tmp
          });
          if (!supress_event) {
            this.trigger("changed", {
              "action": "deselect_all",
              "selected": this._data.core.selected,
              "old_selection": tmp
            });
          }
        },
        /**
         * checks if a node is selected
         * @name is_selected(obj)
         * @param  {mixed}  obj
         * @return {Boolean}
         */
        is_selected: function(obj) {
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          return obj.state.selected;
        },
        /**
         * get an array of all selected nodes
         * @name get_selected([full])
         * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
         * @return {Array}
         */
        get_selected: function(full) {
          return full ? $3.map(this._data.core.selected, function(i) {
            return this.get_node(i);
          }.bind(this)) : this._data.core.selected.slice();
        },
        /**
         * get an array of all top level selected nodes (ignoring children of selected nodes)
         * @name get_top_selected([full])
         * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
         * @return {Array}
         */
        get_top_selected: function(full) {
          var tmp = this.get_selected(true), obj = {}, i, j, k, l;
          for (i = 0, j = tmp.length; i < j; i++) {
            obj[tmp[i].id] = tmp[i];
          }
          for (i = 0, j = tmp.length; i < j; i++) {
            for (k = 0, l = tmp[i].children_d.length; k < l; k++) {
              if (obj[tmp[i].children_d[k]]) {
                delete obj[tmp[i].children_d[k]];
              }
            }
          }
          tmp = [];
          for (i in obj) {
            if (obj.hasOwnProperty(i)) {
              tmp.push(i);
            }
          }
          return full ? $3.map(tmp, function(i2) {
            return this.get_node(i2);
          }.bind(this)) : tmp;
        },
        /**
         * get an array of all bottom level selected nodes (ignoring selected parents)
         * @name get_bottom_selected([full])
         * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
         * @return {Array}
         */
        get_bottom_selected: function(full) {
          var tmp = this.get_selected(true), obj = [], i, j;
          for (i = 0, j = tmp.length; i < j; i++) {
            if (!tmp[i].children.length) {
              obj.push(tmp[i].id);
            }
          }
          return full ? $3.map(obj, function(i2) {
            return this.get_node(i2);
          }.bind(this)) : obj;
        },
        /**
         * gets the current state of the tree so that it can be restored later with `set_state(state)`. Used internally.
         * @name get_state()
         * @private
         * @return {Object}
         */
        get_state: function() {
          var state2 = {
            "core": {
              "open": [],
              "loaded": [],
              "scroll": {
                "left": this.element.scrollLeft(),
                "top": this.element.scrollTop()
              },
              /*!
              'themes' : {
              	'name' : this.get_theme(),
              	'icons' : this._data.core.themes.icons,
              	'dots' : this._data.core.themes.dots
              },
              */
              "selected": []
            }
          }, i;
          for (i in this._model.data) {
            if (this._model.data.hasOwnProperty(i)) {
              if (i !== $3.jstree.root) {
                if (this._model.data[i].state.loaded && this.settings.core.loaded_state) {
                  state2.core.loaded.push(i);
                }
                if (this._model.data[i].state.opened) {
                  state2.core.open.push(i);
                }
                if (this._model.data[i].state.selected) {
                  state2.core.selected.push(i);
                }
              }
            }
          }
          return state2;
        },
        /**
         * sets the state of the tree. Used internally.
         * @name set_state(state [, callback])
         * @private
         * @param {Object} state the state to restore. Keep in mind this object is passed by reference and jstree will modify it.
         * @param {Function} callback an optional function to execute once the state is restored.
         * @trigger set_state.jstree
         */
        set_state: function(state2, callback) {
          if (state2) {
            if (state2.core && state2.core.selected && state2.core.initial_selection === undefined2) {
              state2.core.initial_selection = this._data.core.selected.concat([]).sort().join(",");
            }
            if (state2.core) {
              var res, n, t, _this, i;
              if (state2.core.loaded) {
                if (!this.settings.core.loaded_state || !$3.vakata.is_array(state2.core.loaded) || !state2.core.loaded.length) {
                  delete state2.core.loaded;
                  this.set_state(state2, callback);
                } else {
                  this._load_nodes(state2.core.loaded, function(nodes) {
                    delete state2.core.loaded;
                    this.set_state(state2, callback);
                  });
                }
                return false;
              }
              if (state2.core.open) {
                if (!$3.vakata.is_array(state2.core.open) || !state2.core.open.length) {
                  delete state2.core.open;
                  this.set_state(state2, callback);
                } else {
                  this._load_nodes(state2.core.open, function(nodes) {
                    this.open_node(nodes, false, 0);
                    delete state2.core.open;
                    this.set_state(state2, callback);
                  });
                }
                return false;
              }
              if (state2.core.scroll) {
                if (state2.core.scroll && state2.core.scroll.left !== undefined2) {
                  this.element.scrollLeft(state2.core.scroll.left);
                }
                if (state2.core.scroll && state2.core.scroll.top !== undefined2) {
                  this.element.scrollTop(state2.core.scroll.top);
                }
                delete state2.core.scroll;
                this.set_state(state2, callback);
                return false;
              }
              if (state2.core.selected) {
                _this = this;
                if (state2.core.initial_selection === undefined2 || state2.core.initial_selection === this._data.core.selected.concat([]).sort().join(",")) {
                  this.deselect_all();
                  $3.each(state2.core.selected, function(i2, v) {
                    _this.select_node(v, false, true);
                  });
                }
                delete state2.core.initial_selection;
                delete state2.core.selected;
                this.set_state(state2, callback);
                return false;
              }
              for (i in state2) {
                if (state2.hasOwnProperty(i) && i !== "core" && $3.inArray(i, this.settings.plugins) === -1) {
                  delete state2[i];
                }
              }
              if ($3.isEmptyObject(state2.core)) {
                delete state2.core;
                this.set_state(state2, callback);
                return false;
              }
            }
            if ($3.isEmptyObject(state2)) {
              state2 = null;
              if (callback) {
                callback.call(this);
              }
              this.trigger("set_state");
              return false;
            }
            return true;
          }
          return false;
        },
        /**
         * refreshes the tree - all nodes are reloaded with calls to `load_node`.
         * @name refresh()
         * @param {Boolean} skip_loading an option to skip showing the loading indicator
         * @param {Mixed} forget_state if set to `true` state will not be reapplied, if set to a function (receiving the current state as argument) the result of that function will be used as state
         * @trigger refresh.jstree
         */
        refresh: function(skip_loading, forget_state) {
          this._data.core.state = forget_state === true ? {} : this.get_state();
          if (forget_state && $3.vakata.is_function(forget_state)) {
            this._data.core.state = forget_state.call(this, this._data.core.state);
          }
          this._cnt = 0;
          this._model.data = {};
          this._model.data[$3.jstree.root] = {
            id: $3.jstree.root,
            parent: null,
            parents: [],
            children: [],
            children_d: [],
            state: {
              loaded: false
            }
          };
          this._data.core.selected = [];
          this._data.core.last_clicked = null;
          this._data.core.focused = null;
          var c = this.get_container_ul()[0].className;
          if (!skip_loading) {
            this.element.html("<ul class='" + c + "' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>");
            this.element.attr("aria-activedescendant", "j" + this._id + "_loading");
          }
          this.load_node($3.jstree.root, function(o, s) {
            if (s) {
              this.get_container_ul()[0].className = c;
              if (this._firstChild(this.get_container_ul()[0])) {
                this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id);
              }
              this.set_state($3.extend(true, {}, this._data.core.state), function() {
                this.trigger("refresh");
              });
            }
            this._data.core.state = null;
          });
        },
        /**
         * refreshes a node in the tree (reload its children) all opened nodes inside that node are reloaded with calls to `load_node`.
         * @name refresh_node(obj)
         * @param  {mixed} obj the node
         * @trigger refresh_node.jstree
         */
        refresh_node: function(obj) {
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          var opened = [], to_load = [], s = this._data.core.selected.concat([]);
          to_load.push(obj.id);
          if (obj.state.opened === true) {
            opened.push(obj.id);
          }
          this.get_node(obj, true).find(".jstree-open").each(function() {
            to_load.push(this.id);
            opened.push(this.id);
          });
          this._load_nodes(to_load, function(nodes) {
            this.open_node(opened, false, 0);
            this.select_node(s);
            this.trigger("refresh_node", {
              "node": obj,
              "nodes": nodes
            });
          }.bind(this), false, true);
        },
        /**
         * set (change) the ID of a node
         * @name set_id(obj, id)
         * @param  {mixed} obj the node
         * @param  {String} id the new ID
         * @return {Boolean}
         * @trigger set_id.jstree
         */
        set_id: function(obj, id) {
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          var i, j, m = this._model.data, old = obj.id;
          id = id.toString();
          m[obj.parent].children[$3.inArray(obj.id, m[obj.parent].children)] = id;
          for (i = 0, j = obj.parents.length; i < j; i++) {
            m[obj.parents[i]].children_d[$3.inArray(obj.id, m[obj.parents[i]].children_d)] = id;
          }
          for (i = 0, j = obj.children.length; i < j; i++) {
            m[obj.children[i]].parent = id;
          }
          for (i = 0, j = obj.children_d.length; i < j; i++) {
            m[obj.children_d[i]].parents[$3.inArray(obj.id, m[obj.children_d[i]].parents)] = id;
          }
          i = $3.inArray(obj.id, this._data.core.selected);
          if (i !== -1) {
            this._data.core.selected[i] = id;
          }
          i = this.get_node(obj.id, true);
          if (i) {
            i.attr("id", id);
            if (this.element.attr("aria-activedescendant") === obj.id) {
              this.element.attr("aria-activedescendant", id);
            }
          }
          delete m[obj.id];
          obj.id = id;
          obj.li_attr.id = id;
          m[id] = obj;
          this.trigger("set_id", {
            "node": obj,
            "new": obj.id,
            "old": old
          });
          return true;
        },
        /**
         * get the text value of a node
         * @name get_text(obj)
         * @param  {mixed} obj the node
         * @return {String}
         */
        get_text: function(obj) {
          obj = this.get_node(obj);
          return !obj || obj.id === $3.jstree.root ? false : obj.text;
        },
        /**
         * set the text value of a node. Used internally, please use `rename_node(obj, val)`.
         * @private
         * @name set_text(obj, val)
         * @param  {mixed} obj the node, you can pass an array to set the text on multiple nodes
         * @param  {String} val the new text value
         * @return {Boolean}
         * @trigger set_text.jstree
         */
        set_text: function(obj, val) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.set_text(obj[t1], val);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          obj.text = val;
          if (this.get_node(obj, true).length) {
            this.redraw_node(obj.id);
          }
          this.trigger("set_text", {
            "obj": obj,
            "text": val
          });
          return true;
        },
        /**
         * gets a JSON representation of a node (or the whole tree)
         * @name get_json([obj, options])
         * @param  {mixed} obj
         * @param  {Object} options
         * @param  {Boolean} options.no_state do not return state information
         * @param  {Boolean} options.no_id do not return ID
         * @param  {Boolean} options.no_children do not include children
         * @param  {Boolean} options.no_data do not include node data
         * @param  {Boolean} options.no_li_attr do not include LI attributes
         * @param  {Boolean} options.no_a_attr do not include A attributes
         * @param  {Boolean} options.flat return flat JSON instead of nested
         * @return {Object}
         */
        get_json: function(obj, options, flat) {
          obj = this.get_node(obj || $3.jstree.root);
          if (!obj) {
            return false;
          }
          if (options && options.flat && !flat) {
            flat = [];
          }
          var tmp = {
            "id": obj.id,
            "text": obj.text,
            "icon": this.get_icon(obj),
            "li_attr": $3.extend(true, {}, obj.li_attr),
            "a_attr": $3.extend(true, {}, obj.a_attr),
            "state": {},
            "data": options && options.no_data ? false : $3.extend(true, $3.vakata.is_array(obj.data) ? [] : {}, obj.data)
            //( this.get_node(obj, true).length ? this.get_node(obj, true).data() : obj.data ),
          }, i, j;
          if (options && options.flat) {
            tmp.parent = obj.parent;
          } else {
            tmp.children = [];
          }
          if (!options || !options.no_state) {
            for (i in obj.state) {
              if (obj.state.hasOwnProperty(i)) {
                tmp.state[i] = obj.state[i];
              }
            }
          } else {
            delete tmp.state;
          }
          if (options && options.no_li_attr) {
            delete tmp.li_attr;
          }
          if (options && options.no_a_attr) {
            delete tmp.a_attr;
          }
          if (options && options.no_id) {
            delete tmp.id;
            if (tmp.li_attr && tmp.li_attr.id) {
              delete tmp.li_attr.id;
            }
            if (tmp.a_attr && tmp.a_attr.id) {
              delete tmp.a_attr.id;
            }
          }
          if (options && options.flat && obj.id !== $3.jstree.root) {
            flat.push(tmp);
          }
          if (!options || !options.no_children) {
            for (i = 0, j = obj.children.length; i < j; i++) {
              if (options && options.flat) {
                this.get_json(obj.children[i], options, flat);
              } else {
                tmp.children.push(this.get_json(obj.children[i], options));
              }
            }
          }
          return options && options.flat ? flat : obj.id === $3.jstree.root ? tmp.children : tmp;
        },
        /**
         * create a new node (do not confuse with load_node)
         * @name create_node([par, node, pos, callback, is_loaded])
         * @param  {mixed}   par       the parent node (to create a root node use either "#" (string) or `null`)
         * @param  {mixed}   node      the data for the new node (a valid JSON object, or a simple string with the name)
         * @param  {mixed}   pos       the index at which to insert the node, "first" and "last" are also supported, default is "last"
         * @param  {Function} callback a function to be called once the node is created
         * @param  {Boolean} is_loaded internal argument indicating if the parent node was succesfully loaded
         * @return {String}            the ID of the newly create node
         * @trigger model.jstree, create_node.jstree
         */
        create_node: function(par, node, pos, callback, is_loaded) {
          if (par === null) {
            par = $3.jstree.root;
          }
          par = this.get_node(par);
          if (!par) {
            return false;
          }
          pos = pos === undefined2 ? "last" : pos;
          if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
            return this.load_node(par, function() {
              this.create_node(par, node, pos, callback, true);
            });
          }
          if (!node) {
            node = {
              "text": this.get_string("New node")
            };
          }
          if (typeof node === "string") {
            node = {
              "text": node
            };
          } else {
            node = $3.extend(true, {}, node);
          }
          if (node.text === undefined2) {
            node.text = this.get_string("New node");
          }
          var tmp, dpc, i, j;
          if (par.id === $3.jstree.root) {
            if (pos === "before") {
              pos = "first";
            }
            if (pos === "after") {
              pos = "last";
            }
          }
          switch (pos) {
            case "before":
              tmp = this.get_node(par.parent);
              pos = $3.inArray(par.id, tmp.children);
              par = tmp;
              break;
            case "after":
              tmp = this.get_node(par.parent);
              pos = $3.inArray(par.id, tmp.children) + 1;
              par = tmp;
              break;
            case "inside":
            case "first":
              pos = 0;
              break;
            case "last":
              pos = par.children.length;
              break;
            default:
              if (!pos) {
                pos = 0;
              }
              break;
          }
          if (pos > par.children.length) {
            pos = par.children.length;
          }
          if (node.id === undefined2) {
            node.id = true;
          }
          if (!this.check("create_node", node, par, pos)) {
            this.settings.core.error.call(this, this._data.core.last_error);
            return false;
          }
          if (node.id === true) {
            delete node.id;
          }
          node = this._parse_model_from_json(node, par.id, par.parents.concat());
          if (!node) {
            return false;
          }
          tmp = this.get_node(node);
          dpc = [];
          dpc.push(node);
          dpc = dpc.concat(tmp.children_d);
          this.trigger("model", {
            "nodes": dpc,
            "parent": par.id
          });
          par.children_d = par.children_d.concat(dpc);
          for (i = 0, j = par.parents.length; i < j; i++) {
            this._model.data[par.parents[i]].children_d = this._model.data[par.parents[i]].children_d.concat(dpc);
          }
          node = tmp;
          tmp = [];
          for (i = 0, j = par.children.length; i < j; i++) {
            tmp[i >= pos ? i + 1 : i] = par.children[i];
          }
          tmp[pos] = node.id;
          par.children = tmp;
          this.redraw_node(par, true);
          this.trigger("create_node", {
            "node": this.get_node(node),
            "parent": par.id,
            "position": pos
          });
          if (callback) {
            callback.call(this, this.get_node(node));
          }
          return node.id;
        },
        /**
         * set the text value of a node
         * @name rename_node(obj, val)
         * @param  {mixed} obj the node, you can pass an array to rename multiple nodes to the same name
         * @param  {String} val the new text value
         * @return {Boolean}
         * @trigger rename_node.jstree
         */
        rename_node: function(obj, val) {
          var t1, t2, old;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.rename_node(obj[t1], val);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          old = obj.text;
          if (!this.check("rename_node", obj, this.get_parent(obj), val)) {
            this.settings.core.error.call(this, this._data.core.last_error);
            return false;
          }
          this.set_text(obj, val);
          this.trigger("rename_node", {
            "node": obj,
            "text": val,
            "old": old
          });
          return true;
        },
        /**
         * remove a node
         * @name delete_node(obj)
         * @param  {mixed} obj the node, you can pass an array to delete multiple nodes
         * @return {Boolean}
         * @trigger delete_node.jstree, changed.jstree
         */
        delete_node: function(obj) {
          var t1, t2, par, pos, tmp, i, j, k, l, c, top, lft;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.delete_node(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          par = this.get_node(obj.parent);
          pos = $3.inArray(obj.id, par.children);
          c = false;
          if (!this.check("delete_node", obj, par, pos)) {
            this.settings.core.error.call(this, this._data.core.last_error);
            return false;
          }
          if (pos !== -1) {
            par.children = $3.vakata.array_remove(par.children, pos);
          }
          tmp = obj.children_d.concat([]);
          tmp.push(obj.id);
          for (i = 0, j = obj.parents.length; i < j; i++) {
            this._model.data[obj.parents[i]].children_d = $3.vakata.array_filter(this._model.data[obj.parents[i]].children_d, function(v) {
              return $3.inArray(v, tmp) === -1;
            });
          }
          for (k = 0, l = tmp.length; k < l; k++) {
            if (this._model.data[tmp[k]].state.selected) {
              c = true;
              break;
            }
          }
          if (c) {
            this._data.core.selected = $3.vakata.array_filter(this._data.core.selected, function(v) {
              return $3.inArray(v, tmp) === -1;
            });
          }
          this.trigger("delete_node", {
            "node": obj,
            "parent": par.id
          });
          if (c) {
            this.trigger("changed", {
              "action": "delete_node",
              "node": obj,
              "selected": this._data.core.selected,
              "parent": par.id
            });
          }
          for (k = 0, l = tmp.length; k < l; k++) {
            delete this._model.data[tmp[k]];
          }
          if ($3.inArray(this._data.core.focused, tmp) !== -1) {
            this._data.core.focused = null;
            top = this.element[0].scrollTop;
            lft = this.element[0].scrollLeft;
            if (par.id === $3.jstree.root) {
              if (this._model.data[$3.jstree.root].children[0]) {
                this.get_node(this._model.data[$3.jstree.root].children[0], true).children(".jstree-anchor").trigger("focus");
              }
            } else {
              this.get_node(par, true).children(".jstree-anchor").trigger("focus");
            }
            this.element[0].scrollTop = top;
            this.element[0].scrollLeft = lft;
          }
          this.redraw_node(par, true);
          return true;
        },
        /**
         * check if an operation is premitted on the tree. Used internally.
         * @private
         * @name check(chk, obj, par, pos)
         * @param  {String} chk the operation to check, can be "create_node", "rename_node", "delete_node", "copy_node" or "move_node"
         * @param  {mixed} obj the node
         * @param  {mixed} par the parent
         * @param  {mixed} pos the position to insert at, or if "rename_node" - the new name
         * @param  {mixed} more some various additional information, for example if a "move_node" operations is triggered by DND this will be the hovered node
         * @return {Boolean}
         */
        check: function(chk, obj, par, pos, more) {
          obj = obj && obj.id ? obj : this.get_node(obj);
          par = par && par.id ? par : this.get_node(par);
          var tmp = chk.match(/^(move_node|copy_node|create_node)$/i) ? par : obj, chc = this.settings.core.check_callback;
          if (chk === "move_node" || chk === "copy_node") {
            if ((!more || !more.is_multi) && chk === "move_node" && $3.inArray(obj.id, par.children) === pos) {
              this._data.core.last_error = {
                "error": "check",
                "plugin": "core",
                "id": "core_08",
                "reason": "Moving node to its current position",
                "data": JSON.stringify({
                  "chk": chk,
                  "pos": pos,
                  "obj": obj && obj.id ? obj.id : false,
                  "par": par && par.id ? par.id : false
                })
              };
              return false;
            }
            if ((!more || !more.is_multi) && (obj.id === par.id || chk === "move_node" && $3.inArray(obj.id, par.children) === pos || $3.inArray(par.id, obj.children_d) !== -1)) {
              this._data.core.last_error = {
                "error": "check",
                "plugin": "core",
                "id": "core_01",
                "reason": "Moving parent inside child",
                "data": JSON.stringify({
                  "chk": chk,
                  "pos": pos,
                  "obj": obj && obj.id ? obj.id : false,
                  "par": par && par.id ? par.id : false
                })
              };
              return false;
            }
          }
          if (tmp && tmp.data) {
            tmp = tmp.data;
          }
          if (tmp && tmp.functions && (tmp.functions[chk] === false || tmp.functions[chk] === true)) {
            if (tmp.functions[chk] === false) {
              this._data.core.last_error = {
                "error": "check",
                "plugin": "core",
                "id": "core_02",
                "reason": "Node data prevents function: " + chk,
                "data": JSON.stringify({
                  "chk": chk,
                  "pos": pos,
                  "obj": obj && obj.id ? obj.id : false,
                  "par": par && par.id ? par.id : false
                })
              };
            }
            return tmp.functions[chk];
          }
          if (chc === false || $3.vakata.is_function(chc) && chc.call(this, chk, obj, par, pos, more) === false || chc && chc[chk] === false) {
            this._data.core.last_error = {
              "error": "check",
              "plugin": "core",
              "id": "core_03",
              "reason": "User config for core.check_callback prevents function: " + chk,
              "data": JSON.stringify({
                "chk": chk,
                "pos": pos,
                "obj": obj && obj.id ? obj.id : false,
                "par": par && par.id ? par.id : false
              })
            };
            return false;
          }
          return true;
        },
        /**
         * get the last error
         * @name last_error()
         * @return {Object}
         */
        last_error: function() {
          return this._data.core.last_error;
        },
        /**
         * move a node to a new parent
         * @name move_node(obj, par [, pos, callback, is_loaded])
         * @param  {mixed} obj the node to move, pass an array to move multiple nodes
         * @param  {mixed} par the new parent
         * @param  {mixed} pos the position to insert at (besides integer values, "first" and "last" are supported, as well as "before" and "after"), defaults to integer `0`
         * @param  {function} callback a function to call once the move is completed, receives 3 arguments - the node, the new parent and the position
         * @param  {Boolean} is_loaded internal parameter indicating if the parent node has been loaded
         * @param  {Boolean} skip_redraw internal parameter indicating if the tree should be redrawn
         * @param  {Boolean} instance internal parameter indicating if the node comes from another instance
         * @trigger move_node.jstree
         */
        move_node: function(obj, par, pos, callback, is_loaded, skip_redraw, origin) {
          var t1, t2, old_par, old_pos, new_par, old_ins, is_multi, dpc, tmp, i, j, k, l, p;
          par = this.get_node(par);
          pos = pos === undefined2 ? 0 : pos;
          if (!par) {
            return false;
          }
          if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
            return this.load_node(par, function() {
              this.move_node(obj, par, pos, callback, true, false, origin);
            });
          }
          if ($3.vakata.is_array(obj)) {
            if (obj.length === 1) {
              obj = obj[0];
            } else {
              for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                if (tmp = this.move_node(obj[t1], par, pos, callback, is_loaded, false, origin)) {
                  par = tmp;
                  pos = "after";
                }
              }
              this.redraw();
              return true;
            }
          }
          obj = obj && obj.id !== undefined2 ? obj : this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          old_par = (obj.parent || $3.jstree.root).toString();
          new_par = !pos.toString().match(/^(before|after)$/) || par.id === $3.jstree.root ? par : this.get_node(par.parent);
          old_ins = origin ? origin : this._model.data[obj.id] ? this : $3.jstree.reference(obj.id);
          is_multi = !old_ins || !old_ins._id || this._id !== old_ins._id;
          old_pos = old_ins && old_ins._id && old_par && old_ins._model.data[old_par] && old_ins._model.data[old_par].children ? $3.inArray(obj.id, old_ins._model.data[old_par].children) : -1;
          if (old_ins && old_ins._id) {
            obj = old_ins._model.data[obj.id];
          }
          if (is_multi) {
            if (tmp = this.copy_node(obj, par, pos, callback, is_loaded, false, origin)) {
              if (old_ins) {
                old_ins.delete_node(obj);
              }
              return tmp;
            }
            return false;
          }
          if (par.id === $3.jstree.root) {
            if (pos === "before") {
              pos = "first";
            }
            if (pos === "after") {
              pos = "last";
            }
          }
          switch (pos) {
            case "before":
              pos = $3.inArray(par.id, new_par.children);
              break;
            case "after":
              pos = $3.inArray(par.id, new_par.children) + 1;
              break;
            case "inside":
            case "first":
              pos = 0;
              break;
            case "last":
              pos = new_par.children.length;
              break;
            default:
              if (!pos) {
                pos = 0;
              }
              break;
          }
          if (pos > new_par.children.length) {
            pos = new_par.children.length;
          }
          if (!this.check("move_node", obj, new_par, pos, {
            "core": true,
            "origin": origin,
            "is_multi": old_ins && old_ins._id && old_ins._id !== this._id,
            "is_foreign": !old_ins || !old_ins._id
          })) {
            this.settings.core.error.call(this, this._data.core.last_error);
            return false;
          }
          if (obj.parent === new_par.id) {
            dpc = new_par.children.concat();
            tmp = $3.inArray(obj.id, dpc);
            if (tmp !== -1) {
              dpc = $3.vakata.array_remove(dpc, tmp);
              if (pos > tmp) {
                pos--;
              }
            }
            tmp = [];
            for (i = 0, j = dpc.length; i < j; i++) {
              tmp[i >= pos ? i + 1 : i] = dpc[i];
            }
            tmp[pos] = obj.id;
            new_par.children = tmp;
            this._node_changed(new_par.id);
            this.redraw(new_par.id === $3.jstree.root);
          } else {
            tmp = obj.children_d.concat();
            tmp.push(obj.id);
            for (i = 0, j = obj.parents.length; i < j; i++) {
              dpc = [];
              p = old_ins._model.data[obj.parents[i]].children_d;
              for (k = 0, l = p.length; k < l; k++) {
                if ($3.inArray(p[k], tmp) === -1) {
                  dpc.push(p[k]);
                }
              }
              old_ins._model.data[obj.parents[i]].children_d = dpc;
            }
            old_ins._model.data[old_par].children = $3.vakata.array_remove_item(old_ins._model.data[old_par].children, obj.id);
            for (i = 0, j = new_par.parents.length; i < j; i++) {
              this._model.data[new_par.parents[i]].children_d = this._model.data[new_par.parents[i]].children_d.concat(tmp);
            }
            dpc = [];
            for (i = 0, j = new_par.children.length; i < j; i++) {
              dpc[i >= pos ? i + 1 : i] = new_par.children[i];
            }
            dpc[pos] = obj.id;
            new_par.children = dpc;
            new_par.children_d.push(obj.id);
            new_par.children_d = new_par.children_d.concat(obj.children_d);
            obj.parent = new_par.id;
            tmp = new_par.parents.concat();
            tmp.unshift(new_par.id);
            p = obj.parents.length;
            obj.parents = tmp;
            tmp = tmp.concat();
            for (i = 0, j = obj.children_d.length; i < j; i++) {
              this._model.data[obj.children_d[i]].parents = this._model.data[obj.children_d[i]].parents.slice(0, p * -1);
              Array.prototype.push.apply(this._model.data[obj.children_d[i]].parents, tmp);
            }
            if (old_par === $3.jstree.root || new_par.id === $3.jstree.root) {
              this._model.force_full_redraw = true;
            }
            if (!this._model.force_full_redraw) {
              this._node_changed(old_par);
              this._node_changed(new_par.id);
            }
            if (!skip_redraw) {
              this.redraw();
            }
          }
          if (callback) {
            callback.call(this, obj, new_par, pos);
          }
          this.trigger("move_node", {
            "node": obj,
            "parent": new_par.id,
            "position": pos,
            "old_parent": old_par,
            "old_position": old_pos,
            "is_multi": old_ins && old_ins._id && old_ins._id !== this._id,
            "is_foreign": !old_ins || !old_ins._id,
            "old_instance": old_ins,
            "new_instance": this
          });
          return obj.id;
        },
        /**
         * copy a node to a new parent
         * @name copy_node(obj, par [, pos, callback, is_loaded])
         * @param  {mixed} obj the node to copy, pass an array to copy multiple nodes
         * @param  {mixed} par the new parent
         * @param  {mixed} pos the position to insert at (besides integer values, "first" and "last" are supported, as well as "before" and "after"), defaults to integer `0`
         * @param  {function} callback a function to call once the move is completed, receives 3 arguments - the node, the new parent and the position
         * @param  {Boolean} is_loaded internal parameter indicating if the parent node has been loaded
         * @param  {Boolean} skip_redraw internal parameter indicating if the tree should be redrawn
         * @param  {Boolean} instance internal parameter indicating if the node comes from another instance
         * @trigger model.jstree copy_node.jstree
         */
        copy_node: function(obj, par, pos, callback, is_loaded, skip_redraw, origin) {
          var t1, t2, dpc, tmp, i, j, node, old_par, new_par, old_ins, is_multi;
          par = this.get_node(par);
          pos = pos === undefined2 ? 0 : pos;
          if (!par) {
            return false;
          }
          if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
            return this.load_node(par, function() {
              this.copy_node(obj, par, pos, callback, true, false, origin);
            });
          }
          if ($3.vakata.is_array(obj)) {
            if (obj.length === 1) {
              obj = obj[0];
            } else {
              for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                if (tmp = this.copy_node(obj[t1], par, pos, callback, is_loaded, true, origin)) {
                  par = tmp;
                  pos = "after";
                }
              }
              this.redraw();
              return true;
            }
          }
          obj = obj && obj.id !== undefined2 ? obj : this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          old_par = (obj.parent || $3.jstree.root).toString();
          new_par = !pos.toString().match(/^(before|after)$/) || par.id === $3.jstree.root ? par : this.get_node(par.parent);
          old_ins = origin ? origin : this._model.data[obj.id] ? this : $3.jstree.reference(obj.id);
          is_multi = !old_ins || !old_ins._id || this._id !== old_ins._id;
          if (old_ins && old_ins._id) {
            obj = old_ins._model.data[obj.id];
          }
          if (par.id === $3.jstree.root) {
            if (pos === "before") {
              pos = "first";
            }
            if (pos === "after") {
              pos = "last";
            }
          }
          switch (pos) {
            case "before":
              pos = $3.inArray(par.id, new_par.children);
              break;
            case "after":
              pos = $3.inArray(par.id, new_par.children) + 1;
              break;
            case "inside":
            case "first":
              pos = 0;
              break;
            case "last":
              pos = new_par.children.length;
              break;
            default:
              if (!pos) {
                pos = 0;
              }
              break;
          }
          if (pos > new_par.children.length) {
            pos = new_par.children.length;
          }
          if (!this.check("copy_node", obj, new_par, pos, {
            "core": true,
            "origin": origin,
            "is_multi": old_ins && old_ins._id && old_ins._id !== this._id,
            "is_foreign": !old_ins || !old_ins._id
          })) {
            this.settings.core.error.call(this, this._data.core.last_error);
            return false;
          }
          node = old_ins ? old_ins.get_json(obj, {
            no_id: true,
            no_data: true,
            no_state: true
          }) : obj;
          if (!node) {
            return false;
          }
          if (node.id === true) {
            delete node.id;
          }
          node = this._parse_model_from_json(node, new_par.id, new_par.parents.concat());
          if (!node) {
            return false;
          }
          tmp = this.get_node(node);
          if (obj && obj.state && obj.state.loaded === false) {
            tmp.state.loaded = false;
          }
          dpc = [];
          dpc.push(node);
          dpc = dpc.concat(tmp.children_d);
          this.trigger("model", {
            "nodes": dpc,
            "parent": new_par.id
          });
          for (i = 0, j = new_par.parents.length; i < j; i++) {
            this._model.data[new_par.parents[i]].children_d = this._model.data[new_par.parents[i]].children_d.concat(dpc);
          }
          dpc = [];
          for (i = 0, j = new_par.children.length; i < j; i++) {
            dpc[i >= pos ? i + 1 : i] = new_par.children[i];
          }
          dpc[pos] = tmp.id;
          new_par.children = dpc;
          new_par.children_d.push(tmp.id);
          new_par.children_d = new_par.children_d.concat(tmp.children_d);
          if (new_par.id === $3.jstree.root) {
            this._model.force_full_redraw = true;
          }
          if (!this._model.force_full_redraw) {
            this._node_changed(new_par.id);
          }
          if (!skip_redraw) {
            this.redraw(new_par.id === $3.jstree.root);
          }
          if (callback) {
            callback.call(this, tmp, new_par, pos);
          }
          this.trigger("copy_node", {
            "node": tmp,
            "original": obj,
            "parent": new_par.id,
            "position": pos,
            "old_parent": old_par,
            "old_position": old_ins && old_ins._id && old_par && old_ins._model.data[old_par] && old_ins._model.data[old_par].children ? $3.inArray(obj.id, old_ins._model.data[old_par].children) : -1,
            "is_multi": old_ins && old_ins._id && old_ins._id !== this._id,
            "is_foreign": !old_ins || !old_ins._id,
            "old_instance": old_ins,
            "new_instance": this
          });
          return tmp.id;
        },
        /**
         * cut a node (a later call to `paste(obj)` would move the node)
         * @name cut(obj)
         * @param  {mixed} obj multiple objects can be passed using an array
         * @trigger cut.jstree
         */
        cut: function(obj) {
          if (!obj) {
            obj = this._data.core.selected.concat();
          }
          if (!$3.vakata.is_array(obj)) {
            obj = [obj];
          }
          if (!obj.length) {
            return false;
          }
          var tmp = [], o, t1, t2;
          for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
            o = this.get_node(obj[t1]);
            if (o && (o.id || o.id === 0) && o.id !== $3.jstree.root) {
              tmp.push(o);
            }
          }
          if (!tmp.length) {
            return false;
          }
          ccp_node = tmp;
          ccp_inst = this;
          ccp_mode = "move_node";
          this.trigger("cut", {
            "node": obj
          });
        },
        /**
         * copy a node (a later call to `paste(obj)` would copy the node)
         * @name copy(obj)
         * @param  {mixed} obj multiple objects can be passed using an array
         * @trigger copy.jstree
         */
        copy: function(obj) {
          if (!obj) {
            obj = this._data.core.selected.concat();
          }
          if (!$3.vakata.is_array(obj)) {
            obj = [obj];
          }
          if (!obj.length) {
            return false;
          }
          var tmp = [], o, t1, t2;
          for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
            o = this.get_node(obj[t1]);
            if (o && o.id !== undefined2 && o.id !== $3.jstree.root) {
              tmp.push(o);
            }
          }
          if (!tmp.length) {
            return false;
          }
          ccp_node = tmp;
          ccp_inst = this;
          ccp_mode = "copy_node";
          this.trigger("copy", {
            "node": obj
          });
        },
        /**
         * get the current buffer (any nodes that are waiting for a paste operation)
         * @name get_buffer()
         * @return {Object} an object consisting of `mode` ("copy_node" or "move_node"), `node` (an array of objects) and `inst` (the instance)
         */
        get_buffer: function() {
          return {
            "mode": ccp_mode,
            "node": ccp_node,
            "inst": ccp_inst
          };
        },
        /**
         * check if there is something in the buffer to paste
         * @name can_paste()
         * @return {Boolean}
         */
        can_paste: function() {
          return ccp_mode !== false && ccp_node !== false;
        },
        /**
         * copy or move the previously cut or copied nodes to a new parent
         * @name paste(obj [, pos])
         * @param  {mixed} obj the new parent
         * @param  {mixed} pos the position to insert at (besides integer, "first" and "last" are supported), defaults to integer `0`
         * @trigger paste.jstree
         */
        paste: function(obj, pos) {
          obj = this.get_node(obj);
          if (!obj || !ccp_mode || !ccp_mode.match(/^(copy_node|move_node)$/) || !ccp_node) {
            return false;
          }
          if (this[ccp_mode](ccp_node, obj, pos, false, false, false, ccp_inst)) {
            this.trigger("paste", {
              "parent": obj.id,
              "node": ccp_node,
              "mode": ccp_mode
            });
          }
          ccp_node = false;
          ccp_mode = false;
          ccp_inst = false;
        },
        /**
         * clear the buffer of previously copied or cut nodes
         * @name clear_buffer()
         * @trigger clear_buffer.jstree
         */
        clear_buffer: function() {
          ccp_node = false;
          ccp_mode = false;
          ccp_inst = false;
          this.trigger("clear_buffer");
        },
        /**
         * put a node in edit mode (input field to rename the node)
         * @name edit(obj [, default_text, callback])
         * @param  {mixed} obj
         * @param  {String} default_text the text to populate the input with (if omitted or set to a non-string value the node's text value is used)
         * @param  {Function} callback a function to be called once the text box is blurred, it is called in the instance's scope and receives the node, a status parameter (true if the rename is successful, false otherwise), a boolean indicating if the user cancelled the edit and the original unescaped value provided by the user. You can also access the node's title using .text
         */
        edit: function(obj, default_text, callback) {
          var rtl, w, a, s, t, h1, h2, fn, tmp, cancel = false;
          obj = this.get_node(obj);
          if (!obj) {
            return false;
          }
          if (!this.check("edit", obj, this.get_parent(obj))) {
            this.settings.core.error.call(this, this._data.core.last_error);
            return false;
          }
          tmp = obj;
          default_text = typeof default_text === "string" ? default_text : obj.text;
          this.set_text(obj, "");
          obj = this._open_to(obj);
          tmp.text = default_text;
          rtl = this._data.core.rtl;
          w = this.element.width();
          this._data.core.focused = tmp.id;
          a = obj.children(".jstree-anchor").trigger("focus");
          s = $3("<span></span>");
          t = default_text;
          h1 = $3("<div></div>", {
            css: {
              "position": "absolute",
              "top": "-200px",
              "left": rtl ? "0px" : "-1000px",
              "visibility": "hidden"
            }
          }).appendTo(document2.body);
          h2 = $3("<input />", {
            "value": t,
            "class": "jstree-rename-input",
            // "size" : t.length,
            "css": {
              "padding": "0",
              "border": "1px solid silver",
              "box-sizing": "border-box",
              "display": "inline-block",
              "height": this._data.core.li_height + "px",
              "lineHeight": this._data.core.li_height + "px",
              "width": "150px"
              // will be set a bit further down
            },
            "on": {
              "blur": function(e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                var i = s.children(".jstree-rename-input"), v = i.val(), f = this.settings.core.force_text, nv;
                if (v === "") {
                  v = t;
                }
                h1.remove();
                s.replaceWith(a);
                s.remove();
                t = f ? t : $3("<div></div>").append($3.parseHTML(t)).html();
                obj = this.get_node(obj);
                this.set_text(obj, t);
                nv = !!this.rename_node(obj, f ? $3("<div></div>").text(v).text() : $3("<div></div>").append($3.parseHTML(v)).html());
                if (!nv) {
                  this.set_text(obj, t);
                }
                this._data.core.focused = tmp.id;
                setTimeout(function() {
                  var node = this.get_node(tmp.id, true);
                  if (node.length) {
                    this._data.core.focused = tmp.id;
                    node.children(".jstree-anchor").trigger("focus");
                  }
                }.bind(this), 0);
                if (callback) {
                  callback.call(this, tmp, nv, cancel, v);
                }
                h2 = null;
              }.bind(this),
              "keydown": function(e) {
                var key = e.which;
                if (key === 27) {
                  cancel = true;
                  this.value = t;
                }
                if (key === 27 || key === 13 || key === 37 || key === 38 || key === 39 || key === 40 || key === 32) {
                  e.stopImmediatePropagation();
                }
                if (key === 27 || key === 13) {
                  e.preventDefault();
                  this.blur();
                }
              },
              "click": function(e) {
                e.stopImmediatePropagation();
              },
              "mousedown": function(e) {
                e.stopImmediatePropagation();
              },
              "keyup": function(e) {
                h2.width(Math.min(h1.text("pW" + this.value).width(), w));
              },
              "keypress": function(e) {
                if (e.which === 13) {
                  return false;
                }
              }
            }
          });
          fn = {
            fontFamily: a.css("fontFamily") || "",
            fontSize: a.css("fontSize") || "",
            fontWeight: a.css("fontWeight") || "",
            fontStyle: a.css("fontStyle") || "",
            fontStretch: a.css("fontStretch") || "",
            fontVariant: a.css("fontVariant") || "",
            letterSpacing: a.css("letterSpacing") || "",
            wordSpacing: a.css("wordSpacing") || ""
          };
          s.attr("class", a.attr("class")).append(a.contents().clone()).append(h2);
          a.replaceWith(s);
          h1.css(fn);
          h2.css(fn).width(Math.min(h1.text("pW" + h2[0].value).width(), w))[0].select();
          $3(document2).one("mousedown.jstree touchstart.jstree dnd_start.vakata", function(e) {
            if (h2 && e.target !== h2) {
              $3(h2).trigger("blur");
            }
          });
        },
        /**
         * changes the theme
         * @name set_theme(theme_name [, theme_url])
         * @param {String} theme_name the name of the new theme to apply
         * @param {mixed} theme_url  the location of the CSS file for this theme. Omit or set to `false` if you manually included the file. Set to `true` to autoload from the `core.themes.dir` directory.
         * @trigger set_theme.jstree
         */
        set_theme: function(theme_name, theme_url) {
          if (!theme_name) {
            return false;
          }
          if (theme_url === true) {
            var dir = this.settings.core.themes.dir;
            if (!dir) {
              dir = $3.jstree.path + "/themes";
            }
            theme_url = dir + "/" + theme_name + "/style.css";
          }
          if (theme_url && $3.inArray(theme_url, themes_loaded) === -1) {
            $3("head").append('<link rel="stylesheet" href="' + theme_url + '" type="text/css" />');
            themes_loaded.push(theme_url);
          }
          if (this._data.core.themes.name) {
            this.element.removeClass("jstree-" + this._data.core.themes.name);
          }
          this._data.core.themes.name = theme_name;
          this.element.addClass("jstree-" + theme_name);
          this.element[this.settings.core.themes.responsive ? "addClass" : "removeClass"]("jstree-" + theme_name + "-responsive");
          this.trigger("set_theme", {
            "theme": theme_name
          });
        },
        /**
         * gets the name of the currently applied theme name
         * @name get_theme()
         * @return {String}
         */
        get_theme: function() {
          return this._data.core.themes.name;
        },
        /**
         * changes the theme variant (if the theme has variants)
         * @name set_theme_variant(variant_name)
         * @param {String|Boolean} variant_name the variant to apply (if `false` is used the current variant is removed)
         */
        set_theme_variant: function(variant_name) {
          if (this._data.core.themes.variant) {
            this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);
          }
          this._data.core.themes.variant = variant_name;
          if (variant_name) {
            this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);
          }
        },
        /**
         * gets the name of the currently applied theme variant
         * @name get_theme()
         * @return {String}
         */
        get_theme_variant: function() {
          return this._data.core.themes.variant;
        },
        /**
         * shows a striped background on the container (if the theme supports it)
         * @name show_stripes()
         */
        show_stripes: function() {
          this._data.core.themes.stripes = true;
          this.get_container_ul().addClass("jstree-striped");
          this.trigger("show_stripes");
        },
        /**
         * hides the striped background on the container
         * @name hide_stripes()
         */
        hide_stripes: function() {
          this._data.core.themes.stripes = false;
          this.get_container_ul().removeClass("jstree-striped");
          this.trigger("hide_stripes");
        },
        /**
         * toggles the striped background on the container
         * @name toggle_stripes()
         */
        toggle_stripes: function() {
          if (this._data.core.themes.stripes) {
            this.hide_stripes();
          } else {
            this.show_stripes();
          }
        },
        /**
         * shows the connecting dots (if the theme supports it)
         * @name show_dots()
         */
        show_dots: function() {
          this._data.core.themes.dots = true;
          this.get_container_ul().removeClass("jstree-no-dots");
          this.trigger("show_dots");
        },
        /**
         * hides the connecting dots
         * @name hide_dots()
         */
        hide_dots: function() {
          this._data.core.themes.dots = false;
          this.get_container_ul().addClass("jstree-no-dots");
          this.trigger("hide_dots");
        },
        /**
         * toggles the connecting dots
         * @name toggle_dots()
         */
        toggle_dots: function() {
          if (this._data.core.themes.dots) {
            this.hide_dots();
          } else {
            this.show_dots();
          }
        },
        /**
         * show the node icons
         * @name show_icons()
         */
        show_icons: function() {
          this._data.core.themes.icons = true;
          this.get_container_ul().removeClass("jstree-no-icons");
          this.trigger("show_icons");
        },
        /**
         * hide the node icons
         * @name hide_icons()
         */
        hide_icons: function() {
          this._data.core.themes.icons = false;
          this.get_container_ul().addClass("jstree-no-icons");
          this.trigger("hide_icons");
        },
        /**
         * toggle the node icons
         * @name toggle_icons()
         */
        toggle_icons: function() {
          if (this._data.core.themes.icons) {
            this.hide_icons();
          } else {
            this.show_icons();
          }
        },
        /**
         * show the node ellipsis
         * @name show_icons()
         */
        show_ellipsis: function() {
          this._data.core.themes.ellipsis = true;
          this.get_container_ul().addClass("jstree-ellipsis");
          this.trigger("show_ellipsis");
        },
        /**
         * hide the node ellipsis
         * @name hide_ellipsis()
         */
        hide_ellipsis: function() {
          this._data.core.themes.ellipsis = false;
          this.get_container_ul().removeClass("jstree-ellipsis");
          this.trigger("hide_ellipsis");
        },
        /**
         * toggle the node ellipsis
         * @name toggle_icons()
         */
        toggle_ellipsis: function() {
          if (this._data.core.themes.ellipsis) {
            this.hide_ellipsis();
          } else {
            this.show_ellipsis();
          }
        },
        /**
         * set the node icon for a node
         * @name set_icon(obj, icon)
         * @param {mixed} obj
         * @param {String} icon the new icon - can be a path to an icon or a className, if using an image that is in the current directory use a `./` prefix, otherwise it will be detected as a class
         */
        set_icon: function(obj, icon) {
          var t1, t2, dom, old;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.set_icon(obj[t1], icon);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          old = obj.icon;
          obj.icon = icon === true || icon === null || icon === undefined2 || icon === "" ? true : icon;
          dom = this.get_node(obj, true).children(".jstree-anchor").children(".jstree-themeicon");
          if (icon === false) {
            dom.removeClass("jstree-themeicon-custom " + old).css("background", "").removeAttr("rel");
            this.hide_icon(obj);
          } else if (icon === true || icon === null || icon === undefined2 || icon === "") {
            dom.removeClass("jstree-themeicon-custom " + old).css("background", "").removeAttr("rel");
            if (old === false) {
              this.show_icon(obj);
            }
          } else if (icon.indexOf("/") === -1 && icon.indexOf(".") === -1) {
            dom.removeClass(old).css("background", "");
            dom.addClass(icon + " jstree-themeicon-custom").attr("rel", icon);
            if (old === false) {
              this.show_icon(obj);
            }
          } else {
            dom.removeClass(old).css("background", "");
            dom.addClass("jstree-themeicon-custom").css("background", "url('" + icon + "') center center no-repeat").attr("rel", icon);
            if (old === false) {
              this.show_icon(obj);
            }
          }
          return true;
        },
        /**
         * get the node icon for a node
         * @name get_icon(obj)
         * @param {mixed} obj
         * @return {String}
         */
        get_icon: function(obj) {
          obj = this.get_node(obj);
          return !obj || obj.id === $3.jstree.root ? false : obj.icon;
        },
        /**
         * hide the icon on an individual node
         * @name hide_icon(obj)
         * @param {mixed} obj
         */
        hide_icon: function(obj) {
          var t1, t2;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.hide_icon(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj === $3.jstree.root) {
            return false;
          }
          obj.icon = false;
          this.get_node(obj, true).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden");
          return true;
        },
        /**
         * show the icon on an individual node
         * @name show_icon(obj)
         * @param {mixed} obj
         */
        show_icon: function(obj) {
          var t1, t2, dom;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.show_icon(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          obj.icon = dom.length ? dom.children(".jstree-anchor").children(".jstree-themeicon").attr("rel") : true;
          if (!obj.icon) {
            obj.icon = true;
          }
          dom.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden");
          return true;
        }
      };
      $3.vakata = {};
      $3.vakata.attributes = function(node, with_values) {
        node = $3(node)[0];
        var attr = with_values ? {} : [];
        if (node && node.attributes) {
          $3.each(node.attributes, function(i, v) {
            if ($3.inArray(v.name.toLowerCase(), ["style", "contenteditable", "hasfocus", "tabindex"]) !== -1) {
              return;
            }
            if (v.value !== null && $3.vakata.trim(v.value) !== "") {
              if (with_values) {
                attr[v.name] = v.value;
              } else {
                attr.push(v.name);
              }
            }
          });
        }
        return attr;
      };
      $3.vakata.array_unique = function(array) {
        var a = [], i, j, l, o = {};
        for (i = 0, l = array.length; i < l; i++) {
          if (o[array[i]] === undefined2) {
            a.push(array[i]);
            o[array[i]] = true;
          }
        }
        return a;
      };
      $3.vakata.array_remove = function(array, from) {
        array.splice(from, 1);
        return array;
      };
      $3.vakata.array_remove_item = function(array, item) {
        var tmp = $3.inArray(item, array);
        return tmp !== -1 ? $3.vakata.array_remove(array, tmp) : array;
      };
      $3.vakata.array_filter = function(c, a, b, d, e) {
        if (c.filter) {
          return c.filter(a, b);
        }
        d = [];
        for (e in c) {
          if (~~e + "" === e + "" && e >= 0 && a.call(b, c[e], +e, c)) {
            d.push(c[e]);
          }
        }
        return d;
      };
      $3.vakata.trim = function(text) {
        return String.prototype.trim ? String.prototype.trim.call(text.toString()) : text.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      };
      $3.vakata.is_function = function(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
      };
      $3.vakata.is_array = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
      if (!Function.prototype.bind) {
        Function.prototype.bind = function() {
          var thatFunc = this, thatArg = arguments[0];
          var args = Array.prototype.slice.call(arguments, 1);
          if (typeof thatFunc !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          }
          return function() {
            var funcArgs = args.concat(Array.prototype.slice.call(arguments));
            return thatFunc.apply(thatArg, funcArgs);
          };
        };
      }
      $3.jstree.plugins.changed = function(options, parent) {
        var last = [];
        this.trigger = function(ev, data) {
          var i, j;
          if (!data) {
            data = {};
          }
          if (ev.replace(".jstree", "") === "changed") {
            data.changed = {
              selected: [],
              deselected: []
            };
            var tmp = {};
            for (i = 0, j = last.length; i < j; i++) {
              tmp[last[i]] = 1;
            }
            for (i = 0, j = data.selected.length; i < j; i++) {
              if (!tmp[data.selected[i]]) {
                data.changed.selected.push(data.selected[i]);
              } else {
                tmp[data.selected[i]] = 2;
              }
            }
            for (i = 0, j = last.length; i < j; i++) {
              if (tmp[last[i]] === 1) {
                data.changed.deselected.push(last[i]);
              }
            }
            last = data.selected.slice();
          }
          parent.trigger.call(this, ev, data);
        };
        this.refresh = function(skip_loading, forget_state) {
          last = [];
          return parent.refresh.apply(this, arguments);
        };
      };
      var _i = document2.createElement("I");
      _i.className = "jstree-icon jstree-checkbox";
      _i.setAttribute("role", "presentation");
      $3.jstree.defaults.checkbox = {
        /**
         * a boolean indicating if checkboxes should be visible (can be changed at a later time using `show_checkboxes()` and `hide_checkboxes`). Defaults to `true`.
         * @name $.jstree.defaults.checkbox.visible
         * @plugin checkbox
         */
        visible: true,
        /**
         * a boolean indicating if checkboxes should cascade down and have an undetermined state. Defaults to `true`.
         * @name $.jstree.defaults.checkbox.three_state
         * @plugin checkbox
         */
        three_state: true,
        /**
         * a boolean indicating if clicking anywhere on the node should act as clicking on the checkbox. Defaults to `true`.
         * @name $.jstree.defaults.checkbox.whole_node
         * @plugin checkbox
         */
        whole_node: true,
        /**
         * a boolean indicating if the selected style of a node should be kept, or removed. Defaults to `true`.
         * @name $.jstree.defaults.checkbox.keep_selected_style
         * @plugin checkbox
         */
        keep_selected_style: true,
        /**
         * This setting controls how cascading and undetermined nodes are applied.
         * If 'up' is in the string - cascading up is enabled, if 'down' is in the string - cascading down is enabled, if 'undetermined' is in the string - undetermined nodes will be used.
         * If `three_state` is set to `true` this setting is automatically set to 'up+down+undetermined'. Defaults to ''.
         * @name $.jstree.defaults.checkbox.cascade
         * @plugin checkbox
         */
        cascade: "",
        /**
         * This setting controls if checkbox are bound to the general tree selection or to an internal array maintained by the checkbox plugin. Defaults to `true`, only set to `false` if you know exactly what you are doing.
         * @name $.jstree.defaults.checkbox.tie_selection
         * @plugin checkbox
         */
        tie_selection: true,
        /**
         * This setting controls if cascading down affects disabled checkboxes
         * @name $.jstree.defaults.checkbox.cascade_to_disabled
         * @plugin checkbox
         */
        cascade_to_disabled: true,
        /**
         * This setting controls if cascading down affects hidden checkboxes
         * @name $.jstree.defaults.checkbox.cascade_to_hidden
         * @plugin checkbox
         */
        cascade_to_hidden: true
      };
      $3.jstree.plugins.checkbox = function(options, parent) {
        this.bind = function() {
          parent.bind.call(this);
          this._data.checkbox.uto = false;
          this._data.checkbox.selected = [];
          if (this.settings.checkbox.three_state) {
            this.settings.checkbox.cascade = "up+down+undetermined";
          }
          this.element.on("init.jstree", function() {
            this._data.checkbox.visible = this.settings.checkbox.visible;
            if (!this.settings.checkbox.keep_selected_style) {
              this.element.addClass("jstree-checkbox-no-clicked");
            }
            if (this.settings.checkbox.tie_selection) {
              this.element.addClass("jstree-checkbox-selection");
            }
          }.bind(this)).on("loading.jstree", function() {
            this[this._data.checkbox.visible ? "show_checkboxes" : "hide_checkboxes"]();
          }.bind(this));
          if (this.settings.checkbox.cascade.indexOf("undetermined") !== -1) {
            this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", function() {
              if (this._data.checkbox.uto) {
                clearTimeout(this._data.checkbox.uto);
              }
              this._data.checkbox.uto = setTimeout(this._undetermined.bind(this), 50);
            }.bind(this));
          }
          if (!this.settings.checkbox.tie_selection) {
            this.element.on("model.jstree", function(e, data) {
              var m = this._model.data, p = m[data.parent], dpc = data.nodes, i, j;
              for (i = 0, j = dpc.length; i < j; i++) {
                m[dpc[i]].state.checked = m[dpc[i]].state.checked || m[dpc[i]].original && m[dpc[i]].original.state && m[dpc[i]].original.state.checked;
                if (m[dpc[i]].state.checked) {
                  this._data.checkbox.selected.push(dpc[i]);
                }
              }
            }.bind(this));
          }
          if (this.settings.checkbox.cascade.indexOf("up") !== -1 || this.settings.checkbox.cascade.indexOf("down") !== -1) {
            this.element.on("model.jstree", function(e, data) {
              var m = this._model.data, p = m[data.parent], dpc = data.nodes, chd = [], c, i, j, k, l, tmp, s = this.settings.checkbox.cascade, t = this.settings.checkbox.tie_selection;
              if (s.indexOf("down") !== -1) {
                if (p.state[t ? "selected" : "checked"]) {
                  for (i = 0, j = dpc.length; i < j; i++) {
                    m[dpc[i]].state[t ? "selected" : "checked"] = true;
                  }
                  this._data[t ? "core" : "checkbox"].selected = this._data[t ? "core" : "checkbox"].selected.concat(dpc);
                } else {
                  for (i = 0, j = dpc.length; i < j; i++) {
                    if (m[dpc[i]].state[t ? "selected" : "checked"]) {
                      for (k = 0, l = m[dpc[i]].children_d.length; k < l; k++) {
                        m[m[dpc[i]].children_d[k]].state[t ? "selected" : "checked"] = true;
                      }
                      this._data[t ? "core" : "checkbox"].selected = this._data[t ? "core" : "checkbox"].selected.concat(m[dpc[i]].children_d);
                    }
                  }
                }
              }
              if (s.indexOf("up") !== -1) {
                for (i = 0, j = p.children_d.length; i < j; i++) {
                  if (!m[p.children_d[i]].children.length) {
                    chd.push(m[p.children_d[i]].parent);
                  }
                }
                chd = $3.vakata.array_unique(chd);
                for (k = 0, l = chd.length; k < l; k++) {
                  p = m[chd[k]];
                  while (p && p.id !== $3.jstree.root) {
                    c = 0;
                    for (i = 0, j = p.children.length; i < j; i++) {
                      c += m[p.children[i]].state[t ? "selected" : "checked"];
                    }
                    if (c === j) {
                      p.state[t ? "selected" : "checked"] = true;
                      this._data[t ? "core" : "checkbox"].selected.push(p.id);
                      tmp = this.get_node(p, true);
                      if (tmp && tmp.length) {
                        tmp.children(".jstree-anchor").attr("aria-selected", true).addClass(t ? "jstree-clicked" : "jstree-checked");
                      }
                    } else {
                      break;
                    }
                    p = this.get_node(p.parent);
                  }
                }
              }
              this._data[t ? "core" : "checkbox"].selected = $3.vakata.array_unique(this._data[t ? "core" : "checkbox"].selected);
            }.bind(this)).on(this.settings.checkbox.tie_selection ? "select_node.jstree" : "check_node.jstree", function(e, data) {
              var self = this, obj = data.node, m = this._model.data, par = this.get_node(obj.parent), i, j, c, tmp, s = this.settings.checkbox.cascade, t = this.settings.checkbox.tie_selection, sel = {}, cur = this._data[t ? "core" : "checkbox"].selected;
              for (i = 0, j = cur.length; i < j; i++) {
                sel[cur[i]] = true;
              }
              if (s.indexOf("down") !== -1) {
                var selectedIds = this._cascade_new_checked_state(obj.id, true);
                var temp = obj.children_d.concat(obj.id);
                for (i = 0, j = temp.length; i < j; i++) {
                  if (selectedIds.indexOf(temp[i]) > -1) {
                    sel[temp[i]] = true;
                  } else {
                    delete sel[temp[i]];
                  }
                }
              }
              if (s.indexOf("up") !== -1) {
                while (par && par.id !== $3.jstree.root) {
                  c = 0;
                  for (i = 0, j = par.children.length; i < j; i++) {
                    c += m[par.children[i]].state[t ? "selected" : "checked"];
                  }
                  if (c === j) {
                    par.state[t ? "selected" : "checked"] = true;
                    sel[par.id] = true;
                    tmp = this.get_node(par, true);
                    if (tmp && tmp.length) {
                      tmp.children(".jstree-anchor").attr("aria-selected", true).addClass(t ? "jstree-clicked" : "jstree-checked");
                    }
                  } else {
                    break;
                  }
                  par = this.get_node(par.parent);
                }
              }
              cur = [];
              for (i in sel) {
                if (sel.hasOwnProperty(i)) {
                  cur.push(i);
                }
              }
              this._data[t ? "core" : "checkbox"].selected = cur;
            }.bind(this)).on(this.settings.checkbox.tie_selection ? "deselect_all.jstree" : "uncheck_all.jstree", function(e, data) {
              var obj = this.get_node($3.jstree.root), m = this._model.data, i, j, tmp;
              for (i = 0, j = obj.children_d.length; i < j; i++) {
                tmp = m[obj.children_d[i]];
                if (tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined) {
                  tmp.original.state.undetermined = false;
                }
              }
            }.bind(this)).on(this.settings.checkbox.tie_selection ? "deselect_node.jstree" : "uncheck_node.jstree", function(e, data) {
              var self = this, obj = data.node, dom = this.get_node(obj, true), i, j, tmp, s = this.settings.checkbox.cascade, t = this.settings.checkbox.tie_selection, cur = this._data[t ? "core" : "checkbox"].selected, sel = {}, stillSelectedIds = [], allIds = obj.children_d.concat(obj.id);
              if (s.indexOf("down") !== -1) {
                var selectedIds = this._cascade_new_checked_state(obj.id, false);
                cur = $3.vakata.array_filter(cur, function(id) {
                  return allIds.indexOf(id) === -1 || selectedIds.indexOf(id) > -1;
                });
              }
              if (s.indexOf("up") !== -1 && cur.indexOf(obj.id) === -1) {
                for (i = 0, j = obj.parents.length; i < j; i++) {
                  tmp = this._model.data[obj.parents[i]];
                  tmp.state[t ? "selected" : "checked"] = false;
                  if (tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined) {
                    tmp.original.state.undetermined = false;
                  }
                  tmp = this.get_node(obj.parents[i], true);
                  if (tmp && tmp.length) {
                    tmp.children(".jstree-anchor").attr("aria-selected", false).removeClass(t ? "jstree-clicked" : "jstree-checked");
                  }
                }
                cur = $3.vakata.array_filter(cur, function(id) {
                  return obj.parents.indexOf(id) === -1;
                });
              }
              this._data[t ? "core" : "checkbox"].selected = cur;
            }.bind(this));
          }
          if (this.settings.checkbox.cascade.indexOf("up") !== -1) {
            this.element.on("delete_node.jstree", function(e, data) {
              var p = this.get_node(data.parent), m = this._model.data, i, j, c, tmp, t = this.settings.checkbox.tie_selection;
              while (p && p.id !== $3.jstree.root && !p.state[t ? "selected" : "checked"]) {
                c = 0;
                for (i = 0, j = p.children.length; i < j; i++) {
                  c += m[p.children[i]].state[t ? "selected" : "checked"];
                }
                if (j > 0 && c === j) {
                  p.state[t ? "selected" : "checked"] = true;
                  this._data[t ? "core" : "checkbox"].selected.push(p.id);
                  tmp = this.get_node(p, true);
                  if (tmp && tmp.length) {
                    tmp.children(".jstree-anchor").attr("aria-selected", true).addClass(t ? "jstree-clicked" : "jstree-checked");
                  }
                } else {
                  break;
                }
                p = this.get_node(p.parent);
              }
            }.bind(this)).on("move_node.jstree", function(e, data) {
              var is_multi = data.is_multi, old_par = data.old_parent, new_par = this.get_node(data.parent), m = this._model.data, p, c, i, j, tmp, t = this.settings.checkbox.tie_selection;
              if (!is_multi) {
                p = this.get_node(old_par);
                while (p && p.id !== $3.jstree.root && !p.state[t ? "selected" : "checked"]) {
                  c = 0;
                  for (i = 0, j = p.children.length; i < j; i++) {
                    c += m[p.children[i]].state[t ? "selected" : "checked"];
                  }
                  if (j > 0 && c === j) {
                    p.state[t ? "selected" : "checked"] = true;
                    this._data[t ? "core" : "checkbox"].selected.push(p.id);
                    tmp = this.get_node(p, true);
                    if (tmp && tmp.length) {
                      tmp.children(".jstree-anchor").attr("aria-selected", true).addClass(t ? "jstree-clicked" : "jstree-checked");
                    }
                  } else {
                    break;
                  }
                  p = this.get_node(p.parent);
                }
              }
              p = new_par;
              while (p && p.id !== $3.jstree.root) {
                c = 0;
                for (i = 0, j = p.children.length; i < j; i++) {
                  c += m[p.children[i]].state[t ? "selected" : "checked"];
                }
                if (c === j) {
                  if (!p.state[t ? "selected" : "checked"]) {
                    p.state[t ? "selected" : "checked"] = true;
                    this._data[t ? "core" : "checkbox"].selected.push(p.id);
                    tmp = this.get_node(p, true);
                    if (tmp && tmp.length) {
                      tmp.children(".jstree-anchor").attr("aria-selected", true).addClass(t ? "jstree-clicked" : "jstree-checked");
                    }
                  }
                } else {
                  if (p.state[t ? "selected" : "checked"]) {
                    p.state[t ? "selected" : "checked"] = false;
                    this._data[t ? "core" : "checkbox"].selected = $3.vakata.array_remove_item(this._data[t ? "core" : "checkbox"].selected, p.id);
                    tmp = this.get_node(p, true);
                    if (tmp && tmp.length) {
                      tmp.children(".jstree-anchor").attr("aria-selected", false).removeClass(t ? "jstree-clicked" : "jstree-checked");
                    }
                  } else {
                    break;
                  }
                }
                p = this.get_node(p.parent);
              }
            }.bind(this));
          }
        };
        this.get_undetermined = function(full) {
          if (this.settings.checkbox.cascade.indexOf("undetermined") === -1) {
            return [];
          }
          var i, j, k, l, o = {}, m = this._model.data, t = this.settings.checkbox.tie_selection, s = this._data[t ? "core" : "checkbox"].selected, p = [], tt = this, r = [];
          for (i = 0, j = s.length; i < j; i++) {
            if (m[s[i]] && m[s[i]].parents) {
              for (k = 0, l = m[s[i]].parents.length; k < l; k++) {
                if (o[m[s[i]].parents[k]] !== undefined2) {
                  break;
                }
                if (m[s[i]].parents[k] !== $3.jstree.root) {
                  o[m[s[i]].parents[k]] = true;
                  p.push(m[s[i]].parents[k]);
                }
              }
            }
          }
          this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function() {
            var tmp = tt.get_node(this), tmp2;
            if (!tmp) {
              return;
            }
            if (!tmp.state.loaded) {
              if (tmp.original && tmp.original.state && tmp.original.state.undetermined && tmp.original.state.undetermined === true) {
                if (o[tmp.id] === undefined2 && tmp.id !== $3.jstree.root) {
                  o[tmp.id] = true;
                  p.push(tmp.id);
                }
                for (k = 0, l = tmp.parents.length; k < l; k++) {
                  if (o[tmp.parents[k]] === undefined2 && tmp.parents[k] !== $3.jstree.root) {
                    o[tmp.parents[k]] = true;
                    p.push(tmp.parents[k]);
                  }
                }
              }
            } else {
              for (i = 0, j = tmp.children_d.length; i < j; i++) {
                tmp2 = m[tmp.children_d[i]];
                if (!tmp2.state.loaded && tmp2.original && tmp2.original.state && tmp2.original.state.undetermined && tmp2.original.state.undetermined === true) {
                  if (o[tmp2.id] === undefined2 && tmp2.id !== $3.jstree.root) {
                    o[tmp2.id] = true;
                    p.push(tmp2.id);
                  }
                  for (k = 0, l = tmp2.parents.length; k < l; k++) {
                    if (o[tmp2.parents[k]] === undefined2 && tmp2.parents[k] !== $3.jstree.root) {
                      o[tmp2.parents[k]] = true;
                      p.push(tmp2.parents[k]);
                    }
                  }
                }
              }
            }
          });
          for (i = 0, j = p.length; i < j; i++) {
            if (!m[p[i]].state[t ? "selected" : "checked"]) {
              r.push(full ? m[p[i]] : p[i]);
            }
          }
          return r;
        };
        this._undetermined = function() {
          if (this.element === null) {
            return;
          }
          var p = this.get_undetermined(false), i, j, s;
          this.element.find(".jstree-undetermined").removeClass("jstree-undetermined");
          for (i = 0, j = p.length; i < j; i++) {
            s = this.get_node(p[i], true);
            if (s && s.length) {
              s.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined");
            }
          }
        };
        this.redraw_node = function(obj, deep, is_callback, force_render) {
          obj = parent.redraw_node.apply(this, arguments);
          if (obj) {
            var i, j, tmp = null, icon = null;
            for (i = 0, j = obj.childNodes.length; i < j; i++) {
              if (obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
                tmp = obj.childNodes[i];
                break;
              }
            }
            if (tmp) {
              if (!this.settings.checkbox.tie_selection && this._model.data[obj.id].state.checked) {
                tmp.className += " jstree-checked";
              }
              icon = _i.cloneNode(false);
              if (this._model.data[obj.id].state.checkbox_disabled) {
                icon.className += " jstree-checkbox-disabled";
              }
              tmp.insertBefore(icon, tmp.childNodes[0]);
            }
          }
          if (!is_callback && this.settings.checkbox.cascade.indexOf("undetermined") !== -1) {
            if (this._data.checkbox.uto) {
              clearTimeout(this._data.checkbox.uto);
            }
            this._data.checkbox.uto = setTimeout(this._undetermined.bind(this), 50);
          }
          return obj;
        };
        this.show_checkboxes = function() {
          this._data.core.themes.checkboxes = true;
          this.get_container_ul().removeClass("jstree-no-checkboxes");
        };
        this.hide_checkboxes = function() {
          this._data.core.themes.checkboxes = false;
          this.get_container_ul().addClass("jstree-no-checkboxes");
        };
        this.toggle_checkboxes = function() {
          if (this._data.core.themes.checkboxes) {
            this.hide_checkboxes();
          } else {
            this.show_checkboxes();
          }
        };
        this.is_undetermined = function(obj) {
          obj = this.get_node(obj);
          var s = this.settings.checkbox.cascade, i, j, t = this.settings.checkbox.tie_selection, d = this._data[t ? "core" : "checkbox"].selected, m = this._model.data;
          if (!obj || obj.state[t ? "selected" : "checked"] === true || s.indexOf("undetermined") === -1 || s.indexOf("down") === -1 && s.indexOf("up") === -1) {
            return false;
          }
          if (!obj.state.loaded && obj.original.state.undetermined === true) {
            return true;
          }
          for (i = 0, j = obj.children_d.length; i < j; i++) {
            if ($3.inArray(obj.children_d[i], d) !== -1 || !m[obj.children_d[i]].state.loaded && m[obj.children_d[i]].original.state.undetermined) {
              return true;
            }
          }
          return false;
        };
        this.disable_checkbox = function(obj) {
          var t1, t2, dom;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.disable_checkbox(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          if (!obj.state.checkbox_disabled) {
            obj.state.checkbox_disabled = true;
            if (dom && dom.length) {
              dom.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled");
            }
            this.trigger("disable_checkbox", {
              "node": obj
            });
          }
        };
        this.enable_checkbox = function(obj) {
          var t1, t2, dom;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.enable_checkbox(obj[t1]);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          if (obj.state.checkbox_disabled) {
            obj.state.checkbox_disabled = false;
            if (dom && dom.length) {
              dom.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled");
            }
            this.trigger("enable_checkbox", {
              "node": obj
            });
          }
        };
        this.activate_node = function(obj, e) {
          if ($3(e.target).hasClass("jstree-checkbox-disabled")) {
            return false;
          }
          if (this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || $3(e.target).hasClass("jstree-checkbox"))) {
            e.ctrlKey = true;
          }
          if (this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !$3(e.target).hasClass("jstree-checkbox")) {
            return parent.activate_node.call(this, obj, e);
          }
          if (this.is_disabled(obj)) {
            return false;
          }
          if (this.is_checked(obj)) {
            this.uncheck_node(obj, e);
          } else {
            this.check_node(obj, e);
          }
          this.trigger("activate_node", {
            "node": this.get_node(obj)
          });
        };
        this.delete_node = function(obj) {
          if (this.settings.checkbox.tie_selection || $3.vakata.is_array(obj)) {
            return parent.delete_node.call(this, obj);
          }
          var tmp, k, l, c = false;
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          tmp = obj.children_d.concat([]);
          tmp.push(obj.id);
          for (k = 0, l = tmp.length; k < l; k++) {
            if (this._model.data[tmp[k]].state.checked) {
              c = true;
              break;
            }
          }
          if (c) {
            this._data.checkbox.selected = $3.vakata.array_filter(this._data.checkbox.selected, function(v) {
              return $3.inArray(v, tmp) === -1;
            });
          }
          return parent.delete_node.call(this, obj);
        };
        this._cascade_new_checked_state = function(id, checkedState) {
          var self = this;
          var t = this.settings.checkbox.tie_selection;
          var node = this._model.data[id];
          var selectedNodeIds = [];
          var selectedChildrenIds = [], i, j, selectedChildIds;
          if ((this.settings.checkbox.cascade_to_disabled || !node.state.disabled) && (this.settings.checkbox.cascade_to_hidden || !node.state.hidden)) {
            if (node.children) {
              for (i = 0, j = node.children.length; i < j; i++) {
                var childId = node.children[i];
                selectedChildIds = self._cascade_new_checked_state(childId, checkedState);
                selectedNodeIds = selectedNodeIds.concat(selectedChildIds);
                if (selectedChildIds.indexOf(childId) > -1) {
                  selectedChildrenIds.push(childId);
                }
              }
            }
            var dom = self.get_node(node, true);
            var undetermined = selectedChildrenIds.length > 0 && selectedChildrenIds.length < node.children.length;
            if (node.original && node.original.state && node.original.state.undetermined) {
              node.original.state.undetermined = undetermined;
            }
            if (undetermined) {
              node.state[t ? "selected" : "checked"] = false;
              dom.children(".jstree-anchor").attr("aria-selected", false).removeClass(t ? "jstree-clicked" : "jstree-checked");
            } else if (checkedState && selectedChildrenIds.length === node.children.length) {
              node.state[t ? "selected" : "checked"] = checkedState;
              selectedNodeIds.push(node.id);
              dom.children(".jstree-anchor").attr("aria-selected", true).addClass(t ? "jstree-clicked" : "jstree-checked");
            } else {
              node.state[t ? "selected" : "checked"] = false;
              dom.children(".jstree-anchor").attr("aria-selected", false).removeClass(t ? "jstree-clicked" : "jstree-checked");
            }
          } else {
            selectedChildIds = this.get_checked_descendants(id);
            if (node.state[t ? "selected" : "checked"]) {
              selectedChildIds.push(node.id);
            }
            selectedNodeIds = selectedNodeIds.concat(selectedChildIds);
          }
          return selectedNodeIds;
        };
        this.get_checked_descendants = function(id) {
          var self = this;
          var t = self.settings.checkbox.tie_selection;
          var node = self._model.data[id];
          return $3.vakata.array_filter(node.children_d, function(_id) {
            return self._model.data[_id].state[t ? "selected" : "checked"];
          });
        };
        this.check_node = function(obj, e) {
          if (this.settings.checkbox.tie_selection) {
            return this.select_node(obj, false, true, e);
          }
          var dom, t1, t2, th;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.check_node(obj[t1], e);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          if (!obj.state.checked) {
            obj.state.checked = true;
            this._data.checkbox.selected.push(obj.id);
            if (dom && dom.length) {
              dom.children(".jstree-anchor").addClass("jstree-checked");
            }
            this.trigger("check_node", {
              "node": obj,
              "selected": this._data.checkbox.selected,
              "event": e
            });
          }
        };
        this.uncheck_node = function(obj, e) {
          if (this.settings.checkbox.tie_selection) {
            return this.deselect_node(obj, false, e);
          }
          var t1, t2, dom;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.uncheck_node(obj[t1], e);
            }
            return true;
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          dom = this.get_node(obj, true);
          if (obj.state.checked) {
            obj.state.checked = false;
            this._data.checkbox.selected = $3.vakata.array_remove_item(this._data.checkbox.selected, obj.id);
            if (dom.length) {
              dom.children(".jstree-anchor").removeClass("jstree-checked");
            }
            this.trigger("uncheck_node", {
              "node": obj,
              "selected": this._data.checkbox.selected,
              "event": e
            });
          }
        };
        this.check_all = function() {
          if (this.settings.checkbox.tie_selection) {
            return this.select_all();
          }
          var tmp = this._data.checkbox.selected.concat([]), i, j;
          this._data.checkbox.selected = this._model.data[$3.jstree.root].children_d.concat();
          for (i = 0, j = this._data.checkbox.selected.length; i < j; i++) {
            if (this._model.data[this._data.checkbox.selected[i]]) {
              this._model.data[this._data.checkbox.selected[i]].state.checked = true;
            }
          }
          this.redraw(true);
          this.trigger("check_all", {
            "selected": this._data.checkbox.selected
          });
        };
        this.uncheck_all = function() {
          if (this.settings.checkbox.tie_selection) {
            return this.deselect_all();
          }
          var tmp = this._data.checkbox.selected.concat([]), i, j;
          for (i = 0, j = this._data.checkbox.selected.length; i < j; i++) {
            if (this._model.data[this._data.checkbox.selected[i]]) {
              this._model.data[this._data.checkbox.selected[i]].state.checked = false;
            }
          }
          this._data.checkbox.selected = [];
          this.element.find(".jstree-checked").removeClass("jstree-checked");
          this.trigger("uncheck_all", {
            "selected": this._data.checkbox.selected,
            "node": tmp
          });
        };
        this.is_checked = function(obj) {
          if (this.settings.checkbox.tie_selection) {
            return this.is_selected(obj);
          }
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          return obj.state.checked;
        };
        this.get_checked = function(full) {
          if (this.settings.checkbox.tie_selection) {
            return this.get_selected(full);
          }
          return full ? $3.map(this._data.checkbox.selected, function(i) {
            return this.get_node(i);
          }.bind(this)) : this._data.checkbox.selected.slice();
        };
        this.get_top_checked = function(full) {
          if (this.settings.checkbox.tie_selection) {
            return this.get_top_selected(full);
          }
          var tmp = this.get_checked(true), obj = {}, i, j, k, l;
          for (i = 0, j = tmp.length; i < j; i++) {
            obj[tmp[i].id] = tmp[i];
          }
          for (i = 0, j = tmp.length; i < j; i++) {
            for (k = 0, l = tmp[i].children_d.length; k < l; k++) {
              if (obj[tmp[i].children_d[k]]) {
                delete obj[tmp[i].children_d[k]];
              }
            }
          }
          tmp = [];
          for (i in obj) {
            if (obj.hasOwnProperty(i)) {
              tmp.push(i);
            }
          }
          return full ? $3.map(tmp, function(i2) {
            return this.get_node(i2);
          }.bind(this)) : tmp;
        };
        this.get_bottom_checked = function(full) {
          if (this.settings.checkbox.tie_selection) {
            return this.get_bottom_selected(full);
          }
          var tmp = this.get_checked(true), obj = [], i, j;
          for (i = 0, j = tmp.length; i < j; i++) {
            if (!tmp[i].children.length) {
              obj.push(tmp[i].id);
            }
          }
          return full ? $3.map(obj, function(i2) {
            return this.get_node(i2);
          }.bind(this)) : obj;
        };
        this.load_node = function(obj, callback) {
          var k, l, i, j, c, tmp;
          if (!$3.vakata.is_array(obj) && !this.settings.checkbox.tie_selection) {
            tmp = this.get_node(obj);
            if (tmp && tmp.state.loaded) {
              for (k = 0, l = tmp.children_d.length; k < l; k++) {
                if (this._model.data[tmp.children_d[k]].state.checked) {
                  c = true;
                  this._data.checkbox.selected = $3.vakata.array_remove_item(this._data.checkbox.selected, tmp.children_d[k]);
                }
              }
            }
          }
          return parent.load_node.apply(this, arguments);
        };
        this.get_state = function() {
          var state2 = parent.get_state.apply(this, arguments);
          if (this.settings.checkbox.tie_selection) {
            return state2;
          }
          state2.checkbox = this._data.checkbox.selected.slice();
          return state2;
        };
        this.set_state = function(state2, callback) {
          var res = parent.set_state.apply(this, arguments);
          if (res && state2.checkbox) {
            if (!this.settings.checkbox.tie_selection) {
              this.uncheck_all();
              var _this = this;
              $3.each(state2.checkbox, function(i, v) {
                _this.check_node(v);
              });
            }
            delete state2.checkbox;
            this.set_state(state2, callback);
            return false;
          }
          return res;
        };
        this.refresh = function(skip_loading, forget_state) {
          if (this.settings.checkbox.tie_selection) {
            this._data.checkbox.selected = [];
          }
          return parent.refresh.apply(this, arguments);
        };
      };
      $3.jstree.defaults.conditionalselect = function() {
        return true;
      };
      $3.jstree.plugins.conditionalselect = function(options, parent) {
        this.activate_node = function(obj, e) {
          if (this.settings.conditionalselect.call(this, this.get_node(obj), e)) {
            return parent.activate_node.call(this, obj, e);
          }
        };
      };
      $3.jstree.defaults.contextmenu = {
        /**
         * a boolean indicating if the node should be selected when the context menu is invoked on it. Defaults to `true`.
         * @name $.jstree.defaults.contextmenu.select_node
         * @plugin contextmenu
         */
        select_node: true,
        /**
         * a boolean indicating if the menu should be shown aligned with the node. Defaults to `true`, otherwise the mouse coordinates are used.
         * @name $.jstree.defaults.contextmenu.show_at_node
         * @plugin contextmenu
         */
        show_at_node: true,
        /**
         * an object of actions, or a function that accepts a node and a callback function and calls the callback function with an object of actions available for that node (you can also return the items too).
         *
         * Each action consists of a key (a unique name) and a value which is an object with the following properties (only label and action are required). Once a menu item is activated the `action` function will be invoked with an object containing the following keys: item - the contextmenu item definition as seen below, reference - the DOM node that was used (the tree node), element - the contextmenu DOM element, position - an object with x/y properties indicating the position of the menu.
         *
         * * `separator_before` - a boolean indicating if there should be a separator before this item
         * * `separator_after` - a boolean indicating if there should be a separator after this item
         * * `_disabled` - a boolean indicating if this action should be disabled
         * * `label` - a string - the name of the action (could be a function returning a string)
         * * `title` - a string - an optional tooltip for the item
         * * `action` - a function to be executed if this item is chosen, the function will receive 
         * * `icon` - a string, can be a path to an icon or a className, if using an image that is in the current directory use a `./` prefix, otherwise it will be detected as a class
         * * `shortcut` - keyCode which will trigger the action if the menu is open (for example `113` for rename, which equals F2)
         * * `shortcut_label` - shortcut label (like for example `F2` for rename)
         * * `submenu` - an object with the same structure as $.jstree.defaults.contextmenu.items which can be used to create a submenu - each key will be rendered as a separate option in a submenu that will appear once the current item is hovered
         *
         * @name $.jstree.defaults.contextmenu.items
         * @plugin contextmenu
         */
        items: function(o, cb) {
          return {
            "create": {
              "separator_before": false,
              "separator_after": true,
              "_disabled": false,
              //(this.check("create_node", data.reference, {}, "last")),
              "label": "Create",
              "action": function(data) {
                var inst = $3.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                inst.create_node(obj, {}, "last", function(new_node) {
                  try {
                    inst.edit(new_node);
                  } catch (ex) {
                    setTimeout(function() {
                      inst.edit(new_node);
                    }, 0);
                  }
                });
              }
            },
            "rename": {
              "separator_before": false,
              "separator_after": false,
              "_disabled": false,
              //(this.check("rename_node", data.reference, this.get_parent(data.reference), "")),
              "label": "Rename",
              /*!
              "shortcut"			: 113,
              "shortcut_label"	: 'F2',
              "icon"				: "glyphicon glyphicon-leaf",
              */
              "action": function(data) {
                var inst = $3.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                inst.edit(obj);
              }
            },
            "remove": {
              "separator_before": false,
              "icon": false,
              "separator_after": false,
              "_disabled": false,
              //(this.check("delete_node", data.reference, this.get_parent(data.reference), "")),
              "label": "Delete",
              "action": function(data) {
                var inst = $3.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                if (inst.is_selected(obj)) {
                  inst.delete_node(inst.get_selected());
                } else {
                  inst.delete_node(obj);
                }
              }
            },
            "ccp": {
              "separator_before": true,
              "icon": false,
              "separator_after": false,
              "label": "Edit",
              "action": false,
              "submenu": {
                "cut": {
                  "separator_before": false,
                  "separator_after": false,
                  "label": "Cut",
                  "action": function(data) {
                    var inst = $3.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                    if (inst.is_selected(obj)) {
                      inst.cut(inst.get_top_selected());
                    } else {
                      inst.cut(obj);
                    }
                  }
                },
                "copy": {
                  "separator_before": false,
                  "icon": false,
                  "separator_after": false,
                  "label": "Copy",
                  "action": function(data) {
                    var inst = $3.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                    if (inst.is_selected(obj)) {
                      inst.copy(inst.get_top_selected());
                    } else {
                      inst.copy(obj);
                    }
                  }
                },
                "paste": {
                  "separator_before": false,
                  "icon": false,
                  "_disabled": function(data) {
                    return !$3.jstree.reference(data.reference).can_paste();
                  },
                  "separator_after": false,
                  "label": "Paste",
                  "action": function(data) {
                    var inst = $3.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                    inst.paste(obj);
                  }
                }
              }
            }
          };
        }
      };
      $3.jstree.plugins.contextmenu = function(options, parent) {
        this.bind = function() {
          parent.bind.call(this);
          var last_ts = 0, cto = null, ex, ey;
          this.element.on("init.jstree loading.jstree ready.jstree", function() {
            this.get_container_ul().addClass("jstree-contextmenu");
          }.bind(this)).on("contextmenu.jstree", ".jstree-anchor", function(e, data) {
            if (e.target.tagName.toLowerCase() === "input") {
              return;
            }
            e.preventDefault();
            last_ts = e.ctrlKey ? +/* @__PURE__ */ new Date() : 0;
            if (data || cto) {
              last_ts = +/* @__PURE__ */ new Date() + 1e4;
            }
            if (cto) {
              clearTimeout(cto);
            }
            if (!this.is_loading(e.currentTarget)) {
              this.show_contextmenu(e.currentTarget, e.pageX, e.pageY, e);
            }
          }.bind(this)).on("click.jstree", ".jstree-anchor", function(e) {
            if (this._data.contextmenu.visible && (!last_ts || +/* @__PURE__ */ new Date() - last_ts > 250)) {
              $3.vakata.context.hide();
            }
            last_ts = 0;
          }.bind(this)).on("touchstart.jstree", ".jstree-anchor", function(e) {
            if (!e.originalEvent || !e.originalEvent.changedTouches || !e.originalEvent.changedTouches[0]) {
              return;
            }
            ex = e.originalEvent.changedTouches[0].clientX;
            ey = e.originalEvent.changedTouches[0].clientY;
            cto = setTimeout(function() {
              $3(e.currentTarget).trigger("contextmenu", true);
            }, 750);
          }).on("touchmove.vakata.jstree", function(e) {
            if (cto && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (Math.abs(ex - e.originalEvent.changedTouches[0].clientX) > 10 || Math.abs(ey - e.originalEvent.changedTouches[0].clientY) > 10)) {
              clearTimeout(cto);
              $3.vakata.context.hide();
            }
          }).on("touchend.vakata.jstree", function(e) {
            if (cto) {
              clearTimeout(cto);
            }
          });
          $3(document2).on("context_hide.vakata.jstree", function(e, data) {
            this._data.contextmenu.visible = false;
            $3(data.reference).removeClass("jstree-context");
          }.bind(this));
        };
        this.teardown = function() {
          if (this._data.contextmenu.visible) {
            $3.vakata.context.hide();
          }
          $3(document2).off("context_hide.vakata.jstree");
          parent.teardown.call(this);
        };
        this.show_contextmenu = function(obj, x, y, e) {
          obj = this.get_node(obj);
          if (!obj || obj.id === $3.jstree.root) {
            return false;
          }
          var s = this.settings.contextmenu, d = this.get_node(obj, true), a = d.children(".jstree-anchor"), o = false, i = false;
          if (s.show_at_node || x === undefined2 || y === undefined2) {
            o = a.offset();
            x = o.left;
            y = o.top + this._data.core.li_height;
          }
          if (this.settings.contextmenu.select_node && !this.is_selected(obj)) {
            this.activate_node(obj, e);
          }
          i = s.items;
          if ($3.vakata.is_function(i)) {
            i = i.call(this, obj, function(i2) {
              this._show_contextmenu(obj, x, y, i2);
            }.bind(this));
          }
          if ($3.isPlainObject(i)) {
            this._show_contextmenu(obj, x, y, i);
          }
        };
        this._show_contextmenu = function(obj, x, y, i) {
          var d = this.get_node(obj, true), a = d.children(".jstree-anchor");
          $3(document2).one("context_show.vakata.jstree", function(e, data) {
            var cls = "jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";
            $3(data.element).addClass(cls);
            a.addClass("jstree-context");
          }.bind(this));
          this._data.contextmenu.visible = true;
          $3.vakata.context.show(a, {
            "x": x,
            "y": y
          }, i);
          this.trigger("show_contextmenu", {
            "node": obj,
            "x": x,
            "y": y
          });
        };
      };
      (function($4) {
        var right_to_left = false, vakata_context = {
          element: false,
          reference: false,
          position_x: 0,
          position_y: 0,
          items: [],
          html: "",
          is_visible: false
        };
        $4.vakata.context = {
          settings: {
            hide_onmouseleave: 0,
            icons: true
          },
          _trigger: function(event_name) {
            $4(document2).triggerHandler("context_" + event_name + ".vakata", {
              "reference": vakata_context.reference,
              "element": vakata_context.element,
              "position": {
                "x": vakata_context.position_x,
                "y": vakata_context.position_y
              }
            });
          },
          _execute: function(i) {
            i = vakata_context.items[i];
            return i && (!i._disabled || $4.vakata.is_function(i._disabled) && !i._disabled({
              "item": i,
              "reference": vakata_context.reference,
              "element": vakata_context.element
            })) && i.action ? i.action.call(null, {
              "item": i,
              "reference": vakata_context.reference,
              "element": vakata_context.element,
              "position": {
                "x": vakata_context.position_x,
                "y": vakata_context.position_y
              }
            }) : false;
          },
          _parse: function(o, is_callback) {
            if (!o) {
              return false;
            }
            if (!is_callback) {
              vakata_context.html = "";
              vakata_context.items = [];
            }
            var str = "", sep = false, tmp;
            if (is_callback) {
              str += "<ul>";
            }
            $4.each(o, function(i, val) {
              if (!val) {
                return true;
              }
              vakata_context.items.push(val);
              if (!sep && val.separator_before) {
                str += "<li class='vakata-context-separator'><a href='#' " + ($4.vakata.context.settings.icons ? "" : 'class="vakata-context-no-icons"') + ">&#160;</a></li>";
              }
              sep = false;
              str += "<li class='" + (val._class || "") + (val._disabled === true || $4.vakata.is_function(val._disabled) && val._disabled({
                "item": val,
                "reference": vakata_context.reference,
                "element": vakata_context.element
              }) ? " vakata-contextmenu-disabled " : "") + "' " + (val.shortcut ? " data-shortcut='" + val.shortcut + "' " : "") + ">";
              str += "<a href='#' rel='" + (vakata_context.items.length - 1) + "' " + (val.title ? "title='" + val.title + "'" : "") + ">";
              if ($4.vakata.context.settings.icons) {
                str += "<i ";
                if (val.icon) {
                  if (val.icon.indexOf("/") !== -1 || val.icon.indexOf(".") !== -1) {
                    str += ` style='background:url("` + val.icon + `") center center no-repeat' `;
                  } else {
                    str += " class='" + val.icon + "' ";
                  }
                }
                str += "></i><span class='vakata-contextmenu-sep'>&#160;</span>";
              }
              str += ($4.vakata.is_function(val.label) ? val.label({
                "item": i,
                "reference": vakata_context.reference,
                "element": vakata_context.element
              }) : val.label) + (val.shortcut ? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' + val.shortcut + '">' + (val.shortcut_label || "") + "</span>" : "") + "</a>";
              if (val.submenu) {
                tmp = $4.vakata.context._parse(val.submenu, true);
                if (tmp) {
                  str += tmp;
                }
              }
              str += "</li>";
              if (val.separator_after) {
                str += "<li class='vakata-context-separator'><a href='#' " + ($4.vakata.context.settings.icons ? "" : 'class="vakata-context-no-icons"') + ">&#160;</a></li>";
                sep = true;
              }
            });
            str = str.replace(/<li class\='vakata-context-separator'\><\/li\>$/, "");
            if (is_callback) {
              str += "</ul>";
            }
            if (!is_callback) {
              vakata_context.html = str;
              $4.vakata.context._trigger("parse");
            }
            return str.length > 10 ? str : false;
          },
          _show_submenu: function(o) {
            o = $4(o);
            if (!o.length || !o.children("ul").length) {
              return;
            }
            var e = o.children("ul"), xl = o.offset().left, x = xl + o.outerWidth(), y = o.offset().top, w = e.width(), h = e.height(), dw = $4(window).width() + $4(window).scrollLeft(), dh = $4(window).height() + $4(window).scrollTop();
            if (right_to_left) {
              o[x - (w + 10 + o.outerWidth()) < 0 ? "addClass" : "removeClass"]("vakata-context-left");
            } else {
              o[x + w > dw && xl > dw - x ? "addClass" : "removeClass"]("vakata-context-right");
            }
            if (y + h + 10 > dh) {
              e.css("bottom", "-1px");
            }
            if (o.hasClass("vakata-context-right")) {
              if (xl < w) {
                e.css("margin-right", xl - w);
              }
            } else {
              if (dw - x < w) {
                e.css("margin-left", dw - x - w);
              }
            }
            e.show();
          },
          show: function(reference, position, data) {
            var o, e, x, y, w, h, dw, dh, cond = true;
            if (vakata_context.element && vakata_context.element.length) {
              vakata_context.element.width("");
            }
            switch (cond) {
              case (!position && !reference):
                return false;
              case (!!position && !!reference):
                vakata_context.reference = reference;
                vakata_context.position_x = position.x;
                vakata_context.position_y = position.y;
                break;
              case (!position && !!reference):
                vakata_context.reference = reference;
                o = reference.offset();
                vakata_context.position_x = o.left + reference.outerHeight();
                vakata_context.position_y = o.top;
                break;
              case (!!position && !reference):
                vakata_context.position_x = position.x;
                vakata_context.position_y = position.y;
                break;
            }
            if (!!reference && !data && $4(reference).data("vakata_contextmenu")) {
              data = $4(reference).data("vakata_contextmenu");
            }
            if ($4.vakata.context._parse(data)) {
              vakata_context.element.html(vakata_context.html);
            }
            if (vakata_context.items.length) {
              vakata_context.element.appendTo(document2.body);
              e = vakata_context.element;
              x = vakata_context.position_x;
              y = vakata_context.position_y;
              w = e.width();
              h = e.height();
              dw = $4(window).width() + $4(window).scrollLeft();
              dh = $4(window).height() + $4(window).scrollTop();
              if (right_to_left) {
                x -= e.outerWidth() - $4(reference).outerWidth();
                if (x < $4(window).scrollLeft() + 20) {
                  x = $4(window).scrollLeft() + 20;
                }
              }
              if (x + w + 20 > dw) {
                x = dw - (w + 20);
              }
              if (y + h + 20 > dh) {
                y = dh - (h + 20);
              }
              vakata_context.element.css({
                "left": x,
                "top": y
              }).show().find("a").first().trigger("focus").parent().addClass("vakata-context-hover");
              vakata_context.is_visible = true;
              $4.vakata.context._trigger("show");
            }
          },
          hide: function() {
            if (vakata_context.is_visible) {
              vakata_context.element.hide().find("ul").hide().end().find(":focus").trigger("blur").end().detach();
              vakata_context.is_visible = false;
              $4.vakata.context._trigger("hide");
            }
          }
        };
        $4(function() {
          right_to_left = $4(document2.body).css("direction") === "rtl";
          var to2 = false;
          vakata_context.element = $4("<ul class='vakata-context'></ul>");
          vakata_context.element.on("mouseenter", "li", function(e) {
            e.stopImmediatePropagation();
            if ($4.contains(this, e.relatedTarget)) {
              return;
            }
            if (to2) {
              clearTimeout(to2);
            }
            vakata_context.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end();
            $4(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover");
            $4.vakata.context._show_submenu(this);
          }).on("mouseleave", "li", function(e) {
            if ($4.contains(this, e.relatedTarget)) {
              return;
            }
            $4(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover");
          }).on("mouseleave", function(e) {
            $4(this).find(".vakata-context-hover").removeClass("vakata-context-hover");
            if ($4.vakata.context.settings.hide_onmouseleave) {
              to2 = setTimeout(/* @__PURE__ */ function(t) {
                return function() {
                  $4.vakata.context.hide();
                };
              }(this), $4.vakata.context.settings.hide_onmouseleave);
            }
          }).on("click", "a", function(e) {
            e.preventDefault();
            if (!$4(this).trigger("blur").parent().hasClass("vakata-context-disabled") && $4.vakata.context._execute($4(this).attr("rel")) !== false) {
              $4.vakata.context.hide();
            }
          }).on("keydown", "a", function(e) {
            var o = null;
            switch (e.which) {
              case 13:
              case 32:
                e.type = "click";
                e.preventDefault();
                $4(e.currentTarget).trigger(e);
                break;
              case 37:
                if (vakata_context.is_visible) {
                  vakata_context.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").trigger("focus");
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
                break;
              case 38:
                if (vakata_context.is_visible) {
                  o = vakata_context.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first();
                  if (!o.length) {
                    o = vakata_context.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last();
                  }
                  o.addClass("vakata-context-hover").children("a").trigger("focus");
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
                break;
              case 39:
                if (vakata_context.is_visible) {
                  vakata_context.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").trigger("focus");
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
                break;
              case 40:
                if (vakata_context.is_visible) {
                  o = vakata_context.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first();
                  if (!o.length) {
                    o = vakata_context.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first();
                  }
                  o.addClass("vakata-context-hover").children("a").trigger("focus");
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
                break;
              case 27:
                $4.vakata.context.hide();
                e.preventDefault();
                break;
              default:
                break;
            }
          }).on("keydown", function(e) {
            e.preventDefault();
            var a = vakata_context.element.find(".vakata-contextmenu-shortcut-" + e.which).parent();
            if (a.parent().not(".vakata-context-disabled")) {
              a.trigger("click");
            }
          });
          $4(document2).on("mousedown.vakata.jstree", function(e) {
            if (vakata_context.is_visible && vakata_context.element[0] !== e.target && !$4.contains(vakata_context.element[0], e.target)) {
              $4.vakata.context.hide();
            }
          }).on("context_show.vakata.jstree", function(e, data) {
            vakata_context.element.find("li:has(ul)").children("a").addClass("vakata-context-parent");
            if (right_to_left) {
              vakata_context.element.addClass("vakata-context-rtl").css("direction", "rtl");
            }
            vakata_context.element.find("ul").hide().end();
          });
        });
      })($3);
      $3.jstree.defaults.dnd = {
        /**
         * a boolean indicating if a copy should be possible while dragging (by pressint the meta key or Ctrl). Defaults to `true`.
         * @name $.jstree.defaults.dnd.copy
         * @plugin dnd
         */
        copy: true,
        /**
         * a number indicating how long a node should remain hovered while dragging to be opened. Defaults to `500`.
         * @name $.jstree.defaults.dnd.open_timeout
         * @plugin dnd
         */
        open_timeout: 500,
        /**
         * a function invoked each time a node is about to be dragged, invoked in the tree's scope and receives the nodes about to be dragged as an argument (array) and the event that started the drag - return `false` to prevent dragging
         * @name $.jstree.defaults.dnd.is_draggable
         * @plugin dnd
         */
        is_draggable: true,
        /**
         * a boolean indicating if checks should constantly be made while the user is dragging the node (as opposed to checking only on drop), default is `true`
         * @name $.jstree.defaults.dnd.check_while_dragging
         * @plugin dnd
         */
        check_while_dragging: true,
        /**
         * a boolean indicating if nodes from this tree should only be copied with dnd (as opposed to moved), default is `false`
         * @name $.jstree.defaults.dnd.always_copy
         * @plugin dnd
         */
        always_copy: false,
        /**
         * when dropping a node "inside", this setting indicates the position the node should go to - it can be an integer or a string: "first" (same as 0) or "last", default is `0`
         * @name $.jstree.defaults.dnd.inside_pos
         * @plugin dnd
         */
        inside_pos: 0,
        /**
         * when starting the drag on a node that is selected this setting controls if all selected nodes are dragged or only the single node, default is `true`, which means all selected nodes are dragged when the drag is started on a selected node
         * @name $.jstree.defaults.dnd.drag_selection
         * @plugin dnd
         */
        drag_selection: true,
        /**
         * controls whether dnd works on touch devices. If left as boolean true dnd will work the same as in desktop browsers, which in some cases may impair scrolling. If set to boolean false dnd will not work on touch devices. There is a special third option - string "selected" which means only selected nodes can be dragged on touch devices.
         * @name $.jstree.defaults.dnd.touch
         * @plugin dnd
         */
        touch: true,
        /**
         * controls whether items can be dropped anywhere on the node, not just on the anchor, by default only the node anchor is a valid drop target. Works best with the wholerow plugin. If enabled on mobile depending on the interface it might be hard for the user to cancel the drop, since the whole tree container will be a valid drop target.
         * @name $.jstree.defaults.dnd.large_drop_target
         * @plugin dnd
         */
        large_drop_target: false,
        /**
         * controls whether a drag can be initiated from any part of the node and not just the text/icon part, works best with the wholerow plugin. Keep in mind it can cause problems with tree scrolling on mobile depending on the interface - in that case set the touch option to "selected".
         * @name $.jstree.defaults.dnd.large_drag_target
         * @plugin dnd
         */
        large_drag_target: false,
        /**
         * controls whether use HTML5 dnd api instead of classical. That will allow better integration of dnd events with other HTML5 controls.
         * @reference http://caniuse.com/#feat=dragndrop
         * @name $.jstree.defaults.dnd.use_html5
         * @plugin dnd
         */
        use_html5: false,
        /**
         * controls whether items can be dropped anywhere on the tree.
         * @name $.jstree.defaults.dnd.blank_space_drop
         * @plugin dnd
         */
        blank_space_drop: false
      };
      var drg, elm;
      $3.jstree.plugins.dnd = function(options, parent) {
        this.init = function(el, options2) {
          parent.init.call(this, el, options2);
          this.settings.dnd.use_html5 = this.settings.dnd.use_html5 && "draggable" in document2.createElement("span");
        };
        this.bind = function() {
          parent.bind.call(this);
          this.element.on(this.settings.dnd.use_html5 ? "dragstart.jstree" : "mousedown.jstree touchstart.jstree", this.settings.dnd.large_drag_target ? ".jstree-node" : ".jstree-anchor", function(e) {
            if (this.settings.dnd.large_drag_target && $3(e.target).closest(".jstree-node")[0] !== e.currentTarget) {
              return true;
            }
            if (e.type === "touchstart" && (!this.settings.dnd.touch || this.settings.dnd.touch === "selected" && !$3(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked"))) {
              return true;
            }
            var obj = this.get_node(e.target), mlt = this.is_selected(obj) && this.settings.dnd.drag_selection ? this.get_top_selected().length : 1, txt = mlt > 1 ? mlt + " " + this.get_string("nodes") : this.get_text(e.currentTarget);
            if (this.settings.core.force_text) {
              txt = $3.vakata.html.escape(txt);
            }
            if (obj && (obj.id || obj.id === 0) && obj.id !== $3.jstree.root && (e.which === 1 || e.type === "touchstart" || e.type === "dragstart") && (this.settings.dnd.is_draggable === true || $3.vakata.is_function(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, mlt > 1 ? this.get_top_selected(true) : [obj], e))) {
              drg = {
                "jstree": true,
                "origin": this,
                "obj": this.get_node(obj, true),
                "nodes": mlt > 1 ? this.get_top_selected() : [obj.id]
              };
              elm = e.currentTarget;
              if (this.settings.dnd.use_html5) {
                $3.vakata.dnd._trigger("start", e, {
                  "helper": $3(),
                  "element": elm,
                  "data": drg
                });
              } else {
                this.element.trigger("mousedown.jstree");
                return $3.vakata.dnd.start(e, drg, '<div id="jstree-dnd" class="jstree-' + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive ? " jstree-dnd-responsive" : "") + '"><i class="jstree-icon jstree-er"></i>' + txt + '<ins class="jstree-copy">+</ins></div>');
              }
            }
          }.bind(this));
          if (this.settings.dnd.use_html5) {
            this.element.on("dragover.jstree", function(e) {
              e.preventDefault();
              $3.vakata.dnd._trigger("move", e, {
                "helper": $3(),
                "element": elm,
                "data": drg
              });
              return false;
            }).on("drop.jstree", function(e) {
              e.preventDefault();
              $3.vakata.dnd._trigger("stop", e, {
                "helper": $3(),
                "element": elm,
                "data": drg
              });
              return false;
            }.bind(this));
          }
        };
        this.redraw_node = function(obj, deep, callback, force_render) {
          obj = parent.redraw_node.apply(this, arguments);
          if (obj && this.settings.dnd.use_html5) {
            if (this.settings.dnd.large_drag_target) {
              obj.setAttribute("draggable", true);
            } else {
              var i, j, tmp = null;
              for (i = 0, j = obj.childNodes.length; i < j; i++) {
                if (obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
                  tmp = obj.childNodes[i];
                  break;
                }
              }
              if (tmp) {
                tmp.setAttribute("draggable", true);
              }
            }
          }
          return obj;
        };
      };
      $3(function() {
        var lastmv = false, laster = false, lastev = false, opento = false, marker = $3('<div id="jstree-marker">&#160;</div>').hide();
        $3(document2).on("dragover.vakata.jstree", function(e) {
          if (elm) {
            $3.vakata.dnd._trigger("move", e, {
              "helper": $3(),
              "element": elm,
              "data": drg
            });
          }
        }).on("drop.vakata.jstree", function(e) {
          if (elm) {
            $3.vakata.dnd._trigger("stop", e, {
              "helper": $3(),
              "element": elm,
              "data": drg
            });
            elm = null;
            drg = null;
          }
        }).on("dnd_start.vakata.jstree", function(e, data) {
          lastmv = false;
          lastev = false;
          if (!data || !data.data || !data.data.jstree) {
            return;
          }
          marker.appendTo(document2.body);
        }).on("dnd_move.vakata.jstree", function(e, data) {
          var isDifferentNode = data.event.target !== lastev.target;
          if (opento) {
            if (!data.event || data.event.type !== "dragover" || isDifferentNode) {
              clearTimeout(opento);
            }
          }
          if (!data || !data.data || !data.data.jstree) {
            return;
          }
          if (data.event.target.id && data.event.target.id === "jstree-marker") {
            return;
          }
          lastev = data.event;
          var ins = $3.jstree.reference(data.event.target), ref = false, off = false, rel = false, tmp, l, t, h, p, i, o, ok, t1, t2, op, ps, pr, ip, tm, is_copy, pn, c;
          if (ins && ins._data && ins._data.dnd) {
            marker.attr("class", "jstree-" + ins.get_theme() + (ins.settings.core.themes.responsive ? " jstree-dnd-responsive" : ""));
            is_copy = data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey));
            data.helper.children().attr("class", "jstree-" + ins.get_theme() + " jstree-" + ins.get_theme() + "-" + ins.get_theme_variant() + " " + (ins.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")).find(".jstree-copy").first()[is_copy ? "show" : "hide"]();
            if ((data.event.target === ins.element[0] || data.event.target === ins.get_container_ul()[0]) && (ins.get_container_ul().children().length === 0 || ins.settings.dnd.blank_space_drop)) {
              ok = true;
              for (t1 = 0, t2 = data.data.nodes.length; t1 < t2; t1++) {
                ok = ok && ins.check(data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey)) ? "copy_node" : "move_node", data.data.origin && data.data.origin !== ins ? data.data.origin.get_node(data.data.nodes[t1]) : data.data.nodes[t1], $3.jstree.root, "last", {
                  "dnd": true,
                  "ref": ins.get_node($3.jstree.root),
                  "pos": "i",
                  "origin": data.data.origin,
                  "is_multi": data.data.origin && data.data.origin !== ins,
                  "is_foreign": !data.data.origin
                });
                if (!ok) {
                  break;
                }
              }
              if (ok) {
                lastmv = {
                  "ins": ins,
                  "par": $3.jstree.root,
                  "pos": "last"
                };
                marker.hide();
                data.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok");
                if (data.event.originalEvent && data.event.originalEvent.dataTransfer) {
                  data.event.originalEvent.dataTransfer.dropEffect = is_copy ? "copy" : "move";
                }
                return;
              }
            } else {
              ref = ins.settings.dnd.large_drop_target ? $3(data.event.target).closest(".jstree-node").children(".jstree-anchor") : $3(data.event.target).closest(".jstree-anchor");
              if (ref && ref.length && ref.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")) {
                off = ref.offset();
                rel = (data.event.pageY !== undefined2 ? data.event.pageY : data.event.originalEvent.pageY) - off.top;
                h = ref.outerHeight();
                if (rel < h / 3) {
                  o = ["b", "i", "a"];
                } else if (rel > h - h / 3) {
                  o = ["a", "i", "b"];
                } else {
                  o = rel > h / 2 ? ["i", "a", "b"] : ["i", "b", "a"];
                }
                $3.each(o, function(j, v) {
                  switch (v) {
                    case "b":
                      l = off.left - 6;
                      t = off.top;
                      p = ins.get_parent(ref);
                      i = ref.parent().index();
                      c = "jstree-below";
                      break;
                    case "i":
                      ip = ins.settings.dnd.inside_pos;
                      tm = ins.get_node(ref.parent());
                      l = off.left - 2;
                      t = off.top + h / 2 + 1;
                      p = tm.id;
                      i = ip === "first" ? 0 : ip === "last" ? tm.children.length : Math.min(ip, tm.children.length);
                      c = "jstree-inside";
                      break;
                    case "a":
                      l = off.left - 6;
                      t = off.top + h;
                      p = ins.get_parent(ref);
                      i = ref.parent().index() + 1;
                      c = "jstree-above";
                      break;
                  }
                  ok = true;
                  for (t1 = 0, t2 = data.data.nodes.length; t1 < t2; t1++) {
                    op = data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey)) ? "copy_node" : "move_node";
                    ps = i;
                    if (op === "move_node" && v === "a" && data.data.origin && data.data.origin === ins && p === ins.get_parent(data.data.nodes[t1])) {
                      pr = ins.get_node(p);
                      if (ps > $3.inArray(data.data.nodes[t1], pr.children)) {
                        ps -= 1;
                      }
                    }
                    ok = ok && (ins && ins.settings && ins.settings.dnd && ins.settings.dnd.check_while_dragging === false || ins.check(op, data.data.origin && data.data.origin !== ins ? data.data.origin.get_node(data.data.nodes[t1]) : data.data.nodes[t1], p, ps, {
                      "dnd": true,
                      "ref": ins.get_node(ref.parent()),
                      "pos": v,
                      "origin": data.data.origin,
                      "is_multi": data.data.origin && data.data.origin !== ins,
                      "is_foreign": !data.data.origin
                    }));
                    if (!ok) {
                      if (ins && ins.last_error) {
                        laster = ins.last_error();
                      }
                      break;
                    }
                  }
                  if (v === "i" && ref.parent().is(".jstree-closed") && ins.settings.dnd.open_timeout) {
                    if (!data.event || data.event.type !== "dragover" || isDifferentNode) {
                      if (opento) {
                        clearTimeout(opento);
                      }
                      opento = setTimeout(/* @__PURE__ */ function(x, z) {
                        return function() {
                          x.open_node(z);
                        };
                      }(ins, ref), ins.settings.dnd.open_timeout);
                    }
                  }
                  if (ok) {
                    pn = ins.get_node(p, true);
                    if (!pn.hasClass(".jstree-dnd-parent")) {
                      $3(".jstree-dnd-parent").removeClass("jstree-dnd-parent");
                      pn.addClass("jstree-dnd-parent");
                    }
                    lastmv = {
                      "ins": ins,
                      "par": p,
                      "pos": v === "i" && ip === "last" && i === 0 && !ins.is_loaded(tm) ? "last" : i
                    };
                    marker.css({
                      "left": l + "px",
                      "top": t + "px"
                    }).show();
                    marker.removeClass("jstree-above jstree-inside jstree-below").addClass(c);
                    data.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok");
                    if (data.event.originalEvent && data.event.originalEvent.dataTransfer) {
                      data.event.originalEvent.dataTransfer.dropEffect = is_copy ? "copy" : "move";
                    }
                    laster = {};
                    o = true;
                    return false;
                  }
                });
                if (o === true) {
                  return;
                }
              }
            }
          }
          $3(".jstree-dnd-parent").removeClass("jstree-dnd-parent");
          lastmv = false;
          data.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er");
          if (data.event.originalEvent && data.event.originalEvent.dataTransfer) {
          }
          marker.hide();
        }).on("dnd_scroll.vakata.jstree", function(e, data) {
          if (!data || !data.data || !data.data.jstree) {
            return;
          }
          marker.hide();
          lastmv = false;
          lastev = false;
          data.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er");
        }).on("dnd_stop.vakata.jstree", function(e, data) {
          $3(".jstree-dnd-parent").removeClass("jstree-dnd-parent");
          if (opento) {
            clearTimeout(opento);
          }
          if (!data || !data.data || !data.data.jstree) {
            return;
          }
          marker.hide().detach();
          var i, j, nodes = [];
          if (lastmv) {
            for (i = 0, j = data.data.nodes.length; i < j; i++) {
              nodes[i] = data.data.origin ? data.data.origin.get_node(data.data.nodes[i]) : data.data.nodes[i];
            }
            lastmv.ins[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey)) ? "copy_node" : "move_node"](nodes, lastmv.par, lastmv.pos, false, false, false, data.data.origin);
          } else {
            i = $3(data.event.target).closest(".jstree");
            if (i.length && laster && laster.error && laster.error === "check") {
              i = i.jstree(true);
              if (i) {
                i.settings.core.error.call(this, laster);
              }
            }
          }
          lastev = false;
          lastmv = false;
        }).on("keyup.jstree keydown.jstree", function(e, data) {
          data = $3.vakata.dnd._get();
          if (data && data.data && data.data.jstree) {
            if (e.type === "keyup" && e.which === 27) {
              if (opento) {
                clearTimeout(opento);
              }
              lastmv = false;
              laster = false;
              lastev = false;
              opento = false;
              marker.hide().detach();
              $3.vakata.dnd._clean();
            } else {
              data.helper.find(".jstree-copy").first()[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (e.metaKey || e.ctrlKey)) ? "show" : "hide"]();
              if (lastev) {
                lastev.metaKey = e.metaKey;
                lastev.ctrlKey = e.ctrlKey;
                $3.vakata.dnd._trigger("move", lastev);
              }
            }
          }
        });
      });
      (function($4) {
        $4.vakata.html = {
          div: $4("<div></div>"),
          escape: function(str) {
            return $4.vakata.html.div.text(str).html();
          },
          strip: function(str) {
            return $4.vakata.html.div.empty().append($4.parseHTML(str)).text();
          }
        };
        var vakata_dnd = {
          element: false,
          target: false,
          is_down: false,
          is_drag: false,
          helper: false,
          helper_w: 0,
          data: false,
          init_x: 0,
          init_y: 0,
          scroll_l: 0,
          scroll_t: 0,
          scroll_e: false,
          scroll_i: false,
          is_touch: false
        };
        $4.vakata.dnd = {
          settings: {
            scroll_speed: 10,
            scroll_proximity: 20,
            helper_left: 5,
            helper_top: 10,
            threshold: 5,
            threshold_touch: 10
          },
          _trigger: function(event_name, e, data) {
            if (data === undefined2) {
              data = $4.vakata.dnd._get();
            }
            data.event = e;
            $4(document2).triggerHandler("dnd_" + event_name + ".vakata", data);
          },
          _get: function() {
            return {
              "data": vakata_dnd.data,
              "element": vakata_dnd.element,
              "helper": vakata_dnd.helper
            };
          },
          _clean: function() {
            if (vakata_dnd.helper) {
              vakata_dnd.helper.remove();
            }
            if (vakata_dnd.scroll_i) {
              clearInterval(vakata_dnd.scroll_i);
              vakata_dnd.scroll_i = false;
            }
            vakata_dnd = {
              element: false,
              target: false,
              is_down: false,
              is_drag: false,
              helper: false,
              helper_w: 0,
              data: false,
              init_x: 0,
              init_y: 0,
              scroll_l: 0,
              scroll_t: 0,
              scroll_e: false,
              scroll_i: false,
              is_touch: false
            };
            elm = null;
            $4(document2).off("mousemove.vakata.jstree touchmove.vakata.jstree", $4.vakata.dnd.drag);
            $4(document2).off("mouseup.vakata.jstree touchend.vakata.jstree", $4.vakata.dnd.stop);
          },
          _scroll: function(init_only) {
            if (!vakata_dnd.scroll_e || !vakata_dnd.scroll_l && !vakata_dnd.scroll_t) {
              if (vakata_dnd.scroll_i) {
                clearInterval(vakata_dnd.scroll_i);
                vakata_dnd.scroll_i = false;
              }
              return false;
            }
            if (!vakata_dnd.scroll_i) {
              vakata_dnd.scroll_i = setInterval($4.vakata.dnd._scroll, 100);
              return false;
            }
            if (init_only === true) {
              return false;
            }
            var i = vakata_dnd.scroll_e.scrollTop(), j = vakata_dnd.scroll_e.scrollLeft();
            vakata_dnd.scroll_e.scrollTop(i + vakata_dnd.scroll_t * $4.vakata.dnd.settings.scroll_speed);
            vakata_dnd.scroll_e.scrollLeft(j + vakata_dnd.scroll_l * $4.vakata.dnd.settings.scroll_speed);
            if (i !== vakata_dnd.scroll_e.scrollTop() || j !== vakata_dnd.scroll_e.scrollLeft()) {
              $4.vakata.dnd._trigger("scroll", vakata_dnd.scroll_e);
            }
          },
          start: function(e, data, html) {
            if (e.type === "touchstart" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
              e.pageX = e.originalEvent.changedTouches[0].pageX;
              e.pageY = e.originalEvent.changedTouches[0].pageY;
              e.target = document2.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);
            }
            if (vakata_dnd.is_drag) {
              $4.vakata.dnd.stop({});
            }
            try {
              e.currentTarget.unselectable = "on";
              e.currentTarget.onselectstart = function() {
                return false;
              };
              if (e.currentTarget.style) {
                e.currentTarget.style.touchAction = "none";
                e.currentTarget.style.msTouchAction = "none";
                e.currentTarget.style.MozUserSelect = "none";
              }
            } catch (ignore) {
            }
            vakata_dnd.init_x = e.pageX;
            vakata_dnd.init_y = e.pageY;
            vakata_dnd.data = data;
            vakata_dnd.is_down = true;
            vakata_dnd.element = e.currentTarget;
            vakata_dnd.target = e.target;
            vakata_dnd.is_touch = e.type === "touchstart";
            if (html !== false) {
              vakata_dnd.helper = $4("<div id='vakata-dnd'></div>").html(html).css({
                "display": "block",
                "margin": "0",
                "padding": "0",
                "position": "absolute",
                "top": "-2000px",
                "lineHeight": "16px",
                "zIndex": "10000"
              });
            }
            $4(document2).on("mousemove.vakata.jstree touchmove.vakata.jstree", $4.vakata.dnd.drag);
            $4(document2).on("mouseup.vakata.jstree touchend.vakata.jstree", $4.vakata.dnd.stop);
            return false;
          },
          drag: function(e) {
            if (e.type === "touchmove" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
              e.pageX = e.originalEvent.changedTouches[0].pageX;
              e.pageY = e.originalEvent.changedTouches[0].pageY;
              e.target = document2.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);
            }
            if (!vakata_dnd.is_down) {
              return;
            }
            if (!vakata_dnd.is_drag) {
              if (Math.abs(e.pageX - vakata_dnd.init_x) > (vakata_dnd.is_touch ? $4.vakata.dnd.settings.threshold_touch : $4.vakata.dnd.settings.threshold) || Math.abs(e.pageY - vakata_dnd.init_y) > (vakata_dnd.is_touch ? $4.vakata.dnd.settings.threshold_touch : $4.vakata.dnd.settings.threshold)) {
                if (vakata_dnd.helper) {
                  vakata_dnd.helper.appendTo(document2.body);
                  vakata_dnd.helper_w = vakata_dnd.helper.outerWidth();
                }
                vakata_dnd.is_drag = true;
                $4(vakata_dnd.target).one("click.vakata", false);
                $4.vakata.dnd._trigger("start", e);
              } else {
                return;
              }
            }
            var d = false, w = false, dh = false, wh = false, dw = false, ww = false, dt = false, dl = false, ht = false, hl = false;
            vakata_dnd.scroll_t = 0;
            vakata_dnd.scroll_l = 0;
            vakata_dnd.scroll_e = false;
            $4($4(e.target).parentsUntil("body").addBack().get().reverse()).filter(function() {
              return this.ownerDocument && /^auto|scroll$/.test($4(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth);
            }).each(function() {
              var t = $4(this), o = t.offset();
              if (this.scrollHeight > this.offsetHeight) {
                if (o.top + t.height() - e.pageY < $4.vakata.dnd.settings.scroll_proximity) {
                  vakata_dnd.scroll_t = 1;
                }
                if (e.pageY - o.top < $4.vakata.dnd.settings.scroll_proximity) {
                  vakata_dnd.scroll_t = -1;
                }
              }
              if (this.scrollWidth > this.offsetWidth) {
                if (o.left + t.width() - e.pageX < $4.vakata.dnd.settings.scroll_proximity) {
                  vakata_dnd.scroll_l = 1;
                }
                if (e.pageX - o.left < $4.vakata.dnd.settings.scroll_proximity) {
                  vakata_dnd.scroll_l = -1;
                }
              }
              if (vakata_dnd.scroll_t || vakata_dnd.scroll_l) {
                vakata_dnd.scroll_e = $4(this);
                return false;
              }
            });
            if (!vakata_dnd.scroll_e) {
              d = $4(document2);
              w = $4(window);
              dh = d.height();
              wh = w.height();
              dw = d.width();
              ww = w.width();
              dt = d.scrollTop();
              dl = d.scrollLeft();
              if (dh > wh && e.pageY - dt < $4.vakata.dnd.settings.scroll_proximity) {
                vakata_dnd.scroll_t = -1;
              }
              if (dh > wh && wh - (e.pageY - dt) < $4.vakata.dnd.settings.scroll_proximity) {
                vakata_dnd.scroll_t = 1;
              }
              if (dw > ww && e.pageX - dl < $4.vakata.dnd.settings.scroll_proximity) {
                vakata_dnd.scroll_l = -1;
              }
              if (dw > ww && ww - (e.pageX - dl) < $4.vakata.dnd.settings.scroll_proximity) {
                vakata_dnd.scroll_l = 1;
              }
              if (vakata_dnd.scroll_t || vakata_dnd.scroll_l) {
                vakata_dnd.scroll_e = d;
              }
            }
            if (vakata_dnd.scroll_e) {
              $4.vakata.dnd._scroll(true);
            }
            if (vakata_dnd.helper) {
              ht = parseInt(e.pageY + $4.vakata.dnd.settings.helper_top, 10);
              hl = parseInt(e.pageX + $4.vakata.dnd.settings.helper_left, 10);
              if (dh && ht + 25 > dh) {
                ht = dh - 50;
              }
              if (dw && hl + vakata_dnd.helper_w > dw) {
                hl = dw - (vakata_dnd.helper_w + 2);
              }
              vakata_dnd.helper.css({
                left: hl + "px",
                top: ht + "px"
              });
            }
            $4.vakata.dnd._trigger("move", e);
            return false;
          },
          stop: function(e) {
            if (e.type === "touchend" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
              e.pageX = e.originalEvent.changedTouches[0].pageX;
              e.pageY = e.originalEvent.changedTouches[0].pageY;
              e.target = document2.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);
            }
            if (vakata_dnd.is_drag) {
              if (e.target !== vakata_dnd.target) {
                $4(vakata_dnd.target).off("click.vakata");
              }
              $4.vakata.dnd._trigger("stop", e);
            } else {
              if (e.type === "touchend" && e.target === vakata_dnd.target) {
                var to2 = setTimeout(function() {
                  $4(e.target).trigger("click");
                }, 100);
                $4(e.target).one("click", function() {
                  if (to2) {
                    clearTimeout(to2);
                  }
                });
              }
            }
            $4.vakata.dnd._clean();
            return false;
          }
        };
      })($3);
      $3.jstree.defaults.massload = null;
      $3.jstree.plugins.massload = function(options, parent) {
        this.init = function(el, options2) {
          this._data.massload = {};
          parent.init.call(this, el, options2);
        };
        this._load_nodes = function(nodes, callback, is_callback, force_reload) {
          var s = this.settings.massload, toLoad = [], m = this._model.data, i, j, dom;
          if (!is_callback) {
            for (i = 0, j = nodes.length; i < j; i++) {
              if (!m[nodes[i]] || !m[nodes[i]].state.loaded && !m[nodes[i]].state.failed || force_reload) {
                toLoad.push(nodes[i]);
                dom = this.get_node(nodes[i], true);
                if (dom && dom.length) {
                  dom.addClass("jstree-loading").attr("aria-busy", true);
                }
              }
            }
            this._data.massload = {};
            if (toLoad.length) {
              if ($3.vakata.is_function(s)) {
                return s.call(this, toLoad, function(data) {
                  var i2, j2;
                  if (data) {
                    for (i2 in data) {
                      if (data.hasOwnProperty(i2)) {
                        this._data.massload[i2] = data[i2];
                      }
                    }
                  }
                  for (i2 = 0, j2 = nodes.length; i2 < j2; i2++) {
                    dom = this.get_node(nodes[i2], true);
                    if (dom && dom.length) {
                      dom.removeClass("jstree-loading").attr("aria-busy", false);
                    }
                  }
                  parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
                }.bind(this));
              }
              if (typeof s === "object" && s && s.url) {
                s = $3.extend(true, {}, s);
                if ($3.vakata.is_function(s.url)) {
                  s.url = s.url.call(this, toLoad);
                }
                if ($3.vakata.is_function(s.data)) {
                  s.data = s.data.call(this, toLoad);
                }
                return $3.ajax(s).done(function(data, t, x) {
                  var i2, j2;
                  if (data) {
                    for (i2 in data) {
                      if (data.hasOwnProperty(i2)) {
                        this._data.massload[i2] = data[i2];
                      }
                    }
                  }
                  for (i2 = 0, j2 = nodes.length; i2 < j2; i2++) {
                    dom = this.get_node(nodes[i2], true);
                    if (dom && dom.length) {
                      dom.removeClass("jstree-loading").attr("aria-busy", false);
                    }
                  }
                  parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
                }.bind(this)).fail(function(f) {
                  parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
                }.bind(this));
              }
            }
          }
          return parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
        };
        this._load_node = function(obj, callback) {
          var data = this._data.massload[obj.id], rslt = null, dom;
          if (data) {
            rslt = this[typeof data === "string" ? "_append_html_data" : "_append_json_data"](obj, typeof data === "string" ? $3($3.parseHTML(data)).filter(function() {
              return this.nodeType !== 3;
            }) : data, function(status) {
              callback.call(this, status);
            });
            dom = this.get_node(obj.id, true);
            if (dom && dom.length) {
              dom.removeClass("jstree-loading").attr("aria-busy", false);
            }
            delete this._data.massload[obj.id];
            return rslt;
          }
          return parent._load_node.call(this, obj, callback);
        };
      };
      $3.jstree.defaults.search = {
        /**
         * a jQuery-like AJAX config, which jstree uses if a server should be queried for results.
         *
         * A `str` (which is the search string) parameter will be added with the request, an optional `inside` parameter will be added if the search is limited to a node id. The expected result is a JSON array with nodes that need to be opened so that matching nodes will be revealed.
         * Leave this setting as `false` to not query the server. You can also set this to a function, which will be invoked in the instance's scope and receive 3 parameters - the search string, the callback to call with the array of nodes to load, and the optional node ID to limit the search to
         * @name $.jstree.defaults.search.ajax
         * @plugin search
         */
        ajax: false,
        /**
         * Indicates if the search should be fuzzy or not (should `chnd3` match `child node 3`). Default is `false`.
         * @name $.jstree.defaults.search.fuzzy
         * @plugin search
         */
        fuzzy: false,
        /**
         * Indicates if the search should be case sensitive. Default is `false`.
         * @name $.jstree.defaults.search.case_sensitive
         * @plugin search
         */
        case_sensitive: false,
        /**
         * Indicates if the tree should be filtered (by default) to show only matching nodes (keep in mind this can be a heavy on large trees in old browsers).
         * This setting can be changed at runtime when calling the search method. Default is `false`.
         * @name $.jstree.defaults.search.show_only_matches
         * @plugin search
         */
        show_only_matches: false,
        /**
         * Indicates if the children of matched element are shown (when show_only_matches is true)
         * This setting can be changed at runtime when calling the search method. Default is `false`.
         * @name $.jstree.defaults.search.show_only_matches_children
         * @plugin search
         */
        show_only_matches_children: false,
        /**
         * Indicates if all nodes opened to reveal the search result, should be closed when the search is cleared or a new search is performed. Default is `true`.
         * @name $.jstree.defaults.search.close_opened_onclear
         * @plugin search
         */
        close_opened_onclear: true,
        /**
         * Indicates if only leaf nodes should be included in search results. Default is `false`.
         * @name $.jstree.defaults.search.search_leaves_only
         * @plugin search
         */
        search_leaves_only: false,
        /**
         * If set to a function it wil be called in the instance's scope with two arguments - search string and node (where node will be every node in the structure, so use with caution).
         * If the function returns a truthy value the node will be considered a match (it might not be displayed if search_only_leaves is set to true and the node is not a leaf). Default is `false`.
         * @name $.jstree.defaults.search.search_callback
         * @plugin search
         */
        search_callback: false
      };
      $3.jstree.plugins.search = function(options, parent) {
        this.bind = function() {
          parent.bind.call(this);
          this._data.search.str = "";
          this._data.search.dom = $3();
          this._data.search.res = [];
          this._data.search.opn = [];
          this._data.search.som = false;
          this._data.search.smc = false;
          this._data.search.hdn = [];
          this.element.on("search.jstree", function(e, data) {
            if (this._data.search.som && data.res.length) {
              var m = this._model.data, i, j, p = [], k, l;
              for (i = 0, j = data.res.length; i < j; i++) {
                if (m[data.res[i]] && !m[data.res[i]].state.hidden) {
                  p.push(data.res[i]);
                  p = p.concat(m[data.res[i]].parents);
                  if (this._data.search.smc) {
                    for (k = 0, l = m[data.res[i]].children_d.length; k < l; k++) {
                      if (m[m[data.res[i]].children_d[k]] && !m[m[data.res[i]].children_d[k]].state.hidden) {
                        p.push(m[data.res[i]].children_d[k]);
                      }
                    }
                  }
                }
              }
              p = $3.vakata.array_remove_item($3.vakata.array_unique(p), $3.jstree.root);
              this._data.search.hdn = this.hide_all(true);
              this.show_node(p, true);
              this.redraw(true);
            }
          }.bind(this)).on("clear_search.jstree", function(e, data) {
            if (this._data.search.som && data.res.length) {
              this.show_node(this._data.search.hdn, true);
              this.redraw(true);
            }
          }.bind(this));
        };
        this.search = function(str, skip_async, show_only_matches, inside, append, show_only_matches_children) {
          if (str === false || $3.vakata.trim(str.toString()) === "") {
            return this.clear_search();
          }
          inside = this.get_node(inside);
          inside = inside && (inside.id || inside.id === 0) ? inside.id : null;
          str = str.toString();
          var s = this.settings.search, a = s.ajax ? s.ajax : false, m = this._model.data, f = null, r = [], p = [], i, j;
          if (this._data.search.res.length && !append) {
            this.clear_search();
          }
          if (show_only_matches === undefined2) {
            show_only_matches = s.show_only_matches;
          }
          if (show_only_matches_children === undefined2) {
            show_only_matches_children = s.show_only_matches_children;
          }
          if (!skip_async && a !== false) {
            if ($3.vakata.is_function(a)) {
              return a.call(this, str, function(d) {
                if (d && d.d) {
                  d = d.d;
                }
                this._load_nodes(!$3.vakata.is_array(d) ? [] : $3.vakata.array_unique(d), function() {
                  this.search(str, true, show_only_matches, inside, append, show_only_matches_children);
                });
              }.bind(this), inside);
            } else {
              a = $3.extend({}, a);
              if (!a.data) {
                a.data = {};
              }
              a.data.str = str;
              if (inside) {
                a.data.inside = inside;
              }
              if (this._data.search.lastRequest) {
                this._data.search.lastRequest.abort();
              }
              this._data.search.lastRequest = $3.ajax(a).fail(function() {
                this._data.core.last_error = {
                  "error": "ajax",
                  "plugin": "search",
                  "id": "search_01",
                  "reason": "Could not load search parents",
                  "data": JSON.stringify(a)
                };
                this.settings.core.error.call(this, this._data.core.last_error);
              }.bind(this)).done(function(d) {
                if (d && d.d) {
                  d = d.d;
                }
                this._load_nodes(!$3.vakata.is_array(d) ? [] : $3.vakata.array_unique(d), function() {
                  this.search(str, true, show_only_matches, inside, append, show_only_matches_children);
                });
              }.bind(this));
              return this._data.search.lastRequest;
            }
          }
          if (!append) {
            this._data.search.str = str;
            this._data.search.dom = $3();
            this._data.search.res = [];
            this._data.search.opn = [];
            this._data.search.som = show_only_matches;
            this._data.search.smc = show_only_matches_children;
          }
          f = new $3.vakata.search(str, true, {
            caseSensitive: s.case_sensitive,
            fuzzy: s.fuzzy
          });
          $3.each(m[inside ? inside : $3.jstree.root].children_d, function(ii, i2) {
            var v = m[i2];
            if (v.text && !v.state.hidden && (!s.search_leaves_only || v.state.loaded && v.children.length === 0) && (s.search_callback && s.search_callback.call(this, str, v) || !s.search_callback && f.search(v.text).isMatch)) {
              r.push(i2);
              p = p.concat(v.parents);
            }
          });
          if (r.length) {
            p = $3.vakata.array_unique(p);
            for (i = 0, j = p.length; i < j; i++) {
              if (p[i] !== $3.jstree.root && m[p[i]] && this.open_node(p[i], null, 0) === true) {
                this._data.search.opn.push(p[i]);
              }
            }
            if (!append) {
              this._data.search.dom = $3(this.element[0].querySelectorAll("#" + $3.map(r, function(v) {
                return "0123456789".indexOf(v[0]) !== -1 ? "\\3" + v[0] + " " + v.substr(1).replace($3.jstree.idregex, "\\$&") : v.replace($3.jstree.idregex, "\\$&");
              }).join(", #")));
              this._data.search.res = r;
            } else {
              this._data.search.dom = this._data.search.dom.add($3(this.element[0].querySelectorAll("#" + $3.map(r, function(v) {
                return "0123456789".indexOf(v[0]) !== -1 ? "\\3" + v[0] + " " + v.substr(1).replace($3.jstree.idregex, "\\$&") : v.replace($3.jstree.idregex, "\\$&");
              }).join(", #"))));
              this._data.search.res = $3.vakata.array_unique(this._data.search.res.concat(r));
            }
            this._data.search.dom.children(".jstree-anchor").addClass("jstree-search");
          }
          this.trigger("search", {
            nodes: this._data.search.dom,
            str,
            res: this._data.search.res,
            show_only_matches
          });
        };
        this.clear_search = function() {
          if (this.settings.search.close_opened_onclear) {
            this.close_node(this._data.search.opn, 0);
          }
          this.trigger("clear_search", {
            "nodes": this._data.search.dom,
            str: this._data.search.str,
            res: this._data.search.res
          });
          if (this._data.search.res.length) {
            this._data.search.dom = $3(this.element[0].querySelectorAll("#" + $3.map(this._data.search.res, function(v) {
              return "0123456789".indexOf(v[0]) !== -1 ? "\\3" + v[0] + " " + v.substr(1).replace($3.jstree.idregex, "\\$&") : v.replace($3.jstree.idregex, "\\$&");
            }).join(", #")));
            this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search");
          }
          this._data.search.str = "";
          this._data.search.res = [];
          this._data.search.opn = [];
          this._data.search.dom = $3();
        };
        this.redraw_node = function(obj, deep, callback, force_render) {
          obj = parent.redraw_node.apply(this, arguments);
          if (obj) {
            if ($3.inArray(obj.id, this._data.search.res) !== -1) {
              var i, j, tmp = null;
              for (i = 0, j = obj.childNodes.length; i < j; i++) {
                if (obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
                  tmp = obj.childNodes[i];
                  break;
                }
              }
              if (tmp) {
                tmp.className += " jstree-search";
              }
            }
          }
          return obj;
        };
      };
      (function($4) {
        $4.vakata.search = function(pattern, txt, options) {
          options = options || {};
          options = $4.extend({}, $4.vakata.search.defaults, options);
          if (options.fuzzy !== false) {
            options.fuzzy = true;
          }
          pattern = options.caseSensitive ? pattern : pattern.toLowerCase();
          var MATCH_LOCATION = options.location, MATCH_DISTANCE = options.distance, MATCH_THRESHOLD = options.threshold, patternLen = pattern.length, matchmask, pattern_alphabet, match_bitapScore, search;
          if (patternLen > 32) {
            options.fuzzy = false;
          }
          if (options.fuzzy) {
            matchmask = 1 << patternLen - 1;
            pattern_alphabet = function() {
              var mask = {}, i = 0;
              for (i = 0; i < patternLen; i++) {
                mask[pattern.charAt(i)] = 0;
              }
              for (i = 0; i < patternLen; i++) {
                mask[pattern.charAt(i)] |= 1 << patternLen - i - 1;
              }
              return mask;
            }();
            match_bitapScore = function(e, x) {
              var accuracy = e / patternLen, proximity = Math.abs(MATCH_LOCATION - x);
              if (!MATCH_DISTANCE) {
                return proximity ? 1 : accuracy;
              }
              return accuracy + proximity / MATCH_DISTANCE;
            };
          }
          search = function(text) {
            text = options.caseSensitive ? text.toString() : text.toString().toLowerCase();
            if (pattern === text || text.indexOf(pattern) !== -1) {
              return {
                isMatch: true,
                score: 0
              };
            }
            if (!options.fuzzy) {
              return {
                isMatch: false,
                score: 1
              };
            }
            var i, j, textLen = text.length, scoreThreshold = MATCH_THRESHOLD, bestLoc = text.indexOf(pattern, MATCH_LOCATION), binMin, binMid, binMax = patternLen + textLen, lastRd, start, finish, rd, charMatch, score = 1, locations = [];
            if (bestLoc !== -1) {
              scoreThreshold = Math.min(match_bitapScore(0, bestLoc), scoreThreshold);
              bestLoc = text.lastIndexOf(pattern, MATCH_LOCATION + patternLen);
              if (bestLoc !== -1) {
                scoreThreshold = Math.min(match_bitapScore(0, bestLoc), scoreThreshold);
              }
            }
            bestLoc = -1;
            for (i = 0; i < patternLen; i++) {
              binMin = 0;
              binMid = binMax;
              while (binMin < binMid) {
                if (match_bitapScore(i, MATCH_LOCATION + binMid) <= scoreThreshold) {
                  binMin = binMid;
                } else {
                  binMax = binMid;
                }
                binMid = Math.floor((binMax - binMin) / 2 + binMin);
              }
              binMax = binMid;
              start = Math.max(1, MATCH_LOCATION - binMid + 1);
              finish = Math.min(MATCH_LOCATION + binMid, textLen) + patternLen;
              rd = new Array(finish + 2);
              rd[finish + 1] = (1 << i) - 1;
              for (j = finish; j >= start; j--) {
                charMatch = pattern_alphabet[text.charAt(j - 1)];
                if (i === 0) {
                  rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
                } else {
                  rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((lastRd[j + 1] | lastRd[j]) << 1 | 1) | lastRd[j + 1];
                }
                if (rd[j] & matchmask) {
                  score = match_bitapScore(i, j - 1);
                  if (score <= scoreThreshold) {
                    scoreThreshold = score;
                    bestLoc = j - 1;
                    locations.push(bestLoc);
                    if (bestLoc > MATCH_LOCATION) {
                      start = Math.max(1, 2 * MATCH_LOCATION - bestLoc);
                    } else {
                      break;
                    }
                  }
                }
              }
              if (match_bitapScore(i + 1, MATCH_LOCATION) > scoreThreshold) {
                break;
              }
              lastRd = rd;
            }
            return {
              isMatch: bestLoc >= 0,
              score
            };
          };
          return txt === true ? {
            "search": search
          } : search(txt);
        };
        $4.vakata.search.defaults = {
          location: 0,
          distance: 100,
          threshold: 0.6,
          fuzzy: false,
          caseSensitive: false
        };
      })($3);
      $3.jstree.defaults.sort = function(a, b) {
        return this.get_text(a) > this.get_text(b) ? 1 : -1;
      };
      $3.jstree.plugins.sort = function(options, parent) {
        this.bind = function() {
          parent.bind.call(this);
          this.element.on("model.jstree", function(e, data) {
            this.sort(data.parent, true);
          }.bind(this)).on("rename_node.jstree create_node.jstree", function(e, data) {
            this.sort(data.parent || data.node.parent, false);
            this.redraw_node(data.parent || data.node.parent, true);
          }.bind(this)).on("move_node.jstree copy_node.jstree", function(e, data) {
            this.sort(data.parent, false);
            this.redraw_node(data.parent, true);
          }.bind(this));
        };
        this.sort = function(obj, deep) {
          var i, j;
          obj = this.get_node(obj);
          if (obj && obj.children && obj.children.length) {
            obj.children.sort(this.settings.sort.bind(this));
            if (deep) {
              for (i = 0, j = obj.children_d.length; i < j; i++) {
                this.sort(obj.children_d[i], false);
              }
            }
          }
        };
      };
      var to = false;
      $3.jstree.defaults.state = {
        /**
         * A string for the key to use when saving the current tree (change if using multiple trees in your project). Defaults to `jstree`.
         * @name $.jstree.defaults.state.key
         * @plugin state
         */
        key: "jstree",
        /**
         * A space separated list of events that trigger a state save. Defaults to `changed.jstree open_node.jstree close_node.jstree`.
         * @name $.jstree.defaults.state.events
         * @plugin state
         */
        events: "changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",
        /**
         * Time in milliseconds after which the state will expire. Defaults to 'false' meaning - no expire.
         * @name $.jstree.defaults.state.ttl
         * @plugin state
         */
        ttl: false,
        /**
         * A function that will be executed prior to restoring state with one argument - the state object. Can be used to clear unwanted parts of the state.
         * @name $.jstree.defaults.state.filter
         * @plugin state
         */
        filter: false,
        /**
         * Should loaded nodes be restored (setting this to true means that it is possible that the whole tree will be loaded for some users - use with caution). Defaults to `false`
         * @name $.jstree.defaults.state.preserve_loaded
         * @plugin state
         */
        preserve_loaded: false
      };
      $3.jstree.plugins.state = function(options, parent) {
        this.bind = function() {
          parent.bind.call(this);
          var bind = function() {
            this.element.on(this.settings.state.events, function() {
              if (to) {
                clearTimeout(to);
              }
              to = setTimeout(function() {
                this.save_state();
              }.bind(this), 100);
            }.bind(this));
            this.trigger("state_ready");
          }.bind(this);
          this.element.on("ready.jstree", function(e, data) {
            this.element.one("restore_state.jstree", bind);
            if (!this.restore_state()) {
              bind();
            }
          }.bind(this));
        };
        this.save_state = function() {
          var tm = this.get_state();
          if (!this.settings.state.preserve_loaded) {
            delete tm.core.loaded;
          }
          var st = {
            "state": tm,
            "ttl": this.settings.state.ttl,
            "sec": +/* @__PURE__ */ new Date()
          };
          $3.vakata.storage.set(this.settings.state.key, JSON.stringify(st));
        };
        this.restore_state = function() {
          var k = $3.vakata.storage.get(this.settings.state.key);
          if (!!k) {
            try {
              k = JSON.parse(k);
            } catch (ex) {
              return false;
            }
          }
          if (!!k && k.ttl && k.sec && +/* @__PURE__ */ new Date() - k.sec > k.ttl) {
            return false;
          }
          if (!!k && k.state) {
            k = k.state;
          }
          if (!!k && $3.vakata.is_function(this.settings.state.filter)) {
            k = this.settings.state.filter.call(this, k);
          }
          if (!!k) {
            if (!this.settings.state.preserve_loaded) {
              delete k.core.loaded;
            }
            this.element.one("set_state.jstree", function(e, data) {
              data.instance.trigger("restore_state", {
                "state": $3.extend(true, {}, k)
              });
            });
            this.set_state(k);
            return true;
          }
          return false;
        };
        this.clear_state = function() {
          return $3.vakata.storage.del(this.settings.state.key);
        };
      };
      (function($4, undefined3) {
        $4.vakata.storage = {
          // simply specifying the functions in FF throws an error
          set: function(key, val) {
            return window.localStorage.setItem(key, val);
          },
          get: function(key) {
            return window.localStorage.getItem(key);
          },
          del: function(key) {
            return window.localStorage.removeItem(key);
          }
        };
      })($3);
      $3.jstree.defaults.types = {
        "default": {}
      };
      $3.jstree.defaults.types[$3.jstree.root] = {};
      $3.jstree.plugins.types = function(options, parent) {
        this.init = function(el, options2) {
          var i, j;
          if (options2 && options2.types && options2.types["default"]) {
            for (i in options2.types) {
              if (i !== "default" && i !== $3.jstree.root && options2.types.hasOwnProperty(i)) {
                for (j in options2.types["default"]) {
                  if (options2.types["default"].hasOwnProperty(j) && options2.types[i][j] === undefined2) {
                    options2.types[i][j] = options2.types["default"][j];
                  }
                }
              }
            }
          }
          parent.init.call(this, el, options2);
          this._model.data[$3.jstree.root].type = $3.jstree.root;
        };
        this.refresh = function(skip_loading, forget_state) {
          parent.refresh.call(this, skip_loading, forget_state);
          this._model.data[$3.jstree.root].type = $3.jstree.root;
        };
        this.bind = function() {
          this.element.on("model.jstree", function(e, data) {
            var m = this._model.data, dpc = data.nodes, t = this.settings.types, i, j, c = "default", k;
            for (i = 0, j = dpc.length; i < j; i++) {
              c = "default";
              if (m[dpc[i]].original && m[dpc[i]].original.type && t[m[dpc[i]].original.type]) {
                c = m[dpc[i]].original.type;
              }
              if (m[dpc[i]].data && m[dpc[i]].data.jstree && m[dpc[i]].data.jstree.type && t[m[dpc[i]].data.jstree.type]) {
                c = m[dpc[i]].data.jstree.type;
              }
              m[dpc[i]].type = c;
              if (m[dpc[i]].icon === true && t[c].icon !== undefined2) {
                m[dpc[i]].icon = t[c].icon;
              }
              if (t[c].li_attr !== undefined2 && typeof t[c].li_attr === "object") {
                for (k in t[c].li_attr) {
                  if (t[c].li_attr.hasOwnProperty(k)) {
                    if (k === "id") {
                      continue;
                    } else if (m[dpc[i]].li_attr[k] === undefined2) {
                      m[dpc[i]].li_attr[k] = t[c].li_attr[k];
                    } else if (k === "class") {
                      m[dpc[i]].li_attr["class"] = t[c].li_attr["class"] + " " + m[dpc[i]].li_attr["class"];
                    }
                  }
                }
              }
              if (t[c].a_attr !== undefined2 && typeof t[c].a_attr === "object") {
                for (k in t[c].a_attr) {
                  if (t[c].a_attr.hasOwnProperty(k)) {
                    if (k === "id") {
                      continue;
                    } else if (m[dpc[i]].a_attr[k] === undefined2) {
                      m[dpc[i]].a_attr[k] = t[c].a_attr[k];
                    } else if (k === "href" && m[dpc[i]].a_attr[k] === "#") {
                      m[dpc[i]].a_attr["href"] = t[c].a_attr["href"];
                    } else if (k === "class") {
                      m[dpc[i]].a_attr["class"] = t[c].a_attr["class"] + " " + m[dpc[i]].a_attr["class"];
                    }
                  }
                }
              }
            }
            m[$3.jstree.root].type = $3.jstree.root;
          }.bind(this));
          parent.bind.call(this);
        };
        this.get_json = function(obj, options2, flat) {
          var i, j, m = this._model.data, opt = options2 ? $3.extend(true, {}, options2, {
            no_id: false
          }) : {}, tmp = parent.get_json.call(this, obj, opt, flat);
          if (tmp === false) {
            return false;
          }
          if ($3.vakata.is_array(tmp)) {
            for (i = 0, j = tmp.length; i < j; i++) {
              tmp[i].type = (tmp[i].id || tmp[i].id === 0) && m[tmp[i].id] && m[tmp[i].id].type ? m[tmp[i].id].type : "default";
              if (options2 && options2.no_id) {
                delete tmp[i].id;
                if (tmp[i].li_attr && tmp[i].li_attr.id) {
                  delete tmp[i].li_attr.id;
                }
                if (tmp[i].a_attr && tmp[i].a_attr.id) {
                  delete tmp[i].a_attr.id;
                }
              }
            }
          } else {
            tmp.type = (tmp.id || tmp.id === 0) && m[tmp.id] && m[tmp.id].type ? m[tmp.id].type : "default";
            if (options2 && options2.no_id) {
              tmp = this._delete_ids(tmp);
            }
          }
          return tmp;
        };
        this._delete_ids = function(tmp) {
          if ($3.vakata.is_array(tmp)) {
            for (var i = 0, j = tmp.length; i < j; i++) {
              tmp[i] = this._delete_ids(tmp[i]);
            }
            return tmp;
          }
          delete tmp.id;
          if (tmp.li_attr && tmp.li_attr.id) {
            delete tmp.li_attr.id;
          }
          if (tmp.a_attr && tmp.a_attr.id) {
            delete tmp.a_attr.id;
          }
          if (tmp.children && $3.vakata.is_array(tmp.children)) {
            tmp.children = this._delete_ids(tmp.children);
          }
          return tmp;
        };
        this.check = function(chk, obj, par, pos, more) {
          if (parent.check.call(this, chk, obj, par, pos, more) === false) {
            return false;
          }
          obj = obj && (obj.id || obj.id === 0) ? obj : this.get_node(obj);
          par = par && (par.id || par.id === 0) ? par : this.get_node(par);
          var m = obj && (obj.id || obj.id === 0) ? more && more.origin ? more.origin : $3.jstree.reference(obj.id) : null, tmp, d, i, j;
          m = m && m._model && m._model.data ? m._model.data : null;
          switch (chk) {
            case "create_node":
            case "move_node":
            case "copy_node":
              if (chk !== "move_node" || $3.inArray(obj.id, par.children) === -1) {
                tmp = this.get_rules(par);
                if (tmp.max_children !== undefined2 && tmp.max_children !== -1 && tmp.max_children === par.children.length) {
                  this._data.core.last_error = {
                    "error": "check",
                    "plugin": "types",
                    "id": "types_01",
                    "reason": "max_children prevents function: " + chk,
                    "data": JSON.stringify({
                      "chk": chk,
                      "pos": pos,
                      "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                      "par": par && (par.id || par.id === 0) ? par.id : false
                    })
                  };
                  return false;
                }
                if (tmp.valid_children !== undefined2 && tmp.valid_children !== -1 && $3.inArray(obj.type || "default", tmp.valid_children) === -1) {
                  this._data.core.last_error = {
                    "error": "check",
                    "plugin": "types",
                    "id": "types_02",
                    "reason": "valid_children prevents function: " + chk,
                    "data": JSON.stringify({
                      "chk": chk,
                      "pos": pos,
                      "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                      "par": par && (par.id || par.id === 0) ? par.id : false
                    })
                  };
                  return false;
                }
                if (m && obj.children_d && obj.parents) {
                  d = 0;
                  for (i = 0, j = obj.children_d.length; i < j; i++) {
                    d = Math.max(d, m[obj.children_d[i]].parents.length);
                  }
                  d = d - obj.parents.length + 1;
                }
                if (d <= 0 || d === undefined2) {
                  d = 1;
                }
                do {
                  if (tmp.max_depth !== undefined2 && tmp.max_depth !== -1 && tmp.max_depth < d) {
                    this._data.core.last_error = {
                      "error": "check",
                      "plugin": "types",
                      "id": "types_03",
                      "reason": "max_depth prevents function: " + chk,
                      "data": JSON.stringify({
                        "chk": chk,
                        "pos": pos,
                        "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                        "par": par && (par.id || par.id === 0) ? par.id : false
                      })
                    };
                    return false;
                  }
                  par = this.get_node(par.parent);
                  tmp = this.get_rules(par);
                  d++;
                } while (par);
              }
              break;
          }
          return true;
        };
        this.get_rules = function(obj) {
          obj = this.get_node(obj);
          if (!obj) {
            return false;
          }
          var tmp = this.get_type(obj, true);
          if (tmp.max_depth === undefined2) {
            tmp.max_depth = -1;
          }
          if (tmp.max_children === undefined2) {
            tmp.max_children = -1;
          }
          if (tmp.valid_children === undefined2) {
            tmp.valid_children = -1;
          }
          return tmp;
        };
        this.get_type = function(obj, rules) {
          obj = this.get_node(obj);
          return !obj ? false : rules ? $3.extend({
            "type": obj.type
          }, this.settings.types[obj.type]) : obj.type;
        };
        this.set_type = function(obj, type) {
          var m = this._model.data, t, t1, t2, old_type, old_icon, k, d, a;
          if ($3.vakata.is_array(obj)) {
            obj = obj.slice();
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
              this.set_type(obj[t1], type);
            }
            return true;
          }
          t = this.settings.types;
          obj = this.get_node(obj);
          if (!t[type] || !obj) {
            return false;
          }
          d = this.get_node(obj, true);
          if (d && d.length) {
            a = d.children(".jstree-anchor");
          }
          old_type = obj.type;
          old_icon = this.get_icon(obj);
          obj.type = type;
          if (old_icon === true || !t[old_type] || t[old_type].icon !== undefined2 && old_icon === t[old_type].icon) {
            this.set_icon(obj, t[type].icon !== undefined2 ? t[type].icon : true);
          }
          if (t[old_type] && t[old_type].li_attr !== undefined2 && typeof t[old_type].li_attr === "object") {
            for (k in t[old_type].li_attr) {
              if (t[old_type].li_attr.hasOwnProperty(k)) {
                if (k === "id") {
                  continue;
                } else if (k === "class") {
                  m[obj.id].li_attr["class"] = (m[obj.id].li_attr["class"] || "").replace(t[old_type].li_attr[k], "");
                  if (d) {
                    d.removeClass(t[old_type].li_attr[k]);
                  }
                } else if (m[obj.id].li_attr[k] === t[old_type].li_attr[k]) {
                  m[obj.id].li_attr[k] = null;
                  if (d) {
                    d.removeAttr(k);
                  }
                }
              }
            }
          }
          if (t[old_type] && t[old_type].a_attr !== undefined2 && typeof t[old_type].a_attr === "object") {
            for (k in t[old_type].a_attr) {
              if (t[old_type].a_attr.hasOwnProperty(k)) {
                if (k === "id") {
                  continue;
                } else if (k === "class") {
                  m[obj.id].a_attr["class"] = (m[obj.id].a_attr["class"] || "").replace(t[old_type].a_attr[k], "");
                  if (a) {
                    a.removeClass(t[old_type].a_attr[k]);
                  }
                } else if (m[obj.id].a_attr[k] === t[old_type].a_attr[k]) {
                  if (k === "href") {
                    m[obj.id].a_attr[k] = "#";
                    if (a) {
                      a.attr("href", "#");
                    }
                  } else {
                    delete m[obj.id].a_attr[k];
                    if (a) {
                      a.removeAttr(k);
                    }
                  }
                }
              }
            }
          }
          if (t[type].li_attr !== undefined2 && typeof t[type].li_attr === "object") {
            for (k in t[type].li_attr) {
              if (t[type].li_attr.hasOwnProperty(k)) {
                if (k === "id") {
                  continue;
                } else if (m[obj.id].li_attr[k] === undefined2) {
                  m[obj.id].li_attr[k] = t[type].li_attr[k];
                  if (d) {
                    if (k === "class") {
                      d.addClass(t[type].li_attr[k]);
                    } else {
                      d.attr(k, t[type].li_attr[k]);
                    }
                  }
                } else if (k === "class") {
                  m[obj.id].li_attr["class"] = t[type].li_attr[k] + " " + m[obj.id].li_attr["class"];
                  if (d) {
                    d.addClass(t[type].li_attr[k]);
                  }
                }
              }
            }
          }
          if (t[type].a_attr !== undefined2 && typeof t[type].a_attr === "object") {
            for (k in t[type].a_attr) {
              if (t[type].a_attr.hasOwnProperty(k)) {
                if (k === "id") {
                  continue;
                } else if (m[obj.id].a_attr[k] === undefined2) {
                  m[obj.id].a_attr[k] = t[type].a_attr[k];
                  if (a) {
                    if (k === "class") {
                      a.addClass(t[type].a_attr[k]);
                    } else {
                      a.attr(k, t[type].a_attr[k]);
                    }
                  }
                } else if (k === "href" && m[obj.id].a_attr[k] === "#") {
                  m[obj.id].a_attr["href"] = t[type].a_attr["href"];
                  if (a) {
                    a.attr("href", t[type].a_attr["href"]);
                  }
                } else if (k === "class") {
                  m[obj.id].a_attr["class"] = t[type].a_attr["class"] + " " + m[obj.id].a_attr["class"];
                  if (a) {
                    a.addClass(t[type].a_attr[k]);
                  }
                }
              }
            }
          }
          return true;
        };
      };
      $3.jstree.defaults.unique = {
        /**
         * Indicates if the comparison should be case sensitive. Default is `false`.
         * @name $.jstree.defaults.unique.case_sensitive
         * @plugin unique
         */
        case_sensitive: false,
        /**
         * Indicates if white space should be trimmed before the comparison. Default is `false`.
         * @name $.jstree.defaults.unique.trim_whitespace
         * @plugin unique
         */
        trim_whitespace: false,
        /**
         * A callback executed in the instance's scope when a new node is created with no name and a node with the default name already exists, the two arguments are the conflicting name and the counter. The default will produce results like `New node (2)`.
         * @name $.jstree.defaults.unique.duplicate
         * @plugin unique
         */
        duplicate: function(name, counter) {
          return name + " (" + counter + ")";
        }
      };
      $3.jstree.plugins.unique = function(options, parent) {
        this.check = function(chk, obj, par, pos, more) {
          if (parent.check.call(this, chk, obj, par, pos, more) === false) {
            return false;
          }
          obj = obj && (obj.id || obj.id === 0) ? obj : this.get_node(obj);
          par = par && (par.id || par.id === 0) ? par : this.get_node(par);
          if (!par || !par.children) {
            return true;
          }
          var n = chk === "rename_node" ? pos : obj.text, c = [], s = this.settings.unique.case_sensitive, w = this.settings.unique.trim_whitespace, m = this._model.data, i, j, t;
          for (i = 0, j = par.children.length; i < j; i++) {
            t = m[par.children[i]].text;
            if (!s) {
              t = t.toLowerCase();
            }
            if (w) {
              t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }
            c.push(t);
          }
          if (!s) {
            n = n.toLowerCase();
          }
          if (w) {
            n = n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }
          switch (chk) {
            case "delete_node":
              return true;
            case "rename_node":
              t = obj.text || "";
              if (!s) {
                t = t.toLowerCase();
              }
              if (w) {
                t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              }
              i = $3.inArray(n, c) === -1 || obj.text && t === n;
              if (!i) {
                this._data.core.last_error = {
                  "error": "check",
                  "plugin": "unique",
                  "id": "unique_01",
                  "reason": "Child with name " + n + " already exists. Preventing: " + chk,
                  "data": JSON.stringify({
                    "chk": chk,
                    "pos": pos,
                    "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                    "par": par && (par.id || par.id === 0) ? par.id : false
                  })
                };
              }
              return i;
            case "create_node":
              i = $3.inArray(n, c) === -1;
              if (!i) {
                this._data.core.last_error = {
                  "error": "check",
                  "plugin": "unique",
                  "id": "unique_04",
                  "reason": "Child with name " + n + " already exists. Preventing: " + chk,
                  "data": JSON.stringify({
                    "chk": chk,
                    "pos": pos,
                    "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                    "par": par && (par.id || par.id === 0) ? par.id : false
                  })
                };
              }
              return i;
            case "copy_node":
              i = $3.inArray(n, c) === -1;
              if (!i) {
                this._data.core.last_error = {
                  "error": "check",
                  "plugin": "unique",
                  "id": "unique_02",
                  "reason": "Child with name " + n + " already exists. Preventing: " + chk,
                  "data": JSON.stringify({
                    "chk": chk,
                    "pos": pos,
                    "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                    "par": par && (par.id || par.id === 0) ? par.id : false
                  })
                };
              }
              return i;
            case "move_node":
              i = obj.parent === par.id && (!more || !more.is_multi) || $3.inArray(n, c) === -1;
              if (!i) {
                this._data.core.last_error = {
                  "error": "check",
                  "plugin": "unique",
                  "id": "unique_03",
                  "reason": "Child with name " + n + " already exists. Preventing: " + chk,
                  "data": JSON.stringify({
                    "chk": chk,
                    "pos": pos,
                    "obj": obj && (obj.id || obj.id === 0) ? obj.id : false,
                    "par": par && (par.id || par.id === 0) ? par.id : false
                  })
                };
              }
              return i;
          }
          return true;
        };
        this.create_node = function(par, node, pos, callback, is_loaded) {
          if (!node || typeof node === "object" && node.text === undefined2) {
            if (par === null) {
              par = $3.jstree.root;
            }
            par = this.get_node(par);
            if (!par) {
              return parent.create_node.call(this, par, node, pos, callback, is_loaded);
            }
            pos = pos === undefined2 ? "last" : pos;
            if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
              return parent.create_node.call(this, par, node, pos, callback, is_loaded);
            }
            if (!node) {
              node = {};
            }
            var tmp, n, dpc, i, j, m = this._model.data, s = this.settings.unique.case_sensitive, w = this.settings.unique.trim_whitespace, cb = this.settings.unique.duplicate, t;
            n = tmp = this.get_string("New node");
            dpc = [];
            for (i = 0, j = par.children.length; i < j; i++) {
              t = m[par.children[i]].text;
              if (!s) {
                t = t.toLowerCase();
              }
              if (w) {
                t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              }
              dpc.push(t);
            }
            i = 1;
            t = n;
            if (!s) {
              t = t.toLowerCase();
            }
            if (w) {
              t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }
            while ($3.inArray(t, dpc) !== -1) {
              n = cb.call(this, tmp, ++i).toString();
              t = n;
              if (!s) {
                t = t.toLowerCase();
              }
              if (w) {
                t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              }
            }
            node.text = n;
          }
          return parent.create_node.call(this, par, node, pos, callback, is_loaded);
        };
      };
      var div = document2.createElement("DIV");
      div.setAttribute("unselectable", "on");
      div.setAttribute("role", "presentation");
      div.className = "jstree-wholerow";
      div.innerHTML = "&#160;";
      $3.jstree.plugins.wholerow = function(options, parent) {
        this.bind = function() {
          parent.bind.call(this);
          this.element.on("ready.jstree set_state.jstree", function() {
            this.hide_dots();
          }.bind(this)).on("init.jstree loading.jstree ready.jstree", function() {
            this.get_container_ul().addClass("jstree-wholerow-ul");
          }.bind(this)).on("deselect_all.jstree", function(e, data) {
            this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
          }.bind(this)).on("changed.jstree", function(e, data) {
            this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
            var tmp = false, i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
              tmp = this.get_node(data.selected[i], true);
              if (tmp && tmp.length) {
                tmp.children(".jstree-wholerow").addClass("jstree-wholerow-clicked");
              }
            }
          }.bind(this)).on("open_node.jstree", function(e, data) {
            this.get_node(data.node, true).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked");
          }.bind(this)).on("hover_node.jstree dehover_node.jstree", function(e, data) {
            if (e.type === "hover_node" && this.is_disabled(data.node)) {
              return;
            }
            this.get_node(data.node, true).children(".jstree-wholerow")[e.type === "hover_node" ? "addClass" : "removeClass"]("jstree-wholerow-hovered");
          }.bind(this)).on("contextmenu.jstree", ".jstree-wholerow", function(e) {
            if (this._data.contextmenu) {
              e.preventDefault();
              var tmp = $3.Event("contextmenu", {
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey,
                shiftKey: e.shiftKey,
                pageX: e.pageX,
                pageY: e.pageY
              });
              $3(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp);
            }
          }.bind(this)).on("click.jstree", ".jstree-wholerow", function(e) {
            e.stopImmediatePropagation();
            var tmp = $3.Event("click", {
              metaKey: e.metaKey,
              ctrlKey: e.ctrlKey,
              altKey: e.altKey,
              shiftKey: e.shiftKey
            });
            $3(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).trigger("focus");
          }).on("dblclick.jstree", ".jstree-wholerow", function(e) {
            e.stopImmediatePropagation();
            var tmp = $3.Event("dblclick", {
              metaKey: e.metaKey,
              ctrlKey: e.ctrlKey,
              altKey: e.altKey,
              shiftKey: e.shiftKey
            });
            $3(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).trigger("focus");
          }).on("click.jstree", ".jstree-leaf > .jstree-ocl", function(e) {
            e.stopImmediatePropagation();
            var tmp = $3.Event("click", {
              metaKey: e.metaKey,
              ctrlKey: e.ctrlKey,
              altKey: e.altKey,
              shiftKey: e.shiftKey
            });
            $3(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).trigger("focus");
          }.bind(this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", function(e) {
            e.stopImmediatePropagation();
            if (!this.is_disabled(e.currentTarget)) {
              this.hover_node(e.currentTarget);
            }
            return false;
          }.bind(this)).on("mouseleave.jstree", ".jstree-node", function(e) {
            this.dehover_node(e.currentTarget);
          }.bind(this));
        };
        this.teardown = function() {
          if (this.settings.wholerow) {
            this.element.find(".jstree-wholerow").remove();
          }
          parent.teardown.call(this);
        };
        this.redraw_node = function(obj, deep, callback, force_render) {
          obj = parent.redraw_node.apply(this, arguments);
          if (obj) {
            var tmp = div.cloneNode(true);
            if ($3.inArray(obj.id, this._data.core.selected) !== -1) {
              tmp.className += " jstree-wholerow-clicked";
            }
            if (this._data.core.focused && this._data.core.focused === obj.id) {
              tmp.className += " jstree-wholerow-hovered";
            }
            obj.insertBefore(tmp, obj.childNodes[0]);
          }
          return obj;
        };
      };
      if (window.customElements && Object && Object.create) {
        var proto = Object.create(HTMLElement.prototype);
        proto.createdCallback = function() {
          var c = {
            core: {},
            plugins: []
          }, i;
          for (i in $3.jstree.plugins) {
            if ($3.jstree.plugins.hasOwnProperty(i) && this.attributes[i]) {
              c.plugins.push(i);
              if (this.getAttribute(i) && JSON.parse(this.getAttribute(i))) {
                c[i] = JSON.parse(this.getAttribute(i));
              }
            }
          }
          for (i in $3.jstree.defaults.core) {
            if ($3.jstree.defaults.core.hasOwnProperty(i) && this.attributes[i]) {
              c.core[i] = JSON.parse(this.getAttribute(i)) || this.getAttribute(i);
            }
          }
          $3(this).jstree(c);
        };
        try {
          window.customElements.define("vakata-jstree", function() {
          }, {
            prototype: proto
          });
        } catch (ignore) {
        }
      }
    });
  }
});

// src/app/admin/core/services/bm-compare-service.ts
var BmcompareService = class _BmcompareService {
  constructor(api, http) {
    this.api = api;
    this.http = http;
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/BMCompareSync`;
  }
  getUserCode(emailAddress) {
    return this.api.get("application/GetUserCode?emailAddress=" + emailAddress);
  }
  validateUserCode(userCode) {
    return this.api.get("application/validateUserCode?userCode=" + userCode);
  }
  getEnvironmnets() {
    return this.api.get("application/GetList");
  }
  getProcessNames(data) {
    return this.api.post_gateway("wfapibm/compare/GetBMProcessTypes", data, {});
  }
  getbusinessModel(data) {
    return this.api.post_gateway("wfapibm/compare/GetBMData", data, {});
  }
  // GetLeftRightBM(data:any){
  //     return this.api.post('bmcompare/LoadLeftRightBM',data,{});
  // }
  SyncDataToDB(BMSyncProp) {
    return this.api.post_gateway("wfapibm/compare/SyncBMNodeDataTodb", BMSyncProp, {});
  }
  ExportJsonBM(data, BMID) {
    return this.api.post_gateway(`wfapibm/compare/ExportJsonBM?Bmid=${BMID}`, data);
  }
  GetLeftRightBM(env, data) {
    return this.api.postgateway(env, "wfapibm/compare/LoadLeftRightBM", data, {});
  }
  static {
    this.\u0275fac = function BmcompareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmcompareService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BmcompareService, factory: _BmcompareService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/bmwfcompare/Pages/user-verification/user-verification.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function UserVerificationComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Please enter email address to get the user code .");
    \u0275\u0275elementEnd();
  }
}
function UserVerificationComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Please enter a valid Plasmacomp email address to get the user code .");
    \u0275\u0275elementEnd();
  }
}
function UserVerificationComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, UserVerificationComponent_div_14_div_1_Template, 2, 0, "div", 16)(2, UserVerificationComponent_div_14_div_2_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userForm.controls.email.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userForm.controls.email.errors.pattern);
  }
}
function UserVerificationComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Please enter user code.");
    \u0275\u0275elementEnd();
  }
}
function UserVerificationComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, UserVerificationComponent_div_25_div_1_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userCodeForm.controls.userCode.errors.required);
  }
}
var UserVerificationComponent = class _UserVerificationComponent {
  constructor(formBuilder, service, toastr, msg, router, titleService, route) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.toastr = toastr;
    this.msg = msg;
    this.router = router;
    this.titleService = titleService;
    this.route = route;
    this.userForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]]
    });
    this.userCodeForm = this.formBuilder.group({
      userCode: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.titleService.setTitle(`C2M | User Verification`);
    this.queryParams = this.route.snapshot.queryParams;
  }
  getUserCode() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.service.getUserCode(this.userForm.controls["email"].value).subscribe((res) => {
        if (res && res != null) {
          this.msg.showMessage("Success", { body: res.message });
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  GoToCompare() {
    this.isuserCodesubmitted = true;
    if (this.userCodeForm.valid) {
      this.service.validateUserCode(this.userCodeForm.controls["userCode"].value).subscribe((res) => {
        if (!res) {
          this.msg.showMessage("Warning", { body: "Incorrect user code, please enter a valid user code." });
        } else {
          sessionStorage.setItem("UserAuthenticationCode", this.userCodeForm.controls["userCode"].value);
          if (this.queryParams["type"] == 1)
            this.router.navigate(["/bmwfcompare/bmcompare"]);
          else
            this.router.navigate(["/bmwfcompare/wfcompare"]);
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      this.userCodeForm.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function UserVerificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserVerificationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BmcompareService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserVerificationComponent, selectors: [["app-user-verification"]], decls: 29, vars: 10, consts: [[1, "container-fluid"], [1, ""], [1, "page-title", "d-flex", "align-items-center", "justify-content-center"], [1, "the-fieldset"], [1, "row"], [1, "col-lg-6"], [3, "formGroup"], [1, "form-row"], [1, "col-9"], [1, "input-label"], ["type", "text", "placeholder", "", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", "mr-2", 3, "click"], ["type", "password", "placeholder", "", "formControlName", "userCode", 1, "form-control", 3, "ngClass"], [1, "text-danger"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]], template: function UserVerificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 1)(3, "div", 2);
        \u0275\u0275text(4, "User Verification for Business Model Comparision");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "fieldset", 3)(6, "div", 4)(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Please enter your email address to get the user code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 10);
        \u0275\u0275template(14, UserVerificationComponent_div_14_Template, 3, 2, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
        \u0275\u0275listener("click", function UserVerificationComponent_Template_button_click_16_listener() {
          return ctx.getUserCode();
        });
        \u0275\u0275text(17, "Get Code");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "div", 5)(19, "form", 6)(20, "div", 7)(21, "div", 8)(22, "label", 9);
        \u0275\u0275text(23, "Please enter the user code to access the compare and sync feature");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 14);
        \u0275\u0275template(25, UserVerificationComponent_div_25_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12)(27, "button", 13);
        \u0275\u0275listener("click", function UserVerificationComponent_Template_button_click_27_listener() {
          return ctx.GoToCompare();
        });
        \u0275\u0275text(28, "Submit");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.userForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, ctx.submitted && ctx.userForm.controls.email.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.userForm.controls.email.invalid && (ctx.userForm.controls.email.dirty || ctx.userForm.controls.email.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.userCodeForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, ctx.isuserCodesubmitted && ctx.userCodeForm.controls.userCode.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.userCodeForm.controls.userCode.invalid && !ctx.userForm.invalid && (ctx.userCodeForm.controls.userCode.dirty || ctx.userCodeForm.controls.userCode.touched));
      }
    }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.the-legend[_ngcontent-%COMP%] {\n  border-style: none;\n  border-width: 0;\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 0;\n  width: auto;\n  padding: 0 10px;\n  border: 1px solid #e0e0e0;\n  font-weight: 500;\n}\n.the-fieldset[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  padding: 10px;\n}\n.page-title[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 16px;\n  margin-right: 20px;\n  margin: 20px 15px;\n  font-weight: 450;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 28px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  height: 28px;\n  outline: none;\n  box-shadow: none;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 400;\n  margin-top: 15px;\n  color: #fff;\n}\n.btn[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n  display: block;\n}\n/*# sourceMappingURL=user-verification.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserVerificationComponent, { className: "UserVerificationComponent", filePath: "src\\app\\admin\\bmwfcompare\\Pages\\user-verification\\user-verification.component.ts", lineNumber: 13 });
})();

// src/app/admin/bmwfcompare/Pages/bm-compare/bm-compare.component.ts
var import_jquery = __toESM(require_jquery());
var import_jstree = __toESM(require_jstree());

// src/app/admin/bmwfcompare/Pages/show-node-details/show-node-details.component.ts
var _c02 = (a0, a1) => ({ "key-container": a0, "text-danger": a1 });
var _c1 = (a0, a1, a2) => ({ "text-success": a0, "text-danger": a1, "text-blue": a2 });
function ShowNodeDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, item_r1.value === ctx_r1.RightData[item_r1.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node", item_r1.value !== ctx_r1.RightData[item_r1.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r1.key, ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c1, item_r1.value === ctx_r1.RightData[item_r1.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node", item_r1.value !== ctx_r1.RightData[item_r1.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node", ctx_r1.LeftNodeText === "Missing Node" || ctx_r1.RightNodeText === "Missing Node"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.value);
  }
}
function ShowNodeDetailsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, item_r3.value === ctx_r1.LeftData[item_r3.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node", item_r3.value !== ctx_r1.LeftData[item_r3.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r3.key, ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c1, item_r3.value === ctx_r1.LeftData[item_r3.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node", item_r3.value !== ctx_r1.LeftData[item_r3.key] && ctx_r1.RightNodeText != "Missing Node" && ctx_r1.LeftNodeText != "Missing Node", ctx_r1.LeftNodeText === "Missing Node" || ctx_r1.RightNodeText === "Missing Node"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.value);
  }
}
var ShowNodeDetailsComponent = class _ShowNodeDetailsComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
  ngOnInit() {
    if (this.LeftNode && this.LeftNode.node) {
      this.LeftNodeText = this.LeftNode.node.text;
      this.RightNodeText = this.RightNode.text;
      const liAttr = this.LeftNode.node.li_attr;
      const dispColsArray = liAttr.dispCols.toLowerCase().split(",");
      this.LeftData = Object.entries(liAttr.nodeData).filter(([key]) => dispColsArray.includes(key.toLowerCase())).reduce((obj, [key, value]) => {
        obj[key.toLowerCase()] = value;
        return obj;
      }, {});
      const rightliAttr = this.RightNode.li_attr;
      const RightdispColsArray = rightliAttr.dispCols.toLowerCase().split(",");
      this.RightData = Object.entries(rightliAttr.nodeData).filter(([key]) => RightdispColsArray.includes(key.toLowerCase())).reduce((obj, [key, value]) => {
        obj[key.toLowerCase()] = value;
        return obj;
      }, {});
    }
    if (this.RightNode && this.RightNode.node) {
      this.LeftNodeText = this.LeftNode.text;
      this.RightNodeText = this.RightNode.node.text;
      const liAttr = this.LeftNode.li_attr;
      const dispColsArray = liAttr.dispCols.toLowerCase().split(",");
      this.LeftData = Object.entries(liAttr.nodeData).filter(([key]) => dispColsArray.includes(key.toLowerCase())).reduce((obj, [key, value]) => {
        obj[key.toLowerCase()] = value;
        return obj;
      }, {});
      const rightliAttr = this.RightNode.node.li_attr;
      const RightdispColsArray = rightliAttr.dispCols.toLowerCase().split(",");
      this.RightData = Object.entries(rightliAttr.nodeData).filter(([key]) => RightdispColsArray.includes(key.toLowerCase())).reduce((obj, [key, value]) => {
        obj[key.toLowerCase()] = value;
        return obj;
      }, {});
    }
  }
  static {
    this.\u0275fac = function ShowNodeDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowNodeDetailsComponent)(\u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowNodeDetailsComponent, selectors: [["app-show-node-details"]], inputs: { LeftNode: "LeftNode", RightNode: "RightNode" }, decls: 21, vars: 6, consts: [[1, "popup"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [1, "container"], [1, "row", "mt-2", "mb-3"], [1, "col-6"], [1, "card"], [1, "card-body"], [1, "card-title"], ["class", "d-flex justify-content-between popuplist", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "popuplist"], [1, "key-container"], [1, "nodekey", 3, "ngClass"], [1, "value-container"], [1, "nodevalue", 3, "ngClass"]], template: function ShowNodeDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
        \u0275\u0275text(3, "Node Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275listener("click", function ShowNodeDetailsComponent_Template_span_click_4_listener() {
          return ctx.activeModal.close();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h5", 9);
        \u0275\u0275text(11, "Left Tree Node Details");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, ShowNodeDetailsComponent_div_12_Template, 7, 11, "div", 10);
        \u0275\u0275pipe(13, "keyvalue");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "div", 8)(17, "h5", 9);
        \u0275\u0275text(18, "Right Tree Node Details");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ShowNodeDetailsComponent_div_19_Template, 7, 11, "div", 10);
        \u0275\u0275pipe(20, "keyvalue");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 2, ctx.LeftData));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(20, 4, ctx.RightData));
      }
    }, dependencies: [NgClass, NgForOf, KeyValuePipe], styles: ["\n\n.modal-title[_ngcontent-%COMP%], \n.card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n.card[_ngcontent-%COMP%]   .key-container[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.card[_ngcontent-%COMP%]   .key-container[_ngcontent-%COMP%]   .nodekey[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.5;\n  font-size: 11px;\n  color: #333;\n}\n.card[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.card[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .nodekey[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.5;\n  font-size: 11px;\n  opacity: 0.7;\n}\n.card[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .nodevalue[_ngcontent-%COMP%] {\n  letter-spacing: 0.5;\n  font-size: 11px;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n.popup[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.popuplist[_ngcontent-%COMP%] {\n  border-bottom: 1px dotted rgba(122, 121, 121, 0.5);\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -10px;\n  margin-left: -10px;\n}\n.col-sm-6[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 10px 10px 5px 10px;\n  position: relative;\n  bottom: 10px;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\nspan[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=show-node-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowNodeDetailsComponent, { className: "ShowNodeDetailsComponent", filePath: "src\\app\\admin\\bmwfcompare\\Pages\\show-node-details\\show-node-details.component.ts", lineNumber: 9 });
})();

// src/app/admin/core/services/user-api.service.ts
var UserApiService = class _UserApiService extends BaseHttpService {
  constructor(http, user) {
    super(http);
    this.user = user;
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/user`;
  }
  getAccessToken(username, password) {
    const url = `${this.baseUrl}/token`;
    return this.post(url, null, null, { username, password });
  }
  saveUserDetails(payload) {
    const url = `${this.baseUrl}/saveUserDetail`;
    return this.post(url, payload);
  }
  validateUser(env, username, password) {
    const url = `${env}/api/v2/user/token`;
    return this.post(url, null, null, { username, password });
  }
  static {
    this.\u0275fac = function UserApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(UserDetail));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserApiService, factory: _UserApiService.\u0275fac, providedIn: "root" });
  }
};

// node_modules/@angular/material/fesm2022/tooltip.mjs
var _c03 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var MatTooltip = class _MatTooltip {
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = coerceBooleanProperty(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = coerceBooleanProperty(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = "below";
    this._positionAtOrigin = false;
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    this._tooltipComponent = TooltipComponent;
    this._viewportMargin = 8;
    this._cssClassPrefix = "mat-mdc";
    this.touchGestures = "auto";
    this._message = "";
    this._passiveListeners = [];
    this._touchstartTimeout = null;
    this._destroyed = new Subject();
    this._injector = inject(Injector);
    this._scrollStrategy = scrollStrategy;
    this._document = _document;
    if (_defaultOptions) {
      this._showDelay = _defaultOptions.showDelay;
      this._hideDelay = _defaultOptions.hideDelay;
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }
      if (_defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = _defaultOptions.positionAtOrigin;
      }
      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
      if (_defaultOptions.tooltipClass) {
        this.tooltipClass = _defaultOptions.tooltipClass;
      }
    }
    _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
      }
    });
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
    const strategy = this._overlay.position().flexibleConnectedTo(this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = this._overlay.create({
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
      scrollStrategy: this._scrollStrategy()
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == "ltr";
    if (position.originY === "top") {
      position.offsetY = -offset;
    } else if (position.originY === "bottom") {
      position.offsetY = offset;
    } else if (position.originX === "start") {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === "end") {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      afterNextRender(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") {
        y = "bottom";
      } else if (y === "bottom") {
        y = "top";
      }
    } else {
      if (x === "end") {
        x = "start";
      } else if (x === "start") {
        x = "end";
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(["mouseenter", (event) => {
        this._setupPointerExitEventsIfNeeded();
        let point = void 0;
        if (event.x !== void 0 && event.y !== void 0) {
          point = event;
        }
        this.show(void 0, point);
      }]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(["touchstart", (event) => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : void 0;
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(void 0, origin);
        }, this._defaultOptions.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(["mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ["wheel", (event) => this._wheelListener(event)]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions.touchendHideDelay);
      };
      exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style2 = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style2.userSelect = style2.msUserSelect = style2.webkitUserSelect = style2.MozUserSelect = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style2.webkitUserDrag = "none";
      }
      style2.touchAction = "none";
      style2.webkitTapHighlightColor = "transparent";
    }
  }
  /** Updates the tooltip's ARIA description based on it current state. */
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
    this._ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this._ariaDescriptionPending = false;
        if (this.message && !this.disabled) {
          this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
        }
      });
    });
  }
  static {
    this.\u0275fac = function MatTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTooltip)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(AriaDescriber), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(MAT_TOOLTIP_SCROLL_STRATEGY), \u0275\u0275directiveInject(Directionality), \u0275\u0275directiveInject(MAT_TOOLTIP_DEFAULT_OPTIONS, 8), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatTooltip,
      selectors: [["", "matTooltip", ""]],
      hostAttrs: [1, "mat-mdc-tooltip-trigger"],
      hostVars: 2,
      hostBindings: function MatTooltip_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-tooltip-disabled", ctx.disabled);
        }
      },
      inputs: {
        position: [0, "matTooltipPosition", "position"],
        positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
        disabled: [0, "matTooltipDisabled", "disabled"],
        showDelay: [0, "matTooltipShowDelay", "showDelay"],
        hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
        touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
        message: [0, "matTooltip", "message"],
        tooltipClass: [0, "matTooltipClass", "tooltipClass"]
      },
      exportAs: ["matTooltip"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-mdc-tooltip-trigger",
        "[class.mat-mdc-tooltip-disabled]": "disabled"
      },
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewContainerRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: AriaDescriber
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_TOOLTIP_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var TooltipComponent = class _TooltipComponent {
  constructor(_changeDetectorRef, _elementRef, animationMode) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._isMultiline = false;
    this._closeOnInteraction = false;
    this._isVisible = false;
    this._onHide = new Subject();
    this._showAnimation = "mat-mdc-tooltip-show";
    this._hideAnimation = "mat-mdc-tooltip-hide";
    this._animationsDisabled = animationMode === "NoopAnimations";
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = void 0;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
  static {
    this.\u0275fac = function TooltipComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TooltipComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TooltipComponent,
      selectors: [["mat-tooltip-component"]],
      viewQuery: function TooltipComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c03, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
        }
      },
      hostAttrs: ["aria-hidden", "true"],
      hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
            return ctx._handleMouseLeave($event);
          });
        }
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 4,
      consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 1, 0);
          \u0275\u0275listener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._handleAnimationEnd($event));
          });
          \u0275\u0275elementStart(2, "div", 2);
          \u0275\u0275text(3);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275classProp("mdc-tooltip--multiline", ctx._isMultiline);
          \u0275\u0275property("ngClass", ctx.tooltipClass);
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate(ctx.message);
        }
      },
      dependencies: [NgClass],
      styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-app-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-app-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-app-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-app-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-app-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-app-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-app-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      standalone: true,
      imports: [NgClass],
      template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
      styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-app-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-app-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-app-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-app-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-app-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-app-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-app-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();
var matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: trigger("state", [
    // TODO(crisbeto): these values are based on MDC's CSS.
    // We should be able to use their styles directly once we land #19432.
    state("initial, void, hidden", style({
      opacity: 0,
      transform: "scale(0.8)"
    })),
    state("visible", style({
      transform: "scale(1)"
    })),
    transition("* => visible", animate("150ms cubic-bezier(0, 0, 0.2, 1)")),
    transition("* => hidden", animate("75ms cubic-bezier(0.4, 0, 1, 1)"))
  ])
};
var MatTooltipModule = class _MatTooltipModule {
  static {
    this.\u0275fac = function MatTooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTooltipModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatTooltipModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [A11yModule, CommonModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, CommonModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// src/app/admin/bmwfcompare/Pages/bm-compare/bm-compare.component.ts
var _c04 = (a0) => ({ "is-invalid": a0 });
var _c12 = () => ({ "visibility": "visible" });
var _c2 = () => ({ "visibility": "hidden" });
var _c3 = (a0, a1) => ({ "isDiff": a0, "notDiff": a1 });
function BmCompareComponent_mat_panel_description_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-panel-description", 55);
    \u0275\u0275text(1, " Authentication & Process Details ");
    \u0275\u0275elementEnd();
  }
}
function BmCompareComponent_ng_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const environment_r1 = ctx.$implicit;
    \u0275\u0275property("value", environment_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(environment_r1.Name);
  }
}
function BmCompareComponent_ng_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const environment_r2 = ctx.$implicit;
    \u0275\u0275property("value", environment_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(environment_r2.Name);
  }
}
function BmCompareComponent_ng_option_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r3 = ctx.$implicit;
    \u0275\u0275property("value", op_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r3.BMNAME);
  }
}
function BmCompareComponent_ng_option_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r4 = ctx.$implicit;
    \u0275\u0275property("value", op_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r4.BMNAME);
  }
}
function BmCompareComponent_div_109_span_21_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function BmCompareComponent_div_109_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BmCompareComponent_div_109_span_21_span_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r7 = ctx.$implicit;
    const last_r8 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, +value_r7 > 0, +value_r7 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r8);
  }
}
function BmCompareComponent_div_109_span_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function BmCompareComponent_div_109_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BmCompareComponent_div_109_span_31_span_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r9 = ctx.$implicit;
    const last_r10 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, +value_r9 > 0, +value_r9 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r10);
  }
}
function BmCompareComponent_div_109_span_41_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function BmCompareComponent_div_109_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BmCompareComponent_div_109_span_41_span_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, +value_r11 > 0, +value_r11 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r12);
  }
}
function BmCompareComponent_div_109_span_51_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function BmCompareComponent_div_109_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BmCompareComponent_div_109_span_51_span_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r13 = ctx.$implicit;
    const last_r14 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, +value_r13 > 0, +value_r13 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r13);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r14);
  }
}
function BmCompareComponent_div_109_span_61_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function BmCompareComponent_div_109_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BmCompareComponent_div_109_span_61_span_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r15 = ctx.$implicit;
    const last_r16 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, +value_r15 > 0, +value_r15 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r15);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r16);
  }
}
function BmCompareComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 3)(3, "div", 4)(4, "div", 7)(5, "div", 59)(6, "div", 60)(7, "div", 61)(8, "span", 62);
    \u0275\u0275text(9, "Total Difference");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 63)(11, "span", 64);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 65);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("BMOG", "ShortBMOG"));
    });
    \u0275\u0275elementStart(14, "div", 61);
    \u0275\u0275element(15, "img", 66);
    \u0275\u0275elementStart(16, "strong")(17, "span", 62);
    \u0275\u0275text(18, "BMOG");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 67);
    \u0275\u0275text(20, " (");
    \u0275\u0275template(21, BmCompareComponent_div_109_span_21_Template, 4, 6, "span", 68);
    \u0275\u0275text(22, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 69);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("BMO", "ShortBMO"));
    });
    \u0275\u0275elementStart(24, "div", 61);
    \u0275\u0275element(25, "img", 70);
    \u0275\u0275elementStart(26, "strong")(27, "span", 62);
    \u0275\u0275text(28, "BMO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 71);
    \u0275\u0275text(30, " (");
    \u0275\u0275template(31, BmCompareComponent_div_109_span_31_Template, 4, 6, "span", 68);
    \u0275\u0275text(32, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 72);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("DMOG", "ShortDMOG"));
    });
    \u0275\u0275elementStart(34, "div", 61);
    \u0275\u0275element(35, "img", 73);
    \u0275\u0275elementStart(36, "strong")(37, "span", 62);
    \u0275\u0275text(38, "DMOG");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 74);
    \u0275\u0275text(40, " (");
    \u0275\u0275template(41, BmCompareComponent_div_109_span_41_Template, 4, 6, "span", 68);
    \u0275\u0275text(42, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 75);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_div_click_43_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("DMO", "ShortDMO"));
    });
    \u0275\u0275elementStart(44, "div", 61);
    \u0275\u0275element(45, "img", 76);
    \u0275\u0275elementStart(46, "strong")(47, "span", 62);
    \u0275\u0275text(48, "DMO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 77);
    \u0275\u0275text(50, " (");
    \u0275\u0275template(51, BmCompareComponent_div_109_span_51_Template, 4, 6, "span", 68);
    \u0275\u0275text(52, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 78);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_div_click_53_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("DMO_CONDITION", "ShortDMO_CONDITION"));
    });
    \u0275\u0275elementStart(54, "div", 61);
    \u0275\u0275element(55, "img", 79);
    \u0275\u0275elementStart(56, "strong")(57, "span", 62);
    \u0275\u0275text(58, " DMO Conditions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 80);
    \u0275\u0275text(60, " (");
    \u0275\u0275template(61, BmCompareComponent_div_109_span_61_Template, 4, 6, "span", 68);
    \u0275\u0275text(62, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 81)(64, "div", 61)(65, "strong", 82)(66, "span", 62);
    \u0275\u0275text(67, "Search Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 83)(69, "input", 84);
    \u0275\u0275listener("input", function BmCompareComponent_div_109_Template_input_input_69_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.performSearch($event.target.value + "~Search"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(70, "div", 8)(71, "div", 2)(72, "div", 85)(73, "ul", 86)(74, "li", 87);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_li_click_74_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.FindTreeByClass("Matched", "green"));
    });
    \u0275\u0275element(75, "div", 88);
    \u0275\u0275text(76, "Matched ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li", 89);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_li_click_77_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.FindTreeByClass("Unmatched", "red"));
    });
    \u0275\u0275element(78, "div", 90);
    \u0275\u0275text(79, "Unmatched ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "li", 91);
    \u0275\u0275listener("click", function BmCompareComponent_div_109_Template_li_click_80_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.FindTreeByClass("Missing", "blue"));
    });
    \u0275\u0275element(81, "div", 92);
    \u0275\u0275text(82, "Missing ");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", ctx_r5.CountData["totalCount"] > 0 ? "isDiff" : "notDiff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r5.CountData["totalCount"], ")");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["bmogCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["bmoCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["dmogCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["dmoCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["dmoCondCount"].split("/"));
  }
}
var BmCompareComponent = class _BmCompareComponent {
  constructor(formBuilder, service, auth, msg, toastr, titleService) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.auth = auth;
    this.msg = msg;
    this.toastr = toastr;
    this.titleService = titleService;
    this.scrollPosition = 0;
    this.ProcessNamesLeft = [];
    this.bmleft = [];
    this.IsAuthenticationExpaned = true;
    this.environments = [];
    this.ProcessNamesRight = [];
    this.bmright = [];
    this.LefttreeData = [];
    this.RighttreeData = [];
    this.MasterBmgNamelist = [];
    this.BMOG = /* @__PURE__ */ new Set();
    this.BMO = /* @__PURE__ */ new Set();
    this.DMOG = /* @__PURE__ */ new Set();
    this.DMO = /* @__PURE__ */ new Set();
    this.COND = /* @__PURE__ */ new Set();
    this.matchedNodes = [];
    this.isSyncBtnDisabled = false;
    this.formLeft = this.formBuilder.group({
      EnvironmentLeft: [null, [Validators.required]],
      usernameLeft: ["", [Validators.required]],
      passwordLeft: ["", [Validators.required]]
    });
    this.formRight = this.formBuilder.group({
      EnvironmentRight: [null, [Validators.required]],
      usernameRight: ["", [Validators.required]],
      passwordRight: ["", [Validators.required]]
    });
    this.ProcessDetails = this.formBuilder.group({
      PrcessNameLeft: [null, [Validators.required]],
      PrcessNameRight: [null, [Validators.required]],
      BmNameLeft: [null, [Validators.required]],
      BmNameRight: [null, [Validators.required]],
      MasterBmgName: ["All Business Group", [Validators.required]]
    });
  }
  ngOnInit() {
    this.titleService.setTitle(`C2M | Business Model`);
    this.getEnvironmnets();
    this.treeConfig = {
      core: {
        "check_callback": true,
        data: []
      },
      "types": {
        "BMOG": {
          "icon": "../assets/images/bmog-icon.png"
        },
        "BMO": {
          "icon": "../assets/images/bmo-icon.png"
        },
        "DMOG": {
          "icon": "../assets/images/dmog-icon.png"
        },
        "DMO": {
          "icon": "../assets/images/dmo-icon.png"
        },
        "DMO_CONDITION": {
          "icon": "../assets/images/dmo-cond.png"
        }
      },
      "plugins": ["checkbox", "types", "search", "style"],
      "search": {
        show_only_matches: true,
        "case_sensitive": false,
        "search_callback": (text, node) => {
          if (text == "Matched" || text == "Unmatched" || text == "Missing") {
            const className = node.li_attr.class;
            if (className == "text")
              this.handleSearchCallback(node);
            return className && className.includes(text);
          }
          const containsSearch = text.includes("~Search");
          const searchItem = text.split("~");
          if (containsSearch && searchItem[0] != "") {
            if (node.text.toLowerCase().includes(text.replace("~Search", "").toLowerCase())) {
              return true;
            }
            return false;
          }
          if (node.type === text) {
            this.handleSearchCallback(node);
            return true;
          } else {
            return false;
          }
        }
      },
      "checkbox": {
        whole_node: false,
        tie_selection: false
      }
    };
    (0, import_jquery.default)("#left_jstree, #right_jstree").on("loaded.jstree", (e, data) => {
      this.compareAndSetNodeColors();
    });
    this.ProcessDetails.controls["PrcessNameLeft"].valueChanges.subscribe((data) => {
      this.ProcessDetails.controls["BmNameLeft"].setValue(null);
    });
    this.ProcessDetails.controls["PrcessNameRight"].valueChanges.subscribe((data) => {
      this.ProcessDetails.controls["BmNameRight"].setValue(null);
    });
  }
  handleSearchCallback(node) {
    this.matchedNodes.push(node);
  }
  compareAndSetNodeColors() {
    (0, import_jquery.default)("#left_jstree, #right_jstree").on("loaded.jstree", (e, data) => {
      const leftNodes = (0, import_jquery.default)("#left_jstree").jstree(true).get_json("#", { flat: true });
      const rightNodes = (0, import_jquery.default)("#right_jstree").jstree(true).get_json("#", { flat: true });
      for (let i = 0; i < leftNodes.length; i++) {
        const leftNode = leftNodes[i];
        const rightNode = rightNodes[i];
        if (leftNode?.li_attr?.result === "Matched" && rightNode?.li_attr?.result === "Matched") {
          (0, import_jquery.default)("#left_jstree").jstree(true).get_node(leftNode?.id).li_attr["style"] = "color: green;font-size:14px";
          (0, import_jquery.default)("#right_jstree").jstree(true).get_node(rightNode?.id).li_attr["style"] = "color: green;font-size:14px";
        } else if (leftNode?.li_attr?.result === "Unmatched" && rightNode?.li_attr?.result === "Unmatched") {
          let parentNode = (0, import_jquery.default)("#left_jstree").jstree(true).get_parent(leftNode?.id);
          let rightparentNode = (0, import_jquery.default)("#right_jstree").jstree(true).get_parent(rightNode?.id);
          while (parentNode !== "#") {
            if (parentNode) {
              (0, import_jquery.default)("#left_jstree").jstree(true).get_node(parentNode).li_attr["style"] = "color: red;font-size:14px";
              parentNode = (0, import_jquery.default)("#left_jstree").jstree(true).get_parent(parentNode);
            }
          }
          while (rightparentNode !== "#") {
            if (rightparentNode) {
              (0, import_jquery.default)("#right_jstree").jstree(true).get_node(rightparentNode).li_attr["style"] = "color: red;font-size:14px";
              rightparentNode = (0, import_jquery.default)("#right_jstree").jstree(true).get_parent(rightparentNode);
            }
          }
          (0, import_jquery.default)("#left_jstree").jstree(true).get_node(leftNode.id).li_attr["style"] = "color: red;font-size:14px";
          (0, import_jquery.default)("#right_jstree").jstree(true).get_node(rightNode.id).li_attr["style"] = "color: red;font-size:14px";
        } else if (rightNode?.li_attr?.result === "MissingRight" || leftNode?.li_attr?.result === "MissingLeft") {
          if (leftNode)
            (0, import_jquery.default)("#left_jstree").jstree(true).get_node(leftNode?.id).li_attr["style"] = "color: blue;font-size:14px";
          if (rightNode)
            (0, import_jquery.default)("#right_jstree").jstree(true).get_node(rightNode?.id).li_attr["style"] = "color: blue;font-size:14px";
        }
        (0, import_jquery.default)("#left_jstree").jstree(true).redraw(true);
        (0, import_jquery.default)("#right_jstree").jstree(true).redraw(true);
      }
    });
  }
  getEnvironmnets() {
    this.service.getEnvironmnets().subscribe((res) => {
      if (res && res.length > 0) {
        this.environments = res;
      }
    }, (err) => {
    });
  }
  /********************   Left Start   ************************* */
  getEnvironmentvalueleft(values) {
    this.environmentval_left = values;
  }
  performSearch(value) {
    (0, import_jquery.default)("#left_jstree").jstree(true).search(value);
    (0, import_jquery.default)("#right_jstree").jstree(true).search(value);
  }
  submitLeft() {
    this.submittedLeft = true;
    if (this.formLeft.valid) {
      this.auth.validateUser(this.formLeft.controls["EnvironmentLeft"].value.Connection, this.formLeft.controls["usernameLeft"].value, this.formLeft.controls["passwordLeft"].value).subscribe((res) => {
        if (res && res.accessToken) {
          this.LeftAccessToken = res.accessToken;
          const data = {
            AccessToken: res.accessToken,
            dbLinkId: this.formLeft.controls["EnvironmentLeft"].value.ID,
            dbLink: this.formLeft.controls["EnvironmentLeft"].value.Connection,
            userID: this.formLeft.controls["usernameLeft"].value,
            dbtype: this.formLeft.controls["EnvironmentLeft"].value.DBType
          };
          this.service.getProcessNames(data).subscribe({
            next: (res2) => {
              if (res2 && res2.Table.length > 0) {
                this.ProcessDetails.controls["PrcessNameLeft"].setValue(null);
                this.ProcessDetails.controls["BmNameLeft"].setValue(null);
                this.ProcessNamesLeft = res2.Table;
              }
            },
            error: (err) => {
            }
          });
        }
      });
    } else {
      this.formLeft.markAllAsTouched();
    }
  }
  getbmLeft(obj) {
    const data = {
      AccessToken: this.LeftAccessToken,
      dbLinkId: this.formLeft.controls["EnvironmentLeft"].value.ID,
      dbLink: this.formLeft.controls["EnvironmentLeft"].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formLeft.controls["EnvironmentLeft"].value.DBType
    };
    this.service.getbusinessModel(data).subscribe((res) => {
      this.bmleftModel = null;
      if (res && res.Table.length > 0) {
        this.bmleft = res.Table;
      }
    }, (err) => {
    });
  }
  /************************ End Left  ********************** */
  getEnvironmentvalueRight(env) {
    this.environmentval_right = env;
  }
  submitRight() {
    this.submittedRight = true;
    if (this.formRight.valid) {
      this.auth.validateUser(this.formRight.controls["EnvironmentRight"].value.Connection, this.formRight.controls["usernameRight"].value, this.formRight.controls["passwordRight"].value).subscribe((res) => {
        if (res && res.accessToken) {
          this.RightAccessToken = res.accessToken;
          const data = {
            AccessToken: res.accessToken,
            dbLinkId: this.formRight.controls["EnvironmentRight"].value.ID,
            dbLink: this.formRight.controls["EnvironmentRight"].value.Connection,
            userID: this.formRight.controls["usernameRight"].value,
            dbtype: this.formRight.controls["EnvironmentRight"].value.DBType
          };
          this.service.getProcessNames(data).subscribe({
            next: (res2) => {
              if (res2 && res2.Table.length > 0) {
                this.ProcessDetails.controls["PrcessNameRight"].setValue(null);
                this.ProcessDetails.controls["BmNameRight"].setValue(null);
                this.ProcessNamesRight = res2.Table;
              }
            },
            error: (err) => {
            }
          });
        }
      });
    } else {
      this.formRight.markAllAsTouched();
    }
  }
  getbmRight(obj) {
    const data = {
      AccessToken: this.RightAccessToken,
      dbLinkId: this.formRight.controls["EnvironmentRight"].value.ID,
      dbLink: this.formRight.controls["EnvironmentRight"].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formRight.controls["EnvironmentRight"].value.DBType
    };
    this.service.getbusinessModel(data).subscribe((res) => {
      this.bmrightModel = null;
      if (res && res.Table.length > 0) {
        this.bmright = res.Table;
      }
    }, (err) => {
    });
  }
  GetleftRightBM() {
    if (this.ProcessDetails.invalid)
      return;
    const payload = {
      bmIdRight: this.ProcessDetails.controls["BmNameRight"].value.BMID,
      bmIdleft: this.ProcessDetails.controls["BmNameLeft"].value.BMID,
      compareMode: "Offline",
      dbLinkIdLeft: this.formLeft.controls["EnvironmentLeft"].value.ID,
      dbLinkIdRight: this.formRight.controls["EnvironmentRight"].value.ID,
      dbLinkLeft: this.formLeft.controls["EnvironmentLeft"].value.Connection,
      dbLinkRight: this.formRight.controls["EnvironmentRight"].value.Connection,
      leftDbtype: this.formLeft.controls["EnvironmentLeft"].value.DBType,
      rightDbtype: this.formRight.controls["EnvironmentRight"].value.DBType,
      mstrBmgName: this.ProcessDetails.controls["MasterBmgName"].value,
      processIdLeft: this.ProcessDetails.controls["PrcessNameLeft"].value,
      processIdRight: this.ProcessDetails.controls["PrcessNameRight"].value,
      AccessTokenLeft: this.LeftAccessToken,
      //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
      AccessTokenRight: this.RightAccessToken,
      //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o="
      leftGatewayUrl: this.formLeft.controls["EnvironmentLeft"].value.GatewayUrl,
      rightGatewayUrl: this.formRight.controls["EnvironmentRight"].value.GatewayUrl
    };
    this.service.GetLeftRightBM(this.formLeft.controls["EnvironmentLeft"].value.GatewayUrl, payload).subscribe((res) => {
      if (res.Result && res.Result.length > 0) {
        this.IsShowtree = true;
        this.IsAuthenticationExpaned = false;
        this.LefttreeData = JSON.parse(res.Result[0]);
        this.treeConfig.core.data = this.LefttreeData;
        (0, import_jquery.default)("#left_jstree").jstree("destroy").empty().jstree(this.treeConfig);
        this.RighttreeData = JSON.parse(res.Result[1]);
        (0, import_jquery.default)("#right_jstree").jstree("destroy");
        this.treeConfig.core.data = this.RighttreeData;
        (0, import_jquery.default)("#right_jstree").jstree(this.treeConfig);
        this.RightbmData = res.Result[1];
        this.CountData = res.Result[2];
        this.CountData = JSON.parse(this.CountData);
        this.CountData = this.CountData[0];
        this.BindAllEvents();
        this.compareAndSetNodeColors();
      }
    }, (err) => {
      this.IsShowtree = false;
    });
  }
  BindAllEvents() {
    (0, import_jquery.default)("#right_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      var LeftNodeData = (0, import_jquery.default)("#left_jstree").jstree().get_node(Ids.leftSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: LeftNodeData,
        RightNode: data
      }, { size: "lg" });
      const result = modal.result;
    });
    (0, import_jquery.default)("#left_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      var RightNodeData = (0, import_jquery.default)("#right_jstree").jstree().get_node(Ids.rightSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: data,
        RightNode: RightNodeData
      }, { size: "lg" });
      const result = modal.result;
    });
    (0, import_jquery.default)("#left_jstree").on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const leftTreeJson = (0, import_jquery.default)("#left_jstree").jstree(this).get_checked(true);
      const found = leftTreeJson.find((obj) => {
        return obj.li_attr.class === "Unmatched" || obj.li_attr.class === "Missing";
      });
      if (found) {
        document.getElementById("SyncLRBtn").removeAttribute("disabled");
      } else {
        document.getElementById("SyncLRBtn").setAttribute("disabled", "true");
      }
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      if (data.node.state.checked) {
        (0, import_jquery.default)("#right_jstree").jstree(this).check_node(Ids.rightSelectedId);
      } else {
        (0, import_jquery.default)("#right_jstree").jstree(this).uncheck_node(Ids.rightSelectedId);
      }
    });
    (0, import_jquery.default)("#right_jstree").on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeId = data.node.id;
      const LeftNodeId = RightNodeId.replace("R_", "L_");
      if (data.node.state.checked) {
        (0, import_jquery.default)("#left_jstree").jstree(this).check_node(Ids.leftSelectedId);
      } else {
        (0, import_jquery.default)("#left_jstree").jstree(this).uncheck_node(Ids.leftSelectedId);
      }
    });
    (0, import_jquery.default)("#right_jstree").on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeId = data.node.id;
      const LeftNodeId = RightNodeId.replace("R_", "L_");
      (0, import_jquery.default)("#right_jstree").jstree(true).open_node(Ids.rightSelectedId);
      (0, import_jquery.default)("#left_jstree").jstree(true).open_node(Ids.leftSelectedId);
    });
    (0, import_jquery.default)("#right_jstree").on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeId = data.node.id;
      const LeftNodeId = RightNodeId.replace("R_", "L_");
      (0, import_jquery.default)("#right_jstree").jstree(true).close_node(Ids.rightSelectedId);
      (0, import_jquery.default)("#left_jstree").jstree(true).close_node(Ids.leftSelectedId);
    });
    (0, import_jquery.default)("#left_jstree").on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const LeftNodeId = data.node.id;
      const RightNodeId = LeftNodeId.replace("L_", "R_");
      (0, import_jquery.default)("#right_jstree").jstree(true).open_node(Ids.rightSelectedId);
      (0, import_jquery.default)("#left_jstree").jstree(true).open_node(Ids.leftSelectedId);
    });
    (0, import_jquery.default)("#left_jstree").on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const LeftNodeId = data.node.id;
      const RightNodeId = LeftNodeId.replace("L_", "R_");
      (0, import_jquery.default)("#right_jstree").jstree(true).close_node(Ids.rightSelectedId);
      (0, import_jquery.default)("#left_jstree").jstree(true).close_node(Ids.leftSelectedId);
    });
  }
  syncScroll(event) {
    const target = event.target;
    this.scrollPosition = target.scrollTop;
  }
  ShortTreeByType(type, Id) {
    const SelectedDiv = document.getElementById(Id);
    if (SelectedDiv != null) {
      if (SelectedDiv.classList.contains("IsActive")) {
        SelectedDiv.classList.remove("IsActive");
        (0, import_jquery.default)("#left_jstree").jstree(true).search("");
        (0, import_jquery.default)("#right_jstree").jstree(true).search("");
      } else {
        SelectedDiv.classList.add("IsActive");
        (0, import_jquery.default)("#left_jstree").jstree(true).hide_all;
        (0, import_jquery.default)("#right_jstree").jstree(true).hide_all;
        (0, import_jquery.default)("#left_jstree").jstree(true).search(type);
        (0, import_jquery.default)("#right_jstree").jstree(true).search(type);
        if (this.matchedNodes.length == 0) {
          this.toastr.success("Sorry! No Record Found.");
        }
      }
    }
    this.matchedNodes = [];
  }
  FindTreeByClass(className, id) {
    const SelectedDiv = document.getElementById(id);
    if (SelectedDiv != null) {
      if (SelectedDiv.classList.contains("IsActive")) {
        SelectedDiv.classList.remove("IsActive");
        (0, import_jquery.default)("#left_jstree").jstree(true).search("");
        (0, import_jquery.default)("#right_jstree").jstree(true).search("");
      } else {
        SelectedDiv.classList.add("IsActive");
        (0, import_jquery.default)("#left_jstree").jstree(true).search(className);
        (0, import_jquery.default)("#right_jstree").jstree(true).search(className);
      }
    }
    this.matchedNodes = [];
  }
  SyncNodes() {
    if (this.formLeft.invalid && this.formRight.invalid && this.ProcessDetails.invalid)
      return;
    var accessToken = localStorage.getItem("AccessToken");
    const aToken = accessToken.split(".");
    const userDetail = JSON.parse(atob(aToken[1]));
    const currentUser = JSON.parse(userDetail.User);
    const objBmSync = [];
    let CheckIsMissingNodeExitsForSync = false;
    const leftTreeData = (0, import_jquery.default)("#left_jstree").jstree(true).get_checked(true);
    const RightTreeData = (0, import_jquery.default)("#right_jstree").jstree(true).get_checked(true);
    const dbLinkIdLeft = this.formLeft.controls["EnvironmentLeft"].value.ID.toString();
    const dbLinkIdRight = this.formRight.controls["EnvironmentRight"].value.ID.toString();
    const dbLinkLeft = this.formLeft.controls["EnvironmentLeft"].value.Connection;
    const dbLinkRight = this.formRight.controls["EnvironmentRight"].value.Connection;
    const leftVersion = this.ProcessDetails.controls["BmNameLeft"].value.VER.toString();
    const processIdLeft = this.ProcessDetails.controls["PrcessNameLeft"].value.toString();
    const rightVersion = this.ProcessDetails.controls["BmNameRight"].value.VER.toString();
    const processIdRight = this.ProcessDetails.controls["PrcessNameRight"].value.toString();
    const leftDbtype = this.formLeft.controls["EnvironmentLeft"].value.DBType.toString();
    const rightDbtype = this.formRight.controls["EnvironmentRight"].value.DBType.toString();
    const bmIdLeft = this.ProcessDetails.controls["BmNameLeft"].value.BMID.toString();
    const bmIdRight = this.ProcessDetails.controls["BmNameRight"].value.BMID.toString();
    const UserNameLeft = this.formLeft.controls["usernameLeft"].value.toString();
    const UserNameRight = this.formRight.controls["usernameRight"].value.toString();
    const leftGatewayUrl = this.formLeft.controls["EnvironmentLeft"]?.value?.GatewayUrl;
    const rightGatewayUrl = this.formRight.controls["EnvironmentRight"]?.value?.GatewayUrl;
    const userId = currentUser.UserId;
    const userCode = sessionStorage.getItem("UserAuthenticationCode").toString();
    const userName = currentUser.UserName;
    let syncAction = "L-R";
    let parentIdLeft = "";
    let parentIdRight = "";
    let parentName = "";
    let rootIds = "";
    let jsonCols = "";
    var parentStatus = true;
    var missingStatus = true;
    var sortedElmsL = this.sortByKey(leftTreeData, "id");
    var sortedElmsR = this.sortByKey(RightTreeData, "id");
    leftTreeData.forEach((node, index) => {
      if (node.text === "Missing Node") {
        CheckIsMissingNodeExitsForSync = true;
      }
    });
    if (CheckIsMissingNodeExitsForSync) {
      this.msg.showMessage("Warning", { body: "Sorry You can Not Sync Missing Node Left To Right." });
      return;
    }
    this.msg.showMessage("Warning", { body: "Are You Sure for Sync Data From Left to Right", isConfirmation: true, btnText: "Ok" }).result.then((ok) => {
      if (ok) {
        if (leftTreeData.length > 0) {
          var sortedElmsL2 = this.sortByKey(leftTreeData, "id");
          import_jquery.default.each(sortedElmsL2, function(index, obj) {
            var pResult = "";
            if (obj.parent.length > 0) {
              var node = (0, import_jquery.default)("#left_jstree").jstree(true).get_node(obj.parent);
              if (node.id !== "#") {
                pResult = node.li_attr.result;
                switch (syncAction) {
                  case "L-R":
                    if (pResult === "MissingRight" && !node.state.checked) {
                      parentStatus = false;
                    }
                    break;
                  case "R-L":
                    if (pResult === "MissingLeft" && !node.state.checked) {
                      parentStatus = false;
                    }
                    break;
                }
              }
            }
          });
        }
        sortedElmsL2.forEach((node, index) => {
          const addNewColsJson = {};
          rootIds = node.id.split("_");
          let result = node.li_attr.result;
          if (node.state.disabled || node.text === "Missing Node") {
            return;
          }
          if (node.parent.length > 0) {
            const parent = (0, import_jquery.default)("#left_jstree").jstree(true).get_node(node.parent);
            if (parent.id !== "#") {
              parentName = parent.text;
            }
          }
          if (result !== "Matched") {
            if (result == "Unmatched") {
              switch (node.type) {
                case "BMOG":
                  parentIdLeft = bmIdLeft;
                  parentIdRight = bmIdRight;
                  break;
                default:
                  parentIdLeft = node.li_attr.pIds.split("-")[0];
                  parentIdRight = node.li_attr.pIds.split("-")[1];
                  break;
              }
              jsonCols = leftTreeData[index].li_attr.jsonCols;
              addNewColsJson.PROCESSID = processIdRight;
              let prevJsonData2 = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, "True"));
              addNewColsJson.VER = rightVersion;
              let newJsonData2 = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));
              const newItem = {
                dbLinkIdLeft,
                dbLinkIdRight,
                dbLinkLeft,
                dbLinkRight,
                leftVersion,
                processIdLeft,
                rightVersion,
                processIdRight,
                tblName: node.type,
                syncAction,
                syncBy: "CheckBox",
                action: "UpdateData",
                userId,
                userCode,
                userName,
                parentIdLeft: parentIdLeft.toString(),
                parentIdRight: parentIdRight.toString(),
                idLeft: node.li_attr.lid.split("-")[0].toString(),
                idRight: node.li_attr.lid.split("-")[1].toString(),
                prevJsonData: JSON.stringify(prevJsonData2),
                newJsonData: JSON.stringify(newJsonData2),
                Data: newJsonData2,
                //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
                parentName: parentName.toString(),
                bmogId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
                compareMode: "Offline",
                bmIdLeft,
                bmIdRight,
                leftDbtype,
                rightDbtype,
                AccessTokenLeft: this.LeftAccessToken,
                AccessTokenRight: this.RightAccessToken,
                UserNameLeft,
                UserNameRight,
                leftGatewayUrl,
                rightGatewayUrl
              };
              if (syncAction === "L-R") {
                newItem.Data["PROCESSID"] = processIdRight;
              } else {
                newItem.Data["PROCESSID"] = processIdLeft;
              }
              objBmSync.push(newItem);
            } else {
              switch (syncAction) {
                case "L-R":
                  if (result == "MissingRight") {
                    if (leftTreeData != void 0 && RightTreeData != null) {
                      jsonCols = leftTreeData[index].li_attr.jsonCols;
                      addNewColsJson.PROCESSID = processIdRight;
                      var prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, "True"));
                      addNewColsJson.VER = rightVersion;
                      var newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));
                    }
                  }
                  break;
                case "R-L":
                  break;
              }
              switch (node.type) {
                case "BMOG":
                  parentIdLeft = this.ProcessDetails.controls["BmNameLeft"].value.BMID;
                  parentIdRight = this.ProcessDetails.controls["BmNameRight"].value.BMID;
                  break;
                default:
                  parentIdLeft = node.li_attr.pIds.split("-")[0];
                  parentIdRight = node.li_attr.pIds.split("-")[1];
                  break;
              }
              const newItem = {
                dbLinkIdLeft,
                dbLinkIdRight,
                dbLinkLeft,
                dbLinkRight,
                leftVersion,
                processIdLeft,
                rightVersion,
                processIdRight,
                tblName: node.type,
                syncAction,
                syncBy: "CheckBox",
                action: "InsertData",
                userId,
                userCode,
                userName,
                parentIdLeft: parentIdLeft.toString(),
                parentIdRight: parentIdRight.toString(),
                idLeft: node.li_attr.lid.split("-")[0].toString(),
                idRight: node.li_attr.lid.split("-")[1].toString(),
                prevJsonData: JSON.stringify(prevJsonData),
                newJsonData: JSON.stringify(newJsonData),
                Data: newJsonData,
                //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
                parentName: parentName.toString(),
                bmogId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
                compareMode: "Offline",
                bmIdLeft,
                bmIdRight,
                leftDbtype,
                rightDbtype,
                AccessTokenLeft: this.LeftAccessToken,
                AccessTokenRight: this.RightAccessToken,
                UserNameLeft,
                UserNameRight,
                leftGatewayUrl,
                rightGatewayUrl
              };
              if (syncAction === "L-R") {
                newItem.Data["PROCESSID"] = processIdRight;
              } else {
                newItem.Data["PROCESSID"] = processIdLeft;
              }
              if (result == "Unmatched") {
                if (leftTreeData != void 0 && RightTreeData != void 0) {
                  if (this.CheckNodeDataForSync(leftTreeData, RightTreeData, node.li_attr.jsonCols, node.li_attr.noCompCols)) {
                    objBmSync.push(import_jquery.default.extend(true, {}, newItem));
                  }
                }
              } else {
                switch (syncAction) {
                  case "L-R":
                    if (result == "MissingRight") {
                      if (leftTreeData != void 0 && leftTreeData != null) {
                        objBmSync.push(import_jquery.default.extend(true, {}, newItem));
                      }
                    }
                    break;
                  case "R-L":
                    if (result == "MissingLeft") {
                      if (RightTreeData != void 0 && RightTreeData != null) {
                        objBmSync.push(import_jquery.default.extend(true, {}, newItem));
                      }
                    }
                    break;
                }
              }
            }
          }
        });
        if (objBmSync.length > 0) {
          this.SyncBmNodeDataToDB(objBmSync);
        } else {
          this.msg.showMessage("Warning", { body: "No unmatched or missing record found to sync." });
          return;
        }
      }
    });
  }
  SyncBmNodeDataToDB(objBmSync) {
    this.service.SyncDataToDB(objBmSync).subscribe((result) => {
      if (result && result.length > 0) {
        this.msg.showMessage("Warning", { body: "Selected Record Sync Left To Right Successfully." });
        this.GetleftRightBM();
      }
    }, (error) => {
    });
  }
  CheckNodeDataForSync(jsonDataLeft, jsonDataRight, dispCols, noCompCols) {
    if (jsonDataLeft !== void 0 && jsonDataLeft !== null && jsonDataLeft != "" && jsonDataRight !== void 0 && jsonDataRight !== null && jsonDataRight != "" && dispCols !== void 0 && dispCols !== null && dispCols != "" && noCompCols !== void 0 && noCompCols !== null && noCompCols != "") {
      var compareCols = dispCols.split(",");
      var noCompareCols = noCompCols.split(",");
      for (var key in jsonDataLeft) {
        if (jsonDataLeft.hasOwnProperty(key) && compareCols.indexOf(key) != -1) {
          if (key in jsonDataRight) {
            if (jsonDataLeft[key] != jsonDataRight[key] && noCompareCols.indexOf(key) == -1) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  sortByKey(array, key) {
    return array?.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  GetPrevJsonData(prevJson, prevJsonCols, prevAddJsonCols, value) {
    const prevJsonData = {};
    const getCols = prevJsonCols.split(",");
    if (value === "True") {
      for (const key in prevJson) {
        if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
          switch (key.toLowerCase()) {
            case "status":
              prevJsonData[key] = prevJson[key] === "Active" ? "1" : "0";
              break;
            case "enabled":
            case "mandatory":
            case "visible":
              prevJsonData[key] = prevJson[key] === "Yes" ? "1" : prevJson[key] === "NA" ? "2" : "0";
              break;
            case "reqd":
              prevJsonData[key] = prevJson[key] === "Yes" ? "1" : "0";
              break;
            case "ntfopt":
              prevJsonData[key] = prevJson[key] === "None" ? "1" : prevJson[key] === "Notes" ? "2" : prevJson[key] === "Custom Notification" ? "3" : prevJson[key] === "Custom Message with Notification" ? "4" : prevJson[key] === "Prepopulated custom message with notification" ? "5" : "0";
              break;
            default:
              prevJsonData[key] = prevJson[key];
              break;
          }
        }
      }
    } else {
      for (const key in prevJson) {
        if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
          prevJsonData[key] = "";
        }
      }
    }
    Object.assign(prevJsonData, JSON.parse(JSON.stringify(prevAddJsonCols)));
    return prevJsonData;
  }
  GetNewjsonData(newJsonData, newjsonCols, newAddJsonCols) {
    const modifiedJsonData = {};
    const getCols = newjsonCols.split(",");
    for (const key in newJsonData) {
      if (newJsonData.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
        switch (key.toLowerCase()) {
          case "status":
            modifiedJsonData[key] = newJsonData[key] === "Active" ? "1" : "0";
            break;
          case "enabled":
          case "mandatory":
          case "visible":
            modifiedJsonData[key] = newJsonData[key] === "Yes" ? "1" : newJsonData[key] === "NA" ? "2" : "0";
            break;
          case "reqd":
            modifiedJsonData[key] = newJsonData[key] === "Yes" ? "1" : "0";
            break;
          case "ntfopt":
            modifiedJsonData[key] = newJsonData[key] === "None" ? "1" : newJsonData[key] === "Notes" ? "2" : newJsonData[key] === "Custom Notification" ? "3" : newJsonData[key] === "Custom Message with Notification" ? "4" : newJsonData[key] === "Prepopulated custom message with notification" ? "5" : "0";
            break;
          default:
            modifiedJsonData[key] = newJsonData[key];
            break;
        }
      }
    }
    Object.assign(modifiedJsonData, JSON.parse(JSON.stringify(newAddJsonCols)));
    return modifiedJsonData;
  }
  ConvertKeysToUppercase(obj) {
    const convertedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const uppercaseKey = key.toUpperCase();
        convertedObj[uppercaseKey] = obj[key];
      }
    }
    return convertedObj;
  }
  GenerateLeftRightSelectedNodeIds(data) {
    let leftSelectedId = "";
    let rightSelectedId = "";
    const selectedNodeId = data.node.id;
    const LRId = data.node.li_attr.lid;
    const LRdId = data.node.li_attr.lidd;
    const LRRootNodeId = data.node.li_attr.rootNodeId;
    if (selectedNodeId != "" && selectedNodeId != null && LRId != "" && LRId != null && LRRootNodeId != "" && LRRootNodeId != null) {
      const arrId = selectedNodeId.split("_");
      const arrLRdId = LRdId.split("-");
      const arrLRRootNodeId = LRRootNodeId.split("-");
      if (arrId.length > 4) {
        leftSelectedId = "L_" + arrId[1] + "_" + arrId[2] + "_" + arrLRdId[0] + "_" + arrLRRootNodeId[0];
        rightSelectedId = "R_" + arrId[1] + "_" + arrId[2] + "_" + arrLRdId[1] + "_" + arrLRRootNodeId[1];
      } else {
        leftSelectedId = "L_" + arrId[1] + "_" + arrLRdId[0] + "_" + arrLRRootNodeId[0];
        rightSelectedId = "R_" + arrId[1] + "_" + arrLRdId[1] + "_" + arrLRRootNodeId[1];
      }
    }
    return { leftSelectedId, rightSelectedId };
  }
  extractValue(input) {
    const parts = input.split("_");
    if (parts.length > 2) {
      let value = parseInt(parts[2], 10);
      if (!isNaN(value)) {
        if (parts[1] === "DMO") {
          this.DMO.add(value);
        } else if (parts[1] === "DMOG") {
          this.DMOG.add(value);
        } else if (parts[1] === "BMO") {
          this.BMO.add(value);
        } else if (parts[1] === "BMOG") {
          this.BMOG.add(value);
        }
      } else if (parts[2] === "CONDITION") {
        value = parseInt(parts[3], 10);
        this.COND.add(value);
      }
    }
    return "";
  }
  DownloadFile() {
    const leftTreeJson = (0, import_jquery.default)("#left_jstree").jstree().get_checked(true);
    const BMID = this.ProcessDetails.controls["BmNameLeft"].value.BMID;
    this.DMO = /* @__PURE__ */ new Set();
    this.DMOG = /* @__PURE__ */ new Set();
    this.BMO = /* @__PURE__ */ new Set();
    this.BMOG = /* @__PURE__ */ new Set();
    this.COND = /* @__PURE__ */ new Set();
    leftTreeJson.forEach((node) => {
      this.extractValue(node.id);
      const parents = node.parents || [];
      parents.forEach((parentId) => {
        this.extractValue(parentId);
      });
    });
    const result = {
      "BMOG": Array.from(this.BMOG),
      "BMO": Array.from(this.BMO),
      "DMOG": Array.from(this.DMOG),
      "DMO": Array.from(this.DMO),
      "COND": Array.from(this.COND)
    };
    this.ExportBmJsonDataToFile(result, BMID);
  }
  ExportBmJsonDataToFile(result, BMID) {
    this.service.ExportJsonBM(result, BMID).subscribe({
      next: (result2) => {
        const blob = new Blob([JSON.stringify(result2)], { type: "application/json" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = "exportedData.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      error: (err) => {
      }
    });
  }
  static {
    this.\u0275fac = function BmCompareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmCompareComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BmcompareService), \u0275\u0275directiveInject(UserApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BmCompareComponent, selectors: [["app-bm-compare"]], decls: 131, vars: 44, consts: [[1, "page-title", "text-center", "text-muted"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [3, "expandedChange", "expanded"], ["class", "page-title text-muted", 4, "ngIf"], [1, "card-body"], [1, "col-lg-12"], [1, "title", 2, "margin-left", "17px"], [1, "row", 2, "margin-left", "5px", "width", "99%"], [1, "col-lg-6", "left-divider"], [3, "formGroup"], [1, "form-group", "col-md-4"], ["for", "Environment", 1, "input-label"], [1, "text-danger"], ["appendTo", "body", "formControlName", "EnvironmentLeft", "placeholder", "Select...", 1, "form-control", 3, "change", "searchable", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "UserName", 1, "input-label"], ["type", "text", "formControlName", "usernameLeft", "id", "UserName", "placeholder", "", 1, "form-control", 3, "ngClass"], ["for", "Password", 1, "input-label"], ["type", "password", "id", "Password", "placeholder", "", "formControlName", "passwordLeft", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-12", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-2", 3, "click"], [1, "col-lg-6"], ["placeholder", "Select...", "formControlName", "EnvironmentRight", "appendTo", "body", 1, "form-control", 3, "change", "ngClass"], ["type", "text", "id", "UserName", "placeholder", "", "formControlName", "usernameRight", 1, "form-control", 3, "ngClass"], ["type", "password", "id", "Password", "placeholder", "", "formControlName", "passwordRight", 1, "form-control", 3, "ngClass"], [1, "title"], [1, "form-group", "col-md-3"], ["placeholder", "Select...", "bindLabel", "NAME", "bindValue", "ID", "formControlName", "PrcessNameLeft", "appendTo", "body", 1, "form-control", 3, "change", "items", "dropdownPosition"], ["placeholder", "Select...", "formControlName", "BmNameLeft", "appendTo", "body", 1, "form-control", 3, "dropdownPosition"], ["placeholder", "Select...", "bindLabel", "NAME", "bindValue", "ID", "formControlName", "PrcessNameRight", "appendTo", "body", 1, "form-control", 3, "change", "items", "dropdownPosition"], ["placeholder", "Select...", "formControlName", "BmNameRight", "appendTo", "body", 1, "form-control", 3, "dropdownPosition"], [1, "row", "d-flex", "justify-content-end", "mt-2"], [1, "form-group", "col-md-2"], ["placeholder", "Select...", "formControlName", "MasterBmgName", "appendTo", "body", 1, "form-control", 3, "dropdownPosition"], ["value", "All Business Group"], ["value", "AdminView"], ["value", "Form"], [1, "form-row", "col-md-12", "d-flex", "justify-content-end"], ["class", "col-lg-12 mb-2 mt-2", 4, "ngIf"], [1, "col-lg-12", 3, "ngStyle"], [1, "Tree-wrapper"], [1, "card", 3, "scroll", "ngClass", "scrollTop"], ["id", "left_jstree"], [1, "tree-actionbtn-wrapper"], [1, "card", 3, "ngClass"], [1, "Actionbtns", "d-flex", "flex-column", "align-items-center", "justify-content-center"], ["id", "SyncLRBtn", "disabled", "", 1, "btn1", 3, "click"], ["matTooltip", "Sync Data From Left to Right", 1, "fa", "fa-arrow-right", "Right"], [1, "btn1", 3, "click"], ["matTooltip", "Reload", 1, "fa", "fa-redo", "reload"], ["matTooltip", "Download", 1, "fa", "fa-download"], ["id", "right_jstree"], [1, "page-title", "text-muted"], [3, "value"], [1, "col-lg-12", "mb-2", "mt-2"], [1, ""], [1, "d-flex"], [1, "count-container", 2, "border", "0px"], [1, "logo", "d-flex"], [1, "count-label"], ["matTooltip", "Total Difference", 1, "component-diff-count"], [1, "counts", 3, "ngClass"], ["id", "ShortBMOG", 1, "count-container", 3, "click"], ["src", "../../../../assets/images/bmog-icon.png"], ["matTooltip", "No of Right Side Missing BMOG /No of UnMatched Data BMOG/ No of Left Side Missing BMOG", 1, "component-diff-count"], ["class", "m-0 p-0", 4, "ngFor", "ngForOf"], ["id", "ShortBMO", 1, "count-container", 3, "click"], ["src", "../../../../assets/images/bmo-icon.png"], ["matTooltip", "No of Right Side Missing BMO /No of UnMatched Data BMO/ No of Left Side Missing BMO", 1, "component-diff-count"], ["id", "ShortDMOG", 1, "count-container", 3, "click"], ["src", "../../../../assets/images/dmog-icon.png"], ["matTooltip", "No of Right Side Missing DMOG /No of UnMatched Data DMOG/ No of Left Side Missing DMOG", 1, "component-diff-count"], ["id", "ShortDMO", 1, "count-container", 3, "click"], ["src", "../../../../assets/images/dmo-icon.png"], ["matTooltip", "No of Right Side Missing DMO /No of UnMatched Data DMO/ No of Left Side Missing DMO", 1, "component-diff-count"], ["id", "ShortDMO_CONDITION", 1, "count-container", 3, "click"], ["src", "../../../../assets/images/dmo-cond.png"], ["matTooltip", "No of Right Side Missing DMO Conditions /No of UnMatched Data DMO Conditions/ No of Left Side Missing DMO Conditions", 1, "component-diff-count"], [1, "count-container"], [1, "m-0"], ["matTooltip", "Search tree items", 1, "component-diff-count"], ["type", "text", "placeholder", "", 1, "form-control", 3, "input"], [1, "col-lg-12", "d-flex", "justify-content-end"], [1, "landmark", "d-flex"], ["id", "green", 1, "d-flex", 3, "click"], [1, "green"], ["id", "red", 1, "d-flex", 3, "click"], [1, "red"], ["id", "blue", 1, "d-flex", 3, "click"], [1, "blue"], [1, "m-0", "p-0"], [1, "m-0", "p-0", 3, "ngClass"], ["class", "m-0 p-0", 4, "ngIf"]], template: function BmCompareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "Cross Server Business Model Comparision");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "mat-expansion-panel", 5);
        \u0275\u0275twoWayListener("expandedChange", function BmCompareComponent_Template_mat_expansion_panel_expandedChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.IsAuthenticationExpaned, $event) || (ctx.IsAuthenticationExpaned = $event);
          return $event;
        });
        \u0275\u0275elementStart(7, "mat-expansion-panel-header");
        \u0275\u0275template(8, BmCompareComponent_mat_panel_description_8_Template, 2, 0, "mat-panel-description", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275text(12, "Authentication Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "form", 12)(16, "div", 2)(17, "div", 13)(18, "label", 14);
        \u0275\u0275text(19, "Environment ");
        \u0275\u0275elementStart(20, "span", 15);
        \u0275\u0275text(21, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "ng-select", 16);
        \u0275\u0275listener("change", function BmCompareComponent_Template_ng_select_change_22_listener($event) {
          return ctx.getEnvironmentvalueleft($event);
        });
        \u0275\u0275template(23, BmCompareComponent_ng_option_23_Template, 2, 2, "ng-option", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 13)(25, "label", 18);
        \u0275\u0275text(26, "User Name ");
        \u0275\u0275elementStart(27, "span", 15);
        \u0275\u0275text(28, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 13)(31, "label", 20);
        \u0275\u0275text(32, "Password ");
        \u0275\u0275elementStart(33, "span", 15);
        \u0275\u0275text(34, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "input", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 22)(37, "button", 23);
        \u0275\u0275listener("click", function BmCompareComponent_Template_button_click_37_listener() {
          return ctx.submitLeft();
        });
        \u0275\u0275text(38, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 24)(40, "form", 12)(41, "div", 2)(42, "div", 13)(43, "label", 14);
        \u0275\u0275text(44, "Environment ");
        \u0275\u0275elementStart(45, "span", 15);
        \u0275\u0275text(46, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "ng-select", 25);
        \u0275\u0275listener("change", function BmCompareComponent_Template_ng_select_change_47_listener($event) {
          return ctx.getEnvironmentvalueRight($event);
        });
        \u0275\u0275template(48, BmCompareComponent_ng_option_48_Template, 2, 2, "ng-option", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 13)(50, "label", 18);
        \u0275\u0275text(51, "User Name ");
        \u0275\u0275elementStart(52, "span", 15);
        \u0275\u0275text(53, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(54, "input", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 13)(56, "label", 20);
        \u0275\u0275text(57, "Password ");
        \u0275\u0275elementStart(58, "span", 15);
        \u0275\u0275text(59, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(60, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 22)(62, "button", 23);
        \u0275\u0275listener("click", function BmCompareComponent_Template_button_click_62_listener() {
          return ctx.submitRight();
        });
        \u0275\u0275text(63, "Submit");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(64, "div", 8)(65, "div", 10)(66, "div", 8)(67, "div", 28);
        \u0275\u0275text(68, "Process Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "form", 12)(70, "div", 2)(71, "div", 29)(72, "label", 14);
        \u0275\u0275text(73, "Process name ");
        \u0275\u0275elementStart(74, "span", 15);
        \u0275\u0275text(75, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "ng-select", 30);
        \u0275\u0275listener("change", function BmCompareComponent_Template_ng_select_change_76_listener($event) {
          return ctx.getbmLeft($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 29)(78, "label", 18);
        \u0275\u0275text(79, "Business Model ");
        \u0275\u0275elementStart(80, "span", 15);
        \u0275\u0275text(81, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "ng-select", 31);
        \u0275\u0275template(83, BmCompareComponent_ng_option_83_Template, 2, 2, "ng-option", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 29)(85, "label", 14);
        \u0275\u0275text(86, "Process name ");
        \u0275\u0275elementStart(87, "span", 15);
        \u0275\u0275text(88, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "ng-select", 32);
        \u0275\u0275listener("change", function BmCompareComponent_Template_ng_select_change_89_listener($event) {
          return ctx.getbmRight($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 29)(91, "label", 18);
        \u0275\u0275text(92, "Business Model ");
        \u0275\u0275elementStart(93, "span", 15);
        \u0275\u0275text(94, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "ng-select", 33);
        \u0275\u0275template(96, BmCompareComponent_ng_option_96_Template, 2, 2, "ng-option", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 34)(98, "div", 35)(99, "ng-select", 36)(100, "ng-option", 37);
        \u0275\u0275text(101, "All Business Group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "ng-option", 38);
        \u0275\u0275text(103, "Admin View");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "ng-option", 39);
        \u0275\u0275text(105, "Form View");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 40)(107, "button", 23);
        \u0275\u0275listener("click", function BmCompareComponent_Template_button_click_107_listener() {
          return ctx.GetleftRightBM();
        });
        \u0275\u0275text(108, "Compare");
        \u0275\u0275elementEnd()()()()()()()()()()()()();
        \u0275\u0275template(109, BmCompareComponent_div_109_Template, 83, 7, "div", 41);
        \u0275\u0275elementStart(110, "div", 1)(111, "div", 42)(112, "div", 2)(113, "div", 43)(114, "div", 44);
        \u0275\u0275listener("scroll", function BmCompareComponent_Template_div_scroll_114_listener($event) {
          return ctx.syncScroll($event);
        });
        \u0275\u0275elementStart(115, "div", 7);
        \u0275\u0275element(116, "div", 45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "div", 46)(118, "div", 47)(119, "div", 7)(120, "div", 48)(121, "button", 49);
        \u0275\u0275listener("click", function BmCompareComponent_Template_button_click_121_listener() {
          return ctx.SyncNodes();
        });
        \u0275\u0275element(122, "i", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "button", 51);
        \u0275\u0275listener("click", function BmCompareComponent_Template_button_click_123_listener() {
          return ctx.GetleftRightBM();
        });
        \u0275\u0275element(124, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "button", 51);
        \u0275\u0275listener("click", function BmCompareComponent_Template_button_click_125_listener() {
          return ctx.DownloadFile();
        });
        \u0275\u0275element(126, "i", 53);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(127, "div", 43)(128, "div", 44);
        \u0275\u0275listener("scroll", function BmCompareComponent_Template_div_scroll_128_listener($event) {
          return ctx.syncScroll($event);
        });
        \u0275\u0275elementStart(129, "div", 7);
        \u0275\u0275element(130, "div", 54);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("expanded", ctx.IsAuthenticationExpaned);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.IsAuthenticationExpaned);
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.formLeft);
        \u0275\u0275advance(7);
        \u0275\u0275property("searchable", true)("ngClass", \u0275\u0275pureFunction1(30, _c04, ctx.submittedLeft && ctx.formLeft.controls.EnvironmentLeft.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.environments);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c04, ctx.submittedLeft && ctx.formLeft.controls.usernameLeft.errors));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c04, ctx.submittedLeft && ctx.formLeft.controls.passwordLeft.errors));
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.formRight);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c04, ctx.submittedRight && ctx.formRight.controls.EnvironmentRight.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.environments);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c04, ctx.submittedRight && ctx.formRight.controls.usernameRight.errors));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(40, _c04, ctx.submittedRight && ctx.formRight.controls.passwordRight.errors));
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.ProcessDetails);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.ProcessNamesLeft)("dropdownPosition", "bottom");
        \u0275\u0275advance(6);
        \u0275\u0275property("dropdownPosition", "bottom");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.bmleft);
        \u0275\u0275advance(6);
        \u0275\u0275property("items", ctx.ProcessNamesRight)("dropdownPosition", "bottom");
        \u0275\u0275advance(6);
        \u0275\u0275property("dropdownPosition", "bottom");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.bmright);
        \u0275\u0275advance(3);
        \u0275\u0275property("dropdownPosition", "bottom");
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.CountData);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngStyle", ctx.IsShowtree ? \u0275\u0275pureFunction0(42, _c12) : \u0275\u0275pureFunction0(43, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.IsShowtree ? "tree-container" : "")("scrollTop", ctx.scrollPosition);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.IsShowtree ? "tree-actionbtn-container" : "");
        \u0275\u0275advance(10);
        \u0275\u0275property("ngClass", ctx.IsShowtree ? "tree-container" : "")("scrollTop", ctx.scrollPosition);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgStyle, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgSelectComponent, NgOptionComponent, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelDescription, MatTooltip], styles: ["\n\n.page-title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 16px;\n  margin: 10px 2px;\n  letter-spacing: 0.5px;\n  line-height: 22px;\n}\n.title[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  font-size: 14px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  padding: 3px 0px;\n  padding: 0px;\n  margin-bottom: 10px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.input-label-search[_ngcontent-%COMP%], \n.count-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  padding: 0px;\n  text-align: right;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n  display: block;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ng-select.form-control--in-grid[_ngcontent-%COMP%]  .ng-select-container {\n  min-width: unset;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 5px 0px;\n}\n.count-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 5px;\n  margin: 0px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  margin-right: 42px;\n  border-left: 1px solid #ccc;\n  padding-left: 10px;\n}\n.count-container[_ngcontent-%COMP%]   .component-diff-count[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: 0.5px;\n  font-size: bold;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-left: 22px;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: none;\n  font-size: 11px;\n  line-height: 17px;\n  border: none;\n  color: #fff;\n}\n.btn1[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n  outline: none;\n  box-shadow: none;\n  font-size: 17px;\n  margin-left: 6px;\n  padding: 2px 0px;\n  font-weight: bold;\n  border: 0px;\n}\n.btn[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%]   .Right[_ngcontent-%COMP%] {\n  color: green;\n}\n.count-label[_ngcontent-%COMP%] {\n  position: relative;\n  left: 25px;\n  text-align: left;\n  font-size: 12px;\n}\n.count-label[_ngcontent-%COMP%]   .counts[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.isDiff[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n}\n.notDiff[_ngcontent-%COMP%] {\n  color: rgb(0, 128, 0);\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.tree-container[_ngcontent-%COMP%], \n.tree-actionbtn-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  min-height: 400px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgb(0, 0, 0);\n  border-radius: 10px;\n  display: none;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgb(0, 0, 0);\n}\n.tree-container[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  display: block;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #e8e8e8;\n  height: 50px;\n}\n  .mat-expansion-panel-body {\n  padding: 0px !important;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 14px;\n  background-color: transparent !important;\n  margin-top: 10px;\n}\n.landmark[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  letter-spacing: 1px;\n  vertical-align: middle;\n  font-weight: 300;\n  margin: 0px 3px;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%], \n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%], \n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 3px;\n  border-radius: 50%;\n  background-color: green;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n.left-divider[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.125);\n}\n.jstree-default[_ngcontent-%COMP%]   .jstree-anchor[_ngcontent-%COMP%] {\n  color: red;\n  line-height: 24px;\n  height: 24px;\n}\n.Tree-wrapper[_ngcontent-%COMP%] {\n  width: 48% !important;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%] {\n  width: 4% !important;\n  padding: 0px 10px;\n  max-height: 400px;\n  min-height: 400px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n  outline: none;\n  box-shadow: none;\n  font-size: 17px;\n  margin-left: 6px;\n  padding: 2px 0px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .Right[_ngcontent-%COMP%] {\n  color: green;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%] {\n  color: gray;\n}\n[_nghost-%COMP%]     .jstree-default .jstree-search {\n  font-style: normal;\n  font-weight: bold;\n  color: currentColor !important;\n}\n  .jstree-anchor.jstree-disabled {\n  color: currentColor !important;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n  margin-right: 5px;\n}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 10px;\n  padding: 5px 8px;\n}\n/*# sourceMappingURL=bm-compare.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BmCompareComponent, { className: "BmCompareComponent", filePath: "src\\app\\admin\\bmwfcompare\\Pages\\bm-compare\\bm-compare.component.ts", lineNumber: 18 });
})();

// src/app/admin/bmwfcompare/Pages/wf-compare/wf-compare.component.ts
var import_jquery2 = __toESM(require_jquery());
var import_jstree2 = __toESM(require_jstree());

// src/app/admin/core/services/wf-compare-services.ts
var wfcompareService = class _wfcompareService {
  constructor(api, simpleLoader) {
    this.api = api;
    this.simpleLoader = simpleLoader;
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/C2MWFBMCompare`;
  }
  withLoader(url, request$) {
    this.simpleLoader.show(url, true);
    return request$.pipe(finalize(() => this.simpleLoader.hide()));
  }
  getUserCode(emailAddress) {
    const url = `application/GetUserCode?emailAddress=${emailAddress}`;
    return this.withLoader(url, this.api.get(url));
  }
  validateUserCode(userCode) {
    const url = `application/validateUserCode?userCode=${userCode}`;
    return this.withLoader(url, this.api.get(url));
  }
  getEnvironmnets() {
    const url = `application/GetList`;
    return this.withLoader(url, this.api.get(url));
  }
  getProcessNames(env, data) {
    const url = `wfapibm/compare/GetBMProcessTypes`;
    return this.withLoader(url, this.api.post_gateway(url, data, {}));
  }
  GetWorkFlow(env, data) {
    const url = `wfapiwf/compare/GetWFData`;
    return this.withLoader(url, this.api.post_gateway(url, data, {}));
  }
  LoadWFDataFromDB(env, data) {
    const url = `wfapiwf/compare/LoadWFDataFromDB`;
    return this.withLoader(url, this.api.postgateway(env, url, data, {}));
  }
  LoadWFStgSttCondFromDB(data) {
    const url = `wfapiwf/compare/LoadWFStgSttCondFromDB`;
    return this.withLoader(url, this.api.post_gateway(url, data, {}));
  }
  LoadPermissionsDataFromDB(data) {
    const url = `application/LoadPermissionsDataFromDB`;
    this.simpleLoader.show(url, true);
    return new Promise((resolve, reject) => {
      this.api.post(url, data, {}).subscribe((response) => {
        this.simpleLoader.hide();
        resolve(response);
      }, (error) => {
        this.simpleLoader.hide();
        reject(error);
      });
    });
  }
  SyncWFNodeDataTodb(data) {
    const url = `wfapiwf/compare/SyncWFNodeDataTodb`;
    this.simpleLoader.show(url, true);
    return new Promise((resolve, reject) => {
      this.api.post_gateway(url, data, {}).subscribe((response) => {
        this.simpleLoader.hide();
        resolve(response);
      }, (error) => {
        this.simpleLoader.hide();
        reject(error);
      });
    });
  }
  ExportJsonWF(data, WFID) {
    const url = `wfapiwf/compare/ExportJsonwf?Wfid=${WFID}`;
    return this.withLoader(url, this.api.post_gateway(url, data, { isJsonRequest: true }));
  }
  static {
    this.\u0275fac = function wfcompareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _wfcompareService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(SimpleLoaderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _wfcompareService, factory: _wfcompareService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/bmwfcompare/Pages/wf-compare/wf-compare.component.ts
var _c05 = (a0) => ({ "is-invalid": a0 });
var _c13 = () => ({ "visibility": "visible" });
var _c22 = () => ({ "visibility": "hidden" });
var _c32 = (a0, a1) => ({ "isDiff": a0, "notDiff": a1 });
function WfCompareComponent_mat_panel_description_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-panel-description", 58);
    \u0275\u0275text(1, " Authentication & Process Details ");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_ng_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const environment_r1 = ctx.$implicit;
    \u0275\u0275property("value", environment_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(environment_r1.Name);
  }
}
function WfCompareComponent_ng_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const environment_r2 = ctx.$implicit;
    \u0275\u0275property("value", environment_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(environment_r2.Name);
  }
}
function WfCompareComponent_ng_option_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r3 = ctx.$implicit;
    \u0275\u0275property("value", op_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r3.WORKFLOWNAME);
  }
}
function WfCompareComponent_ng_option_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r4 = ctx.$implicit;
    \u0275\u0275property("value", op_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r4.WORKFLOWNAME);
  }
}
function WfCompareComponent_div_109_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r5.CountData["totalCount"] > 0 ? "isDiff" : "notDiff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r5.CountData["totalCount"], ")");
  }
}
function WfCompareComponent_div_109_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r5.StageStateCondCount["totalCount"] > 0 ? "isDiff" : "notDiff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r5.StageStateCondCount["totalCount"], ")");
  }
}
function WfCompareComponent_div_109_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r5.PermissionCounts["totalCount"] > 0 ? "isDiff" : "notDiff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r5.PermissionCounts["totalCount"], ")");
  }
}
function WfCompareComponent_div_109_div_13_span_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_13_span_9_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r8 > 0, +value_r8 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r9);
  }
}
function WfCompareComponent_div_109_div_13_span_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_13_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_13_span_19_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    const last_r11 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r10 > 0, +value_r10 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r11);
  }
}
function WfCompareComponent_div_109_div_13_span_29_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_13_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_13_span_29_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r12 = ctx.$implicit;
    const last_r13 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r12 > 0, +value_r12 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r13);
  }
}
function WfCompareComponent_div_109_div_13_span_39_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_13_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_13_span_39_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r14 > 0, +value_r14 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r15);
  }
}
function WfCompareComponent_div_109_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 83);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_13_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("STAGE", "ShortSTAGE"));
    })("keydown", function WfCompareComponent_div_109_div_13_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(2, "div", 64);
    \u0275\u0275element(3, "img", 84);
    \u0275\u0275elementStart(4, "strong")(5, "span", 65);
    \u0275\u0275text(6, "STAGE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 85);
    \u0275\u0275text(8, " (");
    \u0275\u0275template(9, WfCompareComponent_div_109_div_13_span_9_Template, 4, 6, "span", 86);
    \u0275\u0275text(10, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 87);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_13_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("STATE", "ShortSTATE"));
    })("keydown", function WfCompareComponent_div_109_div_13_Template_div_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(12, "div", 64);
    \u0275\u0275element(13, "img", 88);
    \u0275\u0275elementStart(14, "strong")(15, "span", 65);
    \u0275\u0275text(16, "STATE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 89);
    \u0275\u0275text(18, " (");
    \u0275\u0275template(19, WfCompareComponent_div_109_div_13_span_19_Template, 4, 6, "span", 86);
    \u0275\u0275text(20, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 90);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_13_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("TRIGGER", "ShortTRIGGER"));
    })("keydown", function WfCompareComponent_div_109_div_13_Template_div_keydown_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(22, "div", 64);
    \u0275\u0275element(23, "img", 91);
    \u0275\u0275elementStart(24, "strong")(25, "span", 65);
    \u0275\u0275text(26, "TRIGGER");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 92);
    \u0275\u0275text(28, " (");
    \u0275\u0275template(29, WfCompareComponent_div_109_div_13_span_29_Template, 4, 6, "span", 86);
    \u0275\u0275text(30, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 93);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_13_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("TRIGGER_CONDITION", "ShortTRIGGERCONDITION"));
    })("keydown", function WfCompareComponent_div_109_div_13_Template_div_keydown_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(32, "div", 64);
    \u0275\u0275element(33, "img", 94);
    \u0275\u0275elementStart(34, "strong")(35, "span", 65);
    \u0275\u0275text(36, "TRIGGER CONDITION");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 95);
    \u0275\u0275text(38, " (");
    \u0275\u0275template(39, WfCompareComponent_div_109_div_13_span_39_Template, 4, 6, "span", 86);
    \u0275\u0275text(40, ") ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["stageCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["stateCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["triggerCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.CountData["triggerCondCount"].split("/"));
  }
}
function WfCompareComponent_div_109_div_14_span_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_14_span_9_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const last_r18 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r17 > 0, +value_r17 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r18);
  }
}
function WfCompareComponent_div_109_div_14_span_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_14_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_14_span_19_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r19 = ctx.$implicit;
    const last_r20 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r19 > 0, +value_r19 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r19);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r20);
  }
}
function WfCompareComponent_div_109_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 93);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_14_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("TRIGGER_CONDITION", "ShortTRIGGERCONDITION"));
    })("keydown", function WfCompareComponent_div_109_div_14_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(2, "div", 64);
    \u0275\u0275element(3, "img", 94);
    \u0275\u0275elementStart(4, "strong")(5, "span", 65);
    \u0275\u0275text(6, "STAGE CONDITIONS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 99);
    \u0275\u0275text(8, " (");
    \u0275\u0275template(9, WfCompareComponent_div_109_div_14_span_9_Template, 4, 6, "span", 86);
    \u0275\u0275text(10, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 93);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_14_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("TRIGGER_CONDITION", "ShortTRIGGERCONDITION"));
    })("keydown", function WfCompareComponent_div_109_div_14_Template_div_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(12, "div", 64);
    \u0275\u0275element(13, "img", 94);
    \u0275\u0275elementStart(14, "strong")(15, "span", 65);
    \u0275\u0275text(16, "STATE CONDITIONS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 100);
    \u0275\u0275text(18, " (");
    \u0275\u0275template(19, WfCompareComponent_div_109_div_14_span_19_Template, 4, 6, "span", 86);
    \u0275\u0275text(20, ") ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r5.StageStateCondCount["stageCondCount"].split("/"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r5.StageStateCondCount["stateCondCount"].split("/"));
  }
}
function WfCompareComponent_div_109_div_15_span_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function WfCompareComponent_div_109_div_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WfCompareComponent_div_109_div_15_span_8_span_3_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r22 = ctx.$implicit;
    const last_r23 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c32, +value_r22 > 0, +value_r22 === 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r23);
  }
}
function WfCompareComponent_div_109_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.ShortTreeByType("PERMISSIONS", "ShortPERMISSIONS"));
    })("keydown", function WfCompareComponent_div_109_div_15_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.onKeyDown($event));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275element(2, "img", 84);
    \u0275\u0275elementStart(3, "strong")(4, "span", 65);
    \u0275\u0275text(5, "PERMISSIONS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 102);
    \u0275\u0275text(7, " (");
    \u0275\u0275template(8, WfCompareComponent_div_109_div_15_span_8_Template, 4, 6, "span", 86);
    \u0275\u0275text(9, ") ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r5.PermissionCounts["permCount"].split("/"));
  }
}
function WfCompareComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 8)(3, "div", 9)(4, "div", 12)(5, "div", 62)(6, "div", 63)(7, "div", 64)(8, "span", 65);
    \u0275\u0275text(9, "Total Difference");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, WfCompareComponent_div_109_div_10_Template, 3, 2, "div", 66)(11, WfCompareComponent_div_109_div_11_Template, 3, 2, "div", 66)(12, WfCompareComponent_div_109_div_12_Template, 3, 2, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, WfCompareComponent_div_109_div_13_Template, 41, 4, "div", 67)(14, WfCompareComponent_div_109_div_14_Template, 21, 2, "div", 67)(15, WfCompareComponent_div_109_div_15_Template, 10, 1, "div", 68);
    \u0275\u0275elementStart(16, "div", 69)(17, "div", 64)(18, "strong", 70)(19, "span", 65);
    \u0275\u0275text(20, "Search Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 71)(22, "input", 72);
    \u0275\u0275listener("input", function WfCompareComponent_div_109_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.performSearch($event.target.value + "~Search"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 7)(25, "div", 73)(26, "ul", 74)(27, "li", 75);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_Template_li_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.FindTreeByClass("Matched", "green"));
    });
    \u0275\u0275element(28, "div", 76);
    \u0275\u0275text(29, "Matched");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li", 77);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_Template_li_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.FindTreeByClass("Unmatched", "red"));
    });
    \u0275\u0275element(31, "div", 78);
    \u0275\u0275text(32, "Unmatched");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li", 79);
    \u0275\u0275listener("click", function WfCompareComponent_div_109_Template_li_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.FindTreeByClass("Missing", "blue"));
    });
    \u0275\u0275element(34, "div", 80);
    \u0275\u0275text(35, "Missing");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r5.CountData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.StageStateCondCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.PermissionCounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.CountData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.StageStateCondCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.PermissionCounts);
  }
}
var WfCompareComponent = class _WfCompareComponent {
  constructor(formBuilder, service, auth, msg, toastr, titleService) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.auth = auth;
    this.msg = msg;
    this.toastr = toastr;
    this.titleService = titleService;
    this.IsAuthenticationExpaned = true;
    this.Environments = [];
    this.ProcessNamesLeft = [];
    this.ProcessNamesRight = [];
    this.WorkFlowLeft = [];
    this.WorkFlowRight = [];
    this.LefttreeData = [];
    this.RighttreeData = [];
    this.matchedNodes = [];
    this.scrollPosition = 0;
    this.STAGE = /* @__PURE__ */ new Set();
    this.STATE = /* @__PURE__ */ new Set();
    this.TRIGGER = /* @__PURE__ */ new Set();
    this.COND = /* @__PURE__ */ new Set();
    this.formLeft = this.formBuilder.group({
      EnvironmentLeft: [null, [Validators.required]],
      usernameLeft: ["", [Validators.required]],
      passwordLeft: ["", [Validators.required]]
    });
    this.formRight = this.formBuilder.group({
      EnvironmentRight: [null, [Validators.required]],
      usernameRight: ["", [Validators.required]],
      passwordRight: ["", [Validators.required]]
    });
    this.ProcessDetails = this.formBuilder.group({
      PrcessNameLeft: [null, [Validators.required]],
      PrcessNameRight: [null, [Validators.required]],
      WfNameLeft: [null, [Validators.required]],
      WfNameRight: [null, [Validators.required]]
    });
  }
  ngOnInit() {
    this.titleService.setTitle(`C2M | Workflow`);
    this.getEnvironmnets();
    this.ChangeLabel = "WorkFlow";
    this.CompareButtonName = "WorkFlow";
    this.CompareFor = 0;
    this.treeConfig = {
      core: {
        "check_callback": true,
        data: []
      },
      "types": {
        "STAGE": {
          "icon": "../../assets/images/stage.png"
        },
        "STATE": {
          "icon": "../assets/images/state.png"
        },
        "TRIGGER": {
          "icon": "../assets/images/trigger.png"
        },
        "TRIGGER_CONDITION": {
          "icon": "../assets/images/trigger-cond.png"
        },
        "STAGESTATECONDITION": {
          "icon": "../assets/images/dmo-stag.png"
        },
        "PERMISSIONS": {
          "icon": "../assets/images/stage.png"
        }
      },
      "plugins": ["checkbox", "types", "search", "style"],
      search: {
        show_only_matches: true,
        "case_sensitive": false,
        "search_callback": (text, node) => {
          if (text == "Matched" || text == "Unmatched" || text == "Missing") {
            const className = node.li_attr.class;
            if (className == "text")
              this.handleSearchCallback(node);
            return className && className.includes(text);
          }
          const containsSearch = text.includes("~Search");
          const searchItem = text.split("~");
          if (containsSearch && searchItem[0] != "") {
            if (node.text.toLowerCase().includes(text.replace("~Search", "").toLowerCase())) {
              return true;
            }
            return false;
          }
          if (node.type === text) {
            this.handleSearchCallback(node);
            return true;
          } else {
            return false;
          }
        }
      },
      checkbox: {
        whole_node: false,
        tie_selection: false
      }
    };
    (0, import_jquery2.default)("#left_jstree, #right_jstree").on("loaded.jstree", (e, data) => {
      this.compareAndSetNodeColors();
    });
  }
  getEnvironmnets() {
    this.service.getEnvironmnets().subscribe((res) => {
      if (res && res.length > 0) {
        this.Environments = res;
      }
    }, (err) => {
    });
  }
  getEnvironmentvalueleft(value) {
    this.LeftEnvironment = value;
  }
  getEnvironmentvalueRight(value) {
    this.RightEnvironment = value;
  }
  submitLeft() {
    this.submittedLeft = true;
    if (this.formLeft.valid) {
      this.auth.validateUser(this.formLeft.controls["EnvironmentLeft"].value.Connection, this.formLeft.controls["usernameLeft"].value, this.formLeft.controls["passwordLeft"].value).subscribe((res) => {
        if (res && res.accessToken) {
          this.LeftAccessToken = res.accessToken;
          const data = {
            AccessToken: res.accessToken,
            dbLinkId: this.formLeft.controls["EnvironmentLeft"].value.ID,
            dbLink: this.formLeft.controls["EnvironmentLeft"].value.Connection,
            userID: this.formLeft.controls["usernameLeft"].value,
            dbtype: this.formLeft.controls["EnvironmentLeft"].value.DBType
          };
          this.service.getProcessNames(this.formLeft.controls["EnvironmentLeft"].value.GatewayUrl, data).subscribe({
            next: (res2) => {
              if (res2 && res2.Table.length > 0) {
                this.ProcessDetails.controls["PrcessNameLeft"].setValue(null);
                this.ProcessDetails.controls["WfNameLeft"].setValue(null);
                this.ProcessNamesLeft = res2.Table;
              }
            },
            error: (err) => {
            }
          });
        }
      });
    } else {
      this.formLeft.markAllAsTouched();
    }
  }
  GetLeftWorkFlow(obj) {
    const Payload = {
      AccessToken: this.LeftAccessToken,
      CompareFor: this.CompareFor,
      dbLinkId: this.formLeft.controls["EnvironmentLeft"].value.ID,
      dbLink: this.formLeft.controls["EnvironmentLeft"].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formLeft.controls["EnvironmentLeft"].value.DBType
    };
    this.service.GetWorkFlow(this.formLeft.controls["EnvironmentLeft"].value.gateway, Payload).subscribe({
      next: (res) => {
        this.ProcessDetails.controls["WfNameLeft"].setValue(null);
        if (res && res.Table.length > 0) {
          this.WorkFlowLeft = res.Table;
        }
      },
      error: (err) => {
      }
    });
  }
  submitRight() {
    this.submittedRight = true;
    if (this.formRight.valid) {
      this.auth.validateUser(this.formRight.controls["EnvironmentRight"].value.Connection, this.formRight.controls["usernameRight"].value, this.formRight.controls["passwordRight"].value).subscribe((res) => {
        if (res?.accessToken) {
          this.RightAccessToken = res.accessToken;
          const data = {
            AccessToken: res.accessToken,
            dbLinkId: this.formRight.controls["EnvironmentRight"].value.ID,
            dbLink: this.formRight.controls["EnvironmentRight"].value.Connection,
            userID: this.formRight.controls["usernameRight"].value,
            dbtype: this.formRight.controls["EnvironmentRight"].value.DBType
          };
          this.service.getProcessNames(this.formRight.controls["EnvironmentRight"].value.Connection, data).subscribe({
            next: (res2) => {
              if (res2 && res2.Table.length > 0) {
                this.ProcessDetails.controls["PrcessNameRight"].setValue(null);
                this.ProcessDetails.controls["WfNameRight"].setValue(null);
                this.ProcessNamesRight = res2.Table;
              }
            },
            error: (err) => {
            }
          });
        }
      });
    } else {
      this.formRight.markAllAsTouched();
    }
  }
  GetRightWorkFlow(obj) {
    const Payload = {
      AccessToken: this.RightAccessToken,
      CompareFor: this.CompareFor,
      dbLinkId: this.formRight.controls["EnvironmentRight"].value.ID,
      dbLink: this.formRight.controls["EnvironmentRight"].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formRight.controls["EnvironmentRight"].value.DBType
    };
    this.service.GetWorkFlow(this.formRight.controls["EnvironmentRight"].value.Connection, Payload).subscribe({
      next: (res) => {
        this.ProcessDetails.controls["WfNameRight"].setValue(null);
        if (res && res?.Table?.length > 0) {
          this.WorkFlowRight = res.Table;
        }
      },
      error: (err) => {
      }
    });
  }
  GetWorkFlows() {
    if (this.CompareFor == 1) {
      this.LoadWFStgSttCondFromDB();
    } else if (this.CompareFor == 2) {
      this.LoadPermissionsDataFromDB();
    } else {
      const Payload = {
        dbLinkIdLeft: this.formLeft.controls["EnvironmentLeft"].value.ID,
        dbLinkIdRight: this.formRight.controls["EnvironmentRight"].value.ID,
        dbLinkLeft: this.formLeft.controls["EnvironmentLeft"].value.Connection,
        dbLinkRight: this.formRight.controls["EnvironmentRight"].value.Connection,
        wfIdLeft: this.ProcessDetails.controls["WfNameLeft"].value.WFID,
        wfIdRight: this.ProcessDetails.controls["WfNameRight"].value.WFID,
        processIdLeft: this.ProcessDetails.controls["PrcessNameLeft"].value,
        processIdRight: this.ProcessDetails.controls["PrcessNameRight"].value,
        compareMode: "Offline",
        leftDbType: this.formLeft.controls["EnvironmentLeft"].value.DBType,
        rightDbType: this.formRight.controls["EnvironmentRight"].value.DBType,
        AccessTokenLeft: this.LeftAccessToken,
        AccessTokenRight: this.RightAccessToken,
        leftGatewayUrl: this.formLeft.controls["EnvironmentLeft"].value.GatewayUrl,
        rightGatewayUrl: this.formRight.controls["EnvironmentRight"].value.GatewayUrl
      };
      this.service.LoadWFDataFromDB(this.formLeft.controls["EnvironmentLeft"].value.GatewayUrl, Payload).subscribe({
        next: (result) => {
          if (result && result.length > 0) {
            this.IsShowtree = true;
            this.IsAuthenticationExpaned = false;
            this.LefttreeData = JSON.parse(result[0]);
            this.treeConfig.core.data = this.LefttreeData;
            (0, import_jquery2.default)("#left_jstree").jstree("destroy").empty().jstree(this.treeConfig);
            this.RighttreeData = JSON.parse(result[1]);
            (0, import_jquery2.default)("#right_jstree").jstree("destroy");
            this.treeConfig.core.data = this.RighttreeData;
            (0, import_jquery2.default)("#right_jstree").jstree(this.treeConfig);
            this.CountData = result[2];
            this.CountData = JSON.parse(this.CountData);
            this.CountData = this.CountData[0];
            this.BindAllEvents();
            this.compareAndSetNodeColors();
          }
        },
        error: (error) => {
          this.IsShowtree = false;
        }
      });
    }
  }
  LoadWFStgSttCondFromDB() {
    const Payload = {
      dbLinkIdLeft: this.formLeft.controls["EnvironmentLeft"].value.ID,
      dbLinkIdRight: this.formRight.controls["EnvironmentRight"].value.ID,
      dbLinkLeft: this.formLeft.controls["EnvironmentLeft"].value.Connection,
      dbLinkRight: this.formRight.controls["EnvironmentRight"].value.Connection,
      wfIdLeft: this.ProcessDetails.controls["WfNameLeft"].value.wfid.split("~")[0],
      wfIdRight: this.ProcessDetails.controls["WfNameRight"].value.wfid.split("~")[0],
      processIdLeft: this.ProcessDetails.controls["PrcessNameLeft"].value,
      processIdRight: this.ProcessDetails.controls["PrcessNameRight"].value,
      compareMode: "Offline",
      leftDbType: this.formLeft.controls["EnvironmentLeft"].value.DBType,
      rightDbType: this.formRight.controls["EnvironmentRight"].value.DBType,
      AccessTokenLeft: this.LeftAccessToken,
      AccessTokenRight: this.RightAccessToken,
      bmIdLeft: this.ProcessDetails.controls["WfNameLeft"].value.wfid.split("~")[1],
      bmIdRight: this.ProcessDetails.controls["WfNameRight"].value.wfid.split("~")[1],
      leftGatewayUrl: this.formLeft.controls["EnvironmentLeft"].value.GatewayUrl,
      rightGatewayUrl: this.formRight.controls["EnvironmentRight"].value.GatewayUrl
    };
    this.service.LoadWFStgSttCondFromDB(Payload).subscribe((result) => {
      if (result && result.length > 0) {
        this.IsShowtree = true;
        this.IsAuthenticationExpaned = false;
        this.LefttreeData = JSON.parse(result[0]);
        this.treeConfig.core.data = this.LefttreeData;
        (0, import_jquery2.default)("#left_jstree").jstree("destroy").empty().jstree(this.treeConfig);
        this.RighttreeData = JSON.parse(result[1]);
        (0, import_jquery2.default)("#right_jstree").jstree("destroy");
        this.treeConfig.core.data = this.RighttreeData;
        (0, import_jquery2.default)("#right_jstree").jstree(this.treeConfig);
        this.StageStateCondCount = result[2];
        this.StageStateCondCount = JSON.parse(this.StageStateCondCount);
        this.StageStateCondCount = this.StageStateCondCount[0];
        this.BindAllEvents();
        this.compareAndSetNodeColors();
      }
    }, (error) => {
      this.IsShowtree = false;
    });
  }
  LoadPermissionsDataFromDB() {
    var accessToken = localStorage.getItem("AccessToken");
    const aToken = accessToken.split(".");
    const userDetail = JSON.parse(atob(aToken[1]));
    const currentUser = JSON.parse(userDetail.User);
    const Payload = {
      dbLinkIdLeft: this.formLeft.controls["EnvironmentLeft"].value.ID,
      dbLinkIdRight: this.formRight.controls["EnvironmentRight"].value.ID,
      dbLinkLeft: this.formLeft.controls["EnvironmentLeft"].value.Connection,
      dbLinkRight: this.formRight.controls["EnvironmentRight"].value.Connection,
      wfIdLeft: this.ProcessDetails.controls["WfNameLeft"].value.WFID,
      wfIdRight: this.ProcessDetails.controls["WfNameRight"].value.WFID,
      processIdLeft: this.ProcessDetails.controls["PrcessNameLeft"].value,
      processIdRight: this.ProcessDetails.controls["PrcessNameRight"].value,
      compareMode: "Offline",
      userId: currentUser.UserName,
      leftDbType: this.formLeft.controls["EnvironmentLeft"].value.DBType,
      rightDbType: this.formRight.controls["EnvironmentRight"].value.DBType,
      AccessTokenLeft: this.LeftAccessToken,
      AccessTokenRight: this.RightAccessToken
    };
    this.service.LoadPermissionsDataFromDB(Payload).then((response) => {
      this.IsShowtree = true;
      this.IsAuthenticationExpaned = false;
      this.LefttreeData = JSON.parse(response[0]);
      this.treeConfig.core.data = this.LefttreeData;
      (0, import_jquery2.default)("#left_jstree").jstree("destroy").empty().jstree(this.treeConfig);
      this.RighttreeData = JSON.parse(response[1]);
      (0, import_jquery2.default)("#right_jstree").jstree("destroy");
      this.treeConfig.core.data = this.RighttreeData;
      (0, import_jquery2.default)("#right_jstree").jstree(this.treeConfig);
      this.PermissionCounts = response[2];
      this.PermissionCounts = JSON.parse(this.PermissionCounts);
      this.PermissionCounts = this.PermissionCounts[0];
      this.BindAllEvents();
      this.compareAndSetNodeColors();
    }).catch((error) => {
    });
  }
  BindAllEvents() {
    (0, import_jquery2.default)("#right_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const LeftNodeData = (0, import_jquery2.default)("#left_jstree").jstree().get_node(Ids.leftSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: LeftNodeData,
        RightNode: data
      }, { size: "lg" });
      const result = modal.result;
    });
    (0, import_jquery2.default)("#left_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeData = (0, import_jquery2.default)("#right_jstree").jstree().get_node(Ids.rightSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: data,
        RightNode: RightNodeData
      }, { size: "lg" });
      const result = modal.result;
    });
    (0, import_jquery2.default)("#left_jstree").on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const leftTreeJson = (0, import_jquery2.default)("#left_jstree").jstree(this).get_checked(true);
      const found = leftTreeJson.find((obj) => {
        return obj.li_attr.class === "Unmatched" || obj.li_attr.class === "Missing";
      });
      if (found && leftTreeJson) {
        document.getElementById("SyncLRBtn").removeAttribute("disabled");
      } else {
        document.getElementById("SyncLRBtn").setAttribute("disabled", "true");
      }
      if (data.node.state.checked) {
        (0, import_jquery2.default)("#right_jstree").jstree(this).check_node(Ids.rightSelectedId);
      } else {
        (0, import_jquery2.default)("#right_jstree").jstree(this).uncheck_node(Ids.rightSelectedId);
      }
    });
    (0, import_jquery2.default)("#right_jstree").on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      if (data.node.state.checked) {
        (0, import_jquery2.default)("#left_jstree").jstree(this).check_node(Ids.leftSelectedId);
      } else {
        (0, import_jquery2.default)("#left_jstree").jstree(this).uncheck_node(Ids.leftSelectedId);
      }
    });
    (0, import_jquery2.default)("#right_jstree").on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      (0, import_jquery2.default)("#right_jstree").jstree(true).open_node(Ids.rightSelectedId);
      (0, import_jquery2.default)("#left_jstree").jstree(true).open_node(Ids.leftSelectedId);
    });
    (0, import_jquery2.default)("#right_jstree").on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      (0, import_jquery2.default)("#right_jstree").jstree(true).close_node(Ids.rightSelectedId);
      (0, import_jquery2.default)("#left_jstree").jstree(true).close_node(Ids.leftSelectedId);
    });
    (0, import_jquery2.default)("#left_jstree").on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      (0, import_jquery2.default)("#right_jstree").jstree(true).open_node(Ids.rightSelectedId);
      (0, import_jquery2.default)("#left_jstree").jstree(true).open_node(Ids.leftSelectedId);
    });
    (0, import_jquery2.default)("#left_jstree").on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      (0, import_jquery2.default)("#right_jstree").jstree(true).close_node(Ids.rightSelectedId);
      (0, import_jquery2.default)("#left_jstree").jstree(true).close_node(Ids.leftSelectedId);
    });
  }
  compareAndSetNodeColors() {
    (0, import_jquery2.default)("#left_jstree, #right_jstree").on("loaded.jstree", (e, data) => {
      const leftNodes = (0, import_jquery2.default)("#left_jstree").jstree(true).get_json("#", { flat: true });
      const rightNodes = (0, import_jquery2.default)("#right_jstree").jstree(true).get_json("#", { flat: true });
      for (let i = 0; i < leftNodes.length; i++) {
        const leftNode = leftNodes[i];
        const rightNode = rightNodes[i];
        if (leftNode?.li_attr?.result === "Matched" && rightNode?.li_attr?.result === "Matched") {
          (0, import_jquery2.default)("#left_jstree").jstree(true).get_node(leftNode?.id).li_attr["style"] = "color: green;font-size:12px";
          (0, import_jquery2.default)("#right_jstree").jstree(true).get_node(rightNode?.id).li_attr["style"] = "color: green;font-size:12px";
        } else if (leftNode?.li_attr?.result === "Unmatched" && rightNode?.li_attr?.result === "Unmatched") {
          let parentNode = (0, import_jquery2.default)("#left_jstree").jstree(true).get_parent(leftNode?.id);
          let rightparentNode = (0, import_jquery2.default)("#right_jstree").jstree(true).get_parent(rightNode?.id);
          while (parentNode !== "#") {
            if (parentNode) {
              (0, import_jquery2.default)("#left_jstree").jstree(true).get_node(parentNode).li_attr["style"] = "color: red;font-size:12px";
              parentNode = (0, import_jquery2.default)("#left_jstree").jstree(true).get_parent(parentNode);
            }
          }
          while (rightparentNode !== "#") {
            if (rightparentNode) {
              (0, import_jquery2.default)("#right_jstree").jstree(true).get_node(rightparentNode).li_attr["style"] = "color: red;font-size:12px";
              rightparentNode = (0, import_jquery2.default)("#right_jstree").jstree(true).get_parent(rightparentNode);
            }
          }
          (0, import_jquery2.default)("#left_jstree").jstree(true).get_node(leftNode.id).li_attr["style"] = "color: red;font-size:12px";
          (0, import_jquery2.default)("#right_jstree").jstree(true).get_node(rightNode.id).li_attr["style"] = "color: red;font-size:12px";
        } else if (rightNode?.li_attr?.result === "MissingRight" || leftNode?.li_attr?.result === "MissingLeft") {
          if (leftNode)
            (0, import_jquery2.default)("#left_jstree").jstree(true).get_node(leftNode?.id).li_attr["style"] = "color: blue;font-size:12px";
          if (rightNode)
            (0, import_jquery2.default)("#right_jstree").jstree(true).get_node(rightNode?.id).li_attr["style"] = "color: blue;font-size:12px";
        }
        (0, import_jquery2.default)("#left_jstree").jstree(true).redraw(true);
        (0, import_jquery2.default)("#right_jstree").jstree(true).redraw(true);
      }
    });
  }
  syncScroll(event) {
    const target = event.target;
    this.scrollPosition = target.scrollTop;
  }
  ShortTreeByType(type, Id) {
    const SelectedDiv = document.getElementById(Id);
    if (SelectedDiv != null) {
      if (SelectedDiv.classList.contains("IsActive")) {
        SelectedDiv.classList.remove("IsActive");
        (0, import_jquery2.default)("#left_jstree").jstree(true).search("");
        (0, import_jquery2.default)("#right_jstree").jstree(true).search("");
      } else {
        SelectedDiv.classList.add("IsActive");
        (0, import_jquery2.default)("#left_jstree").jstree(true).hide_all;
        (0, import_jquery2.default)("#right_jstree").jstree(true).hide_all;
        (0, import_jquery2.default)("#left_jstree").jstree(true).search(type);
        (0, import_jquery2.default)("#right_jstree").jstree(true).search(type);
      }
    }
  }
  FindTreeByClass(className, id) {
    const SelectedDiv = document.getElementById(id);
    if (SelectedDiv != null) {
      if (SelectedDiv.classList.contains("IsActive")) {
        SelectedDiv.classList.remove("IsActive");
        (0, import_jquery2.default)("#left_jstree").jstree(true).search("");
        (0, import_jquery2.default)("#right_jstree").jstree(true).search("");
      } else {
        SelectedDiv.classList.add("IsActive");
        (0, import_jquery2.default)("#left_jstree").jstree(true).search(className);
        (0, import_jquery2.default)("#right_jstree").jstree(true).search(className);
      }
    }
    this.matchedNodes = [];
  }
  handleSearchCallback(node) {
    this.matchedNodes.push(node);
  }
  performSearch(value) {
    (0, import_jquery2.default)("#left_jstree").jstree(true).search(value);
    (0, import_jquery2.default)("#right_jstree").jstree(true).search(value);
  }
  ChageCompareMode(inputLabel, buttonName, CompareFor) {
    this.ChangeLabel = inputLabel;
    this.CompareButtonName = buttonName;
    this.ProcessDetails.reset();
    this.IsShowtree = false;
    this.IsAuthenticationExpaned = true;
    this.CompareFor = CompareFor;
    this.StageStateCondCount = null;
    this.PermissionCounts = null;
    this.CountData = null;
  }
  SyncWF() {
    if (this.formLeft.invalid && this.formRight.invalid && this.ProcessDetails.invalid)
      return;
    var accessToken = localStorage.getItem("AccessToken");
    const aToken = accessToken.split(".");
    const userDetail = JSON.parse(atob(aToken[1]));
    const currentUser = JSON.parse(userDetail.User);
    const objwfSync = [];
    let CheckIsMissingNodeExitsForSync = false;
    const leftTreeData = (0, import_jquery2.default)("#left_jstree").jstree(true).get_checked(true);
    const RightTreeData = (0, import_jquery2.default)("#right_jstree").jstree(true).get_checked(true);
    const leftVersion = this.ProcessDetails.controls["WfNameLeft"].value.WORKFLOWNAME.match(/\((.*?)\)/)?.[1];
    const rightVersion = this.ProcessDetails.controls["WfNameRight"].value.WORKFLOWNAME.match(/\((.*?)\)/)?.[1];
    const dbLinkIdLeft = this.formLeft.controls["EnvironmentLeft"].value.ID;
    const dbLinkIdRight = this.formRight.controls["EnvironmentRight"].value.ID;
    const dbLinkLeft = this.formLeft.controls["EnvironmentLeft"].value.Connection;
    const dbLinkRight = this.formRight.controls["EnvironmentRight"].value.Connection;
    const processIdLeft = this.ProcessDetails.controls["PrcessNameLeft"].value.toString();
    const processIdRight = this.ProcessDetails.controls["PrcessNameRight"].value.toString();
    const leftDbtype = this.formLeft.controls["EnvironmentLeft"].value.DBType.toString();
    const rightDbtype = this.formRight.controls["EnvironmentRight"].value.DBType.toString();
    const wfIdLeft = this.CompareFor == 1 && this.ProcessDetails.controls["WfNameLeft"].value.wfid.includes("~") ? this.ProcessDetails.controls["WfNameLeft"].value.wfid.split("~")[0] : this.ProcessDetails.controls["WfNameLeft"].value.WFID;
    const wfIdRight = this.CompareFor == 1 && this.ProcessDetails.controls["WfNameRight"].value.wfid.includes("~") ? this.ProcessDetails.controls["WfNameRight"].value.wfid.split("~")[0] : this.ProcessDetails.controls["WfNameRight"].value.WFID;
    const bmIdLeft = this.CompareFor == 1 && this.ProcessDetails.controls["WfNameLeft"].value.wfid.includes("~") ? this.ProcessDetails.controls["WfNameLeft"].value.wfid.split("~")[1] : 0;
    const bmIdRight = this.CompareFor == 1 && this.ProcessDetails.controls["WfNameRight"].value.wfid.includes("~") ? this.ProcessDetails.controls["WfNameRight"].value.wfid.split("~")[1] : 0;
    const UserNameLeft = this.formLeft.controls["usernameLeft"].value.toString();
    const UserNameRight = this.formRight.controls["usernameRight"].value.toString();
    const userId = currentUser.UserId;
    const userCode = sessionStorage.getItem("UserAuthenticationCode").toString();
    const userName = currentUser.UserName;
    const syncAction = "L-R";
    const leftGatewayUrl = this.formLeft.controls["EnvironmentLeft"]?.value?.GatewayUrl;
    const rightGatewayUrl = this.formRight.controls["EnvironmentRight"]?.value?.GatewayUrl;
    let parentIdLeft = "";
    let parentIdRight = "";
    let parentName = "";
    let rootIds = "";
    let jsonCols = "";
    var sortedElmsL = this.sortByKey(leftTreeData, "id");
    sortedElmsL.forEach((node, index) => {
      if (node.text === "Missing Node") {
        CheckIsMissingNodeExitsForSync = true;
      }
    });
    if (CheckIsMissingNodeExitsForSync) {
      this.msg.showMessage("Warning", { body: "Sorry You can Not Sync Missing Node Left To Right." });
      return;
    }
    this.msg.showMessage("Warning", { body: "Are You Sure for Sync Data From Left to Right", isConfirmation: true, btnText: "Ok" }).result.then((ok) => {
      if (ok) {
        sortedElmsL.forEach((node, index) => {
          const addNewColsJson = {};
          rootIds = node.id.split("_");
          if (node.li_attr.result !== "Matched") {
            if (node.li_attr.result === "Unmatched") {
              switch (node.type) {
                case "STAGE":
                  parentIdLeft = wfIdLeft;
                  parentIdRight = wfIdRight;
                  break;
                default:
                  parentIdLeft = node.li_attr.pIds.split("-")[0];
                  ;
                  parentIdRight = node.li_attr.pIds.split("-")[1];
                  break;
              }
              if (node.parent.length > 0) {
                const parent = (0, import_jquery2.default)("#left_jstree").jstree(true).get_node(node.parent);
                if (parent.id !== "#") {
                  parentName = parent.text;
                }
              }
              jsonCols = leftTreeData[index].li_attr.jsonCols;
              addNewColsJson.PROCESSID = processIdRight;
              var prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, "True"));
              addNewColsJson.VER = rightVersion;
              var newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));
              const newItem = {
                dbLinkIdLeft,
                dbLinkIdRight,
                dbLinkLeft,
                dbLinkRight,
                leftVersion,
                processIdLeft,
                rightVersion,
                processIdRight,
                leftDbtype,
                rightDbtype,
                tblName: node.type,
                syncAction,
                prevJsonData: JSON.stringify(prevJsonData),
                newJsonData: JSON.stringify(newJsonData),
                syncBy: "CheckBox",
                action: "UpdateData",
                userId,
                userCode,
                userName,
                parentIdLeft: parentIdLeft.toString(),
                parentIdRight: parentIdRight.toString(),
                idLeft: node.li_attr.lid.split("-")[0].toString(),
                idRight: node.li_attr.lid.split("-")[1].toString(),
                Data: newJsonData,
                //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
                parentName: parentName.toString(),
                stageId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
                compareMode: "Offline",
                wfIdLeft,
                wfIdRight,
                bmIdLeft,
                bmIdRight,
                AccessTokenLeft: this.LeftAccessToken,
                //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                AccessTokenRight: this.RightAccessToken,
                //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                UserNameLeft,
                UserNameRight,
                leftGatewayUrl,
                rightGatewayUrl
              };
              objwfSync.push(newItem);
            } else {
              switch (node.type) {
                case "BMOG":
                  parentIdLeft = this.ProcessDetails.controls["BmNameLeft"].value.BMID;
                  parentIdRight = this.ProcessDetails.controls["BmNameRight"].value.BMID;
                  break;
                default:
                  parentIdLeft = node.li_attr.pIds != null ? node.li_attr.pIds.split("-")[0] : null;
                  parentIdRight = node.li_attr.pIds != null ? node.li_attr.pIds.split("-")[1] : null;
                  break;
              }
              if (node.parent.length > 0) {
                const parent = (0, import_jquery2.default)("#left_jstree").jstree(true).get_node(node.parent);
                if (parent.id !== "#") {
                  parentName = parent.text;
                }
              }
              jsonCols = leftTreeData[index].li_attr.jsonCols;
              if (jsonCols != null) {
                addNewColsJson.PROCESSID = processIdRight;
                var prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, "True"));
                addNewColsJson.VER = rightVersion;
                var newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));
                const newItem = {
                  dbLinkIdLeft,
                  dbLinkIdRight,
                  dbLinkLeft,
                  dbLinkRight,
                  leftVersion,
                  processIdLeft,
                  rightVersion,
                  processIdRight,
                  leftDbtype,
                  rightDbtype,
                  tblName: node.type,
                  syncAction,
                  prevJsonData: JSON.stringify(prevJsonData),
                  newJsonData: JSON.stringify(newJsonData),
                  syncBy: "CheckBox",
                  action: "InsertData",
                  userId,
                  userCode,
                  userName,
                  parentIdLeft: parentIdLeft.toString(),
                  parentIdRight: parentIdRight.toString(),
                  wfIdLeft,
                  wfIdRight,
                  bmIdLeft,
                  bmIdRight,
                  idLeft: node.li_attr.lid.split("-")[0].toString(),
                  idRight: node.li_attr.lid.split("-")[1].toString(),
                  Data: newJsonData,
                  //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
                  parentName: parentName.toString(),
                  stageId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
                  compareMode: "Offline",
                  AccessTokenLeft: this.LeftAccessToken,
                  //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                  AccessTokenRight: this.RightAccessToken,
                  //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                  UserNameLeft,
                  UserNameRight,
                  leftGatewayUrl,
                  rightGatewayUrl
                };
                objwfSync.push(newItem);
              }
            }
          }
        });
        this.service.SyncWFNodeDataTodb(objwfSync).then((Response) => {
          if (Response && Response.length > 0) {
            if (Response[0] == "Role not matched") {
              this.msg.showMessage("Warning", { body: "Roles are not matched." });
            } else {
              this.msg.showMessage("Warning", { body: "Selected Record Sync Right To Left  Successfully." });
              this.GetWorkFlows();
            }
          }
        }).catch((error) => {
        });
      }
    });
  }
  ConvertKeysToUppercase(obj) {
    const convertedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const uppercaseKey = key.toUpperCase();
        convertedObj[uppercaseKey] = obj[key];
      }
    }
    return convertedObj;
  }
  sortByKey(array, key) {
    return array?.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  GetPrevJsonData(prevJson, prevJsonCols, prevAddJsonCols, value) {
    const prevJsonData = {};
    const getCols = prevJsonCols != null ? prevJsonCols.split(",") : null;
    if (value === "True") {
      for (const key in prevJson) {
        if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
          switch (key.toLowerCase()) {
            case "status":
              prevJsonData[key] = prevJson[key] == "Active" ? "1" : "0";
              break;
            case "enabled":
            case "mandatory":
            case "visible":
              prevJsonData[key] = prevJson[key] === "Yes" ? "1" : prevJson[key] === "NA" ? "2" : "0";
              break;
            case "reqd":
              prevJsonData[key] = prevJson[key] === "Yes" ? "1" : "0";
              break;
            case "ntfopt":
              prevJsonData[key] = prevJson[key] === "None" ? "1" : prevJson[key] === "Notes" ? "2" : prevJson[key] === "Custom Notification" ? "3" : prevJson[key] === "Custom Message with Notification" ? "4" : prevJson[key] === "Prepopulated custom message with notification" ? "5" : "0";
              break;
            default:
              prevJsonData[key] = prevJson[key];
              break;
          }
        }
      }
    } else {
      for (const key in prevJson) {
        if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
          prevJsonData[key] = "";
        }
      }
    }
    Object.assign(prevJsonData, JSON.parse(JSON.stringify(prevAddJsonCols)));
    return prevJsonData;
  }
  GetNewjsonData(newJsonData, newjsonCols, newAddJsonCols) {
    const modifiedJsonData = {};
    const getCols = newjsonCols != null ? newjsonCols.split(",") : null;
    for (const key in newJsonData) {
      if (newJsonData.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
        switch (key.toLowerCase()) {
          case "status":
            modifiedJsonData[key] = newJsonData[key] === "Active" ? "1" : "0";
            break;
          case "enabled":
          case "mandatory":
          case "visible":
            modifiedJsonData[key] = newJsonData[key] === "Yes" ? "1" : newJsonData[key] === "NA" ? "2" : "0";
            break;
          case "reqd":
            modifiedJsonData[key] = newJsonData[key] === "Yes" ? "1" : "0";
            break;
          case "ntfopt":
            modifiedJsonData[key] = newJsonData[key] === "None" ? "1" : newJsonData[key] === "Notes" ? "2" : newJsonData[key] === "Custom Notification" ? "3" : newJsonData[key] === "Custom Message with Notification" ? "4" : newJsonData[key] === "Prepopulated custom message with notification" ? "5" : "0";
            break;
          default:
            modifiedJsonData[key] = newJsonData[key];
            break;
        }
      }
    }
    Object.assign(modifiedJsonData, JSON.parse(JSON.stringify(newAddJsonCols)));
    return modifiedJsonData;
  }
  GenerateLeftRightSelectedNodeIds(data) {
    let leftSelectedId = "";
    let rightSelectedId = "";
    const selectedNodeId = data.node.id;
    const LRId = data.node.li_attr.lid;
    const LRdId = data.node.li_attr.lidd;
    const LRRootNodeId = data.node.li_attr.rootNodeId;
    if (selectedNodeId != "" && selectedNodeId != null && LRId != "" && LRId != null && LRRootNodeId != "" && LRRootNodeId != null) {
      const arrId = selectedNodeId.split("_");
      const arrLRdId = LRdId.split("-");
      const arrLRRootNodeId = LRRootNodeId.split("-");
      if (arrId.length > 4) {
        leftSelectedId = "L_" + arrId[1] + "_" + arrId[2] + "_" + arrLRdId[0] + "_" + arrLRRootNodeId[0];
        rightSelectedId = "R_" + arrId[1] + "_" + arrId[2] + "_" + arrLRdId[1] + "_" + arrLRRootNodeId[1];
      } else {
        leftSelectedId = "L_" + arrId[1] + "_" + arrLRdId[0] + "_" + arrLRRootNodeId[0];
        rightSelectedId = "R_" + arrId[1] + "_" + arrLRdId[1] + "_" + arrLRRootNodeId[1];
      }
    }
    return { leftSelectedId, rightSelectedId };
  }
  DownloadFile() {
    const leftTreeJson = (0, import_jquery2.default)("#left_jstree").jstree().get_checked(true);
    this.STAGE = /* @__PURE__ */ new Set();
    this.STATE = /* @__PURE__ */ new Set();
    this.TRIGGER = /* @__PURE__ */ new Set();
    this.COND = /* @__PURE__ */ new Set();
    let WFID = this.ProcessDetails.controls["WfNameLeft"].value.WFID;
    leftTreeJson.forEach((node) => {
      this.extractValue(node.id);
      const parents = node.parents || [];
      parents.forEach((parentId) => {
        this.extractValue(parentId);
      });
    });
    const result = {
      "WFO": Array.from(this.STAGE),
      "WFOS": Array.from(this.STATE),
      "TRIGGER": Array.from(this.TRIGGER),
      "COND": Array.from(this.COND)
    };
    this.ExportWFJsonDataToFile(result, WFID);
  }
  extractValue(input) {
    const parts = input.split("_");
    if (parts.length > 2) {
      let value = parseInt(parts[2], 10);
      if (!isNaN(value)) {
        if (parts[1] === "STAGE") {
          this.STAGE.add(value);
        } else if (parts[1] === "STATE") {
          this.STATE.add(value);
        } else if (parts[1] === "TRIGGER") {
          this.TRIGGER.add(value);
        }
      } else if (parts[2] === "CONDITION") {
        value = parseInt(parts[3], 10);
        this.COND.add(value);
      }
    }
    return "";
  }
  ExportWFJsonDataToFile(result, WFID) {
    this.service.ExportJsonWF(result, WFID).subscribe({
      next: (result2) => {
        const blob = new Blob([JSON.stringify(result2)], { type: "application/json" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `ExportJsonWF.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      error: (error) => {
      }
    });
  }
  onKeyDown(event) {
    return;
  }
  static {
    this.\u0275fac = function WfCompareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfCompareComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(wfcompareService), \u0275\u0275directiveInject(UserApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfCompareComponent, selectors: [["app-wf-compare"]], decls: 131, vars: 47, consts: [[1, "col-lg", "d-flex", "justify-content-end", "position-relative", "ms-auto", "me-3"], [1, "page-title", "text-center", "text-muted"], [1, "form-check", "page-title"], ["type", "radio", "name", "radio", "checked", "", 1, "form-check-input", 3, "keydown", "click"], ["for", "", 1, "form-check-label"], ["id", "", "type", "radio", "name", "radio", 1, "form-check-input", 3, "keydown", "click"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [3, "expandedChange", "expanded"], ["class", "page-title text-muted", 4, "ngIf"], [1, "card-body"], [1, "col-lg-12"], [1, "title", 2, "margin-left", "20px"], [1, "row", 2, "width", "99%", "margin-left", "5px"], [1, "col-lg-6", "left-divider"], [3, "formGroup"], [1, "form-group", "col-md-4"], ["for", "Environment", 1, "input-label"], [1, "text-danger"], ["appendTo", "body", "formControlName", "EnvironmentLeft", "placeholder", "Select...", 1, "form-control", 3, "change", "searchable", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "UserName", 1, "input-label"], ["type", "text", "formControlName", "usernameLeft", "id", "UserName", "placeholder", "", 1, "form-control", 3, "ngClass"], ["for", "Password", 1, "input-label"], ["type", "password", "id", "Password", "placeholder", "", "formControlName", "passwordLeft", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-12", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-2", 3, "click"], [1, "col-lg-6"], ["placeholder", "Select...", "formControlName", "EnvironmentRight", "appendTo", "body", 1, "form-control", 3, "change", "ngClass"], ["type", "text", "id", "UserName", "placeholder", "", "formControlName", "usernameRight", 1, "form-control", 3, "ngClass"], ["type", "password", "id", "Password", "placeholder", "", "formControlName", "passwordRight", 1, "form-control", 3, "ngClass"], [1, "row", 2, "margin", "5px"], [1, "title"], [1, "row", "mb-2"], [1, "form-group", "col-md-3"], ["placeholder", "Select...", "bindLabel", "NAME", "bindValue", "ID", "formControlName", "PrcessNameLeft", "appendTo", "body", 1, "form-control", 3, "change", "items", "dropdownPosition"], ["placeholder", "Select...", "formControlName", "WfNameLeft", "appendTo", "body", 1, "form-control", 3, "dropdownPosition"], ["placeholder", "Select...", "bindLabel", "NAME", "bindValue", "ID", "formControlName", "PrcessNameRight", "appendTo", "body", 1, "form-control", 3, "change", "items", "dropdownPosition"], ["placeholder", "Select...", "formControlName", "WfNameRight", "appendTo", "body", 1, "form-control", 3, "dropdownPosition"], [1, "form-row", "d-flex", "justify-content-end"], ["type", "submit ", 1, "btn", "btn-primary", "mt-2", 3, "click", "disabled"], ["class", "col-lg-12 mb-2 mt-2", 4, "ngIf"], [1, "col-lg-12", 3, "ngStyle"], [1, "Tree-wrapper"], [1, "card", 3, "scroll", "ngClass", "scrollTop"], ["id", "left_jstree"], [1, "tree-actionbtn-wrapper"], [1, "card", 3, "ngClass"], [1, "Actionbtns", "d-flex", "flex-column", "align-items-center", "justify-content-center"], ["id", "SyncLRBtn", "disabled", "", 1, "btn1", 3, "click"], ["matTooltip", "Sync Data From Left to Right", 1, "fa", "fa-arrow-right", "Right"], [1, "btn1"], ["matTooltip", "Reload", 1, "fa", "fa-redo", "reload", 3, "click"], [1, "btn1", 3, "click"], ["matTooltip", "Download", 1, "fa", "fa-download"], ["id", "right_jstree"], [1, "page-title", "text-muted"], [3, "value"], [1, "col-lg-12", "mb-2", "mt-2"], [1, ""], [1, "d-flex"], [1, "count-container", 2, "border", "0px"], [1, "logo", "d-flex"], [1, "count-label"], ["class", "component-diff-count", "matTooltip", "Total Difference", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], ["class", "count-container", "id", "ShortPERMISSIONS", 3, "click", "keydown", 4, "ngIf"], [1, "count-container"], [1, "ml-2"], ["matTooltip", "Search tree items", 1, "component-diff-count"], ["type", "text", "placeholder", "", 1, "form-control", 3, "input"], [1, "col-lg-12", "d-flex", "justify-content-end"], [1, "landmark", "d-flex"], ["id", "green", 1, "d-flex", 3, "click"], [1, "green"], ["id", "red", 1, "d-flex", 3, "click"], [1, "red"], ["id", "blue", 1, "d-flex", 3, "click"], [1, "blue"], ["matTooltip", "Total Difference", 1, "component-diff-count"], [1, "counts", 3, "ngClass"], ["id", "ShortSTAGE", 1, "count-container", 3, "click", "keydown"], ["src", "../../../../assets/images/stage.png", "alt", ""], ["matTooltip", "No of Right Side Missing Stage /No of UnMatched Data Stage/ No of Left Side Missing Stage", 1, "component-diff-count"], ["class", "m-0 p-0", 4, "ngFor", "ngForOf"], ["id", "ShortSTATE", 1, "count-container", 3, "click", "keydown"], ["src", "../../../../assets/images/state.png", "alt", ""], ["matTooltip", "No of Right Side Missing State /No of UnMatched Data State/ No of Left Side Missing State", 1, "component-diff-count"], ["id", "ShortTRIGGER", 1, "count-container", 3, "click", "keydown"], ["src", "../../../../assets/images/trigger.png", "alt", ""], ["matTooltip", "No of Right Side Missing Trigger /No of UnMatched Data Trigger/ No of Left Side Missing Trigger", 1, "component-diff-count"], ["id", "ShortTRIGGERCONDITION", 1, "count-container", 3, "click", "keydown"], ["src", "../../../../assets/images/trigger-cond.png", "alt", ""], ["matTooltip", "No of Right Side Missing trigger Condition /No of UnMatched Data Trigger Condition/ No of Left Side Missing Trigger Condition", 1, "component-diff-count"], [1, "m-0", "p-0"], [1, "m-0", "p-0", 3, "ngClass"], ["class", "m-0 p-0", 4, "ngIf"], ["matTooltip", "No of Right Side Missing Stage Condition /No of UnMatched Data Stage Condition/ No of Left Side Missing Stage Condition", 1, "component-diff-count"], ["matTooltip", "No of Right Side Missing State Condition /No of UnMatched Data State Condition/ No of Left Side Missing State Condition", 1, "component-diff-count"], ["id", "ShortPERMISSIONS", 1, "count-container", 3, "click", "keydown"], ["matTooltip", "No of Right Side Missing Permissions / No of UnMatched Data Permissions/ No of Left Side Missing Permissions", 1, "component-diff-count"]], template: function WfCompareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2, "Cross Server WorkFlow Comparision");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "input", 3);
        \u0275\u0275listener("keydown", function WfCompareComponent_Template_input_keydown_4_listener($event) {
          return ctx.onKeyDown($event);
        })("click", function WfCompareComponent_Template_input_click_4_listener() {
          return ctx.ChageCompareMode("WorkFlow", "WorkFlow", 0);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "label", 4);
        \u0275\u0275text(6, " WorkFlow ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "input", 5);
        \u0275\u0275listener("keydown", function WfCompareComponent_Template_input_keydown_8_listener($event) {
          return ctx.onKeyDown($event);
        })("click", function WfCompareComponent_Template_input_click_8_listener() {
          return ctx.ChageCompareMode("WorkFlow BM", "Stage State Condition", 1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "label", 4);
        \u0275\u0275text(10, " Workflow Condition ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "mat-expansion-panel", 10);
        \u0275\u0275twoWayListener("expandedChange", function WfCompareComponent_Template_mat_expansion_panel_expandedChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.IsAuthenticationExpaned, $event) || (ctx.IsAuthenticationExpaned = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "mat-expansion-panel-header");
        \u0275\u0275template(17, WfCompareComponent_mat_panel_description_17_Template, 2, 0, "mat-panel-description", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21, "Authentication Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "form", 17)(25, "div", 7)(26, "div", 18)(27, "label", 19);
        \u0275\u0275text(28, "Environment ");
        \u0275\u0275elementStart(29, "span", 20);
        \u0275\u0275text(30, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "ng-select", 21);
        \u0275\u0275listener("change", function WfCompareComponent_Template_ng_select_change_31_listener($event) {
          return ctx.getEnvironmentvalueleft($event);
        });
        \u0275\u0275template(32, WfCompareComponent_ng_option_32_Template, 2, 2, "ng-option", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 18)(34, "label", 23);
        \u0275\u0275text(35, "User Name ");
        \u0275\u0275elementStart(36, "span", 20);
        \u0275\u0275text(37, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "input", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 18)(40, "label", 25);
        \u0275\u0275text(41, "Password ");
        \u0275\u0275elementStart(42, "span", 20);
        \u0275\u0275text(43, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(44, "input", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 27)(46, "button", 28);
        \u0275\u0275listener("click", function WfCompareComponent_Template_button_click_46_listener() {
          return ctx.submitLeft();
        });
        \u0275\u0275text(47, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(48, "div", 29)(49, "form", 17)(50, "div", 7)(51, "div", 18)(52, "label", 19);
        \u0275\u0275text(53, "Environment ");
        \u0275\u0275elementStart(54, "span", 20);
        \u0275\u0275text(55, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "ng-select", 30);
        \u0275\u0275listener("change", function WfCompareComponent_Template_ng_select_change_56_listener($event) {
          return ctx.getEnvironmentvalueRight($event);
        });
        \u0275\u0275template(57, WfCompareComponent_ng_option_57_Template, 2, 2, "ng-option", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 18)(59, "label", 23);
        \u0275\u0275text(60, "User Name ");
        \u0275\u0275elementStart(61, "span", 20);
        \u0275\u0275text(62, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(63, "input", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 18)(65, "label", 25);
        \u0275\u0275text(66, "Password ");
        \u0275\u0275elementStart(67, "span", 20);
        \u0275\u0275text(68, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(69, "input", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 27)(71, "button", 28);
        \u0275\u0275listener("click", function WfCompareComponent_Template_button_click_71_listener() {
          return ctx.submitRight();
        });
        \u0275\u0275text(72, "Submit");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(73, "div", 13)(74, "div", 33)(75, "div", 13)(76, "div", 34);
        \u0275\u0275text(77, "Process Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "form", 17)(79, "div", 35)(80, "div", 36)(81, "label", 19);
        \u0275\u0275text(82, "Process name ");
        \u0275\u0275elementStart(83, "span", 20);
        \u0275\u0275text(84, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "ng-select", 37);
        \u0275\u0275listener("change", function WfCompareComponent_Template_ng_select_change_85_listener($event) {
          return ctx.GetLeftWorkFlow($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 36)(87, "label", 23);
        \u0275\u0275text(88);
        \u0275\u0275elementStart(89, "span", 20);
        \u0275\u0275text(90, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "ng-select", 38);
        \u0275\u0275template(92, WfCompareComponent_ng_option_92_Template, 2, 2, "ng-option", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 36)(94, "label", 19);
        \u0275\u0275text(95, "Process name ");
        \u0275\u0275elementStart(96, "span", 20);
        \u0275\u0275text(97, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "ng-select", 39);
        \u0275\u0275listener("change", function WfCompareComponent_Template_ng_select_change_98_listener($event) {
          return ctx.GetRightWorkFlow($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 36)(100, "label", 23);
        \u0275\u0275text(101);
        \u0275\u0275elementStart(102, "span", 20);
        \u0275\u0275text(103, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "ng-select", 40);
        \u0275\u0275template(105, WfCompareComponent_ng_option_105_Template, 2, 2, "ng-option", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 41)(107, "button", 42);
        \u0275\u0275listener("click", function WfCompareComponent_Template_button_click_107_listener() {
          return ctx.GetWorkFlows();
        });
        \u0275\u0275text(108);
        \u0275\u0275elementEnd()()()()()()()()()()()();
        \u0275\u0275template(109, WfCompareComponent_div_109_Template, 36, 6, "div", 43);
        \u0275\u0275elementStart(110, "div", 6)(111, "div", 44)(112, "div", 7)(113, "div", 45)(114, "div", 46);
        \u0275\u0275listener("scroll", function WfCompareComponent_Template_div_scroll_114_listener($event) {
          return ctx.syncScroll($event);
        });
        \u0275\u0275elementStart(115, "div", 12);
        \u0275\u0275element(116, "div", 47);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "div", 48)(118, "div", 49)(119, "div", 12)(120, "div", 50)(121, "button", 51);
        \u0275\u0275listener("click", function WfCompareComponent_Template_button_click_121_listener() {
          return ctx.SyncWF();
        });
        \u0275\u0275element(122, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "button", 53)(124, "i", 54);
        \u0275\u0275listener("click", function WfCompareComponent_Template_i_click_124_listener() {
          return ctx.GetWorkFlows();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "button", 55);
        \u0275\u0275listener("click", function WfCompareComponent_Template_button_click_125_listener() {
          return ctx.DownloadFile();
        });
        \u0275\u0275element(126, "i", 56);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(127, "div", 45)(128, "div", 46);
        \u0275\u0275listener("scroll", function WfCompareComponent_Template_div_scroll_128_listener($event) {
          return ctx.syncScroll($event);
        });
        \u0275\u0275elementStart(129, "div", 12);
        \u0275\u0275element(130, "div", 57);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("expanded", ctx.IsAuthenticationExpaned);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.IsAuthenticationExpaned);
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.formLeft);
        \u0275\u0275advance(7);
        \u0275\u0275property("searchable", true)("ngClass", \u0275\u0275pureFunction1(33, _c05, ctx.submittedLeft && ctx.formLeft.controls.EnvironmentLeft.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.Environments);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c05, ctx.submittedLeft && ctx.formLeft.controls.usernameLeft.errors));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c05, ctx.submittedLeft && ctx.formLeft.controls.passwordLeft.errors));
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.formRight);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c05, ctx.submittedRight && ctx.formRight.controls.EnvironmentRight.errors));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.Environments);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(41, _c05, ctx.submittedRight && ctx.formRight.controls.usernameRight.errors));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(43, _c05, ctx.submittedRight && ctx.formRight.controls.passwordRight.errors));
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.ProcessDetails);
        \u0275\u0275advance(7);
        \u0275\u0275property("items", ctx.ProcessNamesLeft)("dropdownPosition", "bottom");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.ChangeLabel, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("dropdownPosition", "bottom");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.WorkFlowLeft);
        \u0275\u0275advance(6);
        \u0275\u0275property("items", ctx.ProcessNamesRight)("dropdownPosition", "bottom");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.ChangeLabel, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("dropdownPosition", "bottom");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.WorkFlowRight);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.ProcessDetails.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("Compare ", ctx.CompareButtonName, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.IsShowtree);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngStyle", ctx.IsShowtree ? \u0275\u0275pureFunction0(45, _c13) : \u0275\u0275pureFunction0(46, _c22));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.IsShowtree ? "tree-container" : "")("scrollTop", ctx.scrollPosition);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.IsShowtree ? "tree-actionbtn-container" : "");
        \u0275\u0275advance(10);
        \u0275\u0275property("ngClass", ctx.IsShowtree ? "tree-container" : "")("scrollTop", ctx.scrollPosition);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgStyle, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgSelectComponent, NgOptionComponent, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelDescription, MatTooltip], styles: ["\n\n.page-title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 16px;\n  margin: 10px 2px;\n  letter-spacing: 0.5px;\n  line-height: 22px;\n}\n.title[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  font-size: 14px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  padding: 3px 0px;\n  padding: 0px;\n  margin-bottom: 10px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.input-label-search[_ngcontent-%COMP%], \n.count-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  padding: 0px;\n  text-align: right;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n  display: block;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ng-select.form-control--in-grid[_ngcontent-%COMP%]  .ng-select-container {\n  min-width: unset;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 5px 0px;\n}\n.count-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 5px;\n  margin: 0px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  margin-right: 42px;\n  border-left: 1px solid #ccc;\n  padding-left: 10px;\n}\n.count-container[_ngcontent-%COMP%]   .component-diff-count[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: 0.5px;\n  font-size: bold;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-left: 22px;\n}\n.btn[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: none;\n  font-size: 11px;\n  line-height: 17px;\n  border: none;\n  color: #fff;\n}\n.btn[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n.btn1[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n  outline: none;\n  box-shadow: none;\n  font-size: 17px;\n  margin-left: 6px;\n  padding: 2px 0px;\n  font-weight: bold;\n  border: 0px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%]   .Right[_ngcontent-%COMP%] {\n  color: green;\n}\n.count-label[_ngcontent-%COMP%] {\n  position: relative;\n  left: 25px;\n  text-align: left;\n  font-size: 12px;\n}\n.count-label[_ngcontent-%COMP%]   .counts[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.isDiff[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n}\n.notDiff[_ngcontent-%COMP%] {\n  color: rgb(0, 128, 0);\n}\n.tree-container[_ngcontent-%COMP%], \n.tree-actionbtn-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  min-height: 400px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgb(0, 0, 0);\n  border-radius: 10px;\n  display: none;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgb(0, 0, 0);\n}\n.tree-container[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  display: block;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #e8e8e8;\n  height: 50px;\n}\n  .mat-expansion-panel-body {\n  padding: 0px !important;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 14px;\n  background-color: transparent !important;\n  margin-top: 10px;\n}\n.landmark[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  letter-spacing: 1px;\n  vertical-align: middle;\n  font-weight: 300;\n  margin: 0px 3px;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%], \n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%], \n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 3px;\n  border-radius: 50%;\n  background-color: green;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.landmark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n.left-divider[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.125);\n}\n.jstree-default[_ngcontent-%COMP%]   .jstree-anchor[_ngcontent-%COMP%] {\n  color: red;\n  line-height: 24px;\n  height: 24px;\n}\n.Tree-wrapper[_ngcontent-%COMP%] {\n  width: 48% !important;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%] {\n  width: 4% !important;\n  padding: 0px 10px;\n  max-height: 400px;\n  min-height: 400px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n  outline: none;\n  box-shadow: none;\n  font-size: 17px;\n  margin-left: 6px;\n  padding: 2px 0px;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .Right[_ngcontent-%COMP%] {\n  color: green;\n}\n.tree-actionbtn-wrapper[_ngcontent-%COMP%]   .Actionbtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%] {\n  color: gray;\n}\n[_nghost-%COMP%]     .jstree-default .jstree-search {\n  font-style: normal;\n  font-weight: bold;\n  color: currentColor !important;\n}\n  .jstree-anchor.jstree-disabled {\n  color: currentColor !important;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n  margin-right: 5px;\n}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 10px;\n  padding: 5px 8px;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: var(--plx-background-color);\n  color: var(--plx-text-color);\n  box-shadow: none !important;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: var(--plx-background-color);\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--plx-text-color) !important;\n}\n/*# sourceMappingURL=wf-compare.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfCompareComponent, { className: "WfCompareComponent", filePath: "src\\app\\admin\\bmwfcompare\\Pages\\wf-compare\\wf-compare.component.ts", lineNumber: 17 });
})();

// src/app/admin/bmwfcompare/bmwfcompare-routing.module.ts
var routes = [
  {
    path: "",
    redirectTo: "user-verification",
    pathMatch: "full"
  },
  {
    path: "",
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "user-verification",
        component: UserVerificationComponent
      },
      {
        path: "bmcompare",
        component: BmCompareComponent
      },
      {
        path: "wfcompare",
        component: WfCompareComponent
      }
    ]
  }
];
var BmwfcompareRoutingModule = class _BmwfcompareRoutingModule {
  static {
    this.\u0275fac = function BmwfcompareRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmwfcompareRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BmwfcompareRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/admin/bmwfcompare/bmwfcompare.module.ts
var BmwfcompareModule = class _BmwfcompareModule {
  static {
    this.\u0275fac = function BmwfcompareModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BmwfcompareModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BmwfcompareModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      BmwfcompareRoutingModule,
      ReactiveFormsModule,
      NgSelectModule,
      MatExpansionModule,
      FormsModule,
      MatTooltipModule
    ] });
  }
};
export {
  BmwfcompareModule
};
//# sourceMappingURL=chunk-QR6IZOOQ.js.map
