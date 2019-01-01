import { Pipe, PipeTransform } from '@angular/core'
import { Customer } from '../models'
import { List } from 'immutable'

@Pipe({
  name: 'filterCustomerName'
})
export class FilterCustomerNamePipe implements PipeTransform {
  public transform(value: List<Customer>, searchText: string): List<Customer> {
    searchText = searchText.trim().toLowerCase()

    if (value == null) {
      return List()
    } else if (searchText === '') {
      return value
    } else {
      return value.filter(p => (!!p ? p.name.toLowerCase().startsWith(searchText) : false)).toList()
    }
  }
}
