import { ActionReducerMap } from '@ngrx/store'

import * as fromCustomer from './customer.reducer'

export * from './customer.reducer'

export interface DashboardState {
  customers: fromCustomer.CustomerState
}

export const reducers: ActionReducerMap<DashboardState> = {
  customers: fromCustomer.reducer
}
