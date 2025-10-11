import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AuthRoutingModule } from './auth-routing.module';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';
import { LoginComponent } from './pages/login/login.component';
import { GatewayPageComponent } from '@app/gateway-page/gateway-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { GateWayComponent } from './pages/gate-way/gate-way.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
    imports: [
        SharedModule,
        AuthRoutingModule,
        LoginComponent, ResetPwdComponent,
        GatewayPageComponent,
        ErrorComponent,
        ActivateAccountComponent,
        GateWayComponent
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AuthModule { }
