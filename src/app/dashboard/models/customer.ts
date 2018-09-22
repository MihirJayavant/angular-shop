export enum CustomerType {
  basic = 'Customer',
  lead = 'Lead'
}
export abstract class CustomerBase {
  public id: number
  public name: string
  public readonly type: CustomerType

  public constructor(id: number, name: string, type: CustomerType) {
    this.id = id
    this.name = name
    this.type = type
  }
}

export class BasicCustomer extends CustomerBase {
  public email = ''
  public mobile = 0
  public billNumber = 0
  public billAmount = 0
  public readonly type = CustomerType.basic

  public constructor(id: number, name: string, type: CustomerType) {
    super(id, name, type)
  }
}

export class Lead extends CustomerBase {
  public email = ''
  public mobile = 0
  public readonly type = CustomerType.lead

  public constructor(id: number, name: string, type: CustomerType) {
    super(id, name, type)
  }
}

export type Customer = BasicCustomer | Lead
