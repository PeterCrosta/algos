var frequencySort = function(s) {
    const map = new Map()
    for (let char of s) {
        if (map.has(char)) map.set(char,map.get(char)+1)
        else map.set(char,1)
    }
    const chars = [...map.entries()]
    chars.sort((a,b) => b[1]-a[1])
    const res = []
    chars.forEach(el => {
        for (let i = 0; i < el[1]; i++) res.push(el[0])
    })
    return res.join('')
};