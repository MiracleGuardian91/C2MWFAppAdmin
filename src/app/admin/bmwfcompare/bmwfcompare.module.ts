import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmwfcompareRoutingModule } from './bmwfcompare-routing.module';
import { BmCompareComponent } from './Pages/bm-compare/bm-compare.component';
import { UserVerificationComponent } from './Pages/user-verification/user-verification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShowNodeDetailsComponent } from './Pages/show-node-details/show-node-details.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { WfCompareComponent } from './Pages/wf-compare/wf-compare.component';

@NgModule({
  declarations: [BmCompareComponent, UserVerificationComponent, ShowNodeDetailsComponent, WfCompareComponent],
  imports: [
    CommonModule,
    BmwfcompareRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatExpansionModule,
    FormsModule,
    MatTooltipModule
  ]
})
export class BmwfcompareModule { }
