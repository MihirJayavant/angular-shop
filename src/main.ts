import { routes } from './app/app.module'
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HomeModule } from './app/home'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from './environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { provideRouter } from '@angular/router'
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { CustomSerializer, reducers } from './app/store'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { HttpService } from './app/services'

bootstrapApplication(AppComponent, {
  providers: [
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
}).catch(err => console.error(err))
