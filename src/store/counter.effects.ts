import { Injectable, inject } from '@angular/core';
import { RandomNumberService } from '../services/random-number-service';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import * as CounterActions from './counter.actions';
import { concatMap, exhaustMap, map, mergeMap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterEffects {
  private readonly randomNumberService = inject(RandomNumberService);
  private readonly action$ = inject(Actions);

  readonly randomNumber$ = createEffect(() => {
    return this.action$.pipe(
      ofType(CounterActions.RANDOM_NUMBER_FETCH),
      mergeMap(() => {
        return this.randomNumberService.getRandomNumber().pipe(
          map((count: number[]) => {
            return CounterActions.RANDOM_NUMBER_UPDATE({
              count: count[0],
            });
          })
        );
      })
    );
  });
}
