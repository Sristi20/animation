import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  @Input() appDirective2=''
  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appDirective2);
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    
    this.highlight('');
  }
  highlight(color:string){
  this.ele.nativeElement.style.backgroundColor=color
  }


}
