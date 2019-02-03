import { UrlRouterProvider, StateProvider } from '@uirouter/angularjs';
import { ILocationProvider } from 'angular';

import { routes } from './routes';

routerConfig.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider'];

export function routerConfig(
  $locationProvider: ILocationProvider,
  $urlRouterProvider: UrlRouterProvider,
  $stateProvider: StateProvider
) {
  $locationProvider.hashPrefix('');

  // $urlRouterProvider.otherwise('/index');

  routes.forEach(route => $stateProvider.state(route));
}
