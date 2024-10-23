import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero, HeroConfig } from '../models/models';
import { NgForOf, NgIf } from '@angular/common';
import { TopHeroComponent } from '../top-hero/top-hero.component';
import { HeroDetalComponent } from '../hero-detal/hero-detal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    TopHeroComponent,
    HeroDetalComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  topHeroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getTopRandomHeroes(4).subscribe(result => {
      this.topHeroes = result
    })
  }

  onHeroSelect(hero: Hero): void {
    this.selectedHero = {...hero};
    console.log(this.selectedHero);
  }

  onHeroChange(hero: Hero): void {
    const index = this.topHeroes.findIndex(h => h.id === hero.id);
    if (index > -1) {
      this.topHeroes[index] = {...hero};
    }
    if (this.selectedHero?.id === hero.id) {
      this.selectedHero = {...hero};
    }
  }

}
