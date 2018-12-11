import * as angular from 'angular';
import * as uiRouter from '@uirouter/angularjs';
import 'oclazyload';

import { routerConfig } from './router.config';
import { routeChange } from './router.transitions';

export const routerModule: string = angular
  .module('app.router', [
    uiRouter.default,
    'oc.lazyLoad'
  ])
  .config(routerConfig)
  .run(routeChange)
  .name;
