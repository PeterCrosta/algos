var twoCitySchedCost = function(costs) {
    let total = 0
    costs.sort((a,b) => (a[0]-a[1]) - (b[0]-b[1]))
    for (let i = 0; i < costs.length/2; i++) total+=costs[i][0]
    for (let j = costs.length/2; j < costs.length; j++) total += costs[j][1]
    return total
};