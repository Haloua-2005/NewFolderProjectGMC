import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  @Input() in = 'red'
  @Input() out = 'royalblue'

  @HostBinding('style.color') Color = this.in;
  @HostBinding('style.border-color') bc ;

  randomColor():string {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  @HostListener('keyup') Enter() {
    this.Color = this.randomColor()
    this.bc = this.randomColor()
  }

  @HostListener('mouseenter') Inside() {
    this.Color = this.in
  }

  @HostListener('mouseleave') Outside() {
    this.Color = this.out
  }

}
