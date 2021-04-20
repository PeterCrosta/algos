var calcEquation = function(equations, values, queries) {
    const neigh = {}
    equations.forEach(([num,denom], idx) => {
        neigh[num] = neigh[num] || []
        neigh[num].push([denom, values[idx]])
        
        neigh[denom] = neigh[denom] || []
        neigh[denom].push([num, 1/values[idx]])
    })
    const eval = (pair) => {
        const [num, denom] = pair
        if (!neigh[num] || !neigh[denom]) return -1
        if (num === denom) return 1
        const q = neigh[num].slice(), set = new Set()
        let i = 0
        while (i < q.length) {
            const [char, val] = q[i]
            if (char === denom) return val
            set.add(char)
            const next = neigh[char]
            next.forEach(([nChar, nVal]) => {
                if (set.has(nChar)) return
                q.push([nChar,nVal*val])
            })
            i++
        }
        return -1
    }
    const res = []
    queries.forEach(eq => {
        res.push(eval(eq))
    })
    return res
};