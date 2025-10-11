import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { AbstractControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { takeWhile } from 'rxjs/operators';
import { ComparisonOperator, DateWithCalendarDmo } from '../models/date-with-calendar-dmo.model';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-date-with-calendar',
    templateUrl: './date-with-calendar.component.html',
    styleUrls: ['./date-with-calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ReactiveFormsModule, NgClass, NgbInputDatepicker, NgIf]
})
export class DateWithCalendarComponent implements OnInit, OnDestroy {
  @Input() parentForm: UntypedFormGroup;
  @Input() dmo: DateWithCalendarDmo;
  @Input() dmoGUID: string;
  @Input() triggered: boolean;
  @Input() submitted: boolean;

  control: AbstractControl;
  minDate = null;
  maxDate = null;

  private componentActive = true;

  get f() {
    return this.parentForm.controls;
  }
  constructor(private readonly ngbDate: NgbDateParserFormatter) { }

  ngOnInit(): void {
    this.control = this.parentForm.get(this.dmo.Name);
    this.setDateRange();
    this.handleComparisonDmo();
  }

  stringifyDateStruct(date: NgbDateStruct) {
    return this.ngbDate.format(date);
  }

  dateMasks(event: any) {
    var v = event.target.value;
    if (v.match(/^\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if(v > 7){
      event.target.value = v.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
  }

  private setDateRange() {
    if (this.dmo.rangeValue) {
      const split = this.dmo.rangeValue.split('-');
      if (split.length === 2) {
        const millisPerDay = 86_400_000;
        let [min, max] = split.map(v => +v);
        const now = Date.now();
        min = now - min * millisPerDay;
        max = now + max * millisPerDay;
        this.minDate = this.parseDate(new Date(min));
        this.maxDate = this.parseDate(new Date(max));
      }

    }
  }

  private parseDate(date: Date): NgbDateStruct {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    }
  }

  private updateMinMaxDate(date: NgbDateStruct, operator: ComparisonOperator) {
    const {year, month, day} = date;
    if (operator === 'LT') this.maxDate = {year, month, day: day - 1};
    else if (operator === 'LE') this.maxDate = date;
    else if (operator === 'GT') this.minDate = {year, month, day: day + 1};
    else if (operator === 'GE') this.minDate = date;
  }

  private handleComparisonDmo() {
    if (this.dmo.Options) {
      const [ Dmo, Operator ] = (this.dmo.Options as string).split('~~~');
      this.dmo['comparisonDataDmo'] = { Dmo, Operator} as any;
    }
    
    if (this.dmo.comparisonDataDmo) {
      if (this.dmo.comparisonDataDmo.Dmo && this.dmo.comparisonDataDmo.Operator) {
        const {Dmo, Operator} = this.dmo.comparisonDataDmo;
        const now = this.parseDate(new Date());
        if (this.dmo.Name === Dmo) {
          this.updateMinMaxDate(now, Operator);
          return;
        }

        const comparsionControl = this.parentForm.get(Dmo);
        if (comparsionControl?.value) {
          this.updateMinMaxDate(comparsionControl.value, Operator);
          this.dateComparisonValidation(Dmo, Operator);
        } else {
          this.dateComparisonValidation(Dmo, Operator);
        }
      }
    }
  }

  private relatedDmoDateIsHigher(relatedDmoName: string) {
    const related: NgbDateStruct = this.parentForm.get(relatedDmoName).value;
    const curr: NgbDateStruct = this.parentForm.get(this.dmo.Name).value;
    if (related && curr) {
      if (related.year > curr.year) {
        return true;
      }
      if (related.month > curr.month) {
        return true;
      }
      if (related.day > curr.day) {
        return true;
      }
      return false;
    }
    return false;
  }

  private dateComparisonValidation(relatedDmoName: string ,operator: ComparisonOperator){
    this.parentForm.get(relatedDmoName).valueChanges
      .pipe(takeWhile(_ => this.componentActive))
      .subscribe(value => {
        if (this.relatedDmoDateIsHigher(relatedDmoName)) {
          this.parentForm.get(this.dmo.Name).reset();
        }
        value && this.updateMinMaxDate(value, operator);
      });
  }

  ngOnDestroy(): void {
      this.componentActive = false;
  }

}
