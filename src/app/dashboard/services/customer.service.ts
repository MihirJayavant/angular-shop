import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services'
import { Customer } from '../models'

@Injectable()
export class CustomerService {
  constructor(private http: HttpService) {}

  public getCustomers() {
    return this.http.get<Customer[]>('/customer')
  }
}
