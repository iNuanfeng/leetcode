/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var sortNums = nums.sort(function(a, b) {
    return a - b
  })
  var len = nums.length
  var arrs = []

  var inArrays = function(string, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (string === arr[i].join(',')) {
        return true
      }
    }

    return false
  }

  // for (let i = 0; i < len - 2; i++) {
  //   for (let j = i+1; j < len - 1; j++) {
  //     for (let k = j+1; k < len; k++) {
  //       if (sortNums[i] + sortNums[j] + sortNums[k] === 0) {
  //         if (arrs.length === 0 || !inArrays(`${sortNums[i]},${sortNums[j]},${sortNums[k]}`, arrs)) {
  //           arrs.push([sortNums[i], sortNums[j], sortNums[k]])
  //         }
  //       }
  //     }
  //   }
  // }
  var appendNum = function(a, b, c) {
    if (arrs.length === 0 || !inArrays(`${a},${b},${c}`, arrs)) {
      arrs.push([a, b, c])
    }
  }

  var findNums = function(middleIndex) {
    for (let i = middleIndex - 1; i >= 0; i--) {
      for (let j = sortNums.length - 1; j > middleIndex; j--) {
        if (sortNums[middleIndex] + sortNums[i] + sortNums[j] === 0) {
          appendNum(sortNums[i], sortNums[middleIndex], sortNums[j])
        }
        if (sortNums[middleIndex] + sortNums[i] + sortNums[j] < 0) {
          break;
        }
      }
    }
  }

  for (let i = 1; i < sortNums.length - 1; i++) {
    findNums(i)
  }

  
  return arrs
};

// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))
console.log(threeSum([13,4,-6,-7,-15,-1,0,-1,0,-12,-12,9,3,-14,-2,-5,-6,7,8,2,-4,6,-5,-10,-4,-9,-14,-14,12,-13,-7,3,7,2,11,7,9,-4,13,-6,-1,-14,-12,9,9,-6,-11,10,-14,13,-2,-11,-4,8,-6,0,7,-12,1,4,12,9,14,-4,-3,11,10,-9,-8,8,0,-1,1,3,-15,-12,4,12,13,6,10,-4,10,13,12,12,-2,4,7,7,-15,-4,1,-15,8,5,3,3,11,2,-11,-12,-14,5,-1,9,0,-12,6,-1,1,1,2,-3]))


