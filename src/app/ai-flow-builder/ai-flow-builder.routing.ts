import { Routes } from '@angular/router';
import { BuilderEntityComponent, FlowBuilderComponent } from './page';

export const routes: Routes = [
  {
    path: '',
    component: FlowBuilderComponent
  },
  {
    path: 'builder-entity',
    component: BuilderEntityComponent
  }
];