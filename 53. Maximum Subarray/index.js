/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      count += nums[i]
      max = max > count ? max : count
    } else {
      if (count + nums[i] > 0) {
        count += nums[i]
        max = max > count ? max : count
      } else if (nums[i] > max) {
        count = 0
        max = nums[i]
      } else {
        count = 0
      }
    }
  }

  return max
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2, -1]))