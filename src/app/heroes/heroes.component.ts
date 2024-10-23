import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Hero } from '../models/models';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  allHeroes: Hero[] = []

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes().subscribe(result => {
      this.allHeroes = result;
    })
  }

  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(result => {
      console.log('Hero deleted...')
    })
  }

}
