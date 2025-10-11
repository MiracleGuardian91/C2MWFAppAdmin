import { KeyValue } from "@app/admin/BM/models";
import { DMOType, Status } from ".";

export interface IFormio {
  display: string;
  components: IDMComponent[];
  _id: string;
}

export interface IDMComponent {
  Height:'';
  rte:boolean;
  _protected: boolean;
  action: string;
  allowCalculateOverride: boolean;
  allowInput: boolean;
  authenticate: boolean;
  autoAdjust: boolean;
  autofocus: boolean;
  block: boolean;
  calculateValue: string;
  clearOnHide: boolean;
  clearOnRefresh: boolean;
  conditional: {show: any, when: any, eq: string};
  columns: Column[];
  columns1: Column[];
  comparatorSelect: KeyValue;
  compareOprator: KeyValue;
  components: IDMComponent[];
  conditionNA: boolean;
  customClass: string;
  customDefaultValue: string;
  data: Data;
  dataGridLabel: boolean;
  dbIndex: boolean;
  dataSrc: DataSource;
  datePicker: Datepicker;
  datepickerMode: string;
  default_Value: any;
  defaultDate: string;
  defaultValue: any;
  description: string;
  disabled: boolean;
  disableOnInvalid: boolean;
  displayInTimezone: string;
  dmo_dataType: string;
  dmoName: string;
  enableDate: boolean;
  enableTime: boolean;
  errorLabel: string;
  expression: string;
  expressionMessage: string;
  fieldSet: boolean;
  fileMaxSize: string;
  fileMinSize: string;
  filePattern: string;
  filter: string;
  format: string;
  height: string;
  hidden: boolean;
  hideChild: boolean;
  hideLabel: boolean;
  id: string;
  image: boolean;
  imageSize: string;
  inline: boolean;
  input: boolean;
  inputMask: string;
  inputType: string;
  is24hourformat: boolean;
  isalphanumeric: boolean;
  isautoCrop: boolean;
  isEncrypt: boolean;
  israndom: boolean;
  isUploadEnabled: boolean;
  key: string;
  kickbox: Kickbox;
  label: string;
  labelMargin: number;
  labelPosition: string;
  labelWidth: number;
  leftIcon: string;
  mappings: KeyValue[];
  mask: boolean;
  minlength: string;
  minSearch: number;
  multiple: boolean;
  optionsLabelPosition: string;
  parentDmo: KeyValue;
  persistent: boolean;
  placeholder: string;
  prefix: string;
  protected: boolean;
  RangeCal: string;
  refreshOn: string;
  regxType: RegExType;
  rightIcon: string;
  searchEnabled: boolean;
  searchField: string;
  select: KeyValue[];
  selectFields: string;
  showtooltip: boolean;
  size: string;
  startwith: string;
  status: Status;
  suffix: string;
  tabindex: string;
  tableView: boolean;
  theme: string;
  template: string;
  timePicker: Timepicker;
  timezone: string;
  tooltip: string;
  tree: boolean;
  type: DMOType | 'columns';
  unique: boolean;
  uploadDirectory: string;
  uploadLimit: string;
  uploadOnly: boolean;
  uploadOptions: string;
  uploadStorage: StorageProvider;
  uploadUrl: string;
  useLocaleSettings: boolean;
  validate: Validate;
  validateOn: string;
  valueProperty: string;
  values: Value[];
  widget: Widget;
  dmoId: number;
  guid: string;
  column: number;
  ApiUrlOptions : string;
}

interface Column {
  columnId: number;
  _protected: boolean;
  allowInput: boolean;
  autoAdjust: boolean;
  autofocus: boolean;
  dataGridLabel: boolean;
  disabled: boolean;
  enableDate: boolean;
  enableTime: boolean;
  fieldSet: boolean;
  hidden: boolean;
  image: boolean;
  input: boolean;
  mask: boolean;
  multiple: boolean;
  persistent: boolean;
  searchEnabled: boolean;
  tableView: boolean;
  tree: boolean;
  unique: boolean;
  uploadOnly: boolean;
  useLocaleSettings: boolean;
  components: IDMComponent[];
  condition: Condition[];
  columns: Column[];
  data: Data;
  datePicker: Datepicker;
  labelMargin: number;
  labelWidth: number;
  minSearch: number;
  kickbox: Kickbox;
  select: KeyValue[];
  default_Value: any;
  defaultValue: any;
  customClass: string;
  customDefaultValue: string;
  dataSrc: DataSource;
  datepickerMode: string;
  defaultDate: string;
  description: string;
  displayInTimezone: string;
  dmoName: string;
  errorLabel: string;
  fileMaxSize: string;
  fileMinSize: string;
  filePattern: string;
  filter: string;
  format: string;
  height: string;
  id: string;
  imageSize: string;
  inputMask: string;
  inputType: string;
  key: string;
  label: string;
  labelPosition: string;
  optionsLabelPosition: string;
  placeholder: string;
  prefix: string;
  refreshOn: string;
  suffix: string;
  searchField: string;
  selectFields: string;
  tabindex: string;
  template: string;
  theme: string;
  timezone: string;
  tooltip: string;
  type: string;
  validateOn: string;
  valueProperty: string;
  timePicker: Timepicker;
  values: Value[];
  widget: Widget;
  validate: Validate;
  width: number;
  rowIndex: number;
  offset: number;
  push: number;
  pull: number;
  index: number;
  dmoid: string;
}

interface Widget {
  type: string;
  displayInTimezone: string;
  language: string;
  useLocaleSettings: boolean;
  allowInput: boolean;
  mode: string;
  enableTime: boolean;
  noCalendar: boolean;
  format: string;
  defaultDate: string;
  hourIncrement: number;
  minuteIncrement: number;
  time_24hr: boolean;
  minDate: any;
  maxDate: any;
}

export interface Validate {
  required: boolean;
  custom: string;
  customPrivate: boolean;
  minLength: string;
  maxLength: string;
  minWords: string;
  maxWords: string;
  pattern: string;
  disabled: boolean;
}

interface Kickbox {
  enabled: boolean;
}

export interface Data {
  values: Value[];
  json: JsonData[] | string;
  url: string;
  headers: KeyValue[];
  resource: string;
  custom: string;
  apiparams: string;
  apiurl: string;
  fieldparams: string;
  endpoint : string;
  methodtype :MethodTypes;
  toggledepmapper : boolean;
  dependentdatasrc : string;
  dependentbody : string;
  modelbody: string;
  datasource: string;
  mappings: ASBMapping[];
  emitonstart: boolean;
  dependencydmos: ASBMapping[];
  dependentdmos: DependentData[];
  kvboxmultiselect : boolean;
}

export interface JsonData {
  TextField: string;
  ValueField: string;
  ParentKey: string;
}

interface Datepicker {
  showWeeks: boolean;
  startingDay: number;
  initDate: string;
  minMode: string;
  maxMode: string;
  yearRows: number;
  yearColumns: number;
  minDate: any;
  maxDate: any;
}

interface Timepicker {
  hourStep: number;
  minuteStep: number;
  showMeridian: boolean;
  readonlyInput: boolean;
  mousewheel: boolean;
  arrowkeys: boolean;
}

export interface Value {
  label: string;
  value: string;
  shortcut?: string;
}


export interface DMOConditions {
  condition: Condition[];
}

export interface Dmo1 {
  condition: Condition[];
}

export interface Condition {
  id: string;
  name: string;
  version: string;
  status: string;
  shortDesc: string;
  conditions: Conditions[];
  executeElse: string;
  action: KeyValue[];
  conditionArea: Conditionarea;
}

export enum MethodTypes {
  GET = 'GET',
  POST = 'POST',
}

export enum GridViewDataSource{
  WFApi = 'wf_apigetdata',
  WFApiGateway = 'wf_apigateway',  
  CustomApi = 'customapi',
}

export enum DataSource {
  Values = 'values',
  WFApi = 'wfapigetdata',
}

export enum CustomDataSource {
  Country = 'wf_GetCountry',
  State = 'wf_GetState',
  City = 'wf_GetCity',
  UserByRole = 'WF_API_ROLECONTROLUSER'
}

export enum RegExType {
  Alphabetic = 'alphabates',
  Alphanumeric = 'alphanumeric',
  Integer = 'integer',
  Float = 'float',
  Percent = 'percent',
  Dollar = 'dollar',
  Custom = 'custom',
}

export enum StorageProvider {
  Base64 = 'base64',
  Dropbox = 'dropbox',
  S3 = 's3',
  Url = 'url',
  Azure = 'azurefileservices',
}

export interface Conditionarea {
  key: string;
  value: KeyValue[];
}

export interface Conditions {
  conditionId: string;
  dmo: string;
  exp: string;
  value: string;
  logical: string;
  label: string;
}

export interface ParentChildDmoData {
  parentProcessId: string;
  childProcessId: string;
  childProcessName: string;
  parentBMId: string;
  parentProcessDmoGuid: string;
  childProcessDmoGuid: string;
}


export interface ASBMapping {
  Name: string;
  GUID: string;
}

export interface DepColConfig  {
  Name: string;
  GUID: string;
}

export interface DependentData {
  name: string;
}


