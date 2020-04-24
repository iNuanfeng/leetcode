/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b)
  const v = (sum / 2)

  if (v % 1 !== 0) {
    return false
  }

  const dp = new Array(v+1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    for (let j = v; j > 0 && j >= nums[i]; j--) {
      let tmp = dp[j-nums[i]] + nums[i]
      dp[j] = dp[j] > tmp ? dp[j] : tmp
    }
  }

  return dp[v] === v
};

console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))
// console.log(canPartition([1, 1]))

