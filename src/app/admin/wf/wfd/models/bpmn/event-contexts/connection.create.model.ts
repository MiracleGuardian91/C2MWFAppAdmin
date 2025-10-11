import {  DiagramEl, TriggerConditionConnection, TriggerConnection } from "../element.model";

export type ConnectionCreate = {
  connection: TriggerConnection | TriggerConditionConnection;
  source: DiagramEl;
  target: DiagramEl;
}