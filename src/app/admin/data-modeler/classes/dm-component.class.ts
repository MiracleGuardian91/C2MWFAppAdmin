import { nameToGuid } from '@lib/util';
import { uniqueId } from 'lodash';
import {
  DataSource,
  DMOType,
  IConditionBody,
  IDMComponent,
  Status,
} from '../models';
import { DMOG } from './dmog.class';

export class DMComponent implements Partial<IDMComponent> {
  _protected = false;
  parentDmo = null;
  // action = 'submit';
  authenticate = false;
  allowCalculateOverride = false;
  allowInput = false;
  autoAdjust = false;
  autofocus = false;
  // block = false;
  calculateValue = '';
  clearOnHide = false;
  clearOnRefresh = false;
  clonedIndex = 0;
  fromApi = true;
  column = 0;
  comparatorSelect = null;
  compareOprator = null;
  conditional = { show: null, when: null, eq: '' };
  conditionNA = false;
  conditions: IConditionBody[] = [];
  customClass = '';
  customDefaultValue = '';
  dataGridLabel = false;
  dataSrc = DataSource.Values;
  dbIndex = false;
  default_Value = '';
  defaultValue = '';
  description = '';
  // disabled = false;
  // disableOnInvalid = false;
  // dmo_dataType = null;
  dmoName: string = null;
  dmoId: number = null;
  enableDate = false;
  enableTime = false;
  errorLabel = '';
  expression = '';
  expressionMessage = '';
  fieldSet = false;
  // filter = '';
  // hidden = false;
  hideChild = false;
  // hideLabel = false;
  id = uniqueId();
  image = false;
  inline = false;
  input = true;
  inputType = null;
  is24hourformat = false;
  isalphanumeric = false;
  isautoCrop = false;
  isEncrypt = false;
  israndom = false;
  // isUploadEnabled = false;
  key = null;
  label = null;
  labelMargin = 3;
  labelPosition = 'top';
  labelWidth = 30;
  // leftIcon = '';
  mask = false;
  minlength = '';
  minSearch = 0;
  multiple = false;
  persistent = false;
  placeholder = '';
  prefix = '';
  protected = false;
  RangeCal = null;
  regxType = null;
  refreshOn = '';
  // rightIcon = '';
  searchEnabled = false;
  searchField = '';
  selectFields = '';
  showtooltip = false;
  // size = 'md';
  startwith = null;
  status = Status.Active;
  suffix = '';
  tabindex = '';
  tableView = true;
  theme = 'info';
  tooltip = '';
  tree = false;
  type = null;
  unique = false;
  // uploadDirectory = null;
  uploadLimit = null;
  uploadOnly = false;
  // uploadOptions = null;
  // uploadStorage = StorageProvider.Base64;
  // uploadUrl = null;
  useLocaleSettings = false;
  validateOn = 'change';
  values = [];
  widget = null;
  data = {
    values: [],
    json: [],
    url: '',
    headers: [],
    resource: '',
    custom: '',
    apiparams: null,
    apiurl: null,
    fieldparams: null,
    modelbody: null,
    datasource: null,
    mappings: [],
    emitonstart: false,
    dependencydmos: [],
    dependentdmos: [],
  };
  validate = {
    required: false,
    customPrivate: false,
    maxLength: '',
    disabled: false,
    custom: '',
    maxWords: null,
    minLength: '',
    minWords: null,
    pattern: null,
  };

  guid: string;

  get shared() {
    return this.parent.Share.some(({ value }) => value === this.guid);
  }

  constructor(obj: Partial<IDMComponent> = {}, public parent: DMOG) {
    Object.entries(obj).forEach(([key, value]) => {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.entries(value).forEach(([k, v]) => {
          if (!this[key]) this[key] = {};
          this[key][k] = obj[key] && obj[key][k] ? obj[key][k] : v;
        });
      } else {
        this[key] = obj[key] ?? this[key];
      }
    });
    this.guid = obj.guid;
  }

  public clone() {
    const cloned = new DMComponent(this, this.parent);
    cloned.label = cloned.label + ` Copy ${this.clonedIndex}`;
    cloned.dmoName = `${cloned.dmoName}_copy_${this.clonedIndex}`;
    cloned.id = `${cloned.id}${this.clonedIndex}`;
    cloned.clonedIndex = 0;
    cloned.fromApi = false;
    cloned.guid = this.guid + `copy${this.clonedIndex}`;
    this.clonedIndex++;
    return cloned;
  }

  public asObject(): Partial<IDMComponent> {
    const { conditions, parent, clonedIndex, ...rest } = this;
    return rest;
  }

  public dmoListByType(type?: DMOType) {
    const list: { key: string; value: string; parent: string }[] = [];
    Object.values(this.parent.root.childrenMap)
      .flatMap((bmog) => Object.values(bmog.childrenMap))
      .flatMap((bmo) => Object.values(bmo.childrenMap))
      .flatMap((dmog) => Object.values(dmog.childrenMap))
      .forEach((dmo) => {
        if (type) {
          if (dmo.type === type && dmo.dmoName !== this.dmoName) {
            list.push({
              key: dmo.guid,
              value: dmo.label,
              parent: dmo.parent.DisplayName,
            });
          }
        } else {
          if (!list.some((lst) => lst.key === dmo.guid))
            list.push({
              key: dmo.guid,
              value: dmo.label,
              parent: dmo.parent.DisplayName,
            });
        }
      });
    return list;
  }

  public addCondition(condition: IConditionBody) {
    this.conditions.push(condition);
  }
}
