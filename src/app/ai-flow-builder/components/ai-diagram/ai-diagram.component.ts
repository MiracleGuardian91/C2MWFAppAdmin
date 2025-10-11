import { NgFor, NgIf } from '@angular/common';
import { AfterContentInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CompanyAssociationComponent } from '@app/admin/Shared/company-association/company-association.component';
import { GenerateXmlComponent } from '@app/admin/wf/wfd/components/generatexml/generatexml.component';
import { StateDetailComponent } from '@app/admin/wf/wfd/components/state-detail/state-detail.component';
import { TimerDetailComponent } from '@app/admin/wf/wfd/components/timer-detail/timer-detail.component';
import { TriggerConditionDetailComponent } from '@app/admin/wf/wfd/components/trigger-condition-detail/trigger-condition-detail.component';
import { TriggerDetailComponent } from '@app/admin/wf/wfd/components/trigger-detail/trigger-detail.component';
import { WorkflowDetailComponent } from '@app/admin/wf/wfd/components/workflow-detail/workflow-detail.component';
import { WFTriggerConditionDetail } from '@app/admin/wf/wfd/models';
import { ConnectionReconnectContext, ConnectionShape, ConnectionShapeWithProps, DiagramEl, ElementType, EventDef, StateShapeType, TriggerConditionConnection } from '@app/admin/wf/wfd/models/bpmn';
import { DetailConfig } from '@app/admin/wf/wfd/models/element-detail.class';
import { ElementsIds } from '@app/admin/wf/wfd/models/elements-ids.model';
import { Coordinates, MetaData, Stage, State, Trigger, TriggerCondition, Workflow } from '@app/admin/wf/wfd/models/wf.model';
import { BpmnService } from '@app/admin/wf/wfd/services/bpmn.service';
import { DiagramService } from '@app/admin/wf/wfd/services/diagram.service';
import { WFSaveResponse, WorkflowApiService } from '@app/admin/wf/wfd/services/workflow-api.service';
import { getEventDef, isStateType } from '@app/admin/wf/wfd/util/bpmn';
import { getTriggerType } from '@app/admin/wf/wfd/util/bridge';
import { constructId } from '@app/admin/wf/wfd/util/helpers';
import { AIFlowBuilderService } from '@app/ai-flow-builder/services/aiflow-builder.service';
import { ICompanyAssociatedWFObject, MessageService, WFAssociatedCompaniesPayload } from '@app/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { EntityDetailComponent } from '../entity-detail/entity-detail.component';
import { Title } from '@angular/platform-browser';
import { SharedData } from '@app/admin/wf/wfd/custom/share-data';
import { WebhookConfigComponent } from '@app/ai-flow-builder/page/webhook-config/webhook-config.component';

const t = ElementType;
interface WfosIdToWfoIdMap {
  [key: string]: string; // This defines a mapping of string keys to string values
}
@Component({
  selector: 'app-ai-diagram',
  standalone: true,
  imports: [     NgbDropdown,
        NgbDropdownToggle,
        NgIf,
        NgbDropdownMenu,
        NgFor,
        NgbDropdownItem,],
  templateUrl: './ai-diagram.component.html',
  styleUrl: './ai-diagram.component.scss'
})
export class AiDiagramComponent implements AfterContentInit, OnDestroy {
  @ViewChild('ref', { static: true }) private elDiagram: ElementRef;
  @Input() metadata: MetaData;
  @Output() workflowDeleted = new EventEmitter<boolean>();
  private running = true;
  public actionsVisible = true;
  public actionsDisabled = false;
  showWfdOnly = false; // Default state
   metadata$: Observable<MetaData>;
   private destroy$ = new Subject<void>();
   previousLength: number = 0;
   coordinatesChangePoints: Coordinates; // Store the points where the length changes
   previousCords: Coordinates;
  processName: any;
  IsRedoAllowed: boolean;
  IsUndoAllowed: boolean;
  reloadData: boolean = false; 

  EntityId: string ='' ;
  EntityType: string='' ;
  ActionName: string ='';
  ActionGroupId: string ='';
  ActionDetails: string ='';
  clearDetail:boolean=false;
  totalComponentLenth: number;
  keyColorArrayPrevious: [string, string | undefined][] = [];
  alertMsgTxt: string[] = [];
  trgConditionDetail: boolean = false;
  undoredoactive = false;
  constructor(
    private dialog: MatDialog,
    public service: DiagramService,
    public wfapi: WorkflowApiService,
    private formViewApi: FormViewApiService,
    private msg: MessageService,
    private cdr:ChangeDetectorRef,
    private route: ActivatedRoute,
    private bpmnService: BpmnService,
    readonly toastr: ToastrService,
    readonly titleService: Title,
    private readonly aiFlowBuilderService: AIFlowBuilderService,
    private readonly sharedData: SharedData
  ) {  

    this.registerEventHandlers();
  }


  private registerEventHandlers(): void {
    this.service.onUpdateElement
      .pipe(takeUntil(this.destroy$))
      .subscribe((el) => this.onUpdateElement(el));

    this.service.onCreateElement
      .pipe(takeUntil(this.destroy$))
      .subscribe((el) => this.onCreateElement(el));

    this.service.onDeleteElement
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => this.onDeleteElement(res));
  

    this.service.onDiagramChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((coords) => {

        if(this.ActionName==='Delete' ||!this.ActionName.trim()){
          this.EntityId=' ';
          this.EntityType=' ';
          this.ActionName=' ';
          this.ActionGroupId=' ';
        }
         
        const currentCordsdetail=Object.keys(coords);
        const previousCordsdetail = this.coordinatesChangePoints 
        ? Object.keys(this.coordinatesChangePoints) 
        : [];
        const storedEvent = this.getStoredEvent();
        let isUndoRedo=false;

        if (storedEvent !=="ElementMoved" && this.totalComponentLenth > currentCordsdetail.length || this.undoredoactive) {
          if(this.undoredoactive){
            isUndoRedo =true;  
          }
          if(this.ActionName !=="Edit"){
            this.ActionName = '';
           this.undoredoactive = false;
          }  
          
    
        } else if (!this.ActionName.trim()|| this.ActionName ==="FilledColor") {
          this.ActionName = 'ElementMoved';
        }
           
        const newKeyColorArray: [string, string | undefined][] = Object.entries(coords)
        .map(([key, value]) => [key, (value as any).color])
        .filter((entry): entry is [string, string] =>
          !!entry[1] && entry[1] !== 'none' && entry[1] !== ''
        );
      
        const hasColorChanged =
        this.keyColorArrayPrevious.length !== newKeyColorArray.length ||
        newKeyColorArray.some(([key, color]) => {
          const match = this.keyColorArrayPrevious.find(([prevKey]) => prevKey === key);
          return !match || match[1] !== color;
        });
      
      if (hasColorChanged) {
        this.keyColorArrayPrevious = newKeyColorArray;
        this.ActionName = "FilledColor";
      }

      if(isUndoRedo)
      {
         this.ActionName =''; 
      }
        this.totalComponentLenth = currentCordsdetail.length;
        const removedGateway = previousCordsdetail.some(
          item => item.includes("bpmn:ExclusiveGateway") && !currentCordsdetail.includes(item)
        );
        
        const removedCondition = previousCordsdetail.some(
          item => item.includes("Cond_") && !currentCordsdetail.includes(item)
        );
        
        if (removedGateway && removedCondition) {
          this.EntityType = 'diamond';
          this.ActionGroupId= Guid.raw() 
        } else if (removedGateway) {
          this.EntityType = 'diamond';
          this.ActionGroupId=Guid.raw() 
        } else if (removedCondition) {
          this.EntityType = 'TriggerCondition';
          this.ActionGroupId=Guid.raw() 
        }
        const currentLength = Object.keys(coords).length;
        // Check if the length has changed
        this.coordinatesChangePoints=coords;

        // if (this.previousLength > currentLength) {
         
        // }     
        this.previousLength = currentLength;  
        
        this.persistWorkflowDataArray();
        
        this.aiFlowBuilderService.updateAiFlow(this.metadata.Workflow.WFID, {
          ID: this.metadata.Workflow.WFID,
          FlowName: this.metadata.Workflow.FriendlyName,
          FlowDescription: this.metadata.Workflow.FriendlyName,
          CoordJson: { Coordinates: coords }
        }).subscribe({
          next: (response: any) => { 
           this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
          this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;
          },
          error: (error) => {
            console.error("Error saving diagram coordinates:", error);
          }
        });

        if(this.clearDetail){
          this.EntityId=' ';
          this.EntityType=' ';
          this.ActionName=' ';
          this.ActionGroupId=' ';
          this.ActionDetails=' ';
          this.clearDetail=false;
        }
        this.clearStoredEvent();
      });

    this.service.onReconnect
      .pipe(takeUntil(this.destroy$))
      .subscribe((context) => this.onConnectionReconnect(context));

    this.service.onRestoreElement
      .pipe(takeUntil(this.destroy$))
      .subscribe((element) => {
        this.wfapi.restoreElement(this.metadata.Workflow.WFID, element).subscribe();
      });
  }

  changeUndoRedo(id: string, type: string, Action: string) {

    type = type.replace('bpmn:', ''); 
    this.EntityId = id;
    this.ActionName = Action;
    this.ActionGroupId=Guid.raw();

    switch (type) {
      case 'Task':
        this.EntityType ='State';  
        break;
      case 'Participant':
        this.EntityType ='Pool'; 
        break; 
      case 'Lane':
        this.EntityType ='Stage';
        break;  
      case 'StartEvent':
        this.EntityType ='StartState';
        break;  
      case 'EndEvent':
        this.EntityType ='EndState'; 
        break; 
      case 'ExclusiveGateway':
        this.EntityType ='Gateway';
        this.clearDetail=true;
        break; 
      case 'SequenceFlow':
        this.EntityType ='Trigger';
        break;  
      case 'IntermediateCatchEvent':
        this.EntityType ='TriggerExtension';
        this.clearDetail=true;
        break; 
      case 'TimerEventDefinition' :
         this.EntityType ='Timer';
         this.clearDetail=true;
        break; 
      case 'Association':
        this.EntityType ='Association'; 
        break;
      case 'TextAnnotation':
        this.EntityType ='Annotation'; 
        this.clearDetail=true;
        break; 
      case 'SubProcess':
        this.EntityType ='SubProcess';
        break; 
      case 'label' :  
        this.EntityType ='Label';
        break; 
      default:
        this.EntityType = ''; 
        break; 
    }
  }

  deleteWfCall(ids: ElementsIds) {

    const deletedIds = {
      workflowIds: ids.workflowIds,
      stageIds: ids.stageIds,
      stateIds: ids.stateIds,
      triggerIds: ids.triggerIds,
      conditionIds: ids.conditionIds,
      PrevStageIds:[],
    };
  
    const deletedIdsString = JSON.stringify(deletedIds); // Convert object to string
    this.ActionName = 'Delete';
    this.ActionGroupId = (this.EntityType !== 'diamond' && this.EntityType !== 'TriggerCondition') ? Guid.raw() : this.ActionGroupId;
    
    // Determine EntityType
    this.EntityType =
      this.EntityType === 'diamond' ||  this.EntityType ==='TriggerCondition'
        ? this.EntityType
        : ids.stageIds?.[0]
        ? 'Stage'
        : ids.stateIds?.[0]
        ? 'State'
        : ids.triggerIds?.[0]
        ? 'Trigger'
        : '';
        this.persistWorkflowDataArray();
  
    this.wfapi
      .saveDiagramCoordinates(this.metadata.Workflow.WFID, this.coordinatesChangePoints, {
        EntityId: ids.stageIds[0] ?? ids.stateIds[0] ?? ids.triggerIds[0] ?? ids.conditionIds[0] ?? '',
        EntityType: this.EntityType,
        ActionName: this.ActionName,
        ActionGroupId: this.ActionGroupId,
        ActionDetails: deletedIdsString,
        SequenceNumber:this.getWorkflowValue(this.metadata.Workflow.WFID).toString()
      })
      .subscribe({
        next: (response: any) => {
          this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
          this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;
          
          // Reset values **after** successful API call
          this.resetValues();
        },
        error: (error) => {
          this.resetValues();
          console.error('Error saving diagram coordinates:', error);
        },
      });
  }
  
  // Helper method to reset values after API call
  private resetValues(): void {
    this.EntityId = '';
    this.EntityType = '';
    this.ActionName = '';
    this.ActionGroupId = '';
    this.ActionDetails = '';
    this.clearDetail = false;
  }
  
  

  private async onCreateElement(el: DiagramEl) {
    this.changeUndoRedo('',el.type,'Insert');
    try {
      const details = await this.getDetails(el, true);
      if (details) {
        const props = await this.openDialog({
          element: el,
          newElement: true,
          ...details,
        });

        // this.service.updateElementProperties(el, {});
        // if (props) {
        //   try {
           this.saveDetailsv2(el, props);      
        //     if (res.statuscode === 200) {
       
        //       this.clearDetail=true;   
        //       this.EntityId = res.result.ConditionId ?? res.result.TriggerId ?? res.result.WfoId ?? res.result.WfosId; 
        //     //  this.ActionDetails = res.result.TriggerId ? JSON.stringify(Object.keys(res.result.TrgConditions)) : '';
        //       this.ActionDetails = res.result.TriggerId
        //        ? JSON.stringify({
        //          workflowIds: [],
        //         stageIds: [],
        //         stateIds: [],
        //         PrevStageIds:[],
        //         triggerIds: [res.result.TriggerId], 
        //         conditionIds: Object.keys(res.result.TrgConditions ?? []).filter(key => key)
        //         })
        //        : '';
        //       // trg_cond
        //       this.handleSaveResponse(el, res, props);
        //     }
        //     // else {
 
        //     //   if(this.reloadData){
        //     //     this.reloadData=false;
        //     //   }
        //     //   this.clearDetail=true;
        //     //   this.service.deleteElement(el);
        //     // }
        //   } catch (_) {
        //     this.clearDetail=true;
        //     this.service.deleteElement(el);
        //   }
        //   this.clearDetail=true;
        // }
     
      }
    } catch (error) {
      console.log(error);
      this.service.undo();
    }
  }

  public async UndoRedo(functionality: string) {
      try {
          this.undoredoactive = true;
          if (functionality === 'Undo') {
              if (this.metadata.Workflow) {
                  this.wfapi.UndoWfdWorkflow(this.metadata.Workflow.WFID).pipe(
                      switchMap(() => this.loadWfData())
                  ).subscribe(metadata => {
                      this.mappingData(metadata);
                      this.refreshXML();
                  });
              }

          } else if (functionality === 'Redo') {
              this.wfapi.RedoWfdWorkflow(this.metadata.Workflow.WFID).pipe(
                  switchMap(() => this.loadWfData())
              ).subscribe(metadata => {
                  this.mappingData(metadata);
                  this.refreshXML();
              });
          }

      } catch (error) {
          console.error(`Error during ${functionality} operation:`, error);
      }
  }

  private loadWfData() {
    var processName: string;
    var verNo: string;
    this.route.queryParams.subscribe(params => {
     processName = params['processName'];
      verNo = params['VerNo'];
    });
    this.metadata$ = this.wfapi.getWorkflowDiagram(processName, verNo);
    return this.metadata$;
  }

  private mappingData(metadata) {
      this.metadata = metadata;
      
      this.IsRedoAllowed = !!this.metadata.Workflow.IsRedoAllowed;
      this.IsUndoAllowed = !!this.metadata.Workflow.IsUndoAllowed;

  }
  


private async onUpdateElement(el: DiagramEl) {
  let isExclusiveGateway;
   if( el.type === "bpmn:SequenceFlow"){
    isExclusiveGateway = el.source.type === "bpmn:ExclusiveGateway";
   }else{
    isExclusiveGateway=false
   }

  this.trgConditionDetail = isExclusiveGateway;
  let friendlyName = isExclusiveGateway
  ? el?.props?.Description ?? ''
  : el.type === 'bpmn:SequenceFlow'
    ? el.friendlyName ?? ''
    : el?.props?.FriendlyName ?? '';
  if (el.type === 'bpmn:IntermediateCatchEvent') {
    friendlyName = '';
  }


  const newElement = !el.props && el.type !== t.TriggerExtension;
  const details = await this.getDetails(el, newElement);
  if (!details) return;

  const props = await this.openDialog({ element: el, newElement, ...details });

  if (!props) return this.trgConditionDetail = false;

  const element = this.bpmnService.allElements;
  // this.updateElementProperties(el, props, props.EntityName);
  if(element.map(e => e.id).includes(props.EntityName)){
     this.service.updateElementProperties(el, {
        name: props.EntityName
      });
  }else{
    this.service.updateElementProperties(el, {
          id: props.EntityName,
          name: props.EntityName
        });
  }
  // await this.saveAndUpdateElement(el, props, newElement);
}

private updateElementProperties(el: DiagramEl, props: any, prev: any): void {
  const stateTypes = ["bpmn:Task", "bpmn:StartEvent", "bpmn:EndEvent", "bpmn:SubProcess"];
  if (stateTypes.includes(el.type)) {
    this.changeUndoRedo(el.props.WfosId, el.type, 'Edit');
  } else if (el.type === "bpmn:Lane") {
    this.changeUndoRedo(el.props.WfoId, el.type, 'Edit');
  } else if (el.type === "bpmn:SequenceFlow") {
    if (this.trgConditionDetail) {
      this.EntityId = props.conditionId;
      this.ActionName = 'Edit';
      this.ActionGroupId = Guid.raw();
      this.EntityType='TriggerCondition'
    } else {
      this.changeUndoRedo(el.props.TriggerId, el.type, 'Edit');
    }
  }else if(el.def==="bpmn:TimerEventDefinition"){
    this.changeUndoRedo('', el.def, 'Edit');
  }
   else {
    this.changeUndoRedo(el.id, el.type, 'Edit');
  }

  const UpdatedData = {
    workflowIds: [],
    stageIds: [],
    stateIds: [],
    PrevStageIds: [],
    triggerIds: [],
    conditionIds: [],
    PrevDispName: prev,
    CurrentDispName: this.trgConditionDetail ? props.conditionDescription : props.friendlyName,
  };
 

  this.ActionDetails = JSON.stringify(UpdatedData);
  this.clearDetail = true;

  el.props = el.props || {};
  el.props.FriendlyName = props.friendlyName;

  if (el.type === "bpmn:SequenceFlow") {
    el.friendlyName = this.trgConditionDetail ? props.conditionDescription : props.friendlyName;
    this.trgConditionDetail = false;
  }
}
  
  // private async saveAndUpdateElement(el: DiagramEl, props: any, newElement: boolean): Promise<void> {
  //   const saveResponse = await this.saveDetails(el, props).toPromise();
  
  //   if (el.type === "bpmn:SubProcess") {
  //     el.props.SubProcessName = saveResponse.result.SubProcessName;
  //     el.props.SubProcessWFVersionNo = saveResponse.result.SubProcessWFVersionNo;
  //   }
  
  //   if (!newElement) return;
  
  //   if (saveResponse.statuscode === 200) {
  //     this.handleSaveResponse(el, saveResponse, props);
  //   } else {
  //     this.service.deleteElement(el);
  //   }
  // }
  

  private async onDeleteElement(ids: ElementsIds) {
    const workflowId = this.metadata.Workflow.WFID;
    const stateIds = ids?.stateIds ?? []
    try {

      stateIds.forEach(id =>{
         firstValueFrom(this.aiFlowBuilderService.deleteAIFlowEntity(id));
      })
    
      if (ids.workflowIds.length > 0) {   
        this.workflowDeleted.emit(true);
      }

    } catch (_) {
      this.service.undo(); 
    }
 
  }

  private async onConnectionReconnect(ctx: ConnectionReconnectContext) {
    const {
      connection,
      hints: { docking },
    } = ctx;
    try {
      let res;
      let flow = connection;
      if (docking === 'source') {
        res = await this.getDetails(connection);
      } else {
        const condition = Object.values(connection.props.TrgConditions)[0];
        (flow as unknown) = {
          type: t.Trigger,
          id: constructId('Cond_', condition.Name),
          props: condition,
          source: { type: t.Gateway },
          target: connection.target,
        } as TriggerConditionConnection;
        res = await this.getDetails(flow);
      }
      if (res) {
        const { data, component } = res;
        const props = await this.openDialog({ element: flow, data, component });
        if (props) {
          // await this.saveDetails(flow, props).toPromise();
        } else {
          this.service.undo();
        }
      }
    } catch (error) {
      this.service.undo();
    }
  }

  private async onElementsMove(el: DiagramEl) {
    const res = await this.getDetails(el);
    if (res) {
      const props = await this.openDialog({ element: el, ...res });
      if (props) {
        // const res = await this.saveDetails(el, props).toPromise();
        // if (res.statuscode === 200) {
        //   this.handleSaveResponse(el, res, props);
        // } else {
        //   this.service.deleteElement(el);
        // }
      } else {
        this.service.undo();
      }
    }
  }

  /** THIS REQUIRES API CHANGES
   * SAVE RESPONSE MUST CONTAIN THE OBJECT CREATED
   */
  private handleSaveResponse(el: DiagramEl, res: WFSaveResponse, payload: any) {
    const props = { ...res.result };
    let id = props.Guid;
    if (
      el.type === t.Trigger &&
      (el.source.type === t.Gateway || el.source.type === t.TriggerExtension)
    ) {
      id = constructId('Cond_', payload.conditionName);
    }
    if (res.statuscode === 200) {
      if (el.type === t.Trigger) {
        const flow = el as ConnectionShapeWithProps;
        const { source, target } = flow;
        if (isStateType(source)) {
          // id = props.TriggerId;
          props.WfosId = (source.props as State).WfosId;
        } else if (
          source.type === t.Gateway ||
          source.type === t.TriggerExtension
        ) {
          // id = props.ConditionId;
          props.TriggerId = payload.triggerId;
        }

        let targetId = null;
        if (target.type === t.TriggerExtension) {
          const triggerType = getTriggerType(flow);
          targetId = constructId(triggerType, props.Guid);
        } else if (target.type === t.Gateway) {
          targetId = constructId(t.Gateway, props.Guid);
        }
        if (targetId) {
          this.service.updateElementProperties(target, { id: targetId });
        }
      } else if (el.type === t.TriggerExtension) {
        return;
      } else if (isStateType(el)) {
        // id = props.WfosId;
        props.WfoId = payload.wfoId;
      } else if (el.type === t.Stage) {
        // id = props.WfoId;
      }

      if (el.props) {
        (el as any).props = { ...el.props, ...props };
      } else {
        (el as any).props = { ...props, Status: payload.status };
      }

      const updateId = id !== el.id ? { id } : {};
      this.service.updateElementProperties(el, { ...updateId, props });
    }
  }

  public toggleActions() {
    this.actionsVisible = !this.actionsVisible;
  }

  private async openDialog(config: DetailConfig) {
    const ref = this.msg.showComponent(config.component, {
      workflow: this.metadata?.Workflow,
      config: config,
      ...config.data
    });

    return ref.result;
  }

  private async getDetails(element: DiagramEl, newElement?: boolean) {
    const props = element.props || ({} as any);
    this.sharedData.removeConnectionType();
    switch (element.type) {
      case t.Pool:
        return this._getWorkflowDetails(props, newElement);
      case t.Stage:
        return this._getStageDetails(props, newElement);
      case t.StartState:
      case t.State:
      case t.EndState:
      case t.SubProcess:
      case t.API:
      case t.DataSchema:
      case t.HumanInLoop:
      case t.LLM:
      case t.PromptVariable:
      case t.Scheduler:
      case t.SqlQuery:
      case t.Vector:
        return this._getStateDetails(element, newElement);
        
      case t.TriggerExtension: {
        const def = element.businessObject.eventDefinitions[0];
        const flow = element.incoming[0];
        if (flow && def?.$type === EventDef.Timer) {
          return this._getTriggerDetails(flow, newElement, true);
        }
        return null;
      }
      case t.Trigger:
        const flow = element as ConnectionShapeWithProps;
        if (
          flow.source.type === t.Gateway ||
          (flow.source.type === t.TriggerExtension &&
            (getEventDef(flow.source) === EventDef.System || getEventDef(flow.source) === EventDef.Timer))
        ) {
          
          return this._getTriggerConditionDetails(flow, newElement);
        } else {

          if (flow.target && (flow.target.type === 'bpmn:IntermediateCatchEvent'||flow.target.type ==='bpmn:ExclusiveGateway') ) {
            this.reloadData = true;
          }
          return this._getTriggerDetails(flow, newElement);
        }
      
      case t.DottedFlow:{
         return this._getDottedTriggerDetails(element, newElement);
      }
      default:
        return null;
    }
  }

  private async _getWorkflowDetails(props: Workflow, newElement?: boolean) {
    const component = WorkflowDetailComponent;
    let data = {};
    if (!newElement) {
      [data] = await this.wfapi.getWorkflowDetails(props.WFID).toPromise();
    }
    return { component, data };
  }

  private async _getStageDetails(props: Stage, newElement?: boolean) {

    const component = EntityDetailComponent;
    let data = {};
    if(newElement){
     const initialData = await firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType('Stage'));
     const { WfoId: stageId } = props as Stage;
      data = {
        entityType: 'Stage',
        parentEntityId: stageId,
        newElement,
        formConfig: initialData
      };
    }else{
      // const { WfosId, WfoId: stageId } = element.props as State;
      const { WfoId: stageId } = props as Stage;

      const initaliData = await firstValueFrom(this.aiFlowBuilderService
        .getAIFlowEntityById(stageId));

      data = {
        entityType: 'Stage',
        parentEntityId: stageId,
        entityID: stageId,
        formConfig: initaliData.AttributeJson
      }
      }
    return { component, data };
  }

  private async _getStateDetails(
    element: StateShapeType,
    newElement?: boolean
  ) {
    const { WfoId: stageId } = element.parent.props as any;
    const component = EntityDetailComponent;
    let entityType: string;
    switch (element.type) {
      case t.StartState:
      entityType = 'StartState';
      break;
    case t.EndState:
      entityType = 'EndState';
      break;
    case t.API:
      entityType = 'API';
      break;
    case t.DataSchema:
      entityType = 'DataSchema';
      break;
    case t.HumanInLoop:
      entityType = 'HumanInLoop';
      break;
    case t.LLM:
      entityType = 'LLM';
      break;
    case t.PromptVariable:
      entityType = 'PromptVariable';
      break;
    case t.Scheduler:
      entityType = 'Scheduler';
      break;
    case t.SqlQuery:
      entityType = 'SqlQuery';
      break;
    case t.Vector:
      entityType = 'Vector';
      break;
    default:
      entityType = 'Agent';
      break;
}
    let data = {};
    if(newElement){
      const initialData = await firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType(entityType));
      data = {
        newElement,
        entityType: entityType,
        parentEntityId: stageId,
        formConfig: initialData
      };
    }else{
      const { WfosId } = element.props as any;

      const initaliData = await firstValueFrom(this.aiFlowBuilderService
        .getAIFlowEntityById(WfosId));

      data = {
        entityType: entityType,
        parentEntityId: stageId,
        entityID: WfosId,
        formConfig: initaliData.AttributeJson
      }

    }
    return { component, data };
  }

  private async _getTriggerConditionDetails(flow: ConnectionShape, newElement, isTimer?: boolean) {
    const triggerId = this.bpmnService.allElements.find(alfa => alfa?.target?.id == flow.source.id)?.props?.TriggerId;
    // const { WfosId: stateId } = flow.source.props || {} as State;
    const { WfosId: endingStateId } = flow.target?.props || {} as State;

    const component = EntityDetailComponent;
    let data = {};
    
    if(newElement){
     const initialData = await firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType('TriggerCondition'));

      data = {
        entityType: 'TriggerCondition',
        parentEntityId: triggerId,
        endParentEntityId: endingStateId,
        newElement,
        formConfig: initialData

      };
    }else{
      const { ConditionId } = flow.props as any;

      const initaliData = await firstValueFrom(this.aiFlowBuilderService
        .getAIFlowEntityById(ConditionId));
      data = {
        entityType: 'TriggerCondition',
        parentEntityId: triggerId,
        entityID: ConditionId,
        newElement,
        formConfig: initaliData.AttributeJson

      }
    }

    return { component, data };
  }

    private async _getDottedTriggerDetails(flow, newElement) {
    const { WfosId: stateId } = flow.source.props as State;
    const { WfosId: endingStateId } = flow.target.props as State;

    this.aiFlowBuilderService.createAIFlowEntity({
      FlowId: this.metadata?.Workflow?.WFID,
      EntityName: flow.id,
      EntityType: 'DottedTrigger',
      ParentEntityId: stateId,
      EndParentEntityId: endingStateId,
    }).subscribe();

    return null;
  }


  private async _getTriggerDetails(flow: ConnectionShape, newElement, isTimer?: boolean) {
    const { WfosId: stateId } = flow.source.props as State;
    const { WfosId: endingStateId } = flow.target?.props || {} as State;

    const component = EntityDetailComponent;
    let data = {};
    
    if(newElement){
     const initialData = await firstValueFrom(this.aiFlowBuilderService.getAIFlowAttributeJsonByType('Trigger'));

      data = {
        entityType: 'Trigger',
        parentEntityId: stateId,
        endParentEntityId: endingStateId,
        newElement,
        formConfig: initialData

      };
    }else{
      const { TriggerId } = flow.props as any;

      const initaliData = await firstValueFrom(this.aiFlowBuilderService
        .getAIFlowEntityById(TriggerId));
      data = {
        entityType: 'Trigger',
        parentEntityId: stateId,
        entityID: TriggerId,
        newElement,
        formConfig: initaliData.AttributeJson

      }
    }

    return { component, data };
  }

  // private saveDetails(element: DiagramEl, props: any) {
  //   debugger;
  //   if (element.props && props.status) {
  //     element.props.Status = props.status;
  //   }

  //   if (element.type !== t.Trigger) {
  //     this.service.updateElementProperties(element, {
  //       name: props.friendlyName,
  //     });
  //   } else {
  //     this.service.updateElementProperties(element, {});
  //   }
  //   const { ProcessName, WFID } = this.metadata.Workflow;
  //   return this.wfapi.updateElement(element, props, ProcessName, WFID);
  // }

    private saveDetailsv2(element: DiagramEl, props: any) {
    element.props = props;
    if (element.props && props.status) {
      element.props.Status = props.status;
    }

    if(element.source?.type === t.Gateway){
       this.service.updateElementProperties(element, {
        id: constructId('Cond_', props.entityname)
       });
    }
    if(element.target?.type === t.Gateway){
       this.service.updateElementProperties(element.target, {
        id: constructId(t.Gateway, props.entityname)
       });
    }

    if (element.type !== t.Trigger) {
      // element.id = props.entityname 
      this.service.updateElementProperties(element, {
        id: props.entityname,
        name: props.entityname
      });
    } else {
      this.service.updateElementProperties(element, {
        id: props.entityname
      });
    }
    return;
  }

  public changeMode(mode: 'Edit' | 'Published') {
    this.wfapi
      .changeMode(this.metadata.Workflow.WFID, mode)
      .subscribe((success) => {
        if (success && mode !== this.metadata.Workflow.WorkflowMode) {
          location.reload();
        }
      });
  }

  public refreshXML(){
        this.service.toDiagram(this.metadata, this.elDiagram.nativeElement).subscribe();
  }

  public generateXML() {
    this.aiFlowBuilderService.getAIFGeneratedJson(this.metadata.Workflow.WFID).subscribe(_ =>{
      console.log(_ );
    });

  }


private showErrorModal(): void {
  const dialogRef = this.dialog.open(GenerateXmlComponent, {
    width: '656px',
    disableClose: true,
    panelClass: 'custom-dialog-container',
    data: {
      type: 'wf',
      processName: this.metadata.Workflow.ProcessName,
      verNo: this.metadata.Workflow.Ver,
      alertMsgTxt: this.alertMsgTxt
    }
  });

  dialogRef.componentInstance.closeModal.subscribe(() => {
    dialogRef.close(); // Close the modal when any action is triggered
  });
}
wfosIdToWfoIdMap: WfosIdToWfoIdMap = {};


createWfosIdToWfoIdMap(data: MetaData): WfosIdToWfoIdMap {

    const stages = data.Workflow.Stages;

    for (const stageKey in stages) {
      const states = stages[stageKey].States;
      for (const stateKey in states) {
        const state = states[stateKey];
        this.wfosIdToWfoIdMap[state.WfosId] = state.WfoId; // Store WfosId as key and WfoId as value
      }
    }
    sessionStorage.setItem('StateJson', JSON.stringify(this.wfosIdToWfoIdMap));


    return this.wfosIdToWfoIdMap; // Return the mapping
  }


  ngAfterContentInit(): void {
    if (this.metadata.Workflow) {
      this.previousLength = this.metadata?.Coordinates ? Object.keys(this.metadata.Coordinates).length: 0;    
      this.coordinatesChangePoints = this.metadata?.Coordinates;
      this.totalComponentLenth = Object.keys(this.metadata?.Coordinates ?? {}).length;
      this.keyColorArrayPrevious = Object.entries(this.metadata?.Coordinates ?? {})
    .map(([key, value]) => {
      const color = 'color' in value ? value.color : undefined;
      return [key, color];
    })
    .filter((entry): entry is [string, string] =>
      !!entry[1] && entry[1] !== 'none' && entry[1] !== ''
    );
      this.IsRedoAllowed = !!this.metadata.Workflow.IsRedoAllowed;
      this.IsUndoAllowed = !!this.metadata.Workflow.IsUndoAllowed;
      this.actionsVisible = this.metadata.Workflow.WorkflowMode !== 'Published';
      this.actionsDisabled = !this.actionsVisible;
      this.metadata.FlowType = 'ai';
      this.createWfosIdToWfoIdMap(this.metadata);
      this.service.toDiagram(this.metadata, this.elDiagram.nativeElement).subscribe();
    } else {
      this.workflowDeleted.emit(true);
    }
  }
  workflowDataArray:any;

  persistWorkflowDataArray(): void {
    const storageKey = 'workflowDataArray';
    const stored = sessionStorage.getItem(storageKey);
  
    // Load existing data or initialize empty array
    this.workflowDataArray = stored ? JSON.parse(stored) : [];
  
    const wfid = this.metadata?.Workflow?.WFID;
    if (!wfid) return;
  
    const index = this.workflowDataArray.findIndex(([key]) => key === wfid);
    if (index !== -1) {
      // Update existing
      this.workflowDataArray[index][1] += 1;
    } else {
      // Add new
      this.workflowDataArray.push([wfid, 1]);
    }
  
    // Save back to sessionStorage
    sessionStorage.setItem(storageKey, JSON.stringify(this.workflowDataArray));
  }


  getWorkflowValue(wfid: string): number {
    // Load from sessionStorage
    const stored = sessionStorage.getItem('workflowDataArray');
    const array: [string, number][] = stored ? JSON.parse(stored) : [];
  
    // Find entry
    const found = array.find(([key]) => key === wfid);
    return found ? found[1] : 0; // return 0 if not found
  }
  

  async onCompanyAssociation() {

    const obj = this.metadata.Workflow;
      const modal = this.msg.showComponent(CompanyAssociationComponent, {
        displayWith: (item: ICompanyAssociatedWFObject) => `${item.WFDISPNAME} > ${item.WFODISPNAME} > ${item.WFOSDISPNAME} > ${item.TRGDISPNAME}`,
        uniqueWith: (item: ICompanyAssociatedWFObject) => `${item.WFNAM}${item.WFOGUID}${item.WFOSGUID}${item.TRGGUID}`,
        getAssociationsWith: (groupId: string) => this.formViewApi.getWFObjectsForCompanyAssociation(groupId, obj.TypeID, obj.WFID), 
        checkBy: 'isAlreadySelected',
      });
      const res = await modal.result;
      if (res) {
        const success = await this.updateCompanyAssociatedRecords(obj, res) === 1;
        if (success) {
         this.toastr.success('Success');
        }
      }
    
  }

  private updateCompanyAssociatedRecords(wf: any, res: any) {
  const stageGuids = new Set(), stateGuids = new Set(), triggerGuids = new Set();

  const selectedItems = Array.isArray(res?.selectedItems)
    ? res.selectedItems
    : res?.selectedItems
      ? [res.selectedItems] // convert single item to array
      : [];

  (selectedItems as ICompanyAssociatedWFObject[]).forEach(item => {
    stageGuids.add(item.WFOGUID);
    stateGuids.add(item.WFOSGUID);
    triggerGuids.add(item.TRGGUID);
  });

  const payload: WFAssociatedCompaniesPayload = {
    WFId: wf?.WFID ?? null,
    ProcessId: wf?.TypeID ?? null,
    CompanyId: res?.companyId ?? null,
    groupName: res?.groupName ?? '',
    WFOGUIDS: [...stageGuids].toString(),
    WFOSGUIDS: [...stateGuids].toString(),
    TrigGUIDS: [...triggerGuids].toString(),
    IsAllComp: res?.IsAllComp ?? false
  };

  return firstValueFrom(this.formViewApi.updateWFObjectsForCompanyAssociation(payload));
}

  private clearStoredEvent(): void {
    const key = 'event';
    sessionStorage.removeItem(key);
  }

  private getStoredEvent(): string | null {
    const key = 'event';
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }
 
  openWebhook() {
    // Read query params once
    const flowName = this.route.snapshot.queryParamMap.get('flowName') || '';
    const id = this.route.snapshot.queryParamMap.get('id') || '';

    console.log('Flow Name:', flowName);
    console.log('ID:', id);

    const modal = this.msg.showComponent(WebhookConfigComponent, {
      id: id,
      FlowName: flowName
    }, { size: 'lg' });

    modal.result.then(async (result) => {
      if (result) {
        this.toastr.success('Data saved successfully');
      }
    });
  }


  ngOnDestroy(): void {
    this.service.destroy();
    
  }
}

