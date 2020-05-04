/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let dp = new Array(nums.length).fill(0)
  let lastIndex = 0
  let lastVal = 0

  for (let i = 0; i < nums.length; i++) {
    let j
    if (i === 0) {
      j = i
    } else {
      if (lastVal - dp[i] <= 1) {
        j = lastIndex
      } else {
        j = i
      }
    }
    for (j++; j < nums.length && j - i <= nums[i]; j++) {
      if (i === 0) {
        dp[j] = 1
        lastIndex = j
        lastVal = 1

      } else {
        if (dp[j] === 0 || dp[i] + 1 < dp[j]) {
          dp[j] = dp[i] + 1
          lastIndex = j
          lastVal = dp[j]
        }
      }
    }
  }
  return dp[nums.length - 1]
};

console.log(jump([2, 3, 1, 1, 4]))