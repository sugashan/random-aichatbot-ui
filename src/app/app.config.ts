import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpErrorHandler } from './service/http-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), HttpErrorHandler],
};
