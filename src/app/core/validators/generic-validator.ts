import { AbstractControl, ValidatorFn } from '@angular/forms';

export function genericValidator(sourceControl: AbstractControl, expression: boolean, message: string): ValidatorFn {
    if (expression) {
      sourceControl.setErrors(null);
      return null;
    } else {
      sourceControl.setErrors({validationFailed: true, message});
    }

}