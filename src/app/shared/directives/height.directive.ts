import { Directive, HostListener, Input, HostBinding } from '@angular/core'

@Directive({ selector: '[sharedHeight]' })
export class HeightDirective {
  @Input('sharedHeight') reducedAmount = 0

  @HostBinding('style.height.px') height = window.innerHeight - this.reducedAmount

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const h = event.target.innerHeight
    this.height = h - this.reducedAmount
  }
}
