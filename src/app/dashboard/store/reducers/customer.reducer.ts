import { List } from 'immutable'
import { Customer } from '../../models'
import { CustomerAction, ADD_CUSTOMER } from './../actions/customer.action'

export interface CustomerState {
  data: List<Customer>
}

export const initalState: CustomerState = {
  data: List<Customer>()
}

export function reducer(
  state = initalState,
  action: CustomerAction
): CustomerState {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state }
  }

  return state
}

export const getCustomers = (state: CustomerState) => state.data
