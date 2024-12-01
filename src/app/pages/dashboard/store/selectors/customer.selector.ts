import { getDashboardState } from './dashboard.selector'
import { createSelector } from '@ngrx/store'

export const getCustomerState = createSelector(getDashboardState, state => state.customers)

export const getAllCustomers = createSelector(getCustomerState, state => state.data)

export const getCustomerDataState = createSelector(getCustomerState, state => state.dataState)

export const getCustomerError = createSelector(getCustomerState, state => state.error)
