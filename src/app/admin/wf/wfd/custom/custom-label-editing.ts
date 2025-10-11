import {
  getLabel
} from 'bpmn-js/lib/features/label-editing/LabelUtil';

import {
  getBusinessObject,
  is
} from 'bpmn-js/lib/util/ModelUtil';

import {
  createCategoryValue
} from 'bpmn-js/lib/features/modeling/behavior/util/CategoryUtil';

import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
import { isExpanded } from 'bpmn-js/lib/util/DiUtil';

import {
  getExternalLabelMid,
  isLabelExternal,
  hasExternalLabel,
  isLabel
} from 'bpmn-js/lib/util/LabelUtil';
import { ElementType } from '../models/bpmn';

const t = ElementType;
let outsideViewBoxActive = false;
export default function CustomLabelEditingProvider(
    eventBus, bpmnFactory, canvas, directEditing,
    modeling, resizeHandles, textRenderer, sharedData) {

  this._bpmnFactory = bpmnFactory;
  this._canvas = canvas;
  this._modeling = modeling;
  this._textRenderer = textRenderer;
  this._sharedData = sharedData;
    
  directEditing.registerProvider(this);

  // listen to dblclick on non-root elements
  eventBus.on('element.dblclick', function(event) {
    activateDirectEdit(event.element);
  });

  eventBus.on('drag.move', (event)=>{
    const elementDragged = event.elements;
    if(elementDragged && elementDragged.length > 0){
      outsideViewBoxActive = !!elementDragged[0]?.type;
    }
  })

  eventBus.on('drag.end', (event)=>{
    outsideViewBoxActive = false;
    this._sharedData.removeConnectionType();
  })

  eventBus.on('canvas.viewbox.changed', 9001, (event) => {
    if (outsideViewBoxActive) {
        setTimeout(() => {
            const { width, height } = this._canvas.getSize();
            const currentViewbox = this._canvas.viewbox();
            if (currentViewbox.x < 0) {
                currentViewbox.x = 0;
            }

            if ((currentViewbox.width - currentViewbox.x) > width) {
                currentViewbox.x = 0;
            }

            this._canvas.viewbox(currentViewbox)
      
 });
 }

})

  // complete on followup canvas operation
  eventBus.on([
    'autoPlace.start',
    'canvas.viewbox.changing',
    'drag.init',
    'element.mousedown',
    'popupMenu.open'
  ], function(event) {

  });

  // cancel on command stack changes
  eventBus.on([ 'commandStack.changed' ], function(e) {
    if (directEditing.isActive()) {
      directEditing.cancel();
    }
  });


  eventBus.on('directEditing.activate', function(event) {
    resizeHandles.removeResizers();
  });

  eventBus.on('create.end', 500, ({shape}) => {
    if (shape.type !== t.Annotation) {
      return;
    }

    activateDirectEdit(shape);
  });


  function activateDirectEdit(element) {
    if (element.type === ElementType.Annotation) {
      directEditing.activate(element);
    }
  }

}

CustomLabelEditingProvider.$inject = [
  'eventBus',
  'bpmnFactory',
  'canvas',
  'directEditing',
  'modeling',
  'resizeHandles',
  'textRenderer',
  'sharedData'
];

CustomLabelEditingProvider.prototype.activate = function(element) {

  // text
  const text = getLabel(element);

  if (text === undefined) {
    return;
  }

  const context: any = {
    text: text
  };

  // bounds
  const bounds = this.getEditingBBox(element);
  context.bounds = bounds;
  Object.assign(context, bounds);

  const options: any = {};

  // tasks
  if (
    isAny(element, [
      'bpmn:Task',
      'bpmn:Participant',
      'bpmn:Lane',
      'bpmn:CallActivity'
    ]) ||
    isCollapsedSubProcess(element)
  ) {
    options.centerVertically = true;
  }

  // external labels
  if (isLabelExternal(element)) {
    options.autoResize = true;
  }

  // text annotations
  if (is(element, 'bpmn:TextAnnotation')) {
    options.resizable = true;
    options.autoResize = true;
  }

  context.options = options;

  return context;
};


/**
 * Get the editing bounding box based on the element's size and position
 *
 * @param  {djs.model.Base} element
 *
 * @return {Object} an object containing information about position
 *                  and size (fixed or minimum and/or maximum)
 */
CustomLabelEditingProvider.prototype.getEditingBBox = function(element) {
  const canvas = this._canvas;

  const target = element.label || element;

  const bbox = canvas.getAbsoluteBBox(target);

  const mid = {
    x: bbox.x + bbox.width / 2,
    y: bbox.y + bbox.height / 2
  };

  // default position
  let bounds: any = { x: bbox.x, y: bbox.y };

  const zoom = canvas.zoom();

  const defaultStyle = this._textRenderer.getDefaultStyle(),
      externalStyle = this._textRenderer.getExternalStyle();

  // take zoom into account
  const externalFontSize = externalStyle.fontSize * zoom,
      externalLineHeight = externalStyle.lineHeight,
      defaultFontSize = defaultStyle.fontSize * zoom,
      defaultLineHeight = defaultStyle.lineHeight;

  const style = {
    fontFamily: this._textRenderer.getDefaultStyle().fontFamily,
    fontWeight: this._textRenderer.getDefaultStyle().fontWeight
  };

  // adjust for expanded pools AND lanes
  if (is(element, 'bpmn:Lane') || isExpandedPool(element)) {

    bounds = {
      width: bbox.height,
      height: 30 * zoom,
      x: bbox.x - bbox.height / 2 + (15 * zoom),
      y: mid.y - (30 * zoom) / 2
    };

    Object.assign(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: (7 * zoom) + 'px',
      paddingBottom: (7 * zoom) + 'px',
      paddingLeft: (5 * zoom) + 'px',
      paddingRight: (5 * zoom) + 'px',
      transform: 'rotate(-90deg)'
    });
  }


  // internal labels for tasks and collapsed call activities,
  // sub processes and participants
  if (isAny(element, [ 'bpmn:Task', 'bpmn:CallActivity']) ||
      isCollapsedPool(element) ||
      isCollapsedSubProcess(element)) {

    Object.assign(bounds, {
      width: bbox.width,
      height: bbox.height
    });

    Object.assign(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: (7 * zoom) + 'px',
      paddingBottom: (7 * zoom) + 'px',
      paddingLeft: (5 * zoom) + 'px',
      paddingRight: (5 * zoom) + 'px'
    });
  }


  // internal labels for expanded sub processes
  if (isExpandedSubProcess(element)) {
    Object.assign(bounds, {
      width: bbox.width,
      x: bbox.x
    });

    Object.assign(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: (7 * zoom) + 'px',
      paddingBottom: (7 * zoom) + 'px',
      paddingLeft: (5 * zoom) + 'px',
      paddingRight: (5 * zoom) + 'px'
    });
  }

  let width = 90 * zoom,
      paddingTop = 7 * zoom,
      paddingBottom = 4 * zoom;

  // external labels for events, data elements, gateways, groups and connections
  if (target.labelTarget) {
    Object.assign(bounds, {
      width: width,
      height: bbox.height + paddingTop + paddingBottom,
      x: mid.x - width / 2,
      y: bbox.y - paddingTop
    });

    Object.assign(style, {
      fontSize: externalFontSize + 'px',
      lineHeight: externalLineHeight,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    });
  }

  // external label not yet created
  if (isLabelExternal(target)
      && !hasExternalLabel(target)
      && !isLabel(target)) {

    let externalLabelMid = getExternalLabelMid(element);

    let absoluteBBox = canvas.getAbsoluteBBox({
      x: externalLabelMid.x,
      y: externalLabelMid.y,
      width: 0,
      height: 0
    });

    let height = externalFontSize + paddingTop + paddingBottom;

    Object.assign(bounds, {
      width: width,
      height: height,
      x: absoluteBBox.x - width / 2,
      y: absoluteBBox.y - height / 2
    });

    Object.assign(style, {
      fontSize: externalFontSize + 'px',
      lineHeight: externalLineHeight,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    });
  }

  // text annotations
  if (is(element, 'bpmn:TextAnnotation')) {
    Object.assign(bounds, {
      width: bbox.width,
      height: bbox.height,
      minWidth: 30 * zoom,
      minHeight: 10 * zoom
    });

    Object.assign(style, {
      textAlign: 'left',
      paddingTop: (5 * zoom) + 'px',
      paddingBottom: (7 * zoom) + 'px',
      paddingLeft: (7 * zoom) + 'px',
      paddingRight: (5 * zoom) + 'px',
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight
    });
  }

  return { bounds: bounds, style: style };
};


CustomLabelEditingProvider.prototype.update = function(
    element, newLabel,
    activeContextText, bounds) {

  let newBounds,
      bbox;

  if (is(element, 'bpmn:TextAnnotation')) {

    bbox = this._canvas.getAbsoluteBBox(element);

    newBounds = {
      x: element.x,
      y: element.y,
      width: element.width / bbox.width * bounds.width,
      height: element.height / bbox.height * bounds.height
    };
  }

  if (is(element, 'bpmn:Group')) {

    let businessObject = getBusinessObject(element);

    // initialize categoryValue if not existing
    if (!businessObject.categoryValueRef) {

      let rootElement = this._canvas.getRootElement(),
          definitions = getBusinessObject(rootElement).$parent;

      let categoryValue = createCategoryValue( this._bpmnFactory);

      getBusinessObject(element).categoryValueRef = categoryValue;
    }

  }

  if (isEmptyText(newLabel)) {
    newLabel = null;
  }

  this._modeling.updateLabel(element, newLabel, newBounds);
};



// helpers //////////////////////

function isCollapsedSubProcess(element) {
  return is(element, 'bpmn:SubProcess') && !isExpanded(element);
}

function isExpandedSubProcess(element) {
  return is(element, 'bpmn:SubProcess') && isExpanded(element);
}

function isCollapsedPool(element) {
  return is(element, 'bpmn:Participant') && !isExpanded(element);
}

function isExpandedPool(element) {
  return is(element, 'bpmn:Participant') && isExpanded(element);
}

function isEmptyText(label) {
  return !label || !label.trim();
}