class Queue {
  constructor() {
    this._queue = [];
  }

  // enqueue
  add(el) {
    this._queue.push(el);
  }

  // dequeue
  remove() {
    return this._queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this._queue[0];
  }

  isEmpty() {
    return this._queue.length === 0;
  }
}

module.exports = Queue;
