import { AbstractControl } from "@angular/forms";
import { ListConfig } from "@app/admin/lib/list/list-config.model";
import { Observable, of } from "rxjs";
import { ObjectControlConfig, ObjectControlType } from "../models1";

export class ObjectControl<T> implements ObjectControlConfig<T> {
  name: keyof T;
  label?: string;
  type: ObjectControlType;
  show: Observable<boolean>;
  options?: Observable<any[]>;
  multiple?: boolean;
  hint?: string;
  required?: boolean;
  readonly?: boolean;
  class?: string;
  group?: AbstractControl;
  config?: ListConfig<any>;
  groupOptionsBy?: string;
  placeholder?: string;
  
  constructor(config: ObjectControlConfig<T>) {
    this.name = config.name;
    this.label = config?.label || config.name as string;
    this.type = config.type || 'text';
    this.show = config.show || of(true);
    this.options = config.options;
    this.multiple = config.multiple;
    this.hint = config.hint;
    this.required = config.required;
    this.readonly = config.readonly;
    this.class = config.class;
    this.group = config.group;
    this.config = config.config;
    this.groupOptionsBy = config.groupOptionsBy;
    this.placeholder = config.placeholder || '';
  }
}