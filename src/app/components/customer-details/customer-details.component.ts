import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CustomerViewModel } from 'src/core/customer.viewmodel'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  selector: 'app-customer-details',
  standalone: true,
  templateUrl: './customer-details.component.html',
})
export class CustomerDetailsComponent {
  public customer = input<CustomerViewModel | undefined | null>(null)

  public isLoaded = computed(() => Boolean(this.customer()))
}
