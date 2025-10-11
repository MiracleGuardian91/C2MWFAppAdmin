import { List } from "lodash";

export interface WFStateDetail {
  Name:                string;
  FriendlyName:        string;
  Status:              0 | 1;
  ShortDescription:    string;
  LongDescription:     string;
  StateSpecification:  StateSpecification;
  StateRole:           StateRole;
  SubProcess:          SubProcess;
  SubProcessEndStates: SubProcessEndStates;
  CheckList:           any[];
  TriggerList:         TriggerListItem[]; 
}

interface StateRole {
  AvailableRoles?: Record<string, string>;
  SelectedRoles?:  Record<string, string>;
}

interface StateSpecification {
  AvailableStateSpecification?: Record<StateSpecificationType, string>;
  SelectedStateSpecification?:  Record<StateSpecificationType, string>;
}

interface SubProcess {
  AvailableSubProcess?: Record<string, string>;
  SelectedSubProcess?: Record<string, string>;
}

interface SubProcessEndStates {
  AvailableSubProcessEndState?: Record<string, string>;
  SelectedSubProcessEndState?: Record<string, string>;
}

export interface SaveStatePayload {
  name:                  string;
  friendlyName:          string;
  status:                0 | 1;
  shortDescription:      string;
  longDescription:       string;
  stateSpecification:    string;
  stateSpecName:         string;
  workFlowId:            string;
  stateRole:             string;
  wfosId:                string;
  wfoId:                 string;
  subProcessID:          string;
  subProcessEndStateIds: string;
  checkList:             CheckList[];
  TriggerList:           TriggerListItem[];
  
  
}


export interface TriggerListItem {
  TRGNAME:               string;
  TRGDISPNAME:           string;
  TRGID:                 string;
}

export interface CheckList {
  ChecklistId: string | 0;
  WfosId:      string;
  Description: string;
}

export enum StateSpecificationType {
  Start = '1',
  Task = '0',
  End = '2',
  API = '3',
  DataSchema = '4',
  HumanInLoop = '5',
  LLM = '6',
  PromptVariable = '7',
  Scheduler = '8',
  SqlQuery = '9',
  Vector = '10',
  State = '11'
}