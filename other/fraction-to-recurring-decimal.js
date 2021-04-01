var fractionToDecimal = function(numerator, denominator) {
    if (!numerator) return '0'
    let str = ''
    if (Math.sign(numerator) !== Math.sign(denominator)) str += '-'
    let n = Math.abs(numerator)
    const d = Math.abs(denominator)
    str += Math.floor(n/d)
    n %= d
    if (!n) return str
    str += '.'
    const map = new Map()
    while (n) {
        map.set(n,str.length)
        n *= 10
        str += Math.floor(n/d)
        n %= d
        const idx = map.get(n)
        if (idx) return `${str.slice(0,idx)}(${str.slice(idx)})`
    }
    return str
};