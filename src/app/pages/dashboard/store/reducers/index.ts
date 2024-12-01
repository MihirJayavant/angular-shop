import { CustomerAction } from '../actions'
import * as fromCustomer from './customer.reducer'
import { ActionReducerMap } from '@ngrx/store'

export * from './customer.reducer'

export interface DashboardState {
  customers: fromCustomer.CustomerState
}

export const reducers: ActionReducerMap<DashboardState, CustomerAction> = {
  customers: fromCustomer.reducer,
}
