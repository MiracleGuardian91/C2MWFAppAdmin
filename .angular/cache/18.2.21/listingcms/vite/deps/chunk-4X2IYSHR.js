import {
  CommandInterceptor
} from "./chunk-JI54U5I4.js";
import {
  e
} from "./chunk-4FMKAPTB.js";

// node_modules/diagram-js/lib/features/rules/RuleProvider.js
function RuleProvider(eventBus) {
  CommandInterceptor.call(this, eventBus);
  this.init();
}
RuleProvider.$inject = ["eventBus"];
e(RuleProvider, CommandInterceptor);
RuleProvider.prototype.addRule = function(actions, priority, fn) {
  var self = this;
  if (typeof actions === "string") {
    actions = [actions];
  }
  actions.forEach(function(action) {
    self.canExecute(action, priority, function(context, action2, event) {
      return fn(context);
    }, true);
  });
};
RuleProvider.prototype.init = function() {
};

export {
  RuleProvider
};
//# sourceMappingURL=chunk-4X2IYSHR.js.map
