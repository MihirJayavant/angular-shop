import { ActionReducerMap } from '@ngrx/store'

import * as fromCustomer from './customer.reducer'
import { CustomerAction } from '../actions'

export * from './customer.reducer'

export interface DashboardState {
  customers: fromCustomer.CustomerState
}

export const reducers: ActionReducerMap<DashboardState, CustomerAction> = {
  customers: fromCustomer.reducer
}
