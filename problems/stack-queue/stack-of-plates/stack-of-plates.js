const Stack = require("../stack");

class StackOfPlates {
  constructor(capacity) {
    const initialStack = new Stack();
    this.stacks = new Stack();
    this.stacks.push(initialStack);
    this.capacity = capacity;
    this.stacksLength = [0];
  }

  push(el) {
    const activeLength = this.stacksLength[this.stacksLength - 1];
    if (activeLength + 1 >= this.capacity) {
      const newStack = new Stack();
      newStack.push(el);
      this.stacks.push(newStack);
      this.stacksLength.push(1);
      return;
    }
    const activeStack = this.stacks.peek();
    activeStack.push(el);
    this.stacksLength[this.stacksLength - 1]++;
  }

  pop() {
    const activeLength = this.stacksLength[this.stacksLength - 1];

    if (activeLength > 0) {
      const activeStack = this.stacks.peek();
      this.stacksLength[this.stacksLength - 1]--;
      return activeStack.pop();
    }

    this.stacks.pop();
    this.stacksLength.pop();
    const activeStack = this.stacks.peek();
    this.stacksLength[this.stacksLength - 1]--;
    return activeStack.pop();
  }

  popAt(index) {
    if (index <= 0) {
      return this.pop();
    }
  }
}
