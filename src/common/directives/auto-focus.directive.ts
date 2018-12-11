import { IDirective } from 'angular';

autoFocus.$inject = [];
export function autoFocus(): IDirective {
  return {
    restrict: 'A',
    link($scope, $ele, $attr) {
      $ele[0].focus();
    },
  }
}
