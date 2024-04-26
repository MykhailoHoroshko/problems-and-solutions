const Stack = require("../stack");

class MyQueue {
  constructor() {
    this.newItems = new Stack();
    this.oldItems = new Stack();
  }

  add(el) {
    this.newItems.push(el);
  }

  remove() {
    this.shiftStacks();
    return this.oldItems.pop();
  }

  peek() {
    this.shiftStacks();
    return this.oldItems.peek();
  }

  shiftStacks() {
    if (this.oldItems.isEmpty()) {
      while (!this.newItems.isEmpty()) {
        this.oldItems.push(this.newItems.pop());
      }
    }
  }
}

const queue = new MyQueue();

queue.add(1);
queue.add(2);
console.log(queue.remove());

console.log(queue.peek());
queue.add(3);
console.log(queue.remove());
console.log(queue.remove());
