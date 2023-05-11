import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Customer } from 'src/app/dashboard/models'
import { CustomerViewModel, convertToCustomerViewModel } from 'src/app/dashboard/view-models'

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
