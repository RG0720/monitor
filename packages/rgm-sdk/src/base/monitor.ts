import { Config } from './Config';

export class BaseMonitor<T> {
  config: Config<T>;

  constructor(config: Config<T>) {
    this.config = config;
  }

  startListener() {}

  push(message: T) {
    this.config.queue.add(message);
  }
}
