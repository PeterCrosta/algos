/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return head
    let nH = new ListNode(null, head)
    let a1 = nH
    let p1 = head
    let p2 = head ? head.next : null
    let a2 = p2 ? p2.next : null
    while (p1 && p2) {
        a1.next = p2
        p2.next = p1
        p1.next = a2
        a1 = p1
        p1 = a2
        p2 = p1 ? p1.next : null
        a2 = p2 ? p2.next : null
    }
    return nH.next
};

//55th speed 56th space