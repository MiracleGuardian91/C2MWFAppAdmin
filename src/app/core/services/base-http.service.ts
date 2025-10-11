import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SimpleLoaderService } from '@app/shared/services/simple-loader.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  constructor(private http: HttpClient, private simpleLoader: SimpleLoaderService) { }
  _setHeaders(parameters?: any) {
    let processName = null;
    if (parameters && parameters.ProcessName) {
      processName = parameters.ProcessName;
    } else {
      processName = sessionStorage.getItem('AppName');
    }

    let headers = new HttpHeaders();
    const accessToken = localStorage.getItem('AccessToken');
    if (!headers.has('AccessToken') && accessToken) {
      headers = headers.set('AccessToken', accessToken);
    }

    if (processName != null) {
      headers = headers.set('processName', processName);
    }
    // else{
    //   //resolved Raygun Error
    //   if(accessToken !== null){
    //     headers = new HttpHeaders({ accessToken });
    //   }      
    // }

    return headers;
  }

  _setParams(parameters) {
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
  protected get<T>(url: string, parameters?: KeyValue, httpHeaders?: KeyValue, nospinner: boolean = false) {
  if (!nospinner) {
      this.simpleLoader.show(url);
    }
    
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    
    const request$ = this.http.get<T>(url, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
       if (!nospinner) {
          await minDelay$;
          this.simpleLoader.hide();
        }
      })
    );
  }

  protected post<T>(url: string, body: any, parameters?: KeyValue, httpHeaders?: KeyValue, responseType?: any) {
    this.simpleLoader.show(url);
    
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    
    const request$ = this.http.post<T>(url, body, { headers, params, responseType });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }
  protected postReorderDmogs<T>(url: any, bmoid: any, dmogIds: any) {
    this.simpleLoader.show(url);
    
    const headers = new HttpHeaders({
      'accessToken': localStorage.getItem('AccessToken'),  // Header
      'bmoid': bmoid,              // Header
      'dmogIds': dmogIds           // Header
    });

    const request$ = this.http.post<T>(url, {}, { headers });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }

  protected updatePrntDmogIDs<T>(url: any, body: any) {
    this.simpleLoader.show(url);
    
    const headers = new HttpHeaders({
      'accessToken': localStorage.getItem('AccessToken'),  // Header
    });

    const request$ = this.http.post<T>(url, body, { headers });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }

  protected postparm<T>(
    url: string,
    body: any,
    parameters?: KeyValue | HttpParams,
    httpHeaders?: KeyValue,
    responseType?: any
  ) {
    this.simpleLoader.show(url);
    
    const headers = this._setHeaders(httpHeaders);

    // If parameters are HttpParams, convert them to an object
    let params: HttpParams;
    if (parameters instanceof HttpParams) {
      params = parameters;
    } else {
      // If parameters are a plain object, convert them to HttpParams
      params = new HttpParams();
      if (parameters) {
        Object.keys(parameters).forEach((key) => {
          params = params.set(key, parameters[key]);
        });
      }
    }

    const request$ = this.http.post<T>(url, body, { headers, params, responseType });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }


  protected delete<T>(url: string, parameters?: KeyValue, httpHeaders?: KeyValue) {
    this.simpleLoader.show(url);
    
    const headers = this._setHeaders(httpHeaders);
    const params = this._setParams(parameters);
    
    const request$ = this.http.delete<T>(url, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }

  // private _setParams(params: { [key: string]: string | null | undefined }) {
  //     return Object.entries(params || {})
  //         .reduce((acc, [key, value]) => value ? acc.append(key, value) : acc, new HttpParams());
  // }

  // private _setHeaders(headers: { [key: string]: string | null | undefined }) {
  //   if(!headers){
  //         headers = { 
  //              'AccessToken': localStorage.getItem('AccessToken')
  //         }
  //     }
  //     return Object.entries(headers || {})
  //         .reduce((acc, [key, value]) => value ? acc.append(key, value) : acc, new HttpHeaders())
  // }
}

type KeyValue = Record<string | number, string>;
