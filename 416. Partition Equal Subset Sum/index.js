/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b)
  const v = (sum / 2)
  const len = nums.length

  if (v % 1 !== 0) {
    return false
  }

  var max = function(a, b) {
    a = a || 0
    b = b || 0
    return a > b ? a : b
  }
  
  nums.unshift(0)

  const dp = []
  for (let i=0; i<nums.length; i++) {
    dp.push([])
    for (let j=0; j<=v; j++) {
      dp[i][j] = 0
    }
  }

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= v; j++) {
      if (nums[i] <= j) {
        dp[i][j] = max(dp[i-1][j], (dp[i-1][j-nums[i]] || 0) + nums[i])
      } else {
        dp[i][j] = dp[i-1][j]
      }
    }
  }

  return dp[len][v] === v

};

// console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([1, 1]))

