import { DashboardComponent } from './dashboard.component'
import { CustomerFormsPageComponent } from './customer-forms-page/customer-forms-page.component'
import { CustomerDisplayPageComponent } from './customer-display-page/customer-display-page.component'
import { CustomerCardComponent } from './customer-display-page/customer-card/customer-card.component'
import { CustomerCardsComponent } from './customer-display-page/customer-cards/customer-cards.component'
import { CustomerListComponent } from './customer-display-page/customer-list/customer-list.component'
import { CustomerDetailsComponent } from './customer-display-page/customer-details/customer-details.component'

export * from './dashboard.component'
export * from './customer-forms-page/customer-forms-page.component'
export * from './customer-display-page/customer-display-page.component'

export const components = [
  DashboardComponent,
  CustomerFormsPageComponent,
  CustomerDisplayPageComponent,
  CustomerCardComponent,
  CustomerCardsComponent,
  CustomerListComponent,
  CustomerDetailsComponent
]
