import { DiagramEl, ElementType } from "./element.model";

export interface Moddle {
  factory: any;
  ids: any;
  properties: any;
  registry: any;
  typeCache: {
    [key in ElementType]: {
      name: string;
      hasType: (element: DiagramEl, type?: ElementType) => boolean;
    }
  }
}