import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfAppListComponent } from './wf-app-list.component';

const routes: Routes = [
  {
    path: '',
    component: WfAppListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WFAppListRoutingModule { }
