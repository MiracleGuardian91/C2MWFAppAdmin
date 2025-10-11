import { Injectable } from '@angular/core';
import { UniqueConstraintResponse } from '@app/admin/models';
import { BaseHttpService } from '@app/core/services/base-http.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class BmApiService extends BaseHttpService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/bm`;
   private GatewayAPIUrl = `${environment.Setting.GatewayAPIUrl}/wfapibm/DataModel`;

  getUniqueDmos(bmId: string) {
    const url = `${this.GatewayAPIUrl}/getBmUniqueDmo`;
    return this.get<UniqueConstraintResponse>(url, {bmId});
  }

  saveUniqueDmos(bmId: string, dmoGuids: string) {
    const url = `${this.GatewayAPIUrl}/saveUniqueDmo`;
    return this.post<string>(url ,{bmId, dmoGuids});
  }
}
