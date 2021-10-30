import Queue from './queue';

export class Config<T> {
  uploadUrl: string;

  projectId: string;

  queue: Queue<T>;

  constructor(uploadUrl: string, projectId: string, queue: Queue<T>) {
    this.uploadUrl = uploadUrl;
    this.projectId = projectId;
    this.queue = queue;
  }
}
