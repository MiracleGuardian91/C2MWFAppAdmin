import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DMOS } from '../../const1';
import { DMOType, PanelMainRow } from '../../models1';
import { ContextMenuPosition } from '../contextMenu/contextMenu.datatypes';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf, NgStyle, NgFor } from '@angular/common';
@Component({
    selector: 'app-sharedmo-controls',
    templateUrl: './share-dmo.component.html',
    styleUrls: ['./share-dmo.component.scss'],
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
export class ShareDmoComponent implements OnInit {
  @Input()  shareDmoList = []
  CopyshareDmoList = []
  @Input() showContextMenuFor: any = null;
  @Input() contextMenuPosition: ContextMenuPosition = null;
  @Output() shareDmoSelect = new EventEmitter<any>();
  contextMenuPositiontest = { x: '0px', y: '0px' };
  public style: object = {};
  @Input() showContextMenu: boolean = false;
  @Input()rows: PanelMainRow[] = [];
 
  type: DMOType;
  constructor() { }

  ngOnInit(): void {
    if(this.rows.length && this.shareDmoList && this.shareDmoList.length>0){
      for (let index = 0; index < this.rows.length; index++) {
        const r = this.rows[index];
        for (let c = 0; c < r.columns.length; c++) {
          const col = r.columns[c];
          if(col.dmoguid!=null){
            for (let inguid = 0; inguid < col.dmoguid.length; inguid++) {
              const element = col.dmoguid[inguid];
              if(element){
              this.shareDmoList=this.shareDmoList.filter(a=>a.guid!=element.toLowerCase());
              }
            }
          }
            for (let cr = 0; cr < col.rows.length; cr++) {
              const crc = col.rows[cr];
              for (let icrc = 0; icrc < crc.columns.length; icrc++) {
                const cColumn = crc.columns[icrc];
                if(cColumn.dmoguid!=null){
                  for (let inguid = 0; inguid < cColumn.dmoguid.length; inguid++) {
                    const element = cColumn.dmoguid[inguid];
                    if(element){
                    this.shareDmoList=this.shareDmoList.filter(a=>a.guid!=element.toLowerCase());
                    }
                   }
                   }
              }
            }
          
          
        }
        
      }
    }
    this.CopyshareDmoList=this.shareDmoList;
  }
  DmoSelect(type){
    this.showContextMenu=false;
   this.shareDmoSelect.emit(type);
  }
  searchDmo(key){
   
    if(this.shareDmoList.length>0){
      if(key && key!="" && key.length>0 ){
        this.shareDmoList=this.CopyshareDmoList.filter(a=>a.guid.toLowerCase().includes(key.toLowerCase())
                                                ||a.dmoName.toLowerCase().includes(key.toLowerCase())
                                                 )
      }else{
        this.shareDmoList=this.CopyshareDmoList;
      }
    }else{
      this.shareDmoList=this.CopyshareDmoList
    }
  }
  ngOnChanges() {
    if (this.contextMenuPosition) {

      this.contextMenuPositiontest.x = (this.contextMenuPosition.rightClickMenuPositionX -150)  + 'px';
      this.contextMenuPositiontest.y = (this.contextMenuPosition.rightClickMenuPositionY-100) + 'px';
     
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showContextMenu = false;  // Hide context menu on scroll
  }


}
