import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { WfConditionsRoutingModule } from './wfconditions-routing.module';
import { WfConditionDetailComponent } from './wf-condition-detail/wf-condition-detail.component';
import { ObjectControlModule } from '@app/admin/lib';

@NgModule({
    imports: [
    WfConditionsRoutingModule,
    SharedModule,
    ObjectControlModule,
    WfConditionDetailComponent,
],
})
export class WfConditionsModule {}
