const Stack = require("../stack");

class StackMin {
  constructor() {
    this._stack = [];
    this._minStack = new Stack();
  }

  push(el) {
    if (this._minStack.isEmpty() || this.min() >= el) {
      this._minStack.push(el);
    }
    this._stack.push(el);
  }

  pop() {
    const el = this._stack.pop();
    if (this.min() === el) {
      this._minStack.pop();
    }
    return el;
  }

  min() {
    if (this._minStack.isEmpty()) {
      return null;
    }

    return this._minStack.peek();
  }
}

const stack = new StackMin();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.min());
stack.push(0);
console.log(stack.min());
stack.push(-1);
stack.push(-1);
stack.push(5);
console.log(stack.min());
