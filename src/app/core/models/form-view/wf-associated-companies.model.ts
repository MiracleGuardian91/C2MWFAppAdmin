export interface WFAssociatedCompaniesPayload {
  groupName:string;
  CompanyId: string;
  ProcessId: string;
  WFId: string;
  WFOGUIDS: string;
  WFOSGUIDS: string;
  TrigGUIDS: string;
  AccessToken?: string;
  IsAllComp:string;
}

export interface ICompanyAssociatedWFObject {
  WFNAM:             string;
  WFDISPNAME:        string;
  WFONAM:            string;
  WFODISPNAME:       string;
  WFOGUID:           string;
  WFOSDISPNAME:      string;
  WFOSGUID:          string;
  WFOSNAM:           string;
  TRGDISPNAME:       string;
  TRGGUID:           string;
  TRGNAM:            string;
  isAlreadySelected: number;
}
