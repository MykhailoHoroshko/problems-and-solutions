const Stack = require("../stack");

function sortStack(stack) {
  const sortedStack = new Stack();

  sortedStack.push(stack.pop());
  while (!stack.isEmpty()) {
    const el = stack.pop();
    if (el > sortedStack.peek()) {
      sortedStack.push(el);
    } else {
      while (el <= sortedStack.peek() && !sortedStack.isEmpty()) {
        stack.push(sortedStack.pop());
      }
      sortedStack.push(el);
    }
  }

  while (!sortedStack.isEmpty()) {
    stack.push(sortedStack.pop());
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(2);
stack.push(0);
stack.push(1);

sortStack(stack);
console.log(JSON.stringify(stack));
