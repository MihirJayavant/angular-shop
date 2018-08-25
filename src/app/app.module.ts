import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { HomeComponent, LoginComponent } from './home'
import { DashboardModule } from './dashboard/dashboard.module'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      environment.enableTracing ? { enableTracing: true } : {}
    ),
    DashboardModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
