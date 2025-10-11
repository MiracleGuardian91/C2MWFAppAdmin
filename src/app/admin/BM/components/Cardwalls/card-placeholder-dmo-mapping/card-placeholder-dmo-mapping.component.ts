import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardWallViewConfigurationServices } from '@app/core/services/card-wall-view-configuration.service';
import { forEach } from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forEachChild } from 'typescript';
import { Router } from '@angular/router';
import { CardWallConfigurationAssociatedCompanies } from '@app/core/models/form-view/bm-associated-companies.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card-placeholder-dmo-mapping',
  templateUrl: './card-placeholder-dmo-mapping.component.html',
  styleUrls: ['./card-placeholder-dmo-mapping.component.scss']
})
export class CardPlaceholderDmoMappingComponent implements OnInit {



  Toggle = {};
  cardId:number;
  @Input()CardWallConfigurArray?: CardWallConfigurationAssociatedCompanies[];
  @Input() dmoList?: [];
  constructor(
    private  CardWallViewService: CardWallViewConfigurationServices,
    private elRef:ElementRef,
    public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer,
    private router: Router,
    private toster: ToastrService,
    private route: ActivatedRoute
  ) { 

    // this.route.params.subscribe(params => {
    //   this.cardId = +params['cardId'];
    //   console.log("card Id " + this.cardId)
    // });
  }

  ngOnInit(): void {
    
  }

  loadData(cardId:number, CardWallConfigurArray:any, dmoList?:[])
  {
    this.cardId = cardId;
    this.CardWallConfigurArray= CardWallConfigurArray;
    this.dmoList = dmoList;
  }

  DefaultSelected(item,dmog){
    console.log(item,dmog);
    if(item.DmoGuid==dmog){
      return dmog;
    }
    return "";
  }



   // Toggle Grid & Filters
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

  updadatedmouid(item:CardWallConfigurationAssociatedCompanies,event: Event){
    const value = (event.target as HTMLSelectElement).value;
    if(value){
    for (let index = 0; index < this.CardWallConfigurArray.length; index++) {
      let element = this.CardWallConfigurArray[index];
      if(item){
       if(element.PlaceholderId==item.PlaceholderId){
        element.DmoGuid=value;
      
       }
      
      }
      
    }
  }
  }

  

Save()
{
    
    this.CardWallViewService.AddWfCvCard(this.CardWallConfigurArray).subscribe(data => {
      
     
        this.activeModal.close();
        this.toster.success('Configurations added successfully','');
       
        

  });
     
  }


}
