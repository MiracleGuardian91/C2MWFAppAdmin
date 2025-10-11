import { DiagramEl, TriggerConditionConnection, TriggerConnection } from "..";

export type ConnectionDeleteRevertContext = {
  connection: TriggerConnection | TriggerConditionConnection,
  hints: any,
  parent: DiagramEl,
  parentIndex: number,
  source: DiagramEl,
  target: DiagramEl,
}