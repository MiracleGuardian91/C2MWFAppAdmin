import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ICompanyAssociatedBMObject,
  ICompanyAssociatedWFObject,
  MessageService,
  WFAssociatedCompaniesPayload,
} from '@app/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { WFTriggerConditionDetail } from '../../models';
import {
  ConnectionReconnectContext,
  ConnectionShape,
  ConnectionShapeWithProps,
  DiagramEl,
  ElementType,
  EventDef,
  StateShapeType,
  TriggerConditionConnection,
  TriggerConnection,
} from '../../models/bpmn';
import { DetailConfig } from '../../models/element-detail.class';
import { ElementsIds } from '../../models/elements-ids.model';
import {
  Coordinates,
  MetaData,
  Stage,
  State,
  Trigger,
  TriggerCondition,
  Workflow,
} from '../../models/wf.model';
import { DiagramService } from '../../services/diagram.service';
import { DiagramStorageService } from '../../services/diagram-storage.service';
import {
  WFSaveResponse,
  WorkflowApiService,
} from '../../services/workflow-api.service';
import { getEventDef, isConditionType, isStateType } from '../../util/bpmn';
import { getTriggerType } from '../../util/bridge';
import { constructId } from '../../util/helpers';
import { StageDetailComponent } from '../stage-detail/stage-detail.component';
import { StateDetailComponent } from '../state-detail/state-detail.component';
import { TimerDetailComponent } from '../timer-detail/timer-detail.component';
import { TriggerConditionDetailComponent } from '../trigger-condition-detail/trigger-condition-detail.component';
import { TriggerDetailComponent } from '../trigger-detail/trigger-detail.component';
import { WorkflowDetailComponent } from '../workflow-detail/workflow-detail.component';
import { environment } from '@env/environment';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { BpmnService } from '../../services/bpmn.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WfdComponent } from '../../wfd.component';
import { GenerateXmlComponent } from '../generatexml/generatexml.component';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';

import { CompanyAssociationComponent } from '@app/admin/Shared/company-association/company-association.component';

import { ToastrService } from 'ngx-toastr';
import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

const t = ElementType;

interface WfosIdToWfoIdMap {
  [key: string]: string; // This defines a mapping of string keys to string values
}

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  standalone: true,
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    NgIf,
    NgbDropdownMenu,
    NgFor,
    NgbDropdownItem,
    FormsModule,
  ],
})
export class DiagramComponent implements AfterContentInit, OnDestroy {
  @ViewChild('ref', { static: true }) private el: ElementRef;
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

  EntityId: string = '';
  EntityType: string = '';
  ActionName: string = '';
  ActionGroupId: string = '';
  ActionDetails: string = '';
  clearDetail: boolean = false;
  totalComponentLenth: number;
  keyColorArrayPrevious: [string, string | undefined][] = [];
  alertMsgTxt: string[] = [];

  // Manual save properties
  public hasUnsavedChanges = false;
  public isSaving = false;

  // Local undo/redo properties
  public canUndo = false;
  public canRedo = false;

  // Alignment properties
  public selectedSwimlane: any = null;
  trgConditionDetail: boolean = false;
  undoredoactive = false;

  // Element properties
  public selectedState: any = null;
  public selectedFontFamily: string = 'Arial';
  public selectedFontSize: string = '14px';
  public selectedFontColor: string = '#000000';
  public selectedFontBold: boolean = false;
  public selectedFontItalic: boolean = false;
  public selectedFontUnderline: boolean = false;
  public selectedAlignment: string = 'center';
  public selectedVerticalAlignment: string = 'middle';
  constructor(
    private dialog: MatDialog,
    public service: DiagramService,
    public wfapi: WorkflowApiService,
    private formViewApi: FormViewApiService,
    private msg: MessageService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private bpmnService: BpmnService,
    private storageService: DiagramStorageService,
    readonly toastr: ToastrService
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
        if (this.ActionName === 'Delete' || !this.ActionName.trim()) {
          this.EntityId = ' ';
          this.EntityType = ' ';
          this.ActionName = ' ';
          this.ActionGroupId = ' ';
        }

        const currentCordsdetail = Object.keys(coords);
        const previousCordsdetail = this.coordinatesChangePoints
          ? Object.keys(this.coordinatesChangePoints)
          : [];
        const storedEvent = this.getStoredEvent();
        let isUndoRedo = false;

        if (
          (storedEvent !== 'ElementMoved' &&
            this.totalComponentLenth > currentCordsdetail.length) ||
          this.undoredoactive
        ) {
          if (this.undoredoactive) {
            isUndoRedo = true;
          }
          if (this.ActionName !== 'Edit') {
            this.ActionName = '';
            this.undoredoactive = false;
          }
        } else if (
          !this.ActionName.trim() ||
          this.ActionName === 'FilledColor'
        ) {
          this.ActionName = 'ElementMoved';
        }

        const newKeyColorArray: [string, string | undefined][] = Object.entries(
          coords
        )
          .map(([key, value]) => [key, (value as any).color])
          .filter(
            (entry): entry is [string, string] =>
              !!entry[1] && entry[1] !== 'none' && entry[1] !== ''
          );

        const hasColorChanged =
          this.keyColorArrayPrevious.length !== newKeyColorArray.length ||
          newKeyColorArray.some(([key, color]) => {
            const match = this.keyColorArrayPrevious.find(
              ([prevKey]) => prevKey === key
            );
            return !match || match[1] !== color;
          });

        if (hasColorChanged) {
          this.keyColorArrayPrevious = newKeyColorArray;
          this.ActionName = 'FilledColor';
        }

        if (isUndoRedo) {
          this.ActionName = '';
        }
        this.totalComponentLenth = currentCordsdetail.length;
        const removedGateway = previousCordsdetail.some(
          (item) =>
            item.includes('bpmn:ExclusiveGateway') &&
            !currentCordsdetail.includes(item)
        );

        const removedCondition = previousCordsdetail.some(
          (item) => item.includes('Cond_') && !currentCordsdetail.includes(item)
        );

        if (removedGateway && removedCondition) {
          this.EntityType = 'diamond';
          this.ActionGroupId = Guid.raw();
        } else if (removedGateway) {
          this.EntityType = 'diamond';
          this.ActionGroupId = Guid.raw();
        } else if (removedCondition) {
          this.EntityType = 'TriggerCondition';
          this.ActionGroupId = Guid.raw();
        }
        const currentLength = Object.keys(coords).length;
        // Check if the length has changed
        this.coordinatesChangePoints = coords;

        // if (this.previousLength > currentLength) {

        // }
        this.previousLength = currentLength;

        this.persistWorkflowDataArray();

        // Store changes locally instead of auto-saving to cloud
        this.storeChangesLocally(coords);

        if (this.clearDetail) {
          this.EntityId = ' ';
          this.EntityType = ' ';
          this.ActionName = ' ';
          this.ActionGroupId = ' ';
          this.ActionDetails = ' ';
          this.clearDetail = false;
        }
        this.clearStoredEvent();
      });

    this.service.onReconnect
      .pipe(takeUntil(this.destroy$))
      .subscribe((context) => this.onConnectionReconnect(context));

    this.service.onRestoreElement
      .pipe(takeUntil(this.destroy$))
      .subscribe((element) => {
        this.wfapi
          .restoreElement(this.metadata.Workflow.WFID, element)
          .subscribe();
      });

    // Track selection changes to detect swimlane selection
    this.service.onSelectionChanged
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: any) => {
        this.handleSelectionChange(event);
      });

    // this.bpmnService.eventBus.on('element.changed', (event: any) => {
    //   if (event.element && this.isStateType(event.element)) {
    //     setTimeout(() => {
    //       this.service.restoreFontProperties(event.element);
    //     }, 100);
    //   }
    // });

    // this.bpmnService.eventBus.on('element.move', (event: any) => {
    //   const element = event.element;
    //   if (element && this.isStateType(element)) {
    //     setTimeout(() => {
    //       this.service.restoreFontProperties(element);
    //     }, 100);
    //   }
    // });

    // this.bpmnService.eventBus.on('element.render', (event: any) => {
    //   const element = event.element;
    //   if (element && this.isStateType(element)) {
    //     setTimeout(() => {
    //       this.service.restoreFontProperties(element);
    //     }, 50);
    //   }
    // });
  }

  changeUndoRedo(id: string, type: string, Action: string) {
    type = type.replace('bpmn:', '');
    this.EntityId = id;
    this.ActionName = Action;
    this.ActionGroupId = Guid.raw();

    switch (type) {
      case 'Task':
        this.EntityType = 'State';
        break;
      case 'Participant':
        this.EntityType = 'Pool';
        break;
      case 'Lane':
        this.EntityType = 'Stage';
        break;
      case 'StartEvent':
        this.EntityType = 'StartState';
        break;
      case 'EndEvent':
        this.EntityType = 'EndState';
        break;
      case 'ExclusiveGateway':
        this.EntityType = 'Gateway';
        this.clearDetail = true;
        break;
      case 'SequenceFlow':
        this.EntityType = 'Trigger';
        break;
      case 'IntermediateCatchEvent':
        this.EntityType = 'TriggerExtension';
        this.clearDetail = true;
        break;
      case 'TimerEventDefinition':
        this.EntityType = 'Timer';
        this.clearDetail = true;
        break;
      case 'Association':
        this.EntityType = 'Association';
        break;
      case 'TextAnnotation':
        this.EntityType = 'Annotation';
        this.clearDetail = true;
        break;
      case 'SubProcess':
        this.EntityType = 'SubProcess';
        break;
      case 'label':
        this.EntityType = 'Label';
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
      PrevStageIds: [],
    };

    const deletedIdsString = JSON.stringify(deletedIds); // Convert object to string
    this.ActionName = 'Delete';
    this.ActionGroupId =
      this.EntityType !== 'diamond' && this.EntityType !== 'TriggerCondition'
        ? Guid.raw()
        : this.ActionGroupId;

    // Determine EntityType
    this.EntityType =
      this.EntityType === 'diamond' || this.EntityType === 'TriggerCondition'
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
      .saveDiagramCoordinates(
        this.metadata.Workflow.WFID,
        this.coordinatesChangePoints,
        {
          EntityId:
            ids.stageIds[0] ??
            ids.stateIds[0] ??
            ids.triggerIds[0] ??
            ids.conditionIds[0] ??
            '',
          EntityType: this.EntityType,
          ActionName: this.ActionName,
          ActionGroupId: this.ActionGroupId,
          ActionDetails: deletedIdsString,
          SequenceNumber: this.getWorkflowValue(
            this.metadata.Workflow.WFID
          ).toString(),
        }
      )
      .subscribe({
        next: (response: any) => {
          this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
          this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;

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
    this.changeUndoRedo('', el.type, 'Insert');
    try {
      const details = await this.getDetails(el, true);
      if (details) {
        const ref = await this.openDialog({
          element: el,
          newElement: true,
          ...details,
        });

        if (ref) {
          const props = ref?.payload || ref;
          try {
            const res = await firstValueFrom(this.saveDetails(el, props));
            if (res.statuscode === 200) {
              this.clearDetail = true;
              this.EntityId =
                res.result.ConditionId ??
                res.result.TriggerId ??
                res.result.WfoId ??
                res.result.WfosId;
              //  this.ActionDetails = res.result.TriggerId ? JSON.stringify(Object.keys(res.result.TrgConditions)) : '';
              this.ActionDetails = res.result.TriggerId
                ? JSON.stringify({
                    workflowIds: [],
                    stageIds: [],
                    stateIds: [],
                    PrevStageIds: [],
                    triggerIds: [res.result.TriggerId],
                    conditionIds: Object.keys(
                      res.result.TrgConditions ?? []
                    ).filter((key) => key),
                  })
                : '';
              if (ref.legalDocsPayload && ref.legalDocsPayload != '-1') {
                const Workflow = this.metadata.Workflow;
                const triggerId = res.result?.TriggerId;
                await firstValueFrom(
                  this.wfapi.insertlegaldmotrgmapping(
                    ref.legalDocsPayload,
                    Workflow.TypeID,
                    triggerId
                  )
                );
              }

              // trg_cond
              this.handleSaveResponse(el, res, props);
            } else {
              if (this.reloadData) {
                this.reloadData = false;
              }
              this.clearDetail = true;
              this.service.deleteElement(el);
            }
          } catch (_) {
            this.clearDetail = true;
            this.service.deleteElement(el);
          }
          this.clearDetail = true;
        } else {
          if (this.reloadData) {
            this.reloadData = false;
          }
          this.service.undo();
          this.clearDetail = true;
        }
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
          this.wfapi
            .UndoWfdWorkflow(this.metadata.Workflow.WFID)
            .pipe(switchMap(() => this.loadWfData()))
            .subscribe((metadata) => {
              this.mappingData(metadata);
              this.refreshXML();
            });
        }
      } else if (functionality === 'Redo') {
        this.wfapi
          .RedoWfdWorkflow(this.metadata.Workflow.WFID)
          .pipe(switchMap(() => this.loadWfData()))
          .subscribe((metadata) => {
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
    this.route.queryParams.subscribe((params) => {
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
    if (el.type === 'bpmn:SequenceFlow') {
      isExclusiveGateway = el.source.type === 'bpmn:ExclusiveGateway';
    } else {
      isExclusiveGateway = false;
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

    const ref = await this.openDialog({ element: el, newElement, ...details });
    if (!ref) return (this.trgConditionDetail = false);

    if (ref.legalDocsPayload && ref.legalDocsPayload != '-1') {
      const Workflow = this.metadata.Workflow;
      const triggerId = ref.payload?.triggerId;
      await firstValueFrom(
        this.wfapi.insertlegaldmotrgmapping(
          ref.legalDocsPayload,
          Workflow.TypeID,
          triggerId
        )
      );
    }

    const props = ref?.payload || ref;
    this.updateElementProperties(el, props, friendlyName);
    await this.saveAndUpdateElement(el, props, newElement);
  }

  private updateElementProperties(el: DiagramEl, props: any, prev: any): void {
    const stateTypes = [
      'bpmn:Task',
      'bpmn:StartEvent',
      'bpmn:EndEvent',
      'bpmn:SubProcess',
    ];
    if (stateTypes.includes(el.type)) {
      this.changeUndoRedo(el.props.WfosId, el.type, 'Edit');
    } else if (el.type === 'bpmn:Lane') {
      this.changeUndoRedo(el.props.WfoId, el.type, 'Edit');
    } else if (el.type === 'bpmn:SequenceFlow') {
      if (this.trgConditionDetail) {
        this.EntityId = props.conditionId;
        this.ActionName = 'Edit';
        this.ActionGroupId = Guid.raw();
        this.EntityType = 'TriggerCondition';
      } else {
        this.changeUndoRedo(el.props.TriggerId, el.type, 'Edit');
      }
    } else if (el.def === 'bpmn:TimerEventDefinition') {
      this.changeUndoRedo('', el.def, 'Edit');
    } else if (el.type === 'bpmn:Participant') {
      this.changeUndoRedo(props.wfId, el.type, 'Edit');
    } else {
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
      CurrentDispName: this.trgConditionDetail
        ? props.conditionDescription
        : props.friendlyName,
    };

    this.ActionDetails = JSON.stringify(UpdatedData);
    this.clearDetail = true;

    el.props = el.props || {};
    el.props.FriendlyName = props.friendlyName;

    if (el.type === 'bpmn:SequenceFlow') {
      el.friendlyName = this.trgConditionDetail
        ? props.conditionDescription
        : props.friendlyName;
      this.trgConditionDetail = false;
    }
  }

  private async saveAndUpdateElement(
    el: DiagramEl,
    props: any,
    newElement: boolean
  ): Promise<void> {
    const saveResponse = await this.saveDetails(el, props).toPromise();

    if (el.type === 'bpmn:SubProcess') {
      el.props.SubProcessName = saveResponse.result.SubProcessName;
      el.props.SubProcessWFVersionNo =
        saveResponse.result.SubProcessWFVersionNo;
    }

    if (!newElement) return;

    if (saveResponse.statuscode === 200) {
      this.handleSaveResponse(el, saveResponse, props);
    } else {
      this.service.deleteElement(el);
    }
  }

  private async onDeleteElement(ids: ElementsIds) {
    const workflowId = this.metadata.Workflow.WFID;
    this.deleteWfCall(ids);
    try {
      await this.wfapi.deleteElements(ids, workflowId).toPromise();

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
          await this.saveDetails(flow, props).toPromise();
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
        const res = await this.saveDetails(el, props).toPromise();
        if (res.statuscode === 200) {
          this.handleSaveResponse(el, res, props);
        } else {
          this.service.deleteElement(el);
        }
      } else {
        this.service.undo();
      }
    }
  }

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
      config,
    });
    return ref.result;
  }

  private async getDetails(element: DiagramEl, newElement?: boolean) {
    const props = element.props || ({} as any);
    switch (element.type) {
      case t.Pool:
        return this._getWorkflowDetails(props, newElement);
      case t.Stage:
        return this._getStageDetails(props, newElement);
      case t.StartState:
      case t.State:
      case t.EndState:
      case t.SubProcess:
        return this._getStateDetails(element, newElement);
      case t.TriggerExtension: {
        const def = element.businessObject.eventDefinitions[0];
        const flow = element.incoming[0];
        if (flow && def?.$type === EventDef.Timer) {
          return this._getTriggerDetails(flow, true);
        }
        return null;
      }
      case t.Trigger:
        const flow = element as ConnectionShapeWithProps;
        if (
          flow.source.type === t.Gateway ||
          (flow.source.type === t.TriggerExtension &&
            (getEventDef(flow.source) === EventDef.System ||
              getEventDef(flow.source) === EventDef.Timer))
        ) {
          return this._getTriggerConditionDetails(flow, newElement);
        } else {
          if (
            flow.target &&
            (flow.target.type === 'bpmn:IntermediateCatchEvent' ||
              flow.target.type === 'bpmn:ExclusiveGateway')
          ) {
            this.reloadData = true;
          }
          return this._getTriggerDetails(flow);
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
    const component = StageDetailComponent;
    let data = {};
    if (!newElement) {
      const { WfoId } = props as Stage;
      [data] = await this.wfapi
        .getStageDetails(WfoId, this.metadata?.Workflow?.WFID)
        .toPromise();
    }
    return { component, data };
  }

  private async _getStateDetails(
    element: StateShapeType,
    newElement?: boolean
  ) {
    const workflowId = this.metadata?.Workflow?.WFID;
    const component = StateDetailComponent;
    let data = {};
    if (newElement) {
      const { WfoId } = element.parent.props as Stage;
      data = await this.wfapi
        .getStateDetails(null, WfoId, workflowId)
        .toPromise();
    } else {
      const { WfosId, WfoId: stageId } = element.props as State;
      data = await this.wfapi
        .getStateDetails(WfosId, stageId, workflowId)
        .toPromise();
    }
    return { component, data };
  }

  private async _getTriggerDetails(flow: ConnectionShape, isTimer?: boolean) {
    const component = isTimer ? TimerDetailComponent : TriggerDetailComponent;
    const workflowId = this.metadata?.Workflow?.WFID;
    const state = flow.source.props as State;

    const data = await this.wfapi
      .getTriggerDetails(
        (flow.props as Trigger)?.TriggerId,
        state.WfosId,
        state.WfoId,
        workflowId
      )
      .toPromise();
    return { component, data };
  }

  private async _getTriggerConditionDetails(
    flow: ConnectionShape,
    newElement?: boolean
  ) {
    this.EntityType = 'TriggerCondition';
    const workflowId = this.metadata?.Workflow?.WFID;
    let data: Partial<WFTriggerConditionDetail> = {};
    const component = TriggerConditionDetailComponent;
    if (!newElement) {
      const { ConditionId, TriggerId } = flow.props as TriggerCondition;
      data = await this.wfapi
        .getTriggerConditionDetails(ConditionId, TriggerId, workflowId)
        .toPromise();
    } else {
      const { WfoId } = flow.source.parent.props as Stage;
      const stateId = flow.target.props.WfosId;
      const res = await this.wfapi
        .getTriggerDetails(null, stateId, WfoId, workflowId)
        .toPromise();
      data = {
        CcEmailRole: {
          AvailableCCEmailTrgrRole:
            res.CCTriggerEmailRole.AvailableCCEmailTrgrRole,
          SelectedCCEmailTrgrRole: {},
        },
        EmailRole: {
          AvailableTriggerEmailRole:
            res.TriggerEmailRole.AvailableTriggerEmailRole,
          SelectedTriggerEmailRole: {},
        },
      };
    }
    return { component, data };
  }

  private saveDetails(element: DiagramEl, props: any) {
    if (element.props && props.status) {
      element.props.Status = props.status;
    }

    if (element.type !== t.Trigger) {
      this.service.updateElementProperties(element, {
        name: props.friendlyName,
      });
    } else {
      this.service.updateElementProperties(element, {});
    }
    const { ProcessName, WFID } = this.metadata.Workflow;
    return this.wfapi.updateElement(element, props, ProcessName, WFID);
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

  public refreshXML() {
    this.service.toDiagram(this.metadata, this.el.nativeElement).subscribe();
  }

  public generateXML() {
    this.formViewApi
      .generateBMWFXMLGateway(
        'wf',
        this.metadata.Workflow.ProcessName,
        this.metadata.Workflow.Ver
      )
      .subscribe({
        next: (success) => {
          this.alertMsgTxt = [];

          if (success.IsBMWFLinked === 0)
            this.alertMsgTxt.push('BM-WF is not linked.');

          if (success.IsLive === 0) this.alertMsgTxt.push('BM-WF is not live.');

          if (success.IsCmpnyGrpExists === 0)
            this.alertMsgTxt.push('Company Group is not exists.');

          if (success.IsCmpnyWFObjectLinked === 0)
            this.alertMsgTxt.push('Company-WF Objects are not linked.');

          if (this.alertMsgTxt.length > 0) {
            this.showErrorModal();
          } else {
            this.toastr.success('JSON generated successfully');
          }
        },
        error: () => {
          this.showErrorModal();
        },
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
        alertMsgTxt: this.alertMsgTxt,
      },
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
      this.previousLength = this.metadata.Coordinates
        ? Object.keys(this.metadata.Coordinates).length
        : 0;
      this.coordinatesChangePoints = this.metadata.Coordinates;
      this.totalComponentLenth = Object.keys(this.metadata.Coordinates).length;
      this.keyColorArrayPrevious = Object.entries(this.metadata.Coordinates)
        .map(([key, value]) => {
          const color = 'color' in value ? value.color : undefined;
          return [key, color];
        })
        .filter(
          (entry): entry is [string, string] =>
            !!entry[1] && entry[1] !== 'none' && entry[1] !== ''
        );
      this.IsRedoAllowed = !!this.metadata.Workflow.IsRedoAllowed;
      this.IsUndoAllowed = !!this.metadata.Workflow.IsUndoAllowed;
      this.actionsVisible = this.metadata.Workflow.WorkflowMode !== 'Published';
      this.actionsDisabled = !this.actionsVisible;

      // Initialize unsaved changes state
      this.hasUnsavedChanges = this.storageService.hasUnsavedChanges(
        this.metadata.Workflow.WFID
      );

      // Initialize undo/redo state
      this.updateUndoRedoState();

      // Add command stack event listeners for undo/redo state updates
      this.addCommandStackListeners();

      // Add keyboard shortcuts for undo/redo
      this.addKeyboardShortcuts();

      // Add beforeunload event listener to warn about unsaved changes
      this.addBeforeUnloadListener();

      this.createWfosIdToWfoIdMap(this.metadata);
      this.service.toDiagram(this.metadata, this.el.nativeElement).subscribe();
    } else {
      this.workflowDeleted.emit(true);
    }
  }
  workflowDataArray: any;

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
    const modal = this.msg.showComponent(
      CompanyAssociationComponent,
      {
        displayWith: (item: ICompanyAssociatedWFObject) =>
          `${item.WFDISPNAME} > ${item.WFODISPNAME} > ${item.WFOSDISPNAME} > ${item.TRGDISPNAME}`,
        uniqueWith: (item: ICompanyAssociatedWFObject) =>
          `${item.WFNAM}${item.WFOGUID}${item.WFOSGUID}${item.TRGGUID}`,
        getAssociationsWith: (groupId: string) =>
          this.formViewApi.getWFObjectsForCompanyAssociation(
            groupId,
            obj.TypeID,
            obj.WFID
          ),
        checkBy: 'isAlreadySelected',
      },
      { size: 'lg', centered: true }
    );
    const res = await modal.result;
    if (res) {
      const success =
        (await this.updateCompanyAssociatedRecords(obj, res)) === 1;
      if (success) {
        this.toastr.success('Success');
      }
    }
  }

  private updateCompanyAssociatedRecords(wf: any, res: any) {
    const stageGuids = new Set(),
      stateGuids = new Set(),
      triggerGuids = new Set();

    const selectedItems = Array.isArray(res?.selectedItems)
      ? res.selectedItems
      : res?.selectedItems
      ? [res.selectedItems] // convert single item to array
      : [];

    (selectedItems as ICompanyAssociatedWFObject[]).forEach((item) => {
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
      IsAllComp: res?.IsAllComp ?? false,
    };

    return firstValueFrom(
      this.formViewApi.updateWFObjectsForCompanyAssociation(payload)
    );
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

  ngOnDestroy(): void {
    this.service.destroy();
    this.removeBeforeUnloadListener();
    this.removeKeyboardShortcuts();
  }

  private storeChangesLocally(coords: Coordinates): void {
    const change = {
      coordinates: coords,
      entityId: this.EntityId,
      entityType: this.EntityType,
      actionName: this.ActionName,
      actionGroupId: this.ActionGroupId,
      actionDetails: this.ActionDetails,
      sequenceNumber: this.getWorkflowValue(
        this.metadata.Workflow.WFID
      ).toString(),
      timestamp: Date.now(),
    };

    this.storageService.storeChanges(this.metadata.Workflow.WFID, change);
    this.hasUnsavedChanges = true;
    // Update undo/redo state after a short delay to ensure command stack is updated
    setTimeout(() => this.updateUndoRedoState(), 100);
  }

  public saveDiagram(): void {
    if (this.isSaving) {
      return; // Prevent multiple simultaneous saves
    }

    const latestChange = this.storageService.getLatestChange(
      this.metadata.Workflow.WFID
    );
    if (!latestChange) {
      this.toastr.info('No changes to save');
      return;
    }

    this.isSaving = true;

    // Process any pending stage changes first
    this.processPendingStageChanges()
      .then(() => {
        // Then save the diagram coordinates
        this.wfapi
          .saveDiagramCoordinates(
            this.metadata.Workflow.WFID,
            latestChange.coordinates,
            {
              EntityId: latestChange.entityId,
              EntityType: latestChange.entityType,
              ActionName: latestChange.actionName,
              ActionGroupId: latestChange.actionGroupId,
              ActionDetails: latestChange.actionDetails,
              SequenceNumber: latestChange.sequenceNumber,
            }
          )
          .subscribe({
            next: (response: any) => {
              this.IsRedoAllowed = !!response?.Redo && response.Redo > 0;
              this.IsUndoAllowed = !!response?.Undo && response.Undo > 0;

              // Clear local storage after successful save
              this.storageService.clearChanges(this.metadata.Workflow.WFID);
              this.hasUnsavedChanges = false;
              this.isSaving = false;
              // Clear command stack after successful save
              if (this.bpmnService && this.bpmnService.commandStack) {
                this.bpmnService.commandStack.clear();
              }
              this.updateUndoRedoState();

              this.toastr.success('Diagram saved successfully');

              // Update the coordinates change points to reflect the saved state
              this.coordinatesChangePoints = latestChange.coordinates;
            },
            error: (error) => {
              console.error('Error saving diagram coordinates:', error);
              this.isSaving = false;
              this.toastr.error('Failed to save diagram. Please try again.');
            },
          });
      })
      .catch((error) => {
        console.error('Error processing stage changes:', error);
        this.toastr.error('Failed to process stage changes');
        this.isSaving = false;
      });
  }

  private async processPendingStageChanges(): Promise<void> {
    const storedChanges = this.getStoredStageChanges();

    if (storedChanges.length === 0) {
      return Promise.resolve();
    }

    // Filter out invalid stage changes before processing
    const validChanges = storedChanges.filter((change) => {
      const isValid =
        change.stateID &&
        change.stageID &&
        change.ActionGroupId &&
        change.PreviousStage;
      if (!isValid) {
        console.warn('Skipping invalid stage change:', change);
      }
      return isValid;
    });

    if (validChanges.length === 0) {
      console.log('No valid stage changes to process');
      this.clearStoredStageChanges();
      return Promise.resolve();
    }

    // Process each valid stage change
    const promises = validChanges.map((change) => {
      return new Promise<void>((resolve, reject) => {
        this.wfapi
          .callApiOnMoveLane(
            change.stateID,
            change.stageID,
            change.ActionGroupId,
            change.PreviousStage
          )
          .subscribe({
            next: (response) => {
              console.log('Stage change API call successful:', response);
              resolve();
            },
            error: (error) => {
              console.error('Stage change API call error:', error);
              reject(error);
            },
          });
      });
    });

    try {
      await Promise.all(promises);
      // Clear the stored changes after successful processing
      this.clearStoredStageChanges();
      console.log('All stage changes processed successfully');
    } catch (error) {
      console.error('Error processing stage changes:', error);
      throw error;
    }
  }

  private getStoredStageChanges(): any[] {
    try {
      const stored = sessionStorage.getItem('pendingStageChanges');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error parsing stored stage changes:', error);
      // Clear invalid data
      sessionStorage.removeItem('pendingStageChanges');
      return [];
    }
  }

  private clearStoredStageChanges() {
    sessionStorage.removeItem('pendingStageChanges');
  }

  public checkUnsavedChanges(): boolean {
    return this.storageService.hasUnsavedChanges(this.metadata.Workflow.WFID);
  }

  public discardChanges(): void {
    this.storageService.clearChanges(this.metadata.Workflow.WFID);
    this.hasUnsavedChanges = false;
    // Clear command stack when discarding changes
    if (this.bpmnService && this.bpmnService.commandStack) {
      this.bpmnService.commandStack.clear();
    }
    // Clear stored stage changes when discarding
    this.clearStoredStageChanges();
    this.updateUndoRedoState();
    this.toastr.info('Changes discarded');
  }

  public getStorageStats(): void {
    const size = this.storageService.getStorageSize(
      this.metadata.Workflow.WFID
    );
    const changes = this.storageService.getStoredChanges(
      this.metadata.Workflow.WFID
    );
    console.log(
      `Storage size: ${size} bytes, Changes count: ${changes.length}`
    );
  }

  private updateUndoRedoState(): void {
    if (this.bpmnService && this.bpmnService.commandStack) {
      this.canUndo = this.bpmnService.commandStack.canUndo();
      this.canRedo = this.bpmnService.commandStack.canRedo();
    } else {
      this.canUndo = false;
      this.canRedo = false;
    }
  }

  public localUndo(): void {
    if (this.canUndo && this.bpmnService) {
      this.bpmnService.undo();
      this.updateUndoRedoState();
      this.updateElementPropertiesFromSelectedElement();
    }
  }

  public localRedo(): void {
    if (this.canRedo && this.bpmnService) {
      this.bpmnService.redo();
      this.updateUndoRedoState();
      this.updateElementPropertiesFromSelectedElement();
    }
  }

  private addCommandStackListeners(): void {
    if (this.bpmnService && this.bpmnService.eventBus) {
      // Listen for command stack changes
      this.bpmnService.eventBus.on('commandStack.changed', () => {
        this.updateUndoRedoState();
      });

      // Listen for command execution
      this.bpmnService.eventBus.on('commandStack.executed', () => {
        this.updateUndoRedoState();
        this.updateElementPropertiesFromSelectedElement();
      });

      // Listen for command reverted
      this.bpmnService.eventBus.on('commandStack.reverted', () => {
        this.updateUndoRedoState();
        this.updateElementPropertiesFromSelectedElement();
      });
    }
  }

  private addKeyboardShortcuts(): void {
    document.addEventListener('keydown', (event) => {
      // Check if Ctrl+Z (undo) is pressed
      if (event.ctrlKey && event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        this.localUndo();
      }
      // Check if Ctrl+Y or Ctrl+Shift+Z (redo) is pressed
      else if (
        (event.ctrlKey && event.key === 'y') ||
        (event.ctrlKey && event.shiftKey && event.key === 'z')
      ) {
        event.preventDefault();
        this.localRedo();
      }
    });
  }

  private addBeforeUnloadListener(): void {
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  private removeBeforeUnloadListener(): void {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }

  private removeKeyboardShortcuts(): void {
    // Note: We can't easily remove specific event listeners, but this is called on destroy
    // so the component will be cleaned up anyway
  }

  private beforeUnloadHandler = (event: BeforeUnloadEvent): string | void => {
    if (this.hasUnsavedChanges) {
      event.preventDefault();
      event.returnValue =
        'You have unsaved changes. Are you sure you want to leave?';
      return 'You have unsaved changes. Are you sure you want to leave?';
    }
  };

  private handleSelectionChange(event: any): void {
    const selection = event?.newSelection || [];

    if (selection.length === 1) {
      const selectedElement = selection[0];

      if (selectedElement.type === 'bpmn:Lane') {
        this.selectedSwimlane = selectedElement;
        this.selectedState = null;
      } else if (
        [
          'bpmn:Task',
          'bpmn:StartEvent',
          'bpmn:EndEvent',
          'bpmn:SubProcess',
        ].includes(selectedElement.type)
      ) {
        this.selectedState = selectedElement;
        this.selectedSwimlane = null;
        this.loadStateFontProperties(selectedElement);
      } else {
        this.selectedSwimlane = null;
        this.selectedState = null;
      }
    } else {
      this.selectedSwimlane = null;
      this.selectedState = null;
    }
  }

  public alignStatesInSwimlane(alignment: 'top' | 'middle' | 'bottom'): void {
    if (!this.selectedSwimlane) {
      console.warn('No swimlane selected');
      this.toastr.warning('Please select a swimlane first');
      return;
    }

    console.log(
      'Aligning states in swimlane:',
      this.selectedSwimlane.id,
      'to',
      alignment
    );

    this.service.alignStatesInSwimlane(this.selectedSwimlane, alignment);

    const alignmentText =
      alignment.charAt(0).toUpperCase() + alignment.slice(1);
    this.toastr.success(`States aligned to ${alignmentText}`);
  }

  private loadStateFontProperties(element: any): void {
    const currentFontFamily = this.getCurrentFontFamily(element);
    const currentFontSize = this.getCurrentFontSize(element);
    const currentFontColor = this.getCurrentFontColor(element);
    const currentFontBold = this.getCurrentFontBold(element);
    const currentFontItalic = this.getCurrentFontItalic(element);
    const currentFontUnderline = this.getCurrentFontUnderline(element);

    const bo = element.businessObject;
    const boFontFamily = bo?.fontFamily;
    const boFontSize = bo?.fontSize;
    const boFontColor = bo?.fontColor;
    const boFontBold = bo?.fontBold;
    const boFontItalic = bo?.fontItalic;
    const boFontUnderline = bo?.fontUnderline;

    this.selectedFontFamily = this.processFontFamily(
      boFontFamily ||
        element.fontFamily ||
        (element.props && element.props.fontFamily) ||
        currentFontFamily ||
        'Arial'
    );

    this.selectedFontSize = this.processFontSize(
      boFontSize ||
        element.fontSize ||
        (element.props && element.props.fontSize) ||
        currentFontSize ||
        '14px'
    );

    this.selectedFontColor = this.processFontColor(
      boFontColor ||
        element.fontColor ||
        (element.props && element.props.fontColor) ||
        currentFontColor ||
        '#000000'
    );

    this.selectedFontBold =
      boFontBold !== undefined
        ? boFontBold
        : element.fontBold !== undefined
        ? element.fontBold
        : element.props && element.props.fontBold !== undefined
        ? element.props.fontBold
        : currentFontBold || false;

    this.selectedFontItalic =
      boFontItalic !== undefined
        ? boFontItalic
        : element.fontItalic !== undefined
        ? element.fontItalic
        : element.props && element.props.fontItalic !== undefined
        ? element.props.fontItalic
        : currentFontItalic || false;

    this.selectedFontUnderline =
      boFontUnderline !== undefined
        ? boFontUnderline
        : element.fontUnderline !== undefined
        ? element.fontUnderline
        : element.props && element.props.fontUnderline !== undefined
        ? element.props.fontUnderline
        : currentFontUnderline || false;

    console.log(
      'Processed values:',
      this.selectedFontFamily,
      this.selectedFontSize,
      this.selectedFontColor,
      this.selectedFontBold,
      this.selectedFontItalic,
      this.selectedFontUnderline
    );

    if (
      !currentFontFamily &&
      !currentFontSize &&
      !currentFontColor &&
      !boFontFamily &&
      !boFontSize &&
      !boFontColor
    ) {
      setTimeout(() => {
        this.loadStateFontPropertiesDelayed(element);
      }, 100);
    }
  }

  private processFontFamily(fontFamily: string): string {
    if (!fontFamily) return 'Arial';

    // Clean up font family string
    const cleaned = fontFamily.replace(/['"]/g, '').trim();

    // Map common font families to dropdown options
    const fontMap: { [key: string]: string } = {
      'Museo Sans': 'Museo Sans',
      Arial: 'Arial',
      Helvetica: 'Helvetica',
      'Times New Roman': 'Times New Roman',
      Georgia: 'Georgia',
      Verdana: 'Verdana',
      'Courier New': 'Courier New',
      'Comic Sans MS': 'Comic Sans MS',
      Impact: 'Impact',
      'Trebuchet MS': 'Trebuchet MS',
    };

    return fontMap[cleaned] || cleaned || 'Arial';
  }

  private processFontSize(fontSize: string): string {
    if (!fontSize) return '14px';

    // Clean up font size string
    const cleaned = fontSize.trim();

    // Map common font sizes to dropdown options
    const sizeMap: { [key: string]: string } = {
      '8px': '8px',
      '10px': '10px',
      '12px': '12px',
      '13px': '13px',
      '14px': '14px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '24px': '24px',
      '28px': '28px',
      '32px': '32px',
    };

    return sizeMap[cleaned] || cleaned || '14px';
  }

  private processFontColor(fontColor: string): string {
    if (!fontColor) return '#000000';

    // Convert color names to hex values
    const colorMap: { [key: string]: string } = {
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF0000',
      green: '#008000',
      blue: '#0000FF',
      yellow: '#FFFF00',
      orange: '#FFA500',
      purple: '#800080',
      pink: '#FFC0CB',
      gray: '#808080',
      grey: '#808080',
    };

    const lowerColor = fontColor.toLowerCase().trim();

    // If it's a named color, convert it
    if (colorMap[lowerColor]) {
      return colorMap[lowerColor];
    }

    // If it's already a hex color, return it
    if (fontColor.startsWith('#')) {
      return fontColor;
    }

    // If it's an rgb/rgba color, try to convert it
    if (fontColor.startsWith('rgb')) {
      return this.rgbToHex(fontColor);
    }

    // Default fallback
    return '#000000';
  }

  private rgbToHex(rgb: string): string {
    try {
      // Extract numbers from rgb(r, g, b) or rgba(r, g, b, a)
      const matches = rgb.match(/\d+/g);
      if (matches && matches.length >= 3) {
        const r = parseInt(matches[0]);
        const g = parseInt(matches[1]);
        const b = parseInt(matches[2]);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b)
          .toString(16)
          .slice(1)}`;
      }
    } catch (error) {
      console.warn('Error converting RGB to hex:', error);
    }
    return '#000000';
  }

  private loadStateFontPropertiesDelayed(element: any): void {
    console.log('Loading font properties (delayed) for element:', element);

    const currentFontFamily = this.getCurrentFontFamily(element);
    const currentFontSize = this.getCurrentFontSize(element);
    const currentFontColor = this.getCurrentFontColor(element);
    const currentFontBold = this.getCurrentFontBold(element);
    const currentFontItalic = this.getCurrentFontItalic(element);
    const currentFontUnderline = this.getCurrentFontUnderline(element);

    // Update only if we found new values, and process them
    if (currentFontFamily) {
      this.selectedFontFamily = this.processFontFamily(currentFontFamily);
    }
    if (currentFontSize) {
      this.selectedFontSize = this.processFontSize(currentFontSize);
    }
    if (currentFontColor) {
      this.selectedFontColor = this.processFontColor(currentFontColor);
    }
    if (currentFontBold !== undefined) {
      this.selectedFontBold = currentFontBold;
    }
    if (currentFontItalic !== undefined) {
      this.selectedFontItalic = currentFontItalic;
    }
    if (currentFontUnderline !== undefined) {
      this.selectedFontUnderline = currentFontUnderline;
    }

    console.log(
      'Updated font properties (delayed):',
      this.selectedFontFamily,
      this.selectedFontSize,
      this.selectedFontColor,
      this.selectedFontBold,
      this.selectedFontItalic,
      this.selectedFontUnderline
    );
  }

  private getCurrentFontFamily(element: any): string | null {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const fontFamily =
            textElement.getAttribute('font-family') ||
            textElement.style.fontFamily ||
            window.getComputedStyle(textElement).fontFamily;
          return fontFamily && fontFamily !== 'inherit' ? fontFamily : null;
        }
      }
    } catch (error) {
      console.warn('Error getting font family:', error);
    }
    return null;
  }

  private getCurrentFontSize(element: any): string | null {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          // Try multiple ways to get font size
          const fontSize =
            textElement.getAttribute('font-size') ||
            textElement.style.fontSize ||
            window.getComputedStyle(textElement).fontSize;
          return fontSize && fontSize !== 'inherit' ? fontSize : null;
        }
      }
    } catch (error) {
      console.warn('Error getting font size:', error);
    }
    return null;
  }

  private getCurrentFontColor(element: any): string | null {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          // Try multiple ways to get font color
          const fontColor =
            textElement.getAttribute('fill') ||
            textElement.style.fill ||
            window.getComputedStyle(textElement).fill;
          return fontColor &&
            fontColor !== 'inherit' &&
            fontColor !== 'currentColor'
            ? fontColor
            : null;
        }
      }
    } catch (error) {
      console.warn('Error getting font color:', error);
    }
    return null;
  }

  private getCurrentFontBold(element: any): boolean {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const fontWeight =
            textElement.getAttribute('font-weight') ||
            textElement.style.fontWeight ||
            window.getComputedStyle(textElement).fontWeight;
          return (
            fontWeight === 'bold' ||
            fontWeight === '700' ||
            fontWeight === '800' ||
            fontWeight === '900'
          );
        }
      }
    } catch (error) {
      console.warn('Error getting font bold:', error);
    }
    return false;
  }

  private getCurrentFontItalic(element: any): boolean {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const fontStyle =
            textElement.getAttribute('font-style') ||
            textElement.style.fontStyle ||
            window.getComputedStyle(textElement).fontStyle;
          return fontStyle === 'italic' || fontStyle === 'oblique';
        }
      }
    } catch (error) {
      console.warn('Error getting font italic:', error);
    }
    return false;
  }

  private getCurrentFontUnderline(element: any): boolean {
    try {
      const gfx = this.service.getGraphics(element);
      if (gfx) {
        const textElement = gfx.querySelector('text');
        if (textElement) {
          const textDecoration =
            textElement.getAttribute('text-decoration') ||
            textElement.style.textDecoration ||
            window.getComputedStyle(textElement).textDecoration;
          return textDecoration.includes('underline');
        }
      }
    } catch (error) {
      console.warn('Error getting font underline:', error);
    }
    return false;
  }

  public applyFontFamily(): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.applyAllElementProperties();
  }

  public applyFontSize(): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.applyAllElementProperties();
  }

  public applyFontColor(): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.applyAllElementProperties();
  }

  public toggleFontBold(): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.selectedFontBold = !this.selectedFontBold;
    this.applyAllElementProperties();
  }

  public toggleFontItalic(): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.selectedFontItalic = !this.selectedFontItalic;
    this.applyAllElementProperties();
  }

  public toggleFontUnderline(): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.selectedFontUnderline = !this.selectedFontUnderline;
    this.applyAllElementProperties();
  }

  private applyAllElementProperties(): void {
    if (!this.selectedState) return;

    console.log('Applying all element properties:', {
      fontFamily: this.selectedFontFamily,
      fontSize: this.selectedFontSize,
      fontColor: this.selectedFontColor,
      fontBold: this.selectedFontBold,
      fontItalic: this.selectedFontItalic,
      fontUnderline: this.selectedFontUnderline,
      alignment: this.selectedAlignment,
      verticalAlignment: this.selectedVerticalAlignment,
    });

    this.service.applyAllElementProperties(
      this.selectedState,
      this.selectedFontFamily,
      this.selectedFontSize,
      this.selectedFontColor,
      this.selectedFontBold,
      this.selectedFontItalic,
      this.selectedFontUnderline,
      this.selectedAlignment,
      this.selectedVerticalAlignment
    );
  }

  public applyAlignment(alignment: string): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.selectedAlignment = alignment;
    this.applyAllElementProperties();
  }

  public applyVerticalAlignment(verticalAlignment: string): void {
    if (!this.selectedState) {
      this.toastr.warning('Please select a state first');
      return;
    }

    this.selectedVerticalAlignment = verticalAlignment;
    this.applyAllElementProperties();
  }

  // Helper method to check if element is a state type
  private isStateType(element: any): boolean {
    return (
      element &&
      [
        'bpmn:Task',
        'bpmn:StartEvent',
        'bpmn:EndEvent',
        'bpmn:SubProcess',
      ].includes(element.type)
    );
  }

  private updateElementPropertiesFromSelectedElement(): void {
    if (this.selectedState) {
      const bo = this.selectedState.businessObject;
      if (bo) {
        this.selectedFontFamily =
          bo.fontFamily || this.selectedState.fontFamily || 'Arial';
        this.selectedFontSize =
          bo.fontSize || this.selectedState.fontSize || '14px';
        this.selectedFontColor =
          bo.fontColor || this.selectedState.fontColor || '#000000';
        this.selectedFontBold =
          bo.fontBold || this.selectedState.fontBold || false;
        this.selectedFontItalic =
          bo.fontItalic || this.selectedState.fontItalic || false;
        this.selectedFontUnderline =
          bo.fontUnderline || this.selectedState.fontUnderline || false;
        this.selectedAlignment =
          bo.alignment || this.selectedState.alignment || 'center';
        this.selectedVerticalAlignment =
          bo.verticalAlignment ||
          this.selectedState.verticalAlignment ||
          'middle';
      } else {
        this.selectedFontFamily = this.selectedState.fontFamily || 'Arial';
        this.selectedFontSize = this.selectedState.fontSize || '14px';
        this.selectedFontColor = this.selectedState.fontColor || '#000000';
        this.selectedFontBold = this.selectedState.fontBold || false;
        this.selectedFontItalic = this.selectedState.fontItalic || false;
        this.selectedFontUnderline = this.selectedState.fontUnderline || false;
        this.selectedAlignment = this.selectedState.alignment || 'center';
        this.selectedVerticalAlignment =
          this.selectedState.verticalAlignment || 'middle';
      }

      this.cdr.detectChanges();
    }
  }
}
