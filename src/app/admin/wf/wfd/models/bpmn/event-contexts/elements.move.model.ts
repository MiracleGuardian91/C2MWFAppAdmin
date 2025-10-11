import { DiagramEl, Point } from "../element.model";

export type ElementsMoveRule = {
  delta: Point,
  position: Point,
  shapes: DiagramEl[],
  target: DiagramEl,
}