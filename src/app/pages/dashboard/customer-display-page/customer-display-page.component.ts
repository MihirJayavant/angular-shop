import { Component, ChangeDetectionStrategy, OnInit, signal } from '@angular/core'

import { DataService } from '../services'

import { toSignal } from '@angular/core/rxjs-interop'
import { FilterCustomerTypePipe } from '../pipes/filter-customer-type.pipe'
import { FilterCustomerNamePipe } from '../pipes/filter-customer-name.pipe'
import { CustomerDetailsComponent } from '../../../components/customer-details/customer-details.component'

import { CustomerListItemComponent } from '../../../components/customer-list-item/customer-list-item.component'

import { MasterItemDirective } from '../../../directives/master-item.directive'
import { NgFor } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MasterDetailComponent, MasterComponent, DetailComponent } from 'src/app/components'
import { MasterCaptionComponent } from 'src/app/components/master-detail/master-caption/master-caption.component'
import { AsyncDataStateType } from 'src/core/async-data-state'
import { CustomerViewModel } from 'src/core/customer.viewmodel'
import { CustomerType } from 'src/core/customer'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MasterDetailComponent,
    MasterCaptionComponent,
    FormsModule,
    NgFor,
    MasterItemDirective,
    MasterComponent,
    CustomerListItemComponent,
    DetailComponent,
    CustomerDetailsComponent,
    FilterCustomerNamePipe,
    FilterCustomerTypePipe,
  ],
})
export class CustomerDisplayPageComponent implements OnInit {
  public searchText = signal('')
  public customerType = signal('All')
  public customerTypeNames = ['All', CustomerType.basic, CustomerType.lead]
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
