import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { List } from 'immutable'
import { Customer } from 'src/app/dashboard/models'
import { DashboardState, getAllCustomers, LoadCustomer } from 'src/app/dashboard/store'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-customer-cards',
  templateUrl: './customer-cards.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardsComponent implements OnInit {
  public customers$: Observable<List<Customer>>

  @Input('search')
  public searchText = ''

  @Input('type')
  public customerType = 'All'

  constructor(private store: Store<DashboardState>) {
    this.customers$ = this.store.select(getAllCustomers)
  }

  public ngOnInit(): void {
    this.store.dispatch(new LoadCustomer())
  }
}
