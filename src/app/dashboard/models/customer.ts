export enum CustomerType {
  basic = 'Customer',
  lead = 'Lead'
}
export abstract class CustomerBase {
  public id: string
  public name: string
  public email: string
  public mobile: string
  public readonly type: CustomerType
  public dateCreated: string

  public constructor(
    id: string,
    name: string,
    email: string,
    mobile: string,
    type: CustomerType,
    dateCreated: string
  ) {
    this.id = id
    this.name = name
    this.type = type
    this.dateCreated = dateCreated
    this.email = email
    this.mobile = mobile
  }
}

export class Bill {
  public billAmount: number
  public billId: number
  public date: string

  constructor(billId: number, billAmount: number, date: string) {
    this.billId = billId
    this.billAmount = billAmount
    this.date = date
  }
}

export class BasicCustomer extends CustomerBase {
  public avatar: string
  public billsHistory: Bill[] = []

  public constructor(
    id: string,
    name: string,
    email: string,
    mobile: string,
    avatar: string,
    billsHistory: Bill[],
    dateCreated: string
  ) {
    super(id, name, email, mobile, CustomerType.basic, dateCreated)
    this.avatar = avatar
    this.billsHistory = billsHistory
  }
}

export class Lead extends CustomerBase {
  public constructor(id: string, name: string, email: string, mobile: string, dateCreated: string) {
    super(id, name, email, mobile, CustomerType.lead, dateCreated)
  }
}

export type Customer = BasicCustomer | Lead

export function isBasicCustomer(customer: Customer): customer is BasicCustomer {
  return (<BasicCustomer>customer).avatar !== undefined
}
