/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let list = {}
  let targetNode
  let sourceNode

  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1 && l2) {
    list = l1.val <= l2.val ? l1 : l2
    if (l1.val <= l2.val) {
      list = l1
      sourceNode = l2
    } else {
      list = l2
      sourceNode = l1
    }

    targetNode = list

  }
  
  while(targetNode !== null && sourceNode !== null) {
    if (sourceNode === null) {
      break;
    }

    if (targetNode.next === null) {
      targetNode.next = sourceNode
      break
    }

    if (sourceNode.val < targetNode.next.val) {
      let tmp = targetNode.next
      targetNode.next = sourceNode
      targetNode = targetNode.next
      sourceNode = tmp
      console.log(JSON.stringify(list))
      console.log(JSON.stringify(targetNode))
      console.log(JSON.stringify(sourceNode))

      // console.log(JSON.stringify(list))
      // targetNode = targetNode.next
      // console.log(JSON.stringify(list))
    } else {
      if (targetNode.next.next === null) {
        targetNode.next.next = sourceNode
        break
      } else {
        targetNode = targetNode.next
      }
    }


  }

  return list

  console.log(JSON.stringify(list))
};

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(mergeTwoLists(l1, l2))