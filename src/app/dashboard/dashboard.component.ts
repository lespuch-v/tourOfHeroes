import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero, HeroConfig } from '../models/models';
import { NgForOf, NgIf } from '@angular/common';
import { TopHeroComponent } from '../top-hero/top-hero.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    TopHeroComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  topHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getTopRandomHeroes(4).subscribe(result => {
      this.topHeroes = result
    })
  }

}
