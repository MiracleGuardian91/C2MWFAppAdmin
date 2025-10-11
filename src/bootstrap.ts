
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Title, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LOCALE_ID, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { EnvService, envInitializer } from './app/core/services/env.service';
import { DatePipe } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, SharedModule, CoreModule, NgHttpLoaderModule.forRoot()),
        provideHttpClient(withInterceptorsFromDi()),
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en-AU'
        },
        EnvService,
        {
            provide: APP_INITIALIZER,
            useFactory: envInitializer,
            multi: true,
            deps: [EnvService]
        },
        DatePipe,
        provideAnimations(),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
