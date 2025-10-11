import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '@app/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { takeWhile } from 'rxjs/operators';
import { DetailService } from '../../services/detail.service';
import { TriggerDetailComponent } from '../trigger-detail/trigger-detail.component';
import { KeyValueList, keyValueListToKeyList, objToList, primitiveArrayToList, toFormArray, toFormGroup } from '../../util/helpers';
import { ActivatedRoute } from '@angular/router';
import { WorkflowApiService } from '../../services/workflow-api.service';
import { EditorConfigService } from '@app/admin/CommonService/editor-config.service';
import { NgIf, NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-timer-detail',
    templateUrl: './timer-detail.component.html',
    styleUrls: ['./timer-detail.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgClass,
    ],
})
export class TimerDetailComponent extends TriggerDetailComponent {
  //noEndDate = new UntypedFormControl(false);
  isTimer = true;
  isrec = false;
  declare form: FormGroup;
  constructor(
    fb: UntypedFormBuilder,
    ref: NgbActiveModal,
    msg: MessageService,
    detail: DetailService,
    route: ActivatedRoute,
    wfapi: WorkflowApiService,
   readonly editorConfigService: EditorConfigService,
    public toastr: ToastrService,
  ) {
    super(fb, ref, msg, detail, route, wfapi,editorConfigService);
    /*this.noEndDate.valueChanges
      .pipe(takeWhile(_ => this.componentActive))
      .subscribe(checked => {
        const periodEnd = this.form.get('periodEnd');
        checked ? periodEnd.disable() : periodEnd.enable();
      })*/
  }
 
 afterFormInit() {

  setTimeout(_ => {
      if(this.form.get('freq').value==='Recurring'){
      this.isrec=true;
    }
    })
  }
  onRadioChange(event: any) {
    if(event.target.value==='One Time'){
      this.isrec=false;
    }
    else{
      this.isrec=true;
    }
  }
}
