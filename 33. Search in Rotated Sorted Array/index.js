/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1

  let binaryFind = function(start, end) {
    if (start === end) {
      if (nums[start] === target) {
        return start
      } else {
        return -1
      }
    }
    if (end - start === 1) {
      if (target === nums[start]) {
        return start
      } else if (target === nums[end]) {
        return end
      } else {
        return -1
      }
    }

    let middleIndex = parseInt((end + start) / 2)

    if (nums[middleIndex] >= nums[start] && target >=nums[start] && target <= nums[middleIndex]) {
      return binaryFind(start, middleIndex)
    } 
    
    if (nums[end] >= nums[middleIndex] && target >= nums[middleIndex] && target <= nums[end]) {
      return binaryFind(middleIndex, end)
    }
    
    if (nums[middleIndex] >= nums[start]) {
      return binaryFind(middleIndex + 1, end)
    } else {
      return binaryFind(start, middleIndex)
    }
  }

  return binaryFind(0, nums.length - 1)
};

console.log(search([4,5,6,7,0,1,2], 0))