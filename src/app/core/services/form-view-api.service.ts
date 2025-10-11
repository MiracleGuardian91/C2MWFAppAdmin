import { Injectable } from '@angular/core';
import { IBatchUpdateDmo, SelectedBatchUpdateDmoResponse, SelectedBulkTriggerDmoResponse, TopCornerDmoResponse } from '@app/admin/BM/models';
import { CanvasType } from '@app/admin/data-modeler/models';
import { environment } from '@env/environment';
import { BMAssociatedCompaniesPayload, ICompany, ICompanyAssociatedBMObject, ICompanyAssociatedWFObject, IGroup, WFAssociatedCompaniesPayload } from '..';
import { BaseHttpService } from './base-http.service';
import { catchError, concatAll, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormViewApiService extends BaseHttpService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/formView`;
 GatewayAPIUrl = environment.Setting.GatewayAPIUrl;
  public getFormData(processName: string, canvasType: CanvasType, transactionId?: string) {
    const url = `${this.baseUrl}/getBMWFJSON/${processName}/${canvasType}`;
    return this.get<any>(url, {transactionId});
  }

  public getCompanies() {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/getUniqueCompany`;
    return this.post<ICompany[]>(url, null);
  }

  public getBMObjectsForCompanyAssociation(groupId: string, processId: string, bmId: string) {
    const payload = {
   //   CompanyId: companyId,
      ProcessId: processId,
      BMId: bmId,
      groupId:groupId, 
    }
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getBMOObjectListForCompAssociation`;
    return this.post<ICompanyAssociatedBMObject[]>(url, payload);
  }

  public getWFObjectsForCompanyAssociation(groupId: string, processId: string, wfId: string) {
    const payload = {
      groupId,
      processId,
      wfId,
    }
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/getWFObjectForCompanyAssociaton`;
    return this.post<ICompanyAssociatedWFObject[]>(url, payload);
  }

  public updatetBMObjectsForCompanyAssociation(payload: BMAssociatedCompaniesPayload) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdateBMObjectAccToComp`;
    return this.post<0 | 1 | -1>(url, payload);
  }

  public updateWFObjectsForCompanyAssociation(payload: WFAssociatedCompaniesPayload) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/insertUpdateWFObjectAccToComp`;
    return this.post<0 | 1 | -1>(url, payload);
  }

  public getDmosByBMId(bmId: string) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getDmoFromBmId_ang`;
    return this.post<IBatchUpdateDmo[]>(url, {bmId});
  }

  public getSelectedDmosForBatchUpdate(bmId: string) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getBatchUpdateTopCornerDmos_ang`;
    return this.post<SelectedBatchUpdateDmoResponse>(url, {bmId});
  }

  public getSelectedDmosForBulkTrigger(bmId: string) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/getBulkTriggerTopCornerDmos_ang`;
    return this.post<SelectedBulkTriggerDmoResponse>(url, {bmId});
  }

  public saveBatchUpdateDmos(bmId: string, processId: string, selectedItems: string) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdateBulkUpdateDmo_ang`;
    return this.post<boolean>(url, {bmId, selectedItems, processId});
  }

  public saveBulkTriggerDmos(bmId: string, processId: string, selectedItems: string) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdatebulkTriggerDMO_ang`;
    return this.post<boolean>(url, {bmId, selectedItems, processId});
  }

  public getTopCornerDmos(bmId: string,bmogId: string, type: 'all' | 'selected' = 'all') {
    let endpoint = 'wfapibm/DataModel/getAvailableItemsOrder_Ang';
    if (type === 'selected') endpoint = 'wfapibm/DataModel/getTopCornerDmos_Ang';
    const url = `${this.GatewayAPIUrl}/${endpoint}`;
    return this.post<TopCornerDmoResponse>(url, null, {BMID: bmId,bmogId:bmogId});
  }

  public saveTopCornerDmos(bmId: string, bmogId: string, dmoIds: number[]) {
    const url = `${this.GatewayAPIUrl}/wfapibm/DataModel/insertUpdateTopLeftCornerOrder_Ang`;
    return this.post<boolean>(url, null, {bmId, dmoIds: dmoIds.toString(),bmogId:bmogId})
  }

  public generateXML(type: 'bm' | 'wf', processName: string, version: string) {
    const url = `${this.baseUrl}/save${type}Json/${processName}`;
    return this.post<boolean>(url, null, {Version: version});
  }
  public getGroups(ProcessName:string) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/getUniqueGroup/${ProcessName}`;
    return this.post<IGroup[]>(url, null);
  }

  public insertUpdateGroups(groupName:string,groupId?:number) {
    const url = `${this.baseUrl}/InsertUpdateGroup/GroupId/0/GroupName/`+ groupName;
    return this.post<0 | 1 | -1>(url,null);
  }
  public getCompaniesByGroupId(GroupId:number,ProcessName:string) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/GetCompanyByGroupId/GroupId/${GroupId}/ProcessName/${ProcessName}`;
    return this.post<ICompany[]>(url, null);
  }
  
  public getBMOGS(bmId: any) { 
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/GetBMOGListBasedOnBM`;
    return this.get<any>(url,{bmId})
  }

  public generateBMWFXML(type: 'bm' | 'wf', processName: string, version: string) {
    const url = `${this.baseUrl}/save${type}Json/${processName}`;
    return this.post<any>(url, null, {Version: version});
  }

  public generateBMWFXMLGateway(type: 'bm' | 'wf', processName: string, version: string) {
    const url = `${this.GatewayAPIUrl}/wfapiwf/wf/save${type}Json/${processName}`;
    return this.post<any>(url, null, {Version: version});
  }

}
