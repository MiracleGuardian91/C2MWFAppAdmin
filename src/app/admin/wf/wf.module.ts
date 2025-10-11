import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WfRoutingModule } from './wf-routing.module';
import { WfComponent } from './wf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WfconditionsComponent } from './components/wfconditions/wfconditions.component';
import { SaveStagestateConditionComponent } from './components/pages/save-stagestate-condition/save-stagestate-condition.component';
import { AdditionalPermissionComponent } from './components/additional-permission/additional-permission.component';
import { WorkflowSaveUpdateComponent } from './components/workflow-save-update/workflow-save-update.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchColumnPipe } from '../pipe/search-column.pipe';
import { GridExportComponent } from '../Shared/grid-export/grid-export.component';
import { SharedModule } from '../Shared/shared.module';
import { WfRoleGridComponent } from './wfroles/components/wf-role-grid/wf-role-grid.component';

import { GridConfigStaticColComponent } from './components/grid-config-static-col/grid-config-static-col.component';
// import { CKEditorModule } from 'ckeditor4-angular';
//import { GenericGridComponent } from '../Shared/generic-grid/generic-grid.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    WfRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    WfComponent,
    // GenericGridComponent,
    WfconditionsComponent,
    SaveStagestateConditionComponent,
    AdditionalPermissionComponent,
    WorkflowSaveUpdateComponent,
    WfRoleGridComponent,
    GridConfigStaticColComponent,
  ],
})
export class WfModule {}
