/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var times = 0

  var success = false

  var findMap = {}

  function findResult(coins, amounts) {
    times++

    var caseArr = []

    for (var i = 0; i < amounts.length; i++) {
      for (var j = 0; j < coins.length; j++) {

        var leave = amounts[i] - coins[j]

        if (leave === 0) {
          success = true
          return
        }

        if (leave > 0) {
          if (!findMap[leave]) {
            findMap[leave] = 'finding'
            caseArr.push(leave)
          }
        }

        
      }
    }

    if (caseArr.length > 0) {
      findResult(coins, caseArr)
    }

    
    if (success) {
      return
    }
  }

  if (amount === 0) {
    return 0
  }

  findResult(coins, [amount])

  if (success) {
    return times
  } else {
    return -1
  }

};



/**
 * test
 */

// const result = coinChange([1,2,5], 11)
const result = coinChange([1], 0)
console.log(result)