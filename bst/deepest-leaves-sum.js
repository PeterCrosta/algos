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