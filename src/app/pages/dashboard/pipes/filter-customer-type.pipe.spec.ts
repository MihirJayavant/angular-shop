/* eslint-disable no-magic-numbers */
import { FilterCustomerTypePipe } from './filter-customer-type.pipe'
import { BasicCustomer, Customer, CustomerType, Lead } from 'src/core/customer'

const lead: Lead = {
  dateCreated: '2/4/2018',
  email: 'shank@e.com',
  id: '1',
  mobile: '5643',
  name: 'shank',
  type: CustomerType.lead,
}
const basic: BasicCustomer = {
  avatar: '',
  billsHistory: [],
  dateCreated: '5/6/2019',
  email: 'abhijit@e.com',
  id: '2',
  mobile: '56433',
  name: 'abhijit',
  type: CustomerType.basic,
}
const customerList: Customer[] = [lead, basic]
const pipe = new FilterCustomerTypePipe()

test(`that all (2) customers are returned when input is 'All'`, () => {
  // Act
  const output = pipe.transform(customerList, 'All')
  // Assert
  expect(output.length).toBe(2)
})

it(`that all (1) customers are returned when input is '${CustomerType.lead}'`, () => {
  // Act
  const output = pipe.transform(customerList, CustomerType.lead)
  // Assert
  expect(output.length).toBe(1)
})

it(`that all (1) customers are returned when input is '${CustomerType.basic}'`, () => {
  // Act
  const output = pipe.transform(customerList, CustomerType.basic)
  // Assert
  expect(output.length).toBe(1)
})
