import AutoResize from 'diagram-js/lib/features/auto-resize/AutoResize';
import { DiagramEl, Dimension, ElementRegistry, ElementType, EventBus, Modeling, Point, ConnectionShape, Label, Parent, Shape } from '../models/bpmn';
import { CustomRules } from './custom-rules';

const t = ElementType;

export class CustomAutoResize<T extends ConnectionShape, U extends DiagramEl, V extends Label, W extends Parent, X extends Shape> extends AutoResize {
  
  constructor(
    eventBus: EventBus, 
    registry: ElementRegistry, 
    private modeling: Modeling<T, U, V, W, X>, 
    rules: CustomRules,
  ) {
    super(eventBus, registry, modeling, rules);
  }
    
  static $inject = [
    'eventBus',
    'elementRegistry',
    'modeling',
    'rules'
  ];

  resize(target: any, newBounds: Point & Dimension, hints: any) {
    if (target.type === t.Pool || target.type === t.Stage) {
      this.modeling.resizeLane(target, newBounds, null, hints);
    } else {
      this.modeling.resizeShape(target, newBounds, null, hints);
    }
  }
}