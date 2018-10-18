import { List } from 'immutable'
import { Customer, CustomerType } from '../../models'
import { CustomerAction, CustomerActionType, LoadCustomerSuccess } from './../actions'

export interface CustomerState {
  customers: List<Customer>
  isLoading: boolean
  isLoaded: boolean
}

export const initalState: CustomerState = {
  customers: List<Customer>(),
  isLoading: false,
  isLoaded: false
}

export function reducer(state = initalState, action: CustomerAction): CustomerState {
  switch (action.type) {
    case CustomerActionType.LOAD_CUSTOMERS:
      return {
        ...state,
        isLoading: true
      }

    case CustomerActionType.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: List(action.payload),
        isLoaded: true,
        isLoading: false
      }

    case CustomerActionType.LOAD_CUSTOMERS_FAILED:
      return {
        ...state,
        isLoaded: false,
        isLoading: false
      }
  }

  return state
}
