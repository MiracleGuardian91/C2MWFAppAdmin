import { Injectable } from '@angular/core';
import { BaseHttpService } from '@app/core/services/base-http.service';
import { map, shareReplay } from 'rxjs/operators';
import * as fromModels from '../models1';
import * as classes from '../classes';
import { EMPTY, Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({providedIn: 'root'})
export class DataModelerApiService extends BaseHttpService {
  private  baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;
  private wfbaseUrl = `${environment.Setting.WF_Api_Url}/api/v3/modeler`;
  private GatewayAPIUrl = `${environment.Setting.GatewayAPIUrl}/wfapibm/DataModel`;
  public getData(processName: string, bmName: string, version: string) {
    
    let url = `${this.GatewayAPIUrl}/getdatafornewmodelbm/${processName}/${bmName}`;
    return this.get<fromModels.DataModelerResponse>(url, {version})
      .pipe(map(res => classes.BM.fromResponse(res)))
  }

  public createBMVersion(encryptedBmId: string, timezone: string | number = '') {
    const url = `${this.GatewayAPIUrl}/createBMVersion`;
    return this.post<string>(url, null, {bmId: encryptedBmId, timezone: timezone.toString()})
  }

  public changeMode(bmId: string | number, mode: fromModels.BMMode) {
    const url = `${this.GatewayAPIUrl}/updateMode/${bmId}/${mode}`;
    return this.post<boolean>(url, null, null);
  }

  public saveBM(payload: fromModels.IBM, noSpinner?: boolean) {
    const url = `${this.GatewayAPIUrl}/saveBM`;
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
      url = `${this.GatewayAPIUrl}/setBmoOrder`;
      payload = {
        bmogid: obj.BMOGID,
        bmoid: obj.Children.map(guid => obj.getChild(guid).BMOID),
      };
    } else if ('BMOID' in obj) {
      url = `${this.GatewayAPIUrl}/setDmogOrder`;
      payload = {
        bmoid: obj.BMOID,
        dmogId: obj.Children.map(guid => obj.getChild(guid).DMOGID),
      }
    } else if ('DMOGID' in obj) {
      console.log(obj)
      url = `${this.GatewayAPIUrl}/setDmoOrder`;
      payload = {
        dmogid: obj.DMOGID,
        columns: obj.formData.components.flatMap(row => row.columns.map(col => col.components.map(dmo => dmo.dmoId)))
      }
    }
    if (!url) return EMPTY;
    return this.post<any>(url, payload);
    
  }

  public saveDmoCondition(payload: any) {
    let url = `${this.GatewayAPIUrl}/saveBMCondition`;
    return this.post<boolean>(url, payload);
  }

  public deleteDmoCondition(id: string) {
    const url = `${this.GatewayAPIUrl}/deleteDmoCondition/${id}`;
    return this.post<boolean>(url, null);
  }

public deleteObject(obj: classes.ObjectClass, bm: classes.BM) {
    const unreferenced = obj.unreference();
    const {url, payload} = this.generateRequestInfo(unreferenced, bm, 'delete');

    const lastSegment = url.split('/').pop();
    const postTo = (endpoint: string, body: any) =>
    this.post<boolean>(`${this.GatewayAPIUrl}/${endpoint}`,null, body);

    if (lastSegment?.includes('DMOG')) {
        const dmogId = payload?.dmog?.['DMOGID'];
        const bmoId = payload?.bmo?.[payload?._BmoName]?.BMOID;
        const endpoint = "UnshareDmog";
        return postTo(endpoint, { dmogId, bmoId });

      } else if (lastSegment?.includes('BMO')) {
        const bmogId = payload?.bmog?.[payload?._BmogName]?.BMOGID;
        const bmoId = payload?.bmo?.['BMOID'];
        const endpoint = "UnshareBmo";
        return postTo(endpoint, { bmoId, bmogId });

      } else {
        return this.post<boolean>(url, payload, null, { processName: bm.ProcessName });
      }
 
  }


  public checkNameValidity(type: fromModels.EntityType, id: number, name: string, version: string, processName: string) {
    const url = `${this.GatewayAPIUrl}/checkName/${type}/${id}/${name}/${version}`;
    return this.get<boolean>(url, null, {processName});
  }

  public checkDmoInBmog(dmoId: string, bmogId: string) {
    const url = `${this.GatewayAPIUrl}/checkDmoInBmog`;
    return this.post<boolean>(url, null, {dmoId, bmogId})
  }

  public checkDmogInBmo(dmogId: string, bmogId: string) {
    const url = `${this.GatewayAPIUrl}/CheckDmogInBMO`;
    return this.post<boolean>(url, null, {dmogId, bmogId})
  }
  
  public checkBmoInBmog(bmoId: string, bmogId: string) {
    const url = `${this.GatewayAPIUrl}/checkBmoInBmog`;
    return this.post<boolean>(url, null, {bmoId, bmogId})
  }
  
  public getSubprocessList(bmId: string) {
    const url = `${this.GatewayAPIUrl}/getSubprocessList`;
    return this.get<ValueLabel[]>(url, {bmId}, {noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getChildProcessList(bmId: string) {
    const url = `${this.GatewayAPIUrl}/getChildProcessList`;
    return this.get<ValueLabel[]>(url, {bmId}, {noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getProcessDmos(processId: string) {
    const url = `${this.GatewayAPIUrl}/getProcessDmoListByProcId`;
    return this.get<ValueLabel[]>(url, {processId}, {noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getRoles(processName: string) {
    const url = `${this.GatewayAPIUrl}/role`;
    return this.get<{value: string, label: string}[]>(url, null, {processName, noSpinner: 'noSpinner'}).pipe(shareReplay(1));
  }

  public getColorCodes() {
    const url = `${this.GatewayAPIUrl}/getColorCode`;
    return this.get<fromModels.Value>(url);
  }

  public getCountriesList() {
    const url = `${this.GatewayAPIUrl}/getCountry`;
    return this.get<fromModels.Value>(url);
  }

  public getTriggers(processName: string) {
    const url = `${this.GatewayAPIUrl}/trigger`;
    return this.get<{Key: string, Value: string}[]>(url, null, {processName});
  }

  public encode(s: string) {
    const url = `${this.GatewayAPIUrl}/encode?str=${s}`;
    return this.get<string>(url);
  }

  public saveSharedDmos(payload: ShareDmoPayload) {
    const url = `${this.GatewayAPIUrl}/saveDMOGColumns`;
    return this.post<boolean>(url, payload);
  }
  
   public unshareDmo(dmoId: string, dmogId: string) {
    const url = `${this.GatewayAPIUrl}/unshareDmo`
    return this.post<boolean>(url, null, {dmoId, dmogId})
  }

  public deleteDmo(dmoId: string, bmId: string) {
    const url = `${this.GatewayAPIUrl}/DeleteDataModelObject`
    return this.post<boolean>(url, null, {dmoId, bmId})
  }

   public deleteDmog(processName: string, dmogName : string) {
    const url = `${this.GatewayAPIUrl}/deletecard`
    return this.post<boolean>(url, null, {dmogName}, {processName});
  }
   public deleteBmo(processName: string, bmoNames : string, version:string) {
    const url = `${this.GatewayAPIUrl}/deletesection`
    return this.post<boolean>(url, null, {bmoNames,version}, {processName});
  }

  public saveSharedDmogs(bmoId: string, dmogIds: string) {    
    const url = `${this.GatewayAPIUrl}/SaveBmoDmogLinking`;
    return this.post<boolean>(url, null, {bmoId, dmogIds});
  }
  public saveSharedBmos(bmogId: string, bmoIds: string) {    
    const url = `${this.GatewayAPIUrl}/SaveBmogBmoLinking`;
    return this.post<boolean>(url, null, {bmogId, bmoIds});
  }

  public GetAvailableDmoToShare(bmogId: any, bmId: any) { 
    let url = `${this.GatewayAPIUrl}/GetAvailableDmoToShare`;
    return this.get<any>(url,{bmogId, bmId}, null, true)
  }

  public GetAvailableDmogToShare(bmogId: any, bmId: any) { 
    const url = `${this.GatewayAPIUrl}/GetAvailableDmogToShare`;
    return this.get<any>(url,{bmogId, bmId})
  }

  public GetAvailableBmoToShare(bmogId: any, bmId: any) { 
    const url = `${this.GatewayAPIUrl}/GetAvailableBmoToShare`;
    return this.get<any>(url,{bmogId, bmId})
  }
  public SaveDmogProps(model) {
    const url = `${this.GatewayAPIUrl}/SaveDmogProps`;
    
    return this.post<boolean>(url,model);
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
    const url = `${this.GatewayAPIUrl}/${path}`;
    return {payload, url};
  }
  public checkCanvasType(type: fromModels.EntityType, id: number, name: string, version: string, processName: string) {
    const url = `${this.GatewayAPIUrl}/checkCanvasTy/${type}/${id}/${name}/${version}`;
    return this.get<boolean>(url, null, {processName});
  }

  public saveReorderDmogs(bmoId: string, dmogIds: string) {    
    const url = `${this.GatewayAPIUrl}/SaveBmoDmogLinking?bmoId=${bmoId}&dmogIds=${dmogIds}`;
    return this.postReorderDmogs<boolean>(url, bmoId, dmogIds);
  }

  public saveupdatePrntDmogIDs(model) {    
    const url = `${this.GatewayAPIUrl}/updatePrntDmogIDs`;
    return this.updatePrntDmogIDs<boolean>(url, model);
  }

  public callDynamicApi(dataSource: string, endpoint: string, methodtype: string, body: any) : Observable<any> {
    let baseurl: string | null = null;
  
    switch (dataSource?.toLowerCase()) {
      case 'wfapi':
        baseurl = environment.Setting.BaseAPIUrl;
        break;
      case 'wfapigateway':
        baseurl = environment.Setting.GatewayAPIUrl;
        break;
      case 'customapi':
        baseurl = environment.Setting.CustomAPIUrl;
        break;
      default:
        return null;
    }
  
    const url = `${baseurl}/${endpoint}`;
    switch (methodtype?.toUpperCase()) {
      case 'GET':
        return this.get(url, { params: body });
      case 'POST':
        return this.post(url, body);
      case 'DELETE':
        return this.delete(url, { body });
      default:
        return null;
    }
  }
public getdmobybmid(bmid: string){
    const url = `${environment.Setting.BaseAPIUrl}/formview/getdmobybmid`;
    return this.post<any>(url,null,{bmid});
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