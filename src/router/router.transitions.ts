import { Transition } from '@uirouter/angularjs';
import * as NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export function routeChange($transitions: Transition) {
  $transitions.onStart({}, (transition) => {
    NProgress.start();
  });

  $transitions.onFinish({}, (transition) => {
    NProgress.done();
  });
}

routeChange.$inject = ['$transitions'];

// https://ui-router.github.io/guide/ng1/migrate-to-1_0#state-change-events
// $stateChangeStart $stateChangeCancel $stateChangeSuccess $stateChangeError $stateNotFound
