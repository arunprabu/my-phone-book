import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizr]'
})
export class ColorizrDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {
    console.log("Inside constructor");
    console.log(this.elementRef.nativeElement);

    //Js way 
    //this.elementRef.nativeElement.style.backgroundColor = "yellow";

    //Angular's way
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '100px');

  }

}
