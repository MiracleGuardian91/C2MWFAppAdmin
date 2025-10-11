import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MentionModule } from 'angular-mentions';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DpDatePickerModule } from 'ng2-date-picker';

// pipes
import {
  SearchColumnPipe,
  SearchDMOPipe,
  SearchRowPipe,
  ListFilterPipe,
  StripHtmlPipe,
} from './pipe/search-column.pipe';
import { FilterPipe, FilterCustomPipe } from './pipe/filter.pipe';
import { SafePipe } from './pipe/safe.pipe';

// directives
import { TwoDigitDecimaNumberDirective } from './directive/two-digit-decima-number.directive';
import { OptionsScrollDirective } from './directive/options-scroll.directive';
import { FourDigitDecimaNumberDirective } from './directive/four-digit-decima-number.directive'; // components

import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

// entry components
import { MessageComponent } from './components/message/message.component';
import { LoaderAComponent } from './components/loader/loader.component';
import { LoaderBComponent } from './components/loader/loader.component';
import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';
import { ChangePwdComponent } from './components/change-pwd/change-pwd.component';
import { RangeDirective } from './directive/range.directive';
import * as dmos from '@lib/dmos';
import { GridViewMasterConfigurationComponent } from './components/grid-view-master-configuration/grid-view-master-configuration.component';
import { EditorComponent } from '@app/admin/Shared/editor/editor.component';
import { QuillModule } from 'ngx-quill';
import { CssLoaderService } from './services/css-loader.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    NgSelectModule,
    AutocompleteLibModule,
    MentionModule,
    ImageCropperModule,
    DpDatePickerModule,
    dmos.AutocompleteSearchBoxModule,
    MessageComponent,
    SearchColumnPipe,
    SearchDMOPipe,
    SearchRowPipe,
    ListFilterPipe,
    StripHtmlPipe,
    SafePipe,
    LoaderAComponent,
    FilterPipe,
    FilterCustomPipe,
    OptionsScrollDirective,
    TwoDigitDecimaNumberDirective,
    FourDigitDecimaNumberDirective,
    RangeDirective,
    ForgotPwdComponent,
    ChangePwdComponent,
    TermsAndConditionsComponent,
    GridViewMasterConfigurationComponent,
    EditorComponent,
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
    EditorComponent,
    SearchColumnPipe,
    SearchDMOPipe,
    SearchRowPipe,
    ListFilterPipe,
    StripHtmlPipe,
    SafePipe,
    FilterPipe,
    FilterCustomPipe,
    TwoDigitDecimaNumberDirective,
    FourDigitDecimaNumberDirective,
    RangeDirective,
    LoaderAComponent,
    ForgotPwdComponent,
    ChangePwdComponent,
  ],
})
export class SharedModule {
  constructor(private cssloaderclass: CssLoaderService) {}
}
