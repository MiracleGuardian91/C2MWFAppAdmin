import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BmGridComponent } from './components/bm-grid/bm-grid.component';
import { BMResolver } from './resolvers/bm.resolver';



const routes: Routes = [
  { path: '', component: BmGridComponent },
  { 
    path: 'data-modeler', 
    // component: DataModelerComponent,
    loadChildren: () => import('../data-modeler/data-modeler.module').then(m => m.DataModelerModule),
    resolve: {bm: BMResolver},
   },
   { 
    path: 'data-modeler1', 
    loadChildren: () => import('../data-modeler1/data-modeler1.module').then(m => m.DataModeler1Module) ,
    resolve: {bm: BMResolver},
   },
   

  // {
  //   path: 'bm',
  //   loadChildren: () => import('./bm-routing.module').then((m) => m.BmRoutingModule),
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BMResolver],
})
export class BmRoutingModule { }
