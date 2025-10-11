import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReactivePrompt } from '@lib/reactive-prompt';
import { cloneDeep } from 'lodash';
import { isObservable, takeWhile } from 'rxjs';
import { DefaultValues, ListColumnType, ListConfig } from './list-config.model';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CustomSelectComponent } from '../custom-select/custom-select.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgFor,
        CdkDropList,
        CdkDrag,
        NgSwitch,
        NgSwitchCase,
        CustomSelectComponent,
        NgSwitchDefault,
    ],
})
export class ListComponent<T> implements OnInit, OnDestroy {
  @Input() parentForm: UntypedFormGroup;
  @Input() controlName: string;
  @Input() config: ListConfig<T>;
  @Input() withPrompt = false;
  
  @Output() readonly beforeDelete = new EventEmitter<ReactivePrompt<number>>();
  @Output() readonly itemDeleted = new EventEmitter<T>();
  @Output() readonly fileUpload = new EventEmitter<File>();
  @Output() readonly fileDownload = new EventEmitter<any>();
  newItem: UntypedFormGroup;
  
  selectAll = new UntypedFormControl(false);
  private valueBeforeEdit: any = {};
  private controlsReadonly = [];
  private checkedlst = [];
  private componentActive = true;
  private isEditMode = false;

  bodyElement: HTMLElement = document.body;

  defaultValues: DefaultValues<T> = {};
  constructor() { }

  get list() {
    return this.parentForm.get(this.controlName) as UntypedFormArray;
  }

  get someSelected() {
    return this.config?.checkbox 
      ? this.list?.controls?.findIndex(group => group.get('checked')?.value)
      : -1;
  }

  ngOnInit(): void {
    this.config.columns.forEach(col => this.valueBeforeEdit[col.key as (string | number)] = null);
    this.controlsReadonly = this.list.controls.map(_ => true);
    this.newItem = this.toFormGroup();
    if (this.config.checkbox) {
      this.selectAll.valueChanges
        .pipe(takeWhile(_ => this.componentActive),)
        .subscribe(selected => this.list.controls
            .forEach(group => group.get('checked')
            ?.patchValue(selected))
        );
    }
    this.handleDefaultValues();
  }

  private handleDefaultValues() {
    Object.entries(this.config.defaultValues || {}).forEach(([key, v]) => {
      this.defaultValues[key] = v;
      if (isObservable(v)) {
        const col = this.config.columns.find(c => c.key === key);
        if (col.type === ListColumnType.Dropdown) {
          this.defaultValues[key] = [];
        }
        v.subscribe(res => this.defaultValues[key] = res)
      }
    })
  }

  onAdd() {
    if (this.newItem.valid) {
      const value = cloneDeep(this.newItem.value);
      this.list.push(this.toFormGroup(value));
      this.controlsReadonly.push(true);
      this.newItem.reset();
    }
  }

  onEdit(index: number) {
    this.isEditMode = true;
    this.valueBeforeEdit = this.list.at(index).value;
    this.config.columns.forEach(col => {
      if (col.type === ListColumnType.Dropdown) {
        const val = this.valueBeforeEdit[col.key];
        const controlVal = val;
        // const controlVal = val ? {key: val, value: val} : null;
        this.list.at(index).get(col.key as string).patchValue(controlVal) 
      }
    })
    this.controlsReadonly[index] = false;
  }
  
  onCancel(index: number) {
    this.isEditMode = false;
    this.controlsReadonly[index] = true;
    this.list.at(index).patchValue(this.valueBeforeEdit);
  }

  onUpdate(index: number) {
    const group = this.list.at(index);
    if (group.valid) {
      this.controlsReadonly[index] = true;
    }
    this.isEditMode = false;
  }

  onDownload(index: number, controlName: string) {
      const filename = this.list.at(index).get(controlName).value;
      this.fileDownload.emit(filename);
  }

  fileHandler(files: FileList, controlName: string) {
    const file = files.item(0);
    this.newItem.get(controlName).patchValue(file.name, { emitEvent: true });
    this.fileUpload.emit(file);
  }

 isAllSelected()
  {

    this.checkedlst=[];
    for(let i =0;i<this.list.controls.length;i++)
    {
      if(this.list.at(i).value['checked'])
      {
        this.checkedlst.push(this.list.at(i).value);
      }
    }
    if(this.checkedlst.length===this.list.controls.length)
    {
      this.selectAll = new UntypedFormControl(true);
      this.newItem = this.toFormGroup();
      if (this.config.checkbox) {
        this.selectAll.valueChanges
          .pipe(takeWhile(_ => this.componentActive),)
          .subscribe(selected => this.list.controls
              .forEach(group => group.get('checked')
              ?.patchValue(selected))
          );
      }
    }else
    {
      this.selectAll = new UntypedFormControl(false);
      this.newItem = this.toFormGroup();
      if (this.config.checkbox) {
        this.selectAll.valueChanges
          .pipe(takeWhile(_ => this.componentActive),)
          .subscribe(selected => this.list.controls
              .forEach(group => group.get('checked')
              ?.patchValue(selected))
          );
      }
    } 
   
  }
  
  
  onDelete(index: number, ignorePrompt = true) {
    const run = () => {
      let item = this.list.at(index).value;

      if (item.checked) {
        const {checked, ...rest} = item;
        item = rest;
      }
      this.itemDeleted.emit(item);
      this.list.removeAt(index);
      this.controlsReadonly = this.controlsReadonly.filter((_, i) => i !== index);
      if (this.list.controls.length === 0) {
        this.selectAll.patchValue(false);
      }
    };
    if (this.withPrompt && !ignorePrompt) {
      const prompt = new ReactivePrompt(index);
      this.beforeDelete.emit(prompt);
      prompt.result$.subscribe(res => res !== null && run())
    } else {
      run();
    }
  }

  onDeleteSelected() {
    const run = () => {
      while (this.someSelected !== -1) {
        this.onDelete(this.someSelected);
      }
    }
    if (this.withPrompt) {
      const prompt = new ReactivePrompt(this.someSelected);
      this.beforeDelete.emit(prompt);
      prompt.result$.subscribe(res => res !== null && run())
    } else {
      run();
    }
  }

  isReadonly(index: number) {
    return this.controlsReadonly[index] ?? true;
  }


  private toFormGroup(value?: any) {
    const group = {};
    if (this.config.checkbox) {
      group['checked'] = new UntypedFormControl(this.selectAll.value);
    }
    if (this.config.actions?.delete) {
      group['deletable'] = new UntypedFormControl();
    }
    this.config.columns.forEach(({key, validators}) => {
      group[key as string | number] = new UntypedFormControl(value && value[key] || '', validators ? validators : []);
    });
    return new UntypedFormGroup(group);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  dragStart(event: CdkDragDrop<string[]>) {
    this.bodyElement.classList.add('inheritCursors');
    this.bodyElement.style.cursor = 'move';
  }

  drop(event: CdkDragDrop<string[]>) {
    this.bodyElement.classList.remove('inheritCursors');
    this.bodyElement.style.cursor = 'unset';
    moveItemInArray(this.list.controls, event.previousIndex, event.currentIndex);
    moveItemInArray(this.list.value, event.previousIndex, event.currentIndex);
  }

  canDrag() {
    return this.isEditMode;
  }

}
