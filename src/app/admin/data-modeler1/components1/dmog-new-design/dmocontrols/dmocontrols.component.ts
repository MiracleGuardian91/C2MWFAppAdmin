import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DMOS } from '@app/admin/data-modeler/const';
import { SideNavModel } from '@app/admin/data-modeler1/models1';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-dmocontrols',
    templateUrl: './dmocontrols.component.html',
    styleUrls: ['./dmocontrols.component.scss'],
    standalone: true,
    imports: [NgClass, NgFor]
})
export class DMOControlsComponent implements OnInit {
  //readonly formsControls = Object.values(DMOS);
  readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.localeCompare(b.name));
  formsControlsList = []
  @Input() sideNavModel:SideNavModel;
  @Input() hideDmoAndSharedDmo: any;
  @Input() Searchtrem:string;

  @Input() hideDropAbleRow = false;

  constructor() { }

  ngOnInit(): void {
    this.formsControlsList = this.formsControls;
  }

  ngOnChanges() {
    if(this.Searchtrem!=undefined || this.Searchtrem!=null){
      this.searchControls(this.Searchtrem);
    }
  }

  onDragOver(event){
    event.preventDefault()
  
   }
   dragdmo(event,item){
    var model={'contol':item,"selectedItem":this.sideNavModel.data,'DMOGID':this.sideNavModel.dmog.DMOGID}
    event.dataTransfer.setData('ControlDmogDmo',JSON.stringify(model));
   }
  
   searchControls(key: string): void {
    if (this.formsControls.length > 0) {
      if (key && key.trim().length > 0) {
        this.formsControlsList = this.formsControls.filter(item => 
          item.name.toLowerCase().includes(key.toLowerCase())
        );
      } else {
        this.formsControlsList = [...this.formsControls]; 
      }
    }
  }

}
