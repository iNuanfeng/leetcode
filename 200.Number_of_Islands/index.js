/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0
  }

  var height = grid.length
  var width = grid[0].length
  var visited = []
  var count = 0
  
  var initVisited = function() {
    for (let i = 0; i < height; i++) {
      visited.push([])
      for (let j = 0; j < width; j++) {
        visited[i].push(false)
      }
    }
  }

  var startDfs = function(y, x) {
    if (visited[y][x] || grid[y][x] === '0') {
      return
    }

    // 上右下左 深度遍历
    visited[y][x] = true

    // 上
    if (y - 1 >= 0) {
      startDfs(y - 1, x)
    }

    // 右
    if (x + 1 < width) {
      startDfs(y, x + 1)
    }

    // 下
    if (y + 1 < height) {
      startDfs(y + 1, x)
    }

    // 左
    if (x - 1 >= 0) {
      startDfs(y, x - 1)
    }
  }

  var start = function() {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {

        if (!visited[i][j] && grid[i][j] === '1') {
          count++
          startDfs(i, j)
        }
      }
    }
  }

  initVisited()
  start()

  return count
};

// console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))