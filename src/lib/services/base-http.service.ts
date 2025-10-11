import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(protected readonly http: HttpClient) { }

  protected get<T>(url: string, parameters?: KeyValue, httpHeaders?: KeyValue) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.get<T>(url, { headers, params });
  }

  protected post<T>(
    url: string,
    body: any,
    parameters?: KeyValue,
    httpHeaders?: KeyValue,
    responseType?: any
  ) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.post<T>(url, body, { headers, params, responseType });
  }

  protected put<T>(
    url: string,
    body: any,
    parameters?: KeyValue,
    httpHeaders?: KeyValue,
    responseType?: any
  ) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.put<T>(url, body, { headers, params, responseType });
  }

  protected delete<T>(
    url: string,
    parameters?: KeyValue,
    httpHeaders?: KeyValue
  ) {
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    return this.http.delete<T>(url, { headers, params });
  }

  private _setParams(params: { [key: string]: string | null | undefined }) {
    return Object.entries(params || {}).reduce(
      (acc, [key, value]) => (value ? acc.append(key, value) : acc),
      new HttpParams()
    );
  }

  private _setHeaders(headers: { [key: string]: string | null | undefined }) {
    return Object.entries(headers || {}).reduce(
      (acc, [key, value]) => (value ? acc.append(key, value) : acc),
      new HttpHeaders()
    );
  }

  protected handleBlobResponse(data: HttpResponse<Blob>) {
    let fileName = 'Document';
    const contentDisposition = data.headers.get('content-disposition');
    if (contentDisposition) {
      const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = fileNameRegex.exec(contentDisposition);
      if (matches != null && matches[1]) {
        fileName = matches[1].replace(/['"]/g, '');
      }
    }
    saveAs(data.body, fileName);
  }
}

type KeyValue = Record<string | number, string>;
