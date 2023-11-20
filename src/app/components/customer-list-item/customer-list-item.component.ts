import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Customer } from 'src/core/customer'
import { CustomerViewModel, convertToCustomerViewModel } from 'src/core/customer.viewmodel'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class CustomerListItemComponent {
  public _customer!: CustomerViewModel

  @Input()
  public set customer(value: Customer) {
    this._customer = convertToCustomerViewModel(value)
  }

  @Output()
  public select = new EventEmitter<CustomerViewModel>()

  public onclick() {
    this.select.emit(this._customer)
  }
}
