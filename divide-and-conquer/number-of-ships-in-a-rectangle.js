var countShips = function(sea, topRight, bottomLeft) {
    let set = new Set()
    const dAndC = (tR, bL) => {
        if (set.size === 10) return
        if (!sea.hasShips(tR,bL)) return
        if (tR[0] === bL[0] && tR[1] === bL[1]) {
            if (!set.has('x'+tR[0]+'x'+tR[1]+'x') && sea.hasShips(tR,bL)) {
                set.add('x'+tR[0]+'x'+tR[1]+'x')
                return
            } else return
        }
        let top = tR[1], bottom = bL[1], left = bL[0], right = tR[0]
        let midY = (bottom+(top-bottom)/2), midX = (left+(right-left)/2);
        dAndC([Math.floor(midX), top], [left, Math.ceil(midY)])
        dAndC([right, top], [Math.ceil(midX), Math.ceil(midY)])
        dAndC([Math.floor(midX), Math.floor(midY)], [left, bottom])
        dAndC([right, Math.floor(midY)], [Math.ceil(midX), bottom])
    }
    dAndC(topRight, bottomLeft)
    return set.size
};

// var countShips = function(sea, topRight, bottomLeft) {
//     let top = topRight[1], bottom = bottomLeft[1], cols = [], count = 0;
    
    
//     const findCols = (r, l) => {
            // if (cols.length === 10) return
//         if (!sea.hasShips([r,top],[l,bottom])) {
//             return
//         }
//         if (l === r) {
//             cols.push(l)
//             return
//         }
//         let mid = l + (r-l)/2
//         if (mid % 1 === 0) {
//             findCols(r,mid)
//             findCols(mid-1,l)
//         } else {
//             findCols(r,Math.ceil(mid))
//             findCols(Math.floor(mid),l)
//         }
//     }
//     const findShip = (col, t = top, b = bottom) => {
//         if (count === 10) return
//         if (!sea.hasShips([col,t],[col,b])) return
//         if (t === b) {
//             count++
//             return
//         }
//         let mid = b + (t-b)/2
//         if (mid % 1 === 0) {
//             findShip(col, t, mid)
//             findShip(col, mid-1, b)
//         } else {
//             findShip(col, t, Math.ceil(mid))
//             findShip(col, Math.floor(mid), b)
//         }
//     }
//     findCols(topRight[0],bottomLeft[0])
//     cols.forEach(col => findShip(col))
//     return count
// };