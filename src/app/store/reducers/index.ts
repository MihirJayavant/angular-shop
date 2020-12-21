import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store'
import { Params, RouterStateSnapshot } from '@angular/router'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'
import { Injectable } from "@angular/core";

export interface RouterStateUrl {
  url: string
  params: Params
  queryParams: Params
}

export interface State {
  routerReducer: RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State, any> = {
  routerReducer: routerReducer
}

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(
  'routerReducer'
)

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState
    const { queryParams } = routerState.root

    let state = routerState.root
    while (state.firstChild) state = state.firstChild

    const { params } = state
    return { url, params, queryParams }
  }
}
