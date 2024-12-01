import { CustomerDisplayPageComponent } from './customer-display-page/customer-display-page.component'
import { CustomerFormsPageComponent } from './customer-forms-page/customer-forms-page.component'
import { DashboardComponent } from './dashboard.component'
import { DataService } from './services'
import { dashboardName, effects, reducers } from './store'
import { Route } from '@angular/router'
import { provideEffects } from '@ngrx/effects'
import { provideState } from '@ngrx/store'

export const routes: Route[] = [
  {
    children: [
      { component: CustomerFormsPageComponent, data: { animation: 'FormsPage' }, path: 'forms' },
      {
        component: CustomerDisplayPageComponent,
        data: { animation: 'DisplayPage' },
        path: 'display',
      },
      { path: '', pathMatch: 'full', redirectTo: 'forms' },
    ],
    component: DashboardComponent,
    path: '',
    providers: [provideEffects(effects), provideState(dashboardName, reducers), DataService],
  },
]
