"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(eRef, shiftService) {
        this.eRef = eRef;
        this.shiftService = shiftService;
        this.weekday = null;
        this.showContextMenuFor = null;
        this.contextMenuPosition = null;
        this.contextMenuPositiontest = { x: '0px', y: '0px' };
        this.contextMenuSelected = new core_1.EventEmitter();
        //rightClickMenuPositionX: number = 0;
        //rightClickMenuPositionY: number = 0;
        this.contextMenuItems = [];
        this.showContextMenu = false;
        this.contextMenuItems = [
            {
                menuText: 'Add',
                menuEvent: 'Add Shift',
                menuIcon: 'fa-solid fa-plus'
            },
            {
                menuText: 'Copy',
                menuEvent: 'Copy Shift',
                menuIcon: 'fa-solid fa-copy'
            },
            {
                menuText: 'Paste',
                menuEvent: 'Paste Shift',
                menuIcon: 'fa-solid fa-paste'
            },
            {
                menuText: 'Delete',
                menuEvent: 'Delete Shift',
                menuIcon: 'fa fa-trash'
            },
        ];
    }
    ContextMenuComponent.prototype.ngOnChanges = function () {
        //var shifts: CopyShift[] = this.shiftService.getCopyShifts();
        if (this.showContextMenuFor == this.weekday) {
            this.showContextMenu = true;
        }
        if (this.contextMenuPosition) {
            // show context menu if there are shifts in copy object
            //if (shifts.length != 0) {
            //  this.showContextMenu = true;
            //}
            //this.rightClickMenuPositionX = this.contextMenuPosition.rightClickMenuPositionX;
            //this.rightClickMenuPositionY = this.contextMenuPosition.rightClickMenuPositionY;
            this.contextMenuPositiontest.x = (this.contextMenuPosition.rightClickMenuPositionX) + 'px';
            this.contextMenuPositiontest.y = (this.contextMenuPosition.rightClickMenuPositionY) + 'px';
        }
    };
    ContextMenuComponent.prototype.clickout = function (event) {
        if (event.target.classList.contains('menu-link')) {
            this.showContextMenu = false;
        }
        if (event.target.classList.contains('holiday')) {
            this.showContextMenu = event.target.closest('.shiftDay').contains(this.eRef.nativeElement);
        }
        else if (!event.target.classList.contains("shiftLabel")) {
            this.showContextMenu = event.target.contains(this.eRef.nativeElement);
        }
    };
    ContextMenuComponent.prototype.onContextMenuClick = function (event, data) {
        this.contextMenuSelected.emit({ option: data, showContextMenuFor: this.showContextMenuFor });
    };
    __decorate([
        (0, core_1.Input)()
    ], ContextMenuComponent.prototype, "weekday", void 0);
    __decorate([
        (0, core_1.Input)()
    ], ContextMenuComponent.prototype, "showContextMenuFor", void 0);
    __decorate([
        (0, core_1.Input)()
    ], ContextMenuComponent.prototype, "contextMenuPosition", void 0);
    __decorate([
        (0, core_1.Output)()
    ], ContextMenuComponent.prototype, "contextMenuSelected", void 0);
    ContextMenuComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-contextMenu',
            animations: [
                (0, animations_1.trigger)('enterAnimation', [
                    (0, animations_1.transition)(':enter', [
                        (0, animations_1.style)({ transform: 'translateY(1%)', opacity: 0 }),
                        (0, animations_1.animate)('200ms', (0, animations_1.style)({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    (0, animations_1.transition)(':leave', [
                        (0, animations_1.style)({ transform: 'translateY(0)', opacity: 1 }),
                        (0, animations_1.animate)('200ms', (0, animations_1.style)({ transform: 'translateY(1%)', opacity: 0 }))
                    ])
                ])
            ],
            templateUrl: './contextMenu.component.html',
            styleUrls: ['./contextMenu.component.css']
        })
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());
exports.ContextMenuComponent = ContextMenuComponent;
//# sourceMappingURL=contextMenu.component.js.map