import { Customer } from '../../models'
import { CustomerAction, CustomerActionType } from './../actions'
import { IAsyncData, getInitialState, withReducer } from 'src/app/models'

export interface CustomerState extends IAsyncData<Customer[]> {
  postLoading: boolean
}

export const initalState: CustomerState = {
  ...getInitialState<Customer[]>([]),
  postLoading: false,
}

function baseReducer(state = initalState, action: CustomerAction): CustomerState {
  switch (action.type) {
    case CustomerActionType.POST:
      return {
        ...state,
        postLoading: true,
      }
    case CustomerActionType.POSTSUCCESS:
      return {
        ...state,
        postLoading: false,
      }

    default:
      return state
  }
}

export function reducer(state = initalState, action: CustomerAction): CustomerState {
  return withReducer(baseReducer, {
    errorActionType: CustomerActionType.ERROR,
    loadActionType: CustomerActionType.LOAD,
    successActionType: CustomerActionType.SUCCESS,
  })(state, action)
}
