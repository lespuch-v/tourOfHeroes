import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeroComponent } from './top-hero.component';
import { Hero } from '../models/models';

describe('TopHeroComponent', () => {
  let component: TopHeroComponent;
  let fixture: ComponentFixture<TopHeroComponent>;

  const mockHeroes: Hero[] = [
    { id: 12, name: 'Dr. Alpachino' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeroComponent);
    component = fixture.componentInstance;

    component.heroes = mockHeroes;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
