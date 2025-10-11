import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { NgIf } from '@angular/common';
import { TreeListComponent } from '../tree-list/tree-list.component';
@Component({
    selector: 'app-association',
    templateUrl: './association.component.html',
    styleUrls: ['./association.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, TreeListComponent],
})
export class AssociationComponent<T> {
  /** Emit currently selected items */
  @Output() readonly select = new EventEmitter<T[]>();
  /** Emit when selected items are reordered */
  @Output() readonly reorder = new EventEmitter<T[]>();
  /** Emit last added item */
  @Output() readonly add = new EventEmitter<T>();
  /** Emit last removed item */
  @Output() readonly remove = new EventEmitter<T>();
  /** Item property that detects if it's selected (checked) */
  @Input() checkBy: string;
  /** Item propertly that detects if it's disabled */
  @Input() disableBy: string;
  /** Function that determinies uniqueness of item */
  @Input() uniqueWith = (item: T) => String(item);
  /** Function that determines how item should be displayed in the tree list */
  @Input() displayWith = (item: T) => String(item);
  /** Determine if item can be added to selected list
   * Useful when result depends on the api response
   */
  @Input() shouldAdd = (item: T) => of(true);
  /** Determine if item can be removed from selected list
   * Useful when result depends on the api response
   */
  @Input() shouldRemove = (item: T) => of(true);
  /** Determine visibility of 'Select All' and 'Clear All' */
  @Input() checkAll = true;
  /** List of selected items */
  @Input() set associatedItems(items: T[]) {
    this.selectedItems = items;
  }

   @Output() readonly itemRemoved = new EventEmitter<T>();
  @Input()
  /** List of all items */
  set items(items: T[]) {
    this._allItems = items;
  }

   @Input() canDelete = false;
  get allItems() {
    return this._allItems.slice();
  }

  public selectedItems: T[] = [];
  private _allItems: T[] = [];

  checkWith = (item: T) => (item[this.checkBy] ? 'Added' : 'Add');

  checkWithSelected = (item: T) => (item[this.checkBy] ? 'Remove' : '');

  disableWith = (item: T) => this.disableBy && item[this.disableBy];

  onAction = async (item: T) => {
    const original = this._allItems.find((rec) => this.uniqueWith(item) === this.uniqueWith(rec));
    if (!original[this.checkBy]) {
      const yes = await firstValueFrom(this.shouldAdd(item));
      if (yes) {
        this.selectedItems = this.selectedItems.concat(original);
        this.add.emit(original);
        original[this.checkBy] = 1;
        this.select.emit(this.selectedItems);
      }
    } else {
      const remove = await firstValueFrom(this.shouldRemove(item));
      if (remove) {
        this.selectedItems = this.selectedItems.filter((selected) => this.uniqueWith(selected) !== this.uniqueWith(item));
        this.remove.emit(original);
        original[this.checkBy] = 0;
        this.select.emit(this.selectedItems);
      }
    }
  };

  toggleSelected = (selected: boolean) => {
    this.items = this._allItems.map((item) => ({ ...item, [this.checkBy]: selected }));
    this.associatedItems = selected ? this._allItems : [];
    this.select.emit(this.selectedItems);
  };

  onItemRemoved(item : T){
    this.itemRemoved.emit(item);
  }
}
