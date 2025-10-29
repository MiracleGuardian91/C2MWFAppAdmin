import { Status } from '@app/admin/data-modeler/models';
import {
  DiagramEl,
  Dimension,
  ElementStyle,
  ElementType,
  EventDef,
  TriggerConditionConnection,
} from '../models/bpmn';

const t = ElementType;

export const COLORS: Partial<
  Record<ElementType | EventDef, ElementStyle | ElementStyle[]>
> = {};
COLORS[t.Pool] = {
  stroke: 'black',
  fill: 'none',
  fillOpacity: 0.35,
  strokeWidth: 1,
};
COLORS[t.Stage] = {
  stroke: 'black',
  fill: 'none',
  fillOpacity: 0.35,
  strokeWidth: 1,
};
COLORS[t.StartState] = { stroke: 'black', fill: ' black' };
COLORS[t.State] = { stroke: 'black', fill: ' white', strokeWidth: 2 };
COLORS[t.EndState] = { stroke: 'black', fill: ' white', strokeWidth: 4 };
COLORS[t.SubProcess] = { stroke: 'black', fill: ' white' };
COLORS[t.TriggerExtension] = { stroke: 'black', fill: ' white' };
COLORS[EventDef.Timer] = { stroke: 'black', fill: ' white' };
COLORS[EventDef.Notify] = { stroke: 'black', fill: ' white' };
COLORS[EventDef.System] = { stroke: 'black', fill: ' white' };
COLORS[t.Gateway] = { stroke: 'black', fill: ' white', strokeWidth: 2 };
COLORS[t.Association] = {
  stroke: '#006266',
  fill: '#006266',
  strokeDasharray: '0.5, 5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
COLORS[t.Annotation] = { stroke: 'black', fill: ' white' };
COLORS[t.Trigger] = [
  { stroke: 'black', fill: 'black' },
  { stroke: 'black', fill: 'black' },
];

COLORS[t.DottedFlow] = [
  { stroke: 'black', fill: 'black' },
  { stroke: 'black', fill: 'black' },
];

const INACTIVE_STROKE_COLOR = '#b4b4b4';
const INACTIVE_FILL_COLOR = '#c6c6c6';

export const isStateType = (el: DiagramEl) => {
  return (
    el?.type &&
    (el.type === t.StartState ||
      el.type === t.State ||
      el.type === t.EndState ||
      el.type === t.SubProcess ||
      el.type === t.API ||
      el.type === t.DataSchema ||
      el.type === t.HumanInLoop ||
      el.type === t.LLM ||
      el.type === t.PromptVariable ||
      el.type === t.Scheduler ||
      el.type === t.SqlQuery ||
      el.type === t.Vector)
  );
};

export const getShapeSize = (type: ElementType): Dimension => {
  switch (type) {
    case t.Pool:
      return { width: 600, height: 250 };
    case t.Stage:
      return { width: 400, height: 100 };
    case t.StartState:
      return { width: 36, height: 36 };
    case t.EndState:
      return { width: 36, height: 36 };
    case t.SubProcess:
      return { width: 100, height: 80 };
    case t.TriggerExtension:
      return { width: 36, height: 36 };
    case t.State:
      return { width: 100, height: 80 };
    case t.Gateway:
      return { width: 50, height: 50 };
    case t.Annotation:
      return { width: 100, height: 30 };
    default:
      return { width: 100, height: 80 };
  }
};

export const isConditionType = (el: TriggerConditionConnection) => {
  return el.type === t.Trigger && el.source.type === t.Gateway;
};

export const isConnection = (el: DiagramEl) =>
  el.type === t.Trigger ||
  el.type === t.Association ||
  el.type === t.DottedFlow;

export const isCustomConnection = (el: DiagramEl) => el.type === t.DottedFlow;

export const getElementStyle = (el: any): ElementStyle => {
  let style: ElementStyle = null;
  const elementType = el.type;
  const def = el.def;
  if (el.type === t.Label) {
    const parentType = el.businessObject.$type;
    style = COLORS[parentType] as ElementStyle;
  } else if (el.type === t.Trigger || el.type === t.DottedFlow) {
    if (el.color && el.color !== 'none') {
      style = {
        stroke: el.color,
        fill: 'none',
        strokeWidth: 2,
      };
    } else {
      const index = el.source?.outgoing?.length;
      const colors = COLORS[el.type] as ElementStyle[];
      const len = colors.length;
      const triggerColors = colors[index % len || 0];
      style = { ...triggerColors };
    }
  } else if (el?.def === EventDef.Timer && !el.color) {
    style = style = { stroke: 'black', fill: 'white' };
  } else if (el?.def === EventDef.Notify && !el.color) {
    style = { stroke: 'black', fill: 'white' };
  } else if (el?.def === EventDef.System && !el.color) {
    style = { stroke: 'black', fill: 'white' };
  } else {
    if (elementType === t.Pool && (!el.color || el.color === 'none')) {
      style = {
        stroke: 'black',
        fill: 'none',
        strokeWidth: 2,
        fillOpacity: 0.35,
      };
    } else if (elementType === t.Stage && el.color) {
      // Stage has default black stroke color
      style = {
        stroke: 'black',
        fill: el.color,
        strokeWidth: 2,
        fillOpacity: 0.35,
      };
    } else if (elementType === t.Stage && (!el.color || el.color === 'none')) {
      style = {
        stroke: 'black',
        fill: 'white',
        strokeWidth: 2,
        fillOpacity: 0.35,
      };
    } else if (elementType === t.State && (!el.color || el.color === 'none')) {
      style = { stroke: 'black', fill: 'white', strokeWidth: 2.5 };
    } else if (
      elementType === t.StartState &&
      (!el.color || el.color === 'none')
    ) {
      style = { stroke: 'black', fill: 'black', strokeWidth: 3 };
    } else if (
      elementType === t.EndState &&
      (!el.color || el.color === 'none')
    ) {
      style = { stroke: 'black', fill: 'white', strokeWidth: 4 };
    } else if (
      [
        t.API,
        t.DataSchema,
        t.HumanInLoop,
        t.LLM,
        t.PromptVariable,
        t.Scheduler,
        t.SqlQuery,
        t.Vector,
      ].includes(elementType) &&
      (!el.color || el.color === 'none')
    ) {
      style = { stroke: 'black', fill: 'white', strokeWidth: 4 };
    } else if (
      elementType === t.SubProcess &&
      (!el.color || el.color === 'none')
    ) {
      style = { stroke: 'black', fill: 'white', strokeWidth: 2 };
    } else if (
      elementType === t.Gateway &&
      (!el.color || el.color === 'none')
    ) {
      style = { stroke: 'black', fill: 'white', strokeWidth: 2 };
    } else if (
      elementType === t.Association &&
      (!el.color || el.color === 'none')
    ) {
      style = {
        stroke: 'black',
        fill: 'none',
        strokeDasharray: '0.5, 5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      };
    } else if (def === EventDef.Timer && (!el.color || el.color === 'none')) {
      style = { stroke: 'black', fill: 'white' };
    } else if (def === EventDef.Notify && (!el.color || el.color === 'none')) {
      style = { stroke: 'black', fill: 'white' };
    } else if (def === EventDef.System && (!el.color || el.color === 'none')) {
      style = { stroke: 'black', fill: 'white' };
    } else {
      style = COLORS[elementType] as ElementStyle;
    }
  }
  if (el.props?.Name === 'Trigger_Condtion') {
    console.log(el.props);
  }
  if (el.props?.Status === Status.Inactive) {
    style = { ...style };
    if (style.fill) {
      style.fill = INACTIVE_FILL_COLOR;
    }
    style.stroke = INACTIVE_STROKE_COLOR;
  }

  if (el.color && el.color !== 'none') {
    const customStyle = getElementTypeStyle(elementType, el.color);
    COLORS[def || elementType] = customStyle;
    return customStyle;
  }

  return style;
};

function getElementTypeStyle(elementType, color) {
  switch (elementType) {
    case 'bpmn:EndEvent':
      return {
        stroke: color,
        fill: color,
        fillOpacity: 1,
        strokeWidth: 4,
      };
    case 'bpmn:Lane':
      return {
        stroke: color,
        fill: color,
        fillOpacity: 0.35,
        strokeWidth: 2,
      };
    default:
      return {
        stroke: color,
        fill: color,
        fillOpacity: 1,
        strokeWidth: 2,
      };
  }
}

export const getEventDef = (el: DiagramEl) => {
  const defs = el.businessObject?.eventDefinitions;
  return defs && defs[0]?.$type;
};
