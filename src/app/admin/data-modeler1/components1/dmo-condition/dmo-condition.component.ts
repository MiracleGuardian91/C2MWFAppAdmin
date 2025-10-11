import { Component, Input, } from '@angular/core';
import { KeyValue, NgFor, NgIf, AsyncPipe } from '@angular/common'
import { UntypedFormArray, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ListColumnType, ListConfig } from '@app/admin/lib/list/list-config.model';
import { arrayToList, enumToList, primitiveArrayToList, toFormArray, toFormGroup } from '@app/admin/wf/wfd/util/helpers';
import { WF } from '@lib/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { intersectionWith } from 'lodash';
import { BehaviorSubject, of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { DMComponent, ObjectControl } from '../../classes';
import { ActionState, ConditionArea, ConditionAreaKey, DMOUI, ICondition, IConditionBody, ObjectDetail, Status } from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { checkNameValidatorSync } from '../../validators1';
import { NAME_VALIDATORS } from '@lib/common/const';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';
@Component({
    selector: 'app-dmo-condition',
    templateUrl: './dmo-condition.component.html',
    styleUrls: ['./dmo-condition.component.scss'],
    standalone: true,
    imports: [
        MatExpansionPanel,
        MatExpansionPanelHeader,
        NgFor,
        NgIf,
        ReactiveFormsModule,
        ObjectControlComponent,
        AsyncPipe,
    ],
})
export class DmoConditionComponent extends ObjectDetail<IConditionBody, DMComponent> {
  @Input() uiData: DMOUI;
  @Input() readonly = false;
  @Input() currentDmog:any;
  public newObject = true;
  public controls: ObjectControl<IConditionBody>[];
  public conditions: IConditionBody[] = [];
  private readonly deletedConditions: IConditionBody[] = [];
  private dmoList = [];
  private readonly status = enumToList(Status);
  private readonly availableItems$ = new BehaviorSubject<KeyValue<string, string>[]>([]);
  private conditionsConfig: ListConfig<ICondition>;
  private editedCondition: IConditionBody;
  private allConditions: IConditionBody[] = [];
  private bmoConditionItems = [];
  private dmogConditionItems = [];
  private dmoConditionItems = [];
  private triggersConditionItems: any[];
  readonly #areas: KeyValue<WF.ConditionArea, string>[] = [
    { key: 'BusinessModelObject', value: 'Section' },
    { key: 'DataModelGroup', value: 'Card' },
    { key: 'DataModelObject', value: 'Data Model Object' },
    { key: 'Trigger', value: 'Trigger' },
  ];

  constructor(ref: NgbActiveModal, fb: UntypedFormBuilder, private readonly api: DataModelerApiService) {
    super(ref, fb);
  }

  beforeFormInit() {
    this.conditions = [...this.parent.conditions];
    this.dmoList = this.parent.dmoListByType().map((item) => ({...item, disabled: (item.key === this.parent.guid)}));
    this.createConditionsConfig();
    this.generateConditionAreaItems();
  }

  initForm() {
    const validators = [...NAME_VALIDATORS];
    // if (this.newObject) {
    //   validators.push(checkNameValidatorSync(this.allConditions, 'Name'));
    // }
    this.form = this.fb.group({
      Name: ['', { validators, updateOn: 'blur' }],
      Version: [this.parent.parent.Version, [Validators.required]],
      Status: [this.status[0]],
      ShortDesc: ['', [Validators.required]],
      ExecuteElse: [true],
      Conditions: toFormArray([], { addCheckbox: true }),
      ConditionArea: this.fb.group({
        key: [''],
        value: [[]],
      }),
      Action: this.fb.group({
        Enabled: '',
        Mandatory: '',
        Visible: [],
      }),
    });
    this.defaultCondition();

    this.controls = [
      new ObjectControl({ name: 'Name', label: 'Condition Name', required: true, readonly: !this.newObject }),
      new ObjectControl({ name: 'Version', readonly: true, required: true }),
      new ObjectControl({ name: 'Status', options: of(this.status), type: 'dropdown' }),
      new ObjectControl({ name: 'ShortDesc', label: 'Short Description', required: true }),
      new ObjectControl({ name: 'ExecuteElse', label: 'Execute else?', type: 'switch' }),
      new ObjectControl({ name: 'Conditions', type: 'list', config: this.conditionsConfig, class: 'span-12' }),
      new ObjectControl({
        name: 'key' as any,
        label: 'Condition Area',
        type: 'radio',
        group: this.f.ConditionArea,
        options: of(this.#areas),
      }),
      new ObjectControl({
        name: 'value' as any,
        label: 'Available Items',
        type: 'dropdown',
        group: this.f.ConditionArea,
        options: this.availableItems$,
        multiple: true,
        groupOptionsBy: 'parent',
      }),
      new ObjectControl<any>({
        name: 'Enabled',
        type: 'radio',
        class: 'span-4',
        options: of([ActionState[0], ActionState[2], ActionState[1]]),
        group: this.f.Action,
      }),
      new ObjectControl<any>({
        name: 'Mandatory',
        type: 'radio',
        class: 'span-4',
        options: of([ActionState[0], ActionState[2], ActionState[1]]),
        group: this.f.Action,
      }),
      new ObjectControl<any>({
        name: 'Visible',
        type: 'radio',
        class: 'span-4',
        options: of([ActionState[0], ActionState[2], ActionState[1]]),
        group: this.f.Action,
      }),
    ];

  this.form.get("Name").valueChanges.subscribe(name=>{
    if (this.newObject && name && name.length>=4 && !this.form.get('Name').hasError("maxlength")
        && !this.form.get('Name').hasError("pattern")) {
      this.api.checkNameValidity('condition',0,name,this.parent.parent.Version,this.parent.parent.root.ProcessName).subscribe(IsExits=>{
        if(IsExits){
          const nameControl = this.form.get('Name');
          nameControl.setErrors({
            nameExists: true,
            message: 'Duplicate name'
          });
        }
      });
    }
 })

  }
  afterFormInit() {
    this.f.ConditionArea.get('key')
      .valueChanges.pipe(takeWhile((_) => this.componentActive))
      .subscribe((val) => this.conditionAreaHandler(val));
  }

  public editCondition(condition: IConditionBody) {
    this.editedCondition = condition;
    this.submitted = false;
    this.newObject = false;
    if (this.controls) {
      this.controls[0].readonly = !this.newObject;
    }

    const selfAdded = condition.Conditions.some(cond => cond.Dmo === this.parent.guid);
    const dmo = this.dmoList.find(dmo => dmo.key === this.parent.guid);
    dmo.disabled = selfAdded;

    const validators = [...NAME_VALIDATORS]
    this.f.Name.clearValidators();
    this.f.Name.setValidators(validators);
    this.form.patchValue({
      ...condition,
      ConditionArea: {
        ...condition.ConditionArea,
        value: this.parseConditionArea(condition.ConditionArea),
      },
      Status: this.status.find((s) => s.key == condition.Status),
      ExecuteElse:condition.ExecuteElse=="0" ? false : true,
      Action: {
        Enabled: ActionState[condition.Action[0].value || 2],
        Mandatory: ActionState[condition.Action[1].value || 2],
        Visible: ActionState[condition.Action[2].value || 2],
      },
    });
    (this.f.Conditions as UntypedFormArray).clear();
    condition.Conditions
      .map(cond => ({...cond, Dmo: {key: cond.Dmo, value: this.dmoList.find(dmo => dmo.key === cond.Dmo).value}}))
      .map(cond => toFormGroup(cond, {addCheckbox: cond.Dmo.key !== this.parent.guid, deletable: cond.Dmo.key !== this.parent.guid}))
      .forEach(group => (this.f.Conditions as UntypedFormArray).push(group))
    if (!selfAdded) {
      this.defaultCondition();
    }

    this.form.updateValueAndValidity();
  }

  private defaultCondition() {
    const first: Partial<ICondition> = {
      Dmo: {key: this.parent.guid, value: this.parent.label, parent: this.parent.parent.DisplayName} as any,
      Exp: 'equal',
      Logical: 'AND',
      Label: this.parent.dmoName,
      Value: '',
    };
    (this.f.Conditions as UntypedFormArray).push(toFormGroup(first, {addCheckbox: false, deletable: false}));
  }

  public deleteCondition(i: number) {
    this.deletedConditions.push(this.conditions[i]);
    this.conditions = this.conditions.filter((_, idx) => idx !== i);
  }

  public updateCondition() {
    this.submitted = true;
    if (this.form.valid) {
      const f = this.form.value;
      const condition: IConditionBody = {
        ...f,
        Action: Object.entries(f.Action).map(([key, v]) => ({ key, value: v ? ActionState[v as string].toString() : ActionState.NA })),
        Status: f.Status?.key || f.Status || 0,
        Conditions: this.f.Conditions.value.map(cond => ({...cond, Dmo: cond.Dmo?.key || cond.Dmo})),
        ExecuteElse: +f.ExecuteElse,
        ConditionArea: {
          key: f.ConditionArea.key || '',
          value: this.sanitizeConditionArea(f.ConditionArea.value || []),
        },
      };
      const idx = this.conditions.findIndex((c) => c.Name === condition.Name);
      if (idx !== -1) this.conditions[idx] = condition;
      else this.conditions.push(condition);
      this.onReset();
    }
  }

  private generateConditionAreaItems() {
    const bm = this.parent.parent.root;
    const { selectedBMO, selectedDMOG } = bm;
    Object.values(bm.childrenMap).forEach((bmog) => {
      Object.values(bmog.childrenMap)
        .filter((bmo) => !bmo.shared)
        .forEach((bmo) => {
          if (bmo.id !== selectedBMO.id) {
            const bmoItem = { key: bmo.id, value: bmo.DisplayName, parent: bmog.Name, parentId: bmog.id };
            this.bmoConditionItems.push(bmoItem);
          }
          Object.values(bmo.childrenMap)
            .filter((dmog) => !dmog.shared)
            .forEach((dmog) => {
              if (dmog.id !== selectedDMOG.id) {
                const dmogItem = { key: dmog.id, value: dmog.DisplayName, parent: `${bmog.Name} / ${bmo.DisplayName}`, parentId: bmo.id };
                this.dmogConditionItems.push(dmogItem);
              }
              Object.values(dmog.childrenMap).forEach((dmo) => {
                const dmoItem = {
                  key: dmo.guid,
                  value: dmo.label,
                  parent: `${bmog.Name} / ${bmo.DisplayName} / ${dmog.DisplayName}`,
                  parentId: dmog.id,
                };
                this.dmoConditionItems.push(dmoItem);
                this.allConditions.push(...dmo.conditions);
              });
            });
        });
    });
  }

  private conditionAreaHandler(val: ConditionAreaKey) {
    let list: KeyValue<string, string>[] = [];
    this.f.ConditionArea.get('value').reset([]);
    if (val == 'BusinessModelObject') {
      list = this.bmoConditionItems;
    } else if (val === 'DataModelGroup') {
      list = this.dmogConditionItems;
    } else if (val === 'DataModelObject') {
      list = this.dmoConditionItems;
    } else if (val === 'Trigger') {
      if (!this.triggersConditionItems) {
        this.api.getTriggers(this.parent.parent.root.ProcessName).subscribe((res) => {
          this.triggersConditionItems = arrayToList(res, 'Key', 'Value');

          this.availableItems$.next(this.triggersConditionItems);
          this.f.ConditionArea.get('value').patchValue(this.parseConditionArea(this.editedCondition?.ConditionArea));
        });
      } else {
        this.availableItems$.next(this.triggersConditionItems);
      }
      return;
    }
    this.availableItems$.next(list);
  }

  public onReset() {
    this.form.reset({ Version: this.parent.parent.Version });
    if (this.controls) {
      this.controls[0].readonly = false;
    }
    (this.f.Conditions as UntypedFormArray).clear();
    this.defaultCondition();
    this.newObject = true;
  }

  onSubmit() {
    const bm = this.parent.parent.root;
    const dmo = this.currentDmog.formData;
    const dmogName = this.currentDmog.Name;

    if (this.parent.parent.PrntDmogIDs) {
      bm.selectedDMOG.formData._id = this.currentDmog.GUID;
    }
    const payload = {
      BMName: bm.Name,
      BMOGName: bm.selectedBMOG.Name,
      BMOName: bm.selectedBMO.Name,
      DMOGName: dmogName,
      CanvasType: bm.selectedBMOG.CanvasType,
      ProcessName: bm.ProcessName,
      Version: bm.Version,
      dmo:dmo,
      dmoCondition: {
        [this.parent.guid]: {
          Condition: this.conditions.map((obj) => {
            return {
              ...obj,
              Conditions: this.sanitizeConditions(obj),
            };
          }),
        },
      },
    };
    const res = { payload, deletedConditions: this.deletedConditions };
    this.output.emit(res as any);
    this.ref.close(res);
  }

  private sanitizeConditions = (body) => {
    return body.Conditions.map((c) => {
      return {
        ...c,
        Dmo: c.Dmo?.key || c.Dmo,
        Exp: c.Exp?.key || c.Exp,
        Logical: c.Logical?.key || c.Logical,
        Value: c.Dmo?.Value || c.Value,
      };
    });
  };

  private sanitizeConditionArea(items: any[]) {
    return items.map((area) => ({ Key: area.parentId, Value: area.key }));
  }

  private parseConditionArea(area: ConditionArea) {
    if (!area) return [];
    const selectedList = (list: any[]) => intersectionWith(list, area.value, (a, b) => a.key === b.Value);
    switch (area.key) {
      case 'BusinessModelObject':
        return selectedList(this.bmoConditionItems);
      case 'DataModelGroup':
        return selectedList(this.dmogConditionItems);
      case 'DataModelObject':
        return selectedList(this.dmoConditionItems);
      case 'Trigger':
        return selectedList(this.triggersConditionItems);
      default: return [];
    }
  }

  private createConditionsConfig() {
    const operators = ['AND', 'OR'];
    const expressions = ['equal', 'not equal'];
    this.conditionsConfig = {
      columns: [
        { key: 'Dmo', displayValue: 'Data Model Object', type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: 'Exp', displayValue: 'Expression', type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: 'Value', displayValue: 'Value', validators: [Validators.required] },
        { key: 'Logical', displayValue: 'Operator', type: ListColumnType.Dropdown },
      ],
      defaultValues: {
        Exp: primitiveArrayToList(expressions),
        Logical: primitiveArrayToList(operators),
        Dmo: this.dmoList,
      },
      actions: { add: true, edit: true, delete: true },
      checkbox: true,
    };
  }
}
