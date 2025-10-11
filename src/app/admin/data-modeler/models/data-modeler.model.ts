import { IConditionBody } from ".";
import { IBM } from "./bm.model";
import { IBMO } from "./bmo.model";
import { IBMOG } from "./bmog.model";
import { IDMOG } from "./dmog.model";
import { IFormio } from "./formio.model";

export type DataModelerResponse = {
  Item1: IBM;
  Item2: Record<string, IBMOG>;
  Item3: Record<string, IBMO>;
  Item4: Record<string, IDMOG>;
  Item5: Record<string, IFormio>;
  Item6: Record<string, Record<'Condition', IConditionBody[]>>;
  Item7: DataModelerIds;
}

export interface DataModelerIds {
  bmIds:   Record<string, string>;
  bmogIds: Record<string, string>;
  bmoIds:  Record<string, string>;
  dmogIds: Record<string, string>;
  dmoIds:  Record<string, string>;
  conditionIds: Record<string, string>;
}