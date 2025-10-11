import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: 'app-tree-list-item-tmp',
    standalone: true,
})
export class TreeListItemDirective {
  constructor(public tempalte: TemplateRef<any>) {}
 }