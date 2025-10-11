import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { ElementType } from "../models/bpmn";

/** Delimiter that divides ids of diagram's non-backend objects
 * such as Text Annotation, Association, Gateway into two parts: 
 * 
 * element type + delimiter + parent id
  */
const ID_DELIM = '*';

export const objToList = (obj: {[key: string]: any} = {}): KeyValueList<string, string> => {
  return Object.entries(obj).map(([key, value]) => ({key, value}))
}

export const enumToList = (obj: object = {}): KeyValueList<string, string> => {
  return Object.entries(obj).map(([value, key]) => ({key, value}));
}

/** Convert an array of objects to a KeyValueList 
 * based on specified `objKey` and `objValue`
 * which are the properties of an object in the array 
 * */
export const arrayToList = <T>(arr: T[], objKey: keyof T,  objValue: keyof T) => {
  arr = Array.isArray(arr) ? arr : [];
  return arr.map(item => ({key: item[objKey], value: item[objValue]}));
}

export const arrayToList1 = <T>(arr: T[], objKey: keyof T,  objValue: keyof T,objisCheck: keyof T) => {
  arr = Array.isArray(arr) ? arr : [];
  return arr.map(item => ({key: item[objKey], value: item[objValue],objisCheck: item[objisCheck]}));
}

export const listToTypeArray = <T>(list: KeyValueList<string, string>, key: keyof T, value: keyof T) => {
  list = Array.isArray(list) ? list : [];
  return list.map(item =>  {
    const converted: any = {};
    converted[key] = item.key;
    converted[value] = item.value;
    return converted;
  })
}

export const primitiveArrayToList = <T>(arr: T[]): KeyValueList<T, T> => {
  arr = Array.isArray(arr) ? arr : [];
  return arr.map(item => ({key: item, value: item}))
}


export const keyValueListToKeyList = <K = string, V = string>(list: KeyValueList<K, V>): K[] => {
  if (!Array.isArray(list)) return [];
  return list.reduce((acc, curr) => {
    curr.key ? acc.push(curr.key) : acc.push(curr);
    return acc;
  }, []);
}

export const sanitizeFormArray = <T>(arr: any[], key?: keyof T) => {
  return arr.map((group) => {
    if (key) {
      group[key] = group.checked;
    }
    return group as T;
  })
}

export const toFormGroup = <T = any>(item: T, opts: FormOptions = {}) => {
  const group: any = {};
  const validators = [];
  if (typeof item === 'string' || typeof item === 'number') {
    const obj: any = {};
    obj[item] = item;
    item = obj;
  }
  Object.entries(item || {}).forEach(([key, value]) => {
    group[key] = new UntypedFormControl(value);
  });
  
  opts.deletable = opts.deletable ?? true;
  if (opts.deletable)
    group.deletable = new UntypedFormControl();
  
  if (opts.addCheckbox)
    group.checked = new UntypedFormControl(false);
  if (opts.required) {
    validators.push(Validators.required);
  }
  return new UntypedFormGroup(group, validators);
}

export const toFormArray = <T = any>(items: T[] = [], opts: FormOptions = {}) => {
  const transformed = items.map(item => toFormGroup(item, opts));
  return new UntypedFormArray(transformed);
}

/** 
 * Construct id of this form:
 * `type` + {@link ID_DELIM} + `parentId`
 */
export const constructId = (type: any, parentId: string) => type.toString() + ID_DELIM + parentId;

/** Based on {@link ID_DELIM} splits `id` into 
 * element's type and it's parent's id 
 * and returns them in an object
 */
export const deconstructId = (id: string) => {
  const [type, parentId] = id.split(ID_DELIM) as [ElementType, string];
  return {type, parentId};
};

export type KeyValueList<K, V> = Array<{key: K, value: V}>;

type FormOptions = {
  addCheckbox?: boolean;
  required?: boolean;
  deletable?: boolean;
}