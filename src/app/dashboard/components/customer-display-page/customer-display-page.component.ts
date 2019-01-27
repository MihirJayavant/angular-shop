import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { CustomerType } from '../../models'
import { customerTypeNames } from '../../dashboard.helpers'
import { CustomerViewModel } from '../../view-models'
import { DataService } from '../../services'

@Component({
  selector: 'app-customer-display-page',
  templateUrl: './customer-display-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDisplayPageComponent implements OnInit {
  public searchText = ''
  public customerType = 'All'
  public customerTypeNames = ['All', ...customerTypeNames]
  public customers$ = this.dataService.getCustomers()
  public selectedCustomer: CustomerViewModel | null = null

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.dataService.loadCustomers()
  }

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

  public onClick(item: CustomerViewModel) {
    this.selectedCustomer = item
  }
}
