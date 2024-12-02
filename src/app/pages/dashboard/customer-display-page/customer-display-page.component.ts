import { CustomerDetailsComponent } from '../../../components/customer-details/customer-details.component'
import { CustomerListItemComponent } from '../../../components/customer-list-item/customer-list-item.component'
import { MasterItemDirective } from '../../../directives/master-item.directive'
import { FilterCustomerNamePipe } from '../pipes/filter-customer-name.pipe'
import { FilterCustomerTypePipe } from '../pipes/filter-customer-type.pipe'
import { DataService } from '../services'
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormsModule } from '@angular/forms'
import { DetailComponent, MasterComponent, MasterDetailComponent } from 'src/app/components'
import { MasterCaptionComponent } from 'src/app/components/master-detail/master-caption/master-caption.component'
import { AsyncDataStateType } from 'src/core/async-data-state'
import { CustomerType } from 'src/core/customer'
import { CustomerViewModel } from 'src/core/customer.viewmodel'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MasterDetailComponent,
    MasterCaptionComponent,
    FormsModule,
    MasterItemDirective,
    MasterComponent,
    CustomerListItemComponent,
    DetailComponent,
    CustomerDetailsComponent,
    FilterCustomerNamePipe,
    FilterCustomerTypePipe,
  ],
  selector: 'app-customer-display-page',
  standalone: true,
  styles: [],
  templateUrl: './customer-display-page.component.html',
})
export class CustomerDisplayPageComponent implements OnInit {
  public searchText = signal('')

  public customerType = signal('All')

  public customerTypeNames = ['All', CustomerType.basic, CustomerType.lead]

  public customers = toSignal(this.dataService.getCustomers(), { initialValue: [] })

  public customerDataState = toSignal(this.dataService.getCustomerDataState(), {
    initialValue: AsyncDataStateType.INITIAL,
  })

  public selectedCustomer = signal<CustomerViewModel | undefined | null>(null)

  constructor(private readonly dataService: DataService) {}

  public ngOnInit(): void {
    if (this.customerDataState() === AsyncDataStateType.INITIAL) this.dataService.loadCustomers()
  }

  public onTypeChange(event: any) {
    const { value } = event.srcElement

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
      default:
        break
    }
  }

  public onClick(item: any) {
    this.selectedCustomer.set(item)
  }
}
