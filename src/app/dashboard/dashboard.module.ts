import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from '.'

const routes: Routes = [
                        { path: 'dashboard', component: DashboardComponent }
                      ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
