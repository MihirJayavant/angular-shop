import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Customer } from '../../../models'

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardComponent implements OnInit {
  @Input()
  public customer!: Customer

  public title = ''

  public ngOnInit(): void {
    if (!!this.customer) this.title = this.customer.type
  }
}
