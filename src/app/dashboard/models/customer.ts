
export enum CustomerType {
  basic = 'Customer',
  lead = 'Lead'
}
export abstract class CustomerBase {
  public id: number
  public name: string
  public readonly type: CustomerType
}

export class BasicCustomer extends CustomerBase {
  public email: string
  public mobile: number
  public billNumber: number
  public billAmount: number
  public readonly type = CustomerType.basic
}

export class Lead extends CustomerBase {
  public email: string
  public mobile: number
  public readonly type = CustomerType.lead
}

export type Customer = BasicCustomer | Lead
