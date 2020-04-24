/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  
  const dp = new Array(amount + 1).fill(0)

  for (let i = 0; i < coins.length; i++) {
    for (let j = amount; j > 0 && coins[i] <= j; j--) {
      // 新硬币用几个
      for (let n = 1; n <= j && j - coins[i] * n >= 0; n++) {
        let index = j - coins[i] * n
        if (dp[index] !== 0 || index === 0) {
          let tmp = dp[index] + n

          if (dp[j] === 0) {
            dp[j] = tmp
          } else {
            dp[j] = dp[j] > tmp ? tmp : dp[j]
          }
        }
      }
    }
  }

  return dp[amount] !== 0 ? dp[amount] : -1

};

const result = coinChange([1,2,5], 11)
// const result = coinChange([4,5], 1)
// const result = coinChange([1], 0)
console.log(result)