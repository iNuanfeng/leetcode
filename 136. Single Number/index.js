/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Object(null)
  nums.forEach(item => {
    if (!map[item]) {
      map[item] = true
    } else {
      delete map[item]
    }
  })
  return Number(Object.keys(map)[0])
  
};

console.log(singleNumber([4,1,2,1,2]))