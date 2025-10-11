import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import { intersectionBy } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { from, of, Subject } from 'rxjs';
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
import { DMOS,DMOSLayout } from '../../const1';
import { DataModeler1Component } from '../../data-modeler1.component';
import { DMOUI, IConditionBody, IDMComponent } from '../../models1';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { DmoConditionComponent } from '../dmo-condition/dmo-condition.component';
import { DmoDetailComponent } from '../dmo-detail/dmo-detail.component';

@Component({
  selector: 'app-dmog-form-view1',
  templateUrl: './dmog-form-view.component.html',
  styleUrls: ['./dmog-form-view.component.scss'],
})
export class DmogFormViewComponent1 implements OnInit, OnDestroy {
  private readonly saveDmog = new Subject<void>();
  private componentActive = true;
  private IsJsonStaticGridDmo:boolean=false;
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

  constructor(
    private dmApi: DataModelerApiService,
    private msg: MessageService,
    private toast: ToastrService,
    private dm: DataModeler1Component
  ) {}

  ngOnInit(): void {
    this.onSaveDmog();
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

  
  public async onDmoEdit(data: DMComponent) {
    const uiData = DMOS[data.type];
    const res = await this.getDmoDetails(uiData, data);
    if (res) {
      const dmoId = await this.saveDmoDetails(res);
      if (dmoId) {
        res.dmoId = +dmoId;
        this.dmApi.reorderChildren(this.dmog).subscribe();
        this.toast.success('Data was saved successfully', 'Success');
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

  public onDmoDelete(data: IDMComponent) {
    const modal = this.msg.showMessage('Warning', {
      header: 'Delete DMO',
      body: `Are you sure you want to delete this DMO?`,
      btnText: 'Delete',
      checkboxText: 'Yes, delete this record',
      isDelete: true,
      isNewDesign:true,
      callback: () => {
        this.dmApi
          .deleteDmo(data.dmoId.toString(), this.dmog.root.BMId.toString())
          .subscribe((success) => success && this.dm.getBM());
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

  private async saveDmoDetails(res: IDMComponent) {
    const originalDmoData = this._dmog.findDmoAndThen(res.dmoName, (info) =>
      this.replaceDmo(info, res)
    );
    try {
      return await this.dmApi.saveObject(res, this.dmog.root).toPromise();
    } catch (error) {
      if (originalDmoData) {
        this._dmog.findDmoAndThen(originalDmoData.dmo.dmoName, (info) =>
          this.replaceDmo(info, originalDmoData.dmo)
        );
      }
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

  async openConditionPopup(item: IDMComponent) {
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
  checkIsStaticJsonGrid(item):boolean{
     
    if(this.dmog){
      if(this.dmog?.Children?.length > 0 && this.dmog?.Type=='JSONStaticGrid')
        this.IsJsonStaticGridDmo=true;
      else
      this.IsJsonStaticGridDmo=false;
     if(item.type!='jsonstaticgrid'
       && this.dmog.Type=='JSONStaticGrid')
        return true;
      else if(this.dmog?.Type!='JSONStaticGrid' 
      && item.type=='jsonstaticgrid')
        return true;
      }  
      return false;
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
