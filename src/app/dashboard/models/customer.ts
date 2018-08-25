export abstract class CustomerBase {
  public id: number
  public name: string
}

export class BasicCustomer extends CustomerBase {
  public email: string
  public mobile: number
  public billNumber: number
  public billAmount: number
}

export class Lead extends CustomerBase {
  public email: string
  public mobile: number
}

export type Customer = BasicCustomer | Lead
