import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSearchBoxComponent } from './autocomplete-search-box.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        AutocompleteSearchBoxComponent,
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
    ],
    exports: [AutocompleteSearchBoxComponent]
})
export class AutocompleteSearchBoxModule { }
