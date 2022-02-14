import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() element: any ;

  constructor(private elm : ElementRef) { 

  }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.element == 'type'){
      this.elm.nativeElement.style.textDecoration= 'underline';
    }else if (this.element == 'tag'){
      this.elm.nativeElement.style.fontWeight= 'bold';
    }

  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.element == 'type'){
      this.elm.nativeElement.style.textDecoration= 'none';
    }else if (this.element == 'tag'){
      this.elm.nativeElement.style.fontWeight= 'normal';
    }

  }


}
