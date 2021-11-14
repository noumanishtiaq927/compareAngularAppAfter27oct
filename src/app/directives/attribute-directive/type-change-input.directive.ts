import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTypeChangeInput]'
})
export class TypeChangeInputDirective implements AfterViewInit{

  private _shown = false;

  constructor(private el: ElementRef) {
   
  }
  ngAfterViewInit(){
    this.setup()
  }

  setup(){
     const parent : HTMLElement = this.el.nativeElement.parentNode.parentNode;
    
    console.log(parent)
    const span = document.createElement('div')
      
      // `<div class="mat-form-field-suffix ng-tns-c98-1 ng-star-inserted">
     
      // </div>`
      
    span.setAttribute('class','mat-form-field-suffix ng-tns-c98-1 ng-star-inserted')
    span.innerHTML = ` <mat-icon _ngcontent-qgr-c141="" 
      role="img" matsuffix="" class="mat-icon 
      notranslate material-icons mat-icon-no-color ng-tns-c98-1" 
      aria-hidden="true" data-mat-icon-type="font">visibility_off
      </mat-icon> `;
      span.style.cursor ='pointer'
    span.addEventListener('click', () => {
      this.toggle(span);
    });
    parent?.appendChild(span);
  }
  toggle(span: HTMLElement) {
    if (this._shown) {
      console.log(this.el.nativeElement)
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = `<mat-icon _ngcontent-qgr-c141="" 
      role="img" matsuffix="" class="mat-icon 
      notranslate material-icons mat-icon-no-color ng-tns-c98-1" 
      aria-hidden="true" data-mat-icon-type="font">visibility
      </mat-icon>`;
       this._shown = false;
    } else {
      console.log(this.el.nativeElement)
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = `<mat-icon _ngcontent-qgr-c141="" 
      role="img" matsuffix="" class="mat-icon 
      notranslate material-icons mat-icon-no-color ng-tns-c98-1" 
      aria-hidden="true" data-mat-icon-type="font">visibility_off
      </mat-icon>`;
    this._shown = true
    }
  }

}
