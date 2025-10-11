import { Routes } from '@angular/router';
import { AuthGuard } from '@app/core';

import { TermsAndConditionsComponent } from './shared/components/terms-and-conditions/terms-and-conditions.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NotAuthorizeComponent } from './not-authorize/not-authorize.component';
import { VersionComponent } from './version/version.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'login', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
   {
    path: 'bmwfcompare',
    loadChildren: () => import('./admin/bmwfcompare/bmwfcompare.module').then(m => m.BmwfcompareModule)
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  
  {
    path: 'unauthorized',
    component: NotAuthorizeComponent
  },
  {
    path: 'version',
    component: VersionComponent
  },
  { path: 'gateway', loadChildren: () => import('./modules/gateway/gateway.module').then(m => m.GatewayModule) },
  
  { path: '**', component: NotFoundComponent }
];

