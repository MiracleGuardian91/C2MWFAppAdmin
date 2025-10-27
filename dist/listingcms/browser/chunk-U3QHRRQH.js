import {
  ApiService
} from "./chunk-WGZX6A37.js";
import {
  SimpleLoaderService
} from "./chunk-L2L6ECIJ.js";
import {
  HttpClient,
  finalize,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ZQT4GMOS.js";

// src/app/admin/core/services/wfservice.service.ts
var WFService = class _WFService {
  constructor(api, http, simpleLoader) {
    this.api = api;
    this.http = http;
    this.simpleLoader = simpleLoader;
  }
  withLoader(url, request$) {
    this.simpleLoader.show(url, true);
    return request$.pipe(finalize(() => this.simpleLoader.hide()));
  }
  getWFGrid(processName, bodyData) {
    const url = `wfapiwf/wf/getwfgrid?processName=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }
  ChangeWfStatus(wfID, Status) {
    const url = `wfapiwf/wf/changewfStatus`;
    return this.withLoader(url, this.api.postGatway(url, { wfID, status: Status }));
  }
  generateXML(processname, Version) {
    const url = `formview/SaveWFJson/${processname}?Version=${Version}`;
    return this.withLoader(url, this.api.post(url, null));
  }
  ChangeWfMode(wfID, Mode) {
    const url = `wfapiwf/wf/changewfMode`;
    return this.withLoader(url, this.api.postGatway(url, { wfID, Mode }));
  }
  GetAdditionalPermission(processName) {
    const url = `wfapiwf/wf/GetAdditionalPermission`;
    return this.withLoader(url, this.api.getGateway(url, { processName }));
  }
  AddUpdateAdditionalPermission(processName, item) {
    const url = `wfapiwf/wf/AddUpdateAdditionalPermission?processname=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, item));
  }
  CreateWFVersion(wfID, timezone) {
    const url = `wfapiwf/wf/CreateWFVersion?wfID=${wfID}&timezone=${timezone}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }
  ExportWFData(wfID) {
    const url = `wfapiwf/wf/ExportWFData?wfID=${wfID}`;
    return this.withLoader(url, this.api.postGetFileGateway(url, null, "blob"));
  }
  AddUpdateWorkflow(form) {
    const url = `wfapiwf/wf/AddUpdateWorkflow`;
    return this.withLoader(url, this.api.postGatway(url, form));
  }
  DeleteWF(id) {
    const url = `wfapiwf/wf/DeleteWF?wfIDs=${id}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }
  GetWFStagePercentages(wfid) {
    const url = `wfapiwf/wf/GetWFStagePercentages?wfid=${wfid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  getWFColumns() {
    return [
      { DisplayName: "Workflow Name", Name: "nam", IsAdd: "0" },
      { DisplayName: "Friendly Name", Name: "DISPNAME", IsAdd: "0" },
      { DisplayName: "Version", Name: "Ver", IsAdd: "0" },
      { DisplayName: "Mode", Name: "LiveSTATUS", IsAdd: "0" },
      { DisplayName: "Date Added", Name: "crtdon", IsAdd: "0" },
      { DisplayName: "Date Modified", Name: "modfon", IsAdd: "0" },
      { DisplayName: "Condition", Name: "stgBMcondition", IsAdd: "0" }
    ];
  }
  getEndPoint(ExportType) {
    return this.api.endpoint + "/wf/ExportWFGrid";
  }
  dmoListOrderByDMO(processData, CanvasType) {
    if (CanvasType === null || CanvasType === void 0) {
      CanvasType = "AdminView";
    }
    const url = `listview/getDmo/${processData}?isSortByDMO=true&CanvasType=${CanvasType}`;
    return this.withLoader(url, this.api.get(url));
  }
  ExportToExcel(processName, wfData, WFIds) {
    const url = `wfapiwf/wf/ExportWFGrid?processname=${processName}&WFIds=${WFIds}`;
    return this.withLoader(url, this.api.postGetFileGateway(url, wfData, "blob"));
  }
  ExportFileWithEndPointURL(userData, url) {
    return this.withLoader(url, this.api.postGetFileWithEndPoint(url, userData, "blob"));
  }
  GetWFConditions(wfid, wfosId, WfoId) {
    const url = `wfapiwf/wf/GetWFConditions?wfID=${wfid}&tz=0${wfosId ? `&wfosId=${wfosId}` : ""}${WfoId ? `&WfoId=${WfoId}` : ""}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  GetWFAppList() {
    const url = `wfapiwf/wf/GetWFProcessList`;
    return this.withLoader(url, this.api.getGateway(url).pipe(map((res) => res.Data)));
  }
  getwfBM(wfid) {
    const url = `wfapiwf/wf/GetWFBM?WFId=${wfid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  getBMOGList(bmid) {
    const url = `wfapiwf/wf/GetBMOGListBasedOnBM?BMId=${bmid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  GetStageStateByWFID(wfId, condlevel) {
    const url = `wfapiwf/wf/GetStageStateByWFID?WFId=${wfId}&CondLevel=${condlevel}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  getDmoBasedOnBMId(bmid) {
    const url = `wfapiwf/wf/GetDmoBasedOnBM?BMId=${bmid}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  GetWFConditionAreaControls(bmid, bmogname, condArea) {
    const url = `wfapiwf/wf/GetWFConditionAreaControls?bmId=${bmid}&bmogName=${bmogname}&conditionArea=${condArea}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  SaveWFCondition(bodyData) {
    const url = `wfapiwf/wf/WFConditionUpsert`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }
  GetWFConditionDetail(CondId) {
    const url = `wfapiwf/wf/GetWFConditionDetail?conditionID=${CondId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  DeleteWFCondition(id) {
    const url = `wfapiwf/wf/DeleteWFConditions?condIds=${id}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }
  DeleteBmWfAssociation(AssociationId) {
    const url = `wfapiwf/wf/DeleteBmWfAssociation?AssociationId=${AssociationId}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }
  UploadFile(formData, processName) {
    const url = `wfapiwf/wf/Upload/WF?processName=${processName}`;
    return this.withLoader(url, this.api.UploadFileGateway(url, formData));
  }
  DownloadWFTemp(processName) {
    const url = `wfapiwf/wf/DownloadTemplate/WF?processName=${processName}`;
    return this.withLoader(url, this.api.postGetFileGateway(url, null, "Blob"));
  }
  ChangeWfConditionStatus(condIds, Status) {
    const url = `wfapiwf/wf/ChangeStatusWFConditions?condIds=${condIds}&status=${Status}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }
  GetWFRoles(wfId) {
    const url = `wfapiwf/wf/GetWFRoles?wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  SaveWFRoleAssociation(roleguid, wfId, associatedId) {
    const url = `wfapiwf/wf/SaveWFRoleAssociation?roleguid=${roleguid}&wfId=${wfId}&associatedId=${associatedId}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }
  DeleteWFRoles(id) {
    const url = `wfapiwf/wf/DeleteWFRoles?associatedIds=${id}`;
    return this.withLoader(url, this.api.deleteGridGateway(url));
  }
  ChangeWfBMZone(id, processName) {
    const url = `wfapiwf/wf/ChangeWfBMZone?associatedId=${id}&processName=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }
  SaveWFEmailTemplate(bodyData) {
    const url = `wfapiwf/wf/SaveWFEmailTemplate`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }
  GetWFEmailTemplate(wfId) {
    const url = `wfapiwf/wf/GetWFEmailTemplate?wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  GetBMFWFAssociation(wfId) {
    const url = `wfapiwf/wf/GetBMFWFAssociation?wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  SaveWFBMAssociation(wfId, bmIds) {
    const url = `wfapiwf/wf/SaveWFBMAssociation?wfId=${wfId}&bmIds=${bmIds}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }
  GetLiveEnvironmentWF(processName) {
    const url = `wfapiwf/wf/GetLiveEnvironmentWF?processname=${processName}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  GetLiveEnvirmentBM(processName, wfId) {
    const url = `wfapiwf/wf/GetLiveEnvirmentBM?processname=${processName}&wfId=${wfId}`;
    return this.withLoader(url, this.api.getGateway(url));
  }
  AddWfBMPair(wfId, bmId) {
    const url = `wfapiwf/wf/AddWfBMPair?wfId=${wfId}&bmId=${bmId}`;
    return this.withLoader(url, this.api.postGatway(url, null));
  }
  GetWFCondtionGrid(wfId, bodyData) {
    const url = `wfapiwf/wf/GetWFConditionsGrid?wfId=${wfId}&tz=0`;
    return this.withLoader(url, this.api.postGatway(url, bodyData));
  }
  GetGridConfigStaticCol(processName) {
    const url = `wfapiwf/wf/GetGridConfigStaticCol`;
    return this.withLoader(url, this.api.getGateway(url, { processName }));
  }
  SaveGridConfigStaticCol(processName, colData) {
    const url = `wfapiwf/wf/SaveGridConfigStaticCol?processname=${processName}`;
    return this.withLoader(url, this.api.postGatway(url, colData));
  }
  ImportJsonBM(processName, BMID, parsedData) {
    const url = `wfapiwf/compare/ImportJsonBM?importBMID=${BMID}&processName=${processName}`;
    return this.withLoader(url, this.api.ImportBM(url, parsedData));
  }
  ImportJsonWF(processName, WFID, parsedData) {
    const url = `wfapiwf/compare/ImportJsonWF?importWFID=${WFID}&processName=${processName}`;
    return this.withLoader(url, this.api.ImportWF(url, parsedData));
  }
  static {
    this.\u0275fac = function WFService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WFService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(HttpClient), \u0275\u0275inject(SimpleLoaderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WFService, factory: _WFService.\u0275fac, providedIn: "root" });
  }
};

export {
  WFService
};
//# sourceMappingURL=chunk-U3QHRRQH.js.map
