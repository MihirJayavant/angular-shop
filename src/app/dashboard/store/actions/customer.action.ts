import { Action } from '@ngrx/store'
import { Customer } from '../../models'

export const ADD_CUSTOMER = '[dashboard] add customer'

export class AddCustomer implements Action {
  public readonly type = ADD_CUSTOMER

  constructor(public payload: Customer) {}
}

export type CustomerAction = AddCustomer
