export enum CustomerType {
  basic = 'Customer',
  lead = 'Lead'
}
export interface CustomerBase {
  id: string
  name: string
  email: string
  mobile: string
  type: CustomerType
  dateCreated: string
}

export interface Bill {
  billAmount: number
  billId: number
  date: string
}

export interface BasicCustomer extends CustomerBase {
  avatar: string
  billsHistory: Bill[]
  type: CustomerType.basic
}

export interface Lead extends CustomerBase {
  type: CustomerType.lead
}

export type Customer = BasicCustomer | Lead
