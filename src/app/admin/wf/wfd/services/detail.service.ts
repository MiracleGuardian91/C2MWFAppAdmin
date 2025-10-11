import { Injectable } from '@angular/core';
import { BaseHttpService } from '@app/core/services/base-http.service';
import { environment } from '@env/environment';
import { saveAs } from 'file-saver';
import { from, Observable } from 'rxjs';
import { concatAll, map, tap } from 'rxjs/operators';
import { EndStateItem } from '../models';
import { AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DetailService extends BaseHttpService {

  private readonly _gatwayurl = `${environment.Setting.GatewayAPIUrl}/wfapiwf/wf`;

  public getEndStatesByApp(processId: string, payloadId?: string) {
    const url = `${this._gatwayurl}/getEndStatesByApp`;
    return this.get<EndStateItem[]>(url, { processId }, { payloadId });
  }

  public downloadFile(processName: string, fileName: string, workflowId: string, objectName: string, objectType: 'trigger' | 'triggercondition', location: string, payloadId?: string) {
    const url = `${this._gatwayurl}/downloadTrgOrCondFile`;
    const params = { processName, fileName, wfId: workflowId, trgorCondname: objectName, objectType, filetempLocation: location };
    return this.post<Blob>(url, null, params, { payloadId }, 'blob').pipe(
      tap(file => saveAs(file, fileName)),
    );
  }

  public uploadFiles(files: File[], workflowId: string, location: string, payloadId?: string) {
    const calls$: Observable<'Success' | 'Fail'>[] = [];
    files.forEach(file => {
      const data = new FormData();
      data.append('uploadFile', file);
      const call$ = this.uploadFile(data, workflowId, location, payloadId);
      calls$.push(call$);
    })
    return from(calls$).pipe(
      concatAll(),
      map((res, i) => {
        if (res === 'Success') {
          return files[i];
        }
        return null;
      }),
      // scan((acc, file) => {
      //   acc.push(file);
      //   return acc;
      // }, [] as File[]),
      // last(),
    );
  }

  public getDmos(triggerId: string, conditionId: string, payloadId?: string) {
    const path = `${this._gatwayurl}/getWFDmo`;
    return this.get<string[]>(path, { triggerId, conditionId }, { payloadId })
      .pipe(map(list => typeof list === 'string' ? [] : list.map(name => ({ key: name, value: name }))));
  }

  private uploadFile(payload: FormData, workflowId: string, location: string, payloadId?: string) {
    const url = `${this._gatwayurl}/uploadTrgOrCondFile`;
    return this.post<'Success' | 'Fail'>(url, payload, { wfId: workflowId, fileUploadLoc: location }, { payloadId });
  }

  handleValidationResult(myFlag: boolean, control: AbstractControl): void {
    let localFlag = myFlag;
    if (localFlag) {
      this.handleDuplicate(control);
    } else {
      this.handleUnique(control);
    }
  }
  
  private handleDuplicate(control: AbstractControl): void {
    this.setDuplicateError(control);
  }
  
  private handleUnique(control: AbstractControl): void {
    this.clearDuplicateError(control);
  }
  
  private setDuplicateError(control: AbstractControl): void {
    control.setErrors({ duplicate: true });
  }
  
  private clearDuplicateError(control: AbstractControl): void {
    control.setErrors(null);
  }

  handleValidationError(error: any): void {
    console.error('Validation API error:', error);
  }

  public GetRoleTypeDmos(processName: string, wfId?: string) {
    const url = `${environment.Setting.GatewayAPIUrl}/wfapibm/DataModel/getRoleTypeDmos`;
    return this.get<any>(url, { processName , wfId });
  }

}
