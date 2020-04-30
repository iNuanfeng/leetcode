/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Object(null)

  const changeAdd = function (num) {
    const arr = num.toString().split('')
    let count = 0
    arr.forEach(element => {
      count += element * element
    });

    if (map[count]) {
      return false
    } else if (count === 1) {
      return true
    } else {
      map[count] = count
      return changeAdd(count)
    }
  }

  return changeAdd(n)
};

console.log(isHappy(19))