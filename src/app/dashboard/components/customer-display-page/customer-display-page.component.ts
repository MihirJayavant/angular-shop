import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { CustomerType } from '../../models'
import { customerTypeNames } from '../../helpers'
import { Store } from '@ngrx/store'
import { DashboardState, getAllCustomers, LoadCustomer } from '../../store'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent implements OnInit {
  public searchText = ''
  public customerType = 'All'
  public customerTypeNames = customerTypeNames
  public customers$ = this.store.select(getAllCustomers)

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
}
