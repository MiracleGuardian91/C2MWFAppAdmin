import Modeler from 'bpmn-js/lib/Modeler';

import { assign, isArray } from 'min-dash';

import inherits from 'inherits';

// import CustomModule from './custom';

export default function CustomModeler(options: any) {
  Modeler.call(this, options);

  this._customElements = [];
}

inherits(CustomModeler, Modeler);

/**
 * Add a single custom element to the underlying diagram
 *
 * @param {Object} customElement
 */
CustomModeler.prototype._addCustomShape = function (customElement: any) {
  this._customElements.push(customElement);

  const canvas = this.get('canvas'),
    elementFactory = this.get('elementFactory');

  const customAttrs = assign({ businessObject: customElement }, customElement);

  const customShape = elementFactory.create('shape', customAttrs);

  return canvas.addShape(customShape);
};

CustomModeler.prototype.addCustomElements = function (customElements) {
  if (!isArray(customElements)) {
    throw new Error('argument must be an array');
  }

  var shapes = [],
    connections = [];

  customElements.forEach(function (customElement) {
    if (isCustomConnection(customElement)) {
      connections.push(customElement);
    } else {
      shapes.push(customElement);
    }
  });

  shapes.forEach(this._addCustomShape, this);

  // connections.forEach(this._addCustomConnection, this);
};

CustomModeler.prototype._addCustomConnection = function (customElement: any) {
  this._customElements.push(customElement);

  const canvas = this.get('canvas'),
    elementFactory = this.get('elementFactory'),
    elementRegistry = this.get('elementRegistry');

  const customAttrs = assign({ businessObject: customElement }, customElement);

  const connection = elementFactory.create(
    'connection',
    assign(customAttrs, {
      source: elementRegistry.get(customElement.source),
      target: elementRegistry.get(customElement.target),
    }),
    elementRegistry.get(customElement.source)?.parent
  );

  return canvas.addConnection(connection);
};

CustomModeler.prototype.getCustomElements = function () {
  return this._customElements;
};
/**
 * Add a number of custom elements and connections to the underlying diagram.
 *
 * @param {Array<Object>} customElements
 */
function isCustomConnection(element) {
  return element.type === 'custom:DottedFlow';
}
