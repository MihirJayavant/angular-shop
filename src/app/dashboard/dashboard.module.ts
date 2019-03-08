import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
      { path: 'forms', component: CustomerFormsPageComponent },
      { path: 'display', component: CustomerDisplayPageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'forms' }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(dashboardName, reducers),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [...components, ...pipes],
  providers: [...services]
})
export class DashboardModule {}
