/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) return []

  let result = []

  let dfs = function(arr, index) {
    if (arr.length === nums.length) {
      result.push(JSON.parse(JSON.stringify(arr)))
      return
    }

    for (let i = 0; i <= arr.length; i++) {
      let _arr = JSON.parse(JSON.stringify(arr))
      let cur = nums[index]
      console.log(cur)
      _arr.splice(i, 0, cur)
      console.log('_arr', _arr)

      dfs(_arr, index+1)
    }
  }

  dfs([], 0)
  return result
};

console.log(permute([1, 2, 3, 4]))