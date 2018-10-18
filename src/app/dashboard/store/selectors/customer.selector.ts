import { createSelector } from '@ngrx/store'
import { getDashboardState } from './dashboard.selector'

export const getCustomerState = createSelector(getDashboardState, state => state.customers)

export const getAllCustomers = createSelector(getCustomerState, state => state.customers)
