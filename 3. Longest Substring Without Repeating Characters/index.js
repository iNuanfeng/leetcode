/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length
  if (len === 0) {
    return 0
  }
  let max = 1

  let dp = new Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    let count = 1
    dp[i]  = count
    for (let j = i - 1; j >= 0; j--) {
      if (s.substr(i,1) !== s.substr(j, 1) && dp[j] !== 0) {
        dp[j] = ++count
        max = count > max ? count : max
      } else {
        dp[j] = 0
        break
      }
    }
  }

  return max
};

console.log(lengthOfLongestSubstring('abcdba'))