import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxSkeletonLoader } from 'ngx-skeleton-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //NOTE:include this, otherwise circular dependency error
    provideHttpClient(),
    provideNgxSkeletonLoader({
      theme: {
        extendsFromRoot: true,
      },
    }),
  ],
};
