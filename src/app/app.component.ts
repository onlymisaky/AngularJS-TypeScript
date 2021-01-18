import { IComponentOptions, IController } from 'angular';
import './app.component.scss';

export const AppComponent: IComponentOptions = {
  template: require('./app.component.html'),
  controller: class implements IController {
    title: string = 'Tour of Heroes';
  },
};
