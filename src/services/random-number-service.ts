import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
  private readonly http = inject(HttpClient);

  getRandomNumber(): Observable<number[]> {
    return this.http.get<number[]>(
      'https://www.randomnumberapi.com/api/v1.0/random?min=0&max=100'
    );
  }
}
