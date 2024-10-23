import { Component, Input } from '@angular/core';
import { Hero, HeroConfig } from '../models/models';
import { JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-top-hero',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './top-hero.component.html',
  styleUrl: './top-hero.component.css'
})
export class TopHeroComponent {
  @Input() heroes!: Hero[];

}
