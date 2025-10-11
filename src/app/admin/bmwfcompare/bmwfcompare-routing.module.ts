import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserVerificationComponent } from './Pages/user-verification/user-verification.component';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { BmCompareComponent } from './Pages/bm-compare/bm-compare.component';
import { WfCompareComponent } from './Pages/wf-compare/wf-compare.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-verification',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'user-verification',
        component: UserVerificationComponent
      },
      {
        path: 'bmcompare',
        component: BmCompareComponent
      },
      {
        path: 'wfcompare',
        component: WfCompareComponent
      },

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BmwfcompareRoutingModule { }
