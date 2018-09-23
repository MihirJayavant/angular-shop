import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CustomerType } from '../../models'
import { customerTypeNames } from '../../helpers'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent {
  public searchText = ''
  public customerType = 'All'
  public customerTypeNames = customerTypeNames

  public onTypeChange(event: any) {
    const value = event.srcElement.value

    switch (value) {
      case 'All':
        this.customerType = 'All'
        break
      case CustomerType.basic:
        this.customerType = CustomerType.basic
        break
      case CustomerType.lead:
        this.customerType = CustomerType.lead
        break
    }
  }
}
