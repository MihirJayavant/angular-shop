import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgIf } from '@angular/common'
import { CustomerViewModel } from 'src/core/customer.viewmodel'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class CustomerDetailsComponent {
  public _customer!: CustomerViewModel
  public isLoaded = false

  @Input()
  public set customer(value: CustomerViewModel | undefined) {
    if (!!value) {
      this._customer = value
      this.isLoaded = true
    } else this.isLoaded = false
  }
}
