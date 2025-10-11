import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import {GridConfiguration, GridResponse, ListviewService} from '@app/core';
import {MultiSelectDropDownListDmo} from '../models';
import {UtilityService} from '@app/core/services/utility.service';
import {BehaviorSubject, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, takeWhile, tap} from 'rxjs/operators';
import { NgIf, NgClass, NgFor, SlicePipe } from '@angular/common';
import { NgSelectComponent, NgMultiLabelTemplateDirective } from '@ng-select/ng-select';

@Component({
    selector: 'app-multiselect-dropdown',
    templateUrl: './multiselect-dropdown.component.html',
    styleUrls: ['./multiselect-dropdown.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, NgSelectComponent, NgClass, NgMultiLabelTemplateDirective, NgFor, SlicePipe]
})
export class MultiselectDropdownComponent implements OnInit, OnDestroy {
  @Input() parentForm: UntypedFormGroup;
  @Input() dmo: MultiSelectDropDownListDmo;
  @Input() dmoGUID: string;
  @Input() triggered: boolean;
  @Input() submitted: boolean;
  @Input() inGridEdit: boolean;

  public items: Option[];
  public input$ = new BehaviorSubject<string>('');

  private componentActive = true;
  private config: GridConfiguration;
  private responseParams: string[];
  private stopLazyLoading = false;

  constructor(
    private listView: ListviewService, 
    private utility: UtilityService,
  ) { }

  ngOnInit() {
    if (this.dmo.DataSource === 'wfapigetdata') {
      const callOption = this.dmo.Options.split('~~~');
      this.config = JSON.parse(callOption[1]);
      this.config.IsColumnListOnly = true;
      this.config.SortOrder = 'asc';
      const responseKey = callOption[0].toString().replace(/\s/g, '');
      this.responseParams = responseKey.split('-');
      this.config.SortColumn = this.responseParams[1];
      this.onSearch();
    } else if (this.dmo.DataSource === 'values') {
      const values = this.dmo.Options.split(',');
      this.items = values.map(v => ({value: {id: v, text: v}, label: v}));
    }
  }


  private _getData(query: string, incrementPageNumber?: boolean) {
    if (this.config) {
      const filter = this.utility.generateGridFilter('Column_Filter', this.responseParams[1], 'CONTAINS', query);
      this.config.GridFilters = [filter];  
  
      if (incrementPageNumber) {
        this.config.PageNumber += 1;
      } else {
        this.config.PageNumber = 0;
      }
  
      return this.listView.GridData(this.config).pipe(
        map(result=> this._gridDataToDropdown(result, this.responseParams)),
      );  
    } else {
      return of([]);
    }
  }

  private _gridDataToDropdown(result: GridResponse<any>, responseParams: string[]) {
    let id = '';
    let text = '';
    const output: Option[] = [];
    this.stopLazyLoading = result.Data.length === 0;
    result.Data.forEach(rowItem => {
      if (responseParams.length === 1) {
        id = rowItem[responseParams[0]];
        output.push({ value: {id, text}, label: id });
      } else if (responseParams.length === 2) {
        id = `${rowItem[responseParams[0]]}`;
        const resultText = responseParams[1].replace('(', '-').replace(')', '-').split('-');
        if (resultText.length === 1) {
          text = `${rowItem[responseParams[1]]}`;
        }
        else if (resultText.length > 1) {
          if (rowItem[resultText[1]] !== undefined)
            text = `${rowItem[resultText[0]]} (${rowItem[resultText[1]]})`;
          else
            text = `${rowItem[resultText[0]]}`;
        }
        output.push({ value: {id, text}, label: text });
      }
    });
    return output;
  }

  private onSearch() {
    this.input$.pipe(
      takeWhile(_ => this.componentActive),
      debounceTime(200),
      distinctUntilChanged(),
      tap(_ => this.stopLazyLoading = false),
      switchMap(query => this._getData(query)),
    ).subscribe(res => {
      this.items = res;
    });
  }

  public getMore(query: string) {
    if (!this.stopLazyLoading)
      this._getData(query, true).subscribe(res => this.items = this.items.concat(res));
  }

  public compareWith(option: Option, selected: SelectedOption) {
    return option.value.id === selected.id
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}

interface SelectedOption {
  id: string,
  text: string,
}

interface Option {
  value: SelectedOption,
  label: string,
}
