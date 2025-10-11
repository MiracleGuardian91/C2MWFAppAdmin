import { ValidatorFn } from "@angular/forms";

export type ListConfig<T> = {
  columns: ListColumn<T>[];
  defaultValues?: DefaultValues<T>;
  actions?: ListOptions;
  checkbox?: boolean;
  associateCheckboxWith?: keyof T;
}

type ListColumn<T> = {
  key: keyof T;
  displayValue: string | number | null;
  placeholder?: string;
  type?: ListColumnType;
  validators?: ValidatorFn[];
  asControl?: boolean;
}

export enum ListColumnType {
  Text = 'text',
  Number = 'number',
  Date = 'date',
  Dropdown = 'dropdown',
  File = 'file',
}

export type DefaultValues<T> = Partial<Record<keyof T, any>>;

type ListOptions = {
  add?: boolean;
  edit?: boolean;
  delete?: boolean;
  download?: boolean;
}