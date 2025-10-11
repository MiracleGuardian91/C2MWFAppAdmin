export interface BMAssociatedCompaniesPayload {
  groupName:string;
  CompanyId: string;
  ProcessId: string;
  BMId: string;
  BMOGUIDS: string;
  DMOGGUIDS: string;
  DMOGUIDS: string;
  AccessToken?: string;
  IsAllComp:string;
}

export interface ICompanyAssociatedBMObject {
  BMOGID:         number;
  BMOGNAM:        string;
  BMOGTYP:        string;
  BMOID:          number;
  BMONAM:         string;
  BMOTYP:         string;
  BMOGUID:        string;
  BMODISPNAME:    string;
  DMOGID:         number;
  DMOGNAM:        string;
  DMOGGUID:       string;
  DMOGDISPNAME:   string;
  DMOID:          number;
  DMONAM:         string;
  DMOTYP:         string;
  DMOGUID:        string;
  DMODISPNAME:    string;
  ISBMOSELECTED:  0 | 1;
  ISDMOGSELECTED: 0 | 1;
  ISDMOSELECTED:  0 | 1;
}

export interface CardWallConfigurationAssociatedCompanies{
  PlaceholderId:any;
  DmoGuid:any;
  cardId:number;
  ProcessName:any;
}