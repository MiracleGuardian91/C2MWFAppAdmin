import { Share } from "@app/admin/BM/models";
import { BMOType, IBMO } from "../models";
import { BaseObject } from "./base-object.class";
import { BMOG } from "./bmog.class";
import { DMOG } from "./dmog.class";

export class BMO extends BaseObject<BMOG, DMOG> {
  BMOID:                number;
  DisplayName:          string;
  ShortDesc:            string;
  LongDesc:             string;
  Parent:               string;
  Share:                Share[];
  GUID:                 string;
  BmoType:              BMOType;
  SubProcessId:         string;
  ChildProcessId:       string;
  ParentProcessDmoGuid: string;
  ChildProcessDmoGuid:  string;

  constructor(obj: Partial<IBMO>, parent: BMOG) {
    super(obj, parent);
    this.BMOID = obj.BMOID;
    this.DisplayName = obj.DisplayName;       
    this.ShortDesc = obj.ShortDesc;
    this.LongDesc = obj.LongDesc;
    this.Parent = obj.Parent || parent.id;
    this.Share = obj.Share || [];               
    this.GUID = obj.GUID;
    this.BmoType = obj.BmoType;       
    this.SubProcessId = obj.SubProcessId; 
    this.ChildProcessId = obj.ChildProcessId;
    this.ParentProcessDmoGuid = obj.ParentProcessDmoGuid;
    this.ChildProcessDmoGuid =  obj.ChildProcessDmoGuid;
    this.root = parent.parent;
  }

  get shared() {
    return this.parent.Share.some(({value}) => value === this.id);
  }
}