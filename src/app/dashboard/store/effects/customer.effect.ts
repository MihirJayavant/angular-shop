import { Injectable } from '@angular/core'
import { CustomerService } from '../../services'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { CustomerActionType, LoadCustomerSuccess, LoadCustomerFailed } from '../actions'

import { switchMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class CustomerEffect {
  constructor(private customerService: CustomerService, private actions$: Actions) {}

  @Effect()
  public loadCustomer$ = this.actions$.pipe(
    ofType(CustomerActionType.LOAD_CUSTOMERS),
    switchMap(() =>
      this.customerService.getCustomers().pipe(
        map(customers => new LoadCustomerSuccess(customers)),
        catchError(error => of(new LoadCustomerFailed()))
      )
    )
  )
}
