export interface DateWithCalendarDmo {
    DefaultValue:         string;
    comparisonDataDmo:    ComparisonDataDmo;
    Options:              string;
    rangeValue:           string;
    Name:                 string;
    DisplayName:          string;
    Type:                 'DateWithCalendar';
    IsRequired:           boolean;
    IsShowDetails:        boolean;
    SortDescription:      string;
    LongDescription:      string;
    IsTooltip:            boolean;
    IsReadOnly:           boolean;
    Conditions:           any;
    StageStateConditions: any;
}

export interface ComparisonDataDmo {
    Dmo:      string;
    Operator: ComparisonOperator;
}

export type ComparisonOperator = 'LT' | 'GT' | 'LE' | 'GE';