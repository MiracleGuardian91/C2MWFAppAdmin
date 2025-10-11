import { Component, ElementRef, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '@app/core';
import { DmoImageControlService } from '@app/core/services/dmo-image-control.service';
import { environment } from '@env/environment';
import { NgbDateParserFormatter, NgbProgressbar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { IDatePickerConfig } from 'ng2-date-picker';
import { IDMComponent } from '../../models1';
import { NgIf, NgStyle, NgSwitch, NgSwitchCase, NgFor, NgSwitchDefault } from '@angular/common';
import { NgSelectComponent, NgLabelTemplateDirective, NgOptionTemplateDirective, NgOptionComponent } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { UtilService } from '@app/shared/services/util.service';
import { MatRadioButton } from '@angular/material/radio';

@Component({
    selector: 'app-dmo',
    templateUrl: './dmo.component.html',
    providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter }],
    styleUrls: ['./dmo.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgStyle,
        NgSwitch,
        NgSwitchCase,
        NgSelectComponent,
        NgLabelTemplateDirective,
        NgOptionTemplateDirective,
        NgFor,
        NgOptionComponent,
        ReactiveFormsModule,
        NgbProgressbar,
        NgbInputDatepicker,
        MatInput,
        MatAutocomplete,
        MatSelect,
        NgSwitchDefault,
        MatRadioButton
    ],
})
export class DmoComponent {
  @Input() dmo: IDMComponent;
  
  @Input() containerStyle: any;
  fileList = [];
  galleryImageUrl = UtilService.getUrlForImage('/assets/styles/images/dmo_gallery.png');
  gridViewImageUrl = UtilService.getUrlForImage('/assets/styles/images/gridView.jpg');
  maxDate = { year: 2199, month: 12, day: 31 };
  minDate = { year: 1990, month: 1, day: 1 };
  selectedDate: NgbDateStruct | null = null;
  get getFileList() {
    if (this.dmoimage.ImagesRemoveFileList.length > 0) {
      this.dmoimage.ImagesRemoveFileList.forEach((element) => {
        if (this.fileList.length > 0) {
          const index = this.fileList.findIndex((x) => x['FileName'] === element.FileName);
          if (index !== -1) {
            this.fileList.splice(index, 1);
          }
        } else {
          if (this.fileInfoList.length > 0 && element.imgId !== undefined) {
            const index = this.fileInfoList.findIndex((x) => x['FileName'] === element.FileName);
            if (index !== -1) {
              this.fileInfoList.splice(index, 1);
            }
          }
        }
      });
    }
    return this.fileList.length > 0 ? this.fileList : this.fileInfoList;
  }
  fileInfoList: Array<object> = [];
  dateTimePickerConfig: IDatePickerConfig = {
    format: 'DD/MM/YYYY HH:mm:ss',
    showTwentyFourHours: environment.Setting.dateTimeFormat24,
    showSeconds: true,
    disableKeypress: true,
  };

  constructor(public elRef: ElementRef, private dmoimage: DmoImageControlService, public ngbDateParserFormatter: NgbDateParserFormatter) {
    this.maxDate = { year: 2199, month: 12, day: 31 };
    this.minDate = { year: 1990, month: 1, day: 1 };
  }
  ngOnInit(): void {
   
  }
  displayWith(lookup) {
    return lookup ? lookup.ddOptionValue + ' (' + lookup.ddOptionKey + ')' : null;
  }

  getColor(color: { label: string }): string {
    return color.label.toLowerCase();
  }
  BindStyle(){
   if(this.containerStyle){
    if(this.containerStyle.dmolabel && this.containerStyle.dmolabel.label_position=="Left"){
      return {
         'display': 'flex'
        };
    }
   }
  }
  labelControlStyle1(){
    if(this.containerStyle){
     if(this.containerStyle.dmolabel && this.containerStyle.dmolabel.label_position=="Left"){

      const labelProps = this.containerStyle.dmolabel;
      if (labelProps.label_position === "Left") {
        const style = {
          width: '25%',
        };
       
        switch (labelProps.label_align) {
          case "Left":
            style['text-align'] = 'Left';
            break;
          case "Right":
            style['text-align'] = 'Right';
            break;
          case "Center":
            style['text-align'] = 'Center';
            break;
        }
  
        return style;
      }
     }
    if(this.containerStyle.dmolabel && this.containerStyle.dmolabel.label_position=="Top"){

      const labelProps = this.containerStyle.dmolabel;
      if (labelProps.label_position === "Top") {
        const style = {
          width: '100% !important',
        };
       
        switch (labelProps.label_align) {
          case "Left":
            style['text-align'] = 'Left';
            break;
          case "Right":
            style['text-align'] = 'Right';
            break;
          case "Center":
            style['text-align'] = 'Center';
            break;
        }
  
        return style;
      }
     ;
    }};
   }


   labelControlStyle() {
    let style = {};
    if (this.containerStyle && this.containerStyle.dmolabel) {
      const labelProps = this.containerStyle.dmolabel;
      if (labelProps.label_position === "Left") {
        style['width'] = '25%';  
      }
        if (labelProps.label_position === "Top") {
        style['width'] = '100%';  
      }
    }
  
   
    if (this.containerStyle && this.containerStyle.dmolabel) {
      const labelProps = this.containerStyle.dmolabel;
  
      switch (labelProps.label_align) {
        case "Left":
          style['text-align'] = 'left';
          break;
        case "Right":
          style['text-align'] = 'right';
          break;
        case "Center":
          style['text-align'] = 'center';break;
          case "justify":
          style['text-align'] = 'justify';
          break;
      }
      if (labelProps.label_color) {
        style['color'] = labelProps.label_color;
      }
    }
  
    return style;  // Return the final style object
  }
  



  labelControlStyle2() {
    let style = {};
    if (this.containerStyle && this.containerStyle.dmolabel) {
      const labelProps = this.containerStyle.dmolabel;
  
      switch (labelProps.label_align) {
        case "Left":
          style['text-align'] = 'left';
          break;
        case "Right":
          style['text-align'] = 'right';
          break;
        case "Center":
          style['text-align'] = 'center';break;
          case "justify":
          style['text-align'] = 'justify';
          break;
      }
      if (labelProps.label_color) {
        style['color'] = labelProps.label_color;
      }
    }
    return style; 
  }


  formControlStyle(){
    if(this.containerStyle){
     if(this.containerStyle.dmolabel && this.containerStyle.dmolabel.label_position=="Left"){
       return {
        width: '75%',
         };
     }
     
     return {
      width: '100%',
       };
    }
   }

  

  mask(rawValue) {
    if (rawValue && rawValue.replace(/\D+/g, '').length > 11) {
      return ['+', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    } else if (rawValue && rawValue.replace(/\D+/g, '').length > 10) {
      return ['+', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }

  upload(UploadEvent: any, dmoGUID: string, dmoName: any, modal: any = undefined, cropedFile = undefined) {
    let fileName = '';

    this.dmoimage.index = this.dmoimage.index + 1;
    if (cropedFile) {
      fileName = cropedFile.ImgFileName;
      this.dmoimage.ImagesFileList.push({
        file: cropedFile.file,
        ImgFileName: cropedFile.ImgFileName,
        Guid: dmoGUID,
        imgId: this.dmoimage.index,
        dmoName: dmoName,
      });
    } else {
      fileName = UploadEvent.target.files[0].name;
      if (UploadEvent.currentTarget['files'].length === 0) {
        return;
      }
      if (UploadEvent.currentTarget['files']['files'] != undefined) {
        this.dmoimage.ImagesFileList.push({
          file: { file: UploadEvent.currentTarget['files']['files'][0] },
          ImgFileName: '',
          Guid: dmoGUID,
          imgId: this.dmoimage.index,
          dmoName: dmoName,
        });
      } else {
        this.dmoimage.ImagesFileList.push({
          file: { file: UploadEvent.currentTarget['files'][0] },
          ImgFileName: '',
          Guid: dmoGUID,
          imgId: this.dmoimage.index,
          dmoName: dmoName,
        });
      }
    }
    const img = {
      FileName: fileName,
      FileSize: '0 Kb',
      OldFileName: fileName,
      CreatedOn: null,
      CreatedBy: null,
      DISPNAME: null,
      UserFullName: null,
      IsEncrypted: false,
      Id: null,
      uId: this.dmoimage.index,
      dmoName: dmoName,
    };
    this.fileInfoList.push(img);
    this.fileList.push(img);
    if (modal) {
      modal.dismiss('Cross click');
    }
  }

  uploadImage(event: any) {
    if (+this.dmo.uploadLimit < this.fileList.length) {
      return;
    }
    const file = event.target.files.item(0);
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['jpg', 'jpeg', 'png'].includes(ext)) {
      return;
    }
    this.upload(event, this.dmo.id, this.dmo.dmoName);
  }

  DeleteFile(objfile: any) {
    if (objfile.uId) {
      let ind = this.fileInfoList.findIndex((x) => x['uId'] === objfile.uId);
      if (ind > -1) {
        this.fileInfoList.splice(ind, 1);
      }
      ind = -1;
      ind = this.fileList.indexOf(objfile);
      if (ind > -1) {
        this.fileList.splice(ind, 1);
      }
      ind = -1;
      ind = this.dmoimage.ImagesFileList.findIndex((x) => x['imgId'] === objfile.uId);
      if (ind > -1) {
        this.dmoimage.ImagesFileList.splice(ind, 1);
      }
      return;
    }
    this.dmoimage.ImagesRemoveFileList.push({
      ...objfile,
      IsPermanentFileDeletion: environment.Setting.IsPermanentFileDeletion.toString(),
    });
    const index = this.fileList.indexOf(objfile);
    const index1 = this.fileInfoList.indexOf(objfile);
    if (index > -1) {
      this.fileList.splice(index, 1);
      this.dmoimage.ImagesFileList.splice(index, 1);
    }
    if (index1 > -1) {
      this.fileInfoList.splice(index, 1);
    }
  }
  dateFormat = environment.Setting.dateFormat;
  dateTimeFormat = environment.Setting.dateTimeFormat;
  onDateSelect(date: NgbDateStruct) {
    this.selectedDate = date;
  }

  formatDate(date: NgbDateStruct | null): string {
    if (!date) return '';
    const mm = String(date.month).padStart(2, '0');
    const dd = String(date.day).padStart(2, '0');
    const yyyy = date.year;
    return `${mm}/${dd}/${yyyy}`;
  }
}
