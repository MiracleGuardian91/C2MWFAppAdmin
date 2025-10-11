import { Component, HostListener, Input } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, FormGroup, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { KeyValue } from '@app/admin/BM/models';
import { ListConfig } from '@app/admin/lib/list/list-config.model';
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
import { hide } from '@popperjs/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import {
  filter,
  map,
  skipWhile,
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
} from '../../models';
import { DataModelerApiService } from '../../services/data-modeler-api.service';
import { checkNameValidatorSync } from '../../validators';
import { NgIf, NgTemplateOutlet, NgFor, AsyncPipe } from '@angular/common';
import { TabsComponent } from '../../../Shared/tabs/tabs.component';
import { TabComponent } from '../../../Shared/tab/tab.component';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';

type FormType = IDMComponent & Data & Validate;
type DmoDetailControls = ObjectControl<FormType>[];
@Component({
    selector: 'app-dmo-detail',
    templateUrl: './dmo-detail.component.html',
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        TabsComponent,
        TabComponent,
        NgTemplateOutlet,
        NgFor,
        ObjectControlComponent,
        AsyncPipe,
    ],
})
export class DmoDetailComponent extends ObjectDetail<IDMComponent, DMOG> {
  @Input() uiData: DMOUI;
  @Input() readonly = false;

  public displayControls: DmoDetailControls;
  public dataControls: DmoDetailControls;
  public validationControls: DmoDetailControls;

  public dataClass: DMComponent;

  private colorCodes$: Observable<KeyValueList<string, string>>;
  private roles$: Observable<KeyValueList<string, string>>;

  private readonly dataSources = enumToList(DataSource);
  private readonly customDataSources = enumToList(CustomDataSource);
  private readonly regexTypes = enumToList(RegExType);
  private readonly storageProviders = enumToList(StorageProvider);
  private readonly status = enumToList(DMOStatus);
  private uploadLimit = primitiveArrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  dropDownTypeDMO: Array<{ key: string; dmoName: string; value: string }> = [];
  managedDDLTypedmo: Array<{ key: string; dmoName: string; value: string }> =
    [];

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
      { key: 'Name', displayValue: 'Name', validators: [Validators.required] },
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

    this.parent?.formData?.components[0]?.columns.forEach((ele) => {
      ele.components.forEach((dmo) => {
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
    });
  }

  initForm() {
    this.form = this.toFormGroup();
    this.runDynamicValidation();
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
        type: 'rich',
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
        show: of(this.uiData.type === 'select'),
      }),
      new ObjectControl({
        name: 'parentDmo',
        label: 'Parent Control',
        type: 'dropdown',
        options: of(this.managedDDLTypedmo),
        show: of(this.uiData.type === 'manageddropdown'),
      }),
      new ObjectControl({
        name: 'status',
        label: 'Status',
        type: 'dropdown',
        options: of(this.status),
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
        options: of(enumToList(DataSource)),
        show: of(['select', 'multiselect'].includes(this.uiData.type)),
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
        name: 'json',
        label: 'JSON Data',
        type: 'list',
        group: this.f.data,
        config: this.jsonConfig,
        show: this.show(this.form, 'dataSrc', DataSource.JSON, [
          'select',
          'multiselect',
        ]),
      }),
      new ObjectControl({
        name: 'resource',
        label: 'Options',
        type: 'dropdown',
        options: of(enumToList(CustomDataSource)),
        group: this.f.data,
        required: true,
        show: this.show(this.form, 'dataSrc', DataSource.Custom, [
          'select',
          'multiselect',
        ]),
      }),
      new ObjectControl({
        name: 'apiurl',
        label: 'API URL',
        group: this.f.data,
        hint: 'API URL that returns data from the data source',
        show: this.show(this.form, 'dataSrc', DataSource.C2MIceApi, [
          'select',
          'multiselect',
        ]),
      }),
      new ObjectControl({
        name: 'apiparams',
        label: 'API Response Parameter',
        group: this.f.data,
        show: this.show(this.form, 'dataSrc', DataSource.C2MIceApi, [
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
        required: true,
        group: this.f.data,
        show: of(
          [
            'keyvaluesearchbox',
            'keyvaluedropdownlist',
            'autocompletesearchbox',
          ].includes(this.uiData.type)
        ),
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
      this.form.get("dmoName").valueChanges.subscribe(name=>{
      if (this.newObject && name && name.length>=4 && !this.form.get('dmoName').hasError("maxlength")
      && !this.form.get('dmoName').hasError("pattern")) {
        this.api.checkNameValidity('dmo',0,name,this.parent.root.Version,this.parent.root.ProcessName).subscribe(IsExits=>{
          if(IsExits){
            const nameControl = this.form.get('dmoName');
            nameControl.setErrors({
              nameExists: true,
              message: 'Duplicate name'
            });
          }
        });
      }
      });
    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => End 
    let cntrlRequired = this.form.controls['validate']['controls'].required;
    let cntrlReadOnly = this.form.controls['validate']['controls'].disabled;

    cntrlRequired.valueChanges.subscribe((val) => {
      if (val == true && cntrlReadOnly.value == true) {
        cntrlReadOnly.setValue(false);
      }
    });

    cntrlReadOnly.valueChanges.subscribe((val) => {
      if (val == true && cntrlRequired.value == true) {
        cntrlRequired.setValue(false);
      }
    });
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

  private toFormGroup() {
    const group: Partial<Record<keyof IDMComponent, AbstractControl>> = {};
    Object.entries(this.dataClass).forEach(([key, value]) => {
      if (key === 'dataSrc') {
        value = this.dataSources.find(({ key }) => key === value);
      } else if (key === 'regxType') {
        value = this.regexTypes.find(({ key }) => key === value);
      } else if (key === 'uploadStorage') {
        value = this.storageProviders.find(({ key }) => key === value);
      }
      group[key] = this.fb.control(value);
    });
    const validators = [...NAME_VALIDATORS];
    if (this.newObject) {
      // const allDmos = this.dataClass.dmoListByType();

      let allDmos = Object.values(this.parent.root.childrenMap)
        .flatMap((bmog) => Object.values(bmog.childrenMap))
        .flatMap((bmo) => Object.values(bmo.childrenMap))
        .flatMap((dmog) => Object.values(dmog.childrenMap));
      if (!this.dataClass.fromApi) {
        allDmos = allDmos.filter((dmo) => dmo.dmoName !== this.data.dmoName);
      }
     // validators.push(checkNameValidatorSync(allDmos, 'dmoName'));
    
    }
    group.dmoName = this.fb.control(this.dataClass.dmoName, {
      validators,
      updateOn: 'blur',
    });
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
      } else if (key === 'json') {
        data[key] = toFormArray(value, { addCheckbox: true });
        return;
      } else if (key === 'resource' || this.uiData.type === 'select') {
        value = this.customDataSources.find(({ key }) => key === value);
      } else if (
        ['dependencydmos', 'dependentdmos', 'mappings'].includes(key)
      ) {
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

    return this.fb.group(group);
  }

  private runDynamicValidation() {
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
    if (['select', 'multiselect'].includes(this.uiData.type)) { 
      this.validateControl({
        trackedControl: this.f.dataSrc,
        addValidation: (src) => (src?.key || src) === DataSource.Custom,
        validatedControl: this.f.data.get('resource'),
        validators: Validators.required,
      }).subscribe();
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
  }

  private validateControl = (config: ControlValidation) => {
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

  onSubmit() {
    if (
      this.form?.value?.parent?.Type === 'Grid' &&
      (this.uiData.type === 'uploadimage' || this.uiData.type === 'file')
    ) {
      this.toastr.warning(
        "You can't create file upload and image upload type dmo for Grid type dmog",
        'Warning'
      );
      return false;
    }
    this.submitted = true;

    if (this.form.valid) {
      // Exclude parent DMOG class from the form value.
      const { parent, ...f } = this.form.value;
      let dataValues = [];
      let dataResource = '';
      if (['roletype', 'colorpicker'].includes(this.uiData.type)) {
        dataValues = listToTypeArray(f.data.values, 'value', 'label');
      } else {
        dataValues = f.data.values.map(({ value, key }) => ({
          label: value,
          value,
        }));
        dataResource = f.data.resource?.key || f.data.resource || '';
      }
      const formValue: IDMComponent = {
        ...f,
        type: this.uiData.type,
        default_Value: f.defaultValue,
        values: f.values.map(({ value }) => ({ label: value, value })),
        data: {
          ...f.data,
          values: dataValues,
          resource: dataResource,
          json: f.data.json?.key || f.data.json,
        },
        dataSrc: f.dataSrc?.key || f.dataSrc,
        regxType: f.regxType?.key || f.regxType,
        status: f.status?.key || f.status,
        uploadLimit: f.uploadLimit?.key || f.uploadLimit,
        parentGuid: f.parentDmo?.key,
      };
      // code by anas for mandatory and readonly validation
      //if(this.form.controls["validate"]["controls"].required.value===true)
      //{formValue['validate'].disabled=false;}
      // ended

      this.output.emit(formValue);
      this.ref.close(formValue);
    }
  }
}

/** If `addValidation` returns true when `trackedControl` changes,
 *  set specified `validators` on the `validatedControl`,
 *  otherwise clear all validators set before
 */
type ControlValidation = {
  trackedControl: AbstractControl;
  validatedControl: AbstractControl;
  addValidation: (val: any) => boolean;
  validators: ValidatorFn | ValidatorFn[];
};
