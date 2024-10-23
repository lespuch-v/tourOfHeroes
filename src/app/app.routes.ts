import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetalComponent } from './hero-detal/hero-detal.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'hero/:id', component: HeroDetalComponent }
    ]
  },
  { path: 'heroes', component: HeroesComponent }
];
