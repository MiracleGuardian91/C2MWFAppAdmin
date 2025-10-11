import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SharedData {
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>('initial');
  private connectionType: 'dotted' | 'sequenceflow' = null;

  constructor() {}

  getData() {
    return this.dataSubject.value;
  }

  setData(newData: any) {
    this.dataSubject.next(newData);
  }

  getConnectionType(){
    return this.connectionType;
  }

  setConnectionType(connectionType){
    this.connectionType = connectionType;
  }

  removeConnectionType(){
    this.connectionType = undefined;
  }
}