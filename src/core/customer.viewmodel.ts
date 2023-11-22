import { Bill, Customer, CustomerType } from './customer'

export interface CustomerViewModel {
  id: string
  name: string
  email: string
  mobile: string
  type: CustomerType
  dateCreated: string
  avatar: string
  billsHistory?: Bill[]
}

export function convertToCustomerViewModel(customer: Customer): CustomerViewModel {
  const temp: CustomerViewModel = {
    avatar: 'https://bulma.io/images/placeholders/128x128.png',
    dateCreated: customer.dateCreated,
    email: customer.email,
    id: customer.id,
    mobile: customer.mobile,
    name: customer.name,
    type: customer.type,
  }
  if (customer.type === CustomerType.basic) {
    temp.avatar = customer.avatar
    temp.billsHistory = customer.billsHistory
  }
  return temp
}
