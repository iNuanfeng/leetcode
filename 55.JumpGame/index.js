/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) {
    return true
  }

  var findStart = function(findIndex) {
    for (let i = findIndex - 1; i >= 0; i--) {
      if (nums[i] >= findIndex - i) {
        if (i === 0) {
          return true
        }

        return findStart(i)
      }
    }

    return false
  }

  return findStart(nums.length - 1)
  
};

console.log(canJump([]))