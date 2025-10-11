import { Share } from "@app/admin/BM/models";
import { IBaseObject } from "./base-object.model";

export interface IBMOG extends IBaseObject {
  CanvasType: CanvasType;
  LongDesc:   string;
  Parent:     string;
  BMOGID:     number;
  Share:      Share[];
  EnableTLCorner : EnableTLCorner;
}

export enum CanvasType {
  Admin = 'AdminView',
  Form = 'Form',
  User = 'UserView',
  View1 = 'View1',
  View2 = 'View2',
  View3 = 'View3',
  View4 = 'View4',
  View5 = 'View5',
  View6 = 'View6',
}

export enum EnableTLCorner {
  Yes = '1',
  No = '0',
}
export const canvasType: Record<string, CanvasType> = {
  'Admin View': CanvasType.Admin,
  'Form View': CanvasType.Form,
  'User View': CanvasType.User,
  'View 1': CanvasType.View1,
  'View 2': CanvasType.View2,
  'View 3': CanvasType.View3,
  'View 4': CanvasType.View4,
  'View 5': CanvasType.View5,
  'View 6': CanvasType.View6,
}