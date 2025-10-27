import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray
} from "./chunk-WACMUXJB.js";
import {
  NgbDateFRParserFormatter,
  UserDetail
} from "./chunk-43FCU5DY.js";
import {
  CheckboxControlValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgLabelTemplateDirective,
  NgModel,
  NgMultiLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectOption,
  NgbDateParserFormatter,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbInputDatepicker,
  NgbPopover,
  ReactiveFormsModule,
  SimpleLoaderService,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  UtilService,
  Validators,
  environment,
  takeUntilDestroyed,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ChangeDetectorRef,
  Component,
  CurrencyPipe,
  DOCUMENT,
  DestroyRef,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  HttpClient,
  HttpHeaders,
  HttpParams,
  Inject,
  Injectable,
  InjectionToken,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  SecurityContext,
  SlicePipe,
  Subscription,
  TemplateRef,
  ViewEncapsulation$1,
  debounceTime,
  defer,
  finalize,
  firstValueFrom,
  forkJoin,
  formatDate,
  forwardRef,
  from,
  fromEvent,
  inject,
  input,
  isObservable,
  isPlatformServer,
  map,
  mergeMap,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [["ary", WRAP_ARY_FLAG], ["bind", WRAP_BIND_FLAG], ["bindKey", WRAP_BIND_KEY_FLAG], ["curry", WRAP_CURRY_FLAG], ["curryRight", WRAP_CURRY_RIGHT_FLAG], ["flip", WRAP_FLIP_FLAG], ["partial", WRAP_PARTIAL_FLAG], ["partialRight", WRAP_PARTIAL_RIGHT_FLAG], ["rearg", WRAP_REARG_FLAG]];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer = moduleExports ? context.Buffer : undefined2, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined2, symIterator = Symbol ? Symbol.iterator : undefined2, symToStringTag = Symbol ? Symbol.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer: while (++index < length) {
            var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value);
            }
          }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer: while (++index < length && result2.length < maxLength) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return {
              "criteria": criteria,
              "index": ++index,
              "value": value
            };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer: while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary2, arity];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return {
            "start": start,
            "end": end
          };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap2(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return {
            "done": done,
            "value": value
          };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer2 = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({
                    "func": func,
                    "args": arguments,
                    "thisArg": object
                  });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer2;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap2;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), {
          "chain": false
        });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({
                "func": thru,
                "args": [interceptor],
                "thisArg": undefined2
              });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({
              "name": methodName,
              "func": lodashFunc
            });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// src/app/admin/wf/wfd/util/helpers.ts
var ID_DELIM = "*";
var objToList = (obj = {}) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};
var enumToList = (obj = {}) => {
  return Object.entries(obj).map(([value, key]) => ({ key, value }));
};
var arrayToList = (arr, objKey, objValue) => {
  arr = Array.isArray(arr) ? arr : [];
  return arr.map((item) => ({ key: item[objKey], value: item[objValue] }));
};
var arrayToList1 = (arr, objKey, objValue, objisCheck) => {
  arr = Array.isArray(arr) ? arr : [];
  return arr.map((item) => ({ key: item[objKey], value: item[objValue], objisCheck: item[objisCheck] }));
};
var listToTypeArray = (list, key, value) => {
  list = Array.isArray(list) ? list : [];
  return list.map((item) => {
    const converted = {};
    converted[key] = item.key;
    converted[value] = item.value;
    return converted;
  });
};
var primitiveArrayToList = (arr) => {
  arr = Array.isArray(arr) ? arr : [];
  return arr.map((item) => ({ key: item, value: item }));
};
var keyValueListToKeyList = (list) => {
  if (!Array.isArray(list))
    return [];
  return list.reduce((acc, curr) => {
    curr.key ? acc.push(curr.key) : acc.push(curr);
    return acc;
  }, []);
};
var sanitizeFormArray = (arr, key) => {
  return arr.map((group) => {
    if (key) {
      group[key] = group.checked;
    }
    return group;
  });
};
var toFormGroup = (item, opts = {}) => {
  const group = {};
  const validators = [];
  if (typeof item === "string" || typeof item === "number") {
    const obj = {};
    obj[item] = item;
    item = obj;
  }
  Object.entries(item || {}).forEach(([key, value]) => {
    group[key] = new UntypedFormControl(value);
  });
  opts.deletable = opts.deletable ?? true;
  if (opts.deletable)
    group.deletable = new UntypedFormControl();
  if (opts.addCheckbox)
    group.checked = new UntypedFormControl(false);
  if (opts.required) {
    validators.push(Validators.required);
  }
  return new UntypedFormGroup(group, validators);
};
var toFormArray = (items = [], opts = {}) => {
  const transformed = items.map((item) => toFormGroup(item, opts));
  return new UntypedFormArray(transformed);
};
var constructId = (type, parentId) => type.toString() + ID_DELIM + parentId;
var deconstructId = (id) => {
  const [type, parentId] = id.split(ID_DELIM);
  return { type, parentId };
};

// src/app/admin/lib/custom-select/custom-select.component.ts
var _c0 = (a0, a1) => ({ "is-invalid": a0, "height-fixed": a1 });
function CustomSelectComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275listener("click", function CustomSelectComponent_div_0_ng_template_2_Template_span_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).item;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClick(item_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275property("title", item_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.value);
  }
}
function CustomSelectComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275listener("click", function CustomSelectComponent_div_0_ng_template_3_Template_span_click_0_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r4.item;
      const clear_r7 = ctx_r4.clear;
      return \u0275\u0275resetView(clear_r7(item_r6));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r8 = ctx.label;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((label_r8 == null ? null : label_r8.value) || label_r8);
  }
}
function CustomSelectComponent_div_0_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275listener("click", function CustomSelectComponent_div_0_ng_template_4_div_0_Template_span_click_3_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const clear_r11 = \u0275\u0275nextContext().clear;
      return \u0275\u0275resetView(clear_r11(item_r10));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r10.value);
  }
}
function CustomSelectComponent_div_0_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const items_r12 = \u0275\u0275nextContext().items;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", items_r12.length - 4, " more...");
  }
}
function CustomSelectComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomSelectComponent_div_0_ng_template_4_div_0_Template, 5, 2, "div", 10);
    \u0275\u0275pipe(1, "slice");
    \u0275\u0275template(2, CustomSelectComponent_div_0_ng_template_4_div_2_Template, 3, 1, "div", 11);
  }
  if (rf & 2) {
    const items_r12 = ctx.items;
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(1, 2, items_r12, 0, 4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", items_r12.length > 4);
  }
}
function CustomSelectComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomSelectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "ng-select", 2);
    \u0275\u0275template(2, CustomSelectComponent_div_0_ng_template_2_Template, 2, 2, "ng-template", 3)(3, CustomSelectComponent_div_0_ng_template_3_Template, 4, 1, "ng-template", 4)(4, CustomSelectComponent_div_0_ng_template_4_Template, 3, 6, "ng-template", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CustomSelectComponent_div_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.parentForm);
    \u0275\u0275advance();
    \u0275\u0275property("title", (ctx_r2.selected == null ? null : ctx_r2.selected.value) || (ctx_r2.control == null ? null : ctx_r2.control.value == null ? null : ctx_r2.control.value.value) || "")("multiple", ctx_r2.multiple)("virtualScroll", true)("groupBy", ctx_r2.groupBy)("selectableGroup", !!ctx_r2.groupBy)("selectableGroupAsModel", false)("readonly", ctx_r2.readonly)("searchable", true)("items", ctx_r2.items)("compareWith", ctx_r2.compareWith)("closeOnSelect", !ctx_r2.multiple)("formControlName", ctx_r2.formControlName)("ngClass", \u0275\u0275pureFunction2(15, _c0, ctx_r2.submitted && ctx_r2.control.errors || ctx_r2.control.errors && !ctx_r2.control.errors.required, ctx_r2.fixedHeight));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.items);
  }
}
var CustomSelectComponent = class _CustomSelectComponent {
  constructor() {
    this.multiple = false;
    this.submitted = false;
    this.readonly = false;
    this.groupBy = (item) => item?.parent;
    this.fixedHeight = true;
  }
  compareWith(option1, option2) {
    return option1.key === option2.key;
  }
  get control() {
    return this.parentForm.get(this.formControlName);
  }
  onClick(item) {
    this.selected = item;
  }
  static {
    this.\u0275fac = function CustomSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomSelectComponent, selectors: [["app-custom-select"]], inputs: { parentForm: "parentForm", items: "items", formControlName: [0, "controlName", "formControlName"], multiple: "multiple", submitted: "submitted", readonly: "readonly", groupBy: "groupBy", fixedHeight: "fixedHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["bindLabel", "value", "placeholder", "Select...", 3, "title", "multiple", "virtualScroll", "groupBy", "selectableGroup", "selectableGroupAsModel", "readonly", "searchable", "items", "compareWith", "closeOnSelect", "formControlName", "ngClass"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], ["ng-multi-label-tmp", ""], [4, "ngIf"], [1, "dlloption", 3, "click", "title"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label"], ["class", "ng-value", 4, "ngFor", "ngForOf"], ["class", "ng-value", 4, "ngIf"], [1, "ng-value"], [2, "font-size", "12px", "padding", "0.4em", 3, "title"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"]], template: function CustomSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CustomSelectComponent_div_0_Template, 6, 18, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.parentForm && ctx.parentForm.controls);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgSelectComponent,
      NgClass,
      NgOptionTemplateDirective,
      NgLabelTemplateDirective,
      NgMultiLabelTemplateDirective,
      NgForOf,
      SlicePipe
    ], styles: ["\n\n  .ng-select.is-invalid {\n  border: 1px solid red;\n  border-radius: 4px;\n}\n  .ng-select .ng-select-container {\n  min-height: 26px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: normal;\n}\n  .ng-select.height-fixed .ng-select-container {\n  height: 28px;\n}\n  .ng-select.ng-select-disabled >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n  .ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #8aff1f;\n  box-shadow: 0 0 0 0.2rem rgba(76, 158, 0, 0.25);\n}\n  .ng-select.ng-select .ng-clear-wrapper {\n  margin-top: 5px;\n  text-align: right;\n}\n  .ng-select.ng-select, \n  .ng-select .ng-select div, \n  .ng-select .ng-select input, \n  .ng-select .ng-select span {\n  font-size: 10px;\n  color: #4D4D51;\n  font-weight: 200;\n}\n  .ng-select.ng-select .ng-arrow-wrapper {\n  margin-top: 5px;\n}\n.dlloption[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4D4D51;\n  font-weight: normal;\n}\n  .ng-select .ng-has-value .ng-placeholder {\n  display: none !important;\n}\n  .ng-select .ng-select-container {\n  height: auto !important;\n  min-height: 24px;\n}\n  .ng-select .ng-value-container {\n  height: auto !important;\n  min-height: 24px;\n  flex-wrap: wrap !important;\n}\n/*# sourceMappingURL=custom-select.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomSelectComponent, { className: "CustomSelectComponent", filePath: "src\\app\\admin\\lib\\custom-select\\custom-select.component.ts", lineNumber: 26 });
})();

// src/app/admin/lib/tree-list/tree-list-item.directive.ts
var TreeListItemDirective = class _TreeListItemDirective {
  constructor(tempalte) {
    this.tempalte = tempalte;
  }
  static {
    this.\u0275fac = function TreeListItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TreeListItemDirective)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TreeListItemDirective, selectors: [["app-tree-list-item-tmp"]], standalone: true });
  }
};

// src/app/admin/lib/tree-list/tree-list.component.ts
var _c02 = (a0) => ({ item: a0 });
function TreeListComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TreeListComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const defaultTreeListItem_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.treeListItemTemplate || defaultTreeListItem_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, item_r2));
  }
}
function TreeListComponent_ng_template_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function TreeListComponent_ng_template_2_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 11);
    \u0275\u0275listener("click", function TreeListComponent_ng_template_2_i_9_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r6 = \u0275\u0275nextContext().item;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemRemoved(item_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function TreeListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275template(2, TreeListComponent_ng_template_2_i_2_Template, 1, 0, "i", 6);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "span", 7);
    \u0275\u0275listener("click", function TreeListComponent_ng_template_2_Template_span_click_6_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).item;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAction(item_r6));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, TreeListComponent_ng_template_2_i_9_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.dragDrop);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.displayWith(item_r6), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.disableWith(item_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.checkWith(item_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.canDelete);
  }
}
var TreeListComponent = class _TreeListComponent {
  constructor() {
    this.action = new EventEmitter();
    this.reorder = new EventEmitter();
    this.itemRemoved = new EventEmitter();
    this.height = 210;
    this.dragDrop = false;
    this.displayWith = (item) => String(item);
    this.checkWith = (_) => "";
    this.disableWith = (item) => false;
    this.canDelete = false;
    this._items = [];
  }
  set items(items) {
    this._items = items;
  }
  get items() {
    return this._items;
  }
  onAction(item) {
    this.action.emit(item);
  }
  drop(event) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.reorder.emit(this.items);
  }
  onItemRemoved(item) {
    this.itemRemoved.emit(item);
  }
  static {
    this.\u0275fac = function TreeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TreeListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeListComponent, selectors: [["app-tree-list"]], contentQueries: function TreeListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, TreeListItemDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeListItemTemplate = _t.first);
      }
    }, inputs: { height: "height", dragDrop: "dragDrop", displayWith: "displayWith", checkWith: "checkWith", disableWith: "disableWith", canDelete: "canDelete", items: "items" }, outputs: { action: "action", reorder: "reorder", itemRemoved: "itemRemoved" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 4, consts: [["defaultTreeListItem", ""], ["cdkDropList", "", 1, "container", 3, "cdkDropListDropped", "cdkDropListDisabled"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkDrag", "", 1, "item"], [1, "item__content"], ["class", "fas fa-grip-lines", "cdkDragHandle", "", "style", "cursor: move", 4, "ngIf"], [1, "item__action", "mr-2", 3, "click"], ["title", "To permanently delete the object, please click on Update.", 1, "item__action"], ["class", "far fa-trash-alt", 3, "click", 4, "ngIf"], ["cdkDragHandle", "", 1, "fas", "fa-grip-lines", 2, "cursor", "move"], [1, "far", "fa-trash-alt", 3, "click"]], template: function TreeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("cdkDropListDropped", function TreeListComponent_Template_div_cdkDropListDropped_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.drop($event));
        });
        \u0275\u0275template(1, TreeListComponent_ng_container_1_Template, 2, 4, "ng-container", 2)(2, TreeListComponent_ng_template_2_Template, 10, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.height, "px");
        \u0275\u0275property("cdkDropListDisabled", !ctx.dragDrop);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.items);
      }
    }, dependencies: [
      CdkDropList,
      NgForOf,
      NgTemplateOutlet,
      CdkDrag,
      NgIf,
      CdkDragHandle
    ], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding: 15px;\n  width: auto;\n  overflow: auto;\n  border: 1px solid #dfdfdf;\n}\n.item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 3px 0;\n  vertical-align: middle;\n  color: #4d4d4d;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #dfdfdf;\n}\n.item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.item__content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.item__action[_ngcontent-%COMP%] {\n  color: var(--primary);\n  cursor: pointer;\n  font-weight: 500;\n}\n.item__action.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  color: var(--secondary);\n  pointer-events: none;\n}\n.cdk-drop-list[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.container.cdk-drop-list-dragging[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  min-width: 250px;\n  transform: translate3d(0, 0, 0);\n}\n/*# sourceMappingURL=tree-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeListComponent, { className: "TreeListComponent", filePath: "src\\app\\admin\\lib\\tree-list\\tree-list.component.ts", lineNumber: 21 });
})();

// src/app/admin/lib/association/association.component.ts
function AssociationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function AssociationComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelected(true));
    });
    \u0275\u0275text(1, "Select all");
    \u0275\u0275elementEnd();
  }
}
function AssociationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function AssociationComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelected(false));
    });
    \u0275\u0275text(1, "Clear all");
    \u0275\u0275elementEnd();
  }
}
var AssociationComponent = class _AssociationComponent {
  constructor() {
    this.select = new EventEmitter();
    this.reorder = new EventEmitter();
    this.add = new EventEmitter();
    this.remove = new EventEmitter();
    this.uniqueWith = (item) => String(item);
    this.displayWith = (item) => String(item);
    this.shouldAdd = (item) => of(true);
    this.shouldRemove = (item) => of(true);
    this.checkAll = true;
    this.itemRemoved = new EventEmitter();
    this.canDelete = false;
    this.selectedItems = [];
    this._allItems = [];
    this.checkWith = (item) => item[this.checkBy] ? "Added" : "Add";
    this.checkWithSelected = (item) => item[this.checkBy] ? "Remove" : "";
    this.disableWith = (item) => this.disableBy && item[this.disableBy];
    this.onAction = (item) => __async(this, null, function* () {
      const original = this._allItems.find((rec) => this.uniqueWith(item) === this.uniqueWith(rec));
      if (!original[this.checkBy]) {
        const yes = yield firstValueFrom(this.shouldAdd(item));
        if (yes) {
          this.selectedItems = this.selectedItems.concat(original);
          this.add.emit(original);
          original[this.checkBy] = 1;
          this.select.emit(this.selectedItems);
        }
      } else {
        const remove = yield firstValueFrom(this.shouldRemove(item));
        if (remove) {
          this.selectedItems = this.selectedItems.filter((selected) => this.uniqueWith(selected) !== this.uniqueWith(item));
          this.remove.emit(original);
          original[this.checkBy] = 0;
          this.select.emit(this.selectedItems);
        }
      }
    });
    this.toggleSelected = (selected) => {
      this.items = this._allItems.map((item) => __spreadProps(__spreadValues({}, item), { [this.checkBy]: selected }));
      this.associatedItems = selected ? this._allItems : [];
      this.select.emit(this.selectedItems);
    };
  }
  /** List of selected items */
  set associatedItems(items) {
    this.selectedItems = items;
  }
  set items(items) {
    this._allItems = items;
  }
  get allItems() {
    return this._allItems.slice();
  }
  onItemRemoved(item) {
    this.itemRemoved.emit(item);
  }
  static {
    this.\u0275fac = function AssociationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssociationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationComponent, selectors: [["app-association"]], inputs: { checkBy: "checkBy", disableBy: "disableBy", uniqueWith: "uniqueWith", displayWith: "displayWith", shouldAdd: "shouldAdd", shouldRemove: "shouldRemove", checkAll: "checkAll", associatedItems: "associatedItems", items: "items", canDelete: "canDelete" }, outputs: { select: "select", reorder: "reorder", add: "add", remove: "remove", itemRemoved: "itemRemoved" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 12, consts: [[1, "actions"], [3, "click", 4, "ngIf"], [3, "action", "itemRemoved", "items", "displayWith", "checkWith", "disableWith", "canDelete"], [3, "action", "reorder", "items", "displayWith", "checkWith", "dragDrop", "canDelete"], [3, "click"]], template: function AssociationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AssociationComponent_div_1_Template, 2, 0, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275template(3, AssociationComponent_div_3_Template, 2, 0, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-tree-list", 2);
        \u0275\u0275listener("action", function AssociationComponent_Template_app_tree_list_action_4_listener($event) {
          return ctx.onAction($event);
        })("itemRemoved", function AssociationComponent_Template_app_tree_list_itemRemoved_4_listener($event) {
          return ctx.onItemRemoved($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "app-tree-list", 3);
        \u0275\u0275listener("action", function AssociationComponent_Template_app_tree_list_action_5_listener($event) {
          return ctx.onAction($event);
        })("reorder", function AssociationComponent_Template_app_tree_list_reorder_5_listener($event) {
          return ctx.reorder.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkAll && ctx.allItems.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.checkAll && ctx.selectedItems.length);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.allItems)("displayWith", ctx.displayWith)("checkWith", ctx.checkWith)("disableWith", ctx.disableWith)("canDelete", ctx.canDelete);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.selectedItems)("displayWith", ctx.displayWith)("checkWith", ctx.checkWithSelected)("dragDrop", true)("canDelete", false);
      }
    }, dependencies: [NgIf, TreeListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 0.8em;\n  padding: 0 1em;\n  color: var(--primary);\n  font-weight: 500;\n  cursor: pointer;\n}\n/*# sourceMappingURL=association.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationComponent, { className: "AssociationComponent", filePath: "src\\app\\admin\\lib\\association\\association.component.ts", lineNumber: 13 });
})();

// src/app/admin/core/services/column-filter.service.ts
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
        //   value: 'Contains Case Sensitive'
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

// node_modules/ngx-quill/fesm2022/ngx-quill-config.mjs
var defaultModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    // toggled buttons
    ["blockquote", "code-block"],
    [{
      header: 1
    }, {
      header: 2
    }],
    // custom button values
    [{
      list: "ordered"
    }, {
      list: "bullet"
    }],
    [{
      script: "sub"
    }, {
      script: "super"
    }],
    // superscript/subscript
    [{
      indent: "-1"
    }, {
      indent: "+1"
    }],
    // outdent/indent
    [{
      direction: "rtl"
    }],
    // text direction
    [{
      size: ["small", false, "large", "huge"]
    }],
    // custom dropdown
    [{
      header: [1, 2, 3, 4, 5, 6, false]
    }],
    [{
      color: []
    }, {
      background: []
    }],
    // dropdown with defaults from theme
    [{
      font: []
    }],
    [{
      align: []
    }],
    ["clean"],
    // remove formatting button
    ["link", "image", "video"],
    // link and image, video
    ["table"]
  ]
};
var QUILL_CONFIG_TOKEN = new InjectionToken("config", {
  providedIn: "root",
  factory: () => ({
    modules: defaultModules
  })
});
var QuillConfigModule = class _QuillConfigModule {
  static forRoot(config) {
    return {
      ngModule: _QuillConfigModule,
      providers: [{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
  static {
    this.\u0275fac = function QuillConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillConfigModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _QuillConfigModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillConfigModule, [{
    type: NgModule
  }], null, null);
})();

// node_modules/ngx-quill/fesm2022/ngx-quill.mjs
var _c03 = [[["", "above-quill-editor-toolbar", ""]], [["", "quill-editor-toolbar", ""]], [["", "below-quill-editor-toolbar", ""]]];
var _c1 = ["[above-quill-editor-toolbar]", "[quill-editor-toolbar]", "[below-quill-editor-toolbar]"];
function QuillEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
}
function QuillEditorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
}
var getFormat = (format, configFormat) => {
  const passedFormat = format || configFormat;
  return passedFormat || "html";
};
var raf$ = () => {
  return new Observable((subscriber) => {
    const rafId = requestAnimationFrame(() => {
      subscriber.next();
      subscriber.complete();
    });
    return () => cancelAnimationFrame(rafId);
  });
};
var QuillService = class _QuillService {
  constructor() {
    this.config = inject(QUILL_CONFIG_TOKEN) || {
      modules: defaultModules
    };
    this.document = inject(DOCUMENT);
    this.quill$ = defer(() => __async(this, null, function* () {
      if (!this.Quill) {
        const maybePatchedAddEventListener = this.document.addEventListener;
        this.document.addEventListener = this.document["__zone_symbol__addEventListener"] || this.document.addEventListener;
        const quillImport = yield import("./chunk-CUM227XI.js");
        this.document.addEventListener = maybePatchedAddEventListener;
        this.Quill = // seems like esmodules have nested "default"
        quillImport.default?.default ?? quillImport.default ?? quillImport;
      }
      this.config.customOptions?.forEach((customOption) => {
        const newCustomOption = this.Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        this.Quill.register(newCustomOption, true, this.config.suppressGlobalRegisterWarning);
      });
      return firstValueFrom(this.registerCustomModules(this.Quill, this.config.customModules, this.config.suppressGlobalRegisterWarning));
    })).pipe(shareReplay({
      bufferSize: 1,
      refCount: false
    }));
    this.registeredModules = /* @__PURE__ */ new Set();
  }
  getQuill() {
    return this.quill$;
  }
  /** @internal */
  beforeRender(Quill, customModules, beforeRender = this.config.beforeRender) {
    const sources = [this.registerCustomModules(Quill, customModules)];
    if (beforeRender) {
      sources.push(from(beforeRender()));
    }
    return forkJoin(sources).pipe(map(() => Quill));
  }
  /** @internal */
  registerCustomModules(Quill, customModules, suppressGlobalRegisterWarning) {
    if (!Array.isArray(customModules)) {
      return of(Quill);
    }
    const sources = [];
    for (const customModule of customModules) {
      const {
        path,
        implementation: maybeImplementation
      } = customModule;
      if (this.registeredModules.has(path)) {
        continue;
      }
      this.registeredModules.add(path);
      if (isObservable(maybeImplementation)) {
        sources.push(maybeImplementation.pipe(tap((implementation) => {
          Quill.register(path, implementation, suppressGlobalRegisterWarning);
        })));
      } else {
        Quill.register(path, maybeImplementation, suppressGlobalRegisterWarning);
      }
    }
    return sources.length > 0 ? forkJoin(sources).pipe(map(() => Quill)) : of(Quill);
  }
  static {
    this.\u0275fac = function QuillService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _QuillService,
      factory: _QuillService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var QuillEditorBase = class _QuillEditorBase {
  constructor() {
    this.format = input(void 0);
    this.theme = input(void 0);
    this.modules = input(void 0);
    this.debug = input(false);
    this.readOnly = input(false);
    this.placeholder = input(void 0);
    this.maxLength = input(void 0);
    this.minLength = input(void 0);
    this.required = input(false);
    this.formats = input(void 0);
    this.customToolbarPosition = input("top");
    this.sanitize = input(void 0);
    this.beforeRender = input(void 0);
    this.styles = input(null);
    this.registry = input(void 0);
    this.bounds = input(void 0);
    this.customOptions = input([]);
    this.customModules = input([]);
    this.trackChanges = input(void 0);
    this.classes = input(void 0);
    this.trimOnValidation = input(false);
    this.linkPlaceholder = input(void 0);
    this.compareValues = input(false);
    this.filterNull = input(false);
    this.debounceTime = input(void 0);
    this.defaultEmptyValue = input(null);
    this.onEditorCreated = new EventEmitter();
    this.onEditorChanged = new EventEmitter();
    this.onContentChanged = new EventEmitter();
    this.onSelectionChanged = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onNativeFocus = new EventEmitter();
    this.onNativeBlur = new EventEmitter();
    this.disabled = false;
    this.toolbarPosition = signal("top");
    this.subscription = null;
    this.quillSubscription = null;
    this.elementRef = inject(ElementRef);
    this.document = inject(DOCUMENT);
    this.cd = inject(ChangeDetectorRef);
    this.domSanitizer = inject(DomSanitizer);
    this.platformId = inject(PLATFORM_ID);
    this.renderer = inject(Renderer2);
    this.zone = inject(NgZone);
    this.service = inject(QuillService);
    this.destroyRef = inject(DestroyRef);
    this.valueGetter = input((quillEditor) => {
      let html = quillEditor.getSemanticHTML();
      if (this.isEmptyValue(html)) {
        html = this.defaultEmptyValue();
      }
      let modelValue = html;
      const format = getFormat(this.format(), this.service.config.format);
      if (format === "text") {
        modelValue = quillEditor.getText();
      } else if (format === "object") {
        modelValue = quillEditor.getContents();
      } else if (format === "json") {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch {
          modelValue = quillEditor.getText();
        }
      }
      return modelValue;
    });
    this.valueSetter = input((quillEditor, value) => {
      const format = getFormat(this.format(), this.service.config.format);
      if (format === "html") {
        const sanitize = [true, false].includes(this.sanitize()) ? this.sanitize() : this.service.config.sanitize || false;
        if (sanitize) {
          value = this.domSanitizer.sanitize(SecurityContext.HTML, value);
        }
        return quillEditor.clipboard.convert({
          html: value
        });
      } else if (format === "json") {
        try {
          return JSON.parse(value);
        } catch {
          return [{
            insert: value
          }];
        }
      }
      return value;
    });
    this.selectionChangeHandler = (range, oldRange, source) => {
      const trackChanges = this.trackChanges() || this.service.config.trackChanges;
      const shouldTriggerOnModelTouched = !range && !!this.onModelTouched && (source === "user" || trackChanges && trackChanges === "all");
      if (!this.onBlur.observed && !this.onFocus.observed && !this.onSelectionChanged.observed && !shouldTriggerOnModelTouched) {
        return;
      }
      this.zone.run(() => {
        if (range === null) {
          this.onBlur.emit({
            editor: this.quillEditor,
            source
          });
        } else if (oldRange === null) {
          this.onFocus.emit({
            editor: this.quillEditor,
            source
          });
        }
        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          oldRange,
          range,
          source
        });
        if (shouldTriggerOnModelTouched) {
          this.onModelTouched();
        }
        this.cd.markForCheck();
      });
    };
    this.textChangeHandler = (delta, oldDelta, source) => {
      const text = this.quillEditor.getText();
      const content = this.quillEditor.getContents();
      let html = this.quillEditor.getSemanticHTML();
      if (this.isEmptyValue(html)) {
        html = this.defaultEmptyValue();
      }
      const trackChanges = this.trackChanges() || this.service.config.trackChanges;
      const shouldTriggerOnModelChange = (source === "user" || trackChanges && trackChanges === "all") && !!this.onModelChange;
      if (!this.onContentChanged.observed && !shouldTriggerOnModelChange) {
        return;
      }
      this.zone.run(() => {
        if (shouldTriggerOnModelChange) {
          const valueGetter = this.valueGetter();
          this.onModelChange(valueGetter(this.quillEditor));
        }
        this.onContentChanged.emit({
          content,
          delta,
          editor: this.quillEditor,
          html,
          oldDelta,
          source,
          text
        });
        this.cd.markForCheck();
      });
    };
    this.editorChangeHandler = (event, current, old, source) => {
      if (!this.onEditorChanged.observed) {
        return;
      }
      if (event === "text-change") {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.quillEditor.getSemanticHTML();
        if (this.isEmptyValue(html)) {
          html = this.defaultEmptyValue();
        }
        this.zone.run(() => {
          this.onEditorChanged.emit({
            content,
            delta: current,
            editor: this.quillEditor,
            event,
            html,
            oldDelta: old,
            source,
            text
          });
          this.cd.markForCheck();
        });
      } else {
        this.zone.run(() => {
          this.onEditorChanged.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          });
          this.cd.markForCheck();
        });
      }
    };
  }
  static normalizeClassNames(classes) {
    const classList = classes.trim().split(" ");
    return classList.reduce((prev, cur) => {
      const trimmed = cur.trim();
      if (trimmed) {
        prev.push(trimmed);
      }
      return prev;
    }, []);
  }
  ngOnInit() {
    this.toolbarPosition.set(this.customToolbarPosition());
  }
  ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.quillSubscription = this.service.getQuill().pipe(mergeMap((Quill) => this.service.beforeRender(Quill, this.customModules(), this.beforeRender()))).subscribe((Quill) => {
      this.editorElem = this.elementRef.nativeElement.querySelector("[quill-editor-element]");
      const toolbarElem = this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]");
      const modules = Object.assign({}, this.modules() || this.service.config.modules);
      if (toolbarElem) {
        modules.toolbar = toolbarElem;
      } else if (modules.toolbar === void 0) {
        modules.toolbar = defaultModules.toolbar;
      }
      let placeholder = this.placeholder() !== void 0 ? this.placeholder() : this.service.config.placeholder;
      if (placeholder === void 0) {
        placeholder = "Insert text here ...";
      }
      const styles = this.styles();
      if (styles) {
        Object.keys(styles).forEach((key) => {
          this.renderer.setStyle(this.editorElem, key, styles[key]);
        });
      }
      if (this.classes()) {
        this.addClasses(this.classes());
      }
      this.customOptions().forEach((customOption) => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let bounds = this.bounds() && this.bounds() === "self" ? this.editorElem : this.bounds();
      if (!bounds) {
        bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
      }
      let debug = this.debug();
      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }
      let readOnly = this.readOnly();
      if (!readOnly && this.readOnly() !== false) {
        readOnly = this.service.config.readOnly !== void 0 ? this.service.config.readOnly : false;
      }
      let formats = this.formats();
      if (!formats && formats === void 0) {
        formats = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : void 0;
      }
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          bounds,
          debug,
          formats,
          modules,
          placeholder,
          readOnly,
          registry: this.registry(),
          theme: this.theme() || (this.service.config.theme ? this.service.config.theme : "snow")
        });
        if (this.onNativeBlur.observed) {
          fromEvent(this.quillEditor.scroll.domNode, "blur").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.onNativeBlur.next({
            editor: this.quillEditor,
            source: "dom"
          }));
          const toolbar = this.quillEditor.getModule("toolbar");
          if (toolbar.container) {
            fromEvent(toolbar.container, "mousedown").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((e) => e.preventDefault());
          }
        }
        if (this.onNativeFocus.observed) {
          fromEvent(this.quillEditor.scroll.domNode, "focus").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.onNativeFocus.next({
            editor: this.quillEditor,
            source: "dom"
          }));
        }
        if (this.linkPlaceholder()) {
          const tooltip = this.quillEditor?.theme?.tooltip;
          const input2 = tooltip?.root?.querySelector("input[data-link]");
          if (input2?.dataset) {
            input2.dataset.link = this.linkPlaceholder();
          }
        }
      });
      if (this.content) {
        const format = getFormat(this.format(), this.service.config.format);
        if (format === "text") {
          this.quillEditor.setText(this.content, "silent");
        } else {
          const valueSetter = this.valueSetter();
          const newValue = valueSetter(this.quillEditor, this.content);
          this.quillEditor.setContents(newValue, "silent");
        }
        const history = this.quillEditor.getModule("history");
        history.clear();
      }
      this.setDisabledState();
      this.addQuillEventListeners();
      if (!this.onEditorCreated.observed && !this.onValidatorChanged) {
        return;
      }
      raf$().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (this.onValidatorChanged) {
          this.onValidatorChanged();
        }
        this.onEditorCreated.emit(this.quillEditor);
      });
    });
  }
  ngOnDestroy() {
    this.dispose();
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }
  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    if (changes.readOnly) {
      this.quillEditor.enable(!changes.readOnly.currentValue);
    }
    if (changes.placeholder) {
      this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
    }
    if (changes.styles) {
      const currentStyling = changes.styles.currentValue;
      const previousStyling = changes.styles.previousValue;
      if (previousStyling) {
        Object.keys(previousStyling).forEach((key) => {
          this.renderer.removeStyle(this.editorElem, key);
        });
      }
      if (currentStyling) {
        Object.keys(currentStyling).forEach((key) => {
          this.renderer.setStyle(this.editorElem, key, this.styles()[key]);
        });
      }
    }
    if (changes.classes) {
      const currentClasses = changes.classes.currentValue;
      const previousClasses = changes.classes.previousValue;
      if (previousClasses) {
        this.removeClasses(previousClasses);
      }
      if (currentClasses) {
        this.addClasses(currentClasses);
      }
    }
    if (changes.debounceTime) {
      this.addQuillEventListeners();
    }
  }
  addClasses(classList) {
    _QuillEditorBase.normalizeClassNames(classList).forEach((c) => {
      this.renderer.addClass(this.editorElem, c);
    });
  }
  removeClasses(classList) {
    _QuillEditorBase.normalizeClassNames(classList).forEach((c) => {
      this.renderer.removeClass(this.editorElem, c);
    });
  }
  writeValue(currentValue) {
    if (this.filterNull() && currentValue === null) {
      return;
    }
    this.content = currentValue;
    if (!this.quillEditor) {
      return;
    }
    const format = getFormat(this.format(), this.service.config.format);
    const valueSetter = this.valueSetter();
    const newValue = valueSetter(this.quillEditor, currentValue);
    if (this.compareValues()) {
      const currentEditorValue = this.quillEditor.getContents();
      if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
        return;
      }
    }
    if (currentValue) {
      if (format === "text") {
        this.quillEditor.setText(currentValue);
      } else {
        this.quillEditor.setContents(newValue);
      }
      return;
    }
    this.quillEditor.setText("");
  }
  setDisabledState(isDisabled = this.disabled) {
    this.disabled = isDisabled;
    if (this.quillEditor) {
      if (isDisabled) {
        this.quillEditor.disable();
        this.renderer.setAttribute(this.elementRef.nativeElement, "disabled", "disabled");
      } else {
        if (!this.readOnly()) {
          this.quillEditor.enable();
        }
        this.renderer.removeAttribute(this.elementRef.nativeElement, "disabled");
      }
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChanged = fn;
  }
  validate() {
    if (!this.quillEditor) {
      return null;
    }
    const err = {};
    let valid = true;
    const text = this.quillEditor.getText();
    const textLength = this.trimOnValidation() ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
    const deltaOperations = this.quillEditor.getContents().ops;
    const onlyEmptyOperation = !!deltaOperations && deltaOperations.length === 1 && ["\n", ""].includes(deltaOperations[0].insert?.toString());
    if (this.minLength() && textLength && textLength < this.minLength()) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength()
      };
      valid = false;
    }
    if (this.maxLength() && textLength > this.maxLength()) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength()
      };
      valid = false;
    }
    if (this.required() && !textLength && onlyEmptyOperation) {
      err.requiredError = {
        empty: true
      };
      valid = false;
    }
    return valid ? null : err;
  }
  addQuillEventListeners() {
    this.dispose();
    this.zone.runOutsideAngular(() => {
      this.subscription = new Subscription();
      this.subscription.add(
        // mark model as touched if editor lost focus
        fromEvent(this.quillEditor, "selection-change").subscribe(([range, oldRange, source]) => {
          this.selectionChangeHandler(range, oldRange, source);
        })
      );
      let textChange$ = fromEvent(this.quillEditor, "text-change");
      let editorChange$ = fromEvent(this.quillEditor, "editor-change");
      if (typeof this.debounceTime() === "number") {
        textChange$ = textChange$.pipe(debounceTime(this.debounceTime()));
        editorChange$ = editorChange$.pipe(debounceTime(this.debounceTime()));
      }
      this.subscription.add(
        // update model if text changes
        textChange$.subscribe(([delta, oldDelta, source]) => {
          this.textChangeHandler(delta, oldDelta, source);
        })
      );
      this.subscription.add(
        // triggered if selection or text changed
        editorChange$.subscribe(([event, current, old, source]) => {
          this.editorChangeHandler(event, current, old, source);
        })
      );
    });
  }
  dispose() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  isEmptyValue(html) {
    return html === "<p></p>" || html === "<div></div>" || html === "<p><br></p>" || html === "<div><br></div>";
  }
  static {
    this.\u0275fac = function QuillEditorBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillEditorBase)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _QuillEditorBase,
      inputs: {
        format: [1, "format"],
        theme: [1, "theme"],
        modules: [1, "modules"],
        debug: [1, "debug"],
        readOnly: [1, "readOnly"],
        placeholder: [1, "placeholder"],
        maxLength: [1, "maxLength"],
        minLength: [1, "minLength"],
        required: [1, "required"],
        formats: [1, "formats"],
        customToolbarPosition: [1, "customToolbarPosition"],
        sanitize: [1, "sanitize"],
        beforeRender: [1, "beforeRender"],
        styles: [1, "styles"],
        registry: [1, "registry"],
        bounds: [1, "bounds"],
        customOptions: [1, "customOptions"],
        customModules: [1, "customModules"],
        trackChanges: [1, "trackChanges"],
        classes: [1, "classes"],
        trimOnValidation: [1, "trimOnValidation"],
        linkPlaceholder: [1, "linkPlaceholder"],
        compareValues: [1, "compareValues"],
        filterNull: [1, "filterNull"],
        debounceTime: [1, "debounceTime"],
        defaultEmptyValue: [1, "defaultEmptyValue"],
        valueGetter: [1, "valueGetter"],
        valueSetter: [1, "valueSetter"]
      },
      outputs: {
        onEditorCreated: "onEditorCreated",
        onEditorChanged: "onEditorChanged",
        onContentChanged: "onContentChanged",
        onSelectionChanged: "onSelectionChanged",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onNativeFocus: "onNativeFocus",
        onNativeBlur: "onNativeBlur"
      },
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillEditorBase, [{
    type: Directive
  }], null, {
    onEditorCreated: [{
      type: Output
    }],
    onEditorChanged: [{
      type: Output
    }],
    onContentChanged: [{
      type: Output
    }],
    onSelectionChanged: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onNativeFocus: [{
      type: Output
    }],
    onNativeBlur: [{
      type: Output
    }]
  });
})();
var QuillEditorComponent = class _QuillEditorComponent extends QuillEditorBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275QuillEditorComponent_BaseFactory;
      return function QuillEditorComponent_Factory(__ngFactoryType__) {
        return (\u0275QuillEditorComponent_BaseFactory || (\u0275QuillEditorComponent_BaseFactory = \u0275\u0275getInheritedFactory(_QuillEditorComponent)))(__ngFactoryType__ || _QuillEditorComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _QuillEditorComponent,
      selectors: [["quill-editor"]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _QuillEditorComponent)
      }, {
        multi: true,
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _QuillEditorComponent)
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 2,
      consts: [["quill-editor-element", ""]],
      template: function QuillEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c03);
          \u0275\u0275template(0, QuillEditorComponent_Conditional_0_Template, 1, 0, "div", 0);
          \u0275\u0275projection(1);
          \u0275\u0275projection(2, 1);
          \u0275\u0275projection(3, 2);
          \u0275\u0275template(4, QuillEditorComponent_Conditional_4_Template, 1, 0, "div", 0);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.toolbarPosition() !== "top" ? 0 : -1);
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.toolbarPosition() === "top" ? 4 : -1);
        }
      },
      styles: ["[_nghost-%COMP%]{display:inline-block}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillEditorComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.Emulated,
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => QuillEditorComponent)
      }, {
        multi: true,
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => QuillEditorComponent)
      }],
      selector: "quill-editor",
      template: `
    @if (toolbarPosition() !== 'top') {
        <div quill-editor-element></div>
    }

    <ng-content select="[above-quill-editor-toolbar]"></ng-content>
    <ng-content select="[quill-editor-toolbar]"></ng-content>
    <ng-content select="[below-quill-editor-toolbar]"></ng-content>

    @if (toolbarPosition() === 'top') {
        <div quill-editor-element></div>
    }
  `,
      standalone: true,
      styles: [":host{display:inline-block}\n"]
    }]
  }], null, null);
})();
var QuillViewHTMLComponent = class _QuillViewHTMLComponent {
  constructor(sanitizer, service) {
    this.sanitizer = sanitizer;
    this.service = service;
    this.content = input("");
    this.theme = input(void 0);
    this.sanitize = input(void 0);
    this.innerHTML = signal("");
    this.themeClass = signal("ql-snow");
  }
  ngOnChanges(changes) {
    if (changes.theme) {
      const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : "snow");
      this.themeClass.set(`ql-${theme} ngx-quill-view-html`);
    } else if (!this.theme()) {
      const theme = this.service.config.theme ? this.service.config.theme : "snow";
      this.themeClass.set(`ql-${theme} ngx-quill-view-html`);
    }
    if (changes.content) {
      const content = changes.content.currentValue;
      const sanitize = [true, false].includes(this.sanitize()) ? this.sanitize() : this.service.config.sanitize || false;
      const innerHTML = sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
      this.innerHTML.set(innerHTML);
    }
  }
  static {
    this.\u0275fac = function QuillViewHTMLComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillViewHTMLComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(QuillService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _QuillViewHTMLComponent,
      selectors: [["quill-view-html"]],
      inputs: {
        content: [1, "content"],
        theme: [1, "theme"],
        sanitize: [1, "sanitize"]
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 2,
      vars: 2,
      consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
      template: function QuillViewHTMLComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("ngClass", ctx.themeClass());
          \u0275\u0275advance();
          \u0275\u0275property("innerHTML", ctx.innerHTML(), \u0275\u0275sanitizeHtml);
        }
      },
      dependencies: [NgClass],
      styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillViewHTMLComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      selector: "quill-view-html",
      template: `
  <div class="ql-container" [ngClass]="themeClass()">
    <div class="ql-editor" [innerHTML]="innerHTML()">
    </div>
  </div>
`,
      standalone: true,
      imports: [NgClass],
      styles: [".ql-container.ngx-quill-view-html{border:0}\n"]
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: QuillService
  }], null);
})();
var QuillViewComponent = class _QuillViewComponent {
  constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.format = input(void 0);
    this.theme = input(void 0);
    this.modules = input(void 0);
    this.debug = input(false);
    this.formats = input(void 0);
    this.sanitize = input(void 0);
    this.beforeRender = input();
    this.strict = input(true);
    this.content = input();
    this.customModules = input([]);
    this.customOptions = input([]);
    this.onEditorCreated = new EventEmitter();
    this.quillSubscription = null;
    this.destroyRef = inject(DestroyRef);
    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format(), this.service.config.format);
      let content = value;
      if (format === "text") {
        quillEditor.setText(content);
      } else {
        if (format === "html") {
          const sanitize = [true, false].includes(this.sanitize()) ? this.sanitize() : this.service.config.sanitize || false;
          if (sanitize) {
            value = this.domSanitizer.sanitize(SecurityContext.HTML, value);
          }
          content = quillEditor.clipboard.convert({
            html: value
          });
        } else if (format === "json") {
          try {
            content = JSON.parse(value);
          } catch {
            content = [{
              insert: value
            }];
          }
        }
        quillEditor.setContents(content);
      }
    };
  }
  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    if (changes.content) {
      this.valueSetter(this.quillEditor, changes.content.currentValue);
    }
  }
  ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.quillSubscription = this.service.getQuill().pipe(mergeMap((Quill) => this.service.beforeRender(Quill, this.customModules(), this.beforeRender()))).subscribe((Quill) => {
      const modules = Object.assign({}, this.modules() || this.service.config.modules);
      modules.toolbar = false;
      this.customOptions().forEach((customOption) => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let debug = this.debug();
      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }
      let formats = this.formats();
      if (!formats && formats === void 0) {
        formats = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : void 0;
      }
      const theme = this.theme() || (this.service.config.theme ? this.service.config.theme : "snow");
      this.editorElem = this.elementRef.nativeElement.querySelector("[quill-view-element]");
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          debug,
          formats,
          modules,
          readOnly: true,
          strict: this.strict(),
          theme
        });
      });
      this.renderer.addClass(this.editorElem, "ngx-quill-view");
      if (this.content()) {
        this.valueSetter(this.quillEditor, this.content());
      }
      if (!this.onEditorCreated.observed) {
        return;
      }
      raf$().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.onEditorCreated.emit(this.quillEditor);
      });
    });
  }
  ngOnDestroy() {
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }
  static {
    this.\u0275fac = function QuillViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillViewComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(QuillService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _QuillViewComponent,
      selectors: [["quill-view"]],
      inputs: {
        format: [1, "format"],
        theme: [1, "theme"],
        modules: [1, "modules"],
        debug: [1, "debug"],
        formats: [1, "formats"],
        sanitize: [1, "sanitize"],
        beforeRender: [1, "beforeRender"],
        strict: [1, "strict"],
        content: [1, "content"],
        customModules: [1, "customModules"],
        customOptions: [1, "customOptions"]
      },
      outputs: {
        onEditorCreated: "onEditorCreated"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["quill-view-element", ""]],
      template: function QuillViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275element(0, "div", 0);
        }
      },
      styles: [".ql-container.ngx-quill-view{border:0}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillViewComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      selector: "quill-view",
      template: `
  <div quill-view-element></div>
`,
      standalone: true,
      styles: [".ql-container.ngx-quill-view{border:0}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: QuillService
  }, {
    type: DomSanitizer
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    onEditorCreated: [{
      type: Output
    }]
  });
})();
var QuillModule = class _QuillModule {
  static forRoot(config) {
    return {
      ngModule: _QuillModule,
      providers: [{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
  static {
    this.\u0275fac = function QuillModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _QuillModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuillModule, [{
    type: NgModule,
    args: [{
      imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
    }]
  }], null, null);
})();

// src/app/admin/Shared/generic-grid/generic-grid.component.ts
var _c04 = (a0) => ({ "is-invalid": a0 });
var _c12 = (a0) => ({ "width.%": a0 });
var _c2 = (a0, a1, a2) => ({ "active": a0, "success": a1, "fail": a2 });
var _c3 = (a0) => ({ "color": a0 });
var _c4 = (a0) => ({ color: a0 });
function GenericGridComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "a", 26);
    \u0275\u0275listener("click", function GenericGridComponent_div_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAction(0, "Export Excel", ""));
    });
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275text(4, "Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 28);
    \u0275\u0275listener("click", function GenericGridComponent_div_1_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAction(0, "Export PDF", ""));
    });
    \u0275\u0275element(6, "i", 29);
    \u0275\u0275text(7, "PDF");
    \u0275\u0275elementEnd()()();
  }
}
function GenericGridComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 30)(1, "label", 31)(2, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function GenericGridComponent_th_6_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAll, $event) || (ctx_r1.selectedAll = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GenericGridComponent_th_6_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAllCheckBox());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", "1%", "%");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAll);
  }
}
function GenericGridComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34)(1, "span", 35);
    \u0275\u0275text(2, "S. No.");
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34)(1, "span");
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_th_9_div_3_div_25_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "input", 59);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const conditionType_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", conditionType_r10.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", conditionType_r10.value, " ");
  }
}
function GenericGridComponent_th_9_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "input", 55);
    \u0275\u0275elementStart(2, "div", 56)(3, "ul", 57);
    \u0275\u0275template(4, GenericGridComponent_th_9_div_3_div_25_li_4_Template, 4, 2, "li", 58);
    \u0275\u0275element(5, "li", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.columnFilter["colData_" + i_r5]);
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conditionType_r11 = ctx.$implicit;
    \u0275\u0275property("value", conditionType_r11.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(conditionType_r11.value);
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 70);
    \u0275\u0275element(2, "input", 71, 6);
    \u0275\u0275elementStart(5, "div", 72)(6, "button", 73);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_ng_template_26_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const d_r13 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(d_r13.toggle());
    });
    \u0275\u0275element(7, "i", 74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const FromDateobj_r14 = \u0275\u0275reference(4);
    \u0275\u0275nextContext(2);
    const f_r9 = \u0275\u0275reference(22);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c04, f_r9.submitted && FromDateobj_r14.value == ""));
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "input", 75, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filterValue1_r15 = \u0275\u0275reference(2);
    \u0275\u0275nextContext(2);
    const f_r9 = \u0275\u0275reference(22);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c04, f_r9.submitted && filterValue1_r15.value == ""));
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conditionType_r16 = ctx.$implicit;
    \u0275\u0275property("value", conditionType_r16.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(conditionType_r16.value);
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 70);
    \u0275\u0275element(2, "input", 76, 8);
    \u0275\u0275elementStart(5, "div", 72)(6, "button", 73);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_ng_template_26_div_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const d_r18 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(d_r18.toggle());
    });
    \u0275\u0275element(7, "i", 74);
    \u0275\u0275elementEnd()()()();
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "input", 77, 9);
    \u0275\u0275elementEnd();
  }
}
function GenericGridComponent_th_9_div_3_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "select", 61, 3);
    \u0275\u0275template(3, GenericGridComponent_th_9_div_3_ng_template_26_option_3_Template, 2, 2, "option", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, GenericGridComponent_th_9_div_3_ng_template_26_div_4_Template, 8, 3, "div", 63)(5, GenericGridComponent_th_9_div_3_ng_template_26_div_5_Template, 3, 3, "div", 63);
    \u0275\u0275elementStart(6, "div", 60)(7, "select", 64, 4)(9, "option", 65);
    \u0275\u0275text(10, "Select...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 66);
    \u0275\u0275text(12, "Or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 67);
    \u0275\u0275text(14, "AND");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 60)(16, "select", 68, 5);
    \u0275\u0275template(18, GenericGridComponent_th_9_div_3_ng_template_26_option_18_Template, 2, 2, "option", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, GenericGridComponent_th_9_div_3_ng_template_26_div_19_Template, 8, 0, "div", 63)(20, GenericGridComponent_th_9_div_3_ng_template_26_div_20_Template, 3, 0, "div", 63);
  }
  if (rf & 2) {
    const ConditionOpt1_r19 = \u0275\u0275reference(2);
    \u0275\u0275nextContext();
    const f_r9 = \u0275\u0275reference(22);
    const ctx_r19 = \u0275\u0275nextContext();
    const key_r21 = ctx_r19.$implicit;
    const i_r5 = ctx_r19.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c04, f_r9.submitted && ConditionOpt1_r19.value == ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.columnFilter["colData_" + i_r5]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", key_r21.dataType == "Date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", key_r21.dataType != "Date");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.columnFilter["colData_" + i_r5]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", key_r21.dataType == "Date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", key_r21.dataType != "Date");
  }
}
function GenericGridComponent_th_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39, 0)(2, "div", 40)(3, "img", 41);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_Template_img_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const tblFilterForm_r7 = \u0275\u0275reference(21);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bindColumnFilterDdl(i_r5, tblFilterForm_r7));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 42)(5, "ul", 43)(6, "li")(7, "a", 44);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ColumnFilterDropdown_r8 = \u0275\u0275reference(1);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort(i_r5, "asc", ColumnFilterDropdown_r8));
    });
    \u0275\u0275element(8, "div", 45);
    \u0275\u0275text(9, " Sort Ascending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 44);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ColumnFilterDropdown_r8 = \u0275\u0275reference(1);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort(i_r5, "desc", ColumnFilterDropdown_r8));
    });
    \u0275\u0275element(12, "div", 46);
    \u0275\u0275text(13, " Sort Descending ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 44);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ColumnFilterDropdown_r8 = \u0275\u0275reference(1);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAction(i_r5, "Remove Sort", ColumnFilterDropdown_r8));
    });
    \u0275\u0275element(16, "div", 47);
    \u0275\u0275text(17, " Remove Sort ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "li", 48);
    \u0275\u0275elementStart(19, "li")(20, "form", 49, 1);
    \u0275\u0275listener("ngSubmit", function GenericGridComponent_th_9_div_3_Template_form_ngSubmit_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ColumnFilterDropdown_r8 = \u0275\u0275reference(1);
      const tblFilterForm_r7 = \u0275\u0275reference(21);
      const f_r9 = \u0275\u0275reference(22);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(f_r9.form.valid && ctx_r1.onFilterClick(i_r5, tblFilterForm_r7, "Filter_Click", ColumnFilterDropdown_r8));
    });
    \u0275\u0275elementStart(23, "div", 50);
    \u0275\u0275text(24, "Show rows where: ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, GenericGridComponent_th_9_div_3_div_25_Template, 6, 1, "div", 51)(26, GenericGridComponent_th_9_div_3_ng_template_26_Template, 21, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(28, "div", 52)(29, "button", 53);
    \u0275\u0275text(30, "Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 54);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_div_3_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r6);
      const ColumnFilterDropdown_r8 = \u0275\u0275reference(1);
      const tblFilterForm_r7 = \u0275\u0275reference(21);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterClick(i_r5, tblFilterForm_r7, "FilterClear_Click", ColumnFilterDropdown_r8));
    });
    \u0275\u0275text(32, "Clear");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const OtherColumnFilter_r22 = \u0275\u0275reference(27);
    const key_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.arrangeArrowUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(17);
    \u0275\u0275propertyInterpolate1("id", "frm_", key_r21.objectKey, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", key_r21.dataType === "Checkbox")("ngIfElse", OtherColumnFilter_r22);
  }
}
function GenericGridComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 36)(1, "span", 37);
    \u0275\u0275listener("click", function GenericGridComponent_th_9_Template_span_click_1_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort(i_r5, ctx_r1.sortType));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, GenericGridComponent_th_9_div_3_Template, 33, 5, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("width", key_r21.width);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r21.displayName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.columnFilter);
  }
}
function GenericGridComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34)(1, "span", 35);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78)(1, "span", 35);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c12, ctx_r1.actionWidth));
  }
}
function GenericGridComponent_tbody_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody")(1, "tr")(2, "td", 79);
    \u0275\u0275text(3, "No Data Found");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("colSpan", ctx_r1.colSpan);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "label", 31)(2, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function GenericGridComponent_tbody_13_tr_1_td_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r23);
      const data_r24 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(data_r24.selected, $event) || (data_r24.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GenericGridComponent_tbody_13_tr_1_td_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.checkIfAllSelected());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", data_r24.selected);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r25 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", (ctx_r1.itemsPerPage > 0 ? ctx_r1.itemsPerPage : ctx_r1.pageSizeOptions[0]) * (ctx_r1.currentPage - 1) + i_r25 + 1, " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_3_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r26 = \u0275\u0275nextContext(2);
      const data_r24 = ctx_r26.$implicit;
      const i_r25 = ctx_r26.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRowClick(i_r25, data_r24));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 97);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_li_4_a_1_Template_a_click_0_listener() {
      const key_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const data_r24 = \u0275\u0275nextContext(5).$implicit;
      return \u0275\u0275resetView(key_r29.value(data_r24));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", key_r29.key == "Toggle_Active" ? "Toggle Active" : key_r29.key == "Make_Featured" ? "Make Featured" : key_r29.key, " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 95);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_li_4_a_1_Template, 2, 1, "a", 96);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actions_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, actions_r30));
  }
}
function GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "button", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 93);
    \u0275\u0275template(4, GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_li_4_Template, 3, 3, "li", 94);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedAllMyRecordFilter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.headerMap.config.header.action.DropDown.Action);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_3_div_2_div_1_Template, 5, 2, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r24["isShowDots"] === void 0 || data_r24["isShowDots"] == false);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_3_a_1_Template, 2, 0, "a", 86)(2, GenericGridComponent_tbody_13_tr_1_td_3_div_2_Template, 2, 1, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link) && (!(ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link.Placement) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link.Placement) == "Left"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.DropDown.Action) && (!(ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.DropDown.Placement) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.DropDown.Placement) == "Left"));
  }
}
function GenericGridComponent_tbody_13_tr_1_td_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_4_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r26 = \u0275\u0275nextContext(2);
      const data_r24 = ctx_r26.$implicit;
      const i_r25 = ctx_r26.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRowClick(i_r25, data_r24));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_4_a_1_Template, 2, 0, "a", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap.config.header.action.Link);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_span_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_5_span_1_span_1_Template_a_click_1_listener() {
      const action_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const data_r24 = \u0275\u0275nextContext(3).$implicit;
      return \u0275\u0275resetView(action_r33.value(data_r24));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r24[key_r34.objectKey]);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_span_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_5_span_1_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r26 = \u0275\u0275nextContext(3);
      const data_r24 = ctx_r26.$implicit;
      const i_r25 = ctx_r26.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRowClick(i_r25, data_r24));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_5_span_1_span_1_Template, 3, 1, "span", 58);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275template(3, GenericGridComponent_tbody_13_tr_1_td_5_span_1_a_3_Template, 2, 0, "a", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx_r1.headerMap.config.header.action.Link.Action));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.headerMap.config.header.action.Link && !ctx_r1.headerMap.config.header.action.Link.Action);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(3).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, data_r24[key_r34.objectKey], "AUD", "symbol-narrow"), " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(3).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", +data_r24[key_r34.objectKey], "\xA2 ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_1_ng_container_1_Template, 3, 5, "ng-container", 51)(2, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_1_ng_template_2_Template, 1, 1, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const centPrice_r36 = \u0275\u0275reference(3);
    const data_r24 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (data_r24 == null ? null : data_r24.PriceType) === "$/head")("ngIfElse", centPrice_r36);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.convertToLocalDataAndTime(data_r24[key_r34.objectKey], key_r34.format, key_r34.timeZone, key_r34 == null ? null : key_r34.DmoType));
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r37);
      const key_r34 = \u0275\u0275nextContext(2).$implicit;
      const i_r25 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Link", key_r34.objectKey));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r24[key_r34.objectKey], " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 107);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_ng_container_1_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r38);
      const i_r25 = \u0275\u0275nextContext(4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Edit"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(3).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r24[key_r34.objectKey]);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(3).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r24[key_r34.objectKey]);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_ng_container_1_Template, 3, 1, "ng-container", 51)(2, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_ng_template_2_Template, 2, 1, "ng-template", null, 13, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultTextWithColor_r39 = \u0275\u0275reference(3);
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const i_r25 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c3, ctx_r1.getColorName(key_r34, i_r25)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (key_r34 == null ? null : key_r34.displayName) === "Pending Approvals")("ngIfElse", defaultTextWithColor_r39);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r40);
      const i_r25 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "SpecialCharClick"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", key_r34.SpecialChar, " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_6_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r41);
      const key_r34 = \u0275\u0275nextContext(2).$implicit;
      const i_r25 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "SpecialCharClick", key_r34.objectKey));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", key_r34.SpecialChar, " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 108);
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", data_r24[key_r34.objectKey], \u0275\u0275sanitizeHtml);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r24[key_r34.objectKey] + ", " + data_r24[key_r34.OtherColumn]);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const tipContent_r42 = \u0275\u0275reference(5);
    const data_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngbPopover", tipContent_r42);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.textSeprator(data_r24[key_r34.objectKey], key_r34.separator), " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(3).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r24[key_r34.objectKey], " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementStart(2, "span", 106);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(3).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c4, data_r24[key_r34.objectKey] === "Live" || data_r24[key_r34.objectKey] === "Edit" || data_r24[key_r34.objectKey] === "Active" ? "green" : "#4D4D51"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c4, data_r24[key_r34.objectKey] === "Live" || data_r24[key_r34.objectKey] === "Edit" || data_r24[key_r34.objectKey] === "Active" ? "green" : "#4D4D51"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r24[key_r34.objectKey], " ");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_10_span_1_Template, 2, 1, "span", 110)(2, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_10_span_2_Template, 4, 7, "span", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext(2).$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", key_r34.displayName !== "Status" && key_r34.displayName !== "Mode");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (key_r34.displayName === "Status" || key_r34.displayName === "Mode") && data_r24);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_1_Template, 4, 2, "span", 100)(2, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_2_Template, 2, 1, "span", 101)(3, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_3_Template, 3, 1, "span", 100)(4, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_4_Template, 4, 5, "span", 102)(5, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_5_Template, 3, 1, "span", 100)(6, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_6_Template, 3, 1, "span", 100)(7, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_7_Template, 1, 1, "span", 103)(8, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_8_Template, 2, 1, "span", 100)(9, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_9_Template, 3, 2, "span", 100)(10, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_span_10_Template, 3, 2, "span", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngSwitch", key_r34.dataType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Currency");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Date");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Link");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "TextWithColor");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "LinkWithSpecialCasynchar");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "LinkWithSpecialChar");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "RichText");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "TextWithOtherColumn");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "TextWithSeparator");
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 113);
  }
  if (rf & 2) {
    const key_r34 = \u0275\u0275nextContext().$implicit;
    const data_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.textSepratorHover(data_r24[key_r34.objectKey], key_r34.separator), \u0275\u0275sanitizeHtml);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 98);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_5_span_1_Template, 4, 4, "span", 51)(2, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_2_Template, 11, 10, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(4, GenericGridComponent_tbody_13_tr_1_td_5_ng_template_4_Template, 1, 1, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r34 = ctx.$implicit;
    const simpledata_r43 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link) && (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link.Placement) == key_r34.objectKey)("ngIfElse", simpledata_r43);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_6_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r26 = \u0275\u0275nextContext(2);
      const data_r24 = ctx_r26.$implicit;
      const i_r25 = ctx_r26.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRowClick(i_r25, data_r24));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_6_a_1_Template, 2, 0, "a", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap.config.header.action.Link);
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 122);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r45);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Edit"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 123);
    \u0275\u0275element(2, "path", 124);
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 125);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Publish"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 123);
    \u0275\u0275element(2, "path", 126)(3, "path", 127)(4, "path", 128)(5, "path", 129);
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Excel"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 130);
    \u0275\u0275element(2, "path", 131);
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 132);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r48);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Copy"));
    });
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275elementEnd();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 134);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "Delete"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 135);
    \u0275\u0275element(2, "path", 136);
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 137);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_7_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r50);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openActionsMenu($event, i_r25));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 138);
    \u0275\u0275element(2, "path", 139)(3, "path", 140)(4, "path", 141);
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 142);
    \u0275\u0275listener("click", function GenericGridComponent_tbody_13_tr_1_td_7_a_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r51);
      const i_r25 = \u0275\u0275nextContext(2).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAction(i_r25, "aiSetting", ctx_r1.ColumnFilterDropdown));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 143);
    \u0275\u0275element(2, "path", 144)(3, "circle", 145);
    \u0275\u0275elementEnd()();
  }
}
function GenericGridComponent_tbody_13_tr_1_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 114);
    \u0275\u0275template(2, GenericGridComponent_tbody_13_tr_1_td_7_a_2_Template, 3, 0, "a", 115)(3, GenericGridComponent_tbody_13_tr_1_td_7_a_3_Template, 6, 0, "a", 116)(4, GenericGridComponent_tbody_13_tr_1_td_7_a_4_Template, 3, 0, "a", 117)(5, GenericGridComponent_tbody_13_tr_1_td_7_a_5_Template, 2, 0, "a", 118)(6, GenericGridComponent_tbody_13_tr_1_td_7_a_6_Template, 3, 0, "a", 119)(7, GenericGridComponent_tbody_13_tr_1_td_7_a_7_Template, 5, 0, "a", 120)(8, GenericGridComponent_tbody_13_tr_1_td_7_a_8_Template, 4, 0, "a", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Edit) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.showGenerateJsonBtn));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.showGenerateJsonBtn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.showGenerateJsonBtn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Copy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Delete);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.moreInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.aiSetting);
  }
}
function GenericGridComponent_tbody_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 81);
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_td_1_Template, 4, 1, "td", 22)(2, GenericGridComponent_tbody_13_tr_1_td_2_Template, 2, 1, "td", 22)(3, GenericGridComponent_tbody_13_tr_1_td_3_Template, 3, 2, "td", 82)(4, GenericGridComponent_tbody_13_tr_1_td_4_Template, 2, 1, "td", 82)(5, GenericGridComponent_tbody_13_tr_1_td_5_Template, 6, 2, "td", 83)(6, GenericGridComponent_tbody_13_tr_1_td_6_Template, 2, 1, "td", 82)(7, GenericGridComponent_tbody_13_tr_1_td_7_Template, 9, 7, "td", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c2, data_r24["selected"], ctx_r1.applyRowStateClass(data_r24, "success"), ctx_r1.applyRowStateClass(data_r24, "fail")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Checkbox);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sNo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.DropDown)) && (!(ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link.Placement) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Link.Placement) == "Left" || !(ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.DropDown.Placement) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.DropDown.Placement) == "Left"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Placement) == "Left");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.columns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Placement) == "Right");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Edit) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Copy) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.Delete) || (ctx_r1.headerMap == null ? null : ctx_r1.headerMap.config.header.action.showGenerateJsonBtn));
  }
}
function GenericGridComponent_tbody_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275template(1, GenericGridComponent_tbody_13_tr_1_Template, 8, 12, "tr", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dataSource);
  }
}
function GenericGridComponent_nav_14_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 158);
    \u0275\u0275listener("click", function GenericGridComponent_nav_14_li_16_Template_li_click_0_listener() {
      const item_r55 = \u0275\u0275restoreView(_r54).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pageChangeClick(item_r55));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", item_r55);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r55);
  }
}
function GenericGridComponent_nav_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 146)(1, "div", 147)(2, "div")(3, "div", 70)(4, "div");
    \u0275\u0275text(5, "Go to page :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 148, 14);
    \u0275\u0275listener("change", function GenericGridComponent_nav_14_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r52);
      const pageSelect_r53 = \u0275\u0275reference(7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(pageSelect_r53.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 149)(9, "div", 70)(10, "div");
    \u0275\u0275text(11, "Show Rows:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 91)(13, "button", 92);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 150);
    \u0275\u0275template(16, GenericGridComponent_nav_14_li_16_Template, 2, 2, "li", 151);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div")(18, "div", 70)(19, "div", 152);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 153)(22, "a", 154);
    \u0275\u0275listener("click", function GenericGridComponent_nav_14_Template_a_click_22_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage($event));
    });
    \u0275\u0275element(23, "i", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 153)(25, "a", 156);
    \u0275\u0275listener("click", function GenericGridComponent_nav_14_Template_a_click_25_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage($event));
    });
    \u0275\u0275element(26, "i", 157);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.currentPage);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.itemsPerPage > 0 ? ctx_r1.itemsPerPage : ctx_r1.pageSizeOptions[1]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", ctx_r1.first, " - ", ctx_r1.last, " of ", ctx_r1.itemsCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r1.prevName);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r1.nextName);
  }
}
var GenericGridComponent = class _GenericGridComponent {
  constructor(elRef, userDetail) {
    this.userDetail = userDetail;
    this.selectedAll = false;
    this.defaultCollaps = "";
    this.currentPage = 1;
    this.pageStatus = {};
    this.checkList = [];
    this.TimeZone = "";
    this.pageNum = -1;
    this.pageSizeOptions = [10, 20, 30, 40, 50, 100];
    this.Change_Log = false;
    this.sNo = false;
    this.tableName = "plasmaTable";
    this.gotoName = "goto";
    this.pageSizeOptionsName = "pageSizeOptions";
    this.nextName = "next";
    this.prevName = "previous";
    this.BuyerAccessRole = true;
    this.rowState = {
      success: {
        property: "",
        values: []
      },
      fail: {
        property: "",
        values: []
      }
    };
    this.pageChange = new EventEmitter();
    this.actionClick = new EventEmitter();
    this.rowClick = new EventEmitter();
    this.actionsMenuOpen = new EventEmitter();
    this.GridSearchConfig = [];
    this.isRemoveFilter = false;
    this.arrangeArrowUrl = UtilService.getUrlForImage("/assets/styles/images/arrange-arrow.png");
    this.elRef = elRef;
    this.itemsPerPage = 0;
    this.itemsCount = 0;
    this.sortType = "asc";
    this.dateFormat = environment.Setting.dateFormat;
    this.dateTimeFormat = environment.Setting.dateTimeFormat;
    this.dateTimeFormatNoSeconds = environment.Setting.dateTimeFormatNoSeconds;
  }
  applyRowStateClass(data, status) {
    return this.rowState[status].values.some((value) => value === data[this.rowState[status].property]);
  }
  nextPage($event, dmog) {
    if (!!dmog) {
      this.defaultCollaps = dmog;
    }
    if (this.currentPage < this.TotalPage) {
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage = 1;
    }
    this.pageChange.emit(this.getPageStatus());
  }
  previousPage($event, dmog) {
    if (!!dmog) {
      this.defaultCollaps = dmog;
    }
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.TotalPage;
    }
    this.pageChange.emit(this.getPageStatus());
  }
  pageChangeClick(item) {
    this.itemsPerPage = item;
    this.currentPage = 1;
    this.pageChange.emit(this.getPageStatus());
  }
  goToPage(pageselected) {
    if (pageselected <= this.TotalPage) {
      this.currentPage = parseInt(pageselected.toString());
      this.pageChange.emit(this.getPageStatus());
    }
  }
  onRowClick(rowind, data) {
    data.index = rowind;
    this.rowClick.emit(data);
  }
  onAction(index, act, ColumnFilter) {
    const data = {
      rowIndex: index,
      action: act,
      ColumnFilterDropdown: ColumnFilter
    };
    this.actionClick.emit(data);
  }
  bindColumnFilterDdl(colInd, frmVal) {
    if (this.isRemoveFilter === true) {
      frmVal.reset();
    } else {
      frmVal.submitted = false;
    }
    const data = {
      colIndex: colInd,
      action: "Filter_Header",
      colData: this.headerMap.config.header.columns[colInd],
      ConditionOpt1: "",
      ConditionOpt2: ""
    };
    if (sessionStorage.getItem("storage_GridSearchConfig")) {
      this.GridSearchConfig = JSON.parse(sessionStorage.getItem("storage_GridSearchConfig"));
    }
    if (this.GridSearchConfig.filter((d) => d.colIndex === colInd).length > 0) {
      const index = this.GridSearchConfig.map((item) => item.colIndex).indexOf(colInd);
      this.ConfigColumnsData = this.GridSearchConfig[index];
      frmVal.ConditionOpt1.value = frmVal.ConditionOpt1.value === "" ? this.ConfigColumnsData.ConditionOpt1 : frmVal.ConditionOpt1.value;
      frmVal.ConditionOpt2.value = frmVal.ConditionOpt2.value === "" ? this.ConfigColumnsData.ConditionOpt2 : frmVal.ConditionOpt2.value;
      frmVal.logicalOpt.value = frmVal.logicalOpt.value === "" ? this.ConfigColumnsData.logicalOpt : frmVal.logicalOpt.value;
      frmVal.filterValue1.value = frmVal.filterValue1.value === "" ? this.ConfigColumnsData.filterValue1 : frmVal.filterValue1.value;
      frmVal.filterValue2.value = frmVal.filterValue2.value === "" ? this.ConfigColumnsData.filterValue2 : frmVal.filterValue2.value;
      this.ConfigColumnsData = {
        colIndex: colInd,
        ConditionOpt1: frmVal.ConditionOpt1.value,
        filterValue1: frmVal.filterValue1.value,
        logicalOpt: frmVal.logicalOpt.value,
        ConditionOpt2: frmVal.ConditionOpt2.value,
        filterValue2: frmVal.filterValue2.value,
        activefiltercolindex: -1
      };
      this.GridSearchConfig[index] = this.ConfigColumnsData;
    } else {
      if (data.colData.dataType === "Date" || data.colData.dataType === "Currency") {
        frmVal.ConditionOpt1.value = "GREATER_THAN";
        frmVal.ConditionOpt2.value = "GREATER_THAN";
      } else {
        frmVal.ConditionOpt1.value = "CONTAINS";
        frmVal.ConditionOpt2.value = "CONTAINS";
      }
      frmVal.filterValue1.value = "";
      frmVal.filterValue2.value = "";
      this.ConfigColumnsData = {
        colIndex: colInd,
        ConditionOpt1: frmVal.ConditionOpt1.value,
        filterValue1: frmVal.filterValue1.value,
        logicalOpt: frmVal.logicalOpt.value,
        ConditionOpt2: frmVal.ConditionOpt2.value,
        filterValue2: frmVal.filterValue2.value,
        activefiltercolindex: -1
      };
      this.GridSearchConfig.push(this.ConfigColumnsData);
    }
    this.actionClick.emit(data);
  }
  SetGridSearchConfig(colInd, frmVal, dataType) {
    if (dataType === "Date" || dataType === "Currency") {
      frmVal.ConditionOpt1.value = frmVal.ConditionOpt1.value === "" ? "GREATER_THAN" : frmVal.ConditionOpt1.value;
      frmVal.ConditionOpt2.value = frmVal.ConditionOpt2.value === "" ? "GREATER_THAN" : frmVal.ConditionOpt2.value;
    } else {
      frmVal.ConditionOpt1.value = frmVal.ConditionOpt1.value === "" ? "CONTAINS" : frmVal.ConditionOpt1.value;
      frmVal.ConditionOpt2.value = frmVal.ConditionOpt2.value === "" ? "CONTAINS" : frmVal.ConditionOpt2.value;
    }
    this.ConfigColumnsData = {
      colIndex: colInd,
      ConditionOpt1: frmVal.ConditionOpt1.value,
      filterValue1: frmVal.filterValue1.value,
      logicalOpt: frmVal.logicalOpt.value,
      ConditionOpt2: frmVal.ConditionOpt2.value,
      filterValue2: frmVal.filterValue2.value,
      activefiltercolindex: -1
    };
    if (this.GridSearchConfig.filter((d) => d.colIndex === colInd).length > 0) {
      const index = this.GridSearchConfig.map((item) => item.colIndex).indexOf(colInd);
      this.GridSearchConfig[index] = this.ConfigColumnsData;
    } else {
      this.GridSearchConfig.push(this.ConfigColumnsData);
    }
  }
  onFilterClick(colInd, frmVal, actiontype, ColumnFilter) {
    const data = {
      colIndex: colInd,
      action: actiontype,
      colData: this.headerMap.config.header.columns[colInd],
      filterData: {
        filterValue1: "",
        filterValue2: "",
        ConditionOpt1: {},
        ConditionOpt2: {},
        logicalOpt: {}
      },
      ColumnFilterDropdown: ColumnFilter
    };
    if (this.headerMap.config.header.columns[colInd].Filed === "Checkbox") {
      const SelectedRecordIds = [];
      for (const chkbox of frmVal.filterValue1) {
        if (chkbox.checked === true) {
          SelectedRecordIds.push(chkbox.value);
        }
      }
      data.filterData.filterValue1 = SelectedRecordIds.join(",");
    } else {
      if (frmVal.filterValue1 && frmVal.filterValue1.value !== "") {
        let val1 = frmVal.filterValue1.value;
        if (this.headerMap.config.header.columns[colInd].dataType === "Date") {
          val1 = this.convertToSystemDataAndTime(val1, "yyyy-MM-dd HH:mm:ss", 0, frmVal.ConditionOpt1.value);
        }
        data.filterData.filterValue1 = val1;
      }
      if (frmVal.filterValue2 && frmVal.filterValue2.value !== "") {
        let val2 = frmVal.filterValue2.value;
        if (this.headerMap.config.header.columns[colInd].dataType === "Date") {
          val2 = this.convertToSystemDataAndTime(val2, "yyyy-MM-dd HH:mm:ss", 0, frmVal.ConditionOpt2.value);
        }
        data.filterData.filterValue2 = val2;
      }
      data.filterData.ConditionOpt1 = {
        Text: frmVal.ConditionOpt1.selectedOptions[0] ? frmVal.ConditionOpt1.selectedOptions[0].innerText : "",
        Value: frmVal.ConditionOpt1.value
      };
      data.filterData.ConditionOpt2 = {
        Text: frmVal.ConditionOpt2.selectedOptions[0] ? frmVal.ConditionOpt2.selectedOptions[0].innerText : "",
        Value: frmVal.ConditionOpt2.value
      };
      data.filterData.logicalOpt = {
        Text: frmVal.logicalOpt.selectedOptions[0] ? frmVal.logicalOpt.selectedOptions[0].innerText : "",
        Value: frmVal.logicalOpt.value
      };
    }
    if (actiontype === "FilterClear_Click") {
      frmVal.filterValue1.value = "";
      frmVal.filterValue2.value = "";
      frmVal.ConditionOpt2.value = "";
      frmVal.ConditionOpt1.value = "";
      frmVal.logicalOpt.value = "";
    }
    this.SetGridSearchConfig(colInd, frmVal, data.colData.dataType);
    if (this.validate(data)) {
      this.currentPage = 1;
      this.getPageStatus();
      sessionStorage.setItem("storage_GridSearchConfig", JSON.stringify(this.GridSearchConfig));
      this.actionClick.emit(data);
    }
  }
  OnRemoveFilterClick() {
    this.GridSearchConfig = [];
    if (sessionStorage.getItem("storage_GridSearchConfig")) {
      sessionStorage.removeItem("storage_GridSearchConfig");
      this.isRemoveFilter = true;
    }
  }
  addChange(act, i) {
    if (act.checked) {
      this.checkList.push(i);
    } else {
      this.checkList = this.checkList.filter((x) => x !== i);
    }
  }
  selectAllCheckBox() {
    if (this.selectedAll) {
      for (const i of this.dataSource) {
        i.selected = true;
      }
    } else {
      for (const i of this.dataSource) {
        i.selected = false;
      }
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.dataSource.every((chkItem) => {
      return chkItem.selected === true;
    });
  }
  getKey(obj) {
    const keys = Object.keys(obj);
    this.currentKey = keys[0];
    return keys[0];
  }
  //#endregion
  //#region Private functions
  getPageStatus() {
    this.pageStatus.pageSize = this.itemsPerPage > 0 ? this.itemsPerPage : this.pageSizeOptions[1];
    this.pageStatus.currentPage = this.currentPage;
    this.pageStatus.tableName = this.tableName;
    return this.pageStatus;
  }
  getColorName(key, index) {
    if (key.Color) {
      if (key.CompareWith) {
        if (key.Condition === "equal") {
          if (key.CompareWith === this.dataSource[index][key.objectKey]) {
            return key.Color;
          }
        } else if (key.Condition === "notEqual") {
          if (key.CompareWith !== this.dataSource[index][key.objectKey]) {
            return key.Color;
          }
        } else if (key.Condition === "contains") {
          if (this.dataSource[index][key.objectKey].includes(key.CompareWith)) {
            return key.Color;
          }
        }
      } else if (key.CompareColumn) {
        if (key.Condition === "equal") {
          if (this.dataSource[index][key.CompareColumn] === key.CompareValue) {
            return key.Color;
          }
        } else if (key.Condition === "notEqual") {
          if (this.dataSource[index][key.CompareColumn] !== key.CompareValue) {
            return key.Color;
          }
        }
      } else {
        return key.Color;
      }
    }
  }
  textSeprator(data, separator) {
    if (data) {
      const ar = data.split(separator);
      if (ar.length > 1) {
        return ar[0] + ",...";
      }
      return data;
    }
  }
  textSepratorHover(data, separator) {
    if (data) {
      const ar = data.split(separator);
      if (ar.length > 1) {
        this.tolTip = ar.join("\n");
        return ar.join("<br>");
      }
      return data;
    }
  }
  //#endregion
  //#region Properties
  get last() {
    const l = (this.itemsPerPage > 0 ? this.itemsPerPage : this.pageSizeOptions[1]) * this.currentPage;
    if (l > this.itemsCount) {
      return this.itemsCount;
    } else {
      return l;
    }
  }
  get first() {
    if (this.pageNum > 0) {
      this.currentPage = 1;
      this.getPageStatus();
    }
    this.pageNum = -1;
    return (this.currentPage - 1) * (this.itemsPerPage > 0 ? this.itemsPerPage : this.pageSizeOptions[1]) + 1;
  }
  get TotalPage() {
    return Math.ceil(this.itemsCount / (this.itemsPerPage > 0 ? this.itemsPerPage : this.pageSizeOptions[1]));
  }
  get colSpan() {
    this.colLenght = Object.keys(this.headerMap.config.header.columns).length;
    if (this.sNo === true) {
      this.colLenght = this.colLenght + 1;
    }
    const cols = Object.keys(this.headerMap.config.header.action);
    if (cols.filter((x) => x === "Checkbox").length > 0) {
      this.colLenght = this.colLenght + 1;
    }
    if (cols.filter((x) => x === "Edit" || x === "Delete").length > 0) {
      this.colLenght = this.colLenght + 1;
    }
    return this.colLenght;
  }
  get actionWidth() {
    let wdth = 10;
    if (this.headerMap.config.header.action["Delete"] === true) {
      wdth = 8;
    }
    if (this.headerMap.config.header.action["moreInfo"] === true) {
      wdth = 12;
    }
    if (this.headerMap.config.header.action["aiSetting"] === true) {
      wdth = wdth + 10;
    }
    return wdth;
  }
  //#endregion
  sort(index, type, ColumnFilter) {
    let data = {};
    data = {
      colIndex: index,
      action: type,
      colData: this.headerMap.config.header.columns[index],
      ColumnFilterDropdown: ColumnFilter
    };
    this.sortType = type === "asc" ? "desc" : "asc";
    this.actionClick.emit(data);
  }
  convertToLocalDataAndTime(value, format, zone, DmoType) {
    try {
      if (value != "") {
        const d = new Date(value);
        if (DmoType === "StaticDateBox") {
          return formatDate(d, format, "en-US");
        } else {
          const localOffset = zone * 6e4;
          const localTime = d.getTime() - localOffset;
          d.setTime(localTime);
          return formatDate(d, format, "en-US");
        }
      }
    } catch (error) {
      return "";
    }
  }
  validate(event) {
    if (event.filterData.ConditionOpt1 && (event.filterData.ConditionOpt1.Value === "" || event.filterData.ConditionOpt1.Value === "Select...")) {
      return false;
    } else if (event.filterData.filterValue1 === "" || event.filterData.filterValue1 == null) {
      return false;
    } else {
      return true;
    }
  }
  convertToSystemDataAndTime(value, format, zone, ConditionOption) {
    if (value == null || value === "") {
      return null;
    }
    try {
      let modifiedDateValue;
      let dateArray = value.split("/");
      if (environment.Setting.dateFormat === "dd/MM/yyyy") {
        modifiedDateValue = dateArray[1].toString() + "/" + dateArray[0].toString() + "/" + dateArray[2].toString();
      } else {
        modifiedDateValue = dateArray[0].toString() + "/" + dateArray[1].toString() + "/" + dateArray[2].toString();
      }
      let timeZone;
      if (!zone) {
        timeZone = this.userDetail.TimeZone.toString();
      } else {
        timeZone = zone;
      }
      const d = new Date(modifiedDateValue);
      const localOffset = timeZone * 6e4;
      if (["GREATER_THAN", "LESS_THAN_OR_EQUAL"].indexOf(ConditionOption) > -1) {
        d.setHours(23, 59, 59, 999);
      } else {
        d.setHours(0, 0, 0, 0);
      }
      const localTime = d.getTime() + localOffset;
      d.setTime(localTime);
      return formatDate(d, format, "en-US");
    } catch (error) {
      return "";
    }
  }
  //MD Changes - #444 & CRM #961 
  convertToUTCDataAndTime(value, format) {
    try {
      if (value != "") {
        const d = new Date(value);
        const zone = this.userDetail.TimeZone;
        const localOffset = zone * 6e4;
        const localTime = d.getTime() - localOffset;
        d.setTime(localTime);
        return formatDate(d, format, "en-US");
      }
    } catch (error) {
      return "";
    }
  }
  // MD Internal Tickets - #1081
  isDate(value) {
    const regex = /([0-9]){1,2}\/([0-9]{2})\/([0-9]){4}/;
    return value.match(regex);
  }
  addCommaSeparator(val) {
    if (!!val && val.includes("|")) {
      const value = val.split("|");
      let list = "";
      value.forEach((el) => {
        list = list + el + ",";
      });
      return list.replace(/,\s*$/, "");
    }
    return val;
  }
  openActionsMenu(evt, rowIndex) {
    const rect = evt.currentTarget.getBoundingClientRect();
    const x = rect.left;
    const y = rect.bottom;
    this.actionsMenuOpen.emit({ x, y, rowIndex });
  }
  static {
    this.\u0275fac = function GenericGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GenericGridComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(UserDetail));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenericGridComponent, selectors: [["generic-grid"]], inputs: { pageNum: "pageNum", headerMap: "headerMap", pageSizeOptions: "pageSizeOptions", Change_Log: "Change_Log", sNo: "sNo", tableName: "tableName", gotoName: "gotoName", pageSizeOptionsName: "pageSizeOptionsName", nextName: "nextName", prevName: "prevName", dataSource: "dataSource", itemsCount: "itemsCount", isExport: "isExport", filterValue1: "filterValue1", filterValue2: "filterValue2", ConditionOpt1: "ConditionOpt1", ConditionOpt2: "ConditionOpt2", logicalOpt: "logicalOpt", FromDateobj: "FromDateobj", ToDateobj: "ToDateobj", BuyerAccessRole: "BuyerAccessRole", rowState: "rowState" }, outputs: { pageChange: "pageChange", actionClick: "actionClick", rowClick: "rowClick", actionsMenuOpen: "actionsMenuOpen" }, standalone: true, features: [\u0275\u0275ProvidersFeature([{
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter
    }]), \u0275\u0275StandaloneFeature], decls: 15, vars: 10, consts: [["ColumnFilterDropdown", "ngbDropdown"], ["tblFilterForm", "", "f", "ngForm"], ["OtherColumnFilter", ""], ["ConditionOpt1", ""], ["logicalOpt", ""], ["ConditionOpt2", ""], ["d", "ngbDatepicker", "FromDateobj", ""], ["filterValue1", ""], ["d", "ngbDatepicker", "ToDateobj", ""], ["filterValue2", ""], ["simpledata", ""], ["tipContent", ""], ["centPrice", ""], ["defaultTextWithColor", ""], ["pageSelect", ""], ["class", "table-filters-group", 4, "ngIf"], [1, "basicTable", "stripped", 2, "border-top", "0", "border-right", "0", "border-left", "0"], ["cdkDropListGroup", ""], ["style", "width:3%", 4, "ngIf"], ["style", "width: 50px", 4, "ngIf"], [3, "width", 4, "ngFor", "ngForOf"], ["class", "action-column", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Page navigation", "class", "alignBottomNav", 4, "ngIf"], [1, "table-filters-group"], [1, "export-btns-group"], ["href", "javascript:void(0)", "title", "Excel", 3, "click"], ["role", "img", "aria-label", "Excel", 1, "far", "fa-file-excel"], ["href", "javascript:void(0)", "title", "PDF", 3, "click"], ["role", "img", "aria-label", "PDF", 1, "far", "fa-file-pdf"], [2, "width", "3%"], [1, "checkbox", "ml-2", "marginleftadntop"], ["type", "checkbox", "name", "chkboxlist", "id", "selectAll", 3, "ngModelChange", "ngModel"], [1, "skin"], [2, "width", "50px"], [1, "colHead"], [3, "width"], [1, "colHead", "header", 3, "click"], ["ngbDropdown", "", "class", "grid-filter-wrap", 4, "ngIf"], ["ngbDropdown", "", 1, "grid-filter-wrap"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, ""], ["alt", "", 3, "click", "src"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "list-unstyled"], ["href", "javasript: void(0)", 3, "click"], [1, "fas", "fa-sort-alpha-down"], [1, "fas", "fa-sort-alpha-up"], [1, "fas", "fa-random"], ["type", "separator", "role", "menuitem", 1, "li-separator"], [3, "ngSubmit", "id"], [1, "filter", 2, "height", "18px", "margin-top", "3px", "margin-bottom", "3px"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "mt-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 2, "color", "white"], ["type", "reset", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["type", "hidden", "value", "or"], [1, "list-group"], [1, "list-unstyled", "list-group", 2, "width", "200px"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "filterValue1", 1, "checkbox", "checkboxMargin", 3, "value"], [1, "form-group"], ["name", "ConditionOpt1", "required", "", 1, "form-control", 2, "width", "200px", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], ["name", "logicalOpt", 1, "form-control", 2, "width", "200px"], ["value", ""], ["value", "OR", "selected", ""], ["value", "AND"], ["name", "ConditionOpt2", 1, "form-control", 2, "width", "200px"], [3, "value"], [1, "input-group"], ["placeholder", "Select Date", "name", "filterValue1", "ngbDatepicker", "", "required", "", 1, "form-control", 3, "ngClass"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "calendar", 3, "click"], [1, "far", "fa-calendar-alt"], ["type", "text", "name", "filterValue1", "placeholder", "Filter Value", "required", "", 1, "form-control", 2, "width", "200px", 3, "ngClass"], ["name", "filterValue2", "placeholder", "Select Date", "ngbDatepicker", "", 1, "form-control"], ["type", "text", "name", "filterValue2", "placeholder", "Filter Value", 1, "form-control", 2, "width", "200px"], [1, "action-column", 3, "ngStyle"], [1, "text-center", 3, "colSpan"], ["class", "table-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "ngClass"], ["style", "width: 40px", 4, "ngIf"], ["class", "column-td", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "chkboxlist", 3, "ngModelChange", "ngModel"], [2, "width", "40px"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "moreDots", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "moreDots"], ["ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click"], [1, "column-td"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "wordwrap", 4, "ngSwitchCase"], [3, "ngStyle", 4, "ngSwitchCase"], ["class", "wordwrap", 3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "wordwrap"], [3, "ngStyle"], [2, "cursor", "pointer", 3, "click"], [1, "wordwrap", 3, "innerHTML"], ["href", "javascript:void(0)", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "texthover", "wordwrap", 3, "ngbPopover"], ["style", "white-space: normal", 4, "ngIf"], [2, "white-space", "normal"], [1, "fas", "fa-circle", 2, "font-size", "10px", "margin-right", "2px", 3, "ngStyle"], [3, "innerHTML"], [1, "action-btns", "d-flex", "justify-content-center"], ["href", "javascript:void(0)", "title", "Edit", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Publish", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Excel", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Copy", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Action Items", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "aiSetting", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Edit", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["d", "M16.476 4.84999C16.899 4.42712 17.1366 3.85354 17.1367 3.25544C17.1368 2.65733 16.8993 2.0837 16.4764 1.66072C16.0535 1.23774 15.48 1.00008 14.8819 1C14.2838 0.999925 13.7101 1.23745 13.2872 1.66032L2.61028 12.3398C2.42453 12.525 2.28717 12.753 2.21028 13.0038L1.15347 16.4855C1.13279 16.5546 1.13123 16.6281 1.14895 16.6981C1.16667 16.7681 1.203 16.832 1.2541 16.8831C1.30521 16.9341 1.36916 16.9703 1.4392 16.9879C1.50923 17.0055 1.58272 17.0039 1.65187 16.9831L5.1343 15.927C5.38484 15.8508 5.61285 15.7143 5.79831 15.5294L16.476 4.84999Z", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "javascript:void(0)", "title", "Publish", 3, "click"], ["d", "M17.1369 9.00018C17.1369 6.8784 16.294 4.84352 14.7937 3.3432C13.2934 1.84287 11.2585 1 9.13679 1C6.90028 1.00841 4.75361 1.88111 3.14563 3.43561L1.13672 5.44455", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.13672 1V5.44455H5.5812", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.13672 9C1.13672 11.1218 1.97958 13.1567 3.47989 14.657C4.98019 16.1573 7.01504 17.0002 9.13679 17.0002C11.3733 16.9918 13.52 16.1191 15.128 14.5646L17.1369 12.5556", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.6924 12.5557H17.1369V17.0002", "stroke", "#333333", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "18", "viewBox", "0 0 17 18", "fill", "none"], ["d", "M9.7364 1V4.20007C9.7364 4.62443 9.90497 5.0314 10.205 5.33147C10.5051 5.63153 10.9121 5.80011 11.3364 5.80011H14.5364M10.1364 9.40019L6.13637 13.4003M6.13637 9.40019L10.1364 13.4003M10.5364 1H3.33634C2.91199 1 2.50502 1.16857 2.20496 1.46864C1.9049 1.7687 1.73633 2.17568 1.73633 2.60004V15.4003C1.73633 15.8247 1.9049 16.2317 2.20496 16.5317C2.50502 16.8318 2.91199 17.0004 3.33634 17.0004H12.9364C13.3608 17.0004 13.7678 16.8318 14.0678 16.5317C14.3679 16.2317 14.5364 15.8247 14.5364 15.4003V5.00009L10.5364 1Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "javascript:void(0)", "title", "Copy", 3, "click"], [1, "far", "fa-copy"], ["href", "javascript:void(0)", "title", "Delete", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "16", "viewBox", "0 0 20 24", "fill", "none"], ["d", "M8.77778 11.1539V17.7539M13.2222 11.1539V17.7539M18.7778 5.65391V21.0539C18.7778 21.6374 18.5437 22.197 18.1269 22.6095C17.7102 23.0221 17.1449 23.2539 16.5556 23.2539H5.44444C4.85507 23.2539 4.28984 23.0221 3.8731 22.6095C3.45635 22.197 3.22222 21.6374 3.22222 21.0539V5.65391M1 5.65391H21M6.55556 5.65391V3.45391C6.55556 2.87043 6.78968 2.31085 7.20643 1.89827C7.62318 1.48569 8.18841 1.25391 8.77778 1.25391H13.2222C13.8116 1.25391 14.3768 1.48569 14.7936 1.89827C15.2103 2.31085 15.4444 2.87043 15.4444 3.45391V5.65391", "stroke", "#333333", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Action Items", "href", "javascript:void(0)", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "16", "viewBox", "0 0 17 16", "fill", "none"], ["d", "M8.13692 8.79977C8.57875 8.79977 8.93693 8.44159 8.93693 7.99975C8.93693 7.55792 8.57875 7.19974 8.13692 7.19974C7.69509 7.19974 7.33691 7.55792 7.33691 7.99975C7.33691 8.44159 7.69509 8.79977 8.13692 8.79977Z", "stroke", "black", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.13692 3.19965C8.57875 3.19965 8.93693 2.84147 8.93693 2.39963C8.93693 1.95779 8.57875 1.59961 8.13692 1.59961C7.69509 1.59961 7.33691 1.95779 7.33691 2.39963C7.33691 2.84147 7.69509 3.19965 8.13692 3.19965Z", "stroke", "black", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.13692 14.3999C8.57875 14.3999 8.93693 14.0417 8.93693 13.5999C8.93693 13.158 8.57875 12.7999 8.13692 12.7999C7.69509 12.7999 7.33691 13.158 7.33691 13.5999C7.33691 14.0417 7.69509 14.3999 8.13692 14.3999Z", "stroke", "black", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "javascript:void(0)", "title", "aiSetting", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "16", "viewBox", "0 0 20 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-settings-icon", "lucide-settings"], ["d", "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"], ["cx", "12", "cy", "12", "r", "3"], ["aria-label", "Page navigation", 1, "alignBottomNav"], [1, "filter_pagination"], ["type", "number", "min", "1", 1, "gotoPage", 3, "change", "value"], [1, "selectListing"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownCustomFilter", 1, "show1"], ["ngbDropdownItem", "", "id", "pageSizeOptionsName", 3, "value", "click", 4, "ngFor", "ngForOf"], [2, "padding-right", "0px"], [1, "nxt_prvWrap"], ["tabindex", "-1", "title", "Previous", 3, "click", "id"], ["aria-label", "Left arrow", "role", "img", 1, "fas", "fa-angle-left"], ["title", "Next", "tabindex", "-1", 3, "click", "id"], ["aria-label", "Right arrow", "role", "img", 1, "fas", "fa-angle-right"], ["ngbDropdownItem", "", "id", "pageSizeOptionsName", 3, "click", "value"]], template: function GenericGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275template(1, GenericGridComponent_div_1_Template, 8, 0, "div", 15);
        \u0275\u0275elementContainerStart(2);
        \u0275\u0275elementStart(3, "table", 16)(4, "thead", 17)(5, "tr");
        \u0275\u0275template(6, GenericGridComponent_th_6_Template, 4, 3, "th", 18)(7, GenericGridComponent_th_7_Template, 3, 0, "th", 19)(8, GenericGridComponent_th_8_Template, 3, 0, "th", 19)(9, GenericGridComponent_th_9_Template, 4, 3, "th", 20)(10, GenericGridComponent_th_10_Template, 3, 0, "th", 19)(11, GenericGridComponent_th_11_Template, 3, 3, "th", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, GenericGridComponent_tbody_12_Template, 4, 1, "tbody", 22)(13, GenericGridComponent_tbody_13_Template, 2, 1, "tbody", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, GenericGridComponent_nav_14_Template, 27, 8, "nav", 23);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isExport === true);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Checkbox);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sNo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Link) || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.DropDown)) && (!(ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Link.Placement) || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Link.Placement) == "Left" || !(ctx.headerMap == null ? null : ctx.headerMap.config.header.action.DropDown.Placement) || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.DropDown.Placement) == "Left"));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.headerMap == null ? null : ctx.headerMap.config.header.columns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Link) || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.DropDown)) && ((ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Link.Placement) == "Right" || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.DropDown.Placement) == "Right"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Edit) || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.Delete) || (ctx.headerMap == null ? null : ctx.headerMap.config.header.action.showGenerateJsonBtn));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.length) == 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.length) > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.headerMap == null ? null : ctx.headerMap.config.paging) && ctx.itemsCount != 0);
      }
    }, dependencies: [NgIf, CdkDropListGroup, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormsModule, NgModel, NgForm, NgStyle, NgForOf, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgClass, NgbInputDatepicker, NgbDropdownItem, NgSwitch, NgSwitchCase, NgbPopover, NgSwitchDefault, CurrencyPipe, KeyValuePipe], styles: ['\n\n.not-active[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n  color: black;\n}\n.grid-filter-wrap[_ngcontent-%COMP%] {\n  float: right;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f2f2f2;\n  border: 1px solid #cbcbcb;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  outline: none;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn.calendar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.basicTable[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 126, 72, 0.1) !important;\n}\n.inline-checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]:after {\n  top: 1px;\n}\n.moreDots[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  background: none !important;\n  border: none !important;\n  box-shadow: none !important;\n  font-family: "Font Awesome 5 Free";\n  font-weight: 900;\n  color: #000;\n  line-height: 10px !important;\n}\n.moreDots[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:after {\n  display: none !important;\n}\n.moreDots[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:before {\n  content: "\\f141" !important;\n}\n.moreDots[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0px 0px 0px 10px;\n  font-size: 12px;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 8px 15px 8px 0px !important;\n  background-repeat: no-repeat;\n  background-position: center right;\n  cursor: pointer;\n}\n.action-column[_ngcontent-%COMP%] {\n  align-items: end;\n}\n.action-btns[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.action-btns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 6px;\n}\n.action-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4D4D51;\n}\n.inline-checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  top: 3px;\n}\n.export-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  height: 30px;\n  padding: 5px;\n  margin-left: 10px;\n  line-height: 28px;\n  text-decoration: none;\n  color: #4d4d51;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n  float: right;\n}\n.table-filters-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #f2f2f2;\n  border-top: 1px solid #cbcbcb;\n  border-bottom: 1px solid #cbcbcb;\n  padding: 0px 10px;\n}\n@media (max-width: 768px) {\n  .table-filters-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.table-filters-group[_ngcontent-%COMP%]   .add-new-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-size: 11px;\n  letter-spacing: 0.3px;\n  text-align: center;\n  height: 20px;\n  background-color: #226398;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  line-height: 14px;\n}\n.change-log-table[_ngcontent-%COMP%]   .nxt_prvWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px;\n  cursor: pointer;\n}\n.change-log-table[_ngcontent-%COMP%]   .nxt_prvWrap[_ngcontent-%COMP%]   a#previous[_ngcontent-%COMP%], \n.change-log-table[_ngcontent-%COMP%]   .nxt_prvWrap[_ngcontent-%COMP%]   a#next[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: black;\n}\n.nochange[_ngcontent-%COMP%] {\n  color: #eae5e5;\n  font-style: italic;\n}\n.table-row.success[_ngcontent-%COMP%] {\n  background: #88D600 !important;\n}\n.table-row.fail[_ngcontent-%COMP%] {\n  background: var(--danger) !important;\n}\n.column-td[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.wordwrap[_ngcontent-%COMP%] {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}\n.basicTable[_ngcontent-%COMP%] {\n  word-break: normal;\n}\n.texthover[_ngcontent-%COMP%] {\n  cursor: default;\n  text-decoration: none;\n}\n.textwithouthover[_ngcontent-%COMP%] {\n  cursor: default;\n  text-decoration: none;\n  font-weight: 300;\n  font-size: 12px;\n  color: #4D4D51;\n  letter-spacing: 0.36px;\n  line-height: 1.9;\n}\n.filter_pagination[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 44px;\n  border-radius: 25px;\n  text-align: right;\n  padding: 9px 5px;\n  border-top: 0px solid #ccc;\n  background-color: #F3F3F3;\n  font-size: 16px;\n  margin-top: 0px;\n  color: #36424F;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.54px;\n}\n.nxt_prvWrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EB583B;\n}\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #EB583B;\n}\n.nxt_prvWrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EB583B;\n}\n.filter_pagination[_ngcontent-%COMP%]   .selectListing[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  border-bottom: 2px solid #EB583B;\n  border-right: 2px solid #EB583B;\n}\ntable.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  color: #4D4D51;\n  letter-spacing: 0.36px;\n  line-height: 1.9;\n  border-left: none !important;\n}\n.alignBottomNav[_ngcontent-%COMP%] {\n  justify-content: end;\n  display: flex;\n}\n.status-mode[_ngcontent-%COMP%] {\n  white-space: normal;\n  display: inline;\n  align-items: center;\n  color: #4D4D51;\n}\n.status-mode.active[_ngcontent-%COMP%] {\n  color: green;\n}\n.status-mode.mode[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.status-mode.mode.active[_ngcontent-%COMP%] {\n  color: green;\n  background-color: rgba(0, 162, 34, 0.1019607843);\n}\n.status-mode.mode.inactive[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  background-color: rgba(77, 77, 81, 0.0509803922);\n}\n.status-mode[_ngcontent-%COMP%]   i.fas.fa-circle[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 2px;\n}\n.status-mode[_ngcontent-%COMP%]   i.fas.fa-circle.active[_ngcontent-%COMP%] {\n  color: green;\n}\n.status-mode[_ngcontent-%COMP%]   i.fas.fa-circle.inactive[_ngcontent-%COMP%] {\n  color: #4D4D51;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  position: absolute !important;\n  margin: 0px !important;\n  inset: 0px 0px auto auto !important;\n  transform: translate3d(0px, 26px, 0px) !important;\n}\n.dropdown-menu.show1[_ngcontent-%COMP%] {\n  position: absolute !important;\n  inset: auto auto 0px 0px !important;\n  margin: 0px !important;\n  transform: translate3d(5.33333px, -26.6667px, 0px) !important;\n}\nth.action-column[_ngcontent-%COMP%], \ntd.action-column[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\ntd.action-column[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\ntable.basicTable.stripped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F3F3F3;\n}\ntable.basicTable.stripped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FFFFFF;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%] {\n  background-color: #EB583B;\n  border-color: #EB583B;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 4px;\n  top: 0px;\n  width: 6px;\n  height: 12px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%]:hover {\n  border-color: #999;\n}\n.marginleftadntop[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=generic-grid.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenericGridComponent, { className: "GenericGridComponent", filePath: "src\\app\\admin\\Shared\\generic-grid\\generic-grid.component.ts", lineNumber: 25 });
})();

// src/app/core/services/base-http.service.ts
var BaseHttpService = class _BaseHttpService {
  constructor(http, simpleLoader) {
    this.http = http;
    this.simpleLoader = simpleLoader;
  }
  _setHeaders(parameters) {
    let processName = null;
    if (parameters && parameters.ProcessName) {
      processName = parameters.ProcessName;
    } else {
      processName = sessionStorage.getItem("AppName");
    }
    let headers = new HttpHeaders();
    const accessToken = localStorage.getItem("AccessToken");
    if (!headers.has("AccessToken") && accessToken) {
      headers = headers.set("AccessToken", accessToken);
    }
    if (processName != null) {
      headers = headers.set("processName", processName);
    }
    return headers;
  }
  _setParams(parameters) {
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
  get(url, parameters, httpHeaders, nospinner = false) {
    if (!nospinner) {
      this.simpleLoader.show(url);
    }
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    const request$ = this.http.get(url, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      if (!nospinner) {
        yield minDelay$;
        this.simpleLoader.hide();
      }
    })));
  }
  post(url, body, parameters, httpHeaders, responseType) {
    this.simpleLoader.show(url);
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    const request$ = this.http.post(url, body, { headers, params, responseType });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  postReorderDmogs(url, bmoid, dmogIds) {
    this.simpleLoader.show(url);
    const headers = new HttpHeaders({
      "accessToken": localStorage.getItem("AccessToken"),
      // Header
      "bmoid": bmoid,
      // Header
      "dmogIds": dmogIds
      // Header
    });
    const request$ = this.http.post(url, {}, { headers });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  updatePrntDmogIDs(url, body) {
    this.simpleLoader.show(url);
    const headers = new HttpHeaders({
      "accessToken": localStorage.getItem("AccessToken")
      // Header
    });
    const request$ = this.http.post(url, body, { headers });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  postparm(url, body, parameters, httpHeaders, responseType) {
    this.simpleLoader.show(url);
    const headers = this._setHeaders(httpHeaders);
    let params;
    if (parameters instanceof HttpParams) {
      params = parameters;
    } else {
      params = new HttpParams();
      if (parameters) {
        Object.keys(parameters).forEach((key) => {
          params = params.set(key, parameters[key]);
        });
      }
    }
    const request$ = this.http.post(url, body, { headers, params, responseType });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  delete(url, parameters, httpHeaders) {
    this.simpleLoader.show(url);
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    const request$ = this.http.delete(url, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  static {
    this.\u0275fac = function BaseHttpService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseHttpService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SimpleLoaderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BaseHttpService, factory: _BaseHttpService.\u0275fac, providedIn: "root" });
  }
};

// src/lib/util/name-to-guid.ts
var nameToGuid = (name) => name?.replaceAll(/[^\w]|_/g, "")?.toLowerCase();

export {
  objToList,
  enumToList,
  arrayToList,
  arrayToList1,
  listToTypeArray,
  primitiveArrayToList,
  keyValueListToKeyList,
  sanitizeFormArray,
  toFormGroup,
  toFormArray,
  constructId,
  deconstructId,
  CustomSelectComponent,
  TreeListComponent,
  AssociationComponent,
  BaseHttpService,
  ColumnFilterService,
  QuillEditorComponent,
  QuillModule,
  GenericGridComponent,
  require_lodash,
  nameToGuid
};
//# sourceMappingURL=chunk-BQKXR4UC.js.map
