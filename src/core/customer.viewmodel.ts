import { CustomerType, Bill, Customer } from './customer'

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
    id: customer.id,
    name: customer.name,
    email: customer.email,
    mobile: customer.mobile,
    type: customer.type,
    dateCreated: customer.dateCreated,
    avatar: 'https://bulma.io/images/placeholders/128x128.png',
  }
  if (customer.type === CustomerType.basic) {
    temp.avatar = customer.avatar
    temp.billsHistory = customer.billsHistory
  }
  return temp
}
