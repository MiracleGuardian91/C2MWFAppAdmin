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
  private registry: ElementRegistry;
  public eventBus: EventBus;
  public commandStack: any;
  private palette: any;
  private readonly labelEditing: any;
  constructor(private msg: MessageService) {
    this.bpmnJS = new CustomModeler({
      // keyboard: {bindTo: document},
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

  /**
   * Manually fix overlapping connections
   */
  public fixOverlappingConnections(): void {
    // This will be called by the ConnectionOverlapModule when needed
    // The actual implementation is in the custom module
  }

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

  // Font control methods
  public applyFontFamily(element: DiagramEl, fontFamily: string): void {
    if (!element) return;

    // Get current font properties to preserve them
    const currentProps = this.getCurrentFontProperties(element);

    // Update all font properties together
    this.modeling.updateProperties(element, {
      fontFamily: fontFamily,
      fontSize: currentProps.fontSize,
      fontColor: currentProps.fontColor,
    });

    // Apply font family to SVG text elements
    this.updateTextElements(element, 'font-family', fontFamily);
  }

  public applyFontSize(element: DiagramEl, fontSize: string): void {
    if (!element) return;

    // Get current font properties to preserve them
    const currentProps = this.getCurrentFontProperties(element);

    // Update all font properties together
    this.modeling.updateProperties(element, {
      fontFamily: currentProps.fontFamily,
      fontSize: fontSize,
      fontColor: currentProps.fontColor,
    });

    // Apply font size to SVG text elements
    this.updateTextElements(element, 'font-size', fontSize);
  }

  public applyFontColor(element: DiagramEl, fontColor: string): void {
    if (!element) return;

    // Get current font properties to preserve them
    const currentProps = this.getCurrentFontProperties(element);

    // Update all font properties together
    this.modeling.updateProperties(element, {
      fontFamily: currentProps.fontFamily,
      fontSize: currentProps.fontSize,
      fontColor: fontColor,
    });

    // Apply font color to SVG text elements
    this.updateTextElements(element, 'fill', fontColor);
  }

  // Helper method to get current font properties from element
  private getCurrentFontProperties(element: DiagramEl): {
    fontFamily: string;
    fontSize: string;
    fontColor: string;
  } {
    // Get current properties from the element's business object
    const bo = element.businessObject;
    const currentFontFamily = bo?.fontFamily || element.fontFamily || 'Arial';
    const currentFontSize = bo?.fontSize || element.fontSize || '14px';
    const currentFontColor = bo?.fontColor || element.fontColor || '#000000';

    return {
      fontFamily: currentFontFamily,
      fontSize: currentFontSize,
      fontColor: currentFontColor,
    };
  }

  // Method to apply all font properties at once
  public applyAllFontProperties(
    element: DiagramEl,
    fontFamily: string,
    fontSize: string,
    fontColor: string
  ): void {
    if (!element) return;

    // Update all font properties together
    this.modeling.updateProperties(element, {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontColor: fontColor,
    });

    // Apply all properties to SVG text elements
    this.updateTextElements(element, 'font-family', fontFamily);
    this.updateTextElements(element, 'font-size', fontSize);
    this.updateTextElements(element, 'fill', fontColor);
  }

  private updateTextElements(
    element: DiagramEl,
    attribute: string,
    value: string
  ): void {
    // Get the SVG element for this BPMN element using the registry
    const gfx = this.registry.getGraphics(element.id);
    if (!gfx) return;

    // Find all text elements within the SVG element
    const textElements = gfx.querySelectorAll('text');

    textElements.forEach((textEl: SVGTextElement) => {
      textEl.setAttribute(attribute, value);
    });

    // Also update tspan elements
    const tspanElements = gfx.querySelectorAll('tspan');
    tspanElements.forEach((tspanEl: SVGTSpanElement) => {
      tspanEl.setAttribute(attribute, value);
    });
  }

  public updateElementProperties(el: any, updated: any) {
    this.modeling.updateProperties(el, updated);
    if (isConnection(el) && updated.waypoints) {
      const flow = el as ConnectionShape;
      const waypoints = updated.waypoints as Waypoint[];

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

      if (!isCustomConnection(el)) {
        const layout =
          middle.length === 0 ? {} : { connectionStart, connectionEnd };
        this.modeling.layoutConnection(flow, layout);
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

  // Method to get graphics element for font property loading
  public getGraphics(element: any): SVGElement | null {
    if (!this.registry) return null;
    return this.registry.getGraphics(element.id);
  }
}
