import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";
import { EntityType, ObjectType } from "../models";
import { DataModelerApiService } from "../services/data-modeler-api.service";

export function checkNameValidatorAsync(service: DataModelerApiService, type: EntityType, id: number, version: string, processName: string): AsyncValidatorFn {
  return (source: AbstractControl) => {
    return service.checkNameValidity(type, id, source.value, version, processName).pipe(
      map(exists => exists ? {nameExists: true, message: 'Duplicate name'} : null)
    )
  }
}

export function checkNameValidatorSync<T>(allObjects: T[], nameKey: keyof T): ValidatorFn {
  return (source: AbstractControl) => {
    if (source.value) {
      return allObjects.some((obj: unknown) => (obj[nameKey] as string).toLowerCase() === source.value.toLowerCase())
        ? {nameExists: true, message: 'Duplicate name'}
        : null
    }
    return null;
  }
}