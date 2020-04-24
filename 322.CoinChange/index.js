/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0

  const dp = new Array(amount + 1).fill(0)

  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (coins[i] <= j) {
        let index = j - coins[i]

        if (index === 0) {
          dp[j] = 1
        } else {
          if (dp[index] !== 0) {
            dp[j] = (dp[index] < dp[j] || dp[j] === 0) ? dp[index] + 1 : dp[j]
          }
        }
      }
    }
  }

  return dp[amount] !== 0 ? dp[amount] : -1

};

// const result = coinChange([1, 2, 5], 11)
const result = coinChange([1,2,5,10], 18)
// const result = coinChange([1], 0)
console.log(result)