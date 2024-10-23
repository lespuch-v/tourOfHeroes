import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/models';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private heroService: HeroService) {}

}
