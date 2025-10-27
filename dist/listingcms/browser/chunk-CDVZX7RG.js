import {
  require_FileSaver_min
} from "./chunk-AZ2LSUZA.js";
import {
  UserDetail
} from "./chunk-43FCU5DY.js";
import {
  environment
} from "./chunk-L2L6ECIJ.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpHeaders,
  HttpParams,
  Observable,
  Subject,
  concatAll,
  from,
  map,
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-ZQT4GMOS.js";
import {
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/lib/services/base-http.service.ts
var import_file_saver = __toESM(require_FileSaver_min());
var BaseHttpService = class _BaseHttpService {
  constructor(http) {
    this.http = http;
  }
  get(url, parameters, httpHeaders) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.get(url, { headers, params });
  }
  post(url, body, parameters, httpHeaders, responseType) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.post(url, body, { headers, params, responseType });
  }
  put(url, body, parameters, httpHeaders, responseType) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.put(url, body, { headers, params, responseType });
  }
  delete(url, parameters, httpHeaders) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.delete(url, { headers, params });
  }
  _setParams(params) {
    return Object.entries(params || {}).reduce((acc, [key, value]) => value ? acc.append(key, value) : acc, new HttpParams());
  }
  _setHeaders(headers) {
    return Object.entries(headers || {}).reduce((acc, [key, value]) => value ? acc.append(key, value) : acc, new HttpHeaders());
  }
  handleBlobResponse(data) {
    let fileName = "Document";
    const contentDisposition = data.headers.get("content-disposition");
    if (contentDisposition) {
      const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = fileNameRegex.exec(contentDisposition);
      if (matches != null && matches[1]) {
        fileName = matches[1].replace(/['"]/g, "");
      }
    }
    (0, import_file_saver.saveAs)(data.body, fileName);
  }
  static {
    this.\u0275fac = function BaseHttpService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseHttpService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BaseHttpService, factory: _BaseHttpService.\u0275fac, providedIn: "root" });
  }
};

// src/lib/services/application-api.service.ts
var ApplicationApiService = class _ApplicationApiService extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseurl = `${environment.Setting.BaseAPIUrl}/application`;
  }
  addRecord(payload) {
    const url = `${this.baseurl}/insertApplication`;
    return this.post(url, payload);
  }
  updateRecord(payload) {
    const url = `${this.baseurl}/updateApplication`;
    return this.post(url, payload);
  }
  getRecordDetails(transactionId, view = "AdminView", identifierName = null, identifierValue = null) {
    const url = `${this.baseurl}/applicationData/${identifierName}/${identifierValue}/${view}`;
    return this.get(url, { transactionId });
  }
  getRecordDetailsHeaders(transactionId, view = "AdminView", identifierName = null, identifierValue = null) {
    const url = `${this.baseurl}/getTopCornerDetail/${identifierName}/${identifierValue}/${view}`;
    return this.get(url, { transactionId });
  }
  validateUniqueConstraints(payload) {
    const url = `${this.baseurl}/validateUniqueDmoValue`;
    return this.post(url, payload);
  }
  uploadFile(processName, formData) {
    const url = `${this.baseurl}/uploadFile`;
    return this.post(url, formData, null, {
      processName
    });
  }
  downloadFile(processName, formData) {
    const url = `${this.baseurl}/downloadFile`;
    return this.post(url, formData, null, { processName }, "Blob");
  }
  bulkUpload(file, processName) {
    const url = `${this.baseurl}/bulkUploadNew`;
    const body = new FormData();
    body.append("processName", processName);
    body.append("uploadFile", file);
    return this.post(url, body, null, { processName });
  }
  downloadBulkUploadTemplate(processName) {
    const url = `${this.baseurl}/getBulkUploadTemplate/${processName}`;
    return this.http.post(url, null, {
      responseType: "blob",
      observe: "response"
    });
  }
  deleteFile(processName, formData) {
    const url = `${this.baseurl}/deleteFile`;
    return this.post(url, formData, null, {
      processName
    });
  }
  getContacts(transactionId, identifierName = null, identifierValue = null) {
    const url = `${this.baseurl}/getContacts/${identifierName}/${identifierValue}`;
    return this.get(url, { transactionId });
  }
  getContact(contactId) {
    const url = `${this.baseurl}/getContact`;
    return this.get(url, { contactId }).pipe(map((res) => res.length ? res[0] : null));
  }
  saveContact(contact) {
    const url = `${this.baseurl}/upsertContact`;
    return this.post(url, contact);
  }
  deleteContact(contactId) {
    const url = `${this.baseurl}/deleteContact`;
    return this.post(url, null, { contactId });
  }
  getRevertableStateList(transactionId, identifierName = null, identifierValue = null) {
    const url = `${this.baseurl}/proceesedStateList/${identifierName}/${identifierValue}?transactionId=${encodeURIComponent(transactionId)}`;
    return this.get(url);
  }
  revertState(state, transactionId, identifierName = null, identifierValue = null) {
    const url = `${this.baseurl}/revertBack/${identifierName}/${identifierValue}/${state.StageState}`;
    return this.post(url, null, {
      transactionId,
      stateId: state.PrevWfosId
    });
  }
  getAttachments(transactionId, identifierName = null, identifierValue = null) {
    const url = `${this.baseurl}/fileinfo/${identifierName}/${identifierValue}`;
    return this.get(url, { transactionId });
  }
  deleteAttachment(id) {
    const url = `${this.baseurl}/deleteFileInfo`;
    return this.post(url, null, { fileInfoId: id });
  }
  getCountries() {
    const url = `${this.baseurl}/getCountry`;
    return this.get(url);
  }
  getStates() {
    const url = `${this.baseurl}/getState`;
    return this.get(url);
  }
  saveNotificationTrigger(payload) {
    const url = `${this.baseurl}/insertNotificationMail`;
    return this.post(url, payload);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ApplicationApiService_BaseFactory;
      return function ApplicationApiService_Factory(__ngFactoryType__) {
        return (\u0275ApplicationApiService_BaseFactory || (\u0275ApplicationApiService_BaseFactory = \u0275\u0275getInheritedFactory(_ApplicationApiService)))(__ngFactoryType__ || _ApplicationApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationApiService, factory: _ApplicationApiService.\u0275fac, providedIn: "root" });
  }
};

// src/lib/services/image-compressor.service.ts
var ImageCompressorService = class _ImageCompressorService {
  constructor() {
  }
  compress(payload) {
    payload.quality = payload.quality || 1;
    const width = payload.width;
    const height = payload.height;
    return new Observable((observer) => {
      const image = new Image();
      image.src = payload.base64;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(image, 0, 0, width, height);
        ctx.canvas.toBlob((blob) => {
          observer.next(new File([blob], payload.name, {
            type: "image/jpeg",
            lastModified: Date.now()
          }));
          observer.complete();
        }, "image/jpeg", payload.quality);
      };
    });
  }
  static {
    this.\u0275fac = function ImageCompressorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageCompressorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageCompressorService, factory: _ImageCompressorService.\u0275fac, providedIn: "root" });
  }
};

// src/lib/services/detail-view.service.ts
var DetailViewService = class _DetailViewService {
  constructor(user) {
    this.user = user;
    this._tabChange = new Subject();
    this._triggerFired = new Subject();
    this._currentState = new BehaviorSubject(null);
    this.tabChange$ = this._tabChange.asObservable();
    this.triggerFired$ = this._triggerFired.asObservable();
    this.currentState$ = this._currentState.asObservable();
  }
  showRevertTrigger(opts) {
    return true;
  }
  showSaveTrigger() {
    return true;
  }
  changeTab(bmo) {
    this._tabChange.next(bmo);
  }
  fireTrigger(triggerName) {
    this._triggerFired.next(triggerName);
  }
  updateCurrentState(guid) {
    this._currentState.next(guid);
  }
  static {
    this.\u0275fac = function DetailViewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailViewService)(\u0275\u0275inject(UserDetail));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DetailViewService, factory: _DetailViewService.\u0275fac, providedIn: "root" });
  }
};

// src/lib/services/modeler-api.service.ts
var ModelerApiService = class _ModelerApiService extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;
  }
  getRolesByDmo(dmoGuid, options, processName) {
    const url = `${this.baseUrl}/data/WF_API_ROLECONTROLUSER`;
    const transactionId = "0", userId = "0", selecedValue = "0";
    const params = {
      identifierName: dmoGuid,
      parentValue: options,
      processName,
      transactionId,
      userId,
      selecedValue
    };
    return this.get(url, params).pipe(shareReplay(1));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ModelerApiService_BaseFactory;
      return function ModelerApiService_Factory(__ngFactoryType__) {
        return (\u0275ModelerApiService_BaseFactory || (\u0275ModelerApiService_BaseFactory = \u0275\u0275getInheritedFactory(_ModelerApiService)))(__ngFactoryType__ || _ModelerApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModelerApiService, factory: _ModelerApiService.\u0275fac, providedIn: "root" });
  }
};

// src/lib/services/workflow-api.service.ts
var import_file_saver2 = __toESM(require_FileSaver_min());
var WorkflowApiService = class _WorkflowApiService extends BaseHttpService {
  constructor() {
    super(...arguments);
    this.baseUrl = `${environment.Setting.BaseAPIUrl}/wf`;
  }
  getNotificationTriggerDetail(processName, transactionId, triggerName) {
    const url = `${this.baseUrl}/getTriggerMailDetail`;
    return this.get(url, {
      processName,
      trnsctnId: transactionId,
      trgName: triggerName
    });
  }
  downloadBulkUploadTemplate(processName) {
    const url = `${this.baseUrl}/downloadTemplate/wf`;
    return this.post(url, null, { processName }, null, "Blob");
  }
  downloadFile(processName, fileName, workflowId, objectName, objectType, location, payloadId) {
    const url = `${this.baseUrl}/downloadTrgOrCondFile`;
    const params = {
      processName,
      fileName,
      wfId: workflowId,
      trgorCondname: objectName,
      objectType,
      filetempLocation: location
    };
    return this.post(url, null, params, { payloadId }, "blob").pipe(tap((file) => (0, import_file_saver2.saveAs)(file, fileName)));
  }
  uploadFiles(files, workflowId, location, payloadId) {
    const calls$ = [];
    files.forEach((file) => {
      const data = new FormData();
      data.append("uploadFile", file);
      const call$ = this.uploadFile(data, workflowId, location, payloadId);
      calls$.push(call$);
    });
    return from(calls$).pipe(concatAll(), map((res, i) => {
      if (res === "Success") {
        return files[i];
      }
      return null;
    }));
  }
  uploadFile(payload, workflowId, location, payloadId) {
    const url = `${this.baseUrl}/uploadTrgOrCondFile`;
    return this.post(url, payload, { wfId: workflowId, fileUploadLoc: location }, { payloadId });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275WorkflowApiService_BaseFactory;
      return function WorkflowApiService_Factory(__ngFactoryType__) {
        return (\u0275WorkflowApiService_BaseFactory || (\u0275WorkflowApiService_BaseFactory = \u0275\u0275getInheritedFactory(_WorkflowApiService)))(__ngFactoryType__ || _WorkflowApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowApiService, factory: _WorkflowApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  BaseHttpService
};
//# sourceMappingURL=chunk-CDVZX7RG.js.map
