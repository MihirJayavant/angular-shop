import { CustomSerializer, reducers } from './store'
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { provideState, provideStore } from '@ngrx/store'
import { ApplicationConfig } from '@angular/core'
import { HttpService } from './services'
import { RouterStateSerializer } from '@ngrx/router-store'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideClientHydration } from '@angular/platform-browser'
import { provideEffects } from '@ngrx/effects'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'

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
