import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { SharedModule } from '../shared/shared.module'

import {
  DashboardComponent,
  CustomerFormsComponent,
  CustomerDisplayComponent,
  CustomerCardComponent
} from './'
import { reducers, dashboardName } from './store'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'forms', component: CustomerFormsComponent },
      { path: 'display', component: CustomerDisplayComponent },
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
    CustomerFormsComponent,
    CustomerDisplayComponent,
    CustomerCardComponent
  ]
})
export class DashboardModule {}
