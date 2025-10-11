import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
// import { EditUserComponent } from './pages/edit-user/edit-user.component';
// import { AddUserComponent } from './pages/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        ImageCropperModule,
    ]
})
export class UsersModule { }
