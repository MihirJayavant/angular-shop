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

  public constructor(id: string, name: string, avatar: string, dateCreated: string) {
    super(id, name, avatar, CustomerType.basic, dateCreated)
  }
}

export class Lead extends CustomerBase {
  public email = ''
  public mobile = 0

  public constructor(id: string, name: string, dateCreated: string) {
    super(id, name, '', CustomerType.lead, dateCreated)
  }
}

export type Customer = BasicCustomer | Lead
