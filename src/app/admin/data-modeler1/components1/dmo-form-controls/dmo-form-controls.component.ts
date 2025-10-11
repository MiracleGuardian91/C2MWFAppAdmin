import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DMOS } from '../../const1';
import { DMOType } from '../../models1';
import { ContextMenuPosition } from '../contextMenu/contextMenu.datatypes';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf, NgStyle, NgFor } from '@angular/common';
@Component({
    selector: 'app-dmo-form-controls',
    templateUrl: './dmo-form-controls.component.html',
    styleUrls: ['./dmo-form-controls.component.scss'],
    animations: [
        trigger('enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateY(1%)', opacity: 0 }),
                animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0)', opacity: 1 }),
                animate('200ms', style({ transform: 'translateY(1%)', opacity: 0 }))
            ])
        ])
    ],
    standalone: true,
    imports: [
        NgIf,
        NgStyle,
        NgFor,
    ],
})
export class DmoFormControlsComponent implements OnInit {
  readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  @Input() showContextMenuFor: any = null;
  @Input() contextMenuPosition: ContextMenuPosition = null;
  @Output() formControlSelect = new EventEmitter<any>();
  contextMenuPositiontest = { x: '0px', y: '0px' };
  public style: object = {};
  @Input() showContextMenu: boolean = false;
 
  type: DMOType;
  constructor() { }

  ngOnInit(): void {
  }
  FormControlSelect(type){
    this.showContextMenu=false;
   this.formControlSelect.emit(type);
  }
  ngOnChanges() {
    if (this.contextMenuPosition) {

      this.contextMenuPositiontest.x = (this.contextMenuPosition.rightClickMenuPositionX -150)  + 'px';
      this.contextMenuPositiontest.y = (this.contextMenuPosition.rightClickMenuPositionY-100) + 'px';
     // this.showContextMenu = true;
    }
  }


}
