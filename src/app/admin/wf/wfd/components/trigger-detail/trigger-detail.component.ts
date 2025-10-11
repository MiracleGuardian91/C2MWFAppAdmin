import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Status,NotificationOption } from '@app/admin/data-modeler/models';
import { ListColumnType, ListConfig } from '@app/admin/lib/list/list-config.model';
import { MessageService } from '@app/core';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveTriggerPayload, TriggerActionType, TriggerType, WFTriggerDetail, WorkflowFile } from '../../models';
import { ElementType, TriggerConnection, TriggerExtensionShape } from '../../models/bpmn';
import { ElementDetail } from '../../models/element-detail.class';
import { State, Trigger } from '../../models/wf.model';
import { FileSizePipe } from '../../pipes/filesize.pipe';
import { DetailService } from '../../services/detail.service';
import { isStateType } from '../../util/bpmn';
import { getTriggerType } from '../../util/bridge';
import { keyValueListToKeyList, objToList, toFormArray, toFormGroup } from '../../util/helpers';
import { WorkflowApiService } from '../../services/workflow-api.service';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgClass, KeyValuePipe } from '@angular/common';
import { CustomSelectComponent } from '../../../../lib/custom-select/custom-select.component';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { EditorComponent } from '../../../../Shared/editor/editor.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { ListComponent } from '../../../../lib/list/list.component';
import { QuillModule } from 'ngx-quill';
import { firstValueFrom } from 'rxjs';


const t = ElementType;

@Component({
    selector: 'app-trigger-detail',
    templateUrl: './trigger-detail.component.html',
    styleUrls: ['./trigger-detail.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
        CustomSelectComponent,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        EditorComponent,
        FileUploaderComponent,
        ListComponent,
        KeyValuePipe,
        QuillModule
    ],
})
export class TriggerDetailComponent extends ElementDetail<Trigger, WFTriggerDetail, SaveTriggerPayload> {

  private readonly fileSizePipe = new FileSizePipe();
  readonly allowedExtensions = ['docx', 'doc', 'csv', 'mp3', 'wmv', 'jpg', 'jpeg', 'pdf', 'xls', 'xlsx', 'sql', 'zip', 'bin', 'mov', 'mp4', 'bmp',  'gif', 'txt', 'png', 'ppt', 'pptx']
  declare element: TriggerConnection | TriggerExtensionShape;
  filesConfig: ListConfig<WorkflowFile>;
  filesUploading = false;
  isTimer = false;
  uploadLocation: string;
  public triggers:any;
  processName: any;
  verNo: any;
  id: any;
  editorConfig: any;
  roleTypsDmo: any;
 

  constructor(
    fb: UntypedFormBuilder, 
    ref: NgbActiveModal,
    msg: MessageService,
    private readonly detail: DetailService,
    private readonly route: ActivatedRoute,
    private readonly wfapi: WorkflowApiService,
    readonly editorConfigService: EditorConfigService
  ) { 
    super(fb, ref, msg);
    this.formActions = [
      {
        controlName: 'files',
        handler: (files: File[]) => this.fileListHandler(files),
      }
    ]
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.processName = params['processName']; 
      this.verNo = params['VerNo']; 
      this.id=params['id'];
   });

    this.uploadLocation = this.isTimer 
      ? this.element.incoming[0].props.TriggerId // trigger's id
      : this.element.id;
    this.filesConfig = {
      columns: [
        {key: 'FileName', displayValue: 'File Name', type: ListColumnType.File},
        {key: 'FileSize', displayValue: 'Size', type: ListColumnType.File},
      ],
      actions: {delete: true, download: true},
      checkbox: true,
    }

    this.form = this.fb.group({
      name: [this.data.Name, NAME_VALIDATORS],
      friendlyName: [this.data.FriendlyName, Validators.required],
      triggerType: [this.newElement ? '' : objToList(this.data.TriggerType.SelectedTriggerType)[0] || '', [Validators.required]],
      status: [this.newElement ? Status.Active : this.data.Status, [Validators.required]],
      triggerAction: [this.newElement ? '' : objToList(this.data.TriggerAction.SelectedTriggerAction)[0] || '', [Validators.required]],
      triggerConfirmMsg: [this.data.TrigggerConfirmMsg],
      notificationOption: [
        this.newElement
          ? this.getNotificationOption('0')
          : this.getNotificationOption(this.data.NotificationOption),
        Validators.required
      ],
      fileNames: toFormArray(this.data.Files, {
        addCheckbox: this.filesConfig.checkbox,
      }),
      deletedUploadedFiles: [[]],
      files: [[]],
      triggerRoleGuid: [this.newElement ? [] : objToList(this.data.TriggerRole.SelectedTriggerRole), [Validators.required]],
      triggerEmailRoleGuid: [this.newElement ? [] : objToList(this.data.TriggerEmailRole.SelectedTriggerEmailRole)],
      ccEmailTrgrRolelist: [this.newElement ? [] : objToList(this.data.CCTriggerEmailRole.SelectedCCEmailTrgrRole)],
      emailSubject: [this.data.EmailSubject],
      notify: [this.data.Notify],
      sharedTrgList: [this.newElement ? [] : objToList(this.data.SharedTrgList.SelectedSharedStates)],
      periodStart: [this.data.PeriodStart], 
      periodFrequency: [this.data.PeriodFrequency], 
      periodEnd: [this.data.PeriodEnd],
      freq: [this.data?.Freq || 'One Time'],
      recurrenceStart: [this.data?.RecurrenceStart || 'Hours'],
      recurrenceFrequency: [this.data?.RecurrenceFrequency || 'Hours'],
      NotificationOption: [
        this.newElement
          ? this.getNotificationOption('0')
          : this.getNotificationOption(this.data.NotificationOption),
        Validators.required
      ],
      toAdditionalList : [this.newElement ? [] : objToList(this.data.AdditionalToList?.SelectedAdditionalToRole)],
      ccAdditionalList:[ this.newElement ? []  : objToList(this.data?.AdditionalCcList?.SelectedAdditionalCcRole)]
    });
    if (this.newElement) {
      this.setInitValues(); 
    }
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }

  notificationOptions = [
    { key: '0', value: 'None' },
    { key: '1', value: 'Custom Notification' }
  ];

  // helper to find the matching object
  getNotificationOption(key: number | string) {
    return this.notificationOptions.find(opt => opt.key === String(key)) ?? null;
  }

  public CheckValidationWF() {
    if(this.newElement===false || !this.form.controls['name'].value){
      return;
    }
    const processName = this.processName;
    const type = 'trigger';
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

  private setInitValues() {
    const el = this.isTimer ? this.element : (this.element as TriggerConnection).target;
    const type = el.type;
    let triggerTypeValue = null;
    if (type === t.TriggerExtension) {
      const triggerType = getTriggerType(el.incoming[0]);
      triggerTypeValue = objToList(this.data.TriggerType.AvailableTriggerType).find(t => +t.key === triggerType);
      
      const triggerAction = objToList(this.data.TriggerAction.AvailableTriggerAction).find(t => +t.key === TriggerActionType.SubmitValidationNA);
      this.form.get('triggerAction').patchValue(triggerAction);
    } else if (isStateType(el) || type === t.Gateway) {
      triggerTypeValue = objToList(this.data.TriggerType.AvailableTriggerType).find(t => +t.key === TriggerType.Action);
    }
    this.form.get('triggerType').patchValue(triggerTypeValue);
  }

  public onFilesUpload(files: File[]) {
    this.form.get('files').patchValue(files);
  }

  public fileListHandler(files: File[]) {
    const fileList = this.form.get('fileNames') as UntypedFormArray;
    const unique = [];
    files.forEach(file => {
      if (!fileList.controls.some((group: UntypedFormGroup) => group.get('FileName').value === file.name)) {
        unique.push(file);
      }
    })
    this.filesUploading = true;
    this.detail.uploadFiles(unique, this.workflow.WFID, this.uploadLocation).subscribe(
      file => {
        const wfFile: WorkflowFile = {
          FileName: file.name,
          FileSize: this.fileSizePipe.transform(file.size.toString()),
        }
        fileList.push(toFormGroup(wfFile, {addCheckbox: this.filesConfig.checkbox}));
      },
      () => null,
      () => this.filesUploading = false,
    );
  }

  onIgnoredFiles(files: File[]) {
    this.msg.showMessage('Warning', {
      body: `The following files are not allowed to be uploaded: \n
            ${files.map(file => `<br>${file.name}`).join('')}`
    })
  }

  public onFileDelete(file: WorkflowFile) {
    const control = this.form.get('deletedUploadedFiles');
    const values = control.value as string[];
    values.push(file.FileName);
    control.patchValue(values);
  }

  public onFileDownload(filename: string) {
    const uploadedAndSaved = (this.data.Files || []).some(f => f.FileName === filename);
    this.detail.downloadFile(
      this.workflow.ProcessName, 
      filename, 
      this.workflow.WFID, 
      this.data.Name || '', 
      'trigger', 
      uploadedAndSaved ? '' : this.uploadLocation,
    ).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    const rawFormValue = this.form.value;
    if (this.form.valid) {
      const el = (this.isTimer ? this.element.incoming[0] : this.element) as TriggerConnection;
      const props = el.props;
      const state = el.source.props as State;
      const payload: SaveTriggerPayload = {
        ...this.form.value,
        triggerAction: this.form.value.triggerAction.key || this.form.value.triggerAction,
        triggerType: this.form.value.triggerType.key || this.form.value.triggerType,
        sharedTrgList: keyValueListToKeyList(this.form.value.sharedTrgList).toString(),
        triggerRoleGuid: keyValueListToKeyList(this.form.value.triggerRoleGuid),
        triggerEmailRoleGuid: keyValueListToKeyList(this.form.value.triggerEmailRoleGuid),
        ccEmailTrgrRolelist: keyValueListToKeyList(this.form.value.ccEmailTrgrRolelist),
        toAdditionalList: keyValueListToKeyList(this.form.value.toAdditionalList || []),
        ccAdditionalList: keyValueListToKeyList(this.form.value.ccAdditionalList || []),
        startWfoid: state.WfoId,
        startWfosid: state.WfosId,
        triggerId: props?.TriggerId,
        triggerGuid: props?.Guid,
        fileNames: this.form.value.fileNames.map(({FileName}) => FileName).toString(), // ????
        deletedUploadedFiles: this.form.value.deletedUploadedFiles.toString(),
        fileUploadLoc: this.uploadLocation,
        workFlowId: this.workflow.WFID,
        processName: this.workflow.ProcessName,
        TrigggerConfirmMsg:this.form.value.triggerConfirmMsg ,
        periodEnd: this.form.get('periodEnd').disabled ? -1 : this.form.get('periodEnd').value,
        freq:this.form.get('freq').value,
        NotificationOption: +rawFormValue.NotificationOption?.key,
        notificationOption:+rawFormValue.NotificationOption?.key
      }
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }
  
}
