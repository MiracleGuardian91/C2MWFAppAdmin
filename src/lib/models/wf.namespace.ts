export namespace WF {
  export interface ConditionDetail {
    CondID: string;
    Description: string;
    Name: string;
    Version: string;
    BMID: string;
    BMOGNAM: string;
    WFID: string;
    Status: Status;
    Area: CondArea;
    Enabled: ActionState;
    Mandatory: ActionState;
    Visible: ActionState;
    CondLevel: CondLevel;
    Filter: ConditionFilter[];
  }

  interface CondArea {
    ConditionArea: ConditionArea;
    BmObjectGuids: string;
  }

  export type ConditionArea =
    | 'DataModelObject'
    | 'DataModelGroup'
    | 'BusinessModelObject'
    | 'Trigger';

  interface CondLevel {
    ConditionLevel: ConditionLevel;
    StageStateGuids: string;
  }

  export type ConditionLevel = 'Stage' | 'State';

  export interface ConditionFilter {
    DmoName: string;
    DmoId: string;
    Operator: string;
    ComparisonValue: string;
    ConditionExpression: string;
  }

  export interface BMInfo {
    BMID: string;
    BMNAME: string;
    MOD: Mode;
    STATUS: Status;
  }

  export interface BMOGInfo {
    BMOGID: string;
    BMOGNAME: string;
    NameVer: string;
  }

  export interface StageInfo {
    GUID: string;
    WFOSNAM: string;
  }

  export interface StateInfo extends StageInfo {
    States: string;
  }

  export interface BMOInfo {
    GUID: string;
    BMONAME: string;
  }

  export interface DMOGInfo extends BMOInfo {
    DMOGNAME: string;
  }

  export interface DMOInfo extends DMOGInfo {
    DMONAME: string;
  }

  export interface DMOItem {
    /**GUID */
    GlobalID: string;
    NAME: string;
    DispName: string;
    GroupName: string;
  }

  export interface TriggerInfo {
    GUID: string;
    WFONAME: string;
    WFOSNAME: string;
    TriggerNAME: string;
  }

  export type Mode = 'Edit' | 'Published';

  export enum Status {
    Inactive = '0',
    Active = '1',
  }

  export enum ActionState {
    No = '0',
    Yes = '1',
    NA = '2',
  }

  export interface NotificationTriggerDetail {
    EmailSubject: string;
    ToEmailIds: string;
    CcMailIds: string;
    MailText: string;
    Files: NTDFile[];
  }

  export interface NTDFile {
    FileName: string;
    FileSize: string;
  }
}
