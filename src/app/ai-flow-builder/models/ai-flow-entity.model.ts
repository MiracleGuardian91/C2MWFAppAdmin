export interface AIFlowEntity{
  ID: string;
  FlowId: string;
  EntityName: string;
  EntityType: string;
  AttributeJson: string;
  CrtdOn: Date;
  CrtdBy: string;
  ModfOn: Date;
  ModfBy: string;
}

export interface AIFlowEntityRequest {
  FlowId: string;
  EntityName: string;
  EntityType: string;
  ParentEntityId: string;
  EndParentEntityId: string;
}