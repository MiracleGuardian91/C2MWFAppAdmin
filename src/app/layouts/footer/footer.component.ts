import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { UtilService } from '@app/shared/services/util.service';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true
})
export class FooterComponent implements OnInit {
  currentApplicationVersion = environment.timeStamp;
  copyRight = new Date().getFullYear();
  logoBlackUrl = UtilService.getUrlForImage('/assets/styles/images/C2M-Black-Logo.svg');
  constructor() { }

  ngOnInit() {
  }

}
