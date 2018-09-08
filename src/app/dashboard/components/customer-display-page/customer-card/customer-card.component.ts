import { Component, Input, OnInit } from '@angular/core'
import { Customer } from '../../../models'
import { mapCustomerToTitle } from '../../../helpers'

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styles: []
})
export class CustomerCardComponent implements OnInit {
  @Input()
  public customer: Customer

  public title = ''

  public ngOnInit(): void {
    this.title = mapCustomerToTitle(this.customer)
  }
}
