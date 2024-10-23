import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Hero } from '../models/models';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { map, Subject, switchMap, takeUntil } from 'rxjs';
import { LimitCharactersDirective } from '../directives/limit-characters.directive';
import { MaxLengthMessageComponent } from '../max-lenght-message/max-length-message.component';

@Component({
  selector: 'app-hero-detal',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    LimitCharactersDirective,
    MaxLengthMessageComponent
  ],
  templateUrl: './hero-detal.component.html',
  styleUrl: './hero-detal.component.css'
})
export class HeroDetalComponent implements OnInit, OnDestroy{
  @Input() hero?: Hero;
  @Output() heroChange = new EventEmitter<Hero>();
  private destroy$ = new Subject<void>();
  private nameSubject = new Subject<string>();
  maxCharacterLimit: number = 13;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        const id = Number(params['id']);
        return this.heroService.getAllHeroes().pipe(
          map(heroes => {
            const foundHero = heroes.find(h => h.id === id);
            return foundHero;
          })
        );
      }),
      takeUntil(this.destroy$)
    ).subscribe(hero => {
      this.hero = hero;
    });
  }

  heroChangeName(newHeroName: string): void {
    this.nameSubject.next(newHeroName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
