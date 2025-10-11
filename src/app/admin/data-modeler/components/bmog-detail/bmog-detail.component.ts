import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { KeyValue, Share } from '@app/admin/BM/models';
import { enumToList } from '@app/admin/wf/wfd/util/helpers';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { of, tap } from 'rxjs';
import { BM, BMOG, ObjectControl } from '../../classes';
import { canvasType, EnableTLCorner, IBMOG, ObjectDetail, Status } from '../../models';
import { DataModelerApiService } from '../../services/data-modeler-api.service';
import { checkNameValidatorSync } from '../../validators';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';
import { AssociationComponent } from '../../../lib/association/association.component';

@Component({
    selector: 'app-bmog-detail',
    templateUrl: './bmog-detail.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgFor,
        ObjectControlComponent,
        AssociationComponent,
        AsyncPipe,
    ],
})
export class BmogDetailComponent extends ObjectDetail<IBMOG | BMOG, BM> {
  public title = 'Business Model Object Group';
  public canvasTypeList = enumToList(canvasType);
  private status = enumToList(Status);
  
  private enableTLValues = enumToList(EnableTLCorner);
  public controls: ObjectControl<IBMOG>[];
  private availableBmoToShare = [];
  allBMOs = [];
  associatedSharedItems = [];
  sharedChanged = false;

  constructor(
    ref: NgbActiveModal, 
    fb: UntypedFormBuilder, 
    private readonly api: DataModelerApiService,
    private readonly toastr: ToastrService,
    ) {
    super(ref, fb);
  }
  
  protected beforeFormInit(): void {
    this.allBMOs = this.getSharedItems() || [];
    this.associatedSharedItems = this.allBMOs.filter(item => item.selected);
  }

  initForm() {
    const validators = [...NAME_VALIDATORS]
    // if (this.newObject) {
    //   validators.push(checkNameValidatorSync(Object.values(this.parent.childrenMap), 'Name'));
    // };
    this.form = this.fb.group({
      Name: [this.data.Name, {validators, updateOn: 'blur'}],
      Version: [this.data.Version || this.parent.Version, [Validators.required]],
      CanvasType: [this.canvasTypeList.find(t => t.key === this.data.CanvasType), [Validators.required]],
      Status: [this.status.find(s => s.key == this.data.Status), [Validators.required]],
      LongDesc: [this.data.LongDesc],
      EnableTLCorner : [this.enableTLValues?.find(s =>s?.key == this.data?.EnableTLCorner)?.key , [Validators.required]]
   });

    this.controls = [
      new ObjectControl({name: 'Name', label: 'Name', readonly: !this.newObject, required: true}),
      new ObjectControl({name: 'Version', label: 'Version', readonly: true}),
      new ObjectControl({
        name: 'CanvasType', label: 'Canvas Type', type: 'dropdown',
        required: true, options: of(this.canvasTypeList),
      }),
      new ObjectControl({
        name: 'Status', label: 'Status', type: 'dropdown', required: true,  
        options: of(this.status),
      }),
      new ObjectControl({name: 'LongDesc', label: 'Long Description', type: 'rich', class: 'span-12'}),
      new ObjectControl({name:'EnableTLCorner', label:'Enable Top Left Corner', type:'radio', required: true,  
      options: of(this.enableTLValues)})
    ];

    this.api.GetAvailableBmoToShare(this.data.BMOGID, this.parent.BMId).subscribe(x=>{
      this.availableBmoToShare= x;
      const avBmos = this.getAllBmo();
      this.allBMOs= avBmos;
    });

    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => Start
    this.form.get("Name").valueChanges.subscribe(name=>{
      if(this.newObject && name && name.length>=4  && !this.form.get('Name').hasError("maxlength")
      && !this.form.get('Name').hasError("pattern")){
        this.api.checkNameValidity('bmog',0,name,this.parent.root.Version,this.parent.root.ProcessName).subscribe(IsExits=>{
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
    this.form.get("CanvasType").valueChanges.subscribe(CT=>{
      if(CT["key"].length>0){
        this.api.checkCanvasType(
          'bmog', 
          this.data.BMOGID ?? 0, // Replaced ternary with nullish coalescing
          CT["key"], 
          this.parent.root.Version, 
          this.parent.root.ProcessName
        ).subscribe(IsExits => {
          if (IsExits) {
            const nameControl = this.form.get('CanvasType');
            nameControl?.setErrors({
              nameExists: true,
              message: 'Duplicate Canvas Type'
            });
          }
        });        
    }
    if(CT?.key==='Form'){
      const nameControl = this.form.get('EnableTLCorner');
       nameControl.setErrors(null);
       nameControl.setValue(null);
      nameControl.disable();
    }else{
      const nameControl = this.form.get('EnableTLCorner');
      nameControl.enable();
    }
    })
    if(this.form.value.CanvasType !=null){
      if(this.form.value.CanvasType.key==='Form'){
       const nameControl = this.form.get('EnableTLCorner');
          nameControl.setErrors(null);
         nameControl.disable();
      }
     }
     else
     {
       const nameControl = this.form.get('EnableTLCorner');
          nameControl.setErrors(null);
         nameControl.disable();
     }
      this.form.get("CanvasType").valueChanges.subscribe(name=>{
       if(name?.key==='Form'){
         const nameControl = this.form.get('EnableTLCorner');
          nameControl.setErrors(null);
          nameControl.setValue(null);
         nameControl.disable();
       }else{
         const nameControl = this.form.get('EnableTLCorner');
         nameControl.enable();
       }
      })

  }

  private getSharedItems() {
    let list: KeyValue[] = [];
    Object.values(this.parent.childrenMap).forEach(bmog => {
      Object.values(bmog.childrenMap).filter(bmo => !bmo.shared).forEach(bmo => {
        const selected = this.data?.Share?.some((item) => item.value === bmo.GUID) || this.data?.Children?.some(guid => bmo.GUID === guid)
        // parent is responsible for grouping items
        // parent id is used later on submit and replaces bmo id in key property
        const item = {key: bmo.BMOID.toString(),selected,disabled: selected, GUID: bmo.GUID , type:bmo.BmoType,
          value:`${bmo.DisplayName} (${bmo.Name})`, 
          parent: bmog.Name, parentId: bmog.id};
        list.push(item);
      });
    });
    return list;
  }

  private getAllBmo() {
    let list: KeyValue[] = [];
    const share = this.data.Share || [];
       
    this.availableBmoToShare.forEach((bmo, i) =>{
      const check = this.data?.Share?.some((item) => item.value === bmo.bmoGuid) || this.data?.Children?.some(guid => bmo.bmoGuid === guid)
      const item = {
        key: bmo.bmoid,
        GUID:bmo.bmoGuid,
        value: bmo.NAME,              
        parent: this.data.Name, 
        parentId: this.data.id,
        selected: check,
        disabled: check,
        type:bmo.BMOTYP,
      };   
      
      list.push(item);
    });

    return list;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload: IBMOG = {
        ...val,
        Parent: this.parent.id,
        BMOGID: this.data.BMOGID,
        Children: this.data?.Children || [],
        id: this.data?.id || val.Name,
        CanvasType: val.CanvasType?.key || val.CanvasType,
        Status: val.Status?.key || val.Status,
        enableTLCorner : val.enableTLValues?.key, 
      };
      const shared = {         
        bmogId: this.data.BMOGID || '-1',
        bmoIds: this.sharedChanged ? this.associatedSharedItems.map(({ key }) => key).toString() : '-1',
      };
      this.output.emit(payload);
      this.ref.close({payload, shared});
    }
  }
  
  
  displayShare = (item: SharedItem) => item.value;
  uniqueShare = (item: SharedItem) => item.value + item.key;

  shouldAdd = (item: SharedItem) =>{
    const val = this.form.value;
    if(val.CanvasType?.key==undefined){
      this.toastr.warning('Please select canvas type before shared');  
      return of(false);
    }
    if(val.CanvasType?.key==='Form' && item.type!="Forms"){
      this.toastr.warning('Only form type bmo can be shared in case of form type bmog');  
      return of(false);
    }
    
   return this.api.checkBmoInBmog(item.key.toString(), (this.data.BMOGID || -1).toString()).pipe(
      tap((success) => {
        if (!success) {
          this.toastr.warning('This bmo cannot be shared');
        }
      })
   );
  };

  onShareAdd(item: SharedItem) {
    this.associatedSharedItems = this.associatedSharedItems.concat(item);
    this.sharedChanged = true;
    this.refreshAllBMOs();
  }
  onShareRemove(item: SharedItem) {
    this.associatedSharedItems = this.associatedSharedItems.filter((bmo) => bmo.key !== item.key.toString());
    this.sharedChanged = true;
    this.refreshAllBMOs();
  }  

  onShareReorder = (items: SharedItem[]) => {
    this.associatedSharedItems = items;
    this.sharedChanged = true;
    this.refreshAllBMOs();
  };  

  refreshAllBMOs = () => {
    this.allBMOs.forEach((dmog) => {
      const rightCheck = this.associatedSharedItems.some((item) => item.GUID === dmog.GUID);      
      dmog.selected = rightCheck;
      dmog.disabled = rightCheck;
    });
    this.allBMOs = this.allBMOs;
  };

}
type SharedItem = KeyValue & { selected?: boolean; disabled?: boolean; dmogId: number; bmogId: number, parentId: number,type:string };