import { DiagramEl, Point, StageShape, WorkflowShape } from "../element.model";

export type ShapeCreateRule = {
  position: Point;
  shape: DiagramEl,
  source: undefined;
  target: WorkflowShape | StageShape;
}

export type ShapeCreateContext = {
  shape: DiagramEl;
}