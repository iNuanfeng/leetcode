/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let index1 = 0
  let index2 = 0
  let arr = []

  let len1 = nums1.length
  let len2 = nums2.length

  let count = len1 + len2

  while(count--) {
    if (index1 === len1) {
      arr.push(nums2[index2])
      index2++
      continue
    }

    if (index2 === len2) {
      arr.push(nums1[index1])
      index1++
      continue
    }

    if (nums1[index1] <= nums2[index2]) {
      arr.push(nums1[index1])
      index1++
    } else {
      arr.push(nums2[index2])
      index2++
    }
  }

  count = len1 + len2
  if (count % 2 === 1) {
    return arr[parseInt(count / 2)]
  } else {
    return (arr[parseInt((count / 2) - 1)] + arr[parseInt(count / 2)]) / 2
  }
};

console.log(findMedianSortedArrays([1,3,6], [2,8,9]))