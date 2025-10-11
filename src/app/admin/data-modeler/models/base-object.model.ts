import { StatusString } from "@app/admin/BM/models";
import * as model from '.';

export type EntityType = 'bm' | 'bmog' | 'bmo' | 'dmog' | 'dmo' | 'condition';
export type ObjectType = model.IBM | model.IBMOG | model.IBMO | model.IDMOG | model.IDMComponent;

export type IBaseObject = {
  id:                 string;
  Name:               string;
  Version:            string;
  Children:           string[];
  Status:             StatusString;
}