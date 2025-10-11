import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';
import { GatewayPageComponent } from '@app/gateway-page/gateway-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { GateWayComponent } from './pages/gate-way/gate-way.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPwdComponent },
  { path: 'gateway', component: GatewayPageComponent, pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: 'activate-account', component: ActivateAccountComponent },
  {path:'Gateway',component:GateWayComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
