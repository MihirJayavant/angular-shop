import { routes } from './app.routes'
import { HttpService } from './services'
import { CustomSerializer, reducers } from './store'
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { provideEffects } from '@ngrx/effects'
import { RouterStateSerializer } from '@ngrx/router-store'
import { provideState, provideStore } from '@ngrx/store'

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
