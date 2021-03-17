var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        let node = new TreeNode(val, root)
        return node
  }
  const recurse = (d, cNode) => {
    if (!cNode) return
    if (d === depth-1) {
      let lNode = new TreeNode(val, cNode.left)
      let rNode = new TreeNode(val, null, cNode.right)
      cNode.left = lNode
      cNode.right = rNode
      return
    } else {
      recurse(d+1, cNode.left)
      recurse(d+1, cNode.right)
    }
  }
  recurse(1, root)
  return root
};