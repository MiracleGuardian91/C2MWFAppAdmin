import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DMOS } from '@app/admin/data-modeler1/const1';

import { PanelMainContainer, SideNavModel } from '@app/admin/data-modeler1/models1';
import { DataModelerApiService } from '@app/admin/data-modeler1/services1/data-modeler-api.service1';
import { MessageService } from '@app/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-dmog-shared-dmo',
    templateUrl: './dmog-shared-dmo.component.html',
    styleUrls: ['./dmog-shared-dmo.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class DmogSharedDmoComponent implements OnInit {
@Input() sideNavModel:SideNavModel;
@Input() Searchtrem:string;

@Input()draggingStatus:false;
readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
 panelMainContainer:PanelMainContainer;
  shareDmoList = []
  CopyshareDmoList = []
  constructor(
    private dmApi: DataModelerApiService,
     private readonly msg: MessageService,
  ) {

  }

  ngOnInit(): void {
    if(!this.draggingStatus){
      this.GetAvailableDmoToShare();
    }
  }

  reload() {
    if (this.Searchtrem != null && this.Searchtrem != undefined) {
      if (!this.draggingStatus) {
        this.searchDmo(this.Searchtrem);
      }
    } else if (!this.draggingStatus) {
      this.GetAvailableDmoToShare();
    }
  }
  
  removeExisting(){
    if(this.sideNavModel.dmog && this.sideNavModel.dmog.DMOGProps){
    
      this.panelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
      if( this.panelMainContainer){
       
        if(this.panelMainContainer.rows.length && this.shareDmoList && this.shareDmoList.length>0){
          for (let index = 0; index < this.panelMainContainer.rows.length; index++) {
            const r = this.panelMainContainer.rows[index];
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
      }
      
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.sideNavModel && changes.sideNavModel.currentValue!=changes.sideNavModel.previousValue) {
      if(changes.sideNavModel.previousValue){
        if(changes.sideNavModel.currentValue.dmog.DMOGID!=changes.sideNavModel.previousValue.dmog.DMOGID){
          if(!this.draggingStatus){
            this.GetAvailableDmoToShare();
          }
        }
      }

    }
    if(this.Searchtrem!=undefined || this.Searchtrem!=null){
      this.searchDmo(this.Searchtrem);
    }
   
  }

   getBMOGID (dmog: any) {
    if (dmog?.parent && dmog.parent === 'BMO') {
        const bmo = dmog;
        if (bmo.parent && bmo.parent === 'BMOG') {
            return bmo.BMOGID; // Return BMOGID if available
        }
    }
    return null; // Return null if BMOGID is not found
};



  //data.DMOGID
  GetAvailableDmoToShare(){
    var data=this.sideNavModel.dmog;
    let bmogId = data?.parent?.parent?.BMOGID ?? data?.DMOGID;
    this.dmApi.GetAvailableDmoToShare(bmogId, data.root.BMId).subscribe(x=>{
     this.shareDmoList= x.components;
     this.removeExisting();
     this.CopyshareDmoList=this.shareDmoList;
   });
  }

getcssbyclass(type: string) {
  let find = this.formsControls.filter(a => a.type === type);
  if (find.length > 0 && find[0].class) {
    return find[0].class;
  }
  return '';
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
  onDragOver(event){
    event.preventDefault()
  
   }
   dragdmo(event,item){
    var model={'contol':item,"selectedItem":this.sideNavModel.data,'DMOGID':this.sideNavModel.dmog.DMOGID}
    event.dataTransfer.setData('SharedDmogDmo',JSON.stringify(model));
      setTimeout(() => {
      this.GetAvailableDmoToShare();
    }, 2000);
   }

   onDmoDelete($event,item){
    
             const data=this.sideNavModel.dmog;
             const dmoId =item.dmoId;
                const dispName = item.label;
                this.msg.showMessage('Warning', {
                    header: 'Delete DMO',
                    body: `Are you sure you want to Delete ${dispName}?`,
                    btnText: 'Delete',
                    checkboxText: 'Yes, Delete this object',
                    isDelete: true,
                    isNewDesign: true,
                    callback: () => {
                        this.dmApi
                            .deleteDmo(dmoId,data.root.BMId)
                            .subscribe(
                                (success) => {
                                    if (success) {
                                        this.GetAvailableDmoToShare();
                                    }
                                }
                            );
                    },
                });
    
   }
  
}
