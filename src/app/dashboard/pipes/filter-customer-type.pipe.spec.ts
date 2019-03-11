import { FilterCustomerTypePipe } from './filter-customer-type.pipe'
import { Customer, Lead, CustomerType, BasicCustomer } from '../models'
import { List } from 'immutable'

const lead: Lead = {
  id: '1',
  dateCreated: '2/4/2018',
  email: 'shank@e.com',
  name: 'shank',
  mobile: '5643',
  type: CustomerType.lead
}

const basic: BasicCustomer = {
  id: '2',
  dateCreated: '5/6/2019',
  email: 'abhijit@e.com',
  name: 'abhijit',
  mobile: '56433',
  type: CustomerType.basic,
  avatar: '',
  billsHistory: []
}

const customerList: Customer[] = [lead, basic]
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
