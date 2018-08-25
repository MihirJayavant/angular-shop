import { Customer, BasicCustomer, Lead } from './models'

export function mapCustomerToTitle(customer: Customer): string {
  if (isCustomer(customer)) {
    return 'customer'
  } else if (isLead(customer)) {
    return 'Lead'
  }
  return 'none'
}

export function isCustomer(customer: Customer): customer is BasicCustomer {
  return !!(customer as BasicCustomer) ? true : false
}

export function isLead(customer: Customer): customer is Lead {
  return !!(customer as Lead) ? true : false
}
