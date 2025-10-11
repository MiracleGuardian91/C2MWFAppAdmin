import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ServiceProviderService } from '@app/admin/data-modeler1/services1/service-provider.service';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
    standalone: true
})
export class TabComponent<T = any> implements OnInit {
  @Input() data: T;
  @Input() title: string;
  @Input() active = false;
  @Input() hasInvalidForm = false;
  @Input() bmodisplay = true;
  @Input() disabled = false;
  @Input() enableActions = false;
  @Input() shared = false;
  showActions = false;
  @Input() isBMO = false;

  
  @Input() isNewDesign = false;
  @Input() isView = false;
  @Input() isSection = false;
  @Input() showPlucIcon= false;
   // @Input() trnsctnId: any;
  // @Input() ChildProcessName: string;
  // @Input() ParentDmoValue: any;
  // @Input() ChildDmoGuid: any;
  // @Input() ProcessType: any;

  constructor(
    public el: ElementRef,
    private dataProvider :ServiceProviderService
  ) { 


    
  }

  ngOnInit() {
     if (this.isBMO && this.active) {
      this.dataProvider.setBmo(this.data)
     }
  }

}
