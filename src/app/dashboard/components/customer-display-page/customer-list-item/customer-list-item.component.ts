import { Component, Input } from '@angular/core'
import { Customer } from 'src/app/dashboard/models'

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html'
})
export class CustomerListItemComponent {
  @Input()
  public set customer(c: Customer) {
    c.avatar = c.avatar ? c.avatar : 'https://bulma.io/images/placeholders/64x64.png'
    this._customer = c
  }

  public _customer?: Customer
}
