import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const accessToken = req?.body?.AccessToken != undefined && req?.body?.AccessToken!='' ? req?.body?.AccessToken : localStorage.getItem('AccessToken') || '';
    let authRequest:any;

    // If the request URL contains "wfapibm" or "wfapiwf", add Bearer token
    // if (req.url.toLowerCase().includes("wfapibm") || req.url.toLowerCase().includes("wfapiwf")) {
    //   authRequest = req.clone({
    //     headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    //   });
    // } 
    // If the request is related to "gateway", "/user/token", or "getgatewaylogdata", do not modify the request
    if (req.url.toLowerCase().includes('/gateway') || 
             req.url.toLowerCase().includes('/user/token') || 
             req.url.toLowerCase().includes("/getgatewaylogdata")) {
      return next.handle(req);
    } 
    // Default case: add accessToken in headers
    else {
    authRequest = req.clone({
        headers: req.headers.set('accessToken', accessToken) 
      }); 
   return next.handle(authRequest);

    }

  
  }
}
