import { Pipe, PipeTransform } from '@angular/core'
import { Customer } from 'src/core/customer'

@Pipe({
  name: 'filterCustomerName',
  standalone: true,
})
export class FilterCustomerNamePipe implements PipeTransform {
  public transform(value: Customer[] | null | undefined, searchText: string): Customer[] {
    const search = searchText.trim().toLowerCase()

    if (!value) {
      return []
    } else if (searchText === '') {
      return value
    }
    return value.filter(data => (data ? data.name.toLowerCase().startsWith(search) : false))
  }
}
