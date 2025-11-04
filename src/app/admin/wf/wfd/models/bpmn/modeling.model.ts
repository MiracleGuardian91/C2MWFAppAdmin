import {
  ConnectionShape,
  DiagramEl,
  EventDef,
  Point,
  Parent,
  Label,
  Shape,
} from './element.model';
import { Moddle } from './moddle.model';

export interface Modeling<
  T extends ConnectionShape,
  U extends DiagramEl,
  V extends Label,
  W extends Parent,
  X extends Shape
> {
  // Method definitions from BPMN.js 13 Modeling class
  addLane<E extends DiagramEl>(element: E, position: 'top' | 'bottom'): void;
  updateWaypoints(connection: T, newWaypoints: Point[], hints?: any): void;
  layoutConnection(connection: T, hints?: any): void;
  moveElements(shapes: U[], delta: Point, target?: W, hints?: any): void;
  createShape(shape: Partial<X>, position: Point, target: W, hints?: any): X;
  createShape(
    shape: Partial<X>,
    position: Point,
    target: W,
    parentIndex: number,
    hints?: any
  ): X;

  removeElements<E extends DiagramEl>(elements: E[]): void;
  removeShape(shape: X, hints?: any): void;
  removeConnection(connection: T, hints?: any): void;
  registerHandlers(commandStack: any): void;
  moveShape(
    shape: X,
    delta: Point,
    newParent?: W,
    newParentIndex?: number,
    hints?: any
  ): void;
  updateAttachment(shape: X, newHost?: X): void;
  moveConnection(
    connection: T,
    delta: Point,
    newParent?: W,
    newParentIndex?: number,
    hints?: any
  ): void;
  createConnection(
    source: U,
    target: U,
    connection: Partial<T>,
    parent: W,
    hints?: any
  ): T;

  createConnection(
    source: U,
    target: U,
    parentIndex: number,
    connection: Partial<T>,
    parent: W,
    hints?: any
  ): T;
  createElements(
    elements: Partial<U>[],
    position: Point,
    parent: W,
    parentIndex?: number,
    hints?: any
  ): U[];
  createLabel(
    labelTarget: U,
    position: Point,
    label: Partial<V>,
    parent?: W
  ): V;
  appendShape(
    source: U,
    shape: Partial<X>,
    position: Point,
    target: W,
    hints?: any
  ): X;
  replaceShape(oldShape: X, newShape: Partial<X>, hints?: any): X;
  alignElements(elements: U[], alignment: any): void;
  resizeShape(shape: X, newBounds: any, minBounds?: any, hints?: any): void;
  createSpace(
    movingShapes: X[],
    resizingShapes: X[],
    delta: Point,
    direction: any,
    start: number
  ): void;
  reconnect(
    connection: T,
    source: U,
    target: U,
    dockingOrPoints: Point | Point[],
    hints?: any
  ): void;
  reconnectStart(
    connection: T,
    newSource: U,
    dockingOrPoints: Point | Point[],
    hints?: any
  ): void;
  reconnectEnd(
    connection: T,
    newTarget: U,
    dockingOrPoints: Point | Point[],
    hints?: any
  ): void;
  connect(source: U, target: U, attrs?: Partial<T>, hints?: any): T;
  connect(source: U, target: U, connectionType: any): T;
  toggleCollapse(shape: X, hints?: any): void;

  updateLabel(): any;
  claimId(): any;
  unclaimId(): any;
  makeCollaboration(): DiagramEl;
  makeProcess(): void;
  setColor: (
    elements: DiagramEl[],
    colors: {
      stroke: string;
      fill: string;
      strokeWidth?: number;
      fillOpacity?: number;
    }
  ) => void;
  splitLane: (targetLane: DiagramEl, count: number) => void;
  updateLanerefs(): any;
  updateModdleProperties(): any;
  updateProperties: (element: DiagramEl, properties: any) => void;
  resizeLane: (
    laneShape: X,
    newBounds: any,
    balanced?: boolean,
    hints?: any
  ) => void;
  getHandlers(): any;
  distributeElements(groups: any[], axis: any, dimension: any): void;
}

export type ShapeAttributes = DiagramEl & {
  isExpanded?: boolean;
  di?: {
    isMarkerVisible?: boolean;
  };
  eventDefinitionType?: EventDef;
  props?: any;
};
