import { Routes } from '@angular/router'
import { CustomerDisplayPageComponent } from './pages/dashboard/customer-display-page/customer-display-page.component'
import { CustomerFormsPageComponent } from './pages/dashboard/customer-forms-page/customer-forms-page.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { HomePageComponent } from './pages/home/home-page.component'
import { provideEffects } from '@ngrx/effects'
import { dashboardName, effects, reducers } from './pages/dashboard/store'
import { provideState } from '@ngrx/store'
import { DataService } from './pages/dashboard/services'

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  {
    path: 'dashboard',
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
