var verticalOrder = function(root) {
    if (!root) return []
    const vals = [], q = [];
    let l = 0
    const findLeft = (node = root, col = 0) => {
        if (!node) return
        l = Math.min(l,col)
        findLeft(node.left,col-1)
        findLeft(node.right,col+1)
    }
    findLeft()
    l*=-1
    let p = 0;
    q[0] = {node: root, col: l}
    while (p < q.length) {
        const el = q[p]
        if (vals[el.col]) vals[el.col].push(el.node.val)
        else vals[el.col] = [el.node.val]
        if (el.node.left) q.push({node: el.node.left, col: el.col-1})
        if (el.node.right) q.push({node: el.node.right, col: el.col+1})
        p++
    }
    return vals
};