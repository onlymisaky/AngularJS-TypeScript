import {
  Ng1StateDeclaration,
  Transition,
  StateDeclaration
} from '@uirouter/angularjs';

export const routes: Ng1StateDeclaration[] = [
  {
    name: 'index',
    url: '/index',
    component: 'index',
    lazyLoad(transition, state) {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
      return import('@/views/index/index.module').then(ngModule => $ocLazyLoad.load({ name: ngModule.default }))
    }
  }
];
