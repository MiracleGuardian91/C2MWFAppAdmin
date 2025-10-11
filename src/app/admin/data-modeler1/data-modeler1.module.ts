import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModeler1RoutingModule } from './data-modeler1-routing.module';
import { DataModeler1Component } from './data-modeler1.component';

import { SharedModule } from '../Shared/shared.module';

import * as fromComponents from './components1';
import * as lib  from '@app/admin/lib';
import { ResizeablePanelComponent } from './components1/resizeable-panel/resizeable-panel.component';
import { ResizableModule } from 'angular-resizable-element';
import { DmoFormControlsComponent } from './components1/dmo-form-controls/dmo-form-controls.component';
import { ShareDmoComponent } from './components1/share-dmo/share-dmo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DmogSettingsComponent } from './components1/dmog-settings/dmog-settings.component';
import { DmogContainerComponent } from './components1/dmog-new-design/dmog-container/dmog-container.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ContierParentRowSettingsComponent } from './components1/dmog-new-design/contier-parent-row-settings/contier-parent-row-settings.component';
import { ContainerColumnSettingsComponent } from './components1/dmog-new-design/container-column-settings/container-column-settings.component';
import { DMOControlsComponent } from './components1/dmog-new-design/dmocontrols/dmocontrols.component';
import { DmogSharedDmoComponent } from './components1/dmog-new-design/dmog-shared-dmo/dmog-shared-dmo.component';
import { DmogSubRowSettingsComponent } from './components1/dmog-new-design/dmog-sub-row-settings/dmog-sub-row-settings.component';
import { DmogSubColumnSettingsComponent } from './components1/dmog-new-design/dmog-sub-column-settings/dmog-sub-column-settings.component';
import { ResizableDirectiveDirective } from './directives/resizable-directive.directive';
import { ResizeColumnsDirective } from './directives/resize-columns.directive';

@NgModule({
    imports: [
    CommonModule,
    DataModeler1RoutingModule,
    SharedModule,
    lib.ObjectControlModule,
    DragDropModule,
    CdkAccordionModule,
    DataModeler1Component,
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
    fromComponents.ResizeablePanelComponent,
    fromComponents.ContextMenuComponent,
    fromComponents.LeftSidePanelComponent,
    fromComponents.DmogContainerComponent,
    DmoFormControlsComponent,
    ShareDmoComponent,
    DmogSettingsComponent,
    ContierParentRowSettingsComponent,
    ContainerColumnSettingsComponent,
    DMOControlsComponent,
    DmogSharedDmoComponent,
    DmogSubRowSettingsComponent,
    DmogSubColumnSettingsComponent,
    ResizableDirectiveDirective,
    ResizeColumnsDirective,
],
    providers: []
})




export class DataModeler1Module { }
