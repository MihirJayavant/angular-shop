import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import {
  DashboardComponent,
  CustomerFormsComponent,
  CustomerDisplayComponent,
  CustomerCardComponent
} from './'

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
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [
    DashboardComponent,
    CustomerFormsComponent,
    CustomerDisplayComponent,
    CustomerCardComponent
  ]
})
export class DashboardModule {}
