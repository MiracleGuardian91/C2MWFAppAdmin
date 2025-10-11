export type WFStageDetail = {
  StageName: string;
  DisplayName: string;
  LongDescription: string;
  ShortDescription: string;
  Status: '0' | '1';
  WfoId: string;
  WorkFlowName: string;
  Version: string;
}

export type SaveStagePayload = {
  workFlowId: string,
  name: string,
  friendlyName: string,
  status: number,
  shortDescription: string,
  longDescription: string,
  accessToken: string,
  wfoId: string
}