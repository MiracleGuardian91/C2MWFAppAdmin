import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';

import { WFService } from '@app/admin/core/services/wfservice.service';
import { SharedModule } from '@app/shared/shared.module';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  standalone: true, 
  imports: [FormsModule, QuillModule,NgIf],
  selector: 'app-wf-email-template',
  templateUrl: './wf-email-template.component.html',
  styleUrls: ['./wf-email-template.component.scss'],
})
export class WfEmailTemplateComponent implements OnInit {
  EmailDescription = '';
  Submitted = false;
  WFId: any;
  WFName: any;
  Version: any;
  editorConfig: any;
 
  constructor(
    private formBuilder: UntypedFormBuilder,
    public activeModal: NgbActiveModal,
    readonly wfsrvc: WFService,
    readonly editorConfigService: EditorConfigService
  ) { }

  ngOnInit() {
    
    this.GetWFEmailTemplate();
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }

  AddEmailTemplate() {
    this.Submitted = true;
    if (this.EmailDescription !== '' && this.EmailDescription != undefined) {
      this.Submitted = false;
      const bodyData = {
        wfId: this.WFId,
        WorkflowName: this.WFName,
        Version: this.Version,
        EmailTemplate: this.EmailDescription,
      };
      this.wfsrvc.SaveWFEmailTemplate(bodyData).subscribe(
        (result) => {
          if (!!result && result === 'Data saved successfully.') {
            this.activeModal.close(true);
            this.Submitted = false;
            return true;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.Submitted = true;
      return;
    }
  }

  GetWFEmailTemplate() {
    this.wfsrvc.GetWFEmailTemplate(this.WFId).subscribe(
      (res) => {
        if (!!res) {
          this.EmailDescription = res?.EmailTemplate || '';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
