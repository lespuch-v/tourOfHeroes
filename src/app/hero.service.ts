import { Injectable } from '@angular/core';
import { Observable, of, throwError, EMPTY } from 'rxjs';
import { Hero } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly MAX_NAME_LENGTH = 13;

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

  get maxNameLength(): number {
    return this.MAX_NAME_LENGTH;
  }

  getTopRandomHeroes(count: number): Observable<Hero[]> {
    let shuffleHeroes = [...this.heroes];

    for (let i = shuffleHeroes.length - 1; i > 0; i--) {
      const randomNum = Math.floor(Math.random() * (i +1));
      [shuffleHeroes[i], shuffleHeroes[randomNum]] = [shuffleHeroes[randomNum], shuffleHeroes[i]];
    }
    return of(shuffleHeroes.slice(0, count));
  }

  updateHero(hero: Hero): Observable<Hero> {
    const index = this.heroes.findIndex(h => h.id === hero.id);
    if (index > -1) {
      this.heroes[index] = { ...hero };
      return of(this.heroes[index]);
    }
    return throwError(() => new Error(`No Hero with id ${hero.id}`));
  }

  deleteHero(heroToDelete: Hero): Observable<void> {
    const index = this.heroes.findIndex(h => h.id === heroToDelete.id);
    if (index > -1) {
      this.heroes.splice(index, 1);
      return EMPTY;
    }
    return throwError(() => new Error(`No hero with id ${heroToDelete.id}`));
  }

  addNewHero(heroName: string): Observable<Hero> {
    const getNextId = Math.max(...this.heroes.map(hero => hero.id), 0) + 1;

    const newHero: Hero = {
      id: getNextId,
      name: heroName
    }
    this.heroes.push(newHero)


    return of(newHero);
  }
}
