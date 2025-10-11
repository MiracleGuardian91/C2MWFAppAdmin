import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectControlComponent } from './object-control.component';


import { ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '@app/shared';
import { QuillModule } from 'ngx-quill';




@NgModule({
    imports: [
    CommonModule,
    SharedModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatRadioModule,
    QuillModule.forRoot(),
    ObjectControlComponent
  ],
  exports: [ObjectControlComponent],
})
export class ObjectControlModule { }
