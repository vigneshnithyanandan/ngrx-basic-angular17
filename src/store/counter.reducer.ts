import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  currentCount: number;
}

export const INITIAL_STATE: CounterState = {
  currentCount: 0,
};

export const COUNTER_FEATURE_KEY = 'counter';

export const counterReducer = createReducer(
  INITIAL_STATE,
  on(CounterActions.INCREMENT_COUNTER, (state) => {
    return {
      ...state,
      currentCount: state.currentCount + 1,
    };
  }),
  on(CounterActions.DECREMENT_COUNTER, (state) => {
    return {
      ...state,
      currentCount: state.currentCount - 1,
    };
  }),
  on(CounterActions.RANDOM_NUMBER_UPDATE, (state, prop) => {
    return {
      ...state,
      currentCount: prop.count,
    };
  })
);
