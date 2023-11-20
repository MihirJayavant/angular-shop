import { ApplicationConfig } from '@angular/core'
import { routes } from './app.routes'
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'
import { EffectsModule, provideEffects } from '@ngrx/effects'
import { StoreModule, provideState, provideStore } from '@ngrx/store'
import { provideRouter } from '@angular/router'
import { withInterceptorsFromDi, provideHttpClient, withFetch } from '@angular/common/http'
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
    provideStore(),
    provideState('shop', reducers),
    provideEffects(),
    HttpService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideRouter(routes),
  ],
}
