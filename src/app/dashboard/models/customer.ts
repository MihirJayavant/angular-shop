export enum CustomerType {
  basic = 'Customer',
  lead = 'Lead'
}
export abstract class CustomerBase {
  public id: string
  public name: string
  public avatar: string
  public readonly type: CustomerType
  public dateCreated: string

  public constructor(
    id: string,
    name: string,
    avatar: string,
    type: CustomerType,
    dateCreated: string
  ) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.type = type
    this.dateCreated = dateCreated
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
  public email = ''
  public mobile = 0
  public billsHistory: Bill[] = []

  public readonly type = CustomerType.basic

  public constructor(
    id: string,
    name: string,
    avatar: string,
    type: CustomerType,
    dateCreated: string
  ) {
    super(id, name, avatar, type, dateCreated)
  }
}

export class Lead extends CustomerBase {
  public email = ''
  public mobile = 0
  public readonly type = CustomerType.lead

  public constructor(id: string, name: string, type: CustomerType, dateCreated: string) {
    super(id, name, '', type, dateCreated)
  }
}

export type Customer = BasicCustomer | Lead
