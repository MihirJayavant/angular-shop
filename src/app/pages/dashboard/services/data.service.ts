import {
  DashboardState,
  LoadCustomer,
  getAllCustomers,
  getCustomerDataState,
  getCustomerError,
} from '../store'
import { Injectable, inject } from '@angular/core'
import { Store } from '@ngrx/store'

@Injectable()
export class DataService {
  private readonly store = inject<Store<DashboardState>>(Store)

  public loadCustomers() {
    this.store.dispatch(new LoadCustomer())
  }

  public getCustomers() {
    return this.store.select(getAllCustomers)
  }

  public getCustomerDataState() {
    return this.store.select(getCustomerDataState)
  }

  public getCustomerError() {
    return this.store.select(getCustomerError)
  }
}
