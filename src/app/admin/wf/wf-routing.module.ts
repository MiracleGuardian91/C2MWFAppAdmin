import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WfComponent } from './wf.component';

const routes: Routes = [
  { path: '', component: WfComponent },
  {
    path: 'wfd',
    loadChildren: () => import('./wfd/wfd.module').then((m) => m.WfdModule),
  },
  {
    path: 'wfcondition',
    loadChildren: () => import('./components/wfconditions/wfconditions.module').then((m) => m.WfConditionsModule),
  },
  {
    path: 'wfroleassociation',
    loadChildren: () => import('./wfroles/components/wf-role-grid/wf-role-grid-routing.module').then((m) => m.WfRoleGridComponentRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WfRoutingModule {}
