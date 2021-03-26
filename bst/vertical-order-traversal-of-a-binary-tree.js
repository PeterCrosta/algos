var verticalTraversal = function(root) {
    let map = new Map()
    const bs = (node = root, col = 0, row = 0) => {
        if (map.has(col)) {
            let arr = map.get(col)
            if (arr[row]) arr[row].push(node.val)
            else arr[row] = [node.val]
            map.set(col,arr)
        } else {
            let arr = []
            arr[row] = [node.val]
            map.set(col,arr)
        }
        if (node.left) bs(node.left, col-1, row+1)
        if (node.right) bs(node.right, col+1, row+1)
    }
    bs()
    let retArr = []
    map.forEach((val, key) => {
        let el = []
        for (let group of val) {
            if (!group) continue
            group.sort((a,b) => a-b)
            el = el.concat(group)
        }
        if (key < 0) retArr.unshift(el)
        else retArr.push(el)
    })
    return retArr
};