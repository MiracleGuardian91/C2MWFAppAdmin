import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';
import { ConnectionReconnectContext } from '../models/bpmn/event-contexts';

export class CustomCommandInterceptor extends CommandInterceptor {
  [x: string]: any;

  constructor(eventBus, modeling) {
    super(eventBus);

  }

  static $inject = ['eventBus', 'modeling'];
}