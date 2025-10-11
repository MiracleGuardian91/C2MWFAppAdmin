import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-dependent-fields-mapper',
  templateUrl: './dependent-fields-mapper.component.html',
  styleUrls: ['./dependent-fields-mapper.component.scss'],
  standalone : true,
  imports : [CommonModule,NgSelectModule, FormsModule, ReactiveFormsModule]
})
export class DependentFieldsMapperComponent implements OnInit {
 @Input() parentForm!: UntypedFormGroup;
 readonly #ApiService = inject(DataModelerApiService);
  columnNames = [];
  dataTypes = ['Text', 'number']
  @Input() mappingDmos;
  newRow = { objectKey: null, mapDmoName : null};
  masterSelected: boolean = false;
  avaliableDMOs: any[] = [];
  constructor(private readonly route: ActivatedRoute) { }
 
  private readonly bmId = this.route.snapshot.queryParams.BMID;
  ngOnInit(): void {
    this.parentForm.valueChanges.subscribe(() => {
              this.shouldAllowCallAPI();
   });
  }

  addRow() {
    const shouldAdd = Object.values(this.newRow).every(val => val === '' || val === null || val === undefined);
    if (shouldAdd) {
      return;
    }
    this.mappingDmos.push({
      ...this.newRow,
      isEditing: false,
      selected: false
    });
    this.newRow = { objectKey: null, mapDmoName: null };
  }

  editRow(row: any) {
    row.isEditing = true;
  }

  saveRow(row: any) {
    row.isEditing = false;
  }

  deleteRow(index: number) {
    this.mappingDmos.splice(index, 1);
  }

  deleteSelectedRows() {
    this.mappingDmos = this.mappingDmos.filter(row => !row.selected);
  }

  cancelEdit(row: any) {
    row.isEditing = false;
  }

  checkUncheckAll() {
    this.mappingDmos.forEach(row => {
      row.selected = this.masterSelected;
    });
  }

  isAllSelected() {
    this.masterSelected = this.mappingDmos.length > 0 && this.mappingDmos.every(row => row.selected);
  }

  shouldAllowCallAPI(): boolean {
    const { data } = this.parentForm?.value || {};
    const requestBody = data?.dependentbody;
    return !!(data?.dependentdatasrc && data?.endpoint && data?.methodtype && requestBody && Object.keys(requestBody).length);
  }



getColumnsNames() {
  const { data } = this.parentForm?.value || {};
  const requestBody = data?.dependentbody;
  const dataSource = data?.dependentdatasrc?.value || data?.dependentdatasrc;
  const endpoint = data?.endpoint;
  const methodtype = data?.methodtype?.key || data?.methodtype;
  const body = JSON.parse(requestBody);
  body.GridFilters = []

  const columnsApi$ = this.#ApiService.callDynamicApi(dataSource, endpoint, methodtype, body);
  const dmosApi$ = this.#ApiService.getdmobybmid(this.bmId);

  forkJoin([columnsApi$, dmosApi$]).subscribe(([columnsResponse, dmosResponse]) => {

    columnsResponse =  columnsResponse.Data;
    if (Array.isArray(columnsResponse.Data)) {
      const firstItem = columnsResponse.Data[0];
      if (firstItem) {
         this.columnNames = Object.keys(firstItem);
      }
    }
    this.avaliableDMOs = dmosResponse.Data || [];
  });
}

getDmoDisplayName(nam: string): string {
  const dmo = this.avaliableDMOs?.find(d => d.NAM === nam);
  return dmo ? `${dmo.DISPNAME} (${dmo.NAM})` : nam;
}



}


