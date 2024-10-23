import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Hero } from '../models/models';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { LimitCharactersDirective } from '../directives/limit-characters.directive';
import { MaxLengthMessageComponent } from '../max-lenght-message/max-length-message.component';
import { AddNewHeroComponent } from './add-new-hero/add-new-hero.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    LimitCharactersDirective,
    MaxLengthMessageComponent,
    AddNewHeroComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  allHeroes: Hero[] = []
  newHeroName: string = '';

  constructor(public heroService: HeroService) {
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

  addHero(hero: string) {
    this.heroService.addNewHero(hero).subscribe({
      next: (hero) => {
        console.log('New hero added:', hero)
      }
    })
  }

}
