import {
  Ng1StateDeclaration,
  Transition,
  StateDeclaration
} from '@uirouter/angularjs';

import { DashboardComponent } from '@/app/dashboard/dashboard.component';
import { HeroDetailComponent } from '@/app/hero-detail/hero-detail.component';
import { HeroesComponent } from '@/app/heroes/heroes.component';


export const routes: Ng1StateDeclaration[] = [
  { name: 'index', url: '', redirectTo: { state: 'dashboard' } },
  { name: 'dashboard', url: '/dashboard', component: DashboardComponent.selector },
  { name: 'detail', url: '/detail/:id', component: HeroDetailComponent.selector },
  { name: 'heroes', url: '/heroes', component: HeroesComponent.selector },
];
