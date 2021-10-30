import { AbnormalMonitor } from './base/AbnormalMonitor';
import { UploadMessage } from './decleration';
import { Config } from './base/Config';
import { version } from '../package.json';
import Queue from './base/queue';

let count = 0;
const queue = new Queue<UploadMessage>();
class Starter {
  version: string;

  monitored: boolean;

  config: Config<UploadMessage>;

  constructor(uploadUrl: string, projectId: string) {
    this.config = new Config(uploadUrl, projectId, queue);
    this.monitored = false;
    this.version = version;
  }

  start() {
    if (!this.monitored) {
      [new AbnormalMonitor<UploadMessage>(this.config)].forEach((item) => {
        setInterval(() => {
          item.push({ type: 'resource', message: String((count += 1)) });
        }, 4000);
      });
      this.upload();
      this.monitored = true;
    }
  }

  upload() {
    while (!queue.isEmpty()) {
      const ele = queue.peek();
      console.log('ele', ele);
    }
    requestAnimationFrame(() => {
      this.upload();
    });
  }
}

export default Starter;
