import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Status } from '@app/admin/data-modeler/models';
import { ListConfig } from '@app/admin/lib/list/list-config.model';
import { MessageService } from '@app/core';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaveStatePayload, StateSpecificationType, TriggerListItem, WFStateDetail } from '../../models';
import { ElementType, StateShapeType } from '../../models/bpmn';
import { ElementDetail } from '../../models/element-detail.class';
import { State } from '../../models/wf.model';
import { DetailService } from '../../services/detail.service';
import { arrayToList, KeyValueList, keyValueListToKeyList, objToList, toFormArray } from '../../util/helpers';
import { WorkflowApiService } from '../../services/workflow-api.service';
import { ActivatedRoute } from '@angular/router';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { NgIf, NgClass, AsyncPipe, KeyValuePipe } from '@angular/common';
import { EditorComponent } from '../../../../Shared/editor/editor.component';
import { CustomSelectComponent } from '../../../../lib/custom-select/custom-select.component';
import { ListComponent } from '../../../../lib/list/list.component';
import { TreeListComponent } from '../../../../lib/tree-list/tree-list.component';
import { QuillModule } from 'ngx-quill';


const t = ElementType;

@Component({
    selector: 'app-state-detail',
    templateUrl: './state-detail.component.html',
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
        EditorComponent,
        CustomSelectComponent,
        ListComponent,
        TreeListComponent,
        AsyncPipe,
        KeyValuePipe,
        QuillModule
    ],
})
export class StateDetailComponent extends ElementDetail<State, WFStateDetail, SaveStatePayload> {
  endStateList$: Observable<KeyValueList<string, string>>;
  checkList: ListConfig<{Description: string}>;
  declare element: StateShapeType;
  readonly displayTrigger = (t: TriggerListItem) => t.TRGDISPNAME;
  processName: any;
  verNo: any;
  id: any;
  editorConfig: any;
  
  constructor(
    public wfapi: WorkflowApiService,
    private readonly route: ActivatedRoute,
    private detail: DetailService,
    fb: UntypedFormBuilder, 
    ref: NgbActiveModal,
    msg: MessageService,
   readonly editorConfigService: EditorConfigService,
  ) { 
    super(fb, ref, msg);
  }

  get isSubProcess() {
    return this.element.type === t.SubProcess;
  }

  get name() {
    return this.isSubProcess ? 'Subprocess' : 'State';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.processName = params['processName']; 
      this.verNo = params['VerNo']; 
      this.id=params['id'];
   });

    this.endStateList$ = of(this.newElement 
      ? [] 
      : objToList(this.data.SubProcessEndStates.AvailableSubProcessEndState)
    );

    if (this.isSubProcess) {
      this.formActions = [
        {
          controlName: 'subProcessID', 
          handler: (id: {key: string} | string) => this.endStateListHandler(typeof id === 'string' ? id : id.key)
        },
      ];
    }

    this.checkList = {
      columns: [
        {
          key: 'Description', 
          displayValue: 'Description', 
          placeholder: 'Enter checklist name', 
          validators: [Validators.required]
        }
      ],
      checkbox: true,
      actions: {add: true, delete: true, edit: true},
    }
    this.form = this.fb.group({
      name: [this.newElement ? '' : this.data.Name, NAME_VALIDATORS],
      friendlyName: [this.newElement ? '' : this.data.FriendlyName, Validators.required],
      status: [this.newElement ? Status.Active : this.data.Status, Validators.required],
      shortDescription: [this.newElement ? '' : this.data.ShortDescription, Validators.required],
      longDescription: [this.newElement ? '' : this.data.LongDescription],
      stateRole: [this.newElement ? '' : objToList(this.data.StateRole.SelectedRoles), [Validators.required]],
      stateSpecification: [this._setStateSpec(), [Validators.required]],
      subProcessID: [
        this.isSubProcess ?  objToList(this.data?.SubProcess?.SelectedSubProcess)[0] || '' : '', 
        this.isSubProcess ? [Validators.required] : []
      ],
      subProcessEndStateIds: [
        objToList(this.data.SubProcessEndStates?.SelectedSubProcessEndState), 
        this.isSubProcess ? [Validators.required] : [],
      ],
      checkList: toFormArray(this.data.CheckList, {addCheckbox: this.checkList.checkbox}),
      
    });

    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }

  public CheckValidationWF() {
    if(this.newElement===false || !this.form.controls['name'].value){
      return;
    }
    const processName = this.processName;
    const type = 'state';
    const wfId = this.id; 
    const name = this.form.controls['name'].value;
    const version = this.verNo; 
  
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate: boolean) => {
        this.detail.handleValidationResult(isDuplicate, this.form.controls['name']);
      },
      error: (error) => {
        this.detail.handleValidationError(error);
      }
    });
  }
    

  private endStateListHandler(processId: string) {
    if (processId) {
      this.endStateList$ = this.detail.getEndStatesByApp(processId)
        .pipe(map(res => arrayToList(res, 'WfoSId', 'StateDisplayName')));
    }
    this.form.get('subProcessEndStateIds').reset();
  }

  private _setStateSpec() {
    const spec = StateSpecificationType;
    let key: StateSpecificationType;
    switch (this.element.type) {
      case t.StartState: key = spec.Start; break;
      case t.EndState: key = spec.End; break;
      default: key = spec.Task; break;
    }
    return {key, value: this.data.StateSpecification.AvailableStateSpecification[key] || 'State'}
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const v = this.form.value;
      const payload: SaveStatePayload = {
        ...v,
        wfoId: this.element.parent?.props?.WfoId,
        wfosId: this.newElement ? '' : this.element.props.WfosId,
        workFlowId: this.workflow.WFID,
        stateRole: keyValueListToKeyList(v.stateRole).toString(),
        stateSpecification: v.stateSpecification.key ?? v.stateSpecification,
        subProcessID: v.subProcessID.key || v.subProcessID,
        subProcessEndStateIds: keyValueListToKeyList(v.subProcessEndStateIds).toString(),
        checkList: v.checkList.map(check => {
          return {
            ...check,
            ChecklistId: check.ChecklistId ?? 0,
            WfosId: this.newElement ? '' : this.element.props.WfosId,
          }
        }),
        TriggerList: this.data.TriggerList,
      }
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
  
}