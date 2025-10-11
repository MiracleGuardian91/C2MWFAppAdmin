import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WfdComponent } from './wfd.component';

const routes: Routes = [{ path: '', component: WfdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WfdRoutingModule {}
