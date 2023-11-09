// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

// Recursive solution

// function inorderTraversal(A, res = []) {
//   if (!A) {
//     return res;
//   }
//   res = inorderTraversal(A.left, res);
//   res.push(A.data);
//   res = inorderTraversal(A.right, res);
//   return res;
// }

function inorderTraversal(A) {
  const traversal = [];
  const stack = [];
  let curr = A;

  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    traversal.push(curr.data);
    curr = curr.right;
  }

  return traversal;
}

module.exports = {
  //param A : root node of tree
  //return a array of integers
  inorderTraversal: inorderTraversal,
};
