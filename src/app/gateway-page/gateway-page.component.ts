import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/models/user';


@Component({
    selector: 'app-gateway-page',
    templateUrl: './gateway-page.component.html',
    styleUrls: ['./gateway-page.component.scss'],
    standalone: true
})

export class GatewayPageComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  samlData: any;

  constructor(private routes: Router,
    private route: ActivatedRoute) {

    const AccessToken = localStorage.getItem('AccessToken');
    if (AccessToken) {
      const aToken = AccessToken.split('.');
      const userDetail = atob(aToken[1]);
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(userDetail));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<User>(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  async ngOnInit() {
    var samlId = this.route.snapshot.queryParamMap.get('samlid');
  }


  goToLogin() {
    this.routes.navigate(['/auth/login']);
  }

  gotoUnAuthorize() {
    this.routes.navigate(['/unauthorized'])
  }

  getSamlResponse(data) {
    if (data == true) {
      this.routes.navigate(['/app_list']);
    }
    else {
      this.gotoUnAuthorize();
      localStorage.clear();
      sessionStorage.clear();
    }
  }
}
