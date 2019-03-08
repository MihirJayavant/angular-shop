import { Pipe, PipeTransform } from '@angular/core'
import { Customer, CustomerType } from '../models'
import { List } from 'immutable'

@Pipe({
  name: 'filterCustomerType'
})
export class FilterCustomerTypePipe implements PipeTransform {
  public transform(value: List<Customer>, type: CustomerType | 'All'): List<Customer> {
    if (value === null) {
      return List()
    }

    switch (type) {
      case 'All':
        return value
      case CustomerType.basic:
        return value.filter(p => (!!p ? p.type === CustomerType.basic : false)).toList()
      case CustomerType.lead:
        return value.filter(p => (!!p ? p.type === CustomerType.lead : false)).toList()
    }
  }
}
