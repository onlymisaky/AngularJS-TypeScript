import { IComponentOptions, IController } from 'angular';
import { MessageService } from '@/app/message.service';
import './messages.component.scss';

export const MessagesComponent: IComponentOptions = {
  template: require('./messages.component.html'),
  controller: class implements IController {
    static $inject: string[] = ['MessageService'];

    constructor(private messageService: MessageService) { }
  },
};
