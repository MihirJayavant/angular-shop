/* eslint-disable no-magic-numbers */
import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appSharedHeight]',
  standalone: true,
})
export class HeightDirective implements OnInit {
  @Input() reducedAmount = 0

  @HostBinding('style.height.px') height = 100

  public ngOnInit() {
    this.height = window.innerHeight - this.reducedAmount
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const height = event.target.innerHeight
    this.height = height - this.reducedAmount
  }
}
