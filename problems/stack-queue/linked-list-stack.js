const { LinkedListNode } = require("../linked-lists/common");

class LinkedListStack {
  constructor() {
    this.top = null;
  }

  push(el) {
    const newNode = new LinkedListNode(el, this.top);
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.top.val;
    this.top = this.top.next;
    return item;
  }

  peek() {
    return this.top.val;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = LinkedListStack;
