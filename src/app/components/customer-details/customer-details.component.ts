/* eslint-disable accessor-pairs */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgIf, NgOptimizedImage } from '@angular/common'
import { CustomerViewModel } from 'src/core/customer.viewmodel'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgOptimizedImage],
  selector: 'app-customer-details',
  standalone: true,
  templateUrl: './customer-details.component.html',
})
export class CustomerDetailsComponent {
  public customerData!: CustomerViewModel

  public isLoaded = false

  @Input({ required: true })
  public set customer(value: CustomerViewModel | null | undefined) {
    if (value) {
      this.customerData = value
      this.isLoaded = true
    } else this.isLoaded = false
  }
}
