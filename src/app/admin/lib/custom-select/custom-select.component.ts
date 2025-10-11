import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass, NgFor, SlicePipe } from '@angular/common';
import { NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective } from '@ng-select/ng-select';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgSelectComponent,
        NgClass,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgMultiLabelTemplateDirective,
        NgFor,
        MatProgressBar,
        SlicePipe,
    ],
})
export class CustomSelectComponent {
  @Input() parentForm: UntypedFormGroup;
  @Input() items: Array<Option>;
  @Input('controlName') formControlName: string;
  @Input() multiple = false;
  @Input() submitted = false;
  @Input() readonly = false;
  @Input() groupBy = (item) => item?.parent;
  @Input() fixedHeight = true;

  selected: Option;

  compareWith(option1: any, option2: any) {
    return option1.key === option2.key
  }

  get control() {
    return this.parentForm.get(this.formControlName);
  }

  onClick(item: Option) {
    this.selected = item;
  }
}

interface Option {
  key: string;
  value: string;
}