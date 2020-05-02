/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length

  const floor = parseInt(len / 2)

  for (let i = 0; i < floor; i++) {
    for (let j = i; j < len - i - 1; j++) {
      const tmp = matrix[i][j]

      matrix[i][j] = matrix[len - j - 1][i]
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1]
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1]
      matrix[j][len - i - 1] = tmp
    }
  }
};

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let matrix = [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
let matrix = [
  [2, 29, 20, 26, 16, 28],
  [12, 27, 9, 25, 13, 21],
  [32, 33, 32, 2, 28, 14],
  [13, 14, 32, 27, 22, 26],
  [33, 1, 20, 7, 21, 7],
  [4, 24, 1, 6, 32, 34]
]
rotate(matrix)
console.log(matrix)