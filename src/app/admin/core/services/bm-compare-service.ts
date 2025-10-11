import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from '@app/admin/core/services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BmcompareService {
    private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/BMCompareSync`;
    constructor(private readonly api: ApiService, private readonly http: HttpClient) { }

    getUserCode(emailAddress: string) {
        return this.api.get('application/GetUserCode?emailAddress=' + emailAddress);
    }

    validateUserCode(userCode: string) {
        return this.api.get('application/validateUserCode?userCode=' + userCode);
    }
    getEnvironmnets() {
        return this.api.get('application/GetList');
    }
    getProcessNames(data: any) {
        return this.api.post_gateway('wfapibm/compare/GetBMProcessTypes', data, {});
    }
    getbusinessModel(data: any) {
        return this.api.post_gateway('wfapibm/compare/GetBMData', data, {});
    }

    // GetLeftRightBM(data:any){
    //     return this.api.post('bmcompare/LoadLeftRightBM',data,{});
    // }
    SyncDataToDB(BMSyncProp: any) {
        return this.api.post_gateway('wfapibm/compare/SyncBMNodeDataTodb', BMSyncProp, {});
    }
    ExportJsonBM(data: any, BMID: any) {

        return this.api.post_gateway(`wfapibm/compare/ExportJsonBM?Bmid=${BMID}`, data);
    }
    GetLeftRightBM(env: string, data: any) {
        return this.api.postgateway(env, 'wfapibm/compare/LoadLeftRightBM', data, {});
    }
     
}