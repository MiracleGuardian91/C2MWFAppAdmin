export namespace Application {
  export interface Contact {
    ContactId: string;
    EncryptedContactId: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Title: string;
    CompanyName: string;
    OfficePhone: string;
    OfficePh: string;
    Mobile: string;
    Fax: string;
    MailingAddress: string;
    Suite: string;
    City: string;
    State: string;
    PostalCode: string;
    StateOutSideUsa: string;
    Counrty: string;
    Identifier: IdentifierUtility;
    Status?: '0' | '1';
    CreatedBy?: string;
    CreatedDate?: string;
  }
  export interface Attachment {
    FileName: string;
    FileSize: string;
    OldFileName: string;
    CreatedOn: string;
    CreatedBy: string;
    DISPNAME: string;
    UserFullName: string;
    IsEncrypted: boolean;
    Id: string;
    EncryptedId: string;
  }

  export interface FileInfo {
    FileName: string;
    FileSize: string;
    OldFileName: string;
    CreatedOn?: string;
    IsEncrypted?: boolean;
  }

  export const enum CanvasType {
    Admin = 'AdminView',
    Form = 'Form',
    User = 'UserView',
    View1 = 'View1',
    View2 = 'View2',
    View3 = 'View3',
    View4 = 'View4',
    View5 = 'View5',
    View6 = 'View6',
  }

  export interface Country {
    NAM: string;
    CNTRYID: string;
  }

  export interface IdentifierUtility {
    Name: string;
    Value: string;
    TrnsctnID: string;
    ProcessName: string;
  }

  export interface UpdateJSON {
    Identifier: IdentifierUtility;
    ProcessName: string;
    TriggerName: string;
    UserName?: string;
    UniqueConstraints?: string;
    Data: { [key: string]: string }[];
    ParentTransactionID?: string;
    TempTransactionID?: string;
    IsBulkUpload?: boolean;
    CurrentStateName?: string;
    StateType?: string;
  }

  export interface InsertJSON {
    ProcessName: string;
    TriggerName: string;
    UserName?: string;
    UniqueConstraints?: string;
    Data: { [key: string]: string }[];
    ParentTransactionID?: string;
    TempTransactionID?: string;
    IsBulkUpload?: boolean;
  }

  export interface RevertableState {
    StageState: string;
    PrevWfosId: string;
  }
}
