import { DashboardComponent } from './dashboard.component'
import { CustomerFormsPageComponent } from './customer-forms-page/customer-forms-page.component'
import { CustomerDisplayPageComponent } from './customer-display-page/customer-display-page.component'
import { CustomerDetailsComponent } from './customer-display-page/customer-details/customer-details.component'
import { CustomerListItemComponent } from './customer-display-page/customer-list-item/customer-list-item.component'

export * from './dashboard.component'
export * from './customer-forms-page/customer-forms-page.component'
export * from './customer-display-page/customer-display-page.component'

export const components = [
  DashboardComponent,
  CustomerFormsPageComponent,
  CustomerDisplayPageComponent,
  CustomerListItemComponent,
  CustomerDetailsComponent
]
