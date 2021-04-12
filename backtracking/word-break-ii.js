var wordBreak = function(s, wordDict) {
    const map = new Map(), res = []
    wordDict.forEach(word => {
        let first = word[0]
        if (map.has(first)) {
            let arr = map.get(first)
            arr.push(word)
            map.set(first,arr)
        } else map.set(first,[word])
    })
    const backtrack = (building =[], str = s) => {
        if (!str.length) {
            res.push(building.join(' '))
            return
        }
        const first = str[0]
        if (map.has(first)) {
            map.get(first).forEach(word => {
                const curr = str.slice(0,word.length)
                if (word === curr) {
                    building.push(word)
                    backtrack(building, str.slice(word.length))
                    building.pop()
                }
            })
        }
    }
    backtrack()
    return res
};