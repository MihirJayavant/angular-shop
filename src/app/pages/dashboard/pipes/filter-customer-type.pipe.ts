import { Customer, CustomerType } from 'src/core/customer'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterCustomerType',
  standalone: true,
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
        return value.filter(data => (data ? data.type === CustomerType.basic : false))
      case CustomerType.lead:
        return value.filter(data => (data ? data.type === CustomerType.lead : false))
      default:
        return value
    }
  }
}
