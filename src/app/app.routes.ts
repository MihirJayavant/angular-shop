import { HomePageComponent } from './pages/home/home-page.component'
import { Routes } from '@angular/router'

export const routes: Routes = [
  { component: HomePageComponent, path: '', pathMatch: 'full' },
  {
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(mod => mod.routes),
    path: 'dashboard',
  },
]
