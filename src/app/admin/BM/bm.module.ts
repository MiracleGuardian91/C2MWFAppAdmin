import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmRoutingModule } from './bm-routing.module';
import { BmGridComponent } from './components/bm-grid/bm-grid.component';
import { SharedModule } from '../Shared/shared.module';
import { BmEntryComponent } from './components/bm-entry/bm-entry.component';
import { BatchUpdateComponent } from './components/batch-update/batch-update.component';
import { BulkTriggerComponent } from './components/bulk-trigger/bulk-trigger.component';
import { UniqueConstraintComponent } from './components/unique-constraint/unique-constraint.component';
import { BmWfAssociationComponent } from './components/bm-wf-association/bm-wf-association.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TopCornerDetailComponent } from './components/top-corner-detail/top-corner-detail.component';
import { CardWallConfigurationSelectionComponent } from './components/Cardwalls/card-wall-configuration-selection/card-wall-configuration-selection.component';
import { CardWallViewConfigurationComponent } from './components/Cardwalls/card-wall-view-configuration/card-wall-view-configuration.component';
import { CardPlaceholderDmoMappingComponent } from './components/Cardwalls/card-placeholder-dmo-mapping/card-placeholder-dmo-mapping.component';



@NgModule({
 declarations: [
    CardWallConfigurationSelectionComponent,
    CardWallViewConfigurationComponent,
    CardPlaceholderDmoMappingComponent
  ],
    imports: [
    CommonModule,
    BmRoutingModule,
    SharedModule,
    BmGridComponent,
    BmEntryComponent,
    BatchUpdateComponent,
    BulkTriggerComponent,
    UniqueConstraintComponent,
    BmWfAssociationComponent,
    TopCornerDetailComponent,
]
})
export class BmModule { }
