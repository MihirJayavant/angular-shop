import { FilterCustomerTypePipe } from './filter-customer-type.pipe'
import { Customer, Lead, CustomerType, BasicCustomer } from '../models'
import { List } from 'immutable'

const customerList: Customer[] = [
  new Lead('1', 'shank', '2/4/2018'),
  new BasicCustomer('2', 'abhijit', '', '5/6/2019')
]
const pipe = new FilterCustomerTypePipe()

test(`that all (2) customers are returned when input is 'All'`, () => {
  // Act
  const output = pipe.transform(List(customerList), 'All')
  // Assert
  expect(output.count()).toBe(2)
})

test(`that all (1) customers are returned when input is '${CustomerType.lead}'`, () => {
  // Act
  const output = pipe.transform(List(customerList), CustomerType.lead)
  // Assert
  expect(output.count()).toBe(1)
})

test(`that all (1) customers are returned when input is '${CustomerType.basic}'`, () => {
  // Act
  const output = pipe.transform(List(customerList), CustomerType.basic)
  // Assert
  expect(output.count()).toBe(1)
})
