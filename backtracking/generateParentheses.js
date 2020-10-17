// first submission

/**
 * @param {number} n
 * @return {string[]}
 */
// const makeEnd = n => {
//     let par = ''
//     for (let i = 1; i <= n; i++) {
//         par = '('+par
//         par = par+')'
//     }
//     return par
// }

// const makeStart = n => {
//     let start = ''
//     for (let i = 0; i < n; i++) start += '()'
//     return start
// }

// var generateParenthesis = function(n, start = makeStart(n), end = makeEnd(n), all = new Set([start])) {
//     if (start === end) return [...all.values()]
//     let mov = start.slice(0,2)
//     let still = start.slice(2)
//     for (let i = 1; i < still.length; i++) {
//         let str = still.slice(0,i) + mov + still.slice(i)
//         if (all.has(str)) continue
//         all.add(str)
//         if (str.slice(0,2) === '()') generateParenthesis(n, str, end, all)
//     }
//     return [...all.values()]
// };

// PROPER BACKTRACKING MEATHOD

var generateParenthesis = function(n) {
    let ans = []
    const bT = (s = '', l = 0, r = 0) => {
        if (s.length === 2 * n) {
            ans.push(s)
            return
        }
        if (l < n) bT(s+'(', l + 1, r)
        if (r < l) bT(s+')', l, r+1)
    }
    bT()
    return ans
};