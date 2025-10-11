import { IdentifierUtility } from "./identifier-utility.model";

export interface IContact {
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
