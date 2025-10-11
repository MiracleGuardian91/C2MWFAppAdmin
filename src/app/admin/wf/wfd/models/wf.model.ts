import { Dimension, Point, Waypoint } from "./bpmn";
import { StateSpecificationType } from "./state-data.model";
import { TriggerType } from "./trigger-data.model";


export interface MetaData {
  Workflow: Workflow,
  Coordinates: Partial<Coordinates>,
  FlowType: 'wfd' | 'ai';
};

export interface Workflow {
  WFID:            string;
  TypeID:          string;
  Name:            string;
  Ver:             string;
  FriendlyName:    string;
  Status:          string;
  WorkflowMode:     string;
  IsRedoAllowed?:Boolean;
  IsUndoAllowed?:Boolean
  ProcessName:     string;
  StageList:       string[];
  Stages:          {[key: string]: Stage};
  BusinessModels: {},
  WorkflowRoles: {},
}

export interface Stage {
  Name:         string;
  FriendlyName: string;
  Guid:         string;
  subProcessName: string;
  subProcessWFVersionNo: string;
  Status:       string;
  WorkFlowId:   string;
  WfoId:        string;
  States:       {[key: string]: State};
  Conditions:   {};
}

export interface State {
  Name:              string;
  FriendlyName:      string;
  Status:            string;
  Guid:              string;
  WfoId:             string;
  WfosId:            string;
  SpecID:            StateSpecificationType;
  SubProcessName:      string;
  SubProcessWFVersionNo: string;
  SpecificationName: string;
  StateType:         'SubProcess' | '';
  StateRoles:        {};
  Triggers:          {[key: string]: Trigger};
  CheckList:         {};
  Conditions:        {};
}

export interface Trigger {
  Name:           string;
  FriendlyName:   string;
  Type:           keyof typeof TriggerType;
  TypeID:         TriggerType;
  ActionName:     string;
  StartStageGUID: string;
  StartStateGUID: string;
  StartStageName: string;
  StartStateName: string;
  Status:         string;
  Guid:           string;
  WfosId:         string;
  TriggerId:      string;
  SpecID:         string;
  ActionRoles:    {};
  NotifyRoles:    {};
  NotifyCcRoles:  {};
  TrgConditions:  {[key: string]: TriggerCondition};
}

export interface TriggerCondition {
  // EndWfoGUID:       string;
  // EndWfosGUID:      string;
  //EndStageGuid:     string;
  EndStateGuid:     string;
  Name:             string;
  NotifyMsg:        string;
  NotifySubject:    string;
  ConditionId:      string;
  Description:      string;
  TriggerId:        string;
  CondNotifyRole:   {};
  CondFilter:       {};
  CondNotifyCcRole: {};
}

export interface Coordinates {
  [id: string]: ElementCoordinates | TriggerCoordinates; // Index signature for dynamic properties
}

export interface CoordinatesUndoRedo {
  [id: string]: ElementCoordinates | TriggerCoordinates|UndoRedoActionGroup; // Index signature for dynamic properties
  // Optional property
}

export class UndoRedoActionGroup {
  EntityId: string | null = null;
  EntityType: string | null = null;
  ActionName: string | null = null;
  ActionGroupId: string | null = null;
  ActionDetails: string | null = null;
  SequenceNumber: string | null = null;
}


export interface ElementCoordinates extends Point, Dimension {
  name?: string;
  color?:string;
}
export interface TriggerCoordinates extends Dimension {
  wayPoints: Waypoint[];
} 