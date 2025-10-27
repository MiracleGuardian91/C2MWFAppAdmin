import {
  SimpleLoaderService,
  environment
} from "./chunk-L2L6ECIJ.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  finalize,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ZQT4GMOS.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/admin/core/services/api.service.ts
var ApiService = class _ApiService {
  // changes by harshit
  constructor(http, simpleLoader) {
    this.http = http;
    this.simpleLoader = simpleLoader;
    this.endpoint = environment.Setting.BaseAPIUrl;
    this.GatewayAPIUrl = environment.Setting.GatewayAPIUrl;
  }
  setHeaders(parameters) {
    let processName = null;
    if (parameters && parameters.ProcessName) {
      processName = parameters.ProcessName;
    } else {
      processName = sessionStorage.getItem("AppName");
    }
    let headers = new HttpHeaders();
    const accessToken = localStorage.getItem("AccessToken");
    if (!headers.has("AccessToken") && accessToken) {
      headers = headers.set("AccessToken", accessToken);
    }
    if (processName != null) {
      headers.set("processName", processName);
    }
    return headers;
  }
  setParams(parameters) {
    let params = new HttpParams();
    if (parameters) {
      for (const i in parameters) {
        if (parameters[i] != null) {
          params = params.append(i, parameters[i]);
        }
      }
    }
    return params;
  }
  get(url, parameters) {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    const request$ = this.http.get(`${this.endpoint}/${url}`, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  get_gateway(url, parameters) {
    const fullUrl = `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    const request$ = this.http.get(`${this.GatewayAPIUrl}/${url}`, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  postAdvanceSearch(url, data, parameters) {
    return __async(this, null, function* () {
      const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
      return yield this.http.post(`${url}`, data, httpAllOptions).toPromise().catch(this.handleError);
    });
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  post1(url, data, parameters) {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    const request$ = this.http.post(`${this.endpoint}/${url}`, data, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  post(url, data, parameters, isV3) {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    if (isV3) {
      this.endpoint = this.endpoint.replace("v2", "v3");
    } else {
      this.endpoint = this.endpoint.replace("v3", "v2");
    }
    const request$ = this.http.post(`${this.endpoint}/${url}`, data, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  post_gateway(url, data, parameters) {
    const fullUrl = `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    const request$ = this.http.post(`${this.GatewayAPIUrl}/${url}`, data, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  postgateway(endPoint, url, data, parameters) {
    const fullUrl = endPoint != null && endPoint != "" ? `${endPoint}/${url}` : `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    const request$ = endPoint != null && endPoint != "" ? this.http.post(`${endPoint}/${url}`, data, { headers, params }) : this.http.post(`${this.GatewayAPIUrl}/${url}`, data, { headers, params });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  postGetFile(url, data, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.endpoint}/${url}`, data, { headers: Headers, responseType: resultType });
  }
  postGetFile_Gateway(url, data, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.GatewayAPIUrl}/${url}`, data, { headers: Headers, responseType: resultType });
  }
  postGetFileWithEndPoint(url, data, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(url, data, { headers: Headers, responseType: resultType });
  }
  put(url, data) {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders();
    const request$ = this.http.put(`${this.endpoint}/${url}`, data, { headers });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  update(url, objectId, data) {
    const fullUrl = `${this.endpoint}/${url}/${objectId}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders();
    const request$ = this.http.patch(`${this.endpoint}/${url}/${objectId}`, data, { headers });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  delete(url, objectId) {
    const fullUrl = `${this.endpoint}/${url}/${objectId}`;
    this.simpleLoader.show(fullUrl, true);
    const headers = this.setHeaders();
    const request$ = this.http.delete(`${this.endpoint}/${url}/${objectId}`, { headers });
    const minDelay$ = new Promise((resolve) => setTimeout(resolve, 2e3));
    return request$.pipe(finalize(() => __async(this, null, function* () {
      yield minDelay$;
      this.simpleLoader.hide();
    })));
  }
  deleteGrid(url) {
    const headers = this.setHeaders();
    return this.http.delete(`${this.endpoint}/${url}`, { headers }).pipe();
  }
  deleteViaGateway(url) {
    const headers = this.setHeaders();
    return this.http.delete(`${this.GatewayAPIUrl}/${url}`, { headers });
  }
  UploadFile(url, formData) {
    let query = {
      ProcessName: formData.get("processName")
    };
    const Headers = this.setHeaders(query);
    return this.http.post(`${this.endpoint}/${url}`, formData, { headers: Headers });
  }
  UploadFileGateway(url, formData) {
    let query = {
      ProcessName: formData.get("processName")
    };
    const Headers = this.setHeaders(query);
    return this.http.post(`${this.GatewayAPIUrl}/${url}`, formData, { headers: Headers });
  }
  DeleteFile(url, formData) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.endpoint}/${url}`, formData, { headers: Headers });
  }
  downloadfile(url, formData, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.endpoint}/${url}`, formData, { headers: Headers, responseType: resultType });
  }
  getProcessData() {
    return this.get(`application/processList`);
  }
  // changes By Harshit
  ImportBM(url, data) {
    const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
    return this.http.post(`${this.GatewayAPIUrl}/${url}`, data, httpAllOptions);
  }
  ImportWF(url, data) {
    const httpAllOptions = { headers: new HttpHeaders({ "AccessToken": localStorage.getItem("AccessToken"), "Content-Type": "application/json" }) };
    return this.http.post(`${this.GatewayAPIUrl}/${url}`, data, httpAllOptions);
  }
  getGateway(url, parameters) {
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    return this.http.get(`${this.GatewayAPIUrl}/${url}`, { headers, params });
  }
  postGatway(url, data, parameters, isV3) {
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    return this.http.post(`${this.GatewayAPIUrl}/${url}`, data, { headers, params });
  }
  postGetFileGateway(url, data, resultType) {
    const Headers = this.setHeaders();
    return this.http.post(`${this.GatewayAPIUrl}/${url}`, data, { headers: Headers, responseType: resultType });
  }
  deleteGridGateway(url) {
    const headers = this.setHeaders();
    return this.http.delete(`${this.GatewayAPIUrl}/${url}`, { headers }).pipe();
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SimpleLoaderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-WGZX6A37.js.map
