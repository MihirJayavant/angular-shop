import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'

import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { DashboardModule } from './dashboard'
import { HomeModule } from './home'
import { HttpService } from './services'
import { reducers, CustomSerializer } from './store'

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' }]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: environment.enableTracing }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25 // Retains last 25 states
        })
      : [],
    DashboardModule,
    HomeModule
  ],
  providers: [HttpService, { provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
