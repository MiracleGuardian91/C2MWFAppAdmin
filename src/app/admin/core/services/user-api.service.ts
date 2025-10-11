import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from '@app/core/models/user-detail';
import { environment } from '@env/environment';
import { BaseHttpService } from '@lib/services';
import { of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseHttpService {
  private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/user`;

  constructor(http: HttpClient, private readonly user: UserDetail) {
    super(http);
  }

  
  getAccessToken(username: string, password: string) {
    const url = `${this.baseUrl}/token`;
    return this.post<any>(url, null, null, {username, password});
  }

 
  saveUserDetails(payload: any) {
    const url = `${this.baseUrl}/saveUserDetail`;
    return this.post<any>(url, payload);
  }

  validateUser(env:string,username: string, password: string) {
    const url = `${env}/api/v2/user/token`;
    return this.post<any>(url, null, null, {username, password});
  }

}
