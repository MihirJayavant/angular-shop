import { Component, Input } from '@angular/core'
import { Customer } from 'src/app/dashboard/models'

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html'
})
export class CustomerListItemComponent {
  @Input()
  public customer?: Customer
}
