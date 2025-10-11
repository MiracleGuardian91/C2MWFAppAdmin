import { Injectable } from '@angular/core';
import { BaseHttpService } from '@app/core/services/base-http.service';
import { environment } from '@env/environment';
import { map, shareReplay } from 'rxjs/operators';
import * as fromModels from '../models';
import * as classes from '../classes';
import { EMPTY } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataModelerApiService extends BaseHttpService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;
  private readonly GatewayBaseUrl = `${environment.Setting.GatewayAPIUrl}/wfapibm/DataModel`;

  public getData(processName: string, bmName: string, version: string) {
    const url = `${this.GatewayBaseUrl}/dataModelBM/${processName}/${bmName}`;
    return this.get<fromModels.DataModelerResponse>(url, {version})
      .pipe(map(res => classes.BM.fromResponse(res)))
  }

  public createBMVersion(encryptedBmId: string, timezone: string | number = '') {
    const url = `${this.baseUrl}/createBMVersion`;
    return this.post<string>(url, null, {bmId: encryptedBmId, timezone: timezone.toString()})
  }

  public changeMode(bmId: string | number, mode: fromModels.BMMode) {
    const url = `${this.baseUrl}/updateMode/${mode}/${bmId}`;
    return this.post<boolean>(url, null, null);
  }

  public saveBM(payload: fromModels.IBM, noSpinner?: boolean) {
    const url = `${this.baseUrl}/saveBM`;
    return this.post<boolean>(url, {bm: payload}, null, noSpinner && {noSpinner: 'true'});
  }

  public saveObject(obj: fromModels.ObjectType, bm: classes.BM, noLoading?: boolean) {
    const {url, payload} = this.generateRequestInfo(obj, bm, 'save');
    const headers: any = {processName: bm.ProcessName};
    if (noLoading) {
      headers.noSpinner = 'noSpinner';
    }
    return this.post<string>(url, payload, null, headers);
  }

  public reorderChildren(obj: classes.ObjectClass) {
    let payload = null;
    let url = '';
    if ('BMOGID' in obj) {
      url = `${this.GatewayBaseUrl}/setBmoOrder`;
      payload = {
        bmogid: obj.BMOGID,
        bmoid: obj.Children.map(guid => obj.getChild(guid).BMOID),
      };
    } else if ('BMOID' in obj) {
      url = `${this.GatewayBaseUrl}/setDmogOrder`;
      payload = {
        bmoid: obj.BMOID,
        dmogId: obj.Children.map(guid => obj.getChild(guid).DMOGID),
      }
    } else if ('DMOGID' in obj) {
      console.log(obj)
      url = `${this.GatewayBaseUrl}/setDmoOrder`;
      payload = {
        dmogid: obj.DMOGID,
        columns: obj.formData.components.flatMap(row => row.columns.map(col => col.components.map(dmo => dmo.dmoId)))
      }
    }
    if (!url) return EMPTY;
    return this.post<any>(url, payload);
    
  }

  public saveDmoCondition(payload: any) {
    const url = `${this.GatewayBaseUrl}/saveDmoCondition`;
    return this.post<boolean>(url, payload);
  }

  public deleteDmoCondition(id: string) {
    const url = `${this.GatewayBaseUrl}/deleteDmoCondition/${id}`;
    return this.post<boolean>(url, null);
  }

  public deleteObject(obj: classes.ObjectClass, bm: classes.BM) {
    const unreferenced = obj.unreference();
    const {url, payload} = this.generateRequestInfo(unreferenced, bm, 'delete');
    return this.post<boolean>(url, payload, null, {processName: bm.ProcessName});
  }

  public checkNameValidity(type: fromModels.EntityType, id: number, name: string, version: string, processName: string) {
    const url = `${this.GatewayBaseUrl}/checkName/${type}/${id}/${name}/${version}`;
    return this.get<boolean>(url, null, {processName});
  }

  public checkDmoInBmog(dmoId: string, bmogId: string) {
    const url = `${this.GatewayBaseUrl}/checkDmoInBmog`;
    return this.post<boolean>(url, null, {dmoId, bmogId})
  }

  public checkDmogInBmo(dmogId: string, bmogId: string) {
    const url = `${this.GatewayBaseUrl}/CheckDmogInBMO`;
    return this.post<boolean>(url, null, {dmogId, bmogId})
  }
  
  public checkBmoInBmog(bmoId: string, bmogId: string) {
    const url = `${this.baseUrl}/checkBmoInBmog`;
    return this.post<boolean>(url, null, {bmoId, bmogId})
  }
  
  public getSubprocessList(bmId: string) {
    const url = `${this.baseUrl}/getSubprocessList`;
    return this.get<ValueLabel[]>(url, {bmId}, {noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getChildProcessList(bmId: string) {
    const url = `${this.baseUrl}/getChildProcessList`;
    return this.get<ValueLabel[]>(url, {bmId}, {noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getProcessDmos(processId: string) {
    const url = `${this.GatewayBaseUrl}/getProcessDmoListByProcId`;
    return this.get<ValueLabel[]>(url, {processId}, {noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getRoles(processName: string) {
    const url = `${this.baseUrl}/role`;
    return this.get<{value: string, label: string}[]>(url, null, {processName, noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getColorCodes() {
    const url = `${this.baseUrl}/getColorCode`;
    return this.get<fromModels.Value>(url);
  }

  public getCountriesList() {
    const url = `${this.baseUrl}/getCountry`;
    return this.get<fromModels.Value>(url);
  }

  public getTriggers(processName: string) {
    const url = `${this.baseUrl}/trigger`;
    return this.get<{Key: string, Value: string}[]>(url, null, {processName});
  }

  public encode(s: string) {
    const url = `${this.baseUrl}/encode?str=${s}`;
    return this.get<string>(url);
  }

  public saveSharedDmos(payload: ShareDmoPayload) {
    const url = `${this.GatewayBaseUrl}/saveDMOGColumns`;
    return this.post<boolean>(url, payload);
  }
  
  public deleteDmo(dmoId: string, bmId: string) {
    const url = `${this.GatewayBaseUrl}/deleteDmo`
    return this.post<boolean>(url, null, {dmoId, bmId})
  }

  public saveSharedDmogs(bmoId: string, dmogIds: string) {    
    const url = `${this.baseUrl}/SaveBmoDmogLinking`;
    return this.post<boolean>(url, null, {bmoId, dmogIds});
  }

  public saveSharedBmos(bmogId: string, bmoIds: string) {    
    const url = `${this.baseUrl}/SaveBmogBmoLinking`;
    return this.post<boolean>(url, null, {bmogId, bmoIds});
  }

  public GetAvailableDmoToShare(bmogId: any, bmId: any) { 
    const url = `${this.GatewayBaseUrl}/GetAvailableDmoToShare`;
    return this.get<any>(url,{bmogId, bmId})
  }

  public GetAvailableDmogToShare(bmogId: any, bmId: any) { 
    const url = `${this.GatewayBaseUrl}/GetAvailableDmogToShare`;
    return this.get<any>(url,{bmogId, bmId})
  }

  public GetAvailableBmoToShare(bmogId: any, bmId: any) { 
    const url = `${this.GatewayBaseUrl}/GetAvailableBmoToShare`;
    return this.get<any>(url,{bmogId, bmId})
  }
  
  private generateRequestInfo(obj: fromModels.ObjectType, bm: classes.BM, action: 'save' | 'delete') {
    const payload = bm.payload;
    let path = '';
    if ('BMOGID' in obj) {
      path = `${action}BMOG`;
      payload.bmog = obj;
    }
    else if ('BMOID' in obj) {
      path = `${action}BMO`;
      payload.bmo = obj;
    }
    else if ('DMOGID' in obj) {
      path = `${action}DMOG${action === 'save' ? 'All' : ''}`;
      payload.dmog = obj;
    } 
    else if ('dmoName' in obj) {
      path = `${action}DMO`;
      payload.currentDmo = obj;
    }
    const url = `${this.GatewayBaseUrl}/${path}`;
    return {payload, url};
  }
  public checkCanvasType(type: fromModels.EntityType, id: number, name: string, version: string, processName: string) {
    const url = `${this.baseUrl}/checkCanvasTy/${type}/${id}/${name}/${version}`;
    return this.get<boolean>(url, null, {processName});
  }
}  


type ValueLabel = {Value: string, Label: string};
export interface ShareDmoPayload {
  processName:   string;
  bmName:        string;
  bmVersion:     string;
  dmogName:      string;
  leftDMOGuids:  string;
  rightDMOGuids: string;
  groupKey?:     string;
}