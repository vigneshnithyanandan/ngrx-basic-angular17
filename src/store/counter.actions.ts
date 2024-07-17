import { createAction, props } from '@ngrx/store';

export const INCREMENT_COUNTER = createAction(
  '[Counter] Increment button clicked'
);

export const DECREMENT_COUNTER = createAction(
  '[Counter] Decrement button clicked'
);

export const RANDOM_NUMBER_FETCH = createAction(
  '[Counter] Random number button clicked'
);

export const RANDOM_NUMBER_UPDATE = createAction(
  '[Counter] Random number fetched',
  props<{ count: number }>()
);
