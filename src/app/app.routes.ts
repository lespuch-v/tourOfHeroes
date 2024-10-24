import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'hero/:id',
        loadComponent: () => import('./hero-detal/hero-detal.component')
          .then(m => m.HeroDetalComponent)
      }
    ]
  },
  { path: 'heroes', component: HeroesComponent }
];
