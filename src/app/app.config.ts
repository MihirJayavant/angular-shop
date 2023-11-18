import { ApplicationConfig } from '@angular/core'
import { routes } from './app.routes'
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HomeModule } from './home'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { provideRouter } from '@angular/router'
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { CustomSerializer, reducers } from './store'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { HttpService } from './services'

import { provideClientHydration } from '@angular/platform-browser'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      BrowserModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot(),
      environment.production
        ? StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
          })
        : [],
      HomeModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ),
    HttpService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
  ],
}
