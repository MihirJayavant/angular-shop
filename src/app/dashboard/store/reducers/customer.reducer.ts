import { List } from 'immutable'
import { Customer, CustomerType } from '../../models'
import { CustomerAction, ADD_CUSTOMER } from './../actions'

export interface CustomerState {
  data: List<Customer>
}

export const initalState: CustomerState = {
  data: List<Customer>([
    {
      id: 1,
      name: 'hello',
      email: 'dk',
      mobile: 123765,
      type: CustomerType.lead
    }
  ])
}

export function reducer(
  state = initalState,
  action: CustomerAction
): CustomerState {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, data: state.data.push(action.payload) }
  }

  return state
}
