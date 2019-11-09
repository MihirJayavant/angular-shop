import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core'
import { CustomerType } from '../../models'
import { customerTypeNames } from '../../dashboard.helpers'
import { CustomerViewModel } from '../../view-models'
import { DataService } from '../../services'
import { AsyncDataStateType } from 'src/app/models'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent implements OnInit, OnDestroy {
  public searchText = ''
  public customerType = 'All'
  public customerTypeNames = ['All', ...customerTypeNames]
  public customers$ = this.dataService.getCustomers()
  public customerDataState$!: Subscription
  public selectedCustomer: CustomerViewModel | null = null

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.customerDataState$ = this.dataService.getCustomerDataState().subscribe(state => {
      if (state === AsyncDataStateType.INITIAL) this.dataService.loadCustomers()
    })
  }

  public onTypeChange(event: any) {
    const value = event.srcElement.value

    switch (value) {
      case 'All':
        this.customerType = 'All'
        break
      case CustomerType.basic:
        this.customerType = CustomerType.basic
        break
      case CustomerType.lead:
        this.customerType = CustomerType.lead
        break
    }
  }

  public onClick(item: CustomerViewModel) {
    this.selectedCustomer = item
  }

  public ngOnDestroy() {
    this.customerDataState$.unsubscribe()
  }
}
