import { DiagramEl, Point, TriggerConditionConnection, TriggerConnection } from "../element.model";

export type ConnectionReconnectContext = {
  connection: TriggerConnection;
  oldSource: DiagramEl;
  newSource: DiagramEl;
  oldTarget: DiagramEl;
  newTarget: DiagramEl;
  dockingOrPoints: Point;
  hints: {docking: 'target' | 'source'};
};

export type ConnectionReconnectRule = {
  connection: TriggerConnection | TriggerConditionConnection;
  source: DiagramEl,
  target: DiagramEl;
}