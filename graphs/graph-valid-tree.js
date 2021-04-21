var validTree = function(n, edges) {
    if (n === 1) return true
    if (!edges.length) return false
    const graph = new Array(), map = new Map([[0,-1]]), stack = [0]
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }
    edges.forEach(([el1,el2]) => {
        graph[el1].push(el2)
        graph[el2].push(el1)
    })
    while (stack.length) {
        let node = stack.pop()
        for (let n of graph[node]) {
            if (map.get(node) === n) continue
            if (map.has(n)) return false
            stack.push(n)
            map.set(n, node)
        }
    }
    return map.size === n
};