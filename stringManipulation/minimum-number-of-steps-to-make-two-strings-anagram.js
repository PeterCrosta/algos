var minSteps = function(s, t) {
    const sMap = {}, tMap = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const el1 = s[i], el2 = t[i]
        if (sMap[el1]) sMap[el1]++
        else sMap[el1] = 1
        if (tMap[el2]) tMap[el2]++
        else tMap[el2] = 1
    }
    for (const char in sMap) {
        const need = sMap[char], has = tMap[char] ? tMap[char] : 0, diff = need - has;
        count += (diff >= 0 ? diff : 0)
    }
    return count
};