class Stack {
  constructor() {
    this._stack = [];
  }

  get length() {
    return this._stack.length;
  }

  push(el) {
    this._stack.push(el);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    if (this._stack.length === 0) {
      return null;
    }

    return this._stack[this._stack.length - 1];
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}

module.exports = Stack;
