const { LinkedListNode } = require("../common");

function isPalindrome(head) {
  if (!head) {
    return false;
  }

  let curr = head;
  let str = "";

  while (curr) {
    str += curr.val.toString();
    curr = curr.next;
  }

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

const node = new LinkedListNode(
  1,
  new LinkedListNode(9, new LinkedListNode(9, new LinkedListNode(1)))
);
console.log(isPalindrome(node));
