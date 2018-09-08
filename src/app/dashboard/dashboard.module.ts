import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
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
import { FilterCustomerNamePipe } from './pipes'
import { FilterCustomerTypePipe } from './pipes/filter-customer-type.pipe'

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(dashboardName, reducers),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    CustomerFormsPageComponent,
    CustomerDisplayPageComponent,
    CustomerCardComponent,
    FilterCustomerNamePipe,
    FilterCustomerTypePipe
  ]
})
export class DashboardModule {}
