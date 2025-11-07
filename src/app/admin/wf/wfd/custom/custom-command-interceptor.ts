import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';
import { ConnectionReconnectContext } from '../models/bpmn/event-contexts';

export class CustomCommandInterceptor extends CommandInterceptor {
  [x: string]: any;

  constructor(eventBus, modeling) {
    super(eventBus);

    this.preExecute('connection.updateWaypoints', (e) => {
      const context = e.context;
      const connection = context.connection;

      if (connection && !(connection as any)._normalizing) {
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

        if (
          context.preservedLineType === 'elbow' &&
          connection.waypoints &&
          connection.waypoints.length > 2 &&
          !(connection as any)._normalizing
        ) {
          const normalizedWaypoints = normalizeElbowWaypoints(
            connection.waypoints
          );
          if (normalizedWaypoints && normalizedWaypoints.length > 0) {
            const needsNormalization = waypointsNeedNormalization(
              connection.waypoints,
              normalizedWaypoints
            );
            if (needsNormalization) {
              (connection as any)._normalizing = true;
              setTimeout(() => {
                modeling.updateWaypoints(connection, normalizedWaypoints);
                (connection as any)._normalizing = false;
              }, 0);
            }
          }
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

function normalizeElbowWaypoints(waypoints: any[]): any[] {
  if (!Array.isArray(waypoints) || waypoints.length < 2) {
    return waypoints;
  }

  const normalized: any[] = [{ x: waypoints[0].x, y: waypoints[0].y }];

  for (let i = 1; i < waypoints.length; i++) {
    const prev = normalized[normalized.length - 1];
    const curr = waypoints[i];
    const dx = curr.x - prev.x;
    const dy = curr.y - prev.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    const threshold = 0.5;
    const isHorizontal = absDy < threshold;
    const isVertical = absDx < threshold;

    if (isHorizontal) {
      normalized.push({ x: curr.x, y: prev.y });
    } else if (isVertical) {
      normalized.push({ x: prev.x, y: curr.y });
    } else {
      if (absDx > absDy) {
        normalized.push({ x: curr.x, y: prev.y });
        if (i < waypoints.length - 1) {
          normalized.push({ x: curr.x, y: curr.y });
        }
      } else {
        normalized.push({ x: prev.x, y: curr.y });
        if (i < waypoints.length - 1) {
          normalized.push({ x: curr.x, y: curr.y });
        }
      }
    }
  }

  if (waypoints.length > 0) {
    const lastOriginal = waypoints[waypoints.length - 1];
    const lastNormalized = normalized[normalized.length - 1];
    if (
      Math.abs(lastOriginal.x - lastNormalized.x) > 0.5 ||
      Math.abs(lastOriginal.y - lastNormalized.y) > 0.5
    ) {
      normalized[normalized.length - 1] = {
        x: lastOriginal.x,
        y: lastOriginal.y,
      };
    }
  }

  return normalized;
}

function waypointsNeedNormalization(
  original: any[],
  normalized: any[]
): boolean {
  if (!original || !normalized || original.length !== normalized.length) {
    return true;
  }

  for (let i = 0; i < original.length; i++) {
    const orig = original[i];
    const norm = normalized[i];
    if (Math.abs(orig.x - norm.x) > 0.5 || Math.abs(orig.y - norm.y) > 0.5) {
      return true;
    }
  }

  return false;
}
