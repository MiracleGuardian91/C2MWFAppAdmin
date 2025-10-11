import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LiveVersionComponent } from './LiveVersion/components/live-version/live-version.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AdminComponent,
    LiveVersionComponent,
  ],
})
export class AdminModule {}
