var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    if (set.size < candyType.length/2) return set.size
    else return candyType.length/2
};