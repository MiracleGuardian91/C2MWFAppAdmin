import { Component, inject, Input } from '@angular/core';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'app-grid-header-mapper',
  templateUrl: './grid-header-mapper.component.html',
  styleUrls: ['./grid-header-mapper.component.scss'],
  imports: [CommonModule,NgSelectModule, FormsModule, ReactiveFormsModule]
  
})
export class GridHeaderMapperComponent {
  @Input() parentForm!: UntypedFormGroup;
  readonly #ApiService = inject(DataModelerApiService);
  columnNames = [];
  allAvaliableColumns =[];
  dataTypes = ['DropDown', 'Text', 'Number', 'Date'];
  @Input() headerMapping;
  newRow = { objectKey: null, displayName: '', dataType: null, width: '' };
  masterSelected: boolean = false;
  constructor( private readonly toastr: ToastrService,) { }

 ngOnInit(): void {
  if(this.shouldAllowCallAPI){
   this.getColumnsName(); 
  }
 }

  addRow() {
    const hasInvalidValue  = Object.values(this.newRow).some(val => val === '' || val === null || val === undefined);
    if (hasInvalidValue) {
      return;
    }
    const totalWidth = this.getTotalWidth() +  Number(this.newRow.width) || 0;;
    if (totalWidth > 100) {
        this.toastr.error('Total width cannot be greater than 100%');  
        return;
     }
    this.headerMapping.push({
      ...this.newRow,
      isEditing: false,
      selected: false
    });
    this.newRow = { objectKey: null, displayName: '', dataType: null, width: '' };
    this.filterAvailableColumns();
  }

  editRow(row: any) {
   
    row.isEditing = true;
  }

  saveRow(row: any) {
    const totalWidth = this.getTotalWidth();
    if (totalWidth > 100) {
        this.toastr.error('Total width cannot be greater than 100%');  
       return;
    }
    this.filterAvailableColumns();
    row.isEditing = false;
  }

  deleteRow(index: number) {
    this.headerMapping.splice(index, 1);
  }

  deleteSelectedRows() {
    this.headerMapping = this.headerMapping.filter(row => !row.selected);
  }

  cancelEdit(row: any) {
    row.isEditing = false;
  }

  checkUncheckAll() {
    this.headerMapping.forEach(row => {
      row.selected = this.masterSelected;
    });
  }

  isAllSelected() {
    this.masterSelected = this.headerMapping.length > 0 && this.headerMapping.every(row => row.selected);
  }

  shouldAllowCallAPI(): boolean {
    const { dataSrc, data } = this.parentForm?.value || {};
    const requestBody = data?.dependentbody;
    return !!(dataSrc?.value && data?.endpoint && data?.methodtype && requestBody && Object.keys(requestBody).length);
  }


  getColumnsName() {
    const { dataSrc, data } = this.parentForm?.value || {};
    const requestBody = data?.dependentbody;
    const dataSource = dataSrc?.value;
    const endpoint = data?.endpoint;
    const methodtype = data?.methodtype.key || data?.methodtype;
    const body = JSON.parse(requestBody);

    this.#ApiService.callDynamicApi(dataSource, endpoint, methodtype, body).subscribe((response) => {
      if (Array.isArray(response.Data)) {
        this.columnNames = response.Data;
        const firstItem = response.Data[0];
        if (firstItem) {
          this.columnNames = Object.keys(firstItem);
          this.allAvaliableColumns = this.columnNames;
          if(this.columnNames){
            this.filterAvailableColumns();
          }
        }
      }
    })
  }

 filterAvailableColumns() {
  this.columnNames = this.allAvaliableColumns.filter(
    col => !this.headerMapping.some(h => h.objectKey === col)
  );
}


  
getTotalWidth(): number {
  return this.headerMapping
    .map(row => Number(row.width) || 0)
    .reduce((a, b) => a + b, 0);
 }
 preventIfTotalWidthExceeds(event: KeyboardEvent, currentRow: any): void {
  const key = event.key;

  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
  if (allowedKeys.includes(key)) {
    return;
  }

  if (!/^\d$/.test(key)) {
    event.preventDefault();
    return;
  }

  const currentValue = String(currentRow.width ?? '');
  const selectionStart = (event.target as HTMLInputElement).selectionStart ?? currentValue.length;
  const selectionEnd = (event.target as HTMLInputElement).selectionEnd ?? currentValue.length;

  const newValue =
    currentValue.substring(0, selectionStart) +
    key +
    currentValue.substring(selectionEnd);

  const updatedWidth = parseInt(newValue, 10) || 0;

  const otherWidths = this.headerMapping
    .filter(row => row !== currentRow)
    .map(row => Number(row.width) || 0);

  const total = otherWidths.reduce((a, b) => a + b, 0) + updatedWidth;

  if (total > 100) {
    event.preventDefault();
  }
}


}
