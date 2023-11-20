import { Injectable } from '@angular/core'

import { createEffect, Actions, ofType } from '@ngrx/effects'
import {
  CustomerActionType,
  LoadCustomerSuccess,
  LoadCustomerFailed,
  PostCustomer,
  PostCustomerSuccess,
} from '../actions'

import { switchMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpService } from 'src/app/services'
import { Customer } from 'src/core/customer'

@Injectable()
export class CustomerEffect {
  constructor(private http: HttpService, private actions$: Actions) {}

  public loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActionType.LOAD),
      switchMap(() =>
        this.getCustomers().pipe(
          map(customers => new LoadCustomerSuccess(customers)),
          catchError(error => of(new LoadCustomerFailed(error)))
        )
      )
    )
  )

  public postCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActionType.POST),
      map((action: PostCustomer) => action.payload),
      switchMap(payload =>
        this.postCustomers(payload).pipe(
          map(_ => new PostCustomerSuccess()),
          catchError(error => of(new LoadCustomerFailed(error)))
        )
      )
    )
  )

  public getCustomers() {
    return this.http.get<Customer[]>('/customer')
  }

  public postCustomers(customer: Customer) {
    return this.http.post<any, Customer>('/customer', customer)
  }
}
