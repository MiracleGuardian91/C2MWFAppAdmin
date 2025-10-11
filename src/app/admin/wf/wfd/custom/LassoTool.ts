
import { getEnclosedElements } from 'diagram-js/lib/util/Elements';
import { values } from 'min-dash';

import {
  hasSecondaryModifier
} from 'diagram-js/lib/util/Mouse';

import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate,
  remove as svgRemove
} from 'tiny-svg';

/**
 * @typedef {import('../../core/Canvas').default} Canvas
 * @typedef {import('../dragging/Dragging').default} Dragging
 * @typedef {import('../../core/ElementRegistry').default} ElementRegistry
 * @typedef {import('../../core/EventBus').default} EventBus
 * @typedef {import('../mouse/Mouse').default} Mouse
 * @typedef {import('../selection/Selection').default} Selection
 * @typedef {import('../tool-manager/ToolManager').default} ToolManager
 *
 * @typedef {import('../../util/Types').Rect} Rect
 */

let LASSO_TOOL_CURSOR = 'crosshair';

/**
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {Dragging} dragging
 * @param {ElementRegistry} elementRegistry
 * @param {Selection} selection
 * @param {ToolManager} toolManager
 * @param {Mouse} mouse
 */
export default function LassoTool(
    eventBus, canvas, dragging,
    elementRegistry, selection, toolManager,
    mouse) {

  this._selection = selection;
  this._dragging = dragging;
  this._mouse = mouse;
  this._isCtrlPressed  = false;
  let self = this;

  // lasso visuals implementation

  /**
  * A helper that realizes the selection box visual
  */

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && !this._isCtrlPressed) {
        this._isCtrlPressed = true;
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === "Control") {
      if (this._isCtrlPressed) {
        this._isCtrlPressed = false;
      }
    }
  });
  let visuals = {

    create: function(context) {
      let container = canvas.getActiveLayer(),
          frame;

      frame = context.frame = svgCreate('rect');
      svgAttr(frame, {
        class: 'djs-lasso-overlay',
        width:  1,
        height: 1,
        x: 0,
        y: 0
      });

      svgAppend(container, frame);
    },

    update: function(context) {
      let frame = context.frame,
          bbox = context.bbox;

      svgAttr(frame, {
        x: bbox.x,
        y: bbox.y,
        width: bbox.width,
        height: bbox.height
      });
    },

    remove: function(context) {

      if (context.frame) {
        svgRemove(context.frame);
      }
    }
  };

  toolManager.registerTool('lasso', {
    tool: 'lasso.selection',
    dragging: 'lasso'
  });

  eventBus.on('lasso.selection.end', function(event) {
    let target = event.originalEvent.target;

    // only reactive on diagram click
    // on some occasions, event.hover is not set and we have to check if the target is an svg
    if (!event.hover && !(target instanceof SVGElement)) {
      return;
    }

    eventBus.once('lasso.selection.ended', function() {
      self.activateLasso(event.originalEvent, true);
    });
  });

  // lasso interaction implementation

  eventBus.on('lasso.end', 0, function(event) {
    let context = event.context;

    let bbox = toBBox(event);

    let elements = elementRegistry.filter(function(element) {
      return element;
    });

    let add = hasSecondaryModifier(event);

    self.select(elements, bbox, add ? context.selection : []);
  });

  eventBus.on('lasso.start', function(event) {

    let context = event.context;

    context.bbox = toBBox(event);
    visuals.create(context);

    context.selection = selection.get();
  });

  eventBus.on('lasso.move', function(event) {

    let context = event.context;

    context.bbox = toBBox(event);
    visuals.update(context);
  });

  eventBus.on('lasso.cleanup', function(event) {

    let context = event.context;

    visuals.remove(context);
  });


  // event integration

  eventBus.on('element.mousedown', 1500, function(event) {

    if (!hasSecondaryModifier(event)) {
      return;
    }

    self.activateLasso(event.originalEvent);

    // we've handled the event
    return true;
  });
}

LassoTool.$inject = [
  'eventBus',
  'canvas',
  'dragging',
  'elementRegistry',
  'selection',
  'toolManager',
  'mouse'
];

/**
 * Activate lasso.
 *
 * @param {MouseEvent} event
 * @param {boolean} [autoActivate=false]
 */
LassoTool.prototype.activateLasso = function(event, autoActivate) {

  this._dragging.init(event, 'lasso', {
    autoActivate: autoActivate,
    cursor: LASSO_TOOL_CURSOR,
    data: {
      context: {}
    }
  });
};

/**
 * Activate selection.
 *
 * @param {MouseEvent} event
 * @param {boolean} [autoActivate=false]
 */
LassoTool.prototype.activateSelection = function(event, autoActivate) {

  this._dragging.init(event, 'lasso.selection', {
    trapClick: false,
    autoActivate: autoActivate,
    cursor: LASSO_TOOL_CURSOR,
    data: {
      context: {}
    },
    keepSelection: true
  });
};

/**
 * Select elements within the given bounds.
 *
 * @param {Element[]} elements
 * @param {Rect} bbox
 * @param {Element[]} [previousSelection]
 */
LassoTool.prototype.select = function(elements, bbox, previousSelection = []) {
  let selectedElements = getEnclosedElements(elements, bbox);
  let elementkeys = Object.keys(selectedElements);
  let parentElement = selectedElements[elementkeys[0]];
  let parentId = parentElement?.id;

  this._selection.select([
    ...previousSelection,
    ...values({
        ...selectedElements,
        ...(this._isCtrlPressed && parentId ? {
            parentId: parentElement.parent
        } : {})
    })
  ]);
};

/**
 * Toggle the lasso tool.
 */
LassoTool.prototype.toggle = function() {
  if (this.isActive()) {
    return this._dragging.cancel();
  }

  let mouseEvent = this._mouse.getLastMoveEvent();

  this.activateSelection(mouseEvent, !!mouseEvent);
};

/**
 * Check if the lasso tool is active.
 *
 * @returns {boolean}
 */

LassoTool.prototype.isActive = function() {
  return this._dragging.context()?.prefix?.startsWith('lasso');
};

function toBBox(event) {

  let start = {

    x: event.x - event.dx,
    y: event.y - event.dy
  };

  let end = {
    x: event.x,
    y: event.y
  };

  let bbox;

  if ((start.x <= end.x && start.y < end.y) ||
      (start.x < end.x && start.y <= end.y)) {

    bbox = {
      x: start.x,
      y: start.y,
      width:  end.x - start.x,
      height: end.y - start.y
    };
  } else if ((start.x >= end.x && start.y < end.y) ||
             (start.x > end.x && start.y <= end.y)) {

    bbox = {
      x: end.x,
      y: start.y,
      width:  start.x - end.x,
      height: end.y - start.y
    };
  } else if ((start.x <= end.x && start.y > end.y) ||
             (start.x < end.x && start.y >= end.y)) {

    bbox = {
      x: start.x,
      y: end.y,
      width:  end.x - start.x,
      height: start.y - end.y
    };
  } else if ((start.x >= end.x && start.y > end.y) ||
             (start.x > end.x && start.y >= end.y)) {

    bbox = {
      x: end.x,
      y: end.y,
      width:  start.x - end.x,
      height: start.y - end.y
    };
  } else {

    bbox = {
      x: end.x,
      y: end.y,
      width:  0,
      height: 0
    };
  }
  return bbox;
}