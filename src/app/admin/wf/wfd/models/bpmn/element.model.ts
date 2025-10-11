import { Stage, State, Trigger, TriggerCondition, Workflow } from '../wf.model';

export type DiagramEl =
  | WorkflowShape
  | StageShape
  | SubProcessShape
  | StartStateShape
  | StateShape
  | EndStateShape
  | TriggerExtensionShape
  | GatewayShape
  | LabelShape
  | TriggerConnection
  | TriggerConditionConnection
  | AnnotationShape
  | AssociationConnection
  | API
  | DataSchema
  | HumanInLoop
  | LLM
  | PromptVariable
  | Scheduler
  | SqlQuery
  | Vector
  | DottedFlow;

export type DiagramParent = Shape | undefined;
export type DiagramLabel = Shape & { labelTarget?: DiagramEl };


// Base interface for elements
export interface ElementLike {
  id: string;
  businessObject?: any;
  [key: string]: any;
}

export interface Point {
  x: number;
  y: number;
}
export interface Element extends ElementLike {
  label?: Label;
  labels: Label[];
  parent?: Element;
  incoming: ConnectionShape[];
  outgoing: ConnectionShape[];
}

// Shape type for elements with positional attributes
export interface ShapeLike extends ElementLike {
  x: number;
  y: number;
  width: number;
  height: number;
  
}

export interface Shape extends ShapeLike, Element {
  isFrame?: boolean;
  children: Element[];
  host?: Shape;
  attachers: Shape[];
  waypoints?: Point[];
}

// Workflow related types
export type WorkflowShape = Shape & {
  type: ElementType.Pool;
  props: Workflow;
  parent: Root | undefined;
  children: StageShape[];
};

export type StageShape = Shape & {
  type: ElementType.Stage;
  props: Stage;
  parent: WorkflowShape;
  children: StateShapeType[];
};

export type GenericStateShape<T extends ElementType> = Shape & {
  type: T;
  props: State;
  parent: StageShape;
  children: null;
};

export type SubProcessShape = GenericStateShape<ElementType.SubProcess>;
export type StartStateShape = GenericStateShape<ElementType.StartState>;
export type StateShape = GenericStateShape<ElementType.State>;
export type EndStateShape = GenericStateShape<ElementType.EndState>;
export type API = GenericStateShape<ElementType.API>;
export type DataSchema = GenericStateShape<ElementType.DataSchema>;
export type HumanInLoop = GenericStateShape<ElementType.HumanInLoop>;
export type LLM = GenericStateShape<ElementType.LLM>;
export type PromptVariable = GenericStateShape<ElementType.PromptVariable>;
export type Scheduler = GenericStateShape<ElementType.Scheduler>;
export type SqlQuery = GenericStateShape<ElementType.SqlQuery>;
export type Vector = GenericStateShape<ElementType.Vector>;
export type DottedFlow = GenericStateShape<ElementType.DottedFlow>;

export type StateShapeType =
  | SubProcessShape
  | StartStateShape
  | StateShape
  | EndStateShape
  | API
  | DataSchema
  | HumanInLoop
  | LLM
  | PromptVariable
  | Scheduler
  | SqlQuery
  | Vector;

export type TriggerExtensionShape = Shape & {
  type: ElementType.TriggerExtension;
  props: Trigger;
  parent: StageShape;
  children: any[];
};

// Type for shapes that do not have props, like Gateway, Label, Annotation
export interface ProplessShape<T extends ElementType, Parent extends Shape> extends Shape {
  type: T;
  parent: Parent;
}

export type GatewayShape = ProplessShape<ElementType.Gateway, any>;
export type LabelShape = ProplessShape<ElementType.Label, any>;
export type AnnotationShape = ProplessShape<ElementType.Annotation, any>;

// Connection related types
export interface ConnectionLike extends ElementLike {
  waypoints: Point[];
}

export interface Connection extends ConnectionLike, Element {
  source?: Element;
  target?: Element;
}

export type ConnectionForm<T extends ElementType, Data, Parent> = Connection & {
  type: T;
  props: Data;
  source: Parent;
  target: Parent;
};

export type TriggerConnection = ConnectionForm<
  ElementType.Trigger,
  Trigger,
  StateShapeType | GatewayShape | TriggerExtensionShape
>;
export type TriggerConditionConnection = ConnectionForm<
  ElementType.Trigger,
  TriggerCondition,
  GatewayShape
>;
export type AssociationConnection = ConnectionForm<
  ElementType.Association,
  undefined,
  any
>;

export type ConnectionShapeWithProps =
  | TriggerConnection
  | TriggerConditionConnection;

export type ConnectionShape = ConnectionShapeWithProps | AssociationConnection;

export type RootLike = ElementLike & {
  isImplicit?: boolean;
};

export interface Root extends RootLike, Element {}

export interface LabelLike extends ShapeLike {}

export interface Label extends LabelLike, Shape {
  labelTarget?: Element;
}

export type ParentLike = ShapeLike | RootLike;
export type Parent = Shape | Root;

export type Position = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export interface Waypoint extends Point {
  original?: Point;
}

export enum ElementType {
  Process = 'bpmn:Process',
  Root = 'bpmn:Collaboration',
  Pool = 'bpmn:Participant',
  Stage = 'bpmn:Lane',
  StartState = 'bpmn:StartEvent',
  EndState = 'bpmn:EndEvent',
  State = 'bpmn:Task',
  Gateway = 'bpmn:ExclusiveGateway',
  Trigger = 'bpmn:SequenceFlow',
  TriggerExtension = 'bpmn:IntermediateCatchEvent',
  Association = 'bpmn:Association',
  Annotation = 'bpmn:TextAnnotation',
  SubProcess = 'bpmn:SubProcess',
  Label = 'label',
  TestElectric = 'bpmn:TestElectric',
  DottedFlow = 'custom:DottedFlow',
  API = 'custom:API',
  DataSchema = 'custom:DataSchema',
  HumanInLoop = 'custom:HumanInLoop',
  LLM = 'custom:LLM',
  PromptVariable = 'custom:PromptVariable',
  Scheduler = 'custom:Scheduler',
  SqlQuery = 'custom:SqlQuery',
  Vector = 'custom:Vector',
  AgenticFlow = 'bpmn:AgenticFlow',
}

export enum EventDef {
  Timer = 'bpmn:TimerEventDefinition',
  Notify = 'bpmn:MessageEventDefinition',
  System = 'bpmn:ConditionalEventDefinition',
}

export type ElementStyle = {
  fill: string;
  stroke: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'square' | 'butt' | 'unset';
  strokeDasharray?: string | 'none';
  strokeLinejoin?: 'bevel' | 'miter' | 'round' | 'unset';
  fillOpacity?: number;
  transform?: string;
  markerStart?: string;
  markerEnd?: string;
};
export type Dimension = {
  width: number;
  height: number;
};

export type BusinessObject = {
  $type: ElementType;
  id: string;
  name?: string;
  text?: string;
  di?: any;
  eventDefinitions?: ModdleElement[];
  isForCompensation?: boolean;
  isInterrupting?: boolean;
  associationDirection?: 'One' | 'Both';
  participantMultiplicity?: any;
};

type ModdleElement = {
  $type: EventDef;
  id: string;
  $attrs: any;
  $parent: ModdleElement;
};
