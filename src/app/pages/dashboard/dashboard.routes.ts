import { DataService } from './services'
import { dashboardName, effects, reducers } from './store'
import { Route } from '@angular/router'
import { provideEffects } from '@ngrx/effects'
import { provideState } from '@ngrx/store'

export const routes: Route[] = [
  {
    children: [
      {
        data: { animation: 'FormsPage' },
        loadComponent: () =>
          import('./customer-forms-page/customer-forms-page.component').then(
            mod => mod.CustomerFormsPageComponent,
          ),
        path: 'forms',
      },
      {
        data: { animation: 'DisplayPage' },
        loadComponent: () =>
          import('./customer-display-page/customer-display-page.component').then(
            mod => mod.CustomerDisplayPageComponent,
          ),
        path: 'display',
      },
      { path: '', pathMatch: 'full', redirectTo: 'forms' },
    ],
    loadComponent: () => import('./dashboard.component').then(mod => mod.DashboardComponent),
    path: '',
    providers: [provideEffects(effects), provideState(dashboardName, reducers), DataService],
  },
]
