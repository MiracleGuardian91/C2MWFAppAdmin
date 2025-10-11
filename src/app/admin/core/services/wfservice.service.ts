import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessListItem } from '@app/admin/models/process-list-item.model';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { ApiService } from './api.service';
import { SimpleLoaderService } from '@app/shared/services/simple-loader.service';

@Injectable({ providedIn: 'root' })
export class WFService {
  constructor(
    private api: ApiService,
    private http: HttpClient,
    private simpleLoader: SimpleLoaderService
  ) {}

  private withLoader<T>(url: string, request$: Observable<T>): Observable<T> {
    this.simpleLoader.show(url, true);
    return request$.pipe(finalize(() => this.simpleLoader.hide()));
  }

  getWFGrid(processName: string, bodyData: any) {
    const url = `wfapiwf/wf/getwfgrid?processName=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }

  ChangeWfStatus(wfID: any, Status: any) {
    const url = `wfapiwf/wf/changewfStatus`;
    return this.withLoader(
      url,
      this.api.postGatway(url, { wfID, status: Status })
    );
  }

  generateXML(processname: any, Version: any) {
    const url = `formview/SaveWFJson/${processname}?Version=${Version}`;
    return this.withLoader(url, this.api.post(url, null));
  }

  ChangeWfMode(wfID: any, Mode: any) {
    const url = `wfapiwf/wf/changewfMode`;
    return this.withLoader(url, this.api.postGatway(url, { wfID, Mode }));
  }

  GetAdditionalPermission(processName: string) {
    const url = `wfapiwf/wf/GetAdditionalPermission`;
    return this.withLoader(url, this.api.getGateway(url, { processName }));
  }

  AddUpdateAdditionalPermission(processName: any, item: any) {
    const url = `wfapiwf/wf/AddUpdateAdditionalPermission?processname=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, item));
  }

  CreateWFVersion(wfID: any, timezone: any) {
    const url = `wfapiwf/wf/CreateWFVersion?wfID=${wfID}&timezone=${timezone}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }

  ExportWFData(wfID: string) {
    const url = `wfapiwf/wf/ExportWFData?wfID=${wfID}`;
    return this.withLoader(url, this.api.postGetFileGateway(url, null, 'blob'));
  }

  AddUpdateWorkflow(form: any) {
    const url = `wfapiwf/wf/AddUpdateWorkflow`;
    return this.withLoader(url, this.api.postGatway(url, form));
  }

  DeleteWF(id: string) {
    const url = `wfapiwf/wf/DeleteWF?wfIDs=${id}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }

  GetWFStagePercentages(wfid: string) {
    const url = `wfapiwf/wf/GetWFStagePercentages?wfid=${wfid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  getWFColumns() {
    return [
      { DisplayName: 'Workflow Name', Name: 'nam', IsAdd: '0' },
      { DisplayName: 'Friendly Name', Name: 'DISPNAME', IsAdd: '0' },
      { DisplayName: 'Version', Name: 'Ver', IsAdd: '0' },
      { DisplayName: 'Mode', Name: 'LiveSTATUS', IsAdd: '0' },
      { DisplayName: 'Date Added', Name: 'crtdon', IsAdd: '0' },
      { DisplayName: 'Date Modified', Name: 'modfon', IsAdd: '0' },
      { DisplayName: 'Condition', Name: 'stgBMcondition', IsAdd: '0' },
    ];
  }

  getEndPoint(ExportType: string): string {
    return this.api.endpoint + '/wf/ExportWFGrid';
  }

  dmoListOrderByDMO(processData: any, CanvasType?: any) {
    if (CanvasType === null || CanvasType === undefined) {
      CanvasType = 'AdminView';
    }
    const url = `listview/getDmo/${processData}?isSortByDMO=true&CanvasType=${CanvasType}`;
    return this.withLoader(url, this.api.get(url));
  }

  ExportToExcel(processName: any, wfData: any, WFIds: any) {
    const url = `wfapiwf/wf/ExportWFGrid?processname=${processName}&WFIds=${WFIds}`;
    return this.withLoader(
      url,
      this.api.postGetFileGateway(url, wfData, 'blob')
    );
  }

  ExportFileWithEndPointURL(userData: any, url: any) {
    return this.withLoader(
      url,
      this.api.postGetFileWithEndPoint(url, userData, 'blob')
    );
  }

  GetWFConditions(wfid: string, wfosId?: string, WfoId?: string) {
    const url = `wfapiwf/wf/GetWFConditions?wfID=${wfid}&tz=0${
      wfosId ? `&wfosId=${wfosId}` : ''
    }${WfoId ? `&WfoId=${WfoId}` : ''}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  GetWFAppList() {
    const url = `wfapiwf/wf/GetWFProcessList`;
    return this.withLoader(
      url,
      this.api.getGateway(url).pipe(map((res) => res.Data as ProcessListItem[]))
    );
  }

  getwfBM(wfid: any) {
    const url = `wfapiwf/wf/GetWFBM?WFId=${wfid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  getBMOGList(bmid: any) {
    const url = `wfapiwf/wf/GetBMOGListBasedOnBM?BMId=${bmid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  GetStageStateByWFID(wfId: any, condlevel: any) {
    const url = `wfapiwf/wf/GetStageStateByWFID?WFId=${wfId}&CondLevel=${condlevel}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  getDmoBasedOnBMId(bmid: any) {
    const url = `wfapiwf/wf/GetDmoBasedOnBM?BMId=${bmid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  GetWFConditionAreaControls(bmid: any, bmogname: any, condArea: any) {
    const url = `wfapiwf/wf/GetWFConditionAreaControls?bmId=${bmid}&bmogName=${bmogname}&conditionArea=${condArea}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  SaveWFCondition(bodyData: any) {
    const url = `wfapiwf/wf/WFConditionUpsert`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }

  GetWFConditionDetail(CondId: any) {
    const url = `wfapiwf/wf/GetWFConditionDetail?conditionID=${CondId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  DeleteWFCondition(id: string) {
    const url = `wfapiwf/wf/DeleteWFConditions?condIds=${id}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }

  DeleteBmWfAssociation(AssociationId: string) {
    const url = `wfapiwf/wf/DeleteBmWfAssociation?AssociationId=${AssociationId}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }

  UploadFile(formData: FormData, processName: any) {
    const url = `wfapiwf/wf/Upload/WF?processName=${processName}`;
    return this.withLoader(url, this.api.UploadFileGateway(url, formData));
  }

  DownloadWFTemp(processName: any) {
    const url = `wfapiwf/wf/DownloadTemplate/WF?processName=${processName}`;
    return this.withLoader(url, this.api.postGetFileGateway(url, null, 'Blob'));
  }

  ChangeWfConditionStatus(condIds: any, Status: any) {
    const url = `wfapiwf/wf/ChangeStatusWFConditions?condIds=${condIds}&status=${Status}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }

  GetWFRoles(wfId: any) {
    const url = `wfapiwf/wf/GetWFRoles?wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  SaveWFRoleAssociation(roleguid: any, wfId: any, associatedId: any) {
    const url = `wfapiwf/wf/SaveWFRoleAssociation?roleguid=${roleguid}&wfId=${wfId}&associatedId=${associatedId}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }

  DeleteWFRoles(id: any) {
    const url = `wfapiwf/wf/DeleteWFRoles?associatedIds=${id}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }

  ChangeWfBMZone(id: any, processName: any) {
    const url = `wfapiwf/wf/ChangeWfBMZone?associatedId=${id}&processName=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }

  SaveWFEmailTemplate(bodyData: any) {
    const url = `wfapiwf/wf/SaveWFEmailTemplate`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }

  GetWFEmailTemplate(wfId: any) {
    const url = `wfapiwf/wf/GetWFEmailTemplate?wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  GetBMFWFAssociation(wfId: any) {
    const url = `wfapiwf/wf/GetBMFWFAssociation?wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  SaveWFBMAssociation(wfId: any, bmIds: any) {
    const url = `wfapiwf/wf/SaveWFBMAssociation?wfId=${wfId}&bmIds=${bmIds}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }

  GetLiveEnvironmentWF(processName: any) {
    const url = `wfapiwf/wf/GetLiveEnvironmentWF?processname=${processName}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  GetLiveEnvirmentBM(processName: any, wfId: any) {
    const url = `wfapiwf/wf/GetLiveEnvirmentBM?processname=${processName}&wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }

  AddWfBMPair(wfId: any, bmId: any) {
    const url = `wfapiwf/wf/AddWfBMPair?wfId=${wfId}&bmId=${bmId}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }

  GetWFCondtionGrid(wfId: any, bodyData: any) {
    const url = `wfapiwf/wf/GetWFConditionsGrid?wfId=${wfId}&tz=0`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }

  GetGridConfigStaticCol(processName: string) {
    const url = `wfapiwf/wf/GetGridConfigStaticCol`;
    return this.withLoader(url, this.api.getGateway(url, { processName }));
  }

  SaveGridConfigStaticCol(processName: any, colData: any) {
    const url = `wfapiwf/wf/SaveGridConfigStaticCol?processname=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, colData));
  }

  ImportJsonBM(processName: any, BMID: any, parsedData: any) {
    const url = `wfapiwf/compare/ImportJsonBM?importBMID=${BMID}&processName=${processName}`;
    return this.withLoader(url, this.api.ImportBM(url, parsedData));
  }

  ImportJsonWF(processName: any, WFID: any, parsedData: any) {
    const url = `wfapiwf/compare/ImportJsonWF?importWFID=${WFID}&processName=${processName}`;
    return this.withLoader(url, this.api.ImportWF(url, parsedData));
  }
}
