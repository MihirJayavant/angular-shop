import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { DashboardState, LoadCustomer, getAllCustomers } from '../store'

@Injectable()
export class DataService {
  constructor(private store: Store<DashboardState>) {}

  public loadCustomers() {
    this.store.dispatch(new LoadCustomer())
  }

  public getCustomers() {
    return this.store.select(getAllCustomers)
  }
}
