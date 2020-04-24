var canPartition = function (nums) {
  let sum = nums.reduce((pre, v) => {
      return pre + v
  }, 0)

  if (sum % 2 == 1) return false
  let dp = new Array(nums.length)
  for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(sum / 2 + 1).fill(false)
  }
  dp[0][0] = true
  dp[0][nums[0]] = true
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j <= sum / 2; j++) {
          if (j - nums[i] >= 0) {
              dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
          } else {
              dp[i][j] = dp[i - 1][j]
          }
      }
  }
  console.log(dp)
  return dp[nums.length - 1][sum / 2]
};

console.log(canPartition([1, 5, 11, 5]))