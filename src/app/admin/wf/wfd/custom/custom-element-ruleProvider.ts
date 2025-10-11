import {
  reduce
} from 'min-dash';

import inherits from 'inherits-browser';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';

var HIGH_PRIORITY = 1500;


function isCustom(element) {
  return element && /^custom:/.test(element.type);
}

/**
 * Specific rules for custom elements
 */
export default function CustomRules(eventBus, sharedData) {
  RuleProvider.call(this, eventBus);
  this.sharedData = sharedData;
}

inherits(CustomRules, RuleProvider);

CustomRules.$inject = [ 'eventBus', 'sharedData' ];


CustomRules.prototype.init = function() {

  /**
   * Can shape be created on target container?
   */
  function canCreate(shape, target) {
    
    // only judge about custom elements
    if (!isCustom(shape)) {
      return;
    }

    // allow creation on processes
    return is(target, 'bpmn:Process') || is(target, 'bpmn:Participant') || is(target, 'bpmn:Collaboration');
  }

  /**
   * Can source and target be connected?
   */
  function canConnect(source, target) {
    const connectionType = this?.sharedData?.connectionType;
    // only judge about custom elements
    if (!isCustom(source) && !isCustom(target)) {
      return;
    }
    
    if(is(source, 'bpmn:Task') &&  isCustom(target) && connectionType === 'dotted'){
      return { type: 'custom:DottedFlow' }
    }

    // allow connection between custom shape and task
    if (isCustom(source)) {
      if (is(target, 'bpmn:Task')) {
        return { type: 'bpmn:SequenceFlow' };
      } else {
        return false;
      }
    } else if (isCustom(target)) {
      if (is(source, 'bpmn:Task')) {
        return { type: 'bpmn:SequenceFlow' };
      } else {
        return false;
      }
    }
  }

  this.addRule('elements.move', HIGH_PRIORITY, function(context) {
    var target = context.target,
        shapes = context.shapes;

    var type;

    // do not allow mixed movements of custom / BPMN shapes
    // if any shape cannot be moved, the group cannot be moved, too
    var allowed = reduce(shapes, function(result, s) {
      if (type === undefined) {
        type = isCustom(s);
      }

      if (type !== isCustom(s) || result === false) {
        return false;
      }

      return canCreate(s, target);
    }, undefined);

    // reject, if we have at least one
    // custom element that cannot be moved
    return allowed;
  });

  this.addRule('shape.create', HIGH_PRIORITY, function(context) {
    var target = context.target,
        shape = context.shape;

    return canCreate(shape, target);
  });

  this.addRule('shape.resize', HIGH_PRIORITY, function(context) {
    var shape = context.shape;

    if (isCustom(shape)) {

      // cannot resize custom elements
      return false;
    }
  });

  this.addRule('connection.create', HIGH_PRIORITY, (context)=> {
    var source = context.source,
        target = context.target;

    return canConnect.bind(this)(source, target);
  });

  this.addRule('connection.reconnectStart', HIGH_PRIORITY, (context)=> {
    var connection = context.connection,
        source = context.hover || context.source,
        target = connection.target;

    return canConnect.bind(this)(source, target);
  });

  this.addRule('connection.reconnectEnd', HIGH_PRIORITY, (context)=> {
    var connection = context.connection,
        source = connection.source,
        target = context.hover || context.target;

    return canConnect.bind(this)(source, target);
  });

};
