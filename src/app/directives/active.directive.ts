import { Directive, ElementRef, Renderer2, effect, inject, input } from '@angular/core'

@Directive({
  selector: '[appActive]',
  standalone: true,
})
export class ActiveDirective {
  private readonly el = inject(ElementRef)
  private readonly renderer = inject(Renderer2)

  appActive = input(false)

  constructor() {
    effect(() => {
      if (this.appActive()) this.renderer.addClass(this.el.nativeElement, 'is-active')
      else this.renderer.removeClass(this.el.nativeElement, 'is-active')
    })
  }
}
