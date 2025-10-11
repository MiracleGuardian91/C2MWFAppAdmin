import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { KeyValue } from '@app/admin/BM/models';
import { arrayToList, enumToList, KeyValueList } from '@app/admin/wf/wfd/util/helpers';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { DMOG, BMO, BMOG, ObjectControl } from '../../classes';
import { BMOType, FormBmoType, IBMO, ObjectDetail, Status } from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { checkNameValidatorSync } from '../../validators1';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ObjectControlComponent } from '../../../lib/object-control/object-control.component';
import { AssociationComponent } from '../../../lib/association/association.component';
import { MessageService } from '@app/core';

@Component({
    selector: 'app-bmo-detail',
    templateUrl: './bmo-detail.component.html',
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
export class BmoDetailComponent extends ObjectDetail<IBMO | BMO, BMOG> {
  dmogSharing:boolean=true;
  public title = 'Section';
  public controls: ObjectControl<IBMO>[];
  private bmoTypeList = enumToList(BMOType);
  private FormBmoType=enumToList(FormBmoType);
  private status = enumToList(Status);
  
  private subprocessList$: Observable<KeyValueList<string, string>>;
  private childProcessList$: Observable<KeyValueList<string, string>>;
  private parentProcessDmos$: Observable<KeyValueList<string, string>>;
  private availableDmogToShare = [];
  private removedDmogs =[];
  allDmogs = [];
  associatedSharedItems = [];
  allAssociatedSharedItems = [];
  sharedChanged = false;

  constructor(
    ref: NgbActiveModal, 
    fb: UntypedFormBuilder, 
    private api: DataModelerApiService,
    private readonly toastr: ToastrService,
    private readonly msg: MessageService,
    private dmApi: DataModelerApiService,
  ) { 
    super(ref, fb);
    this.formActions = [
      {controlName: 'BmoType', handler: (type: BMOType) => this.onBmoTypeChange(type)},
      {controlName: 'ChildProcessId', handler: (processId: string) => this.onChildProcessIdChange(processId)}
    ];
  }

  beforeFormInit() {
    this.allDmogs = this.getSharedItems();    
    this.associatedSharedItems = this.allDmogs.filter(item => item.selected).sort((a, b) => a.DMOGID - b.DMOGID)

    this.subprocessList$ = this.api.getSubprocessList(this.parent.parent.BMId.toString())
      .pipe(this.handleApiResponse('SubProcessId'));
    this.childProcessList$ = this.api.getChildProcessList(this.parent.parent.BMId.toString())
      .pipe(this.handleApiResponse('ChildProcessId'));
    this.parentProcessDmos$ = this.api.getProcessDmos(this.parent.parent.ProcessId)
      .pipe(this.handleApiResponse('ParentProcessDmoGuid'));
  }

  initForm() {
    const validators = [...NAME_VALIDATORS]
    if (this.newObject) {
      const allBmos = Object.values(this.parent.root.childrenMap)
        .flatMap(bmog => Object.values(bmog.childrenMap));
      //validators.push(checkNameValidatorSync(Object.values(allBmos), 'Name'));
    };
    this.form = this.fb.group({
      Name: [this.data.Name, {validators, updateOn: 'blur'}],
      DisplayName: [this.data.DisplayName, [Validators.required]],
      Version: [this.data.Version || this.parent.Version, [Validators.required]],
      BmoType: [this.bmoTypeList.find(t => t.key === this.data.BmoType), [Validators.required]],
      Status: [this.status.find(s => s.key == (this.data.Status || Status.Active)), [Validators.required]],
      ShortDesc: [this.data.ShortDesc, [Validators.required]],
      LongDesc: [this.data.LongDesc],
      SubProcessId: [this.data.SubProcessId],
      ChildProcessId: [this.data.ChildProcessId],
      ChildProcessDmoGuid: [this.data.ChildProcessDmoGuid],
      ParentProcessDmoGuid: [this.data.ParentProcessDmoGuid],   
    });

    this.controls = [
      new ObjectControl({name: 'Name', readonly: !this.newObject, required: true}),
      new ObjectControl({name: 'DisplayName', label: 'Friendly Name', required: true}),
      new ObjectControl({name: 'Version', readonly: true}),
      new ObjectControl({
        name: 'BmoType', label: 'Type', type: 'dropdown',
        required: true, options: of(this.parent.CanvasType==='Form'? this.FormBmoType :this.bmoTypeList)
      }),
      new ObjectControl({
        name: 'Status', type: 'dropdown', 
        required: true, options: of(this.status),
      }),
      // new ObjectControl({
      //   name: 'Share', type: 'dropdown', options: of(this.sharedItems), multiple: true,
      //   show: this.show('BmoType', BMOType.Form), groupOptionsBy: 'parent',  
      // }),
      new ObjectControl({
        name: 'SubProcessId', label: 'Subprocess List', type: 'dropdown', required: true,
        options: this.subprocessList$, show: this.show('BmoType', BMOType.SubProcess),
      }),
      new ObjectControl({
        name: 'ChildProcessId', label: 'Child Process List', type: 'dropdown', required: true,
        options: this.childProcessList$, show: this.show('BmoType', BMOType.ChildProcess), 
      }),
      new ObjectControl({
        name: 'ParentProcessDmoGuid', label: 'Parent Process DMOs', type: 'dropdown', required: true,
        options: this.parentProcessDmos$, show: this.show('BmoType', BMOType.ChildProcess), 
      }),
      new ObjectControl({
        name: 'ChildProcessDmoGuid', label: 'Child Process DMOs', type: 'dropdown', required: true,
        options: of([]), show: this.show('BmoType', BMOType.ChildProcess), 
      }),
      new ObjectControl({name: 'ShortDesc', label: 'Short Description', required: true}),
      new ObjectControl({name: 'LongDesc', label: 'Long Description', type: 'rich', class: 'span-12'}),
    ];

    this.api.GetAvailableDmogToShare(this.parent.root.selectedBMOG.BMOGID, this.parent.root.BMId).subscribe(x=>{
      this.availableDmogToShare= x.AvaliableItems?.sort((a, b) => a.DMOGID - b.DMOGID);
     // this.allAssociatedSharedItems = x.AssociatedItems.sort((a, b) => a.DMOGID - b.DMOGID);
      const avDmogs = this.getAllDmog();
      this.allDmogs= avDmogs;
      // const assocDmogs = this.getAllAssocaitedDmog();
      // this.associatedSharedItems = assocDmogs;
    });

    // #C2MC-7667 - Check Duplicate Name of BMO,  BMOG , DMO and  DMOG  => Start
    this.form.get("Name").valueChanges.subscribe(name=>{
      if(this.newObject && name && name.length>=4  && !this.form.get('Name').hasError("maxlength")
      && !this.form.get('Name').hasError("pattern")){
        this.api.checkNameValidity('bmo',0,name,this.parent.root.Version,this.parent.root.ProcessName).subscribe(IsExits=>{
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

  private getSharedItems() {
    let list: KeyValue[] = [];
    const share = this.data.Share || [];
    
    Object.values(this.parent.root.childrenMap).forEach(bmog => {
      Object.values(bmog.childrenMap).filter(bmo => !bmo.shared).forEach(bmo => {
        Object.values(bmo.childrenMap)
          .filter(dmog => !dmog.shared)
          .forEach(dmog => {
            const selected = share.some((item) => item.value === dmog.id) || this.data?.Children?.some(guid => guid === dmog.id);
            // parent is responsible for grouping items
            // parent id is used later on submit and replaces bmo id in key property
            const item = {
              key: dmog.id,
              dmogId: dmog.DMOGID, 
              value: `${dmog.DisplayName} (${dmog.Name})` , 
              bmogId: this.parent.BMOGID,
              parent: `${bmog.Name} / ${bmo.DisplayName}`, 
              parentId: bmo.id,
              selected, disabled: selected,};
            list.push(item);
        })
      });
    });
    return list;
  }

  private getAllDmog() {
    let list: KeyValue[] = [];
    const share = this.data.Share || [];
       
    this.availableDmogToShare?.forEach((dmog, i) =>{
      const check = share.some((item) => item.value === dmog.dmogGuid) || this.data?.Children?.some(guid => guid === dmog.dmogGuid); 
      const item = {
        key: dmog.dmogGuid,
        value: dmog.NAME,
        dmogId: dmog.DMOGID,
        bmogId: this.parent.BMOGID,
        parent: `${this.parent.Name} / ${this.parent.parent.selectedBMOG.Name}`, 
        parentId: this.parent.parent.selectedBMOG.id,
        selected: check,
        disabled: check,
      };   
      
      list.push(item);
    });

    return list;
  }

   private getAllAssocaitedDmog() {
    let list: KeyValue[] = [];
    const share = this.data.Share || [];
       
    this.allAssociatedSharedItems.forEach((dmog, i) =>{

      const check = share.some((item) => item.value === dmog.dmogGuid) || this.data?.Children?.some(guid => guid === dmog.dmogGuid); 
      const item = {
        key: dmog.dmogGuid,
        value: dmog.NAME,
        dmogId: dmog.DMOGID,
        bmogId: this.parent.BMOGID,
        parent: `${this.parent.Name} / ${this.parent.parent.selectedBMOG.Name}`, 
        parentId: this.parent.parent.selectedBMOG.id,
        selected: true,
        disabled: true,
      };   
      
      list.push(item);
    });

    return list;
  }


  afterFormInit() {
    // Force patch the control to activate form action on start
    setTimeout(() => {
      const val = this.bmoTypeList.find(({key}) => key === this.data.BmoType);
      this.f.BmoType.patchValue(val);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      const payload: IBMO = {
        ...val,
        Parent: this.parent.id,
        BMOID: this.data.BMOID,
        BmoType: val.BmoType?.key || val.BmoType,
        Status: val.Status?.key || val.Status,
        Children: this.data?.Children || [],
        id: this.data?.id || val.Name,
        GUID: this.data?.GUID || val.Name,
        SubProcessId: val.SubProcessId?.key || val.SubProcessId,
        ChildProcessId: val.ChildProcessId?.key || val.ChildProcessId,
        ChildProcessDmoGuid: val.ChildProcessDmoGuid?.key || val.ChildProcessDmoGuid,
        ParentProcessDmoGuid: val.ParentProcessDmoGuid?.key || val.ParentProcessDmoGuid,
        ParentBMId: this.parent.root.BMId,
      };

      const shared = {         
        bmoid:this.data.BMOID,
        dmogIds: this.sharedChanged ? this.associatedSharedItems.map(({ dmogId }) => dmogId).toString() : '-1',
      };
      const removedItems = {
          bmoid:this.data.BMOID,
          domgNames : this.removedDmogs.length > 0 ? this.removedDmogs.join(',')?.toString() : '-1',
      }
      this.output.emit(payload);
      this.ref.close({ payload, shared , removedItems  });
    }
  }

  private onBmoTypeChange(val: any) {
    val = val?.key || val;
    this.dmogSharing=false;
    if (val === BMOType.SubProcess) {
      this.f.SubProcessId.setValidators(Validators.required);
      this.f.ChildProcessId.clearValidators();
      this.f.ChildProcessDmoGuid.clearValidators();
      this.f.ParentProcessDmoGuid.clearValidators();
      
    } else if (val === BMOType.ChildProcess) {
      this.f.SubProcessId.clearValidators();
      this.f.ChildProcessId.setValidators(Validators.required);
      this.f.ChildProcessDmoGuid.setValidators(Validators.required);
      this.f.ParentProcessDmoGuid.setValidators(Validators.required);
      
      
    }
    if(val===BMOType.Form){
      this.dmogSharing=true;
    }
    this.form.updateValueAndValidity();
  }

  private onChildProcessIdChange(processId: any) {
    processId = processId?.key || processId;
    const control = this.controls.find(c => c.name === 'ChildProcessDmoGuid');
    control.options = this.api.getProcessDmos(processId)
      .pipe(this.handleApiResponse('ChildProcessDmoGuid'));
    this.f.ChildProcessDmoGuid.reset();
  }

  private handleApiResponse(control: keyof IBMO) {
    return (source: Observable<any[]>) => {
      return source.pipe(
        map(list => arrayToList(list, 'Value', 'Label')),
        tap(list => {
          const val = list.find(({key}) => key === this.data[control]);
          this.f[control].patchValue(val);
        }),
      )
    }
  }

  private show(controlName: keyof IBMO, compareTo: any) {
    return this.form.get(controlName).valueChanges.pipe(
      startWith(this.form.get(controlName).value),
      map(v => v?.key || v),
      map(v => v === compareTo)
    )
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
    this.associatedSharedItems = this.associatedSharedItems.concat(item);
    this.sharedChanged = true;
    this.refreshAllDmogs();
  }
  onShareRemove(item: SharedItem) {
    this.associatedSharedItems = this.associatedSharedItems.filter((dmog) => dmog.dmogId !== item.dmogId);
    this.sharedChanged = true;
    this.refreshAllDmogs();
  }  

  onShareReorder = (items: SharedItem[]) => {
    this.associatedSharedItems = items;
    this.sharedChanged = true;
  };  

  refreshAllDmogs = () => {
    this.allDmogs.forEach((dmog) => {
      const rightCheck = this.associatedSharedItems.some((item) => item.key === dmog.key);      
      dmog.selected = rightCheck;
      dmog.disabled = rightCheck;
    });
    this.allDmogs = this.allDmogs;
  };

  onItemRemoved(item: any){
        const nameMatch = item.value.match(/\(([^)]+)\)/);
        const Name = nameMatch ? nameMatch[1].trim() : '';
        const DispName = item.value.split('(')[0].trim();
        this.removedDmogs.push(Name);
        this.allDmogs = this.allDmogs.filter((dmog) => dmog.dmogId !== item.dmogId);
        this.sharedChanged = true;
  }
}
type SharedItem = KeyValue & { selected?: boolean; disabled?: boolean; dmogId: number; bmogId: number, parentId: number };
