import { List } from 'immutable'
import { Customer } from '../../models'
import { CustomerAction, CustomerActionType } from './../actions'
import { IAsyncData, getInitialState, withReducer } from 'src/app/models'

export interface CustomerState extends IAsyncData<List<Customer>> {}

export const initalState: CustomerState = {
  ...getInitialState<List<Customer>>(List<Customer>())
}

function baseReducer(state = initalState): CustomerState {
  return state
}

export function reducer(state = initalState, action: CustomerAction): CustomerState {
  return withReducer(baseReducer, {
    errorActionType: CustomerActionType.ERROR,
    loadActionType: CustomerActionType.LOAD,
    successActionType: CustomerActionType.SUCCESS
  })(state, action)
}
