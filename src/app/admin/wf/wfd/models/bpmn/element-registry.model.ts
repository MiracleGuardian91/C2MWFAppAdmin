import { DiagramEl } from "./element.model";

export interface ElementRegistry {
  readonly _elements: any;
  readonly _eventBus: any;
  add: (element: DiagramEl, gfx: SVGElement, secondaryGfx: SVGElement) => void;
  remove: (element: DiagramEl) => void;
  updateId: (element: DiagramEl, newId: string) => void;
  get: (filter: string) => DiagramEl | undefined;
  getAll: () => DiagramEl[];
  filter: (fn: (element: DiagramEl, gfx: SVGElement) => boolean) => DiagramEl[];
  find: (fn: (element: DiagramEl, gfx: SVGElement) => boolean) => DiagramEl | undefined;
  forEach: (fn: (element: DiagramEl, gfx: SVGElement) => void) => void;
  updateGraphics: (filter: string, gfx: SVGElement, secondary?: boolean) => SVGElement;
  getGraphics: (filter: string, secondary?: boolean) => SVGElement;
}