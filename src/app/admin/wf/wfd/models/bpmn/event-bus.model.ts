export interface EventBus {
  createEvent: (data: any) => any;
  fire: {
    (...args: any[]): any;
    (type: string, data?: any): any;
  };
  handleError: (error: Error) => any;
  off: (events: EventType | EventType[], callback: CallableFunction) => void;
  on: {
    (
      events: string | string[],
      callback: EventBusEventCallback<any>,
      that?: any
    ): void;
    (
      events: string | string[],
      priority: number,
      callback: EventBusEventCallback<any>,
      that?: any
    ): void;
  };
  once: {
    (event: EventType, callback: CallableFunction): void;
    (
      events: string | string[],
      callback: EventBusEventCallback<any>,
      that?: any
    ): void;
    (
      events: string | string[],
      priority: number,
      callback: EventBusEventCallback<any>,
      that?: any
    ): void;
  };
}

type EventBusEventCallback<T> = (event: T & Event, ...args: any[]) => any;

export enum EventType {
  InitComplete = 'diagram.initComplete',
  CreateConnection = 'commandStack.connection.create.postExecuted',
  Connect = 'connect.end',
  ReconnectConnection = 'commandStack.connection.reconnect.postExecute',
  // HoverOnDrag = 'drag.hover',
  CreateElement = 'commandStack.elements.create.postExecute',
  HoverOnElement = 'element.hover',
  /** The difference between this and @property CreateElement is
   * that it fires events if when elements are created programmatically.
   * In contrast, CreateElement fires only when elements are created from the pallette.
   */
  CreateShape = 'commandStack.shape.create.postExecuted',
  MoveEnd = 'shape.move.end',
  DiagramChanged = 'element.changed',
  DoubleClick = 'element.dblclick',
  AddLane = 'commandStack.lane.add.postExecuted',
  DeleteShape = 'commandStack.shape.delete.postExecuted',
  DeleteConnection = 'commandStack.connection.delete.executed',
  MoveShape = 'commandStack.shape.move.postExecute',
  InitializeEditorActions = 'editorActions.init',
  ReadonlyMode = 'readOnly.changed',

  CreateConnectionRevert = 'commandStack.connection.create.reverted',
  DeleteConnectionRevert = 'commandStack.connection.delete.reverted',
  ReconnectConnectionRevert = 'commandStack.connection.reconnect.reverted',
  CreateShapeRevert = 'commandStack.shape.create.reverted',
  DeleteShapeRevert = 'commandStack.shape.delete.reverted',
  MoveShapeRevert = 'commandStack.shape.move.reverted',
  LassoToolSameStage = 'drag.end',
  DragStart = 'drag.start',
  DragEnd = 'drag.end',
}
