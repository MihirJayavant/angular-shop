import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './'
import { SharedModule } from '../shared/shared.module'
import { CustomerFormsComponent } from './'
import { CustomerDisplayComponent } from './'

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
    CustomerDisplayComponent
  ]
})
export class DashboardModule {}
