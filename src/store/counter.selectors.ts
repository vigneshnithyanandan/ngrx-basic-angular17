import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_FEATURE_KEY, CounterState } from './counter.reducer';

const counterFeatureSelector =
  createFeatureSelector<CounterState>(COUNTER_FEATURE_KEY);

export const selectCount = createSelector(
  counterFeatureSelector,
  (counterState) => counterState.currentCount
);
