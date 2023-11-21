import { ApplicationConfig } from '@angular/core'
import { routes } from './app.routes'
import { provideEffects } from '@ngrx/effects'
import { provideState, provideStore } from '@ngrx/store'
import { provideRouter } from '@angular/router'
import { withInterceptorsFromDi, provideHttpClient, withFetch } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { CustomSerializer, reducers } from './store'
import { RouterStateSerializer } from '@ngrx/router-store'
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
