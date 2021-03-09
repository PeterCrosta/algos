var reachingPoints = function(x1, y1, x2, y2) {
    while (y2 >= y1 && x2 >= x1) {
        if (y2 > x2) {
            if (x2 > x1) y2 %= x2
            else return (y2 - y1) % x2 === 0
        } else {
            if (y2 > y1) x2 %= y2
            else return (x2 - x1) % y2 === 0
        }
    }
    return x1 === x2 && y1 === y2 
};