import { CustomerType, Bill, Customer, isBasicCustomer, Lead } from '../models'

export class CustomerViewModel {
  public id: string
  public name: string
  public email: string
  public mobile: string
  public readonly type: CustomerType
  public dateCreated: string
  public avatar: string
  public billsHistory?: Bill[]

  public constructor(customer: Customer) {
    this.id = customer.id
    this.name = customer.name
    this.email = customer.email
    this.mobile = customer.mobile
    this.type = customer.type
    this.dateCreated = customer.dateCreated

    if (isBasicCustomer(customer)) this.avatar = customer.avatar
    else this.avatar = 'https://bulma.io/images/placeholders/128x128.png'
  }
}

export function getInitialState() {
  return new CustomerViewModel(new Lead('', '', '', '', ''))
}
