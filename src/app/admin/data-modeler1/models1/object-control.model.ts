import { AbstractControl } from "@angular/forms";
import { ListConfig } from "@app/admin/lib/list/list-config.model";
import { Observable } from "rxjs";


export type ObjectControlConfig<T> = {
  name: keyof T,
  label?: string,
  placeholder?: string;
  type?: ObjectControlType,
  show?: Observable<boolean>,
  options?: Observable<any[]>,
  groupOptionsBy?: string;
  multiple?: boolean,
  hint?: string,
  required?: boolean,
  readonly?: boolean,
  class?: string,
  group?: AbstractControl,
  config?: ListConfig<any>,

}

export type ObjectControlType =  'select' | 'text' | 'number' | 'rich' | 'dropdown' | 'textarea' | 'switch' | 'list' | 'radio';