import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { SharedModule } from '../shared'

import {
  DashboardComponent,
  CustomerFormsPageComponent,
  CustomerDisplayPageComponent,
  CustomerCardComponent
} from './components'
import { reducers, dashboardName } from './store'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'forms', component: CustomerFormsPageComponent },
      { path: 'display', component: CustomerDisplayPageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'forms' }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(dashboardName, reducers)
  ],
  declarations: [
    DashboardComponent,
    CustomerFormsPageComponent,
    CustomerDisplayPageComponent,
    CustomerCardComponent
  ]
})
export class DashboardModule {}
