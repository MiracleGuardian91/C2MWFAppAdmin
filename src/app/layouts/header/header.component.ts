import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderService, AuthenticationService } from '@app/core';
import { UtilService } from '@app/shared/services/util.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class HeaderComponent implements OnInit {

  userFullName: string;
  isUserLoggedIn = false;
  flag = 'unread';

  isOpen = false;
  notificationList: any[] = [];

  modalScrollDistance = 2;
  modalScrollThrottle = 50;
  pageFrom = 0;

  showItemLoading = true;
  isMarkAsRead = false;
  isQuickMind=false;
  logoWhiteUrl = UtilService.getUrlForImage('/assets/styles/images/C2M-White-Logo.svg');
  constructor(
    public headerService: HeaderService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    //this.userFullName = userDetail.FullName;
    this.isUserLoggedIn = true;
    this.authenticationService.currentUser.subscribe(user => {
      if (user && user.FirstName) {
        this.isUserLoggedIn = true;
        this.userFullName = user.FirstName + ' ' + user.LastName;
      } else {
        this.isUserLoggedIn = false;
        this.userFullName = '';
      }
    });
  }

  ngOnInit() {     
    let url = (window.location.href).split('/');   
    if(url[4] !== undefined && (url[4] === 'quickmind' || url[4] === 'quickmindlist')) {
      this.isQuickMind = true;
    }
    else{
      this.isQuickMind = false;
    }
  }

  gotoQuickmind(){
   localStorage.setItem('quickMindAppName',sessionStorage.getItem('AppName'));       
   window.open('/quickmind', '_blank');
    }



  logout() {   
      this.authenticationService.logout();
      this.router.navigate(['/auth/login']);
  }
   goToUserProfile(){
    window.open('/users/user-profile?uName='+encodeURIComponent('myprofile=user'), '_blank');
  }
}
