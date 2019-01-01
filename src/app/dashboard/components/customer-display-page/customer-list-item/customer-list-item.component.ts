import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Customer } from 'src/app/dashboard/models'

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListItemComponent {
  @Input()
  public customer?: Customer

  @Output()
  public select = new EventEmitter<Customer>()

  public onclick() {
    this.select.emit(this.customer)
  }
}
