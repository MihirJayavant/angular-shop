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
  components
} from './components'
import { reducers, dashboardName, effects } from './store'
import { pipes } from './pipes'
import { services } from './services'
import { EffectsModule } from '@ngrx/effects'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'forms', component: CustomerFormsPageComponent, data: { animation: 'FormsPage' } },
      {
        path: 'display',
        component: CustomerDisplayPageComponent,
        data: { animation: 'DisplayPage' }
      },
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
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [DashboardComponent, ...components, ...pipes],
  providers: [...services]
})
export class DashboardModule {}
