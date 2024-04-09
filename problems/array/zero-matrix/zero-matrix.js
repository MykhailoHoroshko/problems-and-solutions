function zeroMatrix(matrix) {
  if (matrix.length === 0 || (matrix[0] && matrix[0].length === 0)) {
    return;
  }
  const zeroRow = new Set();
  const zeroCol = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroRow.has(i)) {
        matrix[i][j] = 0;
      } else if (zeroCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}

let matrix = [
  [0, 1, 2, 1],
  [3, 4, 5, 6],
  [6, 7, 1, 0],
];
zeroMatrix(matrix);
console.log(matrix.join("\n"));
