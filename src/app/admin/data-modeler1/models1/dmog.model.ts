import { Share, StatusString } from "@app/admin/BM/models";
import { IBaseObject } from "./base-object.model";

export interface IDMOG extends IBaseObject {
  GUID:         string;
  DMOGID:       number;
  DisplayName:  string;
  IsCollapsed:  StatusString;
  DefCollapsed: StatusString;
  showHelp:     StatusString;
  LongDesc:     string;
  Parent:       string;
  Type:         DMOGType;
  Share:        Share[];
  LnkBmoDmogID: number;
  IsHidden:     StatusString;
  Children:     string[];
  Roles?:       {Key: string, Value: string}[];
  DMOGProps:string;
  PrntDmogIDs:string;
}

export enum DMOGType {
  Standard = 'Normal',
  Grid = 'Grid',
  CardGroup='CardGroup'
}


export interface OrderDmogItems {
  lnkDmogId: number;
  Guids: string;
  hasParent: boolean;
  DisplayName:string
}