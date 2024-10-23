import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero, HeroConfig } from '../models/models';
import { JsonPipe, NgForOf } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

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
  @Output() heroSelect = new EventEmitter<Hero>();

  onSelect(hero: Hero): void {
    this.heroSelect.emit(hero)
  }
}
