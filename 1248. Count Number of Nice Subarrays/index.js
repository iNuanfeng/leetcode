/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  var oddArray = []

  var filterOdd = function(nums) {
    nums.forEach((item, index) => {
      if (item % 2) {
        oddArray.push(index)
      }
    })
  }

  /**
   * 指定 oddArray 的开始结束下标，统计有多少种情况
   * @param {Number} start oddArray开始索引
   * @param {Number} end oddArray开始索引
   */
  var getBeautyCount = function(start, end) {
    // console.log(oddArray[start], oddArray[end])
    var rangeStart = start === 0 ? oddArray[start] + 1 : oddArray[start] - oddArray[start - 1]

    // console.log(rangeStart)
    var rangeEnd = end === oddArray.length - 1 ? nums.length - oddArray[end] : oddArray[end + 1] - oddArray[end]

    // console.log(rangeStart, rangeEnd)
    return rangeStart * rangeEnd
  }

  var getSubIndexArray = function(k) {
    var subIndexArray = []

    for (let i = 0; i + k - 1 < oddArray.length; i++) {
      subIndexArray.push({
        start: i,
        end: i + k - 1
      })
    }

    return subIndexArray
  }

  filterOdd(nums)
  // console.log(oddArray)

  var subIndexArray = getSubIndexArray(k)
  // console.log(subIndexArray)

  var count = 0

  subIndexArray.forEach(item => {
    count += getBeautyCount(item.start, item.end)
  })

  return count
};

console.log(numberOfSubarrays([1,1,2,1,1], 3))
console.log(numberOfSubarrays([2,4,6], 1))
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2))