var WordFilter = function(words) {
    this.dic = words
    this.memo = new Map()
};


WordFilter.prototype.f = function(prefix, suffix) {
    const k = `${prefix}x${suffix}`
    if (this.memo.has(k)) return this.memo.get(k)
    for (let i = this.dic.length - 1; i >= 0; i--) {
        const word = this.dic[i], front = word.slice(0,prefix.length), end = word.slice(-suffix.length)
        if (front === prefix && end === suffix) {
            this.memo.set(k,i)
            return i
        }
    }
    this.memo.set(k,-1)
    return -1
};