import { Injectable } from '@angular/core';
import { MessageService } from '@app/core';
import { getMid } from 'diagram-js/lib/layout/LayoutUtil';
import { from, Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { customModules } from '../custom';
import { CustomContextPad } from '../custom/custom-context-pad';
import CustomModeler from '../custom/custom-modeler';

import {
  Canvas,
  ConnectionShape,
  DiagramEl,
  ElementFactory,
  ElementRegistry,
  ElementStyle,
  ElementType,
  EventBus,
  EventType,
  LabelShape,
  Modeler,
  Modeling,
  ShapeAttributes,
  Waypoint,
  WorkflowShape,
  Parent,
  Shape,
} from '../models/bpmn';
import { ElementCoordinates } from '../models/wf.model';
import { isConnection, isCustomConnection } from '../util/bpmn';

import customElements from './custom-elements.json';

const t = ElementType;

@Injectable({ providedIn: 'root' })
export class BpmnService {
  private bpmnJS: Modeler;
  private modeling: Modeling<
    ConnectionShape,
    DiagramEl,
    LabelShape,
    Parent,
    Shape
  >;
  private canvas: Canvas;
  private factory: ElementFactory;
  public registry: ElementRegistry;
  public eventBus: EventBus;
  public commandStack: any;
  private palette: any;
  private readonly labelEditing: any;
  constructor(private msg: MessageService) {
    this.bpmnJS = new CustomModeler({
      textRenderer: {
        defaultStyle: {
          fontSize: '14px',
        },
      },
      additionalModules: [customModules],
    });

    this.bpmnJS.addCustomElements(customElements);
    const pad = this.bpmnJS.get('contextPadProvider') as CustomContextPad<
      ConnectionShape,
      DiagramEl,
      LabelShape,
      Parent,
      Shape
    >;
    pad.msg = this.msg;
    this.modeling = this.bpmnJS.get('modeling');
    this.canvas = this.bpmnJS.get('canvas');
    this.factory = this.bpmnJS.get('elementFactory');
    this.registry = this.bpmnJS.get('elementRegistry');
    this.eventBus = this.bpmnJS.get('eventBus');
    this.commandStack = this.bpmnJS.get('commandStack');
    this.palette = this.bpmnJS.get('palette');
    this.labelEditing = this.bpmnJS.get('labelEditingProvider');
  }

  get allElements() {
    return this.registry.getAll();
  }

  get paletteIsOpen() {
    return this.palette.isOpen();
  }

  public importDiagram(
    name: string,
    processFriendlyname: string,
    attachTo: HTMLElement,
    dataToDiagram: Function,
    readOnly = false,
    flowType = 'wfd'
  ) {
    if (this.bpmnJS) {
      this.bpmnJS.clear();
    }

    return from(
      this.bpmnJS.importXML(this._baseXML(name, processFriendlyname))
    ).pipe(
      delay(10),
      finalize(() => {
        this.bpmnJS.attachTo(attachTo);
        dataToDiagram();
        if (flowType != 'ai') {
          this.positionDiagram(name);
        }

        this.bpmnJS.get('readonly').readOnly(readOnly);
        this.bpmnJS.get('diagramInit').completeInit();

        this.commandStack.clear();
      })
    );
  }

  private positionDiagram(name: string) {
    const wf = this.getElement(name);
    this.canvas.viewbox({
      x: wf.x,
      y: wf.y,
      height: window.innerHeight,
      width: window.innerHeight,
    });
    this.canvas.scrollToElement(wf, { top: 50, right: 100 });
  }

  public togglePalette() {
    const el: HTMLDivElement = document.querySelector('.djs-palette');
    if (this.palette.isOpen()) {
      this.palette.close();
      el.style.visibility = 'hidden';
    } else {
      this.palette.open();
      el.style.visibility = 'visible';
    }
  }

  public getElement(id: string) {
    return this.registry.get(id);
  }

  public undo() {
    this.commandStack.undo();
  }

  public redo() {
    this.commandStack.redo();
  }

  public fixOverlappingConnections(): void {}

  public commandStackLength() {
    return this.commandStack._stack.length ?? -1;
  }

  public clearCommandStack() {
    this.commandStack.clear();
  }

  public includesUpdateProperties() {
    return this.commandStack._stack?.some(
      (c) => c.command === 'element.updateProperties'
    );
  }

  public countUpdateProperties() {
    return this.commandStack._stack.filter(
      (c) => c.command === 'element.updateProperties'
    ).length;
  }

  public listenTo<T = any>(event: EventType | EventType[]) {
    return new Observable<T>((observer) => {
      this.eventBus.on(typeof event === 'string' ? [event] : event, (e: T) =>
        observer.next(e)
      );
    });
  }

  public setElementColor(element: DiagramEl, color: ElementStyle) {
    this.modeling.setColor([element], color);
  }

  updateLabel(element: DiagramEl, name: string | null) {
    this.labelEditing.update(element, name);
  }

  public applyFontFamily(element: DiagramEl, fontFamily: string): void {
    if (!element) return;

    const currentProps = this.getCurrentFontProperties(element);

    this.modeling.updateProperties(element, {
      fontFamily: fontFamily,
      fontSize: currentProps.fontSize,
      fontColor: currentProps.fontColor,
    });

    this.updateTextElements(element, 'font-family', fontFamily);
  }

  public applyFontSize(element: DiagramEl, fontSize: string): void {
    if (!element) return;

    const currentProps = this.getCurrentFontProperties(element);

    this.modeling.updateProperties(element, {
      fontFamily: currentProps.fontFamily,
      fontSize: fontSize,
      fontColor: currentProps.fontColor,
    });

    this.updateTextElements(element, 'font-size', fontSize);
  }

  public applyFontColor(element: DiagramEl, fontColor: string): void {
    if (!element) return;

    const currentProps = this.getCurrentFontProperties(element);

    this.modeling.updateProperties(element, {
      fontFamily: currentProps.fontFamily,
      fontSize: currentProps.fontSize,
      fontColor: fontColor,
    });

    this.updateTextElements(element, 'fill', fontColor);
  }

  private getCurrentFontProperties(element: DiagramEl): {
    fontFamily: string;
    fontSize: string;
    fontColor: string;
  } {
    const bo = element.businessObject;
    const currentFontFamily =
      bo?.fontFamily || element.fontFamily || 'Museo Sans';
    const currentFontSize = bo?.fontSize || element.fontSize || '13px';
    const currentFontColor = bo?.fontColor || element.fontColor || '#000000';

    return {
      fontFamily: currentFontFamily,
      fontSize: currentFontSize,
      fontColor: currentFontColor,
    };
  }

  public applyAllElementProperties(
    element: DiagramEl,
    fontFamily: string,
    fontSize: string,
    fontColor: string,
    fontBold: boolean = false,
    fontItalic: boolean = false,
    fontUnderline: boolean = false,
    fillColor: string = '#ffffff'
  ): void {
    if (!element) return;

    this.modeling.updateProperties(element, {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontColor: fontColor,
      fontBold: fontBold,
      fontItalic: fontItalic,
      fontUnderline: fontUnderline,
      color: fillColor,
    });

    this.eventBus.fire('element.changed', { element });
    const labelShape: any = (element as any).label;
    if (labelShape) {
      this.eventBus.fire('element.changed', { element: labelShape });
    }
  }

  public applyFillColorOnly(element: DiagramEl, fillColor: string): void {
    if (!element) return;

    this.modeling.updateProperties(element, {
      color: fillColor,
    });

    const bo = element.businessObject;

    if (bo) {
      bo.color = fillColor;
    }

    element.color = fillColor;

    this.updateElementFillColor(element, fillColor);

    this.eventBus.fire('element.changed', { element });
  }

  public applyLineColor(element: DiagramEl, lineColor: string): void {
    if (!element) return;

    this.modeling.updateProperties(element, {
      lineColor: lineColor,
      stroke: lineColor,
    });

    const bo = element.businessObject;

    if (bo) {
      bo.lineColor = lineColor;
      bo.stroke = lineColor;
    }

    element.lineColor = lineColor;
    element.stroke = lineColor;

    this.updateElementLineColor(element, lineColor);

    this.eventBus.fire('element.changed', { element });
  }

  public applyLineWidth(element: DiagramEl, lineWidth: number): void {
    if (!element) return;

    const width = Number(lineWidth) || 2;

    this.modeling.updateProperties(element, {
      lineWidth: width,
      strokeWidth: width,
    });

    const bo = element.businessObject as any;
    if (bo) {
      bo.lineWidth = width;
      bo.strokeWidth = width;
    }

    (element as any).lineWidth = width;
    (element as any).strokeWidth = width;

    this.updateElementLineWidth(element, width);
    this.eventBus.fire('element.changed', { element });
  }

  private updateElementLineWidth(element: DiagramEl, lineWidth: number): void {
    const gfx = this.registry.getGraphics(element.id);
    if (!gfx) return;

    const pathElements = gfx.querySelectorAll('path');
    for (let i = 0; i < pathElements.length; i++) {
      const pathEl = pathElements[i];
      pathEl.setAttribute('stroke-width', String(lineWidth));
    }

    const lineElements = gfx.querySelectorAll('line');
    for (let i = 0; i < lineElements.length; i++) {
      const lineEl = lineElements[i];
      lineEl.setAttribute('stroke-width', String(lineWidth));
    }
  }

  private updateElementLineColor(element: DiagramEl, lineColor: string): void {
    const gfx = this.registry.getGraphics(element.id);
    if (!gfx) {
      console.log('No graphics found for element:', element.id);
      return;
    }

    // Update path elements (triggers are typically paths)
    const pathElements = gfx.querySelectorAll('path');
    for (let i = 0; i < pathElements.length; i++) {
      const pathEl = pathElements[i];
      pathEl.setAttribute('stroke', lineColor);
    }

    // Update line elements
    const lineElements = gfx.querySelectorAll('line');
    for (let i = 0; i < lineElements.length; i++) {
      const lineEl = lineElements[i];
      lineEl.setAttribute('stroke', lineColor);
    }

    // Update marker elements (arrow heads)
    const markerElements = gfx.querySelectorAll('marker path');
    for (let i = 0; i < markerElements.length; i++) {
      const markerEl = markerElements[i];
      markerEl.setAttribute('stroke', lineColor);
      markerEl.setAttribute('fill', lineColor);
    }
  }

  private updateElementFillColor(element: DiagramEl, fillColor: string): void {
    const gfx = this.registry.getGraphics(element.id);
    if (!gfx) {
      console.log('No graphics found for element:', element.id);
      return;
    }

    const rectElements = gfx.querySelectorAll('rect');
    for (let i = 0; i < rectElements.length; i++) {
      const rectEl = rectElements[i];
      rectEl.setAttribute('fill', fillColor);
    }

    const pathElements = gfx.querySelectorAll('path');
    for (let i = 0; i < pathElements.length; i++) {
      const pathEl = pathElements[i];
      const d = pathEl.getAttribute('d');
      if (d && !d.includes('M') && !d.includes('L')) {
        pathEl.setAttribute('fill', fillColor);
      }
    }

    const circleElements = gfx.querySelectorAll('circle');
    for (let i = 0; i < circleElements.length; i++) {
      const circleEl = circleElements[i];
      console.log(
        'Updating circle element:',
        circleEl,
        'with fill:',
        fillColor
      );
      circleEl.setAttribute('fill', fillColor);
    }

    const allElements = gfx.querySelectorAll('*');
    for (let i = 0; i < allElements.length; i++) {
      const el = allElements[i];
      const tagName = el.tagName.toLowerCase();
      if (['rect', 'circle', 'ellipse', 'path'].includes(tagName)) {
        const currentFill = el.getAttribute('fill');
        console.log(`Element ${tagName} current fill:`, currentFill);
        if (currentFill !== 'none' && currentFill !== 'transparent') {
          el.setAttribute('fill', fillColor);
          console.log(`Updated ${tagName} fill to:`, fillColor);
        }
      }
    }
  }

  private updateTextElements(
    element: DiagramEl,
    attribute: string,
    value: string
  ): void {
    const gfx = this.registry.getGraphics(element.id);
    if (!gfx) return;

    const textElements = gfx.querySelectorAll('text');

    textElements.forEach((textEl: SVGTextElement) => {
      textEl.setAttribute(attribute, value);
    });

    const tspanElements = gfx.querySelectorAll('tspan');
    tspanElements.forEach((tspanEl: SVGTSpanElement) => {
      tspanEl.setAttribute(attribute, value);
    });
  }

  public updateElementProperties(el: any, updated: any) {
    if (isConnection(el)) {
      const existingLineType =
        (el as any).lineType ||
        (el.businessObject && (el.businessObject as any).lineType);

      if (updated.line_type && !updated.lineType) {
        updated.lineType = updated.line_type;
        delete updated.line_type;
      }

      if (existingLineType && !updated.lineType) {
        updated.lineType = existingLineType;
      }
    }

    this.modeling.updateProperties(el, updated);

    if (isConnection(el)) {
      const lineType = updated.lineType || (el as any).lineType;
      if (lineType) {
        (el as any).lineType = lineType;
        if (el.businessObject) {
          (el.businessObject as any).lineType = lineType;
        }
      }
    }

    if (isConnection(el) && updated.waypoints) {
      const flow = el as ConnectionShape;
      const waypoints = updated.waypoints as Waypoint[];
      const preservedLineType =
        (flow as any).lineType ||
        (flow.businessObject && (flow.businessObject as any).lineType);

      const connectionStart = getMid(flow.source);
      const connectionEnd = getMid(flow.target);
      const middle: Waypoint[] = waypoints.slice(1, waypoints.length - 1);
      const firstPoint = waypoints[0];
      const lastPoint = waypoints[waypoints.length - 1];
      if (firstPoint) {
        connectionStart.x = firstPoint.x;
        connectionStart.y = firstPoint.y;
      }
      if (lastPoint) {
        connectionEnd.x = lastPoint.x;
        connectionEnd.y = lastPoint.y;
      }

      this.modeling.updateWaypoints(flow, [
        connectionStart,
        ...middle,
        connectionEnd,
      ]);

      if (preservedLineType) {
        (flow as any).lineType = preservedLineType;
        if (flow.businessObject) {
          (flow.businessObject as any).lineType = preservedLineType;
        }
      }

      if (!isCustomConnection(el)) {
        const lineType =
          preservedLineType ||
          (flow as any).lineType ||
          (flow.businessObject && (flow.businessObject as any).lineType);

        if (lineType === 'elbow') {
          if (preservedLineType) {
            (flow as any).lineType = preservedLineType;
            if (flow.businessObject) {
              (flow.businessObject as any).lineType = preservedLineType;
            }
          }
        } else {
          const layout =
            middle.length === 0 ? {} : { connectionStart, connectionEnd };
          this.modeling.layoutConnection(flow, layout);

          if (preservedLineType) {
            (flow as any).lineType = preservedLineType;
            if (flow.businessObject) {
              (flow.businessObject as any).lineType = preservedLineType;
            }
          }
        }
      }
    }
  }

  public connect(source: DiagramEl, target: any, connectType = t.Trigger) {
    return this.modeling.connect(source, target, { type: connectType });
  }

  public createParticipantShape(props: any, coords?: ElementCoordinates) {
    const pool = this.factory.createParticipantShape({
      isExpanded: true,
      props,
      ...coords,
    });

    const { x, y } = coords;
    this.modeling.createShape(pool, { x, y }, this.canvas.getRootElement());
    pool.x = x;
    pool.y = y;
    return pool;
  }

  public createShape(attrs: Partial<ShapeAttributes>, parent: DiagramEl) {
    const shape = this.modeling.createShape(
      attrs,
      { x: attrs.x, y: attrs.y },
      parent
    );
    shape.x = attrs.x;
    shape.y = attrs.y;
    if (attrs.width && attrs.height) {
      shape.width = attrs.width;
      shape.height = attrs.height;
    }
    this.updateElementProperties(shape, {});
    return shape;
  }

  public splitLane(pool: WorkflowShape, count: number) {
    return this.modeling.splitLane(pool, count);
  }

  public addLane(pool: WorkflowShape, attrs: any) {
    const type = t.Stage;
    const lane = this.createShape({ type, ...attrs }, pool);
    // this.modeling.addLane(lane, 'bottom');
    return lane;
  }

  public deleteElement(element: any) {
    if (Array.isArray(element)) {
      this.modeling.removeElements(element);
    } else {
      if (element.type === t.Trigger) {
        this.modeling.removeConnection(element);
      } else {
        this.modeling.removeShape(element);
      }
    }
  }

  public moveElements(
    shapes: DiagramEl[],
    delta: any,
    target?: DiagramEl,
    hints?: any
  ) {
    this.modeling.moveElements(shapes, delta, target, hints);
  }

  public layoutConnection(connection: any, layout?: any) {
    this.modeling.layoutConnection(connection, layout || {});
  }

  public updateConnectionWaypoints(connection: any, waypoints: Waypoint[]) {
    this.modeling.updateWaypoints(connection, waypoints);
  }

  public destroy() {
    this.bpmnJS.destroy();
  }
  public clear() {
    this.bpmnJS.clear();
  }

  private _baseXML(processName: string, friendlyName: string) {
    return `
      <?xml version="1.0" encoding="UTF-8"?>
      <bpmn:definitions 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" 
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
        xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" 
        xmlns:di="http://www.omg.org/spec/DD/20100524/DI" 
        id="Definitions_${processName}" 
        targetNamespace="http://bpmn.io/schema/bpmn" 
        exporter="bpmn-js (https://demo.bpmn.io)" 
        exporterVersion="18.2.0">
        <bpmn:process id="${processName}" isExecutable="false" name="${friendlyName}">
          
        </bpmn:process>
        <bpmndi:BPMNDiagram id="BPMNDiagram_${processName}">
          <bpmndi:BPMNPlane id="BPMNPlane_${processName}" bpmnElement="${processName}">
              <dc:Bounds x="156" y="81" width="36" height="36" />
            
            
          </bpmndi:BPMNPlane>
        </bpmndi:BPMNDiagram>
      </bpmn:definitions>
      `;
  }

  public getGraphics(element: any): SVGElement | null {
    if (!this.registry) return null;
    return this.registry.getGraphics(element.id);
  }

  // public restoreFontProperties(element: DiagramEl): void {
  //   if (!element) return;

  //   const bo = element.businessObject;
  //   const fontFamily = bo?.fontFamily || element.fontFamily;
  //   const fontSize = bo?.fontSize || element.fontSize;
  //   const fontColor = bo?.fontColor || element.fontColor;

  //   if (fontFamily || fontSize || fontColor) {
  //     setTimeout(() => {
  //       if (fontFamily) {
  //         this.updateTextElements(element, 'font-family', fontFamily);
  //       }
  //       if (fontSize) {
  //         this.updateTextElements(element, 'font-size', fontSize);
  //       }
  //       if (fontColor) {
  //         this.updateTextElements(element, 'fill', fontColor);
  //       }
  //     }, 50);
  //   }
  // }

  private isStateType(element: any): boolean {
    return (
      element &&
      [
        'bpmn:Task',
        'bpmn:StartEvent',
        'bpmn:EndEvent',
        'bpmn:SubProcess',
      ].includes(element.type)
    );
  }
}
