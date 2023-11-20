import { Pipe, PipeTransform } from '@angular/core'
import { Customer } from 'src/core/customer'

@Pipe({
  name: 'filterCustomerName',
  standalone: true,
})
export class FilterCustomerNamePipe implements PipeTransform {
  public transform(value: Customer[] | null, searchText: string): Customer[] {
    searchText = searchText.trim().toLowerCase()

    if (value == null) {
      return []
    } else if (searchText === '') {
      return value
    } else {
      return value.filter(p => (!!p ? p.name.toLowerCase().startsWith(searchText) : false))
    }
  }
}
