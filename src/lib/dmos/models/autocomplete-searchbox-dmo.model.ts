import { BaseDmo } from './base-dmo.model';

export interface AutoCompleteSearchBoxDmo extends BaseDmo{
  DataSource: string; // api url to use
  DisplayValue: string;
  Key: string;
  Value: string; 
  Mappings: string;
  Model: string; // Grid Config
  ModelBodyProcessId: string; //
  Type: 'AutoCompleteSearchBox'
  EmitOnStart: boolean;
  DependencyDmos: string;
  DependentDmos: string;
}