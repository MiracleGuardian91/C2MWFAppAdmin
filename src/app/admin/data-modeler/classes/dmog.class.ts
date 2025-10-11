import { Share, StatusString } from "@app/admin/BM/models";
import { DMOGType, IDMComponent, IDMOG, IFormio } from "../models";
import { BaseObject } from "./base-object.class";
import { BMO } from "./bmo.class";
import { DMComponent } from "./dm-component.class";

export class DMOG extends BaseObject<BMO, any>  {
  GUID:         string;
  DMOGID:       number;
  DisplayName:  string;
  IsCollapsed:  StatusString;
  DefCollapsed: StatusString;
  showHelp:     StatusString;
  LongDesc:     string;
  Parent:       string;
  Type:         DMOGType;
  Share:        Share[];
  LnkBmoDmogID: number;
  IsHidden:     StatusString;
  declare Children:     string[];
  Roles?:       {Key: string, Value: string}[];
  public formData: IFormio;
  public readonly childrenMap: Partial<Record<string, DMComponent>> = {};

  constructor(obj: Partial<IDMOG>, parent: BMO) {
    super(obj, parent);
    this.GUID = obj.GUID; 
    this.DMOGID = obj.DMOGID;
    this.DisplayName = obj.DisplayName;
    this.IsCollapsed = obj.IsCollapsed;
    this.DefCollapsed = obj.DefCollapsed;
    this.showHelp = obj.showHelp;
    this.LongDesc = obj.LongDesc;
    this.Parent = obj.Parent || parent.id;
    this.Type = obj.Type;
    this.Share = obj.Share || [];
    this.LnkBmoDmogID = obj.LnkBmoDmogID;
    this.IsHidden = obj.IsHidden;
    this.Children = obj.Children || [];
    this.Roles = obj.Roles || [];
    this.root = parent.parent.parent;
    this.formData = this.generateFormDataBoilerplate() as any;
  }

  get shared() {
    // return Object.values(this.root.childrenMap)
    // .flatMap(bmog => Object.values(bmog.childrenMap))
    // .filter(bmo => bmo.id !== this.parent.id)
    // .some(bmo => bmo.childrenMap[this.id])
    return this.parent.Share.some(({value}) => value === this.id);
  }

  public addFormData(formData: IFormio) {
    if (formData?.components?.length > 0) {
      this.formData = formData;
    }
  }

  public addChild(child: DMComponent) {
    if (!this.Children.includes(child.dmoName)){
      this.Children.push(child.dmoName);
    }
    this.childrenMap[child.dmoName] = child;
  }

  public removeChild(name: string): void {
    this.Children = this.Children.filter(c => c !== name);
    delete this.childrenMap[name];
  }

  getChild(name: string) {
    return this.childrenMap[name];
  }

  public findDmo(name: string): FormDataComponentInfo | null {
    if (!name) return null;
    const rows = this.formData.components;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.columns.length; j++) {
        const col = row.columns[j];
        for (let k = 0; k < col.components.length; k++) {
          const dmo = col.components[k];
          if (dmo.dmoName === name) {
            return {
              rowIndex: i, 
              columnIndex: j, 
              dmoIndex: k,
              dmo,
            };
          }
        }
      }
    }

    return null;
  }

  public findDmoAndThen(name: string, cb: (info: FormDataComponentInfo | null) => any) {
    const child = this.findDmo(name);
    cb(child || null);
    return child;
  }

  public update(obj: Partial<IDMOG> = {}): void {
    Object.entries(obj).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  private generateFormDataBoilerplate() {
    return {
      display: 'form',
      // ROWS
      components: [
        {
          input: false,
          key: 'columns',
          label: 'Columns',
          type: 'columns',
          // COLUMNS
          columns: [
            {
              // DMOS
              components: [
              ],
              width: 50,
              offset: 0,
              push: 0,
              pull: 0,
              type: 'column',
              input: true,
              key: 'column1',
              hideOnChildrenHidden: false,
              tableView: true
            },
            {
              components: [],
              width: 50,
              offset: 0,
              push: 0,
              pull: 0,
              type: 'column',
              input: true,
              key: 'column2',
              hideOnChildrenHidden: false,
              tableView: true
            }
          ],
          tableView: false,
          dataSrc: 2,
          columns1: [
            {
              width: 50
            },
            {
              width: 50
            }
          ]
        }
      ],
      _id: this.id,
    }
  }
}

export interface FormDataComponentInfo {
  rowIndex: number, 
  columnIndex: number, 
  dmoIndex: number,
  dmo: IDMComponent,
}