import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BM, ObjectClass } from '../../classes';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-dm-breadcrumbs',
    templateUrl: './dm-breadcrumbs.component.html',
    standalone: true,
    imports: [NgFor, NgIf],
})
export class DmBreadcrumbsComponent {
  @Output() readonly select = new EventEmitter<ObjectClass>();
  @Input()
  set bm(bm: BM) {
    this._bm = bm;
  }
  get bm() {
    return this._bm;
  }

  private _bm: BM;
}
