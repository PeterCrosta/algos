var removeDuplicates = function(s, k) {
    let changes = 1;
    const remove = () => {
        let i = 0, j = 0, str = '';
        changes = 0
        while (j <= s.length) {
            let el1 = s[i], el2 = s[j];
            if (el1 !== el2) {
                let subStr = s.slice(i, i+((j-i)%k))
                str += subStr
                if (subStr.length !== j - i) changes++
                i = j
            } else j++
        }
        s = str
    }
    while (changes) {
        remove()
    }
    return s
};

// var removeDuplicates = function(s, k) {
//     let changes = 1, arr = []
//     const createArr = () => {
//         // console.log(s, arr)
//         arr = [s[0]]
//         for (let i = 1; i < s.length; i++) {
//             let lastEl = arr[arr.length-1][0]
//             let char = s[i]
//             if (char === lastEl) arr[arr.length-1] += char
//             else arr.push(char)
//         }
//     }
//     const makeStr = () => {
//         s = ''
//         changes = 0
//         for (let str of arr) {
//             let rem = str.length % k
//             if (rem) s+= str.slice(0,rem)
//             else changes++
//         }
//     }
//     while (changes) {
//         createArr()
//         makeStr()
//     }
//     return s
// };