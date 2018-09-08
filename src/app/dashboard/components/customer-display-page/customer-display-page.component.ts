import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store'
import { DashboardState, getAllCustomers } from '../../store'
import { Observable } from 'rxjs'
import { Customer, CustomerType } from '../../models'
import { List } from 'immutable'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent implements OnInit {
  public customers$: Observable<List<Customer>>
  public searchText = ''
  public customerType = CustomerType.basic

  constructor(public store: Store<DashboardState>) {}

  public ngOnInit() {
    this.customers$ = this.store.select(getAllCustomers)
  }

  public onTypeChange(event: any) {
    const value = event.srcElement.value

    if (value === 'Customer') {
      this.customerType = CustomerType.basic
    } else {
      this.customerType = CustomerType.lead
    }
  }
}
