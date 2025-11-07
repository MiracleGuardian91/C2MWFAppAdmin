import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';
import { ConnectionReconnectContext } from '../models/bpmn/event-contexts';

export class CustomCommandInterceptor extends CommandInterceptor {
  [x: string]: any;

  constructor(eventBus, modeling) {
    super(eventBus);

    this.preExecute('connection.updateWaypoints', (e) => {
      const context = e.context;
      const connection = context.connection;

      if (connection) {
        const existingLineType =
          (connection as any).lineType ||
          (connection.businessObject &&
            (connection.businessObject as any).lineType);

        if (existingLineType) {
          context.preservedLineType = existingLineType;
        }
      }
    });

    this.postExecute('connection.updateWaypoints', (e) => {
      const context = e.context;
      const connection = context.connection;

      if (connection && context.preservedLineType) {
        (connection as any).lineType = context.preservedLineType;
        if (connection.businessObject) {
          (connection.businessObject as any).lineType =
            context.preservedLineType;
        }
        eventBus.fire('element.changed', { element: connection });
      }
    });

    this.canExecute('connection.layout', (e) => {
      const context = e.context;
      const connection = context.connection;

      if (connection) {
        const existingLineType =
          (connection as any).lineType ||
          (connection.businessObject &&
            (connection.businessObject as any).lineType);

        if (existingLineType === 'elbow') {
          return false;
        }
      }
    });

    this.preExecute('connection.layout', (e) => {
      const context = e.context;
      const connection = context.connection;

      if (connection) {
        const existingLineType =
          (connection as any).lineType ||
          (connection.businessObject &&
            (connection.businessObject as any).lineType);

        if (existingLineType) {
          context.preservedLineType = existingLineType;
        }
      }
    });

    this.postExecute('connection.layout', (e) => {
      const context = e.context;
      const connection = context.connection;

      if (connection && context.preservedLineType) {
        (connection as any).lineType = context.preservedLineType;
        if (connection.businessObject) {
          (connection.businessObject as any).lineType =
            context.preservedLineType;
        }
        eventBus.fire('element.changed', { element: connection });
      }
    });

    eventBus.on('element.changed', (e) => {
      const element = e.element;
      if (
        element &&
        (element.type === 'bpmn:SequenceFlow' ||
          element.type === 'custom:DottedFlow')
      ) {
        const existingLineType =
          (element as any).lineType ||
          (element.businessObject && (element.businessObject as any).lineType);

        if (existingLineType) {
          (element as any).lineType = existingLineType;
          if (element.businessObject) {
            (element.businessObject as any).lineType = existingLineType;
          }
        }
      }
    });
  }

  static $inject = ['eventBus', 'modeling'];
}
