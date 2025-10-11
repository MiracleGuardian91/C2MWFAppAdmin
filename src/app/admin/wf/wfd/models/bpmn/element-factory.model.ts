import {  ConnectionShape, DiagramEl, ElementType, WorkflowShape } from './element.model';

export interface ElementFactory {
  baseCreate: (type: ElementType, attrs?: any) => DiagramEl;
  create: (elementType: ElementType, attrs?: any) => DiagramEl;
  createRoot: (attrs?: any) => DiagramEl;
  createLabel: (attrs?: any) => any;
  createShape: (attrs?: any) => DiagramEl;
  createConnection: (attrs?: any) => ConnectionShape;
  createParticipantShape: (attrs?: any) => WorkflowShape;
}
