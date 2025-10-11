import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from '@env/environment';
import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { UserDetail } from '../models/user-detail';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

class User1 {
    anuSUer: User;

};
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    samlData: any;

    constructor(private http: HttpClient, private msg: MessageService, private api: ApiService,
        private routes: Router,
        private toastr: ToastrService) {
        const AccessToken = localStorage.getItem('AccessToken');
        if (AccessToken) {
            const aToken = AccessToken.split('.');
            if (aToken.length > 1) {
                const currentuserDetail = new UserDetail();
                this.currentUserSubject = new BehaviorSubject<User>(currentuserDetail);
                this.currentUser = this.currentUserSubject.asObservable();
            } else {
                this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
                this.currentUser = this.currentUserSubject.asObservable();
            }
        } else {
            this.logout();
        }
    }

    login(username: string, password: string) {
        const httpHeader = new HttpHeaders({ UserName: username, Password: password });
        const objHttpHeader = { headers: httpHeader };

        return this.http.post<any>(`${environment.Setting.BaseAPIUrl}/user/token`, {}, objHttpHeader)
            .pipe(map(response => {
                const res = response.Data;
                if (res && res.accessToken) { // To handle V2 version 
                    const aToken = res.accessToken.split('.');
                    const userDetail = JSON.parse(atob(aToken[1]));
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    const offset = new Date().getTimezoneOffset();
                    const currentUser =JSON.parse(userDetail.User);
                    currentUser.TimeZone = offset;
                    userDetail.User = JSON.stringify(currentUser);
                  //  const userToken = aToken[0] + '.' + btoa(userDetail) + '.' + aToken[2]
                    //localStorage.setItem('currentUser', JSON.stringify(res.User));
                    localStorage.setItem('AccessToken', res.accessToken);
                    //localStorage.setItem('RefreshToken', res.RefreshToken);
                    localStorage.setItem('loginType', "normalUser");
                   
                    this.currentUserSubject.next(currentUser);
                    return true;
                }                           
                else if (res && res.AcessToken && res.User  && res.User.Message === undefined) { // To handle V1 version 
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    const offset = new Date().getTimezoneOffset();
                    res.User.TimeZone = offset;
                    localStorage.setItem('currentUser', JSON.stringify(res.User));
                    localStorage.setItem('AccessToken', res.AcessToken);
                    localStorage.setItem('RefreshToken', res.RefreshToken);
                    localStorage.setItem('loginType', "normalUser");
                    this.currentUserSubject.next(res.User);
                    return true;
                }
                else if(res && res.AcessToken === '' && res.RefreshToken === '' && !!res.Message){
                    this.msg.showMessage('Fail', { body: res.Message });
                    return false;
                  } 
                else if (res && res[0] !== undefined && res[0].ISLOCKEDOUT === true) {
                    this.msg.showMessage('Fail', { body: 'Your account is locked due to entering the wrong password three times. Please check your email.' });
                    return false;
                }
                else if (res && res.User.Message) {
                    this.msg.showMessage('Fail', { body: 'Your account is locked due to entering the wrong password three times. Please check your email.' });
                    return false;
                }

            }));
    }



   
    updatePassword(currentPassword: string, newPassword: string, emailAddress: string) {
        const data = {
            EmailAddress: emailAddress,
            Password: currentPassword,
            NewPassword: newPassword,
            AccessToken: localStorage.getItem('AccessToken')
        }
        return this.api.user_post('ChangeAccountPassword', data).toPromise();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        sessionStorage.clear();
        if(this.currentUserSubject == undefined) {
            this.currentUserSubject = new BehaviorSubject<User>(null);
            this.currentUser = this.currentUserSubject.asObservable();
        }
        this.currentUserSubject.next(null);
        
    }

    getGetwayDetails(Id?: string) {
        return this.api.postGateway("User/GetGatewayLogData/"+Id,null);
      } 

}
