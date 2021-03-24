var calculateTime = function(keyboard, word) {
    let map = new Map()
    let fPos = 0
    let time = 0
    for (let i = 0; i < 26; i++) map.set(keyboard[i],i)
    for (let char of word) {
        let nPos = map.get(char)
        time += Math.abs(fPos-nPos)
        fPos = nPos
    }
    return time
};