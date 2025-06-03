import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appResizable]',
})
export class ResizableDirective implements OnInit {
  private resizer: HTMLElement | undefined = undefined;
  private dragging = false;
  private startX = 0;
  private startWidth = 0;

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  ngOnInit(): void {
    this.createResizerHandle();
  }

  private createResizerHandle(): void {
    this.resizer = this.renderer.createElement('div');
    this.renderer.addClass(this.resizer, 'resize-handle');

    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.appendChild(this.el.nativeElement, this.resizer);

    this.renderer.listen(this.resizer, 'mousedown', this.initResize);
  }

  private readonly initResize = (event: MouseEvent): void => {
    this.dragging = true;
    this.startX = event.clientX;
    this.startWidth = this.el.nativeElement.offsetWidth;

    this.renderer.addClass(document.body, 'unselectable');
    document.addEventListener('mousemove', this.resizeElement);
    document.addEventListener('mouseup', this.stopResize);
  };

  private readonly resizeElement = (event: MouseEvent): void => {
    if (!this.dragging) return;

    const dx = event.clientX - this.startX;
    let newWidth = this.startWidth + dx;

    // Get computed styles for min/max-width
    const styles = window.getComputedStyle(this.el.nativeElement);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const minWidth = parseFloat(styles.minWidth) || 0;
    const maxWidth = parseFloat(styles.maxWidth) || Infinity;

    // Clamp width
    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
  };

  private readonly stopResize = (): void => {
    this.dragging = false;
    document.removeEventListener('mousemove', this.resizeElement);
    document.removeEventListener('mouseup', this.stopResize);
    this.renderer.removeClass(document.body, 'unselectable');
  };
}
