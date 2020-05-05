/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = []
  let preOrder = function(root) {
    if (root) {
      preOrder(root.left)
      arr.push(root.val)
      preOrder(root.right)
    }
  }
  preOrder(root)

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i+1]) {
      return false
    }
  }

  return true
};

let tree1 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

let tree2 = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}
console.log(isValidBST(tree2))