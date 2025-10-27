import {
  ListColumnType,
  ObjectControlComponent
} from "./chunk-FKDZX6HV.js";
import {
  ObjectControl,
  Status
} from "./chunk-74OCJGBF.js";
import {
  AssociationComponent,
  BaseHttpService,
  ColumnFilterService,
  GenericGridComponent,
  arrayToList,
  enumToList,
  primitiveArrayToList,
  require_lodash,
  toFormArray
} from "./chunk-BQKXR4UC.js";
import {
  moveItemInArray
} from "./chunk-WACMUXJB.js";
import {
  MessageService,
  UserDetail
} from "./chunk-43FCU5DY.js";
import {
  WFService
} from "./chunk-U3QHRRQH.js";
import {
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  NgbActiveModal,
  NgbModal,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ToastrService,
  UntypedFormBuilder,
  UtilService,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BehaviorSubject,
  EMPTY,
  ElementRef,
  HttpParams,
  KeyValuePipe,
  NgForOf,
  NgIf,
  Router,
  SlicePipe,
  catchError,
  combineLatest,
  concatAll,
  filter,
  forkJoin,
  formatDate,
  from,
  map,
  of,
  startWith,
  switchMap,
  tap,
  throwError,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/lib/models/wf.namespace.ts
var WF;
(function(WF2) {
  let Status2;
  (function(Status3) {
    Status3["Inactive"] = "0";
    Status3["Active"] = "1";
  })(Status2 = WF2.Status || (WF2.Status = {}));
  let ActionState;
  (function(ActionState2) {
    ActionState2["No"] = "0";
    ActionState2["Yes"] = "1";
    ActionState2["NA"] = "2";
  })(ActionState = WF2.ActionState || (WF2.ActionState = {}));
})(WF || (WF = {}));

// src/lib/models/bmo.model.ts
var BMOType;
(function(BMOType2) {
  BMOType2["Form"] = "Forms";
  BMOType2["Contact"] = "Contacts";
  BMOType2["Attachment"] = "Attachments";
  BMOType2["Document"] = "Documents";
  BMOType2["SubProcess"] = "Subprocess";
  BMOType2["ChildProcess"] = "ChildProcess";
  BMOType2["SharedChildProcess"] = "SharedChildProcess";
})(BMOType || (BMOType = {}));

// src/app/admin/wf/wfd/models/bpmn/element.model.ts
var ElementType;
(function(ElementType2) {
  ElementType2["Process"] = "bpmn:Process";
  ElementType2["Root"] = "bpmn:Collaboration";
  ElementType2["Pool"] = "bpmn:Participant";
  ElementType2["Stage"] = "bpmn:Lane";
  ElementType2["StartState"] = "bpmn:StartEvent";
  ElementType2["EndState"] = "bpmn:EndEvent";
  ElementType2["State"] = "bpmn:Task";
  ElementType2["Gateway"] = "bpmn:ExclusiveGateway";
  ElementType2["Trigger"] = "bpmn:SequenceFlow";
  ElementType2["TriggerExtension"] = "bpmn:IntermediateCatchEvent";
  ElementType2["Association"] = "bpmn:Association";
  ElementType2["Annotation"] = "bpmn:TextAnnotation";
  ElementType2["SubProcess"] = "bpmn:SubProcess";
  ElementType2["Label"] = "label";
  ElementType2["TestElectric"] = "bpmn:TestElectric";
  ElementType2["DottedFlow"] = "custom:DottedFlow";
  ElementType2["API"] = "custom:API";
  ElementType2["DataSchema"] = "custom:DataSchema";
  ElementType2["HumanInLoop"] = "custom:HumanInLoop";
  ElementType2["LLM"] = "custom:LLM";
  ElementType2["PromptVariable"] = "custom:PromptVariable";
  ElementType2["Scheduler"] = "custom:Scheduler";
  ElementType2["SqlQuery"] = "custom:SqlQuery";
  ElementType2["Vector"] = "custom:Vector";
  ElementType2["AgenticFlow"] = "bpmn:AgenticFlow";
})(ElementType || (ElementType = {}));
var EventDef;
(function(EventDef2) {
  EventDef2["Timer"] = "bpmn:TimerEventDefinition";
  EventDef2["Notify"] = "bpmn:MessageEventDefinition";
  EventDef2["System"] = "bpmn:ConditionalEventDefinition";
})(EventDef || (EventDef = {}));

// src/app/admin/wf/wfd/models/bpmn/event-bus.model.ts
var EventType;
(function(EventType2) {
  EventType2["InitComplete"] = "diagram.initComplete";
  EventType2["CreateConnection"] = "commandStack.connection.create.postExecuted";
  EventType2["Connect"] = "connect.end";
  EventType2["ReconnectConnection"] = "commandStack.connection.reconnect.postExecute";
  EventType2["CreateElement"] = "commandStack.elements.create.postExecute";
  EventType2["HoverOnElement"] = "element.hover";
  EventType2["CreateShape"] = "commandStack.shape.create.postExecuted";
  EventType2["MoveEnd"] = "shape.move.end";
  EventType2["DiagramChanged"] = "element.changed";
  EventType2["DoubleClick"] = "element.dblclick";
  EventType2["AddLane"] = "commandStack.lane.add.postExecuted";
  EventType2["DeleteShape"] = "commandStack.shape.delete.postExecuted";
  EventType2["DeleteConnection"] = "commandStack.connection.delete.executed";
  EventType2["MoveShape"] = "commandStack.shape.move.postExecute";
  EventType2["InitializeEditorActions"] = "editorActions.init";
  EventType2["ReadonlyMode"] = "readOnly.changed";
  EventType2["CreateConnectionRevert"] = "commandStack.connection.create.reverted";
  EventType2["DeleteConnectionRevert"] = "commandStack.connection.delete.reverted";
  EventType2["ReconnectConnectionRevert"] = "commandStack.connection.reconnect.reverted";
  EventType2["CreateShapeRevert"] = "commandStack.shape.create.reverted";
  EventType2["DeleteShapeRevert"] = "commandStack.shape.delete.reverted";
  EventType2["MoveShapeRevert"] = "commandStack.shape.move.reverted";
  EventType2["LassoToolSameStage"] = "drag.end";
  EventType2["DragStart"] = "drag.start";
  EventType2["DragEnd"] = "drag.end";
})(EventType || (EventType = {}));

// src/app/admin/wf/wfd/models/wf.model.ts
var UndoRedoActionGroup = class {
  constructor() {
    this.EntityId = null;
    this.EntityType = null;
    this.ActionName = null;
    this.ActionGroupId = null;
    this.ActionDetails = null;
    this.SequenceNumber = null;
  }
};

// src/app/admin/wf/wfd/util/bpmn.ts
var t = ElementType;
var COLORS = {};
COLORS[t.Pool] = {
  stroke: "black",
  fill: "none",
  fillOpacity: 0.35,
  strokeWidth: 1
};
COLORS[t.Stage] = {
  stroke: "black",
  fill: "none",
  fillOpacity: 0.35,
  strokeWidth: 1
};
COLORS[t.StartState] = { stroke: "black", fill: " black" };
COLORS[t.State] = { stroke: "black", fill: " white", strokeWidth: 2 };
COLORS[t.EndState] = { stroke: "black", fill: " white", strokeWidth: 4 };
COLORS[t.SubProcess] = { stroke: "black", fill: " white" };
COLORS[t.TriggerExtension] = { stroke: "black", fill: " white" };
COLORS[EventDef.Timer] = { stroke: "black", fill: " white" };
COLORS[EventDef.Notify] = { stroke: "black", fill: " white" };
COLORS[EventDef.System] = { stroke: "black", fill: " white" };
COLORS[t.Gateway] = { stroke: "black", fill: " white", strokeWidth: 2 };
COLORS[t.Association] = {
  stroke: "#006266",
  fill: "#006266",
  strokeDasharray: "0.5, 5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
COLORS[t.Annotation] = { stroke: "black", fill: " white" };
COLORS[t.Trigger] = [
  { stroke: "black", fill: "black" },
  { stroke: "black", fill: "black" }
];
COLORS[t.DottedFlow] = [
  { stroke: "black", fill: "black" },
  { stroke: "black", fill: "black" }
];
var INACTIVE_STROKE_COLOR = "#b4b4b4";
var INACTIVE_FILL_COLOR = "#c6c6c6";
var isStateType = (el) => {
  return el?.type && (el.type === t.StartState || el.type === t.State || el.type === t.EndState || el.type === t.SubProcess || el.type === t.API || el.type === t.DataSchema || el.type === t.HumanInLoop || el.type === t.LLM || el.type === t.PromptVariable || el.type === t.Scheduler || el.type === t.SqlQuery || el.type === t.Vector);
};
var getShapeSize = (type) => {
  switch (type) {
    case t.Pool:
      return { width: 600, height: 250 };
    case t.Stage:
      return { width: 400, height: 100 };
    case t.StartState:
      return { width: 36, height: 36 };
    case t.EndState:
      return { width: 36, height: 36 };
    case t.SubProcess:
      return { width: 100, height: 80 };
    case t.TriggerExtension:
      return { width: 36, height: 36 };
    case t.State:
      return { width: 100, height: 80 };
    case t.Gateway:
      return { width: 50, height: 50 };
    case t.Annotation:
      return { width: 100, height: 30 };
    default:
      return { width: 100, height: 80 };
  }
};
var isConditionType = (el) => {
  return el.type === t.Trigger && el.source.type === t.Gateway;
};
var isConnection = (el) => el.type === t.Trigger || el.type === t.Association || el.type === t.DottedFlow;
var isCustomConnection = (el) => el.type === t.DottedFlow;
var getElementStyle = (el) => {
  let style = null;
  const elementType = el.type;
  const def = el.def;
  if (el.type === t.Label) {
    const parentType = el.businessObject.$type;
    style = COLORS[parentType];
  } else if (el.type === t.Trigger || el.type === t.DottedFlow) {
    const index = el.source?.outgoing?.length;
    const colors = COLORS[el.type];
    const len = colors.length;
    const triggerColors = colors[index % len || 0];
    style = __spreadValues({}, triggerColors);
  } else if (el?.def === EventDef.Timer && !el.color) {
    style = style = { stroke: "black", fill: "white" };
  } else if (el?.def === EventDef.Notify && !el.color) {
    style = { stroke: "black", fill: "white" };
  } else if (el?.def === EventDef.System && !el.color) {
    style = { stroke: "black", fill: "white" };
  } else {
    if (elementType === t.Pool && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "none", strokeWidth: 2, fillOpacity: 0.35 };
    } else if (elementType === t.Stage && el.color) {
      style = { stroke: "black", fill: el.color, strokeWidth: 2, fillOpacity: 0.35 };
    } else if (elementType === t.Stage && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white", strokeWidth: 2, fillOpacity: 0.35 };
    } else if (elementType === t.State && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white", strokeWidth: 2.5 };
    } else if (elementType === t.StartState && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "black", strokeWidth: 3 };
    } else if (elementType === t.EndState && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white", strokeWidth: 4 };
    } else if ([t.API, t.DataSchema, t.HumanInLoop, t.LLM, t.PromptVariable, t.Scheduler, t.SqlQuery, t.Vector].includes(elementType) && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white", strokeWidth: 4 };
    } else if (elementType === t.SubProcess && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white", strokeWidth: 2 };
    } else if (elementType === t.Gateway && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white", strokeWidth: 2 };
    } else if (elementType === t.Association && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "none", strokeDasharray: "0.5, 5", strokeLinecap: "round", strokeLinejoin: "round" };
    } else if (def === EventDef.Timer && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white" };
    } else if (def === EventDef.Notify && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white" };
    } else if (def === EventDef.System && (!el.color || el.color === "none")) {
      style = { stroke: "black", fill: "white" };
    } else {
      style = COLORS[elementType];
    }
  }
  if (el.props?.Name === "Trigger_Condtion") {
    console.log(el.props);
  }
  if (el.props?.Status === Status.Inactive) {
    style = __spreadValues({}, style);
    if (style.fill) {
      style.fill = INACTIVE_FILL_COLOR;
    }
    style.stroke = INACTIVE_STROKE_COLOR;
  }
  if (el.color && el.color !== "none") {
    const style2 = getElementTypeStyle(elementType, el.color);
    COLORS[def || elementType] = style2;
  }
  function getElementTypeStyle(elementType2, color) {
    switch (elementType2) {
      case "bpmn:EndEvent":
        return {
          stroke: color,
          fill: color,
          fillOpacity: 1,
          strokeWidth: 4
        };
      case "bpmn:Lane":
        return {
          stroke: color,
          fill: color,
          fillOpacity: 0.35,
          strokeWidth: 2
        };
      default:
        return {
          stroke: color,
          fill: color,
          fillOpacity: 1,
          strokeWidth: 2
        };
    }
  }
  return style;
};
var getEventDef = (el) => {
  const defs = el.businessObject?.eventDefinitions;
  return defs && defs[0]?.$type;
};

// src/app/admin/wf/wfd/services/workflow-api.service.ts
var t2 = ElementType;
var WorkflowApiService = class _WorkflowApiService extends BaseHttpService {
  #baseurl = `${environment.Setting.GatewayAPIUrl}/wfapiwf/wf`;
  getBMList(wfId) {
    const url = `${this.#baseurl}/getWFBM`;
    return this.get(url, { wfId }).pipe(map((res) => res?.Data || []));
  }
  getWFConditionDetail(conditionId) {
    const url = `${this.#baseurl}/getWFConditionDetail`;
    return this.get(url, { conditionId });
  }
  callApiOnMoveLane(stateID, stageID, ActionGroupId, PreviousStage) {
    if (!stateID || !stageID || !ActionGroupId) {
      console.error("Invalid parameters for stage change API call:", {
        stateID,
        stageID,
        ActionGroupId,
        PreviousStage
      });
      return throwError(() => new Error("Invalid parameters for stage change API call"));
    }
    this.previousId = PreviousStage;
    this.stateIds = stateID;
    this.stageIds = stageID;
    this.ActionId = ActionGroupId;
    const url = `${this.#baseurl}/stagechange`;
    return this.post(url, { stateID, stageID, ActionGroupId });
  }
  getBMOGsByBMId(bmId) {
    const url = `${this.#baseurl}/getBMOGListBasedOnBM`;
    return this.get(url, { bmId }).pipe(map((res) => res?.Data || []));
  }
  getStateList(wfId) {
    return this._getStageState(wfId, "State");
  }
  getStageList(wfId) {
    return this._getStageState(wfId, "Stage");
  }
  getBmoList(bmId, bmogName) {
    return this._getConditionAreaControls(bmId, bmogName, "BusinessModelObject");
  }
  getDmogList(bmId, bmogName) {
    return this._getConditionAreaControls(bmId, bmogName, "DataModelGroup");
  }
  getDmoList(bmId, bmogName) {
    return this._getConditionAreaControls(bmId, bmogName, "DataModelObject");
  }
  getTriggerList(bmId, bmogName) {
    return this._getConditionAreaControls(bmId, bmogName, "Trigger");
  }
  getDmosByBM(bmId) {
    const url = `${this.#baseurl}/getDmoBasedOnBM`;
    return this.get(url, { bmId }).pipe(map((res) => res?.Data || []));
  }
  upsertCondition(payload) {
    const url = `${this.#baseurl}/wfConditionUpsert`;
    return this.post(url, payload);
  }
  CheckValidationWF(processName, type, wfId, name, version) {
    const encodedName = btoa(name);
    const url = `${this.#baseurl}/checkName/wf/${wfId}/${encodedName}`;
    const params = {
      wfObjType: type
    };
    return this.get(url, params);
  }
  changeMode(wfId, mode) {
    const url = `${this.#baseurl}/changewfMode`;
    return this.post(url, { Mode: mode, wfID: wfId });
  }
  downloadBulkUploadTemplate(processName) {
    const url = `${this.#baseurl}/downloadTemplate/wf`;
    return this.post(url, null, { processName }, null, "Blob");
  }
  getWorkflowDiagram(processName, versionNumber) {
    return this.get(`${this.#baseurl}/getwfdetails`, {
      processName,
      versionNumber
    }).pipe(map(({ MetaData }) => MetaData));
  }
  saveDiagramCoordinates(wfId, coordinates, undoRedoActionGroup) {
    const url = `${this.#baseurl}/saveWFDCoordinate`;
    if (this.stateIds === void 0) {
      this.wfid = wfId;
      this.wfjson = coordinates;
    }
    if (!undoRedoActionGroup) {
      undoRedoActionGroup = new UndoRedoActionGroup();
    }
    if (this.stateIds !== void 0) {
      wfId = this.wfid;
      coordinates = this.wfjson;
      undoRedoActionGroup.EntityId = this.stateIds;
      undoRedoActionGroup.EntityType = "State";
      undoRedoActionGroup.ActionName = "StageChange";
      undoRedoActionGroup.ActionGroupId = this.ActionId ?? "";
      this.stateIds = void 0;
      undoRedoActionGroup.SequenceNumber = this.incrementWorkflowValue(this.wfid).toString();
    }
    if (this.stageIds !== void 0) {
      const deletedIds = {
        workflowIds: [wfId],
        stageIds: [this.stageIds],
        stateIds: [undoRedoActionGroup.EntityId ?? ""],
        triggerIds: [],
        conditionIds: [],
        prevstageIds: [this.previousId ?? ""]
      };
      undoRedoActionGroup.ActionDetails = JSON.stringify(deletedIds);
      this.stageIds = void 0;
    }
    const params = new HttpParams().set("wfId", wfId).set("EntityId", undoRedoActionGroup.EntityId ?? "").set("EntityType", undoRedoActionGroup.EntityType ?? "").set("ActionName", undoRedoActionGroup.ActionName ?? "").set("ActionGroupId", undoRedoActionGroup.ActionGroupId ?? "").set("ActionDetails", undoRedoActionGroup.ActionDetails ?? "").set("SequenceNumber", undoRedoActionGroup.SequenceNumber ?? "0");
    const body = { coordinates };
    return this.postparm(url, body, params);
  }
  incrementWorkflowValue(wfid) {
    const storageKey = "workflowDataArray";
    const stored = sessionStorage.getItem(storageKey);
    const array = stored ? JSON.parse(stored) : [];
    const index = array.findIndex(([key]) => key === wfid);
    if (index !== -1) {
      array[index][1]++;
    } else {
      array.push([wfid, 1]);
    }
    sessionStorage.setItem(storageKey, JSON.stringify(array));
    return index !== -1 ? array[index][1] : 1;
  }
  UndoWfdWorkflow(wfId) {
    const url = `${this.#baseurl}/UndoWfdWorkflow`;
    const params = { wfId };
    return this.post(url, null, params);
  }
  RedoWfdWorkflow(wfId) {
    const url = `${this.#baseurl}/RedoWfdWorkflow`;
    const params = { wfId };
    return this.post(url, null, params);
  }
  getWorkflowDetails(workflowId) {
    const url = `${this.#baseurl}/getWFDetailByWfId`;
    return this.get(url, { wfId: workflowId });
  }
  GetWfdDetailUsingProcessName(guid, displayName) {
    const url = `${this.#baseurl}/GetWfdDetailUsingProcessName`;
    return this.get(url, { Guid: guid, DisplayName: displayName });
  }
  getStageDetails(stageId, workflowId) {
    const url = `${this.#baseurl}/getWFStage`;
    return this.get(url, { WfoId: stageId, wfId: workflowId });
  }
  getStateDetails(stateId, stageId, workflowId) {
    if (stateId) {
      const url = `${this.#baseurl}/getWFState`;
      return this.get(url, {
        WfoId: stageId,
        wfosId: stateId,
        wfId: workflowId
      });
    } else {
      return this._onCreatingNewState(stageId, workflowId);
    }
  }
  getTriggerDetails(triggerId, stateId, stageId, workflowId) {
    if (triggerId) {
      const url = `${this.#baseurl}/getWFTrigger`;
      return this.get(url, {
        triggerId,
        wfosId: stateId,
        WfoId: stageId,
        wfId: workflowId
      });
    } else {
      return this._onCreatingNewTrigger(stateId, stageId);
    }
  }
  getTriggerConditionDetails(conditionId, triggerId, workflowId) {
    const url = `${this.#baseurl}/getWFTriggerCondition`;
    return this.get(url, {
      conditionId,
      triggerId,
      wfId: workflowId
    });
  }
  updateElement(element, payload, processName, workflowId) {
    let call$ = of(null);
    switch (element.type) {
      case t2.Pool:
        call$ = this._saveWorkflowDetails(payload);
        break;
      case t2.Stage:
        call$ = this._saveStageDetails(payload);
        break;
      case t2.StartState:
      case t2.State:
      case t2.EndState:
      case t2.SubProcess:
        call$ = this._saveStateDetails(payload);
        break;
      case t2.Trigger:
        if (element.source.type === t2.Gateway || element.source.type === t2.TriggerExtension && [EventDef.System, EventDef.Timer].includes(getEventDef(element.source))) {
          call$ = this._saveTriggerConditionDetails(payload, processName, workflowId);
        } else {
          const pl = payload;
          call$ = this._saveTriggerDetails(pl).pipe(switchMap((res) => {
            if (!pl.triggerId && isStateType(element.target)) {
              const condPayload = {
                conditionId: "",
                conditionDescription: pl.friendlyName + "_Cond",
                conditionName: pl.name.substring(0, 20) + "_Cond",
                endWfoId: element.target.parent.props.WfoId,
                endWfosId: element.target.props.WfosId,
                triggerId: res.result?.TriggerId,
                status: 1,
                wfId: workflowId,
                ccMAilRoleGuids: [],
                deletedUploadedFiles: "",
                emailSubject: "",
                fileNames: "",
                fileUploadLoc: "",
                filter: [],
                notify: "",
                roleGuid: []
              };
              return this._saveTriggerConditionDetails(condPayload, processName, workflowId).pipe(catchError((err) => throwError(err)), map((condRes) => {
                const conditions = {};
                conditions[condRes.result.ConditionId] = __spreadProps(__spreadValues({}, condRes.result), {
                  TriggerId: res.result.TriggerId
                });
                return __spreadProps(__spreadValues({}, res), {
                  result: __spreadProps(__spreadValues({}, res.result), {
                    TrgConditions: conditions
                  })
                });
              }));
            } else
              return of(res);
          }));
        }
        break;
      case t2.TriggerExtension:
        call$ = this._saveTriggerDetails(payload);
        break;
      default:
        return of(null);
    }
    return call$.pipe(catchError((error) => of(error.error)));
  }
  deleteElements(ids, workflowId) {
    let conditionCall$ = of("");
    let triggerCall$ = of("");
    let stateCall$ = of("");
    let stageCall$ = of("");
    let workflowCall$ = of("");
    if (ids.conditionIds.length > 0) {
      conditionCall$ = this._deleteTriggerCondition(ids.conditionIds, workflowId);
    }
    if (ids.triggerIds.length > 0) {
      triggerCall$ = this._deleteTrigger(ids.triggerIds, workflowId);
    }
    if (ids.stateIds.length > 0) {
      const storedDatastr = sessionStorage.getItem("StateJson");
      let storedData = {};
      storedData = JSON.parse(storedDatastr);
      const anyMissing = ids.stateIds.some((id) => !(id in storedData));
      if (anyMissing || ids.stageIds.length == 0) {
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
      workflowCall$
    ]).pipe(concatAll());
  }
  restoreElement(workflowId, el) {
    let conditionCall$ = of(null);
    let objectType;
    let id;
    if (el.type === t2.Pool) {
      objectType = "workflow";
      id = workflowId;
    } else if (el.type === t2.Stage) {
      objectType = "stage";
      id = el.props.WfoId;
    } else if (isStateType(el)) {
      objectType = "state";
      id = el.props.WfosId;
    } else if (el.type === t2.Trigger && el.source.type !== t2.Gateway) {
      objectType = "trigger";
      el = el;
      id = el.props.TriggerId;
      const conditions = /* @__PURE__ */ new Set();
      if (el.target.type !== t2.Gateway) {
        Object.keys(el.props.TrgConditions || {}).forEach((id2) => conditions.add(id2));
      } else if (el.target.type === t2.Gateway) {
        el.target.outgoing.filter((el2) => el2.props).forEach(({ props }) => conditions.add(props.ConditionId));
      }
      const calls$ = Array.from(conditions).map((id2) => this.undeleteObject(workflowId, id2, "triggercondition"));
      conditionCall$ = forkJoin(calls$);
    } else if (isConditionType(el))
      objectType = "triggercondition";
    id = el.props.ConditionId;
    if (!objectType)
      return EMPTY;
    return from([
      conditionCall$,
      this.undeleteObject(workflowId, id, objectType)
    ]).pipe(concatAll());
  }
  undeleteObject(workflowId, objectId, objectType) {
    const url = `${this.#baseurl}/undoDeletedObject`;
    return this.post(url, null, {
      wfId: workflowId,
      objectId,
      objectType
    });
  }
  _saveWorkflowDetails(payload) {
    const url = `${this.#baseurl}/addUpdateWorkflow`;
    return this.post(url, payload, null);
  }
  _saveStageDetails(payload) {
    const url = `${this.#baseurl}/saveWFStage`;
    return this.post(url, payload, null);
  }
  _saveStateDetails(payload) {
    const url = `${this.#baseurl}/saveWFState`;
    return this.post(url, payload, null);
  }
  _saveTriggerDetails(payload) {
    const url = `${this.#baseurl}/saveWFTrigger`;
    return this.post(url, payload, null);
  }
  _saveTriggerConditionDetails(payload, processName, workflowId) {
    const url = `${this.#baseurl}/saveWFTriggerCondition`;
    return this.post(url, payload, {
      processName,
      workflowid: workflowId
    });
  }
  _deleteWorkflow(workflowIds) {
    const url = `${this.#baseurl}/deleteWF`;
    return this.delete(url, { wfIDs: workflowIds.toString() });
  }
  _deleteStage(stageIds, workflowId) {
    const url = `${this.#baseurl}/deleteWFStage`;
    return this.delete(url, {
      wfoIds: stageIds.toString(),
      wfId: workflowId
    });
  }
  _deleteState(stateIds, workflowId) {
    const url = `${this.#baseurl}/deleteWFState`;
    return this.delete(url, {
      wfosIds: stateIds.toString(),
      wfId: workflowId
    });
  }
  _deleteTrigger(triggerIds, workflowId) {
    const url = `${this.#baseurl}/deleteWFTrigger`;
    return this.delete(url, {
      triggerIds: triggerIds.toString(),
      wfId: workflowId
    });
  }
  _deleteTriggerCondition(conditionIds, workflowId) {
    const url = `${this.#baseurl}/deleteWFTriggerCondition`;
    return this.delete(url, {
      wfId: workflowId,
      conditionIds: conditionIds.toString()
    });
  }
  _onCreatingNewState(stageId, workflowId) {
    const url = `${this.#baseurl}/getWFProcessListAndAvailableRoles`;
    return this.get(url, {
      wfoId: stageId,
      wfId: workflowId
    });
  }
  _onCreatingNewTrigger(stateId, stageId) {
    const url = `${this.#baseurl}/getWFTriggerTypeAndAvailableRoles`;
    return this.get(url, {
      wfosId: stateId,
      wfoId: stageId
    });
  }
  _getStageState(wfId, condLevel) {
    const url = `${this.#baseurl}/getStageStateByWFID`;
    return this.get(url, { wfId, condLevel }).pipe(map((res) => res?.Data || []));
  }
  _getConditionAreaControls(bmId, bmogName, conditionArea) {
    const url = `${this.#baseurl}/getWFConditionAreaControls`;
    return this.get(url, { bmId, bmogName, conditionArea }).pipe(map((res) => res.data || []));
  }
  getDmoByProcessName(procNM) {
    return this.get(`${this.#baseurl}/getdmobyprocessname`, { procNM });
  }
  getTriggersByProcessName(procNM) {
    return this.get(`${this.#baseurl}/gettrgbyprocessname`, { procNM });
  }
  GetWFAppList() {
    return this.get(`${this.#baseurl}/GetWFProcessList`);
  }
  insertlegaldmotrgmapping(payload, procID, trgID) {
    const url = `${this.#baseurl}/insertlegaldmotrgmapping`;
    return this.post(url, payload, { procID, trgID });
  }
  getlegalmappeddmo(typeid, legalprocessNM, trgID) {
    const url = `${this.#baseurl}/getlegalmappeddmo`;
    return this.get(url, { typeid, legalprocessNM, trgID });
  }
  getlegalmappedtrigger(typeid, wfID, legalprocessNM, trgID) {
    const url = `${this.#baseurl}/getlegalmappedtrigger`;
    return this.get(url, { typeid, wfID, legalprocessNM, trgID });
  }
  getLegalTemplate(DocumentId) {
    return this.get(`${this.#baseurl}/getlegaltemplate`, { DocumentId });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275WorkflowApiService_BaseFactory;
      return function WorkflowApiService_Factory(__ngFactoryType__) {
        return (\u0275WorkflowApiService_BaseFactory || (\u0275WorkflowApiService_BaseFactory = \u0275\u0275getInheritedFactory(_WorkflowApiService)))(__ngFactoryType__ || _WorkflowApiService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowApiService, factory: _WorkflowApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/wf/components/wfconditions/wf-condition-detail/wf-condition-detail.component.ts
function WfConditionDetailComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "New Condition");
    \u0275\u0275elementEnd();
  }
}
function WfConditionDetailComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Condition Details");
    \u0275\u0275elementEnd();
  }
}
function WfConditionDetailComponent_form_6_ng_container_2_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 13);
  }
  if (rf & 2) {
    const control_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("parentForm", ctx_r2.form)("submitted", ctx_r2.formSubmitted)("config", control_r2);
  }
}
function WfConditionDetailComponent_form_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WfConditionDetailComponent_form_6_ng_container_2_app_object_control_1_Template, 1, 3, "app-object-control", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r2.show));
  }
}
function WfConditionDetailComponent_form_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-association", 14);
    \u0275\u0275listener("select", function WfConditionDetailComponent_form_6_ng_container_4_Template_app_association_select_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelectedLevelGuids($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const associations_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checkBy", ctx_r2.checkByKey)("uniqueWith", ctx_r2.uniqueWithGUID)("displayWith", ctx_r2.displayLevelWith)("items", associations_r5[0])("associatedItems", associations_r5[1]);
  }
}
function WfConditionDetailComponent_form_6_ng_container_6_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 13);
  }
  if (rf & 2) {
    const control_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("parentForm", ctx_r2.form)("submitted", ctx_r2.formSubmitted)("config", control_r6);
  }
}
function WfConditionDetailComponent_form_6_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WfConditionDetailComponent_form_6_ng_container_6_app_object_control_1_Template, 1, 3, "app-object-control", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r6.show));
  }
}
function WfConditionDetailComponent_form_6_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-association", 14);
    \u0275\u0275listener("select", function WfConditionDetailComponent_form_6_ng_container_8_Template_app_association_select_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelectedAreaGuids($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const associations_r8 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checkBy", ctx_r2.checkByKey)("uniqueWith", ctx_r2.uniqueWithGUID)("displayWith", ctx_r2.displayAreaWith)("items", associations_r8[0])("associatedItems", associations_r8[1]);
  }
}
function WfConditionDetailComponent_form_6_ng_container_10_app_object_control_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-object-control", 13);
  }
  if (rf & 2) {
    const control_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("parentForm", ctx_r2.form)("submitted", ctx_r2.formSubmitted)("config", control_r9);
  }
}
function WfConditionDetailComponent_form_6_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WfConditionDetailComponent_form_6_ng_container_10_app_object_control_1_Template, 1, 3, "app-object-control", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, control_r9.show));
  }
}
function WfConditionDetailComponent_form_6_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementContainerEnd();
  }
}
function WfConditionDetailComponent_form_6_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementContainerEnd();
  }
}
function WfConditionDetailComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6)(1, "div", 7);
    \u0275\u0275template(2, WfConditionDetailComponent_form_6_ng_container_2_Template, 3, 3, "ng-container", 8);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275template(4, WfConditionDetailComponent_form_6_ng_container_4_Template, 2, 5, "ng-container", 2);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, WfConditionDetailComponent_form_6_ng_container_6_Template, 3, 3, "ng-container", 8);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275template(8, WfConditionDetailComponent_form_6_ng_container_8_Template, 2, 5, "ng-container", 2);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275template(10, WfConditionDetailComponent_form_6_ng_container_10_Template, 3, 3, "ng-container", 8);
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
    \u0275\u0275listener("click", function WfConditionDetailComponent_form_6_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ref.close());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275listener("click", function WfConditionDetailComponent_form_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275template(16, WfConditionDetailComponent_form_6_ng_container_16_Template, 2, 0, "ng-container", 2)(17, WfConditionDetailComponent_form_6_ng_container_17_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(3, 8, ctx_r2.controls, 0, 7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 12, ctx_r2.levelAssociations$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(7, 14, ctx_r2.controls, 7, 9));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 18, ctx_r2.areaAssociations$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(11, 20, ctx_r2.controls, 9, ctx_r2.controls.length));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.data);
  }
}
var WfConditionDetailComponent = class _WfConditionDetailComponent {
  set bmList(list) {
    this.#list = arrayToList(list, "BMID", "BMNAME");
  }
  #list;
  #status;
  #areas;
  #bmControl;
  #bmogControl;
  #levelControl;
  #areaControl;
  #selectedStates;
  #selectedStages;
  #selectedBmos;
  #selectedDmogs;
  #selectedDmos;
  #selectedTriggers;
  #selectedAreas;
  #selectedLevels;
  #filterConfig;
  constructor(wfApi, fb, ref) {
    this.wfApi = wfApi;
    this.fb = fb;
    this.ref = ref;
    this.formSubmitted = false;
    this.#list = [];
    this.#status = enumToList(WF.Status);
    this.#areas = [
      { key: "BusinessModelObject", value: "Section" },
      { key: "DataModelGroup", value: "Card" },
      { key: "DataModelObject", value: "Data Model Object" },
      { key: "Trigger", value: "Trigger" }
    ];
    this.form = this.fb.group({
      Name: [null, [Validators.required]],
      Version: [null, Validators.required],
      Description: [null],
      Status: [this.#status[1], [Validators.required]],
      BMID: [null, [Validators.required]],
      BMOGNAM: [null, [Validators.required]],
      CondLevel: this.fb.group({
        ConditionLevel: [null, [Validators.required]],
        StageStateGuids: [[]]
      }, { validators: [selectedGuidValidator("ConditionLevel", "StageStateGuids")] }),
      Filter: this.fb.array([]),
      Area: this.fb.group({
        ConditionArea: [null, Validators.required],
        BmObjectGuids: [null]
      }, { validators: [selectedGuidValidator("ConditionArea", "BmObjectGuids")] }),
      Visible: [WF.ActionState.NA],
      Mandatory: [WF.ActionState.No],
      Enabled: [WF.ActionState.Yes],
      WFID: [null]
    });
    this.f = this.form.controls;
    this.#bmControl = this.f.BMID;
    this.#bmogControl = this.f.BMOGNAM;
    this.#levelControl = this.f.CondLevel.get("ConditionLevel");
    this.#areaControl = this.f.Area.get("ConditionArea");
    this.controls = [];
    this.checkByKey = "selected";
    this.#selectedStates = [];
    this.#selectedStages = [];
    this.#selectedBmos = [];
    this.#selectedDmogs = [];
    this.#selectedDmos = [];
    this.#selectedTriggers = [];
    this.#selectedAreas = [];
    this.#selectedLevels = [];
    this.#filterConfig = {
      columns: [
        { key: "DmoName", displayValue: "Data Model Object Name", type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: "ConditionExpression", displayValue: "Expression", type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: "ComparisonValue", displayValue: "Comparison Value", validators: [Validators.required] },
        { key: "Operator", displayValue: "Logical Operator", type: ListColumnType.Dropdown, validators: [Validators.required] }
      ],
      checkbox: true,
      actions: {
        add: true,
        delete: true,
        edit: true
      },
      defaultValues: {
        ConditionExpression: primitiveArrayToList(["equal", "not equal"]),
        Operator: primitiveArrayToList(["OR", "AND"]),
        DmoName: this.controlChange(this.#bmControl).pipe(map((_) => this.#bmControl.value), switchMap((v) => v ? this.wfApi.getDmosByBM(v?.key || v) : of([])), map((list) => list.map((dmo) => ({
          key: dmo.GlobalID,
          value: dmo.DispName,
          parent: dmo.GroupName
        }))))
      }
    };
    this.uniqueWithGUID = (item) => item.GUID;
    this.displayLevelWith = (item) => item["States"] || item["WFOSNAM"];
    this.displayAreaWith = (item) => item["BMONAME"] || item["WFONAME"];
    this.onSelectedLevelGuids = (items) => {
      this.#levelControl.value === "State" ? this.#selectedStates = items : this.#selectedStages = items;
      this.#selectedLevels = items;
      this.f.CondLevel.get("StageStateGuids").patchValue(this.#selectedLevels);
    };
    this.onSelectedAreaGuids = (items) => {
      const area = this.#areaControl.value;
      if (area === "BusinessModelObject") {
        this.#selectedBmos = items;
      } else if (area === "DataModelGroup") {
        this.#selectedDmogs = items;
      } else if (area === "DataModelObject") {
        this.#selectedDmos = items;
      } else if (area === "Trigger") {
        this.#selectedTriggers = items;
      }
      this.#selectedAreas = items;
      this.f.Area.get("BmObjectGuids").patchValue(this.#selectedAreas);
    };
    this.#getBmogs = () => timer(1).pipe(switchMap((_) => this.controlChange(this.#bmControl)), tap((v) => !v && this.#bmogControl.setValue(null)), switchMap((v) => v ? this.wfApi.getBMOGsByBMId(v?.key || v) : of([])), map((list) => arrayToList(list, "BMOGID", "BMOGNAME")));
    this.#getLevelAssociations$ = () => {
      const stages$ = this.wfApi.getStageList(this.wfId).pipe(map((res) => this.#configureAssociations(res, this.#selectedStages)));
      const states$ = this.wfApi.getStateList(this.wfId).pipe(map((res) => this.#configureAssociations(res, this.#selectedStates)));
      return this.controlChange(this.#levelControl).pipe(filter((v) => !!v), switchMap((level) => level === "Stage" ? stages$ : states$), tap((_) => {
        if (this.#levelControl.value === "Stage") {
          this.#selectedLevels = this.#selectedStages;
        } else {
          this.#selectedLevels = this.#selectedStates;
        }
        this.#levelControl.parent.get("StageStateGuids").patchValue(this.#selectedLevels);
      }));
    };
    this.#getAreaAssociations$ = () => {
      const updateAreaGuids = (selectedAreas) => {
        this.#selectedAreas = selectedAreas;
        this.#areaControl.parent.get("BmObjectGuids").patchValue(this.#selectedAreas);
      };
      const handleArea = (bmId, bmogName, area) => {
        switch (area) {
          case "BusinessModelObject":
            return this.wfApi.getBmoList(bmId, bmogName).pipe(map((res) => this.#configureAssociations(res, this.#selectedBmos)), tap((_) => updateAreaGuids(this.#selectedBmos)));
          case "DataModelGroup":
            return this.wfApi.getDmogList(bmId, bmogName).pipe(map((res) => this.#configureAssociations(res, this.#selectedDmogs)), tap((_) => updateAreaGuids(this.#selectedDmogs)));
          case "DataModelObject":
            return this.wfApi.getDmoList(bmId, bmogName).pipe(map((res) => this.#configureAssociations(res, this.#selectedDmos)), tap((_) => updateAreaGuids(this.#selectedDmos)));
          case "Trigger":
            return this.wfApi.getTriggerList(bmId, bmogName).pipe(map((res) => this.#configureAssociations(res, this.#selectedTriggers)), tap((_) => updateAreaGuids(this.#selectedTriggers)));
          default:
            return of([]);
        }
      };
      const stream$ = combineLatest([
        this.controlChange(this.#bmControl).pipe(map((v) => v?.key || v)),
        this.controlChange(this.#bmogControl).pipe(map((v) => v?.value || v)),
        this.controlChange(this.#areaControl)
      ]);
      return stream$.pipe(switchMap(([bmId, bmogName, area]) => {
        if (bmId && bmogName && area) {
          return handleArea(bmId, bmogName, area);
        }
        this.initSelectedAreas();
        this.f.Area.get("BmObjectGuids").reset();
        return of(null);
      }));
    };
    this.#configureAssociations = (all, selected) => {
      const updatedAll = all.map((item) => {
        const selectedIndex = selected.findIndex((s) => s.GUID === item.GUID);
        if (selectedIndex > -1) {
          item[this.checkByKey] = true;
          selected[selectedIndex] = item;
        }
        return item;
      });
      return [updatedAll, selected];
    };
  }
  ngOnInit() {
    this.initSelectedLevels();
    this.initSelectedAreas();
    this.initForm();
    this.initControls();
    this.levelAssociations$ = this.#getLevelAssociations$();
    this.areaAssociations$ = this.#getAreaAssociations$();
  }
  initForm() {
    return __async(this, null, function* () {
      const toPatch = {
        Name: this.data?.Name,
        Version: this.data?.Version || this.version,
        Description: this.data?.Description,
        Status: this.#status.find((s) => s.key === this.data?.Status) || this.#status[1],
        BMID: this.#list.find((bm) => bm.key === this.data?.BMID) || null,
        BMOGNAM: this.data?.BMOGNAM,
        CondLevel: {
          ConditionLevel: this.data?.CondLevel?.ConditionLevel,
          StageStateGuids: this.#selectedLevels
        },
        Area: {
          ConditionArea: this.data?.Area?.ConditionArea,
          BmObjectGuids: this.#selectedAreas
        },
        Visible: this.data?.Visible || WF.ActionState.NA,
        Mandatory: this.data?.Mandatory || WF.ActionState.No,
        Enabled: this.data?.Enabled || WF.ActionState.Yes,
        WFID: this.wfId
      };
      this.form.patchValue(toPatch);
      this.f.Filter = toFormArray(this.data?.Filter, { addCheckbox: this.#filterConfig.checkbox, required: true });
    });
  }
  initControls() {
    this.controls = [
      new ObjectControl({ label: "Condition Name", name: "Name", required: true, readonly: !!this.data }),
      new ObjectControl({ name: "Version", readonly: true }),
      new ObjectControl({ name: "Status", type: "dropdown", required: true, options: of(this.#status) }),
      new ObjectControl({
        name: "BMID",
        label: "Business Model",
        required: true,
        readonly: !!this.data,
        type: "dropdown",
        options: of(this.#list)
      }),
      new ObjectControl({
        name: "BMOGNAM",
        label: "View",
        required: true,
        type: "dropdown",
        options: this.#getBmogs(),
        show: this.controlChange(this.#bmControl)
      }),
      new ObjectControl({ name: "Description", label: "Long Description", type: "textarea" }),
      new ObjectControl({
        name: "ConditionLevel",
        label: "Condition Level",
        class: "span-12",
        type: "radio",
        required: true,
        group: this.form.get("CondLevel"),
        options: of(["Stage", "State"])
      }),
      new ObjectControl({ name: "Filter", label: "Filters", type: "list", config: this.#filterConfig, class: "span-12" }),
      new ObjectControl({
        name: "ConditionArea",
        label: "Condition Area",
        required: true,
        type: "radio",
        options: of(this.#areas),
        class: "span-12",
        group: this.form.get("Area"),
        show: this.controlChange(this.#bmogControl)
      }),
      new ObjectControl({ name: "Enabled", type: "radio", options: of(enumToList(WF.ActionState)), class: "span-4" }),
      new ObjectControl({ name: "Mandatory", type: "radio", options: of(enumToList(WF.ActionState)), class: "span-4" }),
      new ObjectControl({ name: "Visible", type: "radio", options: of(enumToList(WF.ActionState)), class: "span-4" })
    ];
  }
  initSelectedLevels() {
    const guids = this.data?.CondLevel?.StageStateGuids?.split(",") || [];
    this.#selectedLevels = guids.map((guid) => ({ GUID: guid }));
    if (this.data?.CondLevel?.ConditionLevel === "Stage") {
      this.#selectedStages = this.#selectedLevels;
    } else {
      this.#selectedStates = this.#selectedLevels;
    }
  }
  initSelectedAreas() {
    const guids = this.data?.Area?.BmObjectGuids?.split(",") || [];
    const area = this.data?.Area?.ConditionArea;
    this.#selectedAreas = guids.map((guid) => ({ GUID: guid }));
    this.#selectedBmos = [];
    this.#selectedDmogs = [];
    this.#selectedDmos = [];
    this.#selectedTriggers = [];
    if (area === "BusinessModelObject") {
      this.#selectedBmos = this.#selectedAreas;
    } else if (area === "DataModelGroup") {
      this.#selectedDmogs = this.#selectedAreas;
    } else if (area === "DataModelObject") {
      this.#selectedDmos = this.#selectedAreas;
    } else if (area === "Trigger") {
      this.#selectedTriggers = this.#selectedAreas;
    }
  }
  #getBmogs;
  #getLevelAssociations$;
  #getAreaAssociations$;
  #configureAssociations;
  controlChange(control) {
    return control.valueChanges.pipe(startWith(control.value));
  }
  onSubmit() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    const v = this.form.value;
    const payload = __spreadProps(__spreadValues({}, v), {
      Area: __spreadProps(__spreadValues({}, v.Area), {
        BmObjectGuids: this.#selectedAreas.map((a) => a.GUID).toString()
      }),
      BMID: v.BMID?.key || v.BMID,
      BMOGNAM: v.BMOGNAM?.value || v.BMOGNAM,
      CondID: this.data?.CondID || "",
      CondLevel: __spreadProps(__spreadValues({}, v.CondLevel), {
        StageStateGuids: this.#selectedLevels.map((l) => l.GUID).toString()
      }),
      Filter: this.f.Filter.value.map((f) => __spreadProps(__spreadValues({}, f), {
        ConditionExpression: f.ConditionExpression?.key || f.ConditionExpression,
        DmoName: f.DmoName?.value || f.DmoName,
        DmoId: f.DmoName?.key || f.DmoId,
        Operator: f.Operator?.key || f.Operator
      })),
      Status: v.Status?.key || v.Status
    });
    this.ref.close(payload);
  }
  static {
    this.\u0275fac = function WfConditionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfConditionDetailComponent)(\u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfConditionDetailComponent, selectors: [["app-wf-condition-detail"]], inputs: { wfId: "wfId", version: "version", data: "data", bmList: "bmList" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 3, consts: [[1, "popup"], [1, "popup__header"], [4, "ngIf"], [1, "popup__close"], [1, "fas", "fa-times-circle", "fa-fw", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "double-column", "mt-3"], [4, "ngFor", "ngForOf"], [1, "popup__actions"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "parentForm", "submitted", "config", 4, "ngIf"], [3, "parentForm", "submitted", "config"], [1, "span-12", 3, "select", "checkBy", "uniqueWith", "displayWith", "items", "associatedItems"]], template: function WfConditionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, WfConditionDetailComponent_h2_2_Template, 2, 0, "h2", 2)(3, WfConditionDetailComponent_h2_3_Template, 2, 0, "h2", 2);
        \u0275\u0275elementStart(4, "span", 3)(5, "i", 4);
        \u0275\u0275listener("click", function WfConditionDetailComponent_Template_i_click_5_listener() {
          return ctx.ref.close();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, WfConditionDetailComponent_form_6_Template, 18, 24, "form", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.data);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      NgForOf,
      ObjectControlComponent,
      AssociationComponent,
      AsyncPipe,
      SlicePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfConditionDetailComponent, { className: "WfConditionDetailComponent", filePath: "src\\app\\admin\\wf\\components\\wfconditions\\wf-condition-detail\\wf-condition-detail.component.ts", lineNumber: 30 });
})();
var selectedGuidValidator = (radio, guids) => {
  return (group) => {
    const radioControl = group.get(radio);
    const guidControl = group.get(guids);
    const val = guidControl.value;
    if (val && Array.isArray(val) && val.length) {
      radioControl.setErrors(null);
      return null;
    }
    radioControl.setErrors({ required: "This is a required field" });
  };
};

// src/app/admin/wf/components/wfconditions/baseGrid.ts
var import_lodash = __toESM(require_lodash());
var BaseGrid = class _BaseGrid {
  constructor(elRef) {
    this.recordsCountLoading = false;
    this.recordsCount = -1;
    this.dateTimeTypes = ["DateEditBox", "DateWithCalendar", "CreatedDate", "LastUpdatedDate", "StaticDateBox", "CreatedDateTime", "LastUpdatedDateTime", "DateTimeZone", "CRTDON", "MODFON", "DateTimeBox"];
    this.specialConditions = ["NULL", "NOT_NULL"];
    this.SelectedRecordIds = [];
    this.SortColumn = "-1";
    this.SortOrder = "-1";
    this.showActionCol = false;
    this.columns = [];
    this.filters = {};
    this._bodyData = {};
    this.hideFooter = false;
    this.showItemLoading = false;
    this.selectedAll = false;
    this.selectedAll$ = new BehaviorSubject(false);
    this.keyColumn = "TRNSCTNID";
    this.gridConfig = {};
    this.TableInfo = {
      PageNumber: -1,
      PageSize: -1,
      Recordes: -1,
      PageCount: -1
    };
    this.sortColumnName = "-1";
    this.isDefaultView = false;
    this.activeStateFilter = [];
    this.selectedDmoFilter = { All: "All" };
    this.selectedCustomFilter = "Custom Filter(s)";
    this.selectedAllMyRecordFilter = "All Record";
    this.colSpan = 0;
    this.viewList = [];
    this.DMOField = [];
    this.DMOData = {};
    this.CustomFilter = {};
    this.ColumnData = {};
    this.ColumnDataSource = {};
    this.submitted = false;
    this.model = {};
    this.HasGlobalSearch = true;
    this.IsSubProcess = false;
    this.HideDeleteActionIcon = false;
    this.HideDisplayName = false;
    this.ShowBulkUpdateButton = false;
    this.ChildCustomfilters = {};
    this.dateFormat = environment.Setting.dateFormat;
    this.dateTimeFormat = environment.Setting.dateTimeFormat;
    this.dateTimeFormat2 = environment.Setting.dateTimeFormat2;
    this.calender = ["DateEditBox", "DateWithCalendar", "StaticDateBox"];
    this.systemDateTime = ["CRTDON", "MODFON"];
    this.currencyDmos = [];
    this.percentDmos = [];
    this.colorCode = ["ColorCodeStatus"];
    this.textBox = ["TextBox", "UrlTextBox", "PhoneTextBox", "EmailEditBox"];
    this.dropDown = ["DropDownList", "CountryList", "USAStateList"];
    this.dropDownWithCheckbox = ["CheckBoxList", "RadioButtonList", "MultiSelectDropDownList", "ListBox"];
    this.roleType = ["RoleType"];
    this.newRow = {};
    this.dmoMapping = {};
    this.CanAddNewRow = false;
    this.TriggerName = "";
    this.metricsData = {};
    this.IsViewAllow = false;
    this.IsBulkTriggerAllow = false;
    this.IsBulkUpdateAllow = false;
    this.IsBulkUploadAllow = false;
    this.IsChangeLogAllow = false;
    this.IsCopyAllow = false;
    this.IsDeletionAllow = false;
    this.IsExcelAllow = false;
    this.IsNewEntryAllow = false;
    this.IsInLnEditAllow = false;
    this.IsNotesAllow = false;
    this.IsNotificationAllow = false;
    this.IsPDFAllow = false;
    this.IsOtherAPICall = false;
    this.tableDataOther = [];
    this.isFinilised = false;
    this.IsDrillDown = false;
    this.IsBulkRevertAllow = false;
    this.IsAssociateProgramAllowed = false;
    this.IsAssignMarkupAllowed = false;
    this.IsBulkAssociateProducts = false;
    this.IsBulkAssociateProgram = false;
    this.IsUpdateProductPriceAllowed = false;
    this.currentResponse = null;
    this.tableData = [];
    this.cachedData = [];
    this.dropdownList = [];
    this.selectedItems = [];
    this.IsResizing = false;
    this.filterForms = {};
    this.elRef = elRef;
  }
  arrayOne(n = 0) {
    if (n > 0) {
      return Array(n);
    }
    return [];
  }
  ngOnInit() {
    this.callOnInit();
    this._bodyData = {
      ProcessName: this.ProcessName,
      PageSize: this.PageSize,
      PageNumber: +this.PageNumber,
      SortColumn: this.SortColumn,
      SortOrder: this.SortOrder,
      TimeZone: this.TimeZone,
      ColumnList: this.ColumnList,
      GridFilters: this.LstGridFilter
    };
    if (this.IsSubProcess) {
      this._bodyData.ParentTransactionId = decodeURIComponent(this.ParentTransactionId);
    }
    if (this.ProcessName === "" || this.ProcessName === "commissionadjustment") {
      this.openLinkFromUrl();
    } else {
      this.getGridConfigData();
    }
    const el = this.elRef.nativeElement.querySelector("#tableHeadRow");
    window.addEventListener("mouseup", (event) => {
      this.mouseUp(event);
    });
    el.addEventListener("mousemove", (event) => {
      this.mouseMove(event);
    });
    el.addEventListener("mousedown", (event) => {
      this.mouseDown(event);
    });
  }
  setPagination(data) {
    this.TableInfo.PageSize = this._bodyData.PageSize;
    this.TableInfo.Recordes = this.recordsCount > -1 ? this.recordsCount : +data.RecordsCount;
    this.TableInfo.PageNumber = parseInt(data.PageNumber, 10) + 1;
    this.TableInfo.PageCount = Math.ceil(parseInt(this.TableInfo.Recordes, 10) / parseInt(this._bodyData.PageSize, 10));
    this.TableInfo.Start = (parseInt(data.PageNumber, 10) <= 0 ? 0 : parseInt(data.PageNumber, 10)) * this._bodyData.PageSize + 1;
    this.TableInfo.End = this.TableInfo.PageNumber * this._bodyData.PageSize > this.TableInfo.Recordes ? this.TableInfo.Recordes : this.TableInfo.PageNumber * this._bodyData.PageSize;
  }
  onPageChange(action) {
    if (action === "prev") {
      this._bodyData.PageNumber = +this._bodyData.PageNumber - 1 > -1 ? +this._bodyData.PageNumber - 1 : this.TableInfo.PageCount - 1;
    } else if (action === "next") {
      this._bodyData.PageNumber = +this._bodyData.PageNumber + 1 < this.TableInfo.PageCount ? +this._bodyData.PageNumber + 1 : 0;
    }
    this.getGridData();
  }
  sortDefault() {
    this.onSort(this.SortColumn, this.SortOrder);
  }
  sortColumn(columnName) {
    let sortOrder = "asc";
    if (this._bodyData.SortColumn === columnName && this._bodyData.SortOrder === "asc") {
      sortOrder = "desc";
    }
    this.onSort(columnName, sortOrder);
  }
  isEmptyObject(obj) {
    return Object.keys(obj).length > 0 ? false : true;
  }
  onSort(columnName, order) {
    const htmlObj = this.elRef.nativeElement.querySelector(".grid-filter-wrap .show");
    if (htmlObj) {
      htmlObj.classList.toggle("show");
    }
    if (columnName && order) {
      this._bodyData.SortColumn = columnName;
      this.sortColumnName = this.gridConfigData.Columns[columnName].DisplayName;
      this._bodyData.SortOrder = order;
    } else {
      this._bodyData.SortColumn = this.SortColumn;
      this._bodyData.SortOrder = this.SortOrder;
    }
    this.getGridData();
    sessionStorage.setItem(this.ProcessName + "gridsort", JSON.stringify({
      column: this._bodyData.SortColumn,
      displayName: this.sortColumnName,
      order: this._bodyData.SortOrder
    }));
  }
  onFilter(form, columnName, filterType, value, dataType = void 0) {
    this.submitted = true;
    let filter2 = {};
    this._bodyData.PageNumber = 0;
    if (filterType === "Global_Search") {
      if (form.globalSearch.value === "") {
        delete this.filters[filterType + "~$~" + columnName];
      } else {
        filter2 = {
          GridConditions: [
            {
              Condition: "CONTAINS",
              ConditionValue: form.globalSearch.value
            }
          ],
          DataField: columnName,
          LogicalOperator: "Or",
          FilterType: filterType
        };
      }
    } else if (filterType === "DMO_Filter") {
      if (dataType === "MultiSelectDropDownList") {
        filter2 = {
          DataField: `${columnName}_val`,
          LogicalOperator: "Or",
          FilterType: "DMO_Filter",
          //DataType: dataType,
          GridConditions: [
            { Condition: "CONTAINS", ConditionValue: value }
          ]
        };
      } else if (dataType === "KeyValueSearchBox") {
        filter2 = {
          GridConditions: [
            {
              Condition: "CONTAINS",
              ConditionValue: value.indexOf("(") > -1 ? value.split("(")[0].replace(")", "").trim() : value
            }
          ],
          DataField: columnName + "_val",
          LogicalOperator: "Or",
          FilterType: "DMO_Filter",
          DataType: "KeyValueSearchBox"
        }, this.selectedDmoFilter[columnName] = value;
      } else {
        if (value === "All") {
          delete this.filters[filterType + "~$~" + columnName.GUID];
          this.selectedDmoFilter = { All: "All" };
        } else {
          filter2 = {
            GridConditions: [
              {
                Condition: "CONTAINS",
                ConditionValue: value
              }
            ],
            DataField: columnName,
            LogicalOperator: "Or",
            FilterType: "DMO_Filter"
          };
          this.selectedDmoFilter[columnName] = value;
        }
      }
    } else if (filterType === "State_Filter") {
      if (columnName === "All") {
        for (const item of form) {
          delete this.filters[filterType + "~$~" + item];
        }
        this.activeStateFilter = [];
      } else if (this.activeStateFilter.indexOf(columnName) > -1) {
        this.activeStateFilter.splice(this.activeStateFilter.indexOf(columnName), 1);
        delete this.filters[filterType + "~$~" + columnName];
      } else {
        filter2 = {
          GridConditions: [
            {
              Condition: "EQUAL",
              ConditionValue: columnName
            }
          ],
          DataField: columnName,
          LogicalOperator: "Or",
          FilterType: "State_Filter"
        };
        this.activeStateFilter.push(columnName);
      }
    } else if (filterType === "Stage_Filter") {
      if (columnName === "All") {
        for (const item of form) {
          if (filterType === "Stage_Filter") {
            delete this.filters[filterType + "~$~" + item.GUID];
          } else {
            delete this.filters[filterType + "~$~" + item];
          }
        }
        this.activeStateFilter = [];
      } else if (this.activeStateFilter.indexOf(columnName.DisplayName) > -1) {
        this.activeStateFilter.splice(this.activeStateFilter.indexOf(columnName.DisplayName), 1);
        const conditions = this.filters[filterType + "~$~" + columnName.GUID].GridConditions;
        this.filters[filterType + "~$~" + columnName.GUID].GridConditions = conditions.filter((c) => c.ConditionValue !== columnName.DisplayName);
        if (this.filters[filterType + "~$~" + columnName.GUID].GridConditions.length === 0) {
          delete this.filters[filterType + "~$~" + columnName.GUID];
        }
      } else {
        filter2 = {
          GridConditions: [
            {
              Condition: "EQUAL",
              ConditionValue: columnName.DisplayName
            }
          ],
          DataField: columnName.GUID,
          LogicalOperator: "Or",
          FilterType: "Stage_Filter"
        };
        this.activeStateFilter.push(columnName.DisplayName);
      }
    } else if (filterType === "Custom_Filter") {
      if (value === "Custom Filter(s)") {
        delete this.filters[filterType + "~$~" + columnName];
      } else {
        filter2 = {
          GridConditions: [
            {
              ConditionValue: value
            }
          ],
          DataField: value,
          LogicalOperator: "Or",
          FilterType: "Custom_Filter"
        };
      }
      this.selectedCustomFilter = value;
    } else if (filterType === "Column_Filter") {
      if (!this.validate(form, columnName)) {
        return;
      }
      value = {};
      value.submitted = true;
      this.elRef.nativeElement.querySelector(".grid-filter-wrap .show").classList.toggle("show");
      if (dataType === "CheckBoxList" || dataType === "RadioButtonList" || dataType === "DropDownList" || dataType === "ColorCodeStatus") {
        filter2 = {
          GridConditions: [],
          DataField: columnName,
          FilterType: "Column_Filter"
        };
      } else if (dataType === "MultiSelectDropDownList") {
        filter2 = {
          GridConditions: [],
          DataField: `${columnName}_val`,
          LogicalOperator: "Or",
          FilterType: "Column_Filter",
          DataType: dataType
        };
      } else {
        filter2 = {
          GridConditions: [],
          DataField: columnName,
          LogicalOperator: form.logicalOpt.value,
          FilterType: "Column_Filter"
        };
      }
      const allInput = form.getElementsByTagName("input");
      let hasCheck = false;
      for (const input of allInput) {
        if (input.type === "checkbox" && input.checked === true) {
          if (input.value === "EMPTY") {
            filter2.GridConditions.push({
              Condition: "NULL",
              ConditionValue: "NULL"
            });
            filter2.GridConditions.push({
              Condition: "EMPTY",
              ConditionValue: "EMPTY"
            });
          } else if (input.value === "NOT_EMPTY") {
            filter2.GridConditions.push({
              Condition: "NOT_NULL",
              ConditionValue: "NOT_NULL"
            });
            filter2.GridConditions.push({
              Condition: "NOT_EMPTY",
              ConditionValue: "NOT_EMPTY"
            });
          } else {
            filter2.GridConditions.push({
              Condition: "CONTAINS",
              ConditionValue: input.value
            });
          }
          hasCheck = true;
        }
      }
      if (!hasCheck) {
        if (form.filterListValue && form.filterListValue.value !== "") {
          filter2.GridConditions.push({
            Condition: "CONTAINS",
            ConditionValue: form.filterListValue.value
          });
        }
      }
    } else if (filterType === "All_Filter") {
      if (value === "MyRecord") {
        filter2 = {
          GridConditions: [
            {
              ConditionValue: "My Record"
            }
          ],
          FilterType: value
        };
        this.selectedAllMyRecordFilter = "My Record";
      } else {
        this.selectedAllMyRecordFilter = "All Record";
        delete this.filters[filterType + "~$~" + columnName];
      }
    } else if (filterType === "CustomListFilter") {
      if (this.selectedItems.length > 0) {
        filter2 = {
          DataField: columnName,
          FilterType: "Column_Filter",
          LogicalOperator: "Or",
          GridConditions: []
        };
        this.selectedItems.forEach((item) => {
          filter2.GridConditions.push({ Condition: "CONTAINS", ConditionValue: item.text });
        });
      } else {
        this.onFilterClear(columnName, filterType);
      }
    }
    const [cond1, val1] = [form?.ConditionOpt1?.value, form?.filterValue1?.value];
    const [cond2, val2] = [form?.ConditionOpt2?.value, form?.filterValue2?.value];
    const conditions1 = this.handleFilterConditions(cond1, val1, filterType, dataType);
    const conditions2 = this.handleFilterConditions(cond2, val2, filterType, dataType);
    filter2?.GridConditions?.push(...conditions1, ...conditions2);
    if (filterType === "Column_Filter" && dataType === "KeyValueSearchBox") {
      const specialConditions = ["NULL", "NOT_NULL"];
      if (specialConditions.some((cond) => [cond1, cond2].includes(cond))) {
        filter2.LogicalOperator = "And";
      }
    }
    if (filter2 && Object.keys(filter2).length !== 0) {
      if (filterType === "Stage_Filter") {
        if (this.filters[filterType + "~$~" + columnName.GUID]) {
          this.filters[filterType + "~$~" + columnName.GUID].GridConditions.push(...filter2.GridConditions);
        } else {
          this.filters[filterType + "~$~" + columnName.GUID] = filter2;
        }
      } else if (filterType === "DMO_Filter") {
        if (dataType === "MultiSelectDropDownList") {
          this.filters[`${filterType}~$~${columnName}_val`] = filter2;
        } else {
          this.filters[filterType + "~$~" + columnName] = filter2;
        }
      } else if (filterType === "Column_Filter" && dataType === "KeyValueSearchBox") {
        const valGuid = columnName + "_VAL";
        const valFilter = __spreadValues({}, filter2);
        valFilter.DataField = valGuid;
        this.filters[`${filterType}~$~${columnName}`] = filter2;
        this.filters[`${filterType}~$~${valGuid}`] = valFilter;
      } else {
        if (filter2.GridConditions.length > 0)
          this.filters[filterType + "~$~" + columnName] = filter2;
      }
    }
    this.getGridData({ recordsCountLoading: true });
    sessionStorage.setItem(sessionStorage.getItem("processName") + "gridFlters", JSON.stringify(this.filters));
  }
  handleFilterConditions(cond, val, filterType, dataType) {
    const gridConditions = [];
    if (this.specialConditions.includes(cond)) {
      const emptyCondition = cond === "NULL" ? "EMPTY" : "NOT_EMPTY";
      if (filterType === "Column_Filter" && dataType === "KeyValueSearchBox") {
        gridConditions.push(this.generateCondition(emptyCondition, emptyCondition, dataType));
      } else {
        gridConditions.push(this.generateCondition(cond, cond, dataType));
        if (dataType && this.dateTimeTypes.indexOf(dataType) == -1) {
          gridConditions.push(this.generateCondition(emptyCondition, emptyCondition, dataType));
        }
      }
    } else {
      if (val) {
        if (dataType && this.dateTimeTypes.indexOf(dataType) > -1) {
          const format = this.dateTimeTypes.includes(dataType) ? "MM/dd/yyyy HH:mm:ss" : "MM/dd/yyyy HH:mm:ss";
          val = this.convertToSystemDataAndTime(val, format, 0, cond, this.ProcessName !== "NAG_Margin");
        }
        gridConditions.push(this.generateCondition(cond, val, dataType));
      }
    }
    return gridConditions;
  }
  generateCondition(condition, val, dataType) {
    return {
      Condition: condition,
      ConditionValue: val,
      dataType,
      RowValue: val
    };
  }
  showSelectedFilter(dmoGuid) {
    return !dmoGuid.endsWith("_KEY") && !dmoGuid.endsWith("_VAL");
  }
  FilterList(itemValue) {
    const item = itemValue.GridConditions;
    let dataType = item.map((e) => e.dataType).join(",");
    let displayText = "";
    if (dataType && ["Global_Search", "CreatedDateTime", "LastUpdatedDateTime", "DateTimeZone", "CRTDON", "MODFON", "DateTimeBox", "DateEditBox", "DateWithCalendar", "CreatedDate", "LastUpdatedDate", "StaticDateBox"].indexOf(dataType) > -1) {
      const conditions = item.map((e) => e.RowValue).join(",");
      if (conditions === "NOT_NULL") {
        displayText = "Not Null";
      } else if (conditions === "NULL") {
        displayText = "Null";
      } else {
        displayText = conditions;
      }
    } else {
      const conditions = item.map((e) => e.ConditionValue).join(",");
      if (conditions === "NOT_NULL,NOT_EMPTY") {
        displayText = "Not Empty";
      } else if (conditions === "NULL,EMPTY") {
        displayText = "Empty";
      } else {
        const x = item.map((e) => e.ConditionValue);
        x.forEach((el, idx) => {
          if (el === "NULL" || el === "EMPTY") {
            x[idx] = "Empty";
          } else if (el === "NOT_NULL" || el === "NOT_EMPTY") {
            x[idx] = "Not Empty";
          }
        });
        displayText = [...new Set(x)].join(",");
      }
    }
    return displayText;
  }
  selectedDmoFilterValue(item) {
    let guid = item.GUID;
    if (item.Type === "MultiSelectDropDownList") {
      guid = `${item.GUID}_val`;
    }
    return !this.selectedDmoFilter[guid] ? item.DisplayName : this.selectedDmoFilter[guid];
  }
  validate(form, guid) {
    const colForm = this.filterForms[guid];
    const [cond1, val1, checklist] = [colForm.ConditionOpt1, colForm.filterValue1, form?.checklist];
    return !!val1 || this.specialConditions.includes(cond1) || !!checklist;
  }
  onFilterClear(columnName, filterType, item = void 0, dataType) {
    const recordsCountLoading = filterType !== "sort";
    this._bodyData.PageNumber = 0;
    if (filterType === "sort") {
      this._bodyData.SortColumn = "-1";
      sessionStorage.removeItem(this.ProcessName + "gridsort");
    }
    if (filterType === "Global_Search") {
      this.filters = {};
      if (this._bodyData.GridFilters)
        this._bodyData.GridFilters[0].GridConditions[0].ConditionValue = "";
      const globalSearch = this.elRef.nativeElement.querySelector("#globalSearch");
      globalSearch.value = "";
      delete this.filters[filterType + "~$~" + columnName];
      delete this.filters[filterType + "~$~" + columnName + "_VAL"];
    } else if (filterType === "DMO_Filter") {
      if (item && item.value["DataType"] === "KeyValueSearchBox") {
        delete this.filters[filterType + "~$~" + columnName.replace("_val", "")];
      } else {
        delete this.filters[filterType + "~$~" + columnName];
      }
      this.selectedDmoFilter = { All: "All" };
    } else if (filterType === "State_Filter") {
      if (columnName === "All") {
        this.activeStateFilter = [];
      } else if (this.activeStateFilter.indexOf(columnName) > -1) {
        this.activeStateFilter.splice(this.activeStateFilter.indexOf(columnName), 1);
        delete this.filters[filterType + "~$~" + columnName];
      }
    } else if (filterType === "Stage_Filter") {
      const foundFilter = this.StageFilter.find((filter2) => filter2.DisplayName === columnName);
      if (columnName === "All") {
        this.activeStateFilter = [];
      } else if (foundFilter) {
        this.activeStateFilter.splice(this.activeStateFilter.indexOf(foundFilter.DisplayName), 1);
        delete this.filters[filterType + "~$~" + foundFilter.GUID];
      }
    } else if (filterType === "Custom_Filter") {
      delete this.filters[filterType + "~$~Custom Filter(s)"];
      this.selectedCustomFilter = "Custom Filter(s)";
    } else if (filterType === "Column_Filter") {
      dataType = item?.value?.DataType || item?.value?.GridConditions[0]?.dataType || dataType;
      let guid = columnName;
      if (dataType === "KeyValueSearchBox") {
        guid = columnName.split("-")[0];
      } else if (dataType === "MultiSelectDropDownList") {
        guid = columnName.split("_")[0];
      }
      this.ColumnData[guid] && this.removeColumnDataFilters(guid);
      this.resetFilterForm(dataType, guid);
      const query = this.elRef.nativeElement.querySelector(".grid-filter-wrap .show");
      if (query) {
        query.classList.toggle("show");
      }
      const form = this.elRef.nativeElement.querySelector("#frm_" + columnName);
      if (form && form.logicalOpt != void 0) {
        if (form.logicalOpt.type === "hidden") {
          const allInput = form.getElementsByTagName("input");
          for (let i = 0; i < allInput.length; i++) {
            if (allInput[i].type === "checkbox" && allInput[i].checked === true) {
              allInput[i].checked = false;
            }
          }
        } else {
          this.submitted = true;
        }
      }
      delete this.filters[filterType + "~$~" + columnName];
      delete this.filters[filterType + "~$~" + columnName + "_VAL"];
      if (item && item.value["DataType"] === "MultiSelectDropDownList") {
        delete this.filters[filterType + "~$~" + columnName.replace("_val", "")];
      }
      if (columnName === "naginavdtdtr") {
        if (this.filters[`CustomListFilter~$~naginavdtdtr`]) {
          delete this.filters[`CustomListFilter~$~naginavdtdtr`];
          this.selectedItems = [];
        }
      }
      if (columnName === "nagpravdeptid") {
        if (this.filters && item && item.key) {
          delete this.filters[item.key];
          this.selectedItems = [];
        }
      }
    } else if (filterType === "MyRecord") {
      delete this.filters["All_Filter~$~"];
    }
    delete this.filters[filterType + "~$~" + columnName];
    this._bodyData.PageNumber = 0;
    if (this.ColumnDataSource[columnName])
      this.ColumnData[columnName] = this.ColumnDataSource[columnName].filter(() => true);
    this.getGridData({ recordsCountLoading });
  }
  goToPage(pageNumberControl) {
    if (pageNumberControl.value <= this.TableInfo.PageCount) {
      this._bodyData.PageNumber = pageNumberControl.value - 1;
      this.getGridData();
    }
  }
  changePageSize(pageSizeControl) {
    this._bodyData.PageNumber = 0;
    this._bodyData.PageSize = pageSizeControl;
    this.getGridData();
  }
  checkIfAllSelected(event, item) {
    item.selected = event.currentTarget.checked;
    const recordID = item[this.keyColumn].toString();
    if (item.selected) {
      this.SelectedRecordIds.push(recordID);
    } else {
      const ItemIndex = this.SelectedRecordIds.indexOf(recordID);
      this.SelectedRecordIds.splice(ItemIndex, 1);
    }
    this.selectedAll = this.SelectedRecordIds.length === this.TableInfo.Recordes;
    this.selectedAll$.next(this.selectedAll);
  }
  SelectAllCheckBox(that) {
    return __async(this, null, function* () {
      const checked = that.currentTarget.checked;
      this.selectedAll$.next(checked);
      if (checked) {
        const ids = this.tableData.map((record) => record[this.keyColumn]);
        const allIds = Array.from(new Set(this.SelectedRecordIds.concat(ids)));
        this.updateSelectedIds(allIds);
      } else {
        this.updateSelectedIds();
      }
    });
  }
  updateSelectedIds(ids = []) {
    this.SelectedRecordIds = ids;
    this.selectedAll = ids.length > 0;
    this.toggleAllVisibleRecords(this.selectedAll);
  }
  columnFilterApplied(item) {
    return !!(this.filters[`Column_Filter~$~${item.datafield}`] || this.filters[`Column_Filter~$~${item.datafield}_val`]);
  }
  BindData(data) {
    this.currentResponse = data;
    this.tableData = data.Data;
    if (!this.selectedAll) {
      this.cachedData = (0, import_lodash.unionBy)(this.cachedData, this.tableData, this.keyColumn);
    }
    this.tableData.forEach((item) => {
      if (this.SelectedRecordIds.includes(item[this.keyColumn].toString())) {
        item.selected = true;
      }
    });
    if (this.selectedAll) {
      this.toggleAllVisibleRecords(true);
    }
    this.setPagination(data);
    this.setTooltips(this.elRef.nativeElement.querySelector("#gridView"));
    this.hideFooter = true;
    sessionStorage.setItem("gridPage", JSON.stringify({ pageSize: this._bodyData.PageSize, pageNumber: this.TableInfo.PageNumber }));
  }
  drop(event) {
    if (event.previousIndex !== event.currentIndex) {
      const columnList = this.gridConfigData.ColumnList.split(",");
      moveItemInArray(columnList, event.previousIndex, event.currentIndex);
      this.gridConfigData.ColumnList = columnList.join(",");
      this.setConfigData(this.gridConfigData);
      this.saveGridConfig();
    }
  }
  toggleAllVisibleRecords(check) {
    this.selectedAll = check;
    this.tableData.forEach((record) => record.selected = check);
  }
  // Column Resize
  // @HostListener('#ProcessName:mousemove', ['$event'])
  mouseMove(e) {
    if (this.IsResizing && e.buttons == 1) {
      if (this.curCol) {
        const diffX = e.pageX - this.pageX;
        if (this.nxtCol) {
          this.nxtCol.style.width = this.nxtColWidth - diffX + "px";
        }
        this.curCol.style.width = this.curColWidth + diffX + "px";
      }
    }
  }
  mouseDown(e) {
    if (e.currentTarget.classList.contains("fa-grip-lines-vertical")) {
      this.IsResizing = true;
      this.curCol = e.target.parentElement.parentElement;
      this.nxtCol = this.curCol.nextElementSibling;
      this.pageX = e.pageX;
      this.curColWidth = this.curCol.offsetWidth;
      if (this.nxtCol) {
        this.nxtColWidth = this.nxtCol.offsetWidth;
      }
    }
  }
  mouseUp(_) {
    if (this.IsResizing) {
      let flg = false;
      this.IsResizing = false;
      this.setTooltips(document.activeElement);
      const colElements = document.querySelectorAll("th.ColResize");
      const totalWidth = document.querySelector("table#gridView").clientWidth;
      colElements.forEach((el) => {
        if (el.id && el.id in this.gridConfigData.Columns) {
          const width = `${el["offsetWidth"] * 100 / totalWidth}%`;
          if (this.gridConfigData.Columns[el.id].Width && width !== this.gridConfigData.Columns[el.id].Width) {
            flg = true;
          }
          if (el.id in this.gridConfigData.Columns)
            this.gridConfigData.Columns[el.id].Width = width;
        }
      });
      if (flg && this.ProcessName === this.UrlProcessName) {
        this.saveGridConfig();
      }
      this.curCol = void 0;
      this.nxtCol = void 0;
      this.pageX = void 0;
      this.nxtColWidth = void 0;
      this.curColWidth = void 0;
    }
  }
  setTooltips(event) {
    setTimeout(() => {
      const arr = event.querySelectorAll(".content-text");
      arr.forEach((elem) => {
        if (elem.offsetWidth < elem.scrollWidth) {
          elem.setAttribute("title", elem.textContent);
        } else {
          elem.removeAttribute("title");
        }
      });
    }, 500);
  }
  /* Since adding this type of filters is done by directly manipulating the dom in onFilter
      I'm doing here the same to remove them.
      NOTE: This solution is fragile and will break as soon as someone changes id on the forms
      NOTE: This is a UI fix. It does not affect actual filters sent through the api.
  */
  removeColumnDataFilters(guid) {
    const form = document.getElementById(`frm_${guid}`);
    const checkboxes = form?.querySelectorAll('input[type="checkbox"]');
    checkboxes?.forEach((input) => input.checked = false);
  }
  ClearFilters() {
    this.columns.forEach((col) => this.resetFilterForm(col.dataType, col.datafield));
    Object.keys(this.ColumnData).forEach((guid) => this.removeColumnDataFilters(guid));
    this.selectedItems = [];
    this.sortColumnName = this._bodyData.SortColumn = this.SortColumn;
    this._bodyData.SortOrder = this.SortOrder;
    const globalSearch = this.elRef.nativeElement.querySelector("#globalSearch");
    if (globalSearch) {
      globalSearch.value = "";
    }
    this.filters = {};
    this.selectedDmoFilter = { All: "All" };
    this.activeStateFilter = [];
    this.selectedCustomFilter = "All";
    this.selectedAllMyRecordFilter = "All Record";
    this._bodyData.PageNumber = 0;
    this._bodyData.GridFilters = void 0;
    this.getGridData({ recordsCountLoading: true });
  }
  getDateForCalender(value) {
    const d = value ? new Date(value) : /* @__PURE__ */ new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
  }
  convertToSystemDataAndTime(value, format, zone, ConditionOption, toUTC = true) {
    if (value == null || value === "") {
      return null;
    }
    try {
      let modifiedDateValue;
      let dateArray = value.split("/");
      if (environment.Setting.dateFormat === "dd/MM/yyyy") {
        modifiedDateValue = dateArray[1].toString() + "/" + dateArray[0].toString() + "/" + dateArray[2].toString();
      } else {
        modifiedDateValue = dateArray[0].toString() + "/" + dateArray[1].toString() + "/" + dateArray[2].toString();
      }
      let timeZone;
      if (!zone) {
        timeZone = this.TimeZone;
      } else {
        timeZone = zone;
      }
      const d = new Date(modifiedDateValue);
      const localOffset = timeZone * 6e4;
      if (["GREATER_THAN", "LESS_THAN_OR_EQUAL"].indexOf(ConditionOption) > -1) {
        d.setHours(23, 59, 59, 999);
      } else {
        d.setHours(0, 0, 0, 0);
      }
      let localTime;
      if (toUTC) {
        localTime = d.getTime() + localOffset;
      } else {
        if (this.ProcessName === "NAG_Margin") {
          d.setSeconds(d.getSeconds() + 1);
        }
        localTime = d.getTime();
      }
      d.setTime(localTime);
      return formatDate(d, format, "en-US");
    } catch (error) {
      console.log("Datevalue-" + value + "error" + error);
      return "";
    }
  }
  convertToLocalDataAndTime(value, format, zone) {
    if (value == null || value === "") {
      return null;
    }
    try {
      const d = new Date(value);
      let timeZone;
      if (!zone) {
        timeZone = this.TimeZone;
      } else {
        timeZone = zone;
      }
      const localOffset = timeZone * -6e4;
      const localTime = d.getTime();
      d.setTime(localTime);
      return formatDate(d, format, "en-US");
    } catch (error) {
      return "";
    }
  }
  callOnInit() {
  }
  hideBulkUpdateButton() {
    if (this.SelectedRecordIds.length === 0) {
      return true;
    } else {
      if (this.ShowBulkUpdateButton) {
        return false;
      } else {
        return !this.IsBulkUpdateAllow;
      }
    }
  }
  mask(rawValue) {
    if (rawValue && rawValue.replace(/\D+/g, "").length > 10) {
      return ["+", /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    } else {
      return ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
    }
  }
  getDropDownData(dmoGuid, isKeyValuePair = false) {
    this.BindDMODropDown(dmoGuid);
    if (isKeyValuePair) {
      for (const key in this.DMOData[dmoGuid]) {
        if (this.DMOData[dmoGuid].hasOwnProperty(key) && typeof this.DMOData[dmoGuid][key].DataValue !== "object") {
          const DataValue = {
            key: "",
            value: ""
          };
          const element = this.DMOData[dmoGuid][key].DataValue;
          const splitObj = element.split("~");
          DataValue.key = splitObj[0];
          DataValue.value = splitObj[1];
          delete this.DMOData[dmoGuid][key].DataValue;
          this.DMOData[dmoGuid][key].DataValue = DataValue;
        }
      }
    }
  }
  CheckedSelected(savedValue, newValue) {
    let val = "";
    if (savedValue.indexOf("!") > 0) {
      val = savedValue.split("!");
    } else {
      val = savedValue.split("|");
    }
    return val.indexOf(newValue) > -1;
  }
  // Check contract id exists or not
  isExists(item) {
    if (item.ContractId) {
      return true;
    } else {
      return false;
    }
  }
  resetFilterForm(type, guid) {
    const isDate = this.dateTimeTypes.includes(type);
    if (!this.filterForms[guid]) {
      this.filterForms[guid] = {};
    }
    const form = this.filterForms[guid];
    form.filterValue1 = null;
    form.filterValue2 = null;
    form.ConditionOpt1 = isDate ? "GREATER_THAN" : "CONTAINS";
    form.ConditionOpt2 = isDate ? "GREATER_THAN" : "CONTAINS";
    form.logicalOpt = "OR";
  }
  static {
    this.\u0275fac = function BaseGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseGrid)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BaseGrid });
  }
};

// src/app/admin/wf/components/wfconditions/wfconditions.component.ts
function WfconditionsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function WfconditionsComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275elementEnd();
  }
}
function WfconditionsComponent_ng_container_12_div_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 43);
    \u0275\u0275listener("click", function WfconditionsComponent_ng_container_12_div_1_li_4_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterClear(ctx_r2._bodyData.SortColumn, "sort"));
    });
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.sortColumnName + "(" + ctx_r2._bodyData.SortOrder + ")");
  }
}
function WfconditionsComponent_ng_container_12_div_1_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 43);
    \u0275\u0275listener("click", function WfconditionsComponent_ng_container_12_div_1_ng_container_5_li_1_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterClear(item_r7.value.DataField, "Global_Search", item_r7));
    });
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.FilterList(item_r7.value));
  }
}
function WfconditionsComponent_ng_container_12_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WfconditionsComponent_ng_container_12_div_1_ng_container_5_li_1_Template, 5, 1, "li", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showSelectedFilter(item_r7.value.DataField));
  }
}
function WfconditionsComponent_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2, "Selected Filter(s) :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, WfconditionsComponent_ng_container_12_div_1_li_4_Template, 5, 1, "li", 11)(5, WfconditionsComponent_ng_container_12_div_1_ng_container_5_Template, 2, 1, "ng-container", 41);
    \u0275\u0275pipe(6, "keyvalue");
    \u0275\u0275elementStart(7, "li", 42);
    \u0275\u0275listener("click", function WfconditionsComponent_ng_container_12_div_1_Template_li_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.ClearFilters());
    });
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Remove All Filter(s)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2._bodyData.SortColumn != "-1");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 2, ctx_r2.filters));
  }
}
function WfconditionsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WfconditionsComponent_ng_container_12_div_1_Template, 10, 4, "div", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2._bodyData.SortColumn != "-1" || !ctx_r2.isEmptyObject(ctx_r2.filters));
  }
}
var WfconditionsComponent = class _WfconditionsComponent extends BaseGrid {
  setConfigData(gridConfig) {
    throw new Error("Method not implemented.");
  }
  getGridData(opts) {
    this.LoadData(this.WFId);
  }
  BindDMODropDown(dmoGuid) {
    throw new Error("Method not implemented.");
  }
  getGridConfigData(gridviewName) {
    throw new Error("Method not implemented.");
  }
  getDMOsMapping() {
    throw new Error("Method not implemented.");
  }
  saveGridConfig() {
    throw new Error("Method not implemented.");
  }
  openLinkFromUrl() {
    throw new Error("Method not implemented.");
  }
  constructor(modalService, wfApi, wfsrvc, userDetail, router, columnFilter, route, toastr, msg, fb, elRef) {
    super(elRef);
    this.modalService = modalService;
    this.wfApi = wfApi;
    this.wfsrvc = wfsrvc;
    this.userDetail = userDetail;
    this.router = router;
    this.columnFilter = columnFilter;
    this.route = route;
    this.toastr = toastr;
    this.msg = msg;
    this.fb = fb;
    this.elRef = elRef;
    this.showSelectedFilters = true;
    this.conditionStatus = "1";
    this.filters = {};
    this.backsImageUrl = UtilService.getUrlForImage("/assets/styles/images/back-icon-black.png");
    this._bodyData = {
      ProcessName: this.ProcessName,
      PageSize: this.PageSize,
      PageNumber: +this.PageNumber,
      SortColumn: this.SortColumn,
      SortOrder: this.SortOrder,
      TimeZone: this.TimeZone,
      ColumnList: this.ColumnList,
      GridFilters: this.LstGridFilter
    };
    this.pageNum = -1;
    this.filterValue1 = "";
    this.filterValue2 = "";
    this.ConditionOpt1 = "";
    this.ConditionOpt2 = "";
    this.logicalOpt = "OR";
    this.HeaderMap = {
      config: {
        header: {
          columns: [
            {
              objectKey: "Condition_Name",
              displayName: "Condition Name",
              width: "15%"
            },
            {
              objectKey: "Version",
              displayName: "Version",
              width: "15%"
            },
            {
              objectKey: "Status",
              displayName: "Status",
              width: "15%"
            },
            {
              objectKey: "Description",
              displayName: "Description",
              width: "15%"
            },
            {
              objectKey: "Date_Created",
              displayName: "Date Added",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail.TimeZone.toString(),
              width: "20%"
            },
            {
              objectKey: "Date_Modifed",
              displayName: "Date Modified",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: this.userDetail.TimeZone.toString(),
              width: "20%"
            }
          ],
          action: {
            Edit: true,
            Delete: true,
            Checkbox: true
          },
          columnFilter: []
        },
        paging: true
      }
    };
    this.wfosId = null;
    this.wfoid = null;
    this.isComingStageandState = false;
  }
  ngOnInit() {
    this.processName = sessionStorage.getItem("AppName");
    if (this.route.snapshot.queryParams.id && this.wfosId && this.wfoid) {
      this.WFId = this.route.snapshot.queryParams.id;
      this.LoadData(this.WFId, this.wfosId, this.wfoid);
    } else {
      if (this.route.snapshot.queryParams.id) {
        this.WFId = this.route.snapshot.queryParams.id;
        this.LoadData(this.WFId, this.wfosId, this.wfoid);
      }
    }
    this.WFCondForm = this.fb.group({
      ChangeStatus: ["-1"]
    });
  }
  showSelectedFilter(dmoGuid) {
    return !dmoGuid.endsWith("_KEY") && !dmoGuid.endsWith("_VAL");
  }
  pageChange(event) {
    this._bodyData.PageNumber = event.currentPage;
    this._bodyData.PageSize = event.pageSize;
    this.GetWFCondtionGrid(this.WFId, this._bodyData);
  }
  onGlobalFilter(form, columnName, filterType, value, dataType = void 0) {
    if (form.globalSearch.value != "") {
      this.submitted = true;
      let filter2 = {};
      this.filters = {};
      this._bodyData.PageNumber = 0;
      if (filterType === "Global_Search") {
        if (form.globalSearch.value === "") {
          delete this.filters[filterType + "~$~" + columnName];
        } else {
          filter2 = {
            GridConditions: [{
              Condition: "CONTAINS",
              ConditionValue: form.globalSearch.value
            }],
            DataField: columnName,
            LogicalOperator: "Or",
            FilterType: filterType
          };
        }
      }
      this.generateFilter();
      this._bodyData.GridFilters.push(filter2);
      this.GetWFCondtionGrid(this.WFId, this._bodyData);
      this.filters = this._bodyData.GridFilters;
    }
  }
  actionClick(event) {
    switch (event.action) {
      case "Filter_Header":
        this.bindColumnFilterDdl(event);
        break;
      case "Edit":
        this.openNewFormViewPopup(event.rowIndex);
        break;
      case "Filter_Click":
        if (!this.validate(event)) {
          break;
        }
        this._bodyData.PageNumber = 1;
        let filter2 = {};
        filter2 = {
          GridConditions: [],
          DataField: event.colData.objectKey,
          LogicalOperator: event.filterData.logicalOpt.Value === "Select..." ? "" : event.filterData.logicalOpt.Value,
          FilterType: "Column_Filter"
        };
        if (event.filterData.filterValue1 && event.filterData.filterValue1 !== "") {
          filter2.GridConditions.push({
            Condition: event.filterData.ConditionOpt1.Value,
            ConditionValue: event.filterData.filterValue1
          });
        }
        if (event.filterData.filterValue2 && event.filterData.filterValue2 !== "") {
          filter2.GridConditions.push({
            Condition: event.filterData.ConditionOpt2.Value,
            ConditionValue: event.filterData.filterValue2
          });
        }
        this.generateFilter();
        this._bodyData.GridFilters.push(filter2);
        sessionStorage.setItem("grid_filter", JSON.stringify(this._bodyData));
        event.ColumnFilterDropdown.close();
        if (filter2 && Object.keys(filter2).length !== 0) {
          this.filters["Column_Filter" + event.colData.objectKey] = filter2;
        }
        this.GetWFCondtionGrid(this.WFId, this._bodyData);
        break;
      case "asc":
        this._bodyData.SortColumn = event.colData.objectKey;
        this._bodyData.SortOrder = "asc";
        this.sortColumnName = event.colData.objectKey;
        sessionStorage.setItem("grid_filter", JSON.stringify(this._bodyData));
        this.GetWFCondtionGrid(this.WFId, this._bodyData);
        break;
      case "desc":
        this._bodyData.SortColumn = event.colData.objectKey;
        this._bodyData.SortOrder = "desc";
        this.sortColumnName = event.colData.objectKey;
        sessionStorage.setItem("grid_filter", JSON.stringify(this._bodyData));
        this.GetWFCondtionGrid(this.WFId, this._bodyData);
        break;
      case "Remove Sort":
        this._bodyData.SortColumn = "-1";
        this._bodyData.SortOrder = "desc";
        sessionStorage.setItem("grid_filter", JSON.stringify(this._bodyData));
        this.LoadData(this.WFId);
        break;
      case "Delete":
        this.showDeleteMessage(event.rowIndex);
        break;
      case "FilterClear_Click":
        delete this.filters["Column_Filter~$~" + event.colData.objectKey];
        sessionStorage.removeItem("grid_filter");
        this.generateFilter();
        event.ColumnFilterDropdown.close();
        break;
      case "SpecialCharClick":
        window.open(`/admin/wf/wfd?processName =${this.processName}&VerNo=${this.dataSource[event.rowIndex].Ver}`, "_blank");
        break;
      case "Link":
        this.router.navigate([`/admin/wf/wfcondition`, "lmk"]);
        break;
    }
  }
  LoadData(id, state, stage) {
    if (this.isComingStageandState) {
      this.wfsrvc.GetWFConditions(id, this.wfosId, this.wfoid).subscribe((x) => {
        this.dataSource = x.Data;
      }, (err) => {
        console.log(err);
      });
    } else {
      this.wfsrvc.GetWFConditions(id).subscribe((x) => {
        this.dataSource = x.Data;
      }, (err) => {
        console.log(err);
      });
    }
  }
  GetWFCondtionGrid(id, body) {
    this.wfsrvc.GetWFCondtionGrid(id, body).subscribe((x) => {
      this.dataSource = x.Data;
    }, (err) => {
      console.log(err);
    });
  }
  routeBack() {
    window.history.back();
  }
  bindColumnFilterDdl(item) {
    let type = "";
    if (item.colData.dataType === "Date") {
      type = "DateEditBox";
    }
    const FilterData = this.columnFilter.GetFilterByDataType(type);
    if (FilterData.length === 0) {
    } else {
      const key = Object.keys(item.colData)[0];
      this.HeaderMap.config.header.columnFilter["colData_" + item.colIndex] = FilterData;
      this.ConditionOpt1 = item.ConditionOpt1;
      this.ConditionOpt2 = item.ConditionOpt2;
    }
  }
  OnRowClick(event) {
    return;
  }
  openNewFormViewPopup(index) {
    return __async(this, null, function* () {
      const bmList = yield this.wfApi.getBMList(this.WFId).toPromise();
      const condId = typeof index === "number" ? this.dataSource[index].ConditionID : null;
      const data = condId ? yield this.wfApi.getWFConditionDetail(condId).toPromise() : null;
      const modal = this.msg.showComponent(WfConditionDetailComponent, {
        wfId: this.WFId,
        bmList,
        data,
        version: sessionStorage.getItem("WFVersion")
      });
      const res = yield modal.result;
      if (res) {
        this.wfApi.upsertCondition(res).subscribe((_) => this.LoadData(this.WFId));
      }
    });
  }
  showDeleteMessage(Index) {
    if (Index > -1) {
      this.ConditionID = this.dataSource[Index].ConditionID;
      this.msg.showMessage("Warning", {
        header: "Delete Selected Item",
        body: "Do you want to delete selected item?",
        btnText: "Delete",
        checkboxText: "Yes, delete selected item",
        isDelete: true,
        isNewDesign: true,
        callback: this.deleteSelectedConfirmation,
        caller: this
      });
    } else {
      this.msg.showMessage("Warning", { body: "At least one record must be selected in order to delete" });
    }
  }
  deleteSelectedConfirmation(modelRef, Caller) {
    Caller.wfsrvc.DeleteWFCondition(Caller.ConditionID).subscribe((result) => {
      if (result === "Record(s) Deleted successfully" || result.message === "Record(s) Deleted successfully") {
        Caller.LoadData(Caller.WFId);
        Caller.toastr.success(result.message);
        modelRef.close();
      }
    }, (error) => {
      if (!!error.error && error.error === "Record(s) Cannot Be Deleted") {
        Caller.toastr.warning("Record(s) Cannot Be Deleted");
      }
    });
  }
  ChangeStatus(event) {
    const ConditionID = this.dataSource.filter((x) => x.selected === true).map((x) => x.ConditionID).join(",");
    if (event.target.value !== "-1" && !!ConditionID) {
      this.wfsrvc.ChangeWfConditionStatus(ConditionID, event.target.value).subscribe((result) => {
        if (result) {
          this.LoadData(this.WFId);
          this.WFCondForm.get("ChangeStatus").patchValue("-1");
          this.toastr.success("Status Changed successfully");
        }
      });
    } else {
      if (event.target.value !== "-1" && (ConditionID === void 0 || ConditionID === "")) {
        this.WFCondForm.get("ChangeStatus").patchValue("-1");
        this.toastr.warning("Please select at least one record.");
      }
    }
  }
  validate(event) {
    if (event.filterData.ConditionOpt1 && (event.filterData.ConditionOpt1.Value === "" || event.filterData.ConditionOpt1.Value === "Select...")) {
      return false;
    } else if (event.filterData.filterValue1 && event.filterData.filterValue1.Value === "") {
      return false;
    } else {
      return true;
    }
  }
  removeFilter(txtGlobal) {
    this.filters = [];
    txtGlobal.value = "";
    this.pageNum = 1;
    this.generateFilter();
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  generateFilter() {
    sessionStorage.removeItem("grid_filter");
    this._bodyData.GridFilters = [];
    this._bodyData.PageNumber = 1;
    Object.keys(this.filters).forEach((key) => {
      this._bodyData.GridFilters.push(this.filters[key]);
    });
    sessionStorage.setItem("grid_filter", JSON.stringify(this._bodyData));
  }
  onPaste(event, inputElement) {
    event.preventDefault();
    const pastedText = (event.clipboardData?.getData("text") || "").replace(/\s+/g, "");
    const start = inputElement.selectionStart || 0;
    const end = inputElement.selectionEnd || 0;
    const currentValue = inputElement.value;
    inputElement.value = currentValue.slice(0, start) + pastedText + currentValue.slice(end);
    const cursorPosition = start + pastedText.length;
    setTimeout(() => inputElement.setSelectionRange(cursorPosition, cursorPosition), 0);
  }
  static {
    this.\u0275fac = function WfconditionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfconditionsComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(WorkflowApiService), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(UserDetail), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ColumnFilterService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfconditionsComponent, selectors: [["app-wfconditions"]], inputs: { wfosId: "wfosId", wfoid: "wfoid", isComingStageandState: "isComingStageandState" }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 46, vars: 9, consts: [["gblFilterForm", ""], ["txtGlobal", ""], ["genericgridcomponent", ""], [1, "breadcrumbs", "p-3", 2, "background-color", "#fff"], [3, "click"], ["width", "20px", 2, "filter", "var(--plx-app-list-icon-filter)", 3, "src"], [1, "p-3"], [1, "mt-1", "mb-3", "mr-0.8"], ["type", "button", "class", "close close-custom", "aria-label", "Close", "style", "padding: 1rem 1rem; margin: -1rem -1rem 1rem auto;", 3, "click", 4, "ngIf"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-center"], [1, "display-name"], [4, "ngIf"], [1, "position-relative", "text-center", 3, "ngSubmit"], [1, "p-2"], [1, "wfMainGSearch"], [1, "globalSearchWrap"], [1, "position-relative"], ["id", "globalSearch", "placeholder", "Global Search", "type", "search", 3, "paste"], ["aria-label", "Search", "routerlink", "", "tabindex", "0", "type", "submit", 1, "btn-search", "search-icon-btn"], [1, "fas", "fa-search"], ["type", "button", 1, "btn", "btn-warning", "text-white", "open-popup-btn", "d-none", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-plus"], [1, "p-1"], [3, "formGroup"], [1, "table-filters-group"], [1, "button-group", "d-none", 2, "padding", "3px 5px"], ["name", "ChangeStatus", "formControlName", "ChangeStatus", 1, "btn", "btn-primary-special", "btn-small", 3, "change"], ["value", "-1"], ["value", "1"], ["value", "0"], [1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "18", "viewBox", "0 0 19 18", "fill", "none"], ["d", "M16.851 7.07143H11.0653V1.28571C11.0653 0.575759 10.4895 0 9.77958 0H8.49386C7.78391 0 7.20815 0.575759 7.20815 1.28571V7.07143H1.42243C0.712478 7.07143 0.136719 7.64719 0.136719 8.35714V9.64286C0.136719 10.3528 0.712478 10.9286 1.42243 10.9286H7.20815V16.7143C7.20815 17.4242 7.78391 18 8.49386 18H9.77958C10.4895 18 11.0653 17.4242 11.0653 16.7143V10.9286H16.851C17.561 10.9286 18.1367 10.3528 18.1367 9.64286V8.35714C18.1367 7.64719 17.561 7.07143 16.851 7.07143Z", "fill", "white"], ["type", "button", 1, "btn", "btn-primary-special", "btn-small", "my-1", "d-none", 2, "padding", "3px 5px", 3, "click"], [1, "grid"], [3, "pageChange", "actionClick", "rowClick", "dataSource", "headerMap", "itemsCount", "sNo", "pageNum"], ["type", "button", "aria-label", "Close", 1, "close", "close-custom", 2, "padding", "1rem 1rem", "margin", "-1rem -1rem 1rem auto", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], ["class", "tags-list ml-2", 4, "ngIf"], [1, "tags-list", "ml-2"], [1, "tags-list-label"], [4, "ngFor", "ngForOf"], [1, "resetFilter", 3, "click"], ["id", "a_otchannel", "href", "javascript:void(0);", 1, "icon-close", 3, "click"], [1, "fas", "fa-times"]], template: function WfconditionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "div", 3)(2, "a", 4);
        \u0275\u0275listener("click", function WfconditionsComponent_Template_a_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.routeBack());
        });
        \u0275\u0275element(3, "img", 5);
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "Back");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275template(8, WfconditionsComponent_button_8_Template, 2, 0, "button", 8);
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10);
        \u0275\u0275text(11, "WF Conditions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, WfconditionsComponent_ng_container_12_Template, 2, 1, "ng-container", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "form", 12, 0);
        \u0275\u0275listener("ngSubmit", function WfconditionsComponent_Template_form_ngSubmit_13_listener() {
          \u0275\u0275restoreView(_r1);
          const gblFilterForm_r8 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(ctx.onGlobalFilter(gblFilterForm_r8, "dmoName", "Global_Search", void 0));
        });
        \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "input", 17, 1);
        \u0275\u0275listener("paste", function WfconditionsComponent_Template_input_paste_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          const txtGlobal_r9 = \u0275\u0275reference(20);
          return \u0275\u0275resetView(ctx.onPaste($event, txtGlobal_r9));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 18);
        \u0275\u0275element(22, "i", 19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(23, "button", 20);
        \u0275\u0275listener("click", function WfconditionsComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openNewFormViewPopup(null));
        });
        \u0275\u0275element(24, "i", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div")(26, "div", 22);
        \u0275\u0275elementStart(27, "form", 23)(28, "div", 24)(29, "div", 25)(30, "select", 26);
        \u0275\u0275listener("change", function WfconditionsComponent_Template_select_change_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ChangeStatus($event));
        });
        \u0275\u0275elementStart(31, "option", 27);
        \u0275\u0275text(32, "Change Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 28);
        \u0275\u0275text(34, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 29);
        \u0275\u0275text(36, "Inactive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "button", 30);
        \u0275\u0275listener("click", function WfconditionsComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openNewFormViewPopup(null));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 31);
        \u0275\u0275element(39, "path", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "button", 33);
        \u0275\u0275listener("click", function WfconditionsComponent_Template_button_click_40_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ClearFilters());
        });
        \u0275\u0275text(41, "Remove Filter");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(42, "div", 22);
        \u0275\u0275elementStart(43, "div", 34)(44, "generic-grid", 35, 2);
        \u0275\u0275listener("pageChange", function WfconditionsComponent_Template_generic_grid_pageChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.pageChange($event));
        })("actionClick", function WfconditionsComponent_Template_generic_grid_actionClick_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.actionClick($event));
        })("rowClick", function WfconditionsComponent_Template_generic_grid_rowClick_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.OnRowClick($event));
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.backsImageUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.isComingStageandState);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showSelectedFilters);
        \u0275\u0275advance(15);
        \u0275\u0275property("formGroup", ctx.WFCondForm);
        \u0275\u0275advance(17);
        \u0275\u0275property("dataSource", ctx.dataSource)("headerMap", ctx.HeaderMap)("itemsCount", ctx.itemsCount)("sNo", false)("pageNum", ctx.pageNum);
      }
    }, dependencies: [NgIf, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgForm, GenericGridComponent, KeyValuePipe], styles: ["\n\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]   .grid-pad[_ngcontent-%COMP%]   col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.tableWrap[_ngcontent-%COMP%] {\n  overflow: visible;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]   .col-1-4[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0px;\n}\n.ColResize[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ColResize[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 5px;\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n  height: 100%;\n}\n.close-custom[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.open-popup-btn[_ngcontent-%COMP%] {\n  background-color: #255992;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 25px;\n  min-width: fit-content;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 767.99px) {\n  .open-popup-btn[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 8px;\n  }\n}\n.config-icon[_ngcontent-%COMP%] {\n  line-height: 0;\n  padding: 7px;\n  color: #4d4d51;\n  font-size: 20px;\n  cursor: pointer;\n}\n.tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tags-list-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 12px;\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border-radius: 20px;\n  padding: 2px 5px 2px 10px;\n  margin: 3px;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #d0021b;\n  color: #fff;\n  border-radius: 50%;\n  margin-left: 5px;\n  font-size: 11px;\n  padding: 2px;\n  width: 20px;\n}\n.tags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.resetFilter[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #eee;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n  margin: 5px;\n  text-align: center;\n  padding: 4px 10px 2px;\n  width: auto;\n  color: black;\n  border-bottom: 3px solid black;\n  text-decoration: none;\n  font-weight: bold;\n  letter-spacing: 0.43px;\n}\n.stateFilterGroup[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #4c9d01;\n  color: #4c9d01;\n}\n.table-filters-group[_ngcontent-%COMP%] {\n  display: flex;\n  height: 44px;\n  border-radius: 5px 5px 0 0;\n  background: #005996;\n  align-items: center;\n  justify-content: end;\n  margin: 8px 0;\n  padding: 10px;\n}\n@media (max-width: 768px) {\n  .table-filters-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.export-btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  display: inline-block;\n  height: 34px;\n  padding: 5px;\n  margin-left: 10px;\n  line-height: 28px;\n  text-decoration: none;\n  color: #5a5a5a;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.export-btns-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%] {\n  float: right;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f2f2f2;\n  border: 1px solid #cbcbcb;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  outline: none;\n  border-radius: 0px;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n.grid-filter-wrap[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn.calendar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 2px !important;\n  vertical-align: top;\n}\n.basicTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n.basicTable[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 126, 72, 0.1) !important;\n}\n.color-code[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: 0 2px 3px 0;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 30px;\n}\n.sListing2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-top: solid 1px #c3c3c3;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n@media (min-width: 992px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 1000px !important;\n  }\n}\n.checkboxMargin[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.list[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.drag-grip[_ngcontent-%COMP%] {\n  padding-right: 4px;\n  padding-top: 2px;\n  color: #ccc;\n  font-size: 12px;\n  cursor: move;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.btn-primary-special[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image:\n    linear-gradient(\n      to bottom,\n      #fff 0%,\n      #fff 100%);\n  border: 1px solid #ccc;\n  color: #333 !important;\n  border-radius: 5px;\n}\n.btn-small[_ngcontent-%COMP%] {\n  height: 26px;\n  padding: 0px 5px 0px 5px;\n  margin: 0px 0px 0px 10px;\n  font-size: 12px;\n  font-weight: 300;\n}\n.btnFltr[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  color: #fff;\n  background-color: #a6a6a6;\n  padding: 5px 10px;\n  margin: 0px 0px 10px 10px;\n  text-decoration: none !important;\n}\n.display-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  background: none;\n  border: none;\n}\n.wfMainGSearch[_ngcontent-%COMP%] {\n  width: auto;\n  float: none;\n}\n.search-icon-btn[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  z-index: 1;\n}\n/*# sourceMappingURL=wfconditions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfconditionsComponent, { className: "WfconditionsComponent", filePath: "src\\app\\admin\\wf\\components\\wfconditions\\wfconditions.component.ts", lineNumber: 30 });
})();

export {
  ElementType,
  EventDef,
  EventType,
  COLORS,
  isStateType,
  getShapeSize,
  isConnection,
  isCustomConnection,
  getElementStyle,
  getEventDef,
  WorkflowApiService,
  WfConditionDetailComponent,
  WfconditionsComponent
};
//# sourceMappingURL=chunk-RF35KVRW.js.map
