import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'wf',
    loadChildren: () => import('./wf/wf.module').then((m) => m.WfModule),
  },
  {
    path: 'wf-app-list',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./AppList/wf-app-list/wf-app-list.module').then(
        (m) => m.WFAppListModule
      ),
  },
  {
    path: 'bm',
    loadChildren: () => import('./BM/bm.module').then((m) => m.BmModule),
  },
  {
    path: 'ai-flow',
    loadChildren: () =>
      import('./../ai-flow-builder/ai-flow-builder.routing').then(
        (a) => a.routes
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
