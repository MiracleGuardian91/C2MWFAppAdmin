export interface IBatchUpdateDmo {
    bmogId:       string;
    dmoid:        string;
    bmogNameArea: string;
    bmoNameArea:  string;
    dmogNameArea: string;
    dmoNameArea:  string;
}

export interface IBatchUpdateSelectedDmo {
    dispname: string;
    dmoid:    number;
    dmogid:   number;
    dmogname: string;
}

export interface SelectedBatchUpdateDmoResponse {
    Table: IBatchUpdateSelectedDmo[];
}