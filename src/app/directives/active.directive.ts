import { Directive, ElementRef, Renderer2, effect, input } from '@angular/core'

@Directive({
  selector: '[appActive]',
  standalone: true,
})
export class ActiveDirective {
  appActive = input(false)

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {
    effect(() => {
      if (this.appActive()) this.renderer.addClass(this.el.nativeElement, 'is-active')
      else this.renderer.removeClass(this.el.nativeElement, 'is-active')
    })
  }
}
