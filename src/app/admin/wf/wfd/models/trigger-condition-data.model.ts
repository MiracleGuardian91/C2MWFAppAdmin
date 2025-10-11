import { WorkflowFile } from "./trigger-data.model";

export interface WFTriggerConditionDetail {
  ConditionName:        string;
  ConditionDescription: string;
  EndStage:             EndStage;
  EndState:             EndState;
  Notify:               string;
  EmailRole:            EmailRole;
  Filter:               TriggerConditionFilter[];
  Status:               number;
  EmailSubject:         string;
  CcEmailRole:          CcEmailRole;
  Files?:               WorkflowFile[];
}

interface CcEmailRole {
  AvailableCCEmailTrgrRole: Record<string,string>;
  SelectedCCEmailTrgrRole: Record<string,string>;
}


interface EmailRole {
  AvailableTriggerEmailRole: Record<string,string>;
  SelectedTriggerEmailRole: Record<string,string>;
}

interface EndStage {
  AvaialableStages: Record<string,string>;
  SelectedStages:   Record<string,string>;
}


interface EndState {
  AvaialableStates: Record<string,string>;
  SelectedStates:   Record<string,string>;
}


export interface TriggerConditionFilter {
  DmoName:           string;
  DmoGlobalId:       string;
  Operator:          ConditionOperator;
  Value:             string;
  BooleanExpression: 'AND' | 'OR';
  FilterId:          number;
}

export interface SaveTriggerConditionPayload {
  triggerId:            string;
  conditionId:          string;
  conditionName:        string;
  conditionDescription: string;
  endWfoId:             string;
  endWfosId:            string;
  notify:               string;
  roleGuid:             string[];
  filter:               TriggerConditionFilter[];
  status:               0 | 1;
  wfId:                 string;
  emailSubject:         string;
  deletedUploadedFiles: string;
  ccMAilRoleGuids:      string[];
  fileNames:            string;
  fileUploadLoc:        string;
}

export type ConditionOperator = 'LT' | 'LE' | 'GT' | 'GE' | 'EQ' | 'NOT EQ' | 'LIKE' | 'NOT IN' | 'IN';