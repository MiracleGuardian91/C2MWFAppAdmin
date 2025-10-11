export interface IConditionBody {
  Id:            string;
  Name:          string;
  Version:       string;
  Status:        string;
  ShortDesc:     string;
  Conditions:    ICondition[];
  ExecuteElse:   string;
  Action:        Action[];
  ConditionArea: ConditionArea;
}

export interface Action {
  key:    'Enabled' | 'Visible' | 'Mandatory';
  value?: ActionState;
}

export enum ActionState {
  No,
  Yes,
  NA
}

export interface ConditionArea {
  key: ConditionAreaKey,
  value: Value[];
}

export type ConditionAreaKey =  'BusinessModelObject' | 'DataModelGroup' | 'DataModelObject' | 'Trigger';

interface Value {
  Key:   string;
  Value: string;
}

export interface ICondition {
  ConditionId: string;
  Dmo:         string;
  Exp:         string;
  Value:       string;
  Logical:     string;
  Label:       string;
}
