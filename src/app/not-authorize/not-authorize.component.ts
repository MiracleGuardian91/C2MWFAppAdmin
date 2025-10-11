import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core';

@Component({
    selector: 'app-not-authorize',
    templateUrl: './not-authorize.component.html',
    styleUrls: ['./not-authorize.component.scss'],
    standalone: true
})
export class NotAuthorizeComponent implements OnInit {

  constructor( readonly authenticationService: AuthenticationService,
    readonly router: Router) { }

  ngOnInit() {
  }

  logOutUser() {
    this.authenticationService.logout();
      this.router.navigate(['/auth/login']);
  }

}
