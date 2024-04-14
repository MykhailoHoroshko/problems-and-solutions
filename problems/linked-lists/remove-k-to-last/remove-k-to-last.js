const { LinkedListNode } = require("../common");

function kToLast(head, k) {
  const length = findLength(head);

  if (k > length || k <= 0) {
    return;
  }

  const indexToRemove = length - k;
  let curr = head;
  for (let i = 0; i < indexToRemove; i++) {
    if (i !== indexToRemove) {
      curr = curr.next;
    }
  }

  return curr;
}

function findLength(head) {
  let curr = head;
  let count = 0;

  while (curr) {
    count++;
    curr = curr.next;
  }

  return count;
}

function kToLastRecursive(head, k, context) {
  if (head === null) {
    return 0;
  }

  const node = kToLastRecursive(head.next, k, context);
  context.index++;
  if (context.index === k) {
    return head;
  }

  return node;
}

function kToLastRecursiveMain(head, k) {
  const context = { index: 0 };
  return kToLastRecursive(head, k, context);
}

function kToLastIterative(head, k) {
  if (!head || k === 0) {
    return;
  }

  let p1 = head,
    p2 = head,
    index = 0;

  while (index < k) {
    index++;
    p1 = p1.next;
    if (!p1) {
      return;
    }
  }

  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}

const node = new LinkedListNode(
  3,
  new LinkedListNode(
    4,
    new LinkedListNode(
      3,
      new LinkedListNode(5, new LinkedListNode(3, new LinkedListNode(1)))
    )
  )
);

console.log(JSON.stringify(kToLastIterative(node, 1)));
