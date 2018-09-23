import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store',
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { DashboardModule } from './dashboard'
import { HomeModule } from './home'

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' }]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      environment.enableTracing ? { enableTracing: true } : {}
    ),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    DashboardModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
