import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';
import { WorkflowApiService } from '../services/workflow-api.service';
import {
  ConnectionCreate,
  ConnectionReconnectRule,
  ConnectionShape,
  DiagramEl,
  ElementAutoResizeRule,
  ElementsDeleteRule,
  ElementsMoveRule,
  ElementType,
  EventBus,
  EventDef,
  EventType,
  Modeling,
  ShapeCreateContext,
  ShapeCreateRule,
  ShapeDeleteContext,
  StageShape,
  StartStateShape,
  StateShapeType,
  WorkflowShape,
  Parent,
  Label,
  Shape,
} from '../models/bpmn';
import { COLORS, getEventDef, isStateType } from '../util/bpmn';
import { DiagramInit } from './custom-diagram-init';
import { inject } from '@angular/core';
import { Guid } from 'guid-typescript';
import { firstValueFrom } from 'rxjs';
import { is } from 'bpmn-js/lib/util/ModelUtil';

const t = ElementType;
type WfosIdToWfoIdMap = { [wfosId: string]: string };

export class CustomRules extends RuleProvider {
  private wfosIdToWfoIdMap: WfosIdToWfoIdMap = {};
  allowed: any;
  private startEvent: StartStateShape;
  private pool: WorkflowShape;
  private lastHoveredLane: StageShape;
  private lastShapeParent: StageShape;
  public statgeID: string;
  public stateID: string;
  #WorkflowApiService = inject(WorkflowApiService);
  [x: string]: any;
  constructor(
    eventBus: EventBus,
    // private modeling: Modeling,
    private diagramInit: DiagramInit
  ) {
    super(eventBus);
    eventBus.on(
      EventType.CreateShape,
      ({ context: { shape } }: { context: ShapeCreateContext }) => {
        if (shape.type === t.StartState) {
          this.startEvent = shape;
        } else if (shape.type === t.Pool) {
          this.pool = shape;
        }
      }
    );

    //   this.eventBus.on('element.drag.start', (event) => {
    //     const element = event.context.shape;
    //     if (element && element.businessObject) {
    //         // this.changeDragHighlightColor(element, 'black');
    //         console.log("H");
    //     }
    // });

    eventBus.on(
      EventType.DeleteShape,
      ({ context: { shape } }: { context: ShapeDeleteContext }) => {
        if (shape.type === t.StartState) {
          this.startEvent = null;
        } else if (shape.type === t.Pool) {
          this.pool = null;
        }
      }
    );

    eventBus.on(
      EventType.CreateShapeRevert,
      ({ context: { shape } }: { context: ShapeCreateContext }) => {
        if (shape.type === t.StartState) {
          this.startEvent = null;
        } else if (shape.type === t.Pool) {
          this.pool = null;
        }
      }
    );

    eventBus.on('drag.start', (event: any) => {
      const { shape } = event;
      if (isStateType(shape)) {
        const { parent } = shape;
        this.lastShapeParent = parent;
      }
    });
    eventBus.on(EventType.MoveEnd, (event: any) => {
      setTimeout(() => {
        const { context } = event;
        const { shape } = context;
        if (isStateType(shape)) {
          const PreviousStage = this.getWfoIdFromSession(shape.props.WfosId);
          this.stateID = shape.props.WfosId;
          this.stageID = shape.parent.props.WfoId;
          // Check if the shape has moved to a different lane
          const previousStageId = this.lastShapeParent?.id;
          const currenParentId = shape.parent?.id;

          if (previousStageId !== currenParentId) {
            this.callApiOnMoveLane(this.stateID, this.stageID, PreviousStage);
            this.updateWfoIdInSession(this.stateID, this.stageID);
          }
        }
      }, 200);
    });

    eventBus.on(
      EventType.HoverOnElement,
      ({ element }: { element: DiagramEl }) => {
        if (element.type === t.Stage) {
          this.lastHoveredLane = element;
        }
        if (element.parent?.type === t.Stage) {
          this.lastHoveredLane = element.parent;
        }
        if (element.type === t.Trigger) {
          this.lastHoveredLane = (element as ConnectionShape).source.parent;
        }
      }
    );
  }
  static $inject = ['eventBus', 'modeling', 'diagramInit'];

  private canConnect(source: DiagramEl, target?: DiagramEl) {
    if (isCustom(source)) {
      if (is(target, t.Pool) || is(source, t.Pool)) {
        return false;
      } else {
        return {
          type: t.Trigger,
        };
      }
    }
    if (target?.type === t.Trigger) return false;
    // Other states cannot connect to start state
    if (target?.type === t.StartState) {
      if (source.type === t.StartState) return { type: t.Trigger };

      return false;
    }
    // End state cannot connect to other states
    if (source.type === t.EndState) {
      if (target && target?.type !== t.EndState) return false;
    }

    if (source.type === t.TriggerExtension) {
      if (
        getEventDef(source) !== EventDef.System &&
        getEventDef(source) !== EventDef.Timer
      ) {
        return false;
      }
      if (source.incoming.length && isStateType(target)) {
        return { type: t.Trigger };
      }
    }

    if (
      // Only one trigger can point to a trigger extension
      (target?.type === t.TriggerExtension && target?.incoming.length === 1) ||
      // Gateways can contain only one parent trigger
      (target?.type === t.Gateway && target?.incoming.length === 1) ||
      // Gateways cannot point to TriggerExtensions
      (source.type === t.Gateway && target?.type === t.TriggerExtension) ||
      // Gateways cannot point to themselves
      (source.type === t.Gateway && target?.type === t.Gateway) ||
      // Trigger conditions without parent triggers are not allowed
      ((source.type === t.Gateway || source.type === t.TriggerExtension) &&
        source.incoming.length === 0) ||
      // Gateways cannot connect to Annotations due to concatenated id issue
      (source.type === t.Gateway && target?.type === t.Annotation) ||
      // Text Annotation cannot be connected by more than one Association
      (source.type === t.Annotation &&
        (source.incoming.length === 1 || source.outgoing.length === 1)) ||
      (target?.type === t.Annotation &&
        (target?.incoming.length === 1 || target?.outgoing.length === 1))
    ) {
      return false;
    }
  }

  addRule(
    actions: string | string[],
    priorityOrFn: number | ((context: any) => any),
    cb?: (context: any) => any
  ): void {
    if (typeof actions === 'string') {
      actions = [actions];
    }

    let priority: number;
    let callback: (context: any) => any;

    if (typeof priorityOrFn === 'function') {
      // Handle the two-argument case
      priority = 1000; // Default priority if not provided
      callback = priorityOrFn;
    } else if (typeof priorityOrFn === 'number' && cb) {
      // Handle the three-argument case
      priority = priorityOrFn;
      callback = cb;
    }

    actions.forEach((action) => {
      this.canExecute(
        action,
        priority,
        (context: any) => {
          return callback(context);
        },
        true
      );
    });
  }

  getStoredWfosIdToWfoIdMap(): WfosIdToWfoIdMap {
    const storedData = sessionStorage.getItem('StateJson');
    return storedData ? JSON.parse(storedData) : {};
  }

  // ✅ Get WfoId by WfosId from sessionStorage
  getWfoIdFromSession(wfosId: string): string | null {
    const storedMap = this.getStoredWfosIdToWfoIdMap();
    return storedMap[wfosId] || null;
  }

  // ✅ Update WfoId for a given WfosId in sessionStorage
  updateWfoIdInSession(wfosId: string, newWfoId: string): void {
    const storedMap = this.getStoredWfosIdToWfoIdMap();

    if (storedMap[wfosId]) {
      storedMap[wfosId] = newWfoId;
      sessionStorage.setItem('StateJson', JSON.stringify(storedMap));
      console.log(`Updated WfoId for WfosId: ${wfosId} to ${newWfoId}`);
    } else {
      console.warn(`WfosId ${wfosId} not found in session storage.`);
    }
  }

  // ✅ Check if a WfosId exists in sessionStorage
  hasWfosIdInSession(wfosId: string): boolean {
    const storedMap = this.getStoredWfosIdToWfoIdMap();
    return wfosId in storedMap;
  }

  callApiOnMoveLane(stateID: string, stageID: string, PreviousStage: string) {
    const ActionGroupId = Guid.raw();

    this.#WorkflowApiService
      .callApiOnMoveLane(stateID, stageID, ActionGroupId, PreviousStage)
      .subscribe({
        next: async (response) => {
          console.log('API call successful:', response);
          await firstValueFrom(
            this.#WorkflowApiService.saveDiagramCoordinates(
              this.workflowId,
              null,
              null
            )
          );
        },
        error: (error) => {
          console.error('API call error:', error);
        },
      });
  }

  init() {
    this.addRule(
      Rule.CreateConnection,
      2000,
      ({ source, target }: ConnectionCreate) => this.canConnect(source, target)
    );

    this.addRule(
      Rule.CreateShape,
      2000,
      ({ shape, target }: ShapeCreateRule) => {
        // Elements cannot be created on the pool, but only on lanes
        if (
          target.type === t.Pool &&
          !target.children.some((el) => el.type === t.Stage)
        )
          return false;
        // Only one pool at a time is allowed on the diagram
        if (shape.type === t.Pool && this.pool) return false;
        if (shape.type === t.StartState) {
          if (target.type !== t.Pool) return false;
          // There can be only one start event on the diagram
          if (this.startEvent) return false;
          return true;
        }
      }
    );

    this.addRule(Rule.MoveShape, 2000, (r: ElementsMoveRule) => {
      const {
        shapes: [shape],
      } = r;
      // Moving Pool is disabled since there is only one and it does not make sense to move it around
      if (shape.type === t.Pool) return true;
      if (shape.type === t.Label) return false;
      if (shape.type === t.Annotation) return true;
      if (isStateType(shape)) {
        // Moving states with triggers across stages is not allowed
        // as it introduces a bunch of problems of updating multiple properties
        // of triggers and conditions such as start state, end state, start stage, end stage.
        // Without clear cut apis this is problematic and error prone.
        // if (
        //    this.lastHoveredLane?.id !== shape.parent.id &&
        //   (shape.incoming.length > 0 || shape.outgoing.length > 0)
        // ) {
        //   return false;
        // }
        return true;
      }
    });

    this.addRule(
      Rule.ReconnectConnection,
      2000,
      ({ source, target, connection }: ConnectionReconnectRule) => {
        // Triggers can only be reconnected among states
        if (!isStateType(source) || !isStateType(target)) {
          return false;
        }
      }
    );

    this.addRule(
      Rule.DeleteElements,
      2000,
      ({ elements: [element] }: ElementsDeleteRule) => {
        // Don't let elements be deleted if
        if (element.type === t.Trigger) {
          // there are trigger conditions
          if (
            (element.target.type === t.Gateway ||
              element.target.type === t.TriggerExtension) &&
            element.target.outgoing.length > 0
          )
            return false;
        }
        // triggers are attached to the element
        // if (element.outgoing.length > 0 || element.incoming.length > 0)
        //   return false;
        // stage has children states
        if (
          element.type === t.Stage &&
          element.children.some((el) => isStateType(el as StateShapeType))
        )
          return false;
        // pool has children stages
        if (
          element.type === t.Pool &&
          element.children.some((el) => el.type === t.Stage)
        )
          return false;
      }
    );

    this.addRule(Rule.AutoResize, 2000, (_: ElementAutoResizeRule) => {
      if (!this.diagramInit.initComplete) {
        return false;
      }
    });
  }
}
function isCustom(element) {
  return element && /^custom:/.test(element.type);
}
export const enum Rule {
  CreateShape = 'shape.create',
  MoveShape = 'elements.move',
  CreateConnection = 'connection.create',
  ReconnectConnection = 'connection.reconnect',
  DeleteElements = 'elements.delete',
  AutoResize = 'element.autoResize',
  AlignElements = 'elements.align',
}
