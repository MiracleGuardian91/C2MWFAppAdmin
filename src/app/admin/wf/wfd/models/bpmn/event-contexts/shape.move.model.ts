import { Dimension, Point, DiagramEl } from "..";

export type ShapeMoveContext = {
  shape: DiagramEl,
  delta: Point,
  hints: {recurse: boolean, layout: boolean},
  newParent: DiagramEl,
  newParentIndex: number,
  oldBounds: Point & Dimension,
  oldParent: DiagramEl,
  oldParentIndex: number,
};