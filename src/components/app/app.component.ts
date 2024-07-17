import { Component, inject } from '@angular/core';
import * as CounterActions from '../../store/counter.actions';
import * as CounterSelectors from '../../store/counter.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private store = inject(Store);

  readonly count$ = this.store.select(CounterSelectors.selectCount);

  increment(): void {
    this.store.dispatch(CounterActions.INCREMENT_COUNTER());
  }

  decrement(): void {
    this.store.dispatch(CounterActions.DECREMENT_COUNTER());
  }

  randomize(): void {
    this.store.dispatch(CounterActions.RANDOM_NUMBER_FETCH());
  }
}
