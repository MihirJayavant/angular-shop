import { Component, ChangeDetectionStrategy, OnInit, signal } from '@angular/core'
import { CustomerType } from '../../models'
import { customerTypeNames } from '../../dashboard.helpers'
import { CustomerViewModel } from '../../view-models'
import { DataService } from '../../services'
import { AsyncDataStateType } from 'src/app/models'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDisplayPageComponent implements OnInit {
  public searchText = signal('')
  public customerType = signal('All')
  public customerTypeNames = ['All', ...customerTypeNames]
  public customers = toSignal(this.dataService.getCustomers(), { initialValue: [] })
  public customerDataState = toSignal(this.dataService.getCustomerDataState(), {
    initialValue: AsyncDataStateType.INITIAL,
  })
  public selectedCustomer = signal<CustomerViewModel | undefined>(undefined)

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    if (this.customerDataState() === AsyncDataStateType.INITIAL) this.dataService.loadCustomers()
  }

  public onTypeChange(event: any) {
    const value = event.srcElement.value

    switch (value) {
      case 'All':
        this.customerType.set('All')
        break
      case CustomerType.basic:
        this.customerType.set(CustomerType.basic)
        break
      case CustomerType.lead:
        this.customerType.set(CustomerType.lead)
        break
    }
  }

  public onClick(item: CustomerViewModel) {
    this.selectedCustomer.set(item)
  }
}
