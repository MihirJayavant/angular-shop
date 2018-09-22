import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store'
import { DashboardState, getAllCustomers } from '../../store'
import { Observable } from 'rxjs'
import { Customer, CustomerType } from '../../models'
import { List } from 'immutable'
import { customerTypeNames } from '../../helpers'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent {
  public customers$: Observable<List<Customer>>
  public searchText = ''
  public customerType = 'All'
  public customerTypeNames = customerTypeNames

  constructor(public store: Store<DashboardState>) {
    this.customers$ = this.store.select(getAllCustomers)
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
}
