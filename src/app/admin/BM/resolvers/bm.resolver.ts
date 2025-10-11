import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { BmService } from '@app/admin/core/services/bm.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BusinessModel } from '@app/admin/BM/models';

@Injectable()
export class BMResolver implements Resolve<BusinessModel> {

  constructor(private bpService: BmService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BusinessModel> {
    const params = Object.entries(route.queryParams).reduce((acc, [k, v]) => {
      acc[k.toLowerCase()] = v;
      return acc;
    }, {} as any);
    const id = params.bmid;
  
    if (id) {
      return this.bpService.GetBusinessModel(id).pipe(
        retry(3),
        catchError((e) => {
          this.goBack();
          return throwError(() => new Error(e));
        })
      );
    }
  
    this.goBack();
    return of(null);
  }

  private goBack() {
    this.router.navigate(['..']);
  }
}
