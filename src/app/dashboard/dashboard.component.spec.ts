import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Hero } from '../models/models';
import { HeroService } from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TopHeroComponent } from '../top-hero/top-hero.component';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: jasmine.SpyObj<HeroService>;

  const mockHeroes: Hero[] = [
    { id: 1, name: 'Zeman' },
  ];

  beforeEach(() => {
    const heroServiceSpy = jasmine.createSpyObj('HeroService', ['getTopRandomHeroes']);
    heroServiceSpy.getTopRandomHeroes.and.returnValue(of(mockHeroes));

    TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        RouterTestingModule,
        TopHeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy }
      ]
    });

    heroService = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zeman should exists 🚀🚀🚀',  () => {
    fixture.detectChanges();

    const zeman = component.topHeroes.find(hero => hero.id === 1);
    expect(zeman).toBeTruthy();
    expect(zeman?.name).toBe('Zeman')
  })
});
