
 //@param {string[]} strs
 //@return {string}

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    let long = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let el = strs[i];
        if (long === el.slice(0,long.length)) continue
        for (let j = 0; j < long.length; j++) {
            let c1 = long[j]
            let c2 = el[j]
            if (c1 !== c2) {
                long = long.slice(0,j)
                break
            }
        }
        if (long.length === 0) return ''
    }
    return long
};