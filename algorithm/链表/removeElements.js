var removeElements = function(head, val) {
    const dummy = new ListNode()
    let node = dummy
    while (head) {
        const tmp = head.next
        if (head.val !== val) {
            node.next = head
            node = head
        }
        head = tmp
    }
    node.next = null
    return dummy.next
};

