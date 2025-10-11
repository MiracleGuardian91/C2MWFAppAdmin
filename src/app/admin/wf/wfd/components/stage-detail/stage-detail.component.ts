import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Status } from '@app/admin/data-modeler/models';
import { NAME_VALIDATORS } from '@lib/common/const';
import { SaveStagePayload, WFStageDetail } from '../../models';
import { ElementDetail } from '../../models/element-detail.class';
import { Stage } from '../../models/wf.model';
import { WorkflowApiService } from '../../services/workflow-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '@app/core';
import { DetailService } from '../../services/detail.service';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { NgIf, NgClass } from '@angular/common';
import { EditorComponent } from '../../../../Shared/editor/editor.component';
import { QuillModule } from 'ngx-quill';

@Component({
    selector: 'app-stage-detail',
    templateUrl: './stage-detail.component.html',
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
        EditorComponent,
        QuillModule
    ],
})
export class StageDetailComponent extends ElementDetail<
  Stage,
  WFStageDetail,
  SaveStagePayload
> {
  processName: any;
  editorConfig: any;
  verNo: any;
  id: any;

  constructor(
    private readonly route: ActivatedRoute,
    fb: UntypedFormBuilder,
    ref: NgbActiveModal,
    msg: MessageService,
    public wfapi: WorkflowApiService,
    public detailService: DetailService,
    readonly editorConfigService: EditorConfigService,
  ) {
    super(fb, ref, msg);
  }

 

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.processName = params['processName'];
      this.verNo = params['VerNo'];
      this.id = params['id'];
    });

    this.form = this.fb.group({
      name: [this.data.StageName, NAME_VALIDATORS],
      friendlyName: [this.data.DisplayName, Validators.required],
      status: [
        this.newElement ? Status.Active : this.data.Status,
        Validators.required,
      ],
      shortDescription: [this.data.ShortDescription, Validators.required],
      longDescription: [this.data.LongDescription],
    });
    this.editorConfig = this.editorConfigService.getToolbarOptions();
   
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const payload: SaveStagePayload = {
        ...this.form.value,
        accessToken: localStorage.getItem('AccessToken'),
        wfoId: this.data.WfoId || '',
        workFlowId: this.workflow.WFID,
      };
      this.updated.emit(payload);
      this.ref.close(payload);
    }
  }

  public CheckValidationWF() {
    if (this.newElement === false || !this.form.controls['name'].value) {
      return;
    }
    const processName = this.processName;
    const type = 'stage';
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
}