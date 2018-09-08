import { Pipe, PipeTransform } from '@angular/core'
import { Customer, CustomerType } from '../models'
import { List } from 'immutable'

@Pipe({
  name: 'filterCustomerType'
})
export class FilterCustomerTypePipe implements PipeTransform {
  public transform(value: List<Customer>, type: CustomerType): List<Customer> {
    if (value === null) {
      return List()
    }

    switch (type) {
      case CustomerType.basic:
        return value
          .filter((p: Customer) => p.type === CustomerType.basic)
          .toList()
      case CustomerType.lead:
        return value
          .filter((p: Customer) => p.type === CustomerType.lead)
          .toList()
    }
  }
}
