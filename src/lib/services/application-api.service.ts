import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Application, RecordData, RecordHeader } from '@lib/models';
import { map } from 'rxjs/operators';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationApiService extends BaseHttpService {
  private readonly baseurl = `${environment.Setting.BaseAPIUrl}/application`;

  addRecord(payload: Application.InsertJSON) {
    const url = `${this.baseurl}/insertApplication`;
    return this.post<any>(url, payload);
  }

  updateRecord(payload: Application.UpdateJSON) {
    const url = `${this.baseurl}/updateApplication`;
    return this.post<any>(url, payload);
  }

  getRecordDetails(
    transactionId: string,
    view: Application.CanvasType = Application.CanvasType.Admin,
    identifierName = null,
    identifierValue = null
  ) {
    const url = `${this.baseurl}/applicationData/${identifierName}/${identifierValue}/${view}`;
    return this.get<RecordData>(url, { transactionId });
  }

  getRecordDetailsHeaders(
    transactionId: string,
    view: Application.CanvasType = Application.CanvasType.Admin,
    identifierName = null,
    identifierValue = null
  ) {
    const url = `${this.baseurl}/getTopCornerDetail/${identifierName}/${identifierValue}/${view}`;
    return this.get<RecordHeader[]>(url, { transactionId });
  }

  validateUniqueConstraints(payload: Application.UpdateJSON) {
    const url = `${this.baseurl}/validateUniqueDmoValue`;
    return this.post<boolean>(url, payload);
  }

  uploadFile(processName: string, formData: FormData) {
    const url = `${this.baseurl}/uploadFile`;
    return this.post<Application.FileInfo>(url, formData, null, {
      processName,
    });
  }

  downloadFile(processName: string, formData: FormData) {
    const url = `${this.baseurl}/downloadFile`;
    return this.post<Blob>(url, formData, null, { processName }, 'Blob');
  }

  bulkUpload(file: File, processName: string) {
    const url = `${this.baseurl}/bulkUploadNew`;
    const body = new FormData();
    body.append('processName', processName);
    body.append('uploadFile', file);
    return this.post<boolean>(url, body, null, { processName });
  }

  downloadBulkUploadTemplate(processName: string) {
    const url = `${this.baseurl}/getBulkUploadTemplate/${processName}`;
    return this.http.post<Blob>(url, null, {
      responseType: 'blob' as 'json',
      observe: 'response',
    });
  }

  deleteFile(processName: string, formData: FormData) {
    const url = `${this.baseurl}/deleteFile`;
    return this.post<Application.FileInfo>(url, formData, null, {
      processName,
    });
  }

  getContacts(
    transactionId: string,
    identifierName: string = null,
    identifierValue: string = null
  ) {
    const url = `${this.baseurl}/getContacts/${identifierName}/${identifierValue}`;
    return this.get<Application.Contact[]>(url, { transactionId });
  }

  getContact(contactId: string) {
    const url = `${this.baseurl}/getContact`;
    return this.get<Application.Contact[]>(url, { contactId }).pipe(
      map((res) => (res.length ? res[0] : null))
    );
  }

  saveContact(contact: Application.Contact) {
    const url = `${this.baseurl}/upsertContact`;
    return this.post<boolean>(url, contact);
  }

  deleteContact(contactId: string) {
    const url = `${this.baseurl}/deleteContact`;
    return this.post<boolean>(url, null, { contactId });
  }

  getRevertableStateList(
    transactionId: string,
    identifierName: string = null,
    identifierValue: string = null
  ) {
    const url = `${this.baseurl
      }/proceesedStateList/${identifierName}/${identifierValue}?transactionId=${encodeURIComponent(
        transactionId
      )}`;
    return this.get<Application.RevertableState[]>(url);
  }

  revertState(
    state: Application.RevertableState,
    transactionId: string,
    identifierName: string = null,
    identifierValue: string = null
  ) {
    const url = `${this.baseurl}/revertBack/${identifierName}/${identifierValue}/${state.StageState}`;
    return this.post<0 | 1>(url, null, {
      transactionId,
      stateId: state.PrevWfosId,
    });
  }

  getAttachments(
    transactionId: string,
    identifierName: string = null,
    identifierValue: string = null
  ) {
    const url = `${this.baseurl}/fileinfo/${identifierName}/${identifierValue}`;
    return this.get<Application.Attachment[]>(url, { transactionId });
  }

  deleteAttachment(id: string) {
    const url = `${this.baseurl}/deleteFileInfo`;
    return this.post<boolean>(url, null, { fileInfoId: id });
  }

  getCountries() {
    const url = `${this.baseurl}/getCountry`;
    return this.get<Application.Country[]>(url);
  }

  getStates() {
    const url = `${this.baseurl}/getState`;
    return this.get<Application.Country[]>(url);
  }

  saveNotificationTrigger(payload: FormData) {
    const url = `${this.baseurl}/insertNotificationMail`;
    return this.post<boolean>(url, payload);
  }
}
