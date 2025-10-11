import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GatewayResolver implements Resolve<any> {

    constructor(private readonly router: Router) {}
    
    resolve(route: ActivatedRouteSnapshot): void {
        const appName = sessionStorage.getItem('AppName') || route.queryParamMap.get('AppName');
        appName && this.router.navigate(['/process_control', appName]);
    }
}
