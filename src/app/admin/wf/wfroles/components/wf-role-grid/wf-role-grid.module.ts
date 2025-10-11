import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { WfRoleGridComponentRoutingModule } from './wf-role-grid-routing.module';

@NgModule({
  declarations: [WfRoleGridComponentRoutingModule],
  imports: [WfRoleGridComponentRoutingModule, SharedModule],
  providers: []
})
export class WfRoleGridComponentModule {}
