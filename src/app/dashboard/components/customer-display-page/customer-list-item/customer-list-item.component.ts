import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Customer } from 'src/app/dashboard/models'
import { CustomerViewModel, getInitialState } from 'src/app/dashboard/view-models'

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListItemComponent {
  public _customer = getInitialState()

  @Input()
  public set customer(value: Customer) {
    this._customer = new CustomerViewModel(value)
  }

  @Output()
  public select = new EventEmitter<Customer>()

  public onclick() {
    this.select.emit(this._customer)
  }
}
