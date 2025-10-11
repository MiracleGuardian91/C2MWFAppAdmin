import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appResizable]',
    standalone: true
})
export class ResizableDirectiveDirective {
  @Input() resizableGrabWidth = 10;
  @Input() resizableMinWidth = 30;
  @Output() widthChanged = new EventEmitter<string>();

  private dragging = false;
  private resizingFrom: 'left' | 'right' | null = null;
  private startX = 0;
  private startWidth = 0;
  private startLeft = 0;

  constructor(private readonly el: ElementRef) {
    const preventGlobalMouseEvents = () => (document.body.style.pointerEvents = 'none');
    const restoreGlobalMouseEvents = () => (document.body.style.pointerEvents = 'auto');

    const mouseMove = (evt: MouseEvent) => {
      if (!this.dragging || !this.resizingFrom) return;

      const deltaX = evt.clientX - this.startX;
      const nativeEl = this.el.nativeElement;
      const parentEl = nativeEl.parentElement;

      let newWidth = this.startWidth;

      if (this.resizingFrom === 'right') {
        newWidth += deltaX;
      } else if (this.resizingFrom === 'left') {
        newWidth -= deltaX;
        const newLeft = this.startLeft + deltaX;

        if (newWidth >= this.resizableMinWidth && newLeft >= 0) {
          nativeEl.style.left = `${newLeft}px`;
        }
      }

      const parentWidth = parentEl.clientWidth;
      newWidth = Math.max(this.resizableMinWidth, Math.min(newWidth, parentWidth));

      const percentageWidth = (newWidth / parentWidth) * 100;
      nativeEl.style.width = `${percentageWidth}%`;

      evt.stopPropagation();
    };

    const mouseUp = (evt: MouseEvent) => {
      if (!this.dragging) return;
      restoreGlobalMouseEvents();
      this.dragging = false;
      this.resizingFrom = null;

      const currentWidth = this.el.nativeElement.style.width;
      this.widthChanged.emit(currentWidth);
      evt.stopPropagation();
    };

    const mouseDown = (evt: MouseEvent) => {
      const edge = this.inDragRegion(evt);
      if (edge) {
        this.dragging = true;
        this.resizingFrom = edge;
        this.startX = evt.clientX;
        this.startWidth = this.el.nativeElement.clientWidth;
        this.startLeft = this.el.nativeElement.offsetLeft;
        preventGlobalMouseEvents();
        evt.stopPropagation();
      }
    };

    const mouseMoveCursor = (evt: MouseEvent) => {
      const edge = this.inDragRegion(evt);
      this.el.nativeElement.style.cursor = edge ? 'col-resize' : 'default';
    };

    document.addEventListener('mousemove', mouseMove, true);
    document.addEventListener('mouseup', mouseUp, true);
    this.el.nativeElement.addEventListener('mousedown', mouseDown, true);
    this.el.nativeElement.addEventListener('mousemove', mouseMoveCursor, true);
  }

  private inDragRegion(evt: MouseEvent): 'left' | 'right' | null {
    const bounds = this.el.nativeElement.getBoundingClientRect();
    const offsetX = evt.clientX - bounds.left;
    if (offsetX < this.resizableGrabWidth) {
      return 'left';
    } else if (offsetX > this.el.nativeElement.clientWidth - this.resizableGrabWidth) {
      return 'right';
    }
    return null;
  }
}
