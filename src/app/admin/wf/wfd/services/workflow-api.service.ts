import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '@app/core/services/base-http.service';
import { environment } from '@env/environment';
import { WF } from '@lib/models';
import { EMPTY, forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, concatAll, map, switchMap } from 'rxjs/operators';
import {
  SaveStagePayload,
  SaveStatePayload,
  SaveTriggerConditionPayload,
  SaveTriggerPayload,
  SaveWorkflowPayload,
  WFDetail,
  WFStageDetail,
  WFStateDetail,
  WFTriggerConditionDetail,
  WFTriggerDetail,
} from '../models';
import {
  DiagramEl,
  ElementType,
  EventDef,
  TriggerConditionConnection,
  TriggerConnection,
} from '../models/bpmn';
import { ElementsIds } from '../models/elements-ids.model';
import {
  Coordinates,
  CoordinatesUndoRedo,
  MetaData,
  State,
  TriggerCondition,
  UndoRedoActionGroup,
} from '../models/wf.model';
import { getEventDef, isConditionType, isStateType } from '../util/bpmn';

const t = ElementType;

@Injectable({ providedIn: 'root' })
export class WorkflowApiService extends BaseHttpService {
  readonly #baseurl = `${environment.Setting.GatewayAPIUrl}/wfapiwf/wf`;
  stateIds: string;
  stageIds: string;
  ActionId:string;
  previousId:string;
  wfid: string;
  wfjson: Coordinates;



  getBMList(wfId: string) {
    const url = `${this.#baseurl}/getWFBM`;
    return this.get<{ Data: WF.BMInfo[] }>(url, { wfId }).pipe(
      map((res) => res?.Data || [])
    );
  }

  getWFConditionDetail(conditionId: string) {
    const url = `${this.#baseurl}/getWFConditionDetail`;
    return this.get<WF.ConditionDetail>(url, { conditionId });
  }

  callApiOnMoveLane(stateID: string, stageID: string,ActionGroupId :string,PreviousStage:string) {
    this.previousId=PreviousStage;
    this.stateIds=stateID;
    this.stageIds=stageID;
    this.ActionId=ActionGroupId;
    const url = `${this.#baseurl}/stagechange`;
    return this.post(url,{stateID,stageID,ActionGroupId});
  }

  getBMOGsByBMId(bmId: string) {
    const url = `${this.#baseurl}/getBMOGListBasedOnBM`;
    return this.get<{ Data: WF.BMOGInfo[] }>(url, { bmId }).pipe(
      map((res) => res?.Data || [])
    );
  }

  getStateList(wfId: string) {
    return this._getStageState<WF.StateInfo>(wfId, 'State');
  }

  getStageList(wfId: string) {
    return this._getStageState<WF.StageInfo>(wfId, 'Stage');
  }

  getBmoList(bmId: string, bmogName: string) {
    return this._getConditionAreaControls<WF.BMOInfo>(
      bmId,
      bmogName,
      'BusinessModelObject'
    );
  }

  getDmogList(bmId: string, bmogName: string) {
    return this._getConditionAreaControls<WF.DMOGInfo>(
      bmId,
      bmogName,
      'DataModelGroup'
    );
  }

  getDmoList(bmId: string, bmogName: string) {
    return this._getConditionAreaControls<WF.DMOInfo>(
      bmId,
      bmogName,
      'DataModelObject'
    );
  }

  getTriggerList(bmId: string, bmogName: string) {
    return this._getConditionAreaControls<WF.TriggerInfo>(
      bmId,
      bmogName,
      'Trigger'
    );
  }

  getDmosByBM(bmId: string) {
    const url = `${this.#baseurl}/getDmoBasedOnBM`;
    return this.get<{ Data: WF.DMOItem[] }>(url, { bmId }).pipe(
      map((res) => res?.Data || [])
    );
  }

  upsertCondition(payload: WF.ConditionDetail) {
    const url = `${this.#baseurl}/wfConditionUpsert`;
    return this.post<string>(url, payload);
  }

  CheckValidationWF(
    processName: string,
    type: string,
    wfId: string,
    name: string,
    version: string
  ) {
    const encodedName = btoa(name);
    const url = `${this.#baseurl}/checkName/wf/${wfId}/${encodedName}`; 
    const params = {
      wfObjType: type,
    };
  
    return this.get(url, params);
  }
  

  changeMode(wfId: string, mode: 'Edit' | 'Published') {
    const url = `${this.#baseurl}/changewfMode`;
    return this.post<boolean>(url, { Mode: mode, wfID: wfId });
  }

  downloadBulkUploadTemplate(processName: string) {
    const url = `${this.#baseurl}/downloadTemplate/wf`;
    return this.post<Blob>(url, null, { processName }, null, 'Blob');
  }

  getWorkflowDiagram(processName: string, versionNumber?: string) {
    return this.get<{ MetaData: MetaData }>(`${this.#baseurl}/getwfdetails`, {
      processName,
      versionNumber,
    }).pipe(map(({ MetaData }) => MetaData));
  }

  saveDiagramCoordinates(
    wfId: string,
    coordinates: Coordinates,
    undoRedoActionGroup: UndoRedoActionGroup | null
  ) { 
    const url = `${this.#baseurl}/saveWFDCoordinate`;

    if (this.stateIds === undefined) {
    this.wfid= wfId;
    this.wfjson = coordinates;
    }
  
    // If undoRedoActionGroup is null or undefined, initialize it
    if (!undoRedoActionGroup) {
      undoRedoActionGroup = new UndoRedoActionGroup();
    }
  
    // Assign state-related data if stateIds is present
    if (this.stateIds !== undefined) {
      wfId = this.wfid;
      coordinates = this.wfjson;
      undoRedoActionGroup.EntityId = this.stateIds;
      undoRedoActionGroup.EntityType = 'State';
      undoRedoActionGroup.ActionName = 'StageChange';
      undoRedoActionGroup.ActionGroupId = this.ActionId ?? '';
      this.stateIds = undefined;
     undoRedoActionGroup.SequenceNumber=this.incrementWorkflowValue(this.wfid).toString();
    }
  
    // Assign stage-related data and build ActionDetails
    if (this.stageIds !== undefined) {
      const deletedIds = {
        workflowIds: [wfId],
        stageIds: [this.stageIds],
        stateIds: [undoRedoActionGroup.EntityId ?? ''],
        triggerIds: [],
        conditionIds: [],
        prevstageIds: [this.previousId ?? '']
      };
      undoRedoActionGroup.ActionDetails = JSON.stringify(deletedIds);
      this.stageIds = undefined;
    }
  
    // Build query parameters
    const params = new HttpParams()
      .set('wfId', wfId)
      .set('EntityId', undoRedoActionGroup.EntityId ?? '')
      .set('EntityType', undoRedoActionGroup.EntityType ?? '')
      .set('ActionName', undoRedoActionGroup.ActionName ?? '')
      .set('ActionGroupId', undoRedoActionGroup.ActionGroupId ?? '')
      .set('ActionDetails', undoRedoActionGroup.ActionDetails ?? '')
      .set('SequenceNumber', undoRedoActionGroup.SequenceNumber ?? '0');
  
    // Request body
    const body = { coordinates };
  
    return this.postparm(url, body, params);
  }
  
  incrementWorkflowValue(wfid: string): number {
    const storageKey = 'workflowDataArray';
    const stored = sessionStorage.getItem(storageKey);
    const array: [string, number][] = stored ? JSON.parse(stored) : [];
  
    const index = array.findIndex(([key]) => key === wfid);
  
    if (index !== -1) {
      array[index][1]++; // Increment existing
    } else {
      array.push([wfid, 1]); // Add new with count 1
    }
  
    // Save updated array
    sessionStorage.setItem(storageKey, JSON.stringify(array));
  
    // Optional: update class property
    //this.workflowDataArray = array;
  
    // Return updated value
    return index !== -1 ? array[index][1] : 1;
  }
  
  
  

  UndoWfdWorkflow(wfId: string) {
    // debugger
    const url = `${this.#baseurl}/UndoWfdWorkflow`;
    const params = { wfId: wfId };
    return this.post(url, null, params);
  }

  RedoWfdWorkflow(wfId: string) {
    const url = `${this.#baseurl}/RedoWfdWorkflow`;
    const params = { wfId: wfId };
    return this.post(url, null, params);
  }

  getWorkflowDetails(workflowId: string) {
    const url = `${this.#baseurl}/getWFDetailByWfId`;
    return this.get<WFDetail[]>(url, { wfId: workflowId });
  }

  
GetWfdDetailUsingProcessName(guid: string, displayName: string): Observable<any> {
  const url = `${this.#baseurl}/GetWfdDetailUsingProcessName`;
  return this.get<any>(url, { Guid: guid, DisplayName: displayName });
}

  getStageDetails(stageId: string, workflowId: string) {
    const url = `${this.#baseurl}/getWFStage`;
    return this.get<WFStageDetail[]>(url, { WfoId: stageId, wfId: workflowId });
  }

  getStateDetails(stateId: string, stageId: string, workflowId: string) {
    if (stateId) {
      const url = `${this.#baseurl}/getWFState`;
      return this.get<WFStateDetail>(url, {
        WfoId: stageId,
        wfosId: stateId,
        wfId: workflowId,
      });
    } else {
      return this._onCreatingNewState(stageId, workflowId);
    }
  }

  getTriggerDetails(
    triggerId: string,
    stateId: string,
    stageId: string,
    workflowId: string
  ) {
    if (triggerId) {
      const url = `${this.#baseurl}/getWFTrigger`;
      return this.get<WFTriggerDetail>(url, {
        triggerId,
        wfosId: stateId,
        WfoId: stageId,
        wfId: workflowId,
      });
    } else {
      return this._onCreatingNewTrigger(stateId, stageId);
    }
  }

  getTriggerConditionDetails(
    conditionId: string,
    triggerId: string,
    workflowId: string
  ) {
    const url = `${this.#baseurl}/getWFTriggerCondition`;
    return this.get<WFTriggerConditionDetail>(url, {
      conditionId,
      triggerId,
      wfId: workflowId,
    });
  }

  updateElement(
    element: DiagramEl,
    payload: any,
    processName?: string,
    workflowId?: string
  ): Observable<WFSaveResponse | null> {
    let call$: Observable<WFSaveResponse> = of(null);
    switch (element.type) {
      case t.Pool:
        call$ = this._saveWorkflowDetails(payload as SaveWorkflowPayload);
        break;
      case t.Stage:
        call$ = this._saveStageDetails(payload as SaveStagePayload);
        break;
      case t.StartState:
      case t.State:
      case t.EndState:
      case t.SubProcess:
        call$ = this._saveStateDetails(payload as SaveStatePayload);
        break;
      case t.Trigger:
        if (
          element.source.type === t.Gateway ||
          (element.source.type === t.TriggerExtension &&
            [EventDef.System, EventDef.Timer].includes(
              getEventDef(element.source)
            ))
        ) {
          // Trigger condition
          call$ = this._saveTriggerConditionDetails(
            payload as SaveTriggerConditionPayload,
            processName,
            workflowId
          );
        } else {
          const pl = payload as SaveTriggerPayload;
          call$ = this._saveTriggerDetails(pl).pipe(
            switchMap((res) => {
              if (!pl.triggerId && isStateType(element.target)) {
                const condPayload: SaveTriggerConditionPayload = {
                  conditionId: '',
                  conditionDescription: pl.friendlyName + '_Cond',
                  conditionName: pl.name.substring(0, 20) + '_Cond',
                  endWfoId: element.target.parent.props.WfoId,
                  endWfosId: element.target.props.WfosId,
                  triggerId: res.result?.TriggerId,
                  status: 1,
                  wfId: workflowId,
                  ccMAilRoleGuids: [],
                  deletedUploadedFiles: '',
                  emailSubject: '',
                  fileNames: '',
                  fileUploadLoc: '',
                  filter: [],
                  notify: '',
                  roleGuid: [],
                };
                return this._saveTriggerConditionDetails(
                  condPayload,
                  processName,
                  workflowId
                ).pipe(
                  catchError((err) => throwError(err)),
                  map((condRes) => {
                    const conditions = {};
                    conditions[condRes.result.ConditionId] = {
                      ...condRes.result,
                      TriggerId: res.result.TriggerId,
                    };
                    return {
                      ...res,
                      result: {
                        ...res.result,
                        TrgConditions: conditions,
                      },
                    };
                  })
                );
              } else return of(res);
            })
          );
        }
        break;
      case t.TriggerExtension:
        call$ = this._saveTriggerDetails(payload);
        break;
      default:
        return of(null);
    }
    return call$.pipe(
      catchError((error: HttpErrorResponse) => of(error.error))
    );
  }

  deleteElements(ids: ElementsIds, workflowId: string) {
    let conditionCall$ = of('');
    let triggerCall$ = of('');
    let stateCall$ = of('');
    let stageCall$ = of('');
    let workflowCall$ = of('');
    if (ids.conditionIds.length > 0) {
      conditionCall$ = this._deleteTriggerCondition(
        ids.conditionIds,
        workflowId
      );
    }
    if (ids.triggerIds.length > 0) {
      triggerCall$ = this._deleteTrigger(ids.triggerIds, workflowId);
    }
    if (ids.stateIds.length > 0) {
      const storedDatastr = sessionStorage.getItem('StateJson');
      let storedData: Record<string, string> = {};
      storedData = JSON.parse(storedDatastr);
      const anyMissing = ids.stateIds.some(id => !(id in storedData));
      
      if (anyMissing || ids.stageIds.length==0) {
        stateCall$ = this._deleteState(ids.stateIds, workflowId);
      }
    }
    if (ids.stageIds.length > 0) {
      stageCall$ = this._deleteStage(ids.stageIds, workflowId);
    }
    if (ids.workflowIds.length > 0) {
      workflowCall$ = this._deleteWorkflow(ids.workflowIds);
    }
    return from([
      conditionCall$,
      triggerCall$,
      stateCall$,
      stageCall$,
      workflowCall$,
    ]).pipe(concatAll());
  }

  restoreElement(workflowId: string, el: DiagramEl) {
    let conditionCall$: Observable<string[] | null> = of(null);
    let objectType: string;
    let id: string;
    if (el.type === t.Pool) {
      objectType = 'workflow';
      id = workflowId;
    } else if (el.type === t.Stage) {
      objectType = 'stage';
      id = el.props.WfoId;
    } else if (isStateType(el)) {
      objectType = 'state';
      id = (el.props as State).WfosId;
    } else if (el.type === t.Trigger && el.source.type !== t.Gateway) {
      objectType = 'trigger';
      el = el as TriggerConnection;
      id = el.props.TriggerId;
      const conditions = new Set<string>();
      // In case of triggers we need to make sure
      // to restore all conditions as well
      if (el.target.type !== t.Gateway) {
        // if conditions are not visible in the ui
        Object.keys(el.props.TrgConditions || {}).forEach((id) =>
          conditions.add(id)
        );
      } else if (el.target.type === t.Gateway) {
        (el.target.outgoing as TriggerConditionConnection[])
          .filter((el) => el.props)
          .forEach(({ props }) => conditions.add(props.ConditionId));
      }
      const calls$ = Array.from(conditions).map((id) =>
        this.undeleteObject(workflowId, id, 'triggercondition')
      );
      conditionCall$ = forkJoin(calls$);
    } else if (isConditionType(el as TriggerConditionConnection))
      objectType = 'triggercondition';
    id = (el as TriggerConditionConnection).props.ConditionId;

    if (!objectType) return EMPTY;

    return from([
      conditionCall$,
      this.undeleteObject(workflowId, id, objectType),
    ]).pipe(concatAll());
  }

  private undeleteObject(
    workflowId: string,
    objectId: string,
    objectType: string
  ) {
    const url = `${this.#baseurl}/undoDeletedObject`;
    return this.post<string>(url, null, {
      wfId: workflowId,
      objectId,
      objectType,
    });
  }

  private _saveWorkflowDetails(payload: SaveWorkflowPayload) {
    const url = `${this.#baseurl}/addUpdateWorkflow`;
    return this.post<WFSaveResponse>(url, payload, null);
  }

  private _saveStageDetails(payload: SaveStagePayload) {
    const url = `${this.#baseurl}/saveWFStage`;
    return this.post<WFSaveResponse>(url, payload, null);
  }

  private _saveStateDetails(payload: SaveStatePayload) {
    const url = `${this.#baseurl}/saveWFState`;
    return this.post<WFSaveResponse>(url, payload, null);
  }

  private _saveTriggerDetails(payload: SaveTriggerPayload) {
    const url = `${this.#baseurl}/saveWFTrigger`;
    return this.post<WFSaveResponse>(url, payload, null);
  }

  private _saveTriggerConditionDetails(
    payload: SaveTriggerConditionPayload,
    processName: string,
    workflowId: string
  ) {
    const url = `${this.#baseurl}/saveWFTriggerCondition`;
    return this.post<WFSaveResponse>(url, payload, {
      processName,
      workflowid: workflowId,
    });
  }

  private _deleteWorkflow(workflowIds: string[]) {
    const url = `${this.#baseurl}/deleteWF`;
    return this.delete<string>(url, { wfIDs: workflowIds.toString() });
  }

  private _deleteStage(stageIds: string[], workflowId: string) {
    const url = `${this.#baseurl}/deleteWFStage`;
    return this.delete<string>(url, {
      wfoIds: stageIds.toString(),
      wfId: workflowId,
    });
  }

  private _deleteState(stateIds: string[], workflowId: string) {
    const url = `${this.#baseurl}/deleteWFState`;
    return this.delete<string>(url, {
      wfosIds: stateIds.toString(),
      wfId: workflowId,
    });
  }

  private _deleteTrigger(triggerIds: string[], workflowId: string) {
    const url = `${this.#baseurl}/deleteWFTrigger`;
    return this.delete<string>(url, {
      triggerIds: triggerIds.toString(),
      wfId: workflowId,
    });
  }

  private _deleteTriggerCondition(conditionIds: string[], workflowId: string) {
    const url = `${this.#baseurl}/deleteWFTriggerCondition`;
    return this.delete<string>(url, {
      wfId: workflowId,
      conditionIds: conditionIds.toString(),
    });
  }

  private _onCreatingNewState(stageId: string, workflowId: string) {
    const url = `${this.#baseurl}/getWFProcessListAndAvailableRoles`;
    return this.get<Partial<WFStateDetail>>(url, {
      wfoId: stageId,
      wfId: workflowId,
    });
  }

  private _onCreatingNewTrigger(stateId: string, stageId: string) {
    const url = `${this.#baseurl}/getWFTriggerTypeAndAvailableRoles`;
    return this.get<Partial<WFTriggerDetail>>(url, {
      wfosId: stateId,
      wfoId: stageId,
    });
  }

  private _getStageState<T>(wfId: string, condLevel: WF.ConditionLevel) {
    const url = `${this.#baseurl}/getStageStateByWFID`;
    return this.get<{ Data: T[] }>(url, { wfId, condLevel }).pipe(
      map((res) => res?.Data || [])
    );
  }

  private _getConditionAreaControls<T>(
    bmId: string,
    bmogName: string,
    conditionArea: WF.ConditionArea
  ) {
    const url = `${this.#baseurl}/getWFConditionAreaControls`;
    return this.get<{ data: T[] }>(url, { bmId, bmogName, conditionArea }).pipe(
      map((res) => res.data || [])
    );
  }


  getDmoByProcessName(procNM: string): Observable<any> {
    return this.get<any>(`${this.#baseurl}/getdmobyprocessname`, { procNM });
  }

  getTriggersByProcessName(procNM: string): Observable<any> {
    return this.get<any>(`${this.#baseurl}/gettrgbyprocessname`, {procNM });
  }

   GetWFAppList() {
    return this.get<any>(`${this.#baseurl}/GetWFProcessList`);
  }

  insertlegaldmotrgmapping(payload: any,procID : string, trgID : string) {
    const url = `${this.#baseurl}/insertlegaldmotrgmapping`;
    return this.post<WFSaveResponse>(url, payload, {procID,trgID});
  }

  getlegalmappeddmo(typeid: any,legalprocessNM : string,trgID : string) {
    const url = `${this.#baseurl}/getlegalmappeddmo`;
    return this.get<any>(url, {typeid,legalprocessNM,trgID});
  }

  getlegalmappedtrigger(typeid: any,wfID: string,legalprocessNM : string,trgID : string) {
    const url = `${this.#baseurl}/getlegalmappedtrigger`;
    return this.get<any>(url, {typeid,wfID,legalprocessNM,trgID});
  }

  getLegalTemplate(DocumentId: string) {
    return this.get(`${this.#baseurl}/getlegaltemplate`,{DocumentId});
  }

}

export interface WFSaveResponse {
  code: number;
  message: string;
  result: WFSaveResponseResult;
  statuscode: number;
}

type ResultId = 'WfoId' | 'WfosId' | 'TriggerId' | 'ConditionId';
type WFSaveResponseResult = { 
  Guid?: string;
  SubProcessName?: string;
  SubProcessWFVersionNo?: string;
} & {
  [key in ResultId]?: string;
} & {
  TrgConditions?: { [key: string]: Partial<TriggerCondition> };
};
