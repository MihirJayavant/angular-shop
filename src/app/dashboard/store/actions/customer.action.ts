import { Action } from '@ngrx/store'
import { Customer } from '../../models'

export enum CustomerActionType {
  LOAD_CUSTOMERS = '[dashboard] load customers',
  LOAD_CUSTOMERS_SUCCESS = '[dashboard] load customers success',
  LOAD_CUSTOMERS_FAILED = '[dashboard] load customers failed'
}

export class LoadCustomer implements Action {
  public readonly type = CustomerActionType.LOAD_CUSTOMERS
}

export class LoadCustomerSuccess implements Action {
  public readonly type = CustomerActionType.LOAD_CUSTOMERS_SUCCESS

  constructor(public payload: Customer[]) {}
}

export class LoadCustomerFailed implements Action {
  public readonly type = CustomerActionType.LOAD_CUSTOMERS_FAILED
}

export type CustomerAction = LoadCustomer | LoadCustomerSuccess | LoadCustomerFailed
