import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PanelMainRow } from '../models1';
import { Subject } from 'rxjs';
import { skipIfDisabled } from '../decorators/skipIfDisabled.decorator';

@Directive({
    selector: '[columnResize]',
    exportAs: 'columnResize',
    standalone: true
})
export class ResizeColumnsDirective implements AfterViewInit {
    @Input() rows: PanelMainRow[];
    @Input() rowIndex: number = -1;
    @Input() columnResizeEnabled = true;
    @Output() onResize = new EventEmitter<{
        columns: any,
        rowIndex: number
    }>();
    
    isResizing = false;
    currentBoxIndex = 0;
    startX = 0;
    startWidth = 0;
    private childDivs!: HTMLElement[];
    private animationFrameId: number | null = null;
    private containerWidth: number = 0;

    constructor(private readonly el: ElementRef) {}

    @skipIfDisabled
    ngAfterViewInit(): void {
        this.childDivs = this.el.nativeElement.querySelectorAll('.box');
        if (this.childDivs.length > 0) {
            this.childDivs.forEach((childDiv, index) => {
                childDiv.addEventListener('mousedown', (event) => this.mousedownHandler(event, index));
            });
        }
        this.containerWidth = this.el.nativeElement.offsetWidth;
    }

    @skipIfDisabled
    stopResize() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.isResizing = false;
    }

    mousedownHandler(event: MouseEvent, colIndex: number) {
        const isResizeHandle = (event.target as HTMLElement)?.classList.contains('resizer');
        if (isResizeHandle) {
            this.isResizing = true;
            this.currentBoxIndex = colIndex;
            this.startX = event.clientX;
            this.startWidth = this.rows[this.rowIndex].columns[colIndex]?.width;
            this.containerWidth = this.el.nativeElement.offsetWidth;
            event.preventDefault();
        }
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event: MouseEvent) {
        this.stopResize();
    }

    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        if (this.isResizing) {
            this.onResize.emit({
                columns: this.rows[this.rowIndex].columns,
                rowIndex: this.rowIndex
            });
        }
        this.stopResize();
    }

    @skipIfDisabled
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (!this.isResizing) return;

        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        this.animationFrameId = requestAnimationFrame(() => {
            const minWidth = 10;
            const dx = event.clientX - this.startX;
            
            const newWidthPx = (this.startWidth * this.containerWidth / 100) + dx;
            const newWidth = (newWidthPx / this.containerWidth) * 100;

            let rightBoxesWidth = 0;
            for (let i = this.currentBoxIndex + 1; i < this.rows[this.rowIndex].columns.length; i++) {
                rightBoxesWidth += this.rows[this.rowIndex].columns[i]?.width;
            }

            const maxWidth = 100 -
                this.rows[this.rowIndex].columns.slice(0, this.currentBoxIndex).reduce((sum, box) => sum + box.width, 0) -
                (this.rows[this.rowIndex].columns.length - this.currentBoxIndex - 1) * 10;

            const constrainedWidth = Math.max(
                minWidth,
                Math.min(newWidth, maxWidth)
            );

            const delta = constrainedWidth - this.rows[this.rowIndex].columns[this.currentBoxIndex]?.width;

            this.rows[this.rowIndex].columns[this.currentBoxIndex] ??= {};
            this.rows[this.rowIndex].columns[this.currentBoxIndex].width = constrainedWidth;

            if (rightBoxesWidth > 0) {
                for (let i = this.currentBoxIndex + 1; i < this.rows[this.rowIndex].columns.length; i++) {
                    this.rows[this.rowIndex].columns[i] ??= {};
                    const ratio = this.rows[this.rowIndex].columns[i]?.width / rightBoxesWidth;
                    this.rows[this.rowIndex].columns[i].width = Math.max(minWidth, this.rows[this.rowIndex].columns[i]?.width - (delta * ratio));
                }
            }
        });
    }
}