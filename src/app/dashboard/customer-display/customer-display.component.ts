import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store'
import { DashboardState, getAllCustomers } from '../store'
import { Observable } from 'rxjs'
import { Customer } from '../models'
import { List } from 'immutable'

@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayComponent implements OnInit {
  public customers$: Observable<List<Customer>>

  constructor(public store: Store<DashboardState>) {}

  public ngOnInit() {
    this.customers$ = this.store.select(getAllCustomers)
  }
}
