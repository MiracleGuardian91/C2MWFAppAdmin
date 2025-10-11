import { Injectable, Injector, NgZone } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from '@env/environment';
import { LoaderService } from '../../shared/services/loader.service';
import { LoaderAComponent, LoaderBComponent } from '../../shared/components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService {
  private isDisplayingAuthError = false;
  private isDisplayingGeneralError = false;

  constructor(
    private readonly router: Router,
    private readonly zone: NgZone,
    private readonly injector: Injector,
    private readonly loaderService: LoaderService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.setLoader(req);
    const nextReq = this.applyNoCacheIfNeeded(req);

    return next.handle(nextReq).pipe(
      map(event => this.handleSuccess(event)),
      catchError(error => this.handleError(error))
      );
  }

  private setLoader(req: HttpRequest<any>): void {
    if (req.url.includes('SaveDmogProps') || req.url.includes('SaveBmoDmogLinking')) {
      this.loaderService.setLocalLoader(LoaderAComponent);
    } else {
      this.loaderService.setLocalLoader(null);
      this.loaderService.setGlobalLoader(LoaderBComponent);
    }
  }

  private applyNoCacheIfNeeded(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.url.includes(environment.Setting.C2M_Console_API_URL)) {
      return req.clone({
        headers: req.headers
          .set('Cache-Control', 'no-cache, max-age=0')
          .set('Pragma', 'no-cache')
      });
    }
    return req;
  }

  private handleSuccess(event: HttpEvent<any>): HttpEvent<any> {
    if (event instanceof HttpResponse && event.body?.statuscode === 207) {
      const toastr = this.injector.get(ToastrService);
      toastr.show(event.body.message);
    }
    return event;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const toastr = this.injector.get(ToastrService);

    if (this.isJsonBlobError(error)) {
      return this.handleBlobJsonError(error, toastr);
    }

    if (error.error instanceof ErrorEvent) {
      console.error(`Client-side error: ${error.error.message}`);
      return throwError(() => error);
    }

    if (["savebmJson", "savewfJson"].some(sub => error.url?.includes(sub))) {
      return throwError(() => error);
    }

    return this.processHttpError(error, toastr);
  }

  private isJsonBlobError(error: HttpErrorResponse): boolean {
    return error.error instanceof Blob && error.error.type === 'application/json';
  }

  private handleBlobJsonError(error: HttpErrorResponse, toastr: ToastrService): Observable<never> {
    return new Observable<never>((observer) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const msg = JSON.parse(reader.result as string);
          toastr.error(msg, 'Bad Request', { timeOut: 10000 });
          observer.error(new HttpErrorResponse({
            error: msg,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url
          }));
        } catch {
          observer.error(error);
        }
      };
      reader.onerror = () => observer.error(error);
      reader.readAsText(error.error);
    });
  }

  private processHttpError(error: HttpErrorResponse, toastr: ToastrService): Observable<never> {
    if (!navigator.onLine) {
      this.runInZone(() => {
        toastr.warning('No internet Connection.', 'Warning', { timeOut: 10000 });
      });
    } else {
      const status = error.status;
      const msg = error.error?.message;

      switch (status) {
        case 500:
          this.handle500Error(msg, toastr);
          break;
        case 400:
          this.handle400Error(msg, toastr, error);
          break;
        case 401:
          if (!this.isDisplayingAuthError) {
            this.isDisplayingAuthError = true;
            this.runInZone(() => {
              toastr.error(msg || error.message, 'Not Authorized', { timeOut: 10000 })
                .onHidden.subscribe(() => this.isDisplayingAuthError = false);
              this.router.navigate(['/auth/login']);
            });
          }
          break;
        case 403:
          this.handle403Error(error, toastr);
          break;
        default:
          this.runInZone(() => {
            if (!status && !this.isDisplayingGeneralError) {
              this.isDisplayingGeneralError = true;
              toastr.error(msg || error.message, 'Error', { timeOut: 10000 })
                .onHidden.subscribe(() => this.isDisplayingGeneralError = false);
            }
          });
          break;
      }
    }
    return throwError(() => error);
  }

  private handle500Error(msg: string, toastr: ToastrService): void {
    this.runInZone(() => {
      if (msg === 'Record already exists in Active State' || msg === 'Record already exists') {
        toastr.warning(msg);
      } else if (msg === 'Your account is inactive.') {
        toastr.warning('Account Invalid, Please contact your local Nutrien branch for more information.');
      } else {
        toastr.error(msg || 'Internal Server Error', 'Internal Server Error', { timeOut: 10000 });
      }
    });
  }

  private handle400Error(msg: string, toastr: ToastrService, error: HttpErrorResponse): void {
    this.runInZone(() => {
      if (msg?.includes('Unauthorized Access')) {
        this.router.navigate(['/auth/error']);
      } else {
        toastr.error(msg ?? error.error ?? error.message, 'Bad Request', { timeOut: 10000 });
      }
    });
  }

  private handle403Error(error: HttpErrorResponse, toastr: ToastrService): void {
  this.runInZone(() => {
    const err = error.error;
    let message: string;

    if (typeof err === 'string') {
      if (err === 'You do not have permissions to delete the records.') {
        message = 'You do not have permissions to delete records in this section.';
      } else {
        message = err;
      }
    } else {
      message = err?.message;
    }

    toastr.error(message, 'Not Authorized', { timeOut: 10000 });
  });
}


  private runInZone(fn: () => void): void {
    this.zone.run(fn);
  }
}
