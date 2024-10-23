import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Hero } from '../models/models';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { distinctUntilChanged, Subject } from 'rxjs';
import { LimitCharactersDirective } from '../directives/limit-characters.directive';

@Component({
  selector: 'app-hero-detal',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    LimitCharactersDirective
  ],
  templateUrl: './hero-detal.component.html',
  styleUrl: './hero-detal.component.css'
})
export class HeroDetalComponent implements OnInit, OnDestroy{
  @Input() hero?: Hero;
  @Output() heroChange = new EventEmitter<Hero>();
  private nameSubject = new Subject<string>();
  maxCharacterLimit: number = 13;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.nameSubject.pipe(
      distinctUntilChanged()
    ).subscribe(newName => {
      if (this.hero) {
        const updatedHero: Hero = {
          ...this.hero,
          name: newName
        };
        this.heroService.updateHero(updatedHero).subscribe({
          next: (savedHero) => {
            this.hero = savedHero;
            this.heroChange.emit(savedHero);
          },
          error: (error) => {
            console.error('Error saving hero:', error);
          }
        });
      }
    });
  }

  heroChangeName(newHeroName: string): void {
    this.nameSubject.next(newHeroName);
  }

  ngOnDestroy() {
    this.nameSubject.complete();
  }
}
