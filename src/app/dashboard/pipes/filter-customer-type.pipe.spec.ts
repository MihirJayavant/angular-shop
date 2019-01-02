import { FilterCustomerTypePipe } from './filter-customer-type.pipe'
import { Customer, Lead, CustomerType } from '../models'
import { List } from 'immutable'

test(`that all customers are returned when input is 'All'`, () => {
  const customerList: Customer[] = [new Lead('1', 'shank', '2/4/2018')]
  const output = new FilterCustomerTypePipe().transform(List(customerList), 'All')
  expect(output.count()).toBe(1)
})
