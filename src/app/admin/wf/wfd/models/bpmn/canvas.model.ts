import { DiagramEl, Dimension, Point, Position } from './element.model';

export interface Canvas {
  zoom: (newScale: string, center?: boolean) => number;
  getRootElement: () => DiagramEl;
  viewbox: (point?: Point & Dimension) => any;
  scrollToElement: (element: DiagramEl, padding?: Partial<Position>) => void;
}
