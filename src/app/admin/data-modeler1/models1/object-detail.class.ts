import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { FormAction } from '@app/admin/wf/wfd/models/element-detail.class';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { takeWhile } from 'rxjs/operators';
import { DataModelerResponse } from '.';

@Directive()
export abstract class ObjectDetail<Data, Parent>
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() title: string;
  @Input() data: Data | undefined;
  @Input() dmr: DataModelerResponse;
  @Input() parent: Parent | undefined;
  @Input() formActions: FormAction[] = [];
  @Output() output = new EventEmitter<Data>();

  public form: UntypedFormGroup;

  public submitted = false;
  public newObject = false;

  protected componentActive = true;

  get f() {
    return this.form.controls as Record<keyof Data, AbstractControl>;
  }

  constructor(public ref: NgbActiveModal, protected fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.beforeFormInit();
    this.initForm();
  }

  ngAfterViewInit() {
    this.initFormActions();
    this.afterFormInit();
  }
  private initFormActions() {
    this.formActions.forEach((action) => {
      this.form
        .get(action.controlName)
        .valueChanges.pipe(takeWhile((_) => this.componentActive))
        .subscribe((val) => action.handler(val));
    });
  }

  protected beforeFormInit() {}

  protected initForm() {}

  protected afterFormInit() {}

  public onCancel() {
    this.ref.close();
  }

  public onSubmit() {}

  ngOnDestroy() {
    this.componentActive = false;
  }
}
