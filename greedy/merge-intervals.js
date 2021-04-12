var merge = function(intervals) {
    intervals.sort((a,b) => {
        if (a[0] !== b[0]) return a[0]-b[0]
        else return a[1]-b[1]
    })
    const res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const el1 = res[res.length - 1], el2 = intervals[i];
        if (el1[1] >= el2[0]) el1[1] = Math.max(el2[1],el1[1])
        else res.push(el2)
    } 
    return res
};