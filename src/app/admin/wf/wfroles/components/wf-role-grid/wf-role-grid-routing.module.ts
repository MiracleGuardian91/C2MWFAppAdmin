import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfRoleGridComponent } from './wf-role-grid.component';

const routes: Routes = [{ path: '', component: WfRoleGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WfRoleGridComponentRoutingModule {}
