import { Action } from '@ngrx/store'
import { Customer } from '../../models'
import {
  IAsyncDataLoadAction,
  IAsyncDataSuccessAction,
  IAsyncDataErrorAction
} from 'src/app/models'
import { List } from 'immutable'

export enum CustomerActionType {
  LOAD = '[dashboard] load customers',
  SUCCESS = '[dashboard] load customers success',
  ERROR = '[dashboard] load customers failed'
}

export class LoadCustomer implements IAsyncDataLoadAction {
  public readonly type = CustomerActionType.LOAD
}

export class LoadCustomerSuccess implements IAsyncDataSuccessAction<List<Customer>> {
  public readonly type = CustomerActionType.SUCCESS

  constructor(public data: List<Customer>) {}
}

export class LoadCustomerFailed implements IAsyncDataErrorAction {
  public readonly type = CustomerActionType.ERROR
  constructor(public error: string) {}
}

export type CustomerAction = LoadCustomer | LoadCustomerSuccess | LoadCustomerFailed
