// var invertTree = function(root) {
//     if (!root) return root
//     const travers = (node = root) => {
//         if (!node) return
//         const rHold = node.right
//         node.right = node.left
//         node.left = rHold
//         travers(node.left)
//         travers(node.right)
//     }
//     travers()
//     return root
// };

var invertTree = function(root) {
    if (!root) return root
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
        const rHold = node.right
        node.right = node.left
        node.left = rHold
    }
    return root
};