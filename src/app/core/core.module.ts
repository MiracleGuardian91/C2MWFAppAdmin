import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { ListviewService } from './services/list-view.service';
import { DmoControlService } from './services/dmo-control.service';
import { UserService } from './services/user.service';
import { ApplicationService } from './services/application.service';
import { NgbDateFRParserFormatter } from './services/ngb-date-fr-parser-formatter';

import { GlobalHttpInterceptorService } from './handle-errors/global-http-interceptor.service';
import { GlobalErrorHandlerService } from './handle-errors/global-error-handler.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    providers: [
      CurrencyPipe,
      AuthGuard,
      ApiService,
      AuthenticationService,
      ListviewService,
      DmoControlService,
      UserService,
      ApplicationService,
      NgbDateFRParserFormatter,
      provideHttpClient(),
      { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
      { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
