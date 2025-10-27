import {
  BM
} from "./chunk-74OCJGBF.js";
import {
  BaseHttpService
} from "./chunk-BQKXR4UC.js";
import {
  environment
} from "./chunk-L2L6ECIJ.js";
import {
  EMPTY,
  map,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-ZQT4GMOS.js";

// src/app/admin/data-modeler/services/data-modeler-api.service.ts
var DataModelerApiService = class _DataModelerApiService extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;
    this.GatewayBaseUrl = `${environment.Setting.GatewayAPIUrl}/wfapibm/DataModel`;
  }
  getData(processName, bmName, version) {
    const url = `${this.GatewayBaseUrl}/dataModelBM/${processName}/${bmName}`;
    return this.get(url, { version }).pipe(map((res) => BM.fromResponse(res)));
  }
  createBMVersion(encryptedBmId, timezone = "") {
    const url = `${this.baseUrl}/createBMVersion`;
    return this.post(url, null, { bmId: encryptedBmId, timezone: timezone.toString() });
  }
  changeMode(bmId, mode) {
    const url = `${this.baseUrl}/updateMode/${mode}/${bmId}`;
    return this.post(url, null, null);
  }
  saveBM(payload, noSpinner) {
    const url = `${this.baseUrl}/saveBM`;
    return this.post(url, { bm: payload }, null, noSpinner && { noSpinner: "true" });
  }
  saveObject(obj, bm, noLoading) {
    const { url, payload } = this.generateRequestInfo(obj, bm, "save");
    const headers = { processName: bm.ProcessName };
    if (noLoading) {
      headers.noSpinner = "noSpinner";
    }
    return this.post(url, payload, null, headers);
  }
  reorderChildren(obj) {
    let payload = null;
    let url = "";
    if ("BMOGID" in obj) {
      url = `${this.GatewayBaseUrl}/setBmoOrder`;
      payload = {
        bmogid: obj.BMOGID,
        bmoid: obj.Children.map((guid) => obj.getChild(guid).BMOID)
      };
    } else if ("BMOID" in obj) {
      url = `${this.GatewayBaseUrl}/setDmogOrder`;
      payload = {
        bmoid: obj.BMOID,
        dmogId: obj.Children.map((guid) => obj.getChild(guid).DMOGID)
      };
    } else if ("DMOGID" in obj) {
      console.log(obj);
      url = `${this.GatewayBaseUrl}/setDmoOrder`;
      payload = {
        dmogid: obj.DMOGID,
        columns: obj.formData.components.flatMap((row) => row.columns.map((col) => col.components.map((dmo) => dmo.dmoId)))
      };
    }
    if (!url)
      return EMPTY;
    return this.post(url, payload);
  }
  saveDmoCondition(payload) {
    const url = `${this.GatewayBaseUrl}/saveDmoCondition`;
    return this.post(url, payload);
  }
  deleteDmoCondition(id) {
    const url = `${this.GatewayBaseUrl}/deleteDmoCondition/${id}`;
    return this.post(url, null);
  }
  deleteObject(obj, bm) {
    const unreferenced = obj.unreference();
    const { url, payload } = this.generateRequestInfo(unreferenced, bm, "delete");
    return this.post(url, payload, null, { processName: bm.ProcessName });
  }
  checkNameValidity(type, id, name, version, processName) {
    const url = `${this.GatewayBaseUrl}/checkName/${type}/${id}/${name}/${version}`;
    return this.get(url, null, { processName });
  }
  checkDmoInBmog(dmoId, bmogId) {
    const url = `${this.GatewayBaseUrl}/checkDmoInBmog`;
    return this.post(url, null, { dmoId, bmogId });
  }
  checkDmogInBmo(dmogId, bmogId) {
    const url = `${this.GatewayBaseUrl}/CheckDmogInBMO`;
    return this.post(url, null, { dmogId, bmogId });
  }
  checkBmoInBmog(bmoId, bmogId) {
    const url = `${this.baseUrl}/checkBmoInBmog`;
    return this.post(url, null, { bmoId, bmogId });
  }
  getSubprocessList(bmId) {
    const url = `${this.baseUrl}/getSubprocessList`;
    return this.get(url, { bmId }, { noSpinner: "noSpinner" }).pipe(shareReplay(1));
  }
  getChildProcessList(bmId) {
    const url = `${this.baseUrl}/getChildProcessList`;
    return this.get(url, { bmId }, { noSpinner: "noSpinner" }).pipe(shareReplay(1));
  }
  getProcessDmos(processId) {
    const url = `${this.GatewayBaseUrl}/getProcessDmoListByProcId`;
    return this.get(url, { processId }, { noSpinner: "noSpinner" }).pipe(shareReplay(1));
  }
  getRoles(processName) {
    const url = `${this.baseUrl}/role`;
    return this.get(url, null, { processName, noSpinner: "noSpinner" }).pipe(shareReplay(1));
  }
  getColorCodes() {
    const url = `${this.baseUrl}/getColorCode`;
    return this.get(url);
  }
  getCountriesList() {
    const url = `${this.baseUrl}/getCountry`;
    return this.get(url);
  }
  getTriggers(processName) {
    const url = `${this.baseUrl}/trigger`;
    return this.get(url, null, { processName });
  }
  encode(s) {
    const url = `${this.baseUrl}/encode?str=${s}`;
    return this.get(url);
  }
  saveSharedDmos(payload) {
    const url = `${this.GatewayBaseUrl}/saveDMOGColumns`;
    return this.post(url, payload);
  }
  deleteDmo(dmoId, bmId) {
    const url = `${this.GatewayBaseUrl}/deleteDmo`;
    return this.post(url, null, { dmoId, bmId });
  }
  saveSharedDmogs(bmoId, dmogIds) {
    const url = `${this.baseUrl}/SaveBmoDmogLinking`;
    return this.post(url, null, { bmoId, dmogIds });
  }
  saveSharedBmos(bmogId, bmoIds) {
    const url = `${this.baseUrl}/SaveBmogBmoLinking`;
    return this.post(url, null, { bmogId, bmoIds });
  }
  GetAvailableDmoToShare(bmogId, bmId) {
    const url = `${this.GatewayBaseUrl}/GetAvailableDmoToShare`;
    return this.get(url, { bmogId, bmId });
  }
  GetAvailableDmogToShare(bmogId, bmId) {
    const url = `${this.GatewayBaseUrl}/GetAvailableDmogToShare`;
    return this.get(url, { bmogId, bmId });
  }
  GetAvailableBmoToShare(bmogId, bmId) {
    const url = `${this.GatewayBaseUrl}/GetAvailableBmoToShare`;
    return this.get(url, { bmogId, bmId });
  }
  generateRequestInfo(obj, bm, action) {
    const payload = bm.payload;
    let path = "";
    if ("BMOGID" in obj) {
      path = `${action}BMOG`;
      payload.bmog = obj;
    } else if ("BMOID" in obj) {
      path = `${action}BMO`;
      payload.bmo = obj;
    } else if ("DMOGID" in obj) {
      path = `${action}DMOG${action === "save" ? "All" : ""}`;
      payload.dmog = obj;
    } else if ("dmoName" in obj) {
      path = `${action}DMO`;
      payload.currentDmo = obj;
    }
    const url = `${this.GatewayBaseUrl}/${path}`;
    return { payload, url };
  }
  checkCanvasType(type, id, name, version, processName) {
    const url = `${this.baseUrl}/checkCanvasTy/${type}/${id}/${name}/${version}`;
    return this.get(url, null, { processName });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DataModelerApiService_BaseFactory;
      return function DataModelerApiService_Factory(__ngFactoryType__) {
        return (\u0275DataModelerApiService_BaseFactory || (\u0275DataModelerApiService_BaseFactory = \u0275\u0275getInheritedFactory(_DataModelerApiService)))(__ngFactoryType__ || _DataModelerApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataModelerApiService, factory: _DataModelerApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  DataModelerApiService
};
//# sourceMappingURL=chunk-BB5KTJXW.js.map
