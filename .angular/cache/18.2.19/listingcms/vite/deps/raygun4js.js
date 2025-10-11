import {
  __commonJS
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
export default require_raygun_umd();
/*! Bundled license information:

raygun4js/dist/raygun.umd.js:
  (*! Raygun4js - v2.28.0 - 2023-09-22
  * https://github.com/MindscapeHQ/raygun4js
  * Copyright (c) 2023 MindscapeHQ; Licensed MIT *)
*/
//# sourceMappingURL=raygun4js.js.map
