var connect = function(root) {
    if (!root) return null
    let q = [root]
    while (q.length) {
        let next = []
        for (let i = 0; i < q.length; i++) {
            let node = q[i]
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
            if (q[i+1]) node.next = q[i+1]
        }
        q = next
    }
    return root
};