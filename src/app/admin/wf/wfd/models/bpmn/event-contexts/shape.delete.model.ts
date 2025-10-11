import { DiagramEl } from "../element.model";

export type ShapeDeleteContext = {
  shape: DiagramEl;
}

export type ShapeDeleteRevertContext = {
  shape: DiagramEl,
  oldParent: DiagramEl,
  oldParentIndex: number,
  hints: any,
};