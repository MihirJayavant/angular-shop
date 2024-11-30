import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  CustomerActionType,
  LoadCustomerFailed,
  LoadCustomerSuccess,
  PostCustomer,
  PostCustomerSuccess,
} from '../actions'
import { catchError, map, switchMap } from 'rxjs/operators'
import { Customer } from 'src/core/customer'
import { HttpService } from 'src/app/services'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable()
export class CustomerEffect {
  constructor(
    private readonly http: HttpService,
    private readonly actions$: Actions,
  ) {}

  public loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActionType.LOAD),
      switchMap(() =>
        this.getCustomers().pipe(
          map(customers => new LoadCustomerSuccess(customers)),
          catchError(error => of(new LoadCustomerFailed(error))),
        ),
      ),
    ),
  )

  public postCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActionType.POST),
      map((action: PostCustomer) => action.payload),
      switchMap(payload =>
        this.postCustomers(payload).pipe(
          map(() => new PostCustomerSuccess()),
          catchError(error => of(new LoadCustomerFailed(error))),
        ),
      ),
    ),
  )

  public getCustomers() {
    return this.http.get<Customer[]>('/customer')
  }

  public postCustomers(customer: Customer) {
    return this.http.post<any, Customer>('/customer', customer)
  }
}
