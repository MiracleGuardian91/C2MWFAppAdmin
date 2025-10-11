import { Share, StatusString } from '@app/admin/BM/models';
import { nameToGuid } from '@lib/util';
import { IBM, ObjectType, DataModelerResponse, BMMode } from '../models1';
import { BaseObject } from './base-object.class';
import { BMO } from './bmo.class';
import { BMOG } from './bmog.class';
import { DMComponent } from './dm-component.class';
import { DMOG } from './dmog.class';
import { ObjectClass } from './object-class.type';

export class BM extends BaseObject<undefined, BMOG, IBM> {
  DisplayName: string;
  Mode: BMMode;
  IntegrateWorkspace: string;
  Description: string;
  BMId: number;
  Share: Share[];
  ProcessName: string;
  declare Status: StatusString;
  EnableLoad: string;
  ProcessId: string;
  TypeId: string;
  _selectedBMOG?: BMOG;
  _selectedBMO?: BMO;
  _selectedDMOG?: DMOG;

  get selectedBMOG() {
    return this._selectedBMOG;
  }
  set selectedBMOG(bmog: BMOG) {
    this._selectedBMOG = bmog;
  }

  get selectedBMO() {
    return this._selectedBMO;
  }
  set selectedBMO(bmo: BMO) {
    this._selectedBMO = bmo;
  }

  get selectedDMOG() {
    return this._selectedDMOG;
  }
  set selectedDMOG(bmo: DMOG) {
    this._selectedDMOG = bmo;
  }

  constructor(obj: Partial<IBM>, parent: undefined) {
    super(obj, parent);
    this.DisplayName = obj.DisplayName;
    this.Mode = obj.Mode;
    this.IntegrateWorkspace = obj.IntegrateWorkspace || '0';
    this.Description = obj.Description;
    this.BMId = obj.BMId;
    this.Share = obj.Share || [];
    this.ProcessName = obj.ProcessName;
    this.Status = obj.Status || '0';
    this.EnableLoad = obj.EnableLoad;
    this.ProcessId = obj.ProcessId;
    this.TypeId = obj.TypeId;
    this.root = this;
  }

  get published() {
    return this.Mode === 'Published';
  }

  get payload() {
    const { childrenMap, _selectedBMO, _selectedBMOG, _selectedDMOG, root, ...rest } = this;
    const bmog = this.unreferenceChildren(childrenMap);
    const bmo = {}
    const dmog = {};
    const dmo = {};
    Object.values(this.childrenMap).forEach(bmog => {
      Object.entries(bmog.childrenMap).forEach(([id, bmoClass]) => {
        bmo[id] = bmoClass.unreference();
        Object.entries(bmoClass.childrenMap).forEach(([id, dmogClass]) => {
          dmo[id] = dmogClass.formData;
          dmog[id] = dmogClass.unreference();
        });
      });
    });
    if (_selectedDMOG?.formData) {
      dmo[_selectedDMOG.id] = _selectedDMOG.formData;
    }
    const currentDmo = {};
    return {
      bm: {
        ...rest,
        selectedBMOG: _selectedBMOG?.id,
        selectedBMO: _selectedBMO?.id,
        selectedDMOG: _selectedDMOG?.id,
      },
      bmog,
      bmo,
      dmog,
      dmo,
      currentDmo,
      _BmogName: _selectedBMOG?.id,
      _BmoName: _selectedBMO?.id,
      _DmogName: _selectedDMOG?.id,
    };
  }

  public unreferenceAll() {
    const { childrenMap, _selectedBMO, _selectedBMOG, _selectedDMOG, root, ...rest } = this;
    return rest;
  }

  private unreferenceChildren(childrenMap: Record<string, ObjectClass>): Record<string, ObjectType> | ObjectType {
    const children = {};
    Object.entries(childrenMap || {}).forEach(([id, obj]) => {
      children[id] = obj.unreference();
    });
    return children;
  }

  public updateSelectedObjects(obj: ObjectClass) {
    if (!obj) return;
    if ('BMOGID' in obj) {
      this.selectedBMOG = obj;
    }
    if ('BMOID' in obj) {
      this.selectedBMO = obj;
    }
    if ('DMOGID' in obj) {
      this.selectedDMOG = obj;
    }
    if ('dmoName' in obj) {
      return;
    }
    const childId = obj?.Children[0];
    if (childId) {
      const firstChild = obj.childrenMap[childId];
      this.updateSelectedObjects(firstChild as any);
    } else {
      switch (obj.id) {
        case this.selectedBMOG?.id:
          this.selectedBMO = null;break;
        case this.selectedBMO?.id:
          this.selectedDMOG = null;break;
        default:
          break;
      }
    }
    this.cacheObjectIds();
  }

  public onRemoveChild(removedObjectId: string) {
    switch (removedObjectId) {
      case this.selectedBMOG?.id:
        this.selectedBMOG = null;break;
      case this.selectedBMO?.id:
        this.selectedBMO = null;break;
      case this.selectedDMOG?.id:
        this.selectedDMOG = null;break;
      default:
        break;
    }
  }

  static fromResponse(res: DataModelerResponse) {
    const bm = new BM(res.Item1, undefined);
    bm.Children.forEach((bmogId) => {
      const bmog = new BMOG(res.Item2[bmogId], bm);
      bm.addChild(bmog);
      bmog.Children.forEach((bmoid) => {
        const bmo = new BMO(res.Item3[bmoid], bmog);
        bmog.addChild(bmo);
        bmo.Children.forEach((dmogid) => {
          const dmog = new DMOG(res.Item4[dmogid], bmo);
          bmo.addChild(dmog);
          res.Item5[dmogid]?.components.forEach((dmoObj) => {
                const guid = dmoObj.guid || nameToGuid(dmoObj.dmoName);
                dmoObj.dmoId = +res?.Item7.dmoIds[guid];
                dmoObj.guid = guid;
                const dmo = new DMComponent(dmoObj, dmog);
                dmog.addChild(dmo);
                res?.Item6[dmo.guid]?.Condition.forEach((cond) => {
                  dmo.addCondition(cond);
                });
              
            
          });
          dmog.addFormData(res.Item5[dmogid]);
        });
      });
    });
    bm.setInitialSelectedObjects();
    return bm;
  }

  private setInitialSelectedObjects() {
    const { selectedBMOG, selectedBMO, selectedDMOG } = localStorage;
    this._setInitialSelectedObject(this, [{selectedDMOG}, {selectedBMO}, {selectedBMOG}]);
  }

  /** Recursively go through objects children and set them as selected objects
   * 
   *  @param parent is of type ObjectClass excluding DMComponent, 
   * 
   *  namely {@link BMOG} | {@link BMO} | {@link DMOG}
   */
  private _setInitialSelectedObject(parent: any, ids: Record<string, string>[]) {
    if (ids.length === 0) return;
    const [[key, id]] = Object.entries(ids.pop());
    const child = parent.childrenMap[id];
    if (child) {
      this[key] = child;
      this._setInitialSelectedObject(child, ids);
    } else {
      const firstChildId = parent.Children[0];
      firstChildId && this.updateSelectedObjects(parent.childrenMap[firstChildId])
    }
  }

  /** Invoked when an {@link ObjectClass} excluding {@link DMComponent} is saved or created */
  public cacheObjectId(obj: ObjectType) {
    if ('BMOGID' in obj) {
      localStorage.selectedBMOG = obj.id;
    }
    if ('BMOID' in obj) {
      localStorage.selectedBMO = obj.id;
    }
    if ('DMOGID' in obj) {
      localStorage.selectedDMOG = obj.id;
    }
  }

  private cacheObjectIds() {
    localStorage.selectedBMOG = this.selectedBMOG?.id;
    localStorage.selectedBMO = this.selectedBMO?.id;
    localStorage.selectedDMOG = this.selectedDMOG?.id;
  }
}
