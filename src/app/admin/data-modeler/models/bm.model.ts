import { Share, StatusString } from "@app/admin/BM/models";
import { IBaseObject } from "./base-object.model";


export interface IBM extends IBaseObject {
  DisplayName:        string;
  Mode:               BMMode;
  IntegrateWorkspace: string;
  Description:        string;
  BMId:               number;
  Share:              Share[];
  ProcessName:        string;
  Status:             StatusString;
  EnableLoad:         string;
  ProcessId:          string;
  /** Encrypted Process Id */
  TypeId:             string;
}

export type BMMode = 'Edit' | 'Published';