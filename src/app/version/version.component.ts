import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'app-version',
    templateUrl: './version.component.html',
    styleUrls: ['./version.component.scss'],
    standalone: true
})
export class VersionComponent implements OnInit {

  currentApplicationVersion = environment.timeStamp;

  constructor() { }

  ngOnInit(): void {
  }

}
