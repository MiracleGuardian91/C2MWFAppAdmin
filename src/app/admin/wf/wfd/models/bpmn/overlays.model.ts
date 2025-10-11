import { DiagramEl, ElementType } from "./element.model";

export interface Overlays {
  add: (element: DiagramEl, type: ElementType, overlay?: any) => string;
  remove: (id: string) => void;
  show: () => void;
  hide: () => void;
  clear: () => void;
}