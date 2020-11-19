import { Directive, ElementRef, HostListener, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEvencolor]'
})
export class EvencolorDirective {
  selfref: ElementRef;
  constructor(eref: ElementRef) {

    eref.nativeElement.style.backgroundColor = "yellow";
    this.selfref = eref;

   }

   ngOnChanges(changes: SimpleChanges){

    this.selfref.nativeElement.style.backgroundColor = "green";

  }

//   @HostListener('mouseenter') onMouseEnter() {
//   this.highlight('yellow');
// }

// @HostListener('mouseleave') onMouseLeave() {
//   this.highlight(null);
// }

// private highlight(color: string) {
//   this.selfref.nativeElement.style.backgroundColor = color;
// }


}