import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MessageService } from '@app/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactivePrompt } from '@lib/reactive-prompt';
import { ComponentType } from 'ngx-toastr';
import { takeWhile } from 'rxjs/operators';
import { DiagramEl } from './bpmn';
import { Workflow } from './wf.model';

@Directive()
export abstract class ElementDetail<Props, Data, Payload>
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() readonly workflow: Workflow;
  @Input() set config(o: DetailConfig) {
    this.newElement = o.newElement;
    this.data = o.data;
    this.element = o.element;
  }
  @Output() readonly updated = new EventEmitter<Payload>();
  newElement: boolean;
  data: Data;
  element: DiagramEl;
 
  readonly editorConfig = {
    removePlugins: ['ImageUpload', 'EasyImage', 'MediaEmbed', 'Table'],
  };
  form: UntypedFormGroup;
  submitted = false;
  componentActive = true;
  formActions: FormAction[] = [];
  constructor(
    protected fb: UntypedFormBuilder,
    public ref: NgbActiveModal,
    protected msg: MessageService // public ref: MatDialogRef<ElementDetail<Props, Data, Payload>>
  ) {}

  get f() {
    return this.form.controls;
  }

  get published() {
    return this.workflow?.WorkflowMode === 'Published';
  }

  private initFormActions() {
    this.formActions.forEach((action) => {
      this.form
        .get(action.controlName)
        .valueChanges.pipe(takeWhile((_) => this.componentActive))
        .subscribe((val) => action.handler(val));
    });
  }

  protected afterFormInit() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initFormActions();
    this.afterFormInit();
  }

  onSubmit(): void {}

  onCancel() {
    this.ref.close();
  }

  beforeItemDelete(prompt: ReactivePrompt<number>) {
    this.msg.showMessage('Warning', {
      body: `Are you sure you want to delete?`,
      btnText: 'Delete',
      isConfirmation: true,
      callback: () => prompt.confirm(),
    });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}

/** Configuration necessary to successfully initialize Element's detail page */
export interface DetailConfig {
  element: DiagramEl;
  component: ComponentType<any>;
  data: any;
  newElement?: boolean;
}

/** When `controlName` value changes
 * apply `cb` and
 * pass that callback to a `handler` function
 */
export interface FormAction {
  controlName: string;
  handler: (val: any) => any;
}
