import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../models/models';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-top-hero',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './top-hero.component.html',
  styleUrl: './top-hero.component.css'
})
export class TopHeroComponent {
  @Input() heroes!: Hero[];
  @Output() heroSelect = new EventEmitter<Hero>();

  onSelect(hero: Hero): void {
    this.heroSelect.emit(hero)
  }
}
