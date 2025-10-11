import { BaseDmo } from "./base-dmo.model";

type DataSource = 'values' | 'wfapigetdata';

export interface MultiSelectDropDownListDmo extends BaseDmo {
  DataSource: DataSource,
  Defaultvalue: string,
  IsMultiSelect: true,
  Options: string,
  Type: 'MultiSelectDropDownList',
}