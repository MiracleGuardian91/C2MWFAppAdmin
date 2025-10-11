import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardWallViewConfigurationServices } from '@app/core/services/card-wall-view-configuration.service';
import { forEach } from 'lodash';
import { forEachChild } from 'typescript';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CardPlaceholderDmoMappingComponent } from '../card-placeholder-dmo-mapping/card-placeholder-dmo-mapping.component';
import { CardWallConfigurationAssociatedCompanies } from '@app/core/models/form-view/bm-associated-companies.model';
import { ListviewService } from '@app/core';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Console } from 'console';
import { UtilService } from '@app/shared/services/util.service';

@Component({
  selector: 'app-card-wall-view-configuration',
  templateUrl: './card-wall-view-configuration.component.html',
  styleUrls: ['./card-wall-view-configuration.component.scss'],
})
export class CardWallViewConfigurationComponent
  implements OnInit
{
  selectedCard:any;
  CardName: string;
  CardHtml;
  cardId: number;
  html;
  processName: string; //'WorkOrders';
  cardDmoMapByCard: any = [];
  dmoList: any = [];
  Toggle: {};
  IsCardClicked = false;
  placeHolderForm:FormArray
  placeHolderFormGroup!:FormGroup
  cardWallConfigurationsArray: CardWallConfigurationAssociatedCompanies[] = [];

  @Output() backToPrevious = new EventEmitter<void>();

  constructor(
    private CardWallViewService: CardWallViewConfigurationServices,
    private listviewService: ListviewService,
    private elRef: ElementRef,
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private toster: ToastrService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {}

  loadData(ProcessName,selectedCard) {
    this.cardId = selectedCard.cardId;
    this.processName = ProcessName;
    this.selectedCard=selectedCard;
    this.getCardsView(selectedCard);
    this.getWFCardDmoMapByCardId(this.cardId);
    this.getDmoList();
  }

 
  clickEvent(SectionKey) {
    if (this.Toggle[SectionKey] === undefined) {
      this.Toggle[SectionKey] = false;
    } else {
      this.Toggle[SectionKey] = !this.Toggle[SectionKey];
    }
  }

  getToggle(SectionKey) {
    if (this.Toggle[SectionKey] === undefined) {
      this.Toggle[SectionKey] = false;
    }
    return this.Toggle[SectionKey];
  }

  getCardsView(data) {
      let processedHtml = UtilService.processImageUrlsForDynamicHtmls(data.cardhtml);
      this.CardHtml = this.sanitizer.bypassSecurityTrustHtml(processedHtml);
      setTimeout(() => {
        this.getWFCardDmoMapByCardId(data.cardId);
        this.nevigateToCardWallDmoMapping();
      }, 100);
    
  }
showSearch(dmo){
  if(dmo&& dmo!='')
  return ''
else
return 'Select...'
}
  getDmoList() {
    this.listviewService.dmoList(this.processName).subscribe((res) => {
     this.dmoList = res;
    });
  }
   //CreateForm
   SetInitValue(){
    this.placeHolderFormGroup=this.formBuilder.group({
      parentGroup:this.formBuilder.group({
        PlaceholderId:[''],
        DmoGuid:['']
      })

    })
  }
  BindForm(){
   // this.SetInitValue();
    this.placeHolderForm=this.formBuilder.array([])
    if(this.placeHolderForm){
     //this.placeHolderFormGroup.get('parentGroup') as FormGroup
      this.placeHolderForm.clear();
    }
    
  for (let index = 0; index < this.cardWallConfigurationsArray.length; index++) {
    const element = this.cardWallConfigurationsArray[index];
    let row=this.formBuilder.group({
      PlaceholderId:new FormControl(),//,element.PlaceholderId,
      DmoGuid:new FormControl(),//element.DmoGuid
    })
    this.placeHolderForm.push(row);
  }
  }
  
  loadMappedDmog(){
    this.CardWallViewService.getWfCvCardDmoMapByCardID(this.cardId,this.processName).subscribe(
      (res) => {
        if (res != null) {
          this.cardDmoMapByCard = res;
        }}
      )
  }
  getWFCardDmoMapByCardId(cardId: number) {//update card html if already mapped 
    setTimeout(() => {
      this.CardWallViewService.getWfCvCardDmoMapByCardID(this.cardId,this.processName).subscribe(
        (res) => {
          if (res != null) {
            this.cardDmoMapByCard = res;
            this.cardWallConfigurationsArray=[];
            this.nevigateToCardWallDmoMapping();
            //let Placeholders= document.getElementsByClassName('Placeholder');

            // for (let index = 0; index < res.length; index++) {
            //   let item = res[index];
            //   if (item) {
            //     let placeholderViaId = document.getElementById(
            //       item.PlaceholderId
            //     );
            //     if (placeholderViaId) {
            //       placeholderViaId.innerText = this.DisplayName(item.DmoGuid);
            //     }
            //   }
            // }
          }
        }
      );
    }, 150);
  }

  getGuidByPlaceholder(PlaceholderId) {
    if (this.cardDmoMapByCard && this.cardDmoMapByCard.length > 0) {
      let guid = this.cardDmoMapByCard.filter(
        (a) => a.PlaceholderId == PlaceholderId
      );
      if (guid.length > 0) {
        return guid[0].DmoGuid;
      }
    }
    return '';
  }

  DisplayName(GUID) {
    if (this.dmoList && this.dmoList.length > 0) {
      let exist = this.dmoList.filter((a) => a.GUID == GUID);
      if (exist.length > 0) {
        return exist[0].DisplayName;
      }
    }
    return '';
  }

  AddPlaceholder() {
    //let currentPlaceHolder=Placeholder1.target as HTMLElement;

    let placeholdersArray = [];
    let Placeholders = document.getElementsByClassName('Placeholder');
    if (Placeholders) {
      for (let index = 0; index < Placeholders.length; index++) {
        const doc = Placeholders[index] as HTMLElement;
        this.cardWallConfigurationsArray.push({
          PlaceholderId: doc.id,
          DmoGuid: this.getGuidByPlaceholder(doc.id),
          cardId: this.cardId,
          ProcessName: this.processName
        });
      }
    }
    this. BindForm();
    // this.CardWallplaceholderDmoMapping(cardWallConfigurationsArray);
  }

  CardWallplaceholderDmoMapping(placeholdersArrays) {
    const modalRef = this.modalService.open(
      CardPlaceholderDmoMappingComponent,
      {
        windowClass: 'grid-config-view-modal',
        backdrop: 'static',
        keyboard: false,
      }
    );

    const modalInstance: CardPlaceholderDmoMappingComponent =
      modalRef.componentInstance;
    modalInstance.CardWallConfigurArray = placeholdersArrays;
    modalInstance.dmoList = this.dmoList;

    modalRef.result.then(
      (data) => {
        this.getWFCardDmoMapByCardId(this.cardId);
        this.getDmoList();
      },
      (error) => {
        // on error/dismiss
      }
    );
  }

  EnableSelectedDmoCard() {
    if (this.IsCardClicked) {
      return {
        display: 'block',
      };
    } else {
      return {
        display: 'none',
      };
    }
  }

  nevigateToCardWallDmoMapping() {

    let Placeholders = document.getElementsByClassName('Placeholder');
    if (Placeholders) {
      for (let index = 0; index < Placeholders.length; index++) {
        const doc = Placeholders[index] as HTMLElement;
        this.cardWallConfigurationsArray.push({
          PlaceholderId: doc.id,
          DmoGuid: this.getGuidByPlaceholder(doc.id),
          cardId: this.cardId,
          ProcessName: this.processName
          
        });
      }
      this. BindForm()
    }
  }

  updadatedmouid(item:CardWallConfigurationAssociatedCompanies,event: Event){
    const value =event// (event.target as HTMLSelectElement).value;
    if(value){
    for (let index = 0; index < this.cardWallConfigurationsArray.length; index++) {
      let element = this.cardWallConfigurationsArray[index];
      if(item){
       if(element.PlaceholderId==item.PlaceholderId){
        element.DmoGuid=value;
      
       }
      
      }
      
    }
  }
  }
  Save() {
    this.CardWallViewService.AddWfCvCard(this.cardWallConfigurationsArray).subscribe(
      (data) => {
        //this.activeModal.close();
        this.getWFCardDmoMapByCardId(this.cardId);
        this.toster.success('Configurations added successfully', '');
        this.activeModal.close();
      }
    );
  }
  loadforUser(PlaceholderId){
    let Placeholder = document.getElementById(PlaceholderId)
    if (Placeholder) {
        if(Placeholder.classList.contains('cardUserImage')){
          return this.dmoList.filter(a=>a.GUID=="MODFBY" ||a.GUID=="CRTDBY");

        }
      }


    //
   return this.dmoList;

  }

  onBack(){
    this.backToPrevious.emit();
  }
}
