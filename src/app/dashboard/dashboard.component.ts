import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/models';
import { NgForOf, NgIf } from '@angular/common';
import { TopHeroComponent } from '../top-hero/top-hero.component';
import { HeroDetalComponent } from '../hero-detal/hero-detal.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    TopHeroComponent,
    HeroDetalComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  topHeroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.heroService.getTopRandomHeroes(4).subscribe(result => {
      this.topHeroes = result
    })
  }

  onHeroSelect(hero: Hero): void {
    this.selectedHero = hero;
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


  isDetailView(): boolean {
    return this.router.url.includes('hero');
  }
}
