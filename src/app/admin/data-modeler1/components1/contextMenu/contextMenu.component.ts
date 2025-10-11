

import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, Renderer2 } from '@angular/core';
import { ContextMenuPosition, IContextMenuModel } from './contextMenu.datatypes';
import { ServiceProviderService } from '../../services1/service-provider.service';
import { DMOS } from '../../const1';
import { NgIf, NgStyle, NgFor } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';  
@Component({
    selector: 'app-contextMenu',
    templateUrl: './contextMenu.component.html',
    styleUrls: ['./contextMenu.component.css'],
    standalone: true,
    imports: [NgIf, NgStyle, NgFor, NgbTooltip]
})

export class ContextMenuComponent {
  get isPositionValid(): boolean {
    return !!(this.contextMenuPosition && (this.contextMenuPosition.centerX !== 0 || this.contextMenuPosition.centerY !== 0));
  }
  @Input() readonly:any;
  @Input() object:  any= null;
  @Input() showContextMenuFor: any = null;
  @Input() contextMenuPosition: ContextMenuPosition = null;
  @Input() type:  any= '';
  @Input() selectedDivId:any;
  contextMenuPositiontest = { x: '0px', y: '0px' };
  public style: object = {};
  @Output() contextMenuSelected = new EventEmitter < { option: string, showContextMenuFor: any,position:any }>();
  readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  contextMenuItems: Array<IContextMenuModel> = [];
  showContextMenu: boolean = false;
  @Input() isDmoExist : boolean = false;
  constructor(private eRef: ElementRef,
        private service:ServiceProviderService,
        private cdref: ChangeDetectorRef ,
        private readonly renderer: Renderer2
      ) 
  {
    this.contextMenuItems = [
     
    ];

    service.getHideContextMenu().subscribe(result => {
      if(!result.dmogId){
        this.showContextMenu=result;
      }
     
    });
  

  }
 
  ngOnChanges() {
    let rowhasColumn=false;
    if(this.type=='dmo')
     
    this.style = {
      // left: `${this.left}px`,
      // top: `${this.top}px`,
      width: `150px`,
      display: `block`,
     
    };

    if (this.showContextMenuFor) {
      this.contextMenuItems=[];
       if(this.showContextMenuFor.type ==='parentRow'){
        let dmoExists=false;
        
        let rows=this.showContextMenuFor.r;
        for (let index = 0; index < rows.columns.length; index++) {
          rowhasColumn=true;
          const rc = rows.columns[index];
         
            if(rc.dmoguid && rc.dmoguid.length>0 && this.isDmoExist){
              dmoExists=true;
              break;
            }
          else if(rc.rows){
              for (let index = 0; index < rc.rows.length; index++) {
                const element = rc.rows[index];
                let existingColumn=element.columns.filter(a=>a.dmoguid.length>0)
                if(existingColumn.length>0 && this.isDmoExist){
                  dmoExists=true;
                  break;
                  }
                
              }
            }
        }
        if(!dmoExists){
          this.contextMenuItems=[ 
        //     {
        //     menuText: 'Add Column',
        //     menuIcon: 'fa fa-plus',
        //     menuEvent:'AddColumn'
        //   }]

        // }else{
        // this.contextMenuItems=[ 
        //   {
        //   menuText: 'Add Column',
        //   menuIcon: 'fa fa-plus',
        //   menuEvent:'AddColumn'
        // },
        {
          menuText: 'Remove Row',
          menuIcon: 'fa fa-trash-alt',
          menuEvent:'RemoveRow'

        }
        
      ]
      }
      
      
       }
       else if(this.showContextMenuFor.type ==='column'){
        let dmoExists=false;
        let columnOnly=false;
        let hasChild=false;
        let rows=this.showContextMenuFor.r;
        let item={'rowIndex':this.showContextMenuFor.rowIndex,"colIndex":this.showContextMenuFor.colIndex}
    
        let rowIndex: number=item.rowIndex
        let colIndex: number=item.colIndex;
          let column= rows.columns[colIndex];
          if (column) {
            hasChild=column.rows.length>0;
            if(column.dmoguid.length>0 && this.isDmoExist){
              dmoExists=true;
              columnOnly=column.rows.length==0;
            }
            for (let index = 0; index < column.rows.length; index++) {
              const element = column.rows[index];
              let existingColumn=element.columns.filter(a=>a.dmoguid.length>0)
              if(existingColumn.length>0 && this.isDmoExist){
                dmoExists=true;
                break;
                }
               }
              
            }
           
           if(dmoExists){
            if(columnOnly){
              this.contextMenuItems=[ 
                {
                menuText: 'Edit DMO',
                menuIcon: 'fa fa-wrench',
                 menuEvent:'EditDMO'
              },
              {
                menuText: 'Conditions',
                menuIcon: 'fa fa-cogs',
                 menuEvent:'ConditionsDMO'
              },
              {
                menuText: 'Clone',
                menuIcon: 'fa fa-copy',
                 menuEvent:'CloneDMO'
              },
              {
                menuText: 'Unshare DMO',
                menuIcon: 'fas fa-unlink',
                menuEvent:'DeleteDMO'
      
              }
            ]

            }
            else{

          //   this.contextMenuItems=[ {
          //     menuText: 'Add Row',
          //     menuIcon: 'fa fa-plus',
          //     menuEvent:'AddRow'
          //   }
          // ]
        }
           }else{
            if(!hasChild)
              {
        this.contextMenuItems=[ 
        //   {
        //   menuText: 'Add Row',
        //   menuIcon: 'fa fa-plus',
        //   menuEvent:'AddRow'
        // },
        {
          menuText: 'Remove Column',
          menuIcon: 'fa fa-trash-alt',
           menuEvent:'RemoveColumn'
        },
        // {
        //   menuText: 'DMO',
        //   menuIcon: 'fa fa-users',
        //   menuEvent:'AddDMO'

        // },{
        //   menuText: 'share DMO',
        //   menuIcon: 'fa fa-share',
        //   menuEvent:'shareDMO'
        // }
      ]
    }
    }
       }
       else if(this.showContextMenuFor.type ==='columnRow'){
        let dmoExists=false;
        let rows=this.showContextMenuFor.r;
        let item={'rowIndex':this.showContextMenuFor.rowIndex,"colIndex":this.showContextMenuFor.colIndex,'ColumnRowIndex':this.showContextMenuFor.colRowIndex,"colRowcolumnIndex":this.showContextMenuFor.colRowcolumnIndex}
    
        let rowIndex: number=item.rowIndex
        let colIndex: number=item.colIndex;
          let column= rows.columns[colIndex];
          if (column) {
            const existingColumn = column?.rows?.[item.ColumnRowIndex];
           const dmoGuid = existingColumn?.columns?.[item.colRowcolumnIndex]?.dmoguid;
            if (dmoGuid?.length > 0 && this.isDmoExist) {
              dmoExists = true;
            }
          }
         if(dmoExists){
          this.contextMenuItems=[ 
  
          {
            menuText: 'Edit DMO',
            menuIcon: 'fa fa-wrench',
             menuEvent:'EditDMO'
          },
          {
            menuText: 'Conditions',
            menuIcon: 'fa fa-cogs',
             menuEvent:'ConditionsDMO'
          },
          {
            menuText: 'Clone',
            menuIcon: 'fa fa-copy',
             menuEvent:'CloneDMO'
          },
          {
            menuText: 'Unshare DMO',
            menuIcon: 'fas fa-unlink',
            menuEvent:'DeleteDMO'
          }
        ]
         }else{
          this.contextMenuItems=[ 
          //   {
          //   menuText: 'Add Column',
          //   menuIcon: 'fa fa-plus',
          //   menuEvent:'AddColumn'
          // },
  
          {
            menuText: 'Remove Column',
            menuIcon: 'fa fa-trash-alt',
             menuEvent:'RemoveColumn'
          },
          // {
          //   menuText: 'DMO',
          //   menuIcon: 'fa fa-users',
          //   menuEvent:'AddDMO'
          // },
          // {
          //   menuText: 'share DMO',
          //   menuIcon: 'fa fa-share',
          //   menuEvent:'shareDMO'
          // }
        ]
         }
      
       }
       else if(this.showContextMenuFor.type ==='NestedcolumnRow'){
        let dmoExists=false;
        let rows=this.showContextMenuFor.r;
        let item={'rowIndex':this.showContextMenuFor.rowIndex,"colIndex":this.showContextMenuFor.colIndex,'ColumnRowIndex':this.showContextMenuFor.colRowIndex}
    
        let rowIndex: number=item.rowIndex
        let colIndex: number=item.colIndex;
          let column= rows.columns[colIndex];
          if (column) {
            const existingColumn = column?.rows?.[item.ColumnRowIndex];
            if (existingColumn?.columns?.length > 0 && this.isDmoExist) {
              dmoExists = true;
            }
        }
         if(!dmoExists){
          this.contextMenuItems=[ 
            {
              menuText: 'Remove Row',
              menuIcon: 'fa fa-trash-alt',
              menuEvent:'RemoveRow'
    
            }
        ]
      }
      
       }

       
    }

    if (this.contextMenuPosition) {
      if (!this.contextMenuPosition.centerX || !this.contextMenuPosition.centerY) {
        if (this.contextMenuPosition.left !== undefined && 
            this.contextMenuPosition.width !== undefined) {
          this.contextMenuPosition.centerX = this.contextMenuPosition.left + 
                                            (this.contextMenuPosition.width / 2);
        } else { 
          this.contextMenuPosition.centerX = this.contextMenuPosition.rightClickMenuPositionX;
        }
        
        if (this.contextMenuPosition.top !== undefined && 
            this.contextMenuPosition.height !== undefined) {
          this.contextMenuPosition.centerY = this.contextMenuPosition.top + 
                                            (this.contextMenuPosition.height / 2);
        } else {
          this.contextMenuPosition.centerY = this.contextMenuPosition.rightClickMenuPositionY;
        }
        this.showContextMenu = true;
      }
      if (rowhasColumn) {
        const targetDiv = document.getElementById(this.selectedDivId);
        if (targetDiv) {
          const divWidth = targetDiv.offsetWidth; 
          const rect = targetDiv.getBoundingClientRect();
          const clickX = this.contextMenuPosition.rightClickMenuPositionX;
          this.contextMenuPosition.centerX = clickX + divWidth / 2;
          this.contextMenuPosition.centerY = rect.top;
          this.showContextMenu = true;
        }
      }
      
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const container = document.querySelector('.form-view'); 
      if (container) {
        this.renderer.listen(container, 'scroll', () => {
          this.showContextMenu = false; 
        });
      } else {
        console.warn('Scrollable container not found!');
      }
    });
  }



  //clickout(event) {
    // if (event.target.classList.contains('menu-link')) {
    //   this.showContextMenu = false;
    // }
    // if (event.target.classList.contains('holiday')) {
    //   this.showContextMenu = event.target.closest('.shiftDay').contains(this.eRef.nativeElement)
    // }
    // else if (!event.target.classList.contains("shiftLabel"))
    // {
    //   this.showContextMenu = event.target.contains(this.eRef.nativeElement)
    // }

 // }

  onContextMenuClick(event, data: string): any {
    this.contextMenuSelected.emit({ option: data, showContextMenuFor: this.showContextMenuFor,position:this.contextMenuPositiontest });
    setTimeout(() => {
      this.showContextMenu = false;
      this.service.setSidebarclose(true);
    }, 250);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showContextMenu = false; 
  }
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    this.showContextMenu = false; 
  }
  
}
