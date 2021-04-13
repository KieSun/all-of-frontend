// 递归版
var reverseList = function(head) {
    const dummy = new ListNode()
    return reverse(head, dummy).next
};

function reverse (head, dummy) {
    if (!head) return dummy
    const tmp = head.next
    head.next = dummy.next
    dummy.next = head
    head = tmp
    return reverse(head, dummy)
}

// 迭代版

var reverseList = function(head) {
    const dummy = new ListNode()
    while (head) {
      const tmp = head.next
      head.next = dummy.next
      dummy.next = head
      head = tmp
    }
    return dummy.next
};