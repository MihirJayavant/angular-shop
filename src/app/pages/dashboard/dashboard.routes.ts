import { Route } from '@angular/router'
import { CustomerDisplayPageComponent } from './customer-display-page/customer-display-page.component'
import { CustomerFormsPageComponent } from './customer-forms-page/customer-forms-page.component'
import { provideEffects } from '@ngrx/effects'
import { provideState } from '@ngrx/store'
import { DashboardComponent } from './dashboard.component'
import { DataService } from './services'
import { effects, dashboardName, reducers } from './store'

export const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    providers: [provideEffects(effects), provideState(dashboardName, reducers), DataService],
    children: [
      { path: 'forms', component: CustomerFormsPageComponent, data: { animation: 'FormsPage' } },
      {
        path: 'display',
        component: CustomerDisplayPageComponent,
        data: { animation: 'DisplayPage' },
      },
      { path: '', pathMatch: 'full', redirectTo: 'forms' },
    ],
  },
]
