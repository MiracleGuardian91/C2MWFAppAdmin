import { Component, ElementRef, Input } from '@angular/core';
import { UtilService } from '@app/shared/services/util.service';
import { NgbDateFRParserFormatter } from '@app/core';
import { DmoImageControlService } from '@app/core/services/dmo-image-control.service';
import { environment } from '@env/environment';
import { NgbDateParserFormatter, NgbProgressbar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { IDatePickerConfig } from 'ng2-date-picker';
import { IDMComponent } from '../../models';
import { NgIf, NgSwitch, NgSwitchCase, NgFor, NgSwitchDefault } from '@angular/common';
import { NgSelectComponent, NgLabelTemplateDirective, NgOptionTemplateDirective, NgOptionComponent } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatRadioButton } from '@angular/material/radio';

@Component({
    selector: 'app-dmo',
    templateUrl: './dmo.component.html',
    providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter }],
    styleUrls: ['./dmo.component.scss'],
    standalone: true,
    imports: [
        NgIf,
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
  fileList = [];
  gridViewImageUrl = UtilService.getUrlForImage('/assets/styles/images/gridView.jpg');
  dateFieldImageUrl = UtilService.getUrlForImage('/assets/styles/images/dateField.jpg');
  maxDate = { year: 2199, month: 12, day: 31 };
  minDate = { year: 1990, month: 1, day: 1 };
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

  displayWith(lookup) {
    return lookup ? lookup.ddOptionValue + ' (' + lookup.ddOptionKey + ')' : null;
  }

  getColor(color: { label: string }): string {
    return color.label.toLowerCase();
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
}
