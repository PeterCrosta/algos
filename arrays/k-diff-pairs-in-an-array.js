var findPairs = function(nums, k) {
    const set = new Set(nums)
    const pairs = new Set()
    if (!k) {
        for (let n of nums) {
            if (set.has(n)) set.delete(n)
            else pairs.add(n)
        }
        return pairs.size
    }
    set.forEach(n => {
        const l = (k-n)*-1
        if (set.has(l)) {
            let h = Math.max(l,n)
            let low = Math.min(l,n)
            pairs.add(`${h}x${low}`)
        }
    })

    return pairs.size
};