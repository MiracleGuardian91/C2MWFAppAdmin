import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BaseHttpService } from './base-http.service';

@Injectable({
    providedIn: 'root',
  })
  export class CardWallViewConfigurationServices extends BaseHttpService {
    //private readonly baseurl = `${environment.Setting.BaseAPIUrl}/BM`;
    baseurl = environment.Setting.GatewayAPIUrl;
    getCvCard(cardId: number) {
        const url = `${this.baseurl}/wfapibm/compare/GetWfCvCards?ID=${cardId}`;
        return this.get<any>(url); 
    }

    getWfCvCardDmoMapByCardID(cardId: number,processName) {
      const url = `${this.baseurl}/wfapibm/compare/GetWfCvCardsDmoMapByCardId?cardId=${cardId} &processName=${processName}`;
      return this.get<any>(url); 
  }

  getWfCvPrcessCarByProcessName(processName) {
    const url = `${this.baseurl}/wfapibm/compare/GetWfCvProcessCardsByProcessName?processName=${processName}`;
    return this.get<any>(url); 
}


    AddWfCvCard(CvCard: any) {
      const url = `${this.baseurl}/wfapibm/compare/BulkSaveWfCvCardDmoMap`;
      return this.post<any>(url, CvCard); 
  }

  ActivatetWfCvCardByCardIDAndProcessName(cardId: number,processName) {
    const url = `${this.baseurl}/wfapibm/compare/WfCvActivateProcessCards?cardId=${cardId} &processName=${processName}`;
    return this.get<any>(url); 
  }

  }