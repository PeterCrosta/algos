var invertTree = function(root) {
    if (!root) return root
    const travers = (node = root) => {
        if (!node) return
        const rHold = node.right
        node.right = node.left
        node.left = rHold
        travers(node.left)
        travers(node.right)
    }
    travers()
    return root
};