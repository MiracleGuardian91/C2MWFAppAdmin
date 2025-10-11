import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDrag } from '@angular/cdk/drag-drop';
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
import { DMOS } from '../../const';
import { DataModelerComponent } from '../../data-modeler.component';
import { DMOUI, IConditionBody, IDMComponent } from '../../models';
import { DataModelerApiService } from '../../services/data-modeler-api.service';
import { DmoConditionComponent } from '../dmo-condition/dmo-condition.component';
import { DmoDetailComponent } from '../dmo-detail/dmo-detail.component';
import { NgIf, NgFor, NgTemplateOutlet } from '@angular/common';
import { DmoComponent } from '../dmo/dmo.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-dmog-form-view',
    templateUrl: './dmog-form-view.component.html',
    styleUrls: ['./dmog-form-view.component.scss'],
    standalone: true,
    imports: [
        CdkDropListGroup,
        NgIf,
        CdkDropList,
        NgFor,
        CdkDrag,
        NgTemplateOutlet,
        DmoComponent,
        NgbTooltip,
    ],
})
export class DmogFormViewComponent implements OnInit, OnDestroy {
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
  readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));;

  private _dmog: DMOG;
  private _readonly = false;

  constructor(
    private dmApi: DataModelerApiService,
    private msg: MessageService,
    private toast: ToastrService,
    private dm: DataModelerComponent
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

  public async onDrop(e: CdkDragDrop<DMOUI[] | Partial<IDMComponent>[]>) {
    if(this.IsJsonStaticGridDmo){
      this.toast.warning('More than one json static grid not allowed.', 'Warning');
      return ;
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
    this.dmog.findDmoAndThen(data.dmoName, async (info) => {
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
      const uiData = DMOS[data.type];
      const res = await this.getDmoDetails(uiData, cloned);
      if (!res) {
        this.dmog.removeChild(cloned.dmoName);
        col.components = newComponents.filter(
          (dmo) => dmo.dmoName !== cloned.dmoName
        );
        return;
      }
      const cloneInfo = { ...info, dmoIndex: info.dmoIndex + 1 };
      this.replaceDmo(cloneInfo, res);

      const dmoId = await this.saveDmoDetails(res);
      if (dmoId) {
        res.dmoId = +dmoId;
        this.dmApi.reorderChildren(this.dmog).subscribe();
        this.toast.success('Data was saved successfully', 'Success');
      } else {
        this.toast.warning('Data was not saved', 'Warning');
      }
    });
  }

  public onDmoDelete(data: IDMComponent) {
    const modal = this.msg.showMessage('Warning', {
      header: 'Delete DMO',
      body: `Are you sure you want to delete DMO ${data.dmoName} ?`,
      btnText: 'Delete',
      checkboxText: 'Yes, delete this object',
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
