import { Injectable, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import {
  bufferTime,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  mergeAll,
  skip,
  skipWhile,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  ConnectionCreate,
  ConnectionDeleteRevertContext,
  ConnectionReconnectContext,
  ConnectionShape,
  DiagramEl,
  ElementType,
  EventDef,
  EventType,
  Point,
  ShapeDeleteRevertContext,
  ShapeMoveContext,
  StageShape,
  StateShapeType,
  WorkflowShape,
} from '../models/bpmn';
import {
  Coordinates,
  ElementCoordinates,
  MetaData,
  State,
  Trigger,
  TriggerCondition,
  TriggerCoordinates,
  Workflow,
} from '../models/wf.model';
import { getEventDef, getShapeSize, isStateType } from '../util/bpmn';
import {
  extractElementCoordinates,
  extractElementIds,
  getEventDefinition,
  getStateType,
} from '../util/bridge';
import { constructId, deconstructId } from '../util/helpers';
import { BpmnService } from './bpmn.service';
import { CustomContextPad } from '../custom/custom-context-pad';
const t = ElementType;
// on refresh issue
let elementAdded = [];
let eventAdded = [];

const STATE_SIZE = getShapeSize(t.StartState).width;
const GATEWAY_H = getShapeSize(t.Gateway).width;

/** Left padding applied to lanes relative to Pool */
const LANE_INDENTATION = 30;

@Injectable({ providedIn: 'root' })
export class DiagramService implements OnDestroy {
  private _metadata: MetaData;
  private _isDragOperationInProgress = false;
  private _dragEndTimeout: any;
  private _initComplete = false;
  private _states: State[] = [];
  private hoverOnElement$ = this.bpmn.listenTo(EventType.HoverOnElement).pipe(
    map(({ element }: { element: DiagramEl }) => element),
    filter(
      (element) =>
        element.type === t.Stage || (element as any).type === t.Process
    )
  );

  constructor(private bpmn: BpmnService) {
    // Track drag operations to prevent unwanted modal popups
    this.bpmn.listenTo(EventType.DragStart).subscribe(() => {
      this._isDragOperationInProgress = true;
      // Clear any existing timeout
      if (this._dragEndTimeout) {
        clearTimeout(this._dragEndTimeout);
      }
    });

    this.bpmn.listenTo(EventType.DragEnd).subscribe(() => {
      // Set a timeout to allow drag operations to fully complete
      // before allowing modal popups again
      this._dragEndTimeout = setTimeout(() => {
        this._isDragOperationInProgress = false;
      }, 100);
    });
  }

  ngOnDestroy() {
    // Clean up timeout when service is destroyed
    if (this._dragEndTimeout) {
      clearTimeout(this._dragEndTimeout);
    }
  }

  get paletteIsOpen() {
    return this.bpmn.paletteIsOpen;
  }

  get onCreateElement() {
    return from([
      this._onNewLane(),
      this._onNewConnection(),
      this._onNewElementFromPallette(),
    ]).pipe(
      mergeAll(),
      tap((el) => this.updateMiscElement(el))
    );
  }

  get onDiagramChange() {
    return this.bpmn.listenTo(EventType.DiagramChanged).pipe(
      debounceTime(0),
      skip(1),
      map((_) => {
        return this.bpmn.allElements.reduce((acc, el) => {
          acc[el.id] = extractElementCoordinates(el);
          return acc;
        }, {} as Coordinates);
      })
    );
  }

  get onUpdateElement() {
    return this.bpmn.listenTo(EventType.DoubleClick).pipe(
      map((e) => e.element as DiagramEl),
      filter((e) => e.type !== t.Gateway),
      // Prevent modal from opening when element is dropped on trigger during drag operations
      filter((e) => {
        // If a drag operation is in progress or just completed, prevent modal for triggers
        if (e.type === t.Trigger && this._isDragOperationInProgress) {
          return false;
        }
        return true;
      })
    );
  }

  get onDeleteElement() {
    return this.bpmn
      .listenTo([EventType.DeleteConnection, EventType.DeleteShape])
      .pipe(
        map(({ context }) =>
          context.shape
            ? (context.shape as DiagramEl)
            : (context.connection as ConnectionShape)
        ),
        filter((el) => !!el.props),
        // Collect all values in an array that fall to the span of time defined in bufferTime
        bufferTime(100),
        filter((buffer) => buffer.length > 0),
        map((elements) => extractElementIds(elements)),
        // Skip all values emitted during the diagram initialization
        skipWhile((_) => !this._initComplete)
      );
  }

  get onReconnect() {
    return this.bpmn
      .listenTo<{ context: ConnectionReconnectContext }>([
        EventType.ReconnectConnection,
        EventType.ReconnectConnectionRevert,
      ])
      .pipe(
        map(({ context }) => context),
        // Ignore events if flow source or target haven't changed
        filter(({ oldSource, oldTarget, newSource, newTarget }) => {
          return oldSource.id !== newSource.id || oldTarget.id !== newTarget.id;
        })
      );
  }

  /** Only deals with state (event) objects and ignores the rest */
  get onElementMove() {
    const move$ = this.bpmn
      .listenTo<{ context: ShapeMoveContext }>(EventType.MoveShape)
      .pipe(
        map((e) => e.context.shape),
        distinctUntilChanged((a, b) => a?.id === b?.id),
        withLatestFrom(this.hoverOnElement$),
        filter(([shape, parent]) => {
          const parentsDiffer =
            isStateType(shape) &&
            shape.props &&
            !parent?.props?.States[shape.props?.Guid] &&
            !getEventDef(shape);
          const type = shape.type;
          switch (type) {
            case t.Pool:
            case t.Stage:
            case t.Label:
              break;
            default:
              shape.parent = parent;
              break;
          }
          return parentsDiffer;
        }),
        map(([shape, _]) => shape)
      );

    const moveRevert$ = this.bpmn
      .listenTo<{ context: ShapeMoveContext }>(EventType.MoveShapeRevert)
      .pipe(
        filter((e) => isStateType(e.context.shape)),
        filter(({ context: { shape, newParent } }) => {
          if (newParent.type === t.Pool) {
            const stages = newParent.children.filter(
              (el) => el.type === t.Stage
            );
            const actualParent = stages.find(
              (stage) => stage.props?.States[shape.id]
            );
            if (actualParent?.id !== shape.parent.id) {
              shape.parent = actualParent;
              return true;
            }
            return false;
          }
          return false;
        }),
        map((e) => e.context.shape)
      );
    return from([move$, moveRevert$]).pipe(mergeAll());
  }

  get onRestoreElement() {
    const connectionRestored = this.bpmn
      .listenTo<{ context: ConnectionDeleteRevertContext }>(
        EventType.DeleteConnectionRevert
      )
      .pipe(map((c) => c.context.connection));
    const shapeRestored = this.bpmn
      .listenTo<{ context: ShapeDeleteRevertContext }>(
        EventType.DeleteShapeRevert
      )
      .pipe(map((c) => c.context.shape));

    return from([connectionRestored, shapeRestored]).pipe(
      mergeAll(),
      filter((el) => !!el.props)
    );
  }

  public getElement(id: string) {
    return this.bpmn.getElement(id);
  }

  public togglePalette() {
    return this.bpmn.togglePalette();
  }

  public undo() {
    this.bpmn.undo();
  }

  public redo() {
    this.bpmn.redo();
  }

  private _onNewElementFromPallette() {
    return this.bpmn.listenTo(EventType.CreateElement).pipe(
      withLatestFrom(this.hoverOnElement$),
      map(([e, parent]: [any, DiagramEl]) => ({
        element: e.context.elements[0] as DiagramEl,
        parent,
      })),
      filter(({ element, parent }) => {
        if (
          parent.type === t.Pool ||
          (parent.type === t.Stage && !parent.props)
        ) {
          this.deleteElement(element);
          return false;
        }
        return true;
      }),
      map(({ element, parent }) => {
        // Collaboration becomes the parent of pool automatically
        // and Plasma workflow is not concerned about it
        // so I'm leaving it as it is
        if (element.type !== t.Pool) {
          // The rest of the elements created from pallette should have Stage as their parent
          element.parent = parent;
        }
        return element;
      }),
      // Ignore Gateways elements since they dont correspond to any backend objects
      filter((element) => element.type !== t.Gateway)
    );
  }

  private _onNewConnection() {
    return this.bpmn.listenTo(EventType.Connect).pipe(
      withLatestFrom(this.bpmn.listenTo(EventType.CreateConnection)),
      map(([_, e]) => e),
      map(({ context }: { context: ConnectionCreate }) => context.connection)
    );
  }

  private _onNewLane() {
    return this.bpmn
      .listenTo(EventType.AddLane)
      .pipe(map((e) => e.context?.newLane as StageShape));
  }

  private _getElementCoordinates(id: string) {
    const coords = this._metadata?.Coordinates;
    if (coords) {
      return coords[id];
    }
    return null;
  }

  public deleteElement(element: DiagramEl) {
    this.bpmn.deleteElement(element);
  }

  public toDiagram(metadata: MetaData, attachTo: HTMLElement) {
    this._metadata = metadata;
    const { FriendlyName, WorkflowMode, Name } = metadata.Workflow;
    const readOnly = WorkflowMode === 'Published';
    const flowType = metadata.FlowType;
    const dataToDiagram = () => this.toBPMNPool(metadata.Workflow);
    return this.bpmn
      .importDiagram(
        Name,
        FriendlyName,
        attachTo,
        dataToDiagram,
        readOnly,
        flowType
      )
      .pipe(
        finalize(() => {
          this._initComplete = true;
          this.clearStoredEvent();
          this._states = [];
        })
      );
  }

  private clearStoredEvent(): void {
    const key = 'event';
    sessionStorage.removeItem(key);
  }

  private toMiscElements() {
    Object.entries(this._metadata.Coordinates || {}).forEach(([id, coords]) => {
      const el = this.bpmn.getElement(id);
      if (!el) {
        this.toMiscElement(id, coords);
      } else {
        if (el.type === t.Label) {
          const bounds = coords as ElementCoordinates;

          el.width = bounds.width;
          el.height = bounds.height;
          el.x = bounds.x;
          el.y = bounds.y;
          this.updateElementProperties(el, {});
        }
      }
    });
  }

  private updateMiscElement(el: DiagramEl) {
    if (el.type === t.Annotation) {
      const newId = constructId(t.Annotation, el.parent.id);
      this.updateElementProperties(el, { id: newId });
    } else if (el.type === t.Association) {
      const connection = el as ConnectionShape;
      const annotation =
        connection.source.type === t.Annotation
          ? connection.source
          : connection.target;
      const otherEl =
        connection.source.type !== t.Annotation
          ? connection.source
          : connection.target;
      const annId = constructId(t.Annotation, otherEl.id);
      const conId = constructId(t.Association, otherEl.id);
      this.updateElementProperties(connection, { id: conId });
      this.updateElementProperties(annotation, { id: annId });
    }
  }

  private toMiscElement(
    id: string,
    coords: ElementCoordinates | TriggerCoordinates
  ) {
    const idParts = deconstructId(id);
    if (idParts) {
      const { type, parentId } = idParts;
      const parentEl = this.bpmn.getElement(parentId);

      if (type === t.Annotation) {
        const annotation = this.bpmn.createShape(
          { id, type, ...coords },
          parentEl.parent
        );
        annotation.businessObject.text = (coords as ElementCoordinates).name;
        this.updateElementProperties(annotation, {});
        const conId = constructId(t.Association, parentId);
        const conCoords = this._getElementCoordinates(conId);
        if (conCoords) {
          const association = this.bpmn.connect(parentEl, annotation);
          this.updateElementProperties(association, {
            id: conId,
            ...conCoords,
          });
        }
      }
    }
  }

  private toBPMNFlowCondition(
    fromEvent: any,
    condition: TriggerCondition,
    trigger?: Trigger
  ) {
    const connetionType =
      trigger?.SpecID === '1' ? 'custom:DottedFlow' : 'bpmn:SequenceFlow';
    //const endState = this._metadata.Workflow.Stages[condition.EndStageGuid]?.States[condition.EndStateGuid];

    const endStateGuid = condition.EndStateGuid;

    // search across all stages to find the state
    let endState: any = null;

    for (const stageKey of Object.keys(this._metadata.Workflow.Stages)) {
      const stage = this._metadata.Workflow.Stages[stageKey];
      if (stage.States && stage.States[endStateGuid]) {
        endState = stage.States[endStateGuid];
        break;
      }
    }

    if (endState) {
      const toEvent = this.bpmn.getElement(endState.Guid);
      if (
        toEvent.type === 'bpmn:StartEvent' &&
        fromEvent.type === 'bpmn:StartEvent'
      ) {
        return;
      }

      const id = trigger?.Guid || constructId('Cond_', condition.Name);
      let flow = null;
      if (!elementAdded.includes(id)) {
        flow = this.bpmn.connect(
          fromEvent,
          toEvent,
          connetionType as ElementType
        );
        const coords = (this._getElementCoordinates(id) ||
          {}) as TriggerCoordinates;
        flow.props = trigger ? { ...trigger } : { ...condition };

        this.updateElementProperties(flow, {
          id,
          ...coords,
          name: null,
        });
        flow.friendlyName = trigger?.FriendlyName ? trigger.FriendlyName : ' ';
        elementAdded.push(id);

        // Position the target state at the bottom of the connection
        // This creates the effect where state boxes appear below the connecting line
        if (toEvent && flow && flow.waypoints) {
          this.positionStateAtBottomOfConnection(
            toEvent as StateShapeType,
            flow as ConnectionShape
          );
        }
      }
      // Set flow.friendlyName based on trigger.FriendlyName
      return flow;
    }
  }

  private toBPMNFlowTrigger(
    fromEvent: StateShapeType,
    toEvent: any,
    props: Trigger
  ) {
    const flow = this.bpmn.connect(fromEvent, toEvent);
    var coords =
      this._getElementCoordinates(props.Guid) || ({} as TriggerCoordinates);

    if ('name' in coords) {
      delete coords.name;
    }

    flow.props = { ...props };
    this.updateElementProperties(flow, {
      //name: props.FriendlyName,
      id: props.Guid,
      ...coords,
      //name: null,
    });
    flow.friendlyName = props.FriendlyName;

    // Position the target state at the bottom of the connection
    // This creates the effect where state boxes appear below the connecting line
    if (toEvent && flow && flow.waypoints) {
      this.positionStateAtBottomOfConnection(
        toEvent as StateShapeType,
        flow as ConnectionShape
      );
    }

    return flow;
  }

  private toBPMNGateway(
    fromEvent: StateShapeType,
    trigger: Trigger,
    condition?: TriggerCondition
  ) {
    const type = t.Gateway;
    const gatewayId = constructId(type, trigger.Guid);
    let coordinates = this._getElementCoordinates(
      gatewayId
    ) as ElementCoordinates;
    const gatewayParent = fromEvent.parent;

    if (!coordinates) {
      const { StartStageGUID } = trigger;

      const direction = this.stageDirection(
        StartStageGUID,
        condition?.EndStateGuid || ''
      );

      let point: Point;
      if (direction === 'next') {
        point = {
          x: fromEvent.x + STATE_SIZE / 2,
          y: 100 + fromEvent.y + STATE_SIZE,
        };
      } else if (direction === 'prev') {
        point = {
          x: fromEvent.x + STATE_SIZE / 2,
          y: -100 + fromEvent.y + STATE_SIZE,
        };
      } else {
        point = {
          x: 100 + fromEvent.x + STATE_SIZE,
          y: fromEvent.y + STATE_SIZE / 2,
        };
      }
      coordinates = {
        ...point,
        height: GATEWAY_H,
        width: GATEWAY_H,
      };
    }

    const gateway = this.bpmn.createShape(
      { id: gatewayId, type, ...coordinates },
      gatewayParent
    );
    gateway.parent = gatewayParent;
    return gateway;
  }

  private toBPMNEventDefinition(fromEvent: StateShapeType, trigger: Trigger) {
    const triggerType = +trigger.TypeID;
    const def = getEventDefinition(triggerType);
    if (def) {
      const defId = constructId(triggerType, trigger.Guid);
      let coordinates = this._getElementCoordinates(defId);
      const point = {
        x: 100 + fromEvent.x + STATE_SIZE,
        y: fromEvent.y + STATE_SIZE / 2,
      };
      if (!coordinates) {
        coordinates = {
          ...point,
          height: STATE_SIZE,
          width: STATE_SIZE,
        };
      }
      const extension = this.bpmn.createShape(
        {
          id: defId,
          type: t.TriggerExtension,
          eventDefinitionType: def,
          ...coordinates,
        },
        fromEvent.parent
      );
      extension.parent = fromEvent.parent;
      return extension;
    }
    return null;
  }

  private toBPMNFlows() {
    this._states.forEach((state) => {
      const fromEvent = this.bpmn.getElement(state.Guid) as StateShapeType;
      Object.values(state.Triggers).forEach((trigger) => {
        const conditions = Object.values(trigger.TrgConditions);
        if (conditions.length === 0) {
          const extension = this.toBPMNEventDefinition(fromEvent, trigger);
          if (extension) {
            this.toBPMNFlowTrigger(fromEvent, extension, trigger);
          } else {
            const gateway = this.toBPMNGateway(fromEvent, trigger);
            this.toBPMNFlowTrigger(fromEvent, gateway, trigger);
          }
        } else {
          if (conditions.length === 1) {
            const triggerType = +trigger.TypeID;
            const def = getEventDefinition(triggerType);

            if (def === EventDef.System || def === EventDef.Timer) {
              const system = this.toBPMNEventDefinition(fromEvent, trigger);
              this.toBPMNFlowTrigger(fromEvent, system, trigger);
              this.toBPMNFlowCondition(system, conditions[0]);
              return;
            }
            const gatewayId = constructId(t.Gateway, trigger.Guid);
            let coordinates = this._getElementCoordinates(gatewayId);
            if (coordinates) {
              const gateway = this.toBPMNGateway(fromEvent, trigger);
              this.toBPMNFlowTrigger(fromEvent, gateway, trigger);
              this.toBPMNFlowCondition(gateway, conditions[0]);
            } else {
              // Connect two states by a trigger directly if there is only one condition
              this.toBPMNFlowCondition(fromEvent, conditions[0], trigger);
            }
          } else {
            const triggerType = +trigger.TypeID;
            const def = getEventDefinition(triggerType);

            if (def === EventDef.System || def === EventDef.Timer) {
              const system = this.toBPMNEventDefinition(fromEvent, trigger);
              this.toBPMNFlowTrigger(fromEvent, system, trigger);
              conditions.forEach((condition) =>
                this.toBPMNFlowCondition(system, condition)
              );
              return;
            }
            // Create exclusive gateway to connect the states with one another
            const gateway = this.toBPMNGateway(
              fromEvent,
              trigger,
              conditions[0]
            );
            this.toBPMNFlowTrigger(fromEvent, gateway, trigger);
            conditions.forEach((condition) =>
              this.toBPMNFlowCondition(gateway, condition)
            );
          }
        }
      });
    });

    // After all connections are created, reposition states at the bottom of their connections
    this.repositionStatesAtBottomOfConnections();

    elementAdded = [];
    eventAdded = [];
  }

  private stageDirection(start: string, end: string) {
    const list = this._metadata.Workflow.StageList;
    const i1 = list.findIndex((stage) => stage === start);
    const i2 = list.findIndex((stage) => stage === end);
    if (i1 > i2) return 'prev';
    else if (i1 < i2) return 'next';
    else return 'same';
  }

  private toBPMNEvent(state: State, index: number, lane: StageShape) {
    let type = getStateType(state.SpecID);
    if (type === t.State && state.StateType === 'SubProcess') {
      type = t.SubProcess;
    }
    let coords = this._getElementCoordinates(state.Guid);
    if (!coords) {
      coords = {
        x: index * 100 + STATE_SIZE * 2 + lane.x,
        y: lane.y + STATE_SIZE,
        width: getShapeSize(type).width,
        height: getShapeSize(type).height,
      };
    } else {
      coords = {
        ...coords,
        width: getShapeSize(type).width,
        height: getShapeSize(type).height,
      };
    }

    const event = this.bpmn.createShape(
      {
        id: state.Guid,
        type,
        ...coords,
        props: { ...state },
      },
      lane
    ) as StateShapeType;
    this.updateElementProperties(event, { name: state.FriendlyName });
    lane.children.push(event);
    event.parent = lane;
    return event;
  }

  /**
   * Determines if a state should be positioned at the bottom of its connection
   * This can be customized based on state properties or connection properties
   */
  private shouldPositionStateAtBottomOfConnection(
    state: StateShapeType,
    connection: ConnectionShape
  ): boolean {
    // For now, position all states at the bottom of their connections
    // This can be made configurable based on state properties or connection properties
    return true;
  }

  /**
   * Positions a state box at the bottom of its incoming connection line
   * This method calculates the position based on the connection waypoints
   */
  private positionStateAtBottomOfConnection(
    state: StateShapeType,
    connection: ConnectionShape
  ) {
    if (
      !connection ||
      !connection.waypoints ||
      connection.waypoints.length < 2
    ) {
      return;
    }

    // Check if this state should be positioned at the bottom of the connection
    if (!this.shouldPositionStateAtBottomOfConnection(state, connection)) {
      return;
    }

    const waypoints = connection.waypoints;
    const lastWaypoint = waypoints[waypoints.length - 1];
    const secondLastWaypoint = waypoints[waypoints.length - 2];

    // Calculate the position at the bottom of the connection
    // The state box should be positioned below the horizontal segment of the connection
    let newX = lastWaypoint.x;
    let newY = lastWaypoint.y;

    // If the connection has a horizontal segment before the final point,
    // position the state box below that horizontal line
    if (waypoints.length >= 3) {
      const horizontalSegment = waypoints[waypoints.length - 2];
      if (horizontalSegment && horizontalSegment.y !== lastWaypoint.y) {
        newX = horizontalSegment.x;
        newY = horizontalSegment.y + 20; // Position 20px below the horizontal line
      } else {
        newY = lastWaypoint.y + 20; // Position 20px below the connection end
      }
    } else {
      newY = lastWaypoint.y + 20; // Position 20px below the connection end
    }

    // Center the state box horizontally on the connection
    newX = newX - state.width / 2;

    // Update the state position
    this.updateElementProperties(state, {
      x: newX,
      y: newY,
    });
  }

  /**
   * Repositions all states that have incoming connections to appear at the bottom of their connections
   * This creates the visual effect where state boxes are positioned below the connecting lines
   */
  private repositionStatesAtBottomOfConnections() {
    // Get all connections in the diagram
    const allElements = this.bpmn.allElements;
    const connections = allElements.filter(
      (el) => el.type === t.Trigger || el.type === t.DottedFlow
    );

    connections.forEach((connection) => {
      if (
        connection.target &&
        connection.waypoints &&
        connection.waypoints.length >= 2
      ) {
        const targetState = connection.target as StateShapeType;

        // Only reposition if the target is a state (not a gateway or other element)
        if (
          targetState &&
          (targetState.type === t.State ||
            targetState.type === t.StartState ||
            targetState.type === t.EndState)
        ) {
          this.positionStateAtBottomOfConnection(
            targetState,
            connection as ConnectionShape
          );
        }
      }
    });
  }

  private toBPMNEvents(states: State[], lane: StageShape) {
    states.forEach((state, i) => {
      this.toBPMNEvent(state, i, lane);
      if (!this._states.some((s) => s.Name === state.Name)) {
        this._states.push(state);
      }
    });
  }

  private toBPMNLane(pool: WorkflowShape, attrs: any) {
    const lane = this.bpmn.createShape(attrs, pool);
    this.updateElementProperties(lane, {
      name: attrs.props.FriendlyName,
    });
    return lane as StageShape;
  }

  private toBPMNLanes(wf: Workflow, pool: WorkflowShape) {
    const type = t.Stage;
    const stages = wf.StageList;
    if (this._metadata.Coordinates) {
      const stagesCoords = [];
      let totalHeight = 0;
      let maxWidth = 0;
      stages.forEach((guid) => {
        const stage = wf.Stages[guid];
        const coords = this._getElementCoordinates(
          stage.Guid
        ) as ElementCoordinates;
        if (coords) {
          totalHeight += Math.abs(coords.height);
          maxWidth = Math.max(coords.width, maxWidth);
          stagesCoords.push({ id: stage.Guid, ...coords, props: stage, type });
        }
      });
      // Sort from top to bottom
      stagesCoords.sort((a, b) => a.y - b.y);
      stagesCoords.forEach((coords) => {
        const lane = this.toBPMNLane(pool, coords);
        this.toBPMNEvents(Object.values(lane?.props?.States || {}), lane);
      });
      if (stages.length > 0 && totalHeight > 0 && maxWidth > 0) {
        // Force update pool's size to fit all lanes
        pool.width = maxWidth + LANE_INDENTATION;
        pool.height = totalHeight;
        // Force update pool's coordinates to match the first lane
        pool.x = stagesCoords[0].x - LANE_INDENTATION;
        pool.y = stagesCoords[0].y;
        this.updateElementProperties(pool, {});
      }
    } else {
      this.bpmn.splitLane(pool, stages.length);
      const lanes: any[] = pool.children.filter((child) => child.type === type);
      stages.forEach((guid, i) => {
        const stage = wf.Stages[guid];
        lanes[i].props = { ...stage };
        this.updateElementProperties(lanes[i], {
          name: stage.FriendlyName,
          id: stage.Guid,
          props: { ...stage },
        });
        const states = Object.values(stage.States);
        if (states.length > 0) {
          this.toBPMNEvents(states, lanes[i]);
        }
      });
    }
  }

  private toBPMNPool(wf: Workflow) {
    let coords = this._getElementCoordinates(wf.Name) as ElementCoordinates;
    if (!coords) {
      coords = {
        x: 350,
        y: 300,
        height: 300,
        width: 350,
      };
    }
    const pool: WorkflowShape = this.bpmn.createParticipantShape(
      { ...wf },
      coords
    );
    this.updateElementProperties(pool, { name: wf.FriendlyName, id: wf.Name });

    if (wf.StageList.length > 0) {
      this.toBPMNLanes(wf, pool);
      this.toBPMNFlows();
      this.toMiscElements();
    }
  }
  name: string;
  public updateElementProperties(element: any, updated: any) {
    if (updated.name) {
      this.name = updated.name;
    }
    if (element.props) {
      element.props.FriendlyName = this.name;
    }
    this.bpmn.updateElementProperties(element, updated);
  }

  public destroy() {
    this.bpmn.destroy();
  }

  public clear() {
    this.bpmn.clear();
  }
}
