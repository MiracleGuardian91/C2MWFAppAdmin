import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentApiService extends BaseHttpService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/documentView`;

  deleteDocument(documentId: string) {
    const url = `${this.baseUrl}/deleteDocumnet` // typo in api endpoint;
    return this.post<boolean>(url, null, {documentId});
  }
}