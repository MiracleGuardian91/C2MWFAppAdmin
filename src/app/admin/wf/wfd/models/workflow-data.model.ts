export interface WFDetail {
  Name:                 string;
  FriendlyName:         string;
  CertificationType:    string;
  ShortDescription:     string;
  EmailFrom:            string;
  OBEEmailSub:          string;
  LongDescription:      string;
  Mode:                 'EDIT' | 'Published';
  Version:              string;
  AllCertificationType: Record<string, string>;
  AllAvailableRoles:    Record<string, string>;
  AssociatedRoles:     Record<string, string>;
  StatesPercentage:     StatePercentage[];
}




export interface StatePercentage {
  StateName:    string;
  FriendlyName: string;
  Percentage:   string;
  IsEndState:   '0' | '1';
  WfosId:       string;
}


export interface SaveWorkflowPayload {
  wfId:            string;
  name:            string;
  friendlyName:    string;
  processName:     string;
  shortDesc:       string;
  longDesc:        string;
  version:         string;
  obeMailSublect:  string;
  emailFrom:       string;
  statePercentage: StatePercentage[];
  associatedRoles: string;
}
