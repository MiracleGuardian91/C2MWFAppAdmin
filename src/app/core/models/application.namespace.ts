export namespace Application {
  export interface Contact {
    ContactId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Title: string;
    CompanyName: string;
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
  }

  export interface IdentifierUtility {
    Name: string;
    Value: string;
    TrnsctnID: string;
    ProcessName: string;
  }
}
