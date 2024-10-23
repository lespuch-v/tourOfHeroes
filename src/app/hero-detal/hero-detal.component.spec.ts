import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HeroDetalComponent } from './hero-detal.component';
import { HeroService } from '../hero.service';
import { Hero } from '../models/models';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('HeroDetalComponent', () => {
  let component: HeroDetalComponent;
  let fixture: ComponentFixture<HeroDetalComponent>;
  let heroService: jasmine.SpyObj<HeroService>;

  const mockHero: Hero = { id: 13, name: 'Jesus Christ'}

  beforeEach(() => {
    const heroServiceSpy = jasmine.createSpyObj('HeroService', ['getAllHeroes']);
    heroServiceSpy.getAllHeroes.and.returnValue(of([mockHero]));

    TestBed.configureTestingModule({
      imports: [
        HeroDetalComponent,
        FormsModule
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 13 })
          }
        }
      ]
    });

    heroService = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
    fixture = TestBed.createComponent(HeroDetalComponent);
    component = fixture.componentInstance;
  });

  it('should shows hero details if exists', fakeAsync(() => {

    fixture.detectChanges();
    tick();


    expect(component.hero).toBeTruthy();
    expect(component.hero?.id).toBe(13);
    expect(component.hero?.name).toBe('Jesus Christ');

    const compiled = fixture.nativeElement;
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Jesus Christ');
    expect(compiled.textContent).toContain('13');
  }));
});
