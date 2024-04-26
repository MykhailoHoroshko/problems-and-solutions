const { LinkedListNode } = require("../linked-lists/common");

class LinkedListQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(el) {
    const newNode = new LinkedListNode(el);
    if (this.last !== null) {
      this.last.next = newNode;
    }
    this.last = newNode;
    if (this.first === null) {
      this.first = this.last;
    }
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.first;
    this.first = this.first.next;

    if (this.first === null) {
      this.last = null;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  isEmpty() {
    return this.first === null;
  }
}

module.exports = LinkedListQueue;
