import { CustomerService } from './customer.service'
import { DataService } from './data.service'

export * from './customer.service'
export * from './data.service'

export const services = [CustomerService, DataService]
