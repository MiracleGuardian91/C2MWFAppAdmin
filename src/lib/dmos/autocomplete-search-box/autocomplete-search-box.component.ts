import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { GridConfiguration, GridResponse, UtilityService } from '@app/core';
import { environment } from '@env/environment';
import { combineLatest, EMPTY, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, exhaustMap, map, skip, startWith, switchMap, takeWhile, tap } from 'rxjs/operators';
import { AutoCompleteSearchBoxDmo } from '../models';
import { NgIf, NgClass, NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';

@Component({
    selector: 'app-autocomplete-search-box',
    templateUrl: './autocomplete-search-box.component.html',
    styleUrls: ['./autocomplete-search-box.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
        MatAutocompleteTrigger,
        MatAutocomplete,
        NgFor,
        MatOption,
        AsyncPipe,
    ],
})
export class AutocompleteSearchBoxComponent implements OnInit, OnDestroy, OnChanges {
  @Input() view: 'new' | 'edit' | 'copy' | 'batchUpdate';
  @Input() parentForm: UntypedFormGroup;
  @Input() dmo: AutoCompleteSearchBoxDmo;
  @Input() dmoGUID: string;
  @Input() triggered: boolean;
  @Input() submitted: boolean;
  @Input() datasourceurl: string = null;

  private componentActive = true;
  private control: AbstractControl;
  private mappings: Array<{Name: string, GUID: string}> = [];
  private dependencyDmos: Array<{Name: string, GUID: string}> = [];
  private dependentDmos: Array<{Name: string}> = [];
  private config: GridConfiguration;
  private filtersLength = 0;
  private selectedOption = new Subject<any>();
  
  public results$: Observable<any[]>;
  public loading$ = new Subject<boolean>();
  private dmoKeyValList = [];
  
  constructor(private utility: UtilityService, private http: HttpClient) { }

  get dependencyDmosValueChanges() {
    if (this.dependencyDmos.length > 0) {
      return combineLatest(
        this.dependencyDmos.map(({Name}) => 
          this.parentForm.get(Name).valueChanges.pipe(
            startWith(this.parentForm.get(Name).value)),
         )
      );
    }
    return of([]);
  }

  ngOnInit() {
    this.parseDmo(this.dmo);
    this.control = this.parentForm.get(this.dmo.Name);
    if (this.config) this.results$ = this.search();

    this.selectedOption
      .pipe(takeWhile(_ => this.componentActive))
      .subscribe(option => this.populateFormFields(option));
  }

  ngOnChanges(changes) {
    if (changes.dmo && !changes.dmo.firstChange) {
      this.parseDmo(this.dmo);
      if (this.config) this.results$ = this.search();
      else this.results$ = EMPTY;
      this.loading$.next(false);      
    }
    
  }

  public updateSelectedOption(option: any) {
    this.selectedOption.next(option)
  }

  private search() {
    return combineLatest(
      this.control.valueChanges.pipe(
        distinctUntilChanged(),
        startWith(this.control.value),
        skip(this.dmo.EmitOnStart && this.view === 'new' ? 0 : 1),
      ), 
      this.dependencyDmosValueChanges).pipe(
        debounceTime(1000), 
        tap(_ => this.loading$.next(true)),
        map(([mainValue, dependencyValues]) => this.constructPayload(mainValue, dependencyValues)),
        switchMap(payload => this._request<any>(payload)
          .pipe(
            catchError(_ => {
              this.loading$.next(false);
              return of({Data: []})
            })
          )
        ),
        map(res => res.Data),
        tap(list => {
          if (list.length === 1 && list[0][this.dmo.DisplayValue] === this.control.value) {
            this.populateFormFields(list[0]);
          }
        }),
        tap(_ => this.loading$.next(false)),
    )  
  }
  
  private populateFormFields(option: any) {
    this.mappings.forEach(mapping => {
      const mappedControl = this.parentForm.get(mapping.Name);
      if (mappedControl) {
        mappedControl.patchValue(option[mapping.GUID], {emitEvent: true});
        mappedControl.markAsDirty();
      }
    });
  }

  private parseDmo(dmo: AutoCompleteSearchBoxDmo) {
    try {
      this.config = JSON.parse(dmo.Model) || null;
      if (this.config) {
        this.filtersLength = this.config.GridFilters.length;
      }
    } catch (err) {
      this.config = null;
    }
    if (dmo.Mappings) {
      this.mappings = JSON.parse(dmo.Mappings) || [];
    }
    if (dmo.DependencyDmos) {
      const dependencyDmos = JSON.parse(dmo.DependencyDmos);
      if (dependencyDmos[0].Name) {
        this.dependencyDmos = dependencyDmos;
      }
    }
    if (dmo.DependentDmos) {
      const dependentDmos = JSON.parse(dmo.DependentDmos);
      if (dependentDmos[0].Name) {
        this.dependentDmos = dependentDmos;
      }
    }
  }

  private constructPayload(mainValue: string, dependencyValues: string[]) {
    let fieldname: string = this.dmo.DisplayValue;

    if (this.dmoKeyValList.indexOf(fieldname) > -1) fieldname += '_val';
    const mainFilter = this.utility.generateGridFilter('Column_Filter', fieldname, 'CONTAINS', mainValue);
    const depFilters = dependencyValues.map((val, i) => {
      const guid = this.dependencyDmos[i].GUID;
      return this.utility.generateGridFilter('Column_Filter', guid, 'EQUAL', val);
    });

    if (mainFilter.GridConditions.length == 0) {
      mainFilter.LogicalOperator = 'And';
      mainFilter.GridConditions.push(this.utility.generateGridCondition('NOT_EMPTY', 'NOT_EMPTY'));
      mainFilter.GridConditions.push(this.utility.generateGridCondition('NOT_NULL', 'NOT_NULL'));
    }

    this.config.GridFilters = this.config.GridFilters.slice(0, this.filtersLength);
    this.config.GridFilters.push(mainFilter, ...depFilters);  
    this.dependentDmos.forEach(({Name}) => {
      const depControl = this.parentForm.get(Name);
      depControl?.patchValue(null);
    });
    return this.config;
    
  }

  private _request<T>(config: GridConfiguration): Observable<GridResponse<T>> {
    let url = `${environment.Setting.BaseAPIUrl}/listview/getProcessData`;

    if (this.datasourceurl) {
      url = this.datasourceurl;
    }

    const headers = {
      noSpinner: 'true',
      accessToken: localStorage.getItem('AccessToken'),
    }

    return this.http.post<GridResponse<T>>(url, config, {headers});
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
