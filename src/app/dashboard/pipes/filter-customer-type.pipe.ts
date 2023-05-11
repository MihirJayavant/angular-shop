import { Pipe, PipeTransform } from '@angular/core'
import { Customer, CustomerType } from '../models'

@Pipe({
  name: 'filterCustomerType',
})
export class FilterCustomerTypePipe implements PipeTransform {
  public transform(value: Customer[] | null, type: CustomerType | string): Customer[] {
    if (value === null) {
      return []
    }

    switch (type) {
      case 'All':
        return value
      case CustomerType.basic:
        return value.filter(p => (!!p ? p.type === CustomerType.basic : false))
      case CustomerType.lead:
        return value.filter(p => (!!p ? p.type === CustomerType.lead : false))
      default:
        return value
    }
  }
}
