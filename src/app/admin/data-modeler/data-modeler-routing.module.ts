import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataModelerComponent } from './data-modeler.component';

const routes: Routes = [{ path: '', component: DataModelerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class DataModelerRoutingModule { }
