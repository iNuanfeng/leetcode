/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let map = new Object(null)

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      delete map[nums[i]]
    } else {
      map[nums[i]] = nums[i]
    }
  }

  let result = []

  for (let i in map) {
    result.push(map[i])
  }

  return result
};

console.log(singleNumbers([4,1,4,6]))