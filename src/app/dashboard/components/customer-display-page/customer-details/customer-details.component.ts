import { Component, Input } from '@angular/core'
import { Customer } from 'src/app/dashboard/models'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent {
  @Input()
  public customer?: Customer
}
