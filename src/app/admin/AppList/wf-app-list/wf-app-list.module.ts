import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { WFAppListRoutingModule } from './wf-app-list-routing.module';
import { WfAppListComponent } from './wf-app-list.component';

@NgModule({
  imports: [SharedModule, WFAppListRoutingModule, WfAppListComponent],
})
export class WFAppListModule {}
