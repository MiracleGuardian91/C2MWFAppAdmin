export interface WFTriggerDetail {
  Name:                string;
  FriendlyName:        string;
  Status:              '0' | '1';
  Notify:              string;
  TriggerRole:         TriggerRole;
  TriggerEmailRole:    TriggerEmailRole;
  CCTriggerEmailRole:  CCTriggerEmailRole;
  TriggerType:         TriggerTypeData;
  TriggerAction:       TriggerActionData;
  NotificationOption:  NotificationOption;
  EmailSubject:        string;
  TrigggerConfirmMsg:  string;
  PeriodFrequency?:     number;
  RecurrenceFrequency?: string;
  PeriodStart?:         number;
  RecurrenceStart?:     string;
  PeriodEnd?:           number;
  SharedTrgList:       SharedTrigger;
  TimerNotify?:        string;
  WorkFlowId?:         string;
  TriggerGuid?:        string;
  StartWfoid?:         string;
  StartWfosid?:        string;
  ProcessName?:        string;
  Files?:              WorkflowFile[];
  Freq?:               string;
  AdditionalToList?:  AdditionalToList;
  AdditionalCcList?:  AdditionalCcList;
}

export type WorkflowFile = {
  FileName: string;
  FileSize: string;
}

interface CCTriggerEmailRole {
  AvailableCCEmailTrgrRole: Record<string,string>;
  SelectedCCEmailTrgrRole:  Record<string,string>;
}

interface AdditionalToList {
  AvailableAdditionalToRole: Record<string,string>;
  SelectedAdditionalToRole:  Record<string,string>;
}

interface AdditionalCcList {
  AvailableAdditionalCcRole: Record<string,string>;
  SelectedAdditionalCcRole:  Record<string,string>;
}

interface SharedTrigger {
  AvailableSharedStates: Record<string,string>;
  SelectedSharedStates: Record<string,string>;
}

interface TriggerActionData {
  AvailableTriggerAction?: {[key in TriggerActionType]?: string};
  SelectedTriggerAction?:  {[key in TriggerActionType]?: string};
}

interface TriggerEmailRole {
  AvailableTriggerEmailRole: Record<string,string>;
  SelectedTriggerEmailRole:  Record<string,string>;
}

interface TriggerRole {
  AvailableTriggerRole: Record<string,string>;
  SelectedTriggerRole:  Record<string,string>;
}

interface TriggerTypeData {
  AvailableTriggerType?: {[key in TriggerType]?: string};
  SelectedTriggerType?:  {[key in TriggerType]?: string};
}


export type SaveTriggerPayload = {
  name: string;
  friendlyName: string;
  triggerType: TriggerType;
  triggerAction: TriggerActionType;
  status: '0' | '1';
  notify: string;
  timerNotify: string;
  triggerGuid: string;
  triggerRoleGuid: string[];
  triggerEmailRoleGuid: string[];
  ccEmailTrgrRolelist: string[];
  workFlowId: string;
  startWfoid: string;
  startWfosid: string;
  triggerId: string;
  notificationOption: NotificationOption;
  emailSubject: string;
  triggerConfirmMsg: string;
  periodStart: number;
  periodFrequency: number;
  periodEnd: number;
  recurrenceFrequency: string;
  recurrenceStart: string;
  sharedTrgList: string;
  processName: string;
  fileNames: string;
  deletedUploadedFiles: string;
  fileUploadLoc: string;
  freq: string;
  toAdditionalList: string[];
  ccAdditionalList: string[];
}

export enum TriggerType {
  Notify = 1,
  Action,
  System,
  Legal,
  Timer,
  Bulk_Upload,
  LegalOnline,
  LegalOffline,
}

export enum TriggerActionType {
  Submit=6,
  SubmitValidationNA=18,
  Clear=21,
  BulkUpload=23,
}

export enum NotificationOption {
  None = 1,
  Notes,
  CustomNotification,
  CustomMessageWithNotification,
  PrepopulatedCustomMessageWithNotification,
}