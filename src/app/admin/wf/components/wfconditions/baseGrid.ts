import { OnInit, ElementRef, Directive } from '@angular/core';
import { Condition, FilterType, GridFilter, IGridData, IGridFilter } from '@app/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { formatDate } from '@angular/common';
import { environment } from '@env/environment';
import { unionBy } from 'lodash';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
//import { BaseGrid } from '@app/shared';

@Directive()
export abstract class BaseGrid implements OnInit, IGridData {
    public recordsCountLoading = false;
    public recordsCount = -1;
    private readonly dateTimeTypes: ReadonlyArray<string> = ['DateEditBox', 'DateWithCalendar', 'CreatedDate', 'LastUpdatedDate', 'StaticDateBox', 'CreatedDateTime', 'LastUpdatedDateTime', 'DateTimeZone', 'CRTDON', 'MODFON','DateTimeBox'];
    private readonly specialConditions: ReadonlyArray<Condition> = ['NULL', 'NOT_NULL'];
    SelectedRecordIds: Array<string> = [];
    ProcessName: string;
    GridGuid: string;
    ViewName: string;
    PageSize: string;
    TimeZone: string;
    ShowSelectAll: any;
    PageCount: any;
    SortColumn = '-1';
    SortOrder = '-1';
    PageNumber: string;
    ColumnList: string;
    LstGridFilter: IGridFilter[];
    showActionCol = false;
    gridConfigData: any;
    columns: any = [];
    dataAdapter: any;
    filters: any = {};
    _bodyData: any = {};
    hideFooter = false;
    FilterCondition: {};
    showItemLoading = false;
    selectedAll = false;
    selectedAll$ = new BehaviorSubject<boolean>(false);
    keyColumn = 'TRNSCTNID';
    gridConfig = {};
    TableInfo: any = {
        PageNumber: -1,
        PageSize: -1,
        Recordes: -1,
        PageCount: -1
    };
    sortColumnName = '-1';
    isDefaultView = false;
    activeStateFilter = [];
    StateFilter: any[];
    StageFilter: any[];
    selectedDmoFilter = { All: 'All' };
    selectedCustomFilter = 'Custom Filter(s)';
    selectedAllMyRecordFilter = 'All Record';
    colSpan = 0;
    viewList = [];
    public DMOField: any[] = [];
    public DMOData: any = {};
    public CustomFilter = {};
    transactionId: string;
    public ColumnData: any = {};
    public ColumnDataSource: any = {};
    submitted = false;
    model: any = {};
    // Column dragable
    pageX: any;
    curCol: any;
    nxtCol: any;
    curColWidth: any;
    nxtColWidth: any;
    HasGlobalSearch = true;
    IsSubProcess = false;
    ParentTransactionId: string;
    HideDeleteActionIcon = false;
    HideDisplayName = false;
    ShowBulkUpdateButton = false;
    ChildCustomfilters: any = {};
    ParentDmoValue: string;
    ChildDmoGuid: {};
    readonly dateFormat = environment.Setting.dateFormat;
    readonly dateTimeFormat = environment.Setting.dateTimeFormat;
    readonly dateTimeFormat2 = environment.Setting.dateTimeFormat2;
    calender = ['DateEditBox', 'DateWithCalendar', 'StaticDateBox'];
    readonly systemDateTime = ['CRTDON', 'MODFON']
    currencyDmos = [
       
    ];
    percentDmos = [
       
    ];
    colorCode = ['ColorCodeStatus'];
    textBox = ['TextBox', 'UrlTextBox', 'PhoneTextBox', 'EmailEditBox'];
    dropDown = ['DropDownList', 'CountryList', 'USAStateList'];
    dropDownWithCheckbox = ['CheckBoxList', 'RadioButtonList', 'MultiSelectDropDownList', 'ListBox'];
    roleType = ['RoleType'];
    newRow: any = {};
    dmoMapping: any = {};
    CanAddNewRow = false;
    TriggerName = '';
    // canInlineEdit = false;
    UrlProcessName: string;
    // Metrics for Lot summary data grid
    metricsData = {};
    IsViewAllow = false;
    IsActivityLogAllow: false
    IsBulkTriggerAllow = false;
    IsBulkUpdateAllow = false;
    IsBulkUploadAllow = false;
    IsChangeLogAllow = false;
    IsCopyAllow = false;
    IsDeletionAllow = false;
    IsExcelAllow = false;
    IsNewEntryAllow = false;
    IsInLnEditAllow = false;
    IsNotesAllow = false;
    IsNotificationAllow = false;
    IsPDFAllow = false;
    // for link column
    DmoColumnName: string;
    IsOtherAPICall = false;
    tableDataOther: any = [];
    datemodel;
    isFinilised = false;
    elRef: ElementRef;
    IsDrillDown = false;
    IsBulkRevertAllow=false;
    IsAssociateProgramAllowed=false;
    IsAssignMarkupAllowed=false;
    IsBulkAssociateProducts=false;
    IsBulkAssociateProgram=false;
    IsUpdateProductPriceAllowed=false;

    
    constructor(elRef: ElementRef,) {
        this.elRef = elRef;

    
    }
    protected currentResponse = null;
    tableData: any = [];
    cachedData: any = [];

    arrayOne(n: number = 0): any[] {
        if (n > 0) {
            return Array(n);
        }
        return [];
    }

    dropdownList = [];
    selectedItems = [];
    // dropdownSettings: IDropdownSettings = {
    //     singleSelection: false,
    //     // selectAllText: 'Select All',
    //     // unSelectAllText: 'UnSelect All',
    //     itemsShowLimit: 3,
    //     allowSearchFilter: true,
    //     enableCheckAll: false,
    // };

    editForm: FormGroup;
    dmos: any;
    IsResizing: boolean = false;

    filterForms: any = {};

    ngOnInit() {
        this.callOnInit();
        
        this._bodyData = {
            ProcessName: this.ProcessName,
            PageSize: this.PageSize,
            PageNumber: +this.PageNumber,
            SortColumn: this.SortColumn,
            SortOrder: this.SortOrder,
            TimeZone: this.TimeZone,
            ColumnList: this.ColumnList,
            GridFilters: this.LstGridFilter
        };
        if (this.IsSubProcess) {
            this._bodyData.ParentTransactionId = decodeURIComponent(this.ParentTransactionId);
        }
        if (this.ProcessName === '' || this.ProcessName === 'commissionadjustment') {
            this.openLinkFromUrl();
        } else {
            this.getGridConfigData();
        }
        const el = this.elRef.nativeElement.querySelector('#tableHeadRow');

        window.addEventListener('mouseup', (event: any) => { this.mouseUp(event); });
        el.addEventListener('mousemove', (event: any) => { this.mouseMove(event); });
        el.addEventListener('mousedown', (event: any) => { this.mouseDown(event); });
    }


    public setPagination(data: any) {
        this.TableInfo.PageSize = this._bodyData.PageSize;
        this.TableInfo.Recordes = this.recordsCount > -1 ? this.recordsCount : +data.RecordsCount;
        this.TableInfo.PageNumber = parseInt(data.PageNumber, 10) + 1;
        this.TableInfo.PageCount = Math.ceil(parseInt(this.TableInfo.Recordes, 10) / parseInt(this._bodyData.PageSize, 10));
        this.TableInfo.Start = ((parseInt(data.PageNumber, 10) <= 0 ? 0 : (parseInt(data.PageNumber, 10))) * this._bodyData.PageSize) + 1;
        this.TableInfo.End = ((this.TableInfo.PageNumber) * this._bodyData.PageSize) > this.TableInfo.Recordes 
            ? this.TableInfo.Recordes 
            : ((this.TableInfo.PageNumber) * this._bodyData.PageSize);
    }

    onPageChange(action) {
        if (action === 'prev') {
            this._bodyData.PageNumber = (+this._bodyData.PageNumber - 1) > -1 ? (+this._bodyData.PageNumber - 1) :
                this.TableInfo.PageCount - 1;
        } else if (action === 'next') {
            this._bodyData.PageNumber = (+this._bodyData.PageNumber + 1) < this.TableInfo.PageCount ?
                (+this._bodyData.PageNumber + 1) : 0;
        }
        this.getGridData();

    }
    sortDefault() {
        this.onSort(this.SortColumn, this.SortOrder);
    }
    sortColumn(columnName: string) {
        let sortOrder = 'asc';
        if (this._bodyData.SortColumn === columnName && this._bodyData.SortOrder === 'asc') {
            sortOrder = 'desc';
        }
        this.onSort(columnName, sortOrder);
    }
    isEmptyObject(obj: any): boolean {
        return Object.keys(obj).length > 0 ? false : true;
    }
    onSort(columnName, order) {
        const htmlObj = this.elRef.nativeElement.querySelector('.grid-filter-wrap .show');
        if (htmlObj) { htmlObj.classList.toggle('show'); }
        if (columnName && order) {
            this._bodyData.SortColumn = columnName;
            this.sortColumnName = this.gridConfigData.Columns[columnName].DisplayName;
            this._bodyData.SortOrder = order;
        } else {
            this._bodyData.SortColumn = this.SortColumn;
            this._bodyData.SortOrder = this.SortOrder;
        }
        this.getGridData();
        sessionStorage.setItem(this.ProcessName + 'gridsort', JSON.stringify({
            column: this._bodyData.SortColumn,
            displayName: this.sortColumnName,
            order: this._bodyData.SortOrder
        }));
    }

    onFilter(form, columnName, filterType, value, dataType = undefined) { 
        this.submitted = true;
        let filter: any = {};
        this._bodyData.PageNumber = 0;
        if (filterType === 'Global_Search') {
            if (form.globalSearch.value === '') {
                delete this.filters[filterType + '~$~' + columnName];
            } else {
                filter = {
                    GridConditions: [{
                        Condition: 'CONTAINS',
                        ConditionValue: form.globalSearch.value
                    }
                    ],
                    DataField: columnName,
                    LogicalOperator: 'Or',
                    FilterType: filterType
                };
            }
            // columnName = filterType;
        } else if (filterType === 'DMO_Filter') {
            if(dataType === 'MultiSelectDropDownList'){
                filter = {
                    DataField: `${columnName}_val`,
                    LogicalOperator: 'Or',
                    FilterType: 'DMO_Filter',
                    //DataType: dataType,
                    GridConditions: [
                        {Condition: 'CONTAINS', ConditionValue: value}
                    ]
                }
            } 
            else if(dataType === 'KeyValueSearchBox'){
                filter = {
                    GridConditions: [{
                        Condition: 'CONTAINS',
                        ConditionValue: value.indexOf('(') > -1 ? value.split('(')[0].replace(')', '').trim() : value
                    }
                    ],
                    DataField: columnName+'_val',
                    LogicalOperator: 'Or',
                    FilterType: 'DMO_Filter',
                    DataType: 'KeyValueSearchBox'
                },
                this.selectedDmoFilter[columnName] = value;
            } 
            else {
                if (value === 'All') {
                    delete this.filters[filterType + '~$~' + columnName.GUID];
                    this.selectedDmoFilter = { All: 'All' };
                } else {
                    filter = {
                        GridConditions: [{
                            Condition: 'CONTAINS',
                            ConditionValue: value
                        }
                        ],
                        DataField: columnName,
                        LogicalOperator: 'Or',
                        FilterType: 'DMO_Filter'
                    };
                    this.selectedDmoFilter[columnName] = value;
                }
            }
        } else if (filterType === 'State_Filter') {
            if (columnName === 'All') {
                for (const item of form) {
                    delete this.filters[filterType + '~$~' + item];
                }
                this.activeStateFilter = [];
            } else if (this.activeStateFilter.indexOf(columnName) > -1) {
                this.activeStateFilter.splice(this.activeStateFilter.indexOf(columnName), 1);
                delete this.filters[filterType + '~$~' + columnName];
            } else {
                filter = {
                    GridConditions: [{
                        Condition: 'EQUAL',
                        ConditionValue: columnName
                    }
                    ],
                    DataField: columnName,
                    LogicalOperator: 'Or',
                    FilterType: 'State_Filter'
                };
                this.activeStateFilter.push(columnName);
            }
        } else if (filterType === 'Stage_Filter') {
            if (columnName === 'All') {
                for (const item of form) {
                    if (filterType === 'Stage_Filter') {
                        delete this.filters[filterType + '~$~' + item.GUID];
                    } else {
                        delete this.filters[filterType + '~$~' + item];
                    }
                }
                this.activeStateFilter = [];
            // } else if (this.activeStateFilter.length === this.StageFilter.length) {
            //     for (const item of form) {
            //         delete this.filters[filterType + '~$~' + item];
            //     }
            } else if (this.activeStateFilter.indexOf(columnName.DisplayName) > -1) {
                this.activeStateFilter.splice(this.activeStateFilter.indexOf(columnName.DisplayName), 1);
                const conditions = this.filters[filterType + '~$~' + columnName.GUID].GridConditions;
                this.filters[filterType + '~$~' + columnName.GUID].GridConditions = conditions.filter(c => c.ConditionValue !== columnName.DisplayName);
                if (this.filters[filterType + '~$~' + columnName.GUID].GridConditions.length === 0) {
                    delete this.filters[filterType + '~$~' + columnName.GUID];
                }
            } else {
                filter = {
                    GridConditions: [{
                        Condition: 'EQUAL',
                        ConditionValue: columnName.DisplayName,
                    }
                    ],
                    DataField: columnName.GUID,
                    LogicalOperator: 'Or',
                    FilterType: 'Stage_Filter'
                };
                this.activeStateFilter.push(columnName.DisplayName);
            }
        } else if (filterType === 'Custom_Filter') {
            if (value === 'Custom Filter(s)') {
                delete this.filters[filterType + '~$~' + columnName];
            } else {
                filter = {
                    GridConditions: [{
                        ConditionValue: value
                    }
                    ],
                    DataField: value,
                    LogicalOperator: 'Or',
                    FilterType: 'Custom_Filter'
                };
            }
            this.selectedCustomFilter = value;
        } else if (filterType === 'Column_Filter') {
            if (!this.validate(form, columnName)) {
                return;
            }


            value = {};
            value.submitted = true;
            this.elRef.nativeElement.querySelector('.grid-filter-wrap .show').classList.toggle('show');            
            if (dataType === 'CheckBoxList' || dataType === 'RadioButtonList' || dataType === 'DropDownList' || dataType === 'ColorCodeStatus') {
                filter = {
                    GridConditions: [
                    ],
                    DataField: columnName,
                    FilterType: 'Column_Filter'
                };
            } else if (dataType === 'MultiSelectDropDownList') {
                filter = {
                    GridConditions: [
                    ],
                    DataField: `${columnName}_val`,
                    LogicalOperator: 'Or',
                    FilterType: 'Column_Filter',
                    DataType: dataType
                };                
            } else {
                filter = {
                    GridConditions: [
                    ],
                    DataField: columnName,
                    LogicalOperator: form.logicalOpt.value,
                    FilterType: 'Column_Filter'
                };
            }
            const allInput = form.getElementsByTagName('input');
            let hasCheck: boolean = false;

            for (const input of allInput) {
                if (input.type === 'checkbox' && input.checked === true) {
                    if(input.value === 'EMPTY'){
                        filter.GridConditions.push({
                            Condition: 'NULL',
                            ConditionValue: 'NULL'
                        });
                        filter.GridConditions.push({
                            Condition: 'EMPTY',
                            ConditionValue: 'EMPTY'
                        });
                    }else if(input.value === 'NOT_EMPTY'){
                        filter.GridConditions.push({
                            Condition: 'NOT_NULL',
                            ConditionValue: 'NOT_NULL'
                        });
                        filter.GridConditions.push({
                            Condition: 'NOT_EMPTY',
                            ConditionValue: 'NOT_EMPTY'
                        });
                    }
                    else{
                        filter.GridConditions.push({
                            Condition: 'CONTAINS',
                            ConditionValue: input.value
                        });
                    }
                    hasCheck = true;                  
                }
            }

            if (!hasCheck) {
                if (form.filterListValue && form.filterListValue.value !== '') {
                    filter.GridConditions.push({
                        Condition: 'CONTAINS',
                        ConditionValue: form.filterListValue.value
                    });
                }
            }
        } else if (filterType === 'All_Filter') {
            if (value === 'MyRecord') {
                filter = {
                    GridConditions: [{
                        ConditionValue: 'My Record'
                    }
                    ],
                    FilterType: value
                };
                this.selectedAllMyRecordFilter = 'My Record';
            } else {
                this.selectedAllMyRecordFilter = 'All Record';
                delete this.filters[filterType + '~$~' + columnName];
            }

        } else if (filterType === 'CustomListFilter') {
            if (this.selectedItems.length > 0) {
                filter = {
                    DataField: columnName,
                    FilterType: 'Column_Filter',
                    LogicalOperator: 'Or',
                    GridConditions: [],
                };
                this.selectedItems.forEach(item => {
                    filter.GridConditions.push({Condition: 'CONTAINS', ConditionValue: item.text})
                });
            } else {
                this.onFilterClear(columnName, filterType);
            }
        }

        const [cond1, val1]: [Condition, string] = [form?.ConditionOpt1?.value, form?.filterValue1?.value];
        const [cond2, val2]: [Condition, string] = [form?.ConditionOpt2?.value, form?.filterValue2?.value];
        const conditions1 = this.handleFilterConditions(cond1, val1, filterType, dataType);
        const conditions2 = this.handleFilterConditions(cond2, val2, filterType, dataType);
        filter?.GridConditions?.push(...conditions1, ...conditions2);
        if (filterType === 'Column_Filter' && dataType === 'KeyValueSearchBox') {
            const specialConditions: Condition[] = ['NULL', 'NOT_NULL'];
            if (specialConditions.some(cond => [cond1, cond2].includes(cond))) {
                filter.LogicalOperator = 'And';
            }
        }

        if (filter && Object.keys(filter).length !== 0) {
            if (filterType === 'Stage_Filter') {
                // if (filter.GridConditions.find(c => c.ConditionValue === 'Open')) {
                //     filter.GridConditions.push({Condition: 'Contains', ConditionValue: 'New'});
                // }
                if (this.filters[filterType + '~$~' + columnName.GUID]) {
                    this.filters[filterType + '~$~' + columnName.GUID].GridConditions.push(...filter.GridConditions)
                } else {
                    this.filters[filterType + '~$~' + columnName.GUID] = filter;
                }
            } else if (filterType === 'DMO_Filter') {
                if (dataType === 'MultiSelectDropDownList') {
                    this.filters[`${filterType}~$~${columnName}_val`] = filter;
                } else {
                    this.filters[filterType + '~$~' + columnName] = filter;
                }
            } else if (filterType === 'Column_Filter' && dataType === 'KeyValueSearchBox') {
                // const keyGuid = columnName + '_KEY';
                // const keyFilter = {...filter};
                // keyFilter.DataField = keyGuid;
                const valGuid = columnName + '_VAL';
                const valFilter = {...filter};
                valFilter.DataField = valGuid;
                this.filters[`${filterType}~$~${columnName}`] = filter;
                // this.filters[`${filterType}~$~${keyGuid}`] = keyFilter;
                this.filters[`${filterType}~$~${valGuid}`] = valFilter;
            } else {
                if (filter.GridConditions.length > 0)
                    this.filters[filterType + '~$~' + columnName] = filter;
            }
        }
        this.getGridData({recordsCountLoading: true});
        sessionStorage.setItem(sessionStorage.getItem('processName') + 'gridFlters', JSON.stringify(this.filters));
    }

    private handleFilterConditions(cond: Condition, val: string, filterType: FilterType, dataType: string) {
        const gridConditions = [];
        if (this.specialConditions.includes(cond)) {
            const emptyCondition = cond === 'NULL' ? 'EMPTY' : 'NOT_EMPTY';
            if (filterType === 'Column_Filter' && dataType === 'KeyValueSearchBox') {
                gridConditions.push(this.generateCondition(emptyCondition, emptyCondition, dataType));
            } else {
                gridConditions.push(this.generateCondition(cond, cond, dataType));
                if (dataType && this.dateTimeTypes.indexOf(dataType) == -1) {
                    gridConditions.push(this.generateCondition(emptyCondition, emptyCondition, dataType));
                }
            }
        } else {
            if (val) {
                if (dataType && this.dateTimeTypes.indexOf(dataType) > -1) {
                    const format = this.dateTimeTypes.includes(dataType) ? 'MM/dd/yyyy HH:mm:ss' : 'MM/dd/yyyy HH:mm:ss';
                    val = this.convertToSystemDataAndTime(val, format, 0, cond, this.ProcessName !== 'NAG_Margin');
                }
                gridConditions.push(this.generateCondition(cond, val, dataType));

            }
        }
        return gridConditions;
    }

    private generateCondition(condition: Condition, val: string, dataType: string) {
        return {
            Condition: condition,
            ConditionValue: val,
            dataType: dataType,
            RowValue: val,
        }
    }

    public showSelectedFilter(dmoGuid: string) {
        return !dmoGuid.endsWith('_KEY') && !dmoGuid.endsWith('_VAL');
    }


    FilterList(itemValue): string {
        const item = itemValue.GridConditions;
        let dataType = item.map(e => e.dataType).join(',');
        let displayText: string = '';
        
        if (dataType && (['Global_Search', 'CreatedDateTime', 'LastUpdatedDateTime', 'DateTimeZone', 'CRTDON', 'MODFON', 'DateTimeBox', 'DateEditBox', 'DateWithCalendar', 'CreatedDate', 'LastUpdatedDate', 'StaticDateBox'].indexOf(dataType) > -1)){
          const conditions = item.map(e => e.RowValue).join(',');
    
          if (conditions === 'NOT_NULL') {
            displayText = 'Not Null';
          } else if(conditions === 'NULL') {
            displayText = 'Null';
          } else {
            displayText = conditions;
          }
        } else {
          const conditions = item.map(e => e.ConditionValue).join(',');
    
          if (conditions === 'NOT_NULL,NOT_EMPTY') {        
            displayText = 'Not Empty';
          } else if (conditions === 'NULL,EMPTY') {
            displayText = 'Empty';
          } else {
            const x = item.map(e => e.ConditionValue);
            x.forEach((el,idx) => {
              if (el === 'NULL' || el === 'EMPTY') {
                x[idx] = 'Empty';
              } else if (el === 'NOT_NULL' || el === 'NOT_EMPTY') {
                x[idx] = 'Not Empty';
              }          
            });
    
            displayText = [...new Set(x)].join(',');
            //displayText = conditions;
          }
        }
    
        return displayText;
      }
    public selectedDmoFilterValue(item: any) {
        let guid = item.GUID;
        if (item.Type === 'MultiSelectDropDownList') {
            guid =`${item.GUID}_val`;
        }
        return !this.selectedDmoFilter[guid] ? item.DisplayName : this.selectedDmoFilter[guid];
    }

    public validate(form, guid: string): boolean {
        const colForm = this.filterForms[guid];
        const [cond1, val1, checklist]: [Condition, string, any] = [colForm.ConditionOpt1, colForm.filterValue1, form?.checklist];
        return !!val1 || this.specialConditions.includes(cond1) || !!checklist;
    }

    onFilterClear(columnName, filterType, item = undefined, dataType?: string) {
        const recordsCountLoading = filterType !== 'sort';
       
        this._bodyData.PageNumber = 0;
        if (filterType === 'sort') {
            this._bodyData.SortColumn = '-1';
            sessionStorage.removeItem(this.ProcessName + 'gridsort');
        }
        if (filterType === 'Global_Search') {
            this.filters={};
            if(this._bodyData.GridFilters)
            this._bodyData.GridFilters[0].GridConditions[0].ConditionValue="";
            const globalSearch = this.elRef.nativeElement.querySelector('#globalSearch');
            globalSearch.value = '';
            delete this.filters[filterType + '~$~' + columnName];
            delete this.filters[filterType + '~$~' + columnName + '_VAL'];
        } else if (filterType === 'DMO_Filter') {
            if (item && item.value['DataType'] === 'KeyValueSearchBox') {
                delete this.filters[filterType + '~$~' + columnName.replace('_val', '')];
            } else {
                delete this.filters[filterType + '~$~' + columnName];
            }
            this.selectedDmoFilter = { All: 'All' };
        } else if (filterType === 'State_Filter') {
            if (columnName === 'All') {
                this.activeStateFilter = [];
            } else if (this.activeStateFilter.indexOf(columnName) > -1) {
                this.activeStateFilter.splice(this.activeStateFilter.indexOf(columnName), 1);
                delete this.filters[filterType + '~$~' + columnName];
            }
        } else if (filterType === 'Stage_Filter') {
            const foundFilter = this.StageFilter.find(filter => filter.DisplayName === columnName);
            if (columnName === 'All') {
                this.activeStateFilter = [];
            } else if (foundFilter) {
                this.activeStateFilter.splice(this.activeStateFilter.indexOf(foundFilter.DisplayName), 1);
                delete this.filters[filterType + '~$~' + foundFilter.GUID];
            }
        } else if (filterType === 'Custom_Filter') {
            delete this.filters[filterType + '~$~Custom Filter(s)'];
            this.selectedCustomFilter = 'Custom Filter(s)';
        } else if (filterType === 'Column_Filter') {
          dataType = item?.value?.DataType || item?.value?.GridConditions[0]?.dataType || dataType;
          let guid = columnName;
          if (dataType === 'KeyValueSearchBox') {
            guid = columnName.split('-')[0];
          } else if (dataType === 'MultiSelectDropDownList') {
            guid = columnName.split('_')[0];
          }
          this.ColumnData[guid] && this.removeColumnDataFilters(guid);
          this.resetFilterForm(dataType, guid);
            const query = this.elRef.nativeElement.querySelector('.grid-filter-wrap .show');
            if (query) {
                query.classList.toggle('show');
            }
            const form = this.elRef.nativeElement.querySelector('#frm_' + columnName);
            if(form && form.logicalOpt!=undefined){
                if (form.logicalOpt.type === 'hidden') {
                    const allInput = form.getElementsByTagName('input');
                    for (let i = 0; i < allInput.length; i++) {
                        if (allInput[i].type === 'checkbox' && allInput[i].checked === true) {
                            allInput[i].checked = false;
                        }
                    }
                } else {
                    this.submitted = true;
                    
                }
            }
            delete this.filters[filterType + '~$~' + columnName];
            // delete this.filters[filterType + '~$~' + columnName + '_KEY'];
            delete this.filters[filterType + '~$~' + columnName + '_VAL'];
            if (item && item.value['DataType'] === 'MultiSelectDropDownList') {
                delete this.filters[filterType + '~$~' + columnName.replace('_val', '')];
            }

            if (columnName === 'naginavdtdtr') {
                if (this.filters[`CustomListFilter~$~naginavdtdtr`]) {
                    delete this.filters[`CustomListFilter~$~naginavdtdtr`];
                    this.selectedItems = [];
                }
            }

            if (columnName === 'nagpravdeptid') {
                if (this.filters && item && item.key) {
                    delete this.filters[item.key];
                    this.selectedItems = [];
                }
            }
        } else if (filterType === 'MyRecord') {
            delete this.filters['All_Filter~$~'];
        }
        delete this.filters[filterType + '~$~' + columnName];
    //    sessionStorage.setItem(sessionStorage.getItem('processName').toString() + 'gridFlters', JSON.stringify(this.filters));
        this._bodyData.PageNumber = 0;
        if (this.ColumnDataSource[columnName]) this.ColumnData[columnName] = this.ColumnDataSource[columnName].filter(() => true);
        this.getGridData({recordsCountLoading});
    }
    goToPage(pageNumberControl) {
        if (pageNumberControl.value <= this.TableInfo.PageCount) {
            this._bodyData.PageNumber = pageNumberControl.value - 1;
            this.getGridData();
        }
    }
    changePageSize(pageSizeControl) {
        this._bodyData.PageNumber = 0;
        this._bodyData.PageSize = pageSizeControl;
        this.getGridData();
    }

    checkIfAllSelected(event, item) {
        item.selected = event.currentTarget.checked;
        const recordID = item[this.keyColumn].toString();
        if (item.selected) {
            this.SelectedRecordIds.push(recordID);
            // this.selectedAll = this.tableData.every(chkItem => {
            //     return chkItem.selected === true;
            // });
        } else {
            // this.selectedAll = false;
            const ItemIndex = this.SelectedRecordIds.indexOf(recordID);
            this.SelectedRecordIds.splice(ItemIndex, 1);
        }
        this.selectedAll = this.SelectedRecordIds.length === this.TableInfo.Recordes;
        this.selectedAll$.next(this.selectedAll)
        // this.gridView.updateSelectedIds(this.SelectedRecordIds);
    }

    async SelectAllCheckBox(that) {
        const checked = that.currentTarget.checked;
        this.selectedAll$.next(checked);
        if (checked) {
            const ids = this.tableData.map(record => record[this.keyColumn]);
            const allIds = Array.from(new Set(this.SelectedRecordIds.concat(ids)))
            this.updateSelectedIds(allIds);
        } else {
            this.updateSelectedIds();
        }
    }

    public updateSelectedIds(ids: string[] = []) {
        this.SelectedRecordIds = ids;
        // this.gridView.updateSelectedIds(this.SelectedRecordIds);
        this.selectedAll = ids.length > 0;
        this.toggleAllVisibleRecords(this.selectedAll);
      }


    public columnFilterApplied(item: any) {
        //const guid = item.dataType === 'MultiSelectDropDownList' ? `${item.datafield}_val` : item.datafield;
        return !!(this.filters[`Column_Filter~$~${item.datafield}`] || this.filters[`Column_Filter~$~${item.datafield}_val`]);
    }

    BindData(data) {
        this.currentResponse = data;
        this.tableData = data.Data;
        if (!this.selectedAll) {
            this.cachedData = unionBy(this.cachedData, this.tableData, this.keyColumn);
            // this.gridView.updateCachedTable(this.cachedData);
        }
        this.tableData.forEach((item: any) => {
            if (this.SelectedRecordIds.includes(item[this.keyColumn].toString())) {
                item.selected = true;
            }
        });
        if (this.selectedAll) {
            this.toggleAllVisibleRecords(true);
        }
        this.setPagination(data);
        this.setTooltips(this.elRef.nativeElement.querySelector('#gridView'));
        this.hideFooter = true;
        sessionStorage.setItem('gridPage', JSON.stringify({ pageSize: this._bodyData.PageSize, pageNumber: this.TableInfo.PageNumber }));
    }
    drop(event: CdkDragDrop<string[]>) {
        if (event.previousIndex !== event.currentIndex) {
            const columnList = this.gridConfigData.ColumnList.split(',');
            moveItemInArray(columnList, event.previousIndex, event.currentIndex);
            this.gridConfigData.ColumnList = columnList.join(',');
            this.setConfigData(this.gridConfigData);
            this.saveGridConfig();
        }
    }

    public toggleAllVisibleRecords(check: boolean) {
        this.selectedAll = check;
        this.tableData.forEach(record => record.selected = check);
    }

    // Column Resize
    // @HostListener('#ProcessName:mousemove', ['$event'])
    mouseMove(e) {
        if (this.IsResizing && e.buttons == 1) {
            if (this.curCol) {
                const diffX = e.pageX - this.pageX;
    
                if (this.nxtCol) {
                    this.nxtCol.style.width = (this.nxtColWidth - (diffX)) + 'px';
                }
                this.curCol.style.width = (this.curColWidth + diffX) + 'px';
            }    
        }
    }
    mouseDown(e) {
        if (e.currentTarget.classList.contains('fa-grip-lines-vertical')) {
            this.IsResizing = true;
            this.curCol = e.target.parentElement.parentElement;
            this.nxtCol = this.curCol.nextElementSibling;
            this.pageX = e.pageX;
            this.curColWidth = this.curCol.offsetWidth;
            if (this.nxtCol) {
                this.nxtColWidth = this.nxtCol.offsetWidth;
            }
        }
    }

    mouseUp(_: MouseEvent) {
        if (this.IsResizing) {
            let flg = false;

            this.IsResizing = false;
            this.setTooltips(document.activeElement);
            const colElements = document.querySelectorAll('th.ColResize');
            const totalWidth = document.querySelector('table#gridView').clientWidth;
            colElements.forEach(el => {
                if (el.id && el.id in this.gridConfigData.Columns) {
                    const width = `${el['offsetWidth'] * 100 / totalWidth}%`;
                    if (this.gridConfigData.Columns[el.id].Width && width !== this.gridConfigData.Columns[el.id].Width) {
                        flg = true;
                    }
                    if (el.id in this.gridConfigData.Columns) this.gridConfigData.Columns[el.id].Width = width;
                }
            });
            if (flg && this.ProcessName === this.UrlProcessName) {
               this.saveGridConfig();
            }
            this.curCol = undefined;
            this.nxtCol = undefined;
            this.pageX = undefined;
            this.nxtColWidth = undefined;
            this.curColWidth = undefined;    
        }
    }

    setTooltips(event) {
        setTimeout(() => {
            const arr = event.querySelectorAll('.content-text');
            arr.forEach(elem => {
                if (elem.offsetWidth < elem.scrollWidth) {
                    elem.setAttribute('title', elem.textContent);
                } else {
                    elem.removeAttribute('title');
                }
            });
        }, 500);
    }

    /* Since adding this type of filters is done by directly manipulating the dom in onFilter
        I'm doing here the same to remove them.
        NOTE: This solution is fragile and will break as soon as someone changes id on the forms
        NOTE: This is a UI fix. It does not affect actual filters sent through the api.
    */
    private removeColumnDataFilters(guid: string) {
        const form = document.getElementById(`frm_${guid}`);
        const checkboxes = form?.querySelectorAll('input[type="checkbox"]');
        checkboxes?.forEach((input: HTMLInputElement) => input.checked = false);
    }

    ClearFilters() {
        this.columns.forEach(col =>this.resetFilterForm(col.dataType, col.datafield));
      // Iterate only over column filter forms user interacted with
       Object.keys(this.ColumnData).forEach(guid => this.removeColumnDataFilters(guid));
        this.selectedItems = [];
        this.sortColumnName = this._bodyData.SortColumn = this.SortColumn;
        this._bodyData.SortOrder = this.SortOrder;

        const globalSearch = this.elRef.nativeElement.querySelector('#globalSearch');
        if (globalSearch) {
            globalSearch.value = '';
        }       
        this.filters = {};
      //this.selectedDmoFilter.All = 'All';
       this.selectedDmoFilter = { All: 'All' };     
        this.activeStateFilter = [];
        this.selectedCustomFilter = 'All';
        this.selectedAllMyRecordFilter = 'All Record';
      
        this._bodyData.PageNumber = 0;
        this._bodyData.GridFilters=undefined;
     
       
        this.getGridData({recordsCountLoading: true});
    }
       getDateForCalender(value) {
        const d = value ? new Date(value) : new Date();
        return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
       }

    convertToSystemDataAndTime(value, format, zone, ConditionOption, toUTC: boolean = true) {
        if (value == null || value === '') {
          return null;
        }
        try 
        {
            let modifiedDateValue;
            let dateArray = value.split("/");
            if (environment.Setting.dateFormat === "dd/MM/yyyy") {
              modifiedDateValue = dateArray[1].toString() + '/' + dateArray[0].toString() + '/' + dateArray[2].toString();
            } else {
               modifiedDateValue = dateArray[0].toString() + '/' + dateArray[1].toString() + '/' + dateArray[2].toString();
            }
            let timeZone;
            if (!zone) {
              timeZone = this.TimeZone;
            } else {
              timeZone = zone;
            }
            const d = new Date(modifiedDateValue);
            const localOffset = timeZone * 60000;         

            if(['GREATER_THAN', 'LESS_THAN_OR_EQUAL'].indexOf(ConditionOption) > -1){
                d.setHours(23,59,59,999);
            }
            else{
                d.setHours(0,0,0,0);
            }             
            
            //covert to UTC fotmate
            let localTime: number;
            if (toUTC) {
                localTime = d.getTime()+ localOffset;                
            } else {
                if (this.ProcessName === 'NAG_Margin') {
                    d.setSeconds(d.getSeconds() + 1);
                }
                localTime = d.getTime();
            }
            d.setTime(localTime);
            return formatDate(d, format, 'en-US');      
        } 
        catch (error) {
          console.log('Datevalue-' + value + 'error' + error);
          return '';
        }
    }
    
    convertToLocalDataAndTime(value, format, zone) {
        if (value == null || value === '') {
            return null;
        }
        try {
            const d = new Date(value); // val is in UTC
            let timeZone;
            if (!zone) {
                timeZone = this.TimeZone;
            } else {
                timeZone = zone;
            }
            const localOffset = timeZone * -60000;
            const localTime = d.getTime();// - localOffset;
            d.setTime(localTime);
            return formatDate(d, format, 'en-US');
        } catch (error) {
            // console.log('Datevalue-' + value + 'error' + error);
            return '';
        }
    }

    abstract setConfigData(gridConfig: any): void;
    abstract getGridData(opts?: GridDataOptions): void;
    abstract BindDMODropDown(dmoGuid): void;
    abstract getGridConfigData(gridviewName?): void;
    abstract getDMOsMapping(): void;
    abstract saveGridConfig(): void;
    abstract openLinkFromUrl(): void;
    
    callOnInit(): void {};

    hideBulkUpdateButton() {
        if (this.SelectedRecordIds.length === 0) {
            return true;
        } else {
            if (this.ShowBulkUpdateButton) {
                return false;
            } else {
                return !this.IsBulkUpdateAllow;
            }
        }
    }

    mask(rawValue) {
        if (rawValue && rawValue.replace(/\D+/g, '').length > 10) {
            return ['+', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        } else {
            return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
    }

    getDropDownData(dmoGuid, isKeyValuePair = false) {
        this.BindDMODropDown(dmoGuid);
        if (isKeyValuePair) {
            for (const key in this.DMOData[dmoGuid]) {
                if (this.DMOData[dmoGuid].hasOwnProperty(key) && typeof (this.DMOData[dmoGuid][key].DataValue) !== 'object') {
                    const DataValue = {
                        key: '',
                        value: ''
                    };
                    const element = this.DMOData[dmoGuid][key].DataValue;
                    const splitObj = element.split('~');
                    DataValue.key = splitObj[0];
                    DataValue.value = splitObj[1];
                    delete this.DMOData[dmoGuid][key].DataValue;
                    this.DMOData[dmoGuid][key].DataValue = (DataValue);
                }
            }
        }
    }

    CheckedSelected(savedValue, newValue) {
        let val = '';
        if (savedValue.indexOf('!') > 0) {
            val = savedValue.split('!');
        } else {
            val = savedValue.split('|');
        }
        return val.indexOf(newValue) > -1;
    }

    // Check contract id exists or not
    isExists(item) {
        if (item.ContractId) {
            return true;
        } else {
            return false;
        }
    }

    protected resetFilterForm(type: string, guid: string) {
        const isDate = this.dateTimeTypes.includes(type);
        if (!this.filterForms[guid]) {
            this.filterForms[guid] = {};
        }
        const form = this.filterForms[guid];
        form.filterValue1 =  null;
        form.filterValue2 =  null;
        form.ConditionOpt1 =  isDate ? 'GREATER_THAN' : 'CONTAINS';
        form.ConditionOpt2 =  isDate ? 'GREATER_THAN' : 'CONTAINS';
        form.logicalOpt =  'OR';
    }
}

export interface GridDataOptions {
    recordsCountLoading: boolean,
}
