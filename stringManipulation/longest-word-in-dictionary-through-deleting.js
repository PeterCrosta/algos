var findLongestWord = function(s, dictionary) {
    let longest = ''
    const compare = str => {
        let i = 0;
        for (const char of str) {
            i = s.indexOf(char,i)
            if (i === -1) return false
            i++
        }
        return true
    }
    dictionary.forEach(word => {
        if (compare(word)) {
            if (word.length > longest.length) longest = word
            else if (word.length === longest.length) {
                const hold = [word,longest]
                hold.sort()
                longest = hold[0]
            }
        }
    })
    return longest
};