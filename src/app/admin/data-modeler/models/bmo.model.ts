import { Share } from "@app/admin/BM/models";
import { IBaseObject } from "./base-object.model";

export interface IBMO extends IBaseObject {
  BMOID:                number;
  DisplayName:          string;
  ShortDesc:            string;
  LongDesc:             string;
  Parent:               string;
  Share:                Share[];
  GUID:                 string;
  BmoType:              BMOType;
  SubProcessId:         string;
  ChildProcessId:       string;
  ParentProcessDmoGuid: string;
  ChildProcessDmoGuid:  string;
  ParentBMId?:          number;
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
export enum FormBmoType {
  Form = 'Forms',
}