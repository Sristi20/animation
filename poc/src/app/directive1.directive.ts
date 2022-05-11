import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  @Input() appDirective1=''
  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appDirective1);
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    
    this.highlight('');
  }
  highlight(color:string){
  this.ele.nativeElement.style.backgroundColor=color
  }

}

