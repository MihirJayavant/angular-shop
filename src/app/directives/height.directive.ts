import { Directive, HostListener, Input, HostBinding, OnInit } from '@angular/core'

@Directive({
    selector: '[sharedHeight]',
    standalone: true
})
export class HeightDirective implements OnInit {
  @Input('sharedHeight') reducedAmount = 0

  @HostBinding('style.height.px') height = 100

  public ngOnInit() {
    this.height = window.innerHeight - this.reducedAmount
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const h = event.target.innerHeight
    this.height = h - this.reducedAmount
  }
}
