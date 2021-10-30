export type UploadType = 'js' | 'http' | 'resource';

export class UploadMessage {
  type: UploadType;

  message: string;

  constructor(type: UploadType, message: string) {
    this.type = type;
    this.message = message;
  }
}

export interface EleType<T> {
  [name: number]: T;
}
