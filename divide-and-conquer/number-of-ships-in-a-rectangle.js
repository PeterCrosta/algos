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