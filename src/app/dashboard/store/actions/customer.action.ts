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
  ERROR = '[dashboard] load customers failed',
  POST = '[dashboard] post customer',
  POSTSUCCESS = '[dashboard] post customer success'
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
export class PostCustomer implements Action {
  public readonly type = CustomerActionType.POST
  constructor(public payload: Customer) {}
}
export class PostCustomerSuccess implements Action {
  public readonly type = CustomerActionType.POSTSUCCESS
}

export type CustomerAction =
  | LoadCustomer
  | LoadCustomerSuccess
  | LoadCustomerFailed
  | PostCustomer
  | PostCustomerSuccess
