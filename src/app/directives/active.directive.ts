/* eslint-disable accessor-pairs */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appActive]',
  standalone: true,
})
export class ActiveDirective {
  @Input()
  set isActive(value: boolean) {
    if (value) this.renderer.addClass(this.el.nativeElement, 'is-active')
    else this.renderer.removeClass(this.el.nativeElement, 'is-active')
  }

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}
}
