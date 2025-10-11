import {
  forEach,
  isArray,
  isFunction,
  isNumber,
  isObject
} from "./chunk-26FIRWZU.js";

// node_modules/diagram-js/lib/command/CommandInterceptor.js
var DEFAULT_PRIORITY = 1e3;
function CommandInterceptor(eventBus) {
  this._eventBus = eventBus;
}
CommandInterceptor.$inject = ["eventBus"];
function unwrapEvent(fn, that) {
  return function(event) {
    return fn.call(that || null, event.context, event.command, event);
  };
}
CommandInterceptor.prototype.on = function(events, hook, priority, handlerFn, unwrap, that) {
  if (isFunction(hook) || isNumber(hook)) {
    that = unwrap;
    unwrap = handlerFn;
    handlerFn = priority;
    priority = hook;
    hook = null;
  }
  if (isFunction(priority)) {
    that = unwrap;
    unwrap = handlerFn;
    handlerFn = priority;
    priority = DEFAULT_PRIORITY;
  }
  if (isObject(unwrap)) {
    that = unwrap;
    unwrap = false;
  }
  if (!isFunction(handlerFn)) {
    throw new Error("handlerFn must be a function");
  }
  if (!isArray(events)) {
    events = [events];
  }
  var eventBus = this._eventBus;
  forEach(events, function(event) {
    var fullEvent = ["commandStack", event, hook].filter(function(e) {
      return e;
    }).join(".");
    eventBus.on(fullEvent, priority, unwrap ? unwrapEvent(handlerFn, that) : handlerFn, that);
  });
};
CommandInterceptor.prototype.canExecute = createHook("canExecute");
CommandInterceptor.prototype.preExecute = createHook("preExecute");
CommandInterceptor.prototype.preExecuted = createHook("preExecuted");
CommandInterceptor.prototype.execute = createHook("execute");
CommandInterceptor.prototype.executed = createHook("executed");
CommandInterceptor.prototype.postExecute = createHook("postExecute");
CommandInterceptor.prototype.postExecuted = createHook("postExecuted");
CommandInterceptor.prototype.revert = createHook("revert");
CommandInterceptor.prototype.reverted = createHook("reverted");
function createHook(hook) {
  const hookFn = function(events, priority, handlerFn, unwrap, that) {
    if (isFunction(events) || isNumber(events)) {
      that = unwrap;
      unwrap = handlerFn;
      handlerFn = priority;
      priority = events;
      events = null;
    }
    this.on(events, hook, priority, handlerFn, unwrap, that);
  };
  return hookFn;
}

export {
  CommandInterceptor
};
//# sourceMappingURL=chunk-JI54U5I4.js.map
