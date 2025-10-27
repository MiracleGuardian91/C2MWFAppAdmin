import {
  CssLoaderService,
  SharedModule,
  TermsAndConditionsComponent
} from "./chunk-B4CPBYGG.js";
import "./chunk-Y5HOE45L.js";
import "./chunk-FRU5HPWK.js";
import "./chunk-RBJWRETV.js";
import "./chunk-WACMUXJB.js";
import "./chunk-5GIB77BJ.js";
import {
  AuthGuard,
  AuthenticationService,
  CoreModule,
  HeaderService,
  LoaderService,
  require_raygun_umd
} from "./chunk-43FCU5DY.js";
import {
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  NoopAnimationPlayer,
  SimpleLoaderService,
  UtilService,
  environment,
  sequence,
  style,
  ɵPRE_STYLE
} from "./chunk-L2L6ECIJ.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_INITIALIZER,
  AsyncPipe,
  BrowserModule,
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  Directive,
  DomRendererFactory2,
  HTTP_INTERCEPTORS,
  HttpClient,
  Inject,
  Injectable,
  Input,
  LOCALE_ID,
  NavigationEnd,
  NgClass,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgZone,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  Router,
  RouterLink,
  RouterOutlet,
  RuntimeError,
  Title,
  bootstrapApplication,
  debounce,
  distinctUntilChanged,
  filter,
  finalize,
  importProvidersFrom,
  interval,
  merge,
  partition,
  performanceMarkFeature,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  switchMap,
  tap,
  timer,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZQT4GMOS.js";
import {
  __objRest,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/core/services/env.service.ts
var import_raygun4js = __toESM(require_raygun_umd());
var EnvService = class _EnvService {
  constructor(http) {
    this.http = http;
  }
  init() {
    if (environment.production) {
      (0, import_raygun4js.default)("apiKey", environment.Setting.raygunAPIKey);
      (0, import_raygun4js.default)("setVersion", environment.Setting.raygunVersion);
      (0, import_raygun4js.default)("enableCrashReporting", true);
      (0, import_raygun4js.default)("enablePulse", true);
      (0, import_raygun4js.default)("logContentsOfXhrCalls", true);
    }
  }
  _setupUrl() {
    let url = "";
    const endpoint = "api/v2/user/CRMWebAppConfig";
    const origin = location.origin;
    if (origin.includes("-wf")) {
      url = `${origin.replace("-wf", "-api")}/${endpoint}`;
    } else if (origin.includes("crm-")) {
      url = `${origin.replace("crm-", "api-")}/${endpoint}`;
    } else {
      url = "/assets/config/env.json";
    }
    return url;
  }
  static {
    this.\u0275fac = function EnvService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnvService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnvService, factory: _EnvService.\u0275fac });
  }
};
var envInitializer = (env) => {
  return () => env.init();
};

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static {
    this.\u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoopAnimationDriver)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoopAnimationDriver,
      factory: _NoopAnimationDriver.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static {
    this.NOOP = new NoopAnimationDriver();
  }
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = /* @__PURE__ */ new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this.easing = null;
    this._previousKeyframe = /* @__PURE__ */ new Map();
    this._currentKeyframe = /* @__PURE__ */ new Map();
    this._keyframes = /* @__PURE__ */ new Map();
    this._styleSummary = /* @__PURE__ */ new Map();
    this._localTimelineStyles = /* @__PURE__ */ new Map();
    this._pendingStyles = /* @__PURE__ */ new Map();
    this._backFill = /* @__PURE__ */ new Map();
    this._currentEmptyStepKeyframe = null;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    this.transitionFactories = [];
    this.states = /* @__PURE__ */ new Map();
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._animations = /* @__PURE__ */ new Map();
    this._playersById = /* @__PURE__ */ new Map();
    this.players = [];
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = /* @__PURE__ */ new Map();
    this._queue = [];
    this._elementListeners = /* @__PURE__ */ new Map();
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
    this.players = [];
    this.newHostElements = /* @__PURE__ */ new Map();
    this.playersByElement = /* @__PURE__ */ new Map();
    this.playersByQueriedElement = /* @__PURE__ */ new Map();
    this.statesByElement = /* @__PURE__ */ new Map();
    this.disabledNodes = /* @__PURE__ */ new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = /* @__PURE__ */ new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    this.onRemovalComplete = (element, context) => {
    };
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new NoopAnimationPlayer();
    this._containsRealPlayer = false;
    this._queuedCallbacks = /* @__PURE__ */ new Map();
    this.destroyed = false;
    this.parentPlayer = null;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._triggerCache = {};
    this.onRemovalComplete = (element, context) => {
    };
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  static {
    this.initialStylesByElement = /* @__PURE__ */ new WeakMap();
  }
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    this._state = 0;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = /* @__PURE__ */ new Map();
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
    this.\u0275type = 0;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = /* @__PURE__ */ new Map();
    this._cdRecurDepth = 0;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.\u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.\u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.\u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoopAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NoopAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/ng-http-loader/fesm2020/ng-http-loader.mjs
var _c0 = (a0) => ({
  "background-color": a0
});
function NgHttpLoaderComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NgHttpLoaderComponent_div_0_sk_cube_grid_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-cube-grid", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_chasing_dots_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-chasing-dots", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_double_bounce_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-double-bounce", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_rotating_plane_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-rotating-plane", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_spinner_pulse_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-spinner-pulse", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_three_bounce_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-three-bounce", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_wandering_cubes_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-wandering-cubes", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_sk_wave_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sk-wave", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("backgroundColor", ctx_r0.backgroundColor);
  }
}
function NgHttpLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NgHttpLoaderComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 2)(2, NgHttpLoaderComponent_div_0_sk_cube_grid_2_Template, 1, 1, "sk-cube-grid", 3)(3, NgHttpLoaderComponent_div_0_sk_chasing_dots_3_Template, 1, 1, "sk-chasing-dots", 3)(4, NgHttpLoaderComponent_div_0_sk_double_bounce_4_Template, 1, 1, "sk-double-bounce", 3)(5, NgHttpLoaderComponent_div_0_sk_rotating_plane_5_Template, 1, 1, "sk-rotating-plane", 3)(6, NgHttpLoaderComponent_div_0_sk_spinner_pulse_6_Template, 1, 1, "sk-spinner-pulse", 3)(7, NgHttpLoaderComponent_div_0_sk_three_bounce_7_Template, 1, 1, "sk-three-bounce", 3)(8, NgHttpLoaderComponent_div_0_sk_wandering_cubes_8_Template, 1, 1, "sk-wandering-cubes", 3)(9, NgHttpLoaderComponent_div_0_sk_wave_9_Template, 1, 1, "sk-wave", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("opacity", ctx_r0.opacity);
    \u0275\u0275classProp("backdrop", ctx_r0.backdrop);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(14, _c0, ctx_r0.backdrop ? ctx_r0.backdropBackgroundColor : "transparent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngComponentOutlet", ctx_r0.entryComponent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skCubeGrid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skChasingDots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skDoubleBounce);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skRotatingPlane);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skSpinnerPulse);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skThreeBounce);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skWanderingCubes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.spinner === ctx_r0.spinkit.skWave);
  }
}
var AbstractLoaderDirective = class {
};
AbstractLoaderDirective.\u0275fac = function AbstractLoaderDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AbstractLoaderDirective)();
};
AbstractLoaderDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: AbstractLoaderDirective,
  inputs: {
    backgroundColor: "backgroundColor"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractLoaderDirective, [{
    type: Directive
  }], null, {
    backgroundColor: [{
      type: Input
    }]
  });
})();
var SkChasingDotsComponent = class extends AbstractLoaderDirective {
};
SkChasingDotsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkChasingDotsComponent_BaseFactory;
  return function SkChasingDotsComponent_Factory(__ngFactoryType__) {
    return (\u0275SkChasingDotsComponent_BaseFactory || (\u0275SkChasingDotsComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkChasingDotsComponent)))(__ngFactoryType__ || SkChasingDotsComponent);
  };
})();
SkChasingDotsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkChasingDotsComponent,
  selectors: [["sk-chasing-dots"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 6,
  consts: [[1, "sk-chasing-dots"], [1, "sk-child", "sk-dot1"], [1, "sk-child", "sk-dot2"]],
  template: function SkChasingDotsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("colored", !ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-chasing-dots[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;animation:_ngcontent-%COMP%_sk-chasingDotsRotate 2s infinite linear}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;animation:_ngcontent-%COMP%_sk-chasingDotsBounce 2s infinite ease-in-out}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-dot2[_ngcontent-%COMP%]{top:auto;bottom:0;animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-chasingDotsRotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-chasingDotsBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkChasingDotsComponent, [{
    type: Component,
    args: [{
      selector: "sk-chasing-dots",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-chasing-dots" [class.colored]="!backgroundColor">
    <div class="sk-child sk-dot1" [style.background-color]='backgroundColor'></div>
    <div class="sk-child sk-dot2" [style.background-color]='backgroundColor'></div>
</div>
`,
      styles: [".sk-chasing-dots{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;animation:sk-chasingDotsRotate 2s infinite linear}.sk-chasing-dots .sk-child{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;animation:sk-chasingDotsBounce 2s infinite ease-in-out}.sk-chasing-dots .sk-dot2{top:auto;bottom:0;animation-delay:-1s}@keyframes sk-chasingDotsRotate{to{transform:rotate(360deg)}}@keyframes sk-chasingDotsBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}\n"]
    }]
  }], null, null);
})();
var SkCubeGridComponent = class extends AbstractLoaderDirective {
};
SkCubeGridComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkCubeGridComponent_BaseFactory;
  return function SkCubeGridComponent_Factory(__ngFactoryType__) {
    return (\u0275SkCubeGridComponent_BaseFactory || (\u0275SkCubeGridComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkCubeGridComponent)))(__ngFactoryType__ || SkCubeGridComponent);
  };
})();
SkCubeGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkCubeGridComponent,
  selectors: [["sk-cube-grid"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 10,
  vars: 20,
  consts: [[1, "sk-cube-grid"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"]],
  template: function SkCubeGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("colored", !ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-cube-grid[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:33.33%;height:33.33%;float:left;animation:_ngcontent-%COMP%_sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%]{animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]{animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]{animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%]{animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%]{animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%]{animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%]{animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%]{animation-delay:.2s}@keyframes _ngcontent-%COMP%_sk-cubeGridScaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkCubeGridComponent, [{
    type: Component,
    args: [{
      selector: "sk-cube-grid",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-cube-grid" [class.colored]="!backgroundColor">
    <div class="sk-cube sk-cube1" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube2" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube3" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube4" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube5" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube6" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube7" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube8" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube9" [style.background-color]='backgroundColor'></div>
</div>
`,
      styles: [".sk-cube-grid{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid .sk-cube{width:33.33%;height:33.33%;float:left;animation:sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-cube-grid .sk-cube1{animation-delay:.2s}.sk-cube-grid .sk-cube2{animation-delay:.3s}.sk-cube-grid .sk-cube3{animation-delay:.4s}.sk-cube-grid .sk-cube4{animation-delay:.1s}.sk-cube-grid .sk-cube5{animation-delay:.2s}.sk-cube-grid .sk-cube6{animation-delay:.3s}.sk-cube-grid .sk-cube7{animation-delay:0s}.sk-cube-grid .sk-cube8{animation-delay:.1s}.sk-cube-grid .sk-cube9{animation-delay:.2s}@keyframes sk-cubeGridScaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}\n"]
    }]
  }], null, null);
})();
var SkDoubleBounceComponent = class extends AbstractLoaderDirective {
};
SkDoubleBounceComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkDoubleBounceComponent_BaseFactory;
  return function SkDoubleBounceComponent_Factory(__ngFactoryType__) {
    return (\u0275SkDoubleBounceComponent_BaseFactory || (\u0275SkDoubleBounceComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkDoubleBounceComponent)))(__ngFactoryType__ || SkDoubleBounceComponent);
  };
})();
SkDoubleBounceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkDoubleBounceComponent,
  selectors: [["sk-double-bounce"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 6,
  consts: [[1, "sk-double-bounce"], [1, "sk-child", "sk-double-bounce1"], [1, "sk-child", "sk-double-bounce2"]],
  template: function SkDoubleBounceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("colored", !ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-double-bounce[_ngcontent-%COMP%]{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-doubleBounce 2s infinite ease-in-out}.sk-double-bounce[_ngcontent-%COMP%]   .sk-double-bounce2[_ngcontent-%COMP%]{animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-doubleBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkDoubleBounceComponent, [{
    type: Component,
    args: [{
      selector: "sk-double-bounce",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-double-bounce" [class.colored]="!backgroundColor">
    <div class="sk-child sk-double-bounce1" [style.background-color]='backgroundColor'></div>
    <div class="sk-child sk-double-bounce2" [style.background-color]='backgroundColor'></div>
</div>
`,
      styles: [".sk-double-bounce{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce .sk-child{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;animation:sk-doubleBounce 2s infinite ease-in-out}.sk-double-bounce .sk-double-bounce2{animation-delay:-1s}@keyframes sk-doubleBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}\n"]
    }]
  }], null, null);
})();
var SkRotatingPlaneComponent = class extends AbstractLoaderDirective {
};
SkRotatingPlaneComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkRotatingPlaneComponent_BaseFactory;
  return function SkRotatingPlaneComponent_Factory(__ngFactoryType__) {
    return (\u0275SkRotatingPlaneComponent_BaseFactory || (\u0275SkRotatingPlaneComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkRotatingPlaneComponent)))(__ngFactoryType__ || SkRotatingPlaneComponent);
  };
})();
SkRotatingPlaneComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkRotatingPlaneComponent,
  selectors: [["sk-rotating-plane"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 2,
  consts: [[1, "sk-rotating-plane", "colored-parent"]],
  template: function SkRotatingPlaneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-rotating-plane[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;animation:_ngcontent-%COMP%_sk-rotatePlane 1.2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkRotatingPlaneComponent, [{
    type: Component,
    args: [{
      selector: "sk-rotating-plane",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-rotating-plane colored-parent" [style.background-color]='backgroundColor'></div>
`,
      styles: [".sk-rotating-plane{position:relative;top:50%;width:40px;height:40px;margin:auto;animation:sk-rotatePlane 1.2s infinite ease-in-out}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}\n"]
    }]
  }], null, null);
})();
var SkSpinnerPulseComponent = class extends AbstractLoaderDirective {
};
SkSpinnerPulseComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkSpinnerPulseComponent_BaseFactory;
  return function SkSpinnerPulseComponent_Factory(__ngFactoryType__) {
    return (\u0275SkSpinnerPulseComponent_BaseFactory || (\u0275SkSpinnerPulseComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkSpinnerPulseComponent)))(__ngFactoryType__ || SkSpinnerPulseComponent);
  };
})();
SkSpinnerPulseComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkSpinnerPulseComponent,
  selectors: [["sk-spinner-pulse"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 2,
  consts: [[1, "sk-spinner", "sk-spinner-pulse", "colored-parent"]],
  template: function SkSpinnerPulseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-spinner-pulse[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;animation:_ngcontent-%COMP%_sk-pulseScaleOut 1s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkSpinnerPulseComponent, [{
    type: Component,
    args: [{
      selector: "sk-spinner-pulse",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-spinner sk-spinner-pulse colored-parent" [style.background-color]='backgroundColor'></div>
`,
      styles: [".sk-spinner-pulse{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;animation:sk-pulseScaleOut 1s infinite ease-in-out}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}\n"]
    }]
  }], null, null);
})();
var SkThreeBounceComponent = class extends AbstractLoaderDirective {
};
SkThreeBounceComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkThreeBounceComponent_BaseFactory;
  return function SkThreeBounceComponent_Factory(__ngFactoryType__) {
    return (\u0275SkThreeBounceComponent_BaseFactory || (\u0275SkThreeBounceComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkThreeBounceComponent)))(__ngFactoryType__ || SkThreeBounceComponent);
  };
})();
SkThreeBounceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkThreeBounceComponent,
  selectors: [["sk-three-bounce"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 4,
  vars: 8,
  consts: [[1, "sk-three-bounce"], [1, "sk-child", "sk-bounce1"], [1, "sk-child", "sk-bounce2"], [1, "sk-child", "sk-bounce3"]],
  template: function SkThreeBounceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("colored", !ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-three-bounce[_ngcontent-%COMP%]{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:100%;display:inline-block;animation:_ngcontent-%COMP%_sk-three-bounce 1.4s ease-in-out 0s infinite both}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}@keyframes _ngcontent-%COMP%_sk-three-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkThreeBounceComponent, [{
    type: Component,
    args: [{
      selector: "sk-three-bounce",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-three-bounce" [class.colored]="!backgroundColor">
    <div class="sk-child sk-bounce1" [style.background-color]='backgroundColor'></div>
    <div class="sk-child sk-bounce2" [style.background-color]='backgroundColor'></div>
    <div class="sk-child sk-bounce3" [style.background-color]='backgroundColor'></div>
</div>
`,
      styles: [".sk-three-bounce{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce .sk-child{width:20px;height:20px;border-radius:100%;display:inline-block;animation:sk-three-bounce 1.4s ease-in-out 0s infinite both}.sk-three-bounce .sk-bounce1{animation-delay:-.32s}.sk-three-bounce .sk-bounce2{animation-delay:-.16s}@keyframes sk-three-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}\n"]
    }]
  }], null, null);
})();
var SkWanderingCubesComponent = class extends AbstractLoaderDirective {
};
SkWanderingCubesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkWanderingCubesComponent_BaseFactory;
  return function SkWanderingCubesComponent_Factory(__ngFactoryType__) {
    return (\u0275SkWanderingCubesComponent_BaseFactory || (\u0275SkWanderingCubesComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkWanderingCubesComponent)))(__ngFactoryType__ || SkWanderingCubesComponent);
  };
})();
SkWanderingCubesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkWanderingCubesComponent,
  selectors: [["sk-wandering-cubes"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 6,
  consts: [[1, "sk-wandering-cubes"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"]],
  template: function SkWanderingCubesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("colored", !ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-wandering-cubes[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:10px;height:10px;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-wanderingCube 1.8s ease-in-out -1.8s infinite both}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{animation-delay:-.9s}@keyframes _ngcontent-%COMP%_sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translate(30px) rotate(-90deg) scale(.5)}50%{transform:translate(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translate(30px) translateY(30px) rotate(-180deg)}75%{transform:translate(0) translateY(30px) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkWanderingCubesComponent, [{
    type: Component,
    args: [{
      selector: "sk-wandering-cubes",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-wandering-cubes" [class.colored]="!backgroundColor">
    <div class="sk-cube sk-cube1" [style.background-color]='backgroundColor'></div>
    <div class="sk-cube sk-cube2" [style.background-color]='backgroundColor'></div>
</div>
`,
      styles: [".sk-wandering-cubes{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes .sk-cube{width:10px;height:10px;position:absolute;top:0;left:0;animation:sk-wanderingCube 1.8s ease-in-out -1.8s infinite both}.sk-wandering-cubes .sk-cube2{animation-delay:-.9s}@keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translate(30px) rotate(-90deg) scale(.5)}50%{transform:translate(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translate(30px) translateY(30px) rotate(-180deg)}75%{transform:translate(0) translateY(30px) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}\n"]
    }]
  }], null, null);
})();
var SkWaveComponent = class extends AbstractLoaderDirective {
};
SkWaveComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SkWaveComponent_BaseFactory;
  return function SkWaveComponent_Factory(__ngFactoryType__) {
    return (\u0275SkWaveComponent_BaseFactory || (\u0275SkWaveComponent_BaseFactory = \u0275\u0275getInheritedFactory(SkWaveComponent)))(__ngFactoryType__ || SkWaveComponent);
  };
})();
SkWaveComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: SkWaveComponent,
  selectors: [["sk-wave"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 6,
  vars: 12,
  consts: [[1, "sk-wave"], [1, "sk-rect", "sk-rect1"], [1, "sk-rect", "sk-rect2"], [1, "sk-rect", "sk-rect3"], [1, "sk-rect", "sk-rect4"], [1, "sk-rect", "sk-rect5"]],
  template: function SkWaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("colored", !ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.backgroundColor);
    }
  },
  styles: [".sk-wave[_ngcontent-%COMP%]{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave[_ngcontent-%COMP%]   .sk-rect[_ngcontent-%COMP%]{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;animation:_ngcontent-%COMP%_sk-waveStretchDelay 1.2s infinite ease-in-out}.sk-wave[_ngcontent-%COMP%]   .sk-rect1[_ngcontent-%COMP%]{animation-delay:-1.2s}.sk-wave[_ngcontent-%COMP%]   .sk-rect2[_ngcontent-%COMP%]{animation-delay:-1.1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect3[_ngcontent-%COMP%]{animation-delay:-1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect4[_ngcontent-%COMP%]{animation-delay:-.9s}.sk-wave[_ngcontent-%COMP%]   .sk-rect5[_ngcontent-%COMP%]{animation-delay:-.8s}@keyframes _ngcontent-%COMP%_sk-waveStretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkWaveComponent, [{
    type: Component,
    args: [{
      selector: "sk-wave",
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-wave" [class.colored]="!backgroundColor">
    <div class="sk-rect sk-rect1" [style.background-color]='backgroundColor'></div>
    <div class="sk-rect sk-rect2" [style.background-color]='backgroundColor'></div>
    <div class="sk-rect sk-rect3" [style.background-color]='backgroundColor'></div>
    <div class="sk-rect sk-rect4" [style.background-color]='backgroundColor'></div>
    <div class="sk-rect sk-rect5" [style.background-color]='backgroundColor'></div>
</div>
`,
      styles: [".sk-wave{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave .sk-rect{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;animation:sk-waveStretchDelay 1.2s infinite ease-in-out}.sk-wave .sk-rect1{animation-delay:-1.2s}.sk-wave .sk-rect2{animation-delay:-1.1s}.sk-wave .sk-rect3{animation-delay:-1s}.sk-wave .sk-rect4{animation-delay:-.9s}.sk-wave .sk-rect5{animation-delay:-.8s}@keyframes sk-waveStretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}\n"]
    }]
  }], null, null);
})();
var Spinkit = {
  skChasingDots: "sk-chasing-dots",
  skCubeGrid: "sk-cube-grid",
  skDoubleBounce: "sk-double-bounce",
  skRotatingPlane: "sk-rotationg-plane",
  skSpinnerPulse: "sk-spinner-pulse",
  skThreeBounce: "sk-three-bounce",
  skWanderingCubes: "sk-wandering-cubes",
  skWave: "sk-wave"
};
var SPINKIT_COMPONENTS = [SkCubeGridComponent, SkChasingDotsComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent];
var PendingRequestsInterceptor = class {
  constructor() {
    this._pendingRequests = 0;
    this._pendingRequestsStatus$ = new ReplaySubject(1);
    this._filteredUrlPatterns = [];
    this._filteredMethods = [];
    this._filteredHeaders = [];
    this._forceByPass = false;
  }
  get pendingRequestsStatus$() {
    return this._pendingRequestsStatus$.asObservable();
  }
  get pendingRequests() {
    return this._pendingRequests;
  }
  get filteredUrlPatterns() {
    return this._filteredUrlPatterns;
  }
  set filteredMethods(httpMethods) {
    this._filteredMethods = httpMethods;
  }
  set filteredHeaders(value) {
    this._filteredHeaders = value;
  }
  set forceByPass(value) {
    this._forceByPass = value;
  }
  shouldBypassUrl(url) {
    return this._filteredUrlPatterns.some((e) => {
      return e.test(url);
    });
  }
  shouldBypassMethod(req) {
    return this._filteredMethods.some((e) => {
      return e.toUpperCase() === req.method.toUpperCase();
    });
  }
  shouldBypassHeader(req) {
    return this._filteredHeaders.some((e) => {
      return req.headers.has(e);
    });
  }
  shouldBypass(req) {
    return this._forceByPass || this.shouldBypassUrl(req.urlWithParams) || this.shouldBypassMethod(req) || this.shouldBypassHeader(req);
  }
  intercept(req, next) {
    const shouldBypass = this.shouldBypass(req);
    if (!shouldBypass) {
      this._pendingRequests++;
      if (1 === this._pendingRequests) {
        this._pendingRequestsStatus$.next(true);
      }
    }
    return next.handle(req).pipe(finalize(() => {
      if (!shouldBypass) {
        this._pendingRequests--;
        if (0 === this._pendingRequests) {
          this._pendingRequestsStatus$.next(false);
        }
      }
    }));
  }
};
PendingRequestsInterceptor.\u0275fac = function PendingRequestsInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PendingRequestsInterceptor)();
};
PendingRequestsInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: PendingRequestsInterceptor,
  factory: PendingRequestsInterceptor.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingRequestsInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PendingRequestsInterceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: PendingRequestsInterceptor,
  multi: true
}];
var SpinnerVisibilityService = class {
  constructor(pendingRequestsInterceptor) {
    this.pendingRequestsInterceptor = pendingRequestsInterceptor;
    this._visibility$ = new ReplaySubject(1);
  }
  get visibility$() {
    return this._visibility$.asObservable();
  }
  show() {
    this.pendingRequestsInterceptor.forceByPass = true;
    this._visibility$.next(true);
  }
  hide() {
    this._visibility$.next(false);
    this.pendingRequestsInterceptor.forceByPass = false;
  }
};
SpinnerVisibilityService.\u0275fac = function SpinnerVisibilityService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SpinnerVisibilityService)(\u0275\u0275inject(PendingRequestsInterceptor));
};
SpinnerVisibilityService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: SpinnerVisibilityService,
  factory: SpinnerVisibilityService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerVisibilityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: PendingRequestsInterceptor
    }];
  }, null);
})();
var NgHttpLoaderComponent = class {
  constructor(pendingRequestsInterceptor, spinnerVisibility) {
    this.pendingRequestsInterceptor = pendingRequestsInterceptor;
    this.spinnerVisibility = spinnerVisibility;
    this.spinkit = Spinkit;
    this.visibleUntil = Date.now();
    this.backdrop = true;
    this.debounceDelay = 0;
    this.entryComponent = null;
    this.extraDuration = 0;
    this.filteredHeaders = [];
    this.filteredMethods = [];
    this.filteredUrlPatterns = [];
    this.minDuration = 0;
    this.opacity = ".7";
    this.backdropBackgroundColor = "#f1f1f1";
    this.spinner = Spinkit.skWave;
  }
  ngOnInit() {
    this.initIsvisibleObservable();
    this.nullifySpinnerIfEntryComponentIsDefined();
    this.initFilters();
  }
  initIsvisibleObservable() {
    const [showSpinner$, hideSpinner$] = partition(this.pendingRequestsInterceptor.pendingRequestsStatus$, (h) => h);
    this.isVisible$ = merge(this.pendingRequestsInterceptor.pendingRequestsStatus$.pipe(switchMap(() => showSpinner$.pipe(debounce(() => timer(this.debounceDelay))))), showSpinner$.pipe(switchMap(() => hideSpinner$.pipe(debounce(() => this.getVisibilityTimer$())))), this.spinnerVisibility.visibility$).pipe(distinctUntilChanged(), tap((h) => this.updateExpirationDelay(h)));
  }
  nullifySpinnerIfEntryComponentIsDefined() {
    if (this.entryComponent) {
      this.spinner = null;
    }
  }
  initFilters() {
    this.initFilteredUrlPatterns();
    this.initFilteredMethods();
    this.initFilteredHeaders();
  }
  initFilteredUrlPatterns() {
    if (!!this.filteredUrlPatterns.length) {
      this.filteredUrlPatterns.forEach((e) => this.pendingRequestsInterceptor.filteredUrlPatterns.push(new RegExp(e)));
    }
  }
  initFilteredMethods() {
    this.pendingRequestsInterceptor.filteredMethods = this.filteredMethods;
  }
  initFilteredHeaders() {
    this.pendingRequestsInterceptor.filteredHeaders = this.filteredHeaders;
  }
  updateExpirationDelay(showSpinner) {
    if (showSpinner) {
      this.visibleUntil = Date.now() + this.minDuration;
    }
  }
  getVisibilityTimer$() {
    return timer(Math.max(this.extraDuration, this.visibleUntil - Date.now()));
  }
};
NgHttpLoaderComponent.\u0275fac = function NgHttpLoaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgHttpLoaderComponent)(\u0275\u0275directiveInject(PendingRequestsInterceptor), \u0275\u0275directiveInject(SpinnerVisibilityService));
};
NgHttpLoaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgHttpLoaderComponent,
  selectors: [["ng-http-loader"]],
  inputs: {
    backdrop: "backdrop",
    backgroundColor: "backgroundColor",
    debounceDelay: "debounceDelay",
    entryComponent: "entryComponent",
    extraDuration: "extraDuration",
    filteredHeaders: "filteredHeaders",
    filteredMethods: "filteredMethods",
    filteredUrlPatterns: "filteredUrlPatterns",
    minDuration: "minDuration",
    opacity: "opacity",
    backdropBackgroundColor: "backdropBackgroundColor",
    spinner: "spinner"
  },
  decls: 2,
  vars: 3,
  consts: [["id", "spinner", 3, "backdrop", "opacity", "ngStyle", 4, "ngIf"], ["id", "spinner", 3, "ngStyle"], [4, "ngComponentOutlet"], [3, "backgroundColor", 4, "ngIf"], [3, "backgroundColor"]],
  template: function NgHttpLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NgHttpLoaderComponent_div_0_Template, 10, 16, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.isVisible$));
    }
  },
  dependencies: [NgComponentOutlet, NgIf, NgStyle, SkCubeGridComponent, SkChasingDotsComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent, AsyncPipe],
  styles: ["#spinner[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop[_ngcontent-%COMP%]{top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transform:none}  .colored-parent,   .colored>div{background-color:#333}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHttpLoaderComponent, [{
    type: Component,
    args: [{
      selector: "ng-http-loader",
      template: `<div id="spinner"
     *ngIf="isVisible$ | async"
     [class.backdrop]="backdrop"
     [style.opacity]="opacity"
     [ngStyle]="{'background-color': backdrop ? backdropBackgroundColor : 'transparent'}">

    <ng-container *ngComponentOutlet="entryComponent"></ng-container>

    <sk-cube-grid
        *ngIf="spinner === spinkit.skCubeGrid"
        [backgroundColor]="backgroundColor">
    </sk-cube-grid>

    <sk-chasing-dots
        *ngIf="spinner === spinkit.skChasingDots"
        [backgroundColor]="backgroundColor">
    </sk-chasing-dots>

    <sk-double-bounce
        *ngIf="spinner === spinkit.skDoubleBounce"
        [backgroundColor]="backgroundColor">
    </sk-double-bounce>

    <sk-rotating-plane
        *ngIf="spinner === spinkit.skRotatingPlane"
        [backgroundColor]="backgroundColor">
    </sk-rotating-plane>

    <sk-spinner-pulse
        *ngIf="spinner === spinkit.skSpinnerPulse"
        [backgroundColor]="backgroundColor">
    </sk-spinner-pulse>

    <sk-three-bounce
        *ngIf="spinner === spinkit.skThreeBounce"
        [backgroundColor]="backgroundColor">
    </sk-three-bounce>

    <sk-wandering-cubes
        *ngIf="spinner === spinkit.skWanderingCubes"
        [backgroundColor]="backgroundColor">
    </sk-wandering-cubes>

    <sk-wave
        *ngIf="spinner === spinkit.skWave"
        [backgroundColor]="backgroundColor">
    </sk-wave>

</div>

`,
      styles: ["#spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop{top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transform:none}::ng-deep .colored-parent,::ng-deep .colored>div{background-color:#333}\n"]
    }]
  }], function() {
    return [{
      type: PendingRequestsInterceptor
    }, {
      type: SpinnerVisibilityService
    }];
  }, {
    backdrop: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    debounceDelay: [{
      type: Input
    }],
    entryComponent: [{
      type: Input
    }],
    extraDuration: [{
      type: Input
    }],
    filteredHeaders: [{
      type: Input
    }],
    filteredMethods: [{
      type: Input
    }],
    filteredUrlPatterns: [{
      type: Input
    }],
    minDuration: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    backdropBackgroundColor: [{
      type: Input
    }],
    spinner: [{
      type: Input
    }]
  });
})();
var NgHttpLoaderModule = class _NgHttpLoaderModule {
  static forRoot() {
    return {
      ngModule: _NgHttpLoaderModule,
      providers: [PendingRequestsInterceptorProvider]
    };
  }
};
NgHttpLoaderModule.\u0275fac = function NgHttpLoaderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgHttpLoaderModule)();
};
NgHttpLoaderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgHttpLoaderModule
});
NgHttpLoaderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHttpLoaderModule, [{
    type: NgModule,
    args: [{
      declarations: [NgHttpLoaderComponent, ...SPINKIT_COMPONENTS],
      imports: [CommonModule],
      exports: [NgHttpLoaderComponent, ...SPINKIT_COMPONENTS]
    }]
  }], null, null);
})();

// src/app/layouts/header/header.component.ts
var _c02 = () => ["/admin", "wf-app-list"];
var HeaderComponent = class _HeaderComponent {
  constructor(headerService, authenticationService, router) {
    this.headerService = headerService;
    this.authenticationService = authenticationService;
    this.router = router;
    this.isUserLoggedIn = false;
    this.flag = "unread";
    this.isOpen = false;
    this.notificationList = [];
    this.modalScrollDistance = 2;
    this.modalScrollThrottle = 50;
    this.pageFrom = 0;
    this.showItemLoading = true;
    this.isMarkAsRead = false;
    this.isQuickMind = false;
    this.logoWhiteUrl = UtilService.getUrlForImage("/assets/styles/images/C2M-White-Logo.svg");
    this.isUserLoggedIn = true;
    this.authenticationService.currentUser.subscribe((user) => {
      if (user && user.FirstName) {
        this.isUserLoggedIn = true;
        this.userFullName = user.FirstName + " " + user.LastName;
      } else {
        this.isUserLoggedIn = false;
        this.userFullName = "";
      }
    });
  }
  ngOnInit() {
    let url = window.location.href.split("/");
    if (url[4] !== void 0 && (url[4] === "quickmind" || url[4] === "quickmindlist")) {
      this.isQuickMind = true;
    } else {
      this.isQuickMind = false;
    }
  }
  gotoQuickmind() {
    localStorage.setItem("quickMindAppName", sessionStorage.getItem("AppName"));
    window.open("/quickmind", "_blank");
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/auth/login"]);
  }
  goToUserProfile() {
    window.open("/users/user-profile?uName=" + encodeURIComponent("myprofile=user"), "_blank");
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 6, consts: [["id", "cms-header", 1, "cms-header-fixed"], [1, "logoWrap", 3, "routerLink"], ["title", "C2M", "aria-label", "C2M"], ["alt", "C2M Logo", 1, "C2M-White-Logo", 3, "src"], [1, "headRightBar", 3, "hidden"], ["href", "javascript:void(0)", 1, "widgetsBarLogin", 3, "title"], [1, "d-none", "d-sm-inline-block"], [1, "fas", "fa-user-circle"], [1, "logout"], ["title", "Logout", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "div", 1)(3, "a", 2);
        \u0275\u0275element(4, "img", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div")(7, "a", 5)(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_12_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(13, " LOGOUT ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.logoWhiteUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.isUserLoggedIn);
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("title", ctx.userFullName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userFullName);
      }
    }, dependencies: [RouterLink], styles: ['\n\n#cms-header[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #255992;\n  -webkit-print-color-adjust: exact;\n  position: fixed !important;\n  z-index: 10000 !important;\n  top: 0px !important;\n  width: 100%;\n  text-decoration: none !important;\n}\n#cms-header.sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  width: 100%;\n  animation: _ngcontent-%COMP%_top-to-bottom 0.3s ease-in;\n}\n#cms-header[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%] {\n  width: 44.878px;\n  height: 40px;\n  flex-shrink: 0;\n}\n#cms-header[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0 16px;\n  float: left;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n#cms-header[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 4px 3px 4px;\n  display: inline-block;\n}\n@media (max-width: 575.98px) {\n  #cms-header[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  font-size: 12px !important;\n  line-height: 18px;\n  padding: 12px 10px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 25px;\n  text-align: center;\n  font-size: 25px;\n  vertical-align: middle;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-user-circle[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-right: 10px;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-user-circle[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  opacity: 0.8;\n  text-decoration: none;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   a.notify[_ngcontent-%COMP%]::before {\n  top: 8px;\n  right: 8px;\n  content: "";\n  border-radius: 5px;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  background: #F9B233;\n}\n#cms-header[_ngcontent-%COMP%]   .headRightBar[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-left: 2px solid white;\n  cursor: pointer;\n  margin-top: 2px;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%] {\n  float: right;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .widgetsBarLogin[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 16px;\n  display: inline-block;\n}\n@media (max-width: 575.98px) {\n  #cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .widgetsBarLogin[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  outline: none !important;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown.open[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown.open[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown.open[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown.open[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 1px 1px 1px 0px rgb(204, 204, 204);\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 50px;\n  background-color: #ffffff;\n  min-width: 200px;\n  display: none;\n  z-index: 15;\n  padding: 0;\n  list-style: none;\n  outline: none;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-left: 5px solid #F9B233;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-left: 5px solid #4C9E00;\n  padding: 7px 40px 7px 20px;\n  color: #333;\n  display: block;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-left: 5px solid #F9B233;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #CC3300;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  right: 20px;\n  margin-top: -3px;\n  color: #fff;\n  text-align: center;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px 15px;\n  width: 20px;\n  height: 30px;\n  position: relative;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  -o-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]:before {\n  top: 5px;\n  left: -15px;\n  position: absolute;\n  content: "";\n  width: 1px;\n  height: 20px;\n  background-color: #fff;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  background: #ffffff;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.25s ease-in-out;\n  -moz-transition: 0.25s ease-in-out;\n  -o-transition: 0.25s ease-in-out;\n  transition: 0.25s ease-in-out;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 7px;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2), \n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 14px;\n}\n#cms-header[_ngcontent-%COMP%]   .userInfoBar[_ngcontent-%COMP%]   .userDropdown[_ngcontent-%COMP%]   .userDdToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  top: 21px;\n}\n.chatOn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chatOn[_ngcontent-%COMP%]   .chatWidget[_ngcontent-%COMP%] {\n  display: block;\n}\n.chatOn[_ngcontent-%COMP%]:before {\n  bottom: -7px;\n  left: 50%;\n  border: solid transparent;\n  content: "";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: 111;\n}\n.chatOn[_ngcontent-%COMP%]:after {\n  bottom: -9px;\n  left: 50%;\n  border: solid transparent;\n  content: "";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: 111;\n}\n.chatOn[_ngcontent-%COMP%]:after {\n  border-color: rgba(136, 183, 213, 0);\n  border-bottom-color: #fff;\n  border-width: 10px;\n  margin-left: -10px;\n}\n.chatOn[_ngcontent-%COMP%]:before {\n  border-color: rgba(194, 225, 245, 0);\n  border-bottom-color: #ccc;\n  border-width: 10px;\n  margin-left: -10px;\n}\n.rectangle[_ngcontent-%COMP%] {\n  height: 252px;\n  width: 382px;\n  border: 1px solid #979797;\n  background-color: #FFFFFF;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n}\n.chatWidget[_ngcontent-%COMP%] {\n  display: none;\n  width: 382px;\n  background: #fff;\n  min-width: 400px;\n  position: absolute;\n  z-index: 99;\n  right: -80%;\n  top: 55px;\n  border: 1px solid #979797;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n}\n.chatWidget[_ngcontent-%COMP%]   .headerChat[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ccc;\n  padding: 5px;\n  overflow: auto;\n}\n.chatWidget[_ngcontent-%COMP%]   .headerChat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 5px;\n  font-size: 12px !important;\n  font-weight: bold;\n  float: right;\n  margin-left: 10px;\n  color: #4C9E00;\n}\n.chatWidget[_ngcontent-%COMP%]   .headerChat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.chatWidget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0px 10px 10px;\n  padding: 0px;\n  overflow: auto;\n  max-height: 200px;\n  list-style: none;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 5px;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75) !important;\n  padding: 0px !important;\n  font-size: 14px !important;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: 6px;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  word-break: break-all !important;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-break: break-all !important;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%] {\n  border-width: 19px;\n  border-color: #fff #fff transparent transparent;\n  border-style: solid;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  z-index: 99;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: -15px;\n  top: -15px;\n  float: none;\n  margin: 0;\n  position: absolute;\n  background: none;\n  border: 0;\n}\n.chatWidget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .corner-button[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {\n  font-size: 14px;\n  right: 4px;\n  top: 9px;\n  color: #666;\n  display: block;\n  height: auto;\n  position: absolute;\n  width: auto;\n  content: "\\f00d";\n  font-family: "Font Awesome 5 Free" !important;\n  font-weight: 900;\n  margin-right: 7px;\n  line-height: 1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n@keyframes _ngcontent-%COMP%_top-to-bottom {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.C2M-White-Logo[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=header.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\layouts\\header\\header.component.ts", lineNumber: 13 });
})();

// src/app/layouts/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentApplicationVersion = environment.timeStamp;
    this.copyRight = (/* @__PURE__ */ new Date()).getFullYear();
    this.logoBlackUrl = UtilService.getUrlForImage("/assets/styles/images/C2M-Black-Logo.svg");
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "cms-footer"], [1, "logoWrap"], ["title", "C2M logo", "aria-label", "Nutrien"], ["alt", "", 1, "C2M-Black-Logo", 3, "src"], [2, "font-size", "9px"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.logoBlackUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Copyright ", ctx.copyRight, " Plasma Business Intelligence ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Version ", ctx.currentApplicationVersion, "");
      }
    }, styles: ["\n\n.cms-footer[_ngcontent-%COMP%] {\n  background-color: #F1F0F2;\n  border-top: 3px solid #E2DFDB;\n  position: relative;\n}\n.cms-footer[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n.cms-footer[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: 500;\n  display: block;\n  color: #57575C;\n  font-size: 12px;\n  letter-spacing: 0.85px;\n  line-height: 14px;\n}\n.C2M-Black-Logo[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\layouts\\footer\\footer.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/simple-loader/simple-loader.component.ts
var _c03 = (a0) => ({ "transform": a0 });
function SimpleLoaderComponent_div_5_Template(rf, ctx) {
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
var SimpleLoaderComponent = class _SimpleLoaderComponent {
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
    this.\u0275fac = function SimpleLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SimpleLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleLoaderComponent, selectors: [["app-simple-loader"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "loader_wrap"], [1, "onboarding-generating-figure__bg"], ["type", "image/svg+xml", "aria-label", "Loading..."], [1, "carousel-container"], [1, "carousel-track", 3, "ngStyle"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "text"], [1, "progress2", "progress-moved"], [1, "progress-bar2"], [1, "carousel-item"], [3, "src", "alt"]], template: function SimpleLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "object", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
        \u0275\u0275template(5, SimpleLoaderComponent_div_5_Template, 2, 4, "div", 5);
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
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c03, "translateX(-" + ctx.trackTranslate + "px)"));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.icons);
      }
    }, dependencies: [CommonModule, NgForOf, NgStyle], styles: ['\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-color: #f0f0f0;\n  opacity: 0;\n}\n.loader_wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  font-family: "Roboto", sans-serif;\n}\n.onboarding-generating-figure__bg[_ngcontent-%COMP%] {\n  position: relative;\n  width: 360px;\n  height: 230px;\n}\n.loader-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.carousel-container[_ngcontent-%COMP%] {\n  width: 215px;\n  overflow: hidden;\n  padding: 10px 0;\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.4s ease-in-out;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  min-width: 60px;\n  height: 100px;\n  margin: 0 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  transition: transform 0.3s ease, box-shadow 0.3s;\n}\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  transition: transform 0.3s ease;\n}\n.carousel-item.active[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n  transform: scale(1.15);\n}\n.progress2[_ngcontent-%COMP%] {\n  bottom: 15px;\n  padding: 1px;\n  width: 400px;\n  border-radius: 30px;\n  background: #C8D8F1;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);\n}\n.progress-moved[_ngcontent-%COMP%]   .progress-bar2[_ngcontent-%COMP%] {\n  width: 97%;\n  background-color: #798FDD;\n  animation: _ngcontent-%COMP%_progressAnimation 6s;\n}\n.progress-bar2[_ngcontent-%COMP%] {\n  height: 5px;\n  border-radius: 30px;\n  background-image:\n    linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0.3),\n      rgba(255, 255, 255, 0.05));\n  transition: 0.4s linear;\n  transition-property: width, background-color;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  color: #005996;\n}\n@keyframes _ngcontent-%COMP%_progressAnimation {\n  0% {\n    width: 0%;\n    background-color: #798FDD;\n  }\n  100% {\n    width: 85%;\n    background-color: #798FDD;\n  }\n}\n/*# sourceMappingURL=simple-loader.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleLoaderComponent, { className: "SimpleLoaderComponent", filePath: "src\\app\\shared\\components\\simple-loader\\simple-loader.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/simple-loader-b/simple-loader-b.component.ts
var SimpleLoaderBComponent = class _SimpleLoaderBComponent {
  constructor() {
  }
  static {
    this.\u0275fac = function SimpleLoaderBComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SimpleLoaderBComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleLoaderBComponent, selectors: [["app-simple-loader-b"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function SimpleLoaderBComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div")(2, "div")(3, "div")(4, "div");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [CommonModule], styles: ['\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lds-ring[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999999;\n  width: 50px;\n  height: 50px;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0px;\n}\n.lds-ring[_ngcontent-%COMP%]:before {\n  content: "";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 45px;\n  height: 45px;\n  margin: 6px;\n  border: 6px solid #EB583B;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #EB583B transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes _ngcontent-%COMP%_lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=simple-loader-b.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleLoaderBComponent, { className: "SimpleLoaderBComponent", filePath: "src\\app\\shared\\components\\simple-loader-b\\simple-loader-b.component.ts", lineNumber: 89 });
})();

// src/app/app.component.ts
var _c04 = (a0) => ({ "main-box": a0 });
function AppComponent_app_header_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
  }
}
function AppComponent_app_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer");
  }
}
function AppComponent_app_simple_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-simple-loader");
  }
}
function AppComponent_app_simple_loader_b_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-simple-loader-b");
  }
}
function AppComponent_ng_http_loader_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ng-http-loader", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("entryComponent", ctx_r0.globalLoaderComponent);
  }
}
function AppComponent_ng_http_loader_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ng-http-loader", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("entryComponent", ctx_r0.localLoaderComponent);
  }
}
var AppComponent = class _AppComponent {
  constructor(titleService, renderer, loaderService, simpleLoaderService, router, cssLoaderService) {
    this.titleService = titleService;
    this.renderer = renderer;
    this.loaderService = loaderService;
    this.simpleLoaderService = simpleLoaderService;
    this.router = router;
    this.cssLoaderService = cssLoaderService;
    this.title = "listingcms";
    this.localLoaderComponent = null;
    this.routerSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.url.split("?")[0].split("#")[0];
      const dataModelerBasePath = "admin/bm/data-modeler1";
      const isDataModelerRoute = url === `/${dataModelerBasePath}` || url.startsWith(`/${dataModelerBasePath}/`) || url === dataModelerBasePath || url.startsWith(`${dataModelerBasePath}/`);
      if (isDataModelerRoute) {
        this.renderer.addClass(document.body, "no-scroll");
      } else {
        this.renderer.removeClass(document.body, "no-scroll");
      }
    });
  }
  ngOnInit() {
    if (sessionStorage.getItem("DisplayName")) {
      const processtitle = sessionStorage.getItem("DisplayName");
      this.setDocTitle(processtitle);
    }
    this.isApiLoading$ = this.simpleLoaderService.isLoading$;
    this.loaderType$ = this.simpleLoaderService.loaderType$;
    this.globalLoaderSubscription = this.loaderService.globalLoader$.subscribe((component) => {
      this.globalLoaderComponent = component;
    });
    this.localLoaderSubscription = this.loaderService.localLoader$.subscribe((component) => {
      this.localLoaderComponent = component;
    });
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.globalLoaderSubscription) {
      this.globalLoaderSubscription.unsubscribe();
    }
    if (this.localLoaderSubscription) {
      this.localLoaderSubscription.unsubscribe();
    }
    this.renderer.removeClass(document.body, "no-scroll");
  }
  setDocTitle(title) {
    this.titleService.setTitle(title);
  }
  get showHeaderFooter() {
    const pathsToHide = ["/admin/bm", "/admin/wf"];
    const currentUrl = window.location.pathname;
    return !pathsToHide.some((path) => currentUrl.includes(path));
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(SimpleLoaderService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CssLoaderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 17, consts: [[1, "d-flex", "flex-column", "workflow-application", 2, "min-height", "100vh"], [4, "ngIf"], [1, "flex-grow-1", 3, "ngClass"], [3, "entryComponent", 4, "ngIf"], [3, "entryComponent"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AppComponent_app_header_1_Template, 1, 0, "app-header", 1);
        \u0275\u0275elementStart(2, "section", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, AppComponent_app_footer_4_Template, 1, 0, "app-footer", 1)(5, AppComponent_app_simple_loader_5_Template, 1, 0, "app-simple-loader", 1);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, AppComponent_app_simple_loader_b_8_Template, 1, 0, "app-simple-loader-b", 1);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275pipe(10, "async");
        \u0275\u0275template(11, AppComponent_ng_http_loader_11_Template, 1, 1, "ng-http-loader", 3)(12, AppComponent_ng_http_loader_12_Template, 1, 1, "ng-http-loader", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHeaderFooter);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c04, ctx.showHeaderFooter));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showHeaderFooter);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 7, ctx.isApiLoading$) && \u0275\u0275pipeBind1(7, 9, ctx.loaderType$) === "A");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 11, ctx.isApiLoading$) && \u0275\u0275pipeBind1(10, 13, ctx.loaderType$) === "B");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.localLoaderComponent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.localLoaderComponent);
      }
    }, dependencies: [HeaderComponent, RouterOutlet, FooterComponent, NgHttpLoaderModule, NgHttpLoaderComponent, CommonModule, NgClass, NgIf, AsyncPipe, SimpleLoaderComponent, SimpleLoaderBComponent], styles: ['/* src/app/app.component.scss */\n.bpmn-testing,\n.bpmn-api,\n.bpmn-data-schema .bpmn-human-in-loop {\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.bpmn-api {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-api.svg");\n}\n.bpmn-data-schema {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-data-schema.svg");\n}\n.bpmn-human-in-loop {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-human-in-loop.svg");\n}\n.bpmn-llm {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-llm.svg");\n}\n.bpmn-prompt-variable {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-prompt-variable.svg");\n}\n.bpmn-scheduler {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-scheduler.svg");\n}\n.bpmn-sql-query {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-sql-query.svg");\n}\n.bpmn-vector {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-victor.svg");\n}\n.bpmn-agentic-flow {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url("./media/bpmn-agentic-flow.svg");\n}\n/*# sourceMappingURL=app.component.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 25 });
})();

// src/app/modules/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "not-found"], [1, "p-sm-5", "p-2"], [1, "text-stroke", "text-transparent"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h4");
        \u0275\u0275text(5, "Sorry we can't seem to find the page you're looking for.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "There may be a misspelling in the URL entered,");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, " or the page you are looking for may no longer exist.");
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.not-found[_ngcontent-%COMP%] {\n  height: calc(100vh - 170px);\n  background-image: url(/assets/styles/images/bg1.jpg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=not-found.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\modules\\not-found\\not-found.component.ts", lineNumber: 9 });
})();

// src/app/not-authorize/not-authorize.component.ts
var NotAuthorizeComponent = class _NotAuthorizeComponent {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
  }
  ngOnInit() {
  }
  logOutUser() {
    this.authenticationService.logout();
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function NotAuthorizeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotAuthorizeComponent)(\u0275\u0275directiveInject(AuthenticationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotAuthorizeComponent, selectors: [["app-not-authorize"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "img-container"], [1, "logout"], ["href", "javascript:void(0)", 3, "click"]], template: function NotAuthorizeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0)(1, "span")(2, "b")(3, "h6");
        \u0275\u0275text(4, "User doesn't exist or your account is locked, please contact to system admin. OR ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 1)(6, "a", 2);
        \u0275\u0275listener("click", function NotAuthorizeComponent_Template_a_click_6_listener() {
          return ctx.logOutUser();
        });
        \u0275\u0275text(7, " Click Here ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h6");
        \u0275\u0275text(9, " To login with different user");
        \u0275\u0275elementEnd()()()();
      }
    }, styles: ["\n\n.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin: 220px 10px 100px 10px;\n}\n/*# sourceMappingURL=not-authorize.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotAuthorizeComponent, { className: "NotAuthorizeComponent", filePath: "src\\app\\not-authorize\\not-authorize.component.ts", lineNumber: 11 });
})();

// src/app/version/version.component.ts
var VersionComponent = class _VersionComponent {
  constructor() {
    this.currentApplicationVersion = environment.timeStamp;
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function VersionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VersionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VersionComponent, selectors: [["app-version"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, template: function VersionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("Version ", ctx.currentApplicationVersion, "");
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VersionComponent, { className: "VersionComponent", filePath: "src\\app\\version\\version.component.ts", lineNumber: 10 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: "full"
  },
  {
    path: "login",
    redirectTo: "/auth/login",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-ZU5PYMGR.js").then((m) => m.AuthModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./chunk-HHYWZZ55.js").then((m) => m.AdminModule)
  },
  {
    path: "bmwfcompare",
    loadChildren: () => import("./chunk-QR6IZOOQ.js").then((m) => m.BmwfcompareModule)
  },
  {
    path: "terms-and-conditions",
    component: TermsAndConditionsComponent
  },
  {
    path: "users",
    canActivate: [AuthGuard],
    loadChildren: () => import("./chunk-IY4QFV4J.js").then((m) => m.UsersModule)
  },
  {
    path: "unauthorized",
    component: NotAuthorizeComponent
  },
  {
    path: "version",
    component: VersionComponent
  },
  { path: "gateway", loadChildren: () => import("./chunk-2TSJKFFT.js").then((m) => m.GatewayModule) },
  { path: "**", component: NotFoundComponent }
];

// src/bootstrap.ts
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, SharedModule, CoreModule, NgHttpLoaderModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi()),
    Title,
    {
      provide: LOCALE_ID,
      useValue: "en-AU"
    },
    EnvService,
    {
      provide: APP_INITIALIZER,
      useFactory: envInitializer,
      multi: true,
      deps: [EnvService]
    },
    DatePipe,
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=chunk-D6ZKQAOC.js.map
