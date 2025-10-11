import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from './api.service';
import { resolve } from 'path';
import { reject } from 'lodash';
import { error } from 'console';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SimpleLoaderService } from '@app/shared/services/simple-loader.service';


@Injectable({
  providedIn: 'root'
})
export class wfcompareService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/C2MWFBMCompare`;

  constructor(
    private api: ApiService,
    private simpleLoader: SimpleLoaderService
  ) {}

  private withLoader<T>(url: string, request$: Observable<T>): Observable<T> {
    this.simpleLoader.show(url,true);
    return request$.pipe(finalize(() => this.simpleLoader.hide()));
  }

  getUserCode(emailAddress: string) {
    const url = `application/GetUserCode?emailAddress=${emailAddress}`;
    return this.withLoader(url, this.api.get(url));
  }

  validateUserCode(userCode: string) {
    const url = `application/validateUserCode?userCode=${userCode}`;
    return this.withLoader(url, this.api.get(url));
  }

  getEnvironmnets() {
    const url = `application/GetList`;
    return this.withLoader(url, this.api.get(url));
  }

  getProcessNames(env: string, data: any) {
    const url = `wfapibm/compare/GetBMProcessTypes`;
    return this.withLoader(url, this.api.post_gateway(url, data, {}));
  }

  GetWorkFlow(env: string, data: any) {
    const url = `wfapiwf/compare/GetWFData`;
    return this.withLoader(url, this.api.post_gateway(url, data, {}));
  }

  LoadWFDataFromDB(env: string, data: any) {
    const url = `wfapiwf/compare/LoadWFDataFromDB`;
    return this.withLoader(url, this.api.postgateway(env, url, data, {}));
  }

  LoadWFStgSttCondFromDB(data: any) {
    const url = `wfapiwf/compare/LoadWFStgSttCondFromDB`;
    return this.withLoader(url, this.api.post_gateway(url, data, {}));
  }

  LoadPermissionsDataFromDB(data: any): Promise<any> {
    const url = `application/LoadPermissionsDataFromDB`;
    this.simpleLoader.show(url,true);
    return new Promise((resolve, reject) => {
      this.api.post(url, data, {}).subscribe(
        response => {
          this.simpleLoader.hide();
          resolve(response);
        },
        error => {
          this.simpleLoader.hide();
          reject(error);
        }
      );
    });
  }

  SyncWFNodeDataTodb(data: any): Promise<any> {
    const url = `wfapiwf/compare/SyncWFNodeDataTodb`;
    this.simpleLoader.show(url,true);
    return new Promise((resolve, reject) => {
      this.api.post_gateway(url, data, {}).subscribe(
        response => {
          this.simpleLoader.hide();
          resolve(response);
        },
        error => {
          this.simpleLoader.hide();
          reject(error);
        }
      );
    });
  }

  ExportJsonWF(data: any, WFID: any) {
    const url = `wfapiwf/compare/ExportJsonwf?Wfid=${WFID}`;
    return this.withLoader(
      url,
      this.api.post_gateway(url, data, { isJsonRequest: true })
    );
  }
}
