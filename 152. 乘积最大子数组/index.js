/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let dp = new Array(nums.length).fill(1)

  let max
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j] = dp[j] * nums[i]
      if (max === undefined || max < dp[j]) {
        max = dp[j]
      }
    }
  }

  return max

};

console.log(maxProduct([-2,0,-1]))