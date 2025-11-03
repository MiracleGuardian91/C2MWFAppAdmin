import {
  getCirclePath,
  getDi,
  getDiamondPath,
  getFillColor,
  getRectPath,
  getRoundRectPath,
  getSemantic,
  getStrokeColor,
  isThrowEvent,
  isTypedEvent,
} from 'bpmn-js/lib/draw/BpmnRenderUtil';
import { getLabel } from 'bpmn-js/lib/features/label-editing/LabelUtil';
import { isExpanded } from 'bpmn-js/lib/util/DiUtil';
import { is } from 'bpmn-js/lib/util/ModelUtil';
import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';
import { createLine } from 'diagram-js/lib/util/RenderUtil';
import { transform } from 'diagram-js/lib/util/SvgTransformUtil';
import Ids from 'ids';
import { assign, isObject } from 'min-dash';
import { query as domQuery } from 'min-dom';
import {
  append as svgAppend,
  attr as svgAttr,
  classes as svgClasses,
  create as svgCreate,
} from 'tiny-svg';
import { ElementType, EventDef } from '../models/bpmn';
import { getElementStyle } from '../util/bpmn';
import {
  DATA_SCHEMA,
  HUMAN_IN_LOOP,
  LLM,
  PROMPT_VARIABLE,
  SQL_QUERY,
  VECTOR,
} from '@app/ai-flow-builder/icons/icon-images';
import { SharedData } from './share-data';

const RENDERER_IDS = new Ids();

const TASK_BORDER_RADIUS = 10;
const INNER_OUTER_DIST = 3;

const DEFAULT_FILL_OPACITY = 0.95,
  HIGH_FILL_OPACITY = 0.35;

const ELEMENT_LABEL_DISTANCE = 10;

const t = ElementType;
const def = EventDef;

export default class CustomRenderer extends BaseRenderer {
  private handlers: Partial<Record<EventDef | ElementType, Function>> = {};
  private computeStyle: any;
  private rendererId = RENDERER_IDS.next();
  private markers = {};
  stateName: string;

  constructor(
    // private config,
    private eventBus: any,
    private styles: any,
    private pathMap: any,
    private canvas: any,
    private textRenderer: any,
    private sharedData: SharedData,
    private priority = 1000,
    stateFriendlyName: string
  ) {
    super(eventBus, priority);
    this.computeStyle = this.styles.computeStyle;
    this.handlers[t.Pool] = this.drawPool;
    this.handlers[t.Stage] = this.drawLane;
    this.handlers[t.StartState] = this.drawStartEvent;
    this.handlers[t.State] = this.drawState;
    this.handlers[t.EndState] = this.drawEndEvent;
    this.handlers[t.SubProcess] = this.drawSubProcess;
    this.handlers[t.Gateway] = this.drawExclusiveGateway;
    this.handlers[t.Annotation] = this.drawTextAnnotation;
    this.handlers[t.Association] = this.drawAssociation;
    this.handlers[t.Label] = this.renderExternalLabel;
    this.handlers[t.Trigger] = this.drawSequenceFlow;
    this.handlers[t.DottedFlow] = this.drawDottedFlow;
    this.handlers[t.TriggerExtension] = this.drawIntermediateEvent;
    this.handlers[t.TestElectric] = this.drawTestElectric;
    this.handlers[t.API] = this.drawApi;
    this.handlers[t.DataSchema] = this.drawDataSchema;
    this.handlers[t.HumanInLoop] = this.drawHumanInLoop;
    this.handlers[t.LLM] = this.drawLLM;
    this.handlers[t.PromptVariable] = this.drawPromptVariable;
    this.handlers[t.Scheduler] = this.drawScheduler;
    this.handlers[t.SqlQuery] = this.drawSqlQuery;
    this.handlers[t.Vector] = this.drawVector;
    this.handlers[t.AgenticFlow] = this.drawAgenticFlow;
    this.handlers[def.Notify] = this.drawMessageEventDef;
    this.handlers[def.Timer] = this.drawTimerEventDef;
    this.handlers[def.System] = this.drawConditionalEventDef;
    this.stateName = stateFriendlyName;
  }

  static $inject = [
    // 'config.bpmnRenderer',
    'eventBus',
    'styles',
    'pathMap',
    'canvas',
    'textRenderer',
    'sharedData',
  ];

  public canRender = (element) => {
    return is(element, 'bpmn:BaseElement') || /^custom:/.test(element.type);
  };

  public drawShape = (parentGfx, element) => {
    const type = element.type;
    const h = this.handlers[type];

    /* jshint -W040 */
    return h(parentGfx, element);
  };

  public drawConnection = function (p, element) {
    return this.drawCustomConnection(p, element);
  };

  public drawCustomConnection = (parentGfx, connection) => {
    const { fill, stroke } = getElementStyle(connection);

    const lineColor =
      connection.lineColor || connection.stroke || stroke || 'black';
    const lineWidth =
      connection.lineWidth ||
      connection.strokeWidth ||
      (connection.businessObject &&
        (connection.businessObject.lineWidth ||
          connection.businessObject.strokeWidth)) ||
      2;

    const attrs = this.computeStyle({
      stroke: lineColor,
      markerEnd: this.marker('sequenceflow-end', fill, lineColor),
      strokeWidth: lineWidth,
    });

    if (connection.type === t.DottedFlow) {
      attrs.strokeDasharray = 5.5;
    }
    let lineType =
      (connection as any).lineType ||
      (connection.businessObject &&
        (connection.businessObject as any).lineType);

    // Infer line type for preview connections lacking custom props
    if (!lineType) {
      const wps = connection.waypoints || [];
      if (Array.isArray(wps) && wps.length > 2) {
        const isOrthogonal = wps.every((p, i) => {
          if (i === 0) return true;
          const prev = wps[i - 1];
          return Math.abs(p.x - prev.x) < 0.5 || Math.abs(p.y - prev.y) < 0.5;
        });
        lineType = isOrthogonal ? 'elbow' : 'curved';
      } else if (Array.isArray(wps) && wps.length === 2) {
        lineType = 'straight';
      }
    }

    if (lineType === 'curved') {
      const pathData = this.createSmoothPathFromWaypoints(
        connection.waypoints,
        0.2
      );
      const path = svgCreate('path');
      svgAttr(path, assign({ d: pathData }, attrs));
      return svgAppend(parentGfx, path);
    }

    return svgAppend(parentGfx, createLine(connection.waypoints, attrs, 6));
  };

  public getShapePath = (element) => {
    if (is(element, 'bpmn:Event')) {
      return getCirclePath(element);
    }

    if (is(element, 'bpmn:Activity')) {
      return getRoundRectPath(element, TASK_BORDER_RADIUS);
    }

    if (is(element, 'bpmn:Gateway')) {
      return getDiamondPath(element);
    }

    return getRectPath(element);
  };

  private addMarker = (id, options) => {
    const attrs = assign(
      {
        fill: 'black',
        strokeWidth: 1,
        strokeLinecap: 'round',
        strokeDasharray: 'none',
      },
      options.attrs
    );

    const ref = options.ref || { x: 0, y: 0 };

    const scale = options.scale || 1;

    // fix for safari / chrome / firefox bug not correctly
    // resetting stroke dash array
    if (attrs.strokeDasharray === 'none') {
      attrs.strokeDasharray = [10000, 1];
    }

    const marker = svgCreate('marker');

    svgAttr(options.element, attrs);

    svgAppend(marker, options.element);

    svgAttr(marker, {
      id: id,
      viewBox: '0 0 20 20',
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: 'auto',
    });

    let defs = domQuery('defs', this.canvas._svg);

    if (!defs) {
      defs = svgCreate('defs');

      svgAppend(this.canvas._svg, defs);
    }

    svgAppend(defs, marker);

    this.markers[id] = marker;
  };

  private colorEscape = (str) => {
    // only allow characters and numbers
    return str?.replace(/[^0-9a-zA-z]+/g, '_');
  };

  private marker = (type, fill, stroke) => {
    const id =
      type +
      '-' +
      this.colorEscape(fill) +
      '-' +
      this.colorEscape(stroke) +
      '-' +
      this.rendererId;

    if (!this.markers[id]) {
      this.createMarker(id, type, fill, stroke);
    }

    return 'url(#' + id + ')';
  };

  private createMarker = (id, type, fill, stroke) => {
    if (type === 'sequenceflow-end') {
      const sequenceflowEnd = svgCreate('path');
      svgAttr(sequenceflowEnd, { d: 'M 1 5 L 11 10 L 1 15 Z' });

      this.addMarker(id, {
        element: sequenceflowEnd,
        ref: { x: 11, y: 10 },
        scale: 0.5,
        attrs: {
          fill: stroke,
          stroke: stroke,
        },
      });
    }

    if (type === 'messageflow-start') {
      const messageflowStart = svgCreate('circle');
      svgAttr(messageflowStart, { cx: 6, cy: 6, r: 3.5 });

      this.addMarker(id, {
        element: messageflowStart,
        attrs: {
          fill: fill,
          stroke: stroke,
        },
        ref: { x: 6, y: 6 },
      });
    }

    if (type === 'messageflow-end') {
      const messageflowEnd = svgCreate('path');
      svgAttr(messageflowEnd, { d: 'm 1 5 l 0 -3 l 7 3 l -7 3 z' });

      this.addMarker(id, {
        element: messageflowEnd,
        attrs: {
          fill: fill,
          stroke: stroke,
          strokeLinecap: 'butt',
        },
        ref: { x: 8.5, y: 5 },
      });
    }

    if (type === 'association-start') {
      const associationStart = svgCreate('path');
      svgAttr(associationStart, { d: 'M 11 5 L 1 10 L 11 15' });

      this.addMarker(id, {
        element: associationStart,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5,
        },
        ref: { x: 1, y: 10 },
        scale: 0.5,
      });
    }

    if (type === 'association-end') {
      const associationEnd = svgCreate('path');
      svgAttr(associationEnd, { d: 'M 1 5 L 11 10 L 1 15' });

      this.addMarker(id, {
        element: associationEnd,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5,
        },
        ref: { x: 12, y: 10 },
        scale: 0.5,
      });
    }

    if (type === 'conditional-flow-marker') {
      const conditionalflowMarker = svgCreate('path');
      svgAttr(conditionalflowMarker, { d: 'M 0 10 L 8 6 L 16 10 L 8 14 Z' });

      this.addMarker(id, {
        element: conditionalflowMarker,
        attrs: {
          fill: fill,
          stroke: stroke,
        },
        ref: { x: -1, y: 10 },
        scale: 0.5,
      });
    }

    if (type === 'conditional-default-flow-marker') {
      const conditionaldefaultflowMarker = svgCreate('path');
      svgAttr(conditionaldefaultflowMarker, { d: 'M 6 4 L 10 16' });

      this.addMarker(id, {
        element: conditionaldefaultflowMarker,
        attrs: {
          stroke: stroke,
        },
        ref: { x: 0, y: 10 },
        scale: 0.5,
      });
    }
  };

  private drawCircle = (parentGfx, width, height, offset, attrs?) => {
    if (isObject(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;

    attrs = this.computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white',
    });

    if (attrs.fill === 'none') {
      delete attrs.fillOpacity;
    }

    const cx = width / 2,
      cy = height / 2;

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4 - offset),
    });
    svgAttr(circle, attrs);

    svgAppend(parentGfx, circle);

    return circle;
  };

  private drawRect = (parentGfx, width, height, r, offset, attrs?) => {
    if (isObject(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;

    attrs = this.computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white',
    });

    const rect = svgCreate('rect');
    svgAttr(rect, {
      x: offset,
      y: offset,
      width: width - offset * 2,
      height: height - offset * 2,
      rx: r,
      ry: r,
    });
    svgAttr(rect, attrs);

    svgAppend(parentGfx, rect);

    return rect;
  };

  private drawDiamond = (parentGfx, width, height, attrs) => {
    const x_2 = width / 2;
    const y_2 = height / 2;

    const points = [
      { x: x_2, y: 0 },
      { x: width, y: y_2 },
      { x: x_2, y: height },
      { x: 0, y: y_2 },
    ];

    const pointsString = points
      .map((point) => point.x + ',' + point.y)
      .join(' ');

    attrs = this.computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white',
    });

    const polygon = svgCreate('polygon');
    svgAttr(polygon, {
      points: pointsString,
    });
    svgAttr(polygon, attrs);

    svgAppend(parentGfx, polygon);

    return polygon;
  };

  private drawLine = (parentGfx, waypoints, attrs) => {
    attrs = this.computeStyle(attrs, ['no-fill'], {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'none',
    });

    const line = createLine(waypoints, attrs);

    svgAppend(parentGfx, line);

    return line;
  };

  private drawPath(parentGfx, pathData, attrs) {
    attrs = this.computeStyle(attrs, ['no-fill'], {
      strokeWidth: 2,
      stroke: 'black',
    });
    const path = svgCreate('path');
    svgAttr(path, attrs);
    svgAttr(path, { d: pathData });
    svgAppend(parentGfx, path);
    return path;
  }

  private renderEventContent = (element, parentGfx) => {
    const event = getSemantic(element);
    const isThrowing = isThrowEvent(event);

    if (isTypedEvent(event, def.Notify)) {
      element.def = 'bpmn:MessageEventDefinition';
      return this.drawMessageEventDef(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, def.Timer)) {
      element.def = 'bpmn:TimerEventDefinition';
      return this.drawTimerEventDef(parentGfx, element);
    }

    if (isTypedEvent(event, def.System)) {
      element.def = 'bpmn:ConditionalEventDefinition';
      return this.drawConditionalEventDef(parentGfx, element);
    }

    return null;
  };

  private renderLabel = (parentGfx, label, options) => {
    options = assign(
      {
        size: {
          width: 100,
        },
      },
      options
    );

    const text = this.textRenderer.createText(label || '', options);

    svgClasses(text).add('djs-label');

    svgAppend(parentGfx, text);

    return text;
  };

  private renderEmbeddedLabel = (parentGfx, element, align) => {
    const semantic = getSemantic(element);

    return this.renderLabel(parentGfx, semantic.name, {
      box: element,
      align: align,
      padding: 5,
      style: {
        fill: getElementStyle(element).stroke,
      },
    });
  };

  private renderExternalLabel = (parentGfx, element) => {
    const box = {
      width: 90,
      height: 30,
      x: element.width / 2 + element.x,
      y: element.height / 2 + element.y,
    };

    const target = element.labelTarget || element;
    const bo = target && target.businessObject ? target.businessObject : null;

    const resolvedFontFamily = (bo && bo.fontFamily) || 'Museo Sans';
    const resolvedFontSize = (bo && bo.fontSize) || '13px';
    const resolvedFontWeight = bo && bo.fontBold ? 'bold' : '500';
    const resolvedFontStyle = bo && bo.fontItalic ? 'italic' : 'normal';
    const resolvedTextDecoration =
      bo && bo.fontUnderline ? 'underline' : 'none';
    const fallbackFill = getElementStyle(target).stroke;
    const resolvedFill = (bo && bo.fontColor) || fallbackFill;

    return this.renderLabel(parentGfx, getLabel(element), {
      box: box,
      fitBox: true,
      style: assign({}, this.textRenderer.getExternalStyle(), {
        fill: resolvedFill,
        fontSize: resolvedFontSize,
        fontFamily: resolvedFontFamily,
        fontWeight: resolvedFontWeight,
        fontStyle: resolvedFontStyle,
        textDecoration: resolvedTextDecoration,
      }),
    });
  };

  private renderLaneLabel = (parentGfx, text, element) => {
    if (element.type == 'bpmn:Lane') {
      const textBox = this.renderLabel(parentGfx, text, {
        box: {
          height: 35,
          width: element.height,
        },
        align: 'center-middle',
        style: {
          fill: getElementStyle(element).stroke,
          fontSize: '16px', // Increase the font size here (adjust the value as needed)
          fontFamily: 'Museo Sans',
          fontWeight: '500', // Set font weight to 500
        },
      });

      const top = -1 * element.height;

      transform(textBox, 0, -top, 270);
    } else {
      const textBox = this.renderLabel(parentGfx, text, {
        box: {
          height: 30,
          width: element.height,
        },
        align: 'center-middle',
        style: {
          fill: getElementStyle(element).stroke,
          fontSize: '16px', // Increase the font size here (adjust the value as needed)
          fontFamily: 'Museo Sans',
          fontWeight: '500', // Set font weight to 500
        },
      });

      const top = -1 * element.height;

      transform(textBox, 0, -top, 270);
    }
  };

  private createPathFromConnection = (connection) => {
    const waypoints = connection.waypoints;

    // Start the path data with the first waypoint
    let pathData = `M ${waypoints[0].x} ${waypoints[0].y}`;

    // Loop through the waypoints to create line segments
    for (let i = 1; i < waypoints.length; i++) {
      const currentWaypoint = waypoints[i];
      const prevWaypoint = waypoints[i - 1];

      // If the current waypoint is not the last one, create a bend
      if (i < waypoints.length - 1) {
        // Create a bend point
        pathData += ` L ${currentWaypoint.x} ${prevWaypoint.y}`; // Horizontal line to the bend
        pathData += ` L ${currentWaypoint.x} ${currentWaypoint.y}`; // Vertical line to the current waypoint
      } else {
        // For the last waypoint, just connect directly
        pathData += ` L ${currentWaypoint.x} ${currentWaypoint.y}`;
      }
    }

    return pathData;
  };

  private createSmoothPathFromWaypoints = (
    waypoints,
    smoothing: number = 0.2
  ) => {
    if (!waypoints || waypoints.length === 0) return '';
    if (waypoints.length === 1) {
      const p = waypoints[0];
      return `M ${p.x} ${p.y}`;
    }

    const pts = waypoints.map((p) => ({ x: p.x, y: p.y }));

    const line = (pA, pB) => {
      const length = Math.hypot(pB.x - pA.x, pB.y - pA.y) || 1;
      const angle = Math.atan2(pB.y - pA.y, pB.x - pA.x);
      return { length, angle };
    };

    const controlPoint = (current, previous, next, reverse = false) => {
      const p = previous || current;
      const n = next || current;
      const props = line(p, n);
      const scale = Math.min(80, props.length) * smoothing;
      const angle = props.angle + (reverse ? Math.PI : 0);
      return {
        x: current.x + Math.cos(angle) * scale,
        y: current.y + Math.sin(angle) * scale,
      };
    };

    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const current = pts[i];
      const next = pts[i + 1];
      const cp1 = controlPoint(current, pts[i - 1], next, false);
      const cp2 = controlPoint(next, current, pts[i + 2], true);
      d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${next.x} ${next.y}`;
    }
    return d;
  };

  private drawEvent = (parentGfx, element, attrs) => {
    if (!('fillOpacity' in attrs)) {
      attrs.fillOpacity = DEFAULT_FILL_OPACITY;
    }

    return this.drawCircle(parentGfx, element.width, element.height, attrs);
  };

  private drawStartEvent = (parentGfx, element) => {
    const { fill, stroke, fillOpacity } = getElementStyle(element);
    let attrs: any = {
      fill,
      stroke,
      fillOpacity,
    };

    const semantic = getSemantic(element);

    if (!semantic.isInterrupting) {
      attrs = {
        // strokeDasharray: '6',
        strokeLinecap: 'round',
        fill,
        stroke,
      };
    }

    const circle = this.drawEvent(parentGfx, element, attrs);

    this.renderEventContent(element, parentGfx);

    return circle;
  };

  private drawMessageEventDef = (parentGfx, element, isThrowing) => {
    const pathData = this.pathMap.getScaledPath('EVENT_MESSAGE', {
      xScaleFactor: 0.9,
      yScaleFactor: 0.9,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.235,
        my: 0.315,
      },
    });

    const { fill, stroke } = getElementStyle(element);
    const defaultStroke = 'black';

    // Function to determine contrast color
    const getContrastColor = (color?: string) => {
      if (!color?.trim()) {
        return defaultStroke;
      }
      return this.isColorDark(color) ? 'white' : 'black';
    };

    // Determine the color based on isThrowing condition
    const selectedColor = isThrowing ? fill : stroke;
    const contrastColor = getContrastColor(selectedColor);

    const messagePath = this.drawPath(parentGfx, pathData, {
      strokeWidth: 1,
      fill: contrastColor,
      stroke: contrastColor,
      fillOpacity: 0.1,
    });

    return messagePath;
  };

  private drawTimerEventDef = (parentGfx, element) => {
    const { fill, stroke, fillOpacity } = getElementStyle(element);
    const defaultStroke = 'black';
    const trimmedStroke = stroke?.trim();
    let strokeColor = defaultStroke;

    if (trimmedStroke) {
      strokeColor = this.isColorDark(trimmedStroke) ? 'white' : 'black';
    }

    const circle = this.drawCircle(
      parentGfx,
      element.width,
      element.height,
      0.2 * element.height,
      {
        strokeWidth: 2,
        fill,
        stroke: strokeColor,
        fillOpacity,
      }
    );

    const pathData = this.pathMap.getScaledPath('EVENT_TIMER_WH', {
      xScaleFactor: 0.75,
      yScaleFactor: 0.75,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.5,
        my: 0.5,
      },
    });

    this.drawPath(parentGfx, pathData, {
      strokeWidth: 2,
      strokeLinecap: 'square',
      stroke: strokeColor,
      fillOpacity,
    });

    for (let i = 0; i < 12; i++) {
      const linePathData = this.pathMap.getScaledPath('EVENT_TIMER_LINE', {
        xScaleFactor: 0.75,
        yScaleFactor: 0.75,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.5,
          my: 0.5,
        },
      });

      const width = element.width / 2;
      const height = element.height / 2;

      const defaultStroke = 'black';
      const trimmedStroke = stroke?.trim();
      let strokeColor = defaultStroke;

      if (trimmedStroke) {
        strokeColor = this.isColorDark(trimmedStroke) ? 'white' : 'black';
      }

      this.drawPath(parentGfx, linePathData, {
        strokeWidth: 1,
        strokeLinecap: 'square',
        transform: 'rotate(' + i * 30 + ',' + height + ',' + width + ')',
        stroke: strokeColor,
      });
    }

    return circle;
  };

  private drawConditionalEventDef = (parentGfx, event) => {
    const pathData = this.pathMap.getScaledPath('EVENT_CONDITIONAL', {
      xScaleFactor: 1,
      yScaleFactor: 1,
      containerWidth: event.width,
      containerHeight: event.height,
      position: {
        mx: 0.5,
        my: 0.222,
      },
    });

    const strokeColor = getElementStyle(event).stroke?.trim();
    const defaultStroke = 'black';
    let finalStroke = defaultStroke;

    if (strokeColor) {
      finalStroke = this.isColorDark(strokeColor) ? 'white' : 'black';
    }
    return this.drawPath(parentGfx, pathData, {
      strokeWidth: 1,
      stroke: finalStroke,
    });
  };

  private drawEndEvent = (parentGfx, element) => {
    const style = getElementStyle(element);
    const defaultStroke = 'black';
    const color = element.color?.trim();
    let strokeColor = defaultStroke;

    if (color) {
      strokeColor = this.isColorDark(color) ? 'white' : 'black';
    }

    if (element.color && element.color !== 'none') {
      style.fill = element.color;
      style.stroke = strokeColor;
    }

    // Override strokeWidth to always be 4
    style.strokeWidth = 4;

    const circle = this.drawEvent(parentGfx, element, style);

    this.renderEventContent(element, parentGfx);

    return circle;
  };

  private truncateText(text: string, maxLength: number): string {
    return text.length > maxLength
      ? text.substring(0, maxLength - 3) + '...'
      : text;
  }
  private drawState = (parentGfx, element) => {
    const style = getElementStyle(element);

    if (element.color && element.color !== 'none') {
      style.fill = element.color;
      style.stroke = element.color;
    }

    // Create a group for the rectangle and text
    const group = svgCreate('g');
    svgAppend(parentGfx, group);

    // Draw the rectangle
    const rect = this.drawRect(
      group,
      element.width,
      element.height,
      10,
      0,
      style
    );

    // Create the text element
    const text = svgCreate('text');

    // Get font properties from element's business object or use defaults
    const bo = element.businessObject;
    const fontFamily = bo?.fontFamily || element.fontFamily || 'Museo Sans';
    const fontSize = bo?.fontSize || element.fontSize || '13px';
    const fontColor =
      bo?.fontColor ||
      element.fontColor ||
      (!element.color || !element.color.trim()
        ? 'black'
        : this.isColorDark(element.color)
        ? 'white'
        : 'black');
    const fontWeight = bo?.fontBold || element.fontBold ? 'bold' : '500';
    const fontStyle =
      bo?.fontItalic || element.fontItalic ? 'italic' : 'normal';
    const textDecoration =
      bo?.fontUnderline || element.fontUnderline ? 'underline' : 'none';

    svgAttr(text, {
      x: element.width / 2,
      y:
        element?.props?.FriendlyName.length > 12
          ? element.height / 2.3
          : element.height / 2,
      fill: fontColor,
      'text-anchor': 'middle',
      'dominant-baseline': 'middle',
      'font-size': fontSize,
      'font-weight': fontWeight,
      'font-family': fontFamily,
      'font-style': fontStyle,
      'text-decoration': textDecoration,
      'pointer-events': 'none',
    });

    // Function to format text based on the first space after 10 characters

    // Get FriendlyName safely
    const friendlyName =
      element?.props?.FriendlyName || this.isAiFlow('Agent') || 'State';
    const lines = this.formatText(friendlyName, 12);

    // Append each line to the text element
    lines.forEach((line, index) => {
      const tspan = svgCreate('tspan');
      tspan.textContent = line;
      svgAttr(tspan, {
        x: element.width / 2,
        dy: index === 0 ? 0 : '1.2em',
      });
      text.appendChild(tspan);
    });

    // Append text to group
    svgAppend(group, text);

    this.renderEventContent(element, parentGfx);
    return group;
  };

  private drawTestElectric = (parentGfx, element) => {
    //  const customTask = this.drawShape(parentGfx, element);
    const icon = svgCreate('image', {
      x: 5,
      y: 5,
      width: 80,
      height: 80,
      href: '../../../../../assets/images/test-electric.svg', // <== Replace this with your SVG URL or data URI
    });

    return svgAppend(parentGfx, icon);

    // return customTask;
  };

  private drawApi(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });
    const path = svgCreate('path');
    svgAttr(path, {
      d: 'M29.8789 9H23.0029L18.623 19H23.0029L19.2529 29L29.252 16.5H24.251L29.8789 9Z',
      fill: color,
      transform: `translate(${-10}, ${0}) scale(1.7)`,
    });

    svgAppend(group, circle);
    svgAppend(group, path);

    return svgAppend(parentGfx, group);
  }

  private drawDataSchema(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });

    const image = svgCreate('image');
    svgAttr(image, {
      width: 55,
      height: 30,
      x: cx - 55 / 2,
      y: cy - 30 / 2,
      href: DATA_SCHEMA,
    });

    svgAppend(group, circle);
    svgAppend(group, image);

    return svgAppend(parentGfx, group);
  }

  private drawHumanInLoop(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });

    const image = svgCreate('image');
    svgAttr(image, {
      width: 55,
      height: 30,
      x: cx - 55 / 2,
      y: cy - 30 / 2,
      href: HUMAN_IN_LOOP,
    });

    svgAppend(group, circle);
    svgAppend(group, image);

    return svgAppend(parentGfx, group);
  }

  private drawLLM(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });

    const image = svgCreate('image');
    svgAttr(image, {
      width: 55,
      height: 30,
      x: cx - 55 / 2,
      y: cy - 30 / 2,
      href: LLM,
    });

    svgAppend(group, circle);
    svgAppend(group, image);

    return svgAppend(parentGfx, group);
  }

  private drawPromptVariable(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });

    const image = svgCreate('image');
    svgAttr(image, {
      width: 55,
      height: 30,
      x: cx - 55 / 2,
      y: cy - 30 / 2,
      href: PROMPT_VARIABLE,
    });

    svgAppend(group, circle);
    svgAppend(group, image);

    return svgAppend(parentGfx, group);
  }

  private drawScheduler(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const group = svgCreate('g');

    const scale = height / 36;
    const offsetX = (width - 45 * scale) / 2;
    const offsetY = 0;

    svgAttr(group, {
      transform: `translate(${offsetX}, ${offsetY}) scale(${scale})`,
    });

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: 23,
      cy: 18,
      r: 17.25,
      fill: 'white',
      stroke: color,
      'stroke-width': 1.5,
    });

    const circle1 = svgCreate('circle');
    svgAttr(circle1, {
      cx: 23,
      cy: 18,
      r: 10.75,
      fill: 'none',
      stroke: color,
      'stroke-width': 1.5,
    });

    const rawPaths = [
      'M23 7.5V11',
      'M23 24.5V28',
      'M28.0625 8.8374L26.3339 11.8808',
      'M19.667 23.6194L17.9384 26.6628',
      'M32.0195 12.8794L28.9399 14.5425',
      'M17.0605 20.9575L13.9809 22.6206',
      'M33.2461 18.0415L29.7475 17.942',
      'M16.2529 17.5581L12.7543 17.4586',
      'M31.8281 22.9595L28.8139 21.1807',
      'M17.1875 14.3193L14.1732 12.5405',
      'M28.4424 26.4358L26.584 23.4699',
      'M19.416 12.0303L17.5576 9.06441',
      'M25.2222 12L23 18H28',
    ];

    const paths = rawPaths.map((d) => {
      const p = svgCreate('path');
      svgAttr(p, { d, stroke: color, fill: 'none' });
      return p;
    });

    svgAppend(group, circle);
    svgAppend(group, circle1);
    paths.forEach((p) => svgAppend(group, p));

    return svgAppend(parentGfx, group);
  }

  private drawSqlQuery(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });

    const image = svgCreate('image');
    svgAttr(image, {
      width: 55,
      height: 30,
      x: cx - 55 / 2,
      y: cy - 30 / 2,
      href: SQL_QUERY,
    });

    svgAppend(group, circle);
    svgAppend(group, image);

    return svgAppend(parentGfx, group);
  }

  private drawVector(parentGfx, element) {
    const color = element.color ?? 'black';
    const width = element.width;
    const height = element.height;

    const cx = width / 2;
    const cy = height / 2;

    const group = svgCreate('g');

    const circle = svgCreate('circle');
    svgAttr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4),
      fill: 'white',
      stroke: color,
      strokeWidth: 2,
    });

    const image = svgCreate('image');
    svgAttr(image, {
      width: 55,
      height: 30,
      x: cx - 55 / 2,
      y: cy - 30 / 2,
      href: VECTOR,
    });

    svgAppend(group, circle);
    svgAppend(group, image);

    return svgAppend(parentGfx, group);
  }

  private drawAgenticFlow(parentGfx, element) {
    const icon = svgCreate('image', {
      x: 5,
      y: 5,
      width: 80,
      height: 80,
      href: '../../../../../assets/images/bpmn-agentic-flow.svg',
    });

    return svgAppend(parentGfx, icon);
  }

  private drawImage(parentGfx, element, image) {
    const icon = svgCreate('image', {
      x: 5,
      y: 5,
      width: 80,
      height: 80,
      href: image, // <== Replace this with your SVG URL or data URI
    });

    return svgAppend(parentGfx, icon);
  }

  readonly formatText = (input: string, maxLength: number): string[] => {
    input = (input || '').trim().replace(/\s+/g, ' '); // Clean spaces

    if (input.length <= maxLength) return [input]; // No need to wrap

    const midIndex = Math.floor(input.length / 2); // Find middle index
    let spaceIndexBefore = input.lastIndexOf(' ', midIndex); // Space before mid
    let spaceIndexAfter = input.indexOf(' ', midIndex); // Space after mid

    let breakIndex;
    if (
      spaceIndexBefore !== -1 &&
      spaceIndexBefore >= midIndex - maxLength / 2
    ) {
      breakIndex = spaceIndexBefore; // Prefer break before mid
    } else if (spaceIndexAfter !== -1) {
      breakIndex = spaceIndexAfter; // Otherwise, break after mid
    } else {
      breakIndex = midIndex; // No space found, force break at mid
    }

    return [
      input.substring(0, breakIndex).trim(),
      input.substring(breakIndex).trim(), // Ensure no characters are lost
    ];
  };

  private drawIntermediateEvent = (parentGfx, element) => {
    const style = getElementStyle(element);
    const outer = this.drawEvent(parentGfx, element, style);

    /* inner */
    this.drawCircle(
      parentGfx,
      element.width,
      element.height,
      INNER_OUTER_DIST,
      style
    );

    this.renderEventContent(element, parentGfx);

    return outer;
  };
  private drawSubProcess = (parentGfx, element, attrs) => {
    const style = getElementStyle(element);

    if (element.color && element.color !== 'none') {
      style.fill = element.color;
      style.stroke = element.color;
    }

    const rectWidth = element.width;
    const rectHeight = element.height;

    // Draw the main rectangle
    const rect = this.drawRect(parentGfx, rectWidth, rectHeight, 10, {
      fill: style.fill,
      stroke: style.stroke,
      strokeWidth: style.strokeWidth || 2,
      fillOpacity: style.fillOpacity,
    });

    // Create a text element
    const text = svgCreate('text');

    // Get font properties from element's business object or use defaults
    const bo = element.businessObject;
    const fontFamily = bo?.fontFamily || element.fontFamily || 'Museo Sans';
    const fontSize = bo?.fontSize || element.fontSize || '13px';
    const fontColor =
      bo?.fontColor ||
      element.fontColor ||
      (!element.color || !element.color.trim()
        ? 'black'
        : this.isColorDark(element.color)
        ? 'white'
        : 'black');
    const fontWeight = bo?.fontBold || element.fontBold ? 'bold' : '450';
    const fontStyle =
      bo?.fontItalic || element.fontItalic ? 'italic' : 'normal';
    const textDecoration =
      bo?.fontUnderline || element.fontUnderline ? 'underline' : 'none';

    svgAttr(text, {
      x: rectWidth / 2,
      y:
        element?.props?.FriendlyName.length > 12
          ? rectHeight / 2.5
          : rectHeight / 2,
      fill: fontColor,
      'text-anchor': 'middle',
      'dominant-baseline': 'middle',
      'font-size': fontSize,
      'font-weight': fontWeight,
      'font-family': fontFamily,
      'font-style': fontStyle,
      'text-decoration': textDecoration,
      'pointer-events': 'none',
    });

    // Get FriendlyName safely
    const friendlyName =
      element?.props?.FriendlyName ||
      this.isAiFlow('Agentic Flow') ||
      'Subprocess';
    const lines = this.formatText(friendlyName, 12);

    // Append each line to the text element
    lines.forEach((line, index) => {
      const tspan = svgCreate('tspan');
      tspan.textContent = line;
      svgAttr(tspan, {
        x: rectWidth / 2,
        dy: index === 0 ? 0 : '1.2em',
      });
      text.appendChild(tspan);
    });

    // Append text to parent graphics
    svgAppend(parentGfx, text);

    // Draw a smaller box for the icon
    const iconBoxSize = 15;
    const iconBoxX = (rectWidth - iconBoxSize) / 2;
    const iconBoxY = rectHeight - iconBoxSize - 8;

    const defaultStroke = 'black';
    const color = element.color?.trim();
    let strokeColor = defaultStroke;

    if (color) {
      strokeColor = this.isColorDark(color) ? 'white' : 'black';
    }

    this.drawRect(parentGfx, iconBoxSize, iconBoxSize, 0, {
      //fill: element.color==='black'?'white':'black',
      stroke: strokeColor,
      strokeWidth: 1,
      fillOpacity: 1,
      x: iconBoxX,
      y: iconBoxY,
    });

    // Position the parallel gateway icon
    const pathData = this.pathMap.getScaledPath('GATEWAY_PARALLEL', {
      xScaleFactor: 0.15,
      yScaleFactor: 0.15,
      containerWidth: rectWidth,
      containerHeight: rectHeight,
      position: {
        mx: 0.49,
        my: 0.73,
      },
    });

    // Draw the gateway inside the square
    this.drawPath(parentGfx, pathData, {
      strokeWidth: 1,
      fill: style.stroke,
      stroke: style.stroke,
    });

    // Render additional event content
    this.renderEventContent(element, parentGfx);

    return rect;
  };

  private isColorDark(color: string): boolean {
    let r, g, b;

    // Check if the color is in hex format
    if (color.startsWith('#')) {
      // Convert hex to RGB
      const hex = color.replace('#', '');
      if (hex.length === 3) {
        // Expand shorthand hex (e.g., #000 -> #000000)
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      }
    }
    // Check if the color is in RGB format
    else if (color.startsWith('rgb')) {
      const rgbValues = color.match(/\d+/g); // Extract numbers
      if (rgbValues) {
        r = parseInt(rgbValues[0], 10);
        g = parseInt(rgbValues[1], 10);
        b = parseInt(rgbValues[2], 10);
      }
    }

    if (r === undefined || g === undefined || b === undefined) {
      return false; // Default to false if color parsing fails
    }

    // Calculate brightness (perceived luminance)
    const brightness = r * 0.299 + g * 0.587 + b * 0.114;

    // If brightness is below a threshold, consider it dark
    return brightness < 128;
  }

  private drawPool = (parentGfx, element) => {
    const { fill, stroke } = getElementStyle(element);
    const attrs = {
      fillOpacity: DEFAULT_FILL_OPACITY,
      fill: fill || 'none',
      stroke,
    };

    const lane = this.drawLane(parentGfx, element, attrs);

    const expandedPool = isExpanded(element);

    if (expandedPool) {
      this.drawLine(
        parentGfx,
        [
          { x: 30, y: 0 },
          { x: 30, y: element.height },
        ],
        {
          stroke,
        }
      );
      const text = getSemantic(element).name;
      this.renderLaneLabel(parentGfx, text, element);
    } else {
      // Collapsed pool draw text inline
      const text2 = getSemantic(element).name;
      this.renderLabel(parentGfx, text2, {
        box: element,
        align: 'center-middle',
        style: {
          fill: stroke,
        },
      });
    }

    return lane;
  };

  private drawLane = (parentGfx, element, attrs) => {
    const { fill, stroke, fillOpacity } = getElementStyle(element);
    const rect = this.drawRect(
      parentGfx,
      element.width,
      element.height,
      0,
      assign(
        {
          fill: fill || 'none',
          fillOpacity,
          stroke,
        },
        attrs
      )
    );

    const semantic = getSemantic(element);

    if (semantic.$type === 'bpmn:Lane') {
      const text = semantic.name;
      this.renderLaneLabel(parentGfx, text, element);
    }

    return rect;
  };

  private drawExclusiveGateway = (parentGfx, element) => {
    const style = getElementStyle(element);
    const defaultStroke = 'black';
    const color = element.color?.trim();
    let strokeColor: string;

    if (color) {
      strokeColor = this.isColorDark(color) ? 'white' : 'black';
    } else {
      strokeColor = defaultStroke;
    }
    if (element.color && element.color !== 'none') {
      style.fill = element.color;
      style.stroke = strokeColor;
    }
    const diamond = this.drawDiamond(
      parentGfx,
      element.width,
      element.height,
      style
    );
    const { stroke, strokeWidth } = style;
    const pathData = this.pathMap.getScaledPath('GATEWAY_EXCLUSIVE', {
      xScaleFactor: 0.4,
      yScaleFactor: 0.4,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.32,
        my: 0.3,
      },
    });

    if (getDi(element).isMarkerVisible) {
      this.drawPath(parentGfx, pathData, { fill: stroke, stroke, strokeWidth });
    }

    return diamond;
  };

  private drawSequenceFlow = (parentGfx, element) => {
    const pathData = this.createPathFromConnection(element);
    const { fill, stroke } = getElementStyle(element);

    const attrs = {
      strokeLinejoin: 'round',
      markerEnd: this.marker('sequenceflow-end', fill, stroke),
      stroke,
    };

    const path = this.drawPath(parentGfx, pathData, attrs);

    const sequenceFlow = getSemantic(element);

    let source;

    if (element.source) {
      source = element.source.businessObject;

      // conditional flow marker
      if (
        sequenceFlow.conditionExpression &&
        source.$instanceOf('bpmn:Activity')
      ) {
        svgAttr(path, {
          markerStart: this.marker('conditional-flow-marker', fill, stroke),
        });
      }

      // default marker
      if (
        source.default &&
        (source.$instanceOf('bpmn:Gateway') ||
          source.$instanceOf('bpmn:Activity')) &&
        source.default === sequenceFlow
      ) {
        svgAttr(path, {
          markerStart: this.marker(
            'conditional-default-flow-marker',
            fill,
            stroke
          ),
        });
      }
    }

    return path;
  };

  private drawDottedFlow = (parentGfx, element) => {
    const pathData = this.createPathFromConnection(element);
    const { fill, stroke } = getElementStyle(element);

    const attrs = {
      strokeLinejoin: 'round',
      markerEnd: this.marker('sequenceflow-end', fill, stroke),
      stroke,
      strokeDasharray: 5.5,
    };

    const path = this.drawPath(parentGfx, pathData, attrs);

    const sequenceFlow = getSemantic(element);

    let source;

    if (element.source) {
      source = element.source.businessObject;

      // conditional flow marker
      if (
        sequenceFlow.conditionExpression &&
        source.$instanceOf('bpmn:Activity')
      ) {
        svgAttr(path, {
          markerStart: this.marker('conditional-flow-marker', fill, stroke),
        });
      }

      // default marker
      if (
        source.default &&
        (source.$instanceOf('bpmn:Gateway') ||
          source.$instanceOf('bpmn:Activity')) &&
        source.default === sequenceFlow
      ) {
        svgAttr(path, {
          markerStart: this.marker(
            'conditional-default-flow-marker',
            fill,
            stroke
          ),
        });
      }
    }

    return path;
  };

  private drawAssociation = (parentGfx, element, attrs) => {
    const style = getElementStyle(element);
    const { fill, stroke } = style;
    const semantic = getSemantic(element);

    attrs = assign(style, attrs || {});

    if (
      semantic.associationDirection === 'One' ||
      semantic.associationDirection === 'Both'
    ) {
      attrs.markerEnd = this.marker('association-end', fill, stroke);
    }

    if (semantic.associationDirection === 'Both') {
      attrs.markerStart = this.marker('association-start', fill, stroke);
    }

    return this.drawLine(parentGfx, element.waypoints, attrs);
  };

  private drawTextAnnotation = (parentGfx, element) => {
    const style = {
      fill: 'none',
      stroke: 'none',
    };

    const textElement = this.drawRect(
      parentGfx,
      element.width,
      element.height,
      0,
      0,
      style
    );

    const textPathData = this.pathMap.getScaledPath('TEXT_ANNOTATION', {
      xScaleFactor: 1,
      yScaleFactor: 1,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.0,
        my: 0.0,
      },
    });
    const { stroke } = getElementStyle(element);
    this.drawPath(parentGfx, textPathData, {
      stroke,
    });

    const text = getSemantic(element).text || '';
    this.renderLabel(parentGfx, text, {
      box: element,
      align: 'left-top',
      padding: 5,
      style: {
        fill: stroke,
        fontSize: '13px', // Increase the font size here (adjust the value as needed)
        fontFamily: 'Museo Sans',
        fontWeight: '500', // Set font weight to 500
      },
    });

    return textElement;
  };

  private isCustom(element) {
    return element && /custom:/.test(element.type);
  }

  private isAiFlow(type) {
    if (location.pathname?.includes('ai-flow')) {
      return type;
    }
    return undefined;
  }
}
