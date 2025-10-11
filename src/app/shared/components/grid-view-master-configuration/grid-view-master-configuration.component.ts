import { Component, OnInit } from '@angular/core';
import { ListviewService, MessageService } from '@app/core';
import { ColumnFilterService } from '../../../core/services/column-filter.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { NgbActiveModal, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from '../message/message.component';
// import { GridViewComponent } from '../grid-view/grid-view.component';
import { environment } from '@env/environment';
import { formatDate, NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { UserDetail } from '@app/core/models/user-detail';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchColumnPipe } from '../../pipe/search-column.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-grid-view-master-configuration',
    templateUrl: './grid-view-master-configuration.component.html',
    styleUrls: ['./grid-view-master-configuration.component.scss'],
    standalone: true,
    imports: [NgClass, ReactiveFormsModule, FormsModule, NgFor, NgIf, CdkDropList, CdkDrag, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, TitleCasePipe, SearchColumnPipe]
})
export class GridViewMasterConfigurationComponent implements OnInit {
  
  constructor(
    private msg: MessageService,
    private listviewService: ListviewService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private columnFilter: ColumnFilterService,
    private toastr: ToastrService,
    private userDetail: UserDetail) { }

  ColumnType = '';
  lstSortOrder = [{ Text: 'Asc', Value: 'asc' }, { Text: 'Desc', Value: 'desc' }];
  columnName: string;
  columnName1: string;
  ColumnList: any = [];
  ColumnListForDDL: any = [];
  StateList: any = [];
  StageList: any = [];
  DMOColumnList: any = [];

  OldViewName: string;
  fopratr: any;
  filterlength: number;
  columnListdata = [];

  GridColumnList = [];
  GridColumnFilterList = [];
  StateFilterList = [];
  StageFilterList = [];

  GridColumns: any = {};
  GridColumnFilters: any = {};
  GridStateFilter: any = {};
  GridStageFilter: any = {};
  Toggle = {};
  conditionkey;
  stageState = 'Stage';
  comparisonField = true;

  TimeZone: string;
  fConditionOperator = [
    { value: 'And' },
    { value: 'Or' }
  ];
  ProcessName: string;
  gridguid = 'MCompContainer';
  ErrorMessage: any = '';
  showCustomeBar = false;
  iscustomerEdit = false;
  isDuplicate = false;
  customFilter: any = {
    OldFilterName: '', FilterName: '', ColumnName: '', DataType: '', DisplayName: '', Condition: '', ConditionValue: '', LogicalOperator: '',
    Conditions: []
  };
  comparisionFilter = [];
  filterOperator: '';
  public formVal = true;
  public formValue = true;

  public flag = false;

  dmoGuid: any = {
    guid: '',
    DisplyName: '',
    Name: '',
    type: ''
  };
  /*------------------- GRID JSON -------------------*/
  gridConfigJson = {
    ViewName: '',
    IsDefaultView: false,
    IdentityField: 'TRNSCTNID',
    Columns: {},
    ColumnList: '',
    SortColumn: '',
    SortColumnCaption: 'Select...',
    SortDirection: '',
    SortDirectionCaption: 'Select...',
    PageSize: 10,
    DMOFilters: [],
    StateFilters: [],
    StageFilters: [],
    CustomFilters: {},
    DetailViewMode: 'ShowInPopUp',
    OldViewName: ''

  };

  AllAddButton = false;
  filterRecord = [];
  /*------------------- Get Grid Data -------------------*/
  gridListData;
  disableIsDefaultView: boolean = false;

  ngOnInit() {
    this.getdmodata();
    // this.columnFilter.GetFilterByDataType();
    this.TimeZone = this.userDetail.TimeZone.toString();

  }
  filterColumnName(event) {
    if (event) {
      this.ColumnType = event.Type;
    } else {
      this.ColumnType = '';
    }
  }

  /*------------------- Hide Comparision Value -------------------*/
  // conditionKeys(event) {
  //   this.conditionkey = event;
  //   if (event.value === 'Not Null' || event.value === 'Null') {
  //     this.comparisonField = false;
  //   } else {
  //     this.comparisonField = true;
  //   }
  // }  

  /*------------------- Get DMO Data -------------------*/
  getdmodata() {
    var CanvasType = 'AdminView';
    this.listviewService.dmoListOrderByDMO(this.ProcessName, CanvasType)
      .subscribe(
        data => {
          this.ColumnList = data;         

          this.DMOColumnList = this.ColumnList.filter(column => column.Type !== 'DateWithCalendar' && column.Type !== 'CRTDON' && column.Type !== 'MODFON'
            && column.Type !== 'DateEditBox' && column.Type !== 'DateTimeBox' && column.Type !== 'StaticDateBox');

          this.ColumnList.filter(item => item.DataModelObjectGroup).forEach(x => {
            this.ColumnListForDDL.push({
              'TextField': x.DisplayName,
              'ValueField': x,
              DMOG: x.DataModelObjectGroup.Name
            })
          });
          
          this.getGridConfigData();

        }
      );
  }
  OnDestroy() {
  }

  /*------------------- Add Filter Conditions -------------------*/
  onSubmit(val, userForm) {
    if (val) {
      const currCondition = {
        ColumnName: this.customFilter.ColumnName.GUID,
        DataType: this.customFilter.ColumnName.Type,
        ConditionValue: this.customFilter.ConditionValue,
        ColumnDisplayName: this.customFilter.ColumnName.DisplayName,
        ConditionVal: this.conditionkey.value,
        Condition: this.conditionkey.key,
      };
      this.customFilter.Conditions.push(currCondition);
      const filtrName = this.customFilter.FilterName;
      userForm.resetForm();
      userForm.form.controls.filterName.setValue(filtrName);
    }

  }
  

  /*------------------- Add Grid Columns -------------------*/
  AddGridColumn(column) {
    if (this.GridColumns[column.GUID] === undefined) {
      this.GridColumns[column.GUID] = '1';
      this.GridColumnList.push(column);
      
    }
  }

  /*------------------- Add All Grid Columns -------------------*/
  AddALLGridColumn() {
    for (const objColumn of this.ColumnList) {
      if (this.GridColumns[objColumn.GUID] === undefined) {
        this.GridColumns[objColumn.GUID] = '1';
        this.GridColumnList.push(objColumn);
        this.AllAddButton = true;
      }
    }

  }

  /*------------------- Remove Grid Columns -------------------*/
  DeleteGridColumn(column: any) {
    const txt = this.GridColumnList.indexOf(column);
    if (txt > -1) {
      this.GridColumnList.splice(txt, 1);
    }
    delete this.GridColumns[column.GUID];
  }

  /*------------------- Remove All Grid Columns -------------------*/
  DeleteAllGridColumn(column: any) {
    this.GridColumnList = [];
    this.GridColumns = {};
  }

  /*------------------- Add DMO Filter -------------------*/
  AddColumnFilter(column) {
    if (this.GridColumnFilters[column.GUID] === undefined) {
      this.GridColumnFilters[column.GUID] = '1';
      this.GridColumnFilterList.push(column);
      
    }
  }
  /*------------------- Delete DMO Filter -------------------*/
  DeleteColumnFilter(column) {
    const txt = this.GridColumnFilterList.indexOf(column);
    if (txt > -1) {
      this.GridColumnFilterList.splice(txt, 1);
    }
    delete this.GridColumnFilters[column.GUID];
  }
  /*------------------- Add All DMO Filter -------------------*/
  AddALLColumnFilter() {
    for (const objColumn of this.ColumnList) {
      if (this.GridColumnFilters[objColumn.GUID] === undefined) {
        this.GridColumnFilters[objColumn.GUID] = '1';
        this.GridColumnFilterList.push(objColumn);
      }
    }
  }
  /*------------------- Delete All DMO Filter -------------------*/
  DeleteAllColumnFilter(column: any) {
    this.GridColumnFilterList = [];
    this.GridColumnFilters = {};
  }

  /*------------------- Add All DMO Filter -------------------*/
  AddALLDMOColumnFilter() {
    for (const objColumn of this.DMOColumnList) {
      if (this.GridColumnFilters[objColumn.GUID] === undefined) {
        this.GridColumnFilters[objColumn.GUID] = '1';
        this.GridColumnFilterList.push(objColumn);
      }
    }
  }
 

  /*------------------- Set Default View -------------------*/
  setIsDefaultView() {
    this.gridConfigJson.IsDefaultView = !this.gridConfigJson.IsDefaultView;   
    this.gridConfigJson.ViewName='View 1'; 
  }


  /*------------------- Save Grid Data -------------------*/ 
  setGridConfigData() {
    const selectedCols = [];
    this.GridColumnList.filter((prop) => {
      const gridCol = { DisplayName: prop.DisplayName, Name: prop.NAME, Type: prop.Type, DataType: prop.DataType };
      this.gridConfigJson.Columns[prop.GUID] = gridCol;
      selectedCols.push(prop.GUID);
    });
     this.gridConfigJson.DMOFilters = [];
     this.gridConfigJson.StateFilters = [];
     this.gridConfigJson.StageFilters = [];
    
    this.gridConfigJson.ColumnList = selectedCols.join(',');

    if (this.gridConfigJson.ViewName === '')
        this.gridConfigJson.ViewName = 'View 1';

    const GridFinalJson = {
      ProcessName: this.ProcessName,
      ContainerID: this.gridguid,
      FinalJson: JSON.stringify(this.gridConfigJson),
      ViewName: this.gridConfigJson.ViewName,
      IsDefaultView: this.gridConfigJson.IsDefaultView,
      OldViewName: this.gridConfigJson.OldViewName
    };
    if (this.GridColumnList.length >= 1 && this.gridConfigJson.ViewName !== '') {
      this.listviewService.sendMasterGridConfig(GridFinalJson)
        .subscribe(
          data => {
            
            if (data === true) {
              this.toastr.success( 'Grid configuration saved successfully');
              // this.showErrorMessage('Grid configuration saved successfully.', 'Success', this.CallBackMethod, true, true, false);
              //this.activeModal.close(true);
              //this.getGridConfigData();
            }
          }
        );
    } else {
      if (this.gridConfigJson.ViewName == '') {
        this.msg.showMessage('Warning', { body: 'View name required' });
        // this.showErrorMessage('View name required', 'Warning !', null, false, true, false);
      } else {
        this.msg.showMessage('Warning', { body: 'Columns required' });
        // this.showErrorMessage('Columns required', 'Warning !', null, false, true, false);
      }

    }
  }
  getGridConfigData() {
    this.gridConfigJson.OldViewName = this.gridConfigJson.ViewName;
    const getGridOptions = {
      ProcessName: this.ProcessName,
      GridGuid: this.gridguid,
      ViewName: this.gridConfigJson.ViewName
    };
    this.listviewService.GridConfigMaster(getGridOptions)
      .subscribe(
        data => {
          if (data && data.length > 0) {            
            this.disableIsDefaultView = data[0].IsDefaultview;
            this.gridListData = JSON.parse(data[0].Config);
            if (this.gridListData.StageFilters != undefined && this.gridListData.StageFilters.length == 0 && this.gridListData.StateFilters.length != 0) {
              this.stageState = 'State';
            } else if (this.gridListData.StateFilters.length == 0 && this.gridListData.StageFilters.length != 0) {
              this.stageState = 'Stage';
            } else {
              this.stageState = 'Stage';
            }

            this.OldViewName='View 1';  // Set for Master Config

            if (this.OldViewName !== '') {
              this.setEditViewData(data);
            }
          }
        }
      );
  }

  /*------------------- Get Binding -------------------*/
  setEditViewData(data: any) {
    this.gridConfigJson.SortColumnCaption = JSON.parse(data[0].Config).SortColumnCaption;
    this.gridConfigJson.SortDirectionCaption = JSON.parse(data[0].Config).SortDirectionCaption;
    this.gridConfigJson.SortColumn = JSON.parse(data[0].Config).SortColumn;
    this.gridConfigJson.SortDirection = JSON.parse(data[0].Config).SortDirection;
    this.gridConfigJson.IsDefaultView = data[0].IsDefaultview;
    this.gridConfigJson.StateFilters = this.StateFilterList;
    this.gridConfigJson.StageFilters = this.StageFilterList;
    this.gridConfigJson.PageSize = JSON.parse(data[0].Config).PageSize;
    let _configData = JSON.parse(data[0].Config);

    _configData.ColumnList.split(',').forEach(columnKey => {
      _configData.Columns[columnKey]['GUID'] = columnKey;
      if (this.ColumnList.filter(d => d.GUID === columnKey).length > 0) {
        this.GridColumnList.push(this.ColumnList.filter(d => d.GUID === columnKey)[0]);
      }
      else {
        this.GridColumnList.push(JSON.parse(JSON.stringify(_configData.Columns[columnKey])));
      }
      this.GridColumns[columnKey] = '1';
      this.gridConfigJson.DMOFilters.push(columnKey);
    });

    _configData.DMOFilters.forEach(DmoFilterKey => {
      this.GridColumnFilters[DmoFilterKey.GUID] = '1';
      if (this.ColumnList.filter(d => d.GUID === DmoFilterKey.GUID).length > 0) {
        this.GridColumnFilterList.push(this.ColumnList.filter(d => d.GUID === DmoFilterKey.GUID)[0]);
      }
      else {
        this.GridColumnFilterList.push(DmoFilterKey);
      }
    });
  
  }

  /*------------------- Set Sort Column Value -------------------*/
  setSortColumn(objColumn) {
    if (objColumn) {
      this.gridConfigJson.SortColumn = objColumn.GUID;
      this.gridConfigJson.SortColumnCaption = objColumn.DisplayName;
    } else {
      this.gridConfigJson.SortColumnCaption = 'Select...';
    }

  }

  /*------------------- Set Sort Order Value -------------------*/
  setSortOrder(objOption: any) {
    if (objOption) {
      this.gridConfigJson.SortDirection = objOption['Value'];
      this.gridConfigJson.SortDirectionCaption = objOption['Text'];
    } else {
      this.gridConfigJson.SortDirectionCaption = 'Select...';
    }
  }

  setFilterColumnName(objOption: string) {
    this.customFilter.ColumnName = objOption['DisplayName'];
  }
  // Toggle Grid & Filters
  clickEvent(SectionKey) {
    if (this.Toggle[SectionKey] === undefined) {
      this.Toggle[SectionKey] = false;
    } else {

      this.Toggle[SectionKey] = !this.Toggle[SectionKey];
    }
  }
  // Toggle Grid & Filters
  getToggle(SectionKey) {
    if (this.Toggle[SectionKey] === undefined) {
      this.Toggle[SectionKey] = false;

    }
    return this.Toggle[SectionKey];
  }

  /*------------------- Drag & Drop -------------------*/
  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }
  dropState(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.StateFilterList, event.previousIndex, event.currentIndex);
  }
 
  IsEmptyObject(obj: any) {
    return Object.keys(obj).length > 0 ? false : true;

  }
  
}