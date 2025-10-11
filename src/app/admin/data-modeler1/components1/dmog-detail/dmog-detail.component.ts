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
import { DMOGType, IDMOG, ObjectDetail, Status } from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { checkNameValidatorSync } from '../../validators1';
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
  public title = 'Card';
  public controls: ObjectControl<IDMOG>[];

  //private dmogTypeList = enumToList(DMOGType);
  private dmogTypeList = enumToList(DMOGType).filter(x => x.key !== 'CardGroup');
  private status = enumToList(Status);
  private roles$: Observable<KeyValueList<string, string>>;
  private availableDmoToShare = [];
  IsReordring = false;
  allDmos = [];

  allNormalDmogs= [];
  

  leftSelectedSharedItems = [];
  rightSelectedSharedItems = [];

  leftSharedChanged = false;
  rightSharedChanged = false;


  allDmogs = [];
  associatedSharedItems = [];
  sharedChanged = false;
  updatedlistDmogGroups = [];

  constructor(ref: NgbActiveModal, fb: UntypedFormBuilder, private api: DataModelerApiService, private readonly toastr: ToastrService,private readonly changeDetectorRef: ChangeDetectorRef) {
    super(ref, fb);
    this.formActions = [{ controlName: 'Type', handler: (type: DMOGType) => this.onDmogTypeChange(type) }];
  }

 
  
 

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  beforeFormInit() {
    if(this.data.Type ==='CardGroup'){
      this.title =  'Card Group';
      this.allNormalDmogs = this.getNormalRootDMOGs();    
      this.associatedSharedItems = this.allNormalDmogs.filter(dmog =>
        dmog.PrntDmogIDs?.split(',').includes(this.data.DMOGID.toString())
      );
      this.updatedlistDmogGroups= this.associatedSharedItems;
    }
    const { ProcessName } = this.parent.root;
    this.roles$ = this.api.getRoles(ProcessName).pipe(map((list) => arrayToList(list, 'value', 'label')));
   
  }
 

  private getChildDMOGs(): any[] {
    const result: any[] = [];
  
    Object.values(this.parent.childrenMap).forEach((dmog: any) => {
      const isNormal = dmog.Type === "Normal";
      const matchesSelf = dmog.PrntDmogIDs?.split(',').includes(this.data.DMOGID.toString());
  
      if (isNormal && matchesSelf) {
        result.push({
          key: dmog.id,
          dmogId: dmog.DMOGID,
          value: `${dmog.DisplayName} (${dmog.Name})`,
          bmogId: this.parent.parent.BMOGID,
          parent: `${this.parent.Name} / ${this.parent.DisplayName}`,
          parentId: this.parent.id,
          selected: true,
          disabled: true,
        });
      }
    });
  
    return result;
  }
  

  private getNormalRootDMOGs(): any[] {
    const result: any[] = [];
  
      Object.values(this.parent.childrenMap).forEach((dmog: any) => {
        const isNormal = dmog.Type === "Normal";

        const hasNoParent =
          dmog.PrntDmogIDs === null ||
          dmog.PrntDmogIDs === "" ||
          typeof dmog.PrntDmogIDs === "undefined";

        if (isNormal && hasNoParent) {
          const item = {
            key: dmog.id,
            dmogId: dmog.DMOGID, 
            value: `${dmog.DisplayName} (${dmog.Name})` , 
            bmogId: this.parent.parent.BMOGID,
            parent: `${this.parent.Name} / ${this.parent.DisplayName}`, 
            parentId: this.parent.id,

           };
          result.push(item);
        }
        const parentId = dmog.PrntDmogIDs?.trim(); // null/undefined safe
        if(parentId){
        let parentIds=parentId.split(',');
        const matchesSelf = parentIds.includes(this.data.DMOGID.toString());


          if (isNormal && matchesSelf) {
            const item = {
              key: dmog.id,
              dmogId: dmog.DMOGID, 
              value: `${dmog.DisplayName} (${dmog.Name})` , 
              bmogId: this.parent.parent.BMOGID,
              parent: `${this.parent.Name} / ${this.parent.DisplayName}`, 
              parentId: this.parent.id,
              PrntDmogIDs: dmog.PrntDmogIDs,
              isAdded: true,
              selected: true,
            };
            
            result.push(item);
          }
        }


      });
    
  
    return result;
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

    this.controls =
        this.data.Type === 'CardGroup'
    ? [
        new ObjectControl({ name: 'Name', label: 'Name', readonly: !this.newObject, required: true }),
        new ObjectControl({ name: 'DisplayName', label: 'Friendly Name', required: true }),
      ]
    : [
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

  onSubmit() {
    if(this.data.Type ==='CardGroup'){
    
          const val = this.form.value;
          const model = {
            Name: val.Name,
            DisplayName: val.DisplayName,
            BMOID: this.parent.BMOID,
            DMOGID: this.data.DMOGID,
            DmogIds: this.updatedlistDmogGroups.map(item => item.dmogId).join(','),
            IsAdded: this.updatedlistDmogGroups.map(item => item.isAdded ? 'true' : 'false').join(','),
            PrntDmogIds: this.updatedlistDmogGroups.map(item => item.PrntDmogIDs ?? 'NULL').join(','), 
            Orders: "1,2,3,4",
            IsPopupOrdering: this.IsReordring
          };
          this.ref.close({"model":model,"Type":this.data.Type});
       
    }
    else{
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
          PrntDmogIDs: this.data.PrntDmogIDs || "",
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
      map((v) => v == compareTo)
    );
  }

 displayShare = (item: SharedItem) => item.value;
  uniqueShare = (item: SharedItem) => item.value;
  
shouldAdd = (item: SharedItem) =>
  this.api.checkDmogInBmo(item.dmogId.toString(), item.bmogId.toString()).pipe(
    tap((success) => {
      if (!success) {
        this.toastr.warning('This card cannot be shared');
      }
    })
  );

  onShareAdd(item: SharedItem) {
    item.isAdded= true;
    item.PrntDmogIDs = this.data.DMOGID.toString();
    this.updatedlist(item);
    this.associatedSharedItems = this.associatedSharedItems.concat(item);
    this.sharedChanged = true;
    this.refreshAllDmogs();
  }

  onShareRemove(item: SharedItem) {
    item.isAdded= false;
    item.PrntDmogIDs = this.data.DMOGID.toString();
    this.updatedlist(item);
    this.associatedSharedItems = this.associatedSharedItems.filter((dmog) => dmog.dmogId !== item.dmogId);
   this.sharedChanged = true;
    this.refreshAllDmogs();
  }  


  updatedlist(item: SharedItem) {
    const updatedItem = { ...item, isAdded: item.isAdded, PrntDmogIDs: this.data.DMOGID.toString() };
  
    const index = this.updatedlistDmogGroups.findIndex(dmog => dmog.dmogId === item.dmogId);
  
    if (index > -1) {
      this.updatedlistDmogGroups[index] = updatedItem;
    } else {
      this.updatedlistDmogGroups = [...this.updatedlistDmogGroups, updatedItem];
    }
  }
  

  onShareReorder = (items: SharedItem[]) => {
    this.updatedlistDmogGroups = items
    this.sharedChanged = true;
    this.IsReordring = true;
  };  

  refreshAllDmogs = () => {
    this.allDmogs.forEach((dmog) => {
      const rightCheck = this.associatedSharedItems.some((item) => item.key === dmog.key);      
      dmog.selected = rightCheck;
      dmog.disabled = rightCheck;
    });
  };


}

type SharedItem = KeyValue & { selected?: boolean; disabled?: boolean; dmogId: number; bmogId: number, parentId?: number, isAdded?: boolean, PrntDmogIDs?:string };