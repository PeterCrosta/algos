var fractionAddition = function(expression) {
    let fractions = [];
    let i = 0, j = 1;
    let top = 0, bottom = 0;
    const findCD = n => {
        for (let i = Math.min(n,bottom); i <= n*bottom; i++) {
            if (i % n === 0 && i % bottom === 0) {
                return i
            }
        }
        return n*bottom
    }
    const add = str => {
        const idx = str.indexOf('/')
        let num = str.slice(0,idx)
        let den = str.slice(idx+1)
        const cd = findCD(den)
        top = top*(cd/bottom)
        num = num*(cd/den)
        top += num
        bottom = cd
    }
    while (j < expression.length) { // Create our fractions
        const curr = expression[j]
        if (curr === '+' || curr === '-') {
            fractions.push(expression.slice(i,j))
            i = j
        }
        j++
    }
    fractions.push(expression.slice(i,j))
    i = fractions[0].indexOf('/')
    top = +fractions[0].slice(0,i)
    bottom = +fractions[0].slice(i+1)
    for (let k = 1; k < fractions.length; k++) add(fractions[k])
    if (top === 0) return '0/1'
    i = Math.min(Math.abs(top), bottom);
    while (i > 1) {
        if (top % i === 0 && bottom % i === 0) {
            top /= i
            bottom /= i
        }
        i--
    }
    return `${top}/${bottom}`
};