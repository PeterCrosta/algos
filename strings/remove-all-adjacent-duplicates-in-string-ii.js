/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let changes = 1, arr = []
    const createArr = () => {
        // console.log(s, arr)
        arr = [s[0]]
        for (let i = 1; i < s.length; i++) {
            let lastEl = arr[arr.length-1][0]
            let char = s[i]
            if (char === lastEl) arr[arr.length-1] += char
            else arr.push(char)
        }
    }
    const makeStr = () => {
        s = ''
        changes = 0
        for (let str of arr) {
            let rem = str.length % k
            if (rem) s+= str.slice(0,rem)
            else changes++
        }
    }
    while (changes) {
        createArr()
        makeStr()
    }
    return s
};