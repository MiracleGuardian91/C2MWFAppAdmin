import { StateSpecificationType, TriggerType } from '../models';
import {
  ConnectionShape,
  DiagramEl,
  ElementType,
  EventDef,
  StageShape,
  StateShape,
  TriggerConditionConnection,
  TriggerConnection,
  TriggerExtensionShape,
  WorkflowShape,
} from '../models/bpmn';
import { ElementsIds } from '../models/elements-ids.model';
import { isConnection, isStateType } from './bpmn';
import { COLORS } from './bpmn';

const t = ElementType;

export const getStateType = (spec: StateSpecificationType) => {
  const s = StateSpecificationType;
  switch (spec) {
    case s.Start:
      return t.StartState;
    case s.End:
      return t.EndState;
    case s.API:
      return t.API;
    case s.DataSchema:
      return t.DataSchema;
    case s.HumanInLoop:
      return t.HumanInLoop;
    case s.LLM:
      return t.LLM;
    case s.PromptVariable:
      return t.PromptVariable;
    case s.Scheduler:
      return t.Scheduler;
    case s.SqlQuery:
      return t.SqlQuery;
    case s.Vector:
      return t.Vector;
    default:
      return t.State;
  }
};

export const getTriggerType = (element: ConnectionShape) => {
  const target = element.target;
  let type = TriggerType.Action;
  if (target.type === t.TriggerExtension) {
    const def = target.businessObject.eventDefinitions[0]?.$type;
    if (def === EventDef.Timer) type = TriggerType.Timer;
    else if (def === EventDef.Notify) type = TriggerType.Notify;
    else if (def === EventDef.System) type = TriggerType.System;
  }
  return type;
};

export const getEventDefByShape = (shape: TriggerExtensionShape) => {
  return shape.businessObject.eventDefinitions[0]?.$type;
};

export const getEventDefinition = (triggerType: TriggerType) => {
  let def: EventDef;
  if (triggerType === TriggerType.Timer) def = EventDef.Timer;
  else if (triggerType === TriggerType.Notify) def = EventDef.Notify;
  else if (triggerType === TriggerType.System) def = EventDef.System;
  return def;
};

export const extractElementCoordinates = (element: any) => {
  const coordinates: any = {};
  const { height, width } = element;
  if (isConnection(element)) {
    coordinates.waypoints = (element as ConnectionShape).waypoints;
  } else {
    coordinates.x = element.x;
    coordinates.y = element.y;
  }
  const bo = element.businessObject;
  const color = element.color || 'none';
  return {
    ...coordinates,
    height,
    width,
    name: bo?.text || bo?.name || '',
    color
  };
};

export const extractElementIds = (elements: DiagramEl[] = []): ElementsIds => {
  const { stages, states, triggers, conditions, workflows } =
    _categorizeElements(elements);
  const conditionIds = new Set(conditions.map((c) => c.props.ConditionId));
  const triggerIds = new Set<string>();
  const stateIds = new Set<string>();
  const stageIds = new Set<string>();
  const workflowIds = new Set<string>();
  triggers.forEach((t) => {
    Object.keys(t.props.TrgConditions || {}).forEach((condId) =>
      conditionIds.add(condId)
    );
    triggerIds.add(t.props.TriggerId);
  });
  states.forEach((s) => {
    Object.values(s.props.Triggers || {}).forEach((t) => {
      Object.keys(t.TrgConditions || {}).forEach((condId) =>
        conditionIds.add(condId)
      );
      triggerIds.add(t.TriggerId);
    });
    stateIds.add(s.props.WfosId);
  });

  stages.forEach((s) => {
    Object.values(s.props.States || {}).forEach((s) => stateIds.add(s.WfosId));
    stageIds.add(s.props.WfoId);
  });

  workflows.forEach((p) => workflowIds.add(p.props.WFID));

  return {
    workflowIds: Array.from(workflowIds),
    stageIds: Array.from(stageIds),
    stateIds: Array.from(stateIds),
    triggerIds: Array.from(triggerIds),
    conditionIds: Array.from(conditionIds),
  };
};

const _categorizeElements = (elements: DiagramEl[]) => {
  const conditions: TriggerConditionConnection[] = [];
  const triggers: TriggerConnection[] = [];
  const states: StateShape[] = [];
  const stages: StageShape[] = [];
  const workflows: WorkflowShape[] = [];
  elements.forEach((el) => {
    if (el.type === t.Stage) {
      stages.push(el);
    } else if (isStateType(el)) {
      states.push(el as StateShape);
    } else if (el.type === t.Trigger) {
      if ((el as TriggerConditionConnection).props.ConditionId) {
        conditions.push(el as any);
      } else {
        triggers.push(el as TriggerConnection);
      }
    } else if (el.type === t.Pool) {
      workflows.push(el);
    }
  });
  return { stages, states, triggers, conditions, workflows };
};
