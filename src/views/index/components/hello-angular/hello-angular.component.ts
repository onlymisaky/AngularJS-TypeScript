import { IComponentOptions, IController } from 'angular';

import './hello-angular.component.scss';

export const helloAngular: IComponentOptions = {
  template: require('./hello-angular.component.html'),
  controller: class implements IController {
    value: string = 'AngularJS';
  }
}
