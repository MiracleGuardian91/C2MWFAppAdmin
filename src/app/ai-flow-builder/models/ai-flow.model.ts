import { Coordinates } from "@app/admin/wf/wfd/models/wf.model";

export interface WebhookConfigDto {
  method: string;
  url: string;
  params: { [key: string]: string };
  headers: { [key: string]: string };
  body: string;
}

export interface AiFlowRequest {
  ID: string;
  FlowName: string;
  FlowDescription?: string;
  CoordJson?: { [id: string]: Coordinates };
  AccessToken?: string;
  webhookData?: WebhookConfigDto;   // 👈 must be webhookData
}

export interface AiFlow{
    ID: string;
    FlowName: string;
    FlowDescription: string;
    CoordJson: string;
    CrtDon: Date;
    ModFon: Date;
    ModfBy: string;
    Entities: AiFlowEntity[]
}

export interface AiFlowEntity{
    id: string;
    flowId: string;
    entityName: string;
    entityType: string;
    attributeJson: string;
    crtDon: Date;
    modFon: Date;
    modfBy: string;
}