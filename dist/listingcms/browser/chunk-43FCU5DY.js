import {
  NgbDateParserFormatter,
  NgbModal,
  SimpleLoaderService,
  ToastrService,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  UtilService,
  Validators,
  environment
} from "./chunk-L2L6ECIJ.js";
import {
  BehaviorSubject,
  CommonModule,
  CurrencyPipe,
  DomSanitizer,
  ErrorHandler,
  EventEmitter,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  Injector,
  NgForOf,
  NgIf,
  NgStyle,
  NgZone,
  Observable,
  Router,
  SecurityContext,
  Subject,
  catchError,
  finalize,
  formatDate,
  interval,
  map,
  provideHttpClient,
  retry,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __commonJS,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// node_modules/raygun4js/dist/raygun.umd.js
var require_raygun_umd = __commonJS({
  "node_modules/raygun4js/dist/raygun.umd.js"(exports, module) {
    window.raygunUserAgent = navigator.userAgent;
    window.raygunUserAgentData = window.navigator.userAgentData || null;
    window.raygunUserAgentDataStatus = 1;
    (function() {
      setTimeout(function() {
        if (window.raygunUserAgentDataStatus === 1) {
          window.raygunUserAgentDataStatus = 3;
        }
      }, 200);
      if (!(window && window.navigator && window.navigator.userAgentData)) {
        return;
      }
      if (!!window.navigator.userAgentData.getHighEntropyValues) {
        var hints = [
          "platformVersion",
          "fullVersionList"
          /* ,"model"  //We may want model (device) info in the future */
        ];
        window.navigator.userAgentData.getHighEntropyValues(hints).then(function(highEntropyUserAgentData) {
          window.raygunUserAgentData = highEntropyUserAgentData;
          window.raygunUserAgent = getHighFidelityUAString(window.raygunUserAgent);
          window.raygunUserAgentDataStatus = 2;
        }, function(e) {
          window.console.error("Error calling getHighEntropyValues: ", e);
        });
      }
    })();
    function getHighFidelityUAString(userAgentString) {
      if (!window.raygunUserAgentData) {
        return userAgentString;
      }
      if (window.raygunUserAgentData.platform === "Windows") {
        var platformVersion = (window.raygunUserAgentData.platformVersion || "").split(".");
        var majorVersion = parseInt(platformVersion[0], 10) || 0;
        if (majorVersion >= 13) {
          userAgentString = userAgentString.replace("Windows NT 10.0", "Windows NT 11.0");
        }
      }
      var fullVersionList = window.raygunUserAgentData.fullVersionList;
      if (!fullVersionList) {
        return userAgentString;
      }
      var regexChrome = /Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/i;
      var regexEdge = /Edg\/(\d+)\.(\d+)\.(\d+)\.(\d+)/i;
      for (var n = 0; n < fullVersionList.length; n++) {
        var version = fullVersionList[n].version;
        var brand = fullVersionList[n].brand;
        if (brand === "Chromium") {
          userAgentString = userAgentString.replace(regexChrome, "Chrome/" + version);
        }
        if (brand === "Microsoft Edge") {
          userAgentString = userAgentString.replace(regexEdge, "Edg/" + version);
        }
      }
      return userAgentString;
    }
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define("raygun4js", function() {
          return root.Raygun = factory();
        });
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
      } else {
        root.Raygun = factory();
      }
    })(exports, function() {
      var windw = this || window || global;
      var originalOnError = windw.onerror;
      windw.onerror = function(msg, url, line, col, err) {
        if (originalOnError) {
          originalOnError(msg, url, line, col, err);
        }
        if (!err) {
          err = new Error(msg);
        }
        windw["rg4js"].q = windw["rg4js"].q || [];
        windw["rg4js"].q.push({
          e: err
        });
      };
      (function(wind) {
        wind["RaygunObject"] = "rg4js";
        wind[wind["RaygunObject"]] = wind[wind["RaygunObject"]] || function() {
          if (wind && typeof wind["Raygun"] === "undefined" || typeof document === "undefined" || document.readyState !== "complete" || !wind["RaygunInitialized"]) {
            (wind[wind["RaygunObject"]].o = wind[wind["RaygunObject"]].o || []).push(arguments);
          } else {
            return wind[wind["RaygunObject"]](arguments[0], arguments[1]);
          }
        };
      })(windw);
      (function(window2, undefined2) {
        var TraceKit2 = {};
        var _oldTraceKit = window2.TraceKit;
        var _slice = [].slice;
        var UNKNOWN_FUNCTION = "?";
        var Raygun;
        function _has(object, key) {
          return Object.prototype.hasOwnProperty.call(object, key);
        }
        function _isUndefined(what) {
          return typeof what === "undefined";
        }
        TraceKit2.setRaygun = function setRaygun(rg) {
          if (!Raygun) {
            Raygun = rg;
          }
        };
        TraceKit2.noConflict = function noConflict() {
          window2.TraceKit = _oldTraceKit;
          return TraceKit2;
        };
        TraceKit2.wrap = function traceKitWrapper(func) {
          function wrapped() {
            try {
              return func.apply(this, arguments);
            } catch (e) {
              TraceKit2.report(e);
              throw e;
            }
          }
          return wrapped;
        };
        TraceKit2.report = function reportModuleWrapper() {
          var handlers = [], lastException = null, lastExceptionStack = null;
          function subscribe(handler) {
            installGlobalHandler();
            handlers.push(handler);
          }
          function unsubscribe(handler) {
            for (var i = handlers.length - 1; i >= 0; --i) {
              if (handlers[i] === handler) {
                handlers.splice(i, 1);
              }
            }
          }
          function notifyHandlers(stack, windowError) {
            var exception = null;
            if (windowError && !TraceKit2.collectWindowErrors) {
              return;
            }
            for (var i in handlers) {
              if (_has(handlers, i)) {
                try {
                  handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
                } catch (inner) {
                  exception = inner;
                }
              }
            }
            if (exception) {
              throw exception;
            }
          }
          var _oldOnerrorHandler, _onErrorHandlerInstalled;
          function traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
            var stack = null;
            if (errorObj) {
              stack = TraceKit2.computeStackTrace(errorObj);
            } else {
              if (lastExceptionStack) {
                TraceKit2.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
                stack = lastExceptionStack;
                lastExceptionStack = null;
                lastException = null;
              } else {
                var location2 = {
                  "url": url,
                  "line": lineNo,
                  "column": columnNo
                };
                location2.func = TraceKit2.computeStackTrace.guessFunctionName(location2.url, location2.line);
                location2.context = TraceKit2.computeStackTrace.gatherContext(location2.url, location2.line);
                stack = {
                  "mode": "onerror",
                  "message": message,
                  "url": document.location.href,
                  "stack": [location2],
                  "useragent": window2.raygunUserAgent
                };
              }
            }
            notifyHandlers(stack, "from window.onerror");
            if (_oldOnerrorHandler) {
              return _oldOnerrorHandler.apply(this, arguments);
            }
            return false;
          }
          function installGlobalHandler() {
            if (_onErrorHandlerInstalled === true) {
              return;
            }
            _oldOnerrorHandler = window2.onerror;
            window2.onerror = traceKitWindowOnError;
            _onErrorHandlerInstalled = true;
          }
          function report(ex) {
            var args;
            if (typeof document !== "undefined") {
              args = _slice.call(arguments, 1);
            }
            if (lastExceptionStack) {
              if (lastException === ex) {
                return;
              } else {
                var s = lastExceptionStack;
                lastExceptionStack = null;
                lastException = null;
                notifyHandlers.apply(null, [s, null].concat(args));
              }
            }
            var stack = TraceKit2.computeStackTrace(ex);
            lastExceptionStack = stack;
            lastException = ex;
            window2.setTimeout(function() {
              if (lastException === ex) {
                lastExceptionStack = null;
                lastException = null;
                notifyHandlers.apply(null, [stack, null].concat(args));
              }
            }, stack.incomplete ? 2e3 : 0);
            if (!Raygun.Utilities.isReactNative()) {
              throw ex;
            }
          }
          report.subscribe = subscribe;
          report.unsubscribe = unsubscribe;
          return report;
        }();
        TraceKit2.computeStackTrace = function computeStackTraceWrapper() {
          var debug = false, sourceCache = {};
          function loadSource(url) {
            if (typeof url !== "string") {
              return [];
            }
            return "";
          }
          function getSource(url) {
            if (!_has(sourceCache, url)) {
              var source = "";
              url = url || "";
              var domain;
              if (typeof document !== "undefined") {
                domain = document.domain;
              } else {
                domain = window2.location.hostname;
              }
              if (url.indexOf && url.indexOf(domain) !== -1) {
                source = loadSource(url);
              }
              sourceCache[url] = source ? source.split("\n") : [];
            }
            return sourceCache[url];
          }
          function guessFunctionName(url, lineNo) {
            var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/, reGuessFunction = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, line = "", maxLines = 10, source = getSource(url), m;
            if (!source.length) {
              return UNKNOWN_FUNCTION;
            }
            for (var i = 0; i < maxLines; ++i) {
              line = source[lineNo - i] + line;
              if (!_isUndefined(line)) {
                if (m = reGuessFunction.exec(line)) {
                  return m[1];
                } else if (m = reFunctionArgNames.exec(line)) {
                  return m[1];
                }
              }
            }
            return UNKNOWN_FUNCTION;
          }
          function gatherContext(url, line) {
            var source = getSource(url);
            if (!source.length) {
              return null;
            }
            var context = [], linesBefore = Math.floor(TraceKit2.linesOfContext / 2), linesAfter = linesBefore + TraceKit2.linesOfContext % 2, start = Math.max(0, line - linesBefore - 1), end = Math.min(source.length, line + linesAfter - 1);
            line -= 1;
            for (var i = start; i < end; ++i) {
              if (!_isUndefined(source[i])) {
                context.push(source[i]);
              }
            }
            return context.length > 0 ? context : null;
          }
          function escapeRegExp(text) {
            return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
          }
          function escapeCodeAsRegExpForMatchingInsideHTML(body) {
            return escapeRegExp(body).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+");
          }
          function findSourceInUrls(re, urls) {
            var source, m;
            for (var i = 0, j = urls.length; i < j; ++i) {
              if ((source = getSource(urls[i])).length) {
                source = source.join("\n");
                if (m = re.exec(source)) {
                  return {
                    "url": urls[i],
                    "line": source.substring(0, m.index).split("\n").length,
                    "column": m.index - source.lastIndexOf("\n", m.index) - 1
                  };
                }
              }
            }
            return null;
          }
          function findSourceInLine(fragment, url, line) {
            var source = getSource(url), re = new RegExp("\\b" + escapeRegExp(fragment) + "\\b"), m;
            line -= 1;
            if (source && source.length > line && (m = re.exec(source[line]))) {
              return m.index;
            }
            return null;
          }
          function findSourceByFunctionBody(func) {
            var urls = [window2.location.href], scripts = document.getElementsByTagName("script"), body, code = "" + func, codeRE = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, eventRE = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, re, parts, result;
            for (var i = 0; i < scripts.length; ++i) {
              var script = scripts[i];
              if (script.src) {
                urls.push(script.src);
              }
            }
            if (!(parts = codeRE.exec(code))) {
              re = new RegExp(escapeRegExp(code).replace(/\s+/g, "\\s+"));
            } else {
              var name = parts[1] ? "\\s+" + parts[1] : "", args = parts[2].split(",").join("\\s*,\\s*");
              body = escapeRegExp(parts[3]).replace(/;$/, ";?");
              re = new RegExp("function" + name + "\\s*\\(\\s*" + args + "\\s*\\)\\s*{\\s*" + body + "\\s*}");
            }
            if (result = findSourceInUrls(re, urls)) {
              return result;
            }
            if (parts = eventRE.exec(code)) {
              var event = parts[1];
              body = escapeCodeAsRegExpForMatchingInsideHTML(parts[2]);
              re = new RegExp("on" + event + `=[\\'"]\\s*` + body + `\\s*[\\'"]`, "i");
              if (result = findSourceInUrls(re, urls[0])) {
                return result;
              }
              re = new RegExp(body);
              if (result = findSourceInUrls(re, urls)) {
                return result;
              }
            }
            return null;
          }
          function computeStackTraceFromStackProp(ex) {
            var parseError;
            if (!ex.stack) {
              return null;
            }
            var chrome = /^\s*at (.*?) ?\(((?:file|https?|\s*|blob|chrome-extension|native|webpack|ionic|capacitor|app|eval|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|ionic|capacitor|app|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, lines = ex.stack.split("\n"), stack = [], parts, element, reference = /^(.*) is undefined$/.exec(ex.message);
            if (Raygun.Utilities.isReactNative()) {
              var reactNativeDevicePathStripRegex = /^(.*@)?.*\/[^\.]+(\.app|CodePush)\/?(.*)/;
              var sourcemapPrefix = "file://reactnative.local/";
              for (var i = 0; i < lines.length; i++) {
                parts = reactNativeDevicePathStripRegex.exec(lines[i]);
                if (parts !== null) {
                  var functionName = parts[1] ? parts[1] : "anonymous@";
                  var filenameLineNumAndColumnNum = parts[3];
                  lines[i] = functionName + sourcemapPrefix + filenameLineNumAndColumnNum;
                }
              }
            }
            for (var i = 0, j = lines.length; i < j; ++i) {
              if (parts = gecko.exec(lines[i])) {
                element = {
                  "url": parts[3],
                  "func": parts[1] || UNKNOWN_FUNCTION,
                  "args": parts[2] ? parts[2].split(",") : "",
                  "line": +parts[4],
                  "column": parts[5] ? +parts[5] : null
                };
              } else if (parts = chrome.exec(lines[i])) {
                element = {
                  "url": parts[2],
                  "func": parts[1] || UNKNOWN_FUNCTION,
                  "line": +parts[3],
                  "column": parts[4] ? +parts[4] : null
                };
              } else if (parts = winjs.exec(lines[i])) {
                element = {
                  "url": parts[2],
                  "func": parts[1] || UNKNOWN_FUNCTION,
                  "line": +parts[3],
                  "column": parts[4] ? +parts[4] : null
                };
              } else {
                continue;
              }
              if (!element.func && element.line) {
                element.func = guessFunctionName(element.url, element.line);
              }
              if (typeof document !== "undefined" && element.line) {
                element.context = gatherContext(element.url, element.line);
              }
              stack.push(element);
            }
            if (stack[0] && stack[0].line && !stack[0].column && reference) {
              stack[0].column = findSourceInLine(reference[1], stack[0].url, stack[0].line);
            } else if (!stack[0].column && typeof ex.columnNumber !== "undefined") {
              stack[0].column = ex.columnNumber + 1;
            }
            if (!stack.length) {
              return null;
            }
            var res = {
              "mode": "stack",
              "name": ex ? ex.name : "",
              "message": ex ? ex.message : "",
              "url": typeof document !== "undefined" ? document.location.href : "",
              "stack": stack,
              "useragent": navigator ? window2.raygunUserAgent : "",
              "stackstring": ex && ex.stack ? ex.stack.toString() : ""
            };
            return res;
          }
          function computeStackTraceFromStacktraceProp(ex) {
            var stacktrace = ex.stacktrace;
            var testRE = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i, lines = stacktrace ? stacktrace.split("\n") : [], stack = [], parts;
            for (var i = 0, j = lines.length; i < j; i += 2) {
              if (parts = testRE.exec(lines[i])) {
                var element = {
                  "line": +parts[1],
                  "column": +parts[2],
                  "func": parts[3] || parts[4],
                  "args": parts[5] ? parts[5].split(",") : [],
                  "url": parts[6]
                };
                if (!element.func && element.line) {
                  element.func = guessFunctionName(element.url, element.line);
                }
                if (element.line) {
                  try {
                    element.context = gatherContext(element.url, element.line);
                  } catch (exc) {
                  }
                }
                if (!element.context) {
                  element.context = [lines[i + 1]];
                }
                stack.push(element);
              }
            }
            if (!stack.length) {
              return null;
            }
            return {
              "mode": "stacktrace",
              "name": ex.name,
              "message": ex.message,
              "url": document.location.href,
              "stack": stack,
              "useragent": window2.raygunUserAgent,
              "stackstring": stacktrace
            };
          }
          function computeStackTraceFromOperaMultiLineMessage(ex) {
            var lines = ex.message.split("\n");
            if (lines.length < 4) {
              return null;
            }
            var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i, lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i, lineRE3 = /^\s*Line (\d+) of function script\s*$/i, stack = [], scripts = document.getElementsByTagName("script"), inlineScriptBlocks = [], parts, i, len, source;
            for (i in scripts) {
              if (_has(scripts, i) && !scripts[i].src) {
                inlineScriptBlocks.push(scripts[i]);
              }
            }
            for (i = 2, len = lines.length; i < len; i += 2) {
              var item = null;
              if (parts = lineRE1.exec(lines[i])) {
                item = {
                  "url": parts[2],
                  "func": parts[3],
                  "line": +parts[1]
                };
              } else if (parts = lineRE2.exec(lines[i])) {
                item = {
                  "url": parts[3],
                  "func": parts[4]
                };
                var relativeLine = +parts[1];
                var script = inlineScriptBlocks[parts[2] - 1];
                if (script) {
                  source = getSource(item.url);
                  if (source) {
                    source = source.join("\n");
                    var pos = source.indexOf(script.innerText);
                    if (pos >= 0) {
                      item.line = relativeLine + source.substring(0, pos).split("\n").length;
                    }
                  }
                }
              } else if (parts = lineRE3.exec(lines[i])) {
                var url = window2.location.href.replace(/#.*$/, ""), line = parts[1];
                var re = new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[i + 1]));
                source = findSourceInUrls(re, [url]);
                item = {
                  "url": url,
                  "line": source ? source.line : line,
                  "func": ""
                };
              }
              if (item) {
                if (!item.func) {
                  item.func = guessFunctionName(item.url, item.line);
                }
                var context = gatherContext(item.url, item.line);
                var midline = context ? context[Math.floor(context.length / 2)] : null;
                if (context && midline.replace(/^\s*/, "") === lines[i + 1].replace(/^\s*/, "")) {
                  item.context = context;
                } else {
                  item.context = [lines[i + 1]];
                }
                stack.push(item);
              }
            }
            if (!stack.length) {
              return null;
            }
            return {
              "mode": "multiline",
              "name": ex.name,
              "message": lines[0],
              "url": document.location.href,
              "stack": stack,
              "useragent": window2.raygunUserAgent
            };
          }
          function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
            var initial = {
              "url": url,
              "line": lineNo
            };
            if (initial.url && initial.line) {
              stackInfo.incomplete = false;
              if (!initial.func) {
                initial.func = guessFunctionName(initial.url, initial.line);
              }
              if (!initial.context) {
                initial.context = gatherContext(initial.url, initial.line);
              }
              var reference = / '([^']+)' /.exec(message);
              if (reference) {
                initial.column = findSourceInLine(reference[1], initial.url, initial.line);
              }
              if (stackInfo.stack.length > 0) {
                if (stackInfo.stack[0].url === initial.url) {
                  if (stackInfo.stack[0].line === initial.line) {
                    return false;
                  } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                    stackInfo.stack[0].line = initial.line;
                    stackInfo.stack[0].context = initial.context;
                    return false;
                  }
                }
              }
              stackInfo.stack.unshift(initial);
              stackInfo.partial = true;
              return true;
            } else {
              stackInfo.incomplete = true;
            }
            return false;
          }
          function computeStackTraceByWalkingCallerChain(ex, depth) {
            var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, stack = [], funcs = {}, recursion = false, parts, item, source;
            for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
              if (curr === computeStackTrace || curr === TraceKit2.report) {
                continue;
              }
              item = {
                "url": null,
                "func": UNKNOWN_FUNCTION,
                "line": null,
                "column": null
              };
              if (curr.name) {
                item.func = curr.name;
              } else if (parts = functionName.exec(curr.toString())) {
                item.func = parts[1];
              }
              if (typeof item.func === "undefined") {
                try {
                  item.func = parts.input.substring(0, parts.input.indexOf("{"));
                } catch (e) {
                }
              }
              if (source = findSourceByFunctionBody(curr)) {
                item.url = source.url;
                item.line = source.line;
                if (item.func === UNKNOWN_FUNCTION) {
                  item.func = guessFunctionName(item.url, item.line);
                }
                var reference = / '([^']+)' /.exec(ex.message || ex.description);
                if (reference) {
                  item.column = findSourceInLine(reference[1], source.url, source.line);
                }
              }
              if (funcs["" + curr]) {
                recursion = true;
              } else {
                funcs["" + curr] = true;
              }
              stack.push(item);
            }
            if (depth) {
              stack.splice(0, depth);
            }
            var result = {
              "mode": "callers",
              "name": ex.name,
              "message": ex.message,
              "url": document.location.href,
              "stack": stack,
              "useragent": window2.raygunUserAgent
            };
            augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
            return result;
          }
          function computeStackTrace(ex, depth) {
            var stack = null;
            depth = depth == null ? 0 : +depth;
            try {
              stack = computeStackTraceFromStacktraceProp(ex);
              if (stack) {
                return stack;
              }
            } catch (e) {
              if (debug) {
                throw e;
              }
            }
            try {
              stack = computeStackTraceFromStackProp(ex);
              if (stack) {
                return stack;
              }
            } catch (e) {
              if (debug) {
                throw e;
              }
            }
            try {
              stack = computeStackTraceFromOperaMultiLineMessage(ex);
              if (stack) {
                return stack;
              }
            } catch (e) {
              if (debug) {
                throw e;
              }
            }
            try {
              stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
              if (stack) {
                return stack;
              }
            } catch (e) {
              if (debug) {
                throw e;
              }
            }
            return {
              "tracekitResult": "failedToComputeAnyStackTrace"
            };
          }
          function computeStackTraceOfCaller(depth) {
            depth = (depth == null ? 0 : +depth) + 1;
            try {
              throw new Error();
            } catch (ex) {
              return computeStackTrace(ex, depth + 1);
            }
          }
          computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
          computeStackTrace.guessFunctionName = guessFunctionName;
          computeStackTrace.gatherContext = gatherContext;
          computeStackTrace.ofCaller = computeStackTraceOfCaller;
          return computeStackTrace;
        }();
        TraceKit2.extendToAsynchronousCallbacks = function() {
          var _helper = function _helper2(fnName) {
            var originalFn = window2[fnName];
            window2[fnName] = function traceKitAsyncExtension() {
              var args = _slice.call(arguments);
              var originalCallback = args[0];
              if (typeof originalCallback === "function") {
                args[0] = TraceKit2.wrap(originalCallback);
              }
              if (originalFn.apply) {
                return originalFn.apply(this, args);
              } else {
                return originalFn(args[0], args[1]);
              }
            };
          };
          _helper("setTimeout");
          _helper("setInterval");
        };
        if (!TraceKit2.remoteFetching) {
          TraceKit2.remoteFetching = true;
        }
        if (!TraceKit2.collectWindowErrors) {
          TraceKit2.collectWindowErrors = true;
        }
        if (!TraceKit2.linesOfContext || TraceKit2.linesOfContext < 1) {
          TraceKit2.linesOfContext = 11;
        }
        window2.TraceKit = TraceKit2;
      })(window);
      if (!Date.prototype.toISOString) {
        (function() {
          function pad(number) {
            var r = String(number);
            if (r.length === 1) {
              r = "0" + r;
            }
            return r;
          }
          Date.prototype.toISOString = function() {
            return this.getUTCFullYear() + "-" + pad(this.getUTCMonth() + 1) + "-" + pad(this.getUTCDate()) + "T" + pad(this.getUTCHours()) + ":" + pad(this.getUTCMinutes()) + ":" + pad(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
          };
        })();
      }
      if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement, fromIndex) {
          var k;
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }
          var o = Object(this);
          var len = o.length >>> 0;
          if (len === 0) {
            return -1;
          }
          var n = fromIndex | 0;
          if (n >= len) {
            return -1;
          }
          k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
          while (k < len) {
            if (k in o && o[k] === searchElement) {
              return k;
            }
            k++;
          }
          return -1;
        };
      }
      if (!Array.prototype.map) {
        Array.prototype.map = function(callback) {
          var T, A, k;
          if (this == null) {
            throw new TypeError("this is null or not defined");
          }
          var O = Object(this);
          var len = O.length >>> 0;
          if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
          }
          if (arguments.length > 1) {
            T = arguments[1];
          }
          A = new Array(len);
          k = 0;
          while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
              kValue = O[k];
              mappedValue = callback.call(T, kValue, k, O);
              A[k] = mappedValue;
            }
            k++;
          }
          return A;
        };
      }
      if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback) {
          var T, k;
          if (this == null) {
            throw new TypeError("this is null or not defined");
          }
          var O = Object(this);
          var len = O.length >>> 0;
          if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
          }
          if (arguments.length > 1) {
            T = arguments[1];
          }
          k = 0;
          while (k < len) {
            var kValue;
            if (k in O) {
              kValue = O[k];
              callback.call(T, kValue, k, O);
            }
            k++;
          }
        };
      }
      if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
          if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          }
          var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, FNOP = function() {
          }, fBound = function() {
            return fToBind.apply(this instanceof FNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
          };
          FNOP.prototype = this.prototype;
          fBound.prototype = new FNOP();
          return fBound;
        };
      }
      (function() {
        if (typeof document === "undefined") {
          return;
        }
        var firstInputEvent;
        var firstInputDelay;
        var firstInputTimeStamp;
        var callbacks;
        var listenerOpts = {
          passive: true,
          capture: true
        };
        var startTimeStamp = /* @__PURE__ */ new Date();
        var firstInputPolyfill = function firstInputPolyfill2(onFirstInput) {
          callbacks.push(onFirstInput);
          reportFirstInputDelayIfRecordedAndValid();
        };
        var resetFirstInputPolyfill = function resetFirstInputPolyfill2() {
          callbacks = [];
          firstInputDelay = -1;
          firstInputEvent = null;
          eachEventType(addEventListener);
        };
        var recordFirstInputDelay = function recordFirstInputDelay2(delay, event) {
          if (!firstInputEvent) {
            firstInputEvent = event;
            firstInputDelay = delay;
            firstInputTimeStamp = /* @__PURE__ */ new Date();
            eachEventType(removeEventListener);
            reportFirstInputDelayIfRecordedAndValid();
          }
        };
        var reportFirstInputDelayIfRecordedAndValid = function reportFirstInputDelayIfRecordedAndValid2() {
          if (firstInputDelay >= 0 && firstInputDelay < firstInputTimeStamp - startTimeStamp) {
            var entry = {
              entryType: "first-input",
              name: firstInputEvent.type,
              target: firstInputEvent.target,
              cancelable: firstInputEvent.cancelable,
              startTime: firstInputEvent.timeStamp,
              processingStart: firstInputEvent.timeStamp + firstInputDelay
            };
            callbacks.forEach(function(callback) {
              callback(entry);
            });
            callbacks = [];
          }
        };
        var onPointerDown = function onPointerDown2(delay, event) {
          var onPointerUp = function onPointerUp2() {
            recordFirstInputDelay(delay, event);
            removePointerEventListeners();
          };
          var onPointerCancel = function onPointerCancel2() {
            removePointerEventListeners();
          };
          var removePointerEventListeners = function removePointerEventListeners2() {
            removeEventListener("pointerup", onPointerUp, listenerOpts);
            removeEventListener("pointercancel", onPointerCancel, listenerOpts);
          };
          addEventListener("pointerup", onPointerUp, listenerOpts);
          addEventListener("pointercancel", onPointerCancel, listenerOpts);
        };
        var onInput = function onInput2(event) {
          if (event.cancelable) {
            var isEpochTime = event.timeStamp > 1e12;
            var now = isEpochTime ? /* @__PURE__ */ new Date() : performance.now();
            var delay = now - event.timeStamp;
            if (event.type == "pointerdown") {
              onPointerDown(delay, event);
            } else {
              recordFirstInputDelay(delay, event);
            }
          }
        };
        var eachEventType = function eachEventType2(callback) {
          var eventTypes = ["mousedown", "keydown", "touchstart", "pointerdown"];
          eventTypes.forEach(function(type) {
            return callback(type, onInput, listenerOpts);
          });
        };
        var firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
        var onVisibilityChange = function onVisibilityChange2(event) {
          if (document.visibilityState === "hidden") {
            firstHiddenTime = event.timeStamp;
            removeEventListener("visibilitychange", onVisibilityChange2, true);
          }
        };
        addEventListener("visibilitychange", onVisibilityChange, true);
        var getFirstHiddenTime = function getFirstHiddenTime2() {
          return firstHiddenTime;
        };
        resetFirstInputPolyfill();
        self.webVitals = {
          firstInputPolyfill,
          resetFirstInputPolyfill,
          get firstHiddenTime() {
            return getFirstHiddenTime();
          }
        };
      })();
      (function traceKitAsyncForjQuery($, TraceKit2) {
        "use strict";
        if (!$ || !$.event || !$.event.add) {
          return;
        }
        var _oldEventAdd = $.event.add;
        $.event.add = function traceKitEventAdd(elem, types, handler, data, selector) {
          if (typeof handler !== "function" && typeof handler.handler !== "function") {
            return _oldEventAdd.call(this, elem, types, handler, data, selector);
          }
          var _handler;
          if (handler.handler) {
            _handler = handler.handler;
            handler.handler = TraceKit2.wrap(handler.handler);
          } else {
            _handler = handler;
            handler = TraceKit2.wrap(handler);
          }
          if (_handler.guid) {
            handler.guid = _handler.guid;
          } else {
            handler.guid = _handler.guid = $.guid++;
          }
          return _oldEventAdd.call(this, elem, types, handler, data, selector);
        };
        var _oldReady = $.fn.ready;
        $.fn.ready = function traceKitjQueryReadyWrapper(fn) {
          return _oldReady.call(this, TraceKit2.wrap(fn));
        };
        var _oldAjax = $.ajax;
        $.ajax = function traceKitAjaxWrapper(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var keys = ["complete", "error", "success"], key;
          while (key = keys.pop()) {
            if ($.isFunction(options[key])) {
              options[key] = TraceKit2.wrap(options[key]);
            }
          }
          try {
            return url ? _oldAjax.call(this, url, options) : _oldAjax.call(this, options);
          } catch (e) {
            TraceKit2.report(e);
            throw e;
          }
        };
      })(window.jQuery, window.TraceKit);
      window.raygunUtilityFactory = function(window2, Raygun) {
        var rg = {
          getUuid: function() {
            function _p8(s) {
              var p = (Math.random().toString(16) + "000000000").substr(2, 8);
              return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
            }
            return _p8() + _p8(true) + _p8(true) + _p8();
          },
          createCookie: function(name, value, hours, setAsSecure) {
            if (this.isReactNative()) {
              return;
            }
            var expires;
            if (hours) {
              var date = /* @__PURE__ */ new Date();
              date.setTime(date.getTime() + hours * 60 * 60 * 1e3);
              expires = "; expires=" + date.toGMTString();
            } else {
              expires = "";
            }
            var secure = setAsSecure ? "; secure" : "";
            document.cookie = name + "=" + value + expires + "; path=/" + secure;
          },
          readCookie: function(name) {
            if (this.isReactNative()) {
              return "none";
            }
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === " ") {
                c = c.substring(1, c.length);
              }
              if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
              }
            }
            return null;
          },
          clearCookie: function(key) {
            if (this.isReactNative()) {
              return;
            }
            this.createCookie(key, "", -1);
          },
          log: function(message, data) {
            if (Raygun.Options._debugMode && window2.console && window2.console.log) {
              window2.console.log(message);
              if (data) {
                window2.console.log(data);
              }
            }
          },
          isApiKeyConfigured: function() {
            if (Raygun.Options._raygunApiKey && Raygun.Options._raygunApiKey !== "") {
              return true;
            }
            Raygun.Utilities.log("Raygun API key has not been configured.");
            return false;
          },
          isReactNative: function() {
            return typeof document === "undefined" && typeof __DEV__ !== "undefined";
          },
          defaultReactNativeGlobalHandler: function(error, fatal) {
            if (typeof _defaultReactNativeGlobalHandler === "function") {
              _defaultReactNativeGlobalHandler(error, fatal);
            }
          },
          localStorageAvailable: function() {
            try {
              return "localStorage" in window2 && window2["localStorage"] !== null;
            } catch (e) {
              return false;
            }
          },
          sessionStorageAvailable: function() {
            try {
              return "sessionStorage" in window2 && window2["sessionStorage"] !== null;
            } catch (e) {
              return false;
            }
          },
          truncateURL: function(url) {
            var truncated = url;
            var path = url.split("//")[1];
            if (path) {
              var queryStart = path.indexOf("?");
              var sanitizedPath = path.toString().substring(0, queryStart);
              var truncated_parts = sanitizedPath.split("/").slice(0, 4).join("/");
              var truncated_length = sanitizedPath.substring(0, 48);
              truncated = truncated_parts.length < truncated_length.length ? truncated_parts : truncated_length;
              if (truncated !== sanitizedPath) {
                truncated += "..";
              }
            }
            return truncated;
          },
          merge: function(o1, o2) {
            var a, o3 = {};
            for (a in o1) {
              o3[a] = o1[a];
            }
            for (a in o2) {
              o3[a] = o2[a];
            }
            return o3;
          },
          mergeMutate: function(o1, o2) {
            var a;
            for (a in o2) {
              o1[a] = o2[a];
            }
            return o1;
          },
          mergeArray: function(t0, t1) {
            if (t1 != null) {
              return t0.concat(t1);
            }
            return t0.slice(0);
          },
          forEach: function(set, func) {
            for (var i = 0; i < set.length; i++) {
              func.call(null, i, set[i]);
            }
          },
          isEmpty: function isEmpty(o) {
            if (this.isNil(o)) {
              return true;
            }
            if (typeof o === "string" || o instanceof Array) {
              return o.length === 0;
            }
            for (var p in o) {
              if (o.hasOwnProperty(p)) {
                return false;
              }
            }
            return true;
          },
          /**
           * Check if the object provided is either null or undefined
           *
           * @param obj
           * @returns {boolean}
           */
          isNil: function isNil(obj) {
            return typeof obj === "undefined" || obj === null;
          },
          contains: function(array, obj) {
            var i = array.length;
            while (i--) {
              if (array[i] === obj) {
                return true;
              }
            }
            return false;
          },
          getRandomInt: function() {
            return Math.floor(Math.random() * 9007199254740992);
          },
          parseUrl: function(arg, url) {
            function isNumeric(arg2) {
              return !isNaN(parseFloat(arg2)) && isFinite(arg2);
            }
            return function(arg2, url2) {
              if (typeof document === "undefined") {
                return "";
              }
              var _ls = url2 || window2.location.toString();
              if (!arg2) {
                return _ls;
              } else {
                arg2 = arg2.toString();
              }
              if (_ls.substring(0, 2) === "//") {
                _ls = "http:" + _ls;
              } else if (_ls.split("://").length === 1) {
                _ls = "http://" + _ls;
              }
              url2 = _ls.split("/");
              var _l = {
                auth: ""
              }, host = url2[2].split("@");
              if (host.length === 1) {
                host = host[0].split(":");
              } else {
                _l.auth = host[0];
                host = host[1].split(":");
              }
              _l.protocol = url2[0];
              _l.hostname = host[0];
              _l.port = host[1] || (_l.protocol.split(":")[0].toLowerCase() === "https" ? "443" : "80");
              _l.pathname = (url2.length > 3 ? "/" : "") + url2.slice(3, url2.length).join("/").split("?")[0].split("#")[0];
              var _p = _l.pathname;
              if (_p.charAt(_p.length - 1) === "/") {
                _p = _p.substring(0, _p.length - 1);
              }
              var _h = _l.hostname, _hs = _h.split("."), _ps = _p.split("/");
              if (arg2 === "hostname") {
                return _h;
              } else if (arg2 === "domain") {
                if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(_h)) {
                  return _h;
                }
                return _hs.slice(-2).join(".");
              } else if (arg2 === "sub") {
                return _hs.slice(0, _hs.length - 2).join(".");
              } else if (arg2 === "port") {
                return _l.port;
              } else if (arg2 === "protocol") {
                return _l.protocol.split(":")[0];
              } else if (arg2 === "auth") {
                return _l.auth;
              } else if (arg2 === "user") {
                return _l.auth.split(":")[0];
              } else if (arg2 === "pass") {
                return _l.auth.split(":")[1] || "";
              } else if (arg2 === "path") {
                return _l.pathname;
              } else if (arg2.charAt(0) === ".") {
                arg2 = arg2.substring(1);
                if (isNumeric(arg2)) {
                  arg2 = parseInt(arg2, 10);
                  return _hs[arg2 < 0 ? _hs.length + arg2 : arg2 - 1] || "";
                }
              } else if (isNumeric(arg2)) {
                arg2 = parseInt(arg2, 10);
                return _ps[arg2 < 0 ? _ps.length + arg2 : arg2] || "";
              } else if (arg2 === "file") {
                return _ps.slice(-1)[0];
              } else if (arg2 === "filename") {
                return _ps.slice(-1)[0].split(".")[0];
              } else if (arg2 === "fileext") {
                return _ps.slice(-1)[0].split(".")[1] || "";
              } else if (arg2.charAt(0) === "?" || arg2.charAt(0) === "#") {
                var params = _ls, param = null;
                if (arg2.charAt(0) === "?") {
                  params = (params.split("?")[1] || "").split("#")[0];
                } else if (arg2.charAt(0) === "#") {
                  params = params.split("#")[1] || "";
                }
                if (!arg2.charAt(1)) {
                  return params;
                }
                arg2 = arg2.substring(1);
                params = params.split("&");
                for (var i = 0, ii = params.length; i < ii; i++) {
                  param = params[i].split("=");
                  if (param[0] === arg2) {
                    return param[1] || "";
                  }
                }
                return null;
              }
              return "";
            }(arg, url);
          },
          // Replace existing function on object with new, but call old one afterwards still
          // Returns function that when called will un-enhance object
          enhance: function(object, property, newFunction) {
            var existingFunction = object[property];
            object[property] = function enhanced() {
              newFunction.apply(this, arguments);
              if (typeof existingFunction === "function") {
                existingFunction.apply(this, arguments);
              }
            };
            return function unenhance() {
              object[property] = existingFunction;
            };
          },
          // Theoretically cross browser event listening
          // Returns function that when called will remove handler
          addEventHandler: function(element, event, handler, useCapture) {
            var capture = useCapture || false;
            if (element.addEventListener) {
              element.addEventListener(event, handler, capture);
            } else if (element.attachEvent) {
              element.attachEvent("on" + event, handler);
            } else {
              element["on" + event] = handler;
            }
            return function() {
              if (element.removeEventListener) {
                element.removeEventListener(event, handler, capture);
              } else if (element.detachEvent) {
                element.detachEvent("on" + event, handler);
              } else {
                element["on" + event] = function() {
                };
              }
            };
          },
          nodeText: function(node) {
            var text = node.textContent || node.innerText || "";
            if (["submit", "button"].indexOf(node.type) !== -1) {
              text = node.value || text;
            }
            text = text.replace(/^\s+|\s+$/g, "");
            return text;
          },
          // Returns simple CSS selector to target node
          nodeSelector: function(node) {
            var parts = [node.tagName];
            if (node.id) {
              parts.push("#" + node.id);
            }
            if (node.className && node.className.length) {
              parts.push("." + node.className.split(" ").join("."));
            }
            return parts.join("");
          },
          truncate: function(text, length) {
            var omission = "(...)";
            if (text.length > length) {
              return text.slice(0, length - omission.length) + omission;
            } else {
              return text;
            }
          },
          getOrigin: function() {
            if (!window2.location.origin) {
              return window2.location.protocol + "//" + window2.location.hostname + (window2.location.port ? ":" + window2.location.port : "");
            }
            return window2.location.origin;
          },
          resolveFullUrl: function(url) {
            if (url && url.indexOf("//") === 0) {
              url = window2.location.protocol + url;
            }
            if (url && window2.location.pathname && url.indexOf("://") === -1) {
              var origin = this.getOrigin();
              if (url.indexOf("/") !== 0) {
                var pathname = window2.location.pathname;
                var pathComponents = pathname.split("/");
                pathComponents.pop();
                return origin + pathComponents.join("/") + "/" + url;
              } else {
                return origin + url;
              }
            }
            return url;
          },
          removeFromArray: function(array, item) {
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
              if (array[i] !== item) {
                newArray.push(array[i]);
              }
            }
            return newArray;
          },
          isIE: function() {
            return window2.navigator.userAgent.indexOf("Trident") > -1 || window2.navigator.userAgent.indexOf("MSIE") > -1;
          },
          /**
           * Given an array, invoke the predicate on each item in the array, if any of these calls return true, then the
           * result is true. Simplified version of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some/|Array.prototype.some}.
           *
           * @param arr T[]
           * @param predicate (item: T) => boolean
           * @returns {boolean}
           */
          any: function any(arr, predicate) {
            if (this.isEmpty(arr)) {
              return false;
            }
            for (var i = 0; i < arr.length; i++) {
              var item = arr[i];
              if (predicate(item) === true) {
                return true;
              }
            }
            return false;
          }
        };
        var _defaultReactNativeGlobalHandler;
        if (rg.isReactNative() && __DEV__ !== true && window2.ErrorUtils && window2.ErrorUtils.getGlobalHandler) {
          _defaultReactNativeGlobalHandler = window2.ErrorUtils.getGlobalHandler();
        }
        return rg;
      };
      window.raygunErrorUtilitiesFactory = function(window2, Raygun) {
        var scriptError = "Script error";
        var currentLocation = !!window2 && !!window2.location ? window2.location : {
          host: null,
          toString: function toString() {
            return null;
          }
        };
        var currentUrl = currentLocation.toString();
        var utils = Raygun.Utilities;
        var isBrowserExtensionUrl = function isBrowserExtensionUrl2(url) {
          return url.indexOf("chrome-extension://") === 0 || url.indexOf("moz-extension://") === 0 || url.indexOf("safari-extension://") === 0 || url.indexOf("safari-web-extension://") === 0;
        };
        var isValidStackLine = function isValidStackLine2(stackLine) {
          if (!utils.isNil(stackLine.line) && stackLine.line > 0) {
            return true;
          }
          if (!utils.isNil(stackLine.column) && stackLine.column > 0) {
            return true;
          }
          if (utils.isNil(stackLine.url) || currentUrl.indexOf(stackLine.url) !== -1 && stackLine.func === "?") {
            return false;
          }
          return true;
        };
        return {
          /**
           * Check if the current stacktrace is a Script error from an external domain.
           *
           * @param stackTrace
           * @param options
           * @returns {boolean}
           */
          isScriptError: function isScriptError(stackTrace, options) {
            var msg = scriptError;
            if (stackTrace.message) {
              msg = stackTrace.message;
            } else if (options && options.status) {
              msg = options.status;
            }
            if (utils.isNil(msg)) {
              msg = scriptError;
            }
            return !utils.isReactNative() && typeof msg.substring === "function" && msg.substring(0, scriptError.length) === scriptError && !utils.isNil(stackTrace.stack[0].url) && stackTrace.stack[0].url.indexOf(currentLocation.host) === -1 && (stackTrace.stack[0].line === 0 || stackTrace.stack[0].func === "?");
          },
          /**
           * Check if the stacktrace from a browser extension - if any stack line has a url that starts with a browser
           * extension protocol (e.g. "chrome-extension://"), then this will return true.
           *
           * @param stackTrace
           * @returns {boolean}
           */
          isBrowserExtensionError: function isBrowserExtensionError(stackTrace) {
            var stack = stackTrace.stack;
            if (utils.isEmpty(stack)) {
              return false;
            }
            return utils.any(stack, function(stackLine) {
              var url = stackLine.url;
              return !utils.isNil(url) && isBrowserExtensionUrl(url);
            });
          },
          /**
           * Check if any lines in the stack are valid, i.e. they do not match the criteria of having a null/zero line and
           * column number and do not have a url equal to the current url with a function name of '?'.
           *
           * This is to filter out a common pattern of errors triggered in browser extensions or by bots/crawlers.
           *
           * @param stackTrace
           * @returns {boolean}
           */
          isValidStackTrace: function isValidStackTrace(stackTrace) {
            var stack = stackTrace.stack;
            if (utils.isNil(stackTrace.message) || utils.isEmpty(stack)) {
              return false;
            }
            return utils.any(stack, isValidStackLine);
          },
          /**
           * Check if the current stacktrace has any lines that have a url that matches the current url. This function can be
           * passed a list of whitelisted domains that will be checked against.
           *
           * @param stackTrace
           * @param whitelistedScriptDomains string[]
           * @returns {boolean}
           */
          stackTraceHasValidDomain: function stackTraceHasValidDomain(stackTrace, whitelistedScriptDomains) {
            var foundValidDomain = false;
            for (var i = 0; !foundValidDomain && stackTrace.stack && i < stackTrace.stack.length; i++) {
              var stackLine = stackTrace.stack[i];
              if (!utils.isNil(stackLine) && !utils.isNil(stackLine.url)) {
                for (var j in whitelistedScriptDomains) {
                  if (whitelistedScriptDomains.hasOwnProperty(j)) {
                    if (stackLine.url.indexOf(whitelistedScriptDomains[j]) > -1) {
                      foundValidDomain = true;
                    }
                  }
                }
                if (stackLine.url.indexOf(currentLocation.host) > -1) {
                  foundValidDomain = true;
                }
              }
            }
            return foundValidDomain;
          }
        };
      };
      window.raygunNetworkTrackingFactory = function(window2, Raygun) {
        var NetworkTracking = function() {
          this.requestHandlers = [];
          this.responseHandlers = [];
          this.errorHandlers = [];
          this.wrapWithHandler = function(method) {
            return function() {
              try {
                return method.apply(this, arguments);
              } catch (ex) {
                Raygun.Utilities.log(ex);
              }
            };
          };
          this.executeHandlers = this.wrapWithHandler(function(handlers, data) {
            for (var i = 0; i < handlers.length; i++) {
              handlers[i](JSON.parse(JSON.stringify(data)));
            }
          });
          this.wrapPrototypeWithHandlers();
          this.attach();
        };
        NetworkTracking.prototype.on = function(type, handler) {
          switch (type) {
            case "request":
              this.requestHandlers.push(handler);
              break;
            case "response":
              this.responseHandlers.push(handler);
              break;
            case "error":
              this.errorHandlers.push(handler);
              break;
          }
        };
        NetworkTracking.prototype.off = function(type, handler) {
          switch (type) {
            case "request":
              this.requestHandlers = Raygun.Utilities.removeFromArray(this.requestHandlers, handler);
              break;
            case "response":
              this.responseHandlers = Raygun.Utilities.removeFromArray(this.responseHandlers, handler);
              break;
            case "error":
              this.errorHandlers = Raygun.Utilities.removeFromArray(this.errorHandlers, handler);
              break;
          }
        };
        NetworkTracking.prototype.attach = function() {
          var self2 = this;
          if (window2.XMLHttpRequest.prototype.addEventListener) {
            Raygun.Utilities.enhance(window2.XMLHttpRequest.prototype, "open", self2.wrapWithHandler(function() {
              var initTime = (/* @__PURE__ */ new Date()).getTime();
              var url = Raygun.Utilities.resolveFullUrl(arguments[1]) || "Unknown";
              var baseUrl = url.split("?")[0];
              var method = arguments[0];
              Raygun.Utilities.enhance(this, "send", self2.wrapWithHandler(function() {
                var metadata = {
                  method,
                  requestURL: url,
                  baseUrl
                };
                if (arguments[0] && typeof arguments[0] === "string") {
                  metadata.body = arguments[0];
                }
                self2.executeHandlers(self2.requestHandlers, metadata);
              }));
              this.addEventListener("load", self2.wrapWithHandler(function() {
                var body = "N/A for non text responses";
                if (this.responseType === "" || this.responseType === "text") {
                  body = this.responseText;
                }
                Raygun.Utilities.log("Tracking XHR response for", url);
                self2.executeHandlers(self2.responseHandlers, {
                  status: this.status,
                  requestURL: url,
                  responseURL: this.responseURL,
                  baseUrl,
                  body,
                  duration: (/* @__PURE__ */ new Date()).getTime() - initTime
                });
              }));
              this.addEventListener("error", self2.wrapWithHandler(function() {
                self2.executeHandlers(self2.errorHandlers, {
                  requestURL: url,
                  responseURL: this.responseURL,
                  duration: (/* @__PURE__ */ new Date()).getTime() - initTime
                });
              }));
            }));
          }
          var disableFetchLogging = function() {
          };
          var originalFetch = window2.__raygunOriginalFetch || window2.fetch;
          if (typeof originalFetch === "function" && typeof originalFetch.polyfill === "undefined" && !Raygun.Utilities.isIE()) {
            var processFetch = function() {
              var fetchInput = arguments[0];
              var url, baseUrl;
              var options = arguments[1];
              var method = options && options.method || "GET";
              var initTime = (/* @__PURE__ */ new Date()).getTime();
              if (typeof fetchInput === "string") {
                url = fetchInput;
              } else if (typeof window2.Request !== "undefined" && fetchInput instanceof window2.Request) {
                url = fetchInput.url;
                if (fetchInput.method) {
                  method = fetchInput.method;
                }
              } else {
                url = String(fetchInput);
              }
              url = Raygun.Utilities.resolveFullUrl(url);
              baseUrl = url.split("?")[0];
              var promise = originalFetch.apply(null, arguments);
              try {
                var metadata = {
                  method,
                  requestURL: url,
                  baseUrl
                };
                if (options && options.body) {
                  metadata.body = options.body;
                }
                self2.executeHandlers(self2.requestHandlers, metadata);
                promise.then(self2.wrapWithHandler(function(response) {
                  var body = "N/A when the fetch response does not support clone()";
                  var ourResponse = typeof response.clone === "function" ? response.clone() : void 0;
                  function executeHandlers() {
                    Raygun.Utilities.log("tracking fetch response for", url);
                    self2.executeHandlers(self2.responseHandlers, {
                      status: response.status,
                      requestURL: url,
                      responseURL: response.url,
                      body,
                      baseUrl,
                      duration: (/* @__PURE__ */ new Date()).getTime() - initTime
                    });
                  }
                  if (ourResponse) {
                    try {
                      ourResponse.text().then(function(text) {
                        body = Raygun.Utilities.truncate(text, 500);
                        executeHandlers();
                      }).catch(function() {
                        executeHandlers();
                      });
                    } catch (_e) {
                      executeHandlers();
                    }
                  } else {
                    executeHandlers();
                  }
                })).catch(self2.wrapWithHandler(function(error) {
                  self2.executeHandlers(self2.errorHandlers, {
                    metadata: {
                      requestUrl: url,
                      error: error.toString(),
                      duration: (/* @__PURE__ */ new Date()).getTime() - initTime
                    }
                  });
                }));
              } catch (e) {
                Raygun.Utilities.log(e);
              }
              return promise;
            };
            if (!!window2.__raygunOriginalFetch) {
              window2.__raygunFetchCallback = processFetch;
            } else {
              window2.fetch = processFetch;
            }
            disableFetchLogging = function() {
              window2.fetch = originalFetch;
              delete window2.__raygunFetchCallback;
            };
          }
        };
        NetworkTracking.prototype.wrapPrototypeWithHandlers = function() {
          var name, method;
          for (name in NetworkTracking.prototype) {
            method = NetworkTracking.prototype[name];
            if (typeof method === "function") {
              NetworkTracking.prototype[name] = this.wrapWithHandler(method);
            }
          }
        };
        return new NetworkTracking();
      };
      window.raygunViewportFactory = function raygunViewportFactory2(window2, document2, Raygun) {
        "use strict";
        var utils = Raygun.Utilities;
        var nullResult = {
          width: null,
          height: null
        };
        var getViewportWidth = function getViewportWidth2() {
          return Math.max(document2.documentElement.clientWidth || 0, window2.innerWidth || 0);
        };
        var getViewportHeight = function getViewportHeight2() {
          return Math.max(document2.documentElement.clientHeight || 0, window2.innerHeight || 0);
        };
        var isValidDimension = function isValidDimension2(dimensionValue) {
          return !utils.isNil(dimensionValue) && !isNaN(dimensionValue) && dimensionValue > 0;
        };
        return {
          /**
           * Get the width and height values of the current browser viewport.
           *
           * Notes:
           * - This will return an object with null width and height values if window or document are unavailable, or the
           * dimension values are invalid.
           * - This will use the window object's innerWidth and innerHeight functions to get the dimensions, with a fallback
           * to document.documentElement clientWidth and clientHeight, if both are available, it will return the largest of
           * the values
           *
           * @returns {{width: number, height: number}|{width: null, height: null}}
           */
          getViewportDimensions: function getViewportDimensions() {
            if (utils.isNil(document2) || utils.isNil(window2)) {
              return nullResult;
            }
            var viewportWidth = getViewportWidth();
            var viewportHeight = getViewportHeight();
            if (!isValidDimension(viewportWidth) && !isValidDimension(viewportHeight)) {
              return nullResult;
            }
            return {
              width: viewportWidth,
              height: viewportHeight
            };
          }
        };
      };
      window.raygunBreadcrumbsFactory = function(window2, Raygun) {
        function urlMatchesIgnoredHosts(url, ignoredHosts) {
          for (var i = 0; i < ignoredHosts.length; i++) {
            var host = ignoredHosts[i];
            if (typeof host === "string" && url && url.indexOf(host) > -1) {
              return true;
            } else if (typeof host === "object" && host.exec(url)) {
              return true;
            }
          }
          return false;
        }
        var Breadcrumbs = function() {
          this.MAX_BREADCRUMBS = 32;
          this.MAX_MESSAGE_SIZE = 1024;
          this.BREADCRUMB_LEVELS = ["debug", "info", "warning", "error"];
          this.DEFAULT_BREADCRUMB_LEVEL = "info";
          this.DEFAULT_XHR_IGNORED_HOSTS = ["raygun"];
          this.breadcrumbLevel = "info";
          this.logXhrContents = false;
          this.xhrIgnoredHosts = [].concat(this.DEFAULT_XHR_IGNORED_HOSTS);
          this.breadcrumbs = [];
          this.wrapWithHandler = function(method) {
            return function() {
              try {
                return method.apply(this, arguments);
              } catch (ex) {
                Raygun.Utilities.log(ex);
              }
            };
          };
          this.disableConsoleFunctions = [];
          this.disableNavigationFunctions = [];
          this.disableXHRLogging = function() {
          };
          this.disableClicksTracking = function() {
          };
          this.enableAutoBreadcrumbs();
          this.wrapPrototypeWithHandlers();
        };
        Breadcrumbs.prototype.recordBreadcrumb = function(value, metadata) {
          var crumb = {
            level: this.DEFAULT_BREADCRUMB_LEVEL,
            timestamp: (/* @__PURE__ */ new Date()).getTime(),
            type: "manual"
          };
          switch (typeof value) {
            case "object":
              crumb = Raygun.Utilities.merge(crumb, value);
              break;
            case "string":
              crumb = Raygun.Utilities.merge(Raygun.Utilities.merge(crumb, {
                message: value,
                metadata
              }));
              break;
            default:
              Raygun.Utilities.log("expected first argument to recordBreadcrumb to be a 'string' or 'object', got " + typeof value);
              return;
          }
          if (this.BREADCRUMB_LEVELS.indexOf(crumb.level) === -1) {
            Raygun.Utilities.log("unknown breadcrumb level " + crumb.level + " setting to default of '" + this.DEFAULT_BREADCRUMB_LEVEL + "'");
            crumb.level = this.DEFAULT_BREADCRUMB_LEVEL;
          }
          if (this.shouldRecord(crumb)) {
            crumb.message = Raygun.Utilities.truncate(crumb.message, this.MAX_MESSAGE_SIZE);
            this.breadcrumbs.push(crumb);
            this.breadcrumbs = this.breadcrumbs.slice(-this.MAX_BREADCRUMBS);
          }
        };
        Breadcrumbs.prototype.shouldRecord = function(crumb) {
          var crumbLevel = this.BREADCRUMB_LEVELS.indexOf(crumb.level);
          var activeLevel = this.BREADCRUMB_LEVELS.indexOf(this.breadcrumbLevel);
          return crumbLevel >= activeLevel;
        };
        Breadcrumbs.prototype.setBreadcrumbLevel = function(level) {
          if (this.BREADCRUMB_LEVELS.indexOf(level) === -1) {
            Raygun.Utilities.log("Breadcrumb level of '" + level + "' is invalid, setting to default of '" + this.DEFAULT_BREADCRUMB_LEVEL + "'");
            return;
          }
          this.breadcrumbLevel = level;
        };
        Breadcrumbs.prototype.setOption = function(option, value) {
          if (option === "breadcrumbsLevel") {
            this.setBreadcrumbLevel(value);
          } else if (option === "xhrIgnoredHosts") {
            this.xhrIgnoredHosts = value.concat(this.DEFAULT_XHR_IGNORED_HOSTS);
            var self2 = this;
            this.removeBreadcrumbsWithPredicate(function(crumb) {
              if (crumb.type !== "request") {
                return false;
              }
              return urlMatchesIgnoredHosts(crumb.metadata.requestURL || crumb.metadata.responseURL, self2.xhrIgnoredHosts);
            });
          } else if (option === "logXhrContents") {
            this.logXhrContents = value;
          }
        };
        Breadcrumbs.prototype.any = function() {
          return this.breadcrumbs.length > 0;
        };
        Breadcrumbs.prototype.all = function() {
          var sanitizedBreadcrumbs = [];
          for (var i = 0; i < this.breadcrumbs.length; i++) {
            var crumb = this.breadcrumbs[i];
            if (crumb && crumb.type === "request" && !this.logXhrContents) {
              if (crumb.metadata && crumb.metadata.body) {
                crumb.metadata.body = "Disabled because logContentsOfXhrCalls has not been enabled";
              }
            }
            sanitizedBreadcrumbs.push(crumb);
          }
          return sanitizedBreadcrumbs;
        };
        Breadcrumbs.prototype.enableAutoBreadcrumbs = function() {
          this.enableAutoBreadcrumbsXHR();
          this.enableAutoBreadcrumbsClicks();
          this.enableAutoBreadcrumbsConsole();
          this.enableAutoBreadcrumbsNavigation();
        };
        Breadcrumbs.prototype.disableAutoBreadcrumbs = function() {
          this.disableAutoBreadcrumbsXHR();
          this.disableAutoBreadcrumbsClicks();
          this.disableAutoBreadcrumbsConsole();
          this.disableAutoBreadcrumbsNavigation();
        };
        Breadcrumbs.prototype.removeBreadcrumbsWithPredicate = function(predicate) {
          var crumbs = this.breadcrumbs;
          var filteredCrumbs = [];
          for (var i = 0; i < crumbs.length; i++) {
            var crumb = crumbs[i];
            if (!predicate(crumb)) {
              filteredCrumbs.push(crumb);
            }
          }
          this.breadcrumbs = filteredCrumbs;
        };
        Breadcrumbs.prototype.removeCrumbsOfType = function(type) {
          this.removeBreadcrumbsWithPredicate(function(crumb) {
            return crumb.type === type;
          });
        };
        Breadcrumbs.prototype.enableAutoBreadcrumbsConsole = function() {
          if (typeof window2.console === "undefined") {
            return;
          }
          var logConsoleCall = function logConsoleCall2(severity, args) {
            var stringifiedArgs = [];
            for (var i = 0; i < args.length; i++) {
              var arg = args[i];
              if (arg === null || arg === void 0) {
                continue;
              }
              stringifiedArgs.push(arg.toString());
            }
            this.recordBreadcrumb({
              type: "console",
              level: severity,
              message: Array.prototype.slice.call(stringifiedArgs).join(", ")
            });
          }.bind(this);
          var consoleProperties = ["log", "warn", "error"];
          var self2 = this;
          this.disableConsoleFunctions = consoleProperties.map(function(property) {
            return Raygun.Utilities.enhance(console, property, self2.wrapWithHandler(function() {
              var severity = property === "log" ? "info" : property === "warn" ? "warning" : "error";
              logConsoleCall(severity, arguments);
            }));
          });
        };
        Breadcrumbs.prototype.disableAutoBreadcrumbsConsole = function() {
          this.disableConsoleFunctions.forEach(function(unenhance) {
            unenhance();
          });
          this.removeCrumbsOfType("console");
        };
        Breadcrumbs.prototype.enableAutoBreadcrumbsNavigation = function() {
          if (!window2.addEventListener || !window2.history || !window2.history.pushState) {
            return;
          }
          var buildStateChange = function(name, state, title, url) {
            var currentPath = location.pathname + location.search + location.hash;
            var prevState = null;
            if (window2.history.state) {
              prevState = history.state;
            }
            return {
              message: "History " + name,
              type: "navigation",
              level: "info",
              metadata: {
                from: currentPath,
                to: url || currentPath,
                prevState: JSON.stringify(prevState) || "unsupported",
                nextState: JSON.stringify(state)
              }
            };
          }.bind(this);
          var parseHash = function(url) {
            return url.split("#")[1] || "";
          };
          var historyFunctionsToEnhance = ["pushState", "replaceState"];
          this.disableNavigationFunctions = this.disableNavigationFunctions.concat(historyFunctionsToEnhance.map(function(stateChange) {
            return Raygun.Utilities.enhance(history, stateChange, this.wrapWithHandler(function(state, title, url) {
              this.recordBreadcrumb(buildStateChange(stateChange, state, title, url));
            }.bind(this)));
          }.bind(this)));
          var buildHashChange = function(e) {
            var oldURL = e.oldURL;
            var newURL = e.newURL;
            var metadata;
            if (oldURL && newURL) {
              metadata = {
                from: parseHash(oldURL),
                to: parseHash(newURL)
              };
            } else {
              metadata = {
                to: location.hash
              };
            }
            return {
              type: "navigation",
              message: "Hash change",
              metadata
            };
          };
          var logBreadcrumbWrapper = function(handler) {
            return this.wrapWithHandler(function() {
              this.recordBreadcrumb(handler.apply(null, arguments));
            }.bind(this));
          }.bind(this);
          var eventsWithHandlers = [{
            element: window2,
            event: "hashchange",
            handler: buildHashChange
          }, {
            element: window2,
            event: "load",
            handler: function() {
              return {
                type: "navigation",
                message: "Page loaded"
              };
            }
          }, {
            element: window2,
            event: "popstate",
            handler: function() {
              return {
                type: "navigation",
                message: "Navigated back"
              };
            }
          }, {
            element: window2,
            event: "pagehide",
            handler: function() {
              return {
                type: "navigation",
                message: "Page hidden"
              };
            }
          }, {
            element: window2,
            event: "pageshow",
            handler: function() {
              return {
                type: "navigation",
                message: "Page shown"
              };
            }
          }, {
            element: document,
            event: "DOMContentLoaded",
            handler: function() {
              return {
                type: "navigation",
                message: "DOMContentLoaded"
              };
            }
          }];
          this.disableNavigationFunctions = this.disableNavigationFunctions.concat(eventsWithHandlers.map(function(mapping) {
            return Raygun.Utilities.addEventHandler(mapping.element, mapping.event, logBreadcrumbWrapper(mapping.handler));
          }.bind(this)));
        };
        Breadcrumbs.prototype.disableAutoBreadcrumbsNavigation = function() {
          this.disableNavigationFunctions.forEach(function(unenhance) {
            unenhance();
          });
          this.disableNavigationFunctions = [];
          this.removeCrumbsOfType("navigation");
        };
        Breadcrumbs.prototype.enableAutoBreadcrumbsClicks = function() {
          this.disableClicksTracking = Raygun.Utilities.addEventHandler(window2, "click", this.wrapWithHandler(function(e) {
            var text, selector;
            try {
              text = Raygun.Utilities.truncate(Raygun.Utilities.nodeText(e.target), 150);
              selector = Raygun.Utilities.nodeSelector(e.target);
            } catch (exception) {
              text = "[unknown]";
              selector = "[unknown]";
              Raygun.Utilities.log("Error retrieving node text/selector. Most likely due to a cross domain error");
            }
            this.recordBreadcrumb({
              type: "click-event",
              message: "UI Click",
              level: "info",
              metadata: {
                text,
                selector
              }
            });
          }.bind(this), true));
        };
        Breadcrumbs.prototype.disableAutoBreadcrumbsClicks = function() {
          this.disableClicksTracking();
          this.removeCrumbsOfType("click-event");
        };
        Breadcrumbs.prototype.enableAutoBreadcrumbsXHR = function() {
          var self2 = this;
          var requestHandler = self2.wrapWithHandler(function(request) {
            if (urlMatchesIgnoredHosts(request.requestURL, self2.xhrIgnoredHosts)) {
              return;
            }
            if (request.body) {
              request.body = Raygun.Utilities.truncate(request.body, 500);
            }
            self2.recordBreadcrumb({
              type: "request",
              message: "Opening request to " + request.requestURL,
              level: "info",
              metadata: request
            });
          });
          var responseHandler = self2.wrapWithHandler(function(response) {
            if (urlMatchesIgnoredHosts(response.requestURL, self2.xhrIgnoredHosts) || urlMatchesIgnoredHosts(response.responseURL, self2.xhrIgnoredHosts)) {
              return;
            }
            if (response.body) {
              response.body = Raygun.Utilities.truncate(response.body, 500);
            }
            response.duration = response.duration + "ms";
            self2.recordBreadcrumb({
              type: "request",
              message: "Finished request to " + response.requestURL,
              level: "info",
              metadata: response
            });
          });
          var errorHandler = self2.wrapWithHandler(function(error) {
            if (urlMatchesIgnoredHosts(error.requestURL, self2.xhrIgnoredHosts)) {
              return;
            }
            error.duration = error.duration + "ms";
            self2.recordBreadcrumb({
              type: "request",
              message: "Failed request to " + error.requestUrl,
              level: "info",
              metadata: error
            });
          });
          Raygun.NetworkTracking.on("request", requestHandler);
          Raygun.NetworkTracking.on("response", responseHandler);
          Raygun.NetworkTracking.on("error", errorHandler);
          this.disableXHRLogging = function() {
            Raygun.NetworkTracking.off("request", requestHandler);
            Raygun.NetworkTracking.off("response", responseHandler);
            Raygun.NetworkTracking.off("error", errorHandler);
          };
        };
        Breadcrumbs.prototype.disableAutoBreadcrumbsXHR = function() {
          this.disableXHRLogging();
          this.removeCrumbsOfType("request");
        };
        Breadcrumbs.prototype.wrapPrototypeWithHandlers = function() {
          var name, method;
          for (name in Breadcrumbs.prototype) {
            method = Breadcrumbs.prototype[name];
            if (typeof method === "function") {
              Breadcrumbs.prototype[name] = this.wrapWithHandler(method);
            }
          }
        };
        return Breadcrumbs;
      };
      function raygunCoreWebVitalFactory(window2) {
        var WebVitalTimingType = "w";
        var queueTimings = null;
        var _parentResource = null;
        var CoreWebVitals = function() {
          this.cleanWebVitalData = function(event) {
            var res = event;
            if (res.value && res.value.toFixed) {
              res.value = res.value.toFixed(3);
            }
            return res;
          };
        };
        CoreWebVitals.prototype.attach = function(queueHandler, parentResource) {
          queueTimings = queueHandler;
          _parentResource = parentResource;
          if (typeof window2 !== "undefined" && window2.webVitals) {
            if (window2.webVitals.getLCP) {
              window2.webVitals.getLCP(this.handler);
            }
            if (window2.webVitals.getFID) {
              window2.webVitals.getFID(this.handler);
            }
            if (window2.webVitals.getCLS) {
              window2.webVitals.getCLS(this.handler);
            }
          }
        };
        CoreWebVitals.prototype.handler = function(event) {
          if (event.value && event.value.toFixed) {
            event.value = event.value.toFixed(3);
          }
          var webVitalEvent = {
            url: event.name,
            timing: {
              t: WebVitalTimingType,
              du: event.value
            },
            parentResource: _parentResource
          };
          queueTimings(webVitalEvent);
        };
        return new CoreWebVitals();
      }
      window.raygunCoreWebVitalFactory = raygunCoreWebVitalFactory;
      var raygunFactory = function(window2, $, undefined2) {
        var Raygun = {};
        Raygun.Utilities = raygunUtilityFactory(window2, Raygun);
        Raygun.ErrorUtilities = raygunErrorUtilitiesFactory(window2, Raygun);
        Raygun.NetworkTracking = raygunNetworkTrackingFactory(window2, Raygun);
        Raygun.Breadcrumbs = raygunBreadcrumbsFactory(window2, Raygun);
        Raygun.CoreWebVitals = raygunCoreWebVitalFactory(window2);
        Raygun.Viewport = raygunViewportFactory(window2, document, Raygun);
        var ProviderStates = {
          LOADING: 0,
          READY: 1
        };
        var _userKey = "raygun4js-userid";
        var _traceKit = TraceKit, _raygun = window2.Raygun, _debugMode = false, _ignoreAjaxAbort = false, _ignoreAjaxError = false, _enableOfflineSave = false, _ignore3rdPartyErrors = false, _disableAnonymousUserTracking = false, _disableErrorTracking = false, _disablePulse = true, _wrapAsynchronousCallbacks = false, _automaticPerformanceCustomTimings = false, _trackCoreWebVitals = true, _trackViewportDimensions = true, _customData = {}, _tags = [], _user, _version, _filteredKeys, _whitelistedScriptDomains = [], _beforeSendCallback, _beforeSendRumCallback, _groupingKeyCallback, _beforeXHRCallback, _afterSendCallback, _raygunApiUrl = "https://api.raygun.io", _excludedHostnames = null, _excludedUserAgents = null, _filterScope = "customData", _rum = null, _breadcrumbs = new Raygun.Breadcrumbs(), _pulseMaxVirtualPageDuration = null, _pulseIgnoreUrlCasing = true, _providerState = ProviderStates.LOADING, _loadedFrom, _processExceptionQueue = [], _trackEventQueue = [], _pulseCustomLoadTimeEnabled = null, $document, _captureUnhandledRejections = true, _setCookieAsSecure = false, _clientIp, _captureMissingRequests = false, detachPromiseRejectionFunction, _customEndpointSet = false;
        var rand = Math.random();
        var _publicRaygunFunctions = {
          Rand: rand,
          Options: {},
          noConflict: function() {
            if (_raygun) {
              window2.Raygun = _raygun;
            }
            return Raygun;
          },
          constructNewRaygun: function() {
            var rgInstance = raygunFactory(window2, window2.jQuery);
            return rgInstance;
          },
          init: function(key, options, customdata) {
            _traceKit.remoteFetching = false;
            this.Options._raygunApiKey = key;
            if (customdata) {
              _customData = customdata;
            }
            if ($) {
              $document = $(document);
            }
            if (options) {
              _ignoreAjaxAbort = options.ignoreAjaxAbort || false;
              _ignoreAjaxError = options.ignoreAjaxError || false;
              _disableAnonymousUserTracking = options.disableAnonymousUserTracking || false;
              _disableErrorTracking = options.disableErrorTracking || false;
              _disablePulse = options.disablePulse === undefined2 ? true : options.disablePulse;
              _excludedHostnames = options.excludedHostnames || false;
              _excludedUserAgents = options.excludedUserAgents || false;
              _pulseMaxVirtualPageDuration = options.pulseMaxVirtualPageDuration || null;
              _pulseIgnoreUrlCasing = options.pulseIgnoreUrlCasing || false;
              _pulseCustomLoadTimeEnabled = options.pulseCustomLoadTimeEnabled || false;
              _setCookieAsSecure = options.setCookieAsSecure || false;
              _captureMissingRequests = options.captureMissingRequests || false;
              _automaticPerformanceCustomTimings = options.automaticPerformanceCustomTimings || false;
              _trackCoreWebVitals = options.trackCoreWebVitals === undefined2 ? true : options.trackCoreWebVitals;
              _trackViewportDimensions = options.trackViewportDimensions === undefined2 ? true : options.trackViewportDimensions;
              if (options.apiUrl) {
                _raygunApiUrl = options.apiUrl;
                _customEndpointSet = true;
              }
              if (typeof options.wrapAsynchronousCallbacks !== "undefined") {
                _wrapAsynchronousCallbacks = options.wrapAsynchronousCallbacks;
              }
              if (typeof options.captureUnhandledRejections !== "undefined") {
                _captureUnhandledRejections = options.captureUnhandledRejections;
              }
              if (options.debugMode) {
                _debugMode = options.debugMode;
              }
              this.Options._debugMode = _debugMode;
              if (options.ignore3rdPartyErrors) {
                _ignore3rdPartyErrors = true;
              }
              if (options.apiEndpoint) {
                _raygunApiUrl = options.apiEndpoint;
                _customEndpointSet = true;
              }
              if (options.from) {
                _loadedFrom = options.from;
              }
              if (options.clientIp) {
                _clientIp = options.clientIp;
              }
            }
            ensureUser();
            return Raygun;
          },
          withCustomData: function(customdata) {
            _customData = customdata;
            return Raygun;
          },
          withTags: function(tags) {
            _tags = tags;
            if (_rum !== undefined2 && _rum !== null) {
              _rum.withTags(tags);
            }
            return Raygun;
          },
          attach: function() {
            if (!Raygun.Utilities.isApiKeyConfigured() || _disableErrorTracking) {
              return Raygun;
            }
            if (window2.RaygunObject && window2[window2.RaygunObject] && window2[window2.RaygunObject].q) {
              window2.onerror = null;
            }
            if (_captureUnhandledRejections) {
              attachPromiseRejectionHandler();
            }
            if (Raygun.Utilities.isReactNative()) {
              if (__DEV__ !== true && window2.ErrorUtils && window2.ErrorUtils.setGlobalHandler) {
                window2.ErrorUtils.setGlobalHandler(function(error, fatal) {
                  var originalAfterSendCallback = _afterSendCallback;
                  _afterSendCallback = function() {
                    if (typeof originalAfterSendCallback === "function") {
                      originalAfterSendCallback();
                    }
                    Raygun.Utilities.defaultReactNativeGlobalHandler(error, fatal);
                    _afterSendCallback = originalAfterSendCallback;
                  };
                  TraceKit.report(error);
                });
              }
            }
            _traceKit.report.subscribe(processException);
            if (_wrapAsynchronousCallbacks) {
              _traceKit.extendToAsynchronousCallbacks();
            }
            if ($document && $document.ajaxError && !_ignoreAjaxError) {
              $document.ajaxError(processJQueryAjaxError);
            }
            return Raygun;
          },
          detach: function() {
            _traceKit.report.unsubscribe(processException);
            if ($document) {
              $document.unbind("ajaxError", processJQueryAjaxError);
            }
            if (_captureUnhandledRejections) {
              detachPromiseRejectionHandler();
            }
            return Raygun;
          },
          send: function(ex, customData, tags) {
            if (_disableErrorTracking) {
              Raygun.Utilities.log("Error not sent due to disabled error tracking");
              return Raygun;
            }
            try {
              processException(_traceKit.computeStackTrace(ex), {
                customData: typeof _customData === "function" ? Raygun.Utilities.merge(_customData(), customData) : Raygun.Utilities.merge(_customData, customData),
                tags: typeof _tags === "function" ? Raygun.Utilities.mergeArray(_tags(), tags) : Raygun.Utilities.mergeArray(_tags, tags)
              }, true, ex);
            } catch (traceKitException) {
              if (ex !== traceKitException) {
                throw traceKitException;
              }
            }
            return Raygun;
          },
          setUser: function(user, isAnonymous, email, fullName, firstName, uuid) {
            _user = {
              Identifier: user
            };
            if (typeof isAnonymous === "boolean") {
              _user["IsAnonymous"] = isAnonymous;
            }
            if (email) {
              _user["Email"] = email;
            }
            if (fullName) {
              _user["FullName"] = fullName;
            }
            if (firstName) {
              _user["FirstName"] = firstName;
            }
            if (uuid) {
              _user["UUID"] = uuid;
            }
            if (_rum !== undefined2 && _rum !== null) {
              _rum.setUser(_user);
            }
            return Raygun;
          },
          resetAnonymousUser: function() {
            clearStorage();
          },
          setVersion: function(version) {
            _version = version;
            return Raygun;
          },
          saveIfOffline: function(enableOffline) {
            if (typeof enableOffline !== "undefined" && typeof enableOffline === "boolean") {
              _enableOfflineSave = enableOffline;
            }
            return Raygun;
          },
          filterSensitiveData: function(filteredKeys) {
            _filteredKeys = filteredKeys;
            return Raygun;
          },
          setFilterScope: function(scope) {
            if (scope === "customData" || scope === "all") {
              _filterScope = scope;
            }
            return Raygun;
          },
          whitelistCrossOriginDomains: function(whitelist) {
            _whitelistedScriptDomains = whitelist;
            return Raygun;
          },
          onBeforeSend: function(callback) {
            _beforeSendCallback = callback;
            return Raygun;
          },
          onBeforeSendRum: function(callback) {
            _beforeSendRumCallback = callback;
            return Raygun;
          },
          groupingKey: function(callback) {
            _groupingKeyCallback = callback;
            return Raygun;
          },
          onBeforeXHR: function(callback) {
            _beforeXHRCallback = callback;
            return Raygun;
          },
          onAfterSend: function(callback) {
            _afterSendCallback = callback;
            return Raygun;
          },
          // Public Pulse functions
          endSession: function() {
            if (Raygun.RealUserMonitoring !== undefined2 && _rum) {
              _rum.endSession();
            }
          },
          trackEvent: function(type, options) {
            if (_providerState !== ProviderStates.READY) {
              _trackEventQueue.push({
                type,
                options
              });
              return;
            }
            if (Raygun.RealUserMonitoring !== undefined2 && _rum) {
              var parentResource = _rum.parentResource;
              if (type === "pageView" && options.path) {
                _rum.virtualPageLoaded(options.path);
              } else if (type === "customTiming") {
                _rum.trackCustomTiming(options.name, options.duration, options.offset || 0, parentResource);
              } else if (type === "customTimings" && options.timings) {
                _rum.sendCustomTimings(options.timings, parentResource);
              }
            }
          },
          setClientIp: function(ip) {
            _clientIp = ip;
          },
          captureMissingRequests: function(val) {
            if (Raygun.RealUserMonitoring !== undefined2 && _rum) {
              _rum.captureMissingRequests(val);
            }
          },
          recordBreadcrumb: function() {
            _breadcrumbs.recordBreadcrumb.apply(_breadcrumbs, arguments);
          },
          enableAutoBreadcrumbs: function(type) {
            if (type) {
              _breadcrumbs["enableAutoBreadcrumbs" + type]();
            } else {
              _breadcrumbs.enableAutoBreadcrumbs();
            }
          },
          disableAutoBreadcrumbs: function(type) {
            if (type) {
              _breadcrumbs["disableAutoBreadcrumbs" + type]();
            } else {
              _breadcrumbs.disableAutoBreadcrumbs();
            }
          },
          setBreadcrumbOption: function(option, value) {
            _breadcrumbs.setOption(option, value);
          },
          setBreadcrumbs: function(breadcrumbs) {
            _breadcrumbs = breadcrumbs;
          },
          getBreadcrumbs: function() {
            return _breadcrumbs.all();
          }
        };
        Raygun = Raygun.Utilities.mergeMutate(Raygun, _publicRaygunFunctions);
        function callAfterSend(response) {
          if (typeof _afterSendCallback === "function") {
            _afterSendCallback(response);
          }
        }
        function ensureUser() {
          if (!_user && !_disableAnonymousUserTracking) {
            getFromStorage(setUserComplete);
          } else {
            bootRaygun();
          }
        }
        function setUserComplete(userId) {
          var userIdentifier = "Unknown";
          if (!userId) {
            userIdentifier = Raygun.Utilities.getUuid();
            saveToStorage(userIdentifier);
          } else {
            userIdentifier = userId;
          }
          Raygun.setUser(userIdentifier, true, null, null, null, userIdentifier);
          bootRaygun();
        }
        function promiseRejectionHandler(event) {
          var error = event.reason;
          if (!error && event.detail && event.detail.reason) {
            error = event.detail.reason;
          }
          if (!(error instanceof Error) && event.reason && event.reason.error) {
            error = event.reason.error;
          }
          if (!error) {
            error = new Error("Unhandled promise rejection");
            error.stack = null;
          }
          _publicRaygunFunctions.send(error, null, ["UnhandledPromiseRejection"]);
        }
        function attachPromiseRejectionHandler() {
          detachPromiseRejectionFunction = Raygun.Utilities.addEventHandler(window2, "unhandledrejection", promiseRejectionHandler);
        }
        function detachPromiseRejectionHandler() {
          if (detachPromiseRejectionFunction) {
            detachPromiseRejectionFunction();
          }
        }
        function bootRaygun() {
          if (_providerState === ProviderStates.READY) {
            return;
          }
          _providerState = ProviderStates.READY;
          if (Raygun.RealUserMonitoring !== undefined2 && !_disablePulse) {
            var startRum = function() {
              _rum = new Raygun.RealUserMonitoring(Raygun.Options._raygunApiKey, _raygunApiUrl, makePostCorsRequest, _user, _version, _tags, _excludedHostnames, _excludedUserAgents, _debugMode, _pulseMaxVirtualPageDuration, _pulseIgnoreUrlCasing, _pulseCustomLoadTimeEnabled, _beforeSendRumCallback, _setCookieAsSecure, _captureMissingRequests, _automaticPerformanceCustomTimings, _trackCoreWebVitals, _trackViewportDimensions);
              _rum.attach();
            };
            if (!Raygun.Utilities.isReactNative()) {
              if (_loadedFrom === "onLoad") {
                startRum();
              } else {
                if (window2.addEventListener) {
                  window2.addEventListener("load", startRum);
                } else {
                  window2.attachEvent("onload", startRum);
                }
              }
            } else {
              Raygun.Utilities.log("Not enabling RUM because Raygun4JS has detected a React Native environment, see #310 on Github");
            }
          }
          retriggerDelayedCommands();
          sendSavedErrors();
        }
        function retriggerDelayedCommands() {
          var i;
          for (i = 0; i < _processExceptionQueue.length; i++) {
            processException(_processExceptionQueue[i].stackTrace, _processExceptionQueue[i].options, _processExceptionQueue[i].userTriggered, _processExceptionQueue[i].error);
          }
          _processExceptionQueue = [];
          for (i = 0; i < _trackEventQueue.length; i++) {
            _publicRaygunFunctions.trackEvent(_trackEventQueue[i].type, _trackEventQueue[i].options);
          }
          _trackEventQueue = [];
        }
        function offlineSave(url, data) {
          var dateTime = (/* @__PURE__ */ new Date()).toJSON();
          try {
            var key = "raygunjs+" + Raygun.Options._raygunApiKey + "=" + dateTime + "=" + Raygun.Utilities.getRandomInt();
            if (typeof localStorage[key] === "undefined") {
              localStorage[key] = JSON.stringify({
                url,
                data
              });
            }
          } catch (e) {
            Raygun.Utilities.log("Raygun4JS: LocalStorage full, cannot save exception");
          }
        }
        function sendSavedErrors() {
          if (Raygun.Utilities.localStorageAvailable()) {
            for (var key in localStorage) {
              if (key.indexOf("raygunjs+" + Raygun.Options._raygunApiKey) > -1) {
                try {
                  var payload = JSON.parse(localStorage[key]);
                  if (!_customEndpointSet && payload.url.includes("raygun.com")) {
                    payload.url = payload.url.replace("raygun.com", "raygun.io");
                  }
                  makePostCorsRequest(payload.url, payload.data);
                } catch (e) {
                  Raygun.Utilities.log("Raygun4JS: Invalid JSON object in LocalStorage");
                }
                try {
                  localStorage.removeItem(key);
                } catch (e) {
                  Raygun.Utilities.log("Raygun4JS: Unable to remove error");
                }
              }
            }
          }
        }
        function filterValue(key, value) {
          if (_filteredKeys) {
            for (var i = 0; i < _filteredKeys.length; i++) {
              if (typeof _filteredKeys[i] === "object" && typeof _filteredKeys[i].exec === "function") {
                var executedFilter = _filteredKeys[i].exec(key);
                if (executedFilter !== null && executedFilter !== undefined2) {
                  return "[removed by filter]";
                }
              } else if (_filteredKeys[i] === key) {
                return "[removed by filter]";
              }
            }
          }
          return value;
        }
        function filterObject(reference, parentKey) {
          if (reference == null) {
            return reference;
          }
          if (Object.prototype.toString.call(reference) !== "[object Object]") {
            return reference;
          }
          var filteredObject = {};
          for (var propertyName in reference) {
            var propertyValue = reference[propertyName];
            if (Object.prototype.toString.call(propertyValue) === "[object Object]") {
              if (parentKey !== "Details" || propertyName !== "Client") {
                filteredObject[propertyName] = filterObject(filterValue(propertyName, propertyValue), propertyName);
              } else {
                filteredObject[propertyName] = propertyValue;
              }
            } else if (Object.prototype.toString.call(propertyValue) !== "[object Function]") {
              if (typeof parentKey !== "undefined") {
                filteredObject[propertyName] = filterValue(propertyName, propertyValue);
              } else if (propertyName === "OccurredOn") {
                filteredObject[propertyName] = propertyValue;
              }
            }
          }
          return filteredObject;
        }
        function processJQueryAjaxError(event, jqXHR, ajaxSettings, thrownError) {
          var message = "AJAX Error: " + (jqXHR.statusText || "unknown") + " " + (ajaxSettings.type || "unknown") + " " + (Raygun.Utilities.truncateURL(ajaxSettings.url) || "unknown");
          if (_ignoreAjaxAbort) {
            if (jqXHR.status === 0 || !jqXHR.getAllResponseHeaders()) {
              return;
            }
          }
          Raygun.send(thrownError || event.type, {
            status: jqXHR.status,
            statusText: jqXHR.statusText,
            type: ajaxSettings.type,
            url: ajaxSettings.url,
            ajaxErrorMessage: message,
            contentType: ajaxSettings.contentType,
            requestData: ajaxSettings.data && ajaxSettings.data.slice ? ajaxSettings.data.slice(0, 10240) : undefined2,
            responseData: jqXHR.responseText && jqXHR.responseText.slice ? jqXHR.responseText.slice(0, 10240) : undefined2,
            activeTarget: event.target && event.target.activeElement && event.target.activeElement.outerHTML && event.target.activeElement.outerHTML.slice ? event.target.activeElement.outerHTML.slice(0, 10240) : undefined2
          });
        }
        function processException(stackTrace, options, userTriggered, error) {
          if (_providerState !== ProviderStates.READY) {
            _processExceptionQueue.push({
              stackTrace,
              options,
              userTriggered,
              error
            });
            return;
          }
          var scriptError = "Script error";
          var stack = [], qs = {};
          if (_ignore3rdPartyErrors && shouldDiscardThirdPartyError(stackTrace, options)) {
            return;
          }
          if (_excludedHostnames instanceof Array) {
            for (var hostIndex in _excludedHostnames) {
              if (_excludedHostnames.hasOwnProperty(hostIndex)) {
                if (window2.location.hostname && window2.location.hostname.match(_excludedHostnames[hostIndex])) {
                  Raygun.Utilities.log("Raygun4JS: cancelling send as error originates from an excluded hostname");
                  return;
                }
              }
            }
          }
          if (_excludedUserAgents instanceof Array && !Raygun.Utilities.isReactNative()) {
            for (var userAgentIndex in _excludedUserAgents) {
              if (_excludedUserAgents.hasOwnProperty(userAgentIndex)) {
                if (window2.raygunUserAgent.match(_excludedUserAgents[userAgentIndex])) {
                  Raygun.Utilities.log("Raygun4JS: cancelling send as error originates from an excluded user agent");
                  return;
                }
              }
            }
          }
          if (!Raygun.Utilities.isReactNative() && window2.raygunUserAgent.match("RaygunPulseInsightsCrawler")) {
            return;
          }
          if (stackTrace.stack && stackTrace.stack.length) {
            Raygun.Utilities.forEach(stackTrace.stack, function(i, frame) {
              stack.push({
                LineNumber: frame.line,
                ColumnNumber: frame.column,
                ClassName: "line " + frame.line + ", column " + frame.column,
                FileName: frame.url,
                MethodName: frame.func || "[anonymous]"
              });
            });
          }
          var queryString = Raygun.Utilities.parseUrl("?");
          if (queryString.length > 0) {
            Raygun.Utilities.forEach(queryString.split("&"), function(i, segment) {
              var parts = segment.split("=");
              if (parts && parts.length === 2) {
                var key = decodeURIComponent(parts[0]);
                var value = filterValue(key, parts[1]);
                qs[key] = value;
              }
            });
          }
          if (options === undefined2) {
            options = {};
          }
          if (Raygun.Utilities.isEmpty(options.customData)) {
            if (typeof _customData === "function") {
              options.customData = _customData();
            } else {
              options.customData = _customData;
            }
          }
          if (Raygun.Utilities.isEmpty(options.tags)) {
            if (typeof _tags === "function") {
              options.tags = _tags();
            } else if (typeof _tags === "string") {
              options.tags = [_tags];
            } else {
              options.tags = _tags;
            }
          }
          if (!userTriggered) {
            if (!options.tags) {
              options.tags = [];
            }
            if (!Raygun.Utilities.contains(options.tags, "UnhandledException")) {
              options.tags.push("UnhandledException");
            }
          }
          if (Raygun.Utilities.isReactNative() && !Raygun.Utilities.contains(options.tags, "React Native")) {
            options.tags.push("React Native");
          }
          var viewportDimensions = Raygun.Viewport.getViewportDimensions();
          var screenData = window2.screen || {
            width: viewportDimensions.width,
            height: viewportDimensions.height,
            colorDepth: 8
          };
          var custom_message = options.customData && options.customData.ajaxErrorMessage;
          var finalCustomData;
          if (_filterScope === "customData") {
            finalCustomData = filterObject(options.customData, "UserCustomData");
          } else {
            finalCustomData = options.customData;
          }
          try {
            JSON.stringify(finalCustomData);
          } catch (e) {
            var m = "Cannot add custom data; may contain circular reference";
            finalCustomData = {
              error: m
            };
            Raygun.Utilities.log("Raygun4JS: " + m);
          }
          var finalMessage = scriptError;
          if (custom_message) {
            finalMessage = custom_message;
          } else if (stackTrace.message) {
            finalMessage = stackTrace.message;
          } else if (options && options.status) {
            finalMessage = options.status;
          } else if (typeof error === "string") {
            finalMessage = error;
          }
          if (typeof finalMessage === "undefined") {
            finalMessage = scriptError;
          }
          if (finalMessage && typeof finalMessage === "string") {
            finalMessage = finalMessage.substring(0, 512);
          }
          var pageLocation;
          if (!Raygun.Utilities.isReactNative()) {
            pageLocation = [location.protocol, "//", location.host, location.pathname, location.hash].join("");
          } else {
            pageLocation = "/";
          }
          var payload = {
            OccurredOn: /* @__PURE__ */ new Date(),
            Details: {
              Error: {
                ClassName: stackTrace.name,
                Message: finalMessage,
                StackTrace: stack,
                StackString: stackTrace.stackstring
              },
              Environment: {
                UtcOffset: (/* @__PURE__ */ new Date()).getTimezoneOffset() / -60,
                "User-Language": navigator.userLanguage,
                "Document-Mode": !Raygun.Utilities.isReactNative() ? document.documentMode : "Not available",
                "Browser-Width": viewportDimensions.width,
                "Browser-Height": viewportDimensions.height,
                "Screen-Width": screenData.width,
                "Screen-Height": screenData.height,
                "Color-Depth": screenData.colorDepth,
                Browser: navigator.appCodeName,
                "Browser-Name": navigator.appName,
                "Browser-Version": navigator.appVersion,
                Platform: navigator.platform
              },
              Client: {
                Name: "raygun-js",
                Version: "2.28.0"
              },
              UserCustomData: finalCustomData,
              Tags: options.tags,
              Request: {
                Url: pageLocation,
                QueryString: qs,
                Headers: {
                  "User-Agent": window2.raygunUserAgent,
                  Referer: !Raygun.Utilities.isReactNative() ? document.referrer : "Not available",
                  Host: !Raygun.Utilities.isReactNative() ? document.domain : "Not available"
                }
              },
              Version: _version || "Not supplied"
            }
          };
          payload.Details.User = _user;
          if (_breadcrumbs.any()) {
            payload.Details.Breadcrumbs = [];
            var crumbs = _breadcrumbs.all() || [];
            crumbs.forEach(function(crumb) {
              if (crumb.metadata) {
                crumb.CustomData = crumb.metadata;
                delete crumb.metadata;
              }
              payload.Details.Breadcrumbs.push(crumb);
            });
          }
          if (_filterScope === "all") {
            payload = filterObject(payload);
          }
          if (typeof _groupingKeyCallback === "function") {
            Raygun.Utilities.log("Raygun4JS: calling custom grouping key");
            payload.Details.GroupingKey = _groupingKeyCallback(payload, stackTrace, options);
          }
          var clonedPayload = payload;
          if (typeof _beforeSendCallback === "function") {
            try {
              clonedPayload = !!window2.structuredClone ? window2.structuredClone(payload) : payload;
            } catch (e) {
              Raygun.Utilities.log('Unable to clone RUM payload data":', e);
            }
            var mutatedPayload = _beforeSendCallback(clonedPayload);
            if (mutatedPayload) {
              sendToRaygun(mutatedPayload);
            }
          } else {
            sendToRaygun(clonedPayload);
          }
        }
        function sendToRaygun(data) {
          if (!Raygun.Utilities.isApiKeyConfigured()) {
            return;
          }
          Raygun.Utilities.log("Sending exception data to Raygun:", data);
          var url = _raygunApiUrl + "/entries?apikey=" + encodeURIComponent(Raygun.Options._raygunApiKey);
          makePostCorsRequest(url, JSON.stringify(data));
        }
        function createCORSRequest(method, url) {
          var xhr = new window2.XMLHttpRequest();
          xhr.timeout = 1e4;
          if ("withCredentials" in xhr || Raygun.Utilities.isReactNative()) {
            xhr.open(method, url, true);
          }
          return xhr;
        }
        function makePostCorsRequest(url, data, _successCallback, _errorCallback) {
          var xhr = createCORSRequest("POST", url, data);
          if (typeof xhr.setRequestHeader === "function") {
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            if (typeof _clientIp !== "undefined") {
              xhr.setRequestHeader("X-Remote-Address", _clientIp);
            }
          }
          if (typeof _beforeXHRCallback === "function") {
            _beforeXHRCallback(xhr);
          }
          Raygun.Utilities.log("Is offline enabled? " + _enableOfflineSave);
          if ("withCredentials" in xhr || Raygun.Utilities.isReactNative()) {
            xhr.onreadystatechange = function() {
              if (xhr.readyState !== 4) {
                return;
              }
              if (xhr.status === 202) {
                sendSavedErrors();
              } else if (_enableOfflineSave && xhr.status !== 403 && xhr.status !== 400 && xhr.status !== 429) {
                offlineSave(url, data);
              }
            };
            xhr.onload = function() {
              Raygun.Utilities.log("posted to Raygun");
              callAfterSend(this);
              if (_successCallback && typeof _successCallback === "function") {
                _successCallback(xhr, url, data);
              }
            };
          }
          xhr.onerror = function() {
            Raygun.Utilities.log("failed to post to Raygun");
            callAfterSend(this);
            if (_errorCallback && typeof _errorCallback === "function") {
              _errorCallback(xhr, url, data);
            }
          };
          if (!xhr) {
            Raygun.Utilities.log("CORS not supported");
            return;
          }
          if (Raygun.Utilities.isReactNative()) {
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
          }
          xhr.send(data);
        }
        function saveToStorage(value) {
          if (Raygun.Utilities.localStorageAvailable()) {
            localStorage.setItem(_userKey, value);
          } else {
            Raygun.Utilities.createCookie(_userKey, value, 24 * 31, _setCookieAsSecure);
          }
        }
        function clearStorage() {
          if (Raygun.Utilities.localStorageAvailable()) {
            localStorage.removeItem(_userKey);
          } else {
            Raygun.Utilities.clearCookie(_userKey);
          }
        }
        function getFromStorage(callback) {
          var value;
          if (Raygun.Utilities.localStorageAvailable()) {
            value = localStorage.getItem(_userKey);
            if (value !== null) {
              callback(value);
              return;
            }
          }
          value = Raygun.Utilities.readCookie(_userKey);
          if (value !== null && Raygun.Utilities.localStorageAvailable()) {
            Raygun.Utilities.clearCookie(_userKey);
            localStorage.setItem(_userKey, value);
          }
          callback(value);
        }
        function shouldDiscardThirdPartyError(stackTrace, options) {
          if (Raygun.Utilities.isEmpty(stackTrace.stack)) {
            Raygun.Utilities.log("Raygun4JS: Cancelling send due to null stacktrace");
            return true;
          }
          if (Raygun.ErrorUtilities.isScriptError(stackTrace, options)) {
            Raygun.Utilities.log("Raygun4JS: cancelling send due to third-party script error with no stacktrace and message", {
              stackTrace,
              options
            });
            return true;
          }
          if (Raygun.ErrorUtilities.isBrowserExtensionError(stackTrace)) {
            Raygun.Utilities.log("Raygun4JS: cancelling send due to the error coming from a browser extension", stackTrace);
            return true;
          }
          if (!Raygun.ErrorUtilities.isValidStackTrace(stackTrace)) {
            Raygun.Utilities.log("Raygun4JS: cancelling send due to invalid stacktrace data", stackTrace);
            return true;
          }
          if (!Raygun.ErrorUtilities.stackTraceHasValidDomain(stackTrace, _whitelistedScriptDomains)) {
            Raygun.Utilities.log("Raygun4JS: cancelling send due to error on non-origin, non-whitelisted domain");
            return true;
          }
          return false;
        }
        if (!window2.__raygunNoConflict) {
          window2.Raygun = Raygun;
        }
        TraceKit.setRaygun(Raygun);
        return Raygun;
      };
      window.__instantiatedRaygun = raygunFactory(window, window.jQuery);
      (function() {
        if (typeof document === "undefined") {
          return;
        }
        var generateUniqueID = function generateUniqueID2() {
          return "v2-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
        };
        var initMetric = function initMetric2(name, value) {
          return {
            name,
            value: typeof value === "undefined" ? -1 : value,
            delta: 0,
            entries: [],
            id: generateUniqueID()
          };
        };
        var observe = function observe2(type, callback) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(type)) {
              if (type === "first-input" && !("PerformanceEventTiming" in self)) {
                return;
              }
              var po = new PerformanceObserver(function(l) {
                return l.getEntries().map(callback);
              });
              po.observe({
                type,
                buffered: true
              });
              return po;
            }
          } catch (e) {
          }
          return;
        };
        var onHidden = function onHidden2(cb, once) {
          var onHiddenOrPageHide = function onHiddenOrPageHide2(event) {
            if (event.type === "pagehide" || document.visibilityState === "hidden") {
              cb(event);
              if (once) {
                removeEventListener("visibilitychange", onHiddenOrPageHide2, true);
                removeEventListener("pagehide", onHiddenOrPageHide2, true);
              }
            }
          };
          addEventListener("visibilitychange", onHiddenOrPageHide, true);
          addEventListener("pagehide", onHiddenOrPageHide, true);
        };
        var onBFCacheRestore = function onBFCacheRestore2(cb) {
          addEventListener("pageshow", function(event) {
            if (event.persisted) {
              cb(event);
            }
          }, true);
        };
        var bindReporter = function bindReporter2(callback, metric, reportAllChanges) {
          var prevValue;
          return function(forceReport) {
            if (metric.value >= 0) {
              if (forceReport || reportAllChanges) {
                metric.delta = metric.value - (prevValue || 0);
                if (metric.delta || prevValue === void 0) {
                  prevValue = metric.value;
                  callback(metric);
                }
              }
            }
          };
        };
        var firstHiddenTime = -1;
        var initHiddenTime = function initHiddenTime2() {
          return document.visibilityState === "hidden" ? 0 : Infinity;
        };
        var trackChanges = function trackChanges2() {
          onHidden(function(_ref) {
            var timeStamp = _ref.timeStamp;
            firstHiddenTime = timeStamp;
          }, true);
        };
        var getVisibilityWatcher = function getVisibilityWatcher2() {
          if (firstHiddenTime < 0) {
            {
              firstHiddenTime = self.webVitals.firstHiddenTime;
              if (firstHiddenTime === Infinity) {
                trackChanges();
              }
            }
            onBFCacheRestore(function() {
              setTimeout(function() {
                firstHiddenTime = initHiddenTime();
                trackChanges();
              }, 0);
            });
          }
          return {
            get firstHiddenTime() {
              return firstHiddenTime;
            }
          };
        };
        var getFCP = function getFCP2(onReport, reportAllChanges) {
          var visibilityWatcher = getVisibilityWatcher();
          var metric = initMetric("FCP");
          var report;
          var entryHandler = function entryHandler2(entry) {
            if (entry.name === "first-contentful-paint") {
              if (po) {
                po.disconnect();
              }
              if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                metric.value = entry.startTime;
                metric.entries.push(entry);
                report(true);
              }
            }
          };
          var fcpEntry = performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0];
          var po = fcpEntry ? null : observe("paint", entryHandler);
          if (fcpEntry || po) {
            report = bindReporter(onReport, metric, reportAllChanges);
            if (fcpEntry) {
              entryHandler(fcpEntry);
            }
            onBFCacheRestore(function(event) {
              metric = initMetric("FCP");
              report = bindReporter(onReport, metric, reportAllChanges);
              requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                  metric.value = performance.now() - event.timeStamp;
                  report(true);
                });
              });
            });
          }
        };
        var isMonitoringFCP = false;
        var fcpValue = -1;
        var getCLS = function getCLS2(onReport, reportAllChanges) {
          if (!isMonitoringFCP) {
            getFCP(function(metric2) {
              fcpValue = metric2.value;
            });
            isMonitoringFCP = true;
          }
          var onReportWrapped = function onReportWrapped2(arg) {
            if (fcpValue > -1) {
              onReport(arg);
            }
          };
          var metric = initMetric("CLS", 0);
          var report;
          var sessionValue = 0;
          var sessionEntries = [];
          var entryHandler = function entryHandler2(entry) {
            if (!entry.hadRecentInput) {
              var firstSessionEntry = sessionEntries[0];
              var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
              if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
              } else {
                sessionValue = entry.value;
                sessionEntries = [entry];
              }
              if (sessionValue > metric.value) {
                metric.value = sessionValue;
                metric.entries = sessionEntries;
                report();
              }
            }
          };
          var po = observe("layout-shift", entryHandler);
          if (po) {
            report = bindReporter(onReportWrapped, metric, reportAllChanges);
            onHidden(function() {
              po.takeRecords().map(entryHandler);
              report(true);
            });
            onBFCacheRestore(function() {
              sessionValue = 0;
              fcpValue = -1;
              metric = initMetric("CLS", 0);
              report = bindReporter(onReportWrapped, metric, reportAllChanges);
            });
          }
        };
        var getFID = function getFID2(onReport, reportAllChanges) {
          var visibilityWatcher = getVisibilityWatcher();
          var metric = initMetric("FID");
          var report;
          var entryHandler = function entryHandler2(entry) {
            if (entry.startTime < visibilityWatcher.firstHiddenTime) {
              metric.value = entry.processingStart - entry.startTime;
              metric.entries.push(entry);
              report(true);
            }
          };
          var po = observe("first-input", entryHandler);
          report = bindReporter(onReport, metric, reportAllChanges);
          if (po) {
            onHidden(function() {
              po.takeRecords().map(entryHandler);
              po.disconnect();
            }, true);
          }
          {
            if (!po) {
              window.webVitals.firstInputPolyfill(entryHandler);
            }
            onBFCacheRestore(function() {
              metric = initMetric("FID");
              report = bindReporter(onReport, metric, reportAllChanges);
              window.webVitals.resetFirstInputPolyfill();
              window.webVitals.firstInputPolyfill(entryHandler);
            });
          }
        };
        var reportedMetricIDs = /* @__PURE__ */ new Set();
        var getLCP = function getLCP2(onReport, reportAllChanges) {
          var visibilityWatcher = getVisibilityWatcher();
          var metric = initMetric("LCP");
          var report;
          var entryHandler = function entryHandler2(entry) {
            var value = entry.startTime;
            if (value < visibilityWatcher.firstHiddenTime) {
              metric.value = value;
              metric.entries.push(entry);
            }
            report();
          };
          var po = observe("largest-contentful-paint", entryHandler);
          if (po) {
            report = bindReporter(onReport, metric, reportAllChanges);
            var stopListening = function stopListening2() {
              if (!reportedMetricIDs.has(metric.id)) {
                po.takeRecords().map(entryHandler);
                po.disconnect();
                reportedMetricIDs.add(metric.id);
                report(true);
              }
            };
            ["keydown", "click"].forEach(function(type) {
              addEventListener(type, stopListening, {
                once: true,
                capture: true
              });
            });
            onHidden(stopListening, true);
            onBFCacheRestore(function(event) {
              metric = initMetric("LCP");
              report = bindReporter(onReport, metric, reportAllChanges);
              requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                  metric.value = performance.now() - event.timeStamp;
                  reportedMetricIDs.add(metric.id);
                  report(true);
                });
              });
            });
          }
        };
        var afterLoad = function afterLoad2(callback) {
          if (document.readyState === "complete") {
            setTimeout(callback, 0);
          } else {
            addEventListener("pageshow", callback);
          }
        };
        var getNavigationEntryFromPerformanceTiming = function getNavigationEntryFromPerformanceTiming2() {
          var timing = performance.timing;
          var navigationEntry = {
            entryType: "navigation",
            startTime: 0
          };
          for (var key in timing) {
            if (key !== "navigationStart" && key !== "toJSON") {
              navigationEntry[key] = Math.max(timing[key] - timing.navigationStart, 0);
            }
          }
          return navigationEntry;
        };
        var getTTFB = function getTTFB2(onReport) {
          var metric = initMetric("TTFB");
          afterLoad(function() {
            try {
              var navTiming = performance.getEntriesByType("navigation");
              var navigationEntry = !!navTiming ? navTiming[0] : getNavigationEntryFromPerformanceTiming();
              metric.value = metric.delta = navigationEntry.responseStart;
              if (metric.value < 0) return;
              metric.entries = [navigationEntry];
              onReport(metric);
            } catch (error) {
            }
          });
        };
        window.webVitals.getCLS = getCLS;
        window.webVitals.getFCP = getFCP;
        window.webVitals.getFID = getFID;
        window.webVitals.getLCP = getLCP;
        window.webVitals.getTTFB = getTTFB;
      })();
      var raygunRumFactory = function(window2, $, Raygun) {
        Raygun.RealUserMonitoring = function(apiKey, apiUrl, makePostCorsRequest, user, version, tags, excludedHostNames, excludedUserAgents, debugMode, maxVirtualPageDuration, ignoreUrlCasing, customTimingsEnabled, beforeSendRumCallback, setCookieAsSecure, captureMissingRequests, automaticPerformanceCustomTimings, trackCoreWebVitals, trackViewportDimensions) {
          var self2 = this;
          var _private = {};
          this.cookieName = "raygun4js-sid";
          this.apiKey = apiKey;
          this.apiUrl = apiUrl;
          this.debugMode = debugMode;
          this.excludedHostNames = excludedHostNames;
          this.excludedUserAgents = excludedUserAgents;
          this.maxVirtualPageDuration = maxVirtualPageDuration || 18e5;
          this.ignoreUrlCasing = ignoreUrlCasing;
          this.customTimingsEnabled = customTimingsEnabled;
          this.automaticPerformanceCustomTimings = automaticPerformanceCustomTimings;
          this.trackCoreWebVitals = trackCoreWebVitals;
          this.beforeSend = beforeSendRumCallback || function(payload) {
            return payload;
          };
          this.pendingPayloadData = customTimingsEnabled || false;
          this.queuedPerformanceTimings = [];
          this.pendingVirtualPage = null;
          this.sessionId = null;
          this.virtualPage = null;
          this.user = user;
          this.version = version;
          this.tags = tags;
          this.heartBeatInterval = null;
          this.heartBeatIntervalTime = 3e4;
          this.offset = 0;
          this._captureMissingRequests = captureMissingRequests || false;
          this.sendUsingNavigatorBeacon = false;
          this.stopCollectingMetrics = false;
          this.queuedItems = [];
          this.maxQueueItemsSent = 50;
          this.setCookieAsSecure = setCookieAsSecure;
          this.xhrRequestMap = {};
          this.xhrStatusMap = {};
          var Timings = {
            Page: "p",
            VirtualPage: "v",
            XHR: "x",
            CachedChildAsset: "e",
            ChildAsset: "c",
            CustomTiming: "t",
            CoreWebVital: "w"
          };
          this.Utilities = {};
          this.attach = function() {
            getSessionId(function(isNewSession) {
              self2.pageLoaded(isNewSession);
            });
            if (this.trackCoreWebVitals) {
              Raygun.CoreWebVitals.attach(sendCoreWebVitalTimings, self2.parentResource);
            }
            var clickHandler = function() {
              this.updateStorageTimestamp();
            }.bind(_private);
            var unloadHandler = function() {
              self2.sendUsingNavigatorBeacon = true;
              sendChildAssets(true);
              sendQueuedItems();
            }.bind(_private);
            var visibilityChangeHandler = function() {
              if (document.visibilityState === "visible") {
                this.updateStorageTimestamp();
              }
            }.bind(_private);
            var pageHideHandler = function() {
              self2.sendUsingNavigatorBeacon = true;
              sendChildAssets(true);
              sendQueuedItems();
              self2.stopCollectingMetrics = true;
            }.bind(_private);
            if (window2.addEventListener) {
              window2.addEventListener("click", clickHandler);
              document.addEventListener("visibilitychange", visibilityChangeHandler);
              window2.addEventListener("beforeunload", unloadHandler);
              window2.addEventListener("pagehide", pageHideHandler);
            } else if (window2.attachEvent) {
              document.attachEvent("onclick", clickHandler);
            }
            Raygun.NetworkTracking.on("request", xhrRequestHandler.bind(this));
            Raygun.NetworkTracking.on("error", xhrErrorHandler.bind(this));
            Raygun.NetworkTracking.on("response", xhrResponseHandler.bind(this));
          };
          this.pageLoaded = function(isNewSession) {
            if (isNewSession) {
              sendNewSessionStart();
            }
            var url = getPageUrl(window2.location.pathname);
            var parentResource = createParentResource(url, Timings.Page);
            self2.parentResource = parentResource;
            sendPerformance(true, parentResource);
            heartBeat();
            self2.initalStaticPageLoadTimestamp = getPerformanceNow(0);
          };
          this.virtualPageLoaded = function(path) {
            if (typeof path === "string") {
              if (path.length > 0 && path[0] !== "/") {
                path = path + "/";
              }
              if (path.length > 800) {
                path = path.substring(0, 800);
              }
              this.virtualPage = path;
            }
            var url = getPageUrl(path);
            var parentResource = createParentResource(url, Timings.VirtualPage);
            self2.parentResource = parentResource;
            resumeCollectingMetrics();
            processVirtualPageTimingsInQueue();
            sendPerformance(false, parentResource);
          };
          this.setUser = function(user2) {
            self2.user = user2;
          };
          this.withTags = function(tags2) {
            self2.tags = tags2;
          };
          this.endSession = function() {
            self2.pendingPayloadData = false;
            sendQueuedPerformancePayloads();
            sendItemImmediately(addViewportToSessionData({
              sessionId: self2.sessionId,
              requestId: self2.requestId,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              type: "session_end"
            }));
            generateNewSessionId();
            sendNewSessionStart();
          };
          this.sendCustomTimings = function(customTimings, parentResource) {
            if (typeof customTimings === "object" && (typeof customTimings.custom1 === "number" || typeof customTimings.custom2 === "number" || typeof customTimings.custom3 === "number" || typeof customTimings.custom4 === "number" || typeof customTimings.custom5 === "number" || typeof customTimings.custom6 === "number" || typeof customTimings.custom7 === "number" || typeof customTimings.custom8 === "number" || typeof customTimings.custom9 === "number" || typeof customTimings.custom10 === "number")) {
              if (self2.pendingPayloadData && self2.queuedPerformanceTimings.length > 0) {
                self2.pendingPayloadData = false;
                self2.queuedPerformanceTimings[0].customTiming = customTimings;
                self2.queuedPerformanceTimings[0].parentResource = parentResource;
                sendQueuedPerformancePayloads();
              }
            }
          };
          this.trackCustomTiming = function(name, duration, offset, parentResource) {
            if (typeof duration === "number") {
              var newTimings = [];
              var customTiming = createCustomTimingMeasurement(name, duration, offset);
              newTimings.push(attachParentResource(customTiming, parentResource));
              addPerformanceTimingsToQueue(newTimings, false);
            } else {
              log('Raygun4JS: Custom timing "' + name + '" duration value is not a number');
            }
          };
          this.captureMissingRequests = function(val) {
            this._captureMissingRequests = val;
          };
          function heartBeat() {
            if (self2.heartBeatInterval !== null) {
              log("Raygun4JS: Heartbeat already exists. Skipping heartbeat creation.");
              return;
            }
            self2.heartBeatInterval = setInterval(function() {
              sendChildAssets();
              sendQueuedItems();
              self2.xhrStatusMap = {};
            }, self2.heartBeatIntervalTime);
          }
          function sendNewSessionStart() {
            sendItemImmediately(addViewportToSessionData({
              sessionId: self2.sessionId,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              type: "session_start",
              user: self2.user,
              version: self2.version || "Not supplied",
              tags: self2.tags,
              device: window2.raygunUserAgent,
              client: {
                //This is incomplete, it does not add the client data to every payload that is sent
                name: "raygun4js",
                version: "2.28.0"
              }
            }));
          }
          function hasSessionExpired(storageItem) {
            var existingTimestamp = new Date(readStorageElement(storageItem, "timestamp"));
            var halfHrAgo = new Date(/* @__PURE__ */ new Date() - 30 * 6e4);
            return existingTimestamp < halfHrAgo;
          }
          function getSessionId(callback) {
            var storageItem = getFromStorage();
            var nullValue = storageItem === null;
            var expired = false;
            if (!nullValue) {
              expired = hasSessionExpired(storageItem);
            }
            if (nullValue || expired) {
              generateNewSessionId();
              callback(true);
            } else {
              var id = readStorageElement(storageItem, "id");
              saveToStorage(id);
              self2.sessionId = id;
              callback(false);
            }
          }
          function updateStorageTimestamp() {
            var storageItem = getFromStorage();
            var expired = false;
            if (storageItem) {
              expired = hasSessionExpired(storageItem);
            }
            if (expired || !storageItem) {
              self2.sessionId = randomKey(32);
            }
            saveToStorage(self2.sessionId);
            if (expired) {
              sendNewSessionStart();
            }
          }
          function generateNewSessionId() {
            self2.sessionId = randomKey(32);
            saveToStorage(self2.sessionId);
          }
          function sendPerformance(firstLoad, parentResource) {
            var performanceData = getPerformanceData(self2.virtualPage, firstLoad, parentResource);
            if (performanceData === null || performanceData.length < 0) {
              return;
            }
            addPerformanceTimingsToQueue(performanceData, false);
          }
          function sendChildAssets(forceSend) {
            if (forceSend) {
              processVirtualPageTimingsInQueue();
            }
            var data = [];
            extractChildData(data, void 0, forceSend);
            addPerformanceTimingsToQueue(data, forceSend);
          }
          function sendQueuedItems() {
            if (self2.queuedItems.length > 0) {
              self2.queuedItems = sortCollectionByProperty(self2.queuedItems, "timestamp");
              var itemsToSend = self2.queuedItems.splice(0, self2.maxQueueItemsSent);
              sendItemsImmediately(itemsToSend);
            }
          }
          function processVirtualPageTimingsInQueue() {
            var i = 0, data;
            for (i; i < self2.queuedPerformanceTimings.length; i++) {
              data = self2.queuedPerformanceTimings[i];
              if (data.timing.t === Timings.VirtualPage && data.timing.pending) {
                data.timing = generateVirtualEncodedTimingData(data.timing);
              }
            }
          }
          function sendItemImmediately(item) {
            var itemsToSend = [item];
            sendItemsImmediately(itemsToSend);
          }
          function sendItemsImmediately(itemsToSend) {
            var payload = {
              eventData: itemsToSend
            };
            var successCallback = function() {
              log("Raygun4JS: Items sent successfully. Queue length: " + self2.queuedItems.length);
            };
            var errorCallback = function(response) {
              requeueItemsToFront(itemsToSend);
              log("Raygun4JS: Items failed to send. Queue length: " + self2.queuedItems.length + " Response status code: " + response.status);
            };
            postPayload(payload, successCallback, errorCallback);
          }
          function sendQueuedPerformancePayloads(forceSend) {
            if (self2.pendingPayloadData && !forceSend) {
              return;
            }
            var currentPayloadTimingData = [];
            var payloadTimings = [];
            var payloadIncludesPageTiming = false;
            var data, i;
            var addCurrentPayloadEvents = function() {
              payloadTimings.push(createTimingPayload(currentPayloadTimingData));
              currentPayloadTimingData = [];
              payloadIncludesPageTiming = false;
            };
            var sendTimingData = function() {
              if (currentPayloadTimingData.length > 0) {
                addCurrentPayloadEvents();
              }
              if (payloadTimings.length > 0) {
                sendItemsImmediately(payloadTimings);
                currentPayloadTimingData = [];
                payloadIncludesPageTiming = false;
              }
            };
            for (i = 0; i < self2.queuedPerformanceTimings.length; i++) {
              data = self2.queuedPerformanceTimings[i];
              var isPageOrVirtualPage = data.timing.t === Timings.Page || data.timing.t === Timings.VirtualPage;
              if (payloadIncludesPageTiming && isPageOrVirtualPage) {
                addCurrentPayloadEvents();
              }
              if (currentPayloadTimingData.length > 0 && isPageOrVirtualPage) {
                addCurrentPayloadEvents();
              }
              if (isPageOrVirtualPage) {
                createRequestId();
              }
              if (data.timing.t === Timings.VirtualPage && data.timing.pending) {
                sendTimingData();
                self2.queuedPerformanceTimings.splice(0, i);
                return;
              }
              currentPayloadTimingData.push(data);
              payloadIncludesPageTiming = payloadIncludesPageTiming || data.timing.t === Timings.Page || data.timing.t === Timings.VirtualPage;
            }
            sendTimingData();
            self2.queuedPerformanceTimings = [];
          }
          function requeueItemsToFront(itemsToSend) {
            self2.queuedItems = itemsToSend.concat(self2.queuedItems);
          }
          function addPerformanceTimingsToQueue(performanceData, forceSend) {
            if (self2.stopCollectingMetrics === false) {
              self2.queuedPerformanceTimings = self2.queuedPerformanceTimings.concat(performanceData);
              sendQueuedPerformancePayloads(forceSend);
            }
          }
          function sendCoreWebVitalTimings(performanceData) {
            sendItemImmediately(createTimingPayload([performanceData]));
          }
          function getPerformanceData(virtualPage, firstLoad, parentResource) {
            if (!performanceEntryExists("timing", "object") || window2.performance.timing.fetchStart === void 0 || isNaN(window2.performance.timing.fetchStart)) {
              return null;
            }
            var data = [];
            if (firstLoad) {
              data.push(getPrimaryTimingData());
            }
            extractChildData(data);
            if (virtualPage) {
              data.push(getVirtualPrimaryTimingData(virtualPage, getPerformanceNow(0)));
              extractChildData(data, true);
            }
            data = attachParentResourceToCollection(data, parentResource);
            return data;
          }
          function extractChildData(collection, parentIsVirtualPage, forceSend) {
            if (!performanceEntryExists("getEntries", "function")) {
              return;
            }
            try {
              var offset = 0;
              var navigationEntries = window2.performance.getEntriesByType("navigation");
              if (parentIsVirtualPage || navigationEntries && navigationEntries.length > 0) {
                offset = 0;
              } else {
                offset = window2.performance.timing.navigationStart;
              }
              var i;
              var resources = window2.performance.getEntries();
              for (i = self2.offset; i < resources.length; i++) {
                var resource = resources[i];
                if (!forceSend && waitingForResourceToFinishLoading(resource)) {
                  break;
                } else if (isCustomTimingMeasurement(resource)) {
                  if (self2.automaticPerformanceCustomTimings) {
                    var customTiming = getCustomTimingMeasurement(resource);
                    collection.push(attachParentResource(customTiming, self2.parentResource));
                  }
                } else if (!shouldIgnoreResource(resource)) {
                  collection.push(getSecondaryTimingData(resource, offset));
                }
              }
              self2.offset = i;
              if (self2._captureMissingRequests) {
                addMissingWrtData(collection, offset);
              }
            } catch (e) {
              log(e);
            }
          }
          var addMissingWrtData = function(collection, offset) {
            log("checking for missing WRT data", this.xhrStatusMap);
            for (var url in this.xhrStatusMap) {
              if (this.xhrStatusMap.hasOwnProperty(url)) {
                var responses = this.xhrStatusMap[url];
                if (responses && responses.length > 0) {
                  do {
                    var response = responses.shift();
                    log("checking response", response);
                    if (!shouldIgnoreResourceByName(response.baseUrl)) {
                      log("adding missing WRT data for url");
                      var payload = {
                        url: response.baseUrl,
                        statusCode: response.status,
                        timing: {
                          du: maxFiveMinutes(response.duration || 0).toFixed(2),
                          //These are hacks to stop a potential situation where duration and/or offset are NaN, this is not a feature and needs to be fixed
                          a: (offset || 0).toFixed(2),
                          t: Timings.XHR
                        }
                      };
                      collection.push(attachParentResource(payload, response.parentResource));
                    }
                  } while (responses.length > 0);
                }
                delete this.xhrStatusMap[url];
              }
            }
          }.bind(this);
          function getPrimaryTimingData() {
            var pathName = window2.location.pathname;
            if (self2.ignoreUrlCasing) {
              pathName = pathName.toLowerCase();
            }
            var url = window2.location.protocol + "//" + window2.location.host + pathName;
            if (url.length > 800) {
              url = url.substring(0, 800);
            }
            return {
              url,
              userAgent: window2.raygunUserAgent,
              timing: getEncodedTimingData(),
              size: 0
            };
          }
          function getVirtualPrimaryTimingData(virtualPage, virtualPageStartTime) {
            if (self2.ignoreUrlCasing) {
              virtualPage = virtualPage.toLowerCase();
            }
            if (virtualPage.indexOf("?") !== -1) {
              virtualPage = virtualPage.split("?")[0];
            }
            var url = window2.location.protocol + "//" + window2.location.host + virtualPage;
            if (url.length > 800) {
              url = url.substring(0, 800);
            }
            return {
              url,
              userAgent: window2.raygunUserAgent,
              timing: prepareVirtualEncodedTimingData(virtualPageStartTime),
              size: 0
            };
          }
          var getTimingUrl = function(timing) {
            var url = timing.name.split("?")[0];
            if (self2.ignoreUrlCasing) {
              url = url.toLowerCase();
            }
            if (url.length > 800) {
              url = url.substring(0, 800);
            }
            return url;
          }.bind(this);
          var waitingForResourceToFinishLoading = function(timing) {
            var url = getTimingUrl(timing);
            var request = this.xhrRequestMap[url];
            return request && request.length > 0;
          }.bind(this);
          var getSecondaryTimingData = function(timing, offset) {
            var url = getTimingUrl(timing);
            var timingData = {
              url,
              timing: getSecondaryEncodedTimingData(timing, offset),
              size: timing.decodedBodySize || 0,
              parentResource: self2.parentResource
            };
            log("retrieving secondary timing data for", timing.name);
            var xhrStatusesForName = this.xhrStatusMap[url];
            if (xhrStatusesForName && xhrStatusesForName.length > 0) {
              var request = this.xhrStatusMap[url].shift();
              timingData.statusCode = request.status;
              timingData.parentResource = request.parentResource;
              log("found status for timing", timingData.statusCode);
              if (this.xhrStatusMap[url].length === 0) {
                delete this.xhrStatusMap[url];
              }
            } else {
              log("no status found for timing", this.xhrStatusMap);
            }
            return timingData;
          }.bind(this);
          function getEncodedTimingData() {
            var performanceNavigationTiming = window2.performance.getEntriesByType("navigation")[0];
            var timing = performanceNavigationTiming || window2.performance.timing;
            var data = {
              du: getTimingDuration(timing),
              t: Timings.Page
            };
            data.a = timing.fetchStart || 0;
            if (timing.domainLookupStart && timing.domainLookupStart > 0) {
              data.b = timing.domainLookupStart - data.a;
            }
            if (timing.domainLookupEnd && timing.domainLookupEnd > 0) {
              data.c = timing.domainLookupEnd - data.a;
            }
            if (timing.connectStart && timing.connectStart > 0) {
              data.d = timing.connectStart - data.a;
            }
            if (timing.connectEnd && timing.connectEnd > 0) {
              data.e = timing.connectEnd - data.a;
            }
            if (timing.responseStart && timing.responseStart > 0) {
              data.f = timing.responseStart - data.a;
            }
            if (timing.responseEnd && timing.responseEnd > 0) {
              data.g = timing.responseEnd - data.a;
            }
            if (timing.domLoading && timing.domLoading > 0) {
              data.h = timing.domLoading - data.a;
            }
            if (timing.domInteractive && timing.domInteractive > 0) {
              data.i = timing.domInteractive - data.a;
            }
            if (timing.domContentLoadedEventEnd && timing.domContentLoadedEventEnd > 0) {
              data.j = timing.domContentLoadedEventEnd - data.a;
            }
            if (timing.domComplete && timing.domComplete > 0) {
              data.k = maxFiveMinutes(timing.domComplete - data.a);
            }
            if (timing.loadEventStart && timing.loadEventStart > 0) {
              data.l = timing.loadEventStart - data.a;
            }
            if (timing.loadEventEnd && timing.loadEventEnd > 0) {
              data.m = timing.loadEventEnd - data.a;
            }
            if (timing.secureConnectionStart && timing.secureConnectionStart > 0) {
              data.n = timing.secureConnectionStart - timing.connectStart - data.a;
            }
            data = sanitizeNaNs(data);
            data = addPaintTimings(data);
            return data;
          }
          function addPaintTimings(data) {
            if (!performanceEntryExists("getEntriesByName", "function")) {
              return data;
            }
            var firstPaint = window2.performance.getEntriesByName("first-paint");
            if (firstPaint.length > 0 && firstPaint[0].startTime > 0) {
              data.fp = firstPaint[0].startTime.toFixed(2);
            } else if (window2.performance.timing && !!window2.performance.timing.msFirstPaint) {
              data.fp = (window2.performance.timing.msFirstPaint - window2.performance.timing.fetchStart).toFixed(2);
            }
            var firstContentfulPaint = window2.performance.getEntriesByName("first-contentful-paint");
            if (firstContentfulPaint.length > 0 && firstContentfulPaint[0].startTime > 0) {
              data.fcp = firstContentfulPaint[0].startTime.toFixed(2);
            }
            return data;
          }
          function getSecondaryEncodedTimingData(timing, offset) {
            var data = {
              du: maxFiveMinutes(getTimingDuration(timing)).toFixed(2),
              t: getSecondaryTimingType(timing),
              a: (offset || 0) + (timing.fetchStart || timing.startTime || 0)
            };
            if (timing.domainLookupStart && timing.domainLookupStart > 0) {
              data.b = offset + timing.domainLookupStart - data.a;
            }
            if (timing.domainLookupEnd && timing.domainLookupEnd > 0) {
              data.c = offset + timing.domainLookupEnd - data.a;
            }
            if (timing.connectStart && timing.connectStart > 0) {
              data.d = offset + timing.connectStart - data.a;
            }
            if (timing.connectEnd && timing.connectEnd > 0) {
              data.e = offset + timing.connectEnd - data.a;
            }
            if (timing.responseStart && timing.responseStart > 0) {
              data.f = offset + timing.responseStart - data.a;
            }
            if (timing.responseEnd && timing.responseEnd > 0) {
              data.g = offset + timing.responseEnd - data.a;
            }
            if (timing.secureConnectionStart && timing.secureConnectionStart > 0) {
              data.n = offset + (timing.secureConnectionStart - timing.connectStart) - data.a;
            }
            data.a = data.a.toFixed(2);
            data = sanitizeNaNs(data);
            return data;
          }
          function generateVirtualEncodedTimingData(timingData) {
            var now = getPerformanceNow(0);
            return {
              t: timingData.t,
              du: Math.min(self2.maxVirtualPageDuration, now - timingData.startTime),
              o: Math.min(self2.maxVirtualPageDuration, now - timingData.staticLoad)
            };
          }
          function prepareVirtualEncodedTimingData(virtualPageStartTime) {
            return {
              t: Timings.VirtualPage,
              startTime: virtualPageStartTime,
              staticLoad: self2.initalStaticPageLoadTimestamp,
              pending: true
            };
          }
          function postPayload(payload, _successCallback, _errorCallback) {
            if (typeof _successCallback !== "function") {
              _successCallback = function() {
              };
            }
            if (typeof _errorCallback !== "function") {
              _errorCallback = function() {
              };
            }
            makePostCorsRequestRum(self2.apiUrl + "/events?apikey=" + encodeURIComponent(self2.apiKey), payload, _successCallback, _errorCallback);
          }
          function makePostCorsRequestRum(url, data, successCallback, errorCallback) {
            if (self2.excludedUserAgents instanceof Array) {
              for (var userAgentIndex in self2.excludedUserAgents) {
                if (self2.excludedUserAgents.hasOwnProperty(userAgentIndex)) {
                  if (window2.raygunUserAgent.match(self2.excludedUserAgents[userAgentIndex])) {
                    log("Raygun4JS: cancelling send as error originates from an excluded user agent");
                    return;
                  }
                }
              }
            }
            if (self2.excludedHostNames instanceof Array) {
              for (var hostIndex in self2.excludedHostNames) {
                if (self2.excludedHostNames.hasOwnProperty(hostIndex)) {
                  if (window2.location.hostname && window2.location.hostname.match(self2.excludedHostNames[hostIndex])) {
                    log("Raygun4JS: cancelling send as error originates from an excluded hostname");
                    return;
                  }
                }
              }
            }
            if (window2.raygunUserAgent.match("RaygunPulseInsightsCrawler")) {
              return;
            }
            setTimeout(function() {
              updateUserAgentData(data);
              var clonedData = data;
              try {
                clonedData = !!window2.structuredClone ? window2.structuredClone(data) : data;
              } catch (e) {
                Raygun.Utilities.log('Unable to clone CR payload data":', e);
              }
              var payload = self2.beforeSend(clonedData);
              if (!payload) {
                log("Raygun4JS: cancelling send because onBeforeSendRUM returned falsy value");
                return;
              }
              if (!!payload.eventData) {
                for (var i = 0; i < payload.eventData.length; i++) {
                  if (!!payload.eventData[i].data && typeof payload.eventData[i].data !== "string") {
                    payload.eventData[i].data = JSON.stringify(payload.eventData[i].data);
                  }
                }
              }
              var stringifiedPayload = JSON.stringify(payload);
              if (self2.sendUsingNavigatorBeacon && navigator.sendBeacon) {
                try {
                  navigator.sendBeacon(url, stringifiedPayload);
                } catch (e) {
                  log(e, {
                    url,
                    payload: stringifiedPayload
                  });
                }
                return;
              }
              makePostCorsRequest(url, stringifiedPayload, successCallback, errorCallback);
            }, window2.raygunUserAgentDataStatus === 1 ? 200 : 0);
          }
          function updateUserAgentData(payload) {
            if (!payload.eventData) {
              return;
            }
            for (var i = 0; i < payload.eventData.length; i++) {
              if (!!payload.eventData[i].data && Array.isArray(payload.eventData[i].data)) {
                for (var k = 0; k < payload.eventData[i].data.length; k++) {
                  var dataFragment = payload.eventData[i].data[k];
                  if (dataFragment.device && !!window2.raygunUserAgentData && !!window2.raygunUserAgentData.platformVersion) {
                    var platformVersion = (window2.raygunUserAgentData.platformVersion || "").split(".");
                    dataFragment.device = {
                      Family: window2.raygunUserAgentData.platform,
                      Major: platformVersion[0] || "",
                      Minor: platformVersion[1] || "",
                      Patch: platformVersion[2] || "",
                      PatchMinor: platformVersion[3] || ""
                    };
                  }
                }
              }
            }
          }
          function getPageUrl(pathname, shouldIgnoreCasing) {
            var _pathname = pathname;
            if (shouldIgnoreCasing) {
              _pathname = _pathname.toLowerCase();
            }
            var url = window2.location.protocol + "//" + window2.location.host + _pathname;
            if (url.length > 800) {
              url = url.substring(0, 800);
            }
            return url;
          }
          function createParentResource(url, type) {
            return {
              url,
              type
            };
          }
          function attachParentResource(obj, parentResource) {
            if (parentResource) {
              return Raygun.Utilities.merge({
                parentResource
              }, obj);
            }
            return obj;
          }
          function attachParentResourceToCollection(array, parentResource) {
            var _array = [];
            for (var i = 0; i < array.length; i++) {
              var item = array[i];
              _array.push(attachParentResource(item, parentResource));
            }
            return _array;
          }
          function getTimingDuration(timing) {
            return timing.duration || timing.responseEnd - timing.startTime || 0;
          }
          this.Utilities["getTimingDuration"] = getTimingDuration;
          function resumeCollectingMetrics() {
            if (self2.stopCollectingMetrics) {
              self2.offset = window2.performance.getEntries().length;
              self2.stopCollectingMetrics = false;
            }
          }
          function isCustomTimingMeasurement(resource) {
            return !!(resource && resource.entryType === "measure");
          }
          this.Utilities["isCustomTimingMeasurement"] = isCustomTimingMeasurement;
          function getCustomTimingMeasurement(resource) {
            return createCustomTimingMeasurement(resource.name, resource.duration, resource.startTime);
          }
          this.Utilities["getCustomTimingMeasurement"] = getCustomTimingMeasurement;
          function createCustomTimingMeasurement(name, duration, offset) {
            return {
              url: name,
              timing: {
                t: Timings.CustomTiming,
                du: duration.toFixed(2),
                a: (offset || 0).toFixed(2)
              }
            };
          }
          this.Utilities["createCustomTimingMeasurement"] = createCustomTimingMeasurement;
          function xhrRequestHandler(request) {
            if (!this.xhrRequestMap[request.baseUrl]) {
              this.xhrRequestMap[request.baseUrl] = [];
            }
            log("adding request to xhr request map", request);
            var requestWithParent = attachParentResource(request, self2.parentResource);
            this.xhrRequestMap[request.baseUrl].push(requestWithParent);
          }
          function xhrErrorHandler(response) {
            var request = this.xhrRequestMap[response.baseUrl];
            if (request && request.length > 0) {
              this.xhrRequestMap[response.baseUrl].shift();
              log("request encountered an error", response);
            }
          }
          function xhrResponseHandler(response) {
            var requests = this.xhrRequestMap[response.baseUrl];
            if (requests && requests.length > 0) {
              var parentResource = requests[0].parentResource;
              this.xhrRequestMap[response.baseUrl].shift();
              if (this.xhrRequestMap[response.baseUrl].length === 0) {
                delete this.xhrRequestMap[response.baseUrl];
              }
              if (!this.xhrStatusMap[response.baseUrl]) {
                this.xhrStatusMap[response.baseUrl] = [];
              }
              log("adding response to xhr status map", response);
              var responseWithParent = attachParentResource(response, parentResource);
              this.xhrStatusMap[response.baseUrl].push(responseWithParent);
            } else {
              log("response fired from non-handled request");
            }
          }
          function shouldIgnoreResource(resource) {
            var name = resource.name.split("?")[0];
            return shouldIgnoreResourceByName(name) || resource.entryType === "paint" || resource.entryType === "mark" || resource.entryType === "navigation" || resource.entryType === "visibility-state";
          }
          function shouldIgnoreResourceByName(name) {
            if (name.indexOf(self2.apiUrl) === 0) {
              return true;
            }
            if (name.indexOf("favicon.ico") > 0) {
              return true;
            }
            if (name.indexOf("about:blank") === 0) {
              return true;
            }
            if (name[0] === "j" && name.indexOf("avascript:") === 1) {
              return true;
            }
            if (name.indexOf("chrome-extension://") === 0) {
              return true;
            }
            if (name.indexOf("res://") === 0) {
              return true;
            }
            if (name.indexOf("file://") === 0) {
              return true;
            }
            return false;
          }
          function sanitizeNaNs(data) {
            for (var i in data) {
              if (data[i] === "NaN" || Number.isNaN(data[i])) {
                data[i] = 0;
              }
            }
            return data;
          }
          function randomKey(length) {
            return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1);
          }
          function performanceEntryExists(entry, entryType) {
            return typeof window2.performance === "object" && (!entry || entry && typeof window2.performance[entry] === entryType);
          }
          function getPerformanceNow(fallbackValue) {
            if (performanceEntryExists("now", "function")) {
              return window2.performance.now();
            } else {
              return fallbackValue;
            }
          }
          function maxFiveMinutes(milliseconds) {
            return Math.min(milliseconds, 3e5);
          }
          function log(message, data) {
            if (self2.debugMode && window2.console && window2.console.log) {
              if (data) {
                window2.console.log(message, data);
              } else {
                window2.console.log(message);
              }
            }
          }
          function createTimingPayload(data) {
            return addViewportToSessionData({
              sessionId: self2.sessionId,
              requestId: self2.requestId,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              type: "web_request_timing",
              user: self2.user,
              version: self2.version || "Not supplied",
              device: window2.raygunUserAgent,
              client: {
                //This is incomplete, it does not add the client data to every payload that is sent
                name: "raygun4js",
                version: "2.28.0"
              },
              tags: self2.tags,
              data
            });
          }
          function createRequestId() {
            self2.requestId = randomKey(16);
          }
          function saveToStorage(value) {
            var lastActivityTimestamp = (/* @__PURE__ */ new Date()).toISOString();
            var updatedValue = "id|" + value + "&timestamp|" + lastActivityTimestamp;
            if (Raygun.Utilities.localStorageAvailable()) {
              localStorage.setItem(self2.cookieName, updatedValue);
            } else {
              Raygun.Utilities.createCookie(self2.cookieName, updatedValue, null, self2.setCookieAsSecure);
            }
          }
          function getFromStorage() {
            var value;
            if (Raygun.Utilities.localStorageAvailable()) {
              value = localStorage.getItem(self2.cookieName);
              if (value !== null) {
                return value;
              }
            }
            if (Raygun.Utilities.sessionStorageAvailable()) {
              value = sessionStorage.getItem(self2.cookieName);
              if (value !== null) {
                saveToStorage(value);
                return value;
              }
            }
            value = Raygun.Utilities.readCookie(self2.cookieName);
            if (value !== null && Raygun.Utilities.localStorageAvailable()) {
              Raygun.Utilities.clearCookie(self2.cookieName);
              localStorage.setItem(self2.cookieName, value);
            }
            return value;
          }
          function readStorageElement(cookieString, element) {
            var set = cookieString.split(/[|&]/);
            if (element === "id") {
              return set[1];
            } else if (element === "timestamp") {
              return set[3];
            }
          }
          function getSecondaryTimingType(timing) {
            if (isXHRTiming(timing.initiatorType)) {
              return Timings.XHR;
            } else if (isChildAsset(timing)) {
              return getTypeForChildAsset(timing);
            } else if (isChromeFetchCall(timing)) {
              return Timings.XHR;
            } else {
              return getTypeForChildAsset(timing);
            }
          }
          function isXHRTiming(initiatorType) {
            return initiatorType === "xmlhttprequest" || initiatorType === "fetch" || initiatorType === "preflight" || // 'preflight' initiatorType used by Edge for CORS POST/DELETE requests
            initiatorType === "beacon";
          }
          function isChromeFetchCall(timing) {
            return typeof timing.initiatorType === "string" && timing.initiatorType === "";
          }
          function isChildAsset(timing) {
            switch (timing.initiatorType) {
              case "img":
              case "css":
              case "script":
              case "link":
              case "other":
              case "use":
                return true;
            }
            return false;
          }
          function getTypeForChildAsset(timing) {
            if (timing.duration === 0) {
              return Timings.CachedChildAsset;
            } else {
              return Timings.ChildAsset;
            }
          }
          function getCompareFunction(property) {
            return function(a, b) {
              if (!a.hasOwnProperty(property) || !b.hasOwnProperty(property)) {
                log('Raygun4JS: Property "' + property + '" not found in items in this collection');
                return 0;
              }
              var propA = a[property];
              var propB = b[property];
              var comparison = 0;
              if (propA > propB) {
                comparison = 1;
              } else if (propA < propB) {
                comparison = -1;
              }
              return comparison;
            };
          }
          function sortCollectionByProperty(collection, property) {
            return collection.sort(getCompareFunction(property));
          }
          function addViewportToSessionData(sessionData) {
            if (trackViewportDimensions && !sessionData.hasOwnProperty("viewport")) {
              sessionData.viewport = Raygun.Viewport.getViewportDimensions();
            }
            return sessionData;
          }
          _private.updateStorageTimestamp = updateStorageTimestamp;
        };
      };
      raygunRumFactory(window, window.jQuery, window.__instantiatedRaygun);
      (function(window2, Raygun) {
        if (!window2["RaygunObject"] || !window2[window2["RaygunObject"]]) {
          return;
        }
        var snippetOptions = window2[window2["RaygunObject"]].o;
        var hasLoaded = false, globalExecutorInstalled = false, errorQueue, delayedCommands = [], apiKey, options, attach, enablePulse, noConflict, captureUnhandledRejections;
        var snippetOnErrorSignature = ["function (b,c,d,f,g){", "||(g=new Error(b)),a[e].q=a[e].q||[]"];
        errorQueue = window2[window2["RaygunObject"]].q;
        var rg = Raygun;
        var delayedExecutionFunctions = ["trackEvent", "send", "recordBreadcrumb", "captureMissingRequests"];
        var parseSnippetOptions = function() {
          snippetOptions = window2[window2["RaygunObject"]].o;
          for (var i in snippetOptions) {
            if (snippetOptions.hasOwnProperty(i)) {
              var pair = snippetOptions[i];
              if (pair) {
                if (delayedExecutionFunctions.indexOf(pair[0]) === -1) {
                  executor(pair);
                } else {
                  delayedCommands.push(pair);
                }
              }
            }
          }
        };
        var executor = function(pair) {
          var key = pair[0];
          var value = pair[1];
          if (key) {
            switch (key) {
              case "boot":
                onLoadHandler();
                break;
              case "noConflict":
                noConflict = value;
                break;
              case "apiKey":
                apiKey = value;
                hasLoaded = true;
                break;
              case "options":
                options = value;
                break;
              case "attach":
              case "enableCrashReporting":
                attach = value;
                hasLoaded = true;
                break;
              case "enableRUM":
              case "enablePulse":
                enablePulse = value;
                hasLoaded = true;
                break;
              case "detach":
                rg.detach();
                break;
              case "getRaygunInstance":
                if (value && typeof value === "function") {
                  value(rg);
                }
                return rg;
              case "setUser":
                rg.setUser(value.identifier, value.isAnonymous, value.email, value.fullName, value.firstName, value.uuid);
                break;
              case "onBeforeSend":
                rg.onBeforeSend(value);
                break;
              case "onBeforeSendRUM":
                rg.onBeforeSendRum(value);
                break;
              case "onBeforeXHR":
                rg.onBeforeXHR(value);
                break;
              case "onAfterSend":
                rg.onAfterSend(value);
                break;
              case "withCustomData":
                rg.withCustomData(value);
                break;
              case "withTags":
                rg.withTags(value);
                break;
              case "setVersion":
                rg.setVersion(value);
                break;
              case "filterSensitiveData":
                rg.filterSensitiveData(value);
                break;
              case "setFilterScope":
                rg.setFilterScope(value);
                break;
              case "whitelistCrossOriginDomains":
                rg.whitelistCrossOriginDomains(value);
                break;
              case "saveIfOffline":
                if (typeof value === "boolean") {
                  rg.saveIfOffline(value);
                }
                break;
              case "groupingKey":
                rg.groupingKey(value);
                break;
              case "endSession":
                rg.endSession();
                break;
              case "send":
                var error, tags, customData;
                if (value.error) {
                  error = value.error;
                  if (value.tags) {
                    tags = value.tags;
                  }
                  if (value.customData) {
                    customData = value.customData;
                  }
                } else {
                  error = value;
                }
                rg.send(error, customData, tags);
                break;
              case "trackEvent":
                if (value.type && value.path) {
                  rg.trackEvent(value.type, {
                    path: value.path
                  });
                } else if (value.type && value.name && value.duration) {
                  rg.trackEvent(value.type, {
                    name: value.name,
                    duration: value.duration,
                    offset: value.offset || 0
                  });
                } else if (value.type && value.timings) {
                  rg.trackEvent(value.type, {
                    timings: value.timings
                  });
                }
                break;
              case "recordBreadcrumb":
                rg.recordBreadcrumb(pair[1], pair[2]);
                break;
              case "enableAutoBreadcrumbs":
                rg.enableAutoBreadcrumbs();
                break;
              case "disableAutoBreadcrumbs":
                rg.disableAutoBreadcrumbs();
                break;
              case "enableAutoBreadcrumbsConsole":
                rg.enableAutoBreadcrumbs("Console");
                break;
              case "disableAutoBreadcrumbsConsole":
                rg.disableAutoBreadcrumbs("Console");
                break;
              case "enableAutoBreadcrumbsNavigation":
                rg.enableAutoBreadcrumbs("Navigation");
                break;
              case "disableAutoBreadcrumbsNavigation":
                rg.disableAutoBreadcrumbs("Navigation");
                break;
              case "enableAutoBreadcrumbsClicks":
                rg.enableAutoBreadcrumbs("Clicks");
                break;
              case "disableAutoBreadcrumbsClicks":
                rg.disableAutoBreadcrumbs("Clicks");
                break;
              case "enableAutoBreadcrumbsXHR":
                rg.enableAutoBreadcrumbs("XHR");
                break;
              case "disableAutoBreadcrumbsXHR":
                rg.disableAutoBreadcrumbs("XHR");
                break;
              case "setBreadcrumbLevel":
                rg.setBreadcrumbOption("breadcrumbsLevel", pair[1]);
                break;
              case "setAutoBreadcrumbsXHRIgnoredHosts":
                rg.setBreadcrumbOption("xhrIgnoredHosts", pair[1]);
                break;
              case "logContentsOfXhrCalls":
                rg.setBreadcrumbOption("logXhrContents", pair[1]);
                break;
              case "clientIp":
                rg.setClientIp(value);
                break;
              case "captureMissingRequests":
                rg.captureMissingRequests(value);
                break;
              case "captureUnhandledRejections":
                captureUnhandledRejections = value;
                break;
            }
          }
        };
        var installGlobalExecutor = function() {
          window2[window2["RaygunObject"]] = function() {
            return executor(arguments);
          };
          window2["RaygunInitialized"] = true;
          globalExecutorInstalled = true;
        };
        var onLoadHandler = function() {
          parseSnippetOptions();
          if (noConflict) {
            rg = Raygun.noConflict();
          }
          if (apiKey) {
            if (!options) {
              options = {};
            }
            if (enablePulse) {
              options.disablePulse = false;
            }
            options.from = "onLoad";
            rg.init(apiKey, options, null);
          }
          if (attach) {
            rg.attach();
            errorQueue = window2[window2["RaygunObject"]].q;
            for (var j in errorQueue) {
              rg.send(errorQueue[j].e, {
                handler: "From Raygun4JS snippet global error handler"
              });
            }
          } else if (typeof window2.onerror === "function") {
            var onerrorSignature = window2.onerror.toString();
            if (onerrorSignature.indexOf(snippetOnErrorSignature[0]) !== -1 && onerrorSignature.indexOf(snippetOnErrorSignature[1]) !== -1) {
              window2.onerror = null;
            }
          }
          for (var commandIndex in delayedCommands) {
            if (delayedCommands.hasOwnProperty(commandIndex)) {
              executor(delayedCommands[commandIndex]);
            }
          }
          delayedCommands = [];
          if (!globalExecutorInstalled) {
            installGlobalExecutor();
          }
          window2[window2["RaygunObject"]].q = errorQueue;
        };
        if (!Raygun.Utilities.isReactNative()) {
          var supportsNavigationTiming = !!window2.PerformanceObserver && !!window2.PerformanceObserver.supportedEntryTypes && window2.PerformanceObserver.supportedEntryTypes.includes("navigation");
          if (document.readyState === "complete") {
            onLoadHandler();
          } else if (supportsNavigationTiming) {
            var observer = new window2.PerformanceObserver(function() {
              onLoadHandler();
            });
            observer.observe({
              entryTypes: ["navigation"]
            });
          } else if (window2.addEventListener) {
            window2.addEventListener("load", onLoadHandler);
          } else {
            window2.attachEvent("onload", onLoadHandler);
          }
        } else {
          installGlobalExecutor();
        }
      })(window, window.__instantiatedRaygun);
      try {
        delete window.__instantiatedRaygun;
      } catch (e) {
        window["__instantiatedRaygun"] = void 0;
      }
      return window.rg4js;
    });
  }
});

// src/app/core/models/user-detail.ts
var UserDetail = class _UserDetail {
  constructor() {
    const AccessToken = localStorage.getItem("AccessToken");
    if (AccessToken) {
      const aToken = AccessToken.split(".");
      let currentUser;
      const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
      let userDetail;
      if (aToken.length > 1) {
        userDetail = JSON.parse(atob(aToken[1]));
        currentUser = JSON.parse(userDetail.User);
        this.token = userDetail.AcessToken;
        this.RefreshToken = userDetail.RefreshToken;
      } else {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = localStorage.getItem("AccessToken");
        this.RefreshToken = localStorage.getItem("RefreshToken");
      }
      this.TimeZone = offset;
      this.UserName = currentUser.UserName;
      this.UserID = currentUser.UserId;
      this.FirstName = currentUser.FirstName;
      this.LastName = currentUser.LastName;
      this.Language = currentUser.Language;
      this.GroupId = currentUser.GroupId;
      this.ListRole = currentUser.Roles;
      this.FullName = currentUser.FirstName + " " + currentUser.LastName;
      this.ApiKey = currentUser.ApiKey;
      this.isAuthenticate = true;
    } else {
      this.isAuthenticate = false;
    }
  }
  static {
    this.\u0275fac = function UserDetail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserDetail)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserDetail, factory: _UserDetail.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/message/message.component.ts
function MessageComponent_div_0_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function MessageComponent_div_0_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "This action cannot be undone.");
    \u0275\u0275elementEnd();
  }
}
function MessageComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15)(2, "input", 16);
    \u0275\u0275listener("click", function MessageComponent_div_0_div_10_Template_input_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setIsDefaultView());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.IsDefaultView);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.ConfirmationText);
  }
}
function MessageComponent_div_0_div_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MessageComponent_div_0_div_12_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.CloseErrorMsg());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.CancelButtonText);
  }
}
function MessageComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, MessageComponent_div_0_div_12_button_1_Template, 2, 1, "button", 19);
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function MessageComponent_div_0_div_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.Continue());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCancelabel);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.IsDefaultView);
    \u0275\u0275attribute("ngbAutofocus", ctx_r1.AutoFocusOnConfirm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ButtonText);
  }
}
function MessageComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 22);
    \u0275\u0275listener("click", function MessageComponent_div_0_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.CloseErrorMsg());
    });
    \u0275\u0275text(2, "Ok");
    \u0275\u0275elementEnd()();
  }
}
function MessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function MessageComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CloseFromTop());
    });
    \u0275\u0275element(3, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "h3", 7);
    \u0275\u0275template(6, MessageComponent_div_0_i_6_Template, 1, 0, "i", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p", 9);
    \u0275\u0275template(9, MessageComponent_div_0_p_9_Template, 2, 0, "p", 2)(10, MessageComponent_div_0_div_10_Template, 6, 2, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275template(12, MessageComponent_div_0_div_12_Template, 4, 4, "div", 12)(13, MessageComponent_div_0_div_13_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.IsDelete);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.MessageHeader, "");
    \u0275\u0275advance();
    \u0275\u0275property("innerHtml", ctx_r1.Message, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.IsDelete && !ctx_r1.undoable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.IsDelete);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.IsConfirmation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.IsConfirmation);
  }
}
function MessageComponent_div_1_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.MessageHeader, " ");
  }
}
function MessageComponent_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "This action cannot be undone.");
    \u0275\u0275elementEnd();
  }
}
function MessageComponent_div_1_div_9_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const part_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r9);
  }
}
function MessageComponent_div_1_div_9_ng_container_5_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const part_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(part_r9);
  }
}
function MessageComponent_div_1_div_9_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MessageComponent_div_1_div_9_ng_container_5_ng_container_1_ng_container_1_Template, 3, 1, "ng-container", 28)(2, MessageComponent_div_1_div_9_ng_container_5_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const part_r9 = ctx.$implicit;
    const normalText_r10 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r9 === "Yes, delete")("ngIfElse", normalText_r10);
  }
}
function MessageComponent_div_1_div_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MessageComponent_div_1_div_9_ng_container_5_ng_container_1_Template, 4, 2, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.splitText(ctx_r1.ConfirmationText, "Yes, delete"));
  }
}
function MessageComponent_div_1_div_9_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r1.ConfirmationText);
  }
}
function MessageComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15)(2, "input", 16);
    \u0275\u0275listener("click", function MessageComponent_div_1_div_9_Template_input_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setIsDefaultView());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275template(5, MessageComponent_div_1_div_9_ng_container_5_Template, 2, 1, "ng-container", 28)(6, MessageComponent_div_1_div_9_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fullText_r11 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.IsDefaultView);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.ConfirmationText.includes("Yes, delete"))("ngIfElse", fullText_r11);
  }
}
function MessageComponent_div_1_div_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function MessageComponent_div_1_div_10_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.CloseErrorMsg());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.CancelButtonText);
  }
}
function MessageComponent_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function MessageComponent_div_1_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.Continue());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MessageComponent_div_1_div_10_button_3_Template, 2, 1, "button", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.IsDefaultView);
    \u0275\u0275attribute("ngbAutofocus", ctx_r1.AutoFocusOnConfirm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ButtonText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCancelabel);
  }
}
function MessageComponent_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 22);
    \u0275\u0275listener("click", function MessageComponent_div_1_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.CloseErrorMsg());
    });
    \u0275\u0275text(2, "Ok");
    \u0275\u0275elementEnd()();
  }
}
function MessageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 23);
    \u0275\u0275template(2, MessageComponent_div_1_h3_2_Template, 2, 1, "h3", 2);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function MessageComponent_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CloseFromTop());
    });
    \u0275\u0275element(4, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275element(6, "p", 25);
    \u0275\u0275template(7, MessageComponent_div_1_p_7_Template, 2, 0, "p", 2);
    \u0275\u0275element(8, "div", 26);
    \u0275\u0275template(9, MessageComponent_div_1_div_9_Template, 8, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MessageComponent_div_1_div_10_Template, 4, 4, "div", 27)(11, MessageComponent_div_1_div_11_Template, 3, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.IsDelete);
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHtml", ctx_r1.Message, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.IsDelete && !ctx_r1.undoable);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.IsDelete);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.IsConfirmation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.IsConfirmation);
  }
}
var MessageComponent = class _MessageComponent {
  constructor() {
    this.MessageHeader = "Confirmation";
    this.isCancelabel = true;
    this.ButtonText = "Ok";
  }
  ngOnInit() {
  }
  Continue() {
    if (this.CallBackMethod) {
      this.CallBackMethod(this.MessagePopup, this.Caller);
      this.MessagePopup.close(true);
    } else {
      this.MessagePopup.close(true);
    }
  }
  CloseErrorMsg() {
    this.MessagePopup.close(false);
  }
  // Function execute when user click on X button for close the popup.
  // And pass null value for not execute IF and ELSE statement.
  CloseFromTop() {
    this.MessagePopup.close(null);
  }
  setIsDefaultView() {
    this.IsDefaultView = !this.IsDefaultView;
  }
  splitText(text, keyword) {
    return text.split(new RegExp(`(${keyword})`, "g"));
  }
  static {
    this.\u0275fac = function MessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageComponent, selectors: [["app-message"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["fullText", ""], ["normalText", ""], [4, "ngIf"], [1, "modal-header", 2, "justify-content", "end"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body", "center-content"], [1, "p-large"], ["class", "fa fa-exclamation-triangle", 4, "ngIf"], [3, "innerHtml"], ["class", "checkfordelete", 4, "ngIf"], [1, "modal-footer"], ["class", "cta-button-group", 4, "ngIf"], [1, "fa", "fa-exclamation-triangle"], [1, "checkfordelete"], ["for", "defaultView", 1, "checkbox", 2, "margin-top", "5px"], ["id", "defaultView", "type", "checkbox", "value", "", 3, "click", "checked"], [1, "skin"], [1, "cta-button-group"], ["class", "btn btn-clear btn-sm", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-warning", "btn-sm", "text-white", 3, "click", "disabled"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-clear", "btn-sm", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-warning", "btn-sm", "text-white", 3, "click"], [1, "modal-header"], [1, "modal-body"], [1, "warning", 3, "innerHtml"], [1, "p-3"], ["class", "modal-footer bg-light justify-content-between", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "modal-footer", "bg-light", "justify-content-between"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn btn-outline-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-secondary", 3, "click"]], template: function MessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MessageComponent_div_0_Template, 14, 7, "div", 2)(1, MessageComponent_div_1_Template, 12, 6, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.isNewDesign);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isNewDesign === true);
      }
    }, dependencies: [NgIf, NgForOf], styles: ['\n\n@media (min-width: 576px) {\n  .Confirm_popup.modal-dialog[_ngcontent-%COMP%] {\n    width: 874px;\n  }\n}\n.designHeader[_ngcontent-%COMP%] {\n  color: rgb(91, 141, 40);\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\ntextarea[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  border: 1px solid #C3BBB1;\n  transition: border 0.3s linear 0s;\n}\n.checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:not(:disabled)    + .skin[_ngcontent-%COMP%] {\n  background-color: #EB583B;\n  border-color: #EB583B;\n  border-radius: 2px;\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  display: inline-block;\n  height: 16px;\n  left: 0;\n  position: absolute;\n  margin-right: 10px;\n  top: -2px;\n  width: 16px;\n  float: left;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  height: 19px;\n  width: 19px;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  line-height: 14px;\n  color: #fff;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  content: "\\f00c";\n}\n.close[_ngcontent-%COMP%]:before, \n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after, \n.checkbox[_ngcontent-%COMP%]   input.indeterminate[_ngcontent-%COMP%]    + .skin[_ngcontent-%COMP%]:after {\n  display: inline-block;\n  font-family: "Font Awesome 5 Free" !important;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 900;\n  font-variant: normal;\n  height: 0.3em;\n  margin-right: 0px;\n  text-transform: none;\n  line-height: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n  position: absolute;\n  speak: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  width: 1.2em;\n  top: 8px;\n  left: 0px;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 25px;\n  position: relative;\n  top: -6px;\n}\ninput[_ngcontent-%COMP%]:not(.btn) {\n  height: 25px;\n  padding: 0px 8px 0px 8px;\n  font-size: 14px;\n  border-radius: 3px;\n  width: 62%;\n}\nbutton.btn-warning[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n  border: 0;\n}\n.center-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100%;\n}\n.bold-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n/*# sourceMappingURL=message.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageComponent, { className: "MessageComponent", filePath: "src\\app\\shared\\components\\message\\message.component.ts", lineNumber: 12 });
})();

// src/app/core/services/message.service.ts
var MessageService = class _MessageService {
  constructor(modalService) {
    this.modalService = modalService;
  }
  showMessage(type, options = {}) {
    options.header = options.header || type;
    if (options.isDelete)
      options.isConfirmation = true;
    options.cancelBtn = !!options.isConfirmation;
    const modalRef = this.modalService.open(MessageComponent, { backdrop: "static", windowClass: "Confirm_popup", size: options.isNewDesign ? "dialog-centered newAlertPop" : options.size ? options.size : "lg" });
    const modalInstance = modalRef.componentInstance;
    modalInstance.MessagePopup = modalRef;
    modalInstance.MessageHeader = options.header;
    modalInstance.Message = options.body;
    modalInstance.ButtonText = options.btnText;
    modalInstance.IsConfirmation = options.isConfirmation;
    modalInstance.isCancelabel = options.cancelBtn;
    modalInstance.CallBackMethod = options.callback;
    modalInstance.Caller = options.caller;
    modalInstance.ConfirmationText = options.checkboxText;
    modalInstance.IsDelete = options.isDelete;
    modalInstance.IsDefaultView = !options.isDelete;
    modalInstance.CancelButtonText = options.cancelBtnText || "Cancel";
    modalInstance.AutoFocusOnConfirm = !!options.autoFocusOnConfirm;
    modalInstance.undoable = options.undoable;
    modalInstance.isNewDesign = options.isNewDesign ? options.isNewDesign : false;
    return modalRef;
  }
  showComponent(component, bindings = {}, options = { size: "lg", backdrop: true }) {
    const ref = this.modalService.open(component, options);
    const instance = ref.componentInstance;
    Object.keys(bindings).forEach((key) => {
      if (typeof instance[key] !== "function" && typeof bindings[key] === "function") {
        instance[key] = bindings[key](instance[key]);
      } else {
        instance[key] = bindings[key];
      }
    });
    return ref;
  }
  dismissAll() {
    this.modalService.dismissAll();
  }
  static {
    this.\u0275fac = function MessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageService)(\u0275\u0275inject(NgbModal));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageService, factory: _MessageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http, simpleLoader) {
    this.http = http;
    this.simpleLoader = simpleLoader;
    this.endpoint = environment.Setting.BaseAPIUrl;
    this.C2MIceAPIUrl = environment.Setting.C2MIceAPIUrl;
    this.signoutendpoint = environment.Setting.C2M_Console_API_URL;
    this.GatewayAPIUrl = environment.Setting.GatewayAPIUrl;
  }
  withLoader(url, request$) {
    this.simpleLoader.show(url, true);
    return request$.pipe(finalize(() => this.simpleLoader.hide()));
  }
  setHeaders(parameters) {
    let processName = null;
    if (parameters && parameters.ProcessName) {
      processName = parameters.ProcessName;
    } else {
      processName = sessionStorage.getItem("AppName");
    }
    let headers;
    const accessToken = localStorage.getItem("AccessToken");
    if (processName != null && accessToken !== null) {
      headers = new HttpHeaders({ accessToken, processName });
    } else {
      if (accessToken !== null) {
        headers = new HttpHeaders({ accessToken });
      }
    }
    return headers;
  }
  setParams(parameters) {
    let params = new HttpParams();
    if (parameters) {
      for (const i in parameters) {
        if (parameters[i] != null) {
          params = params.append(i, parameters[i]);
        }
      }
    }
    return params;
  }
  get(url, parameters) {
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    return this.http.get(`${this.endpoint}/${url}`, { headers, params });
  }
  postAdvanceSearch(url, data, parameters) {
    return __async(this, null, function* () {
      const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
      return yield this.http.post(`${url}`, data, httpAllOptions).toPromise().catch(this.handleError);
    });
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  post(url, data, parameters, isV3) {
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    if (isV3) {
      this.endpoint = this.endpoint.replace("v2", "v3");
    } else {
      this.endpoint = this.endpoint.replace("v3", "v2");
    }
    return this.http.post(`${this.endpoint}/${url}`, data, { headers, params });
  }
  postGateway(url, data, parameters) {
    const params = this.setParams(parameters);
    return this.http.post(`${this.endpoint}/${url}`, data, { params });
  }
  post_ice(url, data, apiEndpoint) {
    return this.http.post(`${this.endpoint}/${url}`, data, { headers: { apiEndpoint } });
  }
  postgateway1(endPoint, url, data, parameters) {
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    const finalUrl = endPoint && endPoint !== "" ? `${endPoint}/${url}` : `${this.GatewayAPIUrl}/${url}`;
    return this.withLoader(finalUrl, this.http.post(finalUrl, data, { headers, params }));
  }
  postgateway(endPoint, url, data, parameters) {
    const fullUrl = endPoint != null && endPoint != "" ? `${endPoint}/${url}` : `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl);
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    const request$ = this.http.post(fullUrl, data, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  // postForLMK(url: string, data: any, parameters?: any): Observable<any> {
  //   const headers = this.setHeaders(data);
  //   const params = this.setParams(parameters);
  //   return this.http.post<any>(`${this.LMKendpoint}/${url}`, data, { headers, params });
  // }
  postSignout(url, data, parameters) {
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    return this.http.post(`${this.signoutendpoint}/${url}`, data, { headers, params });
  }
  postGetFile(url, data, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.endpoint}/${url}`, data, { headers: Headers, responseType: resultType });
  }
  postGetFileWithEndPoint(url, data, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(url, data, { headers: Headers, responseType: resultType });
  }
  put(url, data) {
    const headers = this.setHeaders();
    return this.http.put(`${this.endpoint}/${url}`, data, { headers });
  }
  update(url, objectId, data) {
    const headers = this.setHeaders();
    return this.http.patch(`${this.endpoint}/${url}/${objectId}`, data, { headers });
  }
  delete(url, objectId) {
    const headers = this.setHeaders();
    return this.http.delete(`${this.endpoint}/${url}/${objectId}`, { headers });
  }
  deleteGrid(url) {
    const headers = this.setHeaders();
    return this.http.delete(`${this.endpoint}/${url}`, { headers }).pipe();
  }
  UploadFile(url, formData) {
    let query = {
      ProcessName: formData.get("processName")
    };
    const Headers = this.setHeaders(query);
    return this.http.post(`${this.endpoint}/${url}`, formData, { headers: Headers });
  }
  DeleteFile(url, formData) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.endpoint}/${url}`, formData, { headers: Headers });
  }
  downloadfile(url, formData, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.endpoint}/${url}`, formData, { headers: Headers, responseType: resultType });
  }
  getProcessData() {
    return this.get(`application/processList`);
  }
  GetDataFromIceAPI(url, resultType) {
    return this.http.get(`${this.C2MIceAPIUrl}/${url}`, { responseType: resultType });
  }
  user_post(url, data) {
    return this.http.post(`${this.signoutendpoint}/${url}`, data);
  }
  SaveBMInsertCardGroup(bmoId) {
    const apiUrl = `${this.endpoint.replace("/api/v2", "/api/v3")}/modeler/SaveBMInsertCardGroup?bmoId=${bmoId}`;
    return this.http.get(apiUrl);
  }
  get_gateway(url, parameters) {
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    return this.http.get(`${this.GatewayAPIUrl}/${url}`, { headers, params });
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SimpleLoaderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/authentication.service.ts
var AuthenticationService = class _AuthenticationService {
  constructor(http, msg, api, routes, toastr) {
    this.http = http;
    this.msg = msg;
    this.api = api;
    this.routes = routes;
    this.toastr = toastr;
    const AccessToken = localStorage.getItem("AccessToken");
    if (AccessToken) {
      const aToken = AccessToken.split(".");
      if (aToken.length > 1) {
        const currentuserDetail = new UserDetail();
        this.currentUserSubject = new BehaviorSubject(currentuserDetail);
        this.currentUser = this.currentUserSubject.asObservable();
      } else {
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
      }
    } else {
      this.logout();
    }
  }
  login(username, password) {
    const httpHeader = new HttpHeaders({ UserName: username, Password: password });
    const objHttpHeader = { headers: httpHeader };
    return this.http.post(`${environment.Setting.BaseAPIUrl}/user/token`, {}, objHttpHeader).pipe(map((response) => {
      const res = response.Data;
      if (res && res.accessToken) {
        const aToken = res.accessToken.split(".");
        const userDetail = JSON.parse(atob(aToken[1]));
        const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
        const currentUser = JSON.parse(userDetail.User);
        currentUser.TimeZone = offset;
        userDetail.User = JSON.stringify(currentUser);
        localStorage.setItem("AccessToken", res.accessToken);
        localStorage.setItem("loginType", "normalUser");
        this.currentUserSubject.next(currentUser);
        return true;
      } else if (res && res.AcessToken && res.User && res.User.Message === void 0) {
        const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
        res.User.TimeZone = offset;
        localStorage.setItem("currentUser", JSON.stringify(res.User));
        localStorage.setItem("AccessToken", res.AcessToken);
        localStorage.setItem("RefreshToken", res.RefreshToken);
        localStorage.setItem("loginType", "normalUser");
        this.currentUserSubject.next(res.User);
        return true;
      } else if (res && res.AcessToken === "" && res.RefreshToken === "" && !!res.Message) {
        this.msg.showMessage("Fail", { body: res.Message });
        return false;
      } else if (res && res[0] !== void 0 && res[0].ISLOCKEDOUT === true) {
        this.msg.showMessage("Fail", { body: "Your account is locked due to entering the wrong password three times. Please check your email." });
        return false;
      } else if (res && res.User.Message) {
        this.msg.showMessage("Fail", { body: "Your account is locked due to entering the wrong password three times. Please check your email." });
        return false;
      }
    }));
  }
  updatePassword(currentPassword, newPassword, emailAddress) {
    const data = {
      EmailAddress: emailAddress,
      Password: currentPassword,
      NewPassword: newPassword,
      AccessToken: localStorage.getItem("AccessToken")
    };
    return this.api.user_post("ChangeAccountPassword", data).toPromise();
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    if (this.currentUserSubject == void 0) {
      this.currentUserSubject = new BehaviorSubject(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
    this.currentUserSubject.next(null);
  }
  getGetwayDetails(Id) {
    return this.api.postGateway("User/GetGatewayLogData/" + Id, null);
  }
  static {
    this.\u0275fac = function AuthenticationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(MessageService), \u0275\u0275inject(ApiService), \u0275\u0275inject(Router), \u0275\u0275inject(ToastrService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthenticationService, factory: _AuthenticationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(router, authenticationService) {
    this.router = router;
    this.authenticationService = authenticationService;
  }
  canActivate(route, state) {
    const currentUser = localStorage.getItem("AccessToken");
    if (currentUser) {
      return true;
    }
    this.router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
  canActivateChild(route, state) {
    const currentUser = localStorage.getItem("AccessToken");
    if (currentUser) {
      if (state.url == "/users/grid") {
        if (localStorage.getItem("hasUserGridRight") == "true") {
          return true;
        } else {
          this.router.navigate(["/app_list"]);
          return false;
        }
      } else {
        return true;
      }
    }
    this.router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthenticationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/guards/module-import.guard.ts
function throwIfAlreadyLoaded(parentModule, moduleName) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
  }
}

// src/app/core/services/list-view.service.ts
var ListviewService = class _ListviewService {
  constructor(api) {
    this.api = api;
    this.notesShowData = [];
    this.callData = new EventEmitter();
  }
  getChildProcessData(ChildProcessName) {
    this.callData.emit(ChildProcessName);
  }
  GridConfig(objGridData) {
    const { ProcessName, GridGuid, ViewName } = objGridData;
    return this.api.get(`listview/gridConfig?processName=${ProcessName}&gridGuid=${GridGuid}&viewName=${encodeURIComponent(ViewName)}`);
  }
  GridData(userData, isWF = true) {
    return this.api.post("listview/getprocessdata", userData);
  }
  GetProcessDataCount(userData) {
    return this.api.post("listview/getProcessDataCount", userData);
  }
  //Changes Based on Parent Transaction ID #1038
  DMOData(ProcessName, dmoName, ParentTransactionId = null) {
    return this.api.get("listview/getDmoFilterData/" + ProcessName + "/" + dmoName + "?parentTransactionID=" + ParentTransactionId);
  }
  sendGridConfig(gridData) {
    return this.api.post(`listview/gridConfig`, gridData);
  }
  GridConfigMaster(objGridData) {
    const { ProcessName, GridGuid, ViewName } = objGridData;
    return this.api.get_gateway(`wfapibm/DataModel/gridMasterConfig?processName=${ProcessName}&gridGuid=${GridGuid}&viewName=${encodeURIComponent(ViewName)}`);
  }
  sendMasterGridConfig(gridData) {
    return this.api.postgateway("", `wfapibm/DataModel/SaveMasterGridConfig`, gridData);
  }
  stateList(processData) {
    return this.api.get("listview/getState/" + processData);
  }
  stageList(processData) {
    return this.api.get("application/applicationwfstages?processName=" + processData + "&timeZone=0");
  }
  dmoList(processData) {
    return this.api.get_gateway(`wfapibm/DataModel/getDmo/` + processData);
  }
  dmoListOrderByDMO(processData, CanvasType) {
    if (CanvasType === null || CanvasType === void 0) {
      CanvasType = "AdminView";
    }
    return this.api.get_gateway(`wfapibm/DataModel/getDmo/${processData}?isSortByDMO=true&CanvasType=${CanvasType}`);
  }
  //Change for customer master sap data sending
  deleteGridData(id) {
    return this.api.deleteGrid("application/deleteTransaction?TransactionIDs=" + id);
  }
  ExportToExcel(userData) {
    if (userData.ProcessName == "announcement") {
      return this.api.postGetFile(`listview/ExportToExlAnncmntData`, userData, "blob");
    } else {
      return this.api.postGetFile(`listview/exportToExcel`, userData, "blob");
    }
  }
  ExportToPDF(userData) {
    return this.api.postGetFile(`listview/ExportToPDF`, userData, "blob");
  }
  ExportFileWithEndPointURL(userData, url) {
    return this.api.postGetFileWithEndPoint(url, userData, "blob");
  }
  deleteGridConfigData(configData) {
    return this.api.deleteGrid(`listview/deleteGridConfig?processName=` + configData.ProcessName + "&gridGuid=" + configData.GridGuid + "&viewName=" + configData.ViewName);
  }
  GetDataFromIceAPI(url, resultType) {
    return this.api.GetDataFromIceAPI(url, resultType);
  }
  userActionPermission(processName) {
    if (processName !== void 0 && processName !== null && processName !== "") {
      return this.api.get("listview/GetUserActionPermission", { ProcessName: processName });
    } else {
      return this.api.get("listview/GetUserActionPermission");
    }
  }
  // listview/exportToExcel
  noteMessage(id) {
    return this.api.get(`application/comment/null/null?transactionId=` + id);
  }
  sendNoteMessage(message) {
    return this.api.post(`application/postcomment`, message);
  }
  userList(userData) {
    return this.api.get(`formview/getUsername?processName=` + userData.processname + "&searchText=" + userData.searchtext);
  }
  UploadFile(formData) {
    return this.api.UploadFile("application/bulkUploadnew", formData);
  }
  uploadFiles(url, formData) {
    return this.api.post(url, formData);
  }
  downloadFile(downloadRequiredata) {
    return this.api.postGetFile(`application/downloadFileDiscussionBoard?transctionID=` + downloadRequiredata.transactionid + "&fileID=" + downloadRequiredata.fileid, downloadRequiredata, "blob");
  }
  UpdateCell(applicationObj) {
    return this.api.post(`application/updateapplication`, applicationObj);
  }
  getProcess() {
    return this.api.get("application/processList");
  }
  getAllQuickMind(processname) {
    return this.api.get("quickmind/getallqmind?processName=" + processname);
  }
  deleteQuickmind(processName, id) {
    return this.api.delete("quickmind/deleteqmind", "?processName=" + processName + "&qminds=" + id);
  }
  static {
    this.\u0275fac = function ListviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListviewService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ListviewService, factory: _ListviewService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/validators/url.validator.ts
function urlValidator(control) {
  const URL_REGEXP = /^(http?|ftp|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  if (control.value == null || control.value === "" || URL_REGEXP.test(control.value)) {
    return null;
  }
  return { invalidUrl: true };
}

// src/app/core/validators/phone.validator.ts
function phoneNumberValidator(control) {
  const US_PHONE_REGEXP = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
  const PHONE_12_DIGIT_REGEXP = /^\+\d{2} \d{10}$/;
  const PHONE_10_DIGIT_REGEXP = /[0-9]{9}/;
  if (control.value == null || control.value === "" || US_PHONE_REGEXP.test(control.value) || PHONE_12_DIGIT_REGEXP.test(control.value) || PHONE_10_DIGIT_REGEXP.test(control.value)) {
    return null;
  }
  return { invalidPhoneNumber: true };
}

// src/app/core/validators/range.validator.ts
function rangeValidator(control) {
  const ageval = control.value;
  const decimalregex = new RegExp("^[0-9]{0,2}([.][1-9]{1,1})?$");
  const numberregex = new RegExp("^[0-9]{0,2}?$");
  if (ageval === void 0 || ageval === null || ageval === "") {
    return null;
  }
  if (ageval !== null && ageval.includes("-")) {
    var range = ageval.split("-");
    if (range[0] && range[0].includes(".")) {
      if (!decimalregex.test(range[0])) {
        return { invalidRange: true };
      }
    } else {
      if (range[0] && !numberregex.test(range[0])) {
        return { invalidRange: true };
      }
    }
    if (range[1] !== "" && range[1].includes(".")) {
      if (!decimalregex.test(range[1])) {
        return { invalidRange: true };
      }
    } else {
      if (range[1] && !numberregex.test(range[1])) {
        return { invalidRange: true };
      }
    }
    if (range[0] !== "" && range[1] !== "") {
      const from = parseFloat(range[0]);
      const to = parseFloat(range[1]);
      if (from > to) {
        return { invalidRange: true };
      }
      if (from === 0 && to === 0) {
        return { invalidRange: true };
      }
    } else {
      return { invalidRange: true };
    }
  } else if (ageval.includes(".")) {
    if (!decimalregex.test(ageval)) {
      return { invalidRange: true };
    }
  } else if (parseFloat(ageval) === 0 || parseFloat(ageval) < 0 || parseFloat(ageval) < 1) {
    return { invalidRange: true };
  } else if (!ageval.includes(".") && !ageval.includes("-")) {
    if (ageval && !numberregex.test(ageval)) {
      return { invalidRange: true };
    }
  }
  return null;
}

// src/app/core/services/ngb-date-fr-parser-formatter.ts
function isNumber(value) {
  return !isNaN(toInteger(value));
}
function toInteger(value) {
  return parseInt(`${value}`, 10);
}
var NgbDateFRParserFormatter = class _NgbDateFRParserFormatter extends NgbDateParserFormatter {
  parse(value) {
    if (value && environment.Setting.dateFormat == "dd/MM/yyyy") {
      const dateParts = value.trim().split("/");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { day: toInteger(dateParts[0]), month: null, year: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          day: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          year: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          day: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          year: toInteger(dateParts[2])
        };
      }
    } else if (value && environment.Setting.dateFormat == "MM/dd/yyyy") {
      const dateParts = value.trim().split("/");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null, day: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return { year: toInteger(dateParts[2]), month: toInteger(dateParts[0]), day: toInteger(dateParts[1]) };
      }
    }
    return null;
  }
  format(date) {
    if (date) {
      const bootstrapSucks = `${date.month}/${date.day}/${date.year}`;
      const format = environment.Setting.dateFormat;
      return formatDate(bootstrapSucks, format, "en-AU");
    } else
      return "";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDateFRParserFormatter_BaseFactory;
      return function NgbDateFRParserFormatter_Factory(__ngFactoryType__) {
        return (\u0275NgbDateFRParserFormatter_BaseFactory || (\u0275NgbDateFRParserFormatter_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDateFRParserFormatter)))(__ngFactoryType__ || _NgbDateFRParserFormatter);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgbDateFRParserFormatter, factory: _NgbDateFRParserFormatter.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/dmo-control.service.ts
var DmoControlService = class _DmoControlService {
  constructor(api, ngbDateFRParserFormatter, userDetail) {
    this.api = api;
    this.ngbDateFRParserFormatter = ngbDateFRParserFormatter;
    this.userDetail = userDetail;
  }
  toAdminViewFormGroup(dmos, fullData = {}) {
    const group = {};
    const headerData = fullData.ApplicationInfo[0];
    const data = fullData.DataInformation;
    const currentStageName = this.CurrentStage ? this.CurrentStage.DisplayName : "";
    const currentStateName = this.CurrentState ? this.CurrentState.DisplayName : "";
    const loginUser = this.userDetail;
    let createdDateTime;
    let modifiedDateTime;
    if (headerData) {
      createdDateTime = this.getUserDateTime(headerData.CrtdOn, "MM/dd/yyyy h:mm:ss a", loginUser.TimeZone);
      modifiedDateTime = this.getUserDateTime(headerData.ModfOn, "MM/dd/yyyy h:mm:ss a", loginUser.TimeZone);
    }
    const currentDateWithoutTime = this.getCurrentDateWithoutTime();
    dmos.forEach((dmo) => {
      let value = data[dmo.DMOGuid] !== void 0 ? data[dmo.DMOGuid].DMOVAL : null;
      if (dmo.Type === "DateWithCalendar" || dmo.Type === "StaticDateBox") {
        if (value == null || value === "") {
          if (dmo.DefaultValue === "xxxCurrentDatexxx") {
            value = currentDateWithoutTime.toString();
          }
        }
        value = this.getUserDateTime(value, "dd/MM/yyyy HH:mm:ss", loginUser.TimeZone, dmo.Type === "DateWithCalendar");
        value = this.ngbDateFRParserFormatter.parse(value);
      } else if (dmo.Type === "DateEditBox") {
        if (value == null || value === "") {
          if (dmo.DefaultValue === "xxxCurrentDatexxx") {
            value = currentDateWithoutTime.toString();
          }
        }
        value = this.getUserDateTime(value, environment.Setting.dateTimeFormat, loginUser.TimeZone);
      } else if (dmo.Type === "CreatedBy") {
        value = headerData.CrtdBy;
      } else if (dmo.Type === "CreatedDate") {
        value = createdDateTime.toString().substr(0, 10);
      } else if (dmo.Type === "CreatedDateTime") {
        value = createdDateTime;
      } else if (dmo.Type === "LastUpdatedBy") {
        value = headerData.Modfby;
      } else if (dmo.Type === "LastUpdatedDate") {
        value = modifiedDateTime.toString().substr(0, 10);
      } else if (dmo.Type === "LastUpdatedDateTime") {
        value = modifiedDateTime.toString();
      } else if (dmo.Type === "CurrentStage") {
        value = currentStageName;
      } else if (dmo.Type === "CurrentState") {
        value = currentStateName;
      }
      const validators = [];
      if (dmo.IsRequired === true) {
        validators.push(Validators.required);
      }
      if (dmo.Type === "UrlTextBox") {
        validators.push(urlValidator);
      }
      if (dmo.Type === "PhoneTextBox") {
        validators.push(phoneNumberValidator);
      }
      if (dmo.Type === "EmailEditBox") {
        validators.push(Validators.email);
      }
      if (dmo.Type === "CheckBoxList") {
        const arr = dmo.Options.split(",").map((option) => {
          if (value && value.split("|").includes(option)) {
            return new UntypedFormControl(true);
          } else {
            return new UntypedFormControl(false);
          }
        });
        group[dmo.Name] = new UntypedFormArray(arr);
      } else if (dmo.Type === "DateTimeZone") {
        if (value != null && value !== "" && value.trim() !== "") {
          value = this.getUserDateTime(value, "MM/dd/yyyy h:mm a", loginUser.TimeZone);
          const arr = value.split(" ");
          group[dmo.Name] = new UntypedFormGroup({
            date: new UntypedFormControl(this.ngbDateFRParserFormatter.parse(arr[0]), validators),
            time: new UntypedFormControl(arr[1] + " " + arr[2], validators),
            timezone: new UntypedFormControl(arr[3], validators)
          });
        } else {
          group[dmo.Name] = new UntypedFormGroup({
            date: new UntypedFormControl(null, validators),
            time: new UntypedFormControl("12:00 AM", validators),
            timezone: new UntypedFormControl("", validators)
          });
        }
      } else if (dmo.Type === "DateTimeBox") {
        if (value != null && value !== "" && value.trim() !== "") {
          if (environment.Setting.dateTimeFormat24 == true) {
            value = this.getUserDateTime(value, "dd/MM/yyyy HH:mm:ss", loginUser.TimeZone);
          } else {
            value = this.getUserDateTime(value, "dd/MM/yyyy h:mm:ss a", loginUser.TimeZone);
          }
          group[dmo.Name] = new UntypedFormControl(value, validators);
        } else {
          group[dmo.Name] = new UntypedFormControl("", validators);
        }
      } else if (dmo.Type === "KeyValueSearchBox" && (dmo.Name === "DMOCRM_HeaderInf_Saleyard" || dmo.Name === "DMOCRM_HeaderInf_PrcBrnc" || dmo.Name === "DMOCRM_HeaderInf_CndBrnc" || dmo.Name === "DMOCRM_HeaderInf_SaleType" || dmo.Name === "DMOCRM_HeaderInf_TranType" || dmo.Name === "DMOLot_BInfo_BuyerBrc")) {
        if (value != null && value != "") {
          const splitted = value.split("~~~");
          group[dmo.Name] = new UntypedFormControl(splitted[1] + " (" + splitted[0] + ")", validators);
        } else {
          group[dmo.Name] = new UntypedFormControl(null, validators);
        }
      } else if (dmo.Type === "KeyValueSearchBox") {
        if (!!value) {
          const splitted = value.split("~~~");
          const config = {
            ddOptionValue: splitted[1],
            ddOptionKey: splitted[0]
          };
          group[dmo.Name] = new UntypedFormControl(config, validators);
          ;
        } else {
          group[dmo.Name] = new UntypedFormControl(value, validators);
        }
      } else if (dmo.Type === "KeyValueDropdownList") {
        if (!!value) {
          const splitted = value.split("~~~");
          const config = {
            ddOptionKey: splitted[0],
            ddOptionValue: splitted[1]
          };
          group[dmo.Name] = new UntypedFormControl(config, validators);
          ;
        } else {
          group[dmo.Name] = new UntypedFormControl(value, validators);
        }
      } else if (dmo.Type === "RangeBox") {
        let Age = null;
        if (value != null && value !== "") {
          Age = value;
        } else {
          Age = null;
        }
        group[dmo.Name] = new UntypedFormControl(Age, [rangeValidator, Validators.required]);
      } else if (dmo.Type === "MultiSelectDropDownList") {
        if (value && typeof value === "string") {
          if (value.startsWith("[") && value.endsWith("]")) {
            value = JSON.parse(value) || [];
            value = value.map((item) => ({ label: "", value: item }));
          } else {
            value = value.split(",").map((val) => ({ id: val, text: val }));
          }
          group[dmo.Name] = new UntypedFormControl(value, validators);
        } else {
          group[dmo.Name] = new UntypedFormControl([], validators);
        }
      } else {
        group[dmo.Name] = new UntypedFormControl(value, validators);
      }
    });
    return new UntypedFormGroup(group);
  }
  getCureentDateTime() {
    const today = /* @__PURE__ */ new Date();
    return ("0" + (today.getMonth() + 1)).slice(-2) + "/" + ("0" + today.getDate()).slice(-2) + "/" + ("000" + today.getFullYear()).slice(-4) + " " + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
  }
  getCurrentDateWithoutTime() {
    const today = /* @__PURE__ */ new Date();
    return ("0" + (today.getMonth() + 1)).slice(-2) + "/" + ("0" + today.getDate()).slice(-2) + "/" + ("000" + today.getFullYear()).slice(-4);
  }
  getUserDateTime(value, format, zone, isConvertInLocal) {
    try {
      if (isConvertInLocal === void 0 || isConvertInLocal === true) {
        const d = new Date(value);
        const localOffset = zone * 6e4;
        const localTime = d.getTime() - localOffset;
        d.setTime(localTime);
        return formatDate(d, format, "en-US");
      } else {
        const d = new Date(value);
        return formatDate(d, format, "en-US");
      }
    } catch (error) {
      return "";
    }
  }
  toFormViewGroup(dmos) {
    const loginUser = this.userDetail;
    const userDisplayDetail = loginUser.FirstName + " " + loginUser.LastName + " (" + loginUser.UserName + ")";
    const currentDate = this.getCureentDateTime();
    const currentDateWithoutTime = this.getCurrentDateWithoutTime();
    const group = {};
    const currentStageName = this.CurrentStage ? this.CurrentStage.DisplayName : "";
    const currentStateName = this.CurrentState ? this.CurrentState.DisplayName : "";
    dmos.forEach((dmo) => {
      let value = dmo.DefaultValue || null;
      if (dmo.Type === "DateTimeZone") {
        value = dmo.Options.split(",")[0];
      } else if (dmo.Type === "DropDownList") {
        if (dmo.DataSource === "json" && dmo.Options !== "") {
          value = JSON.parse(dmo.Options)[0].ValueField;
        } else if (dmo.DataSource === "value" && dmo.Options !== "") {
          value = dmo.Options.split(",")[0];
        }
        if (value === "" || value == null) {
          value = "";
        }
      } else if (dmo.Type === "CreatedBy") {
        value = userDisplayDetail;
      } else if (dmo.Type === "CreatedDate") {
        value = currentDate.toString().substr(0, 10);
      } else if (dmo.Type === "CreatedDateTime") {
        value = currentDate.toString();
      } else if (dmo.Type === "LastUpdatedBy") {
        value = userDisplayDetail;
      } else if (dmo.Type === "LastUpdatedDate") {
        value = currentDate.toString().substr(0, 10);
      } else if (dmo.Type === "LastUpdatedDateTime") {
        value = currentDate.toString();
      } else if (dmo.Type === "CurrentStage") {
        value = currentStageName;
      } else if (dmo.Type === "CurrentState") {
        value = currentStateName;
      } else if (dmo.Type === "DateWithCalendar" || dmo.Type === "StaticDateBox") {
        if (value === "xxxCurrentDatexxx") {
          value = currentDateWithoutTime.toString();
        }
        value = this.ngbDateFRParserFormatter.parse(value);
      }
      const validators = [];
      if (dmo.IsRequired === true) {
        validators.push(Validators.required);
      }
      if (dmo.Type === "UrlTextBox") {
        validators.push(urlValidator);
      }
      if (dmo.Type === "PhoneTextBox") {
        validators.push(phoneNumberValidator);
      }
      if (dmo.Type === "EmailEditBox") {
        validators.push(Validators.email);
      }
      if (dmo.Type === "DropDownList" && dmo.IsRequired === true) {
        validators.push(Validators.required);
      }
      if (dmo.Name == null || dmo.Name === "") {
        dmo.Name = dmo.GUID;
      }
      if (dmo.Type === "DateTimeBox") {
        validators.push(Validators.required);
      }
      if (dmo.Type === "CheckBoxList") {
        const arr = dmo.Options.split(",").map((option) => new UntypedFormControl(false));
        if (dmo.IsRequired) {
          group[dmo.Name] = new UntypedFormArray(arr, this.minSelectedCheckboxes(1, group[dmo.Name]));
        } else {
          group[dmo.Name] = new UntypedFormArray(arr);
        }
      } else if (dmo.Type === "DateTimeZone") {
        group[dmo.Name] = new UntypedFormGroup({
          date: new UntypedFormControl(null, validators),
          time: new UntypedFormControl("12:00 AM", validators),
          timezone: new UntypedFormControl("", validators)
        });
      } else {
        group[dmo.Name] = new UntypedFormControl(value, validators);
      }
    });
    return new UntypedFormGroup(group);
  }
  minSelectedCheckboxes(min = 1, formArray) {
    const validator = (formArray2) => {
      const totalSelected = formArray2.controls.map((control) => control.value).reduce((prev, next) => next ? prev + next : prev, 0);
      return totalSelected >= min ? null : { required: true };
    };
    return validator;
  }
  sanitizeFormValue(dmos, formValue = {}, opts = { deleteNullValues: true }) {
    const loginUser = this.userDetail;
    let formValueArray = [];
    if (formValue != void 0 && formValue != null) {
      formValueArray = Object.keys(formValue);
    }
    dmos.forEach((dmo) => {
      const value = formValue[dmo.Name];
      if (formValueArray.findIndex((x) => x == dmo.Name) > -1) {
        if (dmo.RegularExpression !== void 0 && dmo.RegularExpression.Type === "Dollar") {
          if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf("$") >= 0) {
            formValue[dmo.Name] = formValue[dmo.Name].replace("$", "").trim();
          }
        }
        if (dmo.RegularExpression !== void 0 && dmo.RegularExpression.Type === "Percent") {
          if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf("%") >= 0) {
            formValue[dmo.Name] = formValue[dmo.Name].replace("%", "").trim();
          }
        }
        if (dmo.Type === "CheckBoxList") {
          if (formValue[dmo.Name] != void 0) {
            if (typeof formValue[dmo.Name] !== "string") {
              const options = [];
              formValue[dmo.Name].forEach((val, i) => {
                if (val) {
                  options.push(dmo.Options.split(",")[i]);
                }
              });
              if (options.length === 0) {
                formValue[dmo.Name] = "";
              } else if (options.length === 1) {
                formValue[dmo.Name] = options[0];
              } else {
                for (let i = 0; i < options.length; i++) {
                  i === 0 ? formValue[dmo.Name] = options[i] : formValue[dmo.Name] += "|" + options[i];
                }
              }
            }
          } else {
            formValue[dmo.Name] = null;
          }
        }
        if (dmo.Type === "DateTimeZone") {
          if (formValue[dmo.Name] !== void 0) {
            const { date, time, timezone } = formValue[dmo.Name];
            if (date != null && date !== "") {
              formValue[dmo.Name] = this.getUserDateTime(this.ngbDateFRParserFormatter.format(date) + " " + time + " " + timezone, "MM/dd/yyyy h:mm:ss a", loginUser.TimeZone * -1);
            } else {
              formValue[dmo.Name] = null;
            }
          } else {
            if (formValue[dmo.Name] === null) {
              formValue[dmo.Name] = "";
            } else {
              formValue[dmo.Name] = null;
            }
          }
        }
        if (dmo.Type === "DateWithCalendar" || dmo.Type === "StaticDateBox") {
          if (formValue[dmo.Name] != null && formValue[dmo.Name] !== "" && formValue[dmo.Name].hasOwnProperty("year") && formValue[dmo.Name].hasOwnProperty("month") && formValue[dmo.Name].hasOwnProperty("day")) {
            let time = /* @__PURE__ */ new Date();
            const { year, month, day } = formValue[dmo.Name];
            if (dmo.Type === "StaticDateBox") {
              formValue[dmo.Name] = `${month}/${day}/${year}`;
              formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], environment.Setting.dateTimeFormat1, loginUser.TimeZone * -1, false);
            }
            if (dmo.Type === "DateWithCalendar") {
              formValue[dmo.Name] = `${month}/${day}/${year} ` + formatDate(time, "HH:mm:ss", "en-US");
              formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], "MM/dd/yyyy HH:mm:ss", loginUser.TimeZone * -1);
            }
          } else {
            if (formValue[dmo.Name] === null) {
              formValue[dmo.Name] = "";
            } else {
              if (formValue[dmo.Name] !== "")
                formValue[dmo.Name] = null;
            }
          }
        }
        if (dmo.Type === "DateTimeBox") {
          if (value) {
            const format = environment.Setting.dateTimeFormat24 ? "MM/dd/yyyy HH:mm:ss" : "MM/dd/yyyy h:mm:ss a";
            formValue[dmo.Name] = this.getUserDateTime(value.format("MM/DD/yyyy"), format, loginUser.TimeZone * -1);
          } else {
            formValue[dmo.Name] = "";
          }
        }
        if (dmo.Type === "KeyValueSearchBox") {
          if (formValue[dmo.Name] != null && formValue[dmo.Name] !== "" && formValue[dmo.Name].ddOptionKey != null && formValue[dmo.Name].ddOptionKey !== "" && formValue[dmo.Name].ddOptionValue != null && formValue[dmo.Name].ddOptionValue !== "") {
            formValue[dmo.Name] = formValue[dmo.Name].ddOptionValue + " (" + formValue[dmo.Name].ddOptionKey + ")";
          } else {
            formValue[dmo.Name] = "";
          }
        }
        if (dmo.Type === "KeyValueDropdownList") {
          const value2 = formValue[dmo.Name];
          if (value2 && value2?.ddOptionKey && value2?.ddOptionValue) {
            formValue[dmo.Name] = value2.ddOptionKey + "~~~" + value2.ddOptionValue;
          } else {
            formValue[dmo.Name] = "";
          }
        }
        if (dmo.Type === "MultiSelectDropDownList") {
          if (value) {
            const sanitized = value.map((rec) => rec.value || rec).filter((rec) => rec.id && rec.text);
            formValue[dmo.Name] = JSON.stringify(sanitized);
          }
        }
        if (dmo.Type === "RangeBox") {
          if (formValue[dmo.Name] === void 0 || formValue[dmo.Name] === null) {
            formValue[dmo.Name] = null;
          } else {
            formValue[dmo.Name] = formValue[dmo.Name];
          }
        }
      }
    });
    Object.keys(formValue).forEach((key) => {
      if (typeof formValue[key] === "string") {
        formValue[key] = formValue[key].trim();
      }
      if (formValue[key] == null && opts.deleteNullValues) {
        delete formValue[key];
      }
    });
    return formValue;
  }
  // for Uniqueness 
  sanitizeFormValueForValidateUniqueness(dmos, formValue = {}) {
    const loginUser = this.userDetail;
    dmos.forEach((dmo) => {
      const value = formValue[dmo.Name];
      if (dmo.RegularExpression !== void 0 && dmo.RegularExpression.Type === "Dollar") {
        if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf("$") >= 0) {
          formValue[dmo.Name] = formValue[dmo.Name].replace("$", "").trim();
        }
      }
      if (dmo.RegularExpression !== void 0 && dmo.RegularExpression.Type === "Percent") {
        if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf("%") >= 0) {
          formValue[dmo.Name] = formValue[dmo.Name].replace("%", "").trim();
        }
      }
      if (dmo.Type === "CheckBoxList") {
        if (formValue[dmo.Name] != void 0) {
          if (typeof formValue[dmo.Name] !== "string") {
            const options = [];
            formValue[dmo.Name].forEach((val, i) => {
              if (val) {
                options.push(dmo.Options.split(",")[i]);
              }
            });
            if (options.length === 0) {
              formValue[dmo.Name] = "";
            } else if (options.length === 1) {
              formValue[dmo.Name] = options[0];
            } else {
              for (let i = 0; i < options.length; i++) {
                i === 0 ? formValue[dmo.Name] = options[i] : formValue[dmo.Name] += "|" + options[i];
              }
            }
          }
        } else {
          formValue[dmo.Name] = null;
        }
      }
      if (dmo.Type === "DateTimeZone") {
        if (formValue[dmo.Name] !== void 0) {
          const { date, time, timezone } = formValue[dmo.Name];
          if (date != null && date !== "") {
            formValue[dmo.Name] = this.getUserDateTime(this.ngbDateFRParserFormatter.format(date) + " " + time + " " + timezone, "MM/dd/yyyy h:mm:ss a", loginUser.TimeZone * -1);
          } else {
            formValue[dmo.Name] = null;
          }
        } else {
          formValue[dmo.Name] = null;
        }
      }
      if (dmo.Type === "DateWithCalendar" || dmo.Type === "StaticDateBox") {
        if (formValue[dmo.Name] != null && formValue[dmo.Name] !== "" && formValue[dmo.Name].hasOwnProperty("year") && formValue[dmo.Name].hasOwnProperty("month") && formValue[dmo.Name].hasOwnProperty("day")) {
          let time = /* @__PURE__ */ new Date();
          const { year, month, day } = formValue[dmo.Name];
          if (dmo.Type === "StaticDateBox") {
            formValue[dmo.Name] = `${month}/${day}/${year}`;
            formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], environment.Setting.dateTimeFormat1, loginUser.TimeZone * -1, false);
          }
          if (dmo.Type === "DateWithCalendar") {
            formValue[dmo.Name] = `${month}/${day}/${year} ` + formatDate(time, "HH:mm:ss", "en-US");
            formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], "MM/dd/yyyy HH:mm:ss", loginUser.TimeZone * -1);
          }
        } else {
          formValue[dmo.Name] = null;
        }
      }
      if (dmo.Type === "DateTimeBox") {
        if (value) {
          const format = environment.Setting.dateTimeFormat24 ? "MM/dd/yyyy HH:mm:ss" : "MM/dd/yyyy h:mm:ss a";
          formValue[dmo.Name] = this.getUserDateTime(value.format("MM/DD/yyyy"), format, loginUser.TimeZone * -1);
        } else {
          formValue[dmo.Name] = "";
        }
      }
      if (dmo.Type === "KeyValueSearchBox") {
        if (formValue[dmo.Name] != null && formValue[dmo.Name] !== "" && formValue[dmo.Name].ddOptionKey != null && formValue[dmo.Name].ddOptionKey !== "") {
          formValue[dmo.Name] = formValue[dmo.Name].ddOptionKey;
        } else {
          formValue[dmo.Name] = null;
        }
      }
      if (dmo.Type === "RangeBox") {
        if (!!formValue[dmo.Name]) {
          const group = formValue[dmo.Name];
          if (formValue[dmo.Name] === void 0 || formValue[dmo.Name] === null) {
            formValue[dmo.Name] = null;
          } else
            formValue[dmo.Name] = formValue[dmo.Name];
        }
      }
    });
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] == null) {
        delete formValue[key];
      }
    });
    return formValue;
  }
  getDirtyValues(form) {
    const dirtyValues = {};
    Object.keys(form.controls).forEach((key) => {
      const currentControl = form.controls[key];
      if (currentControl.dirty) {
        dirtyValues[key] = currentControl.value;
      }
    });
    return dirtyValues;
  }
  GetCountry() {
    return this.api.get("modeler/getcountry");
  }
  GetState() {
    return this.api.get("modeler/getstate");
  }
  GetDDLOption(dataSrc, processName, transactionId, identifierName, parentvalue, timeZone, userId, language, selecedValue) {
    const Src = "modeler/data/" + dataSrc + "?processName=" + processName + "&transactionId=" + transactionId + "&identifierName=" + identifierName + "&parentvalue=" + parentvalue + "&timeZone=" + timeZone + "&userId=" + userId + "&language=" + language + "&selecedValue=" + selecedValue;
    return this.api.get(Src);
  }
  GetAdvanceSearchOption(urlPost, config) {
    return __async(this, null, function* () {
      return yield this.api.postAdvanceSearch(urlPost, config);
    });
  }
  GetPlasmaId(dmoName) {
    return this.api.get("application/plasmaId/" + dmoName);
  }
  UploadFile(url, formData) {
    return this.api.UploadFile(url, formData);
  }
  DeleteFile(url, formData) {
    return this.api.DeleteFile(url, formData);
  }
  downloadfile(url, formData) {
    return this.api.postGetFile(url, formData, "blob");
  }
  static {
    this.\u0275fac = function DmoControlService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmoControlService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(NgbDateFRParserFormatter), \u0275\u0275inject(UserDetail));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DmoControlService, factory: _DmoControlService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${environment.Setting["BaseAPIUrl"]}/users`);
  }
  getById(id) {
    return this.http.get(`${environment.Setting["BaseAPIUrl"]}/users/${id}`);
  }
  register(user) {
    return this.http.post(`${environment.Setting["BaseAPIUrl"]}/users/register`, user);
  }
  update(user) {
    return this.http.put(`${environment.Setting["BaseAPIUrl"]}/users/${user.UserID}`, user);
  }
  delete(id) {
    return this.http.delete(`${environment.Setting["BaseAPIUrl"]}/users/${id}`);
  }
  getDataByBody(url, data) {
    const webUrl = `${environment.Setting["C2M_Console_API_URL"]}/${url}`;
    var body = JSON.stringify(data);
    return this.http.post(webUrl, body, { headers: new HttpHeaders({ "Accept": "application/json", "Content-Type": "application/json" }) }).pipe(retry(0), catchError(this.handleError));
  }
  getCascadingDropdown(bodyData) {
    return __async(this, null, function* () {
      const webUrl = `${environment.Setting["BaseAPIUrlLmk"]}/${"listview/getprocessdata"}`;
      const body = JSON.stringify(bodyData);
      const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json", "Accept": "application/json" }) };
      return yield this.http.post(webUrl, body, httpAllOptions).toPromise().catch(this.handleError);
    });
  }
  AddUpdateUser(url, data) {
    const webUrl = `${environment.Setting["BaseAPIUrlLmk"]}/${url}`;
    const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
    return this.http.post(webUrl, data, httpAllOptions).pipe(retry(0), catchError(this.handleError));
  }
  GetRoleList(url, data) {
    return __async(this, null, function* () {
      const webUrl = `${environment.Setting["C2M_Console_API_URL"]}/${url}`;
      var body = JSON.stringify(data);
      return yield this.http.post(webUrl, body, { headers: new HttpHeaders({ "Accept": "application/json", "Content-Type": "application/json" }) }).toPromise().catch(this.handleError);
    });
  }
  GetUserDetails(url, data) {
    return __async(this, null, function* () {
      const webUrl = `${environment.Setting["BaseAPIUrlLmk"]}/${url}`;
      const body = JSON.stringify(data);
      const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
      return yield this.http.post(webUrl, body, httpAllOptions).toPromise().catch(this.handleError);
    });
  }
  GetDropdownDetails(url) {
    return __async(this, null, function* () {
      const webUrl = `${environment.Setting["BaseAPIUrlLmk"]}/${url}`;
      const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
      return yield this.http.post(webUrl, null, httpAllOptions).toPromise().catch(this.handleError);
    });
  }
  UploadFile(url, formData) {
    return __async(this, null, function* () {
      const webUrl = `${environment.Setting["C2M_Console_API_URL"]}/${url}`;
      return yield this.http.post(webUrl, formData).pipe(retry(0), catchError(this.handleError)).toPromise();
    });
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  static {
    this.\u0275fac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/application.service.ts
var ApplicationService = class _ApplicationService {
  constructor(api) {
    this.api = api;
    this.checkValidation = new Subject();
  }
  checkValidations() {
    this.checkValidation.next(true);
  }
  getProcess() {
    return this.api.get("application/process");
  }
  insertApplication(data) {
    return this.api.post("application/insertapplication", data);
  }
  updateApplication(data) {
    return this.api.post("application/updateapplication", data);
  }
  getApplicationData(identifierName = null, identifierValue = null, view, transactionId) {
    return this.api.get("application/applicationdata/" + identifierName + "/" + identifierValue + "/" + view, { transactionId });
  }
  getLogData(identifierName = null, identifierValue = null, transactionId, pageSize = 10, pageNumber = 1) {
    return this.api.get("application/activitylog/" + identifierName + "/" + identifierValue, { transactionId, pageSize, pageNumber });
  }
  getHistoryLogData(identifierName = null, identifierValue = null, transactionId, pageSize = 10, pageNumber = 1) {
    let canvasType = sessionStorage.getItem("AppName") && sessionStorage.getItem("AppName") === "LMKOpportunities" ? "View4" : "AdminView";
    return this.api.get("application/historylog/" + identifierName + "/" + identifierValue, { transactionId, pageSize, pageNumber, canvasType });
  }
  getNotificationLogData(identifierName = null, identifierValue = null, transactionId, pageSize = 10, pageNumber = 1) {
    return this.api.get("application/emaillog/" + identifierName + "/" + identifierValue, { transactionId, pageSize, pageNumber });
  }
  gettempDate() {
    return this.api.get("application/getAnnouncements?processName=driver&flag=all&pageSize=20&pageFrom=0");
  }
  getTopCornerDetail(identifierName = null, identifierValue = null, canvasType, transactionId) {
    return this.api.get("application/gettopcornerdetail/" + identifierName + "/" + identifierValue + "/" + canvasType, { transactionId });
  }
  getBatchUpdateDetails(processName) {
    return this.api.get("application/getBatchUpdateDetails", { processName });
  }
  batchUpdate(data, processName) {
    return this.api.post("application/batchUpdate", data, { processName });
  }
  checkSubProcessRecordCount(subprocessrecordcount) {
    return this.api.post("application/RecordCountByState", subprocessrecordcount);
  }
  getGridDmogDataMapping(params) {
    return this.api.get("application/getGridDmogDataMapping", params);
  }
  getGridDmogData(params) {
    return this.api.post("application/getGridDmogData", params);
  }
  insertUpdateGridDmogData(params) {
    return this.api.post("application/InsertUpdateGridDmogData", params);
  }
  deleteGridDmogData(ids) {
    return this.api.deleteGrid("application/deleteGridDmogData?dataIDs=" + ids.toString());
  }
  getBulkLogData(bodyData) {
    return this.api.post("application/getBulkUploadLog", bodyData);
  }
  DownloadBulkLog(processName) {
    return this.api.postGetFile("application/getBulkUploadTemplate/" + processName, null, "Blob");
  }
  DownloadBulkUploadErrorLog(FileName) {
    return this.api.postGetFile("application/DownloadBulkUploadErrorLog/" + FileName, null, "Blob");
  }
  //Change Validate Uniqueness Process Ticket - #1005
  //  ValidateUniqueDmoValue(data) {
  //   return this.api.post('application/validateuniquedmovalue', data);    
  // }
  //Change for customer master sap data sending
  deleteGridData(id) {
    return this.api.deleteGrid("application/deleteTransaction?TransactionIDs=" + id);
  }
  getDisplayNameByProcessName(ProcessName) {
    return this.api.get(`application/getDisplayNameByProcessName/${ProcessName}`, null);
  }
  // getTriggerConfirmMsg(processName, triggerName) {
  //   return this.lmkapi.get(`watchlist/GetTriggerConfirmMsg/${processName}/${triggerName}`,null);
  // }
  UpdateKeyValueDmoReferencedValues(data) {
    return this.api.post("formview/UpdateKeyValueDmoReferencedValues", data);
  }
  static {
    this.\u0275fac = function ApplicationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplicationService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationService, factory: _ApplicationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/loader/loader.component.ts
var _c0 = (a0) => ({ "transform": a0 });
function LoaderAComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isActive(i_r2));
    \u0275\u0275advance();
    \u0275\u0275property("src", icon_r1.src, \u0275\u0275sanitizeUrl)("alt", icon_r1.alt);
  }
}
var LoaderAComponent = class _LoaderAComponent {
  constructor() {
    this.icons = [
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-2.svg"), alt: "Icon 2" },
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-1.svg"), alt: "Icon 1" },
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-3.svg"), alt: "Icon 3" },
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-4.svg"), alt: "Icon 4" },
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-2.svg"), alt: "Icon 2 Duplicate" },
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-1.svg"), alt: "Icon 1 Duplicate" },
      { src: UtilService.getUrlForImage("/assets/styles/images/icon-3.svg"), alt: "Icon 3 Duplicate" }
    ];
    this.loaderSvgUrl = UtilService.getUrlForImage("/assets/styles/images/clean_loader.svg");
    this.itemWidth = 70;
    this.currentIndex = 0;
    this.trackTranslate = 0;
  }
  ngOnInit() {
    this.updateActive();
    this.carouselSub = interval(500).subscribe(() => this.slideNext());
  }
  ngOnDestroy() {
    this.carouselSub?.unsubscribe();
  }
  slideNext() {
    this.currentIndex++;
    if (this.currentIndex >= this.icons.length - 2) {
      setTimeout(() => {
        this.currentIndex = 0;
        this.updateActive(false);
      }, 400);
    } else {
      this.updateActive(true);
    }
  }
  updateActive(withTransition = true) {
    const offset = this.currentIndex * this.itemWidth;
    this.trackTranslate = offset;
  }
  isActive(index) {
    return index === this.currentIndex + 1;
  }
  static {
    this.\u0275fac = function LoaderAComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderAComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderAComponent, selectors: [["app-loader"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "loader_wrap"], [1, "onboarding-generating-figure__bg"], ["type", "image/svg+xml", "aria-label", "Loading..."], [1, "carousel-container"], [1, "carousel-track", 3, "ngStyle"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "text"], [1, "progress2", "progress-moved"], [1, "progress-bar2"], [1, "carousel-item"], [3, "src", "alt"]], template: function LoaderAComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "object", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
        \u0275\u0275template(5, LoaderAComponent_div_5_Template, 2, 4, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275text(7, "Applying model changes...");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275element(10, "div", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data", ctx.loaderSvgUrl, \u0275\u0275sanitizeResourceUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c0, "translateX(-" + ctx.trackTranslate + "px)"));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.icons);
      }
    }, dependencies: [CommonModule, NgForOf, NgStyle], styles: ['\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #f0f0f0;\n  opacity: 0;\n}\n.loader_wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  z-index: 1000;\n  font-family: "Roboto", sans-serif;\n}\n.onboarding-generating-figure__bg[_ngcontent-%COMP%] {\n  position: relative;\n  width: 360px;\n  height: 230px;\n}\n.loader-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.carousel-container[_ngcontent-%COMP%] {\n  width: 215px;\n  overflow: hidden;\n  padding: 10px 0;\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.4s ease-in-out;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  min-width: 60px;\n  height: 100px;\n  margin: 0 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  transition: transform 0.3s ease, box-shadow 0.3s;\n}\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  transition: transform 0.3s ease;\n}\n.carousel-item.active[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n  transform: scale(1.15);\n}\n.progress2[_ngcontent-%COMP%] {\n  bottom: 15px;\n  padding: 1px;\n  width: 400px;\n  border-radius: 30px;\n  background: #C8D8F1;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);\n}\n.progress-moved[_ngcontent-%COMP%]   .progress-bar2[_ngcontent-%COMP%] {\n  width: 97%;\n  background-color: #798FDD;\n  animation: _ngcontent-%COMP%_progressAnimation 6s;\n}\n.progress-bar2[_ngcontent-%COMP%] {\n  height: 5px;\n  border-radius: 30px;\n  background-image:\n    linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0.3),\n      rgba(255, 255, 255, 0.05));\n  transition: 0.4s linear;\n  transition-property: width, background-color;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  color: #005996;\n}\n@keyframes _ngcontent-%COMP%_progressAnimation {\n  0% {\n    width: 0%;\n    background-color: #798FDD;\n  }\n  100% {\n    width: 85%;\n    background-color: #798FDD;\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderAComponent, { className: "LoaderAComponent", filePath: "src\\app\\shared\\components\\loader\\loader.component.ts", lineNumber: 13 });
})();
var LoaderBComponent = class _LoaderBComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function LoaderBComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderBComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderBComponent, selectors: [["app-loader-b"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoaderBComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div")(2, "div")(3, "div")(4, "div");
        \u0275\u0275elementEnd();
      }
    }, styles: ['\n\n.lds-ring[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999999;\n  width: 50px;\n  height: 50px;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0px;\n}\n.lds-ring[_ngcontent-%COMP%]:before {\n  content: "";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 45px;\n  height: 45px;\n  margin: 6px;\n  border: 6px solid #EB583B;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #EB583B transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes _ngcontent-%COMP%_lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderBComponent, { className: "LoaderBComponent", filePath: "src\\app\\shared\\components\\loader\\loader.component.ts", lineNumber: 128 });
})();

// src/app/shared/services/loader.service.ts
var LoaderService = class _LoaderService {
  constructor() {
    this.globalLoaderSubject = new BehaviorSubject(LoaderBComponent);
    this.localLoaderSubject = new BehaviorSubject(null);
    this.globalLoader$ = this.globalLoaderSubject.asObservable();
    this.localLoader$ = this.localLoaderSubject.asObservable();
  }
  setGlobalLoader(component) {
    this.globalLoaderSubject.next(component);
  }
  setLocalLoader(component) {
    this.localLoaderSubject.next(component);
  }
  get currentGlobalLoader() {
    return this.globalLoaderSubject.getValue();
  }
  get currentLocalLoader() {
    return this.localLoaderSubject.getValue();
  }
  static {
    this.\u0275fac = function LoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/handle-errors/global-http-interceptor.service.ts
var GlobalHttpInterceptorService = class _GlobalHttpInterceptorService {
  constructor(router, zone, injector, loaderService) {
    this.router = router;
    this.zone = zone;
    this.injector = injector;
    this.loaderService = loaderService;
    this.isDisplayingAuthError = false;
    this.isDisplayingGeneralError = false;
  }
  intercept(req, next) {
    this.setLoader(req);
    const nextReq = this.applyNoCacheIfNeeded(req);
    return next.handle(nextReq).pipe(map((event) => this.handleSuccess(event)), catchError((error) => this.handleError(error)));
  }
  setLoader(req) {
    if (req.url.includes("SaveDmogProps") || req.url.includes("SaveBmoDmogLinking")) {
      this.loaderService.setLocalLoader(LoaderAComponent);
    } else {
      this.loaderService.setLocalLoader(null);
      this.loaderService.setGlobalLoader(LoaderBComponent);
    }
  }
  applyNoCacheIfNeeded(req) {
    if (!req.url.includes(environment.Setting.C2M_Console_API_URL)) {
      return req.clone({
        headers: req.headers.set("Cache-Control", "no-cache, max-age=0").set("Pragma", "no-cache")
      });
    }
    return req;
  }
  handleSuccess(event) {
    if (event instanceof HttpResponse && event.body?.statuscode === 207) {
      const toastr = this.injector.get(ToastrService);
      toastr.show(event.body.message);
    }
    return event;
  }
  handleError(error) {
    const toastr = this.injector.get(ToastrService);
    if (this.isJsonBlobError(error)) {
      return this.handleBlobJsonError(error, toastr);
    }
    if (error.error instanceof ErrorEvent) {
      console.error(`Client-side error: ${error.error.message}`);
      return throwError(() => error);
    }
    if (["savebmJson", "savewfJson"].some((sub) => error.url?.includes(sub))) {
      return throwError(() => error);
    }
    return this.processHttpError(error, toastr);
  }
  isJsonBlobError(error) {
    return error.error instanceof Blob && error.error.type === "application/json";
  }
  handleBlobJsonError(error, toastr) {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const msg = JSON.parse(reader.result);
          toastr.error(msg, "Bad Request", { timeOut: 1e4 });
          observer.error(new HttpErrorResponse({
            error: msg,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url
          }));
        } catch {
          observer.error(error);
        }
      };
      reader.onerror = () => observer.error(error);
      reader.readAsText(error.error);
    });
  }
  processHttpError(error, toastr) {
    if (!navigator.onLine) {
      this.runInZone(() => {
        toastr.warning("No internet Connection.", "Warning", { timeOut: 1e4 });
      });
    } else {
      const status = error.status;
      const msg = error.error?.message;
      switch (status) {
        case 500:
          this.handle500Error(msg, toastr);
          break;
        case 400:
          this.handle400Error(msg, toastr, error);
          break;
        case 401:
          if (!this.isDisplayingAuthError) {
            this.isDisplayingAuthError = true;
            this.runInZone(() => {
              toastr.error(msg || error.message, "Not Authorized", { timeOut: 1e4 }).onHidden.subscribe(() => this.isDisplayingAuthError = false);
              this.router.navigate(["/auth/login"]);
            });
          }
          break;
        case 403:
          this.handle403Error(error, toastr);
          break;
        default:
          this.runInZone(() => {
            if (!status && !this.isDisplayingGeneralError) {
              this.isDisplayingGeneralError = true;
              toastr.error(msg || error.message, "Error", { timeOut: 1e4 }).onHidden.subscribe(() => this.isDisplayingGeneralError = false);
            }
          });
          break;
      }
    }
    return throwError(() => error);
  }
  handle500Error(msg, toastr) {
    this.runInZone(() => {
      if (msg === "Record already exists in Active State" || msg === "Record already exists") {
        toastr.warning(msg);
      } else if (msg === "Your account is inactive.") {
        toastr.warning("Account Invalid, Please contact your local Nutrien branch for more information.");
      } else {
        toastr.error(msg || "Internal Server Error", "Internal Server Error", { timeOut: 1e4 });
      }
    });
  }
  handle400Error(msg, toastr, error) {
    this.runInZone(() => {
      if (msg?.includes("Unauthorized Access")) {
        this.router.navigate(["/auth/error"]);
      } else {
        toastr.error(msg ?? error.error ?? error.message, "Bad Request", { timeOut: 1e4 });
      }
    });
  }
  handle403Error(error, toastr) {
    this.runInZone(() => {
      const err = error.error;
      let message;
      if (typeof err === "string") {
        if (err === "You do not have permissions to delete the records.") {
          message = "You do not have permissions to delete records in this section.";
        } else {
          message = err;
        }
      } else {
        message = err?.message;
      }
      toastr.error(message, "Not Authorized", { timeOut: 1e4 });
    });
  }
  runInZone(fn) {
    this.zone.run(fn);
  }
  static {
    this.\u0275fac = function GlobalHttpInterceptorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalHttpInterceptorService)(\u0275\u0275inject(Router), \u0275\u0275inject(NgZone), \u0275\u0275inject(Injector), \u0275\u0275inject(LoaderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalHttpInterceptorService, factory: _GlobalHttpInterceptorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/handle-errors/global-error-handler.service.ts
var import_raygun4js = __toESM(require_raygun_umd());
var GlobalErrorHandlerService = class _GlobalErrorHandlerService {
  constructor(zone, injector) {
    this.zone = zone;
    this.injector = injector;
  }
  handleError(error) {
    const messageService = this.injector.get(MessageService);
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (chunkFailedMessage.test(error.message)) {
      window.location.reload();
    } else {
      if (error instanceof Error) {
        if (environment.production) {
          (0, import_raygun4js.default)("send", { error });
        } else {
          this.zone.run(() => {
            messageService.showMessage("Fail", { body: error.message });
          });
        }
      }
    }
    console.error(error);
  }
  static {
    this.\u0275fac = function GlobalErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalErrorHandlerService)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Injector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalErrorHandlerService, factory: _GlobalErrorHandlerService.\u0275fac });
  }
};

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    const accessToken = req?.body?.AccessToken != void 0 && req?.body?.AccessToken != "" ? req?.body?.AccessToken : localStorage.getItem("AccessToken") || "";
    let authRequest;
    if (req.url.toLowerCase().includes("/gateway") || req.url.toLowerCase().includes("/user/token") || req.url.toLowerCase().includes("/getgatewaylogdata")) {
      return next.handle(req);
    } else {
      authRequest = req.clone({
        headers: req.headers.set("accessToken", accessToken)
      });
      return next.handle(authRequest);
    }
  }
  static {
    this.\u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthInterceptor)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
  }
};

// src/app/core/core.module.ts
var CoreModule = class _CoreModule {
  constructor(parentModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
  static {
    this.\u0275fac = function CoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CoreModule)(\u0275\u0275inject(_CoreModule, 12));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CoreModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      CurrencyPipe,
      AuthGuard,
      ApiService,
      AuthenticationService,
      ListviewService,
      DmoControlService,
      UserService,
      ApplicationService,
      NgbDateFRParserFormatter,
      provideHttpClient(),
      { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
      { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ] });
  }
};

// src/app/core/services/header.service.ts
var HeaderService = class _HeaderService {
  constructor(api) {
    this.api = api;
    this.change = new EventEmitter();
  }
  static {
    this.\u0275fac = function HeaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderService)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HeaderService, outputs: { change: "change" } });
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HeaderService, factory: _HeaderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/column-filter.service.ts
var ColumnFilterService = class _ColumnFilterService {
  constructor() {
    this.columnFilterData = {
      TextboxTypes: [
        {
          key: "CONTAINS",
          value: "Contains"
        },
        // {
        //   key: 'CONTAINS_CASE_SENSITIVE',
        //   value: 'Contains Case Sensitive' devops-1
        // },
        {
          key: "DOES_NOT_CONTAIN",
          value: "Does Not Contain"
        },
        // {
        //   key: 'DOES_NOT_CONTAIN_CASE_SENSITIVE',
        //   value: 'Does not contain case sensitive'
        // },
        // {
        //   key: 'Empty',
        //   value: 'Empty'
        // },
        {
          key: "ENDS_WITH",
          value: "Ends with"
        },
        // {
        //   key: 'ENDS_WITH_CASE_SENSITIVE',
        //   value: 'Ends with case sensitive'
        // },
        // {
        //   key: 'EQUAL_CASE_SENSITIVE',
        //   value: 'Equal case sensitive'
        // },
        {
          key: "EQUAL",
          value: "Equal"
        },
        {
          key: "STARTS_WITH",
          value: "Starts With"
        },
        {
          key: "NOT_NULL",
          value: "Not Empty "
          //Entities related Code -Nidhi
        },
        {
          key: "NULL",
          value: "Empty"
          //Entities related Code -Nidhi
        },
        {
          key: "IN",
          value: "In"
        },
        {
          key: "NOT_IN",
          value: "Not In"
        }
        // {
        //   key: 'STARTS_WITH_CASE_SENSITIVE',
        //   value: 'Starts With Case Sensitive'
        // }
      ],
      DateFieldTypes: [
        {
          key: "GREATER_THAN",
          value: "Greater Than"
        },
        {
          key: "GREATER_THAN_OR_EQUAL",
          value: "Greater Than or Equal"
        },
        {
          key: "LESS_THAN",
          value: "Less Than"
        },
        {
          key: "LESS_THAN_OR_EQUAL",
          value: "Less Than or Equal"
        },
        {
          key: "NOT_EQUAL",
          value: "Not Equal"
        },
        {
          key: "EQUAL",
          value: "Equal"
        },
        {
          key: "NOT_NULL",
          value: "Not Null"
        },
        {
          key: "NULL",
          value: "Null"
        },
        {
          key: "IN",
          value: "In"
        },
        {
          key: "NOT_IN",
          value: "Not In"
        },
        {
          key: "RANGE",
          value: "Range"
        }
      ]
    };
    this.condition = {
      TextboxTypes: ["CountryList", "CreatedBy", "CurrentStage", "EmailEditBox", "ID", "LastUpdatedBy", "Paragraph", "RoleType", "PhoneTextBox", "TextArea", "TextBox", "UrlTextBox", "USAStateList"],
      DateFieldTypes: ["DateEditBox", "DateTimeZone", "DateWithCalendar", "CreatedDate", "CreatedDateTime", "LastUpdatedDate", "LastUpdatedDateTime", "CRTDON", "MODFON", "DateTimeBox", "StaticDateBox"],
      OptionTypes: ["CheckBoxList", "ColorCodeStatus", "DropDownList", "RadioButtonList", "ListBox", "MultiSelectDropDownList"],
      dataTypes: ["integer", "integer_validate", "dollar", "float"]
    };
  }
  GetFilterByDataType(dataType, dmoValuedataType) {
    if (this.condition.OptionTypes.includes(dataType)) {
      return [];
    } else if (this.condition.DateFieldTypes.includes(dataType)) {
      return this.columnFilterData.DateFieldTypes;
    } else if (dataType.toLowerCase() === "textbox" && dmoValuedataType != void 0 && this.condition.dataTypes.includes(dmoValuedataType.toLowerCase())) {
      return this.columnFilterData.DateFieldTypes;
    } else {
      return this.columnFilterData.TextboxTypes;
    }
  }
  static {
    this.\u0275fac = function ColumnFilterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ColumnFilterService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColumnFilterService, factory: _ColumnFilterService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/sanitizer.service.ts
var SanitizerService = class _SanitizerService {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  sanitize(item) {
    if (typeof item === "string") {
      return this._sanitizeString(item);
    } else if (typeof item === "object") {
      return this._sanitizeObject(item);
    }
    return item;
  }
  _sanitizeObject(obj) {
    const sanitizedObj = {};
    for (const prop in obj) {
      if (typeof obj[prop] === "string")
        sanitizedObj[prop] = this._sanitizeString(obj[prop]);
      else
        sanitizedObj[prop] = obj[prop];
    }
    return sanitizedObj;
  }
  _sanitizeString(str) {
    if (str.includes("localStorage") || str.includes("document.")) {
      str = str.replace(/localStorage/, "");
      str = str.replace(/document./, "");
    }
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
  static {
    this.\u0275fac = function SanitizerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SanitizerService)(\u0275\u0275inject(DomSanitizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SanitizerService, factory: _SanitizerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/dmo-image-control.service.ts
var DmoImageControlService = class _DmoImageControlService {
  constructor(api) {
    this.api = api;
    this.index = 0;
    this.ImagesFileList = [];
    this.ImagesRemoveFileList = [];
    this.SavedImagesFileList = [];
  }
  upload(transactionID) {
    if (this.ImagesRemoveFileList.length > 0) {
      this.ImagesRemoveFileList.forEach((element) => {
        const formData = new FormData();
        formData.append("transactionId", transactionID);
        formData.append("userName", "0");
        formData.append("dmoGUID", element.Guid);
        formData.append("FileName", element.FileName);
        formData.append("IsPermanentDelete", element.IsPermanentFileDeletion || environment.Setting.IsPermanentFileDeletion.toString());
        this.api.DeleteFile("application/deleteFile", formData).subscribe((event) => {
        }, (error) => {
        });
      });
      this.ImagesRemoveFileList = [];
    }
    if (this.ImagesFileList.length > 0) {
      this.ImagesFileList.forEach((element) => {
        const formData = new FormData();
        if (transactionID !== "") {
          formData.append("transactionId", transactionID);
        }
        formData.append("userName", "0");
        formData.append("dmoGUID", element.Guid);
        formData.append("isEncrypted", "false");
        if (element.ImgFileName) {
          formData.append("uploadFile", element.file.file, element.ImgFileName);
        } else {
          formData.append("uploadFile", element.file.file);
        }
        this.api.UploadFile("application/uploadfile", formData).subscribe((event) => {
        }, (error) => {
        });
      });
      this.ImagesFileList = [];
    }
  }
  static {
    this.\u0275fac = function DmoImageControlService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DmoImageControlService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DmoImageControlService, factory: _DmoImageControlService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/utility.service.ts
var UtilityService = class _UtilityService {
  constructor(userDetail) {
    this.userDetail = userDetail;
  }
  generateGridConfig(config) {
    config.PageNumber = config.PageNumber || 0;
    config.PageSize = config.PageSize || 99;
    config.SortColumn = config.SortColumn || "-1";
    config.SortOrder = config.SortOrder || "Asc";
    config.TimeZone = config.TimeZone || (/* @__PURE__ */ new Date()).getTimezoneOffset();
    config.ViewName = config.ViewName || "View 1";
    config.GridFilters = config.GridFilters || [];
    return config;
  }
  generateGridCondition(condition, value) {
    return { Condition: condition, ConditionValue: value };
  }
  generateGridFilter(filterType, dataField, condition, conditionValue, operator = "Or") {
    const filter = {
      DataField: dataField,
      LogicalOperator: operator,
      FilterType: filterType,
      GridConditions: []
    };
    if (condition && conditionValue) {
      filter.GridConditions.push(this.generateGridCondition(condition, conditionValue));
    }
    ;
    return filter;
  }
  genereateConditionObject(obj) {
    return __spreadValues({
      Name: obj.Name,
      IsEnable: obj.IsEnable !== null ? obj.IsEnable : true,
      IsVisible: obj.IsVisible !== null ? obj.IsVisible : true,
      IsRequired: obj.IsRequired !== null ? obj.IsRequired : true,
      isHideFromStageState: obj.isHideFromStageState !== null ? obj.isHideFromStageState : false
    }, obj);
  }
  generateUpdateJson(transactionId, data, processName, triggerName) {
    const { UserName } = this.userDetail;
    return {
      Identifier: {
        Name: null,
        Value: null,
        TrnsctnID: transactionId
      },
      ProcessName: processName || sessionStorage.getItem("processName"),
      StateType: "Normal",
      TriggerName: triggerName || "Save Data",
      UniqueConstraints: "",
      UserName,
      Data: [data]
    };
  }
  static {
    this.\u0275fac = function UtilityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilityService)(\u0275\u0275inject(UserDetail));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilityService, factory: _UtilityService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/models/sale-stage.enum.ts
var SaleStage;
(function(SaleStage2) {
  SaleStage2["Inprocess"] = "In Process";
  SaleStage2["Invoiced"] = "Invoiced";
  SaleStage2["Finalised"] = "Finalised";
  SaleStage2["ReversalProcess"] = "Reversal Process";
  SaleStage2["ReversalCompleted"] = "Reversal Completed";
})(SaleStage || (SaleStage = {}));

export {
  require_raygun_umd,
  LoaderAComponent,
  UserDetail,
  MessageService,
  ApiService,
  AuthenticationService,
  AuthGuard,
  ListviewService,
  NgbDateFRParserFormatter,
  ApplicationService,
  LoaderService,
  CoreModule,
  HeaderService,
  ColumnFilterService,
  DmoImageControlService,
  UtilityService
};
//# sourceMappingURL=chunk-43FCU5DY.js.map
