import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BaseHttpService } from '@lib/services';
import { map, Observable, of, tap } from 'rxjs';
import { AiFlow, AiFlowRequest, WebhookConfigDto } from '../models/ai-flow.model';
import { AIFlowEntity, AIFlowEntityRequest } from '../models/ai-flow-entity.model';
import { AIJSON } from '../models/metadata.model';
import { SAMPLE_RESPONSE, SAMPLE_RESPONSE2 } from './sampleresponse';
import { AiAttributeJson } from '../models/Ai-attribute-json.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { head } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AIFlowBuilderService extends BaseHttpService{
  readonly #gatewayAPIUrl = `${environment.Setting.GatewayAPIUrl}/wfapiwf/aiflow`;
  readonly #consoleApiUrl = environment.Setting.C2M_Console_API_URL;

  getAiFlows(): Observable<AiFlow[]> {
    const url = `${this.#gatewayAPIUrl}/aiflows`;
    const headers = this.setHeaders();
    return this.get<AiFlow[]>(url,null, headers)
  }

  getAIFlowEntityById(flowEntityId: string): Observable<AIFlowEntity>{
    const url = `${this.#gatewayAPIUrl}/entities/${flowEntityId}`;
      const headers = this.setHeaders();
    return this.get<AIFlowEntity>(url,null, headers);
  }

  getAiFlowById(flowId: string): Observable<AIJSON>{
    const url = `${this.#gatewayAPIUrl}/aiflows/${flowId}`;
    const headers = this.setHeaders();
    return this.get<AIJSON>(url,null, headers);
  }

  getAIFlowAttributeJsonByType(type: string): Observable<AiAttributeJson>{
    const url = `${this.#gatewayAPIUrl}/aiflows/attributejson/${type}`;
    const headers = this.setHeaders();
    return this.get<AiAttributeJson>(url,null,headers);
  }
  
  createAiFlow(request: AiFlowRequest): Observable<{ id: string, message: string }>{
    const url = `${this.#gatewayAPIUrl}/aiflows/create`;
     const headers = this.setHeaders();
    return this.post<{ id: string, message: string }>(url, request,null, headers)
  }

  createAIFlowEntity(request: AIFlowEntityRequest): Observable<{ id: string, message: string }>{
    const url = `${this.#gatewayAPIUrl}/entities`;
    const headers = this.setHeaders();
    return this.post<{ id: string, message: string }>(url, request,null, headers)
  }
  
  updateAiFlow(id: string, request: AiFlowRequest): Observable<boolean>{
    const url = `${this.#gatewayAPIUrl}/aiflows/update/${id}`;
    const headers = this.setHeaders();
    return this.put<boolean>(url, request,null, headers);

  }

  updateAIFlowEntity(request: AIFlowEntityRequest){
    const url = `${this.#gatewayAPIUrl}/aiflow/entities/${request.FlowId}`;
    const headers = this.setHeaders();
    return this.put<boolean>(url, request,null, headers);
  }

  deleteAIFlow(id: string): Observable<string>{
   const url = `${this.#gatewayAPIUrl}/flows/${id}`;
   const headers = this.setHeaders();
   return this.delete<string>(url,null, headers);
  }

  deleteAIFlowEntity(id: string): Observable<string>{
   const url = `${this.#gatewayAPIUrl}/entities/${id}`;
   const headers = this.setHeaders();
   return this.delete<string>(url,null,headers);
  }
  
  getAIFGeneratedJson(flowId: string){
   const url = `${this.#gatewayAPIUrl}/aiflows/generateAFDjson/${flowId}`;
    const headers = this.setHeaders();
   return this.get(url,null,headers);
  }
  
  getMyThingsChannels(){
    const url =  `${this.#consoleApiUrl}api/v1/apps/GetMyThingsChannels`;
    const tryRequest = {
      PageNumber: 1,
      PageSize: 200,
      sortBy: "",
      orderBy: "Most Recent",
      searchText: "",
      EncWorkspaceId: "MYoiubXv1tdVQ/QqJ1CJXg=="
    }
     const headers = this.setHeaders();
        return this.post(url, tryRequest,null,headers)
        .pipe(
            map((result: any) => result.data),
            map(data => data.root),
            map(root => root.channel),
            map((channel: any) => {
                if (Array.isArray(channel)) {
                    return channel.map(item => {
                        return {
                            id: item.encChId,
                            name: item.chName?.['#cdata-section'],
                            type: item.chType
                        };
                    });
                } else if (channel && typeof channel === 'object') {
                    return [{
                        id: channel.encChId,
                        name: channel.chName?.['#cdata-section'],
                        type: channel.chType
                    }];
                }
            })
        );
  }

  getMoreChannelInstance(channelId){
   const url =  `${this.#consoleApiUrl}api/v1/apps/GetMoreChannelInstance`;
    const tryRequest = {
      channelID: channelId,
      channelInsIds: "",
      searchKey: "-1$-1",
      pageDetails: "1$10",
      EncWorkspaceId: "MYoiubXv1tdVQ/QqJ1CJXg=="
    }
     const headers = this.setHeaders();
     return this.post(url, tryRequest,null,headers)
        .pipe(
            map((result: any) => result.data),
            map(data => data.root),
            map(root => root.channelIns),
            map(channel =>{
              return channel.map(item =>{
                return {
                  id: item.encChInsId,
                  name: item.chFName,
                }
              })
            }))
  }

  saveWebhook(request: AiFlowRequest): Observable<{ id: string, message: string }>{
    const url = `${this.#gatewayAPIUrl}/aiflows/saveWebhook`;
     const headers = this.setHeaders();
    return this.post<{ id: string, message: string }>(url, request,null, headers)
  }

   GetWebhook(id:string,flowName:string): Observable<WebhookConfigDto[]> {
    const url = `${this.#gatewayAPIUrl}/aiflows/GetWebhook/${id}/${flowName}`;
     const headers = this.setHeaders();
    return this.get<WebhookConfigDto[]>(url,null,headers);
  }


 private setHeaders(parameters?: any): { [key: string]: string } {
  let processName: string | null = null;

  if (parameters?.ProcessName) {
    processName = parameters.ProcessName;
  } else {
    processName = sessionStorage.getItem('AppName');
  }

  const headers: { [key: string]: string } = {};

  const accessToken = localStorage.getItem('AccessToken');
  if (accessToken) {
    headers['AccessToken'] = accessToken;
  }

  if (processName) {
    headers['processName'] = processName;
  }

  return headers;
}

setParams(parameters) {
      let params = new HttpParams();
      if (parameters) {
        for (const i in parameters) {
          if (parameters[i] != null) {
            params = params.append(i, parameters[i]);
          }
        }
      }
      return params;
}


}
