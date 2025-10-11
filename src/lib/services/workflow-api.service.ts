import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { WF } from '@lib/models';
import { Observable, from } from 'rxjs';
import { concatAll, map, tap } from 'rxjs/operators';
import { BaseHttpService } from './base-http.service';
import { saveAs } from 'file-saver';

@Injectable({ providedIn: 'root' })
export class WorkflowApiService extends BaseHttpService {
  readonly baseUrl = `${environment.Setting.BaseAPIUrl}/wf`;

  getNotificationTriggerDetail(
    processName: string,
    transactionId: string,
    triggerName: string
  ) {
    const url = `${this.baseUrl}/getTriggerMailDetail`;
    return this.get<WF.NotificationTriggerDetail>(url, {
      processName,
      trnsctnId: transactionId,
      trgName: triggerName,
    });
  }

  downloadBulkUploadTemplate(processName: string) {
    const url = `${this.baseUrl}/downloadTemplate/wf`;
    return this.post<Blob>(url, null, { processName }, null, 'Blob');
  }

  public downloadFile(
    processName: string,
    fileName: string,
    workflowId: string,
    objectName: string,
    objectType: 'trigger' | 'triggercondition',
    location: string,
    payloadId?: string
  ) {
    const url = `${this.baseUrl}/downloadTrgOrCondFile`;
    const params = {
      processName,
      fileName,
      wfId: workflowId,
      trgorCondname: objectName,
      objectType,
      filetempLocation: location,
    };
    return this.post<Blob>(url, null, params, { payloadId }, 'blob').pipe(
      tap((file) => saveAs(file, fileName))
    );
  }

  public uploadFiles(
    files: File[],
    workflowId: string,
    location: string,
    payloadId?: string
  ) {
    const calls$: Observable<'Success' | 'Fail'>[] = [];
    files.forEach((file) => {
      const data = new FormData();
      data.append('uploadFile', file);
      const call$ = this.uploadFile(data, workflowId, location, payloadId);
      calls$.push(call$);
    });
    return from(calls$).pipe(
      concatAll(),
      map((res, i) => {
        if (res === 'Success') {
          return files[i];
        }
        return null;
      })
    );
  }

  private uploadFile(
    payload: FormData,
    workflowId: string,
    location: string,
    payloadId?: string
  ) {
    const url = `${this.baseUrl}/uploadTrgOrCondFile`;
    return this.post<'Success' | 'Fail'>(
      url,
      payload,
      { wfId: workflowId, fileUploadLoc: location },
      { payloadId }
    );
  }
}
