import { IComponentOptions, IController } from 'angular';
import { MessageService } from '@/app/message.service';

interface Component extends IComponentOptions {
  selector: string;
  styles?: any[];
}

export const MessagesComponent: Component = {
  selector: 'appMessages',
  styles: [require('./messages.component.scss')],
  
  template: require('./messages.component.html'),
  controller: class implements IController {
    static $inject: string[] = ['MessageService'];
    constructor(private messageService: MessageService) { }
  }
}
