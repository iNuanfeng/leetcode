/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let dp = new Array(nums.length).fill(0)

  let count = 0
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j] = dp[j] + nums[i]
      if (dp[j] === k) count++
    }
  }

  return count

};

console.log(subarraySum([1,2,1,2,1], 3))