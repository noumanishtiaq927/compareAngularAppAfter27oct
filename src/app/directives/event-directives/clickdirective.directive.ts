import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickdirective]'
})
export class ClickdirectiveDirective{

  constructor(private renderer: Renderer2 , private element: ElementRef) { }
@HostListener('click') onclick(event: Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      'red'
    )
    }
}
