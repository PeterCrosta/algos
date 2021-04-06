var partitionLabels = function(S) {
    const len = [], idxs = new Map()
    for (let i = 0; i < S.length; i++) idxs.set(S[i], i)
    
    for (let i = 0, end = 0, pEnd = 0; i < S.length; i++) {
        const char = S[i], lastIdx = idxs.get(char);
        if (end < lastIdx) end = lastIdx
        if (end === i) {
            len.push(i + 1 - pEnd)
            pEnd = i + 1
        }
    }
    return len
};