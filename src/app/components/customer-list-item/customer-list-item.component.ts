/* eslint-disable accessor-pairs */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CustomerViewModel, convertToCustomerViewModel } from 'src/core/customer.viewmodel'
import { Customer } from 'src/core/customer'
import { NgOptimizedImage } from '@angular/common'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  selector: 'app-customer-list-item',
  standalone: true,
  templateUrl: './customer-list-item.component.html',
})
export class CustomerListItemComponent {
  public customerData!: CustomerViewModel

  @Input({ required: true })
  public set customer(value: Customer) {
    this.customerData = convertToCustomerViewModel(value)
  }

  @Output()
  public selectCustomer = new EventEmitter<CustomerViewModel>()

  public onclick() {
    this.selectCustomer.emit(this.customerData)
  }
}
