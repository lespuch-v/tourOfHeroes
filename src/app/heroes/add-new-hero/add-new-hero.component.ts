import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LimitCharactersDirective } from '../../directives/limit-characters.directive';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-add-new-hero',
  standalone: true,
  imports: [
    FormsModule,
    LimitCharactersDirective
  ],
  templateUrl: './add-new-hero.component.html',
  styleUrl: './add-new-hero.component.css'
})
export class AddNewHeroComponent {

  heroName: string = '';
  @Output() heroAdded = new EventEmitter<string>();

  constructor(public heroService: HeroService) {}

  addHero (): void {
    this.heroAdded.emit(this.heroName);
    this.heroName = '';
  }
}
