import { IComponentOptions, IController } from 'angular';

interface Component extends IComponentOptions {
  selector: string;
  styles?: any[];
}

export const AppComponent: Component = {
  selector: 'appRoot',
  styles: [require('./app.component.scss')],
  template: require('./app.component.html'),
  controller: class implements IController {
    title: string = 'Tour of Heroes';
  }
}
