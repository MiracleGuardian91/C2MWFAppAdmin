import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModelerRoutingModule } from './data-modeler-routing.module';
import { DataModelerComponent } from './data-modeler.component';
import { SharedModule } from '../Shared/shared.module';

import * as fromComponents from './components';
import * as lib  from '@app/admin/lib';

@NgModule({
    imports: [
    CommonModule,
    DataModelerRoutingModule,
    SharedModule,
    lib.ObjectControlModule,
    DataModelerComponent,
    fromComponents.BmDetailComponent,
    fromComponents.DmoComponent,
    fromComponents.DmoDetailComponent,
    fromComponents.BmogDetailComponent,
    fromComponents.BmoDetailComponent,
    fromComponents.DmogDetailComponent,
    fromComponents.DmoConditionComponent,
    fromComponents.DmogFormViewComponent,
    fromComponents.DmHeaderComponent,
    fromComponents.DmMenuComponent,
    fromComponents.DmBreadcrumbsComponent,
],
    providers: []
})
export class DataModelerModule { }
