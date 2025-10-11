import { Component, Input } from '@angular/core';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';

import { ObjectControlConfig } from '@app/admin/data-modeler/models';
import { NgIf, NgClass, NgStyle, NgFor, AsyncPipe } from '@angular/common';
import { EditorComponent } from '../../Shared/editor/editor.component';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { ListComponent } from '../list/list.component';
import { QuillModule } from 'ngx-quill';

@Component({
    selector: 'app-object-control',
    templateUrl: './object-control.component.html',
    styleUrls: ['./object-control.component.scss'],
    host: {
        '[class]': `config?.class || 'span-6'`,
    },
    standalone: true,
    imports: [
      QuillModule,
        ReactiveFormsModule,
        NgIf,
        NgClass,
        NgStyle,
        EditorComponent,
        MatRadioGroup,
        NgFor,
        MatRadioButton,
        MatSlideToggle,
        CustomSelectComponent,
        ListComponent,
        AsyncPipe,
    ],
})
export class ObjectControlComponent<T> {
  @Input() config!: ObjectControlConfig<T>; // Ensure non-null assertion for proper initialization
  @Input() parentForm!: UntypedFormGroup; // Ensure non-null assertion
  @Input() submitted = false;
  editorConfig: any;

  constructor(readonly editorConfigService: EditorConfigService) {}
  ngOnInit() {
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
}
