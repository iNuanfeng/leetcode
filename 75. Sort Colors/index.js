/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var quickSort = function(start, end) {
    if (end - start === 0) return

    var center = parseInt((end + start) / 2)

    for (let i = start; i <= center; i++) {
      for (let j = end; j > center; j--) {
        if (nums[i] > nums[j]) {
          var tmp = nums[i]
          nums[i] = nums[j]
          nums[j] = tmp
          i--
          break;
        }
      }
    }

    quickSort(start, center)
    quickSort(center + 1, end)
  }

  quickSort(0, nums.length - 1)

  return nums
  
};

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([7,2,1,5,3,4,6]))