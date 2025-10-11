import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { shareReplay } from 'rxjs/operators';
import { Modeler } from '../models';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class ModelerApiService extends BaseHttpService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;

  getRolesByDmo(dmoGuid: string, options: string, processName: string) {
    const url = `${this.baseUrl}/data/WF_API_ROLECONTROLUSER`;
    const transactionId = '0', userId = '0', selecedValue = '0';
    const params = {
      identifierName: dmoGuid,
      parentValue: options,
      processName,
      transactionId, 
      userId,
      selecedValue,
    }
    return this.get<Modeler.DDOption[]>(url, params).pipe(shareReplay(1))
  }
}
