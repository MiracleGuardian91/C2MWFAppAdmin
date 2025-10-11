interface Attribute {
    Label: string;
    ControlName: string;
    Value: string;
    Width: "half" | "full"; 
    Options?: string[];
}

export interface AiAttributeJson {
    Guid: string;
    Description: string;
    Attributes: Attribute[];
}