import { StatusString } from "@app/admin/BM/models";
import { BM } from "./bm.class";
import { ObjectClass } from "./object-class.type";

export class BaseObject<P, C extends ObjectClass, T = any> {
  public readonly id:                 string;
  public readonly Name:               string;
  public readonly Version:            string;
  public readonly childrenMap?:       Partial<Record<string, C>>;
  public Status:                      StatusString;
  public Children:                    string[];
  public root:                        BM;

  constructor(obj: any = {}, public parent: P) {
    this.id = obj.id || '';
    this.Name = obj.Name || '';
    this.Version = obj.Version || (parent as any)?.Version || '';
    this.Children = obj.Children || [];
    this.Status = obj.Status || '0';
    this.childrenMap = {};
  }

  public getChild(guid: string) {
   return this.childrenMap[guid]
  }

  public addChild(child: C) {
    if (!this.Children.includes(child.id)){
      this.Children.push(child.id);
    }
    this.childrenMap[child.id] = child;
  }
  
  public addChildAt(child: C, index: number) {
    if (!this.Children.includes(child.id)) {
      this.Children = this.Children.slice(0, index).concat(child.id, this.Children.slice(index));
    }
    this.childrenMap[child.id] = child;
  }

  public removeChild(id: string) {
    this.Children = this.Children.filter(cid => cid !== id);
    delete this.childrenMap[id];
  }

  public update(obj: Partial<T> = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      this[key] = value;
    })
  }

  public unreference() {
    const {childrenMap, parent, root, ...rest} = this;
    if ('DMOGID' in this) {
      delete rest['formData'];
      delete rest['Children'];
      delete rest['Roles'];
    }
    return rest; 
  }
}