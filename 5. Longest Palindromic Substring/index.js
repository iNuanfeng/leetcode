/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === '') return ''
  
  let arr = s.split('')
  let dp = new Array(arr.length).fill([])
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(arr.length).fill(false)
  }

  let max = 1
  let maxStart = 0
  let maxEnd = 0
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        dp[i][j] = true
      }

      if (i - j === 1) {
        dp[i][j] = arr[i] === arr[j]
        if (dp[i][j] && max < 2) {
          max = 2
          maxStart = j
          maxEnd = i
        }
      }

      if (i - j > 1) {
        dp[i][j] = arr[i] === arr[j] && dp[i-1][j+1]
        const len = i - j + 1
        if (dp[i][j] && max < len) {
          max = len
          maxStart = j
          maxEnd = i
        }
      }
    }
  }
  
  let result = ''
  for (let i = maxStart; i <= maxEnd; i++) {
    result += arr[i]
  }
  return result
};

console.log(longestPalindrome('babad'))