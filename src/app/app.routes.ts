import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    loadComponent: () =>
      import('./pages/home/home-page.component').then(mod => mod.HomePageComponent),
    path: '',
    pathMatch: 'full',
  },
  {
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(mod => mod.routes),
    path: 'dashboard',
  },
  {
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        mod => mod.PageNotFoundComponent,
      ),
    path: '**',
  },
]
