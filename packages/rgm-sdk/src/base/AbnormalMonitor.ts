import { BaseMonitor } from './monitor';
import { Config } from './Config';

// 处理全局异常事件
export class AbnormalMonitor<T> extends BaseMonitor<T> {
  constructor(config: Config<T>) {
    super(config);
  }

  startListener() {}
}
