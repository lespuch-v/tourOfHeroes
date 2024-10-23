import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  getAllHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getTopRandomHeroes(count: number): Observable<Hero[]> {
    let shuffleHeroes = [...this.heroes];

    for (let i = shuffleHeroes.length - 1; i > 0; i--) {
      const randomNum = Math.floor(Math.random() * (i +1));
      [shuffleHeroes[i], shuffleHeroes[randomNum]] = [shuffleHeroes[randomNum], shuffleHeroes[i]];
    }
    return of(shuffleHeroes.slice(0, count));
  }
}
