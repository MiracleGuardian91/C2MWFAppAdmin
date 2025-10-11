export interface UniqueConstraintResponse {
    AvaialableDmo: UniqueConstraintDMO[];
    SelectedDmo:   UniqueConstraintDMO[];
}

export interface UniqueConstraintDMO {
    DmoId:        string;
    DmoGuid:      string;
    Name:         string;
    DisplayName?: string;
}
