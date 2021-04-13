var deepestLeavesSum = function(root) {
    const sums = []
    const search = (node = root, level = 0) => {
        if (!node) return
        if (!sums[level]) sums[level] = 0;
        sums[level] += node.val
        search(node.left, level+1)
        search(node.right, level+1)
    }
    search()
    return sums[sums.length-1]
};

var deepestLeavesSum = function(root) {
    let sum = 0, q = [root];
    while (q.length) {
        const next = []
        let curr = 0
        for (let node of q) {
            curr+=node.val
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
        }
        sum = curr
        q = next
    }
    return sum
};