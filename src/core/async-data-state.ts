import { Action } from '@ngrx/store'

// eslint-disable-next-line no-shadow
export enum AsyncDataStateType {
  INITIAL = 'Initial',
  LOADED = 'Loaded',
  LOADING = 'Loading',
  ERROR = 'Error',
}

export interface IAsyncData<T> {
  data: T
  dataState: AsyncDataStateType
  error: string
}

export function getInitialState<T>(data: T): IAsyncData<T> {
  return {
    data,
    dataState: AsyncDataStateType.INITIAL,
    error: '',
  }
}

export interface IAsyncDataLoadAction extends Action {
  readonly type: string
}

export interface IAsyncDataSuccessAction<T> extends Action {
  data: T
}
export interface IAsyncDataErrorAction extends Action {
  error: string
}

export type AsyncDataAction<T> =
  | IAsyncDataErrorAction
  | IAsyncDataLoadAction
  | IAsyncDataSuccessAction<T>

type baseReducerFn<TData, TState extends IAsyncData<TData>> = (
  state: TState | undefined,
  action: any,
) => TState

export interface IAsyncDataActionType {
  loadActionType: string
  successActionType: string
  errorActionType: string
}

function updateObj(state: any, value: any): any {
  return { ...state, ...value }
}

export function withReducer<TData, TState extends IAsyncData<TData>>(
  baseReducer: baseReducerFn<TData, TState>,
  actionType: IAsyncDataActionType,
) {
  return (state: TState, action: AsyncDataAction<TData>) => {
    let newState = state
    switch (action.type) {
      case actionType.loadActionType:
        newState = updateObj(state, {
          dataState: AsyncDataStateType.LOADING,
          error: '',
        })
        break
      case actionType.successActionType:
        newState = updateObj(state, {
          data: (action as IAsyncDataSuccessAction<TData>).data,
          dataState: AsyncDataStateType.LOADED,
          error: '',
        })
        break
      case actionType.errorActionType:
        newState = updateObj(state, {
          dataState: AsyncDataStateType.ERROR,
          error: (action as IAsyncDataErrorAction).error,
        })
        break
      default:
        break
    }
    return baseReducer(newState, action)
  }
}
