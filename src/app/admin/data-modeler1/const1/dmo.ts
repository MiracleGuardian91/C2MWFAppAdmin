import { DMOType, DMOUI } from "../models1/dmo.model";

// export const DMO_TYPE_LIST: DMOType[] = ['button','selectboxes','colorpicker','countrylist','day','datetime','datetimezone','select',
//     'email','datagrd','hidden','label','list','id','phoneNumber','progressbar','radio','roletype','roletypehidden',
//     'textarea','textfield','file','uploadimage','url','usstatelist','usergroup','createdby','createddate','keyvaluesearchbox',
//     'keyvaluedropdownlist','datetimebox','rangebox','autocompletesearchbox','staticdatebox','multiselect'];

export const DMOS: Record<DMOType, DMOUI> = {
  jsonstaticgrid:{ name: 'JSON Static Grid', type: 'jsonstaticgrid', inputType: 'text', class: 'fa fa-th-list' },
  button: { name: 'Button', type: 'button', inputType: 'button', class: 'fa fa-stop'},
  selectboxes: { name: 'Checkbox List', type: 'selectboxes', inputType: 'checkbox', class: 'fa fa-plus-square', hasData: true, validate: {}, },
  colorpicker: { name: 'Color Code Status', type: 'colorpicker', inputType: 'text', class: 'fas fa-palette', hasData: true, validate: {}, },
  countrylist: { name: 'Country List', type: 'countrylist', inputType: 'text', class: 'fa fa-globe-americas', validate: {}, },
  day: { name: 'Date Edit', type: 'day', inputType: 'date', class: 'fa fa-calendar-alt', validate: {}, },
  datetime: { name: 'Date With Calendar', type: 'datetime', inputType: 'date', class: 'fa fa-calendar-plus', validate: {}, },
  datetimezone: { name: 'Date Time Zone', type: 'datetimezone', inputType: 'date', class: 'fa fa-calendar', hasData: true, validate: {}, },
  select: { name: 'Drop Down List', type: 'select', inputType: 'text', class: 'fa fa-th-list', hasData: true, validate: {}, },
  email: { name: 'Email Edit Box', type: 'email', inputType: 'email', class: 'fa fa-at', validate: {minLength: true, maxLength: true}},
  datagrd: { name: 'Grid View', type: 'datagrd', inputType: 'date', class: 'fa fa-th', hasData: true,  },
  hidden: { name: 'Hidden', type: 'hidden', inputType: 'hidden', class: 'fa fa-user-secret',  },
  label: { name: 'Label', type: 'label', inputType: 'text', class: 'fa fa-tag', },
  list: { name: 'List Box', type: 'list', inputType: 'text', class: 'fa fa-th-list', hasData: true, validate: {}, },
  id: { name: 'ID', type: 'id', inputType: 'text', class: 'fa fa-terminal', hasData: true, validate: {}, },
  phoneNumber: { name: 'Phone Text Box', type: 'phoneNumber', inputType: 'tel', class: 'fa fa-phone-square', validate: {}, },
  progressbar: { name: 'Progress Bar', type: 'progressbar', inputType: 'date', class: 'fas fa-spinner', },
  radio: { name: 'Radio Button List', type: 'radio', inputType: 'radio', class: 'fa-solid fa-circle-dot', hasData: true, validate: {}, },
  roletype: { name: 'Role Type', type: 'roletype', inputType: 'text', class: 'fas fa-user-lock', hasData: true, validate: {}, },
  roletypehidden: { name: 'Role Type Hidden', type: 'roletypehidden', inputType: 'hidden', class: 'fa fa-user-secret', },
  textarea: { name: 'Text Area', type: 'textarea', inputType: 'text', class: 'fa fa-font', hasData: true, validate: { maxLength: true}, },
  textfield: { name: 'Text Box', type: 'textfield', inputType: 'text', class: 'fa fa-terminal', hasData: true, validate: { maxLength: true}, },
  file: { name: 'Upload Document', type: 'file', inputType: 'text', class: 'fa fa-upload', hasData: true, validate: {}, },
  uploadimage: { name: 'Upload Image', type: 'uploadimage', inputType: 'text', class: 'fa fa-file-upload', hasData: true, validate: {}, },
  url: { name: 'Url Text Box', type: 'url', inputType: 'url', class: 'fa fa-link', hasData: true, validate: {minLength: true, maxLength: true}, },
  usstatelist: { name: 'USA States List', type: 'usstatelist', inputType: 'text', class: 'fa fa-globe-americas', validate: {}, },
  usergroup: { name: 'User Group', type: 'usergroup', inputType: 'text', class: 'fa fa-users', validate: {}, },
  createdby: { name: 'Created By', type: 'createdby', inputType: 'text', class: 'fa fa-terminal', },
  createddate: { name: 'Created Date', type: 'createddate', inputType: 'text', class: 'fa fa-terminal', },
  keyvaluesearchbox: { name: 'KeyValue Search Box', type: 'keyvaluesearchbox', inputType: 'text', class: 'fa fa-th-list', hasData: true, validate: {}, },
  keyvaluedropdownlist: { name: 'KeyValue DropdownList', type: 'keyvaluedropdownlist', inputType: 'text', class: 'fa fa-th-list', hasData: true, validate: {}, },
  datetimebox: { name: 'DateTime Box', type: 'datetimebox', inputType: 'text', class: 'fa fa-calendar-alt', validate: {} },
  rangebox: { name: 'RangeBox', type: 'rangebox', inputType: 'text', class: 'fa fa-terminal', hasData: true, validate: {minLength: true, maxLength: true}, },
  autocompletesearchbox: { name: 'AutoComplete Search Box', type: 'autocompletesearchbox', inputType: 'text', class: 'fa fa-th-list', hasData: true, validate: {}, },
  staticdatebox: { name: 'StaticDateBox', type: 'staticdatebox', inputType: 'date', class: 'fa fa-calendar-plus', validate: {}, },
  multiselect: { name: 'MultiSelect DropDownList', type: 'multiselect', inputType: 'text', class: 'fa fa-th-list', hasData: true, validate: {}, },
  manageddropdown:{ name: 'Managed DropDownList', type: 'manageddropdown', inputType: 'text', class: 'fa fa-th-list',  validate: {}, },
  mediagallery : {name: 'Media Gallery', type: 'mediagallery', inputType: 'media', class: 'fa fa-play'},
  notificationflag : { name: 'Notification Flag', type: 'notificationflag', inputType: 'media', class: 'fa fa-bell' ,  validate: {}},

};




export const DMOSLayout= [
 { name: 'Panel', class: 'fa fa-th-list'},

//  { name: 'Column', class: 'fa fa-columns'},
];

export const BorderStyle= [
  //{ name: 'default'},
  { name: 'Solid'},
  { name: 'Dotted'},
  { name: 'Dashed'},
  { name: 'Groove'},
  { name: 'Inset'},
  { name: 'Outset'},
  { name: 'None'},

 ];
