import { EleType } from '../decleration';

class Queue<T> {
  queue: EleType<T>;

  count: number;

  start: number;

  constructor() {
    this.queue = {};
    this.start = 0;
    this.count = 0;
  }

  add(ele: T) {
    this.queue[(this.count += 1)] = ele;
    console.log(this);
  }

  peek(): T | null {
    if (!this.isEmpty()) {
      const temp = this.queue[this.start];
      delete this.queue[(this.start += 1)];
      this.count -= 1;
      console.log('peek', this);
      return temp;
    }
    return null;
  }

  isEmpty() {
    return this.count === 0;
  }
}
// console.time("queue");
const queue = new Queue<number>();
queue.add(1);
queue.add(2);

console.log(queue.peek());
console.log(queue.peek());
// console.log(queue.peek());
// for (let i = 0; i < 100000; i++) {
//   queue.add(i);
// }
// while (!queue.isEmpty()) {
//   queue.peek();
// }
// console.timeEnd("queue");

// console.time("arr");
// const arr = [];
// for (let i = 0; i < 100000; i++) {
//   arr.push(i);
// }
// while (arr.length > 0) {
//   arr.shift();
// }
// console.timeEnd("arr");

// queue: 11.68ms
// arr: 885.655ms

export default Queue;
