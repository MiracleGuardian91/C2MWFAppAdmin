import { ValidatorFn, Validators } from '@angular/forms';

export const VALID_NAME_RE = /^[a-zA-Z0-9_]*$/;

export const NAME_VALIDATORS: ReadonlyArray<ValidatorFn> = [
  Validators.required,
  Validators.pattern(VALID_NAME_RE),
  Validators.minLength(4),
  Validators.maxLength(25),
];
