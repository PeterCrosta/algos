var kClosest = function(points, k) {
    points.sort((a,b) => Math.sqrt(a[0]*a[0]+a[1]*a[1]) - Math.sqrt(b[0]*b[0]+b[1]*b[1]))
    return points.slice(0,k)
};