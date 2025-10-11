import { KeyValue, NgIf, NgFor, AsyncPipe, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ObjectControl } from '@app/admin/data-modeler/classes';
import { ListColumnType, ListConfig } from '@app/admin/lib/list/list-config.model';
import { WorkflowApiService } from '@app/admin/wf/wfd/services/workflow-api.service';
import { arrayToList, enumToList, primitiveArrayToList, toFormArray } from '@app/admin/wf/wfd/util/helpers';
import { WF } from '@lib/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, Observable, of, timer } from 'rxjs';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { ObjectControlComponent } from '../../../../lib/object-control/object-control.component';
import { AssociationComponent } from '../../../../lib/association/association.component';

@Component({
    selector: 'app-wf-condition-detail',
    templateUrl: './wf-condition-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgFor,
        ObjectControlComponent,
        AssociationComponent,
        AsyncPipe,
        SlicePipe,
    ],
})
export class WfConditionDetailComponent implements OnInit {
  @Input() wfId: string;
  @Input() version: string;
  @Input() data: WF.ConditionDetail | null;

  @Input() set bmList(list: WF.BMInfo[]) {
    this.#list = arrayToList(list, 'BMID', 'BMNAME');
  }

  formSubmitted = false;

  #list: KeyValue<string, string>[] = [];
  readonly #status = enumToList(WF.Status);
  readonly #areas: KeyValue<WF.ConditionArea, string>[] = [
    { key: 'BusinessModelObject', value: 'Section' },
    { key: 'DataModelGroup', value: 'Card' },
    { key: 'DataModelObject', value: 'Data Model Object' },
    { key: 'Trigger', value: 'Trigger' },
  ];

  readonly form = this.fb.group({
    Name: [null, [Validators.required]],
    Version: [null, Validators.required],
    Description: [null],
    Status: [this.#status[1], [Validators.required]],
    BMID: [null, [Validators.required]],
    BMOGNAM: [null, [Validators.required]],
    CondLevel: this.fb.group(
      {
        ConditionLevel: [null, [Validators.required]],
        StageStateGuids: [[]],
      },
      { validators: [selectedGuidValidator('ConditionLevel', 'StageStateGuids')] }
    ),
    Filter: this.fb.array([]),
    Area: this.fb.group(
      {
        ConditionArea: [null, Validators.required],
        BmObjectGuids: [null],
      },
      { validators: [selectedGuidValidator('ConditionArea', 'BmObjectGuids')] }
    ),
    Visible: [WF.ActionState.NA],
    Mandatory: [WF.ActionState.No],
    Enabled: [WF.ActionState.Yes],
    WFID: [null],
  });

  readonly f = this.form.controls;
  readonly #bmControl = this.f.BMID;
  readonly #bmogControl = this.f.BMOGNAM;
  readonly #levelControl = this.f.CondLevel.get('ConditionLevel');
  readonly #areaControl = this.f.Area.get('ConditionArea');

  controls: ObjectControl<WF.ConditionDetail>[] = [];

  readonly checkByKey = 'selected';

  #selectedStates: WF.StateInfo[] = [];
  #selectedStages: WF.StageInfo[] = [];
  #selectedBmos: WF.BMOInfo[] = [];
  #selectedDmogs: WF.DMOGInfo[] = [];
  #selectedDmos: WF.DMOInfo[] = [];
  #selectedTriggers: WF.TriggerInfo[] = [];

  #selectedAreas = [];
  #selectedLevels = [];

  levelAssociations$: Observable<WF.StageInfo[][]>;
  areaAssociations$: Observable<WF.BMOInfo[][]>;

  readonly #filterConfig: ListConfig<WF.ConditionFilter> = {
    columns: [
      { key: 'DmoName', displayValue: 'Data Model Object Name', type: ListColumnType.Dropdown, validators: [Validators.required] },
      { key: 'ConditionExpression', displayValue: 'Expression', type: ListColumnType.Dropdown, validators: [Validators.required] },
      { key: 'ComparisonValue', displayValue: 'Comparison Value', validators: [Validators.required] },
      { key: 'Operator', displayValue: 'Logical Operator', type: ListColumnType.Dropdown, validators: [Validators.required] },
    ],
    checkbox: true,
    actions: {
      add: true,
      delete: true,
      edit: true,
    },
    defaultValues: {
      ConditionExpression: primitiveArrayToList(['equal', 'not equal']),
      Operator: primitiveArrayToList(['OR', 'AND']),
      DmoName: this.controlChange(this.#bmControl).pipe(
        map((_) => this.#bmControl.value),
        switchMap((v) => (v ? this.wfApi.getDmosByBM(v?.key || v) : of([]))),
        map(list => list.map(dmo => ({
          key: dmo.GlobalID,
          value: dmo.DispName,
          parent: dmo.GroupName,
        })))
      ),
    },
  };

  constructor(private readonly wfApi: WorkflowApiService, private readonly fb: UntypedFormBuilder, public readonly ref: NgbActiveModal) {}

  uniqueWithGUID = (item: WF.StateInfo) => item.GUID;
  displayLevelWith = (item: WF.StateInfo | WF.StageInfo) => item['States'] || item['WFOSNAM'];
  displayAreaWith = (item: WF.BMOInfo | WF.TriggerInfo) => item['BMONAME'] || item['WFONAME'];

  onSelectedLevelGuids = (items: (WF.StateInfo | WF.StageInfo)[]) => {
    this.#levelControl.value === 'State' ? (this.#selectedStates = items as WF.StateInfo[]) : (this.#selectedStages = items);
    this.#selectedLevels = items;
    this.f.CondLevel.get('StageStateGuids').patchValue(this.#selectedLevels);
  };

  onSelectedAreaGuids = (items: WF.BMOInfo[] | WF.TriggerInfo[]) => {
    const area: WF.ConditionArea = this.#areaControl.value;
    if (area === 'BusinessModelObject') {
      this.#selectedBmos = items as WF.BMOInfo[];
    } else if (area === 'DataModelGroup') {
      this.#selectedDmogs = items as WF.DMOGInfo[];
    } else if (area === 'DataModelObject') {
      this.#selectedDmos = items as WF.DMOInfo[];
    } else if (area === 'Trigger') {
      this.#selectedTriggers = items as WF.TriggerInfo[];
    }
    this.#selectedAreas = items;
    this.f.Area.get('BmObjectGuids').patchValue(this.#selectedAreas);
  };

  ngOnInit(): void {
    this.initSelectedLevels();
    this.initSelectedAreas();
    this.initForm();
    this.initControls();
    this.levelAssociations$ = this.#getLevelAssociations$();
    this.areaAssociations$ = this.#getAreaAssociations$();
  }

  private async initForm() {
    const toPatch = {
      Name: this.data?.Name,
      Version: this.data?.Version || this.version,
      Description: this.data?.Description,
      Status: this.#status.find((s) => s.key === this.data?.Status) || this.#status[1],
      BMID: this.#list.find((bm) => bm.key === this.data?.BMID) || null,
      BMOGNAM: this.data?.BMOGNAM,
      CondLevel: {
        ConditionLevel: this.data?.CondLevel?.ConditionLevel,
        StageStateGuids: this.#selectedLevels,
      },
      Area: {
        ConditionArea: this.data?.Area?.ConditionArea,
        BmObjectGuids: this.#selectedAreas,
      },
      Visible: this.data?.Visible || WF.ActionState.NA,
      Mandatory: this.data?.Mandatory || WF.ActionState.No,
      Enabled: this.data?.Enabled || WF.ActionState.Yes,
      WFID: this.wfId,
    };
    this.form.patchValue(toPatch);
    this.f.Filter = toFormArray(this.data?.Filter, { addCheckbox: this.#filterConfig.checkbox, required: true });
  }

  private initControls() {
    this.controls = [
      new ObjectControl({ label: 'Condition Name', name: 'Name', required: true, readonly: !!this.data }),
      new ObjectControl({ name: 'Version', readonly: true }),
      new ObjectControl({ name: 'Status', type: 'dropdown', required: true, options: of(this.#status) }),
      new ObjectControl({
        name: 'BMID',
        label: 'Business Model',
        required: true,
        readonly: !!this.data,
        type: 'dropdown',
        options: of(this.#list),
      }),
      new ObjectControl({
        name: 'BMOGNAM',
        label: 'View',
        required: true,
        type: 'dropdown',
        options: this.#getBmogs(),
        show: this.controlChange(this.#bmControl),
      }),
      new ObjectControl({ name: 'Description', label: 'Long Description', type: 'textarea' }),
      new ObjectControl({
        name: 'ConditionLevel' as any,
        label: 'Condition Level',
        class: 'span-12',
        type: 'radio',
        required: true,
        group: this.form.get('CondLevel'),
        options: of(['Stage', 'State']),
      }),
      new ObjectControl({ name: 'Filter', label: 'Filters', type: 'list', config: this.#filterConfig, class: 'span-12' }),
      new ObjectControl({
        name: 'ConditionArea' as any,
        label: 'Condition Area',
        required: true,
        type: 'radio',
        options: of(this.#areas),
        class: 'span-12',
        group: this.form.get('Area'),
        show: this.controlChange(this.#bmogControl),
      }),
      new ObjectControl({ name: 'Enabled', type: 'radio', options: of(enumToList(WF.ActionState)), class: 'span-4' }),
      new ObjectControl({ name: 'Mandatory', type: 'radio', options: of(enumToList(WF.ActionState)), class: 'span-4' }),
      new ObjectControl({ name: 'Visible', type: 'radio', options: of(enumToList(WF.ActionState)), class: 'span-4' }),
    ];
  }

  private initSelectedLevels() {
    const guids = this.data?.CondLevel?.StageStateGuids?.split(',') || [];
    this.#selectedLevels = guids.map((guid) => ({ GUID: guid }));
    if (this.data?.CondLevel?.ConditionLevel === 'Stage') {
      this.#selectedStages = this.#selectedLevels;
    } else {
      this.#selectedStates = this.#selectedLevels;
    }
  }

  private initSelectedAreas() {
    const guids = this.data?.Area?.BmObjectGuids?.split(',') || [];
    const area = this.data?.Area?.ConditionArea;
    this.#selectedAreas = guids.map((guid) => ({ GUID: guid }));
    this.#selectedBmos = [];
    this.#selectedDmogs = [];
    this.#selectedDmos = [];
    this.#selectedTriggers = [];
    if (area === 'BusinessModelObject') {
      this.#selectedBmos = this.#selectedAreas;
    } else if (area === 'DataModelGroup') {
      this.#selectedDmogs = this.#selectedAreas;
    } else if (area === 'DataModelObject') {
      this.#selectedDmos = this.#selectedAreas;
    } else if (area === 'Trigger') {
      this.#selectedTriggers = this.#selectedAreas;
    }
  }

  #getBmogs = () =>
    timer(1).pipe(
      switchMap((_) => this.controlChange(this.#bmControl)),
      tap((v) => !v && this.#bmogControl.setValue(null)),
      switchMap((v) => (v ? this.wfApi.getBMOGsByBMId(v?.key || v) : of([]))),
      map((list) => arrayToList(list, 'BMOGID', 'BMOGNAME'))
    );

  #getLevelAssociations$ = () => {
    const stages$ = this.wfApi.getStageList(this.wfId).pipe(map((res) => this.#configureAssociations(res, this.#selectedStages)));
    const states$ = this.wfApi.getStateList(this.wfId).pipe(map((res) => this.#configureAssociations(res, this.#selectedStates)));

    return this.controlChange(this.#levelControl).pipe(
      filter((v) => !!v),
      switchMap((level: WF.ConditionLevel) => (level === 'Stage' ? stages$ : states$)),
      tap((_) => {
        if (this.#levelControl.value === 'Stage') {
          this.#selectedLevels = this.#selectedStages;
        } else {
          this.#selectedLevels = this.#selectedStates;
        }
        this.#levelControl.parent.get('StageStateGuids').patchValue(this.#selectedLevels);
      })
    );
  };

  #getAreaAssociations$ = () => {
    const updateAreaGuids = <T extends { GUID: string }>(selectedAreas: T[]) => {
      this.#selectedAreas = selectedAreas;
      this.#areaControl.parent.get('BmObjectGuids').patchValue(this.#selectedAreas);
    };
    const handleArea = (bmId: string, bmogName: string, area: WF.ConditionArea) => {
      switch (area) {
        case 'BusinessModelObject':
          return this.wfApi.getBmoList(bmId, bmogName).pipe(
            map((res) => this.#configureAssociations(res, this.#selectedBmos)),
            tap((_) => updateAreaGuids(this.#selectedBmos))
          );
        case 'DataModelGroup':
          return this.wfApi.getDmogList(bmId, bmogName).pipe(
            map((res) => this.#configureAssociations(res, this.#selectedDmogs)),
            tap((_) => updateAreaGuids(this.#selectedDmogs))
          );
        case 'DataModelObject':
          return this.wfApi.getDmoList(bmId, bmogName).pipe(
            map((res) => this.#configureAssociations(res, this.#selectedDmos)),
            tap((_) => updateAreaGuids(this.#selectedDmos))
          );
        case 'Trigger':
          return this.wfApi.getTriggerList(bmId, bmogName).pipe(
            map((res) => this.#configureAssociations(res, this.#selectedTriggers)),
            tap((_) => updateAreaGuids(this.#selectedTriggers))
          );
        default:
          return of([]);
      }
    };
    const stream$ = combineLatest([
      this.controlChange(this.#bmControl).pipe(map((v) => v?.key || v)),
      this.controlChange(this.#bmogControl).pipe(map((v) => v?.value || v)),
      this.controlChange(this.#areaControl),
    ]);
    return stream$.pipe(
      switchMap(([bmId, bmogName, area]) => {
        if (bmId && bmogName && area) {
          return handleArea(bmId, bmogName, area);
        }
        this.initSelectedAreas();
        this.f.Area.get('BmObjectGuids').reset();
        return of(null);
      })
    );
  };

  #configureAssociations = <T extends { GUID: string }>(all: T[], selected: T[]) => {
    const updatedAll = all.map((item) => {
      const selectedIndex = selected.findIndex((s) => s.GUID === item.GUID);
      if (selectedIndex > -1) {
        item[this.checkByKey] = true;
        selected[selectedIndex] = item;
      }
      return item;
    });
    return [updatedAll, selected];
  };

  private controlChange(control: AbstractControl) {
    return control.valueChanges.pipe(startWith(control.value));
  }

  onSubmit() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    const v = this.form.value;
    const payload: WF.ConditionDetail = {
      ...v,
      Area: {
        ...v.Area,
        BmObjectGuids: this.#selectedAreas.map((a) => a.GUID).toString(),
      },
      BMID: v.BMID?.key || v.BMID,
      BMOGNAM: v.BMOGNAM?.value || v.BMOGNAM,
      CondID: this.data?.CondID || '',
      CondLevel: {
        ...v.CondLevel,
        StageStateGuids: this.#selectedLevels.map((l) => l.GUID).toString(),
      },
      Filter: this.f.Filter.value.map(f => ({
        ...f,
        ConditionExpression: f.ConditionExpression?.key || f.ConditionExpression,
        DmoName: f.DmoName?.value || f.DmoName,
        DmoId: f.DmoName?.key || f.DmoId,
        Operator: f.Operator?.key || f.Operator,
      })),
      Status: v.Status?.key || v.Status,
    };
    this.ref.close(payload);
  }
}

const selectedGuidValidator = (radio: string, guids: string) => {
  return (group: UntypedFormGroup) => {
    const radioControl = group.get(radio);
    const guidControl = group.get(guids);
    const val = guidControl.value;
    if (val && Array.isArray(val) && val.length) {
      radioControl.setErrors(null);
      return null;
    }
    radioControl.setErrors({ required: 'This is a required field' });
  };
};
