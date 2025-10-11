import { Share } from "@app/admin/BM/models";
import { CanvasType, EnableTLCorner, IBMOG } from "../models1";
import { BaseObject } from "./base-object.class";
import { BM } from "./bm.class";
import { BMO } from "./bmo.class";

export class BMOG extends BaseObject<BM, BMO>  {
  CanvasType: CanvasType;
  LongDesc:   string;
  Parent:     string;
  BMOGID:     number;
  Share:      Share[];
  EnableTLCorner: EnableTLCorner;

  constructor(obj: Partial<IBMOG>, parent: BM) {
    super(obj, parent);
    this.BMOGID = obj.BMOGID;
    this.CanvasType = obj.CanvasType;
    this.LongDesc = obj.LongDesc;
    this.Parent = obj.Parent || parent.id;
    this.Share = obj.Share || [];
    this.root = parent;
    this.EnableTLCorner = obj.EnableTLCorner;
  }
}