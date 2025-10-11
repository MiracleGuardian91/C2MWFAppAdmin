import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class DataModelerService {
    constructor(private api: ApiService){

    }

    getConditionTrigger(processName: string) {
      return this.api.get('modeler/trigger?processName='+processName);
    }

    SaveDMOCondition(bodyData: any) {
      return this.api.post('modeler/saveDmoCondition',bodyData);
    }
}