import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appClickedHighlight]',
})
export class ClickedHighlightDirective {
  constructor(private elementRef: ElementRef) {}
  @Input('appClickedHighlight') highlightColor!: string;

  // decorator allows us to bind properties to the host element.
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent';
  // decorator allows us to attach event listeners to the host element.
  @HostListener('click') onClick() {
    this.elementRef.nativeElement.style.backgroundColor === 'transparent'
      ? (this.backgroundColor = this.highlightColor || 'green')
      : (this.backgroundColor = 'transparent');
  }
}
