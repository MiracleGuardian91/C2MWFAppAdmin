import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { enumToList } from '@app/admin/wf/wfd/util/helpers';
import { of } from 'rxjs';
import { BM, ObjectControl } from '../../classes';
import { IBM, ObjectDetail, Status } from '../../models';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';

@Component({
    selector: 'app-bm-detail',
    templateUrl: './bm-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgFor,
        ObjectControlComponent,
        AsyncPipe,
    ],
})
export class BmDetailComponent extends ObjectDetail<BM, undefined> {
  title = 'Business Model';

  public controls: ObjectControl<IBM>[];
  
  private status = enumToList(Status);

  initForm() {
    this.form = this.fb.group({
      Name: [this.data.Name],
      DisplayName: [this.data.DisplayName, [Validators.required]],
      Version: [this.data.Version, [Validators.required]],
      ProcessName: [this.data.ProcessName],
      Status: [this.status.find(s => s.key == this.data.Status), [Validators.required]],
      IntegrateWorkspace: [+this.data.IntegrateWorkspace],
      Description: [this.data.Description],
    });

    this.controls = [
      new ObjectControl({name: 'Name', readonly: true, required: true}),
      new ObjectControl({name: 'DisplayName', label: 'Friendly Name', required: true}),
      new ObjectControl({name: 'Version', readonly: true}),
      new ObjectControl({name: 'ProcessName', label: 'Process Name', readonly: true}),
      new ObjectControl({
        name: 'Status', type: 'dropdown', 
        required: true, options: of(this.status),
      }),
      new ObjectControl({name: 'IntegrateWorkspace', label: 'Integrate Workspace', type: 'switch'}),
      new ObjectControl({name: 'Description', label: 'Long Description', type: 'rich', class: 'span-12'}),
    ];
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload: IBM = {
        ...this.data.unreferenceAll(),
        ...val,
        Status: val.Status?.key || val.Status,
        IntegrateWorkspace: +val.IntegrateWorkspace,
      };
      this.output.emit(payload as any);
      this.ref.close(payload);
    }
  }
}
