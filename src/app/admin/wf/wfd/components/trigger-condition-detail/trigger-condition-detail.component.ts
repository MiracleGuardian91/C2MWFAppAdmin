import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Status } from '@app/admin/data-modeler/models';
import { ListColumnType, ListConfig } from '@app/admin/lib/list/list-config.model';
import { MessageService } from '@app/core';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveTriggerConditionPayload, TriggerConditionFilter, WFTriggerConditionDetail, WorkflowFile } from '../../models';
import { ElementType, TriggerConditionConnection } from '../../models/bpmn';
import { ElementDetail } from '../../models/element-detail.class';
import { TriggerCondition } from '../../models/wf.model';
import { FileSizePipe } from '../../pipes/filesize.pipe';
import { DetailService } from '../../services/detail.service';
import { isStateType } from '../../util/bpmn';
import { KeyValueList, keyValueListToKeyList, objToList, primitiveArrayToList, toFormArray, toFormGroup } from '../../util/helpers';
import { WorkflowApiService } from '../../services/workflow-api.service';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgClass, KeyValuePipe } from '@angular/common';
import { CustomSelectComponent } from '../../../../lib/custom-select/custom-select.component';
import { ListComponent } from '../../../../lib/list/list.component';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { EditorComponent } from '../../../../Shared/editor/editor.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { QuillModule } from 'ngx-quill';


@Component({
    selector: 'app-trigger-condition-detail',
    templateUrl: './trigger-condition-detail.component.html',
    styleUrls: ['./trigger-condition-detail.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
        CustomSelectComponent,
        ListComponent,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        EditorComponent,
        FileUploaderComponent,
        KeyValuePipe,
        QuillModule
    ],
})
export class TriggerConditionDetailComponent extends ElementDetail<
  TriggerCondition,
  WFTriggerConditionDetail,
  SaveTriggerConditionPayload
> {
  private readonly fileSizePipe = new FileSizePipe();
  readonly allowedExtensions = [
    'docx',
    'doc',
    'csv',
    'mp3',
    'wmv',
    'jpg',
    'jpeg',
    'pdf',
    'xls',
    'xlsx',
    'sql',
    'zip',
    'bin',
    'mov',
    'mp4',
    'bmp',
    'gif',
    'txt',
    'png',
    'ppt',
    'pptx',
  ];

  declare element: TriggerConditionConnection;
  filters: ListConfig<TriggerConditionFilter>;
  filesConfig: ListConfig<WorkflowFile>;
  filesUploading = false;
  parentTriggers: KeyValueList<string, string>;
  processName: any;
  verNo: any;
  id: any;
  editorConfig: any;
  constructor(fb: UntypedFormBuilder, ref: NgbActiveModal, msg: MessageService, 
    private readonly detail: DetailService,
    public wfapi: WorkflowApiService,
    readonly editorConfigService: EditorConfigService,
    private readonly route: ActivatedRoute) {
    super(fb, ref, msg);
    this.formActions = [
      {
        controlName: 'files',
        handler: (files: File[]) => this.fileListHandler(files),
      },
    ];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.processName = params['processName']; 
      this.verNo = params['VerNo']; 
      this.id=params['id'];
   });
   
    this.filesConfig = {
      columns: [
        { key: 'FileName', displayValue: 'File Name', type: ListColumnType.File },
        { key: 'FileSize', displayValue: 'Size', type: ListColumnType.File },
      ],
      actions: { delete: true, download: true },
      checkbox: true,
    };
    this.configureFilters();
    const stageState = this.getStateStageInformation();
    this.form = this.fb.group({
      conditionName: [this.newElement ? '' : this.data.ConditionName, NAME_VALIDATORS],
      conditionDescription: [
        this.newElement ? '' : this.data.ConditionDescription, 
        [Validators.required, Validators.maxLength(100)]
      ],
      status: [this.newElement ? Status.Active : this.data.Status, [Validators.required]],
      endWfoId: [stageState.endStage, [Validators.required]],
      endWfosId: [stageState.endState, [Validators.required]],
      notify: [this.data.Notify],
      roleGuid: [this.newElement ? [] : objToList(this.data.EmailRole.SelectedTriggerEmailRole)],
      filter: toFormArray(this.data.Filter, { addCheckbox: this.filters.checkbox }),
      fileNames: toFormArray(this.data.Files, {
        addCheckbox: this.filesConfig.checkbox,
      }),
      deletedUploadedFiles: [[]],
      files: [[]],
      emailSubject: [this.newElement ? '' : this.data.EmailSubject],
      ccMAilRoleGuids: [this.newElement ? [] : objToList(this.data.CcEmailRole.SelectedCCEmailTrgrRole)],
    });
    if (this.newElement) {
      this.addTriggerControl();
    }
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }

  public CheckValidationWF() {
    if(this.newElement===false || !this.form.controls['conditionName'].value){
      return;
    }
    const processName = this.processName;
    const type = 'trgcond';
    const wfId = this.id; 
    const name = this.form.controls['conditionName'].value;
    const version = this.verNo; 
  
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate: boolean) => {
        this.detail.handleValidationResult(isDuplicate, this.form.controls['conditionName']);
      },
      error: (error) => {
        this.detail.handleValidationError(error);
      }
    });
  }

  public onFilesUpload(files: File[]) {
    this.form.get('files').patchValue(files);
  }

  public fileListHandler(files: File[]) {
    const fileList = this.form.get('fileNames') as UntypedFormArray;
    const unique = [];
    files.forEach((file) => {
      if (!fileList.controls.some((group: UntypedFormGroup) => group.get('FileName').value === file.name)) {
        unique.push(file);
      }
    });
    this.filesUploading = true;
    this.detail.uploadFiles(unique, this.workflow.WFID, this.element.id).subscribe(
      (file) => {
        const wfFile: WorkflowFile = {
          FileName: file.name,
          FileSize: this.fileSizePipe.transform(file.size.toString()),
        };
        fileList.push(toFormGroup(wfFile, { addCheckbox: this.filesConfig.checkbox }));
      },
      () => null,
      () => (this.filesUploading = false)
    );
  }

  onIgnoredFiles(files: File[]) {
    this.msg.showMessage('Warning', {
      body: `The following files are not allowed to be uploaded: \n
            ${files.map((file) => `<br>${file.name}`).join('')}`,
    });
  }

  public onFileDelete(file: WorkflowFile) {
    const control = this.form.get('deletedUploadedFiles');
    const values = control.value as string[];
    values.push(file.FileName);
    control.patchValue(values);
  }

  public onFileDownload(filename: string) {
    const uploadedAndSaved = (this.data.Files || []).some((f) => f.FileName === filename);
    this.detail
      .downloadFile(
        this.workflow.ProcessName,
        filename,
        this.workflow.WFID,
        this.data.ConditionName || '',
        'triggercondition',
        uploadedAndSaved ? '' : this.element.id
      )
      .subscribe();
  }

  private configureFilters() {
    const bools = ['AND', 'OR'];
    const operators = ['LT', 'LE', 'GT', 'GE', 'EQ', 'NOT EQ', 'LIKE', 'NOT IN', 'IN'];
    const trigger = this.element.source.incoming[0];
    this.filters = {
      columns: [
        { key: 'DmoName', displayValue: 'Dmo Name', type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: 'Operator', displayValue: 'Operator', type: ListColumnType.Dropdown, validators: [Validators.required] },
        { key: 'Value', displayValue: 'Value', validators: [Validators.required] },
        { key: 'BooleanExpression', displayValue: 'Boolean Expression', type: ListColumnType.Dropdown, validators: [Validators.required] },
      ],
      defaultValues: {
        BooleanExpression: primitiveArrayToList(bools),
        Operator: primitiveArrayToList(operators),
        DmoName: this.detail.getDmos(trigger.props.TriggerId, this.newElement ? '' : this.element.props.ConditionId),
      },
      actions: { add: true, delete: true, edit: true },
      checkbox: true,
    };
    // const trigger = this.element.source.incoming[0];
  }

  private getStateStageInformation() {
    const { target } = this.element;
    if (isStateType(target)) {
      const endState = { key: target.props.WfosId, value: target.businessObject.name };
      const parent = target.parent;
      if (parent.type === ElementType.Stage) {
        const endStage = { key: parent.props.WfoId, value: parent.businessObject.name };
        return { endState, endStage };
      }
    }
  }

  private addTriggerControl() {
    this.parentTriggers = this._getParentTriggers().map((flow) => {
      return {
        key: flow.props.TriggerId,
        value: flow.businessObject.name,
      };
    });
    const value = this.parentTriggers.length === 1 ? this.parentTriggers[0] : [];
    this.form.addControl('triggerId', new UntypedFormControl(value, [Validators.required]));
    this.form.updateValueAndValidity();
  }

  private _getParentTriggers() {
    return this.element.source.incoming;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const props = this.element?.props;
      const payload: SaveTriggerConditionPayload = {
        ...this.form.value,
        conditionId: this.newElement ? '' : props.ConditionId,
        triggerId: this.newElement ? this.form.value.triggerId.key : props.TriggerId,
        roleGuid: keyValueListToKeyList(this.form.value.roleGuid),
        ccMAilRoleGuids: keyValueListToKeyList(this.form.value.ccMAilRoleGuids),
        endWfoId: this.form.value.endWfoId.key,
        endWfosId: this.form.value.endWfosId.key,
        wfId: this.workflow.WFID,
        fileNames: this.form.value.fileNames.map(({ FileName }) => FileName).toString(), // ????
        deletedUploadedFiles: this.form.value.deletedUploadedFiles.toString(),
        fileUploadLoc: this.element.id,
        status: this.form.value.status?.toString(),
        filter: this.form.value.filter.map((f) => ({
          ...f,
          FilterId: f.FilterId || null,
          BooleanExpression: f.BooleanExpression.key || f.BooleanExpression,
          DmoName: f.DmoName?.key || f.DmoName,
          Operator: f.Operator?.key || f.Operator,
          Value: f.Value?.key || f.Value,
        })),
      };
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
}
