import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { DataModelerApiService } from '../../../services1/data-modeler-api.service1';
import { MessageService } from '@app/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceProviderService } from '../../../services1/service-provider.service';
import { DMOG } from '../../../classes';
import { DMOS } from '../../../const1';
import { ApiService } from '@app/admin/core/services/api.service';
import { environment } from '@env/environment';
import { ContainerStyle, DMOType, IDMComponent, PanelMainContainer, PanelMainRow } from '../../../models1';
import { ContextMenuPosition } from '../../contextMenu/contextMenu.datatypes';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShareDmoComponent } from '../../share-dmo/share-dmo.component';
import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SideNavModel } from '@app/admin/data-modeler1/models1';
import { ContextMenuComponent } from '../../contextMenu/contextMenu.component';
import { ResizeColumnsDirective } from '@app/admin/data-modeler1/directives/resize-columns.directive';
import { firstValueFrom, Subject, take, takeUntil } from 'rxjs';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';
import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { ResizeColumnsDirective as ResizeColumnsDirective_1 } from '../../../directives/resize-columns.directive';
import { DmoComponent } from '../../dmo/dmo.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { DmoFormControlsComponent } from '../../dmo-form-controls/dmo-form-controls.component';
@Component({
    selector: 'app-dmog-container',
    templateUrl: './dmog-container.component.html',
    styleUrls: ['./dmog-container.component.scss'],
    standalone: true,
    imports: [NgClass, NgStyle, CdkDragHandle, NgIf, NgFor, ResizeColumnsDirective_1, DmoComponent, NgbTooltip, MatMenuTrigger, ContextMenuComponent, DmoFormControlsComponent, ShareDmoComponent]
})
export class DmogContainerComponent implements OnInit, OnChanges,OnDestroy {
    onBlur() {
        return;
    }
    onKeyDown($event: any) {
        return;
    }
    onFocus() {
        return;
    }

    private readonly baseUrl = `${environment.Setting.BaseAPIUrl}/modeler`;
    @ViewChild(ContextMenuComponent) refContextMenuComponent: ContextMenuComponent;
    @ViewChild('parentResizeDir') parentResizeDir: ResizeColumnsDirective;
    @ViewChild('childResizeDir') childResizeDir: ResizeColumnsDirective;
    private readonly destroy$ =new Subject<void>();
    shareDmo: MatDialogRef<ShareDmoComponent>;
    availableDmoToShare: any = [];
    isImActive = false;
    selectedDivId;
    initialCheckDone = false;
    targetEvent: any;
    targetclickedDiv: any;
    targetid: any;
    isInnerDragging = false;
    @Input() isDraggingStart:any;
    @Input() hasChildren: boolean = false;
    previousHoveredIds: string[] = [];
    @Input() UpdatedDataSideNavModel :any;
    @Input() inputAllselectedBMO;
    currenActiveDmoList:any;
    currentActiveDmoShareList:any;
    isDmoExist=false;
    constructor(
        private dmApi: DataModelerApiService,
        private apiService: ApiService,
        private msg: MessageService,
        private toast: ToastrService,
        private dataProvider: ServiceProviderService,
        private cdref: ChangeDetectorRef,
        private elementRef: ElementRef,
        public matdialog: MatDialog,
        private modalService: NgbModal
    ) {

        this.dataProvider.getHideContextMenu().subscribe(result => {
            if (result.dmogId && result.dmogId != this.data.DMOGID) {
                if (this.refContextMenuComponent)
                    this.refContextMenuComponent.showContextMenu = false;
            }
            this.resetDivColour();
        });

        this.dataProvider.getDmoStates()
        .pipe(takeUntil(this.destroy$)) 
        .subscribe(result => {
            this.updatePropBaseOfDMO(this.contextMenuData, result);
        });

        this.dataProvider.getUpdateDmogSettings().subscribe(result => {
            if (result.DMOGID == this.data.DMOGID) {
                this.panelMainContainer = JSON.parse(result.DMOGProps);
                if (this.panelMainContainer) {
                    this.rows = this.panelMainContainer.rows
                    this.sideNavModel.emit(null);

                }
            }
        });

        this.dataProvider.getDeleteDmo().subscribe(result => {
            if (result.dmogId == this.data.GUID) {
                this.removeDmoToOthers(result.dmoguid)
                this.saveProps();
            }
        });
        this.dataProvider.getUpdateDmogStyleSettings().subscribe(result => {
            if (result.DMOGID == this.data.DMOGID) {

                var tempjson = JSON.parse(result.DMOGProps);
                if (tempjson) {

                    this.containerStyle = tempjson.style;
                }
                this.updateWidth();
            }
        });

        this.dataProvider.getMoveDmo().subscribe(result => {
            if (result.dmogId == this.data.DMOGID) {
                let findActual=this.inputAllselectedBMO[this.data.GUID];
                if(findActual){
                    this.panelMainContainer = JSON.parse(findActual.DMOGProps);
                if (this.panelMainContainer) {
                    this.rows = this.panelMainContainer.rows
                }
                }
                this.removeDmoToOthers(result.dmoguid)
                this.updatereOrdering(result.targetId, result.dmoguid)
                //setTimeout(() => {
                    this.saveProps(true, result);
               // }, 0);
               setTimeout(() => {
                if(this.refContextMenuComponent){
                   this.refContextMenuComponent.showContextMenu=false; 
                }
            }, 100)
                
            }
            if (result.prevdmogId == this.data.DMOGID) {
                let findActual=this.inputAllselectedBMO[this.data.GUID];
                if(findActual){
                    this.panelMainContainer = JSON.parse(findActual.DMOGProps);
                if (this.panelMainContainer) {
                    this.rows = this.panelMainContainer.rows
                }
                }
                this.removeDmoToOthers(result.dmoguid)
                this.saveProps(true);
                setTimeout(() => {
                    if(this.refContextMenuComponent){
                       this.refContextMenuComponent.showContextMenu=false; 
                    }
                }, 100)
                
            }

        });

        this.dataProvider.geUpdatedColumnData().subscribe(result => {
            if (result.DMOGID == this.data.DMOGID) {
                this.panelMainContainer = JSON.parse(result.DMOGProps);
                if (this.panelMainContainer) {
                    this.rows = this.panelMainContainer.rows
                    this.sideNavModel.emit(null);

                }
            }
        });

        this.dataProvider.setMoveDmo
    }
    ngOnDestroy(): void {
     this.destroy$.next();
     this.destroy$.complete();
    }
    @Input() title: string;
    @Input() active = false;
    @Input() hasInvalidForm = false;
    @Input() bmodisplay: boolean;
    @Input() trnsctnId: any;
    @Input() ChildProcessName: string;
    @Input() ParentDmoValue: any;
    @Input() ChildDmoGuid: any;
    @Input() ProcessType: any;
    @Input() data: any;
    @Input() UpdatedDataForContainer: any;

    dragdmoguid: any;
    currentDmogId: any;
    @Input() left = 0;
    @Input() top = 0;
    @Input() readonly = false;

    currentRow;
    currentColumn
    type: DMOType;
    rows: PanelMainRow[] = [];

    panelMainContainer: PanelMainContainer
    containerStyle: ContainerStyle
    dmo = { display: false };
    @Input() BMO;
    @Input() panel;
    @Output() DraggingItemsModel = new EventEmitter<any>();
    @Output() openclonePopup = new EventEmitter<any>();
    @Output() tabRemove = new EventEmitter<DmogContainerComponent>();
    @Output() tabEdit = new EventEmitter<DmogContainerComponent>();
    @Output() OnAddDmogAbove = new EventEmitter<DmogContainerComponent>();
  @Output() OnAddDmogInGroup = new EventEmitter<DmogContainerComponent>();
    @Output() OnBMOSave = new EventEmitter<DmogContainerComponent>();
    @Output() sideNavModel = new EventEmitter<any>();

    @Output() onDmoEdit = new EventEmitter<any>();
    @Output() onDmoDelete = new EventEmitter<any>();
    @Output() openConditionPopup = new EventEmitter<any>();
    @Output() reloadParent = new EventEmitter<any>();
    @Output() dragDmoToAnotherdmog = new EventEmitter<any>();
    @Output() dropDmoToAnotherdmog = new EventEmitter<any>();
    @Output() SelectdItem = new EventEmitter<any>();
    @Input() SharedDmosList: [];
    hoveredRowIndex: any;
    hoveredColumnIndex: any;
    hoveredColumnRowIndex: any;
    private _dmog: DMOG;
    contextMenuPosition: ContextMenuPosition = null;
    contextMenuFormPosition: ContextMenuPosition = null;
    contextMenuData: any = null;
    cdkDragDisabled = false
    showFormContextMenu = false;
    showSharedmoContextMenu = false;
    availableActiveDmogIdes: any;
    AvailableActiveSharredDmoguides: any;
    @Input() newlyCreatedConatiner: any;
    @Input() mode: any;
    hoveredDataId: string
    //public bm: classes.BM;
    @Input()
    set dmog(dmog: DMOG) {
        this._dmog = dmog;
    }
    get dmog() {
        return this._dmog;
    }
    private IsJsonStaticGridDmo: boolean = false;
    readonly formsControls = Object.values(DMOS).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    ngOnInit(): void {
        this.style = {
            width: `100%`,
            height: `auto`,
        };
        if (this.data && this.data.DMOGProps) {

            this.panelMainContainer = JSON.parse(this.data.DMOGProps);
            if (this.panelMainContainer) {
                this.rows = this.panelMainContainer.rows;
                this.containerStyle = this.panelMainContainer.style;
            }
            this.updateWidth();
            if (this.data.GUID && this.newlyCreatedConatiner) {
                this.findDMOGById();
            }
        }

        if (this.data?.formData?.components) {
            this.availableActiveDmogIdes = this.data.formData.components.map(a => a.guid);
        } else {
            this.availableActiveDmogIdes = [];
        }

        if (this.SharedDmosList && this.SharedDmosList.length > 0) {
            this.AvailableActiveSharredDmoguides = (this.SharedDmosList as any[]).map(a => a.guid);
        } else {
            this.AvailableActiveSharredDmoguides = [];
        }
        //this.removeOrphanedDmos();
    }


    ngOnChanges(changes: SimpleChanges) {
        if(changes['UpdatedDataSideNavModel'] && this.UpdatedDataSideNavModel && this.UpdatedDataSideNavModel != undefined){
             if (this.UpdatedDataSideNavModel.dmog?.GUID === this.data?.GUID) {
            this.panelMainContainer = this.UpdatedDataSideNavModel.data;
             if(this.panelMainContainer){
                 const updateddmog = JSON.stringify(this.panelMainContainer);
                if (updateddmog) {
                    this.UpdatedDataSideNavModel.dmog.DMOGProps=updateddmog
                     this.data = this.UpdatedDataSideNavModel.dmog;
                }
            }
        }
        }
    
        if (changes['UpdatedDataForContainer'] && this.UpdatedDataForContainer) {
            this.handleUpdatedDataForContainer();
        }
    }
    
    private handleUpdatedDataForContainer(): void {
        if (this.UpdatedDataForContainer?.GUID === this.data?.GUID) {
            this.updatePanelWidth();
        }
    
        if (this.data?.GUID && this.newlyCreatedConatiner) {
            this.findDMOGById();
        }
    }
    
    private updatePanelWidth(): void {
        const updatedProps = JSON.parse(this.UpdatedDataForContainer.DMOGProps);
        const newWidth = updatedProps.width;
    
        if (newWidth && this.panelMainContainer?.width) {
            this.panelMainContainer.width = newWidth;
        }
    }
    

    ngDoCheck() {
        if (this.UpdatedDataForContainer?.GUID === this.data?.GUID) {
            const updatetedWidth = JSON.parse(this.UpdatedDataForContainer.DMOGProps);
            const newWidth = updatetedWidth.width;
            if (this.panelMainContainer?.width && newWidth) {
                this.panelMainContainer.width = newWidth;
            }
        }
        if (this.data?.formData?.components) {
            this.availableActiveDmogIdes = this.data.formData.components.map(a => a.guid);
        } else {
            this.availableActiveDmogIdes = [];
        }

        if (this.SharedDmosList && this.SharedDmosList.length > 0) {
            this.AvailableActiveSharredDmoguides = (this.SharedDmosList as any[]).map(a => a.guid);
        } else {
            this.AvailableActiveSharredDmoguides = [];
        }
    }

    findDMOGById() {
        setTimeout(() => {
            const selectedItem =
            {
                c: {
                    "colIndex": 0,
                    "dmoguid": [],
                    "rows": [],
                    "width": 99.5
                },
                colIndex: 0,
                r: {
                    "columns": [
                        {
                            "colIndex": 0,
                            "dmoguid": [],
                            "rows": [],
                            "width": 99.5
                        }
                    ],
                    "rowIndex": 0
                },
                rowIndex: 0,
                type: "column"
            }
            let model: SideNavModel = {
                type: 'Column',
                dmog: this.data,
                data: selectedItem,
                props: this.panelMainContainer,

            };
            if (this.data?.Type !== 'CardGroup') {
                this.sideNavModel.emit(model);
              }
            this.selectedDivId = 'main_' + this.newlyCreatedConatiner;
            this.removeOtherActive('main_' + this.newlyCreatedConatiner);
        }, 30);

    }


    getFirstRowAndColumnData() {
        if (!this.panelMainContainer?.rows?.length) {
            console.warn("No rows found in panelMainContainer.");
            return null;
        }
        const firstRow = this.panelMainContainer.rows[0];
        if (!firstRow.columns || firstRow.columns.length === 0) {
            console.warn("No columns found in the first row.");
            return null;
        }

        const firstColumn = firstRow.columns[0];

        // Construct JSON object
        const result = {
            rowIndex: firstRow.rowIndex,
            colIndex: firstColumn.colIndex,
            dmoguid: firstColumn.dmoguid || [],
            width: firstColumn.width || null,
            type: "column"
        };

        console.log("Generated JSON:", result);
        return result;
    }





    disableDrag() {
        this.cdkDragDisabled = true;

    }
    isCurrentActive(currentId) {
        if(this.isDraggingStart){
            return '';
        }
        if (this.selectedDivId == currentId) {
            return ' active-container '
        }
        return '';
    }
    isContainerActive(currentId) {

        if (this.selectedDivId == currentId) {
            return ' active-container-main'
        }
        return '';
    }

    removeOtherActive(currentId) {
        var elements = document.querySelectorAll(".resizePanel");
        if (elements) {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index] as HTMLElement;
                if (element) {
                    if (element.classList.contains("active-container-main")) {
                        element.classList.remove('active-container-main')
                    }

                    if (element.id == currentId) {
                        element.classList.add('active-container-main')
                    }

                }
            }
        }
    }
    removeSettingsActive() {
        var elements = document.querySelectorAll(".resizePanel");
        if (elements) {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index] as HTMLElement;
                if (element) {
                    if (element.classList.contains("active-container-main")) {
                        element.classList.remove('active-container-main')
                    }
                }
            }
        }
    }

    updateWidth() {
        if (this.panelMainContainer) {
            let width = this.panelMainContainer.width;
            if (width == 0) {
                width = 100
            }
            if (this.containerStyle) {
                let top = this.containerStyle.container.corner_radius_top
                let right = this.containerStyle.container.corner_radius_right
                let bottom = this.containerStyle.container.corner_radius_bottom
                let left = this.containerStyle.container.corner_radius_left;
                let hasHeader = this.containerStyle.header.header_border;
                let borderWidth = this.containerStyle.container.border_width;
                this.style = {
                    width: `${100}%`,
                    height: `auto`,
                    'background': this.containerStyle.container.background_color,
                    'border-style': this.containerStyle.container.border || 'solid',
                    'border-width': `${borderWidth}px`,
                    'border-color': this.containerStyle.container.border_color || 'initial',
                    'border-radius': `${top}px ${right}px ${bottom}px ${left}px`,
                };
                if (hasHeader){
                    this.headerStyle = {
                        'border-color': this.containerStyle.container.border_color,
                        'background': this.containerStyle.header.header_fill_color,
                        'color': this.containerStyle.header.header_text_color,
                        'border-radius': `${top}px ${right}px ${0}px ${0}px`,
                    }
                }else {
                    this.headerStyle = {};
                }
            } else {
                this.style = {
                    width: `${100}%`,
                    height: `auto`,

                };
            }
        }
    }
    enableDrag() {
        this.cdkDragDisabled = false;
    }
    ngAfterContentChecked() {
        //this.cdref!.detectChanges();
    }
    public style: object = {};
    public headerStyle: object = {};

    validate(event: ResizeEvent): boolean {
        const MIN_DIMENSIONS_PX: number = 50;
        if (
            event.rectangle.width &&
            event.rectangle.height &&
            (event.rectangle.width < MIN_DIMENSIONS_PX ||
                event.rectangle.height < MIN_DIMENSIONS_PX)
        ) {
            return false;
        }
        return true;
    }

    onResizeEnd(event: ResizeEvent): void {
        this.style = {
            // left: `${event.rectangle.left}px`,
            // top: `${event.rectangle.top}px`,
            width: `${event.rectangle.width}px`,
            height: `auto`,
        };
    }

    onTabRemove(tab: DmogContainerComponent) {
        this.dataProvider.setSidebarclose(true);
        this.resetDivColour();
        this.tabRemove.emit(tab);
    }
    onEditDMOGRemove(tab: DmogContainerComponent) {
        this.dataProvider.setSidebarclose(true);
        this.resetDivColour();
        this.tabEdit.emit(tab);
    }
    ShowDmogSettings(event) {
        this.activeteMe(event);

    }
   // Done by Anjum
    rowHovring(currentId: string): void {
        const pattern = /^(\w+_row_)(\d+)$/;
        const match = pattern.exec(currentId);
        if (!match) return;

        const baseId = match[1];
        const index = parseInt(match[2], 10);
    
        this.previousHoveredIds.forEach(id => {
          const el = document.getElementById(id);
          if (el)
             el.style.borderBottom = 'none';
          el.style.borderTop = 'none';
        });
    
        const currentElemId = `${baseId}${index}`;
        const nextElemId = `${baseId}${index + 1}`;
    
        const currentElem = document.getElementById(currentElemId);
        const nextElem = document.getElementById(nextElemId);
    
        if (currentElem) currentElem.style.borderBottom = '1px solid #00ACE9';
        if (nextElem) nextElem.style.borderTop = '1px solid #00ACE9';
    
        this.previousHoveredIds = [currentElemId];
        if (nextElem) this.previousHoveredIds.push(nextElemId);
      }
    
      rowHoverOut(): void {
        this.previousHoveredIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) {
            el.style.borderBottom = '1px solid transparent';
            el.style.borderTop = '1px solid transparent';
          }
        });
        this.previousHoveredIds = [];
      }
     
    onAddRowAfter(event:any, selectedRow:any, type:string) {
        event.stopPropagation();
        let currentIndex  =  selectedRow.rowIndex;
        let column = [{
            colIndex: 0,
            dmoguid: [],
            width: 99.5,
            rows: []
        }];
        let newRow = {
            rowIndex: currentIndex + 1,
            columns: column
        } as PanelMainRow;
        const insertIndex = type === 'below' ? currentIndex + 1 : currentIndex;
        this.rows.splice(insertIndex, 0, newRow);
        this.rows.forEach((row, idx) => {
            row.rowIndex = idx;
        });
        this.resetDivColour();
        this.saveProps();
        this.rowHoverOut();
    }
    onAddInnerRowAfter(event:any, selectedRow:any,selectedColumn:any , selecteColumnRow:any, type:string, innerRowIndex:any) {
        event.stopPropagation();
        let currentIndex  =  innerRowIndex;
        let column = [{
            index: 0,
            width: 100,
            dmoguid: []
        }];
        let newRow = {
            columns: column
        } as PanelMainRow;
        const insertIndex = type === 'below' ? currentIndex + 1 : currentIndex;
        selectedColumn.rows.splice(insertIndex, 0, newRow);
        this.rows[selectedRow.rowIndex].columns[selectedColumn.colIndex] = selectedColumn;
        this.resetDivColour();
        this.saveProps();
    }

    onAddRow() {
        let nextIndex = this.rows.length;
        let column = [];
        column.push({ "colIndex": 0, "dmoguid": [], "width": 99.5, "rows": [] })
        let letNextRow = { rowIndex: nextIndex, columns: column } as PanelMainRow
        this.rows.push(letNextRow);
        this.resetDivColour();
        this.saveProps();
    }

    onAddColumn(rowIndex: number) {
        if (this.rows[rowIndex].columns.length < 12) {
            let currentRoWithCol = this.rows.filter(a => a.rowIndex == rowIndex);
            let column = currentRoWithCol[0].columns.length;
            this.rows[rowIndex].columns.push({ "colIndex": column + 1, "dmoguid": [], "rows": [] });
            this.resetColumnWidth(currentRoWithCol[0].columns);
            this.saveProps()
        } else {
            alert('Maximum 12 columns allowed per row.');
        }

    }

    resetColumnWidth(currentRoWithCol, rowIndex?) {

        if (rowIndex != null) {
            let currentRow = this.rows.filter(a => a.rowIndex == rowIndex);
            if (currentRow.length == 0)
                return
            currentRoWithCol = currentRow[0].columns;
        }
        let column = currentRoWithCol;
        let index = 0;
        let perClmwidth = 99.5 / currentRoWithCol.length;
        for (let c of column) {
            c.width = perClmwidth;
            c.colIndex = index;
            index++;

        }

    }

    resetColumnWidthForRowInColumn(currentRoWithCol) {
        for (let r of currentRoWithCol) {
            let column = r.columns
            let perClmwidth = 100 / r.columns.length;
            let index = 0;
            for (let c of column) {
                c.width = perClmwidth;
                c.index = index;
                index++;
            }
        }
    }
    resetIndexing() {
        for (let index = 0; index < this.rows.length; index++) {
            let currentRow = this.rows[index];
            currentRow.rowIndex = index;
            for (let cindex = 0; cindex < currentRow.columns.length; cindex++) {
                let currentColumn = currentRow.columns[cindex];
                currentColumn.colIndex = cindex;
                if (currentColumn.rows && currentColumn.rows.length > 0) {
                    for (let crindex = 0; crindex < currentColumn.rows.length; crindex++) {
                        const subRow = currentColumn.rows[crindex];
                        if (subRow && subRow.columns && subRow.columns.length)
                            for (let scindex = 0; scindex < subRow.columns.length; scindex++) {
                                let subColumn = subRow.columns[scindex];
                                subColumn.index = scindex;

                            }

                    }
                }

            }


        }
    }

    onAddRowInColumn(item) {
        let rowIndex: number = item.rowIndex
        let colIndex: number = item.colIndex;
        let currentRoWithCol = this.rows.filter(a => a.rowIndex == rowIndex);
        if (currentRoWithCol.length > 0) {
            let column = currentRoWithCol[0].columns[colIndex];
            if (column) {
                let childColum = [];
                childColum.push({ "index": 0, "width": 100, "dmoguid": [] })
                column.rows.push({ "columns": childColum })
                this.resetColumnWidthForRowInColumn(column.rows)
            }

        }
        this.saveProps();
    }
    ///dmo element
    onAddRowChildColumnDmo(item, dmoguid) {
        let rowIndex: number = item.rowIndex
        let colIndex: number = item.colIndex;
        let currentRoWithCol = this.rows.filter(a => a.rowIndex == rowIndex);
        if (currentRoWithCol.length > 0) {
            let column = currentRoWithCol[0].columns[colIndex];
            if (column) {
                let existingColumn = column.rows[item.ColumnRowIndex]
                let ex = existingColumn.columns.length;
                for (let c of existingColumn.columns) {
                    if (c.index == item.colRowcolumnIndex) {
                        if (!c.dmoguid) {
                            c.dmoguid = [];
                        }
                        c.dmoguid.push(dmoguid);
                    }

                }

            }

        }
        this.saveProps();
    }
    //end
    onAddRowChildColumn(item) {
        let rowIndex: number = item.rowIndex
        let colIndex: number = item.colIndex;
        let currentRoWithCol = this.rows.filter(a => a.rowIndex == rowIndex);
        if (currentRoWithCol.length > 0) {
            let column = currentRoWithCol[0].columns[colIndex];
            if (column) {
                let existingColumn = column.rows[item.ColumnRowIndex]
                let ex = existingColumn.columns.length;
                existingColumn.columns.push({ "index": ex + 1, "width": 100, "dmoguid": [] });
                this.resetColumnWidthForRowInColumn(column.rows)
            }

        }
        this.saveProps();
    }
    onRemoveRowChildColumn(item) {
        let rowIndex: number = item.rowIndex
        let colIndex: number = item.colIndex;
        let currentRoWithCol = this.rows.filter(a => a.rowIndex == rowIndex);
        if (currentRoWithCol.length > 0) {
            let column = currentRoWithCol[0].columns[colIndex];
            if (column) {
                let existingColumn = column.rows[item.ColumnRowIndex]
                let ex = existingColumn.columns.length;
                existingColumn.columns.splice(item.colRowcolumnIndex, 1);
                this.resetColumnWidthForRowInColumn(column.rows)
            }

        }
        this.saveProps();
    }
    onRemoveChildRow(item) {
        let rowIndex: number = item.rowIndex
        let colIndex: number = item.colIndex;
        let currentRoWithCol = this.rows.filter(a => a.rowIndex == rowIndex);
        if (currentRoWithCol.length > 0) {
            let column = currentRoWithCol[0].columns[colIndex];
            if (column) {
                let existingColumn = column.rows.splice(item.ColumnRowIndex, 1)
                this.resetColumnWidthForRowInColumn(column.rows)
            }

        }
        this.saveProps();
    }
    onRemoveColumn(rowIndex: number, colIndex: number) {
                if(this.rows[rowIndex].columns.length == 1){
            this.onRemoveRow(rowIndex);
        }else{
        this.rows[rowIndex].columns.splice(colIndex, 1);
        this.resetColumnWidth(null, rowIndex);
        this.saveProps()
        }
    }

    onRemoveRow(rowIndex: number) {
        this.rows.splice(rowIndex, 1);
        this.saveProps()
    }

    ShowParentChildRowHover(row) {
        let hasChild = false;
        for (let index = 0; index < row.columns.length; index++) {
            let currentColumn = row.columns[index];
            if (currentColumn && currentColumn.rows && currentColumn.rows.length > 0) {
                for (let ri = 0; ri < currentColumn.rows.length; ri++) {
                    hasChild = true;
                    if (currentColumn.rows[ri] && currentColumn.rows[ri].columns.length > 0) {
                        hasChild = true;
                        break;
                        return;

                    }
                }

            }
        }
        return hasChild;
    }
    ShowParentRowHover(row) {
        let hasChild = true;
        for (let index = 0; index < row.columns.length; index++) {
            let currentColumn = row.columns[index];
            if (currentColumn && currentColumn.rows && currentColumn.rows.length > 0) {
                for (let ri = 0; ri < currentColumn.rows.length; ri++) {
                    if (currentColumn.rows[ri] && currentColumn.rows[ri].columns.length > 0) {
                        hasChild = false;
                        break;
                        return;

                    }
                }

            }
        }
        return hasChild;
    }
    

    shareDmoSelect(dmo) {
        this.updatePropBaseOfDMO(this.contextMenuData, dmo.guid)
         this.saveDmoDetails(dmo, this.data, true)
    }

    private async saveDmoDetails(res: IDMComponent, selectedDmog?, isEdit?, iscloned?) {

        try {
            let url = `wfapibm/DataModel/saveDmoforNewDM`
            let data
            if (isEdit) {
                data = selectedDmog;
            } else {
                data = selectedDmog.data;
            }
            if (iscloned) {
                data = selectedDmog;
            }
            let dmog = {
                "DMOGProps": data!.DMOGProps,
                "id": data!.DMOGID,
                "ProcessName": data!.root!.ProcessName,
                "Version": data!.Version
            }
            let isApiVersion3 = true;

            let model = { "dmo": res, "dmog": dmog }
            await firstValueFrom(this.apiService.postgateway('',url, model, null));
             return this.reloadParent.emit(true)
        } catch (error) {
            console.log(error);
        }
        return false;
    }



    FormControlSelect(type) {
        this.type = type;
        this.OnBMOSave.emit(this);
    }
    GetSelectMenu(rowIndex, colIndex) {
        this.currentRow = rowIndex;
        this.currentColumn = colIndex;

    }
    onResizeColumn(event, column, rowIndex){
        this.resizeColumn(event, column, rowIndex);
        if(event){
          this.styleObject(column);
        }
        this.saveProps()
      
      }

    resizeColumnNew(columns, rowIndex){
      this.saveProps();
    }
      
      resizeColumn(colWidth, column, rowIndex) {
        const filteredColumn = this.panelMainContainer.rows[rowIndex]?.columns;
        if (!filteredColumn || filteredColumn.length === 0) {
            return;
        }
        
        // Update target column and calculate widths
        const { totalMWWidth, nonMWCount } = this.updateTargetColumn(filteredColumn, column.colIndex, colWidth);
        
        // Redistribute remaining width
        this.redistributeWidths(filteredColumn, totalMWWidth, nonMWCount);
      }

      private updateTargetColumn(columns, colIndex, colWidth) {
        let totalMWWidth = 0;
        let nonMWCount = 0;
        
        columns.forEach((column, index) => {
          if (index === colIndex) {
            column.mw = true;
            column.width = Math.floor(parseFloat(colWidth));
          }
          
          if (column.mw) {
            totalMWWidth += column.width || 0;
          } else {
            nonMWCount++;
          }
        });
        
        return { totalMWWidth, nonMWCount };
      }

      private redistributeWidths(columns, totalMWWidth, nonMWCount) {
        const remainingWidth = 99.5 - totalMWWidth;
        const distributedWidth = nonMWCount > 0 ? remainingWidth / nonMWCount : 0;
        
        columns.forEach(col => {
          if (!col.mw || col.width < 5) {
            col.width = Math.max(distributedWidth, 5);
          }
        });
      }
    styleObject(column) {
        if (column) {
            return { width: column.width + "%" }
        }
        return {}
    }

    styleChildObject(column) {
        if (column) {
            return { width: column.width + "%" }
        }
        return {}
    }

    styleObjectChild(column) {
        if (column) {
            const totalColumns = column?.columns?.length || 1;
            const paddingAdjustment = 1;
            const modifiedWidth = column?.columns?.map((col: any) => {
                return col?.width ? (col?.width - paddingAdjustment / totalColumns) : col?.width;
            })
            return { width: modifiedWidth + "%" }
        }
        return {}

    }
    //prop 
    saveProps(isReload?, fromOneToAnotherDmo?) {
        this.resetIndexing();
        if (!this.panelMainContainer) {
            this.panelMainContainer = {
                width: 100,
                rows: this.rows
            }
        } else {
            this.panelMainContainer.rows = this.rows
        }
        var model = {};
        if (fromOneToAnotherDmo) {
            model = {
                "DMOGID": this.data.DMOGID,
                "prevdmogId": fromOneToAnotherDmo.prevdmogId,
                "newdmogId": fromOneToAnotherDmo.dmogId,
                "dmoguid": fromOneToAnotherDmo.dmoguid,
                "DMOGProps": JSON.stringify(this.panelMainContainer)
            }
        } else {
            model = {
                "DMOGID": this.data.DMOGID,
                "DMOGProps": JSON.stringify(this.panelMainContainer)
            }
        }

        const url = `wfapibm/DataModel/SaveDmogProps`;
        this.apiService.postgateway('',url, model).subscribe(r => {
            this.selectedDivId = null;
            this.data.DMOGProps = JSON.stringify(this.panelMainContainer)
            if (isReload) {
                this.reloadParent.emit(true)
            }
        }, error => {
            console.log(error)
        });

    }


    activeCurrentDivBasedOnParent(id) {
        setTimeout(() => {
            let parenthtml = document.getElementById('main_' + this.title);
            if (parenthtml) {
                let activebyID = parenthtml.children;
                for (let index = 0; index < activebyID.length; index++) {
                    const element = activebyID[index];
                    if (element.id == id) {
                        element.classList.add('active-container');
                    }

                }
            }
        }, 10);

    }

    showselection(event: any, clickedDiv: any, id?: string, mouseAction?: string) {
        this.removeAllActiveCell();
        let currentElement = event.currentTarget as HTMLElement;
        if (!currentElement) return;
        if (mouseAction === 'mouseenter') {
            currentElement.classList.add("row-hover-item-div", "active-container");
            currentElement.classList.remove("selectionDiv");
        }
    }

    onDragEnter(event: any, clickedDiv, id?) {
        event.preventDefault();
        this.targetEvent = event;
        this.targetclickedDiv = clickedDiv;
        this.targetid = id;
        this.showContextMenu(event, clickedDiv, id);
    }

    onDragLeave(event: any, clickedDiv, id?) {
        event.preventDefault();
    }

    onHover(data: any) {
        if (data?.id) {
            this.hoveredDataId = data.id; // Assign the data.id when hovering
        }
    }


    showContextMenu(event: any, clickedDiv: any, id?: string): void {
        if(this.isDraggingStart){
            return ;
        }
        if (this.readonly) {
            this.dataProvider.setSidebarclose(true);
            return;
        }
        this.removeSettingsActive();
        this.manageActiveContainer(id);

        this.selectedDivId = id;
        event.stopPropagation();
        this.sideNavModel.emit(null);
        this.dataProvider.setHideContextMenu({
            "dmogId": this.data.DMOGID,
            'selectedDivId': this.selectedDivId
        });
        if(clickedDiv.dmoguid){
          this.isDmoExist = this.dmoExist(clickedDiv.dmoguid);
           console.log("Is Dmo Exist",  this.isDmoExist);
        }

  this.handleContextMenuActions(event, clickedDiv, id);
  this.configureContextMenu(event, clickedDiv);
  setTimeout(() => {
    if (this.selectedDivId) {
      const element = document.getElementById(this.selectedDivId);
      if (element) {
        const divRect = element.getBoundingClientRect();
        this.contextMenuPosition.left = divRect.left;
        this.contextMenuPosition.right = divRect.right;
        this.contextMenuPosition.top = divRect.top;
        this.contextMenuPosition.bottom = divRect.bottom;
        this.contextMenuPosition.width = divRect.width;
        this.contextMenuPosition.height = divRect.height;
        this.contextMenuPosition.centerX = divRect.left + (divRect.width / 2);
        this.contextMenuPosition.centerY = divRect.top;
        this.contextMenuPosition.rightClickMenuPositionX = this.contextMenuPosition.centerX;
        this.contextMenuPosition.rightClickMenuPositionY = this.contextMenuPosition.centerY;
        this.contextMenuFormPosition = new ContextMenuPosition();
        this.contextMenuFormPosition = this.contextMenuPosition;
      }
    }
  }, 0);
}

    private manageActiveContainer(id?: string): void {
        let activeTag = document.querySelector(".active-container");
        if (activeTag == null) {
            const targetElement = document.getElementById(id);
            if (targetElement) {
                targetElement.classList.add("active-container");
            }
            activeTag = document.querySelector(".active-container");
            this.activateContainer(id);
        }
        if (activeTag)
            if (activeTag.id !== id) {
                this.activateContainer(id);
            }
    }

    private activateContainer(id?: string): void {
        this.removeAllActiveCell();
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.classList.add("active-container");
        }
        this.activeCurrentDivBasedOnParent(id);
    }

    private handleContextMenuActions(event: any, clickedDiv: any, id?: string): void {
        if (!clickedDiv) return;

        switch (clickedDiv.type) {
            case 'column':
                this.columnSetting(event, clickedDiv);
                break;
            case 'parentRow':
                this.rowSetting(event, clickedDiv.r, id);
                break;
            case 'NestedcolumnRow':
                this.subRowSetting(event, clickedDiv, id);
                break;
            case 'columnRow':
                this.subColumnSetting(event, clickedDiv, id);
                break;
        }
    }

    private configureContextMenu(event: any, clickedDiv: any): void {
        this.showFormContextMenu = false;
        this.showSharedmoContextMenu = false;
        this.resetDivColour();

        this.contextMenuPosition = new ContextMenuPosition();
        this.contextMenuData = clickedDiv;
    }


    resetDivColour() {
        return;
    }


    updatePropBaseOfDMO(data, dmoguid) {
        if (data == undefined || data == null)
            return
        switch (data.type) {
            case 'parentRow': {
                let currentRoWithCol = this.rows.filter(a => a.rowIndex == data.rowIndex);
                let column = currentRoWithCol[0].columns.length;
                break;
            };
            case 'column': {
                let currentRoWithCol = this.rows.filter(a => a.rowIndex == data.rowIndex);
                let column = currentRoWithCol[0].columns;
                for (let index = 0; index < column.length; index++) {
                    if (index == data.colIndex) {
                        column[index].dmoguid.push(dmoguid);
                        break;
                    }
                }
                this.saveProps()

                break;
            };

            case 'columnRow': {
                let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex, "colRowcolumnIndex": data.colRowcolumnIndex }


                let currentRoWithCol = this.rows.filter(a => a.rowIndex == data.rowIndex);
                if (currentRoWithCol.length > 0) {
                    let column = currentRoWithCol[0].columns[data.colIndex];
                    if (column) {
                        let existingColumn = column.rows[data.colRowIndex]
                        for (let index = 0; index < existingColumn.columns.length; index++) {
                            if (index == data.colRowcolumnIndex) {
                                existingColumn.columns[index].dmoguid.push(dmoguid);
                                break;
                            }
                        }
                    }
                }
                this.saveProps()
                break;
            };


        }

    }
    updatereOrdering(targetId, dmoguid) {
        
        if (targetId && targetId.length > 0 && dmoguid) {
            let ids = targetId.split('_');
            if (ids && ids.length > 0) {
                let _currentdmog = ids[0];
                let rowORCol = ids[1];
                if (rowORCol == "column") {
                    let rowIndex = Number(ids[2]);
                    let colIndex = Number(ids[3]);
                    let data = { 'rowIndex': rowIndex, 'colIndex': colIndex, 'type': 'column' }
                    this.removeDmoToOthers(dmoguid);
                    this.updatePropBaseOfDMO(data, dmoguid);
                }
                else if (rowORCol == "columnRow") {
                    let rowIndex = Number(ids[2]);
                    let colIndex = Number(ids[3]);
                    let colRowIndex = Number(ids[4]);
                    let colRowcolumnIndex = Number(ids[5]);
                    let data = { 'type': 'columnRow', 'rowIndex': rowIndex, "colIndex": colIndex, 'colRowIndex': colRowIndex, "colRowcolumnIndex": colRowcolumnIndex }


                    this.removeDmoToOthers(dmoguid);
                    this.updatePropBaseOfDMO(data, dmoguid);

                }

            }
        }
    }
    removeDmoToOthers1(dmoguid) {
        if (this.rows.length) {
            for (let index = 0; index < this.rows.length; index++) {
                const r = this.rows[index];
                for (let c = 0; c < r.columns.length; c++) {
                    const col = r.columns[c];
                    if (col.dmoguid != null) {
                        var existsIndex = col.dmoguid.indexOf(dmoguid);
                        if (existsIndex > -1) {
                            col.dmoguid.splice(existsIndex, 1);
                        }

                    }
                    for (let cr = 0; cr < col.rows.length; cr++) {
                        const crc = col.rows[cr];
                        for (let icrc = 0; icrc < crc.columns.length; icrc++) {
                            const cColumn = crc.columns[icrc];
                            if (cColumn.dmoguid != null) {
                                var existsIndex = cColumn.dmoguid.indexOf(dmoguid);
                                if (existsIndex > -1) {
                                    cColumn.dmoguid.splice(existsIndex, 1);
                                }

                            }
                        }
                    }

                }

            }
        }
    }

    //2nd 
    removeDmoToOthers(dmoguid) {
        if (this.rows.length) {
            for (let index = 0; index < this.rows.length; index++) {
                const r = this.rows[index];
                for (let c = 0; c < r.columns.length; c++) {
                    const col = r.columns[c];
                    if (col.dmoguid != null) {
                        var existsIndex = col.dmoguid.indexOf(dmoguid);
                        if (existsIndex > -1) {
                            col.dmoguid.splice(existsIndex, 1);
                        }

                    }
                    for (let cr = 0; cr < col.rows.length; cr++) {
                        const crc = col.rows[cr];
                        for (let icrc = 0; icrc < crc.columns.length; icrc++) {
                            const cColumn = crc.columns[icrc];
                            if (cColumn.dmoguid != null) {
                                var existsIndex = cColumn.dmoguid.indexOf(dmoguid);
                                if (existsIndex > -1) {
                                    cColumn.dmoguid.splice(existsIndex, 1);
                                }

                            }
                        }
                    }

                }

            }
        }
    }

  dmoExist(dmoguidList: any[] ): boolean {
     if (dmoguidList==undefined || dmoguidList==null || dmoguidList.length<1) {
      return false;
  }
  if (!this.availableActiveDmogIdes || !this.AvailableActiveSharredDmoguides) {
      return false;
  }
  const list = Array.isArray(dmoguidList) ? dmoguidList : [dmoguidList];
  let exists= list.some(dmoguid =>
      this.availableActiveDmogIdes.includes(dmoguid) ||
      this.AvailableActiveSharredDmoguides.includes(dmoguid)
  );
  return exists;
}


    //This function filters out the looping DMOGUIDs with available active and shared dmos DMOGUIDs
    filterDmoguidList(dmoguidList: any[]): any[] {
        if (!dmoguidList || !this.availableActiveDmogIdes || !this.AvailableActiveSharredDmoguides) {
            return [];
        }

        return dmoguidList.filter(dmoguid =>
            this.availableActiveDmogIdes.includes(dmoguid) || this.AvailableActiveSharredDmoguides.includes(dmoguid)
        );
    }


    removeOrphanedDmos(dmoguidList: any[] ): boolean {
         if (dmoguidList==undefined || dmoguidList==null || dmoguidList.length<1) {
                return false;
            }
            if (!this.availableActiveDmogIdes || !this.AvailableActiveSharredDmoguides) {
                return false;
            }
            const list = Array.isArray(dmoguidList) ? dmoguidList : [dmoguidList];
            let exists= list.some(dmoguid =>
                this.availableActiveDmogIdes.includes(dmoguid) ||
                this.AvailableActiveSharredDmoguides.includes(dmoguid)
            );
            return exists;    
      }
      

    getCurrentDMO(dmoguid) {
        const findDmo = (list) => list?.filter(a => a.guid === dmoguid)[0] ?? null;
    
        let dmo = findDmo(this.data?.formData?.components);
        if (dmo) {
            this.setReadOnly(dmo);
            return dmo;
        }
    
        let filteredList = findDmo(this.SharedDmosList);
        if (filteredList) {
            this.setReadOnly(filteredList);
            return filteredList;
        }
    
        return null;
    }
    
    setReadOnly(dmo) {
        if (this.isDraggingStart) {
            dmo.IsReadOnly = this.isDraggingStart;
        }
    }
   
    onMouseEnterInnerDragEnded(event, dmoguid) {
        //this.dragdmoguid = dmoguid;
        this.isInnerDragging = true;
        //this.dragDmoToAnotherdmog.emit({ "dmogId": this.data.DMOGID, "dmoguid": dmoguid, "InnerDragging": this.isInnerDragging });
       
    }
    onMouseLeaveInnerDragEnded(event, dmoguid) {
        this.isInnerDragging = false;
        event.stopPropagation();
        // this.dragDmoToAnotherdmog.emit({
        //     "dmogId": this.data.DMOGID,
        //     "dmoguid": dmoguid,
        //     "InnerDragging": this.isInnerDragging,
        //     "eventType": "mouseleave",
        //     "timestamp": Date.now()
        // });
    }

    onInnerDragEnded(event, dmoguid) {
        setTimeout(() => {
            console.log("Drag End Before currentDmogId;", this.currentDmogId)
            this.isInnerDragging = false;
            this.dragDmoToAnotherdmog.emit({ "dmogId": this.data.DMOGID, "dmoguid": dmoguid, "InnerDragging": this.isInnerDragging });
            event.stopPropagation();
        }, 5);

    }
    dragdmo(event, dmoguid, currentDmogId) {
        event.stopPropagation();
        this.currentDmogId =  currentDmogId;
        console.log("Drag start Before currentDmogId;", this.currentDmogId)
        console.log("Drag start of DMO's", dmoguid)
        event.dataTransfer.setData("dmoguid", dmoguid); 
        this.dragdmoguid = dmoguid;
        this.isInnerDragging = true;
        this.dragDmoToAnotherdmog.emit({ "dmogId": this.data.DMOGID, "dmoguid": dmoguid, "InnerDragging": this.isInnerDragging });
       

    }
    
    onDragOver(event) {
        let targetId = event.currentTarget.id;
        console.log("Drag drag over funtion of DMO's", targetId)
        event.preventDefault()

    }
    addNewRow(event:any) {
        event.stopPropagation();
        this.onAddRow();
    }

    dropdmo(event: any, dmoguid) {
        if (this.readonly)
            return;
        event.stopPropagation();
        
        let targetId = event.currentTarget.id;
        console.log("Drag drop funtion of DMO's", targetId)
        
    const draggedDmoguid = event.dataTransfer.getData("dmoguid");

    const targetDmo = (event.target as HTMLElement).closest('[data-dmoguid]');
    if (draggedDmoguid && targetDmo) {
        const targetGuid = targetDmo.getAttribute('data-dmoguid');
        if (targetGuid && draggedDmoguid !== targetGuid) {
           if(this.handleDmoReordering(event, draggedDmoguid, targetGuid))
           {
            return;
           }
            
        }
    }
    
        let fromDmog = event.dataTransfer.getData("dmogRows");
        if (fromDmog && this.data.DMOGID == fromDmog) {
            this.dataProvider.setHideContextMenu(false);
            this.onAddRow();

            return;
        }
        let ControlDmogDmo = event.dataTransfer.getData("ControlDmogDmo");
        if (ControlDmogDmo) {
            let dmoModel = JSON.parse(ControlDmogDmo);
            if (dmoModel) {
                this.dataProvider.setHideContextMenu(false);
                let control = dmoModel.contol;
                let selectedItem = dmoModel.selectedItem;
                this.FormControlSelect(control);

                return;
            }
            return;
        }
        let ColumnDmogRows = event.dataTransfer.getData("ColumnDmogRows");
        if (ColumnDmogRows) {
            let dmoModel = JSON.parse(ColumnDmogRows);
            if (dmoModel) {
                this.dataProvider.setHideContextMenu(false);
                let selectedItem = dmoModel.selectedItem;
                this.onAddRowInColumn(selectedItem);

                return;
            }

        }
        let SubColumnDmo = event.dataTransfer.getData("SubColumnDmo");
        if (SubColumnDmo) {
            let dmoModel = JSON.parse(SubColumnDmo);
            if (dmoModel) {
                this.dataProvider.setHideContextMenu(false);
                let control = dmoModel.contol;
                let selectedItem = dmoModel.selectedItem;
                this.FormControlSelect(control);

                return;
            }

        }


        let SharedDmogDmo = event.dataTransfer.getData("SharedDmogDmo");
        if (SharedDmogDmo) {
            let dmoModel = JSON.parse(SharedDmogDmo);
            if (dmoModel) {
                let contol = dmoModel.contol;
                this.shareDmoSelect(contol);
                this.sideNavModel.emit(null);

                return;
            }
            return;
        }



        let grouping =  event.dataTransfer.getData("cardGroupDmog");
        if(grouping){
            this.dataProvider.setSidebarclose(true);
            let dmogModel = JSON.parse(grouping);
            if(dmogModel.type === 'Card' || dmogModel.type === 'CardGroup'){
                let data = {
                    model: dmogModel,
                    targetId: targetId
                  };
                this.DraggingItemsModel.emit(data);
                return;
            }
            return;
        }

        this.showFormContextMenu = false;
        this.showSharedmoContextMenu = false;
        if(targetId && targetId.length > 0 &&  this.currentDmogId){
            console.log("Drop dmo Calling... current Dmo Id is ", this.currentDmogId);
            let ids = targetId.split('_');
            if(ids[0] === this.currentDmogId){
                this.currentDmogId ="";
                this.updatereOrdering(targetId, this.dragdmoguid)
            } 
        }
       
        if (!dmoguid) {
            if (targetId && targetId.length > 0) {
                let ids = targetId.split('_');
                if (ids && ids.length > 0) {
                    console.log("Drop dmo Emitter Calling... current Dmo Id is ", dmoguid);
                    this.dropDmoToAnotherdmog.emit({ "dmogId": this.data.DMOGID, "targetId": targetId });
                }
            }
        }
        
       
    }



    handleDmoReordering(event: DragEvent, draggedDmoguid: string, targetGuid: string): boolean {
        const column = this.findColumnContainingDmo(targetGuid);
        if (!column || !column.dmoguid) return false;
    
        const fromIndex = column.dmoguid.indexOf(draggedDmoguid);
        const toIndex = column.dmoguid.indexOf(targetGuid);
        
        if (fromIndex === -1 || toIndex === -1) return false;
    
        this.moveArrayItem(column.dmoguid, fromIndex, toIndex);
        
        this.saveProps();
        this.cdref.detectChanges();
        return true;
    }
    
    private moveArrayItem(array: any[], fromIndex: number, toIndex: number) {
        const item = array[fromIndex];
        array.splice(fromIndex, 1);
        array.splice(toIndex, 0, item);
    }
    
    private findColumnContainingDmo(dmoguid: string) {
        for (const row of this.rows) {
            for (const column of row.columns) {
                if (column.dmoguid?.includes(dmoguid)) {
                    return column;
                }
            }
        }
        return null;
    }


    dropRow(event: any) {
        if (this.readonly)
            return;
        event.stopPropagation();
        let targetId = event.currentTarget.id;
        let fromDmog = event.dataTransfer.getData("dmogRows");
        if (this.data.DMOGID == fromDmog) {
            this.onAddRow();
        }
        let grouping =  event.dataTransfer.getData("cardGroupDmog");
        if(grouping){
            this.dataProvider.setSidebarclose(true);
            let dmogModel = JSON.parse(grouping);
            if(dmogModel.type === 'Card' || dmogModel.type === 'CardGroup'){
                let data = {
                    model: dmogModel,
                    targetId: targetId
                  };
                this.DraggingItemsModel.emit(data);
               // return;
            }
           // return;
        }

    }

    showChildContextMenu(event, id, mouseAction) {
        event.stopPropagation();
        if (this.readonly) {
            return;
        }

        let activeTag = document.querySelectorAll(".row-hover-item-div");

        activeTag.forEach(
            cell => {
                if (!cell.classList.contains('NoRemoveHover')) {
                    cell.classList.remove('row-hover-item-div');
                }

            })
        if (mouseAction == 'mouseenter') {
            let currentid = document.getElementById(id)
            if (currentid) {
                currentid.classList.add("row-hover-item-div")


            }
        }

    }

    CurrentDropItem(event, id) {
        const div: HTMLDivElement = <HTMLDivElement>event.relatedTarget
    }
    OperateContextMenu($event) {
        if (this.readonly) {
            return;
        }
        var data = $event.showContextMenuFor;
        this.SelectdItem.emit({ "SelectdItem": this.data });
        var option = $event.option;
        this.showFormContextMenu = false;
        if (option == "AddDMO") {
            this.contextMenuFormPosition = $event.position;
            this.showFormContextMenu = true;
            return;
        }
        else if (option == "shareDMO") {
            this.showSharedmoContextMenu = true;
            this.contextMenuFormPosition = $event.position;

            return;

        }
        if (option == "EditDMO" || option == "DeleteDMO" || option == "ConditionsDMO" || option == "CloneDMO") {
            switch (data.type) {
                case 'column': {
                    if (data.dmoguid) {
                        let dmowithDmog = { "dmog": this.data, "dmo": this.getCurrentDMO(data.dmoguid), "dmoguid": data.dmoguid };
                        if (option == "DeleteDMO") {
                            this.onDmoDelete.emit(dmowithDmog);
                            this.cdref.detectChanges();
                        } else if (option == "EditDMO") {
                            this.onDmoEdit.emit(dmowithDmog);
                        }
                        else if (option == "ConditionsDMO") {
                            this.openConditionPopup.emit(dmowithDmog);
                        }
                        else if (option == "CloneDMO") {
                            this.openclonePopup.emit(dmowithDmog);
                        }
                        return;
                    }

                    let currentRoWithCol = this.rows.filter(a => a.rowIndex == data.rowIndex);
                    for (let index = 0; index < currentRoWithCol.length; index++) {
                        for (let c = 0; c < currentRoWithCol[index].columns.length; c++) {
                            if (c == data.colIndex) {
                                const dmoguid = currentRoWithCol[index].columns[c].dmoguid[0]
                                if (dmoguid) {
                                    let dmowithDmog = { "dmog": this.data, "dmo": this.getCurrentDMO(dmoguid), "dmoguid": dmoguid };
                                    if (option == "DeleteDMO") {
                                        this.onDmoDelete.emit(dmowithDmog);
                                        this.cdref.detectChanges();
                                    } else if (option == "EditDMO") {
                                        this.onDmoEdit.emit(dmowithDmog);
                                    }
                                    else if (option == "ConditionsDMO") {
                                        this.openConditionPopup.emit(dmowithDmog);
                                    }
                                    else if (option == "CloneDMO") {
                                        this.openclonePopup.emit(dmowithDmog);
                                    }
                                    return;
                                }
                            }

                        }
                    }
                    break;
                };

                case 'columnRow': {
                    let dmoguid = "";
                    if (data.dmoguid) {
                        dmoguid = data.dmoguid;
                    } else {
                        let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex }
                        let currentRoWithCol = this.rows.filter(a => a.rowIndex == data.rowIndex);
                        loop1:
                        for (let index = 0; index < currentRoWithCol.length; index++) {
                            loop2:
                            for (let c = 0; c < currentRoWithCol[index].columns.length; c++) {
                                if (c == data.colIndex) {

                                    let column = currentRoWithCol[0].columns[c];
                                    if (column) {
                                        let existingColumn = column.rows[item.ColumnRowIndex]
                                        loop3:
                                        for (let crin = 0; crin < existingColumn.columns.length; crin++) {

                                            if (crin == data.colRowcolumnIndex) {
                                                const element = existingColumn.columns[crin];
                                                dmoguid = element.dmoguid[0];
                                                break loop2;
                                                return;
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                    let dmowithDmog = { "dmog": this.data, "dmo": this.getCurrentDMO(dmoguid), "dmoguid": dmoguid };
                    if (option == "DeleteDMO") {
                        this.onDmoDelete.emit(dmowithDmog);
                        this.cdref.detectChanges();
                    } else if (option == "EditDMO") {
                        this.onDmoEdit.emit(dmowithDmog);
                    }
                    else if (option == "ConditionsDMO") {
                        this.openConditionPopup.emit(dmowithDmog);
                    }
                    else if (option == "CloneDMO") {
                        this.openclonePopup.emit(dmowithDmog);
                    }
                    break;
                };



            }
            return;
        }

        this.resetDivColour();
        switch (data.type) {
            case 'parentRow': {
                if (option == 'AddColumn') {
                    this.onAddColumn(data.rowIndex);
                }
                else if (option == 'RemoveRow') {
                    this.onRemoveRow(data.rowIndex);
                    this.sideNavModel.emit(null);
                    let model:SideNavModel={
                        type:'dmog',
                        dmog:this.data,
                        data:this.panelMainContainer
                          };
                        this.sideNavModel.emit(model)
                }

                break;
            };
            case 'column': {
                if (option == 'AddColumn') {
                    this.onAddColumn(data.rowIndex);
                }
                else if (option == 'AddRow') {
                    let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex }
                    this.onAddRowInColumn(item);
                }
                else if (option == 'RemoveColumn') {
                    this.onRemoveColumn(data.rowIndex, data.colIndex)
                    this.sideNavModel.emit(null);
                        let model:SideNavModel={
                        type:'dmog',
                        dmog:this.data,
                        data:this.panelMainContainer
                          };
                        this.sideNavModel.emit(model)
                }

                break;
            };

            case 'columnRow': {
                if (option == 'AddColumn') {
                    let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex }
                    this.onAddRowChildColumn(item);
                }
                else if (option == 'RemoveColumn') {
                    
                    if (this.isDmoInLastNestedColumn(data)) {
                        let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex, "colRowcolumnIndex": data.colRowcolumnIndex }
                        this.onRemoveChildRow(item);
                        this.sideNavModel.emit(null);
                        let model:SideNavModel={
                            type:'dmog',
                            dmog:this.data,
                            data:this.panelMainContainer
                              };
                            this.sideNavModel.emit(model)
                    }
                    else
                    {
                        let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex, "colRowcolumnIndex": data.colRowcolumnIndex }
                        this.onRemoveRowChildColumn(item);
                        this.sideNavModel.emit(null);
                        let model:SideNavModel={
                            type:'dmog',
                            dmog:this.data,
                            data:this.panelMainContainer
                              };
                            this.sideNavModel.emit(model)
                    }
                   
                }
                break;
            };
            case 'NestedcolumnRow': {
                if (option == 'AddColumn') {
                    let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex }
                    this.onAddRowChildColumn(item);
                }
                else if (option == 'RemoveColumn') {
                    let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex, "colRowcolumnIndex": data.colRowcolumnIndex }
                    this.onRemoveRowChildColumn(item);
                    this.sideNavModel.emit(null);
                    let model:SideNavModel={
                        type:'dmog',
                        dmog:this.data,
                        data:this.panelMainContainer
                          };
                        this.sideNavModel.emit(model)
                    
                }
                else if (option == 'RemoveRow') {
                    let item = { 'rowIndex': data.rowIndex, "colIndex": data.colIndex, 'ColumnRowIndex': data.colRowIndex, "colRowcolumnIndex": data.colRowcolumnIndex }
                    this.onRemoveChildRow(item);
                    this.sideNavModel.emit(null);
                    let model:SideNavModel={
                        type:'dmog',
                        dmog:this.data,
                        data:this.panelMainContainer
                          };
                        this.sideNavModel.emit(model)
                }
                break;
            };


        }
    }
    

isDmoInLastNestedColumn(data: any): boolean {
  const rows = data.r;
  return rows.columns.some((column: any) => this.hasEmptyDmoInLastColumn(column));
}

private hasEmptyDmoInLastColumn(column: any): boolean {
  if (!column.rows) return false;

  return column.rows.some((row: any) => {
    const nestedColumns = row.columns || [];
    return this.checkNestedColumns(nestedColumns);
  });
}

private checkNestedColumns(nestedColumns: any[]): boolean {
  return nestedColumns.some((nestedCol: any) => {
    const isLastColumn = nestedColumns.length === 1;
    const hasDmoGuid = nestedCol.dmoguid && nestedCol.dmoguid.length > 0;
    return !hasDmoGuid && isLastColumn;
  });
}







    AddDmogAbove($event) {
        this.OnAddDmogAbove.emit(this);
    }
  AddDmogInGroup(){
    this.OnAddDmogInGroup.emit(this);
  }
  activeteMe(event) {
    event.stopPropagation();
    this.selectedDivId = 'main_'+this.title;
    this.removeOtherActive('main_'+this.title);
    this.removeAllActiveCell();
    if(!this.panelMainContainer){
      let column=[];
        let letNextRow={rowIndex:0,
          columns:column
        } as PanelMainRow
      }
      let model:SideNavModel={
      type:'dmog',
      dmog:this.data,
      data:this.panelMainContainer

        };
        this.sideNavModel.emit(model)
    }
    rowSetting(event, selectedRow, id, json?) {
        event.stopPropagation();
        this.manageActiveContainer(id);
        this.selectedDivId = id;

        let model: SideNavModel = {
            type: 'ParentRow',
            dmog: this.data,
            data: selectedRow,
            props: this.panelMainContainer,

        };
        this.sideNavModel.emit(model)
        if (json) {
            this.showRowContextMenu(event, json, id);
        }
        setTimeout(() => {
            if (this.selectedDivId) {
              const element = document.getElementById(this.selectedDivId);
              if (element) {
                const divRect = element.getBoundingClientRect();
                this.contextMenuPosition.left = divRect.left;
                this.contextMenuPosition.right = divRect.right;
                this.contextMenuPosition.top = divRect.top;
                this.contextMenuPosition.bottom = divRect.bottom;
                this.contextMenuPosition.width = divRect.width;
                this.contextMenuPosition.height = divRect.height;
                this.contextMenuPosition.centerX = divRect.left + (divRect.width / 2);
                this.contextMenuPosition.centerY = divRect.top;
                this.contextMenuPosition.rightClickMenuPositionX = this.contextMenuPosition.centerX;
                this.contextMenuPosition.rightClickMenuPositionY = this.contextMenuPosition.centerY;
                this.contextMenuFormPosition = new ContextMenuPosition();
                this.contextMenuFormPosition = this.contextMenuPosition;
              }
            }
          }, 0);

    }

    showRowContextMenu(event: any, clickedDiv: any, id?: string): void {
        if (this.readonly) {
            this.dataProvider.setSidebarclose(true);
            return;
        }
        this.selectedDivId = id;
        event.stopPropagation();
        this.sideNavModel.emit(null);
        this.dataProvider.setHideContextMenu({
            "dmogId": this.data.DMOGID,
            'selectedDivId': this.selectedDivId
        });

        this.handleContextMenuActions(event, clickedDiv, id);
        this.configureContextMenu(event, clickedDiv);
    }




    subRowSetting(event, selectedRow, id) {
        event.stopPropagation();
        this.selectedDivId = id;

        let model: SideNavModel = {
            type: 'NestedcolumnRow',
            dmog: this.data,
            data: selectedRow,
            props: this.panelMainContainer,

        };
        this.sideNavModel.emit(model)
    }
    subColumnSetting(event, selectedRow, id) {
        event.stopPropagation();
        this.selectedDivId = id;

        let model: SideNavModel = {
            type: 'columnRow',
            dmog: this.data,
            data: selectedRow,
            props: this.panelMainContainer,

        };
        this.sideNavModel.emit(model)
    }
    getWidthInPercentage(event, id: any) {
        event.stopPropagation();
        console.log(event);
        let looped = document.getElementById("resizediv_" + id);
        const parentWidth = looped.parentElement?.clientWidth || window.innerWidth; // Get parent width or window width
        const divWidth = looped.clientWidth; // Get div width
        let width = Math.floor((divWidth / parentWidth) * 100);
        setTimeout(() => {
            let looped = document.getElementById("resizediv_" + id);
            looped.style.width = `${width}% !important`;
            console.log(looped.style.width);

        }, 100);


    }
    columnSetting(event, selectedColumn) {
        event.stopPropagation();
        let model: SideNavModel = {
            type: 'Column',
            dmog: this.data,
            data: selectedColumn,
            props: this.panelMainContainer,

        };
        this.sideNavModel.emit(model)

    }
    removeAllActiveCell() {
        let activeTag = document.querySelectorAll(".active-container");

        activeTag.forEach(
            cell => {
                cell.classList.remove('active-container');
                //Remove the child class
                //   let activeChildren = cell.querySelectorAll(".active-container-child");
                //   activeChildren.forEach(child => {
                //     child.classList.remove('active-container-child');
                // });
            })
    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.resetDivColour()
    }

}

