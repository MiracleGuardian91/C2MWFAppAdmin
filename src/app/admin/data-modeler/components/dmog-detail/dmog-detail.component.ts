import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { KeyValue } from '@app/admin/BM/models';
import { arrayToList, enumToList, KeyValueList, listToTypeArray } from '@app/admin/wf/wfd/util/helpers';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { BMO, DMOG, ObjectControl } from '../../classes';
import { DMOGType, IDMOG, ObjectDetail, Status } from '../../models';
import { DataModelerApiService } from '../../services/data-modeler-api.service';
import { checkNameValidatorSync } from '../../validators';
import { AfterViewChecked, ChangeDetectorRef } from '@angular/core'
import { NgIf, NgFor, AsyncPipe, SlicePipe } from '@angular/common';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';
import { AssociationComponent } from '../../../lib/association/association.component';
@Component({
    selector: 'app-dmog-detail',
    templateUrl: './dmog-detail.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
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
export class DmogDetailComponent extends ObjectDetail<IDMOG | DMOG, BMO> {
  public title = 'Data Model Object Group';
  public controls: ObjectControl<IDMOG>[];

  private dmogTypeList = enumToList(DMOGType);
  private status = enumToList(Status);
  private roles$: Observable<KeyValueList<string, string>>;
  private availableDmoToShare = [];
  allDmos = [];

  leftSelectedSharedItems = [];
  rightSelectedSharedItems = [];

  leftSharedChanged = false;
  rightSharedChanged = false;

  constructor(ref: NgbActiveModal, fb: UntypedFormBuilder, private api: DataModelerApiService, private readonly toastr: ToastrService,private readonly changeDetectorRef: ChangeDetectorRef) {
    super(ref, fb);
    this.formActions = [{ controlName: 'Type', handler: (type: DMOGType) => this.onDmogTypeChange(type) }];
  }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  beforeFormInit() {
    const { ProcessName } = this.parent.root;
    this.roles$ = this.api.getRoles(ProcessName).pipe(map((list) => arrayToList(list, 'value', 'label')));
  }

  initForm() {
    const validators = [...NAME_VALIDATORS];
    if (this.newObject) {
      const allDmogs = Object.values(this.parent.root.childrenMap).flatMap((bmog) =>
        Object.values(bmog.childrenMap).flatMap((bmo) => Object.values(bmo.childrenMap))
      );
     // validators.push(checkNameValidatorSync(allDmogs, 'Name'));
    }
    this.form = this.fb.group({
      Name: [this.data.Name, { validators, updateOn: 'blur' }],
      DefCollapsed: [+this.data.DefCollapsed || 0],
      DisplayName: [this.data.DisplayName, [Validators.required]],
      IsCollapsed: [+this.data.IsCollapsed || 0],
      IsHidden: [+this.data.IsHidden || 0],
      LongDesc: [this.data.LongDesc],
      Roles: [arrayToList(this.data.Roles, 'Value', 'Key')],
      // Share: [this.selectedSharedItems()],
      Status: [this.status.find((s) => s.key == this.data.Status), [Validators.required]],
      Type: [this.dmogTypeList.find((t) => t.key === this.data.Type), [Validators.required]],
      Version: [this.data.Version || this.parent.Version, [Validators.required]],
      showHelp: [+this.data.showHelp || 0],
    });

    const map = this.getSharedItems();
    const left = map.get(0) || [];
    const right = map.get(1) || [];
    //this.allDmos = left.concat(right);    

    this.leftSelectedSharedItems = left.filter((item) => item.selected);
    this.rightSelectedSharedItems = right.filter((item) => item.selected);

    this.controls = [
      new ObjectControl({ name: 'Name', label: 'Name', readonly: !this.newObject, required: true }),
      new ObjectControl({ name: 'DisplayName', label: 'Friendly Name', required: true }),
      new ObjectControl({ name: 'Version', label: 'Version', readonly: true }),
      new ObjectControl({ name: 'Status', label: 'Status', type: 'dropdown', required: true, options: of(this.status) }),
      new ObjectControl({ name: 'Type', label: 'Type', type: 'dropdown', required: true, options: of(this.dmogTypeList) }),
      new ObjectControl({
        name: 'Roles',
        label: 'Roles',
        type: 'dropdown',
        required: true,
        options: this.roles$,
        show: this.show('Type', DMOGType.Grid),
        multiple: true,
      }),
      new ObjectControl({ name: 'LongDesc', label: 'Long Description', type: 'rich', class: 'span-12' }),

      new ObjectControl({ name: 'showHelp', label: 'Show Long Description as Help', type: 'switch' }),
      new ObjectControl({ name: 'IsCollapsed', label: 'Is Collapsible', type: 'switch' }),
      new ObjectControl({
        name: 'DefCollapsed',
        label: 'Is Collapsed',
        type: 'switch',
        show: this.show('IsCollapsed', true),
      }),
      new ObjectControl({ name: 'IsHidden', label: 'Is Hidden', type: 'switch' }),
    ];

    this.api.GetAvailableDmoToShare(this.parent.root.selectedBMOG.BMOGID, this.parent.root.BMId).subscribe(x=>{
      this.availableDmoToShare= x;
      const avDmos = this.getAllDmos();
      this.allDmos= avDmos.get(0)|| [];
    });
  
    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => Start
    this.form.get("Name").valueChanges.subscribe(name=>{
      if(this.newObject && name && name.length>=4 && !this.form.get('Name').hasError("maxlength")
      && !this.form.get('Name').hasError("pattern")){
        this.api.checkNameValidity('dmog',0,name,this.parent.root.Version,this.parent.root.ProcessName).subscribe(IsExits=>{
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
    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => End


  }

  afterFormInit() {
    // Force patch the control to activate form action on start
    const val = this.dmogTypeList.find(({ key }) => this.data.Type === key);
    this.f.Type.patchValue(val);
  }

  private getAllDmos() {
    const share = this.data.Share || [];
    const colMap = new Map<number, SharedItem[]>();
    this.availableDmoToShare.forEach((dmo, i) =>{
      const check = share.some((item) => item.value === dmo.dmoGuid);
      const item = {
        key: dmo.dmoGuid,
        value: dmo.NAME,
        dmoId: dmo.dmoID,
        bmogId: this.parent.parent.BMOGID,
        selected: check,
        disabled: check,
      };
    

          if (!colMap.get(0)) colMap.set(0, []);
            const col = colMap.get(0);
            if (!col.find((d) => d.key === item.key)) {
              colMap.get(0).push(item);
            }
    });

    return colMap;
  }

  private getSharedItems() {
    const share = this.data.Share || [];
    const colMap = new Map<number, SharedItem[]>();
    const collectShared = (dmog: DMOG) => {
      dmog.formData.components.forEach((row) => {
        row.columns.forEach((col, i) =>
          col.components.forEach((obj) => {
            const dmo = dmog.getChild(obj.dmoName);
            const check = share.some((item) => item.value === dmo.guid && item.key===dmog.GUID);
            const item = {
              key: dmo.guid,
              //value: `${dmog.parent.DisplayName} > ${dmog.DisplayName} > ${dmo.label}`,
              value: `${dmo.label} (${dmo.dmoName})`,
              dmoId: dmo.dmoId,
              bmogId: this.parent.parent.BMOGID,
              selected: check,
              disabled: check,
            };

            if (!colMap.get(i)) colMap.set(i, []);
            const col = colMap.get(i);
            if (!col.find((d) => d.key === item.key)) {
              colMap.get(i).push(item);
            }
          })
        );
      });
    };
    if (this.data.Children) {
      collectShared(this.data as DMOG);
    }
    Object.values(this.parent.root.childrenMap)
      .filter((bmog) => bmog.BMOGID !== this.parent.parent.BMOGID)
      .forEach((bmog) => {
        Object.values(bmog.childrenMap)
          .filter((bmo) => !bmo.shared && bmo.BMOID !== this.parent?.BMOID)
          .forEach((bmo) => {
            Object.values(bmo.childrenMap).forEach((dmog) => {
              collectShared(dmog);
            });
          });
      });
    return colMap;
  }

  displayShare = (item: any) => item.value;
  uniqueShare = (item: any) => item.value;

  shouldAdd = (item: SharedItem) =>
    this.api.checkDmoInBmog(item.dmoId.toString(), item.bmogId.toString()).pipe(
      tap((success) => {
        if (!success) {
          this.toastr.warning('This dmo cannot be shared');
        }
      })
    );

  onLeftShareAdd(item: SharedItem) {
    this.leftSelectedSharedItems = this.leftSelectedSharedItems.concat(item);
    this.leftSharedChanged = true;
    this.refreshAllDmos();
  }
  onLeftShareRemove(item: SharedItem) {
    this.leftSelectedSharedItems = this.leftSelectedSharedItems.filter((dmo) => dmo.key !== item.key);
    this.leftSharedChanged = true;
    this.refreshAllDmos();
  }

  onRightShareAdd(item: SharedItem) {
    this.rightSelectedSharedItems = this.rightSelectedSharedItems.concat(item);
    this.rightSharedChanged = true;
    this.refreshAllDmos();
  }
  onRightShareRemove(item: SharedItem) {
    this.rightSelectedSharedItems = this.rightSelectedSharedItems.filter((dmo) => dmo.key !== item.key);
    this.rightSharedChanged = true;
    this.refreshAllDmos();
  }

  onLeftShareReorder = (items: SharedItem[]) => {
    this.leftSelectedSharedItems = items;
    this.leftSharedChanged = true;
  };

  onRightShareReorder = (items: SharedItem[]) => {
    this.rightSelectedSharedItems = items;
    this.rightSharedChanged = true;
  };

  refreshAllDmos = () => {
    this.allDmos.forEach((dmo) => {
      const rightCheck = this.rightSelectedSharedItems.some((item) => item.key === dmo.key);
      const leftCheck = this.leftSelectedSharedItems.some((item) => item.key === dmo.key);
      dmo.selected = rightCheck || leftCheck;
      dmo.disabled = rightCheck || leftCheck;
    });
    this.allDmos = this.allDmos.slice();
  };

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload: IDMOG = {
        ...val,
        Parent: this.data.Parent || this.parent.id,
        DMOGID: this.data.DMOGID,
        id: this.data.id || val.Name,
        GUID: (this.data.GUID || (val.Name as string)).replace('`', ''),
        LnkBmoDmogID: this.data.LnkBmoDmogID,
        Type: val.Type?.key || val.Type,
        Status: val.Status?.key || val.Status,
        DefCollapsed: (+val.DefCollapsed).toString(),
        IsCollapsed: (+val.IsCollapsed).toString(),
        IsHidden: (+val.IsHidden).toString(),
        showHelp: (+val.showHelp).toString(),
        Roles: listToTypeArray(val.Roles, 'value', 'key'),
      };
      const shared = {
        processName: this.parent.root.ProcessName,
        bmName: this.parent.root.Name,
        bmVersion: this.parent.root.Version,
        dmogName: val.Name,
        leftDMOGuids: this.leftSharedChanged ? this.leftSelectedSharedItems.map(({ key }) => key).toString() : '-1',
        rightDMOGuids: this.rightSharedChanged ? this.rightSelectedSharedItems.map(({ key }) => key).toString() : '-1',
      };

      this.output.emit(payload);
      this.ref.close({ payload, shared });
    }
  }

  private onDmogTypeChange(val: any) {
    val = val?.key || val;
    if (val === DMOGType.Grid) {
      this.f.Roles.setValidators(Validators.required);
    } else {
      this.f.Roles.clearValidators();
    }
     this.f.Roles.updateValueAndValidity();
  }

  private show(controlName: keyof IDMOG, compareTo: any) {
    return this.form.get(controlName).valueChanges.pipe(
      startWith(this.form.get(controlName).value),
      map((v) => v?.key || v),
      map((v) => v === compareTo)
    );
  }
}

type SharedItem = KeyValue & { selected?: boolean; disabled?: boolean; dmoId: number; bmogId: number };
