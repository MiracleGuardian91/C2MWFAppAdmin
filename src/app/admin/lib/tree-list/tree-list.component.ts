import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { TreeListItemDirective } from './tree-list-item.directive';
import { NgFor, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
    selector: 'app-tree-list',
    templateUrl: './tree-list.component.html',
    styleUrls: ['./tree-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CdkDropList,
        NgFor,
        NgTemplateOutlet,
        CdkDrag,
        NgIf,
        CdkDragHandle,
    ],
})
export class TreeListComponent<T> {
  @ContentChild(TreeListItemDirective, { read: TemplateRef }) treeListItemTemplate: TemplateRef<any>;
  @Output() readonly action = new EventEmitter<T>();
  @Output() readonly reorder = new EventEmitter<T[]>();
  @Output() readonly itemRemoved = new EventEmitter<T>();
  @Input() height = 210;
  @Input() dragDrop = false;
  @Input() displayWith = (item: T) => String(item);
  @Input() checkWith = (_: T) => '';
  @Input() disableWith = (item: T) => false;
  @Input() canDelete: boolean = false;
  @Input()
  set items(items: T[]) {
    this._items = items;
  }
  get items() {
    return this._items;
  }

  private _items: T[] = [];

  onAction(item: T) {
    this.action.emit(item);
  }

  drop(event: CdkDragDrop<T>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.reorder.emit(this.items);
  }
  onItemRemoved(item :  T){
   this.itemRemoved.emit(item);
  }
}
