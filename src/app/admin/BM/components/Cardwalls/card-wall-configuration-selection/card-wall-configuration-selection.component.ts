import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardWallViewConfigurationServices } from '@app/core/services/card-wall-view-configuration.service';
import { forEach } from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forEachChild } from 'typescript';
import { Router } from '@angular/router';
import { CardWallViewConfigurationComponent } from '@app/admin/BM/components/Cardwalls/card-wall-view-configuration/card-wall-view-configuration.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CardPlaceholderDmoMappingComponent } from '../card-placeholder-dmo-mapping/card-placeholder-dmo-mapping.component';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from '@app/shared/services/util.service';
import {  SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-wall-configuration-selection',
  templateUrl: './card-wall-configuration-selection.component.html',
  styleUrls: ['./card-wall-configuration-selection.component.scss']
})
export class CardWallConfigurationSelectionComponent implements OnInit  {

  PopupTitle:string= 'Configure Card Wall';
  CardName: string;
  CardHtml;
  html;
  Toggle = {};
  data:any=[];
  processCardid: any; 
  selectedCard: number;
  isNextClicked=false;
  IsCardClick=false;
  enableActivate=false;
  ProcessName:string;
  
  
  @ViewChild(CardWallViewConfigurationComponent,{static:false}) cardWallViewConfiguration!:CardWallViewConfigurationComponent;

  constructor(
    private  CardWallViewService: CardWallViewConfigurationServices,
    private elRef:ElementRef,
    public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer,
    private router: Router,
    private modalService: NgbModal,
    private toster: ToastrService,
  )
  { 
     
  }
  ngOnInit(): void {
    this.getProcessCardbyProcessName();
  }



  getProcessCardbyProcessName()
   {
    setTimeout(() => {
    this.CardWallViewService.getWfCvPrcessCarByProcessName(this.ProcessName).subscribe(data => {
      if(data && data.length>0){
        this.data=data;
      this.processCardid = data[0].processid ; 
      const activeCard=data.filter(a=>a.status==1);
      if(activeCard.length>0){
        this.selectedCard=activeCard[0].cardId;
        this.cardWallSelected(activeCard[0]);
      }
    }
    });
  }, 150);
  }

    ActivateCard()
    {
      setTimeout(() => {
        this.CardWallViewService.ActivatetWfCvCardByCardIDAndProcessName(this.selectedCard, this.ProcessName).subscribe(data => {
          if(data)
          {
            this.getProcessCardbyProcessName();
            this.toster.success('Card  Activated successfully', '');
          }
        });
      }, 150);
    }

  

   // Toggle Grid & Filters
  clickEvent(SectionKey) {
    if (this.Toggle[SectionKey] === undefined) {
      this.Toggle[SectionKey] = false;
    } else {

      this.Toggle[SectionKey] = !this.Toggle[SectionKey];
    }
  }

bindHtml(item){
    let processedHtml = UtilService.processImageUrlsForDynamicHtmls(item.cardhtml);
    return this.sanitizer.bypassSecurityTrustHtml(processedHtml);
}


getToggle(SectionKey) {
    if (this.Toggle[SectionKey] === undefined) {
      this.Toggle[SectionKey] = false;

    }
    return this.Toggle[SectionKey];
  }

AddPlaceholder(data){

}

EnableSelect(){
  if(this.isNextClicked){
    return {
      'display':'block'
    }
  }
  else{
    return {
      'display':'none'
    }
  }
}


  cardWallSelected(item)
  {
    this.selectedCard = item.cardId;
    const card = this.data.filter(a=>a.cardId ==  item.cardId);
    if(card.length>0 && card[0].AlreadyMapped === "1" && card[0].status === "0"){
    this.enableActivate = true;
    }else{
      this.enableActivate = false;
    }

  }
getSelectedCard(){
 let exists= this.data.filter(a=>a.cardId==this.selectedCard);
 if(exists){
   return exists[0]
 }
 return null;
}
  nevigateToCardWall()
  {
    const selectedCardItem=this.getSelectedCard()
    if(selectedCardItem){
    this.isNextClicked=true;
    if(this.cardWallViewConfiguration){
      this.PopupTitle = 'Configure Card Wall';
      this.cardWallViewConfiguration!.loadData( this.ProcessName,selectedCardItem);
    }
  }else{
    this.toster.warning('Please select card first!', '');
  }

    // this.activeModal.close();
    // this.router.navigate(['admin/bm/card-wall-view-configuration' ,this.selectedCard]);
  }








  CardWallViewPopup() {
    this.nevigateToCardWall();
    return;
    this.activeModal.close();
    const modalRef = this.modalService.open(CardWallViewConfigurationComponent,
      { windowClass: 'grid-config-view-modal', backdrop: 'static', keyboard: false }
    );
    const modalInstance: CardWallViewConfigurationComponent = modalRef.componentInstance;
    modalInstance.cardId = this.selectedCard;
  }

  onBackFromChild() {
    this.isNextClicked = false; // Switch back to the previous popup
    this.PopupTitle = 'Configure Card Wall'; // Reset title when going back
  }

}
