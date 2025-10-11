import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfconditionsComponent } from './wfconditions.component';

const routes: Routes = [{ path: '', component: WfconditionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WfConditionsRoutingModule {}
