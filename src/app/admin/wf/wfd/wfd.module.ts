import { NgModule } from '@angular/core';
import * as lib from '@app/admin/lib';
import { SharedModule } from '@app/shared';

import { DiagramComponent } from './components/diagram/diagram.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { StageDetailComponent } from './components/stage-detail/stage-detail.component';
import { StateDetailComponent } from './components/state-detail/state-detail.component';
import { TimerDetailComponent } from './components/timer-detail/timer-detail.component';
import { TriggerConditionDetailComponent } from './components/trigger-condition-detail/trigger-condition-detail.component';
import { TriggerDetailComponent } from './components/trigger-detail/trigger-detail.component';
import { WorkflowDetailComponent } from './components/workflow-detail/workflow-detail.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { FileSizePipe } from './pipes/filesize.pipe';
import { WfdRoutingModule } from './wfd-routing.module';
import { WfdComponent } from './wfd.component';
import { GenerateXmlComponent } from './components/generatexml/generatexml.component';
import { QuillModule } from 'ngx-quill';




@NgModule({
    imports: [
    WfdRoutingModule,
    SharedModule,
    WfdComponent,
    DiagramComponent,
    StageDetailComponent,
    StateDetailComponent,
    TriggerDetailComponent,
    TriggerConditionDetailComponent,
    TimerDetailComponent,
    WorkflowDetailComponent,
    FileUploaderComponent,
    DropzoneDirective,
    FileSizePipe,
    GenerateXmlComponent,
],
})
export class WfdModule {}
