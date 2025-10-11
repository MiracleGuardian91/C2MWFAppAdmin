import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MentionModule } from 'angular-mentions';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DpDatePickerModule } from 'ng2-date-picker';

import { GenericGridComponent } from './generic-grid/generic-grid.component';
import { GridExportComponent } from './grid-export/grid-export.component';
import { SearchColumnPipe } from '../pipe/search-column.pipe';
import { WorkflowBmAssociationComponent } from './workflow-bm-association/workflow-bm-association.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion/accordion.component';

import { CompanyAssociationComponent } from './company-association/company-association.component';

import * as lib from '@app/admin/lib';
import { ResizableModule } from 'angular-resizable-element';
import { QuillModule } from 'ngx-quill';
// components



@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ToastrModule.forRoot({
        preventDuplicates: true
    }),
    NgSelectModule,
    AutocompleteLibModule,
    MentionModule,
    ImageCropperModule,
    DpDatePickerModule,
    ResizableModule
    // NgDragDropModule.forRoot()
    ,
    GenericGridComponent,
    GridExportComponent,
    SearchColumnPipe,
    WorkflowBmAssociationComponent,
    TabsComponent,
    TabComponent,
    AccordionItemComponent,
    AccordionComponent,
    CompanyAssociationComponent,
    QuillModule
],
    exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ToastrModule,
    NgSelectModule,
    MentionModule,
    AutocompleteLibModule,
    DpDatePickerModule,
    GenericGridComponent,
    GridExportComponent,
    SearchColumnPipe,
    TabComponent,
    TabsComponent,
    // NgDragDropModule,
    AccordionItemComponent,
    AccordionComponent,
    CompanyAssociationComponent,
    ResizableModule
]
})
  export class SharedModule { }