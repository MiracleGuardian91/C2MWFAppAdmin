export interface FormBMO extends BMO {
  Type: BMOType.Form;
}

export interface ContactBMO extends BMO {
  Type: BMOType.Contact;
}

export interface SubProcessBMO extends BMO {
  Type: BMOType.SubProcess;
}

export interface AttachmentBMO extends BMO {
  Type: BMOType.Attachment;
}

export interface DocumentBMO extends BMO {
  Type: BMOType.Document;
}

export interface SubProcessBMO extends BMO {
  Type: BMOType.SubProcess;
}

export interface ChildProcessBMO extends BMO {
  Type: BMOType.ChildProcess;
}

export interface SharedChildProcessBMO extends BMO {
  Type: BMOType.SharedChildProcess;
}

export interface BMO {
  Type: BMOType;
  DisplayName: string;
  List: string[];
  DataModelObjectGroups: {};
  StageStateConditions: {};
  ProcessName: string;
  ParentProcessDmoName: string;
  ChildProcessDmoName: string;
  ChildProcessDmoGuid: string;
  SubProcessChildDMO: any[];
  Name: string;
}

export enum BMOType {
  Form = 'Forms',
  Contact = 'Contacts',
  Attachment = 'Attachments',
  Document = 'Documents',
  SubProcess = 'Subprocess',
  ChildProcess = 'ChildProcess',
  SharedChildProcess = 'SharedChildProcess',
}
