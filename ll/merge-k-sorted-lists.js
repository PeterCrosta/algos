// var mergeKLists = function(lists) {
//     if (!lists.length) return null
//     const pointers = new Map(), newHead = new ListNode(null);
//     let low = 1, p = newHead;
//     for (let i = 0; i < lists.length; i++) {
//         if (lists[i]) pointers.set(i,lists[i])
//     }
//     if (!pointers.size) return null
//     while (low !== Infinity) {
//         let curr, k;
//         low = Infinity
//         pointers.forEach((node, key) => {
//             if (node.val < low) {
//                 low = node.val
//                 curr = node
//                 k = key
//             }
//         })
//         if (curr) {
//             p.next = curr
//             p = p.next
//             let temp = pointers.get(k)
//             if (temp.next) pointers.set(k,temp.next)
//             else pointers.delete(k)
//         }
//     }
//     return newHead.next
// };

var mergeKLists = function(lists) {
    if (!lists.length) return null
    const nodes = []
    lists.forEach(list => {
        let p = list
        while (p) {
            nodes.push(p)
            p = p.next
        }
    })
    if (!nodes.length) return null
    nodes.sort((a,b) => a.val-b.val)
    const newHead = nodes[0]
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i+1]
    nodes[nodes.length-1].next = null
    return newHead
};