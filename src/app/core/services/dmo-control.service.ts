import { Injectable } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormControl, Validators, ValidatorFn } from '@angular/forms';
import { urlValidator } from '../validators/url.validator';
import { phoneNumberValidator } from '../validators/phone.validator';
import { ApiService } from './api.service';
import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
import { DropdownlistValidator, CheckBoxListValidator } from '../validators';
import { formatDate } from '@angular/common';
import { environment } from '@env/environment';
import { rangeValidator } from '../validators/range.validator';
import { UserDetail } from '../models/user-detail';

@Injectable({
  providedIn: 'root'
})
export class DmoControlService {
  CurrentStage: any;
  CurrentState: any;
  constructor(private api: ApiService, private ngbDateFRParserFormatter: NgbDateFRParserFormatter, private userDetail: UserDetail) { }

  public toAdminViewFormGroup(dmos: any[], fullData: any = {}) {
    const group: any = {};
    const headerData = fullData.ApplicationInfo[0];
    const data = fullData.DataInformation;
    const currentStageName = this.CurrentStage ? this.CurrentStage.DisplayName : '';
    const currentStateName = this.CurrentState ? this.CurrentState.DisplayName : '';
    const loginUser = this.userDetail;

    let createdDateTime;
    let modifiedDateTime;
    if (headerData) {
      createdDateTime = this.getUserDateTime(headerData.CrtdOn, 'MM/dd/yyyy h:mm:ss a', loginUser.TimeZone);
      modifiedDateTime = this.getUserDateTime(headerData.ModfOn, 'MM/dd/yyyy h:mm:ss a', loginUser.TimeZone);
    }
    
    const currentDateWithoutTime = this.getCurrentDateWithoutTime();
    dmos.forEach((dmo: any) => {
      let value = (data[dmo.DMOGuid] !== undefined) ? data[dmo.DMOGuid].DMOVAL : null;
      if (dmo.Type === 'DateWithCalendar' || dmo.Type === 'StaticDateBox') {
        if (value == null || value === '') {
          if (dmo.DefaultValue === 'xxxCurrentDatexxx') {
            value = currentDateWithoutTime.toString();
          }
        }
        value = this.getUserDateTime(value, 'dd/MM/yyyy HH:mm:ss', loginUser.TimeZone,(dmo.Type === 'DateWithCalendar'));
        value = this.ngbDateFRParserFormatter.parse(value);
      } else if (dmo.Type === 'DateEditBox') {
        if (value == null || value === '') {
          if (dmo.DefaultValue === 'xxxCurrentDatexxx') {
            value = currentDateWithoutTime.toString();
          }
        }
        value = this.getUserDateTime(value, environment.Setting.dateTimeFormat, loginUser.TimeZone);
      }else if (dmo.Type === 'CreatedBy') {
        value = headerData.CrtdBy;
      } else if (dmo.Type === 'CreatedDate') {
        value = createdDateTime.toString().substr(0, 10);
      } else if (dmo.Type === 'CreatedDateTime') {
        value = createdDateTime;
      } else if (dmo.Type === 'LastUpdatedBy') {
        value = headerData.Modfby;
      } else if (dmo.Type === 'LastUpdatedDate') {
        value = modifiedDateTime.toString().substr(0, 10);
      } else if (dmo.Type === 'LastUpdatedDateTime') {
        value = modifiedDateTime.toString();
      } else if (dmo.Type === 'CurrentStage') {
        value = currentStageName;
      } else if (dmo.Type === 'CurrentState') {
        value = currentStateName;
      }

      const validators: any = [];
      if (dmo.IsRequired === true) {
        validators.push(Validators.required);
      }

      if (dmo.Type === 'UrlTextBox') {
        validators.push(urlValidator);
      }

      if (dmo.Type === 'PhoneTextBox') {
        validators.push(phoneNumberValidator);
      }

      if (dmo.Type === 'EmailEditBox') {
        validators.push(Validators.email);
      }

      if (dmo.Type === 'CheckBoxList') {
        const arr = dmo.Options.split(',').map(option => {
          if (value && value.split('|').includes(option)) {
            return new UntypedFormControl(true);
          } else {
            return new UntypedFormControl(false);
          }
        });
        group[dmo.Name] = new UntypedFormArray(arr);
      } else if (dmo.Type === 'DateTimeZone') {
        if (value != null && value !== '' && value.trim() !== '') {
          value = this.getUserDateTime(value, 'MM/dd/yyyy h:mm a', loginUser.TimeZone);
          const arr = value.split(' ');
          group[dmo.Name] = new UntypedFormGroup({
            date: new UntypedFormControl(this.ngbDateFRParserFormatter.parse(arr[0]), validators),
            time: new UntypedFormControl(arr[1] + ' ' + arr[2], validators),
            timezone: new UntypedFormControl(arr[3], validators)
          });
        } else {
          group[dmo.Name] = new UntypedFormGroup({
            date: new UntypedFormControl(null, validators),
            time: new UntypedFormControl('12:00 AM', validators),
            timezone: new UntypedFormControl('', validators)
          });
        }
      } else if (dmo.Type === 'DateTimeBox') {
        if (value != null && value !== '' && value.trim() !== '') {
          if (environment.Setting.dateTimeFormat24 == true) {
            value = this.getUserDateTime(value, 'dd/MM/yyyy HH:mm:ss', loginUser.TimeZone);
          }
          else {
            value = this.getUserDateTime(value, 'dd/MM/yyyy h:mm:ss a', loginUser.TimeZone);
          }
          group[dmo.Name] = new UntypedFormControl(value, validators);
        } else {
          group[dmo.Name] = new UntypedFormControl('', validators);
          
        }
      } else if (dmo.Type === 'KeyValueSearchBox' &&
          (dmo.Name === 'DMOCRM_HeaderInf_Saleyard' ||
           dmo.Name === 'DMOCRM_HeaderInf_PrcBrnc' ||
           dmo.Name === 'DMOCRM_HeaderInf_CndBrnc' ||
           dmo.Name === 'DMOCRM_HeaderInf_SaleType' ||
           dmo.Name === 'DMOCRM_HeaderInf_TranType' ||
           dmo.Name === 'DMOLot_BInfo_BuyerBrc')
        ) {
          if (value != null && value!="") {
            const splitted = value.split('~~~');
            group[dmo.Name] = new UntypedFormControl(splitted[1] + ' (' + splitted[0] + ')', validators);
          } else {
            group[dmo.Name] = new UntypedFormControl(null, validators);
          }
      } else if (dmo.Type === 'KeyValueSearchBox') {
        if (!!value) {
          const splitted = value.split('~~~');
          const config: any = {
            ddOptionValue: splitted[1],
            ddOptionKey: splitted[0]
          };
          group[dmo.Name] = new UntypedFormControl(config, validators);;
        } else {
          group[dmo.Name] = new UntypedFormControl(value, validators);
        }
      } else if (dmo.Type === 'KeyValueDropdownList') {
        if (!!value) {
          const splitted = value.split('~~~');
          const config: any = {
            ddOptionKey: splitted[0],
            ddOptionValue: splitted[1],
          };
          group[dmo.Name] = new UntypedFormControl(config, validators);;
        } else {
          group[dmo.Name] = new UntypedFormControl(value, validators);
        }
      } else if (dmo.Type === 'RangeBox') {        
        let Age = null;
        /* Extract values from range dmo */
        if (value != null && value !== '') {
          Age = value;
        } else{
          Age = null;
        }       
        group[dmo.Name] = new UntypedFormControl(Age,  [rangeValidator,Validators.required]);
      } 
      else if (dmo.Type === 'MultiSelectDropDownList') {
        if (value && typeof value === 'string') {
          if (value.startsWith('[') && value.endsWith(']')) {
            value = JSON.parse(value) || [];
            value = value.map(item => ({ label: '', value: item }));
          } else {
            value = value.split(',').map(val => ({ id: val, text: val }));
          }
          group[dmo.Name] = new UntypedFormControl(value, validators);
        } else {
          group[dmo.Name] = new UntypedFormControl([], validators);
        }
      }
      else {
        group[dmo.Name] = new UntypedFormControl(value, validators);
      }
    });

    return new UntypedFormGroup(group);
  }
  public getCureentDateTime(): string {
    const today = new Date();

    return ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/'
      + ('000' + today.getFullYear()).slice(-4) + ' ' + ('0' + today.getHours()).slice(-2) + ':'
      + ('0' + today.getMinutes()).slice(-2) + ':' + ('0' + today.getSeconds()).slice(-2);
  }

  public getCurrentDateWithoutTime(): string {
    const today = new Date();

    return ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/'
      + ('000' + today.getFullYear()).slice(-4);
  }
  getUserDateTime(value, format, zone,isConvertInLocal?: boolean) {
    try {
      // default undefined or true then convert to local date time.
      if(isConvertInLocal === undefined || isConvertInLocal === true) {
        const d = new Date(value); // val is in UTC
        const localOffset = zone * 60000;
        const localTime = d.getTime() - localOffset;
        d.setTime(localTime);
        return formatDate(d, format, 'en-US');
      } else {
        const d = new Date(value);
        return formatDate(d, format, 'en-US');
      }
      
    } catch (error) {

      return '';
    }
  }
  public toFormViewGroup(dmos: any[]) {
    const loginUser = this.userDetail;
    const userDisplayDetail = loginUser.FirstName + ' ' + loginUser.LastName + ' (' + loginUser.UserName + ')';

    const currentDate = this.getCureentDateTime();
    const currentDateWithoutTime = this.getCurrentDateWithoutTime();
    const group: any = {};
    const currentStageName = this.CurrentStage ? this.CurrentStage.DisplayName : '';
    const currentStateName = this.CurrentState ? this.CurrentState.DisplayName : '';
    dmos.forEach((dmo: any) => {
      let value = dmo.DefaultValue || null;

      if (dmo.Type === 'DateTimeZone') {
        value = dmo.Options.split(',')[0];
      } else if (dmo.Type === 'DropDownList') {
        if (dmo.DataSource === 'json' && dmo.Options !== '') {
          value = JSON.parse(dmo.Options)[0].ValueField;
        } else if (dmo.DataSource === 'value' && dmo.Options !== '') {
          value = dmo.Options.split(',')[0];
        }
        if (value === '' || value == null) {
          value = '';//Prevent to save text(Select...) if no value selected
        }
      } else if (dmo.Type === 'CreatedBy') {
        value = userDisplayDetail;
      } else if (dmo.Type === 'CreatedDate') {
        value = currentDate.toString().substr(0, 10);
      } else if (dmo.Type === 'CreatedDateTime') {
        value = currentDate.toString();
      } else if (dmo.Type === 'LastUpdatedBy') {
        value = userDisplayDetail;
      } else if (dmo.Type === 'LastUpdatedDate') {
        value = currentDate.toString().substr(0, 10);
      } else if (dmo.Type === 'LastUpdatedDateTime') {
        value = currentDate.toString();
      } else if (dmo.Type === 'CurrentStage') {
        value = currentStageName;
      } else if (dmo.Type === 'CurrentState') {
        value = currentStateName;
      } else if (dmo.Type === 'DateWithCalendar' || dmo.Type === 'StaticDateBox' ) {
        if (value === 'xxxCurrentDatexxx') {
          value = currentDateWithoutTime.toString();
        }
        value = this.ngbDateFRParserFormatter.parse(value);
      }

      const validators: any = [];
      if (dmo.IsRequired === true) {
        validators.push(Validators.required);
      }

      if (dmo.Type === 'UrlTextBox') {
        validators.push(urlValidator);
      }

      if (dmo.Type === 'PhoneTextBox') {
        validators.push(phoneNumberValidator);
      }

      if (dmo.Type === 'EmailEditBox') {
        validators.push(Validators.email);
      }
      if (dmo.Type === 'DropDownList' && dmo.IsRequired === true) {
       // validators.push(DropdownlistValidator);
       validators.push(Validators.required);
      }
      if (dmo.Name == null || dmo.Name === '') {
        dmo.Name = dmo.GUID;
      }

      if (dmo.Type === 'DateTimeBox') {
        validators.push(Validators.required);
      }

      if (dmo.Type === 'CheckBoxList') {
        const arr = dmo.Options.split(',').map(option => new UntypedFormControl(false));
        if (dmo.IsRequired) {
          group[dmo.Name] = new UntypedFormArray(arr, this.minSelectedCheckboxes(1, group[dmo.Name]));
        } else {
          group[dmo.Name] = new UntypedFormArray(arr);
        }

      } else if (dmo.Type === 'DateTimeZone') {
        group[dmo.Name] = new UntypedFormGroup({
          date: new UntypedFormControl(null, validators),
          time: new UntypedFormControl('12:00 AM', validators),
          timezone: new UntypedFormControl('', validators)
        });
      } else {
        group[dmo.Name] = new UntypedFormControl(value, validators);
      }

    });

    return new UntypedFormGroup(group);
  }
  minSelectedCheckboxes(min = 1,formArray: UntypedFormArray) {
    const validator: ValidatorFn = (formArray: UntypedFormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
  
    return validator;
  }

  public sanitizeFormValue(dmos: any[], formValue: any = {}, opts: SanitizeOpts = {deleteNullValues: true}) {    
    const loginUser = this.userDetail;
    let formValueArray = [];
    if(formValue != undefined && formValue != null) {
      formValueArray = Object.keys(formValue);
    }
    
    dmos.forEach(dmo => {
      const value = formValue[dmo.Name];
      if(formValueArray.findIndex(x=> x == dmo.Name) > -1){
      
      if (dmo.RegularExpression !== undefined && dmo.RegularExpression.Type === 'Dollar') {
        if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf('$') >= 0) {
          formValue[dmo.Name] = ((formValue[dmo.Name]).replace('$', "")).trim();
        }
      }
      if (dmo.RegularExpression !== undefined && dmo.RegularExpression.Type === 'Percent') {
        if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf('%') >= 0) {
          formValue[dmo.Name] = ((formValue[dmo.Name]).replace('%', "")).trim();
        }
      }
      if (dmo.Type === 'CheckBoxList') {
        if (formValue[dmo.Name] != undefined) {
          if (typeof formValue[dmo.Name] !== 'string') {
            const options = [];
            formValue[dmo.Name].forEach((val, i) => {
              if (val) {
                options.push(dmo.Options.split(',')[i]);
              }
            });
            if (options.length === 0) {
              formValue[dmo.Name] = '';
            } else if (options.length === 1) {
              formValue[dmo.Name] = options[0];
            } else {
              for (let i = 0; i < options.length; i++) {
                i === 0 ? formValue[dmo.Name] = options[i] : formValue[dmo.Name] += '|' + options[i];
              }
            }
          }
        }
        else {
          formValue[dmo.Name] = null;
        }
      }

      if (dmo.Type === 'DateTimeZone') {
        if (formValue[dmo.Name] !== undefined) {
          const { date, time, timezone } = formValue[dmo.Name];
          if (date != null && date !== '') {
            formValue[dmo.Name] = this.getUserDateTime(this.ngbDateFRParserFormatter.format(date) + ' ' + time + ' ' + timezone, 'MM/dd/yyyy h:mm:ss a', loginUser.TimeZone * -1);

          } else {
            formValue[dmo.Name] = null;
          }
        } else {
          // formValue[dmo.Name] = null;

          // #767 - 1108 - EXT Treatments date fields - unable to remove date
          if (formValue[dmo.Name] === null) {
            formValue[dmo.Name] = '';
          }
          else {
            formValue[dmo.Name] = null;
          }
        }
      }

      if (dmo.Type === 'DateWithCalendar' || dmo.Type === 'StaticDateBox') {      
        if (formValue[dmo.Name] != null &&
          formValue[dmo.Name] !== '' &&
          formValue[dmo.Name].hasOwnProperty('year') &&
          formValue[dmo.Name].hasOwnProperty('month') &&
          formValue[dmo.Name].hasOwnProperty('day')) {
          let time: Date = new Date();
          const { year, month, day } = formValue[dmo.Name];
          /* This dmo's value must exactly be in US format to work, as it relies on Date constructor*/
          if(dmo.Type === 'StaticDateBox'){
            formValue[dmo.Name] = `${month}/${day}/${year}`;         
           formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], environment.Setting.dateTimeFormat1, loginUser.TimeZone * -1,false);
          }
          
          if (dmo.Type === 'DateWithCalendar') {
            formValue[dmo.Name] = `${month}/${day}/${year}` + ' ' + formatDate(time, 'HH:mm:ss', 'en-US');
            formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], 'MM/dd/yyyy HH:mm:ss', loginUser.TimeZone * -1);
          }
        } else {
          // formValue[dmo.Name] = null;

          // #767 - 1108 - EXT Treatments date fields - unable to remove date
          if (formValue[dmo.Name] === null) {
            formValue[dmo.Name] = '';
          }
          else {
            if(formValue[dmo.Name] !== '')
            formValue[dmo.Name] = null;
          }
        }
      }

      if (dmo.Type === 'DateTimeBox') {
        if (value) {
          const format = environment.Setting.dateTimeFormat24 ? 'MM/dd/yyyy HH:mm:ss' : 'MM/dd/yyyy h:mm:ss a';
          formValue[dmo.Name] = this.getUserDateTime(value.format('MM/DD/yyyy'), format, loginUser.TimeZone * -1);
        } else {
          formValue[dmo.Name] = '';
        }
      }

      if (dmo.Type === 'KeyValueSearchBox') {
        if (formValue[dmo.Name] != null &&
          formValue[dmo.Name] !== '' &&
          formValue[dmo.Name].ddOptionKey != null &&
          formValue[dmo.Name].ddOptionKey !== '' &&
          formValue[dmo.Name].ddOptionValue != null &&
          formValue[dmo.Name].ddOptionValue !== '') {

          formValue[dmo.Name] = formValue[dmo.Name].ddOptionValue + ' (' + formValue[dmo.Name].ddOptionKey + ')';
        } else {
          formValue[dmo.Name] = '';
        }
      }
      if (dmo.Type === 'KeyValueDropdownList') {
        const value = formValue[dmo.Name];
        if (value && value?.ddOptionKey && value?.ddOptionValue) {
          formValue[dmo.Name] = value.ddOptionKey + '~~~' + value.ddOptionValue;
        } else {
          formValue[dmo.Name] = '';
        }
      }

      if (dmo.Type === 'MultiSelectDropDownList') {
        if (value) {
          const sanitized = (value as Array<any>)
            .map(rec => rec.value || rec)
            .filter(rec => rec.id && rec.text)
          formValue[dmo.Name] = JSON.stringify(sanitized);
        }
      }

      if (dmo.Type === 'RangeBox') {            
        if (formValue[dmo.Name] === undefined || formValue[dmo.Name] === null) {
          formValue[dmo.Name] = null;
        } 
        else {
        formValue[dmo.Name] = formValue[dmo.Name] ;
         }
      }
    }
    });

    Object.keys(formValue).forEach(key => {
      if (typeof formValue[key] === 'string') {
        formValue[key] = formValue[key].trim();
      }
      if (formValue[key] == null && opts.deleteNullValues) {
        delete formValue[key];
      }
    });
    return formValue;
  }
  // for Uniqueness 
  public sanitizeFormValueForValidateUniqueness(dmos: any[], formValue: any = {}) {
    const loginUser = this.userDetail;
    dmos.forEach(dmo => {
      const value = formValue[dmo.Name];
      if (dmo.RegularExpression !== undefined && dmo.RegularExpression.Type === 'Dollar') {
        if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf('$') >= 0) {
          formValue[dmo.Name] = ((formValue[dmo.Name]).replace('$', "")).trim();
        }
      }
      if (dmo.RegularExpression !== undefined && dmo.RegularExpression.Type === 'Percent') {
        if (formValue[dmo.Name] != null && formValue[dmo.Name].indexOf('%') >= 0) {
          formValue[dmo.Name] = ((formValue[dmo.Name]).replace('%', "")).trim();
        }
      }
      if (dmo.Type === 'CheckBoxList') {
        if (formValue[dmo.Name] != undefined) {
          if (typeof formValue[dmo.Name] !== 'string') {
          const options = [];
          formValue[dmo.Name].forEach((val, i) => {
            if (val) {
              options.push(dmo.Options.split(',')[i]);
            }
          });
          if (options.length === 0) {
            formValue[dmo.Name] = '';
          } else if (options.length === 1) {
            formValue[dmo.Name] = options[0];
          } else {
            for (let i = 0; i < options.length; i++) {
              i === 0 ? formValue[dmo.Name] = options[i] : formValue[dmo.Name] += '|' + options[i];
            }
          }
        }
        }
        else {
          formValue[dmo.Name] = null;
        }
      }

      if (dmo.Type === 'DateTimeZone') {
        if (formValue[dmo.Name] !== undefined) {
          const { date, time, timezone } = formValue[dmo.Name];
          if (date != null && date !== '') {
            formValue[dmo.Name] = this.getUserDateTime(this.ngbDateFRParserFormatter.format(date) + ' ' + time + ' ' + timezone, 'MM/dd/yyyy h:mm:ss a', loginUser.TimeZone * -1);

          } else {
            formValue[dmo.Name] = null;
          }
        } else {
          formValue[dmo.Name] = null;
        }
      }

      if (dmo.Type === 'DateWithCalendar' || dmo.Type === 'StaticDateBox') {
        if (formValue[dmo.Name] != null &&
          formValue[dmo.Name] !== '' &&
          formValue[dmo.Name].hasOwnProperty('year') &&
          formValue[dmo.Name].hasOwnProperty('month') &&
          formValue[dmo.Name].hasOwnProperty('day')) {
          let time: Date = new Date();
          const { year, month, day } = formValue[dmo.Name];
          /* This dmo's value must exactly be in US format to work, as it relies on Date constructor*/
          if(dmo.Type === 'StaticDateBox') {
            formValue[dmo.Name] = `${month}/${day}/${year}`;
            formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], environment.Setting.dateTimeFormat1, loginUser.TimeZone * -1,false); //For MD Ticket- #465 (Date format should be dd/mm/yyyy)
          }
          if (dmo.Type === 'DateWithCalendar') {
            formValue[dmo.Name] = `${month}/${day}/${year}` + ' ' + formatDate(time, 'HH:mm:ss', 'en-US');
            formValue[dmo.Name] = this.getUserDateTime(formValue[dmo.Name], 'MM/dd/yyyy HH:mm:ss', loginUser.TimeZone * -1);
          }
        } else {
          formValue[dmo.Name] = null;
        }
      }

      if (dmo.Type === 'DateTimeBox') {
        if (value) {
          const format = environment.Setting.dateTimeFormat24 ? 'MM/dd/yyyy HH:mm:ss' : 'MM/dd/yyyy h:mm:ss a';
          formValue[dmo.Name] = this.getUserDateTime(value.format('MM/DD/yyyy'), format, loginUser.TimeZone * -1);
        } else {
          formValue[dmo.Name] = '';
        }
      }

      if (dmo.Type === 'KeyValueSearchBox') {
        if (formValue[dmo.Name] != null &&
          formValue[dmo.Name] !== '' &&
          formValue[dmo.Name].ddOptionKey != null &&
          formValue[dmo.Name].ddOptionKey !== '') {
          formValue[dmo.Name] = formValue[dmo.Name].ddOptionKey;
        } else {
          formValue[dmo.Name] = null;
        }
      }

      if (dmo.Type === 'RangeBox') {        
        if (!!formValue[dmo.Name]) {
           const group = formValue[dmo.Name];
           if( formValue[dmo.Name] === undefined ||  formValue[dmo.Name] === null){          
            formValue[dmo.Name] = null;
           }else
          formValue[dmo.Name] = formValue[dmo.Name];
        }
      }

    });

    Object.keys(formValue).forEach(key => {
      if (formValue[key] == null) {
        delete formValue[key];
      }
    });
    return formValue;
  }

  getDirtyValues(form: any) {
    const dirtyValues = {};

    Object.keys(form.controls)
      .forEach(key => {
        const currentControl = form.controls[key];
        if (currentControl.dirty) {
          // if (currentControl.controls) {
          //   dirtyValues[key] = this.getDirtyValues(currentControl);
          // } else if (currentControl.value !== null) {
          dirtyValues[key] = currentControl.value;
          // }
        }
      });

    return dirtyValues;
  }

  GetCountry() {
    return this.api.get('modeler/getcountry');
  }

  GetState() {
    return this.api.get('modeler/getstate');
  }

  GetDDLOption(
    dataSrc: string,
    processName: string,
    transactionId: string,
    identifierName: string,
    parentvalue: string,
    timeZone: string,
    userId: string,
    language: string,
    selecedValue: string
  ) {
    const Src = 'modeler/data/' + dataSrc + '?processName=' + processName + '&transactionId=' + transactionId + '&identifierName=' + identifierName + '&parentvalue=' + parentvalue + '&timeZone=' + timeZone + '&userId=' + userId + '&language=' + language + '&selecedValue=' + selecedValue;
    return this.api.get(Src);
  }

  async GetAdvanceSearchOption(urlPost: string, config: any) {
    return await this.api.postAdvanceSearch(urlPost, config);
  }

  GetPlasmaId(dmoName: string) {
    return this.api.get('application/plasmaId' + '/' + dmoName);
  }
  UploadFile(url: string, formData: FormData) {
    return this.api.UploadFile(url, formData);
  }
  DeleteFile(url: string, formData: FormData) {
    return this.api.DeleteFile(url, formData);
  }
  downloadfile(url: string, formData: FormData) {
    return this.api.postGetFile(url, formData, 'blob');
  }
}

interface SanitizeOpts {
  inGridForm?: boolean;
  deleteNullValues?: boolean;
}