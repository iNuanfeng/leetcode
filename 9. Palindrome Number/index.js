/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const arr = x.toString().split('')
  for (let i = 0; i < arr.length; i++) {
    if (i >= arr.length - i - 1) {
      return true
    }
    if (arr[i] !== arr[arr.length-i-1]) {
      return false
    }
    
  }
};

console.log(isPalindrome(123421))