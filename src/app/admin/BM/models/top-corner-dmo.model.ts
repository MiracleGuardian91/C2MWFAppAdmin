
export type TopCornerDmoResponse = {
    Table: ITopCornerDmo[];
}

export interface ITopCornerDmo {
    bmoid:    number;
    BMONAME:  string;
    dmogid:   number;
    DMOGNAME: string;
    dmoid:    number;
    DMONAME:  string;
}
