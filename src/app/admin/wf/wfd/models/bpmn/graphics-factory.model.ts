import { DiagramEl, ElementType } from "./element.model";

export interface GraphicsFactory {
  create: (type: ElementType, element: DiagramEl, parentIndex?: number) => any;
  drawConnection: (visual: any, element: DiagramEl) => any;
  drawShape: (visual: any, element: DiagramEl) => any;
  // getConnectionPath: (waypoints: Waypoints)
  getShapePath: (element: DiagramEl) => string;
  remove: (element: DiagramEl) => void;
  update: (type: ElementType, element: DiagramEl, gfx?: any) => void;
  updateContainments: (elements: DiagramEl[]) => void;
}