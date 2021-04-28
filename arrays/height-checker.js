var heightChecker = function(heights) {
    const sortedHeights = heights.slice()
    let count = 0
    sortedHeights.sort((a,b) => a-b)
    for (let i = 0; i < heights.length; i++) if (heights[i] !== sortedHeights[i]) count++
    return count
};