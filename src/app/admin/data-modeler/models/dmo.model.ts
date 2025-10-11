import { Validate } from ".";

export type DMOType = 
|'button'
|'selectboxes'
|'colorpicker'
|'countrylist'
|'day'
|'datetime'
|'datetimezone'
|'select'
|'email'
|'datagrd'
|'hidden'
|'label'
|'list'
|'id'
|'phoneNumber'
|'progressbar'
|'radio'
|'roletype'
|'roletypehidden'
|'textarea'
|'textfield'
|'file'
|'uploadimage'
|'url'
|'usstatelist'
|'usergroup'
|'createdby'
|'createddate'
|'keyvaluesearchbox'
|'keyvaluedropdownlist'
|'datetimebox'
|'rangebox'
|'autocompletesearchbox'
|'staticdatebox'
|'multiselect'
|'manageddropdown'
|'jsonstaticgrid'
|'mediagallery'
|'notificationflag'

export type DMOUI = {
  type: DMOType,
  inputType: InputType,
  name: string;
  class: string;
  placeholder?: string;
  hasData?: boolean;
  validate?: Partial<Record<keyof Validate, boolean>>;
}

type InputType = 
|"button" 
|"checkbox" 
|"color" 
|"date" 
|"datetime-local" 
|"email" 
|"file" 
|"hidden" 
|"image" 
|"month" 
|"number" 
|"password" 
|"radio" 
|"range" 
|"reset" 
|"search" 
|"submit" 
|"tel" 
|"text" 
|"time" 
|"url" 
|"week"
|"media"