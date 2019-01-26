import { Component, Input } from '@angular/core'
import { CustomerViewModel, getInitialState } from 'src/app/dashboard/view-models'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent {
  public _customer: CustomerViewModel = getInitialState()
  public isLoaded = false

  @Input()
  public set customer(value: CustomerViewModel | null) {
    if (!!value) {
      this._customer = value
      this.isLoaded = true
    } else this.isLoaded = false
  }
}
