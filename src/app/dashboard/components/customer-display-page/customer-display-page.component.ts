import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { CustomerType, Customer } from '../../models'
import { customerTypeNames } from '../../dashboard.helpers'
import { Store } from '@ngrx/store'
import { DashboardState, getAllCustomers, LoadCustomer } from '../../store'
import { CustomerViewModel } from '../../view-models'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent implements OnInit {
  public searchText = ''
  public customerType = 'All'
  public customerTypeNames = ['All', ...customerTypeNames]
  public customers$ = this.store.select(getAllCustomers)
  public selectedCustomer: CustomerViewModel | null = null

  constructor(private store: Store<DashboardState>) {}

  public ngOnInit(): void {
    this.store.dispatch(new LoadCustomer())
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
}
