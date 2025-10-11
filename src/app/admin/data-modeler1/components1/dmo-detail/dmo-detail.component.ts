import { Component, Input, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Data } from '@angular/router';
import { KeyValue } from '@app/admin/BM/models';
import { ListColumnType, ListConfig } from '@app/admin/lib/list/list-config.model';
import {
  arrayToList,
  enumToList,
  KeyValueList,
  listToTypeArray,
  primitiveArrayToList,
  toFormArray,
} from '@app/admin/wf/wfd/util/helpers';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import {
  map,
  startWith,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { DMComponent, DMOG, ObjectControl } from '../../classes';
import {
  ASBMapping,
  CustomDataSource,
  DMOType,
  DMOUI,
  IDMComponent,
  JsonData,
  ObjectDetail,
  RegExType,
  StorageProvider,
  Validate,
  DataSource,
  DMOStatus,
  GridViewDataSource,
  MethodTypes,
} from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { GridHeaderMapperComponent } from '../grid-header-mapper/grid-header-mapper.component';
import { DependentFieldsMapperComponent } from '../dependent-fields-mapper/dependent-fields-mapper.component';
import { NgIf, NgTemplateOutlet, NgFor, AsyncPipe } from '@angular/common';
import { TabsComponent } from '../../../Shared/tabs/tabs.component';
import { TabComponent } from '../../../Shared/tab/tab.component';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';

type FormType = IDMComponent & Data & Validate;
type DmoDetailControls = ObjectControl<FormType>[];
@Component({
    selector: 'app-dmo-detail',
    templateUrl: './dmo-detail.component.html',
    styles: [`
    ::ng-deep li.form-invalid a::after {
          content: " ⚠️";
      color: #ea485b; 
    }
  `],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, TabsComponent, TabComponent,GridHeaderMapperComponent, NgTemplateOutlet, NgFor, ObjectControlComponent, AsyncPipe,DependentFieldsMapperComponent]
})
export class DmoDetailComponent extends ObjectDetail<IDMComponent, DMOG> {
 @ViewChild(GridHeaderMapperComponent)
  headerMapperComponent: GridHeaderMapperComponent;
  @ViewChild(DependentFieldsMapperComponent)
  DependentFieldsMapperComponent: DependentFieldsMapperComponent;

  @Input() uiData: DMOUI;
  @Input() readonly = false;

  public displayControls: DmoDetailControls;
  public dataControls: DmoDetailControls;
  public validationControls: DmoDetailControls;

  public displayTabHasErrors = false;
  public dataTabHasErrors = false;
  public validationTabHasErrors = false;

  public dataClass: DMComponent;

  private colorCodes$: Observable<KeyValueList<string, string>>;
  private roles$: Observable<KeyValueList<string, string>>;

  private readonly dataSources = enumToList(DataSource);
  private readonly GridViewDataSource =  enumToList(GridViewDataSource);
  private readonly customDataSources = enumToList(CustomDataSource);
  private readonly regexTypes = enumToList(RegExType);
  private readonly storageProviders = enumToList(StorageProvider);
  private readonly status = enumToList(DMOStatus);
  private readonly uploadLimit = primitiveArrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  dropDownTypeDMO: Array<{ key: string; dmoName: string; value: string }> = [];
  managedDDLTypedmo: Array<{ key: string; dmoName: string; value: string }> = [];
  gridHeaderMapper : [] = [];  
  private readonly keyValueConfig: ListConfig<KeyValue> = {
    columns: [
      {
        key: 'value',
        displayValue: 'Value',
        validators: [Validators.required],
      },
    ],
    checkbox: true,
    actions: { add: true, edit: true, delete: true },
  };

  private readonly jsonConfig: ListConfig<JsonData> = {
    columns: [
      {
        key: 'TextField',
        displayValue: 'Text Field',
        validators: [Validators.required],
      },
      {
        key: 'ValueField',
        displayValue: 'Value Field',
        validators: [Validators.required],
      },
      {
        key: 'ParentKey',
        displayValue: 'Parent Key',
        validators: [Validators.required],
      },
    ],
    checkbox: true,
    actions: { add: true, edit: true, delete: true },
  };

  private readonly mappingConfig: ListConfig<ASBMapping> = {
    columns: [
      { key: 'Name', displayValue: 'Name', validators: [Validators.required] },
      { key: 'GUID', displayValue: 'GUID', validators: [Validators.required] },
    ],
    checkbox: true,
    actions: { add: true, edit: true, delete: true },
  };

  private readonly depConfig: ListConfig<ASBMapping> = {
    columns: [
      { key: 'Name', type: ListColumnType.Dropdown,  displayValue: 'DMO Name', validators: [Validators.required] },
       { key: 'Name', displayValue: 'Column Name', validators: [Validators.required] },
    ],
    checkbox: true,
    actions: { add: true, edit: true, delete: true },
  };

 constructor(
    ref: NgbActiveModal,
    fb: UntypedFormBuilder,
    private readonly api: DataModelerApiService,
    private readonly toastr: ToastrService
  ) {
    super(ref, fb);
  }
  get f_form() {
    return this.form.controls;
  }
  beforeFormInit() {
    this.dataClass = new DMComponent(this.data, this.parent);
    console.log(this.data, this.dataClass);
    this.dataClass.type = this.uiData.type;
    this.colorCodes$ = this.api
      .getColorCodes()
      .pipe(map((list: any) => arrayToList(list, 'value', 'value')));
    const { ProcessName } = this.parent.root;
    this.roles$ = this.api
      .getRoles(ProcessName)
      .pipe(map((list: any) => arrayToList(list, 'value', 'label')));
   
    this.parent?.formData?.components.forEach((dmo) => {
        if (dmo.type === 'select') {
          if (dmo.guid != this.dataClass.guid)
            this.dropDownTypeDMO.push({
              key: dmo.guid,
              dmoName: dmo.dmoName,
              value: dmo.label,
            });
        }
        if (dmo.type === 'manageddropdown') {
          if (dmo.guid != this.dataClass.guid)
            this.managedDDLTypedmo.push({
              key: dmo.guid,
              dmoName: dmo.dmoName,
              value: dmo.label,
            });
        }
      
    });
  }

  initForm() {
    this.form = this.toFormGroup();
    this.runDynamicValidation();
    if( ['datagrd','keyvaluesearchbox'].includes(this.uiData.type) && !this.newObject && this.data.regxType ){
      try{
         this.gridHeaderMapper = JSON.parse(this.data.regxType);
      }catch{
          this.gridHeaderMapper = [];
     }
    }
   
    this.displayControls = [
      new ObjectControl({
        name: 'dmoName',
        label: 'Data Model Object Name',
        required: true,
        hint: '25 characters max',
        readonly: !this.newObject,
      }),
      new ObjectControl({
        name: 'label',
        label: 'Friendly Name',
        hint: 'The label for this field that will appear next to it',
      }),
      new ObjectControl({
        name: 'description',
        label: 'Short Description',
        type: 'text',
        hint: 'The description is text that will appear below the input field',
      }),
      new ObjectControl({
        name: 'defaultValue',
        label: 'Default Value',
        hint: `The will be the value for this field, before user interaction. 
        Having a default value will override the placeholder text. 
        Current Date for Date With Calendar DMO use xxxCurrentDatexxx in Default Value`,
      }),
      new ObjectControl({
        name: 'tooltip',
        label: 'Long Description',
        class: 'span-12',
        hint: 'The description is text that will appear below the input field',
      }),
      new ObjectControl({
        name: 'searchField',
        label: 'Parent Control',
        show: of(this.uiData.type === 'keyvaluesearchbox'),
      }),
      new ObjectControl({
        name: 'customDefaultValue',
        label: 'Child Control',
        show: of(this.uiData.type === 'keyvaluesearchbox'),
      }),
      new ObjectControl({
        name: 'compareOprator',
        label: 'Operator',
        type: 'dropdown',
        options: of(
          ['GT', 'GE', 'LT', 'LE'].map((key) => ({ key, value: key }))
        ),
        show: of(['datetime', 'staticdatebox'].includes(this.uiData.type)),
      }),
      new ObjectControl({
        name: 'comparatorSelect',
        label: 'Comparator',
        type: 'dropdown',
        options: of(this.dataClass.dmoListByType(this.uiData.type)),
        hint: 'Allow to load data on the basis of comparator control',
        show: of(['datetime', 'staticdatebox'].includes(this.uiData.type)),
      }),
      new ObjectControl({
        name: 'RangeCal',
        label: 'Range',
        placeholder: '_-_',
        hint: 'Put range to allow date before and after from current date',
        show: of(['datetime', 'staticdatebox'].includes(this.uiData.type)),
      }),
      new ObjectControl({
        name: 'showtooltip',
        label: 'Show Long Description as Help',
        type: 'switch',
      }),
      new ObjectControl({
        name: 'is24hourformat',
        label: '24 Hour Format',
        type: 'switch',
        show: of(this.uiData.type === 'datetimebox'),
      }),
      new ObjectControl({
        name: 'parentDmo',
        label: 'Parent Control',
        type: 'dropdown',
        options: of(this.dropDownTypeDMO),
        show: of(['select', 'multiselect'].includes(this.uiData.type)),
      }),
      (() => {
        const ctrl = new ObjectControl({
          name: 'parentDmo',
          label: 'Parent Control',
          type: 'dropdown',
          options: of(this.managedDDLTypedmo),
          show: of(this.uiData.type === 'manageddropdown'),
        });
        (ctrl as any).clearable = true;
        return ctrl;
      })(),
      new ObjectControl({
        name: 'status',
        label: 'Status',
        type: 'dropdown',
        options: of(this.status),
      }),
      new ObjectControl({
        name: 'rte',
        label: 'RTE Enabled',
        type: 'switch',
        show: of(
          ['textarea'].includes(
            this.uiData.type
          )
        ),
      }),  
      new ObjectControl({
        name: 'Height',
        label: 'No of Rows',
        required:true,
        hint:'No of lines',
        type: 'text',
        show: this.form
    ? this.form.get('rte')!.valueChanges.pipe(
        startWith(this.form.get('rte')!.value),
        map(rte => rte === true && this.uiData.type === 'textarea')
      )
    : of(false),
      }),
    ];

    this.dataControls = [
      new ObjectControl({
        name: 'values',
        label: 'Options',
        type: 'list',
        required: true,
        config: this.keyValueConfig,
        show: of(['selectboxes', 'radio'].includes(this.uiData.type)),
      }),
      new ObjectControl({
        name: 'values',
        label: 'Options',
        type: 'list',
        group: this.f.data,
        config: this.keyValueConfig,
        required: this.uiData.type === 'list',
        show: of(['datetimezone', 'list'].includes(this.uiData.type)),
      }),
      new ObjectControl({
        name: 'dataSrc',
        label: 'Data Source',
        type: 'dropdown',
        options: this.uiData.type ==='datagrd' ?  of(enumToList(GridViewDataSource)) : of(enumToList(DataSource)),
        show: of(['select', 'multiselect','datagrd'].includes(this.uiData.type)),
      }),
      new ObjectControl({
        name: 'values',
        label: 'Options',
        type: 'list',
        group: this.f.data,
        config: this.keyValueConfig,
        required: true,
        show: this.show(this.form, 'dataSrc', DataSource.Values, [
          'select',
          'multiselect',
        ]),
      }),
      new ObjectControl({
        name: 'fieldparams',
        label: 'Response Parameter',
        group: this.f.data,
        show: this.show(this.form, 'dataSrc', DataSource.WFApi, [
          'select',
          'multiselect',
        ]),
      }),
   
      new ObjectControl({
        name: 'modelbody',
        label: 'Model Body',
        type: 'textarea',
        group: this.f.data,
        show: this.show(this.form, 'dataSrc', DataSource.WFApi, [
          'select',
          'multiselect',
        ]),
      }),
 
      new ObjectControl({
        name: 'values',
        label: 'Color Codes',
        type: 'dropdown',
        group: this.f.data,
        multiple: true,
        options: this.colorCodes$,
        show: of(this.uiData.type === 'colorpicker'),
      }),
      new ObjectControl({
        name: 'startwith',
        label: 'Start With',
        show: of(this.uiData.type === 'id'),
      }),
      new ObjectControl({
        name: 'minlength',
        label: 'Number of digits/characters',
        show: of(this.uiData.type === 'id'),
        required: true,
      }),
      new ObjectControl({
        name: 'israndom',
        label: 'Random (incremental if unchecked)',
        type: 'switch',
        show: of(this.uiData.type === 'id'),
      }),
      new ObjectControl({
        name: 'isalphanumeric',
        label: 'Alphanumeric (numeric if unchecked)',
        type: 'switch',
        show: of(this.uiData.type === 'id'),
      }),
      new ObjectControl({
        name: 'values',
        label: 'Data Source',
        type: 'dropdown',
        multiple: true,
        group: this.f.data,
        options: this.roles$,
        show: of(this.uiData.type === 'roletype'),
      }),
      new ObjectControl({
        name: 'regxType',
        label: 'Regular Expression',
        type: 'dropdown',
        options: of(enumToList(RegExType)),
        show: of(
          ['textarea', 'textfield', 'url', 'rangebox'].includes(
            this.uiData.type
          )
        ),
      }),
      new ObjectControl({
        name: 'expression',
        label: 'Expression',
        hint: 'Create your own regular expression',
        show: this.show(this.form, 'regxType', RegExType.Custom, [
          'textarea',
          'textfield',
          'url',
          'rangebox',
        ]),
      }),
      new ObjectControl({
        name: 'expressionMessage',
        label: 'Validation Message',
        hint: 'Write your custom validation message if expression fail',
        show: of(
          ['textarea', 'textfield', 'url', 'rangebox'].includes(
            this.uiData.type
          )
        ),
      }),
      new ObjectControl({
        name: 'isEncrypt',
        label: 'Encrypt',
        type: 'switch',
        show: of(
          [
            'textarea',
            'textfield',
            'file',
            'uploadimage',
            'url',
            'rangebox',
          ].includes(this.uiData.type)
        ),
      }),
      new ObjectControl({
        name: 'conditionNA',
        label: 'Condition NA',
        type: 'switch',
        show: of(this.uiData.type === 'file'),
      }),
      new ObjectControl({
        name: 'isautoCrop',
        label: 'Auto Crop',
        type: 'switch',
        show: of(this.uiData.type === 'uploadimage'),
      }),
      new ObjectControl({
        name: 'uploadLimit',
        label: 'Number of files to be uploaded',
        type: 'dropdown',
        options: of(this.uploadLimit),
        show: of(this.uiData.type === 'uploadimage'),
        required: true,
      }),
      new ObjectControl({
        name: 'datasource',
        label: 'Data Source',
        group: this.f.data,
        show: of(
          [
            'keyvaluesearchbox',
            'keyvaluedropdownlist',
            'autocompletesearchbox',
          ].includes(this.uiData.type)
        ),
        required: true,
        hint: 'LMKAPI/WFAPI/ICEAPI/MethodName',
      }),
      new ObjectControl({
        name: 'fieldparams',
        label: 'Response Parameter',
        group: this.f.data,
        required: true,
        show: of(
          [
            'keyvaluesearchbox',
            'keyvaluedropdownlist',
            'autocompletesearchbox',
          ].includes(this.uiData.type)
        ),
      }),
      new ObjectControl({
        name: 'modelbody',
        label: 'Model Body',
        type: 'textarea',
        required: true,
        group: this.f.data,
        show: of(
          [
            'keyvaluesearchbox',
            'keyvaluedropdownlist',
            'autocompletesearchbox',
          ].includes(this.uiData.type)
        ),
      }),
      new ObjectControl({
        name: 'resource',
        label: 'Display Value',
        group: this.f.data,
        required: true,
        show: of(this.uiData.type === 'autocompletesearchbox'),
      }),
      new ObjectControl({
        name: 'mappings',
        label: 'Mappings',
        type: 'list',
        group: this.f.data,
        config: this.mappingConfig,
        show: of(this.uiData.type === 'autocompletesearchbox'),
      }),
      new ObjectControl({
        name: 'dependencydmos',
        label: 'Dependency Dmos',
        type: 'list',
        group: this.f.data,
        config: this.mappingConfig,
        show: of(this.uiData.type === 'autocompletesearchbox'),
      }),
      new ObjectControl({
        name: 'dependentdmos',
        label: 'Dependent Dmos',
        type: 'list',
        group: this.f.data,
        config: this.depConfig,
        show: of(this.uiData.type === 'autocompletesearchbox'),
      }),
      new ObjectControl({
        name: 'emitonstart',
        label: 'Emit On Start',
        type: 'switch',
        group: this.f.data,
        show: of(this.uiData.type === 'autocompletesearchbox'),
      }),
      new ObjectControl({
        name: 'kvboxmultiselect',
        label: 'Multi-Select',
        type: 'switch',
        group: this.f.data,
        show: of(this.uiData.type === 'keyvaluesearchbox' || this.uiData.type==='roletype'),
      }),
      new ObjectControl({
        name: 'toggledepmapper',
        label: 'Define Dependent Fields',
        type: 'switch',
        group: this.f.data,
        show: of(this.uiData.type === 'keyvaluesearchbox'),
      }),
       new ObjectControl({
        name: 'dependentdatasrc',
        label: 'Data Source',
        type: 'dropdown',
        group: this.f.data,
        options: of(enumToList(GridViewDataSource)),
        show: this.toggledepMapper(),
      }),
        new ObjectControl({
        name: 'endpoint',
        label: 'Api Endpoint',
        group: this.f.data,
        show: this.checkVisibilityCondition()
      }),
      new ObjectControl({
        name: 'methodtype',
        label: 'Method Type',
        type: 'dropdown',
        group: this.f.data,
        options: of(enumToList(MethodTypes)),
        show: this.checkVisibilityCondition(),
      }),
      new ObjectControl({
        name: 'dependentbody',
        label: 'Request Body',
        type: 'textarea',
        group: this.f.data,
        show: this.checkVisibilityCondition()
      }),
    
    ];

    this.validationControls = [
      new ObjectControl({
        name: 'required',
        label: 'Required',
        type: 'switch',
        hint: 'A required field must be filled in before the form can be submitted',
        group: this.f.validate,
        show: of(!!this.uiData.validate),
      }),

      new ObjectControl({
        name: 'disabled',
        label: 'Read Only',
        type: 'switch',
        group: this.f.validate,
        show: of(!!this.uiData.validate),
      }),
      new ObjectControl({
        name: 'minLength',
        label: 'Minimum Length',
        group: this.f.validate,
        hint: 'The minimum length requirement this field must meet',
        show: of(this.uiData.validate?.minLength),
      }),
      new ObjectControl({
        name: 'maxLength',
        label: 'Maximum Length',
        group: this.f.validate,
        hint: 'The maximum length requirement this field must meet',
        required: true,
        show: of(this.uiData.validate?.maxLength),
      }),
    ];
    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => Start
    this.checkDmoNameValidity();
    this.form.get("dmoName").valueChanges.subscribe(() => {
      this.checkDmoNameValidity();
    });
    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => End 
    let cntrlRequired = this.form.controls['validate']['controls'].required;
    let cntrlReadOnly = this.form.controls['validate']['controls'].disabled;

    cntrlRequired.valueChanges.subscribe((val) => {
      if (val && cntrlReadOnly.value) {
        cntrlReadOnly.setValue(false);
      }
    });

    cntrlReadOnly.valueChanges.subscribe((val) => {
      if (val && cntrlReadOnly.value) {
        cntrlRequired.setValue(false);
      }
    });

    this.form.statusChanges.subscribe(() => {
      if (this.submitted) {
        this.checkTabErrors();
      }
    });
  }
  async checkDmoNameValidity() {
    const name = this.form.get("dmoName").value;
  
    if (
      this.newObject &&
      name &&
      name.length >= 4 &&
      !this.form.get("dmoName")?.hasError("maxlength") &&
      !this.form.get("dmoName")?.hasError("pattern")
    ) {
      this.api
      .checkNameValidity(
        "dmo",
        0,
        name,
        this.parent.root.Version,
        this.parent.root.ProcessName
      )
      .subscribe((IsExits) => {
        if (IsExits) {
          this.form.get("dmoName")?.setErrors({
            nameExists: true,
            message: "Duplicate name",
          });
        }
      });
    }
  }
  
  private show(
    group: AbstractControl,
    name: keyof IDMComponent,
    compareTo: any,
    type: DMOType | DMOType[]
  ) {
    return group.get(name).valueChanges.pipe(
      startWith(group.get(name).value),
      map((v) => v?.key || v),
      map((v) => {
        const types = Array.isArray(type) ? type : [type];
        return v === compareTo && types.includes(this.uiData.type);
      })
    );
  }
toggledepMapper(): Observable<boolean> {
  const toggleControl = this.f.data.get('toggledepmapper');
  if (!toggleControl) {
    return of(false); 
  }

  return toggleControl.valueChanges.pipe(
    startWith(toggleControl.value),
    map(value => value === true)
  );
}


shouldShowDepMapper(): boolean {
  return this.f.data.get('toggledepmapper')?.value === true;
}

checkVisibilityCondition(): Observable<boolean> {
  const toggleControl = this.f.data.get('toggledepmapper');
  if (toggleControl == null) {
    console.log('toggledepmapper control not found');
    return of(false); 
  }
  return toggleControl.valueChanges.pipe(
    startWith(toggleControl.value),
    map(toggleValue => {
      if (this.uiData.type === 'datagrd') {
        return true; 
      }
      if (this.uiData.type === 'keyvaluesearchbox') {
        return toggleValue === true; 
      }
      return false;
    })
  );
}


  private toFormGroup() {
    const group: Partial<Record<keyof IDMComponent, AbstractControl>> = {};
    Object.entries(this.dataClass).forEach(([key, value]) => {
      if (key === 'dataSrc' && this.uiData.type !=='datagrd') {
        value = this.dataSources.find(({ key }) => key === value);
      }else if(key ==='dataSrc' && this.uiData.type ==='datagrd'){
        value = this.GridViewDataSource.find(({ key }) => key === value);
      } else if (key === 'regxType') {
        value = this.regexTypes.find(({ key }) => key === value);
      } else if (key === 'uploadStorage') {
        value = this.storageProviders.find(({ key }) => key === value);
      }
      group[key] = this.fb.control(value);
    });
    const validators = [...NAME_VALIDATORS];   
    group.dmoName = this.fb.control(this.dataClass.dmoName, {
      validators,
      updateOn: 'blur',
    });
    group.rte = this.fb.control(this.dataClass.rte ?? false);
    group.Height=this.fb.control(this.dataClass.height??'')
    group.values = toFormArray(this.dataClass.values, { addCheckbox: true });
    group.status = this.fb.control(
      this.status.find((s) => s.key == this.dataClass.status)
    );
    if (this.uiData.type === 'uploadimage') {
      group.uploadLimit = this.fb.control(
        this.uploadLimit.find(
          (limit) => limit.key === +this.dataClass.uploadLimit
        ) || null,
        [Validators.required]
      );
    }

    const data = {};
    Object.entries(this.dataClass.data).forEach(([key, value]) => {
      if (
        [
          'apiurl',
          'apiparams',
          'fieldparams',
          'modelbody',
          'resource',
        ].includes(key)
      ) {
        data[key] = this.fb.control(value);
        return;
      }
      if (key === 'values') {
        if (this.uiData.type === 'roletype') {
          value = arrayToList(value, 'value', 'label');
        } else {
          value = value.map(({ value }) => ({ key: value, value }));
        }
        if (
          ['datetimezone', 'select', 'list', 'multiselect'].includes(
            this.uiData.type
          )
        ) {
          data[key] = toFormArray(value, { addCheckbox: true });
          return;
        }
      }else if (key === 'resource' || this.uiData.type === 'select') {
        value = this.customDataSources.find(({ key }) => key === value);
      }else if (['json', 'dependencydmos', 'dependentdmos', 'mappings'].includes(key)) {
        data[key] = toFormArray(value, { addCheckbox: true });
        return;
      }

      data[key] = this.fb.control(value);
    });
    group.data = this.fb.group(data);

    const validate = {};
    Object.entries(this.dataClass.validate).forEach(([key, value]) => {
      if (key === 'maxLength' && this.uiData.validate?.maxLength) {
        validate[key] = this.fb.control(value, [Validators.required]);
      } else {
        validate[key] = this.fb.control(value);
      }
    });
    group.validate = this.fb.group(validate);

    group.rte.valueChanges.subscribe(() => {
  group.Height.reset('');
});

    return this.fb.group(group);
  }

  private runDynamicValidation() {
    if (['textarea'].includes(this.uiData.type)) {
  const rteControl = this.f.rte;
  const heightControl = this.f.Height;

  if (rteControl && heightControl) {
    this.validateControl({
      trackedControl: rteControl,
      addValidation: (val) => val === true,
      validatedControl: heightControl,
      validators: Validators.required,
    }).subscribe();
  }
}

    if (['select', 'list', 'multiselect'].includes(this.uiData.type)) {
      this.validateControl({
        trackedControl: this.f.dataSrc,
        addValidation: (src) => (src?.key || src) === DataSource.Values,
        validatedControl: this.f.data.get('values'),
        validators: Validators.required,
      }).subscribe();
    }
    if (['selectboxes', 'radio'].includes(this.uiData.type)) {
      this.validateControl({
        trackedControl: this.f.type,
        addValidation: (type) => type === this.uiData.type,
        validatedControl: this.f.values,
        validators: Validators.required,
      }).subscribe();
    }
    if (['id'].includes(this.uiData.type)) {
        const controlsToValidate = ['minlength']; 
        controlsToValidate.forEach((controlName) => {
       const control = this.f[controlName];
      if (control) {
        this.validateControl({
          trackedControl: this.f.type,
          addValidation: (type) => type === this.uiData.type,
          validatedControl: control,
          validators: Validators.required,
        }).subscribe();
      }
    });
    }
    if (['autocompletesearchbox'].includes(this.uiData.type)) {
      const controlsToValidate = ['resource', 'datasource', 'fieldparams','modelbody']; 
      controlsToValidate.forEach((controlName) => {
      const control = this.f.data.get(controlName);
      if (control) {
        this.validateControl({
          trackedControl: this.f.type,
          addValidation: (type) => type === this.uiData.type,
          validatedControl: control,
          validators: Validators.required,
        }).subscribe();
      }
    });
   }
    if (['keyvaluesearchbox','keyvaluedropdownlist'].includes(this.uiData.type)) {
      const controlsToValidate = ['datasource', 'fieldparams','modelbody']; 
      controlsToValidate.forEach((controlName) => {
      const control = this.f.data.get(controlName);
      if (control) {
        this.validateControl({
          trackedControl: this.f.type,
          addValidation: (type) => type === this.uiData.type,
          validatedControl: control,
          validators: Validators.required,
        }).subscribe();
      }
    });
   }
  }

  private readonly validateControl = (config: ControlValidation) => {
    const { trackedControl, addValidation, validatedControl, validators } =
      config;
    return trackedControl.valueChanges.pipe(
      takeWhile((_) => this.componentActive),
      startWith(trackedControl.value),
      tap((val) => {
        if (addValidation(val)) {
          validatedControl.setValidators(validators);
        } else {
          validatedControl.clearValidators();
        }
        validatedControl.updateValueAndValidity();
      })
    );
  };

  private checkTabErrors() {
    this.displayTabHasErrors = this.displayControls.some(control => {
      const controlName = control.name as string;
      const formControl = this.form.get(controlName);
      return formControl?.invalid;
    });

    if (this.uiData.hasData) {
      this.dataTabHasErrors = this.dataControls.some(control => {
        let formControl;
        const controlName = control.name as string;
        if (control.group) {
          formControl = control.group.get(controlName);
        } else if (controlName.includes('.')) {
          formControl = this.form.get(controlName);
        } else {
          formControl = this.form.get(controlName);
        }
        return formControl?.invalid;
      });
    }

    if (this.uiData.validate) {
      this.validationTabHasErrors = this.validationControls.some(control => {
        let formControl;
        const controlName = control.name as string;
        if (control.group) {
          formControl = control.group.get(controlName);
        } else if (controlName.includes('.')) {
          formControl = this.form.get(controlName);
        } else {
          formControl = this.form.get(controlName);
        }
        return formControl?.invalid;
      });
    }
  }

  onSubmit() {
  if (this.isGridTypeWithInvalidUpload()) {
    this.toastr.warning(
      "You can't create file upload and image upload type dmo for Grid type dmog",
      'Warning'
    );
    return false;
  }

  this.submitted = true;
  this.checkTabErrors();

  if (!this.form.valid) return;

  const { parent, ...f } = this.form.value;
  const dataValues = this.getDataValues(f);
  const dataResource = this.getDataResource(f);

  let APIURLOptions = '';
  if (this.uiData.type === 'datagrd' && this.headerMapperComponent) {
    APIURLOptions = this.buildApiOptions(f, this.headerMapperComponent.headerMapping);
  } else if (this.uiData.type === 'keyvaluesearchbox' && this.DependentFieldsMapperComponent) {
    APIURLOptions = this.buildApiOptionsForKeyVal(f, this.DependentFieldsMapperComponent.mappingDmos);
  }else if(this.uiData.type === 'textarea'){
    const jsonPayload = {
    RTE: this.form.get('rte')!.value === true ? 'Yes' : 'No',
    Rows: this.form.get('rte')!.value === false ?'':this.form.get('Height')!.value
  };

  APIURLOptions = JSON.stringify(jsonPayload);
  }

  const formValue: IDMComponent = this.buildFormValue(f, dataValues, dataResource, APIURLOptions);
  this.output.emit(formValue);
  this.ref.close(formValue);
}

  private isGridTypeWithInvalidUpload(): boolean {
  return (
    this.form?.value?.parent?.Type === 'Grid' &&
    ['uploadimage', 'file'].includes(this.uiData.type)
  );
}

private getDataValues(f: any): any[] {
  if (['roletype', 'colorpicker'].includes(this.uiData.type)) {
    return listToTypeArray(f.data.values, 'value', 'label');
  }
  return f.data.values.map(({ value, key }) => ({
    label: value,
    value,
  }));
}

private getDataResource(f: any): string {
  return f.data.resource?.key || f.data.resource || '';
}

private buildFormValue(f: any, dataValues: any[], dataResource: string, APIURLOptions: string): IDMComponent {
  return {
    ...f,
    type: this.uiData.type,
    default_Value: f.defaultValue,
    values: f.values.map(({ value }) => ({ label: value, value })),
    ApiUrlOptions: APIURLOptions,
    data: {
      ...f.data,
      values: dataValues,
      resource: dataResource,
      json: f.data.json?.key || f.data.json,
      methodtype: f.data?.methodtype?.key,
      toggledepmapper: f.data?.toggledepmapper || false,
      dependentdatasrc: f.data?.dependentdatasrc?.value || f.data?.dependentdatasrc,
      dependentbody: f.data?.dependentbody || "",
    },
    dataSrc: f.dataSrc?.key || f.dataSrc,
    regxType: f.regxType?.key || f.regxType,
    status: f.status?.key || f.status,
    uploadLimit: f.uploadLimit?.key || f.uploadLimit,
    parentGuid: f.parentDmo?.key,
  };
}


  buildApiOptions(formData: any, headerMapping: any): string {
    headerMapping.forEach(item => {
         delete item.isEditing;
         delete item.selected;
    });
    const apiOptions = {
      Method_Type: formData.data?.methodtype?.key || formData.data?.methodtype || '',
      Api_Type: formData.dependentdatasrc?.value || formData.data?.dependentdatasrc || '',
      Api_Endpoint: formData.data?.endpoint || '',
      Header_Mapping: headerMapping || {},
      Request_Body: formData.data?.dependentbody || {}
    };
    return JSON.stringify(apiOptions);
  }

   buildApiOptionsForKeyVal(formData: any, json: any): string {
    json.forEach(item => {
         delete item.isEditing;
         delete item.selected;
    });
    const apiOptions = {
      Is_DependentField: formData.data?.toggledepmapper || false,
      Method_Type: formData.data?.methodtype?.key || formData.data?.methodtype || '',
      Api_Type: formData.data?.dependentdatasrc?.value || formData.data?.dependentdatasrc || '',
      Api_Endpoint: formData.data?.endpoint || '',
      Column_Mapping: json || {},
      Request_Body: formData.data?.dependentbody || {}
    };
    return JSON.stringify(apiOptions);
  }

}

type ControlValidation = {
  trackedControl: AbstractControl;
  validatedControl: AbstractControl;
  addValidation: (val: any) => boolean;
  validators: ValidatorFn | ValidatorFn[];
};
