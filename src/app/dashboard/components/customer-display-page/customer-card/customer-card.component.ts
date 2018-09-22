import { Component, Input, OnInit } from '@angular/core'
import { Customer } from '../../../models'

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styles: []
})
export class CustomerCardComponent implements OnInit {
  @Input()
  public customer: Customer | null = null

  public title = ''

  public ngOnInit(): void {
    if (!!this.customer) this.title = this.customer.type
  }
}
