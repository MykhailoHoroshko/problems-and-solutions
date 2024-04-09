/**
 * [
 *  [1,2,3],
 *  [4,5,6],
 *  [7,8,9]
 * ]
 *
 * [
 *  [7,4,1],
 *  [8,5,2],
 *  [9,6,3]
 * ]
 *
 * [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,10,11,12],
 *  [13,14,15,16]
 * ]
 *
 * [
 *  [13,9,5,1],
 *  [14,10,6,2],
 *  [15,11,7,3],
 *  [16,12,8,4]
 * ]
 */

function rotateMatrix(matrix) {
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - layer - 1;
    for (let i = first; i < last; i++) {
      const top = matrix[layer][layer + i];
      const left = matrix[n - 1 - layer - i][layer];
      const bottom = matrix[n - 1 - layer][n - 1 - layer - i];
      const right = matrix[layer + i][n - 1 - layer];
      // tmp = top
      const tmp = top;
      // top = left
      matrix[layer][layer + i] = left;
      // left = bottom
      matrix[n - 1 - layer - i][layer] = bottom;
      // bottom = right
      matrix[n - 1 - layer][n - 1 - layer - i] = right;
      // right = tmp
      matrix[layer + i][n - 1 - layer] = tmp;
    }
  }
}
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

rotateMatrix(matrix);
console.table(matrix);
