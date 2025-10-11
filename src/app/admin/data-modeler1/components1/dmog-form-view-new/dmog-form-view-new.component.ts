import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService, MessageService } from '@app/core';
import { intersectionBy } from 'lodash';
import { ComponentType, ToastrService } from 'ngx-toastr';
import { EMPTY, from, Observable, of, Subject } from 'rxjs';
import {
  catchError,
  filter,
  finalize,
  map,
  mergeAll,
  switchMap,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { DMComponent, DMOG, FormDataComponentInfo } from '../../classes';
import { DMOS, DMOSLayout } from '../../const1';
import { DataModeler1Component } from '../../data-modeler1.component';
import {
  DMOUI,
  IConditionBody,
  IDMComponent,
  PanelMainRow,
  PanelMainContainer,
  ContainerStyle
} from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { DmoConditionComponent } from '../dmo-condition/dmo-condition.component';
import { DmoDetailComponent } from '../dmo-detail/dmo-detail.component';
import { ServiceProviderService } from '../../services1/service-provider.service';
import * as classes from '../../classes';
import * as components from '..';
import * as models from '../../models1';
import { ObjectType } from '../../models1';
import { ActivatedRoute } from '@angular/router';
import { ResizeablePanelComponent } from '..';
import { NgTypeToSearchTemplateDirective } from '@ng-select/ng-select';

type ObjectClass = classes.ObjectClass;
@Component({
  selector: 'app-dmog-form-view',
  templateUrl: './dmog-form-view-new.component.html',
  styleUrls: ['./dmog-form-view-new.component.scss'],
})
export class DmogFormViewComponentNew implements OnInit, OnDestroy {
  private readonly saveDmog = new Subject<void>();
  private componentActive = true;
  private IsJsonStaticGridDmo: boolean = false;
  dmoToAnotherdmog:any;
  @Output() readonlyEmitter = new EventEmitter<any>();
  //public bm: classes.BM;
  @Input()
  set dmog(dmog: DMOG) {
    this._dmog = dmog;
  }
  get dmog() {
    return this._dmog;
  }

  @Input()
  set readonly(readonly: boolean) {
    this._readonly = readonly;
  }
  get readonly() {
    return this._readonly;
  }
  readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  readonly panelControls = Object.values(DMOSLayout);
  private _dmog: DMOG;
  private _readonly = false;

  @Input() bmo;
  @Input() selectedBMO;
  @Input() bm;

  rows: PanelMainRow[] = [];
  panelMainContainer:PanelMainContainer;
  containerStyle:ContainerStyle;
  constructor(
    private dmApi: DataModelerApiService,
    private msg: MessageService,
    private toast: ToastrService,
    private dm: DataModeler1Component,
    private dataProvider: ServiceProviderService,
    private readonly route: ActivatedRoute,
    private apiService:ApiService
  ) {
   
      this.dataProvider.getNewlyBmog().subscribe(data=>{
       this.onDropLayout(data);
      })
    }
  

  ngOnInit(): void {
 
   
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.selectedBMO && changes.selectedBMO.currentValue!=this.selectedBMO){
  
    }
    this.readonlyEmitter.emit(this.readonly);
  }

  setStyle(data){
    if(data && data.DMOGProps){
     
      let panelMainContainer=JSON.parse(data.DMOGProps);
          let width = panelMainContainer.width;
          
           if(!width){
            width=100
           }
        return   {
          width: `${width}%`,
        };
    }
    return   {
      width: `${100}%`,
      
    };
  }
  private onSaveDmog() {
    const message = "Don't close the window while saving";
    const title = 'Save in progress';
    this.saveDmog
      .pipe(
        takeWhile((_) => this.componentActive),
        switchMap((_) => {
          let activeToast = this.toast.findDuplicate(
            title,
            message,
            true,
            false
          );
          if (activeToast) {
            this.toast.remove(activeToast.toastId);
          }
          activeToast = this.toast.info(message, title, {
            timeOut: 10000,
            tapToDismiss: false,
          });
          return this.dmApi
            .saveObject(this.dmog.unreference(), this.dmog.root, true)
            .pipe(
              catchError((_) => of(false)),
              finalize(() => this.toast.remove(activeToast.toastId))
            );
        })
      )
      .subscribe();
  }

  public async onDrop(e: CdkDragDrop<DMOUI[] | Partial<IDMComponent>[]>) {
    if (this.IsJsonStaticGridDmo) {
      this.toast.warning(
        'More than one json static grid not allowed.',
        'Warning'
      );
      return;
    }
    const from = e.previousContainer;
    const to = e.container as CdkDropList<IDMComponent[]>;
    const fromIdx = e.previousIndex;
    const toIdx = e.currentIndex;
    if (from.id === 'form-controls') {
      const uiData = from.data[fromIdx] as DMOUI;
      const res = await this.getDmoDetails(uiData);
      if (!res) {
        return;
      }
      transferArrayItem([res], to.data as Partial<IDMComponent>[], 0, toIdx);
      const dmoId = await this.saveDmoDetails(res);
      if (!dmoId) {
        to.data = to.data.filter((dmo) => dmo.dmoName !== res.dmoName);
      }
      res.dmoId = +dmoId;
      this.dmApi.reorderChildren(this.dmog).subscribe(() => this.dm.getBM());
      return;
    } else if (from.id !== to.id) {
      transferArrayItem(from.data as any[], to.data, fromIdx, toIdx);
    } else {
      if (from.id === to.id && fromIdx === toIdx) return;
      moveItemInArray(from.data as any[], fromIdx, toIdx);
    }
    this.dmApi.reorderChildren(this.dmog).subscribe();
    // this.saveDmog.next();
  }
 
  async OnBMOSave(data){
  
     if (this.IsJsonStaticGridDmo) {
      this.toast.warning(
        'More than one json static grid not allowed.',
        'Warning'
      );
      return;
    }
    this._dmog=data.data;

      const uiData = data.type as DMOUI;
      const res = await this.getDmoDetails(uiData);
      if (!res) {
        return;
      }
    //this.bm.selectedDMOG=data.data;

   
      const dmoId = await this.saveDmoDetails(res,data);
      if (dmoId && dmoId!="false") {
        this.dataProvider.setDmoStates(dmoId);
        this.dm.getBM()

      }
      
      return;
   
   
  }
  dragDmoToAnotherdmog(data){
   this.dmoToAnotherdmog=data;

  }
  dropDmoToAnotherdmog(data){
    if(this.dmoToAnotherdmog && this.dmoToAnotherdmog.dmogId!=data.dmogId){
      console.log("Services Call and From Form View ");
        //this.dataProvider.setMoveDmo({"prevdmogId":this.dmoToAnotherdmog.dmogId,"dmogId":data.dmogId,"targetId":data.targetId,"dmoguid":this.dmoToAnotherdmog.dmoguid});
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      }
 }
  public async onDmoEdit(emitData) {
 
   let data= emitData.dmo as  DMComponent

   let dmog= emitData.dmog 
    const uiData = DMOS[data.type];
    const res = await this.getDmoDetails(uiData, data);
    if (res) {
      const dmoId = await this.saveDmoDetails(res,dmog,true);
      if (dmoId) {
        res.dmoId = +dmoId;
        //this.dmApi.reorderChildren(this.dmog).subscribe();
        this.toast.success('Data was saved successfully', 'Success');
        this.dm.getBM()
      } else {
        this.toast.warning('Data was not saved', 'Warning');
      }
    }
  }

  public onDmoClone(data: IDMComponent) {
    this.dmog.findDmoAndThen(data.dmoName, (info) => {
      if (!info) return;
      const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
      const rows = this.dmog.formData.components;
      const col = rows[r].columns[c];
      const cloned = this.dmog.childrenMap[data.dmoName].clone();
      const newComponents = col.components
        .slice(0, d + 1)
        .concat(cloned.asObject() as IDMComponent, col.components.slice(d + 1));
      col.components = newComponents;
      this.dmog.addChild(cloned);
      // this.dmApi.saveObject(cloned.asObject() as any, this.dmog.root).subscribe(success => success && this.dm.getBM())
      // this.saveDmog.next();
    });
  }

  public onDmoDelete(emitData) {

    let dmoName = emitData.dmoName
    let data= emitData.dmo as  DMComponent
    let dmog= emitData.dmog 
    let dmoguid=emitData.dmoguid;
    const modal = this.msg.showMessage('Warning', {
      header: 'Delete DMO',
      body: `Are you sure you want to delete DMO ${dmoName} ?`,
      btnText: 'Delete',
      checkboxText: 'Yes, delete this record',
      isDelete: true,
      isNewDesign:true,
      callback: () => {
        this.dmApi
          .deleteDmo(data.dmoId.toString(), dmog.root.BMId.toString())
          .subscribe(
            (success) =>{ 
              if(success) {
                this.dataProvider.setDeleteDmo({"dmogId":dmog.GUID,"dmoguid":dmoguid});
               this.dm.getBM()
              }
              }
          );
      },
    });
  }

  private async getDmoDetails(uiData: DMOUI, data: Partial<DMComponent> = {}) {
    const newObject = Object.keys(data).length === 0 || data.fromApi === false;
    const modal = this.msg.showComponent(DmoDetailComponent, {
      newObject,
      data: data as IDMComponent,
      uiData,
      parent: this._dmog,
      readonly: this.readonly,
    });
    return (await modal.result) as IDMComponent;
  }
  formClick(){
    this.dataProvider.setHideContextMenu(false);
  }
 

  private async saveDmoDetails(res: IDMComponent,selectedDmog?,isEdit?) {
   
    try {
     let url= `wfapibm/DataModel/saveDmo`
     let data
     if(isEdit){
      data=selectedDmog;
     }else{
      data=selectedDmog.data;
     }
   
      let dmog={"DMOGProps":data!.DMOGProps,
        "id":data!.DMOGID,
        "ProcessName":data!.root!.ProcessName,
        "Version":data!.Version
      }
     
    
     let model={"dmo":res,"dmog":dmog}
      return await this.apiService.postgateway('',url,model,null).toPromise();
    } catch (error) {
      console.log(error);
     // if (originalDmoData) {
        // this._dmog.findDmoAndThen(originalDmoData.dmo.dmoName, (info) =>
        //   this.replaceDmo(info, originalDmoData.dmo)
        // );
      //}
    }
    return false;
  }
  private replaceDmo(
    info: FormDataComponentInfo,
    replaceWith: IDMComponent | null
  ) {
    if (!info) return;
    const { rowIndex: r, columnIndex: c, dmoIndex: d } = info;
    const rows = this.dmog.formData.components;
    let newComponents = rows[r].columns[c].components.slice();
    if (replaceWith === null) {
      newComponents = newComponents.filter(
        (dmo) => dmo.dmoName !== info.dmo.dmoName
      );
      this.dmog.removeChild(info.dmo.dmoName);
    } else {
      newComponents[d] = replaceWith;
      this.dmog.addChild(new DMComponent(replaceWith, this.dmog));
    }
    rows[r].columns[c].components = newComponents;
  }

  async openConditionPopup(emitData) {
    let item= emitData.dmo as  DMComponent
    this._dmog= emitData.dmog 

    const uiData = this.formsControls.find((c) => c.type === item.type);
    const parent = this._dmog.childrenMap[item.dmoName];
    const modal = this.msg.showComponent(DmoConditionComponent, {
      uiData,
      parent,
      readonly: this.readonly,
    });
    const res = await modal.result;
    if (!res) {
      return;
    }
    const { payload, deletedConditions } = res as {
      payload: any;
      deletedConditions: IConditionBody[];
    };
    this.dmApi.saveDmoCondition(payload).subscribe((success) => {
      if (success) {
        const deleteCondition = (id: string) =>
          this.dmApi.deleteDmoCondition(id).pipe(
            filter((success) => success),
            map((_) => id)
          );
        const actualDeletingConditions = intersectionBy(
          parent.conditions,
          deletedConditions,
          'Id'
        );

        from(actualDeletingConditions.map((c) => deleteCondition(c.Id)))
          .pipe(
            mergeAll(),
            finalize(
              () =>
                (parent.conditions =
                  payload.dmoCondition[parent.guid].Condition)
            )
          )
          .subscribe();
      }
    });
  }
  checkIsStaticJsonGrid(item): boolean {
    if (this.dmog) {
      if (
        this.dmog?.Children?.length > 0 &&
        this.dmog?.Type == 'JSONStaticGrid'
      )
        this.IsJsonStaticGridDmo = true;
      else this.IsJsonStaticGridDmo = false;
      if (item.type != 'jsonstaticgrid' && this.dmog.Type == 'JSONStaticGrid')
        return true;
      else if (
        this.dmog?.Type != 'JSONStaticGrid' &&
        item.type == 'jsonstaticgrid'
      )
        return true;
    }
    return false;
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  // ****************Layout
 
  reloadParent(){
    this.getBM()
  }
  public async onDropLayout(e: CdkDragDrop<DMOUI[] | Partial<IDMComponent>[]>) {
   
    const from = e.previousContainer;
    const to = e.container as CdkDropList<IDMComponent[]>;
    const fromIdx = e.previousIndex;
    const toIdx = e.currentIndex;
    if (from.id === 'form-controls') {

      let column=[];
      column.push({"colIndex":0,"dmoguid":[],"width":99.5,"rows":[]})
      let letNextRow={rowIndex:0,
        columns:column
      } as PanelMainRow
       this.rows.push(letNextRow);
    
       this.panelMainContainer={
        width:100,
        rows: this.rows
      }
     
      
      

      this.getObjectDetails(this.selectedBMO).then((res) => {
      
        if (res != null) {
          this.rows=[];
        }
      });

      return;
    }
  }

  public saveObjectDetails(
    parent: ObjectClass,
    obj: Partial<ObjectClass> = {},
    payload: models.ObjectType,
    finalize?: (id: string) => Observable<any>
  ) {
    const newObject = Object.keys(obj).length === 0;
    // Store data in case optimistic update fails
    const original = { ...obj };

    // Optimistic ui update
    if (newObject) {
      const { childClass } = this.determineClassAndComponent(parent);
      const child = new childClass(payload, parent);
      parent.addChild(child);
    } else {
      obj.update(payload);
    }

    // Rollback optimistic update if something goes wrong
    const rollback = () => {
      if (newObject) {
        parent.removeChild(payload.id);
      } else {
        obj.update(original);
      }
    };

    this.dmApi
      .saveObject(payload, this.bm)
      .pipe(
        switchMap((id) => {
          if (finalize) {
            return finalize(id).pipe(map(() => id));
          }
          return of(id);
        })
      )
      .subscribe({
        next: (success) => {
          if (!success) rollback();
          else {
            this.bm.cacheObjectId(payload);
            // this.getBM();
          }
        },
        error: (_) => rollback(),
        complete: () => this.getBM(),
      });
  }
  public getBM() {
    const { ProcessName, Name, Version } = this.route.snapshot.data
      ?.bm as models.IBM;
    this.dmApi
      .getData(ProcessName, Name, Version)
      .subscribe((bm) => (this.bm = bm));
  }
  private determineClassAndComponent(
    parent: ObjectClass,
    data: Partial<ObjectClass> = {}
  ) {
    let component: ComponentType<
      models.ObjectDetail<models.ObjectType, models.ObjectType>
    >;
    let childClass: any;
    if (parent instanceof classes.BM) {
      component = components.BmogDetailComponent;
      childClass = classes.BMOG;
    } else if (parent instanceof classes.BMOG) {
      component = components.BmoDetailComponent;
      childClass = classes.BMO;
    } else if (parent instanceof classes.BMO) {
      component = components.DmogDetailComponent;
      childClass = classes.DMOG;
    } else if (parent === undefined && data instanceof classes.BM) {
      component = components.BmDetailComponent;
      childClass = undefined;
    }
    return { component, childClass };
  }

  setPanelStyle(obj) {
    return {
      position: 'fixed',
      left: `${obj.left}px`,
      top: `${obj.top}px`,
      width: `${obj.width}px`,
      height: `${obj.height}px`,
    };
  }
  public onTabRemove(tab: any) {
    const obj = tab.data;
    const name = (obj as any)?.DisplayName || obj.Name;
    this.msg.showMessage('Warning', {
      header: `Delete ${name}`,
      body: `Are you sure you want to delete ${name}?`,
      btnText: 'Delete',
      checkboxText: 'Yes, delete this object',
      isDelete: true,
      isNewDesign:true,
      callback: () => this.deleteObject(obj),
    });
  }

  public onTabEdit(tab: any) {
    this.openObjectDetails(tab.data);
  }

  public openObjectDetails(obj: ObjectClass) {
    this.getObjectDetails(obj.parent as ObjectClass, obj);
  }
// keep it
private async getObjectDetails(parent: ObjectClass, data: Partial<ObjectClass> = {}) {

  const newObject = Object.keys(data).length === 0;
  const {component} = this.determineClassAndComponent(parent, data);

  const modal = this.msg.showComponent(component, {data: data as ObjectClass, parent, newObject});
  const res = await modal.result;
  if (!res) return;

  if (parent === undefined && data instanceof classes.BM) {
    this.saveBMDetails(res);
    return;
  }
  if (parent instanceof classes.BM) {
    const saveSharedDmogs = (id: string) => {
      if (res.shared.bmoIds === '-1' && !newObject) {
        return EMPTY;
      }
      return this.dmApi.saveSharedBmos(res.shared.bmogId || id, res.shared.bmoIds);
    }
    this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs)
  }
  else if (parent instanceof classes.BMOG) {
    const saveSharedDmogs = (id: string) => {
      if (res.shared.dmogIds === '-1' && !newObject) {
        return EMPTY;
      }
      return this.dmApi.saveSharedDmogs(res.shared.bmoId || id, res.shared.dmogIds);
    }
    this.saveObjectDetails(parent, data, res.payload, saveSharedDmogs)
  }
  else if (parent instanceof classes.BMO) {
    const saveSharedDmos = (id: string) => {
      if (res.shared.leftDMOGuids === '-1' && res.shared.rightDMOGuids === '-1' && !newObject) {
        return EMPTY;
      }
      return this.dmApi.saveSharedDmos(res.shared);
    }
    if(this){
    res.payload.DMOGProps=JSON.stringify(this.panelMainContainer);
    }
    let result=await this.saveObjectDetails(parent, data, res.payload, saveSharedDmos);
    console.log("result" ,result)
  } else {
    this.saveObjectDetails(parent, data, res);
  }


}

  private saveBMDetails(payload: models.IBM) {
    this.dmApi.saveBM(payload).subscribe((success) => {
      if (success) {
        this.bm.update(payload);
      }
    });
  }
  private deleteObject(obj: ObjectClass) {
    const parent = obj.parent;

    // Store obj index in case optimistic update fails
    const idx = parent.Children.findIndex((id) => id === obj.id);

    // Optimistic ui update
    parent.removeChild(obj.id);

    // Rollback optimistic update if something goes wrong
    const rollback = () => parent.addChildAt(obj as any, idx);

    this.dmApi.deleteObject(obj, this.bm).subscribe({
      next: (success) => (!success ? rollback() : this.getBM()),
      error: (_) => rollback(),
    });
  }
}
