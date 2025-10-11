import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DmoConditionService {
//Gh
    constructor(private api: ApiService) { 
        this.initialize();
    }
    dataChange = new BehaviorSubject<TodoItemNode[]>([]);
    get data(): TodoItemNode[] { return this.dataChange.value; }
    initialize() {     
      const data = this.buildFileTree(TREE_DATA, 0);
      // Notify the change.
      this.dataChange.next(data);
    }  
    buildFileTree(obj:any, level: number): TodoItemNode[] {      
      return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
        const value = obj[key];
        const node = new TodoItemNode();
        node.item = key;
        const arr = Object.entries(obj);
        const arr1 = arr[1];
  
        if (value != null) {
          if (typeof value === 'object') {
            node.children = this.buildFileTree(value, level + 1);
          } else {
            node.item = value;
          }
        }
  
        return accumulator.concat(node);
      }, []);
    }
    /** Add an item to to-do list */
    insertItem(parent: TodoItemNode, name: string) {
      if (parent.children) {
        parent.children.push({item: name} as TodoItemNode);
        this.dataChange.next(this.data);
      }
    }
    updateItem(node: TodoItemNode, name: string) {
      node.item = name;
      this.dataChange.next(this.data);
    } 
    
    
}
export class TodoItemNode {
    children: TodoItemNode[];
    item: string;
    itemVal:any;
  }
  
  /** Flat to-do item node with expandable and level information */
  export class TodoItemFlatNode {
    item: string;
    level: number;
    expandable: boolean;
  }
  
  const TREE_DATA = {
    Groceries: {
      'Almond Meal flour': null,
      'Organic eggs': null,
      'Protein Powder': null,
      Fruits: {
        Apple: null,
        Berries: ['Blueberry', 'Raspberry'],
        Orange: null
      }
    },
    Reminders: [
      'Cook dinner',
      'Read the Material Design spec',
      'Upgrade Application to Angular'
    ]
  };