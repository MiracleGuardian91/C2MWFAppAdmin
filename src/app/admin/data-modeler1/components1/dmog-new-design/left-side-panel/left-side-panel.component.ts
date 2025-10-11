import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PanelMainContainer, SideNavModel } from '@app/admin/data-modeler1/models1';
import { NgIf } from '@angular/common';
import { DmogSettingsComponent } from '../../dmog-settings/dmog-settings.component';
import { ContierParentRowSettingsComponent } from '../contier-parent-row-settings/contier-parent-row-settings.component';
import { ContainerColumnSettingsComponent } from '../container-column-settings/container-column-settings.component';
import { DmogSubRowSettingsComponent } from '../dmog-sub-row-settings/dmog-sub-row-settings.component';
import { DmogSubColumnSettingsComponent } from '../dmog-sub-column-settings/dmog-sub-column-settings.component';

@Component({
    selector: 'app-left-side-panel',
    templateUrl: './left-side-panel.component.html',
    styleUrls: ['./left-side-panel.component.scss'],
    standalone: true,
    imports: [NgIf, DmogSettingsComponent, ContierParentRowSettingsComponent, ContainerColumnSettingsComponent, DmogSubRowSettingsComponent, DmogSubColumnSettingsComponent]
})
export class LeftSidePanelComponent implements OnInit {
  @Output() drawerToggle = new EventEmitter<void>();
  @Output() UpdatedDataForSidepanle: EventEmitter<any> = new EventEmitter<any>();  
  @Input() selectedItemFromchild:any;
  isDrawerOpen = false;
 @ Input() sideNavModel:SideNavModel;
 updatedData:any;
 selectedItems:any;
  @Input() isDraggingStart:any;
  DraggingStatus:any;
 //transform: translateY(97%);
expandedIndex = 0;
  constructor() {}

  ngOnInit(): void {
  
  }

 ngOnChanges(changes: SimpleChanges) {
    if(this.selectedItemFromchild){
      this.selectedItems = this.selectedItemFromchild;
    }
    if(changes.isDraggingStart && changes.isDraggingStart.previousValue!= changes.isDraggingStart.currentValue){
      this.DraggingStatus =  this.isDraggingStart;
    }
 }

  onDrawerToggle() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerToggle.emit();
  }
  
  updatedDataForParent(event)
  {
     if(event){
      this.updatedData = event;
      this.UpdatedDataForSidepanle.emit(this.updatedData);
    }
  }


  
}
