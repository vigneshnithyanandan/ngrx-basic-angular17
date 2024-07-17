import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { COUNTER_FEATURE_KEY, counterReducer } from './store/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CounterEffects } from './store/counter.effects';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({
      [COUNTER_FEATURE_KEY]: counterReducer,
    }),
    provideEffects(CounterEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
