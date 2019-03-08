import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { CustomerActionType, LoadCustomerSuccess, LoadCustomerFailed } from '../actions'

import { switchMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpService } from 'src/app/services'
import { Customer } from '../../models'
import { List } from 'immutable'

@Injectable()
export class CustomerEffect {
  constructor(private http: HttpService, private actions$: Actions) {}

  @Effect()
  public loadCustomer$ = this.actions$.pipe(
    ofType(CustomerActionType.LOAD),
    switchMap(() =>
      this.getCustomers().pipe(
        map(customers => new LoadCustomerSuccess(List(customers))),
        catchError(error => of(new LoadCustomerFailed(error)))
      )
    )
  )

  public getCustomers() {
    return this.http.get<Customer[]>('/customer')
  }
}
