import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';

type Mode = 'Edit' | 'Published';

@Component({
    selector: 'app-dm-menu',
    templateUrl: './dm-menu.component.html',
    styleUrls: ['./dm-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgbDropdown, NgbDropdownToggle, NgIf, NgbDropdownMenu, NgFor, NgbDropdownItem]
})
export class DmMenuComponent {
  @Output() readonly newVersion = new EventEmitter();
  @Output() readonly generateXml = new EventEmitter();
  @Output() readonly modeChange = new EventEmitter<Mode>();

  @Input()
  set mode(mode: Mode) {
    this._mode = mode;
  }
  get mode() {
    return this._mode;
  }
  
  private _mode: Mode;

}
