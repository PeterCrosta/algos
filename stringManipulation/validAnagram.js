var isAnagram = function(s, t) {
    let chars = new Map()
    for (let i = 0; i < s.length; i++) {
        let el = s[i]
        if (chars.has(el)) {
            let count = chars.get(el)
            chars.set(el, count+1)
        } else chars.set(el,1)
    }
    for (let j = 0; j < t.length; j++) {
        let el = t[j]
        if (chars.has(el)) {
            let count = chars.get(el)
            if (count === 1) chars.delete(el)
            else chars.set(el, count-1)
        } else return false
    }
    return chars.size > 0 ? false : true
};