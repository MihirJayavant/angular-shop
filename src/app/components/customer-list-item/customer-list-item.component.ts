/* eslint-disable accessor-pairs */
import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { CustomerViewModel, convertToCustomerViewModel } from 'src/core/customer.viewmodel'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  selector: 'app-customer-list-item',
  standalone: true,
  templateUrl: './customer-list-item.component.html',
})
export class CustomerListItemComponent {
  public customer = input.required({ transform: convertToCustomerViewModel })

  public selectCustomer = output<CustomerViewModel>()

  public onclick() {
    this.selectCustomer.emit(this.customer())
  }
}
