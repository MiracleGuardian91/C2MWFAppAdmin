export interface ISelectedBulkTriggerDmo {
    dispname: string;
    dmoid:    number;
    dmogid:   number;
    dmogname: string;
}

export interface SelectedBulkTriggerDmoResponse {
    Table: ISelectedBulkTriggerDmo[];
}