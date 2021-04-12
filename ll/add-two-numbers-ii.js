var addTwoNumbers = function(l1, l2) {
    let n1 = [], n2=[], p1 = l1, p2 = l2, newHead;
    while (p1) {
        n1.push(p1.val)
        p1=p1.next
    }
    while (p2) {
        n2.push(p2.val)
        p2=p2.next
    }
    const arr1 = n1.length > n2.length ? n1 : n2
    const arr2 = n1.length > n2.length ? n2 : n1
    p1 = arr1.length - 1, p2 = arr2.length - 1
    let rem = 0;
    while (p1 >= 0) {
        let el1 = arr1[p1], el2 = arr2[p2] ? arr2[p2] : 0
        let sum = el1+el2+rem
        if (sum > 9) {
            arr1[p1] = sum - 10
            rem = 1
        } else {
            arr1[p1] = sum
            rem = 0
        }
        p1--
        p2--
    }
    if (rem) newHead = new ListNode(1)
    else newHead = new ListNode(arr1[0])
    p1 = newHead
    for (let i = rem ? 0 : 1; i < arr1.length; i++) {
        const currNode = new ListNode(arr1[i])
        p1.next = currNode
        p1 = currNode
    }
    return newHead
};