import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HomeComponent, LoginComponent } from './home'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { DashboardModule } from './dashboard/dashboard.module'

const routes: Routes = [
                        {path: 'home', component: HomeComponent},
                        {path: '', pathMatch: 'full', redirectTo: 'home'}
                      ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, environment.production ? {} : {enableTracing: true}),
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
