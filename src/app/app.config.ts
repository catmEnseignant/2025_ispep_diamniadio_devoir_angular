import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; 
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES), 
    provideHttpClient(withInterceptorsFromDi())
  ]
};
