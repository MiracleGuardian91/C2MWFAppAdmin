import { Component,Renderer2, AfterViewInit  , EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModelerApiService } from '../../services1/data-modeler-api.service1';
import { ToastrService } from 'ngx-toastr';
import { PanelMainContainer, SideNavModel,PanelMainRow, ContainerStyle } from '../../models1';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '@app/core';
import { ServiceProviderService } from '../../services1/service-provider.service';
import { BorderStyle } from '../../const1';
import { NgbDayTemplateData } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { NgIf, NgStyle, NgFor, NgClass, UpperCasePipe } from '@angular/common';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
    selector: 'app-dmog-settings',
    templateUrl: './dmog-settings.component.html',
    styleUrls: ['./dmog-settings.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        MatTabGroup,
        MatTab,
        ReactiveFormsModule,
        FormsModule,
        NgStyle,
        NgFor,
        NgClass,
        UpperCasePipe
    ],
})
export class DmogSettingsComponent implements OnInit, AfterViewInit  {
  panelMainContainer:PanelMainContainer;
  @Input() sideNavModel:SideNavModel;
  @Output() UpdatedDataEmitter: EventEmitter<any> = new EventEmitter<any>(); 
  containerStyle:ContainerStyle

  readonly borderStyle = Object.values(BorderStyle);
  width:number=0;
  background_color:any;
  border:any='Solid'
  label_position:any='Top'
  corner_radius_top:any=0;
  corner_radius_right:any=0;
  corner_radius_left:any=0;
  corner_radius_bottom:any=0;
  border_color:any;
  label_color:any;
  label_align:any;
  border_width:any=0;
  help_icon_color:any;
  header_fill_color:any;
  header_text_color:any;
  header_border:any='Yes'
  transformy;
  rowdmogId;
 
  constructor(
    private apiService:ApiService,
    private dataProvider: ServiceProviderService,
    private renderer: Renderer2
  ){
    this.dataProvider.geUpdatedContainerWidth().subscribe(data=>{
     if(data)
     {
      this.width=data;
     }
     })
  }
  formatLabel(value: number): string {
    return `${value} width`;
  }
 
  ngOnInit(): void {
    
    if (this.sideNavModel) {
      console.log(this.sideNavModel);
      if(this.sideNavModel.type=='dmog'){
        this.panelMainContainer=this.sideNavModel.data;
        if(!this.panelMainContainer){
          let temprows: PanelMainRow[] = [];
           this.panelMainContainer={
               width:100,
               rows: temprows
             }
         }
        this.width=this.panelMainContainer.width;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
        this.containerStyle=this.panelMainContainer.style;
        this.UpdateStyleProp();
        }
      }
  }
  onHeaderBorderChange(value){
    this.header_border=value;
    this.RealTimeStyleChanges();
  }
  ngAfterViewInit(){
    setTimeout(() => {
    this.SetDefultTabsettings();
  }, 300);
  }
  ngOnChanges() {
    if (this.sideNavModel) {
      console.log(this.sideNavModel);
      if(this.sideNavModel.type=='dmog'){
        this.panelMainContainer=this.sideNavModel.data;
        if(!this.panelMainContainer){
         let temprows: PanelMainRow[] = [];
          this.panelMainContainer={
              width:100,
              rows: temprows
            }
        }
        this.width=this.panelMainContainer.width;
        this.containerStyle=this.panelMainContainer.style;
        this.rowdmogId=this.sideNavModel.dmog.DMOGID;
         this.UpdateStyleProp();
  
      }
      
    }
  }
  SetDefultTabsettings()
  {
    const tabIndex=0;
    const inkBarElement = document.querySelector('.mat-ink-bar') as HTMLElement;
    if (inkBarElement && tabIndex == 0) {
      this.renderer.setStyle(inkBarElement, 'left', `0px`);
    }
  }


 onTabChange(event: any): void {
  const tabIndex = event.index; // Get the index of the selected tab

  // Ensure the inkBar element exists before trying to set the style
  const inkBarElement = document.querySelector('.mat-ink-bar') as HTMLElement;
  
  if (inkBarElement) {
    // If the inkBarElement exists, update the style
    if (tabIndex === 0) {
      this.renderer.setStyle(inkBarElement, 'left', `0px`);
    } else {
      this.renderer.setStyle(inkBarElement, 'left', `145px`);
    }
  }
}






  onDragOver(event){
    event.preventDefault()
  
   }
   dragRow(event){
    event.dataTransfer.setData('dmogRows',event.target.id);
   }
  changeWidth(event){
    this.width=event.value;
  }
 
  SaveWidthWidth(event){
    console.log(this.width);
     if(this.width>100 || this.width<0)
      this.width=100;
   
    if(this.sideNavModel.dmog && this.sideNavModel.dmog.DMOGProps){
    
      this.panelMainContainer=JSON.parse(this.sideNavModel.dmog.DMOGProps);
      if(this.panelMainContainer){
      
        this.panelMainContainer.width=this.width
      }
      var model={};
    
       model={"DMOGID":this.sideNavModel.dmog.DMOGID,
               "DMOGProps":JSON.stringify(this.panelMainContainer)}
        
      
    
      const url = `wfapibm/DataModel/SaveDmogProps`;
      this.apiService.postgateway('',url,model).subscribe(r=>{
        this.sideNavModel.dmog.DMOGProps=JSON.stringify(this.panelMainContainer)
         //this.dataProvider.setreloadParent(true)
        // window.location.reload();
        this.UpdatedDataEmitter.emit(this.sideNavModel.dmog);
      },error=>{
        console.log(error)
      });
     
    
  }
}
UpdateStyleProp(){
  if(this.containerStyle){
    this.background_color= this.containerStyle.container.background_color;
    this.border= this.containerStyle.container.border;
    this.border_color = this.containerStyle.container.border_color;
    this.border_width = this.containerStyle.container.border_width;
    this.corner_radius_top= this.containerStyle.container.corner_radius_top;
    this.corner_radius_top = this.corner_radius_bottom = this.corner_radius_left = this.corner_radius_right = this.containerStyle.container.corner_radius_top;
    //label
    this.label_color= this.containerStyle.dmolabel.label_color;
    this.label_position= this.containerStyle.dmolabel.label_position;
    this.help_icon_color = this.containerStyle.dmolabel.help_icon_color;
    this.label_align = this.containerStyle.dmolabel.label_align;
    //header
    this.header_border= this.containerStyle.header.header_border;
    this.header_fill_color= this.containerStyle.header.header_fill_color;
    this.header_text_color = this.containerStyle.header.header_text_color;
  }
}
ChangeLabelAlignment(postion)
{
  if(postion)
  {
    this.label_align= postion;
    this.RealTimeStyleChanges();
  }
}

ChangeLabelPostion(postion)
{
  if(postion)
  {
    this.label_position= postion;
    this.RealTimeStyleChanges();
  }
}

RealTimeStyleChanges(){
  
  if(this.sideNavModel.dmog && this.sideNavModel.dmog.DMOGProps){
    // if(this.label_position === 'Top')
    //   {
    //     this.label_align= '';
    //   }
    this.corner_radius_bottom = this.corner_radius_left = this.corner_radius_right = this.corner_radius_top;
    const borderWidth = this.border_width || 1;
    const borderColor = this.border_color || '#000000';
    const borderStyle = this.border || 'solid';
    let container={
      "background_color": this.background_color,
      "border": borderStyle,
      "border_width": borderWidth,
      "corner_radius_top": this.corner_radius_top,
      "corner_radius_bottom": this.corner_radius_bottom,
      "corner_radius_left": this.corner_radius_left,
      "corner_radius_right": this.corner_radius_right,
      "border_color": borderColor
     };
      let header={
       "header_border": this.header_border,
       "header_fill_color":this.header_fill_color,
       "header_text_color":this.header_text_color
     };
     let dmolabel={
       "label_color": this.label_color,
       "label_position":this.label_position,
       "help_icon_color":this.help_icon_color,
       "label_align":this.label_align
     };
     this.containerStyle={
       container:container,
       header:header,
       dmolabel:dmolabel
     }
     this.panelMainContainer.style= this.containerStyle;
    var model={};
  
     model= {
            "DMOGID":this.sideNavModel.dmog.DMOGID,
             "DMOGProps":JSON.stringify(this.panelMainContainer)
            }
      this.dataProvider.setUpdateDmogStyleSettings(model);
            
  }
}




SaveChanges(){
  // if(this.label_position === 'Top')
  // {
  //   this.label_align= '';
  // }
  let container={
   "background_color":this.background_color,
    "border":this.border,
    "border_width":this.border_width,
    "corner_radius_top":this.corner_radius_top,
    "corner_radius_bottom": this.corner_radius_bottom,
    "corner_radius_left": this.corner_radius_left,
    "corner_radius_right": this.corner_radius_right,
    "border_color":this.border_color

  };
  let header={
    "header_border": this.header_border,
    "header_fill_color":this.header_fill_color,
    "header_text_color":this.header_text_color
  };
  let dmolabel={
    "label_color": this.label_color,
    "label_position":this.label_position,
    "help_icon_color":this.help_icon_color,
       "label_align":this.label_align
  };
  this.containerStyle={
    container:container,
    header:header,
    dmolabel:dmolabel
  }
  this.panelMainContainer.style= this.containerStyle;


  if(this.sideNavModel.dmog && this.sideNavModel.dmog.DMOGProps){
    
    
    var model={};
  
     model={"DMOGID":this.sideNavModel.dmog.DMOGID,
             "DMOGProps":JSON.stringify(this.panelMainContainer)}
      
    
  
    const url = `wfapibm/DataModel/SaveDmogProps`;
   this.apiService.postgateway('',url,model).subscribe(r=>{
      this.sideNavModel.dmog.DMOGProps=JSON.stringify(this.panelMainContainer)
       //this.dataProvider.setreloadParent(true)
      //window.location.reload();
      
    },error=>{
      console.log(error)
    });
   
  
}

}
  

 
}

