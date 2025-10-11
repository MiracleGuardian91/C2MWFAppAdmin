import { Application } from './application.namespace';

export interface RecordHeader {
  DisplayName: string;
  Value: string;
  GUID?: string;
}

export interface RecordData {
  ApplicationInfo: ApplicationInfo[];
  DataInformation: DataInformation;
  FileInformation: FileInformation;
  ProcessDataInfo: any;
}

export interface ApplicationInfo {
  Percentage: number;
  WorkflowId: number;
  BMID: number;
  CurrentWorkflowId: number;
  CurrentWorkflowSId: number;
  StateName: string;
  StateFriendlyName: string;
  StateGuid: string;
  StageName: string;
  StageFriendlyName: string;
  StagGuid: string;
  Ver: string;
  SpecId: string;
  LongDesc: string;
  FriendlyName: string;
  Typ: string;
  NoOfStateDays: number;
  FromEmail: string;
  BmFileName: string;
  WfFileName: string;
  WFOSId: number;
  TsTrcd: number;
  IsEndState: string;
  ModfOn: string;
  StartStateSpecId: number;
  WFJsonGenrtOn: string;
  BMJsonGenrtdOn: string;
  BMJsonFileName: string;
  WFJsonFileName: string;
  ApplicationFriendlyname: string;
  Modfby: string;
  CrtdBy: string;
  CrtdOn: string;
  IsTestRecord: string;
  BMOGroupID: null | string;
  APPName: string;
  WFVersion: string;
  StateType: string;
  PTransID: string;
}

interface DataInformation {
  [dmoGUID: string]: {
    DMOVAL: string;
    RLTYPDMOVAL: string;
  };
}

interface FileInformation {
  [dmoGUID: string]: Application.FileInfo;
}
