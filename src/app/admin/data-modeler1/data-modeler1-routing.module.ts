import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataModeler1Component } from './data-modeler1.component';

const routes: Routes = [{ path: '', component: DataModeler1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataModeler1RoutingModule { }
