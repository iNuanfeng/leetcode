/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let dp = new Array(matrix.length).fill(0)
  dp = dp.map(item => new Array(matrix[0].length).fill(0))
  let max = 0

  for (let i = 0; i < matrix.length; i++) {
    
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 3 && j == 2) {
        console.log(4)
      }
      if (matrix[i][j] === '0') {
        dp[i][j] = 0
      }

      if (matrix[i][j] === '1') {
        dp[i][j] = 1
        max = dp[i][j] > max ? dp[i][j] : max

        if (i - 1 >= 0 && j - 1 >= 0) {
          if (dp[i - 1][j - 1] >= 1) {
            let isSquare = true

            // 开始判断
            for (m = 1; m <= dp[i - 1][j - 1]; m++) {
              if (matrix[i - m][j] === '0') {
                dp[i][j] = dp[i][j] + m - 1
                isSquare = false
                break
              }
              if (matrix[i][j - m] === '0') {
                dp[i][j] = dp[i][j] + m - 1
                isSquare = false
                break
              }
            }

            dp[i][j] = isSquare ? dp[i - 1][j - 1] + 1 : dp[i][j]
            max = dp[i][j] > max ? dp[i][j] : max
          }
        }
      }
    }
  }

  return max * max
};

// console.log(maximalSquare([
//   ['1', '0', '1', '0', '0'],
//   ['1', '0', '1', '1', '1'],
//   ['1', '1', '1', '1', '1'],
//   ['1', '0', '0', '1', '0']
// ]))

// console.log(maximalSquare(['0']))
// console.log(maximalSquare(['1']))
console.log(maximalSquare([
  ["0", "0", "0", "1"],
  ["1", "1", "0", "1"],
  ["1", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["0", "1", "1", "1"]
]))