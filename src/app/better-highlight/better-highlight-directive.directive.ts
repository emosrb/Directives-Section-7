import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  this.backgroundColor='blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  this.backgroundColor='transparent';
  }

}
