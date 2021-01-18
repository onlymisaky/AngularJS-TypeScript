import { UrlRouterProvider, StateProvider } from '@uirouter/angularjs';
import { ILocationProvider } from 'angular';

import { routes } from './routes';

export function routerConfig(
  $locationProvider: ILocationProvider,
  $urlRouterProvider: UrlRouterProvider,
  $stateProvider: StateProvider,
) {
  $locationProvider.hashPrefix('');

  // $urlRouterProvider.otherwise('/index');

  routes.forEach((route) => $stateProvider.state(route));
}

routerConfig.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
];
