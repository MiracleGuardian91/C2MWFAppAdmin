import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

import { ApplicationService } from '@app/core/services/application.service';
import { LogHeaderMapping } from '@app/core/models/log-header-mapping';
import { TabComponent } from '../tab/tab.component';
import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { ServiceProviderService } from '@app/admin/data-modeler1/services1/service-provider.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    standalone: true,
    imports: [NgIf, CdkDropList, NgFor, CdkDrag]
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(TabComponent) tabs: QueryList < TabComponent > ;

  deletable = false;
  editable = false;
  @Input() set actions(actions: {delete: boolean, edit: boolean}) {
    this.deletable = actions.delete;
    this.editable = actions.edit;
  }
  @Input() 
  @Input() enableActions = false;
  @Input() confirmSwitchTab = false;
  @Input() isNewDesign = false;
  @Input() isView = false;
  @Input() isSection = false;

  @Input() confirmed$: Subject < boolean > = new Subject();
  @Output() tabSelected = new EventEmitter<TabComponent>();
  @Output() tabClicked = new EventEmitter<TabComponent>();
  @Output() tabEdit = new EventEmitter<TabComponent>();
  @Output() tabRemove = new EventEmitter<TabComponent>();
  @Output() dropped = new EventEmitter<{from: number, to: number}>()
  showIcon:any = false;
  private logHeaderMapping: LogHeaderMapping = new LogHeaderMapping();
  private unsubscribe: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private el: ElementRef,
    private dataProvider :ServiceProviderService
  ) {}

  ngOnInit() {    
    const checkValidationSub = this.applicationService.checkValidation.subscribe((isCheck: boolean) => {
      if (isCheck) {
        setTimeout(() => {
          this.makeValidate();
        });
      }
    });
    this.unsubscribe.push(checkValidationSub);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  // contentChildren are set
  ngAfterContentInit() {    
    setTimeout(() => {
      // get all active tabs
      const activeTabs = this.tabs.filter(tab => tab.active);
      // if there is no active tab set, activate the first
      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    });
  }

  makeValidate() {
    const allTabs = this.el.nativeElement.querySelectorAll('app-tab');
    if (this.tabs) {
      const tabCmp = this.tabs.toArray();
      for (let index = 0; index < allTabs.length; index++) {
        const invalidElement = allTabs[index].querySelector('.invalid-feedback');
        if (invalidElement) {
          tabCmp[index].hasInvalidForm = true;
        } else {
          tabCmp[index].hasInvalidForm = false;
        }
      }
    }
  }

  onDropped(e: CdkDragDrop<any>) {
    this.dropped.emit({from: e.previousIndex, to: e.currentIndex})
  }

  onTabClick(tab: TabComponent) {
    this.tabClicked.emit(tab);
  }

  onTabEdit(tab: TabComponent) {
    this.tabEdit.emit(tab);
  }

  onTabRemove(tab: TabComponent) {
    this.tabRemove.emit(tab);
  }
  
  selectTab(tab: TabComponent) {
    if (tab?.disabled) return;
    if (this.confirmSwitchTab) {
      const confirmSubr = this.confirmed$.subscribe((isConfirmed: boolean) => {
        if (isConfirmed) {
          // deactivate all tabs
          this.tabs.toArray().forEach(tabItem => (tabItem.active = false));
          // activate the tab the user has clicked on.
          //this.getLogData(tab.title, tab.trnsctnId, tab.ProcessType, tab.ChildProcessName);
          this.getLogData(tab.title);
          tab.active = true;
        }
      });
      this.unsubscribe.push(confirmSubr);
    } else {
      // deactivate all tabs
      this.tabs.toArray().forEach(tabItem => (tabItem.active = false));
      // activate the tab the user has clicked on.
      if(!!tab && !!tab.title){          
      this.getLogData(tab.title);    
      tab.active = true;
      }
    }
    if(!!tab && !!tab.title){
    this.tabSelected.emit(tab);
    }
  }

  getLogData(title: string, trnsctnId?: string, ProcessType?: any, ChildProcessName?: any) {
    this.unsubscribe.push(
      this.route.paramMap.subscribe(params => {
        
        if (title) {  
             return;
        }
      })
    );
  }


  OpenAddPopup(bm:any){
    if(bm){

    }
  }
}
