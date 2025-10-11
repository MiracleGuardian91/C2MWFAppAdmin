import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, MessageService } from '@app/core';
import { UserDetail } from '@app/core/models/user-detail';

@Component({
    selector: 'app-gate-way',
    templateUrl: './gate-way.component.html',
    styleUrls: ['./gate-way.component.scss'],
    standalone: true
})
export class GateWayComponent implements OnInit {

getwayId:any;
 constructor(private route:ActivatedRoute, private authService: AuthenticationService,
  private readonly user: UserDetail,
  private router: Router, private msg: MessageService,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getwayId=params.returnId;
      this.GetGatewayLogData(this.getwayId);
    });
  }
  GetGatewayLogData(Id:string)
  {
    this.authService.getGetwayDetails(Id).subscribe(data=>{
      if (data && data.accessToken) {
          const aToken = data.accessToken.split('.');
          const userDetail = JSON.parse(atob(aToken[1]));
          const offset = new Date().getTimezoneOffset();
          const currentUser =JSON.parse(userDetail.User);
          currentUser.TimeZone = offset;
          userDetail.User = JSON.stringify(currentUser);
          localStorage.setItem('AccessToken', data.accessToken); 
          localStorage.setItem('loginType', "normalUser");
          sessionStorage.setItem('processName',data.Result.AppName);
          sessionStorage.setItem('AppName',data.Result.AppName);
          sessionStorage.setItem('DisplayName', data.Result.DisplayName);
          switch (data.Result.AppName) {
            case 'Announcement':
              this.router.navigate(['/announcement']);
              break;
            case 'QuickMind':
              this.router.navigate(['/quickmindlist']);
              break;
            default:
              if (data.Result.Type === 'bm') {
                this.router.navigate(['/admin/bm']);
              } else {
                this.router.navigate(['/admin/wf']);
              }
          }
    }}, error => {
          this.router.navigate(['/auth/login']);   
    },);
  }

}
