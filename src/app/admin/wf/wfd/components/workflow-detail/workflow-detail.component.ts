import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ListConfig } from '@app/admin/lib/list/list-config.model';
import { NAME_VALIDATORS } from '@lib/common/const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveWorkflowPayload, StatePercentage, WFDetail } from '../../models';
import { ElementDetail } from '../../models/element-detail.class';
import { Workflow } from '../../models/wf.model';
import { keyValueListToKeyList, objToList, sanitizeFormArray } from '../../util/helpers';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '@app/core';
import { WorkflowApiService } from '../../services/workflow-api.service';
import { DetailService } from '../../services/detail.service';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { NgIf, NgClass, KeyValuePipe } from '@angular/common';
import { CustomSelectComponent } from '../../../../lib/custom-select/custom-select.component';
import { EditorComponent } from '../../../../Shared/editor/editor.component';
import { QuillModule } from 'ngx-quill';


@Component({
    selector: 'app-workflow-detail',
    templateUrl: './workflow-detail.component.html',
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
        CustomSelectComponent,
        EditorComponent,
        KeyValuePipe,
        QuillModule
    ],
})
export class WorkflowDetailComponent extends ElementDetail<Workflow, WFDetail, SaveWorkflowPayload> {
  statePercentages: ListConfig<StatePercentage>;
  processName: any;
  id: any;
  verNo: any;
  editorConfig: any;

  constructor(
      private readonly route: ActivatedRoute,
      fb: UntypedFormBuilder, 
      ref: NgbActiveModal,
      msg: MessageService,
      private readonly wfapi: WorkflowApiService,
      private readonly detailService: DetailService,
      readonly editorConfigService: EditorConfigService
  
    ) { 
      super(fb, ref, msg);
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.processName = params['processName']; 
      this.verNo = params['VerNo']; 
      this.id=params['id'];
   });
    this.statePercentages = {
      columns: [
        {key: 'FriendlyName', displayValue: 'State'},
        {key: 'Percentage', displayValue: '(%)', asControl: true},
      ],
      checkbox: true,
    };
    this.form = this.fb.group({
      name: [this.data.Name, NAME_VALIDATORS],
      friendlyName: [this.data.FriendlyName, Validators.required],
      shortDesc: [this.data.ShortDescription, Validators.required],
      longDesc:[this.data.LongDescription],
      version: [this.data.Version],
      obeMailSublect:  [this.data.OBEEmailSub],
      emailFrom: [this.data.EmailFrom, Validators.required],
      processName: [objToList(this.data.AllCertificationType).find(({key}) => key === this.data.CertificationType), [Validators.required]],
      // AllAvailableRoles:    Record<string, string>;
      associatedRoles: [objToList(this.data.AssociatedRoles)],
      statePercentage: this.fb.array(this.newElement ? [] : this.data.StatesPercentage.map(s => this.fb.group({
        ...s,
        checked: +s.IsEndState,
      }))),
    });

    this.editorConfig = this.editorConfigService.getToolbarOptions();
   
  }


  public CheckValidationWF() {
    if(this.newElement===false || !this.form.controls['name'].value){
      return;
    }
    const processName = this.processName;
    const type = 'wf';
    const wfId = this.id; 
    const name = this.form.controls['name'].value;
    const version = this.verNo; 
  
    this.wfapi.CheckValidationWF(processName, type, wfId, name, version).subscribe({
      next: (isDuplicate: boolean) => {
        this.detailService.handleValidationResult(isDuplicate, this.form.controls['name']);
      },
      error: (error) => {
        this.detailService.handleValidationError(error);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const payload: SaveWorkflowPayload = {
        ...this.form.value,
        statePercentage: sanitizeFormArray(this.form.value.statePercentage, 'IsEndState').map(s => ({...s, IsEndState: +s.IsEndState})),
        associatedRoles: keyValueListToKeyList(this.form.value.associatedRoles).toString(),
        wfId: this.newElement ? '' : this.workflow.WFID,
        processName: this.data.AllCertificationType[this.form.value.processName.key || this.form.value.processName],    
      }
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }

}
