import {
  Ng1StateDeclaration,
  Transition,
  StateDeclaration
} from '@uirouter/angularjs';

import * as angular from 'angular';

import { ILazyLoad } from 'oclazyload';


export const routes: Ng1StateDeclaration[] = [
  { name: 'index', url: '', redirectTo: { state: 'dashboard' } },
  { name: 'dashboard', url: '/dashboard', component: 'appDashboard' },
  { name: 'detail', url: '/detail/:id', component: 'appDetail' },
  { name: 'heroes', url: '/heroes', component: 'appHeroes'},
];
