import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewayResolver } from './gateway.resolver';


const routes: Routes = [{ path: '',  resolve: {res: GatewayResolver}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewayRoutingModule { }
