import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs'
import { List } from 'immutable'
import { Customer } from 'src/app/dashboard/models'
import { DashboardState, getAllCustomers } from 'src/app/dashboard/store'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-customer-cards',
  templateUrl: './customer-cards.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardsComponent {
  public customers$: Observable<List<Customer>>

  @Input('search')
  public searchText = ''

  @Input('type')
  public customerType = 'All'

  constructor(public store: Store<DashboardState>) {
    this.customers$ = this.store.select(getAllCustomers)
  }
}
