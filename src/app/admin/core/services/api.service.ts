import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { SimpleLoaderService } from '@app/shared/services/simple-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = environment.Setting.BaseAPIUrl;
  // changes by Harshit
  GatewayAPIUrl = environment.Setting.GatewayAPIUrl;
  // changes by harshit
  constructor(private http: HttpClient, private simpleLoader: SimpleLoaderService) { }

  setHeaders(parameters?: any) {    
    let processName = null;
    if (parameters && parameters.ProcessName) {
      processName = parameters.ProcessName;
    } else {
      processName = sessionStorage.getItem('AppName');
    }

    let headers =  new HttpHeaders();
    const accessToken = localStorage.getItem('AccessToken');
    if(!headers.has('AccessToken') && accessToken){
        headers = headers.set('AccessToken', accessToken);
      }
      
    if (processName != null) {
      headers.set('processName', processName);
    } 
    // else{
    //   //resolved Raygun Error
    //   if(accessToken !== null){
    //     headers = new HttpHeaders({ accessToken });
    //   }      
    // }

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

  get(url: string, parameters?: any): Observable<any> {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    
    const request$ = this.http.get<any>(`${this.endpoint}/${url}`, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }
 get_gateway(url: string, parameters?: any): Observable<any> {
    const fullUrl = `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    
    const request$ = this.http.get<any>(`${this.GatewayAPIUrl}/${url}`, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }
 async postAdvanceSearch(url: string, data: any,  parameters?: any){    
    const httpAllOptions = { headers: new HttpHeaders({ "AccessToken":localStorage.getItem('AccessToken'),"Content-Type":"application/json" }) }     
    return await  this.http.post(`${url}`, data, httpAllOptions).toPromise().catch(this.handleError);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        //client side error
        errorMessage = `Error: ${error.error.message}`;
    }
    else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
}

 post1(url: string, data: any, parameters?: any): Observable<any> {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    
    const request$ = this.http.post<any>(`${this.endpoint}/${url}`, data, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }

  post(url: string, data: any, parameters?: any,isV3?): Observable<any> {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    if(isV3){
      this.endpoint=this.endpoint.replace('v2','v3');
    }
    else{
      this.endpoint=this.endpoint.replace('v3','v2');
    }
    
    const request$ = this.http.post<any>(`${this.endpoint}/${url}`, data, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }
  post_gateway(url: string, data: any, parameters?: any): Observable<any> {
    const fullUrl = `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    
    const request$ = this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }
   postgateway(endPoint: string, url: string, data: any, parameters?: any): Observable<any> {
    const fullUrl = endPoint != null && endPoint != "" ? `${endPoint}/${url}` : `${this.GatewayAPIUrl}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    
    const request$ = endPoint != null && endPoint != ""
      ? this.http.post<any>(`${endPoint}/${url}`, data, { headers, params })
      : this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, { headers, params });
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }


  postGetFile(url: string, data: any, resultType: any): Observable<any> {
    const Headers = this.setHeaders();
    return this.http.post<any>(`${this.endpoint}/${url}`, data, { headers: Headers, responseType: resultType });
  }
   postGetFile_Gateway(url: string, data: any, resultType: any): Observable<any> {
    const Headers = this.setHeaders();
    return this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, { headers: Headers, responseType: resultType });
  }


  postGetFileWithEndPoint(url: string, data: any, resultType: any): Observable<any> {
    const Headers = this.setHeaders();
    return this.http.post<any>(url, data, { headers: Headers, responseType: resultType });
  }
  put(url: string, data: any): Observable<any> {
    const fullUrl = `${this.endpoint}/${url}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders();
    const request$ = this.http.put<any>(`${this.endpoint}/${url}`, data, {headers});
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }

  update(url: string, objectId: string, data: any): Observable<any> {
    const fullUrl = `${this.endpoint}/${url}/${objectId}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders();
    const request$ = this.http.patch<any>(`${this.endpoint}/${url}/${objectId}`, data, {headers});
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }

  delete(url: string, objectId: string): Observable<any> {
    const fullUrl = `${this.endpoint}/${url}/${objectId}`;
    this.simpleLoader.show(fullUrl,true);
    
    const headers = this.setHeaders();
    const request$ = this.http.delete(`${this.endpoint}/${url}/${objectId}`, {headers});
    const minDelay$ = new Promise(resolve => setTimeout(resolve, 2000));
    
    return request$.pipe(
      finalize(async () => {
        await minDelay$;
        this.simpleLoader.hide();
      })
    );
  }
  deleteGrid(url: string): Observable<any> {
    const headers = this.setHeaders();
    return this.http.delete(`${this.endpoint}/${url}`, {headers}).pipe();
  }
  
 deleteViaGateway(url: string): Observable<any> {
  const headers = this.setHeaders();
  return this.http.delete(`${this.GatewayAPIUrl}/${url}`, { headers });
}

  UploadFile(url: string, formData: FormData): Observable<any> {
    let query = {
      ProcessName: formData.get('processName')
    }
    const Headers = this.setHeaders(query);
    return this.http.post<any>(`${this.endpoint}/${url}`, formData, { headers: Headers });
  }

  UploadFileGateway(url: string, formData: FormData): Observable<any> {
    let query = {
      ProcessName: formData.get('processName')
    }
    const Headers = this.setHeaders(query);
    return this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, formData, { headers: Headers });
  }

  DeleteFile(url: string, formData: FormData): Observable<any> {
    const Headers = this.setHeaders();
    return this.http.post<any>(`${this.endpoint}/${url}`, formData, { headers: Headers });
  }

  downloadfile(url: string, formData: FormData, resultType: any): Observable<any> {
    const Headers = this.setHeaders();
    //Headers['Content-Type'] = 'application/octet-stream';

    return this.http.post<any>(`${this.endpoint}/${url}`, formData, { headers: Headers, responseType: resultType });
  }
  getProcessData() {
    return this.get(`application/processList`);
  }
   // changes By Harshit

  ImportBM(url: string, data: any): Observable<any> {
    
    const httpAllOptions = { headers: new HttpHeaders({ "AccessToken":localStorage.getItem('AccessToken'),"Content-Type":"application/json" }) }     
    return this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, httpAllOptions);
  }
  ImportWF(url: string, data: any): Observable<any> {
    
    const httpAllOptions = { headers: new HttpHeaders({ "AccessToken":localStorage.getItem('AccessToken'),"Content-Type":"application/json" }) }     
    return this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, httpAllOptions);
  }

  getGateway(url: string, parameters?: any): Observable<any> {
     const headers = this.setHeaders(parameters);
    const params = this.setParams(parameters);
    return this.http.get<any>(`${this.GatewayAPIUrl}/${url}`, { headers, params });
  }
  postGatway(url: string, data: any, parameters?: any, isV3?): Observable<any> {

    const headers = this.setHeaders(data);
    const params = this.setParams(parameters);
    return this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, { headers, params });
  }
  postGetFileGateway(url: string, data: any, resultType: any): Observable<any> {
    const Headers = this.setHeaders();
    return this.http.post<any>(`${this.GatewayAPIUrl}/${url}`, data, { headers: Headers, responseType: resultType });
  }
  deleteGridGateway(url: string): Observable<any> {
    const headers = this.setHeaders();
    return this.http.delete(`${this.GatewayAPIUrl}/${url}`, { headers }).pipe();
  }

  
  // changes By Harshit
}
