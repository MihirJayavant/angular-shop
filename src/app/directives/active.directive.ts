import { Directive, ElementRef, Renderer2, Input } from '@angular/core'

@Directive({
    selector: '[sharedActive]',
    standalone: true
})
export class ActiveDirective {
  @Input('sharedActive')
  set isActive(value: boolean) {
    if (value) this.renderer.addClass(this.el.nativeElement, 'is-active')
    else this.renderer.removeClass(this.el.nativeElement, 'is-active')
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
