const findNum = (str, start) => {
    let num = ''
    for (let i = start; i < str.length; i++) {
        if (+str[i] || +str[i] === 0) num += str[i]
        else return {number: +num, len: num.length}
    }
}

const findNest = (str, start) => {
    let count = 0
    for (let i = start; i < str.length; i++) {
        if (str[i] === '[') count++
        else if (str[i] === ']') count--
        if (count === 0) return str.slice(start+1,i)
    }
}

var decodeString = function(s) {
    let retStr = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === ']') continue
        else if (!+s[i]) {
            retStr += s[i]
        }
        else if (+s[i]) {
            let rep = findNum(s,i)
            let nest = findNest(s,i+rep.len)
            for (let j = 0; j < rep.number; j++) {
                retStr += decodeString(nest)
            }
            i += nest.length + rep.len + 1
        }
    }
    return retStr
};