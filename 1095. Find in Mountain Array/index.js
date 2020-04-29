/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  var isLeft = true

  var mapFun = function() {
    var obj = {}
    return function(index) {
      if (obj[index] === undefined) {
        obj[index] = mountainArr.get(index)
      }

      return obj[index]
    }
  }

  var map = mapFun()

  var binaryFind = function(start, end) {
    if (end - start <= 1) {
      return map(end) > map(start) ? end : start
    }

    if (end - start === 2) {
      let bigIndex = map(end) > map(start) ? end : start
      return map(end-1) > map(bigIndex) ? end - 1 : bigIndex
    }

    var middleIndex = parseInt((start + end) / 2)

    var before = parseInt((middleIndex + start) / 2)

    var next = parseInt((middleIndex + end) / 2)

    if (map(middleIndex) >= map(before) && map(middleIndex) >= map(next)) {
      return binaryFind(before, next)
    }

    if (map(next) > map(middleIndex) && map(next) > map(before)) {
      return binaryFind(next, end)
    }

    if (map(before) > map(middleIndex) && map(before) > map(next)) {
      return binaryFind(start, before)
    }
  }

  var findTarget = function(start, end) {
    var middleIndex = parseInt((start + end) / 2)

    if (end - start <= 1) {
      if (map(end) === target) {
        return end
      }
      if (map(start) === target) {
        return start
      }
      return -1
    }

    if (map(middleIndex) === target) {
      return middleIndex
    }
    
    if (map(middleIndex) > target) {

      let result

      if (isLeft) {
        result = findTarget(start, middleIndex)
      } else {
        result = findTarget(middleIndex, end)
      }
      if(result !== -1) {
        return result
      }
    }

    if (map(middleIndex) < target) {
      let result

      if (isLeft) {
        result = findTarget(middleIndex, end)
      } else {
        result = findTarget(start, middleIndex)
      }
      if(result !== -1) {
        return result
      }
    }

    return -1
  }

  let centerIndex =  binaryFind(0, mountainArr.length() - 1)
  let result1 = findTarget(0, centerIndex)
  isLeft = false
  let result2 = findTarget(centerIndex, mountainArr.length() - 1)

  if (result1 !== -1) {
    return result1
  }
  if (result2 !== -1) {
    return result2
  }
  return -1
};

function MountainArray(arr) {
  this.arr = arr
  this.get = function (index) {
    return this.arr[index]
  };

  this.length = function () {
    return this.arr.length
  };
};

var mountainArr = new MountainArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2])
console.log(findInMountainArray(1, mountainArr))