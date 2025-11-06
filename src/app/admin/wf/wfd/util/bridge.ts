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
import {
  getEventDef,
  isConditionType,
  isConnection,
  isStateType,
} from './bpmn';
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

const determineLineTypeFromWaypoints = (
  waypoints: any[]
): 'straight' | 'elbow' | 'curved' => {
  if (!Array.isArray(waypoints) || waypoints.length === 0) {
    return 'straight';
  }

  if (waypoints.length === 2) {
    return 'straight';
  }

  if (waypoints.length > 2) {
    let isOrthogonal = true;
    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1];
      const curr = waypoints[i];
      const dx = Math.abs(curr.x - prev.x);
      const dy = Math.abs(curr.y - prev.y);

      const isHorizontal = dy < 0.5;
      const isVertical = dx < 0.5;

      if (!isHorizontal && !isVertical) {
        isOrthogonal = false;
        break;
      }
    }

    return isOrthogonal ? 'elbow' : 'curved';
  }

  return 'straight';
};

export const extractElementCoordinates = (element: any) => {
  const coordinates: any = {};
  const { height, width } = element;
  const bo = element.businessObject;
  const props = element.props || {};

  const isConn = isConnection(element);

  if (isConn) {
    coordinates.waypoints = (element as ConnectionShape).waypoints;
  } else {
    coordinates.x = element.x;
    coordinates.y = element.y;
  }

  let objectGuid = '';
  let objectType = '';
  let parentObjectGuid = '';

  if (element.type === t.Pool) {
    objectGuid = props.WFID || '';
    objectType = 'workflow';
    parentObjectGuid = '';
  } else if (element.type === t.Stage) {
    objectGuid = props.WfoId || props.Guid || '';
    objectType = 'stage';
    parentObjectGuid = element.parent?.props?.WFID || '';
  } else if (isStateType(element)) {
    objectGuid = props.WfosId || props.Guid || '';
    objectType = 'state';
    parentObjectGuid = element.parent?.props?.WfoId || '';
  } else if (isConn && element.type === t.Trigger) {
    if (isConditionType(element as TriggerConditionConnection)) {
      objectGuid = props.ConditionId || '';
      objectType = 'triggercondition';
      parentObjectGuid = props.TriggerId || '';
    } else {
      objectGuid = props.TriggerId || props.Guid || '';
      objectType = 'trigger';
      parentObjectGuid = (element.source?.props as any)?.WfosId || '';
    }
  }

  const result: any = {
    ...coordinates,
    height,
    width,
    name: bo?.text || bo?.name || '',
    object_guid: objectGuid,
    object_type: objectType,
    parent_object_guid: parentObjectGuid,
  };

  if (!isConn) {
    const fontFamily =
      (bo as any)?.fontFamily || element.fontFamily || 'Museo Sans';
    const fontSize = (bo as any)?.fontSize || element.fontSize || '13px';
    const fontColor = (bo as any)?.fontColor || element.fontColor || '#000000';
    const fontBold = (bo as any)?.fontBold ?? element.fontBold ?? false;
    const fontItalic = (bo as any)?.fontItalic ?? element.fontItalic ?? false;
    const fontUnderline =
      (bo as any)?.fontUnderline ?? element.fontUnderline ?? false;
    const fillColor = element.color || (bo as any)?.color || 'none';

    result.font_family = fontFamily;
    result.font_size = fontSize;
    result.font_color = fontColor;
    result.font_bold = !!fontBold;
    result.font_italic = !!fontItalic;
    result.font_underline = !!fontUnderline;
    result.fill_color = fillColor;
  }

  if (isConn) {
    const lineColor =
      (bo as any)?.lineColor ||
      element.lineColor ||
      (bo as any)?.stroke ||
      element.stroke ||
      '#000000';
    const lineWidth = Number(
      (bo as any)?.lineWidth ??
        (bo as any)?.strokeWidth ??
        element.lineWidth ??
        element.strokeWidth ??
        2
    );

    const waypoints = (element as ConnectionShape).waypoints || [];

    let lineType = (element as any)?.lineType || (bo as any)?.lineType;

    if (!lineType && waypoints.length > 0) {
      lineType = determineLineTypeFromWaypoints(waypoints);
    }

    if (!lineType) {
      lineType = 'straight';
    }

    result.line_color = lineColor;
    result.line_width = lineWidth;
    result.line_type = lineType;
  }

  return result;
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
