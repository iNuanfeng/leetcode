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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head');
  let temp = node;//哑结点
  let add = 0;//是否进一
  let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

  //遍历，直到最长的都为空
  while(l1 || l2){
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
      temp.next = new ListNode(sum % 10);//取余则为新链表的值
      temp = temp.next;
      add = sum >= 10 ? 1 : 0;
      l1 && (l1 = l1.next);
      l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return node.next;
};

console.log(addTwoNumbers({val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }}, {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 4,
        next: null
      }
    }
  }))