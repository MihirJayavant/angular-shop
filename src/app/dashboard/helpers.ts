import { Customer, BasicCustomer, Lead, CustomerType } from './models'

export function mapCustomerToTitle(customer: Customer): string {
  switch (customer.type) {
    case CustomerType.basic:
      return CustomerType.basic
    case CustomerType.lead:
      return CustomerType.lead
  }
}

export function isCustomer(customer: Customer): customer is BasicCustomer {
  return customer.type === CustomerType.basic ? true : false
}

export function isLead(customer: Customer): customer is Lead {
  return customer.type === CustomerType.basic ? true : false
}
